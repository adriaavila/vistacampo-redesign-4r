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
      position: "Founder and director Vistacampo",
      specialty: "Addictions",
      image: "/images/Julio-Gonzales-Fundador y Director Vistacampo.jpg",
      experience: "20+ years",
      education: ["MD - Central University of Venezuela", "Specialization in Addictions - University Hospital"],
      certifications: ["Certified in Addiction Medicine", "Member of the Venezuelan Society of Addictions"],
      description:
        "Julio González leads our team with over two decades of experience in addiction treatment. His comprehensive approach combines traditional medicine with innovative therapies, always prioritizing patient dignity and well-being.",
      specialties: ["Medical detoxification", "Dual disorders", "Pharmacotherapy"],
    },
    {
      id: 2,
      name: "Dr. María Alvarez",
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
        "Dr. Alvarez coordinates all therapeutic programs at Vistacampo. Her experience in family therapy and empathetic approach have been fundamental in the recovery of hundreds of patients and their families.",
      specialties: ["Individual therapy", "Family therapy", "Relapse prevention"],
    },
    {
      id: 3,
      name: "Jorge Marquez",
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
      name: "Agustin Gabaldon",
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
      name: "Alejandro Marquez",
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
              Our team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6 drop-shadow-[0_2px_18px_rgba(255,255,255,0.92)]">
              Meet our specialized team
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed drop-shadow-[0_1px_12px_rgba(255,255,255,0.88)]">
              Our multidisciplinary team of professionals is committed to providing the highest quality care and support
              for your recovery journey.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-emerald-600" />
                <span>Medical specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-600" />
                <span>Clinical psychologists</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Experienced therapists</span>
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
                Professional excellence
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A team committed to your recovery
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
                    <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          {member.experience && (
                            <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
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
                                <Badge key={index} variant="outline" className="text-xs">
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
                    <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
                            {member.experience} experience
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
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
                    <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
                            {member.experience} experience
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
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
                    <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              src={member.image}
                              alt={`${member.name}, ${member.position} at Vistacampo rehabilitation center`}
                              title={`${member.name} - ${member.specialty}`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                          <Badge variant="secondary" className="text-emerald-600 bg-emerald-100">
                            {member.experience} experience
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your recovery journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Speak with a specialist to understand the treatment approach and the next steps with clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contacto">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contact a specialist
                </Button>
              </Link>
              <Link href="/en/tratamiento">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Explore treatment options
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
