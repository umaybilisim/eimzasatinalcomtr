import type { Metadata } from "next"
import { Accordion } from "@/components/ui/accordion"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { faqData } from "@/lib/faq-data"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular — E-İmza, KEP, Zaman Damgası",
  description: "E-imza, KEP ve zaman damgası hakkında merak ettikleriniz. Nasıl alınır, kim kullanmalı, fiyatlar nedir, aktivasyon süreci nasıl işler?",
  alternates: { canonical: `${siteConfig.url}/sss/` },
}

const categories = [
  { key: "e-imza", label: "E-İmza" },
  { key: "kep", label: "KEP" },
  { key: "zaman-damgasi", label: "Zaman Damgası" },
  { key: "genel", label: "Genel" },
] as const

export default function SssPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqData)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "SSS", url: `${siteConfig.url}/sss/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Sıkça Sorulan Sorular" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold">Sıkça Sorulan Sorular</h1>
          <p className="mt-3 text-slate-300 max-w-xl">E-imza, KEP ve zaman damgası hakkında merak ettiğiniz her şey.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat) => {
            const items = faqData.filter((f) => f.category === cat.key)
            if (!items.length) return null
            return (
              <div key={cat.key}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{cat.label}</h2>
                <Accordion items={items} />
              </div>
            )
          })}
        </div>
      </section>

      <CtaSection title="Sorunuz Yanıtlanmadı mı?" subtitle="Bize WhatsApp veya telefon ile ulaşın, hemen yanıt verelim." />
    </>
  )
}
