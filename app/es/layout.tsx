import type { Metadata } from "next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

export const metadata: Metadata = {
  title: "Vistacampo - Centro de Rehabilitación de Adicciones en Colonia Tovar",
  description:
    "Centro especializado en rehabilitación de adicciones en Colonia Tovar. Ofrecemos tratamiento médico integral y terapia personalizada para tu recuperación.",
  keywords: "rehabilitación, adicciones, desintoxicación, Colonia Tovar, Venezuela, tratamiento, terapia, centro de rehabilitación",
  authors: [{ name: "Vistacampo" }],
  openGraph: {
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description:
      "Centro especializado en rehabilitación de adicciones en Colonia Tovar. Ofrecemos tratamiento médico integral y terapia personalizada para tu recuperación.",
    siteName: "Vistacampo",
    locale: "es_VE",
    type: "website",
    images: ["/images/og-hero-with-text.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistacampo - Centro de Rehabilitación de Adicciones",
    description:
      "Centro especializado en rehabilitación de adicciones en Colonia Tovar. Ofrecemos tratamiento médico integral y terapia personalizada para tu recuperación.",
    images: ["/images/og-hero-with-text.jpg"],
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
