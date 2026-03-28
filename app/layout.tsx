import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { locales, defaultLocale, type Locale } from "./i18n"
import { I18nProvider } from "./i18n-provider"
import { PerformanceMonitor } from "@/components/performance-monitor"

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

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://vistacampo-redesign-4r.vercel.app';
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
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
    images: [
      {
        url: "/opengraph-image/",
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
    images: ["/opengraph-image/"],
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

// Locale-aware root layout using dynamic segment [lng] handled by proxy redirects
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Use default locale for SSR, will be updated client-side
  const lng: Locale = defaultLocale

  return (
    <html lang={lng} className="light">
      <head>
        {/* SEO: locale alternates (hreflang). Use static base to avoid runtime template parsing issues */}
        <link rel="alternate" hrefLang="es" href="https://vistacampo.com/es/" />
        <link rel="alternate" hrefLang="en" href="https://vistacampo.com/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://vistacampo.com/" />
        
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
