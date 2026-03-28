import type { MetadataRoute } from "next"

import { getBaseUrl } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const routes = [
    "/es/",
    "/es/tratamiento/",
    "/es/instalaciones/",
    "/es/equipo/",
    "/es/noticias/",
    "/es/contacto/",
    "/es/privacidad/",
    "/es/terminos/",
    "/en/",
    "/en/tratamiento/",
    "/en/instalaciones/",
    "/en/equipo/",
    "/en/noticias/",
    "/en/contacto/",
    "/en/privacidad/",
    "/en/terminos/",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/es/" || route === "/en/" ? "weekly" : "monthly",
    priority: route === "/es/" || route === "/en/" ? 1 : 0.7,
  }))
}
