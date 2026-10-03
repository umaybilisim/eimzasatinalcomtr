import { siteConfig } from "@/lib/site-config"

// Next.js, sayfa düzeyindeki openGraph nesnesiyle layout'takini birleştirmez, tamamen değiştirir.
// Her sayfa openGraph tanımlarken bunu yaymalı; yoksa og:image, og:type ve og:locale kaybolur.
export const ogImage = {
  url: `${siteConfig.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "eimzasatinal.com.tr — E-İmza, KEP ve Zaman Damgası",
}

export const ogDefaults = {
  type: "website" as const,
  locale: "tr_TR",
  siteName: siteConfig.brandName,
  images: [ogImage],
}

export const ogArticle = (publishedTime: string, modifiedTime?: string) => ({
  ...ogDefaults,
  type: "article" as const,
  publishedTime,
  modifiedTime: modifiedTime ?? publishedTime,
})

const BRAND_SUFFIX = " | eimzasatinal.com.tr"
const SHORT_SUFFIX = " | eimzasatinal"
const TITLE_MAX = 60

// Marka ekini yalnızca title 60 karakteri aşmayacaksa ekler (Google ~600 px'te keser, Bing 70 üstünü uyarır).
export function pageTitle(title: string) {
  if (title.length + BRAND_SUFFIX.length <= TITLE_MAX) return { absolute: title + BRAND_SUFFIX }
  if (title.length + SHORT_SUFFIX.length <= TITLE_MAX) return { absolute: title + SHORT_SUFFIX }
  return { absolute: title }
}
