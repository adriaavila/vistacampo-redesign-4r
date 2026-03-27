import { WhatsAppIcon } from "./whatsapp-icon"

type Props = {
  tone?: "brand" | "contrast"
  size?: "sm" | "md"
}

const toneClasses = {
  brand: "bg-emerald-500 shadow-[0_8px_24px_rgba(16,185,129,0.28)]",
  contrast: "bg-white/16 ring-1 ring-white/24",
}

const sizeClasses = {
  sm: {
    wrapper: "mr-2 h-6 w-6",
    icon: "h-3.5 w-3.5",
  },
  md: {
    wrapper: "mr-2.5 h-8 w-8",
    icon: "h-[1.05rem] w-[1.05rem]",
  },
}

export function WhatsAppCtaIcon({ tone = "brand", size = "md" }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${toneClasses[tone]} ${sizeClasses[size].wrapper}`}
    >
      <WhatsAppIcon className={sizeClasses[size].icon} color="#ffffff" />
    </span>
  )
}
