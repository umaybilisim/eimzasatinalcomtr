import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, X, AlertCircle, Zap, Phone, Calendar } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "E-Fatura İçin E-İmza Gerekli mi? 2026 Zorunluluğu ve Başvuru",
  description: "E-faturaya geçiş için e-imza mı mali mühür mü gerekli? 2026 e-fatura zorunluluğu, ciro limitleri, şahıs işletmesi ve şirket farkı, geçiş adımları ve ceza riskleri.",
  alternates: { canonical: `${siteConfig.url}/blog/e-fatura-icin-e-imza-gerekli-mi/` },
  openGraph: {
    title: "E-Fatura İçin E-İmza Gerekli mi? 2026 Zorunluluğu",
    description: "E-faturaya geçiş için e-imza mı mali mühür mü gerekli? Şahıs işletmesi ve şirketler için 2026 zorunluluk rehberi.",
    url: `${siteConfig.url}/blog/e-fatura-icin-e-imza-gerekli-mi/`,
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630 }],
  },
}

const faqs = [
  { question: "E-fatura için e-imza mı mali mühür mü gerekli?", answer: "Tüzel kişiler (A.Ş., Ltd. Şti. gibi şirketler) için mali mühür zorunludur. Gerçek kişi/şahıs işletmeleri ise e-fatura işlemlerinde nitelikli elektronik imza (e-imza) kullanabilir. Yani şahıs işletmesiyseniz e-fatura için e-imza almanız yeterlidir." },
  { question: "2026 yılında kimler e-faturaya geçmek zorunda?", answer: "2025 hesap döneminde brüt satış hasılatı 3 milyon TL ve üzeri olan mükellefler 1 Temmuz 2026'ya kadar e-faturaya geçmek zorundadır. e-Ticaret, gayrimenkul ve motorlu araç ticareti yapan firmalarda bu sınır 500.000 TL'dir." },
  { question: "E-faturaya geçmezsem ceza var mı?", answer: "Evet. E-fatura zorunluluğu kapsamında olup zamanında geçiş yapmayan mükellefler, her belge için 17.000 TL'den başlayan özel usulsüzlük cezasıyla karşılaşabilir. Bu nedenle son tarihi beklemeden e-imza veya mali mühür temin etmek önemlidir." },
  { question: "Şahıs işletmesi e-fatura için nasıl e-imza alır?", answer: "Sitemizden online başvuru yapın, e-Devlet üzerinden kimlik doğrulamanızı tamamlayın. TÜBİTAK onaylı USB token adresinize kargo ile ulaşır. Aktivasyon sonrası e-imzanızı GİB e-fatura portalında kullanmaya başlayabilirsiniz. Tüm süreç genellikle 1-3 iş günü sürer." },
  { question: "E-imza ile hem e-fatura hem başka işlemler yapabilir miyim?", answer: "Evet. E-fatura için aldığınız e-imza aynı zamanda e-beyanname, e-Devlet işlemleri, SGK bildirimleri, ticari sözleşme imzalama ve KEP ile belge gönderme gibi tüm resmi işlemlerde kullanılabilir. Tek bir e-imza birçok ihtiyacı karşılar." },
]

export default function EFaturaIcinEImzaPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "E-Fatura İçin E-İmza Gerekli mi?", description: "2026 e-fatura zorunluluğu ve e-imza rehberi", url: `${siteConfig.url}/blog/e-fatura-icin-e-imza-gerekli-mi/`, datePublished: "2026-07-05" })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "E-Fatura İçin E-İmza Gerekli mi?", url: `${siteConfig.url}/blog/e-fatura-icin-e-imza-gerekli-mi/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "E-Fatura İçin E-İmza Gerekli mi?" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">5 Temmuz 2026 · 9 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-Fatura İçin E-İmza Gerekli mi? 2026 Zorunluluğu ve Başvuru</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">E-faturaya geçiş süreci hız kazandı ve pek çok işletme sahibi aynı soruyu soruyor: "E-fatura kesmek için e-imza mı almam gerekiyor?" Kısa cevap: <strong>şahıs işletmeleri için evet, e-imza yeterli.</strong> Bu rehberde 2026 e-fatura zorunluluğunu, kimlerin geçmek zorunda olduğunu ve e-imza ile mali mühür arasındaki farkı net biçimde açıklıyoruz.</p>

            {/* Aciliyet uyarısı */}
            <div className="my-8 flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 not-prose">
              <Calendar className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Son Tarih: 1 Temmuz 2026</p>
                <p className="text-amber-700 text-sm">2025 hesap döneminde brüt satış hasılatı 3 milyon TL ve üzeri olan mükelleflerin 1 Temmuz 2026 tarihine kadar e-fatura uygulamasına geçmesi zorunludur. Geçiş için gereken e-imza veya mali mührü son güne bırakmayın — temin süreci birkaç iş günü sürebilir.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-Fatura İçin E-İmza mı, Mali Mühür mü Gerekli?</h2>
            <p className="text-muted-foreground">Bu, en çok karıştırılan konudur. E-fatura sistemine belge gönderirken kimliğinizi doğrulamak ve belgeyi imzalamak için elektronik bir sertifikaya ihtiyaç vardır. Hangi sertifikayı kullanacağınız <strong>işletme türünüze</strong> bağlıdır:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                <h3 className="font-bold text-foreground mb-3">Şahıs İşletmesi (Gerçek Kişi)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /><strong>E-imza kullanır</strong></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Nitelikli elektronik imza yeterli</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />USB token ile taşınır</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Aynı e-imza e-beyanname, e-Devlet'te de geçerli</li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-foreground mb-3">Tüzel Kişi (A.Ş., Ltd. Şti.)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" /><strong>Mali mühür kullanır</strong></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />GİB tarafından şirket adına düzenlenir</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Kurumsal belge imzalamada kullanılır</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Yetkililer ayrıca bireysel e-imza da alabilir</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">Özetle: <strong>Şahıs işletmesiyseniz e-fatura için e-imza almanız yeterlidir.</strong> Şirketseniz mali mühür gereklidir; ancak şirket yetkilileri e-beyanname ve diğer işlemler için bireysel e-imzaya da ihtiyaç duyar.</p>

            {/* Güçlü CTA */}
            <div className="my-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 text-white not-prose shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-yellow-300" />
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-200">E-Faturaya geçiş için hazırsınız</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Şahıs işletmeniz için e-imzanızı bugün alın</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-2xl">
                TÜBİTAK onaylı nitelikli elektronik imza ile e-faturaya sorunsuz geçin. Hızlı aktivasyon, aynı gün teslimat ve ücretsiz kurulum desteği. Son tarihi beklemeyin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/e-imza" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  E-İmza Paketlerini İncele
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Merhaba, e-fatura için e-imza almak istiyorum.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                  <Phone className="h-4 w-4" />
                  WhatsApp ile Hemen Al
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2026'da Kimler E-Faturaya Geçmek Zorunda?</h2>
            <p className="text-muted-foreground">Gelir İdaresi Başkanlığı (GİB), e-fatura zorunluluğunu ciro (brüt satış hasılatı) eşiğine ve sektöre göre belirler. 2026 için geçerli başlıca kriterler:</p>
            <div className="mt-4 overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold border">Mükellef Grubu</th>
                    <th className="p-3 text-left font-semibold border">Ciro Eşiği</th>
                    <th className="p-3 text-left font-semibold border">Son Geçiş</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Genel mükellefler", "3.000.000 TL ve üzeri", "1 Temmuz 2026"],
                    ["e-Ticaret firmaları", "500.000 TL ve üzeri", "1 Temmuz 2026"],
                    ["Gayrimenkul alım-satım", "500.000 TL ve üzeri", "1 Temmuz 2026"],
                    ["Motorlu araç ticareti", "500.000 TL ve üzeri", "1 Temmuz 2026"],
                  ].map(([g, c, t]) => (
                    <tr key={g}>
                      <td className="p-3 border text-muted-foreground font-medium">{g}</td>
                      <td className="p-3 border text-muted-foreground">{c}</td>
                      <td className="p-3 border text-muted-foreground">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">Belirli sektörlerde (akaryakıt, tütün, sebze-meyve komisyonculuğu vb.) ise ciro şartı aranmaksızın zorunluluk geçerlidir. Kapsamda olup olmadığınızdan emin değilseniz mali müşavirinize danışın veya bizimle iletişime geçin.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-Faturaya Geçiş Adımları</h2>
            <div className="space-y-5 mt-4 not-prose">
              {[
                { n: "1", t: "E-İmza veya Mali Mühür Temin Edin", d: "Şahıs işletmeleri e-imza, şirketler mali mühür alır. E-imza başvurusu online yapılır, USB token 1-3 iş günü içinde kargoyla ulaşır." },
                { n: "2", t: "GİB Portalına Başvurun", d: "efatura.gov.tr üzerinden e-imzanız/mali mührünüzle giriş yaparak e-fatura başvurunuzu tamamlayın. Başvuru anlık onaylanır." },
                { n: "3", t: "Yöntem Seçin", d: "GİB Portalı (ücretsiz, temel), özel entegratör veya kendi bilgi işlem sisteminiz arasından işletmenize uygun yöntemi belirleyin." },
                { n: "4", t: "Fatura Kesmeye Başlayın", d: "Aktivasyon tamamlandığında e-faturalarınızı elektronik ortamda kesip e-imza/mali mühürle imzalayarak alıcılara iletebilirsiniz." },
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Geçiş Yapmazsanız: Ceza Riski</h2>
            <div className="mt-4 p-5 rounded-xl bg-red-50 border border-red-200 flex gap-3 not-prose">
              <AlertCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 mb-1">Her belge için 17.000 TL'den başlayan ceza</p>
                <p className="text-red-700 text-sm">E-fatura zorunluluğu kapsamında olup geçiş yapmayan veya kağıt fatura kesmeye devam eden mükellefler, her bir belge için özel usulsüzlük cezasıyla karşılaşır. Yüksek işlem hacminde bu cezalar hızla büyür. Zamanında e-imza temin ederek bu riski tamamen ortadan kaldırabilirsiniz.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile E-Fatura Dışında Neler Yapabilirsiniz?</h2>
            <p className="text-muted-foreground">E-fatura için aldığınız e-imza tek kullanımlık değildir — birçok resmi işlemde geçerlidir:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 not-prose">
              {[
                "e-Beyanname ve vergi bildirimleri",
                "e-Arşiv ve e-Defter işlemleri",
                "e-Devlet üzerinden resmi başvurular",
                "SGK bildirimleri",
                "Ticari sözleşme imzalama",
                "KEP ile yasal tebligat gönderimi",
              ].map((u) => (
                <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{u}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20 not-prose">
              <h3 className="font-bold text-foreground mb-3">Özet: E-Fatura ve E-İmza</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Şahıs işletmeleri e-fatura için <strong>e-imza</strong>, şirketler <strong>mali mühür</strong> kullanır</li>
                <li>3 milyon TL ciro üstü mükellefler 1 Temmuz 2026'ya kadar geçmeli</li>
                <li>e-Ticaret / gayrimenkul / araç ticaretinde eşik 500.000 TL</li>
                <li>Geçiş yapmayan her belge için 17.000 TL'den başlayan ceza öder</li>
                <li>Aynı e-imza e-beyanname, e-Devlet ve KEP'te de kullanılır</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Sıkça Sorulan Sorular</h2>
            {faqs.map((f) => (
              <div key={f.question} className="mb-6 pb-6 border-b last:border-0">
                <h3 className="font-bold text-foreground mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t">
            <h2 className="text-xl font-bold text-foreground mb-6">İlgili Sayfalar</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "E-İmza Satın Al", href: "/e-imza" },
                { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
                { label: "Mali Müşavir E-İmza Rehberi", href: "/blog/mali-musavir-e-imza-rehberi" },
                { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="E-Faturaya Geçiş İçin E-İmzanızı Alın" subtitle="TÜBİTAK onaylı e-imza, hızlı aktivasyon. Son tarihi beklemeyin, bugün başvurun." />
    </>
  )
}
