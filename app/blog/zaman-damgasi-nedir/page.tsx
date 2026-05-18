import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Zaman Damgası Nedir? TÜBİTAK Onaylı Belge Güvencesi",
  description: "Zaman damgası nedir, nasıl çalışır, hangi amaçlarla kullanılır ve ne kadar maliyetlidir? RFC 3161 uyumlu TÜBİTAK onaylı zaman damgası rehberi.",
  alternates: { canonical: `${siteConfig.url}/blog/zaman-damgasi-nedir/` },
}

export default function ZamanDamgasiNedirPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "Zaman Damgası Nedir?", description: "Zaman damgası rehberi", url: `${siteConfig.url}/blog/zaman-damgasi-nedir/`, datePublished: "2026-02-01" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "Zaman Damgası Nedir?", url: `${siteConfig.url}/blog/zaman-damgasi-nedir/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Zaman Damgası Nedir?" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-200 border border-teal-500/30">Zaman Damgası</span>
            <span className="text-sm text-slate-400">1 Şubat 2026 · 6 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">Zaman Damgası Nedir? TÜBİTAK Onaylı Belge Güvencesi</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Zaman damgası, bir dijital verinin belirli bir zaman anında var olduğunu ve o tarihten bu yana değiştirilmediğini kanıtlayan elektronik kayıttır. TÜBİTAK BİLGEM TSA tarafından sertifikalandırılmış zaman damgaları hukuki geçerlilik taşır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Zaman Damgası Nasıl Çalışır?</h2>
            <p className="text-muted-foreground">Süreç teknik olarak şu şekilde işler:</p>
            <ol className="text-muted-foreground mt-4 space-y-2 list-decimal list-inside">
              <li>Damgalanacak belge için bir özet (hash) değeri hesaplanır</li>
              <li>Bu hash, TSA'ya (Zaman Damgalama Yetkilisi) gönderilir</li>
              <li>TSA, o anki kesin zamanı hash'e ekler ve dijital olarak imzalar</li>
              <li>Bu imzalı yapı (zaman damgası token) belgede saklanır</li>
              <li>Herhangi bir doğrulama aracıyla zaman ve içerik bütünlüğü kontrol edilebilir</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">RFC 3161 Standardı</h2>
            <p className="text-muted-foreground">Zaman damgası hizmetleri <strong>RFC 3161</strong> internet standardına göre çalışır. Bu standart, zaman damgası protokolünü tanımlar ve farklı sistemler arasında uyumluluk sağlar. RFC 3161 uyumlu zaman damgaları uluslararası geçerlilik taşır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Kullanım Alanları</h2>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li><strong>Dijital arşivleme:</strong> Uzun vadeli belge saklama gereksinimleri</li>
              <li><strong>Patent ve fikri mülkiyet:</strong> Bir fikrin belirli tarihte size ait olduğunu kanıtlama</li>
              <li><strong>Yazılım geliştirme:</strong> Kod versiyonlarının zaman kanıtı</li>
              <li><strong>e-Fatura arşivi:</strong> Vergi mevzuatı gereklilikleri</li>
              <li><strong>Hukuki belgeler:</strong> Sözleşmelerin tartışmasız tarihlendirilmesi</li>
              <li><strong>API entegrasyonu:</strong> Otomatik toplu damgalama sistemleri</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Kontör Sistemi ve Fiyatlandırma</h2>
            <p className="text-muted-foreground">Zaman damgası hizmeti kontör (kredi) sistemiyle çalışır. Her damgalama işlemi 1 kontör harcar. Paketler genellikle 100, 500 veya 1000 kontör olarak sunulur. Kontörler 1 yıl süreyle geçerlidir. Toplu kullanım için daha büyük paketler birim başına daha ekonomiktir.</p>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-2">Zaman Damgası Olmadan Ne Risk Var?</h3>
              <p className="text-sm text-muted-foreground">Dijital belgelerin ne zaman oluşturulduğu kolayca tartışma konusu olabilir. Sistem saati manipüle edilebilir, dosya tarihleri değiştirilebilir. TÜBİTAK onaylı zaman damgası, bu tartışmaları ortadan kaldıran bağımsız bir güvencedir.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="flex flex-wrap gap-3">
              {[{ label: "Zaman Damgası Satın Al", href: "/zaman-damgasi" }, { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" }].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="Zaman Damgası Paketinizi Seçin" subtitle="Kontörlerinizi hemen alın, bugün aktive edin." />
    </>
  )
}
