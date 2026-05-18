import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "E-İmza Nedir? Hukuki Geçerliliği ve Kullanım Alanları",
  description: "Elektronik imza (e-imza) nedir, nasıl çalışır, hukuki dayanağı nedir ve kimler kullanabilir? 5070 sayılı kanun çerçevesinde kapsamlı rehber.",
  alternates: { canonical: `${siteConfig.url}/blog/e-imza-nedir/` },
  openGraph: { title: "E-İmza Nedir?", description: "Elektronik imzanın tanımı, hukuki geçerliliği ve kullanım alanları.", url: `${siteConfig.url}/blog/e-imza-nedir/` },
}

const faqs = [
  { question: "E-imza ıslak imzayla aynı mı?", answer: "Hukuki olarak evet. 5070 sayılı Elektronik İmza Kanunu'na göre nitelikli elektronik imza, ıslak imza ile eşdeğer hukuki geçerliliğe sahiptir." },
  { question: "E-imza sahte yapılabilir mi?", answer: "Hayır. E-imza kriptografik algoritmalar kullanan ve sertifika otoritesi tarafından onaylanan bir yöntemdir. Sahte yapılması teknik olarak mümkün değildir." },
]

export default function EImzaNedirPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "E-İmza Nedir?", description: "Elektronik imzanın tanımı ve hukuki dayanağı", url: `${siteConfig.url}/blog/e-imza-nedir/`, datePublished: "2026-01-15" })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "E-İmza Nedir?", url: `${siteConfig.url}/blog/e-imza-nedir/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "E-İmza Nedir?" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">15 Ocak 2026 · 8 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-İmza Nedir? Hukuki Geçerliliği ve Kullanım Alanları</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Elektronik imza (e-imza), dijital belgelerin kimin tarafından imzalandığını, ne zaman imzalandığını ve imza sonrası belge üzerinde değişiklik yapılıp yapılmadığını kriptografik yöntemlerle kanıtlayan bir güvenlik mekanizmasıdır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmzanın Hukuki Dayanağı</h2>
            <p className="text-muted-foreground">Türkiye'de elektronik imzanın hukuki çerçevesi, <strong>5070 sayılı Elektronik İmza Kanunu</strong> ile belirlenmiştir. Bu kanuna göre nitelikli elektronik imza, ıslak (elle atılan) imza ile aynı hukuki geçerliliğe sahiptir. Bu düzenleme, Avrupa Birliği'nin eIDAS tüzüğüyle de uyumludur.</p>
            <p className="text-muted-foreground mt-4">Nitelikli elektronik sertifikalar yalnızca <strong>TÜBİTAK BİLGEM</strong> tarafından onaylanmış sertifika hizmet sağlayıcıları aracılığıyla verilebilir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Nasıl Çalışır?</h2>
            <p className="text-muted-foreground">E-imza, asimetrik şifreleme (açık anahtar altyapısı — PKI) kullanır. Süreç şöyle işler:</p>
            <ol className="text-muted-foreground mt-4 space-y-2 list-decimal list-inside">
              <li>İmzalanacak belge için benzersiz bir özet (hash) oluşturulur.</li>
              <li>Bu özet, size özel <strong>özel anahtar</strong> (USB token üzerindedir) ile şifrelenir.</li>
              <li>Şifreli özet belgeye eklenir — bu işleme elektronik imza denir.</li>
              <li>Doğrulama sırasında alıcı, <strong>açık anahtar</strong>ı kullanarak imzanın geçerliliğini ve belgenin değiştirilmediğini kontrol eder.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Türleri</h2>
            <p className="text-muted-foreground">5070 sayılı kanun iki tür elektronik imzayı tanımlar:</p>
            <ul className="text-muted-foreground mt-4 space-y-3 list-disc list-inside">
              <li><strong>Elektronik İmza:</strong> Geniş kapsamlı bir tanım. Her türlü elektronik veriyi kapsar. Hukuki geçerliliği sınırlıdır.</li>
              <li><strong>Nitelikli Elektronik İmza:</strong> Güvenli elektronik imza oluşturma aracıyla (USB token) üretilen ve nitelikli sertifikaya dayanan imza. Islak imzayla eşdeğer.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile Neler Yapabilirsiniz?</h2>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>e-Devlet üzerinden resmi başvuru ve işlemler</li>
              <li>Vergi beyannameleri (Gelir İdaresi Başkanlığı)</li>
              <li>SGK bildirimleri ve işverenlerin sosyal güvenlik işlemleri</li>
              <li>e-Fatura, e-Arşiv ve e-Deftere geçiş</li>
              <li>UYAP üzerinden hukuki işlemler (avukatlar)</li>
              <li>Banka ve finans işlemleri</li>
              <li>Ticari sözleşmeler ve resmi yazışmalar</li>
              <li>EKAP üzerinden ihale başvuruları</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Kimler İçin Zorunlu?</h2>
            <p className="text-muted-foreground">Bazı meslekler ve işlemler için e-imza kullanımı <strong>yasal zorunluluktur</strong>:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Mali müşavir ve yeminli mali müşavirler (e-beyanname)</li>
              <li>Avukatlar (UYAP sistemi)</li>
              <li>e-Faturaya geçmek zorunda olan mükellefler</li>
              <li>Kamu ihale süreçlerine katılacak firmalar</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile Elektronik Mühür Farkı</h2>
            <p className="text-muted-foreground">E-imza, gerçek kişilere ait bireysel bir sertifikadır. <strong>Elektronik mühür (e-mühür)</strong> ise tüzel kişilere (şirketlere) ait kurumsal bir sertifikadır. Şirketler kendi adlarına belge imzalayacaksa e-mühür kullanır.</p>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-2">Özet: E-İmza Hakkında 5 Temel Bilgi</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Islak imzayla aynı hukuki geçerliliğe sahip</li>
                <li>TÜBİTAK onaylı sertifika gerekir</li>
                <li>USB token (akıllı kart) üzerinde taşınır</li>
                <li>1, 2 veya 3 yıllık paketlerle alınır</li>
                <li>Süre dolunca yenilenebilir, eski imzalar geçerli kalır</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Sıkça Sorulan Sorular</h2>
            {faqs.map((f) => (
              <div key={f.question} className="mb-6">
                <h3 className="font-bold text-foreground mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Related posts */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-xl font-bold text-foreground mb-6">İlgili Makaleler</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
                { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
                { label: "Mali Müşavir E-İmza Rehberi", href: "/blog/mali-musavir-e-imza-rehberi" },
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

      <CtaSection title="E-İmzanızı Hemen Alın" subtitle="Başvurunuzu tamamlayın, aynı gün aktive edelim." />
    </>
  )
}
