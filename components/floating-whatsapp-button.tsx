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
      className="fixed bottom-4 right-4 z-40 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#1a3628] text-white shadow-[0_24px_60px_-26px_rgba(15,36,26,0.95)] transition-all duration-200 hover:scale-105 hover:bg-[#6b1f2b] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-9 w-9" />
    </a>
  )
}
