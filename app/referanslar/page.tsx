import type { Metadata } from "next"
import { CtaSection } from "@/components/site/cta-section"
import { TrustGrid } from "@/components/site/trust-grid"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"
import { pageTitle, ogDefaults } from "@/lib/seo"

const description =
  "eimzasatinal.com.tr kimdir, hangi meslek gruplarına hizmet verir? TÜBİTAK/BTK onaylı ürünler, Sakarya ofisi ve faturalı satış güvencesi."

export const metadata: Metadata = {
  title: pageTitle("Referanslar ve Güvence"),
  description,
  alternates: { canonical: `${siteConfig.url}/referanslar/` },
  openGraph: { ...ogDefaults, title: "Referanslar ve Güvence", description, url: `${siteConfig.url}/referanslar/` },
}

const segments = [
  { title: "Mali müşavir ve muhasebeciler", desc: "Beyanname, SGK ve e-Devlet işlemleri için e-imza; büro çalışanları için toplu kurulum." },
  { title: "Avukatlar ve hukuk büroları", desc: "UYAP işlemleri için e-imza, tebligatlar için KEP adresi." },
  { title: "Yapı denetim firmaları", desc: "YDS ve proje onay süreçleri için denetçi e-imzaları." },
  { title: "Şirketler ve KOBİ'ler", desc: "Tacirler arası ihbarlar ve kamu yazışmaları için KEP, sözleşmeler ve kamu işlemleri için e-imza." },
  { title: "Yazılım ve arşiv ihtiyaçları", desc: "Belgelerin tarihini ispatlamak için zaman damgası kontörü." },
  { title: "Bireysel kullanıcılar", desc: "e-Devlet, banka ve resmî başvurular için kişisel e-imza." },
]

export default function ReferanslarPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Referanslar", url: `${siteConfig.url}/referanslar/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Referanslar" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold">Referanslar ve Güvence</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">
            {siteConfig.entityDescription}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Hangi meslek gruplarına hizmet veriyoruz?</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((s) => (
              <div key={s.title} className="rounded-xl border p-6">
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustGrid heading="Neden bize güvenebilirsiniz?" />

      <CtaSection />
    </>
  )
}
