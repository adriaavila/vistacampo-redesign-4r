const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generate() {
  const bgPath = path.join(process.cwd(), 'public/images/og-share-bg.jpg');
  const outPath = path.join(process.cwd(), 'public/images/og-hero-with-text.jpg');

  // The SVG needs to recreate the cool layout. We'll use absolute positioning logic translated to SVG tags.
  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(2,44,34,0.85)" />
      <stop offset="50%" stop-color="rgba(5,46,38,0.78)" />
      <stop offset="100%" stop-color="rgba(0,0,0,0.6)" />
    </linearGradient>

    <!-- Accent Stripe Gradient -->
    <linearGradient id="stripeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    
    <!-- Logo Box Gradient -->
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <!-- Dark overlay -->
  <rect x="0" y="0" width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Accent stripe -->
  <rect x="0" y="0" width="8" height="630" fill="url(#stripeGrad)" />

  <!-- Wrap content in a group shifted right and down -->
  <g transform="translate(80, 100)">
    
    <!-- Badge -->
    <rect x="0" y="0" width="300" height="34" rx="17" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.4)" stroke-width="1.5" />
    <text x="150" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#6ee7b7" text-anchor="middle" letter-spacing="1">CENTRO ESPECIALIZADO EN REHABILITACIÓN</text>

    <!-- Headline -->
    <text x="0" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="70" font-weight="800" fill="white" letter-spacing="-1">Tu recuperación,</text>
    <text x="0" y="175" font-family="system-ui, -apple-system, sans-serif" font-size="70" font-weight="800" fill="#34d399" letter-spacing="-1">en manos expertas</text>

    <!-- Subtext -->
    <text x="0" y="245" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="rgba(255,255,255,0.85)">Atención médica y psicológica especializada. Discreto,</text>
    <text x="0" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="rgba(255,255,255,0.85)">seguro y profesional en Colonia Tovar, Venezuela.</text>

    <!-- Footer Row -->
    <g transform="translate(0, 390)">
      <!-- Logo Box -->
      <rect x="0" y="0" width="40" height="40" rx="8" fill="url(#logoGrad)" />
      <text x="20" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="900" fill="white" text-anchor="middle">V</text>

      <!-- Site Domain -->
      <text x="56" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="white">vistacampo.com</text>

      <!-- Divider -->
      <rect x="260" y="6" width="2" height="28" fill="rgba(255,255,255,0.25)" />

      <!-- Pills -->
      <g transform="translate(290, 4)">
        <rect x="0" y="0" width="110" height="32" rx="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
        <text x="55" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)" text-anchor="middle">Confidencial</text>

        <rect x="120" y="0" width="60" height="32" rx="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
        <text x="150" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)" text-anchor="middle">24/7</text>

        <rect x="190" y="0" width="85" height="32" rx="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
        <text x="232" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)" text-anchor="middle">+15 años</text>
      </g>
    </g>
  </g>
</svg>
  `;

  await sharp(bgPath)
    .composite([
      {
        input: Buffer.from(svg),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 85 })
    .toFile(outPath);

  console.log('Success! Saved to ' + outPath);
}

generate().catch(console.error);
