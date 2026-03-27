"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, MapPin, Clock, Send, Shield, Heart } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WhatsAppCtaIcon } from "@/components/whatsapp-cta-icon"
import { WHATSAPP_LINK } from "@/lib/constants"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
    privacidad: false,
  })
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage("Gracias. Tu mensaje está listo; confirma el envío desde tu aplicación de correo.")

    const subject = encodeURIComponent("Solicitud de Contacto Vistacampo")
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nTipo de consulta: ${formData.tipoConsulta}\n\nMensaje:\n${formData.mensaje}`,
    )
    window.location.href = `mailto:info@vistacampo.com?subject=${subject}&body=${body}`
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Contacto
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">Habla con un especialista hoy</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Atención confidencial 24/7 para orientarte con claridad sobre admisión, tratamiento y próximos pasos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>Consulta confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Atención inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4 text-emerald-600" color="#10b981" />
                  <span>Disponible 24/7</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 justify-center">
              {/* Información de Contacto */}
              <div className="space-y-8 lg:col-span-2 max-w-xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de contacto</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Contáctanos por cualquiera de estos medios. Recibirás orientación confidencial, clara y profesional
                    sobre admisión, tratamiento y próximos pasos.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-emerald-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon className="h-6 w-6 text-emerald-600" color="#10b981" />
                          </a>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Teléfono de emergencia</h3>
                          <p className="text-gray-600 mb-2">Disponible 24 horas, 7 días a la semana</p>
                          <a
                            href="tel:+584122315968"
                            className="text-emerald-600 font-semibold text-lg hover:text-emerald-700"
                          >
                            (+58) 412-231-5968
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                          <p className="text-gray-600 mb-2">Para consultas generales</p>
                          <a
                            href="mailto:info@vistacampo.com"
                            className="text-blue-600 font-semibold text-lg hover:text-blue-700"
                          >
                            info@vistacampo.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Ubicación</h3>
                          <p className="text-gray-600 mb-2">Colonia Tovar, Venezuela</p>
                          <p className="text-purple-600 font-semibold text-lg">
                            Centro Terapéutico Vistacampo
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Horarios de atención</h3>
                          <p className="text-gray-600 mb-2">Lunes a domingo</p>
                          <p className="text-orange-600 font-semibold text-lg">24 horas / 7 días</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <div className="lg:col-span-2 max-w-2xl mx-auto w-full">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">Envíanos un mensaje</CardTitle>
                    <CardDescription className="text-gray-600">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="nombre">Nombre completo *</Label>
                          <Input
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={(e) => handleInputChange("nombre", e.target.value)}
                            placeholder="Ingresa tu nombre completo…"
                            autoComplete="name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Ingresa tu email…"
                            autoComplete="email"
                            spellCheck={false}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="telefono">Teléfono</Label>
                          <Input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={(e) => handleInputChange("telefono", e.target.value)}
                            placeholder="Ingresa tu teléfono…"
                            autoComplete="tel"
                            inputMode="tel"
                          />
                        </div>
                        <div>
                          <Label htmlFor="tipoConsulta">Tipo de consulta</Label>
                          <Select value={formData.tipoConsulta} onValueChange={(value) => handleInputChange("tipoConsulta", value)}>
                            <SelectTrigger aria-label="Tipo de consulta">
                              <SelectValue placeholder="Selecciona el tipo de consulta…" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="informacion">Información general</SelectItem>
                              <SelectItem value="admision">Proceso de admisión</SelectItem>
                              <SelectItem value="emergencia">Emergencia</SelectItem>
                              <SelectItem value="familia">Consulta familiar</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="mensaje">Mensaje *</Label>
                        <Textarea
                          id="mensaje"
                          name="mensaje"
                          value={formData.mensaje}
                          onChange={(e) => handleInputChange("mensaje", e.target.value)}
                          placeholder="Cuéntanos cómo podemos ayudarte…"
                          rows={5}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="privacidad"
                          name="privacidad"
                          checked={formData.privacidad}
                          onChange={(e) => setFormData((prev) => ({ ...prev, privacidad: e.target.checked }))}
                          className="rounded border-gray-300"
                          required
                        />
                        <Label htmlFor="privacidad" className="text-sm text-gray-600">
                          Acepto la{" "}
                          <a href="/es/privacidad" className="text-emerald-600 hover:underline">
                            política de privacidad
                          </a>{" "}
                          y autorizo el uso de mis datos para contactarme.
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </Button>
                      {submitMessage ? (
                        <p className="text-sm text-emerald-700" aria-live="polite">
                          {submitMessage}
                        </p>
                      ) : null}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas ayuda urgente?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Si necesitas ayuda inmediata, contáctanos ahora. Atención confidencial 24/7 para acompañarte en el
              siguiente paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <WhatsAppCtaIcon tone="brand" />
                  Contactar por WhatsApp
                </Button>
              </a>
              <a href="tel:+584122315968">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Llamar ahora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
