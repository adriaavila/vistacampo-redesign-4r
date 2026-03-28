import { headers } from "next/headers"

export const DEFAULT_SITE_URL = "https://vistacampo-redesign-4r.vercel.app"
export const OG_IMAGE_VERSION = "20260328c"

export function getBaseUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    DEFAULT_SITE_URL

  return siteUrl.replace(/\/$/, "")
}

export async function getRequestBaseUrl() {
  const requestHeaders = await headers()
  const forwardedHost = requestHeaders.get("x-forwarded-host")
  const host = forwardedHost || requestHeaders.get("host")

  if (!host) {
    return getBaseUrl()
  }

  const proto =
    requestHeaders.get("x-forwarded-proto") ||
    (host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https")

  return `${proto}://${host}`.replace(/\/$/, "")
}
