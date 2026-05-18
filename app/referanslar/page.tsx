import type { Metadata } from "next"
import { Star } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Referanslar ve Müşteri Yorumları",
  description: "Binlerce memnun müşterimizin e-imza, KEP ve zaman damgası hakkındaki yorumları.",
  alternates: { canonical: `${siteConfig.url}/referanslar/` },
}

const testimonials = [
  { name: "Ahmet Yılmaz", role: "Mali Müşavir", city: "İstanbul", text: "3 yıldır e-imzamı bu hizmetten alıyorum. Hızlı aktivasyon ve sorunsuz teknik destek için teşekkürler.", rating: 5 },
  { name: "Fatma Kaya", role: "Avukat", city: "Ankara", text: "KEP adresimi de buradan aldım. İşlem çok hızlı oldu ve her soruma anında yanıt verdiler.", rating: 5 },
  { name: "Mehmet Demir", role: "KOBİ Sahibi", city: "İzmir", text: "Kurumsal e-imza için birden fazla personelimize aldık. Fiyat performans açısından çok memnunuz.", rating: 5 },
  { name: "Elif Şahin", role: "Serbest Muhasebeci", city: "Bursa", text: "E-imza yenileme işlemimi de buradan yaptım. Hem eski imzamı hem yenisini aynı anda hallettim.", rating: 5 },
  { name: "Ali Çelik", role: "Yazılım Geliştirici", city: "İzmir", text: "Zaman damgası API'si için mükemmel. RFC 3161 uyumlu entegrasyon çok kolay oldu.", rating: 5 },
  { name: "Zeynep Arslan", role: "Eczacı", city: "Konya", text: "E-devlet işlemleri için e-imza aldım. Telefon desteği çok yardımcı oldu, kurulum sorunsuz.", rating: 5 },
  { name: "Hasan Öztürk", role: "İnşaat Müteahhidi", city: "Antalya", text: "Firma adına toplu e-imza aldık. Kurumsal süreç çok düzenli yönetildi.", rating: 5 },
  { name: "Selin Yıldız", role: "Finans Uzmanı", city: "İstanbul", text: "KEP ile artık iadeli taahhütlü posta kullanmıyorum. Hem hızlı hem daha güvenli.", rating: 5 },
  { name: "Emre Kılıç", role: "Mimar", city: "Ankara", text: "Proje dosyalarım için zaman damgası aldım. Patent ve fikri mülkiyet güvencesi açısından paha biçilmez.", rating: 5 },
]

export default function ReferanslarPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Referanslar", url: `${siteConfig.url}/referanslar/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Referanslar" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold">Müşteri Yorumları</h1>
          <p className="mt-3 text-slate-300">Binlerce memnun müşterimizden bazı yorumlar.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl border p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} — {t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
