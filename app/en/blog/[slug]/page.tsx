"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, BookOpen, Heart, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { markdownToHtml } from "@/lib/markdown"
import { ShareButtons } from "@/components/share-buttons"

type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
  imageAttribution?: string;
  content?: string;
}

type PostWithHtml = Post & {
  htmlContent: string;
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<PostWithHtml | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${slug}?lang=en`)
        if (response.ok) {
          const data = await response.json()
          if (data.content) {
            const htmlContent = await markdownToHtml(data.content)
            setPost({ ...data, htmlContent })
          } else {
            setPost({ ...data, htmlContent: '' })
          }
        } else {
          setPost(null)
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        setPost(null)
      } finally {
        setIsLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article not found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/en/noticias">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to news
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/en/noticias">
                <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to news
                </Button>
              </Link>
            </div>
            
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
                Blog and news
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                {post.description}
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <ShareButtons 
                  title={post.title}
                  url={typeof window !== 'undefined' ? window.location.href : ''}
                  description={post.description}
                  language="en"
                />
              </div>
            </div>

            {post.image && (
              <div className="mb-8">
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {post.imageAttribution && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {post.imageAttribution}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Article summary</h3>
                <p className="text-gray-700">{post.description}</p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need help with an addiction?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Speak with a specialist for clear, confidential guidance on treatment and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contacto">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contact us
                </Button>
              </Link>
              <Link href="/en/tratamiento">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Explore treatment options
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
