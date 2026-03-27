"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type HeroSlide = {
  src: string
  alt: string
  label: string
}

type Props = {
  slides: HeroSlide[]
  children: React.ReactNode
}

const AUTOPLAY_MS = 6500

export function HomeHeroCarousel({ slides, children }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(intervalId)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-[1600ms] ease-out ${
              index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={75}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/65 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent z-10" />

      <div className="pointer-events-none absolute left-4 right-4 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-between md:flex">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous hero image"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next hero image"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="container mx-auto px-4 relative z-20">{children}</div>

      <div className="absolute inset-x-0 bottom-8 z-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col gap-4">
            <div className="hidden items-center justify-between text-white/85 md:flex">
              <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                {slides[activeIndex]?.label}
              </div>
              <div className="text-sm tracking-[0.18em] text-white/70">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`group relative h-2 overflow-hidden rounded-full transition-all duration-500 ${
                    index === activeIndex ? "w-14 bg-white/35" : "w-8 bg-white/20 hover:bg-white/30"
                  }`}
                >
                  <span
                    className={`absolute inset-y-0 left-0 rounded-full bg-white transition-all duration-500 ${
                      index === activeIndex ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
