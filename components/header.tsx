"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Instagram, Menu } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

function getLocaleHref(pathname: string | null, locale: "es" | "en") {
  if (!pathname || pathname === "/") {
    return `/${locale}`
  }

  if (/^\/(es|en)(\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(es|en)(?=\/|$)/, `/${locale}`)
  }

  return `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const locale = pathname?.split("/")[1] === "en" ? "en" : "es"
  const base = `/${locale}`

  const navigation = [
    { name: locale === "en" ? "Home" : "Inicio", href: base },
    { name: locale === "en" ? "Treatment" : "Tratamiento", href: `${base}/tratamiento` },
    { name: locale === "en" ? "Facilities" : "Instalaciones", href: `${base}/instalaciones` },
    { name: locale === "en" ? "Team" : "Equipo", href: `${base}/equipo` },
    { name: locale === "en" ? "News" : "Noticias", href: `${base}/noticias` },
    { name: locale === "en" ? "Contact" : "Contacto", href: `${base}/contacto` },
  ]

  const isActive = (href: string) => {
    if (!pathname) {
      return false
    }

    return href === base ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(15,36,26,0.08)] bg-[rgba(250,250,250,0.78)] backdrop-blur-2xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(191,161,95,0.55),transparent)]" />

      <div className="container">
        <div className="flex h-20 items-center gap-6 lg:h-24">
          <Link href={base} className="flex min-w-0 items-center gap-3">
            <div className="shrink-0">
              <Image
                src="/images/logo-vistacampo.png"
                alt="Vistacampo"
                width={188}
                height={58}
                priority
                className="h-auto w-[150px] object-contain sm:w-[168px]"
              />
            </div>
          </Link>

          <nav className="font-ui ml-auto hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? "bg-[rgba(26,54,40,0.08)] text-[#1a3628]"
                    : "text-[rgba(29,47,38,0.72)] hover:bg-[rgba(26,54,40,0.05)] hover:text-[#1a3628]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="font-ui inline-flex rounded-full border border-[rgba(15,36,26,0.08)] bg-white/70 p-1">
              <Link
                href={getLocaleHref(pathname, "es")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                  locale === "es"
                    ? "bg-[#1a3628] text-[#fafafa]"
                    : "text-[rgba(29,47,38,0.64)] hover:text-[#1a3628]"
                }`}
              >
                ES
              </Link>
              <Link
                href={getLocaleHref(pathname, "en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                  locale === "en"
                    ? "bg-[#1a3628] text-[#fafafa]"
                    : "text-[rgba(29,47,38,0.64)] hover:text-[#1a3628]"
                }`}
              >
                EN
              </Link>
            </div>

            <div className="hidden items-center gap-2 xl:flex">
              <a
                href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(15,36,26,0.08)] bg-white/70 text-[rgba(29,47,38,0.6)] transition-colors hover:text-[#6b1f2b]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/centro_vistacampo/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(15,36,26,0.08)] bg-white/70 text-[rgba(29,47,38,0.6)] transition-colors hover:text-[#6b1f2b]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@juliogonzalezfilesari0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(15,36,26,0.08)] bg-white/70 text-[rgba(29,47,38,0.6)] transition-colors hover:text-[#6b1f2b]"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
              </a>
            </div>

          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-11 w-11 rounded-full border border-[rgba(15,36,26,0.08)] bg-white/70 text-[#1a3628] hover:bg-[rgba(26,54,40,0.06)] lg:hidden"
                aria-label={locale === "en" ? "Open navigation" : "Abrir navegación"}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] border-l border-[rgba(15,36,26,0.08)] bg-[linear-gradient(180deg,#f6f2ec_0%,#fafafa_100%)] p-0 sm:w-[380px]"
            >
              <SheetTitle className="sr-only">{locale === "en" ? "Navigation" : "Navegación"}</SheetTitle>

              <div className="flex h-full flex-col">
                <div className="border-b border-[rgba(15,36,26,0.08)] px-6 pb-6 pt-14">
                  <div className="shrink-0">
                    <Image
                      src="/images/logo-vistacampo.png"
                      alt="Vistacampo"
                      width={188}
                      height={58}
                      className="h-auto w-[170px] object-contain"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[rgba(29,47,38,0.74)]">
                    {locale === "en"
                      ? "Confidential, residential, and clinically guided care."
                      : "Atención confidencial, residencial y clínicamente acompañada."}
                  </p>
                </div>

                <div className="flex-1 px-6 py-6">
                  <nav className="font-ui flex flex-col gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-[1.2rem] px-4 py-3 text-base font-medium transition-all ${
                          isActive(item.href)
                            ? "bg-[rgba(26,54,40,0.08)] text-[#1a3628]"
                            : "text-[rgba(29,47,38,0.72)] hover:bg-[rgba(26,54,40,0.05)] hover:text-[#1a3628]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8 rounded-[1.5rem] border border-[rgba(15,36,26,0.08)] bg-white/72 p-4">
                    <p className="font-ui text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.5)]">
                      {locale === "en" ? "Language" : "Idioma"}
                    </p>
                    <div className="font-ui mt-4 inline-flex rounded-full border border-[rgba(15,36,26,0.08)] bg-[#f6f2ec] p-1">
                      <Link
                        href={getLocaleHref(pathname, "es")}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                          locale === "es" ? "bg-[#1a3628] text-[#fafafa]" : "text-[rgba(29,47,38,0.62)]"
                        }`}
                      >
                        ES
                      </Link>
                      <Link
                        href={getLocaleHref(pathname, "en")}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                          locale === "en" ? "bg-[#1a3628] text-[#fafafa]" : "text-[rgba(29,47,38,0.62)]"
                        }`}
                      >
                        EN
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[rgba(15,36,26,0.08)] px-6 py-6">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(15,36,26,0.08)] bg-white/80 text-[rgba(29,47,38,0.6)]"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/centro_vistacampo/?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(15,36,26,0.08)] bg-white/80 text-[rgba(29,47,38,0.6)]"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@juliogonzalezfilesari0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(15,36,26,0.08)] bg-white/80 text-[rgba(29,47,38,0.6)]"
                      aria-label="YouTube"
                    >
                      <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
