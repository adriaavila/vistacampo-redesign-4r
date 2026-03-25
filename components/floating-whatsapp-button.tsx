import type { Locale } from "@/app/i18n"
import { WHATSAPP_LINK, WHATSAPP_LINK_EN } from "@/lib/constants"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

interface FloatingWhatsAppButtonProps {
  locale: Locale
}

export function FloatingWhatsAppButton({ locale }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={locale === "en" ? WHATSAPP_LINK_EN : WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={locale === "en" ? "Request help on WhatsApp" : "Solicita ayuda por WhatsApp"}
      className="fixed bottom-4 right-4 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_18px_45px_-18px_rgba(5,150,105,0.85)] transition-transform duration-200 hover:scale-105 hover:bg-emerald-700 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-9 w-9" />
    </a>
  )
}
