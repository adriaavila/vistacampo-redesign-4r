import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  HeartHandshake,
  Leaf,
  LockKeyhole,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trees,
  Users,
} from "lucide-react"

import { HomeHeroCarousel } from "@/components/home-hero-carousel"
import { WhatsAppCtaIcon } from "@/components/whatsapp-cta-icon"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK, WHATSAPP_LINK_EN } from "@/lib/constants"

type Locale = "es" | "en"

type HeroSlide = {
  src: string
  alt: string
  label: string
}

type InfoCard = {
  title: string
  description: string
  icon: LucideIcon
}

type ProgramCard = {
  badge: string
  title: string
  description: string
  points: string[]
}

type Testimonial = {
  quote: string
  name: string
  role: string
}

type FAQItem = {
  question: string
  answer: string
}

type HomeContent = {
  hero: {
    eyebrow: string
    title: string
    emphasis: string
    description: string
    primaryCta: string
    secondaryCta: string
    pills: string[]
    highlightTitle: string
    highlightDescription: string
    stats: { value: string; label: string }[]
    locationLabel: string
  }
  trust: {
    eyebrow: string
    title: string
    description: string
    quote: string
    quoteAuthor: string
    cards: InfoCard[]
  }
  founder: {
    eyebrow: string
    title: string
    description: string
    quote: string
    body: string[]
    name: string
    role: string
    imageSrc: string
    imageAlt: string
    cta: string
  }
  facilities: {
    eyebrow: string
    title: string
    description: string
    bullets: string[]
    cta: string
    images: { src: string; alt: string; title: string }[]
  }
  process: {
    eyebrow: string
    title: string
    description: string
    steps: { step: string; title: string; description: string }[]
  }
  programs: {
    eyebrow: string
    title: string
    description: string
    cards: ProgramCard[]
  }
  testimonials: {
    eyebrow: string
    title: string
    description: string
    items: Testimonial[]
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: FAQItem[]
  }
  finalCta: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    contactLabel: string
    availabilityLabel: string
  }
  hrefs: {
    treatment: string
    facilities: string
    team: string
    contact: string
    whatsapp: string
  }
}

const heroSlidesByLocale: Record<Locale, HeroSlide[]> = {
  es: [
    {
      src: "/images/hero-1.png",
      alt: "Vista exterior principal de Vistacampo rodeada de vegetación y montaña",
      label: "Privacidad residencial en plena naturaleza",
    },
    {
      src: "/images/hero-2.png",
      alt: "Sesión terapéutica grupal en un entorno abierto y sereno",
      label: "Acompañamiento terapéutico con contención humana",
    },
    {
      src: "/images/hero-3.png",
      alt: "Acceso y jardines de Vistacampo en Colonia Tovar",
      label: "Arquitectura cálida para volver a empezar",
    },
    {
      src: "/images/vc-panoramica.webp",
      alt: "Vista panorámica de Vistacampo y sus alrededores naturales",
      label: "Calma, altura y distancia del ruido cotidiano",
    },
  ],
  en: [
    {
      src: "/images/hero-1.png",
      alt: "Main exterior view of Vistacampo surrounded by mountain greenery",
      label: "Residential privacy immersed in nature",
    },
    {
      src: "/images/hero-2.png",
      alt: "Therapeutic group session in an open and calm environment",
      label: "Therapeutic guidance with real human support",
    },
    {
      src: "/images/hero-3.png",
      alt: "Entrance and gardens at Vistacampo in Colonia Tovar",
      label: "Warm architecture designed for a fresh start",
    },
    {
      src: "/images/vc-panoramica.webp",
      alt: "Panoramic view of Vistacampo and its natural surroundings",
      label: "Calm, elevation, and distance from daily noise",
    },
  ],
}

