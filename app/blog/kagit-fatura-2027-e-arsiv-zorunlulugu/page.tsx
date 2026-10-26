import type { Metadata } from "next"
import { pageTitle, ogDefaults } from "@/lib/seo"
import Link from "next/link"
import { ArrowRight, Check, X, AlertCircle, Zap, Phone, Calendar } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"
import { AuthorByline, AuthorBox } from "@/components/blog/author-byline"
import { Sources } from "@/components/blog/sources"
import { blogSources } from "@/lib/blog-sources"

export const metadata: Metadata = {
  title: pageTitle("1 Ocak 2027: Kağıt Fatura Dönemi Bitiyor"),
  description: "Basit usul ve işletme hesabı mükellefleri için kağıt fatura istisnası 1 Ocak 2027'de bitiyor. E-Arşiv zorunluluğu kimleri kapsıyor, e-imza gerekli mi? 2026 güncel rehber.",
  alternates: { canonical: `${siteConfig.url}/blog/kagit-fatura-2027-e-arsiv-zorunlulugu/` },
  openGraph: { ...ogDefaults,
    title: "1 Ocak 2027: Kağıt Fatura Dönemi Bitiyor",
    description: "Basit usul ve işletme hesabı mükellefleri için e-Arşiv zorunluluğu 1 Ocak 2027'de başlıyor. Kimleri kapsıyor, e-imza şart mı?",
    url: `${siteConfig.url}/blog/kagit-fatura-2027-e-arsiv-zorunlulugu/`,
  },
}

const faqs = [
  { question: "1 Ocak 2027'de tam olarak ne değişiyor?", answer: "Basit usulde vergilendirilen mükellefler ile işletme hesabı esasına göre defter tutanlar için kağıt fatura istisnası sona eriyor. Bu tarihten itibaren düzenledikleri faturaları tutar sınırı aranmaksızın e-Arşiv Fatura olarak kesmeleri gerekiyor. Zorunluluğun başlangıcı VUK Genel Tebliği (Sıra No: 589) ile 1/1/2026'dan 1/1/2027'ye ertelenmişti; bu ek süre bitiyor." },
  { question: "E-Arşiv Fatura için mutlaka e-imza veya mali mühür almam gerekiyor mu?", answer: "Hayır, zorunlu değil. Gerçek kişi mükellefler (basit usul, işletme hesabı esası) İnteraktif Vergi Dairesi bilgileriyle GİB'in ücretsiz e-Arşiv Portalı'na girip faturalarını 'GİB İmza' adı verilen SMS onaylı yöntemle onaylayabilir. Mali mühür yalnızca tüzel kişiler (A.Ş., Ltd. Şti.) için zorunludur." },
  { question: "E-imza şart değilse neden alan var?", answer: "GİB Portalı her fatura için SMS onayı gerektirir ve toplu/hızlı kesim için tasarlanmamıştır. Yoğun fatura trafiği olan, muhasebe yazılımı veya entegratör kullanmak isteyen ya da faturalama yetkisini muhasebecisine devretmek isteyen mükellefler için e-imza, günlük SMS onay derdini ortadan kaldırıp süreci otomatikleştirir. Ayrıca aynı e-imza e-beyanname, e-Devlet işlemleri ve KEP'te de geçerlidir." },
  { question: "3.000 TL sınırı ne anlama geliyordu?", answer: "1 Ocak 2027'ye kadar bu mükellef grubu, vergiler dahil 3.000 TL'yi aşmayan satışlarında kağıt fatura kesmeye devam edebiliyordu. 1 Ocak 2027'den itibaren bu tutar sınırı kalkıyor; tutarına bakılmaksızın e-Arşiv Fatura düzenlenmesi gerekiyor." },
  { question: "Şirketler (tüzel kişiler) de bu erteleme kapsamında mıydı?", answer: "Hayır. Bilanço esasına göre defter tutan mükellefler ve şirketler için erteleme uygulanmadı; bu grup 1 Ocak 2026 itibarıyla tutarına bakılmaksızın tüm faturalarını GİB'in e-Belge sisteminden düzenlemek zorunda. 1 Ocak 2027 değişikliği özellikle basit usul ve işletme hesabı esasına tabi gerçek kişi mükellefleri ilgilendiriyor." },
  { question: "Zamanında geçiş yapmazsam ne olur?", answer: "E-Arşiv zorunluluğu kapsamında olup kağıt fatura kesmeye devam etmek, Vergi Usul Kanunu'ndaki özel usulsüzlük hükümleri çerçevesinde cezai yaptırıma tabidir. Ceza tutarları her yıl yeniden değerleme oranıyla güncellenir; güncel tutarı mali müşavirinizden teyit edin." },
]

