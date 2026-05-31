import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "KEP Nedir, Ne İşe Yarar? Kayıtlı Elektronik Posta Rehberi",
  description: "Kayıtlı Elektronik Posta (KEP) nedir, normal e-postadan farkı nedir, kimlere zorunlu ve nasıl kullanılır? Kapsamlı KEP rehberi.",
  alternates: { canonical: `${siteConfig.url}/blog/kep-nedir-ne-ise-yarar/` },
  openGraph: { title: "KEP Nedir?", description: "Kayıtlı Elektronik Posta rehberi — zorunluluk, kullanım ve avantajlar.", url: `${siteConfig.url}/blog/kep-nedir-ne-ise-yarar/` },
}

const faqs = [
  { question: "KEP mesajı ne kadar süre saklanır?", answer: "KEP mesajları BTK lisanslı hizmet sağlayıcının sunucularında en az 3 yıl saklanır. Kullanıcılar istedikleri zaman kendi arşivlerine de indirebilir. Yasal süreçlerde delil olarak sunmak için bu arşiv önemlidir." },
  { question: "KEP adresi başka bir e-posta uygulamasından kullanılabilir mi?", answer: "Evet. IMAP/SMTP protokolünü destekleyen e-posta istemcileri (Outlook, Thunderbird, Apple Mail vb.) ile KEP hesabınıza erişebilirsiniz. Ancak güvenli iletim için KEP sağlayıcısının kendi arayüzünü kullanmak önerilir." },
  { question: "KEP ile normal e-postanın maliyeti arasında fark ne kadar?", answer: "Normal e-posta ücretsiz ya da çok düşük maliyetlidir. KEP ise yıllık abonelik ücretine tabidir. Ancak ihtarname, tebligat ve resmi bildirimlerde noter ve posta masraflarını ortadan kaldırdığı için uzun vadede ciddi tasarruf sağlar." },
  { question: "KEP adresi almak zorunlu mu?", answer: "Türk Ticaret Kanunu'na göre anonim şirketler ve limited şirketler KEP adresi edinmek zorundadır. Bireysel kullanıcılar için zorunluluk bulunmamaktadır; ancak resmi yazışmalarda güvence sağlamak isteyenler bireysel KEP alabilir." },
  { question: "KEP ile gönderilen belge imzalanmış sayılır mı?", answer: "KEP tek başına imza işlevi görmez; e-posta tesliminin yasal kanıtını sağlar. Belgenin içeriğinin imzalanmış sayılması için e-imzayla birlikte kullanılması gerekir. Resmi yazışmalarda KEP + e-imzalı belge kombinasyonu en güvenli yöntemdir." },
]

