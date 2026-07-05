import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, AlertCircle, Building2, FileCheck, Shield, Users, Phone, Zap } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Yapı Denetimcileri İçin E-İmza Rehberi 2026 | YDS ve Proje Onayları",
  description: "Yapı denetim şirketleri ve denetimciler için e-imza rehberi. YDS sistemi, proje onayları, hakediş belgeleri ve bireysel/kurumsal e-imza seçimi hakkında kapsamlı bilgi.",
  alternates: { canonical: `${siteConfig.url}/blog/yapi-denetimcisi-e-imza-rehberi/` },
}

const islemler = [
  "YDS (Yapı Denetim Sistemi) üzerinden proje onayı",
  "Yapı ruhsatı ve iskan başvurusu",
  "Hakediş belgesi onayı ve imzalanması",
  "İş bitirme belgesi düzenlenmesi",
  "Seviye tespit tutanağı imzalanması",
  "Laboratuvar deney sonuçlarının onaylanması",
  "e-Devlet yapı denetim işlemleri",
  "Çevre ve Şehircilik Bakanlığı'na belge iletimi",
  "Şantiye denetim raporlarının imzalanması",
  "Yapı müteahhidi ile hakediş mutabakatı",
]

const unvanlar = [
  { unvan: "Mimar / Mühendis", aciklama: "Proje kontrolörü olarak görev yapanlar için bireysel e-imza zorunludur." },
  { unvan: "Yapı Denetim Kuruluşu Ortağı", aciklama: "Şirket adına belge imzalayanlar için hem bireysel hem e-mühür gerekebilir." },
  { unvan: "Yardımcı Kontrolör", aciklama: "Denetim raporlarını imzalayanlar için bireysel e-imza yeterlidir." },
  { unvan: "Laboratuvar Sorumlusu", aciklama: "Deney sonuçlarını onaylayanlar için bireysel e-imza kullanılır." },
]

const faqs = [
  {
    question: "Yapı denetimcileri için e-imza zorunlu mu?",
    answer: "Evet. 4708 sayılı Yapı Denetimi Hakkında Kanun ve Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın düzenlemeleri kapsamında YDS sistemi üzerinden yapılan tüm resmi işlemler için e-imza zorunludur. Proje onayı, hakediş belgesi ve iş bitirme belgesi gibi kritik evraklar e-imzasız sisteme gönderilemez.",
  },
  {
    question: "Yapı denetim şirketi olarak kaç kişi için e-imza almalıyız?",
    answer: "YDS sisteminde işlem yapan her mimar, mühendis ve kontrolörün ayrı bir bireysel e-imzası olması gerekir. Şirket adına toplu belge imzalanacaksa ek olarak kurumsal e-mühür de tercih edilebilir. Ortalama 5-10 kişilik bir yapı denetim şirketinde her personel için bireysel e-imza alınması önerilir.",
  },
  {
    question: "Yapı denetim e-imzası ne kadar sürede aktive edilir?",
    answer: "e-Devlet üzerinden kimlik doğrulama ile başvurularda e-imza genellikle 1-2 iş günü içinde aktive edilir. USB token kargoya verilir veya elden teslim edilir. Acil durumlarda aynı gün aktivasyon seçeneğimiz de mevcuttur.",
  },
  {
    question: "YDS sistemine e-imza ile nasıl giriş yapılır?",
    answer: "YDS sistemine giriş için USB token'ı bilgisayara takın, gerekli sürücüleri ve tarayıcı eklentisini yükleyin. yds.csb.gov.tr adresine giderek 'E-İmza ile Giriş' seçeneğini seçin. PIN kodunuzu girerek sisteme erişim sağlayabilirsiniz. Teknik destek ekibimiz kurulum konusunda ücretsiz destek vermektedir.",
  },
  {
    question: "Yapı denetim şirketleri için toplu e-imza indirimi var mı?",
    answer: "Evet. 3 ve üzeri kişi için yapılan toplu e-imza başvurularında kurumsal indirim uygulanmaktadır. Detaylı fiyat bilgisi ve teklif için WhatsApp veya telefon ile bizimle iletişime geçebilirsiniz.",
  },
]

