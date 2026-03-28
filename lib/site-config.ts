export const DEFAULT_SITE_URL = "https://vistacampo-redesign-4r.vercel.app"
export const OG_IMAGE_VERSION = "20260328"

export function getBaseUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    DEFAULT_SITE_URL

  return siteUrl.replace(/\/$/, "")
}
