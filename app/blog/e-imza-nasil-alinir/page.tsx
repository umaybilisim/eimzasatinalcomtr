import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "E-İmza Nasıl Alınır? Adım Adım Başvuru Rehberi 2026",
  description: "E-imza başvurusu nasıl yapılır? Gerekli belgeler, e-Devlet üzerinden başvuru, aktivasyon ve kurulum adımlarını anlatan eksiksiz rehber.",
  alternates: { canonical: `${siteConfig.url}/blog/e-imza-nasil-alinir/` },
}

const steps = [
  { title: "Paket Seçin", desc: "1, 2 veya 3 yıllık paketler arasından ihtiyacınıza uygun olanı seçin. Uzun vadeli paketler daha avantajlı fiyat sunar." },
  { title: "Başvuru Formunu Doldurun", desc: "Ad, soyad, TC kimlik numarası, e-posta ve telefon bilgilerinizi girin. Kurumsal başvurularda vergi numarası da gerekir." },
  { title: "Kimlik Doğrulama", desc: "e-Devlet üzerinden (en hızlı) veya yüz yüze kimlik doğrulama yöntemlerinden birini seçin." },
  { title: "Ödeme Yapın", desc: "Kredi kartı veya banka havalesi ile güvenli ödemenizi tamamlayın. Kurumsal müşteriler için faturalı ödeme mevcuttur." },
  { title: "USB Token Kargo", desc: "Kimlik doğrulama onaylandıktan sonra USB token ve kart okuyucu cihazı adresinize kargo ile gönderilir." },
  { title: "Kurulum ve Aktivasyon", desc: "Yazılım kurulumunda teknik destek ekibimiz size adım adım rehberlik eder. Genellikle 15-20 dakika sürer." },
]

const docs = [
  "TC Kimlik Numarası (yabancı uyruklular için pasaport)",
  "E-posta adresi",
  "Cep telefonu numarası",
  "Adres bilgisi (kargo için)",
  "Kurumsal başvurularda: vergi numarası, şirket unvanı",
]

export default function EImzaNasilAlinirPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "E-İmza Nasıl Alınır?", description: "E-imza başvuru rehberi", url: `${siteConfig.url}/blog/e-imza-nasil-alinir/`, datePublished: "2026-01-20" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "E-İmza Nasıl Alınır?", url: `${siteConfig.url}/blog/e-imza-nasil-alinir/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "E-İmza Nasıl Alınır?" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">20 Ocak 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-İmza Nasıl Alınır? Adım Adım Başvuru Rehberi</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">E-imza almak, sandığınızdan çok daha kolay. Doğru adımları takip ettiğinizde tüm süreç birkaç iş günü içinde tamamlanıyor. Bu rehberde başvurudan aktivasyona kadar her şeyi anlattık.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Gerekli Belgeler</h2>
            <ul className="space-y-2">
              {docs.map((d) => (
                <li key={d} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">E-İmza Alma Adımları</h2>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">e-Devlet Üzerinden Kimlik Doğrulama</h2>
            <p className="text-muted-foreground">En hızlı ve kolay yöntem e-Devlet üzerinden kimlik doğrulamadır. e-Devlet şifrenizle giriş yaparak başvuruyu tamamlayabilirsiniz. Bu yöntemde ek belge göndermenize gerek yoktur.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Teslimat Süresi</h2>
            <p className="text-muted-foreground">Kimlik doğrulaması onaylandıktan sonra USB token kargo ile gönderilir. Kargo süresi genellikle 1-3 iş günüdür. Aktivasyon ise kargo elinize ulaştığında teknik destek ekibimizin rehberliğiyle yapılır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Kurulumu</h2>
            <p className="text-muted-foreground">USB token'ı bilgisayarınıza taktıktan sonra sertifika hizmet sağlayıcısının yazılımını yüklemeniz gerekir. Windows ve macOS için farklı yazılım sürümleri mevcuttur. Kurulum sırasında takıldığınızda teknik destek hattımızı arayabilirsiniz.</p>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-2">💡 İpucu</h3>
              <p className="text-sm text-muted-foreground">2 veya 3 yıllık paket almak, yıllık yenileme işlemiyle uğraşmaktan kurtarır ve genellikle daha avantajlı bir fiyat sunar.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t">
            <h2 className="text-xl font-bold text-foreground mb-6">İlgili Makaleler</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
                { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
                { label: "E-İmza Satın Al", href: "/e-imza" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="Hemen Başvurun" subtitle="Formu doldurun, aynı gün aktivasyon yapalım." />
    </>
  )
}
