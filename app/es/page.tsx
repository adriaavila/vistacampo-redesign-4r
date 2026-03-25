"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, MessageCircle, Star, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"
import { TypingText } from "@/components/TypingText"
import { useTranslation } from "react-i18next"
import { initI18next } from "@/app/i18n"

// Fallback component for loading state
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Cargando...</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useTranslation("common");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await initI18next("es");
      setIsReady(true);
    };
    initializeI18n();
  }, []);

  if (!isReady) {
    return <LoadingFallback />;
  }

  return (
    <div className="min-h-screen">
      {/* 1. Centro de Rehabilitación Especializado - Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vc-hero-bg.png"
            alt="Vista panorámica de Vistacampo"
            fill
            priority
            quality={95}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            className="object-cover object-[56%_center] md:object-center w-full h-full"
          />
        </div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
            <Badge variant="secondary" className="mb-4 text-rose-100 bg-rose-900/40">
              {t("badges.specializedRehab")}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
              <span className="text-white">Tu recuperación, en manos</span>{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
                expertas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Atención médica y psicológica especializada en un entorno discreto, seguro y profesional en Colonia
              Tovar, Venezuela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                  <span className="block sm:hidden">{t("actions.requestHelp")}</span>
                  <span className="hidden sm:inline">{t("actions.requestHelpNow")}</span>
                </Button>
              </a>
              <Link href="/es/tratamiento">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-rose-900 text-rose-900 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:text-rose-900 focus:text-rose-900"
                >
                  {t("actions.learnMoreTreatment")}
                  <ArrowRight className="ml-2 h-5 w-5 text-rose-900" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white mt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>{t("features.confidential")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>{t("features.attention247")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-600" />
                <span>{t("features.specializedTeam")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sobre Nosotros */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="text-rose-900 border-rose-900 mb-4">
                  {t("badges.aboutVistacampo")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-rose-900">
                  Pioneros en Tratamiento de Adicciones en Venezuela
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El Centro Vistacampo es una institución residencial privada y pionera en desintoxicación y
                  tratamiento de adicciones a sustancias como alcohol, cocaína, marihuana, tabaco, cigarrillos
                  electrónicos, pastillas de prescripción, drogas de diseño y comida emocional, ubicada en Colonia Tovar.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  También abordamos conductas adictivas como ludopatía, videojuegos, celulares, redes sociales,
                  trabajo, sexo, deporte, cirugías cosméticas, traumas y patología dual. Atendemos, con altos
                  estándares de seguridad y confidencialidad, a jóvenes y adultos cuyo consumo o conducta adictiva ya
                  impacta su calidad de vida y la de sus familiares.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Tratamiento Integral</h3>
                      <p className="text-gray-600">Abordamos tanto adicciones químicas como conductuales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Ambiente Seguro</h3>
                      <p className="text-gray-600">Alta seguridad y confidencialidad para jóvenes y adultos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Apoyo Familiar</h3>
                      <p className="text-gray-600">Acompañamiento integral para pacientes y familias</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/es/equipo">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      {t("actions.learnMoreAboutUs")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/vc-instalaciones.jpeg"
                  alt="Instalaciones de Vistacampo - Centro de rehabilitación en ambiente natural"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">+15 años</p>
                      <p className="text-sm text-gray-600">de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mensaje del Fundador */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-rose-900 border-rose-900 mb-4">
                {t("badges.founderMessage")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
                Una historia de recuperación y esperanza
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Conoce la historia personal que inspiró la creación de Vistacampo y el compromiso que guía este
                proyecto.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/julio_gonzalez.jpg"
                    alt="Julio González - Fundador de Vistacampo Centro Terapéutico"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">Julio González</h3>
                      <p className="text-emerald-200">Fundador de Vistacampo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-rose-900/5 p-8 rounded-2xl border-l-4 border-rose-900">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      En septiembre del año 2001, tomé la difícil y forzosa decisión de apartarme de la familia y de mi
                      profesión, para viajar al extranjero, en búsqueda de un tratamiento que me ayudara a solucionar mi
                      incontrolable dependencia al alcohol y otras drogas.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Han pasado muchos años desde entonces, y visto hoy, puedo ratificar que fue la decisión más
                      acertada. Gracias al tratamiento que recibí y al equipo humano del Centro Terapéutico del Vallés,
                      en Cataluña, me recuperé y aprendí a vivir sin consumir y, lo más importante, a vivir con
                      dignidad.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Pero la rueda de la vida continuó girando y años después… volví a aquel mismo pueblo donde recibí
                      el alta, para incorporarme al equipo y trabajar ayudando a otros. Aquellos años de estudio y
                      formación, al lado de los especialistas que habían fundado el tratamiento cerca de 1984,
                      despertaron en mí una gran motivación y compromiso por regresar a Venezuela para promover un
                      Centro pionero en la recuperación de la drogodependencia.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Fue así que fundamos el Centro Terapéutico Vistacampo, junto a un equipo multidisciplinario y
                      científicamente especializado de médicos, psiquiatras, monitores y terapeutas; varios de ellos,
                      además, con experiencia de recuperación personal.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Un sueño se ha cumplido y también un compromiso. Hoy, quienes atraviesan esta situación o
                      acompañan a un familiar cuentan con un lugar en Venezuela donde recibir un tratamiento profesional
                      y científicamente sustentado.
                    </p>

                    <div className="bg-white p-6 rounded-lg shadow-lg border border-emerald-200 my-6">
                      <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                        Solo hace falta dar el primer paso y contactar a Centro Vistacampo{" "}
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 font-semibold hover:underline"
                        >
                          (+58) 412-231-5968
                        </a>{" "}
                        o desde tu Digitel marca{" "}
                        <span className="text-emerald-600 font-semibold">*CAMBIO (226246)</span>.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Aquí te acompañamos para iniciar un camino real de recuperación, con la dignidad y el respeto que
                      todos merecemos cuando la vida se desordena y hace falta pedir ayuda.
                    </p>

                    <p className="text-emerald-700 font-semibold text-lg">Esperamos por ti.</p>

                    <div className="mt-6 pt-4 border-t border-emerald-200">
                      <p className="text-gray-600 italic">
                        <strong>Julio González</strong>
                        <br />
                        Fundador
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                      <WhatsAppIcon className="mr-2 h-4 w-4" color="#10b981" />
                      {t("actions.contactWhatsApp")}
                    </Button>
                  </a>
                  <Link href="/es/contacto" className="flex-1">
                    <Button
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    >
                      {t("actions.moreInfo")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nuestros Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("badges.ourServices")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tratamiento especializado y personalizado
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Ofrecemos un enfoque integral que combina medicina, psicología y terapias especializadas para garantizar
                una recuperación exitosa y duradera.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Desintoxicación médica</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Proceso supervisado por médicos especializados para una desintoxicación segura y efectiva.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Terapia grupal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Sesiones grupales que fomentan el apoyo mutuo y el desarrollo de habilidades sociales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Terapia individual</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Atención personalizada con psicólogos especializados en adicciones y salud mental.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Terapia familiar</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Involucramos a la familia en el proceso de recuperación para fortalecer los vínculos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Seguimiento post-tratamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Acompañamiento continuo para mantener la sobriedad y prevenir recaídas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Terapias complementarias</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Arte terapia, mindfulness y actividades recreativas para una recuperación integral.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("badges.testimonials")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Historias de recuperación y esperanza
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Las experiencias de pacientes y familias son la mejor prueba del compromiso y la efectividad del
                tratamiento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Vistacampo me devolvió la vida. El equipo profesional y el ambiente acogedor fueron fundamentales
                    en mi proceso de recuperación. Hoy puedo decir que soy una persona nueva."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-semibold">S.M.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Salma Maaz</p>
                      <p className="text-sm text-gray-600">Paciente recuperada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Como familia, estamos eternamente agradecidos con Vistacampo. No solo salvaron a nuestro hijo, sino
                    que nos enseñaron cómo apoyarlo en su recuperación."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">H.G.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Henry Galviz</p>
                      <p className="text-sm text-gray-600">Familiar de paciente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "El tratamiento en Vistacampo cambió mi perspectiva de vida. El seguimiento post-tratamiento ha sido
                    clave para mantener mi sobriedad durante estos 3 años."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">O.M.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Oscar Martin</p>
                      <p className="text-sm text-gray-600">Paciente recuperado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.ready")}</h2>
              <p className="text-xl mb-8 opacity-90">
                {t("cta.text")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                    {t("actions.contactWhatsApp")}
                  </Button>
                </a>
                <Link href="/es/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg"
                  >
                    {t("actions.moreInfo")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm opacity-90">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-600" />
                  <span>{t("features.confidential")}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 text-emerald-600" />
                  <span>{t("features.personalizedAttention")}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" color="#10b981" />
                  <span>{t("features.available247")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
