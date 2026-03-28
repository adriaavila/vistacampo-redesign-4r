import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type HeroHighlight = {
  icon: LucideIcon
  label: string
}

type SitePageHeroProps = {
  badge: string
  title: string
  description: string
  highlights?: HeroHighlight[]
  actions?: ReactNode
  visual?: ReactNode
  centered?: boolean
}

export function SitePageHero({
  badge,
  title,
  description,
  highlights = [],
  actions,
  visual,
  centered = false,
}: SitePageHeroProps) {
  const contentClassName = visual
    ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.92fr)] lg:gap-16"
    : "mx-auto max-w-4xl text-center"

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(107,31,43,0.14),transparent_22%),linear-gradient(180deg,#f6f2ec_0%,#fafafa_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.74),rgba(255,255,255,0.2)_42%,rgba(255,255,255,0.84))]" />

      <div className="container relative z-10">
        <div className={contentClassName}>
          <div
            className={cn(
              visual && "max-w-2xl",
              centered ? "text-center" : !visual ? "text-center" : "text-center lg:text-left",
            )}
          >
            <Badge variant="outline" className="vc-kicker">
              {badge}
            </Badge>
            <h1
              className={cn(
                "mt-6 text-4xl font-semibold leading-[0.96] text-[#0f241a] sm:text-5xl lg:text-6xl",
                visual && (centered ? "mx-auto" : "mx-auto lg:mx-0"),
                !visual && "mx-auto max-w-[14ch]",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-6 text-lg leading-8 text-[rgba(29,47,38,0.78)] sm:text-xl",
                visual && (centered ? "mx-auto max-w-2xl" : "mx-auto max-w-2xl lg:mx-0"),
                !visual && "mx-auto max-w-3xl",
              )}
            >
              {description}
            </p>

            {highlights.length > 0 ? (
              <div className={cn("mt-8 flex flex-wrap gap-3", centered || !visual ? "justify-center" : "justify-center lg:justify-start")}>
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-[rgba(191,161,95,0.28)] bg-white/78 px-4 py-2 text-sm text-[rgba(29,47,38,0.76)] shadow-sm backdrop-blur-md"
                  >
                    <Icon className="h-4 w-4 text-[#6b1f2b]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {actions ? (
              <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row", centered || !visual ? "justify-center" : "justify-center lg:justify-start")}>
                {actions}
              </div>
            ) : null}
          </div>

          {visual ? <div className="mx-auto w-full max-w-[40rem]">{visual}</div> : null}
        </div>
      </div>
    </section>
  )
}

export function SitePageSection({
  children,
  tone = "default",
}: {
  children: ReactNode
  tone?: "default" | "soft"
}) {
  return (
    <section
      className={cn(
        "px-4 py-20 sm:px-6 lg:px-8 lg:py-24",
        tone === "soft" ? "bg-[rgba(246,242,236,0.7)]" : "bg-transparent",
      )}
    >
      <div className="container">{children}</div>
    </section>
  )
}

export function SiteSectionHeader({
  badge,
  title,
  description,
  centered = false,
}: {
  badge: string
  title: string
  description: string
  centered?: boolean
}) {
  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <Badge variant="outline" className="vc-kicker">
        {badge}
      </Badge>
      <h2 className="vc-section-title mt-6">{title}</h2>
      <p className="vc-section-copy mt-5">{description}</p>
    </div>
  )
}

export function SiteCtaBand({
  badge,
  title,
  description,
  actions,
}: {
  badge: string
  title: string
  description: string
  actions: ReactNode
}) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[linear-gradient(135deg,#0f241a_0%,#6b1f2b_100%)] px-6 py-10 text-white shadow-[0_50px_120px_-60px_rgba(15,36,26,0.95)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,161,95,0.24),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="border-white/18 bg-white/8 px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/72">
              {badge}
            </Badge>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.02] text-white md:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/76">{description}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">{actions}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteLegalPage({
  badge,
  title,
  description,
  lastUpdated,
  children,
}: {
  badge: string
  title: string
  description: string
  lastUpdated: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen">
      <SitePageHero badge={badge} title={title} description={description} centered />
      <SitePageSection>
        <div className="vc-shell mx-auto max-w-4xl p-8 sm:p-10">
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-[rgba(29,47,38,0.52)]">{lastUpdated}</p>
          <div className="blog-content mt-8">{children}</div>
        </div>
      </SitePageSection>
    </div>
  )
}
