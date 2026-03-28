import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Stethoscope,
  Brain,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteCtaBand } from "@/components/site-page-primitives"

export const metadata: Metadata = {
  title: "Nuestro Equipo Médico - Especialistas en Adicciones | Vistacampo",
  description:
    "Conoce a nuestro equipo de médicos, psicólogos y terapeutas especializados en tratamiento de adicciones. Profesionales con amplia experiencia en Colonia Tovar, Venezuela.",
  keywords: "equipo médico, psicólogos, terapeutas, especialistas adicciones, Colonia Tovar, Venezuela",
}

const equipoData = {
  direccion: [
    {
      id: 1,
      nombre: "Julio González",
      cargo: "Fundador y director de Vistacampo",
      especialidad: "Adicciones",
      imagen: "/images/julio-gonzalez-equipo.jpg",
      experiencia: "20+ años",
      educacion: ["MD - Universidad Central de Venezuela", "Especialización en Adicciones - Hospital Universitario"],
      certificaciones: ["Certificado en Medicina de Adicciones", "Miembro de la Sociedad Venezolana de Adicciones"],
      descripcion:
        "Julio González lidera nuestro equipo con más de dos décadas de experiencia en el tratamiento de adicciones. Su enfoque integral combina la medicina tradicional con terapias innovadoras, priorizando siempre la dignidad y el bienestar del paciente.",
      especialidades: ["Desintoxicación médica", "Trastornos duales", "Farmacoterapia"],
    },
    {
      id: 2,
      nombre: "Dra. María Álvarez",
      cargo: "Miembro del comité científico",
      especialidad: "Psicología Clínica",
      imagen: "/images/Maria-Alvares.jpg",
      experiencia: "15+ años",
      educacion: [
        "Licenciatura en Psicología - Universidad Católica Andrés Bello",
        "Maestría en Psicología Clínica - Universidad Simón Bolívar",
      ],
      certificaciones: ["Especialista en Terapia Cognitivo-Conductual", "Certificación en Terapia Familiar Sistémica"],
      descripcion:
        "La Dra. Álvarez coordina todos los programas terapéuticos de Vistacampo. Su experiencia en terapia familiar y su enfoque empático han sido fundamentales en la recuperación de cientos de pacientes y sus familias.",
      especialidades: ["Terapia individual", "Terapia familiar", "Prevención de recaídas"],
    },
    {
      id: 3,
      nombre: "Jorge Márquez",
      cargo: "Gerencia",
      especialidad: "Gerencia",
      imagen: "/images/Jorge-Marquez-Gerencia.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
      curriculum: "Experto en gestión administrativa y operativa con amplia experiencia en el sector salud. Especializado en optimización de procesos y coordinación de equipos multidisciplinarios.",
    },
    {
      id: 4,
      nombre: "Agustín Gabaldón",
      cargo: "Director",
      especialidad: "Dirección",
      imagen: "/images/Agustin-Gabaldon-Director.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
      curriculum: "Director ejecutivo con trayectoria sólida en liderazgo organizacional y desarrollo estratégico. Experto en gestión de recursos humanos y planificación institucional.",
    },
    {
      id: 5,
      nombre: "Alejandra Reyna",
      cargo: "Planificación estratégica",
      especialidad: "Planificación estratégica",
      imagen: "/images/Alejandra-Reyna-.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
      curriculum: "Especialista en planificación estratégica y desarrollo organizacional. Experta en análisis de mercado, formulación de políticas y gestión de proyectos de salud.",
    },
  ],
  medicos: [
    {
      id: 3,
      nombre: "Dr. Eduardo Landaeta",
      cargo: "Psiquiatra de la institución",
      especialidad: "Psiquiatría",
      imagen: "/images/eduardo-landaeta.png",
      experiencia: "10+ años",
      educacion: ["MD - Universidad Central de Venezuela", "Especialización en Psiquiatría"],
      certificaciones: ["Certificado en Psiquiatría", "Especialista en Trastornos Adictivos"],
      descripcion:
        "El Dr. Landaeta es psiquiatra especializado en el tratamiento de trastornos mentales asociados con adicciones. Su enfoque integral combina terapia farmacológica con intervenciones psicosociales para una recuperación completa.",
      especialidades: ["Evaluación psiquiátrica", "Tratamiento farmacológico", "Trastornos duales", "Terapia de grupo"],
    },
    {
      id: 4,
      nombre: "Dra. Omaira Fehr",
      cargo: "Médico internista",
      especialidad: "Medicina Interna",
      imagen: "/images/omaira-fehr.jpg",
      experiencia: "5+ años",
      descripcion:
        "La Dra. Fehr se especializa en el manejo médico de pacientes con trastornos adictivos. Su experiencia en medicina interna asegura una atención integral para pacientes con condiciones médicas complejas.",
      especialidades: ["Evaluación médica", "Protocolos de desintoxicación", "Manejo de enfermedades crónicas"],
    },
  ],
  terapeutas: [
    {
      id: 4,
      nombre: "Alejandro Márquez",
      cargo: "Terapeuta Familiar",
      especialidad: "Terapia Familiar",
      imagen: "/images/Alejandro-Marquez-Equipo terapeutico.png",
      experiencia: "11+ años",
      descripcion:
        "Alejandro se enfoca en la dinámica familiar y la terapia sistémica. Trabaja con familias para reconstruir relaciones y crear entornos de apoyo para la recuperación.",
      especialidades: ["Terapia familiar", "Terapia sistémica", "Terapia de parejas"],
    },
    {
      id: 5,
      nombre: "Pau Saman",
      cargo: "Psicóloga Clínica",
      especialidad: "Psicología Clínica",
      imagen: "/images/Pau-Saman-Equipo terapeutico.png",
      experiencia: "7+ años",
      descripcion:
        "Pau se especializa en terapia de trauma y enfoques cognitivo-conductuales. Su trabajo se centra en ayudar a los pacientes a desarrollar mecanismos de afrontamiento saludables y habilidades de regulación emocional.",
      especialidades: ["Terapia de trauma", "TCC", "Regulación emocional"],
    },
  ],
  apoyo: [
    {
      id: 6,
      nombre: "Karina Urbina",
      cargo: "Coordinadora de Enfermería",
      especialidad: "Enfermería",
      imagen: "/images/karina-urbina.png",
      experiencia: "15+ años",
      descripcion:
        "Karina coordina el equipo de enfermería y asegura la atención de alta calidad para los pacientes. Su experiencia en enfermería de salud mental es crucial para la seguridad y comodidad del paciente.",
      especialidades: ["Atención al paciente", "Manejo de medicamentos", "Intervención en crisis"],
    },
    {
      id: 7,
      nombre: "Mauro Urbina",
      cargo: "Coordinador de Apoyo",
      especialidad: "Apoyo al Paciente",
      imagen: "/images/mauro-urbina.png",
      experiencia: "8+ años",
      educacion: ["Trabajo Social", "Consejería en Adicciones"],
      certificaciones: ["Consejería en Adicciones", "Intervención en Crisis"],
      descripcion:
        "Mauro brinda apoyo emocional y orientación a los pacientes durante todo su proceso de recuperación. Su rol es esencial para mantener la motivación y el compromiso del paciente.",
      especialidades: ["Apoyo al paciente", "Intervención en crisis", "Entrevista motivacional"],
    },
  ],
}

