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
  title: "Our Medical Team - Addiction Specialists | Vistacampo",
  description:
    "Meet our team of doctors, psychologists and therapists specialized in addiction treatment. Professionals with extensive experience in Colonia Tovar, Venezuela.",
  keywords: "medical team, psychologists, therapists, addiction specialists, Colonia Tovar, Venezuela",
}

const teamData = {
  management: [
    {
      id: 1,
      name: "Julio González",
      position: "Founder and director of Vistacampo",
      specialty: "Addictions",
      image: "/images/julio-gonzalez-equipo.jpg",
      experience: "20+ years",
      education: ["MD - Central University of Venezuela", "Specialization in Addictions - University Hospital"],
      certifications: ["Certified in Addiction Medicine", "Member of the Venezuelan Society of Addictions"],
      description:
        "Julio González leads our team with over two decades of experience in addiction treatment. His comprehensive approach combines traditional medicine with innovative therapies, always prioritizing patient dignity and well-being.",
      specialties: ["Medical detoxification", "Dual disorders", "Pharmacotherapy"],
    },
    {
      id: 2,
      name: "Dr. María Álvarez",
      position: "Scientific committee member",
      specialty: "Clinical psychology",
      image: "/images/Maria-Alvares.jpg",
      experience: "15+ years",
      education: [
        "Bachelor's in Psychology - Catholic University Andrés Bello",
        "Master's in Clinical Psychology - Simón Bolívar University",
      ],
      certifications: ["Specialist in Cognitive-Behavioral Therapy", "Certification in Systemic Family Therapy"],
      description:
        "Dr. Álvarez coordinates all therapeutic programs at Vistacampo. Her experience in family therapy and empathetic approach have been fundamental in the recovery of hundreds of patients and their families.",
      specialties: ["Individual therapy", "Family therapy", "Relapse prevention"],
    },
    {
      id: 3,
      name: "Jorge Márquez",
      position: "Management",
      specialty: "Management",
      image: "/images/Jorge-Marquez-Gerencia.png",
      experience: "",
      education: [],
      certifications: [],
      description: "",
      specialties: [],
      resume: "Expert in administrative and operational management with extensive experience in the health sector. Specialized in process optimization and coordination of multidisciplinary teams.",
    },
    {
      id: 4,
      name: "Agustín Gabaldón",
      position: "Director",
      specialty: "Management",
      image: "/images/Agustin-Gabaldon-Director.png",
      experience: "",
      education: [],
      certifications: [],
      description: "",
      specialties: [],
      resume: "Executive director with solid track record in organizational leadership and strategic development. Expert in human resource management and institutional planning.",
    },
    {
      id: 5,
      name: "Alejandra Reyna",
      position: "Strategic Planning",
      specialty: "Strategic Planning",
      image: "/images/Alejandra-Reyna-.png",
      experience: "",
      education: [],
      certifications: [],
      description: "",
      specialties: [],
      resume: "Specialist in strategic planning and organizational development. Expert in market analysis, policy formulation and health project management.",
    },
  ],
  doctors: [
    {
      id: 3,
      name: "Dr. Eduardo Landaeta",
      position: "Institution Psychiatrist",
      specialty: "Psychiatry",
      image: "/images/eduardo-landaeta.png",
      experience: "10+ years",
      education: ["MD - Universidad Central de Venezuela", "Specialization in Psychiatry"],
      certifications: ["Board Certified in Psychiatry", "Addiction Disorders Specialist"],
      description:
        "Dr. Landaeta is a psychiatrist specialized in treating mental disorders associated with addictions. His comprehensive approach combines pharmacological therapy with psychosocial interventions for complete recovery.",
      specialties: ["Psychiatric evaluation", "Pharmacological treatment", "Dual disorders", "Group therapy"],
    },
    {
      id: 4,
      name: "Dr. Omaira Fehr",
      position: "Internal Medicine Physician",
      specialty: "Internal Medicine",
      image: "/images/omaira-fehr.jpg",
      experience: "5+ years",
      description:
        "Dr. Fehr specializes in the medical management of patients with addiction disorders. Her expertise in internal medicine ensures comprehensive care for patients with complex medical conditions.",
      specialties: ["Medical evaluation", "Detoxification protocols", "Chronic disease management"],
    },
  ],
  therapists: [
    {
      id: 4,
      name: "Alejandro Márquez",
      position: "Family Therapist",
      specialty: "Family Therapy",
      image: "/images/Alejandro-Marquez-Equipo terapeutico.png",
      experience: "11+ years of recovery",
      description:
        "Alejandro focuses on family dynamics and systemic therapy. He works with families to rebuild relationships and create supportive environments for recovery.",
      specialties: ["Family therapy", "Systemic therapy", "Couples therapy"],
    },
    {
      id: 5,
      name: "Pau Saman",
      position: "Clinical Psychologist",
      specialty: "Clinical Psychology",
      image: "/images/Pau-Saman-Equipo terapeutico.png",
      experience: "7+ years",
      description:
        "Pau specializes in trauma therapy and cognitive-behavioral approaches. Her work focuses on helping patients develop healthy coping mechanisms and emotional regulation skills.",
      specialties: ["Trauma therapy", "CBT", "Emotional regulation"],
    },
  ],
  support: [
    {
      id: 6,
      name: "Karina Urbina",
      position: "Nursing Coordinator",
      specialty: "Nursing",
      image: "/images/karina-urbina.png",
      experience: "15+ years",
      description:
        "Karina coordinates the nursing team and ensures high-quality patient care. Her experience in mental health nursing is crucial for patient safety and comfort.",
      specialties: ["Patient care", "Medication management", "Crisis intervention"],
    },
    {
      id: 7,
      name: "Mauro Urbina",
      position: "Support Coordinator",
      specialty: "Patient Support",
      image: "/images/mauro-urbina.png",
      experience: "8+ years",
      education: ["Social Work", "Addiction Counseling"],
      certifications: ["Addiction Counseling", "Crisis Intervention"],
      description:
        "Mauro provides emotional support and guidance to patients throughout their recovery journey. His role is essential in maintaining patient motivation and engagement.",
      specialties: ["Patient support", "Crisis intervention", "Motivational interviewing"],
    },
  ],
}

