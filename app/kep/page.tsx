import type { Metadata } from "next"
import { Check, X } from "lucide-react"
import { PricingTable } from "@/components/site/pricing-table"
import { CtaSection } from "@/components/site/cta-section"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, productSchema, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { getProduct } from "@/lib/products"
import { getFaqByCategory } from "@/lib/faq-data"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "KEP Adresi Al — Kayıtlı Elektronik Posta",
  description:
    "BTK yetkili KEP adresi satın alın. Yasal delil niteliğinde e-posta. Sermaye şirketleri için zorunlu KEP. Hızlı aktivasyon, uygun fiyat.",
  alternates: { canonical: `${siteConfig.url}/kep/` },
  openGraph: {
    title: "KEP Adresi Al | e-imzasatinal.com",
    description: "BTK yetkili KEP hizmeti. Yasal tebligat ve resmi yazışmalar için.",
    url: `${siteConfig.url}/kep/`,
  },
}

const comparison = [
  { feature: "Hukuki geçerlilik", normal: false, kep: true },
  { feature: "Gönderim zamanı kaydı", normal: false, kep: true },
  { feature: "Teslim bildirimi", normal: false, kep: true },
  { feature: "Okundu bilgisi", normal: false, kep: true },
  { feature: "İçerik bütünlüğü kanıtı", normal: false, kep: true },
  { feature: "Yasal tebligat yerine geçer", normal: false, kep: true },
  { feature: "Mahkemede delil", normal: false, kep: true },
]

const mandatory = [
  "Anonim şirketler (A.Ş.)",
  "Limited şirketler (Ltd. Şti.)",
  "Kooperatifler",
  "KAP'a bildirim yükümlüsü şirketler",
  "Bankalar ve sigorta şirketleri",
  "BTK lisanslı elektronik haberleşme şirketleri",
]

export default function KepPage() {
  const product = getProduct("kep")!
  const faqs = getFaqByCategory("kep")

  return (
    <>
      <JsonLd data={productSchema({ name: product.name, description: product.description, url: `${siteConfig.url}/kep/` })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "KEP", url: `${siteConfig.url}/kep/` }])} />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "KEP" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold max-w-2xl text-balance">
            KEP Adresi Al —{" "}
            <span className="text-indigo-400">Kayıtlı Elektronik Posta</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">{product.description}</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">KEP Paket Fiyatları</h2>
          <PricingTable packages={product.packages} />
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Normal E-posta vs KEP</h2>
          <p className="text-muted-foreground mb-8">KEP, normal e-postanın sahip olmadığı hukuki güvenceyi sağlar.</p>
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted px-4 py-3 text-sm font-semibold text-foreground">
              <span>Özellik</span>
              <span className="text-center">Normal E-posta</span>
              <span className="text-center text-primary">KEP</span>
            </div>
            {comparison.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 px-4 py-3 border-t text-sm">
                <span className="text-foreground">{row.feature}</span>
                <span className="flex justify-center">
                  {row.normal ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <X className="h-4 w-4 text-red-400" />
                  )}
                </span>
                <span className="flex justify-center">
                  {row.kep ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <X className="h-4 w-4 text-red-400" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">KEP Kimler İçin Zorunlu?</h2>
          <p className="text-muted-foreground mb-6">Türk Ticaret Kanunu ve ilgili mevzuata göre aşağıdaki kurumların KEP adresi edinmesi zorunludur:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mandatory.map((m) => (
              <div key={m} className="flex items-center gap-2 p-3 rounded-lg bg-white border">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Sıkça Sorulan Sorular</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      <CtaSection title="KEP Adresinizi Hemen Alın" subtitle="Yasal yükümlülüğünüzü yerine getirin. Aynı gün aktivasyon." />
    </>
  )
}
