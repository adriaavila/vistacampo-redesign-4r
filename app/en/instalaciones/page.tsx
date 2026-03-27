"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Users,
  TreePine,
  Shield,
  Heart,
  Phone,
  ArrowRight,
  Bed,
  Coffee,
  Dumbbell,
  BookOpen,
  Utensils,
  Wifi,
  Car,
  Camera,
  ZoomIn,
  MessageCircle,
  Building2,
  Trees,
  Star,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppCtaIcon } from "@/components/whatsapp-cta-icon"
import { WHATSAPP_LINK_EN } from "@/lib/constants"
import { useTranslation } from "react-i18next"
import { TreatmentHeroCollage } from "@/components/treatment-hero-collage"

const facilitiesData = {
  rooms: [
    {
      id: 1,
      title: "Premium single room",
      description: "Private and comfortable spaces designed for rest and personal reflection.",
      image: "/images/vc-cuarto-cama-sola.jpeg",
      features: ["Private bathroom", "Air conditioning", "Desk", "Large closet", "Garden view"],
    },
    {
      id: 2,
      title: "Shared room",
      description: "Environments that foster companionship and mutual support among patients.",
      image: "/images/Dos camas.jpg",
      features: [
        "2 single beds",
        "Shared bathroom",
        "Study area",
        "Personal lockers",
        "Natural ventilation",
      ],
    },
    {
      id: 3,
      title: "Recovery suite",
      description: "Special spaces for patients in advanced stages of recovery.",
      image: "/images/vc-dos-camas.jpeg",
      features: ["Living room", "Kitchenette", "Full bathroom", "Private balcony", "Premium furniture"],
    },
  ],
  commonAreas: [
    {
      id: 4,
      title: "Group therapy room",
      description: "Welcoming spaces designed to facilitate communication and teamwork.",
      image: "/images/vc-sala-terapia-grupal.jpg",
      features: [
        "Circle of seats",
        "Natural lighting",
        "Optimized acoustics",
        "Warm atmosphere",
        "Total privacy",
      ],
    },
    {
      id: 5,
      title: "Library and living room",
      description: "Quiet environment for reading, reflection and educational activities.",
      image: "/images/vc-sala-cala.jpeg",
      features: [
        "Specialized collection",
        "Study tables",
        "Smart TV",
        "Reading area",
        "Guaranteed comfort",
      ],
    },
    {
      id: 6,
      title: "Main dining room",
      description: "Spacious and bright space where meals are shared in a family atmosphere.",
      image: "/images/vc-comedor.jpeg",
      features: [
        "Large capacity",
        "Natural lighting",
        "Family atmosphere",
        "Healthy menu",
        "Social interaction",
      ],
    },
  ],
  outdoorAreas: [
    {
      id: 7,
      title: "Meditation garden",
      description: "Peaceful outdoor space for meditation and connection with nature.",
      image: "/images/vc-vista.jpeg",
      features: [
        "Meditation areas",
        "Native plants",
        "Walking paths",
        "Rest areas",
        "Natural sounds",
      ],
    },
    {
      id: 8,
      title: "Sports and recreation area",
      description: "Spaces for physical activity and healthy recreation.",
      image: "/images/areaDeportivaVC.jpeg",
      features: [
        "Exercise equipment",
        "Sports courts",
        "Walking trails",
        "Outdoor activities",
        "Professional supervision",
      ],
    },
  ],
}

export default function FacilitiesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { t } = useTranslation("common")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20">
        <TreatmentHeroCollage images={[
          "/images/vc-instalaciones.jpeg",
          "/images/habitacion-individual-premium.png",
          "/images/vc-sala-terapia-grupal.jpg",
          "/images/vc-vista.jpeg",
          "/images/vc-comedor.jpeg",
          "/images/suite-recuperacion.png",
          "/images/areaDeportivaVC.jpeg",
          "/images/vc-sala-cala.jpeg",
          "/images/vc-panoramica.webp",
        ]} />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Our facilities
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              Modern and comfortable facilities
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our facilities are designed to provide a safe, comfortable and therapeutic environment for your recovery process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <WhatsAppCtaIcon tone="contrast" />
                  Schedule a visit
                </Button>
              </a>
              <Link href="/en/contacto">
                <Button variant="outline" size="lg" className="border-rose-900 text-rose-900">
                  Contact us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Complete facilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything you need for your recovery
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our facilities include comfortable accommodations, therapeutic spaces, and outdoor areas designed to support your healing journey.
              </p>
            </div>

            <Tabs defaultValue="rooms" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="rooms" className="text-lg">
                  <Bed className="mr-2 h-5 w-5" />
                  Accommodations
                </TabsTrigger>
                <TabsTrigger value="common" className="text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Common Areas
                </TabsTrigger>
                <TabsTrigger value="outdoor" className="text-lg">
                  <Trees className="mr-2 h-5 w-5" />
                  Outdoor Areas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rooms" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {facilitiesData.rooms.map((room) => (
                    <Card key={room.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={room.image}
                            alt={`${room.title} at Vistacampo rehabilitation center - ${room.description}`}
                            title={`${room.title} - Vistacampo Facilities`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="secondary"
                                size="icon"
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                                onClick={() => setSelectedImage(room.image)}
                              >
                                <ZoomIn className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogTitle>{room.title}</DialogTitle>
                              <Image
                                src={room.image}
                                alt={`${room.title} at Vistacampo rehabilitation center - ${room.description}`}
                                title={`${room.title} - Vistacampo Facilities`}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl mb-3">{room.title}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {room.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {room.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="common" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {facilitiesData.commonAreas.map((area) => (
                    <Card key={area.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={area.image}
                            alt={`${area.title} at Vistacampo rehabilitation center - ${area.description}`}
                            title={`${area.title} - Vistacampo Facilities`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="secondary"
                                size="icon"
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                                onClick={() => setSelectedImage(area.image)}
                              >
                                <ZoomIn className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogTitle>{area.title}</DialogTitle>
                              <Image
                                src={area.image}
                                alt={`${area.title} at Vistacampo rehabilitation center - ${area.description}`}
                                title={`${area.title} - Vistacampo Facilities`}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl mb-3">{area.title}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {area.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {area.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="outdoor" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {facilitiesData.outdoorAreas.map((area) => (
                    <Card key={area.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={area.image}
                            alt={`${area.title} at Vistacampo rehabilitation center - ${area.description}`}
                            title={`${area.title} - Vistacampo Facilities`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="secondary"
                                size="icon"
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                                onClick={() => setSelectedImage(area.image)}
                              >
                                <ZoomIn className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogTitle>{area.title}</DialogTitle>
                              <Image
                                src={area.image}
                                alt={`${area.title} at Vistacampo rehabilitation center - ${area.description}`}
                                title={`${area.title} - Vistacampo Facilities`}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl mb-3">{area.title}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {area.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {area.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your recovery journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a visit and get clear guidance on treatment, admission, and what to expect on arrival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <WhatsAppCtaIcon tone="brand" />
                  Schedule a visit
                </Button>
              </a>
              <Link href="/en/contacto">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contact us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
