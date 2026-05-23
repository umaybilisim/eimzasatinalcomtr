import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { PricingTable } from "@/components/site/pricing-table"
import { CtaSection } from "@/components/site/cta-section"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, productSchema, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { getProduct } from "@/lib/products"
import { getFaqByCategory } from "@/lib/faq-data"
import { siteConfig } from "@/lib/site-config"
import { cities } from "@/lib/city-seo-data"

export const metadata: Metadata = {
  title: "E-İmza Satın Al — Bireysel ve Kurumsal E-İmza",
  description:
    "TÜBİTAK onaylı nitelikli elektronik imza satın alın. 1, 2 ve 3 yıllık paketler. Mali müşavir, avukat ve KOBİ'lere özel çözümler. Hemen sipariş verin.",
  alternates: { canonical: `${siteConfig.url}/e-imza/` },
  openGraph: {
    title: "E-İmza Satın Al | e-imzasatinal.com",
    description: "TÜBİTAK onaylı e-imza. Hızlı aktivasyon, uygun fiyat.",
    url: `${siteConfig.url}/e-imza/`,
  },
}

const segments = [
  { title: "Mali Müşavir & Muhasebeci", desc: "Vergi beyannameleri, SGK bildirimleri ve e-Devlet işlemleri için zorunlu." },
  { title: "Avukat & Hukuk Bürosu", desc: "Hukuki belgeler, mahkeme evrakları ve UYAP işlemleri için güvenli imzalama." },
  { title: "KOBİ & Şirket Sahibi", desc: "Ticari sözleşmeler, e-fatura ve iş başvuruları için zaman ve maliyet tasarrufu." },
  { title: "Bireysel Kullanıcı", desc: "e-Devlet, SGK, banka ve devlet işlemleri için kişisel e-imza." },
]

const steps = [
  { n: "1", title: "Başvuru Yapın", desc: "İletişim formunu doldurun veya WhatsApp'tan yazın." },
  { n: "2", title: "Kimlik Doğrulama", desc: "e-Devlet veya yüz yüze kimlik doğrulama seçenekleri." },
  { n: "3", title: "Ödeme", desc: "Kredi kartı veya havale ile ödemenizi tamamlayın." },
  { n: "4", title: "USB Token Kargo", desc: "USB token ve kart okuyucu adresinize gönderilir." },
  { n: "5", title: "Aktivasyon", desc: "Yazılım kurulumunda size rehberlik ediyoruz." },
]

export default function EImzaPage() {
  const product = getProduct("e-imza")!
  const faqs = getFaqByCategory("e-imza")

  return (
    <>
      <JsonLd
        data={productSchema({
          name: product.name,
          description: product.description,
          url: `${siteConfig.url}/e-imza/`,
          lowPrice: "2750",
          highPrice: "3750",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "E-İmza", url: `${siteConfig.url}/e-imza/` },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "E-İmza" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold max-w-2xl text-balance">
            E-İmza Satın Al —{" "}
            <span className="text-blue-400">Bireysel ve Kurumsal</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            {product.description}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10 text-foreground">E-İmza Paket Fiyatları</h2>
          <PricingTable packages={product.packages} />
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">E-İmza ile Neler Yapabilirsiniz?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">E-imza, ıslak imzanın yerine geçerek onlarca resmi işlemi dijital ortamda tamamlamanıza olanak tanır.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {product.useCases.map((u) => (
              <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Kimler İçin?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((s) => (
              <div key={s.title} className="rounded-xl border bg-white p-6">
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">E-İmza Nasıl Alınır?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-3 text-sm">
                  {s.n}
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground mt-3 rotate-90 sm:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Sıkça Sorulan Sorular</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Related blogs */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground mb-6">İlgili Makaleler</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
              { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
              { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
              { label: "Mali Müşavir E-İmza Rehberi", href: "/blog/mali-musavir-e-imza-rehberi" },
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

      {/* City landing pages */}
      <section className="py-14 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Şehrinize Özel E-İmza Hizmeti</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Türkiye&apos;nin büyük şehirlerine hızlı kargo ve aynı gün aktivasyon desteği sunuyoruz.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/e-imza/${city.slug}`}
                className="group rounded-xl border bg-white p-4 text-center hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="block font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {city.name}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5">E-İmza</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="E-İmzanızı Bugün Alın" subtitle="Hemen başvurun, aynı gün aktivasyon yapıyoruz." />
    </>
  )
}
