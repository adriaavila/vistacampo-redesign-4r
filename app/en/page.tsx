"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, MessageCircle, Star, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK_EN } from "@/lib/constants"
import { TypingText } from "@/components/TypingText"
import { useTranslation } from "react-i18next"
import { initI18next } from "@/app/i18n"

export default function HomePage() {
  const { t, i18n } = useTranslation("common");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await initI18next("en");
      setIsReady(true);
    };
    initializeI18n();
  }, []);

  // Show loading state while i18n is initializing
  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* 1. Specialized Rehabilitation Center - Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vc-hero-bg.png"
            alt="Vistacampo panoramic view"
            fill
            priority
            quality={95}
            sizes="100vw"
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
              <span className="text-white">Your recovery is our</span>{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
                mission
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              At Vistacampo we offer comprehensive addiction treatment in a safe, private and professional environment
              in Colonia Tovar, Venezuela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                  <span className="block sm:hidden">{t("actions.requestHelp")}</span>
                  <span className="hidden sm:inline">{t("actions.requestHelpNow")}</span>
                </Button>
              </a>
              <Link href="/en/tratamiento">
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

      {/* 2. About Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="text-rose-900 border-rose-900 mb-4">
                  {t("badges.aboutVistacampo")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-rose-900">
                  Pioneers in Addiction Treatment in Venezuela
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Vistacampo Center is a private residential institution, a pioneer in detoxification and
                  treatment of addictions to substances such as alcohol, cocaine, marijuana, tobacco, electronic
                  cigarettes, prescription pills, designer drugs, and emotional eating, located in Colonia Tovar.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In addition, we treat addictive behaviors such as gambling, video games, cell phones, social networks,
                  work, sex, sports, cosmetic surgeries, trauma, and dual pathology. We treat, in a highly
                  secure and confidential environment, young people and adults whose consumption or addictive behavior is affecting their
                  quality of life, causing immense suffering both to them and to their families and loved
                  ones.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Comprehensive Treatment</h3>
                      <p className="text-gray-600">We address both chemical and behavioral addictions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Safe Environment</h3>
                      <p className="text-gray-600">High security and confidentiality for young people and adults</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Family Support</h3>
                      <p className="text-gray-600">Comprehensive support for patients and families</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/en/equipo">
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
                  alt="Vistacampo facilities - Rehabilitation center in a natural environment"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">15+ years</p>
                      <p className="text-sm text-gray-600">of experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Message from the Founder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-rose-900 border-rose-900 mb-4">
                {t("badges.founderMessage")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
                A story of recovery and hope
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Learn about the personal story that inspired the creation of Vistacampo and our commitment to your
                recovery.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/julio_gonzalez.jpg"
                    alt="Julio González - Founder of Vistacampo Therapeutic Center"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">Julio González</h3>
                      <p className="text-emerald-200">Founder of Vistacampo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-rose-900/5 p-8 rounded-2xl border-l-4 border-rose-900">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In September 2001, I made the difficult and forced decision to separate myself from my family and my
                      profession to travel abroad in search of treatment to help me resolve my
                      uncontrollable dependence on alcohol and other drugs.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Many years have passed since then, and looking back today, I can confirm it was the best
                      decision. Thanks to the treatment I received and the human team at the Vallés Therapeutic Center,
                      in Catalonia, I recovered and learned to live without using and, most importantly, to live with
                      dignity.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      But the wheel of life kept turning and years later… I returned to that same town where I was
                      discharged, to join the team and work helping others. Those years of study and
                      training, alongside the specialists who had founded the treatment around 1984,
                      awakened in me a great motivation and commitment to return to Venezuela to promote a
                      pioneering center in drug addiction recovery.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      That's how we founded the Vistacampo Therapeutic Center, together with a multidisciplinary and
                      scientifically specialized team of doctors, psychiatrists, monitors, and therapists; with the
                      special characteristic that many of them are recovered addicts, in the same Center.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      A dream has come true, and so has a commitment. We can say with humility and enthusiasm to
                      those who are suffering for themselves or for a loved one that there is now a place in Venezuela where
                      they can receive professional and scientifically supported treatment.
                    </p>

                    <div className="bg-white p-6 rounded-lg shadow-lg border border-emerald-200 my-6">
                      <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                        You only have to take the first step and contact us at Vistacampo Center{" "}
                        <a
                          href={WHATSAPP_LINK_EN}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 font-semibold hover:underline"
                        >
                          (+58) 412-231-5968
                        </a>{" "}
                        or from your Digitel line dial{" "}
                        <span className="text-emerald-600 font-semibold">*CAMBIO (226246)</span>.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Here we will accompany you to embark on the path toward true recovery, with the dignity and
                      respect we all deserve when, at some point in our lives, we lose control and, without
                      being able to avoid it, hit rock bottom…
                    </p>

                    <p className="text-emerald-700 font-semibold text-lg">We're waiting for you.</p>

                    <div className="mt-6 pt-4 border-t border-emerald-200">
                      <p className="text-gray-600 italic">
                        <strong>Julio González</strong>
                        <br />
                        Founder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                      <WhatsAppIcon className="mr-2 h-4 w-4" color="#10b981" />
                      {t("actions.contactWhatsApp")}
                    </Button>
                  </a>
                  <Link href="/en/contacto" className="flex-1">
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

      {/* 4. Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("badges.ourServices")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized and personalized treatment
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We offer a comprehensive approach that combines medicine, psychology, and specialized therapies to ensure
                a successful and lasting recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Medical detoxification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    A process supervised by specialized physicians for safe and effective detoxification.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Group therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Group sessions that foster mutual support and the development of social skills.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Individual therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Personalized care with psychologists specialized in addictions and mental health.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Family therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    We involve the family in the recovery process to strengthen bonds.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Post-treatment follow-up</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Ongoing support to maintain sobriety and prevent relapses.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Complementary therapies</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    Art therapy, mindfulness, and recreational activities for comprehensive recovery.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("badges.testimonials")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stories of recovery and hope
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The experiences of our patients and their families are our greatest testament to the commitment and
                effectiveness of our treatment.
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
                    "Vistacampo gave me my life back. The professional team and the welcoming environment were fundamental
                    in my recovery process. Today I can say I am a new person."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-semibold">S.M.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Salma Maaz</p>
                      <p className="text-sm text-gray-600">Recovered patient</p>
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
                    "As a family, we are eternally grateful to Vistacampo. They not only saved our son, but
                    also taught us how to support him in his recovery."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">H.G.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Henry Galviz</p>
                      <p className="text-sm text-gray-600">Patient's family member</p>
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
                    "The treatment at Vistacampo changed my life perspective. Post-treatment follow-up has been
                    key to maintaining my sobriety for these past 3 years."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">O.M.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Oscar Martin</p>
                      <p className="text-sm text-gray-600">Recovered patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.ready")}</h2>
              <p className="text-xl mb-8 opacity-90">
                {t("cta.text")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href={WHATSAPP_LINK_EN} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                    {t("actions.contactWhatsApp")}
                  </Button>
                </a>
                <Link href="/en/contacto">
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