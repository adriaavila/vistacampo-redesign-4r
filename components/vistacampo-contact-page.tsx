"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Clock, Heart, Mail, MapPin, MessageCircle, Send, Shield } from "lucide-react"

import { SiteCtaBand, SitePageHero, SitePageSection, SiteSectionHeader } from "@/components/site-page-primitives"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppCtaIcon } from "@/components/whatsapp-cta-icon"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK, WHATSAPP_LINK_EN } from "@/lib/constants"

type Locale = "es" | "en"

const contentByLocale = {
  es: {
    hero: {
      badge: "Contacto",
      title: "Habla con un especialista hoy",
      description: "Orientación confidencial y clara para admisión, tratamiento y próximos pasos, con una atención cálida y profesional.",
      highlights: ["Consulta confidencial", "Atención inmediata", "Disponible 24/7"],
      panelTitle: "Respuesta cercana y profesional",
      panelText: "Puedes escribir por WhatsApp, llamar o dejar un mensaje. El equipo te orientará con discreción y criterio clínico.",
    },
    info: {
      badge: "Canales de atención",
      title: "Información de contacto",
      description: "Contáctanos por el medio que te resulte más cómodo. Cada consulta se atiende con respeto, claridad y confidencialidad.",
      cards: [
        {
          title: "Teléfono de orientación",
          description: "Disponible 24 horas, 7 días a la semana",
          value: "(+58) 412-231-5968",
          href: WHATSAPP_LINK,
          icon: MessageCircle,
        },
        {
          title: "Correo electrónico",
          description: "Para consultas generales y seguimiento",
          value: "info@vistacampo.com",
          href: "mailto:info@vistacampo.com",
          icon: Mail,
        },
        {
          title: "Ubicación",
          description: "Entorno residencial en Colonia Tovar",
          value: "Colonia Tovar, Venezuela",
          href: "",
          icon: MapPin,
        },
        {
          title: "Disponibilidad",
          description: "Atención continua",
          value: "24 horas / 7 días",
          href: "",
          icon: Clock,
        },
      ],
    },
    form: {
      title: "Envíanos un mensaje",
      description: "Completa el formulario y prepararemos el correo con tu consulta para enviarlo desde tu aplicación.",
      name: "Nombre completo *",
      email: "Email *",
      phone: "Teléfono",
      type: "Tipo de consulta",
      message: "Mensaje *",
      namePlaceholder: "Ingresa tu nombre completo…",
      emailPlaceholder: "Ingresa tu email…",
      phonePlaceholder: "Ingresa tu teléfono…",
      typePlaceholder: "Selecciona el tipo de consulta…",
      messagePlaceholder: "Cuéntanos cómo podemos ayudarte…",
      privacy: "Acepto la política de privacidad y autorizo el uso de mis datos para contactarme.",
      privacyHref: "/es/privacidad",
      submit: "Enviar mensaje",
      success: "Gracias. Tu mensaje está listo; confirma el envío desde tu aplicación de correo.",
      subject: "Solicitud de Contacto Vistacampo",
      options: [
        { value: "informacion", label: "Información general" },
        { value: "admision", label: "Proceso de admisión" },
        { value: "emergencia", label: "Emergencia" },
        { value: "familia", label: "Consulta familiar" },
        { value: "otro", label: "Otro" },
      ],
    },
    cta: {
      badge: "Ayuda inmediata",
      title: "¿Necesitas ayuda urgente?",
      description: "Si el momento requiere una respuesta rápida, escríbenos ahora y te orientaremos sobre el siguiente paso más adecuado.",
      whatsapp: "Contactar por WhatsApp",
      call: "Llamar ahora",
    },
  },
  en: {
    hero: {
      badge: "Contact",
      title: "Speak with a specialist today",
      description: "Confidential, clear guidance for admission, treatment, and next steps delivered with warmth and professionalism.",
      highlights: ["Confidential consultation", "Immediate guidance", "Available 24/7"],
      panelTitle: "Warm and professional response",
      panelText: "You can reach out on WhatsApp, by phone, or through a message. Our team will respond with discretion and clinical judgment.",
    },
    info: {
      badge: "Care channels",
      title: "Contact information",
      description: "Reach out through the channel that feels easiest. Every inquiry is handled with respect, clarity, and confidentiality.",
      cards: [
        {
          title: "Guidance line",
          description: "Available 24 hours, 7 days a week",
          value: "(+58) 412-231-5968",
          href: WHATSAPP_LINK_EN,
          icon: MessageCircle,
        },
        {
          title: "Email",
          description: "For general questions and follow-up",
          value: "info@vistacampo.com",
          href: "mailto:info@vistacampo.com",
          icon: Mail,
        },
        {
          title: "Location",
          description: "Residential setting in Colonia Tovar",
          value: "Colonia Tovar, Venezuela",
          href: "",
          icon: MapPin,
        },
        {
          title: "Availability",
          description: "Continuous support",
          value: "24 hours / 7 days",
          href: "",
          icon: Clock,
        },
      ],
    },
    form: {
      title: "Send us a message",
      description: "Complete the form and we will prepare the email draft so you can send it from your mail app.",
      name: "Full name *",
      email: "Email *",
      phone: "Phone",
      type: "Inquiry type",
      message: "Message *",
      namePlaceholder: "Enter your full name…",
      emailPlaceholder: "Enter your email…",
      phonePlaceholder: "Enter your phone number…",
      typePlaceholder: "Select the type of inquiry…",
      messagePlaceholder: "Tell us how we can help…",
      privacy: "I accept the privacy policy and authorize the use of my data so you can contact me.",
      privacyHref: "/en/privacidad",
      submit: "Send message",
      success: "Thanks. Your message is ready; please confirm sending from your email app.",
      subject: "Vistacampo Contact Request",
      options: [
        { value: "information", label: "General information" },
        { value: "admission", label: "Admission process" },
        { value: "emergency", label: "Emergency" },
        { value: "family", label: "Family consultation" },
        { value: "other", label: "Other" },
      ],
    },
    cta: {
      badge: "Immediate guidance",
      title: "Need urgent help?",
      description: "If the moment calls for a quick response, write to us now and we will help you identify the right next step.",
      whatsapp: "Contact on WhatsApp",
      call: "Call now",
    },
  },
} as const

