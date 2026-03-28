import { readFile } from "node:fs/promises"

import { ImageResponse } from "next/og"

export type OgLocale = "es" | "en"

export const ogImageSize = {
  width: 1200,
  height: 630,
}

export const ogImageContentType = "image/png"

const copyByLocale = {
  es: {
    badge: "Centro terapéutico residencial",
    title: "Recuperar tu vida es posible",
    emphasis: "con cuidado experto y confidencial",
    description:
      "Tratamiento médico, psicológico y familiar en un entorno privado, cálido y profesional.",
    chips: ["Confidencialidad total", "Atención 24/7"],
    location: "Colonia Tovar, Venezuela",
    supportLabel: "Atención clínica integral",
  },
  en: {
    badge: "Residential treatment center",
    title: "Recovery is possible",
    emphasis: "with expert, confidential care",
    description: "Medical, psychological, and family treatment in a private, warm, professional setting.",
    chips: ["Full confidentiality", "24/7 support"],
    location: "Colonia Tovar, Venezuela",
    supportLabel: "Integrated clinical care",
  },
} as const

let assetPromise:
  | Promise<{
    backgroundDataUri: string
    logoDataUri: string
  }>
  | undefined

async function loadAssets() {
  if (!assetPromise) {
    assetPromise = Promise.all([
      readFile(new URL("../public/images/og-share-card.jpg", import.meta.url)),
      readFile(new URL("../public/images/og-share-card.jpg", import.meta.url)),
    ]).then(([backgroundBuffer, logoBuffer]) => ({
      backgroundDataUri: `data:image/png;base64,${backgroundBuffer.toString("base64")}`,
      logoDataUri: `data:image/png;base64,${logoBuffer.toString("base64")}`,
    }))
  }

  return assetPromise
}

export async function renderVistacampoOgImage(locale: OgLocale) {
  const copy = copyByLocale[locale]
  const { backgroundDataUri, logoDataUri } = await loadAssets()

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#0f241a",
          color: "#fafafa",
        }}
      >
        <img
          alt=""
          src={backgroundDataUri}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,36,26,0.96) 0%, rgba(15,36,26,0.9) 46%, rgba(15,36,26,0.4) 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            background: "rgba(15,36,26,0.1)",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            padding: "42px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: "36px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(246,242,236,0.08)",
              padding: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "64%",
                height: "100%",
                padding: "30px 32px",
                borderRadius: "30px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(15,36,26,0.8)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  alt="Vistacampo"
                  src={logoDataUri}
                  style={{
                    width: "180px",
                    height: "74px",
                    objectFit: "contain",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    marginTop: "22px",
                    borderRadius: "999px",
                    border: "1px solid rgba(217,192,136,0.28)",
                    background: "rgba(255,255,255,0.08)",
                    padding: "10px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#d9c088",
                  }}
                >
                  {copy.badge}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "28px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      maxWidth: "620px",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "68px",
                      fontWeight: 700,
                      lineHeight: 0.96,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {copy.title}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      marginTop: "14px",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "46px",
                      fontWeight: 600,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: "#d9c088",
                    }}
                  >
                    {copy.emphasis}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      maxWidth: "620px",
                      marginTop: "24px",
                      fontSize: "25px",
                      lineHeight: 1.45,
                      color: "rgba(250,250,250,0.84)",
                    }}
                  >
                    {copy.description}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  {copy.chips.map((chip) => (
                    <div
                      key={chip}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.08)",
                        padding: "12px 18px",
                        fontSize: "19px",
                        fontWeight: 600,
                        color: "#fafafa",
                      }}
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "18px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(250,250,250,0.64)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "54px",
                      height: "1px",
                      background: "rgba(217,192,136,0.6)",
                    }}
                  />
                  {copy.location}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                position: "relative",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                padding: "10px 8px 12px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  width: "250px",
                  borderRadius: "28px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.12)",
                  padding: "22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#d9c088",
                  }}
                >
                  Vistacampo
                </div>
                <div
                  style={{
                    display: "flex",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "34px",
                    lineHeight: 1.06,
                    letterSpacing: "-0.04em",
                    color: "#fafafa",
                  }}
                >
                  {copy.supportLabel}
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "1px",
                    background: "rgba(255,255,255,0.14)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    fontSize: "17px",
                    lineHeight: 1.45,
                    color: "rgba(250,250,250,0.78)",
                  }}
                >
                  Naturaleza, privacidad y estructura clínica en una misma experiencia de recuperación.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
    },
  )
}
