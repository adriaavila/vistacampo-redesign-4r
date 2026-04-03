import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import { getRequestBaseUrl, OG_IMAGE_VERSION } from "@/lib/site-config"

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getRequestBaseUrl()
  const ogImage = `${baseUrl}/images/vistacampo-capture.png?v=${OG_IMAGE_VERSION}`

  return {
    title: "Vistacampo - Centro de Rehabilitación de Adicciones en Colonia Tovar",
    description:
      "Centro especializado en rehabilitación de adicciones en Colonia Tovar. Ofrecemos tratamiento médico integral y terapia personalizada para tu recuperación.",
    keywords:
      "rehabilitación, adicciones, desintoxicación, Colonia Tovar, Venezuela, tratamiento, terapia, centro de rehabilitación",
    authors: [{ name: "Vistacampo" }],
    alternates: {
      canonical: `${baseUrl}/es/`,
      languages: {
        es: `${baseUrl}/es/`,
        en: `${baseUrl}/en/`,
        "x-default": `${baseUrl}/es/`,
      },
    },
    openGraph: {
      title: "Recuperar tu vida es posible | Vistacampo",
      description:
        "Tratamiento médico, psicológico y familiar en un entorno privado, cálido y profesional para iniciar una recuperación real con dignidad.",
      siteName: "Vistacampo",
      locale: "es_VE",
      type: "website",
      url: `${baseUrl}/es/`,
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
