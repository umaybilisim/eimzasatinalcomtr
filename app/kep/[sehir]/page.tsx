import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Phone, Mail } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"
import { cities, getCityBySlug, getKepCityMeta } from "@/lib/city-seo-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return cities.map((city) => ({ sehir: city.slug }))
}

export async function generateMetadata({ params }: { params: { sehir: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.sehir)
  if (!city) return {}
  const meta = getKepCityMeta(city)
  const url = `${siteConfig.url}/kep/${city.slug}/`
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

const kepFeatures = [
  "Gönderim zamanı yasal delil",
  "Teslim bildirimi kaydı",
  "İçerik bütünlüğü garantisi",
  "Mahkemede geçerli kanıt",
  "Sermaye şirketleri zorunluluğu",
  "Resmi yazışma güvencesi",
  "Okundu bilgisi kaydı",
  "7/24 erişim",
]

export default function SehirKepPage({ params }: { params: { sehir: string } }) {
  const city = getCityBySlug(params.sehir)
  if (!city) notFound()

  const meta = getKepCityMeta(city)
  const pageUrl = `${siteConfig.url}/kep/${city.slug}/`

  const faqItems = meta.faqs.map((f) => ({
    id: `kep-faq-${city.slug}-${f.question.slice(0, 20)}`,
    question: f.question,
    answer: f.answer,
  }))

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${city.name} KEP Adresi — Kayıtlı Elektronik Posta`,
          description: meta.metaDescription,
          url: pageUrl,
        })}
      />
      <JsonLd data={faqSchema(meta.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "KEP", url: `${siteConfig.url}/kep/` },
          { name: `${city.name} KEP`, url: pageUrl },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "KEP", href: "/kep" }, { label: `${city.name} KEP` }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold max-w-3xl text-balance">
            {city.name}{" "}
            <span className="text-blue-400">KEP Adresi Al</span>{" "}
            — Kayıtlı Elektronik Posta
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{meta.heroDesc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              KEP Başvurusu Yap
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${city.name} için KEP adresi almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              WhatsApp ile Bilgi Al
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {city.nameGenitive} KEP Zorunluluğu ve Avantajları
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Türk Ticaret Kanunu uyarınca tüm sermaye şirketleri KEP (Kayıtlı Elektronik Posta) adresi edinmekle yükümlüdür.{" "}
                {city.nameGenitive} faaliyet gösteren limited ve anonim şirketler bu zorunluluğa uymak için hemen başvurabilir.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                KEP ile gönderilen her e-posta yasal delil niteliği taşır: gönderim zamanı, alıcı adresi, içerik bütünlüğü ve okundu bilgisi kriptografik olarak kaydedilir. Normal e-postanın sağlayamadığı bu güvenceyi {city.nameGenitive} tüm kurumsal yazışmalarınıza uygulayın.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {kepFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-lg">{city.name} KEP Başvurusu İçin Bize Ulaşın</p>
              <p className="text-blue-100 text-sm mt-1">Hızlı aktivasyon, uygun fiyat garantisi.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 border border-white text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4" />
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            {city.name} KEP — Sıkça Sorulan Sorular
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">İlgili Hizmetler</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/kep" className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              KEP Nedir? <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href={`/e-imza/${city.slug}`} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              {city.name} E-İmza <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href={`/zaman-damgasi/${city.slug}`} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              {city.name} Zaman Damgası <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/blog/kep-nedir-ne-ise-yarar" className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
              KEP Hakkında Blog <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-10 bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
            Diğer Şehirlerde KEP
          </h2>
          <div className="flex flex-wrap gap-2">
            {cities.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/kep/${c.slug}`}
                className="px-3 py-1.5 rounded-lg border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {c.name} KEP
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`${city.name}'da KEP Adresinizi Bugün Alın`}
        subtitle="Yasal zorunluluğu yerine getirin, resmi yazışmalarınızı güvence altına alın."
      />
    </>
  )
}