export default function KagitFatura2027Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        title: "1 Ocak 2027: Kağıt Fatura Dönemi Bitiyor",
        description: "Basit usul ve işletme hesabı mükellefleri için e-Arşiv zorunluluğu rehberi",
        url: `${siteConfig.url}/blog/kagit-fatura-2027-e-arsiv-zorunlulugu/`,
        datePublished: "2026-10-26", dateModified: "2026-10-26",
      })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Ana Sayfa", url: siteConfig.url },
        { name: "Blog", url: `${siteConfig.url}/blog/` },
        { name: "1 Ocak 2027: Kağıt Fatura Dönemi Bitiyor", url: `${siteConfig.url}/blog/kagit-fatura-2027-e-arsiv-zorunlulugu/` },
      ])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "1 Ocak 2027: Kağıt Fatura Dönemi Bitiyor" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">26 Ekim 2026 · 9 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">1 Ocak 2027'de Kağıt Fatura Dönemi Bitiyor: Basit Usul ve İşletme Hesabı Mükellefleri İçin Rehber</h1>
          <AuthorByline updated="2026-10-26" />
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Basit usulde vergilendirilen esnaf ve işletme hesabı esasına göre defter tutan mükellefler için tanınan kağıt fatura istisnası <strong>1 Ocak 2027'de sona eriyor</strong>. Bu tarihten sonra tutar sınırı aranmaksızın e-Arşiv Fatura düzenlemek zorunlu hale geliyor. İyi haber: bu geçiş için <strong>e-imza veya mali mühür almanız şart değil</strong> — ama neden pek çok mükellefin yine de tercih ettiğini bu yazıda açıklıyoruz.
            </p>

            <div className="my-8 flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 not-prose">
              <Calendar className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Son Tarih: 1 Ocak 2027</p>
                <p className="text-amber-700 text-sm">
                  Basit usul mükellefler ve işletme hesabı esasına göre defter tutanlar için e-Arşiv Fatura zorunluluğu, VUK Genel Tebliği (Sıra No: 589) ile 1/1/2026'dan 1/1/2027'ye ertelenmişti. Bu ek süre 2 ay içinde bitiyor; o tarihten sonra 3.000 TL'lik tutar istisnası da kalkıyor.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Ne Değişti, Neden Şimdi Konuşuyoruz?</h2>
            <p className="text-muted-foreground">
              E-Arşiv Fatura zorunluluğu aslında yeni değil. Bilanço esasına göre defter tutan mükellefler ve şirketler için zaten 1 Ocak 2026'dan beri tutar sınırı olmaksızın yürürlükte. Ancak <strong>basit usul mükellefler</strong> (örneğin küçük esnaf) ve <strong>işletme hesabı esasına göre defter tutanlar</strong> için Gelir İdaresi Başkanlığı, 31 Aralık 2025 tarihli Resmî Gazete'de yayımlanan VUK Genel Tebliği (Sıra No: 589) ile bu grubun zorunluluk tarihini bir yıl erteledi: 1/1/2026 yerine 1/1/2027.
            </p>
            <p className="text-muted-foreground mt-4">
              Bu, bir ikinci erteleme değil — şu anda bilinen son tarih. Yani bu mükellef grubu için kağıt fatura dönemi, bu yazının yayımlandığı tarihten (Ekim 2026) yaklaşık 2 ay sonra kapanıyor.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Bu Değişiklik Kimi Kapsıyor?</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                <h3 className="font-bold text-foreground mb-3">Kapsama Giriyor</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Basit usulde vergilendirilen ticari kazanç sahipleri</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />İşletme hesabı esasına göre defter tutan gerçek kişi mükellefler</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />1 Ocak 2027'den itibaren tutar sınırı olmaksızın e-Arşiv zorunlu</li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-foreground mb-3">Zaten Kapsamda (Erteleme Yok)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Bilanço esasına göre defter tutan mükellefler</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Şirketler (A.Ş., Ltd. Şti.) — 1 Ocak 2026'dan beri tam zorunlu</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />3 milyon TL ciro üzeri e-fatura mükellefleri (ayrı bir eşik ve takvime tabi)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza veya Mali Mühür Şart mı? Dürüst Cevap: Hayır</h2>
            <p className="text-muted-foreground">
              Bu konuda net olmak istiyoruz: gerçek kişi mükellefler (basit usul, işletme hesabı esası) GİB'in <strong>İnteraktif Vergi Dairesi</strong> bilgileriyle e-Arşiv Portalı'na ücretsiz giriş yapabilir ve faturalarını cep telefonuna gelen SMS kodu ile onaylayan <strong>"GİB İmza"</strong> yöntemiyle kesebilir. Bu yöntemde ayrıca e-imza sertifikası veya mali mühür satın almanıza gerek yoktur. Mali mühür zorunluluğu yalnızca tüzel kişiler (şirketler) için geçerlidir.
            </p>

            <div className="mt-6 overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold border">Özellik</th>
                    <th className="p-3 text-left font-semibold border">GİB Portalı (GİB İmza / SMS)</th>
                    <th className="p-3 text-left font-semibold border">E-İmzalı Kullanım</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Maliyet", "Ücretsiz", "E-imza sertifika bedeli"],
                    ["Onay yöntemi", "Her fatura için ayrı SMS kodu", "Tek kurulumla otomatik imza"],
                    ["Toplu / hızlı fatura kesimi", "Pratik değil, tek tek girilir", "Muhasebe yazılımı veya entegratörle otomasyona uygun"],
                    ["Muhasebeciye yetki devri", "Sınırlı", "Yetkilendirmeyle daha esnek"],
                    ["Diğer resmi işlemlerde kullanım", "Yok", "E-beyanname, e-Devlet, KEP gibi işlemlerde de geçerli"],
                  ].map(([f, g, e]) => (
                    <tr key={f}>
                      <td className="p-3 border text-muted-foreground font-medium">{f}</td>
                      <td className="p-3 border text-muted-foreground">{g}</td>
                      <td className="p-3 border text-muted-foreground">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              Kısacası: fatura sayınız azsa ve zaman zaman kesiyorsanız GİB'in ücretsiz portalı yeterlidir. Fatura trafiğiniz yoğunsa, muhasebe yazılımı kullanıyorsanız veya işlemi muhasebecinize devretmek istiyorsanız e-imza pratik bir tercih olur — ama bu bir zorunluluk değil, bir kolaylık tercihidir.
            </p>

            <div className="my-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 text-white not-prose shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-yellow-300" />
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-200">İsteğe bağlı, pratik bir çözüm</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">SMS onayıyla uğraşmak istemiyorsanız e-imzanızı alın</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-2xl">
                TÜBİTAK onaylı nitelikli elektronik imza ile GİB Portalı, entegratör veya muhasebe yazılımınızda faturalarınızı tek tıkla imzalayın. Hızlı aktivasyon, 1-3 iş günü kargo, ücretsiz kurulum desteği.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/e-imza" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  E-İmza Paketlerini İncele
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Merhaba, e-Arşiv fatura için e-imza almak istiyorum.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                  <Phone className="h-4 w-4" />
                  WhatsApp ile Hemen Al
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1 Ocak 2027'ye Kadar Yapmanız Gerekenler</h2>
            <div className="space-y-5 mt-4 not-prose">
              {[
                { n: "1", t: "Hangi gruba girdiğinizi netleştirin", d: "Basit usul mü, işletme hesabı esası mı, yoksa bilanço esası mı tabi olduğunuzu mali müşavirinizle teyit edin." },
                { n: "2", t: "Yöntem seçin", d: "GİB'in ücretsiz e-Arşiv Portalı'nı mı kullanacaksınız, yoksa e-imza ile otomasyonu mu tercih edeceksiniz — fatura hacminize göre karar verin." },
                { n: "3", t: "İnteraktif Vergi Dairesi kaydınızı kontrol edin", d: "GİB Portalı'na girmek için ivd.gib.gov.tr üzerinden kullanıcı kodunuzun aktif olduğundan emin olun." },
                { n: "4", t: "E-imza seçtiyseniz erken başvurun", d: "Yıl sonuna doğru başvurular yoğunlaşabilir. E-imza temini genellikle 1-3 iş günü sürer; son güne bırakmayın." },
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Geçiş Yapmazsanız Ne Olur?</h2>
            <div className="mt-4 p-5 rounded-xl bg-red-50 border border-red-200 flex gap-3 not-prose">
              <AlertCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 mb-1">Özel usulsüzlük cezası riski</p>
                <p className="text-red-700 text-sm">
                  E-Arşiv zorunluluğu kapsamında olup 1 Ocak 2027'den sonra kağıt fatura kesmeye devam etmek, Vergi Usul Kanunu'ndaki özel usulsüzlük hükümleri çerçevesinde cezai yaptırıma tabidir. Ceza tutarları her yıl yeniden değerleme oranıyla güncellendiğinden güncel rakamı mali müşavirinizden teyit etmenizi öneririz — ama riskin kendisi gerçek ve kaçınılabilir.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20 not-prose">
              <h3 className="font-bold text-foreground mb-3">Özet</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Basit usul ve işletme hesabı mükellefleri için kağıt fatura istisnası 1 Ocak 2027'de bitiyor</li>
                <li>Erteleme VUK Genel Tebliği (Sıra No: 589) ile sağlanmıştı, bu son tarih</li>
                <li>E-imza/mali mühür <strong>zorunlu değil</strong> — GİB'in ücretsiz portalı ve "GİB İmza" (SMS) yeterli</li>
                <li>Yoğun fatura trafiği, otomasyon veya muhasebeciye yetki devri isteyenler için e-imza pratik bir tercih</li>
                <li>Şirketler (tüzel kişiler) için mali mühür zaten 1 Ocak 2026'dan beri zorunlu, bu değişiklik onları kapsamıyor</li>
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
                { label: "E-Fatura İçin E-İmza Gerekli mi?", href: "/blog/e-fatura-icin-e-imza-gerekli-mi" },
                { label: "Mali Müşavir E-İmza Rehberi", href: "/blog/mali-musavir-e-imza-rehberi" },
                { label: "E-İmza, Mobil İmza, Mali Mühür Farkı", href: "/blog/e-imza-mobil-imza-mali-muhur-farki" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Sources items={blogSources["kagit-fatura-2027-e-arsiv-zorunlulugu"]} />
          <AuthorBox />
        </div>
      </article>

      <CtaSection title="E-İmzanızı Bugün Alın, Yıl Sonu Yoğunluğunu Beklemeyin" subtitle="TÜBİTAK onaylı e-imza, hızlı aktivasyon ve ücretsiz kurulum desteği." />
    </>
  )
}
