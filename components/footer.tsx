"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Facebook, Instagram, Heart } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import { WHATSAPP_LINK, WHATSAPP_LINK_EN } from "@/lib/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  
  // Determine current locale from pathname (same as header)
  const locale = pathname?.split("/")[1] === "en" ? "en" : "es"
  const isEn = locale === "en"

  return (
    <footer className="bg-rose-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-400">Vistacampo</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {isEn
                ? "Specialized center in addiction rehabilitation in Colonia Tovar, Venezuela. Your recovery is our mission."
                : "Centro especializado en rehabilitación de adicciones en Colonia Tovar, Venezuela. Tu recuperación es nuestra misión."
              }
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label={isEn ? "Visit our Facebook page" : "Visita nuestra página de Facebook"}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/centro_vistacampo/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label={isEn ? "Visit our Instagram profile" : "Visita nuestro perfil de Instagram"}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@juliogonzalezfilesari0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label={isEn ? "Visit our YouTube channel" : "Visita nuestro canal de YouTube"}>
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">
              {isEn ? "Quick links" : "Enlaces rápidos"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={isEn ? "/en/tratamiento" : "/es/tratamiento"} className="text-gray-300 hover:text-white transition-colors">
                  {isEn ? "Treatment" : "Tratamiento"}
                </Link>
              </li>
              <li>
                <Link href={isEn ? "/en/instalaciones" : "/es/instalaciones"} className="text-gray-300 hover:text-white transition-colors">
                  {isEn ? "Facilities" : "Instalaciones"}
                </Link>
              </li>
              <li>
                <Link href={isEn ? "/en/equipo" : "/es/equipo"} className="text-gray-300 hover:text-white transition-colors">
                  {isEn ? "Our team" : "Nuestro equipo"}
                </Link>
              </li>
              <li>
                <Link href={isEn ? "/en/noticias" : "/es/noticias"} className="text-gray-300 hover:text-white transition-colors">
                  {isEn ? "News" : "Noticias"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">
              {isEn ? "Services" : "Servicios"}
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{isEn ? "Medical detox" : "Desintoxicación médica"}</li>
              <li className="text-gray-300">{isEn ? "Individual therapy" : "Terapia individual"}</li>
              <li className="text-gray-300">{isEn ? "Group therapy" : "Terapia grupal"}</li>
              <li className="text-gray-300">{isEn ? "Family therapy" : "Terapia familiar"}</li>
              <li className="text-gray-300">{isEn ? "Aftercare follow-up" : "Seguimiento post-tratamiento"}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">
              {isEn ? "Contact" : "Contacto"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <a href={isEn ? WHATSAPP_LINK_EN : WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" color="#10b981" />
                  <span className="text-gray-300">(+58) 412-231-5968</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@vistacampo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">
                  {isEn ? "Colonia Tovar, Venezuela" : "Colonia Tovar, Venezuela"}
                </span>
              </div>
            </div>
            <div className="pt-4">
              <a href={isEn ? WHATSAPP_LINK_EN : WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <WhatsAppIcon className="mr-2 h-4 w-4" color="#10b981" />
                  {isEn ? "Request help 24/7" : "Solicita ayuda 24/7"}
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-gray-400 text-sm">
                {isEn
                  ? `© ${new Date().getFullYear()} Vistacampo. All rights reserved.`
                  : `© ${new Date().getFullYear()} Vistacampo. Todos los derechos reservados.`
                }
              </p>
              <div className="flex items-center gap-4">
                <Link href={isEn ? "/en/terminos" : "/es/terminos"} className="text-gray-400 hover:text-white text-sm underline underline-offset-4">
                  {isEn ? "Terms and conditions" : "Términos y condiciones"}
                </Link>
                <span className="text-gray-400">|</span>
                <Link href={isEn ? "/en/privacidad" : "/es/privacidad"} className="text-gray-400 hover:text-white text-sm underline underline-offset-4">
                  {isEn ? "Privacy policy" : "Política de privacidad"}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>{isEn ? "Made with" : "Hecho con"}</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>{isEn ? "for your recovery" : "para tu recuperación"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
