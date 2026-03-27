import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

export const metadata: Metadata = {
  title: "Vistacampo - Addiction Rehabilitation Center in Colonia Tovar",
  description:
    "Specialized center for addiction treatment in Colonia Tovar, Venezuela. Medical detox, individual therapy, and group therapy in a safe and confidential setting.",
  keywords:
    "addiction rehabilitation, detox, therapy, Colonia Tovar, Venezuela, treatment, recovery center",
  authors: [{ name: "Vistacampo" }],
  openGraph: {
    title: "Vistacampo - Addiction Rehabilitation Center",
    description: "Comprehensive and confidential addiction treatment in Colonia Tovar, Venezuela.",
    url: "https://vistacampo.com/en",
    siteName: "Vistacampo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-hero.png",
        width: 1200,
        height: 630,
        alt: "Vistacampo - Addiction Rehabilitation Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistacampo - Addiction Rehabilitation Center",
    description: "Comprehensive and confidential addiction treatment in Colonia Tovar, Venezuela.",
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
