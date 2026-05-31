import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "E-İmza Nasıl Alınır? Adım Adım Başvuru Rehberi 2026",
  description: "E-imza başvurusu nasıl yapılır? Gerekli belgeler, e-Devlet üzerinden başvuru, aktivasyon ve kurulum adımlarını anlatan eksiksiz rehber.",
  alternates: { canonical: `${siteConfig.url}/blog/e-imza-nasil-alinir/` },
  openGraph: { title: "E-İmza Nasıl Alınır?", description: "E-imza başvurudan aktivasyona kadar adım adım rehber.", url: `${siteConfig.url}/blog/e-imza-nasil-alinir/` },
}

const steps = [
  { title: "Paket Seçin", desc: "1, 2 veya 3 yıllık paketler arasından ihtiyacınıza uygun olanı seçin. Uzun vadeli paketler daha avantajlı fiyat sunar ve yıllık yenileme zahmetinden kurtarır." },
  { title: "Başvuru Formunu Doldurun", desc: "Ad, soyad, TC kimlik numarası, e-posta ve telefon bilgilerinizi girin. Kurumsal başvurularda şirket unvanı ve vergi numarası da gerekir. Form doldurma yaklaşık 5 dakika sürer." },
  { title: "Kimlik Doğrulama Yapın", desc: "e-Devlet üzerinden (en hızlı ve kolay yöntem) veya yüz yüze kimlik doğrulama yöntemlerinden birini seçin. e-Devlet yöntemiyle ek belge göndermenize gerek yoktur." },
  { title: "Ödemeyi Tamamlayın", desc: "Kredi kartı veya banka havalesi ile güvenli ödemenizi tamamlayın. Kurumsal müşteriler için e-faturalı ödeme imkânı mevcuttur." },
  { title: "USB Token Kargo", desc: "Kimlik doğrulama onaylandıktan sonra USB token ve kart okuyucu cihaz adresinize kargo ile gönderilir. Büyük şehirlere genellikle 1 iş günü içinde ulaşır." },
  { title: "Kurulum ve Aktivasyon", desc: "Yazılım kurulumunda teknik destek ekibimiz size adım adım rehberlik eder. Telefon veya uzaktan bağlantı ile destek verilir. Ortalama 15-20 dakika sürer." },
]

const docs = [
  "TC Kimlik Numarası (yabancı uyruklular için pasaport)",
  "Geçerli e-posta adresi",
  "Cep telefonu numarası (SMS doğrulama için)",
  "Kargo adresi (e-posta veya telefon üzerinden bildirilir)",
  "Kurumsal başvurularda: vergi numarası ve şirket unvanı",
]

const faqs = [
  { question: "e-Devlet şifrem yoksa e-imza alabilir miyim?", answer: "Evet. e-Devlet şifresi olmadan da kimlik doğrulama yapılabilir. PTT şubelerinden e-Devlet şifresi alarak veya yüz yüze kimlik doğrulama yöntemiyle başvurunuzu tamamlayabilirsiniz." },
  { question: "E-imza başvurusu ne kadar sürer?", answer: "Online form doldurma yaklaşık 5-10 dakika sürer. e-Devlet üzerinden kimlik doğrulama anlık olarak gerçekleşir. USB token kargo süresi 1-3 iş günüdür. Kurulumu da dahil ettiğinizde toplam süreç 2-4 iş günüdür." },
  { question: "E-imza için ofise gelmem gerekiyor mu?", answer: "Hayır. Tüm süreç online olarak tamamlanabilir. e-Devlet üzerinden kimlik doğrulama yapıldıktan sonra USB token adresinize kargo ile gönderilir. Kurulum için de uzaktan teknik destek sağlanmaktadır." },
  { question: "Kurumsal ve bireysel e-imza arasında fark nedir?", answer: "Bireysel e-imza gerçek kişilere aittir ve kişinin kimliğini temsil eder. Kurumsal başvurularda vergi numarası bilgisi de sertifikaya eklenir ancak imzalayan yine şahıs olur. Şirket adına otomatik belge imzalama için ayrıca e-mühür gerekir." },
  { question: "Eski USB tokenimi tekrar kullanabilir miyim?", answer: "Sertifika yenileme durumunda mevcut USB tokeniniz çoğunlukla tekrar kullanılabilir. Yeni sertifika aynı token'a yüklenir. Ancak token'ın marka ve modeline göre uyumluluk kontrol edilmesi gerekebilir." },
]

