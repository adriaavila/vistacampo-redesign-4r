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
import { WHATSAPP_LINK } from "@/lib/constants"
import { TreatmentHeroCollage } from "@/components/treatment-hero-collage"

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
        "Comfort garantizado",
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
              Nuestras instalaciones
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              Instalaciones modernas y cómodas
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestras instalaciones están diseñadas para proporcionar un ambiente seguro, cómodo y terapéutico para tu proceso de recuperación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <WhatsAppCtaIcon tone="contrast" />
                  Agendar visita
                </Button>
              </a>
              <Link href="/es/contacto">
                <Button variant="outline" size="lg" className="border-rose-900 text-rose-900">
                  Contáctanos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Instalaciones completas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo lo que necesitas para tu recuperación
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
                    <Card key={habitacion.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
                                onClick={() => setSelectedImage(habitacion.imagen)}
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
                        <CardTitle className="text-xl mb-3">{habitacion.titulo}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {habitacion.descripcion}
                        </CardDescription>
                        <div className="space-y-2">
                          {habitacion.caracteristicas.map((caracteristica, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
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
                    <Card key={zona.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
                                onClick={() => setSelectedImage(zona.imagen)}
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
                        <CardTitle className="text-xl mb-3">{zona.titulo}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {zona.descripcion}
                        </CardDescription>
                        <div className="space-y-2">
                          {zona.caracteristicas.map((caracteristica, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
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
                    <Card key={area.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
                                onClick={() => setSelectedImage(area.imagen)}
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
                        <CardTitle className="text-xl mb-3">{area.titulo}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {area.descripcion}
                        </CardDescription>
                        <div className="space-y-2">
                          {area.caracteristicas.map((caracteristica, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu proceso de recuperación?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestras instalaciones están listas para recibirte. Contáctanos para agendar una visita y conocer más sobre nuestros programas de tratamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <WhatsAppCtaIcon tone="brand" />
                  Agendar visita
                </Button>
              </a>
              <Link href="/es/contacto">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contáctanos
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
