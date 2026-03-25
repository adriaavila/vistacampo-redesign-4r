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
import { WHATSAPP_LINK_EN } from "@/lib/constants"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacy: false,
  })
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage("Thanks! Your message is ready. Please confirm sending from your email app.")

    const subject = encodeURIComponent("Vistacampo Contact Request")
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`,
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
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">Speak with a specialist today</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Confidential guidance is available 24/7 to help you understand admission, treatment, and next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>Confidential consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Immediate attention</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4 text-emerald-600" color="#10b981" />
                  <span>Available 24/7</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 justify-center">
              {/* Contact Information */}
              <div className="space-y-8 lg:col-span-2 max-w-xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact information</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Reach out through any of these channels for clear, confidential guidance on admission, treatment,
                    and next steps.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-emerald-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon className="h-6 w-6 text-emerald-600" color="#10b981" />
                          </a>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Emergency phone</h3>
                          <p className="text-gray-600 mb-2">Available 24 hours, 7 days a week</p>
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
                          <p className="text-gray-600 mb-2">For general inquiries</p>
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
                          <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                          <p className="text-gray-600 mb-2">Colonia Tovar, Venezuela</p>
                          <p className="text-purple-600 font-semibold text-lg">
                            Vistacampo Therapeutic Center
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
                          <h3 className="font-semibold text-gray-900 mb-2">Hours of operation</h3>
                          <p className="text-gray-600 mb-2">Monday to Sunday</p>
                          <p className="text-orange-600 font-semibold text-lg">24 hours / 7 days</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 max-w-2xl mx-auto w-full">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">Send us a message</CardTitle>
                    <CardDescription className="text-gray-600">
                      Complete the form and we will get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name…"
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
                            placeholder="Enter your email…"
                            autoComplete="email"
                            spellCheck={false}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Enter your phone number…"
                            autoComplete="tel"
                            inputMode="tel"
                          />
                        </div>
                        <div>
                          <Label htmlFor="inquiryType">Type of inquiry</Label>
                          <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                            <SelectTrigger aria-label="Type of inquiry">
                              <SelectValue placeholder="Select the type of inquiry…" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="information">General information</SelectItem>
                              <SelectItem value="treatment">Treatment information</SelectItem>
                              <SelectItem value="emergency">Emergency</SelectItem>
                              <SelectItem value="family">Family consultation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us how we can help you…"
                          rows={5}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          checked={formData.privacy}
                          onChange={(e) => setFormData((prev) => ({ ...prev, privacy: e.target.checked }))}
                          className="rounded border-gray-300"
                          required
                        />
                        <Label htmlFor="privacy" className="text-sm text-gray-600">
                          I accept the{" "}
                          <a href="/en/privacidad" className="text-emerald-600 hover:underline">
                            privacy policy
                          </a>{" "}
                          and authorize the use of my data to contact me.
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
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
              Need urgent help?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              If you need immediate help, reach out now. Confidential support is available 24/7 to guide the next
              step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                  Contact via WhatsApp
                </Button>
              </a>
              <a href="tel:+584122315968">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Call now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
