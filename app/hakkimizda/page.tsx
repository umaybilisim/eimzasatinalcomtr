import type { Metadata } from "next"
import { ShieldCheck, Award, Users, Clock } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, organizationSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Hakkımızda — e-imzasatinal.com",
  description: "TÜBİTAK onaylı e-imza, KEP ve zaman damgası hizmetleri sunuyoruz. Güvenilir, hızlı ve uygun fiyatlı dijital imza çözümleri.",
  alternates: { canonical: `${siteConfig.url}/hakkimizda/` },
}

const stats = [
  { icon: Users, value: "10.000+", label: "Memnun Müşteri" },
  { icon: Award, value: "TÜBİTAK", label: "Onaylı Hizmet" },
  { icon: Clock, value: "Aynı Gün", label: "Aktivasyon" },
  { icon: ShieldCheck, value: "7/24", label: "Teknik Destek" },
]

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Hakkımızda", url: `${siteConfig.url}/hakkimizda/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Hakkımızda" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold max-w-xl">
            Hakkımızda
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-lg">
            e-imzasatinal.com olarak, bireylere ve kurumlara TÜBİTAK onaylı nitelikli elektronik imza, KEP ve zaman damgası hizmetleri sunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-xl border bg-secondary/30">
                <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground">Misyonumuz</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Dijital dönüşüm sürecinde bireylerin ve şirketlerin ihtiyaç duyduğu elektronik kimlik hizmetlerini hızlı, güvenilir ve uygun maliyetle sunmak temel misyonumuzdur. Kâğıt tabanlı süreçlerin yerini alan dijital imzayla hem zaman hem maliyet tasarrufu sağlıyoruz.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8">Sunduğumuz Hizmetler</h2>
            <ul className="text-muted-foreground mt-4 space-y-2">
              <li><strong>Nitelikli Elektronik İmza (E-İmza):</strong> 5070 sayılı kanun kapsamında hukuki geçerliliği olan dijital imza sertifikaları.</li>
              <li><strong>Kayıtlı Elektronik Posta (KEP):</strong> BTK lisanslı, yasal delil niteliğinde e-posta hizmeti.</li>
              <li><strong>Zaman Damgası:</strong> TÜBİTAK BİLGEM TSA onaylı, RFC 3161 uyumlu zaman damgası hizmeti.</li>
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-8">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-muted-foreground mt-4">
              Müşteri memnuniyetini ön planda tutan yaklaşımımız, aynı gün aktivasyon garantimiz ve 7/24 teknik destek hizmetimizle on binlerce müşterimize kesintisiz hizmet veriyoruz. Satış sonrası süreçlerde de yanınızda olduğumuzu unutmayın.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
