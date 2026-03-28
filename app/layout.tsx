import type React from "react"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { DM_Sans, Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { locales, defaultLocale, type Locale } from "./i18n"
import { I18nProvider } from "./i18n-provider"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { getRequestBaseUrl, OG_IMAGE_VERSION } from "@/lib/site-config"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  preload: true,
})

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getRequestBaseUrl()
  const ogImage = `${baseUrl}/images/og-share-card.jpg?v=${OG_IMAGE_VERSION}`

  return {
    metadataBase: new URL(baseUrl),
    title: "Vistacampo - Centro de Rehabilitación de Adicciones en Colonia Tovar",
    icons: {
      icon: "/vistacampo-favicon.png",
    },
    description:
      "Centro especializado en rehabilitación de adicciones en Colonia Tovar. Ofrecemos tratamiento médico integral y terapia personalizada para tu recuperación.",
    keywords:
      "rehabilitación, adicciones, desintoxicación, Colonia Tovar, Venezuela, tratamiento, terapia, centro de rehabilitación",
    authors: [{ name: "Vistacampo" }],
    openGraph: {
      title: "Recuperar tu vida es posible | Vistacampo",
      description:
        "Tratamiento médico, psicológico y familiar en un entorno privado, cálido y profesional para iniciar una recuperación real con dignidad.",
      siteName: "Vistacampo",
      locale: "es_VE",
      type: "website",
      url: `${baseUrl}/`,
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
    alternates: {
      languages: {
        es: `${baseUrl}/es/`,
        en: `${baseUrl}/en/`,
        "x-default": `${baseUrl}/es/`,
      },
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
    generator: "v0.dev",
  }
}

// Locale-aware root layout using path metadata injected by proxy.ts.
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const requestHeaders = await headers()
  const requestLocale = requestHeaders.get("x-vistacampo-locale")
  const lng: Locale = locales.includes(requestLocale as Locale) ? (requestLocale as Locale) : defaultLocale

  return (
    <html lang={lng} className="light">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//wa.me" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${dmSans.variable} font-body`}>
        <I18nProvider lng={lng}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
          <PerformanceMonitor />
        </I18nProvider>
      </body>
    </html>
  )
}
