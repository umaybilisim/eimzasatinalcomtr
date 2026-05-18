import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "KEP Nedir, Ne İşe Yarar? Kayıtlı Elektronik Posta Rehberi",
  description: "Kayıtlı Elektronik Posta (KEP) nedir, normal e-postadan farkı nedir, kimlere zorunlu ve nasıl kullanılır? Kapsamlı KEP rehberi.",
  alternates: { canonical: `${siteConfig.url}/blog/kep-nedir-ne-ise-yarar/` },
}

const faqs = [
  { question: "KEP mesajı ne kadar süre saklanır?", answer: "KEP mesajları KEP hizmet sağlayıcısının sunucularında en az 3 yıl saklanır. Kullanıcılar kendi yedeklerini de alabilir." },
  { question: "KEP adresi başka bir e-posta uygulamasından kullanılabilir mi?", answer: "Evet. IMAP/SMTP protokolünü destekleyen e-posta istemcileri (Outlook, Thunderbird vb.) ile KEP hesabınıza erişebilirsiniz." },
]

export default function KepNedirPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "KEP Nedir?", description: "Kayıtlı Elektronik Posta rehberi", url: `${siteConfig.url}/blog/kep-nedir-ne-ise-yarar/`, datePublished: "2026-01-25" })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "KEP Nedir?", url: `${siteConfig.url}/blog/kep-nedir-ne-ise-yarar/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "KEP Nedir?" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-500/30">KEP</span>
            <span className="text-sm text-slate-400">25 Ocak 2026 · 7 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">KEP Nedir, Ne İşe Yarar? Kayıtlı Elektronik Posta Rehberi</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Kayıtlı Elektronik Posta (KEP), gönderilen e-posta mesajlarının içeriğini, gönderim ve alım zamanını yasal delil niteliğinde kayıt altına alan güvenli e-posta sistemidir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP'in Hukuki Dayanağı</h2>
            <p className="text-muted-foreground">KEP, Türkiye'de <strong>6102 sayılı Türk Ticaret Kanunu</strong> ve <strong>6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun</strong> kapsamında düzenlenmiştir. BTK (Bilgi Teknolojileri ve İletişim Kurumu) tarafından yetkilendirilen KEP hizmet sağlayıcıları aracılığıyla sunulur. KEP ile gönderilen mesajlar iadeli taahhütlü posta ile eşdeğer hukuki güce sahiptir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Normal E-posta ile KEP Arasındaki Fark</h2>
            <p className="text-muted-foreground">Normal e-posta sistemlerinde gönderici, alıcı, gönderim zamanı ve içerik kolaylıkla değiştirilebilir ya da inkâr edilebilir. KEP'te ise:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Gönderim zamanı kesin olarak kaydedilir ve değiştirilemez</li>
              <li>Alım zamanı ve teslim durumu belgelenir</li>
              <li>Mesajın içeriği bütünlüğü korunur</li>
              <li>Gönderici kimliği doğrulanmış olarak kayıt altına alınır</li>
              <li>Tüm bu bilgiler mahkemede yasal delil olarak sunulabilir</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP Kimler İçin Zorunlu?</h2>
            <p className="text-muted-foreground">Türk Ticaret Kanunu gereğince aşağıdaki kurumların KEP adresi edinmesi zorunludur:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Anonim şirketler (A.Ş.)</li>
              <li>Limited şirketler (Ltd. Şti.)</li>
              <li>Kooperatifler</li>
              <li>KAP (Kamuyu Aydınlatma Platformu) bildirim yükümlüsü şirketler</li>
              <li>Bankalar ve sigorta şirketleri</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP Kullanım Alanları</h2>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Resmi yazışmalar ve bildirimler</li>
              <li>İhtar, ihbar ve tebligat gönderimi</li>
              <li>Sözleşme bildirimleri</li>
              <li>Banka ve sigorta işlemleri</li>
              <li>KAP bildirimleri</li>
              <li>Kamu kurum yazışmaları</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Sıkça Sorulan Sorular</h2>
            {faqs.map((f) => (
              <div key={f.question} className="mb-6">
                <h3 className="font-bold text-foreground mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="flex flex-wrap gap-3">
              {[{ label: "KEP Satın Al", href: "/kep" }, { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" }].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="KEP Adresinizi Alın" subtitle="Yasal yükümlülüğünüzü yerine getirin, hızlı aktivasyon." />
    </>
  )
}
