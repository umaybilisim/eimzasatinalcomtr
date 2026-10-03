import { siteConfig } from "@/lib/site-config"
import { products, internationalPricing } from "@/lib/products"
import { blogPosts } from "@/lib/blog-data"
import { cities } from "@/lib/city-seo-data"

// Build sırasında ürün, fiyat, blog ve şehir verilerinden üretilir; içerik değişince elle güncellemek gerekmez.
export const dynamic = "force-static"

export function GET() {
  const base = siteConfig.url
  const productLines = products
    .map((p) => {
      const prices = p.packages.map((k) => `${k.duration}: ${k.price}`).join(", ")
      const label = p.name === p.shortName ? p.name : `${p.name} (${p.shortName})`
      return `- [${label}](${base}/${p.slug}/): ${p.description} Paketler — ${prices}.`
    })
    .join("\n")
  const intl = internationalPricing.map((k) => `${k.duration}: ${k.usd} / ${k.eur}`).join(", ")
  const blog = blogPosts.map((b) => `- [${b.title}](${base}/blog/${b.slug}/): ${b.excerpt}`).join("\n")
  const cityList = cities.map((c) => c.name).join(", ")

  const body = `# ${siteConfig.brandName} — E-İmza, KEP ve Zaman Damgası

> ${siteConfig.entityDescription}

## Kurum
- Marka: ${siteConfig.brandName}
- Resmî ünvan: ${siteConfig.legalName}
- Adres: ${siteConfig.address}
- Telefon: ${siteConfig.phone} (2. hat: ${siteConfig.phone2})
- WhatsApp: https://wa.me/${siteConfig.whatsapp}
- E-posta: ${siteConfig.email}
- Çalışma saatleri: ${siteConfig.workingHours}

## Hizmet şekli
- Sakarya: randevuyla ofisten aynı gün elden teslim ve kurulum.
- Diğer iller: USB token kargo ile 1-3 iş gününde teslim; kurulum uzaktan (telefon/WhatsApp) yapılır. Şehir sayfası olan iller: ${cityList}.
- Yurt dışı: e-imza paketleri USD/EUR ile satılır, kargo hariç.

## Ürünler ve fiyatlar (KDV dahil)
${productLines}
- Yurt dışı e-imza fiyatları: ${intl} (kargo hariç).

## Rehberler
${blog}

## Önemli sayfalar
- Ana sayfa: ${base}/
- Sıkça sorulan sorular: ${base}/sss/
- Hakkımızda: ${base}/hakkimizda/
- İletişim ve sipariş: ${base}/iletisim/
- Mesafeli satış sözleşmesi: ${base}/mesafeli-satis/
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
