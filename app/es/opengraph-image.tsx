import { ogImageContentType, ogImageSize, renderVistacampoOgImage } from "@/lib/vistacampo-og-image"

export const alt = "Vistacampo - Recuperar tu vida es posible"
export const size = ogImageSize
export const contentType = ogImageContentType

export default async function Image() {
  return renderVistacampoOgImage("es")
}