export default function EImzaNasilAlinirPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "E-İmza Nasıl Alınır?", description: "E-imza başvuru rehberi", url: `${siteConfig.url}/blog/e-imza-nasil-alinir/`, datePublished: "2026-01-20" })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "E-İmza Nasıl Alınır?", url: `${siteConfig.url}/blog/e-imza-nasil-alinir/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "E-İmza Nasıl Alınır?" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">20 Ocak 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-İmza Nasıl Alınır? Adım Adım Başvuru Rehberi</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">E-imza almak, sandığınızdan çok daha kolay. Doğru adımları takip ettiğinizde tüm süreç birkaç iş günü içinde tamamlanıyor ve herhangi bir devlet kurumuna gitmenize gerek kalmıyor. Bu rehberde başvurudan aktivasyona kadar her şeyi ayrıntılı anlattık.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Almak İçin Ne Gerekiyor?</h2>
            <p className="text-muted-foreground">E-imza başvurusu yapmak için gereken bilgi ve belgeler son derece azdır. Tüm belgeler online olarak işlendiği için fiziksel evrak göndermenize gerek yoktur:</p>
            <ul className="space-y-2 mt-4">
              {docs.map((d) => (
                <li key={d} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">E-İmza Alma Adımları</h2>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Kimlik Doğrulama Yöntemleri</h2>
            <p className="text-muted-foreground">E-imza başvurusunun en kritik adımı kimlik doğrulamadır. Kimliğinizin gerçekten size ait olduğunu kanıtlamak için üç farklı yöntem mevcuttur:</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">1. e-Devlet Üzerinden Kimlik Doğrulama (Önerilen)</h3>
            <p className="text-muted-foreground">En hızlı ve en pratik yöntemdir. e-Devlet şifrenizle giriş yaparak başvuruyu tamamlayabilirsiniz. Ek belge göndermenize gerek yoktur; doğrulama anlık gerçekleşir. e-Devlet şifreniz yoksa PTT şubelerinden veya mobil imza ile edinebilirsiniz.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">2. Uzaktan Kimlik Doğrulama (Video Görüşmesi)</h3>
            <p className="text-muted-foreground">Bazı sertifika hizmet sağlayıcıları video görüşmesiyle kimlik doğrulama imkânı sunar. Canlı bağlantıda kimlik kartınızı göstererek kısa bir görüşme yaparsınız. e-Devlet şifreniz olmayan kullanıcılar için iyi bir alternatiftir.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">3. Yüz Yüze Kimlik Doğrulama</h3>
            <p className="text-muted-foreground">Sertifika hizmet sağlayıcısının yetkili noktalarında kimlik kartınızla başvuru yapabilirsiniz. Bu yöntem biraz daha uzun sürebilir ancak e-Devlet şifresi olmayan veya teknik süreçte yardım almak isteyenler için uygundur.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1, 2 veya 3 Yıllık Paket — Hangisini Seçmeli?</h2>
            <p className="text-muted-foreground">Paket seçiminde en çok sorulan sorulardan biri budur. İşte değerlendirmenize yardımcı olacak bilgiler:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold border">Paket</th>
                    <th className="p-3 text-left font-semibold border">Avantaj</th>
                    <th className="p-3 text-left font-semibold border">Dezavantaj</th>
                    <th className="p-3 text-left font-semibold border">Kimlere Uygun</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1 Yıllık", "Düşük başlangıç maliyeti", "Yıllık yenileme gerekir", "Deneme amaçlı kullanım"],
                    ["2 Yıllık", "Orta vadeli ekonomi", "Orta maliyet", "Düzenli kullanıcılar"],
                    ["3 Yıllık", "En düşük birim fiyat", "Yüksek başlangıç", "Profesyonel / yoğun kullanım"],
                  ].map(([p, a, d, k]) => (
                    <tr key={p}>
                      <td className="p-3 border font-medium">{p}</td>
                      <td className="p-3 border text-muted-foreground">{a}</td>
                      <td className="p-3 border text-muted-foreground">{d}</td>
                      <td className="p-3 border text-muted-foreground">{k}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">Mali müşavirler, avukatlar ve e-imzayı düzenli kullananlar için <strong>3 yıllık paket</strong> en mantıklı seçimdir. Birim maliyet en düşük olup 3 yıl boyunca yenileme zahmetiyle uğraşmazsınız.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Kurulumu Nasıl Yapılır?</h2>
            <p className="text-muted-foreground">USB token elinize ulaştıktan sonra kurulum için şu adımları izleyin:</p>
            <ol className="text-muted-foreground mt-4 space-y-3 list-decimal list-inside">
              <li><strong>Sürücü Kurulumu:</strong> Sertifika sağlayıcısının web sitesinden USB token sürücüsünü indirin ve yükleyin. Windows 10/11 ve macOS için farklı sürümler mevcuttur.</li>
              <li><strong>USB Token Bağlantısı:</strong> Token'ı bilgisayarın USB portuna takın. Cihaz tanındığında sistem tepkisi verir. Bazı token'larda kart okuyucu ayrı bir birime bağlanır.</li>
              <li><strong>PIN Kodu Belirleme:</strong> İlk kullanımda PIN kodunuzu belirleyin. PIN kodu en az 6 karakter olmalı; üç kez yanlış girilirse token kilitlenir.</li>
              <li><strong>Tarayıcı Eklentisi:</strong> e-Devlet ve GİB gibi sistemler için tarayıcı eklentisi kurulması gerekir. Chrome ve Firefox için eklentiler sertifika sağlayıcısının sitesinde mevcuttur.</li>
              <li><strong>Test İmzalama:</strong> Kurulum tamamlandıktan sonra bir test belgesi imzalayarak sistemin çalıştığını doğrulayın.</li>
            </ol>

            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800"><strong>Dikkat:</strong> Kurulum sırasında sorun yaşarsanız teknik destek ekibimizi arayın. Uzaktan bağlantı yöntemiyle kurulum desteği sağlanmaktadır. Çoğu sorun 15-30 dakika içinde çözülmektedir.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Teslimat Süresi Ne Kadar?</h2>
            <p className="text-muted-foreground">Kimlik doğrulama onaylandıktan sonra USB token ve kart okuyucu kargo ile gönderilir. Teslimat süreleri şehre göre değişir:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li><strong>İstanbul, Ankara, İzmir:</strong> Genellikle 1 iş günü</li>
              <li><strong>Büyükşehirler:</strong> 1-2 iş günü</li>
              <li><strong>İlçe ve küçük şehirler:</strong> 2-3 iş günü</li>
              <li><strong>Sakarya (Merkez):</strong> Elden teslim ve aynı gün kurulum seçeneği</li>
            </ul>
            <p className="text-muted-foreground mt-4">Uzaktan aktivasyon seçeneğinde ise USB token yerine yazılım tabanlı yöntemler kullanılabilir; bu durumda kargo beklemenize gerek kalmaz.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Kurumsal ve Toplu E-İmza Başvurusu</h2>
            <p className="text-muted-foreground">Şirketinizin birden fazla çalışanı için e-imza alacaksanız toplu başvuru yapabilirsiniz. Toplu başvurularda önemli avantajlar söz konusudur:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>3 ve üzeri başvurularda kurumsal indirim uygulanır</li>
              <li>Tüm çalışanlar için tek seferinde kimlik doğrulama koordinasyonu sağlanır</li>
              <li>Toplu kurulum ve aktivasyon desteği verilir</li>
              <li>Faturalı ödeme (e-fatura) imkânı mevcuttur</li>
            </ul>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-2">💡 Hızlı Başvuru İpucu</h3>
              <p className="text-sm text-muted-foreground">e-Devlet şifrenizi hazırlayın ve 2-3 yıllık paket alın. Başvuru formunu doldurun, e-Devlet üzerinden kimliğinizi doğrulayın, ödemeyi tamamlayın. USB token 1-3 iş günü içinde kapınıza gelir. Tüm bu işlemleri öğle molasında bile tamamlayabilirsiniz.</p>
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
            <h2 className="text-xl font-bold text-foreground mb-6">İlgili Makaleler</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
                { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
                { label: "Mali Müşavir E-İmza", href: "/blog/mali-musavir-e-imza-rehberi" },
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

      <CtaSection title="Hemen Başvurun" subtitle="Formu doldurun, aynı gün aktivasyon yapalım." />
    </>
  )
}
