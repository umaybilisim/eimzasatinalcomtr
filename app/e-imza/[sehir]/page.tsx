import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Truck, Phone } from "lucide-react"
import { PricingTable } from "@/components/site/pricing-table"
import { CtaSection } from "@/components/site/cta-section"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, productSchema, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { getProduct } from "@/lib/products"
import { siteConfig } from "@/lib/site-config"
import { cities, getCityBySlug } from "@/lib/city-seo-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return cities.map((city) => ({ sehir: city.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { sehir: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.sehir)
  if (!city) return {}

  const url = `${siteConfig.url}/e-imza/${city.slug}/`
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
    },
  }
}

const useCasesList = [
  "e-Devlet işlemleri",
  "e-Fatura & e-Deftere",
  "Kamu ihaleleri (EKAP)",
  "SGK bildirimleri",
  "e-Beyanname imzalama",
  "Ticari sözleşmeler",
  "Banka & finans işlemleri",
  "UYAP (Avukatlar)",
  "Vergi dairesi işlemleri",
  "e-İmzalı yazışmalar",
  "Tapu & kadastro",
  "TÜRMOB işlemleri",
]

export default function SehirEImzaPage({ params }: { params: { sehir: string } }) {
  const city = getCityBySlug(params.sehir)
  if (!city) notFound()

  const product = getProduct("e-imza")!
  const pageUrl = `${siteConfig.url}/e-imza/${city.slug}/`

  const cityFaqItems = city.faqs.map((f) => ({
    id: `city-faq-${city.slug}-${f.question.slice(0, 20)}`,
    question: f.question,
    answer: f.answer,
  }))

  return (
    <>
      <JsonLd
        data={productSchema({
          name: `${city.name} E-İmza — TÜBİTAK Onaylı Nitelikli Elektronik İmza`,
          description: city.metaDescription,
          url: pageUrl,
          lowPrice: "2750",
          highPrice: "3750",
        })}
      />
      <JsonLd data={faqSchema(city.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "E-İmza", url: `${siteConfig.url}/e-imza/` },
          { name: `${city.name} E-İmza`, url: pageUrl },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "E-İmza", href: "/e-imza" },
              { label: `${city.name} E-İmza` },
            ]}
          />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold max-w-3xl text-balance">
            {city.name}{" "}
            <span className="text-blue-400">E-İmza Satın Al</span>{" "}
            — TÜBİTAK Onaylı
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{city.heroDesc}</p>

          {/* Quick delivery badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-blue-600/30 border border-blue-500/40 rounded-full px-4 py-2 text-sm text-blue-200">
            <Truck className="h-4 w-4" />
            {city.deliveryNote}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Hemen Sipariş Ver
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${city.name} için e-imza almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              WhatsApp ile Sipariş
            </a>
          </div>
        </div>
      </section>

      {/* City Context */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {city.nameGenitive} E-İmza Neden Bu Kadar Önemli?
              </h2>
              <p className="text-muted-foreground leading-relaxed">{city.cityContext}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{city.sectorNote}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {useCasesList.map((u) => (
                <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{u}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">
              {city.name} E-İmza Fiyatları
            </h2>
            <p className="mt-2 text-muted-foreground">
              1, 2 veya 3 yıllık paket seçenekleri. Tüm paketlerde TÜBİTAK onaylı sertifika.
            </p>
          </div>
          <PricingTable packages={product.packages} />
        </div>
      </section>

      {/* Delivery Highlight */}
      <section className="py-10 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Truck className="h-10 w-10 shrink-0 opacity-90" />
              <div>
                <p className="font-bold text-lg">{city.name}&apos;a Hızlı Teslimat</p>
                <p className="text-blue-100 text-sm">{city.deliveryNote}</p>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* City FAQs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            {city.nameGenitive} E-İmza — Sıkça Sorulan Sorular
          </h2>
          <Accordion items={cityFaqItems} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">E-İmza Hakkında Daha Fazla Bilgi</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/e-imza"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors"
            >
              E-İmza Satın Al
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            {[
              { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
              { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
              { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
              { label: "Mali Müşavir E-İmza", href: "/blog/mali-musavir-e-imza-rehberi" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {l.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-10 bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
            Diğer Şehirlerde E-İmza
          </h2>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/e-imza/${c.slug}`}
                  className="px-3 py-1.5 rounded-lg border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {c.name} E-İmza
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`${city.name}'da E-İmzanızı Bugün Alın`}
        subtitle={`${city.heroDesc} Hemen başvurun, hızlı teslimat ve aktivasyon desteği.`}
      />
    </>
  )
}
