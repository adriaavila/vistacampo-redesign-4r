import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

export const metadata: Metadata = {
  title: "Vistacampo - Centro de Rehabilitación de Adicciones en Colonia Tovar",
  description: "Centro especializado en tratamiento de adicciones en Colonia Tovar, Venezuela. Ofrecemos desintoxicación médica, terapia individual y grupal en un ambiente seguro y confidencial.",
  keywords: "rehabilitación, adicciones, desintoxicación, Colonia Tovar, Venezuela, tratamiento, terapia, centro de rehabilitación",
  authors: [{ name: "Vistacampo" }],
  metadataBase: new URL("https://vistacampo.com"),
  openGraph: {
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description: "Tratamiento integral and confidencial para adicciones en Colonia Tovar, Venezuela.",
    url: "https://vistacampo.com/es",
    siteName: "Vistacampo",
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/images/og-hero.png",
        width: 1200,
        height: 630,
        alt: "Vistacampo - Centro de Rehabilitación de Adicciones en Colonia Tovar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description: "Tratamiento integral y confidencial para adicciones en Colonia Tovar, Venezuela.",
    images: ["/images/og-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <FloatingWhatsAppButton locale="es" />
    </>
  )
}
