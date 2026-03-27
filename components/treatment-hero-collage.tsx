import Image from "next/image"

type Props = {
  images: string[]
}

const TILE_CLASSES = [
  "aspect-[4/5] translate-y-6 -rotate-[4deg] lg:col-span-2",
  "aspect-[5/4] -translate-y-4 rotate-[3deg]",
  "aspect-[4/5] translate-y-10 rotate-[4deg]",
  "aspect-[3/4] -translate-y-2 -rotate-[3deg]",
  "aspect-[5/4] translate-y-8 rotate-[2deg] lg:col-span-2",
  "aspect-[4/5] -translate-y-7 -rotate-[4deg]",
  "aspect-[5/4] translate-y-4 rotate-[3deg]",
  "aspect-[4/5] -translate-y-6 rotate-[2deg]",
  "aspect-[3/4] translate-y-7 -rotate-[3deg]",
]

export function TreatmentHeroCollage({ images }: Props) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/80 via-teal-50/35 to-sky-100/75" />

      <div className="absolute inset-0 px-3 py-4 md:px-6 md:py-5 lg:px-8">
        <div className="flex h-full items-center">
          <div className="grid w-full scale-[1.08] grid-cols-3 gap-3 opacity-[0.92] md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-5">
            {images.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-[1.75rem] border border-white/65 bg-white/18 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.45)] ${TILE_CLASSES[index % TILE_CLASSES.length]}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={index < 2}
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 25vw, 33vw"
                  className="scale-[1.02] object-cover saturate-[1.08]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(255,255,255,0.58)_28%,rgba(255,255,255,0.18)_56%,transparent_82%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0.06)_24%,rgba(255,255,255,0.04)_76%,rgba(255,255,255,0.14))]" />
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1.5px]" />

    </div>
  )
}
