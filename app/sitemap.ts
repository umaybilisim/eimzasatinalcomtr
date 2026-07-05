import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { cities } from "@/lib/city-seo-data"

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
    "/blog/e-fatura-icin-e-imza-gerekli-mi",
    "/blog/e-imza-nedir",
    "/blog/e-imza-nasil-alinir",
    "/blog/kep-nedir-ne-ise-yarar",
    "/blog/zaman-damgasi-nedir",
    "/blog/mali-musavir-e-imza-rehberi",
    "/blog/e-imza-yenileme",
    "/blog/yapi-denetimcisi-e-imza-rehberi",
    "/blog/sakarya-e-imza",
    "/kvkk",
    "/gizlilik",
    "/mesafeli-satis",
  ]

  const eimzaCityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/e-imza/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: city.slug === "sakarya" ? 0.9 : 0.75,
  }))

  const kepCityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/kep/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: city.slug === "sakarya" ? 0.85 : 0.7,
  }))

  const zdCityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/zaman-damgasi/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: city.slug === "sakarya" ? 0.85 : 0.7,
  }))

  return [
    ...routes.map((route) => ({
      url: `${base}${route}/`,
      lastModified: new Date(),
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : route.startsWith("/blog") ? 0.7 : 0.8,
    })),
    ...eimzaCityRoutes,
    ...kepCityRoutes,
    ...zdCityRoutes,
  ]
}
