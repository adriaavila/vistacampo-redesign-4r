"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Heart, Search, Sparkles } from "lucide-react"

import { SiteCtaBand, SitePageHero, SitePageSection } from "@/components/site-page-primitives"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Locale = "es" | "en"

type Post = {
  title: string
  description: string
  date: string
  slug: string
  image?: string
}

const contentByLocale = {
  es: {
    hero: {
      badge: "Blog y noticias",
      title: "Información y recursos sobre adicciones",
      description: "Artículos, contexto clínico y reflexiones que ayudan a comprender mejor el tratamiento, la recuperación y la salud mental.",
      highlights: ["Artículos especializados", "Consejos de expertos", "Basado en evidencia"],
    },
    search: {
      placeholder: "Buscar artículos...",
      results: (count: number) => `${count} resultado${count !== 1 ? "s" : ""}`,
      loading: "Cargando artículos...",
      noResults: "No se encontraron artículos",
      noResultsText: "Intenta con otros términos de búsqueda.",
      empty: "No hay artículos disponibles",
      emptyText: "Pronto publicaremos contenido especializado sobre adicciones y salud mental.",
      readMore: "Leer más",
    },
    cta: {
      badge: "Orientación profesional",
      title: "¿Necesitas ayuda con una adicción?",
      description: "Nuestro equipo está disponible para orientarte con claridad sobre tratamiento, admisión y próximos pasos.",
      primary: "Contáctanos",
      secondary: "Conocer tratamiento",
    },
  },
  en: {
    hero: {
      badge: "Blog and news",
      title: "Information and resources about addiction recovery",
      description: "Articles, clinical perspective, and guidance that help people better understand treatment, recovery, and mental health.",
      highlights: ["Specialized articles", "Expert guidance", "Evidence-based perspective"],
    },
    search: {
      placeholder: "Search articles...",
      results: (count: number) => `${count} result${count !== 1 ? "s" : ""}`,
      loading: "Loading articles...",
      noResults: "No articles found",
      noResultsText: "Try different search terms.",
      empty: "No articles available",
      emptyText: "We will soon publish specialized content about addictions and mental health.",
      readMore: "Read more",
    },
    cta: {
      badge: "Professional guidance",
      title: "Need help with an addiction?",
      description: "Our team is available to guide you clearly through treatment, admission, and the right next step.",
      primary: "Contact us",
      secondary: "Explore treatment",
    },
  },
} as const

export function VistacampoNewsPage({ locale }: { locale: Locale }) {
  const copy = contentByLocale[locale]
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?lang=${locale}`)
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error)
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [locale])

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [posts, searchTerm],
  )

  return (
    <div className="min-h-screen">
      <SitePageHero
        badge={copy.hero.badge}
        title={copy.hero.title}
        description={copy.hero.description}
        highlights={[
          { icon: BookOpen, label: copy.hero.highlights[0] },
          { icon: Heart, label: copy.hero.highlights[1] },
          { icon: Sparkles, label: copy.hero.highlights[2] },
        ]}
        centered
      />

      <SitePageSection>
        <div className="vc-shell mx-auto max-w-6xl p-4 sm:p-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(29,47,38,0.42)]" />
              <Input
                placeholder={copy.search.placeholder}
                className="pl-11"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            {searchTerm ? (
              <span className="font-ui rounded-full border border-[rgba(15,36,26,0.08)] bg-[rgba(246,242,236,0.78)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[rgba(29,47,38,0.6)]">
                {copy.search.results(filteredPosts.length)}
              </span>
            ) : null}
          </div>
        </div>
      </SitePageSection>

      <SitePageSection>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            <div className="vc-shell col-span-full py-20 text-center">
              <div className="mx-auto h-20 w-20 animate-spin rounded-full border-b-2 border-[#1a3628]" />
              <p className="mt-4 text-[rgba(29,47,38,0.68)]">{copy.search.loading}</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <CardHeader className="p-0">
                  {post.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.6rem]">
                      <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  ) : null}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="font-ui flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[rgba(29,47,38,0.48)]">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <CardTitle className="mt-5 line-clamp-2 text-[1.7rem]">{post.title}</CardTitle>
                  <CardDescription className="mt-3 line-clamp-3">{post.description}</CardDescription>
                  <Button asChild variant="outline" className="font-ui mt-6 h-11 rounded-full border-[#1a3628] bg-transparent text-sm font-semibold text-[#1a3628] hover:bg-[#1a3628] hover:text-[#fafafa]">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      {copy.search.readMore}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="vc-shell col-span-full py-20 text-center">
              <BookOpen className="mx-auto h-14 w-14 text-[rgba(29,47,38,0.36)]" />
              <h3 className="mt-6 text-2xl font-medium text-[#0f241a]">{searchTerm ? copy.search.noResults : copy.search.empty}</h3>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[rgba(29,47,38,0.68)]">
                {searchTerm ? copy.search.noResultsText : copy.search.emptyText}
              </p>
            </div>
          )}
        </div>
      </SitePageSection>

      <SiteCtaBand
        badge={copy.cta.badge}
        title={copy.cta.title}
        description={copy.cta.description}
        actions={
          <>
            <Button asChild size="lg" className="font-ui h-14 rounded-full bg-[#fafafa] px-7 text-[0.95rem] font-semibold text-[#0f241a] hover:bg-[#d9c088]">
              <Link href={`/${locale}/contacto`}>{copy.cta.primary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-ui h-14 rounded-full border-white/16 bg-transparent px-7 text-[0.95rem] font-semibold text-white hover:bg-white/12 hover:text-white">
              <Link href={`/${locale}/tratamiento`}>
                {copy.cta.secondary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        }
      />
    </div>
  )
}
