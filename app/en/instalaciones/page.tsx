"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  ArrowRight,
  Bed,
  ZoomIn,
  Building2,
  Trees,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteCtaBand } from "@/components/site-page-primitives"
import { WhatsAppCtaIcon } from "@/components/whatsapp-cta-icon"
import { WHATSAPP_LINK_EN } from "@/lib/constants"

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
        "Comfort assured",
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
  const heroHighlights = [
    { icon: Bed, label: "Private and shared rooms" },
    { icon: Building2, label: "Dedicated therapy spaces" },
    { icon: Trees, label: "Nature-led residential setting" },
  ]
  const heroSupportCards = [
    {
      src: "/images/habitacion-individual-premium.png",
      alt: "Private premium room at Vistacampo",
      label: "Private room comfort",
    },
    {
      src: "/images/vc-sala-terapia-grupal.jpg",
      alt: "Group therapy room inside Vistacampo",
      label: "Dedicated group therapy spaces",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(107,31,43,0.14),transparent_24%),linear-gradient(180deg,#f6f2ec_0%,#fafafa_72%)] py-12 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.76),rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.84))]"
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.92fr)] lg:gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <Badge variant="outline" className="vc-kicker mb-4">
                Our facilities
              </Badge>
              <h1 className="mx-auto mb-6 max-w-[12ch] text-4xl font-semibold leading-[0.94] text-[#0f241a] sm:text-5xl lg:mx-0 lg:text-6xl">
                Modern and comfortable facilities
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[rgba(29,47,38,0.78)] sm:text-xl lg:mx-0">
                Our facilities are designed to provide a safe, comfortable, and therapeutic environment for every
                stage of recovery.
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {heroHighlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/84 px-4 py-2 text-sm text-[rgba(29,47,38,0.76)] shadow-sm backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 text-[#6b1f2b]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-[#1a3628] hover:bg-[#6b1f2b] sm:w-auto">
                    <WhatsAppCtaIcon tone="contrast" />
                    Schedule a visit
                  </Button>
                </a>
                <Link href="/en/contacto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-[#1a3628] bg-white/76 text-[#1a3628] shadow-sm transition-all duration-300 hover:bg-[#1a3628] hover:text-[#fafafa] sm:w-auto"
                  >
                    Contact us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[38rem]">
              <div className="vc-page-panel p-3">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/50 bg-slate-950/62 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    Residential therapeutic setting
                  </div>
                  <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                    <Image
                      src="/images/vc-instalaciones.jpeg"
                      alt="Main Vistacampo residence surrounded by nature"
                      fill
                      priority
                      sizes="(min-width: 1024px) 38rem, (min-width: 640px) 80vw, 100vw"
                      className="object-cover object-[center_35%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/22 via-transparent to-white/8" />
                    <div className="absolute inset-x-4 bottom-4 z-10 rounded-[1.25rem] border border-white/15 bg-slate-950/68 p-4 shadow-lg backdrop-blur-md">
                      <p className="text-sm font-medium leading-relaxed text-white">
                        Comfort, privacy, and nature integrated into the daily treatment experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {heroSupportCards.map((card) => (
                  <div
                    key={card.label}
                    className="vc-page-panel p-2"
                  >
                    <div className="relative overflow-hidden rounded-[1rem]">
                      <div className="relative aspect-[5/4]">
                        <Image
                          src={card.src}
                          alt={card.alt}
                          fill
                          sizes="(min-width: 1024px) 17rem, 45vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className="px-2 pb-2 pt-3 text-sm font-medium leading-snug text-slate-700">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="bg-[rgba(250,250,250,0.64)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="vc-kicker mb-4">
                Complete facilities
              </Badge>
              <h2 className="vc-section-title mb-4">
                Everything you need for your recovery
              </h2>
              <p className="vc-section-copy mx-auto max-w-3xl">
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
                    <Card key={room.id} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
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
                        <CardTitle className="mb-3 text-xl text-[#0f241a]">{room.title}</CardTitle>
                        <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                          {room.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {room.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-[rgba(29,47,38,0.72)]">
                              <CheckCircle className="h-4 w-4 text-[#6b1f2b]" />
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
                    <Card key={area.id} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
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
                        <CardTitle className="mb-3 text-xl text-[#0f241a]">{area.title}</CardTitle>
                        <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                          {area.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {area.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-[rgba(29,47,38,0.72)]">
                              <CheckCircle className="h-4 w-4 text-[#6b1f2b]" />
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
                    <Card key={area.id} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
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
                        <CardTitle className="mb-3 text-xl text-[#0f241a]">{area.title}</CardTitle>
                        <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                          {area.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {area.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-[rgba(29,47,38,0.72)]">
                              <CheckCircle className="h-4 w-4 text-[#6b1f2b]" />
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
      <SiteCtaBand
        badge="Visits and guidance"
        title="See the environment that supports recovery up close"
        description="Schedule a visit or speak with our team to understand the spaces, daily rhythm, and admission process clearly."
        actions={
          <>
            <Button asChild size="lg" className="bg-white text-[#1a3628] hover:bg-[#f6f2ec]">
              <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer">
                <WhatsAppCtaIcon tone="brand" />
                Schedule a visit
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/8 text-white hover:bg-white hover:text-[#1a3628]"
            >
              <Link href="/en/contacto">
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </>
        }
      />
    </div>
  )
}
