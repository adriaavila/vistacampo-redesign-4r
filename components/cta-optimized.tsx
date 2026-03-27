"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calendar, ArrowRight, Clock, Shield, Heart, X } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import { WhatsAppCtaIcon } from "./whatsapp-cta-icon"
import { WHATSAPP_LINK } from "@/lib/constants"

interface CTAOptimizedProps {
  variant?: "emergency" | "consultation" | "admission" | "floating"
  title?: string
  description?: string
  primaryAction?: string
  secondaryAction?: string
  showUrgency?: boolean
  showBenefits?: boolean
}

export function CTAOptimized({
  variant = "consultation",
  title,
  description,
  primaryAction,
  secondaryAction,
  showUrgency = true,
  showBenefits = true,
}: CTAOptimizedProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showFloating, setShowFloating] = useState(false)

  useEffect(() => {
    if (variant === "floating") {
      const timer = setTimeout(() => setShowFloating(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [variant])

  useEffect(() => {
    if (variant === "floating") {
      const handleScroll = () => {
        const scrolled = window.scrollY > 500
        setIsVisible(scrolled)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [variant])

  const getVariantConfig = () => {
    switch (variant) {
      case "emergency":
        return {
          bgColor: "bg-gradient-to-r from-red-600 to-red-700",
          title: title || "¿Necesitas ayuda inmediata?",
          description:
            description ||
            "Si tú o un ser querido están en crisis, actúa ahora. Atención confidencial 24/7 para orientar los siguientes pasos.",
          primaryAction: primaryAction || "Llamada de Emergencia",
          secondaryAction: secondaryAction || "Chat de Crisis",
          urgencyText: "Línea de crisis 24/7",
          icon: WhatsAppIcon,
        }
      case "admission":
        return {
          bgColor: "bg-gradient-to-r from-emerald-600 to-teal-600",
          title: title || "Comienza tu proceso de recuperación",
          description:
            description ||
            "Da el primer paso hacia una vida en equilibrio. Acompañamiento profesional desde la admisión hasta el seguimiento.",
          primaryAction: primaryAction || "Iniciar Admisión",
          secondaryAction: secondaryAction || "Consulta Gratuita",
          urgencyText: "Respuesta en 2 horas",
          icon: Calendar,
        }
      case "floating":
        return {
          bgColor: "bg-white border-2 border-emerald-600",
          title: "¿Necesitas ayuda?",
          description: "Habla con un especialista ahora",
          primaryAction: "Llamar Ahora",
          secondaryAction: "Chat",
          urgencyText: "Disponible 24/7",
          icon: WhatsAppIcon,
          textColor: "text-gray-900",
        }
      default:
        return {
          bgColor: "bg-gradient-to-r from-emerald-600 to-teal-600",
          title: title || "¿Listo para dar el primer paso?",
          description:
            description ||
            "Agenda una consulta confidencial y recibe orientación clara sobre el tratamiento más adecuado.",
          primaryAction: primaryAction || "Agendar Consulta",
          secondaryAction: secondaryAction || "Llamar Ahora",
          urgencyText: "Consulta gratuita",
          icon: WhatsAppIcon,
        }
    }
  }

  const config = getVariantConfig()

  if (variant === "floating") {
    return (
      <>
        {showFloating && isVisible && (
          <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2">
            <Card className={`${config.bgColor} shadow-2xl max-w-sm`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <config.icon className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${config.textColor || "text-white"}`}>{config.title}</h3>
                      <p className={`text-sm ${config.textColor ? "text-gray-600" : "text-white/90"}`}>
                        {config.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFloating(false)}
                    className={
                      config.textColor ? "text-gray-400 hover:text-gray-600" : "text-white/70 hover:text-white"
                    }
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className={
                      config.textColor
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-white text-emerald-600 hover:bg-gray-100"
                    }
                  >
                    <WhatsAppCtaIcon tone={config.textColor ? "contrast" : "brand"} size="sm" />
                    {config.primaryAction}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      config.textColor
                        ? "border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                        : "border-white text-white hover:bg-white hover:text-emerald-600"
                    }
                  >
                    <WhatsAppCtaIcon tone={config.textColor ? "brand" : "contrast"} size="sm" />
                    {config.secondaryAction}
                  </Button>
                </div>
                {showUrgency && (
                  <p className={`text-xs mt-2 ${config.textColor ? "text-gray-500" : "text-white/70"}`}>
                    {config.urgencyText}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </>
    )
  }

  return (
    <section className={`py-20 ${config.bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            {showUrgency && (
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                {config.urgencyText}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{config.title}</h2>
            <p className="text-xl mb-8 opacity-90">{config.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg"
              >
                <WhatsAppCtaIcon tone="brand" />
                {config.primaryAction}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4"
              >
                <WhatsAppCtaIcon tone="contrast" />
                {config.secondaryAction}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {showBenefits && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm opacity-90">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Respuesta inmediata</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>100% Confidencial</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Sin compromiso</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
