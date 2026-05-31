import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertCircle, CheckCircle } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "E-İmza Yenileme — Süresi Dolanlar İçin Adım Adım Rehber",
  description: "E-imza sertifikasının süresi dolmadan veya dolduktan sonra nasıl yenilenir? Yenileme süreci, ne zaman başvurulmalı ve dikkat edilmesi gerekenler.",
  alternates: { canonical: `${siteConfig.url}/blog/e-imza-yenileme/` },
  openGraph: { title: "E-İmza Yenileme Rehberi", description: "E-imza yenileme süreci hakkında her şey.", url: `${siteConfig.url}/blog/e-imza-yenileme/` },
}

const faqs = [
  { question: "E-imza süresi dolduktan sonra imzaladığım belgeler geçersiz mi?", answer: "Hayır. Süresi dolmadan önce attığınız imzalar kalıcı olarak geçerlidir. Yalnızca yeni belge imzalayamazsınız. Eski imzaların geçerliliği etkilenmez." },
  { question: "E-imza yenileme ne kadar sürer?", answer: "Başvuru anından USB token teslimatına kadar genellikle 2-4 iş günüdür. e-Devlet üzerinden kimlik doğrulama anlık gerçekleşir. Kargo süresi şehre göre 1-3 gündür. Aktivasyon ise token elinize geldiğinde aynı gün yapılır." },
  { question: "Eski USB tokenimi yenileme için kullanabilir miyim?", answer: "Çoğunlukla evet. Mevcut USB token'ınız üreticiye göre yeniden kullanılabilir durumda olabilir. Bazı durumlarda yeni token gerekebilir. Başvuru aşamasında token bilgilerinizi paylaşırsanız uygunluk kontrolü yapılır." },
  { question: "Süresi dolmadan ne zaman yenileme yapmalıyım?", answer: "En az 30, tercihen 60 gün önce yenileme başvurusu yapmanızı öneririz. Bu sürede mevcut e-imzanızı kullanmaya devam ederken yenileme süreci tamamlanır. Süre dolduğunda kesinti yaşamadan devam edersiniz." },
  { question: "Farklı bir sertifika sağlayıcıya geçebilir miyim?", answer: "Evet. Yenileme sırasında farklı bir TÜBİTAK onaylı sertifika sağlayıcıya geçebilirsiniz. Yeni sağlayıcıdan alınan sertifika da aynı hukuki geçerliliğe sahiptir. Geçiş sürecinde eski sertifikanızı iptal ettirmeniz gerekebilir." },
]

