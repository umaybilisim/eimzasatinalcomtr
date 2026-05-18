import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Mali Müşavir ve Muhasebeciler İçin E-İmza Rehberi 2026",
  description: "Mali müşavir, SMMM ve YMM'ler için e-imza zorunlulukları, kullanım alanları, başvuru süreci ve hangi e-imzayı seçmeleri gerektiğine dair rehber.",
  alternates: { canonical: `${siteConfig.url}/blog/mali-musavir-e-imza-rehberi/` },
}

const useCases = [
  "e-Beyanname (Gelir İdaresi Başkanlığı)",
  "e-SGK bildirimleri",
  "e-Mutabakat",
  "e-Fatura ve e-Arşiv mükellefiyet bildirimleri",
  "e-Defter kullanımı",
  "KDV iade talepleri",
  "Ba/Bs formları",
  "İşyeri kurulumu ve tescili",
]

export default function MaliMusavirEImzaPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "Mali Müşavir E-İmza Rehberi", description: "SMMM ve YMM için e-imza rehberi", url: `${siteConfig.url}/blog/mali-musavir-e-imza-rehberi/`, datePublished: "2026-02-10" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "Mali Müşavir E-İmza Rehberi", url: `${siteConfig.url}/blog/mali-musavir-e-imza-rehberi/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Mali Müşavir E-İmza Rehberi" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">10 Şubat 2026 · 9 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">Mali Müşavir ve Muhasebeciler İçin E-İmza Rehberi 2026</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Mali müşavir, SMMM (Serbest Muhasebeci Mali Müşavir) ve YMM (Yeminli Mali Müşavir) meslek mensupları için e-imza artık bir tercih değil, mesleki zorunluluktur. Bu rehberde tüm detayları ele aldık.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Mali Müşavirlere E-İmza Zorunlu mu?</h2>
            <p className="text-muted-foreground"><strong>Evet.</strong> Gelir İdaresi Başkanlığı (GİB) sistemleri, e-beyanname ve pek çok resmi bildirim için e-imza zorunluluğu getirmiştir. E-imzasız bu işlemleri online olarak yapamazsınız.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile Yapabileceğiniz İşlemler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {useCases.map((u) => (
                <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {u}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">SMMM için Hangi E-İmzayı Seçmeli?</h2>
            <p className="text-muted-foreground">Mali müşavirler için standart nitelikli elektronik imza (bireysel e-imza) yeterlidir. Büro adına toplu işlem yapılacaksa e-mühür de değerlendirilebilir. Paket seçiminde dikkat edilecekler:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li><strong>2 veya 3 yıllık paket alın:</strong> Yıllık yenileme zahmetinden kurtulursunuz</li>
              <li><strong>Aktivasyon desteğini kontrol edin:</strong> GİB entegrasyonu için rehberlik şart</li>
              <li><strong>USB token kalitesine dikkat edin:</strong> Yoğun günlük kullanım için dayanıklı token</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile GİB Sistemine Bağlanma</h2>
            <p className="text-muted-foreground">GİB e-beyanname sistemine e-imzayla bağlanmak için USB token'ınızı bilgisayara takın, tarayıcı eklentisini yükleyin ve GİB portala giriş yapın. Sisteme ilk bağlantıda PIN kodunuzu belirlemeniz gerekecek. Teknik destek ekibimiz bu süreçte yardımcı olmaktadır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Birden Fazla Müşaviriniz mi Var?</h2>
            <p className="text-muted-foreground">Kurumsal müşterilerimize büro personelinin tamamı için toplu e-imza alma imkânı sunuyoruz. Toplu başvurularda indirimli fiyat uygulaması mevcuttur. Detaylı bilgi için WhatsApp veya telefon ile iletişime geçin.</p>
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="flex flex-wrap gap-3">
              {[{ label: "E-İmza Satın Al", href: "/e-imza" }, { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" }, { label: "İletişim", href: "/iletisim" }].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="Mali Müşavirler İçin Özel Teklif" subtitle="Toplu başvuru ve kurumsal paketler için bizi arayın." />
    </>
  )
}
