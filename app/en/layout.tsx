import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

export const metadata: Metadata = {
  title: "Vistacampo - Addiction Rehabilitation Center in Colonia Tovar",
  description:
    "Specialized addiction rehabilitation center in Colonia Tovar, Venezuela. We offer comprehensive medical treatment and personalized therapy for your recovery.",
  keywords:
    "addiction rehabilitation, detox, therapy, Colonia Tovar, Venezuela, treatment, recovery center",
  authors: [{ name: "Vistacampo" }],
  openGraph: {
    title: "Recovery is possible | Vistacampo",
    description:
      "Medical, psychological, and family treatment in a private, warm, and professional setting to begin a real recovery with dignity.",
    siteName: "Vistacampo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/en/opengraph-image/",
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
    images: ["/en/opengraph-image/"],
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
