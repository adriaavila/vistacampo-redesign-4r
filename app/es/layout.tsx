import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import { OG_IMAGE_VERSION } from "@/lib/site-config"

const ogImage = `/es/opengraph-image/?v=${OG_IMAGE_VERSION}`

export const metadata: Metadata = {
  title: "Vistacampo - Centro de Rehabilitación de Adicciones en Colonia Tovar",
  description:
    "Centro especializado en rehabilitación de adicciones en Colonia Tovar. Ofrecemos tratamiento médico integral y terapia personalizada para tu recuperación.",
  keywords: "rehabilitación, adicciones, desintoxicación, Colonia Tovar, Venezuela, tratamiento, terapia, centro de rehabilitación",
  authors: [{ name: "Vistacampo" }],
  alternates: {
    canonical: "/es/",
    languages: {
      es: "/es/",
      en: "/en/",
      "x-default": "/es/",
    },
  },
  openGraph: {
    title: "Recuperar tu vida es posible | Vistacampo",
    description:
      "Tratamiento médico, psicológico y familiar en un entorno privado, cálido y profesional para iniciar una recuperación real con dignidad.",
    siteName: "Vistacampo",
    locale: "es_VE",
    type: "website",
    url: "/es/",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Vistacampo - Recuperar tu vida es posible",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recuperar tu vida es posible | Vistacampo",
    description:
      "Tratamiento médico, psicológico y familiar en un entorno privado, cálido y profesional para iniciar una recuperación real con dignidad.",
    images: [ogImage],
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