export default function EImzaYenilemePage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "E-İmza Yenileme Rehberi", description: "E-imza yenileme süreci", url: `${siteConfig.url}/blog/e-imza-yenileme/`, datePublished: "2026-02-15" })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "E-İmza Yenileme", url: `${siteConfig.url}/blog/e-imza-yenileme/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "E-İmza Yenileme" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">15 Şubat 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-İmza Yenileme — Süresi Dolanlar İçin Adım Adım Rehber</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">E-imza sertifikaları belirli bir süre sonunda geçerliliğini yitirir. Süresi dolan e-imzayla yeni işlem yapamazsınız, ancak endişelenmeyin — yenileme süreci düşündüğünüzden çok daha kolay ve hızlıdır. Mevcut belgeleriniz için herhangi bir risk söz konusu değildir.</p>

            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800"><strong>Önemli:</strong> Süresi dolan e-imzayla daha önce attığınız imzalar geçerliliğini korur. Yalnızca yeni imza atamazsınız. Mevcut sözleşmeleriniz ve belgeleriniz için herhangi bir endişe yaşamanıza gerek yok.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Süresi Dolmadan Ne Yapmalısınız?</h2>
            <p className="text-muted-foreground">E-imzanız sona ermeden <strong>en az 30-60 gün önce</strong> yenileme başvurusu yapmanızı öneririz. Bu sayede:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Süreç tamamlanana kadar mevcut imzanızı kullanmaya devam edersiniz</li>
              <li>Acele kargo veya acil aktivasyon ücreti ödemezsiniz</li>
              <li>GİB, UYAP ve diğer sistemlerde kesinti yaşamazsınız</li>
              <li>Sertifika sağlayıcı değiştirme fırsatınız olur</li>
            </ul>
            <p className="text-muted-foreground mt-4">Pek çok sertifika sağlayıcısı, süre dolmadan önce e-posta veya SMS ile hatırlatma yapar. Ancak buna güvenmek yerine sertifika bitiş tarihini takviminize not etmenizi öneririz.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Süresi Dolduktan Sonra Ne Olur?</h2>
            <ul className="text-muted-foreground mt-4 space-y-3">
              {[
                { icon: false, text: "Yeni belge imzalayamazsınız — sistemler imzayı reddeder" },
                { icon: false, text: "e-Devlet ve GİB sistemlerine e-imzayla giriş yapamazsınız" },
                { icon: false, text: "e-Beyanname sistemi erişimi kesilir (mali müşavirler için kritik)" },
                { icon: false, text: "UYAP ve EKAP sistemleri e-imzalı işlemleri reddeder" },
                { icon: true, text: "Daha önce attığınız imzalar geçerliliğini korur" },
                { icon: true, text: "USB token cihazınız çoğunlukla yeniden kullanılabilir" },
                { icon: true, text: "Yenileme başvurusu hemen yapılabilir, kısa sürede çözülür" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  {item.icon
                    ? <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    : <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />}
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Yenileme Adımları</h2>
            <div className="space-y-5 mt-4">
              {[
                { n: "1", t: "Başvuru Yapın", d: "İletişim formunu doldurun veya WhatsApp'tan yazın. Eski e-imzanızın sertifika sağlayıcısı ve paket bilgilerini paylaşın. Farklı bir sağlayıcıya geçmek istiyorsanız bunu bu aşamada belirtin." },
                { n: "2", t: "Paket Seçin", d: "Yenileme için 1, 2 veya 3 yıllık paketlerden birini seçin. Sık yenileme zahmetinden kurtulmak için 3 yıllık paket önerilir. Yoğun kullanıcılar için birim maliyet açısından da avantajlıdır." },
                { n: "3", t: "Kimlik Doğrulama", d: "Yenileme için de kimlik doğrulama gereklidir. e-Devlet üzerinden en hızlı yöntemle birkaç dakika içinde tamamlanır. Mevcut sertifikanızın bilgileri doğrulamayı kolaylaştırır." },
                { n: "4", t: "USB Token Durumu", d: "Eski USB token'ınız çoğunlukla yeniden kullanılabilir; yeni sertifika aynı token'a yüklenir. Token değişikliği gerekirse bildirilir ve yeni token kargo ile gönderilir." },
                { n: "5", t: "Sertifika Yükleme", d: "Yeni sertifika USB token'ınıza yüklenir. Teknik destek ekibimiz bu işlemi telefon veya uzaktan bağlantıyla yapar. Ortalama 10-15 dakika sürer." },
                { n: "6", t: "Test ve Aktivasyon", d: "Yeni e-imzanız test belge imzalanarak doğrulanır. GİB, UYAP veya sık kullandığınız diğer sistemlere bağlantı kontrol edilir. Her şey çalıştığında süreç tamamlanır." },
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Yenileme mi, Yoksa Yeni E-İmza mı Almalısınız?</h2>
            <p className="text-muted-foreground">Teknik açıdan bakıldığında "yenileme" aslında yeni bir sertifika almaktır. Ancak mevcut USB token'ınız kullanılabilirse ek donanım maliyeti oluşmaz. Yeni e-imza almakla yenileme arasındaki pratik fark şudur:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold border">Kriter</th>
                    <th className="p-3 text-left font-semibold border">Yenileme</th>
                    <th className="p-3 text-left font-semibold border">Yeni E-İmza</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Mevcut token", "Genellikle korunur", "Yeni token gönderilir"],
                    ["Sertifika içeriği", "TC kimlik bilgileri aynı", "TC kimlik bilgileri aynı"],
                    ["GİB entegrasyonu", "Güncelleme gerekebilir", "Yeniden kurulum gerekir"],
                    ["Maliyet", "Benzer", "Benzer (token yoksa az farklı)"],
                  ].map(([k, y, n]) => (
                    <tr key={k}>
                      <td className="p-3 border font-medium text-muted-foreground">{k}</td>
                      <td className="p-3 border text-muted-foreground">{y}</td>
                      <td className="p-3 border text-muted-foreground">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2 veya 3 Yıllık Paket ile Yenileme Sıklığını Azaltın</h2>
            <p className="text-muted-foreground">Her yıl yenileme süreciyle uğraşmamak için <strong>2 veya 3 yıllık paket</strong> tercih edin. Bu sayede:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Yıllık başvuru zahmetinden kurtulursunuz</li>
              <li>Birim başına maliyet düşer — 3 yıllık paket en avantajlıdır</li>
              <li>Sertifika yenileme takip ve hatırlatma yükü azalır</li>
              <li>Uzun vadeli projeler ve sözleşmeler için süreklilik sağlanır</li>
            </ul>
            <p className="text-muted-foreground mt-4">Özellikle e-imzayı mesleki amaçla kullanan mali müşavirler, avukatlar, inşaat denetimcileri ve düzenli kamu işlemleri yapan firmalar için 3 yıllık paket açık ara en akıllı seçimdir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Kurumsal E-İmza Yenileme</h2>
            <p className="text-muted-foreground">Şirketinizde birden fazla kişinin e-imzası varsa toplu yenileme avantajlarından yararlanabilirsiniz:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Tüm çalışanlar için aynı anda yenileme yapılabilir</li>
              <li>Kurumsal indirim uygulanır (3 ve üzeri başvurular)</li>
              <li>Faturalı ödeme imkânı sunulur</li>
              <li>Toplu aktivasyon desteği verilir</li>
              <li>İnsan kaynakları veya IT departmanıyla koordinasyon sağlanır</li>
            </ul>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-2">Yenileme Sürecinde Dikkat Edilmesi Gerekenler</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Sertifika bitiş tarihini takviminize not edin, 60 gün önceden başvurun</li>
                <li>USB token'ınızı kaybetmemek için güvenli bir yerde saklayın</li>
                <li>PIN kodunuzu kimseyle paylaşmayın; üç yanlış denemede token kilitlenir</li>
                <li>GİB ve UYAP gibi sistemlerde yeni sertifika yüklendikten sonra oturumu yenileyin</li>
                <li>Yenileme tamamlandıktan sonra test imzası atarak sistemin çalıştığını doğrulayın</li>
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
                { label: "Yenileme Başvurusu Yap", href: "/iletisim" },
                { label: "E-İmza Paketleri", href: "/e-imza" },
                { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
                { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
              ].map((l) => (
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
