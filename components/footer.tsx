"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Heart, Instagram, Mail, MapPin } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

import { WHATSAPP_LINK, WHATSAPP_LINK_EN } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "./whatsapp-icon"
import { WhatsAppCtaIcon } from "./whatsapp-cta-icon"

export function Footer() {
  const pathname = usePathname()
  const locale = pathname?.split("/")[1] === "en" ? "en" : "es"
  const isEn = locale === "en"
  const base = `/${locale}`
  const whatsappHref = isEn ? WHATSAPP_LINK_EN : WHATSAPP_LINK

  const links = [
    { href: base, label: isEn ? "Home" : "Inicio" },
    { href: `${base}/tratamiento`, label: isEn ? "Treatment" : "Tratamiento" },
    { href: `${base}/instalaciones`, label: isEn ? "Facilities" : "Instalaciones" },
    { href: `${base}/equipo`, label: isEn ? "Team" : "Equipo" },
    { href: `${base}/contacto`, label: isEn ? "Contact" : "Contacto" },
  ]

  const services = isEn
    ? ["Medical detox", "Individual therapy", "Group therapy", "Family support", "Aftercare follow-up"]
    : ["Desintoxicación médica", "Terapia individual", "Terapia grupal", "Apoyo familiar", "Seguimiento post-tratamiento"]

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#163025_0%,#0f241a_48%,#0b1a13_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(107,31,43,0.24),transparent_26%)]" />

      <div className="container relative px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 xl:grid-cols-[1.1fr_0.7fr_0.7fr_0.95fr]">
          <div className="max-w-md">
            <div className="shrink-0">
              <Image
                src="/images/logo-vistacampo.png"
                alt="Vistacampo"
                width={205}
                height={64}
                className="h-auto w-[180px] object-contain"
              />
            </div>

            <p className="mt-6 text-base leading-8 text-white/72">
              {isEn
                ? "Confidential residential care for addiction recovery in Colonia Tovar, with clinical guidance and human warmth."
                : "Atención residencial confidencial para la recuperación de adicciones en Colonia Tovar, con criterio clínico y calidez humana."}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/64 transition-colors hover:text-[#d9c088]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/centro_vistacampo/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/64 transition-colors hover:text-[#d9c088]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@juliogonzalezfilesari0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/64 transition-colors hover:text-[#d9c088]"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-ui text-xs uppercase tracking-[0.28em] text-[#d9c088]">
              {isEn ? "Explore" : "Explorar"}
            </p>
            <ul className="mt-6 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-ui text-xs uppercase tracking-[0.28em] text-[#d9c088]">
              {isEn ? "Treatment" : "Tratamiento"}
            </p>
            <ul className="mt-6 space-y-3">
              {services.map((item) => (
                <li key={item} className="text-sm text-white/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/7 p-6 backdrop-blur-md">
            <p className="font-ui text-xs uppercase tracking-[0.28em] text-[#d9c088]">
              {isEn ? "Contact" : "Contacto"}
            </p>

            <div className="mt-6 space-y-4">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/78">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <WhatsAppIcon className="h-5 w-5" color="#d9c088" />
                </span>
                <span className="text-sm">(+58) 412-231-5968</span>
              </a>

              <div className="flex items-center gap-3 text-white/78">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-4 w-4 text-[#d9c088]" />
                </span>
                <span className="text-sm">info@vistacampo.com</span>
              </div>

              <div className="flex items-center gap-3 text-white/78">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-4 w-4 text-[#d9c088]" />
                </span>
                <span className="text-sm">Colonia Tovar, Venezuela</span>
              </div>
            </div>

            <Button
              asChild
              className="font-ui mt-6 h-12 w-full rounded-full bg-[#fafafa] text-sm font-semibold text-[#0f241a] hover:bg-[#d9c088]"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppCtaIcon tone="brand" size="sm" />
                {isEn ? "Request help" : "Solicitar ayuda"}
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/58 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
            <p>
              {isEn
                ? `© ${new Date().getFullYear()} Vistacampo. All rights reserved.`
                : `© ${new Date().getFullYear()} Vistacampo. Todos los derechos reservados.`}
            </p>
            <div className="flex items-center gap-4">
              <Link href={`${base}/terminos`} className="transition-colors hover:text-white">
                {isEn ? "Terms and conditions" : "Términos y condiciones"}
              </Link>
              <Link href={`${base}/privacidad`} className="transition-colors hover:text-white">
                {isEn ? "Privacy policy" : "Política de privacidad"}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>{isEn ? "Made with care for recovery" : "Hecho con cuidado para la recuperación"}</span>
            <Heart className="h-4 w-4 text-[#d9c088]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