export default function YapiDenetimciEImzaPage() {
  return (
    <>
      <JsonLd data={articleSchema({
        title: "Yapı Denetimcileri İçin E-İmza Rehberi 2026",
        description: "Yapı denetim şirketleri ve denetimciler için e-imza rehberi. YDS sistemi, proje onayları ve e-imza seçimi.",
        url: `${siteConfig.url}/blog/yapi-denetimcisi-e-imza-rehberi/`,
        datePublished: "2026-05-22",
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Ana Sayfa", url: siteConfig.url },
        { name: "Blog", url: `${siteConfig.url}/blog/` },
        { name: "Yapı Denetimcileri İçin E-İmza Rehberi", url: `${siteConfig.url}/blog/yapi-denetimcisi-e-imza-rehberi/` },
      ])} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Yapı Denetimcileri İçin E-İmza Rehberi" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">22 Mayıs 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">
            Yapı Denetimcileri İçin E-İmza Rehberi 2026: YDS, Proje Onayı ve Doğru E-İmza Seçimi
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">

            <p className="lead text-xl text-muted-foreground">
              Yapı denetim sektöründe dijital dönüşüm hız kazanıyor. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın YDS (Yapı Denetim Sistemi) üzerinden yürütülen proje onayları, hakediş belgeleri ve iş bitirme evrakları artık yalnızca elektronik imza ile işlem görebiliyor. Bu rehberde yapı denetimcilerinin ihtiyaç duyduğu her şeyi bulacaksınız.
            </p>

            {/* Uyarı kutusu */}
            <div className="my-8 flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Yasal Zorunluluk</p>
                <p className="text-amber-700 text-sm">4708 sayılı Yapı Denetimi Hakkında Kanun ve ilgili yönetmelikler gereğince, YDS sistemi üzerinden gerçekleştirilen tüm resmi işlemler e-imza zorunluluğuna tabidir. E-imzasız belge sisteme yüklenemez, onaylanamaz.</p>
              </div>
            </div>

            {/* Güçlü CTA — YDS için e-imza gerekli */}
            <div className="my-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 text-white not-prose shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-yellow-300" />
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-200">YDS'ye giriş için e-imza şart</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">E-İmzanız yok mu? Aynı gün alın, YDS'ye hemen giriş yapın.</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-2xl">
                yds.csb.gov.tr sistemine giriş yapabilmek için TÜBİTAK onaylı nitelikli elektronik imza gereklidir. Yapı denetimcilerine özel hızlı aktivasyon, aynı gün teslimat ve kurulum desteği sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/e-imza"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  E-İmza Paketlerini İncele
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Merhaba, YDS sistemi için e-imza almak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp ile Hemen Al
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Yapı Denetiminde E-İmza Neden Zorunlu?</h2>
            <p className="text-muted-foreground">
              4708 sayılı Yapı Denetimi Hakkında Kanun, yapı denetim kuruluşlarını ve denetimcileri belgelerin güvenliği konusunda sorumlu kılmaktadır. Bakanlık, 2019 yılından itibaren YDS sistemini tamamen dijitale taşıyarak ıslak imza uygulamasını büyük ölçüde devre dışı bırakmıştır.
            </p>
            <p className="text-muted-foreground mt-4">
              Bugün itibarıyla yapı denetim kuruluşlarında görev yapan her mimar, mühendis ve kontrolörün bireysel nitelikli elektronik imzasının (e-imza) olması gerekmektedir. Şirket adına düzenlenecek kurumsal belgelerde ise e-mühür tercih edilmektedir.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Yapı Denetimcilerinin E-İmza ile Yaptığı İşlemler</h2>
            <p className="text-muted-foreground">YDS sistemi ve e-Devlet entegrasyonu kapsamında e-imza gerektiren başlıca işlemler şunlardır:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 not-prose">
              {islemler.map((islem) => (
                <div key={islem} className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50 border text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{islem}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Hangi Unvandaki Denetimci, Hangi E-İmzayı Kullanmalı?</h2>
            <p className="text-muted-foreground">Yapı denetim şirketindeki unvana göre e-imza ihtiyacı farklılık gösterir:</p>
            <div className="mt-4 space-y-4 not-prose">
              {unvanlar.map((item) => (
                <div key={item.unvan} className="flex gap-4 p-4 rounded-xl border bg-white shadow-sm">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.unvan}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.aciklama}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Bireysel E-İmza mı, Kurumsal E-Mühür mü?</h2>
            <p className="text-muted-foreground">
              Yapı denetim sektöründe bu iki kavram sıkça karıştırılmaktadır. Farkı net biçimde açıklayalım:
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Bireysel E-İmza</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Kişi adına düzenlenir</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />YDS'de denetimci olarak giriş</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Proje ve rapor onaylarında kullanılır</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Her denetimci için ayrı ayrı alınır</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />1, 2 veya 3 yıllık paket seçenekleri</li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FileCheck className="h-5 w-5 text-slate-500" />
                  <h3 className="font-bold text-foreground">Kurumsal E-Mühür</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Şirket adına düzenlenir</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Toplu belge imzalamada kullanılır</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Otomasyon sistemleriyle entegre çalışır</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Şirket başına tek sertifika yeterli</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />Teklif için iletişime geçin</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground mt-6">
              <strong>Önerimiz:</strong> Yapı denetim şirketlerinde önce her denetimci için bireysel e-imza alın. Şirket büyüdükçe ve belge hacmi arttıkça kurumsal e-mühür ihtiyacını değerlendirin.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Yapı Denetim Şirketleri İçin Toplu E-İmza Alımı</h2>
            <p className="text-muted-foreground">
              Ortalama bir yapı denetim şirketinde 3 ila 15 arasında e-imzaya ihtiyaç duyulmaktadır. Şirketler genellikle aşağıdaki pozisyonlar için e-imza temin eder:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
              <li>Mimar kontrolörler (yapı güvenliği)</li>
              <li>İnşaat mühendisi kontrolörler (statik proje)</li>
              <li>Makina mühendisi kontrolörler (tesisat)</li>
              <li>Elektrik mühendisi kontrolörler (elektrik projesi)</li>
              <li>Yardımcı kontrolörler</li>
              <li>Laboratuvar sorumlusu</li>
            </ul>
            <div className="mt-6 flex items-start gap-4 rounded-xl border border-blue-200 bg-blue-50 p-5 not-prose">
              <Users className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-800 mb-1">Toplu Alımda Avantaj</p>
                <p className="text-blue-700 text-sm">3 ve üzeri e-imza başvurularında kurumsal indirim uyguluyoruz. Şirketinizin tüm personeli için tek seferinde başvuru yapabilir, teslimatı tek adrese yaptırabilirsiniz. Teklif almak için WhatsApp'tan yazmanız yeterli.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">YDS Sistemine E-İmza ile Nasıl Giriş Yapılır?</h2>
            <p className="text-muted-foreground">YDS (yds.csb.gov.tr) sistemine e-imzayla bağlanmak için adım adım yapmanız gerekenler:</p>
            <ol className="mt-4 space-y-4 text-muted-foreground list-none not-prose">
              {[
                { num: "1", title: "USB Token'ı Takın", desc: "E-imza USB token'ınızı bilgisayarınızdaki USB portuna takın. Token sürücüsü genellikle otomatik yüklenir; yüklenmezse üreticinin web sitesinden indirin." },
                { num: "2", title: "Tarayıcı Eklentisini Yükleyin", desc: "YDS sistemi için gerekli tarayıcı eklentisini resmi siteden indirip kurun. Chrome ve Edge tarayıcıları desteklenmektedir." },
                { num: "3", title: "YDS Portalına Gidin", desc: "yds.csb.gov.tr adresine gidin ve 'E-İmza ile Giriş' seçeneğine tıklayın. Sertifikanızı seçin." },
                { num: "4", title: "PIN Kodunuzu Girin", desc: "E-imza sertifikanız için belirlediğiniz PIN kodunu girin. Sisteme güvenli şekilde erişim sağlanır." },
                { num: "5", title: "Belgelerinizi İmzalayın", desc: "Onaylamak istediğiniz belgeyi açın, 'İmzala' butonuna tıklayın ve PIN kodunuzu doğrulayın. Belge anında onaylanır." },
              ].map((step) => (
                <li key={step.num} className="flex gap-4 p-4 rounded-xl border bg-white shadow-sm">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-muted-foreground mt-4">
              Teknik sorun yaşarsanız destek ekibimiz kurulum ve YDS entegrasyonu konusunda ücretsiz yardımcı olmaktadır. WhatsApp hattımıza mesaj atmanız yeterlidir.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Başvurusu için Gerekli Belgeler</h2>
            <p className="text-muted-foreground">Yapı denetimcisi olarak e-imza başvurusu yaparken hazırlamanız gereken belgeler son derece basittir:</p>
            <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
              <li><strong>TC Kimlik Numarası</strong> — e-Devlet doğrulaması için</li>
              <li><strong>Aktif e-posta adresi</strong> — bildirimler için</li>
              <li><strong>Cep telefonu numarası</strong> — SMS doğrulaması için</li>
              <li><strong>Kurumsal başvurularda:</strong> vergi numarası ve imza sirküleri</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Notere gitmenize gerek yok. e-Devlet üzerinden uzaktan kimlik doğrulama ile tüm süreci online tamamlayabilirsiniz. <Link href="/blog/e-imza-nasil-alinir" className="text-primary hover:underline font-medium">E-imza başvurusu hakkında detaylı rehberimizi</Link> de inceleyebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Hangi Paket Yapı Denetimcileri İçin Uygun?</h2>
            <p className="text-muted-foreground">
              Yapı denetim sektörü yoğun belge trafiği olan bir sektördür. Bu nedenle yıllık yenileme zahmetinden kurtulmak için <strong>3 yıllık paket</strong> en ekonomik seçenektir. Denetimci sayısı fazla olan şirketler için toplu alımda ek indirimler de mevcuttur.
            </p>
            <div className="mt-4 not-prose">
              <Link
                href="/e-imza"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                E-İmza Paketlerini İncele <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* SSS */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4 not-prose">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border bg-secondary/30 p-5">
                  <p className="font-semibold text-foreground mb-2">{faq.question}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Related links */}
          <div className="mt-16 pt-8 border-t">
            <p className="text-sm font-semibold text-muted-foreground mb-4">İlgili İçerikler</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "E-İmza Satın Al", href: "/e-imza" },
                { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
                { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
                { label: "İletişim ve Teklif Al", href: "/iletisim" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection
        title="Yapı Denetim Şirketiniz İçin Toplu E-İmza Teklifi Alın"
        subtitle="3 ve üzeri e-imza başvurularında kurumsal indirim. Aynı gün aktivasyon seçeneği mevcuttur."
      />
    </>
  )
}