export default function TeamPage() {
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
                Our team
              </Badge>
              <h1 className="mx-auto mb-6 max-w-[12ch] text-4xl font-semibold leading-[0.95] text-[#0f241a] lg:mx-0 lg:text-6xl">
                Meet our specialized team
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[rgba(29,47,38,0.78)] sm:text-xl lg:mx-0">
                Our multidisciplinary team of professionals is committed to providing the highest quality care and
                support for your recovery journey.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-700 lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/82 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <Stethoscope className="h-4 w-4 text-[#6b1f2b]" />
                  <span>Medical specialists</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/82 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <Brain className="h-4 w-4 text-[#6b1f2b]" />
                  <span>Clinical psychologists</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/82 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <Heart className="h-4 w-4 text-[#6b1f2b]" />
                  <span>Experienced therapists</span>
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
                    alt="Three Vistacampo team members standing together in the clinic."
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
                Professional excellence
              </Badge>
              <h2 className="vc-section-title mb-4">
                A team committed to your recovery
              </h2>
              <p className="vc-section-copy mx-auto max-w-3xl">
                Our team combines medical expertise, psychological knowledge, and therapeutic experience to provide
                comprehensive and personalized care for each patient.
              </p>
            </div>

            <Tabs defaultValue="management" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="management" className="text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Management
                </TabsTrigger>
                <TabsTrigger value="doctors" className="text-lg">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Doctors
                </TabsTrigger>
                <TabsTrigger value="therapists" className="text-lg">
                  <Brain className="mr-2 h-5 w-5" />
                  Therapists
                </TabsTrigger>
                <TabsTrigger value="support" className="text-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="management" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.management.map((member) => (
                    <Card key={member.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          {member.experience && (
                            <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                              {member.experience} experience
                            </Badge>
                          )}
                        </div>
                        {member.description && (
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                        )}
                        {member.resume && (
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.resume}</p>
                        )}
                        {member.specialties.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.specialties.map((specialty, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                                >
                                  {specialty}
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

              <TabsContent value="doctors" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.doctors.map((member) => (
                    <Card key={member.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                            {member.experience} experience
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="therapists" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.therapists.map((member) => (
                    <Card key={member.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                            {member.experience} experience
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.support.map((member) => (
                    <Card key={member.id} className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-7">
                        <div className="text-center mb-6">
                          <div className="relative mx-auto mb-4 h-36 w-32 overflow-hidden rounded-[1.75rem] ring-1 ring-[rgba(191,161,95,0.22)]">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          <Badge variant="secondary" className="bg-[rgba(191,161,95,0.12)] text-[#6b1f2b]">
                            {member.experience} experience
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-[rgba(191,161,95,0.28)] bg-white text-xs text-[rgba(29,47,38,0.78)]"
                              >
                                {specialty}
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
        badge="Team and admission"
        title="Speak with professionals who understand each stage of recovery"
        description="We can guide you through the initial assessment, residential treatment model, and the next step that best fits your situation."
        actions={
          <>
            <Button asChild size="lg" className="bg-white text-[#1a3628] hover:bg-[#f6f2ec]">
              <Link href="/en/contacto">Contact a specialist</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/8 text-white hover:bg-white hover:text-[#1a3628]"
            >
              <Link href="/en/tratamiento">
                Explore treatment options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </>
        }
      />
    </div>
  )
}