const comparison = [
  { feature: "Gönderim zamanı kaydı", normal: false, kep: true },
  { feature: "Teslim bildirimi", normal: false, kep: true },
  { feature: "Okundu bilgisi", normal: true, kep: true },
  { feature: "İçerik bütünlüğü kanıtı", normal: false, kep: true },
  { feature: "Gönderici kimlik doğrulama", normal: false, kep: true },
  { feature: "Mahkemede delil niteliği", normal: false, kep: true },
  { feature: "Yasal tebligat yerine geçer", normal: false, kep: true },
  { feature: "Spam filtresi bypass riski", normal: true, kep: false },
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
            <span className="text-sm text-slate-400">25 Ocak 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">KEP Nedir, Ne İşe Yarar? Kayıtlı Elektronik Posta Rehberi</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Kayıtlı Elektronik Posta (KEP), gönderilen e-posta mesajlarının içeriğini, gönderim ve alım zamanını yasal delil niteliğinde kayıt altına alan güvenli e-posta sistemidir. Adi posta ve faks yerini KEP'e bırakırken, Türk şirketleri için artık yasal bir zorunluluk haline gelmiştir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP'in Hukuki Dayanağı</h2>
            <p className="text-muted-foreground">KEP, Türkiye'de birden fazla yasal düzenlemeyle güvence altına alınmıştır:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li><strong>6102 sayılı Türk Ticaret Kanunu:</strong> Sermaye şirketleri için KEP adresi edinme zorunluluğu</li>
              <li><strong>6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun:</strong> E-ticaret tebligatlarında KEP kullanımı</li>
              <li><strong>7201 sayılı Tebligat Kanunu:</strong> Elektronik tebligat ve KEP ilişkisi</li>
              <li><strong>BTK Yönetmelikleri:</strong> KEP hizmet sağlayıcılarının teknik ve hukuki yükümlülükleri</li>
            </ul>
            <p className="text-muted-foreground mt-4">BTK (Bilgi Teknolojileri ve İletişim Kurumu) tarafından yetkilendirilen KEP hizmet sağlayıcıları aracılığıyla sunulan KEP, iadeli taahhütlü posta ile eşdeğer hukuki güce sahiptir. Bu sayede mesai saatlerine bağlı kalmadan, posta kuyruklarında beklemeden resmi tebligat yapılabilmektedir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Normal E-posta ile KEP Karşılaştırması</h2>
            <p className="text-muted-foreground">Normal e-posta sistemlerinde gönderici, alıcı, gönderim zamanı ve içerik kolaylıkla değiştirilebilir ya da inkâr edilebilir. KEP bunu imkânsız kılar:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold border">Özellik</th>
                    <th className="p-3 text-center font-semibold border">Normal E-posta</th>
                    <th className="p-3 text-center font-semibold border">KEP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature}>
                      <td className="p-3 border text-muted-foreground">{row.feature}</td>
                      <td className="p-3 border text-center">{row.normal ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-400 mx-auto" />}</td>
                      <td className="p-3 border text-center">{row.kep ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-400 mx-auto" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP Kimler İçin Zorunlu?</h2>
            <p className="text-muted-foreground">Türk Ticaret Kanunu gereğince aşağıdaki kurumların KEP adresi edinmesi zorunludur:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                "Anonim şirketler (A.Ş.)",
                "Limited şirketler (Ltd. Şti.)",
                "Kooperatifler",
                "Bankalar ve finans kuruluşları",
                "Sigorta şirketleri",
                "KAP bildirim yükümlüsü şirketler",
                "Kamu kurumları (belirli kategoriler)",
                "Avukatlar (UYAP sistemi için)",
              ].map((m) => (
                <div key={m} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{m}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4">Yükümlülüğünü yerine getirmeyen şirketler için Türk Ticaret Kanunu kapsamında idari yaptırım uygulanabilir. Bu nedenle şirket kurucularının işletme kurarken KEP adresini de edinmesi tavsiye edilir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP Nasıl Çalışır? Teknik Süreç</h2>
            <p className="text-muted-foreground">KEP sistemi, her gönderimi kriptografik yöntemlerle mühürleyerek kayıt altına alır:</p>
            <ol className="text-muted-foreground mt-4 space-y-3 list-decimal list-inside">
              <li><strong>Mesaj Oluşturma:</strong> Gönderici KEP hesabından mesajı oluşturur ve eklerini ekler.</li>
              <li><strong>Gönderim Zaman Damgası:</strong> KEP hizmet sağlayıcısı, mesajın tam gönderim zamanını milisaniye hassasiyetiyle kaydeder.</li>
              <li><strong>Şifreli İletim:</strong> Mesaj, güvenli kanallar üzerinden alıcı KEP adresine iletilir. Man-in-the-middle saldırılarına karşı korunur.</li>
              <li><strong>Teslim Bildirimi:</strong> Alıcı KEP sunucusu mesajı teslim aldığında gönderene otomatik bildirim gider.</li>
              <li><strong>Arşivleme:</strong> Her iki tarafta da mesaj kriptografik bütünlükle arşivlenir. İçerik değiştirilemez.</li>
              <li><strong>Delil Raporu:</strong> İhtiyaç halinde KEP sağlayıcısından resmi delil raporu alınabilir.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP'in Pratik Kullanım Alanları</h2>
            <p className="text-muted-foreground">KEP, iş dünyasında pek çok kritik iletişim sürecini güvence altına alır:</p>
            <ul className="text-muted-foreground mt-4 space-y-3 list-disc list-inside">
              <li><strong>İhtarname ve İhbar:</strong> İş akdi feshi, kira ihtarı, borca itiraz bildirimleri KEP ile resmi geçerlilik kazanır. Notere gidip iadeli taahhütlü posta göndermek yerine saniyeler içinde yasal tebligat yapılabilir.</li>
              <li><strong>Sözleşme Bildirimleri:</strong> Sözleşme yenileme, fiyat güncellemesi veya fesih bildirimleri KEP'te teslim kanıtıyla birlikte iletilir.</li>
              <li><strong>KAP Bildirimleri:</strong> Halka açık şirketler kamuyu aydınlatma bildirimlerini KEP üzerinden yapabilir.</li>
              <li><strong>Banka ve Sigorta İşlemleri:</strong> Ödeme hatırlatmaları, prim bildirimleri ve hesap kapatma talepleri KEP güvencesiyle iletilir.</li>
              <li><strong>Kamu Kurumu Yazışmaları:</strong> Bakanlıklar ve kamu kurumlarıyla yapılan resmi yazışmalarda KEP kullanılabilir.</li>
              <li><strong>e-Ticaret Tebligatları:</strong> Tüketiciye yönelik mesafeli sözleşme bildirimlerinde KEP yasal güvence sağlar.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP Adresi Nasıl Alınır?</h2>
            <p className="text-muted-foreground">KEP adresi almak için BTK lisanslı bir KEP hizmet sağlayıcısına başvurmanız gerekir. Süreç şu adımlardan oluşur:</p>
            <ol className="text-muted-foreground mt-4 space-y-2 list-decimal list-inside">
              <li>BTK lisanslı KEP sağlayıcısının (eimzasatinal.com.tr gibi) web sitesine girin</li>
              <li>Bireysel veya kurumsal KEP paketini seçin</li>
              <li>Kimlik bilgilerini girerek başvuruyu tamamlayın</li>
              <li>e-Devlet üzerinden kimlik doğrulama yapın</li>
              <li>KEP adresiniz genellikle aynı gün aktive edilir</li>
            </ol>
            <p className="text-muted-foreground mt-4">KEP adres formatı genellikle <strong>ad.soyad@domain.kep.tr</strong> şeklindedir. Kurumsal KEP adreslerinde şirket adı da yer alabilir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">KEP ve E-İmza Birlikte Kullanımı</h2>
            <p className="text-muted-foreground">KEP teslimatin yasal kanıtını sağlarken, e-imza belgenin içeriğini ve imzalayanın kimliğini doğrular. İkisinin birlikte kullanımı maksimum hukuki güvenceyi sağlar:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Belgeyi önce e-imzayla imzalayın</li>
              <li>İmzalı belgeyi KEP üzerinden gönderin</li>
              <li>Bu kombinasyon: kim imzaladı + ne zaman gönderildi + ne zaman teslim edildi + içerik değişmedi → tümü kanıtlanmış olur</li>
            </ul>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-3">KEP Hakkında Özet Bilgiler</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Sermaye şirketleri için yasal zorunluluk</li>
                <li>İadeli taahhütlü posta ile eşdeğer hukuki güç</li>
                <li>Gönderim, teslim ve içerik bütünlüğü kriptografik olarak kanıtlanır</li>
                <li>Mesajlar en az 3 yıl arşivlenir</li>
                <li>Normal e-posta uygulamalarıyla da kullanılabilir</li>
                <li>Yıllık abonelik ücretine tabidir</li>
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
                { label: "KEP Adresi Al", href: "/kep" },
                { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
                { label: "Zaman Damgası Nedir?", href: "/blog/zaman-damgasi-nedir" },
              ].map((l) => (
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
