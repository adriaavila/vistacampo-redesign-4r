"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type TreatmentPhaseSlide = {
  src: string
  alt: string
  label: string
}

type Props = {
  slides: TreatmentPhaseSlide[]
  previousLabel: string
  nextLabel: string
}

const AUTOPLAY_MS = 5200

export function TreatmentPhaseCarousel({ slides, previousLabel, nextLabel }: Props) {
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

  if (slides.length === 0) {
    return null
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-[rgba(26,54,40,0.1)] bg-[linear-gradient(135deg,#f6f2ec_0%,#ffffff_48%,rgba(26,54,40,0.05)_100%)] shadow-[0_30px_80px_-40px_rgba(15,36,26,0.42)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,54,40,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(191,161,95,0.16),transparent_42%)]" />

      <div className="relative aspect-[5/4] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === activeIndex ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-[1.02]"
            }`}
          >
            <div className="absolute inset-0 p-4 md:p-6">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 shadow-inner backdrop-blur-sm">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 32rem, (min-width: 768px) 42vw, 100vw"
                  className="object-contain p-3 md:p-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(15,36,26,0.9)] via-[rgba(15,36,26,0.22)] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5">
        <div className="max-w-[70%] rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          {slides[activeIndex]?.label}
        </div>

        {slides.length > 1 && (
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={slide.label}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-10 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label={previousLabel}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/85 text-[#1a3628] shadow-lg backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label={nextLabel}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/85 text-[#1a3628] shadow-lg backdrop-blur transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
