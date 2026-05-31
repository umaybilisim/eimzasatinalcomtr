import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Phone } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"
import { cities, getCityBySlug, getZdCityMeta } from "@/lib/city-seo-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return cities.map((city) => ({ sehir: city.slug }))
}

export async function generateMetadata({ params }: { params: { sehir: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.sehir)
  if (!city) return {}
  const meta = getZdCityMeta(city)
  const url = `${siteConfig.url}/zaman-damgasi/${city.slug}/`
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url,
      images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630 }],
    },
  }
}

const zdUseCases = [
  "Sözleşme zaman kanıtı",
  "Yazılım kaynak kodu tescili",
  "Muhasebe belgeleri",
  "Hukuki dosya tarihleme",
  "E-posta arşivleme",
  "İhale teklif belgeleri",
  "Patent ön tescil",
  "Belge bütünlüğü kanıtı",
]

const zdPackages = [
  { name: "Başlangıç", count: "100 Kontör", desc: "Bireysel kullanım ve küçük ofisler için", price: "Teklif alın" },
  { name: "Profesyonel", count: "500 Kontör", desc: "KOBİ ve hukuk büroları için", price: "Teklif alın" },
  { name: "Kurumsal", count: "1.000 Kontör", desc: "Yoğun kullanım ve API entegrasyonu", price: "Teklif alın" },
]

export default function SehirZamanDamgasiPage({ params }: { params: { sehir: string } }) {
  const city = getCityBySlug(params.sehir)
  if (!city) notFound()

  const meta = getZdCityMeta(city)
  const pageUrl = `${siteConfig.url}/zaman-damgasi/${city.slug}/`

  const faqItems = meta.faqs.map((f) => ({
    id: `zd-faq-${city.slug}-${f.question.slice(0, 20)}`,
    question: f.question,
    answer: f.answer,
  }))

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${city.name} Zaman Damgası — TÜBİTAK Onaylı RFC 3161`,
          description: meta.metaDescription,
          url: pageUrl,
        })}
      />
      <JsonLd data={faqSchema(meta.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "Zaman Damgası", url: `${siteConfig.url}/zaman-damgasi/` },
          { name: `${city.name} Zaman Damgası`, url: pageUrl },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Zaman Damgası", href: "/zaman-damgasi" }, { label: `${city.name} Zaman Damgası` }]}
          />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold max-w-3xl text-balance">
            {city.name}{" "}
            <span className="text-blue-400">Zaman Damgası Al</span>{" "}
            — TÜBİTAK Onaylı
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{meta.heroDesc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Kontör Paketi Al
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${city.name} için zaman damgası almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              WhatsApp ile Bilgi Al
            </a>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {city.nameGenitive} Zaman Damgası Kullanım Alanları
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Zaman damgası, bir belgenin belirli bir tarih ve saatte var olduğunu TÜBİTAK güvencesiyle kanıtlar.
                RFC 3161 standardına uygun zaman damgamız; mahkemelerde, kamu kurumlarında ve uluslararası tahkimde
                geçerli hukuki delil niteliği taşır.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {city.nameGenitive} hukuk büroları, muhasebe firmaları, yazılım şirketleri ve kamu kurumları
                belgelerinin zaman bütünlüğünü ispat etmek için zaman damgasını tercih etmektedir.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {zdUseCases.map((u) => (
                <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{u}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">{city.name} Zaman Damgası Paketleri</h2>
            <p className="mt-2 text-muted-foreground">Kontör bazlı esnek paketler. Her belgede 1 kontör harcanır.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {zdPackages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-xl border p-6 flex flex-col gap-4 shadow-sm">
                <div>
                  <p className="font-bold text-foreground text-lg">{pkg.name}</p>
                  <p className="text-2xl font-extrabold text-primary mt-1">{pkg.count}</p>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.desc}</p>
                </div>
                <Link
                  href="/iletisim"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  Teklif Al <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-lg">{city.name} Zaman Damgası İçin Bizi Arayın</p>
            <p className="text-blue-100 text-sm mt-1">API entegrasyon ve teknik destek dahil.</p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            {city.name} Zaman Damgası — Sıkça Sorulan Sorular
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">İlgili Hizmetler</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/zaman-damgasi" className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              Zaman Damgası Nedir? <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href={`/e-imza/${city.slug}`} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              {city.name} E-İmza <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href={`/kep/${city.slug}`} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              {city.name} KEP <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/blog/zaman-damgasi-nedir" className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              Zaman Damgası Blog <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-10 bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
            Diğer Şehirlerde Zaman Damgası
          </h2>
          <div className="flex flex-wrap gap-2">
            {cities.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/zaman-damgasi/${c.slug}`}
                className="px-3 py-1.5 rounded-lg border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {c.name} Zaman Damgası
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`${city.name}'da Zaman Damgasını Bugün Kullanmaya Başlayın`}
        subtitle="TÜBİTAK onaylı, RFC 3161 uyumlu zaman damgası ile belgelerinizi güvence altına alın."
      />
    </>
  )
}
