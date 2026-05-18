import type { Metadata } from "next"
import { Check } from "lucide-react"
import { PricingTable } from "@/components/site/pricing-table"
import { CtaSection } from "@/components/site/cta-section"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, productSchema, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { getProduct } from "@/lib/products"
import { getFaqByCategory } from "@/lib/faq-data"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Zaman Damgası Satın Al — TÜBİTAK Onaylı",
  description:
    "TÜBİTAK BİLGEM onaylı zaman damgası satın alın. RFC 3161 uyumlu, API destekli. 100, 500 ve 1000 kontörlük paketler. Dijital arşiv ve hukuki belge güvencesi.",
  alternates: { canonical: `${siteConfig.url}/zaman-damgasi/` },
}

const useCaseDetails = [
  { title: "Dijital Arşivleme", desc: "Belgelerinizin belirli bir tarihte var olduğunu ve değiştirilmediğini kalıcı olarak kanıtlayın." },
  { title: "Patent ve Fikri Mülkiyet", desc: "Bir fikrin, tasarımın ya da yazılımın belirli bir anda size ait olduğunu ispatlayın." },
  { title: "Yazılım Geliştirme", desc: "Kaynak kodunuzu, commit'lerinizi ve sürümlerinizi zaman damgasıyla güvence altına alın." },
  { title: "e-Fatura ve e-Arşiv", desc: "Vergi mevzuatının gerektirdiği şekilde elektronik belgelerinizi arşivleyin." },
  { title: "Hukuki Belgeler", desc: "Sözleşme ve belgelerinizin imzalanma zamanını tartışmasız biçimde kanıtlayın." },
  { title: "API Entegrasyonu", desc: "RFC 3161 uyumlu API ile yazılımınıza entegre ederek otomatik damgalama yapın." },
]

export default function ZamanDamgasiPage() {
  const product = getProduct("zaman-damgasi")!
  const faqs = getFaqByCategory("zaman-damgasi")

  return (
    <>
      <JsonLd data={productSchema({ name: product.name, description: product.description, url: `${siteConfig.url}/zaman-damgasi/` })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Zaman Damgası", url: `${siteConfig.url}/zaman-damgasi/` }])} />

      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Zaman Damgası" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold max-w-2xl text-balance">
            Zaman Damgası Satın Al —{" "}
            <span className="text-teal-400">TÜBİTAK Onaylı</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">{product.description}</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">Zaman Damgası Kontör Paketleri</h2>
          <PricingTable packages={product.packages} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Kullanım Alanları</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Zaman damgası, dijital varlığınızı kanıtlamanız gereken her alanda güvence sağlar.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCaseDetails.map((u) => (
              <div key={u.title} className="rounded-xl border bg-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <h3 className="font-bold text-foreground">{u.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API note */}
      <section className="py-12 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">API Entegrasyonu</h2>
          <p className="text-muted-foreground">
            RFC 3161 standardına uygun zaman damgası API'si ile yazılımınıza entegre edin. Toplu damgalama ve otomasyon için kurumsal plan seçenekleri mevcuttur. API dokümantasyonu için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Sıkça Sorulan Sorular</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      <CtaSection title="Zaman Damgası Paketinizi Seçin" subtitle="Kontör paketinizi belirleyin, hemen aktive edelim." />
    </>
  )
}
