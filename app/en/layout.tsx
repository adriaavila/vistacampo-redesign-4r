import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import { OG_IMAGE_VERSION } from "@/lib/site-config"

const ogImage = `/en/opengraph-image/?v=${OG_IMAGE_VERSION}`

export const metadata: Metadata = {
  title: "Vistacampo - Addiction Rehabilitation Center in Colonia Tovar",
  description:
    "Specialized addiction rehabilitation center in Colonia Tovar, Venezuela. We offer comprehensive medical treatment and personalized therapy for your recovery.",
  keywords:
    "addiction rehabilitation, detox, therapy, Colonia Tovar, Venezuela, treatment, recovery center",
  authors: [{ name: "Vistacampo" }],
  alternates: {
    canonical: "/en/",
    languages: {
      es: "/es/",
      en: "/en/",
      "x-default": "/es/",
    },
  },
  openGraph: {
    title: "Recovery is possible | Vistacampo",
    description:
      "Medical, psychological, and family treatment in a private, warm, and professional setting to begin a real recovery with dignity.",
    siteName: "Vistacampo",
    locale: "en_US",
    type: "website",
    url: "/en/",
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
