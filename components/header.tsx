"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Facebook, Instagram } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Determine current locale from pathname
  const locale = pathname?.split("/")[1] === "en" ? "en" : "es"
  const base = `/${locale}`

  const navigation = [
    { name: locale === "en" ? "Home" : "Inicio", href: `${base}` },
    { name: locale === "en" ? "Treatment" : "Tratamiento", href: `${base}/tratamiento` },
    { name: locale === "en" ? "Facilities" : "Instalaciones", href: `${base}/instalaciones` },
    { name: locale === "en" ? "Team" : "Equipo", href: `${base}/equipo` },
    { name: locale === "en" ? "News" : "Noticias", href: `${base}/noticias` },
    { name: locale === "en" ? "Contact" : "Contacto", href: `${base}/contacto` },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={base} className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo-vistacampo.png"
              alt="Vistacampo - Centro Terapéutico"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Language switcher, Social icons, Mobile menu */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden md:flex items-center">
              <div className="inline-flex rounded-md border border-gray-200 overflow-hidden">
                <Link 
                  href={pathname?.replace(/^\/(es|en)/, "/es") || "/es"} 
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    locale === "es" 
                      ? "bg-emerald-600 text-white" 
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  ES
                </Link>
                <Link 
                  href={pathname?.replace(/^\/(es|en)/, "/en") || "/en"} 
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    locale === "en" 
                      ? "bg-emerald-600 text-white" 
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>

            {/* Social Icons - Hidden on smaller screens to prevent overlap */}
            <div className="hidden xl:flex items-center space-x-3">
               <a href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors" aria-label="Visita nuestra página de Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/centro_vistacampo/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors" aria-label="Visita nuestro perfil de Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@juliogonzalezfilesari0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors" aria-label="Visita nuestro canal de YouTube">
                <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Language switcher in mobile drawer */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t">
                    <span className="text-sm text-gray-500">{locale === "en" ? "Language" : "Idioma"}</span>
                    <div className="inline-flex rounded-md border border-gray-200 overflow-hidden">
                      <Link 
                        href={pathname?.replace(/^\/(es|en)/, "/es") || "/es"} 
                        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                          locale === "es" 
                            ? "bg-emerald-600 text-white" 
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        ES
                      </Link>
                      <Link 
                        href={pathname?.replace(/^\/(es|en)/, "/en") || "/en"} 
                        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                          locale === "en" 
                            ? "bg-emerald-600 text-white" 
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        EN
                      </Link>
                    </div>
                  </div>

                  {/* Social icons in mobile drawer */}
                  <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
                    <a href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors" aria-label="Visita nuestra página de Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="https://www.instagram.com/centro_vistacampo/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors" aria-label="Visita nuestro perfil de Instagram">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.youtube.com/@juliogonzalezfilesari0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors" aria-label="Visita nuestro canal de YouTube">
                      <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
                    </a>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
