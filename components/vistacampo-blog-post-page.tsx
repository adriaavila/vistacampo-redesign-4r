"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowRight, BookOpen, Calendar } from "lucide-react"

import { SiteCtaBand, SitePageHero, SitePageSection } from "@/components/site-page-primitives"
import { ShareButtons } from "@/components/share-buttons"
import { Button } from "@/components/ui/button"
import { markdownToHtml } from "@/lib/markdown"

type Locale = "es" | "en"

type Post = {
  title: string
  description: string
  date: string
  slug: string
  image?: string
  imageAttribution?: string
  content?: string
}

type PostWithHtml = Post & {
  htmlContent: string
}

const contentByLocale = {
  es: {
    badge: "Blog y noticias",
    back: "Volver a noticias",
    loading: "Cargando artículo...",
    missingTitle: "Artículo no encontrado",
    missingText: "El artículo que buscas no existe o ha sido eliminado.",
    summary: "Resumen del artículo",
    ctaBadge: "Ayuda inmediata",
    ctaTitle: "¿Necesitas ayuda con una adicción?",
    ctaDescription: "Nuestro equipo puede orientarte con claridad sobre tratamiento, admisión y próximos pasos.",
    ctaPrimary: "Contáctanos",
    ctaSecondary: "Conoce nuestro tratamiento",
  },
  en: {
    badge: "Blog and news",
    back: "Back to news",
    loading: "Loading article...",
    missingTitle: "Article not found",
    missingText: "The article you are looking for does not exist or has been removed.",
    summary: "Article summary",
    ctaBadge: "Immediate guidance",
    ctaTitle: "Need help with an addiction?",
    ctaDescription: "Our team can guide you clearly through treatment, admission, and the most helpful next step.",
    ctaPrimary: "Contact us",
    ctaSecondary: "Explore treatment",
  },
} as const

export function VistacampoBlogPostPage({ locale }: { locale: Locale }) {
  const copy = contentByLocale[locale]
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<PostWithHtml | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${slug}?lang=${locale}`)
        if (response.ok) {
          const data = await response.json()
          const htmlContent = data.content ? await markdownToHtml(data.content) : ""
          setPost({ ...data, htmlContent })
        } else {
          setPost(null)
        }
      } catch (error) {
        console.error("Error fetching post:", error)
        setPost(null)
      } finally {
        setIsLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [locale, slug])

  if (isLoading) {
    return (
      <div className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
        <div className="container">
          <div className="vc-shell mx-auto max-w-2xl py-20 text-center">
            <div className="mx-auto h-20 w-20 animate-spin rounded-full border-b-2 border-[#1a3628]" />
            <p className="mt-4 text-[rgba(29,47,38,0.68)]">{copy.loading}</p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
        <div className="container">
          <div className="vc-shell mx-auto max-w-2xl py-20 text-center">
            <BookOpen className="mx-auto h-16 w-16 text-[rgba(29,47,38,0.36)]" />
            <h1 className="mt-6 text-3xl font-medium text-[#0f241a]">{copy.missingTitle}</h1>
            <p className="mx-auto mt-3 max-w-xl text-base leading-8 text-[rgba(29,47,38,0.68)]">{copy.missingText}</p>
            <Button asChild className="font-ui mt-8 h-12 rounded-full bg-[#1a3628] px-6 text-sm font-semibold text-[#fafafa] hover:bg-[#6b1f2b]">
              <Link href={`/${locale}/noticias`}>
                <ArrowLeft className="h-4 w-4" />
                {copy.back}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <SitePageHero
        badge={copy.badge}
        title={post.title}
        description={post.description}
        centered
        actions={
          <Button asChild variant="outline" size="lg" className="font-ui h-12 rounded-full border-[#1a3628] bg-white/80 px-6 text-sm font-semibold text-[#1a3628] hover:bg-[#1a3628] hover:text-[#fafafa]">
            <Link href={`/${locale}/noticias`}>
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>
          </Button>
        }
        visual={
          <div className="vc-shell p-4 sm:p-5">
            {post.image ? (
              <>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="px-3 pb-2 pt-4">
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
                  {post.imageAttribution ? (
                    <p className="mt-3 text-sm leading-7 text-[rgba(29,47,38,0.56)]">{post.imageAttribution}</p>
                  ) : null}
                </div>
              </>
            ) : null}
          </div>
        }
      />

      <SitePageSection>
        <div className="mx-auto max-w-4xl">
          <div className="vc-shell p-8 sm:p-10">
            <div className="flex flex-col gap-5 border-b border-[rgba(15,36,26,0.08)] pb-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-ui text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.46)]">{copy.summary}</p>
                <p className="mt-3 text-base leading-8 text-[rgba(29,47,38,0.72)]">{post.description}</p>
              </div>
              <ShareButtons
                title={post.title}
                url={typeof window !== "undefined" ? window.location.href : ""}
                description={post.description}
                language={locale}
              />
            </div>

            <div className="blog-content mt-8" dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }} />
          </div>
        </div>
      </SitePageSection>

      <SiteCtaBand
        badge={copy.ctaBadge}
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        actions={
          <>
            <Button asChild size="lg" className="font-ui h-14 rounded-full bg-[#fafafa] px-7 text-[0.95rem] font-semibold text-[#0f241a] hover:bg-[#d9c088]">
              <Link href={`/${locale}/contacto`}>{copy.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-ui h-14 rounded-full border-white/16 bg-transparent px-7 text-[0.95rem] font-semibold text-white hover:bg-white/12 hover:text-white">
              <Link href={`/${locale}/tratamiento`}>
                {copy.ctaSecondary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        }
      />
    </div>
  )
}