export function VistacampoContactPage({ locale }: { locale: Locale }) {
  const copy = contentByLocale[locale]
  const whatsappHref = locale === "en" ? WHATSAPP_LINK_EN : WHATSAPP_LINK
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacy: false,
  })
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitMessage(copy.form.success)

    const subject = encodeURIComponent(copy.form.subject)
    const body = encodeURIComponent(
      `${copy.form.name.replace(" *", "")}: ${formData.name}\n${copy.form.email.replace(" *", "")}: ${formData.email}\n${copy.form.phone}: ${formData.phone}\n${copy.form.type}: ${formData.inquiryType}\n\n${copy.form.message.replace(" *", "")}:\n${formData.message}`,
    )
    window.location.href = `mailto:info@vistacampo.com?subject=${subject}&body=${body}`
  }

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <SitePageHero
        badge={copy.hero.badge}
        title={copy.hero.title}
        description={copy.hero.description}
        centered
        highlights={[
          { icon: Shield, label: copy.hero.highlights[0] },
          { icon: Heart, label: copy.hero.highlights[1] },
          { icon: MessageCircle, label: copy.hero.highlights[2] },
        ]}
        actions={
          <>
            <Button asChild size="lg" className="font-ui h-14 rounded-full bg-[#1a3628] px-7 text-[0.95rem] font-semibold text-[#fafafa] hover:bg-[#6b1f2b]">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppCtaIcon tone="contrast" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-ui h-14 rounded-full border-[#1a3628] bg-white/80 px-7 text-[0.95rem] font-semibold text-[#1a3628] hover:bg-[#1a3628] hover:text-[#fafafa]">
              <a href="mailto:info@vistacampo.com">info@vistacampo.com</a>
            </Button>
          </>
        }
        visual={
          <div className="vc-shell p-6 sm:p-8">
            <p className="font-ui text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.46)]">
              {copy.hero.badge}
            </p>
            <h2 className="mt-4 text-3xl font-medium text-[#0f241a]">{copy.hero.panelTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[rgba(29,47,38,0.74)]">{copy.hero.panelText}</p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-[1.2rem] border border-[rgba(15,36,26,0.08)] bg-[rgba(246,242,236,0.72)] p-4">
                <p className="font-ui text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.46)]">WhatsApp</p>
                <p className="mt-2 text-lg text-[#0f241a]">(+58) 412-231-5968</p>
              </div>
              <div className="rounded-[1.2rem] border border-[rgba(15,36,26,0.08)] bg-[rgba(246,242,236,0.72)] p-4">
                <p className="font-ui text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.46)]">Email</p>
                <p className="mt-2 text-lg text-[#0f241a]">info@vistacampo.com</p>
              </div>
            </div>
          </div>
        }
      />

      <SitePageSection>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SiteSectionHeader badge={copy.info.badge} title={copy.info.title} description={copy.info.description} />
            <div className="mt-8 grid gap-4">
              {copy.info.cards.map((item) => {
                const Icon = item.icon

                return (
                  <Card key={item.title}>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(26,54,40,0.08)] text-[#1a3628]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#0f241a]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[rgba(29,47,38,0.64)]">{item.description}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="mt-3 inline-block text-base font-semibold text-[#6b1f2b] transition-colors hover:text-[#1a3628]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-3 text-base font-semibold text-[#6b1f2b]">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle>{copy.form.title}</CardTitle>
              <CardDescription>{copy.form.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="font-ui text-sm font-semibold text-[#0f241a]">
                      {copy.form.name}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(event) => handleInputChange("name", event.target.value)}
                      placeholder={copy.form.namePlaceholder}
                      autoComplete="name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-ui text-sm font-semibold text-[#0f241a]">
                      {copy.form.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => handleInputChange("email", event.target.value)}
                      placeholder={copy.form.emailPlaceholder}
                      autoComplete="email"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="phone" className="font-ui text-sm font-semibold text-[#0f241a]">
                      {copy.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => handleInputChange("phone", event.target.value)}
                      placeholder={copy.form.phonePlaceholder}
                      autoComplete="tel"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inquiryType" className="font-ui text-sm font-semibold text-[#0f241a]">
                      {copy.form.type}
                    </Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger aria-label={copy.form.type} className="mt-2">
                        <SelectValue placeholder={copy.form.typePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {copy.form.options.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="font-ui text-sm font-semibold text-[#0f241a]">
                    {copy.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(event) => handleInputChange("message", event.target.value)}
                    placeholder={copy.form.messagePlaceholder}
                    rows={5}
                    required
                    className="mt-2"
                  />
                </div>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={(event) => handleInputChange("privacy", event.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-[rgba(15,36,26,0.2)] accent-[#1a3628]"
                    required
                  />
                  <span className="text-sm leading-7 text-[rgba(29,47,38,0.68)]">
                    {copy.form.privacy.split("política de privacidad")[0]}
                    {locale === "es" ? (
                      <>
                        <Link href={copy.form.privacyHref} className="font-medium text-[#6b1f2b] hover:text-[#1a3628]">
                          política de privacidad
                        </Link>
                        {copy.form.privacy.split("política de privacidad")[1]}
                      </>
                    ) : (
                      <>
                        <Link href={copy.form.privacyHref} className="font-medium text-[#6b1f2b] hover:text-[#1a3628]">
                          privacy policy
                        </Link>
                        {copy.form.privacy.split("privacy policy")[1]}
                      </>
                    )}
                  </span>
                </label>

                <Button type="submit" className="font-ui h-12 w-full rounded-full bg-[#1a3628] text-sm font-semibold text-[#fafafa] hover:bg-[#6b1f2b]">
                  <Send className="mr-2 h-4 w-4" />
                  {copy.form.submit}
                </Button>

                {submitMessage ? (
                  <p className="text-sm leading-7 text-[#2e5a46]" aria-live="polite">
                    {submitMessage}
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </div>
      </SitePageSection>

      <SiteCtaBand
        badge={copy.cta.badge}
        title={copy.cta.title}
        description={copy.cta.description}
        actions={
          <>
            <Button asChild size="lg" className="font-ui h-14 rounded-full bg-[#fafafa] px-7 text-[0.95rem] font-semibold text-[#0f241a] hover:bg-[#d9c088]">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppCtaIcon tone="brand" />
                {copy.cta.whatsapp}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-ui h-14 rounded-full border-white/16 bg-transparent px-7 text-[0.95rem] font-semibold text-white hover:bg-white/12 hover:text-white">
              <a href="tel:+584122315968">{copy.cta.call}</a>
            </Button>
          </>
        }
      />
    </div>
  )
}