const contentByLocale: Record<Locale, HomeContent> = {
  es: {
    hero: {
      eyebrow: "Centro terapéutico residencial en Colonia Tovar",
      title: "Vistacampo",
      emphasis: "donde terminan las adicciones",
      description:
        "Tratamiento médico, psicológico y familiar en un entorno privado, cálido y profesional para iniciar una recuperación real con dignidad.",
      primaryCta: "Hablar por WhatsApp",
      secondaryCta: "Conocer el tratamiento",
      pills: ["Confidencialidad total", "Atención 24/7"],
      highlightTitle: "Un entorno que ayuda a bajar el ruido",
      highlightDescription:
        "Naturaleza, privacidad y una rutina clínica bien acompañada para que la recuperación ocurra con foco, estructura y contención.",
      stats: [
        { value: "15+", label: "años de experiencia" },
        { value: "24/7", label: "acompañamiento profesional" },
        { value: "1:1", label: "orientación a familias" },
      ],
      locationLabel: "Colonia Tovar, Venezuela",
    },
    trust: {
      eyebrow: "Confianza clínica",
      title: "Una institución privada pensada para recuperar estabilidad y claridad",
      description:
        "Vistacampo combina abordaje clínico, acompañamiento terapéutico y una cultura de respeto profundo por la privacidad del paciente y su familia.",
      quote:
        "Cuando pedir ayuda se vuelve urgente, el entorno correcto puede marcar la diferencia entre una pausa temporal y un verdadero comienzo.",
      quoteAuthor: "Equipo Vistacampo",
      cards: [
        {
          title: "Evaluación profesional",
          description: "Ingreso orientado por un equipo multidisciplinario con mirada médica, psicológica y terapéutica.",
          icon: Stethoscope,
        },
        {
          title: "Confidencialidad y resguardo",
          description: "Proceso residencial discreto, con protocolos de cuidado y una experiencia contenida para cada familia.",
          icon: LockKeyhole,
        },
        {
          title: "Tratamiento integral",
          description: "Desintoxicación, terapia individual, terapia grupal y acompañamiento familiar en un mismo plan.",
          icon: HeartHandshake,
        },
      ],
    },
    founder: {
      eyebrow: "Mensaje del fundador",
      title: "Una historia de recuperación convertida en compromiso",
      description:
        "Este centro nace de una experiencia personal con la adicción, el tratamiento y la convicción de que sí es posible recuperarse con ayuda seria.",
      quote:
        "Sé lo que significa sentir que la vida se desordena y no saber cómo pedir ayuda. Por eso Vistacampo existe.",
      body: [
        "En 2001 tomé una de las decisiones más difíciles de mi vida: apartarme de mi familia y de mi profesión para buscar en el extranjero un tratamiento que me ayudara a salir del alcohol y otras drogas.",
        "Ese proceso me devolvió la dignidad. Con los años regresé al mismo lugar donde me recuperé para formarme, trabajar con especialistas y acompañar a otras personas en su camino.",
        "De esa experiencia nació Vistacampo: un centro en Venezuela con atención residencial, base clínica y un equipo humano comprometido con ofrecer tratamiento serio, respeto y acompañamiento real a pacientes y familias.",
        "Si hoy tú o un ser querido están atravesando esta situación, aquí hay un lugar donde pueden dar el primer paso con ayuda profesional y confidencial.",
      ],
      name: "Julio González",
      role: "Fundador y director Vistacampo",
      imageSrc: "/images/julio-gonzalez-fundador.jpg",
      imageAlt: "Julio González, fundador de Vistacampo",
      cta: "Conocer al equipo",
    },
    facilities: {
      eyebrow: "Instalaciones",
      title: "Espacios cálidos, sobrios y conectados con la naturaleza",
      description:
        "La infraestructura acompaña el proceso terapéutico: descanso, rutina, conversación clínica y momentos de regulación en un entorno residencial sereno.",
      bullets: [
        "Habitaciones confortables para privacidad y descanso reparador",
        "Áreas comunes cuidadas para terapia, convivencia y acompañamiento",
        "Vegetación, vistas abiertas y luz natural para disminuir la sobrecarga",
      ],
      cta: "Ver instalaciones",
      images: [
        {
          src: "/images/vc-instalaciones.jpeg",
          alt: "Instalaciones principales de Vistacampo",
          title: "Arquitectura residencial y discreta",
        },
        {
      src: "/images/vc-sala-cala.jpeg",
          alt: "Sala interior de Vistacampo con luz natural",
          title: "Interiores sobrios y acogedores",
        },
        {
          src: "/images/vc-desayuno.jpeg",
          alt: "Paciente compartiendo una rutina de desayuno en Vistacampo",
          title: "Rutina estructurada y convivencia acompañada",
        },
      ],
    },
    process: {
      eyebrow: "Proceso terapéutico",
      title: "Una ruta clara, sin dramatismos y con acompañamiento constante",
      description:
        "Cada etapa responde a una necesidad concreta del paciente. El objetivo es estabilizar, comprender, trabajar patrones de consumo y preparar la reintegración.",
      steps: [
        {
          step: "01",
          title: "Evaluación y admisión",
          description: "Se revisa la situación clínica, el contexto familiar y la urgencia del caso para definir el ingreso.",
        },
        {
          step: "02",
          title: "Desintoxicación y estabilización",
          description: "Cuando aplica, se acompaña el proceso médico inicial para reducir riesgo y recuperar capacidad de trabajo terapéutico.",
        },
        {
          step: "03",
          title: "Tratamiento residencial",
          description: "Se trabaja con terapia individual, grupal, contención emocional y hábitos que apoyen una recuperación sostenida.",
        },
        {
          step: "04",
          title: "Reinserción y seguimiento",
          description: "La salida se prepara con estructura, participación familiar y continuidad para sostener los avances logrados.",
        },
      ],
    },
    programs: {
      eyebrow: "Programas",
      title: "Tres frentes de trabajo para una recuperación más sólida",
      description:
        "El abordaje se adapta a cada caso, pero integra siempre componentes clínicos, terapéuticos y relacionales.",
      cards: [
        {
          badge: "Programa 01",
          title: "Desintoxicación médica",
          description: "Supervisión y estabilización inicial para comenzar el tratamiento en condiciones seguras.",
          points: ["Seguimiento profesional", "Observación clínica", "Inicio estructurado del proceso"],
        },
        {
          badge: "Programa 02",
          title: "Tratamiento residencial integral",
          description: "Trabajo terapéutico intensivo en un ambiente protegido, con enfoque en la raíz del problema.",
          points: ["Terapia individual y grupal", "Rutina terapéutica", "Contención y disciplina clínica"],
        },
        {
          badge: "Programa 03",
          title: "Apoyo familiar y reinserción",
          description: "La recuperación se sostiene mejor cuando el sistema cercano también aprende a acompañar.",
          points: ["Orientación a familiares", "Prevención de recaídas", "Seguimiento post-tratamiento"],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Historias donde la esperanza volvió a tener estructura",
      description:
        "La experiencia cambia cuando el tratamiento logra combinar criterio profesional, cuidado humano y un entorno verdaderamente seguro.",
      items: [
        {
          quote:
            "Sentí que por fin estaba en un lugar serio, tranquilo y humano. No solo me ayudaron a detener el consumo, me ayudaron a volver a pensar con claridad.",
          name: "S. M.",
          role: "Paciente",
        },
        {
          quote:
            "Como familia necesitábamos orientación, no solo alivio momentáneo. En Vistacampo entendimos cómo acompañar sin empeorar la situación.",
          name: "H. G.",
          role: "Familiar",
        },
        {
          quote:
            "El seguimiento después del tratamiento fue decisivo. La sensación no fue de alta y vacío, sino de continuidad y sostén.",
          name: "O. M.",
          role: "Paciente en seguimiento",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Información clara para dar el primer paso con menos incertidumbre",
      description:
        "Si estás evaluando ayuda para ti o para un familiar, estas respuestas resumen lo más importante antes del contacto inicial.",
      items: [
        {
          question: "¿Qué tipo de adicciones atienden?",
          answer:
            "Vistacampo aborda adicciones a sustancias y también conductas adictivas, con una evaluación profesional para definir el mejor camino terapéutico.",
        },
        {
          question: "¿El proceso es confidencial?",
          answer:
            "Sí. La privacidad del paciente y su familia es parte central del modelo de atención y de la experiencia residencial.",
        },
        {
          question: "¿La familia participa en el tratamiento?",
          answer:
            "Sí. El trabajo con familiares forma parte del proceso porque mejora la comprensión del problema y fortalece la recuperación a largo plazo.",
        },
        {
          question: "¿Cómo puedo iniciar el ingreso?",
          answer:
            "El paso más rápido es escribir por WhatsApp. Desde allí el equipo puede orientar, responder dudas y valorar la situación inicial.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Ayuda inmediata",
      title: "Dar el primer paso puede cambiar por completo la historia",
      description:
        "Si necesitas orientación para ti o para un familiar, el equipo de Vistacampo puede ayudarte a entender el momento actual y el siguiente movimiento correcto.",
      primaryCta: "Solicitar orientación",
      secondaryCta: "Ir a contacto",
      contactLabel: "(+58) 412-231-5968",
      availabilityLabel: "Atención por WhatsApp",
    },
    hrefs: {
      treatment: "/es/tratamiento",
      facilities: "/es/instalaciones",
      team: "/es/equipo",
      contact: "/es/contacto",
      whatsapp: WHATSAPP_LINK,
    },
  },
  en: {
    hero: {
      eyebrow: "Residential therapeutic center in Colonia Tovar",
      title: "Vistacampo",
      emphasis: "where addictions end",
      description:
        "Medical, psychological, and family-centered treatment in a private, calm, and professional setting designed for real recovery with dignity.",
      primaryCta: "Talk on WhatsApp",
      secondaryCta: "Explore treatment",
      pills: ["Full confidentiality", "24/7 support"],
      highlightTitle: "A setting designed to lower the noise",
      highlightDescription:
        "Nature, privacy, and a guided clinical routine help recovery happen with more focus, structure, and emotional safety.",
      stats: [
        { value: "15+", label: "years of experience" },
        { value: "24/7", label: "professional support" },
        { value: "1:1", label: "family guidance" },
      ],
      locationLabel: "Colonia Tovar, Venezuela",
    },
    trust: {
      eyebrow: "Clinical trust",
      title: "A private institution built to restore stability and clarity",
      description:
        "Vistacampo combines clinical care, therapeutic guidance, and a deep respect for the privacy of both patients and families.",
      quote:
        "When asking for help becomes urgent, the right environment can make the difference between a temporary pause and a true beginning.",
      quoteAuthor: "Vistacampo Team",
      cards: [
        {
          title: "Professional assessment",
          description: "Admission is guided by a multidisciplinary team with medical, psychological, and therapeutic criteria.",
          icon: Stethoscope,
        },
        {
          title: "Confidentiality and protection",
          description: "A discreet residential process with care protocols and a contained experience for every family involved.",
          icon: LockKeyhole,
        },
        {
          title: "Comprehensive treatment",
          description: "Detox, individual therapy, group therapy, and family support integrated within one plan.",
          icon: HeartHandshake,
        },
      ],
    },
    founder: {
      eyebrow: "Founder’s message",
      title: "A recovery story turned into a lasting commitment",
      description:
        "This center began with a personal experience of addiction, treatment, and the conviction that recovery is possible when help is serious and humane.",
      quote:
        "I know what it feels like when life becomes unrecognizable and asking for help seems overwhelming. That is why Vistacampo exists.",
      body: [
        "In 2001, I made one of the hardest decisions of my life: to step away from my family and profession and travel abroad in search of treatment for alcohol and substance dependence.",
        "That process gave me my dignity back. Years later, I returned to the same place where I recovered to train, work alongside specialists, and help others through similar journeys.",
        "That experience became Vistacampo: a residential center in Venezuela built on clinical care, human respect, and the belief that recovery needs structure, confidentiality, and real support.",
        "If you or someone you love is going through this today, there is a place here where the first step can be taken with professional guidance and compassion.",
      ],
      name: "Julio González",
      role: "Founder and director of Vistacampo",
      imageSrc: "/images/julio-gonzalez-fundador.jpg",
      imageAlt: "Julio González, founder of Vistacampo",
      cta: "Meet the team",
    },
    facilities: {
      eyebrow: "Facilities",
      title: "Warm, restrained spaces connected to nature",
      description:
        "The infrastructure supports the therapeutic process: rest, routine, clinical conversation, and regulation in a calm residential environment.",
      bullets: [
        "Comfortable rooms designed for privacy and restorative rest",
        "Carefully maintained common areas for therapy, community, and guidance",
        "Vegetation, open views, and natural light that reduce overload",
      ],
      cta: "See facilities",
      images: [
        {
          src: "/images/vc-instalaciones.jpeg",
          alt: "Main Vistacampo facilities",
          title: "Discreet residential architecture",
        },
        {
          src: "/images/vc-sala-cala.jpeg",
          alt: "Indoor lounge at Vistacampo with natural light",
          title: "Refined and welcoming interiors",
        },
        {
          src: "/images/vc-desayuno.jpeg",
          alt: "Patient sharing a breakfast routine at Vistacampo",
          title: "Structured routine and guided community life",
        },
      ],
    },
    process: {
      eyebrow: "Therapeutic process",
      title: "A clear path with constant support and no unnecessary drama",
      description:
        "Each phase answers a concrete need. The goal is to stabilize, understand, work through patterns of use, and prepare for reintegration.",
      steps: [
        {
          step: "01",
          title: "Assessment and admission",
          description: "The clinical situation, family context, and urgency of the case are reviewed to define the right entry point.",
        },
        {
          step: "02",
          title: "Detox and stabilization",
          description: "When needed, the initial medical phase is closely supported to reduce risk and restore therapeutic readiness.",
        },
        {
          step: "03",
          title: "Residential treatment",
          description: "Individual therapy, group work, emotional support, and healthier routines are developed in a protected setting.",
        },
        {
          step: "04",
          title: "Reintegration and follow-up",
          description: "Discharge is prepared with structure, family participation, and continuity so progress has room to last.",
        },
      ],
    },
    programs: {
      eyebrow: "Programs",
      title: "Three work fronts for stronger, more sustainable recovery",
      description:
        "Every case is different, but the approach consistently combines clinical, therapeutic, and relational work.",
      cards: [
        {
          badge: "Program 01",
          title: "Medical detox",
          description: "Initial supervision and stabilization so treatment can begin under safer conditions.",
          points: ["Professional monitoring", "Clinical observation", "Structured start to treatment"],
        },
        {
          badge: "Program 02",
          title: "Comprehensive residential treatment",
          description: "Intensive therapeutic work inside a protected environment focused on the roots of the problem.",
          points: ["Individual and group therapy", "Therapeutic routine", "Clinical containment and structure"],
        },
        {
          badge: "Program 03",
          title: "Family support and reintegration",
          description: "Recovery holds better when the close support system also learns how to respond well.",
          points: ["Family guidance", "Relapse prevention", "Post-treatment follow-up"],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Stories where hope regained structure",
      description:
        "The experience changes when treatment combines professional judgment, human care, and an environment that truly feels safe.",
      items: [
        {
          quote:
            "For the first time I felt I was in a serious, calm, and human place. They did not just help me stop using; they helped me think clearly again.",
          name: "S. M.",
          role: "Patient",
        },
        {
          quote:
            "As a family, we needed guidance, not just temporary relief. At Vistacampo we learned how to support without making things worse.",
          name: "H. G.",
          role: "Family member",
        },
        {
          quote:
            "The follow-up after treatment made all the difference. It never felt like discharge into emptiness, but like continuity and support.",
          name: "O. M.",
          role: "Patient in follow-up",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Clear information for taking the first step with less uncertainty",
      description:
        "If you are considering help for yourself or a loved one, these answers cover the essentials before the first conversation.",
      items: [
        {
          question: "What kinds of addictions do you treat?",
          answer:
            "Vistacampo addresses substance-related addictions as well as addictive behaviors, with a professional assessment to determine the best treatment path.",
        },
        {
          question: "Is the process confidential?",
          answer:
            "Yes. Patient and family privacy is a central part of both the care model and the overall residential experience.",
        },
        {
          question: "Does the family take part in treatment?",
          answer:
            "Yes. Family work is part of the process because it improves understanding of the situation and strengthens long-term recovery.",
        },
        {
          question: "How do I begin the admission process?",
          answer:
            "The fastest way is to send a WhatsApp message. From there, the team can guide you, answer questions, and help assess the initial situation.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Immediate guidance",
      title: "The first step can change the entire story",
      description:
        "If you need guidance for yourself or for a loved one, the Vistacampo team can help clarify the present moment and the most helpful next move.",
      primaryCta: "Request guidance",
      secondaryCta: "Go to contact",
      contactLabel: "(+58) 412-231-5968",
      availabilityLabel: "WhatsApp support",
    },
    hrefs: {
      treatment: "/en/tratamiento",
      facilities: "/en/instalaciones",
      team: "/en/equipo",
      contact: "/en/contacto",
      whatsapp: WHATSAPP_LINK_EN,
    },
  },
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
}) {
  const centered = align === "center"

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="vc-kicker">{eyebrow}</span>
      <h2 className="vc-section-title mt-6">{title}</h2>
      <p className="vc-section-copy mt-5">{description}</p>
    </div>
  )
}

export function VistacampoHomePage({ locale }: { locale: Locale }) {
  const content = contentByLocale[locale]
  const heroSlides = heroSlidesByLocale[locale]
  const founderSection = (
    <section className="bg-[rgba(246,242,236,0.7)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="mx-auto w-full max-w-[30rem]">
            <p className="vc-kicker mb-5">{content.founder.eyebrow}</p>

            <article className="vc-shell p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.7rem] bg-[linear-gradient(180deg,#202532_0%,#0f241a_100%)]">
                <div className="relative aspect-[2/3] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_52%),linear-gradient(180deg,#1c2230_0%,#121722_100%)] p-4 sm:p-6">
                  <Image
                    src={content.founder.imageSrc}
                    alt={content.founder.imageAlt}
                    width={682}
                    height={1024}
                    sizes="(max-width: 1024px) 100vw, 30rem"
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <div className="border-t border-white/10 px-6 py-6 text-white">
                  <h3 className="text-2xl font-medium text-white">{content.founder.name}</h3>
                  <p className="mt-2 text-sm text-white/76">{content.founder.role}</p>
                </div>
              </div>
            </article>
          </div>

          <div>
            <div className="max-w-3xl">
              <h2 className="vc-section-title">{content.founder.title}</h2>
              <p className="vc-section-copy mt-5">{content.founder.description}</p>
            </div>

            <div className="mt-8 vc-shell p-8 sm:p-10">
              <p className="max-w-3xl text-xl leading-9 text-[#0f241a] sm:text-2xl">
                “{content.founder.quote}”
              </p>

              <div className="mt-8 space-y-5">
                {content.founder.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[rgba(29,47,38,0.78)] sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-ui mt-8 h-14 rounded-full border-[#1a3628] bg-transparent px-7 text-[0.95rem] font-semibold text-[#1a3628] hover:bg-[#1a3628] hover:text-[#fafafa]"
              >
                <Link href={content.hrefs.team}>
                  {content.founder.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="overflow-hidden">
      <HomeHeroCarousel slides={heroSlides}>
        <div className="flex flex-col items-center justify-center py-12 sm:py-14 lg:py-20 xl:py-24">
          <div className="max-w-3xl text-center text-white">
            <h1 className="mx-auto mt-6 max-w-[15.75ch] text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-balance sm:text-6xl lg:mt-0 lg:text-[3.75rem] xl:text-[4.35rem] 2xl:text-[4.9rem]">
              {content.hero.title}
              <span className="mt-2 block text-[#d9c088]">{content.hero.emphasis}</span>
            </h1>

            <div className="mx-auto mt-5 flex max-w-2xl flex-col items-center">
              <p className="max-w-2xl text-center text-base leading-7 text-white/82 sm:text-lg lg:max-w-xl lg:text-[1.02rem]">
                {content.hero.description}
              </p>

              <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="font-ui h-14 rounded-full bg-[#1a3628] px-7 text-[0.95rem] font-semibold text-[#fafafa] shadow-[0_20px_50px_-24px_rgba(26,54,40,0.95)] hover:bg-[#6b1f2b] lg:h-12 lg:px-6"
                >
                  <a href={content.hrefs.whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppCtaIcon tone="contrast" />
                    {content.hero.primaryCta}
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-ui h-14 rounded-full border-white/24 bg-white/8 px-7 text-[0.95rem] font-semibold text-white backdrop-blur-md hover:bg-white/16 hover:text-white lg:h-12 lg:px-6"
                >
                  <Link href={content.hrefs.treatment}>
                    {content.hero.secondaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {content.hero.pills.map((pill) => (
                  <span
                    key={pill}
                    className="font-ui inline-flex items-center rounded-full border border-white/16 bg-black/18 px-3.5 py-1.5 text-xs text-white/78 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-[0.78rem] lg:tracking-[0.08em] lg:text-white/70 lg:backdrop-blur-none"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HomeHeroCarousel>

      {founderSection}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <SectionHeader
              eyebrow={content.trust.eyebrow}
              title={content.trust.title}
              description={content.trust.description}
            />

            <div className="vc-shell vc-outline-grid p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(107,31,43,0.1)] text-[#6b1f2b]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg leading-8 text-[rgba(29,47,38,0.82)]">{content.trust.quote}</p>
                  <p className="font-ui mt-5 text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.56)]">
                    {content.trust.quoteAuthor}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.trust.cards.map((card) => {
              const Icon = card.icon

              return (
                <article key={card.title} className="vc-shell p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(26,54,40,0.08)] text-[#1a3628]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-medium text-[#0f241a]">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[rgba(29,47,38,0.76)]">{card.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow={content.facilities.eyebrow}
                title={content.facilities.title}
                description={content.facilities.description}
              />

              <div className="mt-8 space-y-4">
                {content.facilities.bullets.map((bullet) => (
                  <div key={bullet} className="vc-shell flex items-start gap-4 p-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(46,90,70,0.08)] text-[#2e5a46]">
                      <Leaf className="h-4.5 w-4.5" />
                    </div>
                    <p className="text-base leading-7 text-[rgba(29,47,38,0.8)]">{bullet}</p>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-ui mt-8 h-14 rounded-full border-[#1a3628] bg-transparent px-7 text-[0.95rem] font-semibold text-[#1a3628] hover:bg-[#1a3628] hover:text-[#fafafa]"
              >
                <Link href={content.hrefs.facilities}>
                  {content.facilities.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
              <article className="vc-shell p-3 md:row-span-2">
                <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={content.facilities.images[0].src}
                    alt={content.facilities.images[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-3 pb-3 pt-5">
                  <p className="font-ui text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.54)]">
                    {content.facilities.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium text-[#0f241a]">{content.facilities.images[0].title}</h3>
                </div>
              </article>

              {content.facilities.images.slice(1).map((image) => (
                <article key={image.src} className="vc-shell p-3">
                  <div className="relative min-h-[215px] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-3 pb-3 pt-4">
                    <h3 className="text-xl font-medium text-[#0f241a]">{image.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow={content.process.eyebrow}
            title={content.process.title}
            description={content.process.description}
            align="center"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {content.process.steps.map((item) => (
              <article key={item.step} className="vc-shell p-7">
                <div className="font-ui text-xs uppercase tracking-[0.28em] text-[rgba(107,31,43,0.72)]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-2xl font-medium text-[#0f241a]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[rgba(29,47,38,0.78)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow={content.programs.eyebrow}
            title={content.programs.title}
            description={content.programs.description}
            align="center"
          />

          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {content.programs.cards.map((program, index) => {
              const icons = [ShieldCheck, Building2, Users]
              const Icon = icons[index] ?? ShieldCheck

              return (
                <article
                  key={program.title}
                  className={`vc-shell p-8 ${index === 1 ? "bg-[linear-gradient(180deg,rgba(26,54,40,0.96),rgba(107,31,43,0.92))] text-white" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <Badge
                      variant="outline"
                      className={`font-ui rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] ${
                        index === 1
                          ? "border-white/20 text-white/70"
                          : "border-[rgba(191,161,95,0.4)] text-[#6b1f2b]"
                      }`}
                    >
                      {program.badge}
                    </Badge>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        index === 1
                          ? "bg-white/10 text-[#d9c088]"
                          : "bg-[rgba(26,54,40,0.08)] text-[#1a3628]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className={`mt-8 text-3xl font-medium ${index === 1 ? "text-white" : "text-[#0f241a]"}`}>
                    {program.title}
                  </h3>
                  <p className={`mt-4 text-base leading-7 ${index === 1 ? "text-white/78" : "text-[rgba(29,47,38,0.78)]"}`}>
                    {program.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {program.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div
                          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            index === 1 ? "bg-white/12 text-[#d9c088]" : "bg-[rgba(107,31,43,0.1)] text-[#6b1f2b]"
                          }`}
                        >
                          <BadgeCheck className="h-3.5 w-3.5" />
                        </div>
                        <span className={`text-sm leading-7 ${index === 1 ? "text-white/76" : "text-[rgba(29,47,38,0.78)]"}`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow={content.testimonials.eyebrow}
            title={content.testimonials.title}
            description={content.testimonials.description}
            align="center"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {content.testimonials.items.map((item) => (
              <article key={item.name} className="vc-shell p-7">
                <div className="flex items-center gap-1 text-[#bfa15f]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Sparkles key={`${item.name}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-8 text-[rgba(29,47,38,0.84)]">“{item.quote}”</p>
                <div className="mt-8 border-t border-[rgba(15,36,26,0.08)] pt-5">
                  <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-[#0f241a]">{item.name}</p>
                  <p className="mt-2 text-sm text-[rgba(29,47,38,0.58)]">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} description={content.faq.description} />

            <div className="vc-shell p-4 sm:p-6">
              <Accordion type="single" collapsible className="w-full">
                {content.faq.items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="border-[rgba(15,36,26,0.08)] px-2 sm:px-4"
                  >
                    <AccordionTrigger className="font-ui py-5 text-left text-base font-semibold text-[#0f241a] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-7 text-[rgba(29,47,38,0.76)]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[linear-gradient(135deg,#0f241a_0%,#6b1f2b_100%)] px-6 py-10 text-white shadow-[0_50px_120px_-60px_rgba(15,36,26,0.95)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.28),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(246,242,236,0.1),transparent_22%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <span className="font-ui inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/76">
                  <PhoneCall className="h-3.5 w-3.5 text-[#d9c088]" />
                  {content.finalCta.eyebrow}
                </span>
                <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] text-white md:text-5xl">
                  {content.finalCta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">{content.finalCta.description}</p>
              </div>

              <div className="vc-shell border-white/12 bg-white/10 p-6 text-white backdrop-blur-xl">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#d9c088]">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <p className="font-ui mt-4 text-xs uppercase tracking-[0.24em] text-white/54">
                      {content.finalCta.availabilityLabel}
                    </p>
                    <p className="mt-2 text-lg text-white/84">{content.finalCta.contactLabel}</p>
                  </div>

                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#d9c088]">
                      <MapPinned className="h-5 w-5" />
                    </div>
                    <p className="font-ui mt-4 text-xs uppercase tracking-[0.24em] text-white/54">
                      {locale === "es" ? "Ubicación" : "Location"}
                    </p>
                    <p className="mt-2 text-lg text-white/84">{content.hero.locationLabel}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="font-ui h-14 rounded-full bg-[#fafafa] px-7 text-[0.95rem] font-semibold text-[#0f241a] hover:bg-[#d9c088]"
                  >
                    <a href={content.hrefs.whatsapp} target="_blank" rel="noopener noreferrer">
                      <WhatsAppCtaIcon tone="brand" />
                      {content.finalCta.primaryCta}
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="font-ui h-14 rounded-full border-white/16 bg-transparent px-7 text-[0.95rem] font-semibold text-white hover:bg-white/12 hover:text-white"
                  >
                    <Link href={content.hrefs.contact}>
                      {content.finalCta.secondaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
