import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertCircle } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "E-İmza Yenileme — Süresi Dolanlar İçin Adım Adım Rehber",
  description: "E-imza sertifikasının süresi dolmadan veya dolduktan sonra nasıl yenilenir? Yenileme süreci, ne zaman başvurulmalı ve dikkat edilmesi gerekenler.",
  alternates: { canonical: `${siteConfig.url}/blog/e-imza-yenileme/` },
}

export default function EImzaYenilemePage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "E-İmza Yenileme Rehberi", description: "E-imza yenileme süreci", url: `${siteConfig.url}/blog/e-imza-yenileme/`, datePublished: "2026-02-15" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "E-İmza Yenileme", url: `${siteConfig.url}/blog/e-imza-yenileme/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "E-İmza Yenileme" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">15 Şubat 2026 · 7 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-İmza Yenileme — Süresi Dolanlar İçin Adım Adım Rehber</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">E-imza sertifikaları belirli bir süre sonunda geçerliliğini yitirir. Süresi dolan e-imzayla yeni işlem yapamazsınız, ancak endişelenmeyin — yenileme süreci düşündüğünüzden çok daha kolay.</p>

            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800"><strong>Önemli:</strong> Süresi dolan e-imzayla daha önce attığınız imzalar geçerliliğini korur. Yalnızca yeni imza atamazsınız.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Ne Zaman Yenileme Yapmalıyım?</h2>
            <p className="text-muted-foreground">E-imzanız sona ermeden <strong>en az 30-60 gün önce</strong> yenileme başvurusu yapmanızı öneririz. Bu sayede süreç tamamlanana kadar mevcut imzanızı kullanmaya devam edebilirsiniz.</p>
            <p className="text-muted-foreground mt-4">Süreniz dolmuşsa da başvuru yapabilirsiniz. Yeni sertifikanız genellikle 1-3 iş günü içinde aktive edilir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Süresi Dolduktan Sonra Ne Olur?</h2>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Yeni belge imzalayamazsınız</li>
              <li>e-Devlet işlemlerini e-imzayla yapamazsınız</li>
              <li>GİB e-beyanname sistemi erişimi kesilir</li>
              <li>Daha önce attığınız imzalar geçerliliğini korur</li>
              <li>USB token cihazınız çoğunlukla yeniden kullanılabilir</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Yenileme Adımları</h2>
            <div className="space-y-5 mt-4">
              {[
                { n: "1", t: "Başvuru Yapın", d: "İletişim formunu doldurun veya WhatsApp'tan yazın. Eski e-imzanızın bilgilerini (sertifika sağlayıcı, paket türü) paylaşın." },
                { n: "2", t: "Kimlik Doğrulama", d: "Aynı yöntemlerle (e-Devlet veya yüz yüze) kimlik doğrulaması yapılır. Mevcut sertifikanız varsa süreç daha hızlı tamamlanabilir." },
                { n: "3", t: "USB Token Durumu", d: "Eski USB token'ınız çoğunlukla yeniden kullanılabilir. Yeni sertifika aynı token'a yüklenir. Cihaz değişikliği gerekirse bildirilir." },
                { n: "4", t: "Sertifika Yükleme", d: "Yeni sertifika USB token'ınıza yüklenir. Bu işlem için teknik destek ekibimiz size rehberlik eder." },
                { n: "5", t: "Test ve Aktivasyon", d: "Yeni e-imzanız test edilerek imzalama işlemi doğrulanır. GİB ve diğer sistemlere bağlantı kontrol edilir." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shrink-0">{s.n}</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{s.t}</h3>
                    <p className="text-muted-foreground text-sm">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2 veya 3 Yıllık Paket Alarak Yenileme Sıklığını Azaltın</h2>
            <p className="text-muted-foreground">Her yıl yenileme süreciyle uğraşmamak için 2 veya 3 yıllık paketleri tercih edin. Hem daha uzun süre kesintisiz hizmet alırsınız hem de yıllık başvuru maliyetlerinden tasarruf edersiniz.</p>
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="flex flex-wrap gap-3">
              {[{ label: "Yenileme Başvurusu Yap", href: "/iletisim" }, { label: "E-İmza Paketleri", href: "/e-imza" }].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="E-İmzanızı Yenileyin" subtitle="Kesintisiz hizmet için bugün başvurun." />
    </>
  )
}
