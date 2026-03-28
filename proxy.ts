import { NextResponse, type NextRequest } from "next/server";

const locales = ["es", "en"] as const;
const defaultLocale = "es";

function getLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language") || "";
  const preferred = header.split(",").map((p) => p.split(";")[0].trim().toLowerCase());
  for (const p of preferred) {
    const base = p.split("-")[0];
    if (locales.includes(base as (typeof locales)[number])) return base;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/locales")
  ) {
    return;
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) {
    const requestHeaders = new Headers(request.headers)
    const locale = pathname.split("/")[1] || defaultLocale

    requestHeaders.set("x-vistacampo-locale", locale)
    requestHeaders.set("x-vistacampo-pathname", pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  const detected = getLocale(request);
  const locale = locales.includes(detected as (typeof locales)[number])
    ? detected
    : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("Cache-Control", "public, max-age=31536000, immutable");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico|robots.txt|sitemap.xml|images|placeholder.*|locales).*)",
  ],
};
