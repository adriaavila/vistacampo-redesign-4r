import { ImageResponse } from "next/og"

export const runtime = "edge"

const size = {
  width: 1200,
  height: 630,
}

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://vistacampo-redesign-4r.vercel.app/images/og-share-bg.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Dark gradient overlay — mimics the hero's radial vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(2,44,34,0.82) 0%, rgba(5,46,38,0.72) 40%, rgba(0,0,0,0.55) 100%)",
            display: "flex",
          }}
        />

        {/* Emerald accent stripe on the left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "linear-gradient(to bottom, #34d399, #059669)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 80px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                background: "rgba(52,211,153,0.2)",
                border: "1px solid rgba(52,211,153,0.5)",
                borderRadius: "999px",
                padding: "6px 18px",
                color: "#6ee7b7",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              Centro Especializado en Rehabilitación
            </div>
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "720px",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Tu recuperación,</span>
            <span style={{ display: "flex", color: "#34d399" }}>en manos expertas</span>
          </div>

          {/* Subtext */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "620px",
              lineHeight: 1.5,
              marginBottom: "40px",
              display: "flex",
            }}
          >
            Atención médica y psicológica especializada. Discreto, seguro y profesional en Colonia Tovar, Venezuela.
          </div>

          {/* Footer row: logo text + trust pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {/* Site name */}
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.01em",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #34d399, #059669)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: 900,
                  color: "white",
                }}
              >
                V
              </div>
              vistacampo.com
            </div>

            {/* Divider */}
            <div
              style={{
                width: "1px",
                height: "28px",
                background: "rgba(255,255,255,0.25)",
                display: "flex",
              }}
            />

            {/* Trust pillss */}
            <div style={{ display: "flex", gap: "12px" }}>
              {["Confidencial", "24/7", "+15 años"].map((label) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "999px",
                    padding: "5px 14px",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "13px",
                    fontWeight: 500,
                    display: "flex",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
