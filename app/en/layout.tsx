import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import { getRequestBaseUrl, OG_IMAGE_VERSION } from "@/lib/site-config"

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getRequestBaseUrl()
  const ogImage = `${baseUrl}/images/vistacampo-capture.png?v=${OG_IMAGE_VERSION}`

  return {
    title: "Vistacampo - Addiction Rehabilitation Center in Colonia Tovar",
    description:
      "Specialized addiction rehabilitation center in Colonia Tovar, Venezuela. We offer comprehensive medical treatment and personalized therapy for your recovery.",
    keywords:
      "addiction rehabilitation, detox, therapy, Colonia Tovar, Venezuela, treatment, recovery center",
    authors: [{ name: "Vistacampo" }],
    alternates: {
      canonical: `${baseUrl}/en/`,
      languages: {
        es: `${baseUrl}/es/`,
        en: `${baseUrl}/en/`,
        "x-default": `${baseUrl}/es/`,
      },
    },
    openGraph: {
      title: "Recovery is possible | Vistacampo",
      description:
        "Medical, psychological, and family treatment in a private, warm, and professional setting to begin a real recovery with dignity.",
      siteName: "Vistacampo",
      locale: "en_US",
      type: "website",
      url: `${baseUrl}/en/`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Vistacampo - Recovery is possible",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Recovery is possible | Vistacampo",
      description:
        "Medical, psychological, and family treatment in a private, warm, and professional setting to begin a real recovery with dignity.",
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

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <FloatingWhatsAppButton locale="en" />
    </>
  )
}
