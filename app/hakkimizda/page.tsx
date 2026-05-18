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
            Umay Tüm Bilişim e-imzasatinal.com olarak, 15 Yıldır DİA ERP Yazılımı, E-Dönüşüm Portalı satışı, eğitimi ve desteği tecrübesi ile birlikte bireylere ve kurumlara TÜBİTAK onaylı nitelikli elektronik imza, KEP ve zaman damgası hizmetlerini 5 yıldır sunuyoruz.
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

      {/* Ünvan ve Banka Bilgileri */}
      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Ünvan Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Fatura / Ünvan Bilgileri</h2>
            <div className="rounded-xl border bg-white overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { label: "Firma Ünvanı", value: "UMAY TÜM BİLİŞİM VE EĞİTİM DAN.YAZILIM İTH. İHR. SAN. TİC. LTD.ŞTİ." },
                    { label: "Vergi Numarası", value: "892 062 5443" },
                    { label: "Vergi Dairesi", value: "Ali Fuat Cebesoy VD" },
                    { label: "Adres", value: "Erenler Mah. 1193 Nolu Sk. No:4/1-213, Meydan54 AVM B1 Blok K:2 D:84, Erenler 54200 Sakarya / TÜRKİYE" },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <td className="px-5 py-3 font-semibold text-foreground w-40 shrink-0">{row.label}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Banka Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Banka Hesap Bilgileri</h2>
            <div className="space-y-4">
              {[
                { banka: "Akbank", sube: "Sakarya / Adapazarı", iban: "TR20 0004 6000 2788 8000 2875 87" },
                { banka: "Ziraat Bankası", sube: "Sakarya / Adapazarı", iban: "TR87 0001 0019 1396 0934 9250 02" },
                { banka: "TEB Bankası", sube: "Sakarya / Adapazarı", iban: "TR05 0003 2000 0000 0086 0180 73" },
              ].map((h) => (
                <div key={h.banka} className="rounded-xl border bg-white p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                  <div className="font-bold text-foreground w-36 shrink-0">{h.banka}</div>
                  <div className="text-sm text-muted-foreground w-44 shrink-0">{h.sube}</div>
                  <div className="font-mono text-sm font-semibold text-primary tracking-wide">{h.iban}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection />
    </>
  )
}
