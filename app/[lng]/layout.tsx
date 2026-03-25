import type React from "react"

import type { Locale } from "@/app/i18n"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ lng: string }>
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lng } = await params
  const locale: Locale = lng === "en" ? "en" : "es"

  return (
    <>
      {children}
      <FloatingWhatsAppButton locale={locale} />
    </>
  )
}
