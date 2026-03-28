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
import { WHATSAPP_LINK } from "@/lib/constants"

const instalacionesData = {
  habitaciones: [
    {
      id: 1,
      titulo: "Habitación individual premium",
      descripcion: "Espacios privados y cómodos diseñados para el descanso y la reflexión personal.",
      imagen: "/images/habitacion-individual-premium.png",
      caracteristicas: ["Baño privado", "Aire acondicionado", "Escritorio", "Armario amplio", "Vista al jardín"],
    },
    {
      id: 2,
      titulo: "Habitación compartida",
      descripcion: "Ambientes que fomentan la compañía y el apoyo mutuo entre pacientes.",
      imagen: "/images/Dos camas.jpg",
      caracteristicas: [
        "2 camas individuales",
        "Baño compartido",
        "Área de estudio",
        "Lockers personales",
        "Ventilación natural",
      ],
    },
    {
      id: 3,
      titulo: "Suite de recuperación",
      descripcion: "Espacios especiales para pacientes en etapas avanzadas de recuperación.",
      imagen: "/images/suite-recuperacion.png",
      caracteristicas: ["Sala de estar", "Kitchenette", "Baño completo", "Balcón privado", "Mobiliario premium"],
    },
  ],
  zonasComunes: [
    {
      id: 4,
      titulo: "Sala de terapia grupal",
      descripcion: "Espacios acogedores diseñados para facilitar la comunicación y el trabajo en equipo.",
      imagen: "/images/vc-sala-terapia-grupal.jpg",
      caracteristicas: [
        "Círculo de asientos",
        "Iluminación natural",
        "Acústica optimizada",
        "Ambiente cálido",
        "Privacidad total",
      ],
    },
    {
      id: 5,
      titulo: "Biblioteca y sala de estar",
      descripcion: "Ambiente tranquilo para la lectura, reflexión y actividades educativas.",
      imagen: "/images/vc-sala-cala.jpeg",
      caracteristicas: [
        "Colección especializada",
        "Mesas de estudio",
        "Smart TV",
        "Zona de lectura",
        "Comodidad garantizada",
      ],
    },
    {
      id: 6,
      titulo: "Comedor principal",
      descripcion: "Espacio amplio y luminoso donde se comparten las comidas en un ambiente familiar.",
      imagen: "/images/vc-comedor.jpeg",
      caracteristicas: [
        "Gran capacidad",
        "Iluminación natural",
        "Ambiente familiar",
        "Menú saludable",
        "Interacción social",
      ],
    },
  ],
  areasExteriores: [
    {
      id: 7,
      titulo: "Jardín de meditación",
      descripcion: "Espacio exterior tranquilo para la meditación y conexión con la naturaleza.",
      imagen: "/images/vc-vista.jpeg",
      caracteristicas: [
        "Áreas de meditación",
        "Plantas nativas",
        "Senderos para caminar",
        "Zonas de descanso",
        "Sonidos naturales",
      ],
    },
    {
      id: 8,
      titulo: "Área deportiva y recreativa",
      descripcion: "Espacios para la actividad física y recreación saludable.",
      imagen: "/images/areaDeportivaVC.jpeg",
      caracteristicas: [
        "Equipos de ejercicio",
        "Canchas deportivas",
        "Senderos para caminar",
        "Actividades al aire libre",
        "Supervisión profesional",
      ],
    },
  ],
}