export default function EquipoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(107,31,43,0.14),transparent_24%),linear-gradient(180deg,#f6f2ec_0%,#fafafa_72%)] py-12 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.84))]"
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-14">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <Badge variant="outline" className="vc-kicker mb-4">
                Nuestro equipo
              </Badge>
              <h1 className="mx-auto mb-6 max-w-[12ch] text-4xl font-semibold leading-[0.95] text-[#0f241a] lg:mx-0 lg:text-6xl">
                Conoce a nuestro equipo especializado
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[rgba(29,47,38,0.78)] sm:text-xl lg:mx-0">
                Nuestro equipo multidisciplinario de profesionales está comprometido con brindar la más alta calidad de
                atención y apoyo para tu proceso de recuperación.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-700 lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/82 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <Stethoscope className="h-4 w-4 text-[#6b1f2b]" />
                  <span>Especialistas médicos</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/82 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <Brain className="h-4 w-4 text-[#6b1f2b]" />
                  <span>Psicólogos clínicos</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/82 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <Heart className="h-4 w-4 text-[#6b1f2b]" />
                  <span>Terapeutas experimentados</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="vc-page-panel relative mx-auto max-w-[36rem] overflow-hidden">
                <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white/28 via-white/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-slate-950/14 via-slate-950/0 to-transparent" />
                <div className="relative aspect-[4/3] sm:aspect-[3/2]">
                  <Image
                    src="/images/equipo-vistacampo.jpg"
                    alt="Tres miembros del equipo de Vistacampo posando juntos en la clinica."
                    fill
                    priority
                    sizes="(min-width: 1024px) 36rem, (min-width: 640px) 80vw, 100vw"
                    className="object-cover object-[center_22%] sm:object-[center_24%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="bg-[rgba(250,250,250,0.64)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="vc-kicker mb-4">
                Excelencia profesional
              </Badge>
              <h2 className="vc-section-title mb-4">
                Un equipo comprometido con tu recuperación
              </h2>
              <p className="vc-section-copy mx-auto max-w-3xl">
                Nuestro equipo combina experiencia médica, conocimiento psicológico y experiencia terapéutica para brindar
                atención integral y personalizada a cada paciente.
              </p>
            </div>

            <Tabs defaultValue="direccion" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="direccion" className="text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Dirección
                </TabsTrigger>
                <TabsTrigger value="medicos" className="text-lg">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Médicos
                </TabsTrigger>
                <TabsTrigger value="terapeutas" className="text-lg">
                  <Brain className="mr-2 h-5 w-5" />
                  Terapeutas
                </TabsTrigger>
                <TabsTrigger value="apoyo" className="text-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Apoyo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="direccion" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {equipoData.direccion.map((miembro) => (
                    <Card key={miembro.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          {miembro.experiencia && (
                            <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                              {miembro.experiencia} de experiencia
                            </Badge>
                          )}
                        </div>
                        {miembro.descripcion && (
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.descripcion}</p>
                        )}
                        {miembro.curriculum && (
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.curriculum}</p>
                        )}
                        {miembro.especialidades.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                            <div className="flex flex-wrap gap-2">
                              {miembro.especialidades.map((especialidad, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                                >
                                  {especialidad}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="medicos" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {equipoData.medicos.map((miembro) => (
                    <Card key={miembro.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                            {miembro.experiencia} de experiencia
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.descripcion}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                          <div className="flex flex-wrap gap-2">
                            {miembro.especialidades.map((especialidad, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                              >
                                {especialidad}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="terapeutas" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {equipoData.terapeutas.map((miembro) => (
                    <Card key={miembro.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                            {miembro.experiencia} de experiencia
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.descripcion}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                          <div className="flex flex-wrap gap-2">
                            {miembro.especialidades.map((especialidad, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                              >
                                {especialidad}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="apoyo" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {equipoData.apoyo.map((miembro) => (
                    <Card key={miembro.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                            {miembro.experiencia} de experiencia
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.descripcion}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                          <div className="flex flex-wrap gap-2">
                            {miembro.especialidades.map((especialidad, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                              >
                                {especialidad}
                              </Badge>
                            ))}
                          </div>
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
        badge="Equipo y admisión"
        title="Habla con profesionales que entienden cada etapa del proceso"
        description="Podemos orientarte sobre evaluación inicial, tratamiento residencial y el acompañamiento más adecuado para la situación actual."
        actions={
          <>
            <Button asChild size="lg" className="bg-white text-[#1a3628] hover:bg-[#f6f2ec]">
              <Link href="/es/contacto">Contactar a nuestro equipo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/8 text-white hover:bg-white hover:text-[#1a3628]"
            >
              <Link href="/es/tratamiento">
                Conocer nuestro tratamiento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </>
        }
      />
    </div>
  )
}
