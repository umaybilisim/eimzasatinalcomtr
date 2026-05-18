import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const routes = [
    "",
    "/e-imza",
    "/kep",
    "/zaman-damgasi",
    "/hakkimizda",
    "/sss",
    "/iletisim",
    "/referanslar",
    "/blog",
    "/blog/e-imza-nedir",
    "/blog/e-imza-nasil-alinir",
    "/blog/kep-nedir-ne-ise-yarar",
    "/blog/zaman-damgasi-nedir",
    "/blog/mali-musavir-e-imza-rehberi",
    "/blog/e-imza-yenileme",
    "/kvkk",
    "/gizlilik",
    "/mesafeli-satis",
  ]

  return routes.map((route) => ({
    url: `${base}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.7 : 0.8,
  }))
}
