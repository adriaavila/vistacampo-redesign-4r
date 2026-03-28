"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Users, Heart, Shield, ArrowRight } from "lucide-react";
import { WhatsAppCtaIcon } from "@/components/whatsapp-cta-icon";
import { SiteCtaBand } from "@/components/site-page-primitives";
import { TreatmentPhaseCarousel } from "@/components/treatment-phase-carousel";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_LINK, WHATSAPP_LINK_EN } from "@/lib/constants";
import { initI18next } from "@/app/i18n";

type Props = {
  lng: "es" | "en";
};

export default function TreatmentClient({ lng }: Props) {
  const { t } = useTranslation("common");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await initI18next(lng);
      setIsReady(true);
    };
    initializeI18n();
  }, [lng]);

  // Show loading state while i18n is initializing
  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {lng === "es" ? "Cargando..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  const detoxSlides = [
    {
      src: "/images/vc-desintoxicacion-1.jpg",
      alt:
        lng === "es"
          ? "Pacientes realizando ejercicios supervisados al aire libre durante la fase de desintoxicacion en Vistacampo"
          : "Patients doing supervised outdoor exercises during the detox phase at Vistacampo",
      label: lng === "es" ? "Ejercicio fisico supervisado" : "Supervised physical activity",
    },
    {
      src: "/images/vc-desintoxicacion-2.jpg",
      alt:
        lng === "es"
          ? "Sesion grupal al aire libre durante la fase de desintoxicacion en Vistacampo"
          : "Outdoor group session during the detox phase at Vistacampo",
      label: lng === "es" ? "Sesion grupal en jardines" : "Group session in the gardens",
    },
  ];

  const deshabituacionSlides = [
    {
      src: "/images/vc-deshabituacion-1.jpg",
      alt:
        lng === "es"
          ? "Sesion de movimiento y activacion fisica durante la fase de deshabituacion en Vistacampo"
          : "Movement and physical activation session during the habit-change phase at Vistacampo",
      label: lng === "es" ? "Movimiento guiado en grupo" : "Guided group movement",
    },
    {
      src: "/images/vc-deshabituacion-2.jpg",
      alt:
        lng === "es"
          ? "Espacio de reflexion al aire libre durante la fase de deshabituacion en Vistacampo"
          : "Outdoor reflection space during the habit-change phase at Vistacampo",
      label: lng === "es" ? "Reflexion al aire libre" : "Outdoor reflection",
    },
  ];

  const rehabilitacionSlides = [
    {
      src: "/images/vc-rehabilitacion-1.jpg",
      alt:
        lng === "es"
          ? "Sesion guiada de meditacion y atencion plena durante la fase de rehabilitacion en Vistacampo"
          : "Guided meditation and mindfulness session during the rehabilitation phase at Vistacampo",
      label: lng === "es" ? "Meditacion y atencion plena" : "Meditation and mindfulness",
    },
    {
      src: "/images/vc-rehabilitacion-2.jpg",
      alt:
        lng === "es"
          ? "Actividad grupal al aire libre durante la fase de rehabilitacion en Vistacampo"
          : "Outdoor group activity during the rehabilitation phase at Vistacampo",
      label: lng === "es" ? "Actividad grupal al aire libre" : "Outdoor group activity",
    },
  ];

  const reinsercionSlides = [
    {
      src: "/images/vc-reinsercion-1.jpg",
      alt:
        lng === "es"
          ? "Aprendizaje de oficio y practica laboral durante la fase de reinsercion en Vistacampo"
          : "Vocational learning and work practice during the reintegration phase at Vistacampo",
      label: lng === "es" ? "Practica laboral supervisada" : "Supervised work practice",
    },
    {
      src: "/images/vc-reinsercion-2.jpg",
      alt:
        lng === "es"
          ? "Trabajo colaborativo al aire libre durante la fase de reinsercion en Vistacampo"
          : "Collaborative outdoor work during the reintegration phase at Vistacampo",
      label: lng === "es" ? "Trabajo colaborativo al aire libre" : "Outdoor collaborative work",
    },
  ];

  const heroHighlights =
    lng === "es"
      ? [
          { icon: Shield, label: "Supervisión clínica coordinada" },
          { icon: Users, label: "Intervención médica y psicológica" },
          { icon: Clock, label: "Seguimiento durante todo el proceso" },
        ]
      : [
          { icon: Shield, label: "Coordinated clinical supervision" },
          { icon: Users, label: "Medical and psychological care" },
          { icon: Clock, label: "Guidance through every phase" },
        ];

  const heroSupportCards =
    lng === "es"
      ? [
          {
            src: "/images/vc-desintoxicacion-1.jpg",
            alt: "Actividad física supervisada durante la fase inicial del tratamiento en Vistacampo",
            label: "Desintoxicación y estabilización",
          },
          {
            src: "/images/vc-rehabilitacion-1.jpg",
            alt: "Sesión guiada de meditación durante la fase de rehabilitación en Vistacampo",
            label: "Rehabilitación y prevención de recaídas",
          },
        ]
      : [
          {
            src: "/images/vc-desintoxicacion-1.jpg",
            alt: "Supervised physical activity during the first stage of treatment at Vistacampo",
            label: "Detox and stabilization",
          },
          {
            src: "/images/vc-rehabilitacion-1.jpg",
            alt: "Guided meditation session during the rehabilitation phase at Vistacampo",
            label: "Rehabilitation and relapse prevention",
          },
        ];

  const heroVisualKicker =
    lng === "es" ? "Modelo de tratamiento estructurado" : "Structured treatment model";
  const heroVisualNote =
    lng === "es"
      ? "Atención clínica, contención emocional y acompañamiento residencial en un mismo programa."
      : "Clinical care, emotional support, and residential guidance in one coordinated program.";
  const contactPageHref = lng === "es" ? "/es/contacto" : "/en/contacto";
  const whatsappHref = lng === "es" ? WHATSAPP_LINK : WHATSAPP_LINK_EN;
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(107,31,43,0.14),transparent_24%),linear-gradient(180deg,#f6f2ec_0%,#fafafa_72%)] py-12 sm:py-16 lg:min-h-[calc(100svh-6rem)] lg:py-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.76),rgba(255,255,255,0.18)_42%,rgba(255,255,255,0.84))]"
        />

        <div className="container relative z-10 mx-auto px-4 lg:flex lg:min-h-[calc(100svh-6rem)] lg:items-center">
          <div className="grid items-center gap-12 lg:w-full lg:grid-cols-[minmax(0,0.8fr)_minmax(380px,1.08fr)] lg:gap-7">
            <div className="max-w-2xl text-center lg:mx-auto lg:max-w-xl">
              <Badge variant="outline" className="vc-kicker mb-4">
                {t("treatment.hero.badge")}
              </Badge>
              <h1 className="mx-auto mb-4 max-w-[11.5ch] text-4xl font-semibold leading-[0.93] text-[#0f241a] sm:text-5xl lg:text-[3.55rem]">
                {t("treatment.hero.title")}
              </h1>
              <div className="mx-auto mt-5 flex max-w-2xl flex-col items-center">
                <p className="max-w-2xl text-center text-lg leading-relaxed text-[rgba(29,47,38,0.78)] sm:text-xl lg:text-lg">
                  {t("treatment.hero.subtitle")}
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="w-full bg-[#1a3628] px-8 py-4 text-lg text-white shadow-lg transition-all duration-300 hover:bg-[#6b1f2b] hover:shadow-xl sm:w-auto lg:px-6 lg:py-3 lg:text-base"
                    >
                      <WhatsAppCtaIcon tone="contrast" />
                      {t("treatment.hero.contact")}
                    </Button>
                  </a>
                  <Link href={contactPageHref}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-[#1a3628] bg-white/76 px-8 py-4 text-lg text-[#1a3628] shadow-sm transition-all duration-300 hover:bg-[#1a3628] hover:text-[#fafafa] sm:w-auto lg:px-6 lg:py-3 lg:text-base"
                    >
                      {lng === "es" ? "Hablar con el equipo" : "Talk to our team"}
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
                      {heroVisualKicker}
                    </div>
                    <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                      <Image
                        src="/images/vc-sala-terapia-grupal.jpg"
                        alt={
                          lng === "es"
                            ? "Sesión grupal guiada dentro de Vistacampo"
                            : "Guided group session inside Vistacampo"
                        }
                        fill
                        priority
                        sizes="(min-width: 1024px) 38rem, (min-width: 640px) 80vw, 100vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/28 via-transparent to-white/8" />
                      <div className="absolute inset-x-4 bottom-4 z-10 rounded-[1.25rem] border border-white/15 bg-slate-950/68 p-4 shadow-lg backdrop-blur-md lg:p-3">
                        <p className="text-sm font-medium leading-relaxed text-white lg:text-[0.82rem]">{heroVisualNote}</p>
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
                        {heroVisualKicker}
                      </div>
                      <div className="relative aspect-[16/9]">
                        <Image
                          src="/images/vc-sala-terapia-grupal.jpg"
                          alt={
                            lng === "es"
                              ? "Sesión grupal guiada dentro de Vistacampo"
                              : "Guided group session inside Vistacampo"
                          }
                          fill
                          priority
                          sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 38rem, 100vw"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/28 via-transparent to-white/8" />
                        <div className="absolute inset-x-3 bottom-3 z-10 rounded-[1rem] border border-white/15 bg-slate-950/68 p-3 shadow-lg backdrop-blur-md">
                          <p className="text-[0.82rem] font-medium leading-relaxed text-white">{heroVisualNote}</p>
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

      {/* Enfoque Médico y Psicológico */}
      <section className="bg-[rgba(250,250,250,0.64)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="vc-kicker">
                  {t("treatment.approach.badge")}
                </Badge>
                <h2 className="vc-section-title">
                  {t("treatment.approach.title")}
                </h2>
                <p className="vc-section-copy">
                  {t("treatment.approach.description")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#6b1f2b]" />
                    <div>
                      <h3 className="font-semibold text-[#0f241a]">{t("treatment.approach.points.0.title")}</h3>
                      <p className="text-[rgba(29,47,38,0.72)]">{t("treatment.approach.points.0.text")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#6b1f2b]" />
                    <div>
                      <h3 className="font-semibold text-[#0f241a]">{t("treatment.approach.points.1.title")}</h3>
                      <p className="text-[rgba(29,47,38,0.72)]">{t("treatment.approach.points.1.text")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#6b1f2b]" />
                    <div>
                      <h3 className="font-semibold text-[#0f241a]">{t("treatment.approach.points.2.title")}</h3>
                      <p className="text-[rgba(29,47,38,0.72)]">{t("treatment.approach.points.2.text")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc-page-panel p-3">
                <Image
                  src="/images/tratamiento.png"
                  alt={t("treatment.approach.imageAlt")}
                  title="Terapia médica y psicológica en Vistacampo"
                  width={1536}
                  height={1024}
                  className="h-auto w-full rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fases Detalladas del Tratamiento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="vc-kicker mb-4">
                {t("treatment.phases.badge")}
              </Badge>
              <h2 className="vc-section-title mb-4">
                {t("treatment.phases.title")}
              </h2>
              <p className="vc-section-copy mx-auto max-w-3xl">
                {t("treatment.phases.description")}
              </p>
            </div>

            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="vc-page-panel p-6 sm:p-8 lg:p-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a3628] text-xl font-bold text-white">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0f241a]">{t("treatment.phases.items.0.title")}</h3>
                        <p className="font-medium text-[#1a3628]">{t("treatment.phases.items.0.subtitle")}</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-[rgba(29,47,38,0.78)]">
                      <p className="leading-relaxed">{t("treatment.phases.items.0.text")}</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#1a3628]" />
                          <span>{t("treatment.phases.items.0.points.0")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#1a3628]" />
                          <span>{t("treatment.phases.items.0.points.1")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#1a3628]" />
                          <span>{t("treatment.phases.items.0.points.2")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#1a3628]" />
                          <span>{t("treatment.phases.items.0.points.3")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <TreatmentPhaseCarousel
                      slides={detoxSlides}
                      previousLabel={lng === "es" ? "Imagen anterior de desintoxicacion" : "Previous detox image"}
                      nextLabel={lng === "es" ? "Siguiente imagen de desintoxicacion" : "Next detox image"}
                    />
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="vc-page-panel p-6 sm:p-8 lg:p-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="relative order-2 lg:order-2">
                    <TreatmentPhaseCarousel
                      slides={deshabituacionSlides}
                      previousLabel={lng === "es" ? "Imagen anterior de deshabituacion" : "Previous habit-change image"}
                      nextLabel={lng === "es" ? "Siguiente imagen de deshabituacion" : "Next habit-change image"}
                    />
                  </div>
                  <div className="order-1 space-y-6 lg:order-1">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a67c52] text-xl font-bold text-white">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0f241a]">{t("treatment.phases.items.1.title")}</h3>
                        <p className="font-medium text-[#a67c52]">{t("treatment.phases.items.1.subtitle")}</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-[rgba(29,47,38,0.78)]">
                      <p className="leading-relaxed">{t("treatment.phases.items.1.text")}</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#a67c52]" />
                          <span>{t("treatment.phases.items.1.points.0")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#a67c52]" />
                          <span>{t("treatment.phases.items.1.points.1")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#a67c52]" />
                          <span>{t("treatment.phases.items.1.points.2")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#a67c52]" />
                          <span>{t("treatment.phases.items.1.points.3")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="vc-page-panel p-6 sm:p-8 lg:p-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6b1f2b] text-xl font-bold text-white">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0f241a]">{t("treatment.phases.items.2.title")}</h3>
                        <p className="font-medium text-[#6b1f2b]">{t("treatment.phases.items.2.subtitle")}</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-[rgba(29,47,38,0.78)]">
                      <p className="leading-relaxed">{t("treatment.phases.items.2.text")}</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#6b1f2b]" />
                          <span>{t("treatment.phases.items.2.points.0")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#6b1f2b]" />
                          <span>{t("treatment.phases.items.2.points.1")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#6b1f2b]" />
                          <span>{t("treatment.phases.items.2.points.2")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#6b1f2b]" />
                          <span>{t("treatment.phases.items.2.points.3")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <TreatmentPhaseCarousel
                      slides={rehabilitacionSlides}
                      previousLabel={lng === "es" ? "Imagen anterior de rehabilitacion" : "Previous rehabilitation image"}
                      nextLabel={lng === "es" ? "Siguiente imagen de rehabilitacion" : "Next rehabilitation image"}
                    />
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="vc-page-panel p-6 sm:p-8 lg:p-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="relative order-2 lg:order-2">
                    <TreatmentPhaseCarousel
                      slides={reinsercionSlides}
                      previousLabel={lng === "es" ? "Imagen anterior de reinsercion" : "Previous reintegration image"}
                      nextLabel={lng === "es" ? "Siguiente imagen de reinsercion" : "Next reintegration image"}
                    />
                  </div>
                  <div className="order-1 space-y-6 lg:order-1">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2e5a46] text-xl font-bold text-white">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0f241a]">{t("treatment.phases.items.3.title")}</h3>
                        <p className="font-medium text-[#2e5a46]">{t("treatment.phases.items.3.subtitle")}</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-[rgba(29,47,38,0.78)]">
                      <p className="leading-relaxed">{t("treatment.phases.items.3.text")}</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2e5a46]" />
                          <span>{t("treatment.phases.items.3.points.0")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2e5a46]" />
                          <span>{t("treatment.phases.items.3.points.1")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2e5a46]" />
                          <span>{t("treatment.phases.items.3.points.2")}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2e5a46]" />
                          <span>{t("treatment.phases.items.3.points.3")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Objetivos del Tratamiento */}
      <section className="bg-[rgba(246,242,236,0.7)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="vc-kicker mb-4">
                {t("treatment.goals.badge")}
              </Badge>
              <h2 className="vc-section-title mb-4">
                {t("treatment.goals.title")}
              </h2>
              <p className="vc-section-copy mx-auto max-w-3xl">
                {t("treatment.goals.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(26,54,40,0.12)]">
                    <span className="text-xl font-bold text-[#1a3628]">1</span>
                  </div>
                  <CardTitle className="text-xl text-[#0f241a]">{t("treatment.goals.cards.0.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-[rgba(29,47,38,0.74)]">{t("treatment.goals.cards.0.text")}</p>
                </CardContent>
              </Card>

              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(166,124,82,0.14)]">
                    <span className="text-xl font-bold text-[#a67c52]">2</span>
                  </div>
                  <CardTitle className="text-xl text-[#0f241a]">{t("treatment.goals.cards.1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-[rgba(29,47,38,0.74)]">{t("treatment.goals.cards.1.text")}</p>
                </CardContent>
              </Card>

              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(107,31,43,0.12)]">
                    <span className="text-xl font-bold text-[#6b1f2b]">3</span>
                  </div>
                  <CardTitle className="text-xl text-[#0f241a]">{t("treatment.goals.cards.2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-[rgba(29,47,38,0.74)]">{t("treatment.goals.cards.2.text")}</p>
                </CardContent>
              </Card>

              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(46,90,70,0.14)]">
                    <span className="text-xl font-bold text-[#2e5a46]">4</span>
                  </div>
                  <CardTitle className="text-xl text-[#0f241a]">{t("treatment.goals.cards.3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-[rgba(29,47,38,0.74)]">{t("treatment.goals.cards.3.text")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas del Tratamiento (cards) */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="vc-kicker mb-4">
                {t("treatment.stages.badge")}
              </Badge>
              <h2 className="vc-section-title mb-4">
                {t("treatment.stages.title")}
              </h2>
              <p className="vc-section-copy mx-auto max-w-3xl">
                {t("treatment.stages.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stage 1 */}
              <Card className="relative h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute -top-4 left-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a3628] font-bold text-white">
                    1
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(26,54,40,0.12)]">
                    <Shield className="h-8 w-8 text-[#1a3628]" />
                  </div>
                  <CardTitle className="text-center text-xl text-[#0f241a]">{t("treatment.stages.cards.0.title")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                    {t("treatment.stages.cards.0.text")}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-[rgba(29,47,38,0.72)]">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#1a3628]" />
                      <span>{t("treatment.stages.cards.0.duration")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#1a3628]" />
                      <span>{t("treatment.stages.cards.0.supervision")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 2 */}
              <Card className="relative h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute -top-4 left-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a67c52] font-bold text-white">
                    2
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(166,124,82,0.14)]">
                    <Heart className="h-8 w-8 text-[#a67c52]" />
                  </div>
                  <CardTitle className="text-center text-xl text-[#0f241a]">{t("treatment.stages.cards.1.title")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                    {t("treatment.stages.cards.1.text")}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-[rgba(29,47,38,0.72)]">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#a67c52]" />
                      <span>{t("treatment.stages.cards.1.duration")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#a67c52]" />
                      <span>{t("treatment.stages.cards.1.sessions")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 3 */}
              <Card className="relative h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute -top-4 left-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6b1f2b] font-bold text-white">
                    3
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(107,31,43,0.12)]">
                    <CheckCircle className="h-8 w-8 text-[#6b1f2b]" />
                  </div>
                  <CardTitle className="text-center text-xl text-[#0f241a]">{t("treatment.stages.cards.2.title")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-[rgba(29,47,38,0.72)]">
                    {t("treatment.stages.cards.2.text")}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-[rgba(29,47,38,0.72)]">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#6b1f2b]" />
                      <span>{t("treatment.stages.cards.2.duration")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#6b1f2b]" />
                      <span>{t("treatment.stages.cards.2.consults")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="vc-kicker mb-4">
                {t("treatment.faq.badge")}
              </Badge>
              <h2 className="vc-section-title mb-4">
                {t("treatment.faq.title")}
              </h2>
              <p className="vc-section-copy">
                {t("treatment.faq.description")}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <AccordionItem key={i} value={`item-${i+1}`} className="vc-page-panel px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {t(`treatment.faq.items.${i}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-[rgba(29,47,38,0.72)]">
                    {t(`treatment.faq.items.${i}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SiteCtaBand
        badge={lng === "es" ? "Orientación confidencial" : "Confidential guidance"}
        title={t("treatment.cta.title")}
        description={t("treatment.cta.text")}
        actions={
          <>
            <Button asChild size="lg" className="bg-white text-[#1a3628] hover:bg-[#f6f2ec]">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppCtaIcon tone="brand" />
                {t("treatment.cta.contact")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/8 text-white hover:bg-white hover:text-[#1a3628]"
            >
              <Link href={contactPageHref}>
                {lng === "es" ? "Hablar con el equipo" : "Talk to our team"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </>
        }
      />
    </div>
  );
}
