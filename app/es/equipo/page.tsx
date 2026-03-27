import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Stethoscope,
  Brain,
  Heart,
  Users,
  GraduationCap,
  Award,
  Calendar,
  ArrowRight,
  Star,
  Shield,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

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
      cargo: "Fundador y director Vistacampo",
      especialidad: "Adicciones",
      imagen: "/images/Julio-Gonzales-Fundador y Director Vistacampo.jpg",
      experiencia: "20+ años",
      educacion: ["MD - Universidad Central de Venezuela", "Especialización en Adicciones - Hospital Universitario"],
      certificaciones: ["Certificado en Medicina de Adicciones", "Miembro de la Sociedad Venezolana de Adicciones"],
      descripcion:
        "Julio González lidera nuestro equipo con más de dos décadas de experiencia en el tratamiento de adicciones. Su enfoque integral combina la medicina tradicional con terapias innovadoras, priorizando siempre la dignidad y el bienestar del paciente.",
      especialidades: ["Desintoxicación médica", "Trastornos duales", "Farmacoterapia"],
    },
    {
      id: 2,
      nombre: "Dra. María Alvarez",
      cargo: "Miembro del comite científico",
      especialidad: "Psicología Clínica",
      imagen: "/images/Maria-Alvares.jpg",
      experiencia: "15+ años",
      educacion: [
        "Licenciatura en Psicología - Universidad Católica Andrés Bello",
        "Maestría en Psicología Clínica - Universidad Simón Bolívar",
      ],
      certificaciones: ["Especialista en Terapia Cognitivo-Conductual", "Certificación en Terapia Familiar Sistémica"],
      descripcion:
        "La Dra. Rodríguez coordina todos los programas terapéuticos de Vistacampo. Su experiencia en terapia familiar y su enfoque empático han sido fundamentales en la recuperación de cientos de pacientes y sus familias.",
      especialidades: ["Terapia individual", "Terapia familiar", "Prevención de recaídas"],
    },
    {
      id: 3,
      nombre: "Jorge Marquez",
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
      nombre: "Agustin Gabaldon",
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
      nombre: "Alejandro Marquez",
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
      <section className="relative overflow-hidden py-20">
        {/* Background photo */}
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/images/equipo-vistacampo.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Readability overlays — same treatment as tratamiento */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(255,255,255,0.58)_28%,rgba(255,255,255,0.18)_56%,transparent_82%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0.06)_24%,rgba(255,255,255,0.04)_76%,rgba(255,255,255,0.14))]" />
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1.5px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Nuestro equipo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6 drop-shadow-[0_2px_18px_rgba(255,255,255,0.92)]">
              Conoce a nuestro equipo especializado
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed drop-shadow-[0_1px_12px_rgba(255,255,255,0.88)]">
              Nuestro equipo multidisciplinario de profesionales está comprometido con brindar la más alta calidad de atención y apoyo
              para tu proceso de recuperación.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-emerald-600" />
                <span>Especialistas médicos</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-600" />
                <span>Psicólogos clínicos</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Terapeutas experimentados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Excelencia profesional
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Un equipo comprometido con tu recuperación
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
                    <Card key={miembro.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          {miembro.experiencia && (
                            <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
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
                                <Badge key={index} variant="outline" className="text-xs">
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
                    <Card key={miembro.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
                            {miembro.experiencia} de experiencia
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.descripcion}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                          <div className="flex flex-wrap gap-2">
                            {miembro.especialidades.map((especialidad, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
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
                    <Card key={miembro.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
                            {miembro.experiencia} de experiencia
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.descripcion}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                          <div className="flex flex-wrap gap-2">
                            {miembro.especialidades.map((especialidad, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
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
                    <Card key={miembro.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={miembro.imagen}
                              alt={`${miembro.nombre}, ${miembro.cargo} en Vistacampo centro de rehabilitación`}
                              title={`${miembro.nombre} - ${miembro.especialidad}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{miembro.cargo}</p>
                          <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                          <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
                            {miembro.experiencia} de experiencia
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{miembro.descripcion}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                          <div className="flex flex-wrap gap-2">
                            {miembro.especialidades.map((especialidad, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu proceso de recuperación?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo está listo para apoyarte en cada paso del camino. Contáctanos para conocer más sobre nuestros programas de tratamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/contacto">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contactar a nuestro equipo
                </Button>
              </Link>
              <Link href="/es/tratamiento">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Conocer nuestro tratamiento
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