export default function InstalacionesPage() {
  const heroHighlights = [
    { icon: Bed, label: "Habitaciones privadas y compartidas" },
    { icon: Building2, label: "Espacios dedicados a terapia" },
    { icon: Trees, label: "Entorno residencial en la naturaleza" },
  ]
  const heroSupportCards = [
    {
      src: "/images/habitacion-individual-premium.png",
      alt: "Habitacion individual premium en Vistacampo",
      label: "Comodidad en habitaciones privadas",
    },
    {
      src: "/images/vc-sala-terapia-grupal.jpg",
      alt: "Sala de terapia grupal dentro de Vistacampo",
      label: "Espacios pensados para terapia grupal",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(107,31,43,0.14),transparent_24%),linear-gradient(180deg,#f6f2ec_0%,#fafafa_72%)] py-12 sm:py-16 lg:min-h-[calc(100svh-6rem)] lg:py-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.76),rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.84))]"
        />

        <div className="container relative z-10 mx-auto px-4 lg:flex lg:min-h-[calc(100svh-6rem)] lg:items-center">
          <div className="grid items-center gap-12 lg:w-full lg:grid-cols-[minmax(0,0.8fr)_minmax(380px,1.08fr)] lg:gap-7">
            <div className="max-w-2xl text-center lg:mx-auto lg:max-w-xl">
              <Badge variant="outline" className="vc-kicker mb-4">
                Nuestras instalaciones
              </Badge>
              <h1 className="mx-auto mb-4 max-w-[11.5ch] text-4xl font-semibold leading-[0.94] text-[#0f241a] sm:text-5xl lg:text-[3.55rem]">
                Instalaciones modernas y cómodas
              </h1>
              <div className="mx-auto mt-5 flex max-w-2xl flex-col items-center">
                <p className="max-w-2xl text-center text-lg leading-relaxed text-[rgba(29,47,38,0.78)] sm:text-xl lg:text-lg">
                  Nuestras instalaciones están diseñadas para ofrecer un entorno seguro, cómodo y terapéutico durante
                  cada etapa de la recuperación.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                  {heroHighlights.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/84 px-4 py-2 text-sm text-[rgba(29,47,38,0.76)] shadow-sm backdrop-blur-sm lg:px-3.5 lg:py-1.5 lg:text-[0.82rem]"
                    >
                      <Icon className="h-4 w-4 text-[#6b1f2b]" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-[#1a3628] hover:bg-[#6b1f2b] sm:w-auto lg:px-6 lg:py-3 lg:text-base">
                      <WhatsAppCtaIcon tone="contrast" />
                      Agendar visita
                    </Button>
                  </a>
                  <Link href="/es/contacto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-[#1a3628] bg-white/76 text-[#1a3628] shadow-sm transition-all duration-300 hover:bg-[#1a3628] hover:text-[#fafafa] sm:w-auto lg:px-6 lg:py-3 lg:text-base"
                    >
                      Contáctanos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[38rem] lg:max-w-[38rem] xl:max-w-[40rem]">
              <div className="lg:hidden">
                <div className="vc-page-panel p-3 lg:p-2">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/50 bg-slate-950/62 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      Entorno terapéutico residencial
                    </div>
                    <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                      <Image
                        src="/images/vc-instalaciones.jpeg"
                        alt="Residencia principal de Vistacampo rodeada de naturaleza"
                        fill
                        priority
                        sizes="(min-width: 1024px) 38rem, (min-width: 640px) 80vw, 100vw"
                        className="object-cover object-[center_35%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/22 via-transparent to-white/8" />
                      <div className="absolute inset-x-4 bottom-4 z-10 rounded-[1.25rem] border border-white/15 bg-slate-950/68 p-4 shadow-lg backdrop-blur-md lg:p-3">
                        <p className="text-sm font-medium leading-relaxed text-white lg:text-[0.82rem]">
                          Comodidad, privacidad y naturaleza integradas en la experiencia diaria del tratamiento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 lg:hidden">
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

              <div className="hidden lg:block">
                <div className="vc-page-panel p-2">
                  <div className="grid gap-3.5">
                    <div className="relative overflow-hidden rounded-[1.4rem]">
                      <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/50 bg-slate-950/62 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        Entorno terapéutico residencial
                      </div>
                      <div className="relative aspect-[16/9]">
                        <Image
                          src="/images/vc-instalaciones.jpeg"
                          alt="Residencia principal de Vistacampo rodeada de naturaleza"
                          fill
                          priority
                          sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 38rem, 100vw"
                          className="object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/22 via-transparent to-white/8" />
                        <div className="absolute inset-x-3 bottom-3 z-10 rounded-[1rem] border border-white/15 bg-slate-950/68 p-3 shadow-lg backdrop-blur-md">
                          <p className="text-[0.82rem] font-medium leading-relaxed text-white">
                            Comodidad, privacidad y naturaleza integradas en la experiencia diaria del tratamiento.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      {heroSupportCards.map((card) => (
                        <div key={card.label} className="relative overflow-hidden rounded-[1.2rem]">
                          <div className="relative aspect-[16/10]">
                            <Image
                              src={card.src}
                              alt={card.alt}
                              fill
                              sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 17rem, 50vw"
                              className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 via-transparent to-transparent" />
                            <div className="absolute inset-x-3 bottom-3 z-10 rounded-full border border-white/15 bg-slate-950/62 px-3 py-1.5 text-[0.7rem] font-medium leading-tight text-white backdrop-blur-sm">
                              {card.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones Overview */}
      <section className="bg-[rgba(250,250,250,0.64)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="vc-kicker mb-4">
                Instalaciones completas
              </Badge>
              <h2 className="vc-section-title mb-4">
                Todo lo que necesitas para tu recuperación
              </h2>
              <p className="vc-section-copy mx-auto max-w-3xl">
                Nuestras instalaciones incluyen alojamientos cómodos, espacios terapéuticos y áreas exteriores diseñadas para apoyar tu proceso de sanación.
              </p>
            </div>

            <Tabs defaultValue="habitaciones" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="habitaciones" className="text-lg">
                  <Bed className="mr-2 h-5 w-5" />
                  Alojamientos
                </TabsTrigger>
                <TabsTrigger value="comunes" className="text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Zonas Comunes
                </TabsTrigger>
                <TabsTrigger value="exteriores" className="text-lg">
                  <Trees className="mr-2 h-5 w-5" />
                  Áreas Exteriores
                </TabsTrigger>
              </TabsList>

              <TabsContent value="habitaciones" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {instalacionesData.habitaciones.map((habitacion) => (
                    <Card key={habitacion.id} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={habitacion.imagen}
                            alt={`${habitacion.titulo} en Vistacampo centro de rehabilitación - ${habitacion.descripcion}`}
                            title={`${habitacion.titulo} - Instalaciones Vistacampo`}
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
                              <DialogTitle>{habitacion.titulo}</DialogTitle>
                              <Image
                                src={habitacion.imagen}
                                alt={`${habitacion.titulo} en Vistacampo centro de rehabilitación - ${habitacion.descripcion}`}
                                title={`${habitacion.titulo} - Instalaciones Vistacampo`}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="mb-3 text-xl text-[#0f241a]">{habitacion.titulo}</CardTitle>
                        <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                          {habitacion.descripcion}
                        </CardDescription>
                        <div className="space-y-2">
                          {habitacion.caracteristicas.map((caracteristica, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-[rgba(29,47,38,0.72)]">
                              <CheckCircle className="h-4 w-4 text-[#6b1f2b]" />
                              <span>{caracteristica}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comunes" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {instalacionesData.zonasComunes.map((zona) => (
                    <Card key={zona.id} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={zona.imagen}
                            alt={zona.titulo}
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
                              <DialogTitle>{zona.titulo}</DialogTitle>
                              <Image
                                src={zona.imagen}
                                alt={zona.titulo}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="mb-3 text-xl text-[#0f241a]">{zona.titulo}</CardTitle>
                        <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                          {zona.descripcion}
                        </CardDescription>
                        <div className="space-y-2">
                          {zona.caracteristicas.map((caracteristica, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-[rgba(29,47,38,0.72)]">
                              <CheckCircle className="h-4 w-4 text-[#6b1f2b]" />
                              <span>{caracteristica}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="exteriores" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {instalacionesData.areasExteriores.map((area) => (
                    <Card key={area.id} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={area.imagen}
                            alt={`${area.titulo} en Vistacampo centro de rehabilitación - ${area.descripcion}`}
                            title={`${area.titulo} - Instalaciones Vistacampo`}
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
                              <DialogTitle>{area.titulo}</DialogTitle>
                              <Image
                                src={area.imagen}
                                alt={`${area.titulo} en Vistacampo centro de rehabilitación - ${area.descripcion}`}
                                title={`${area.titulo} - Instalaciones Vistacampo`}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="mb-3 text-xl text-[#0f241a]">{area.titulo}</CardTitle>
                        <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                          {area.descripcion}
                        </CardDescription>
                        <div className="space-y-2">
                          {area.caracteristicas.map((caracteristica, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-[rgba(29,47,38,0.72)]">
                              <CheckCircle className="h-4 w-4 text-[#6b1f2b]" />
                              <span>{caracteristica}</span>
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
        badge="Visita y orientación"
        title="Conoce de cerca el entorno que acompaña la recuperación"
        description="Agenda una visita o conversa con nuestro equipo para entender cómo funcionan los espacios, la convivencia y la admisión."
        actions={
          <>
            <Button asChild size="lg" className="bg-white text-[#1a3628] hover:bg-[#f6f2ec]">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppCtaIcon tone="brand" />
                Agendar visita
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/8 text-white hover:bg-white hover:text-[#1a3628]"
            >
              <Link href="/es/contacto">
                Contáctanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </>
        }
      />
    </div>
  )
}
