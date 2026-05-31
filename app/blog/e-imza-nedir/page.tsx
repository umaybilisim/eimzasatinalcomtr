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
  { question: "E-imza ıslak imzayla aynı mı?", answer: "Hukuki olarak evet. 5070 sayılı Elektronik İmza Kanunu'na göre nitelikli elektronik imza, ıslak imza ile eşdeğer hukuki geçerliliğe sahiptir. Mahkemelerde, kamu kurumlarında ve ticari ilişkilerde ıslak imza yerine geçer." },
  { question: "E-imza sahte yapılabilir mi?", answer: "Hayır. E-imza kriptografik algoritmalar kullanan ve sertifika otoritesi tarafından onaylanan bir yöntemdir. Özel anahtar USB token üzerinde saklandığı için fiziksel erişim olmadan kopyalanamaz. Sahte yapılması teknik olarak mümkün değildir." },
  { question: "E-imza süresi dolunca eski belgeler geçersiz mi olur?", answer: "Hayır. Süresi dolan e-imzayla daha önce imzaladığınız belgeler geçerliliğini korur. Yalnızca yeni belge imzalayamazsınız. Zaman damgası eklenmişse uzun vadeli arşivlerde de geçerlilik devam eder." },
  { question: "E-imza hangi bilgisayarlarda çalışır?", answer: "E-imza Windows (7/10/11) ve macOS işletim sistemlerinde çalışır. USB token için gerekli sürücüler ve tarayıcı eklentisi kurulduğunda Chrome, Firefox ve Edge tarayıcılarında sorunsuz kullanılabilir." },
  { question: "Birden fazla bilgisayarda e-imza kullanabilir miyim?", answer: "Evet. USB token'ı farklı bilgisayarlara takarak kullanabilirsiniz. Her bilgisayarda gerekli sürücülerin kurulu olması gerekir. Token'daki özel anahtar bilgisayara kopyalanmaz, her imzalama işlemi doğrudan token üzerinden gerçekleşir." },
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
            <span className="text-sm text-slate-400">15 Ocak 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-İmza Nedir? Hukuki Geçerliliği ve Kullanım Alanları</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Elektronik imza (e-imza), dijital belgelerin kimin tarafından imzalandığını, ne zaman imzalandığını ve imza sonrası belge üzerinde değişiklik yapılıp yapılmadığını kriptografik yöntemlerle kanıtlayan bir güvenlik mekanizmasıdır. Türkiye'de milyonlarca bireysel kullanıcı ve yüz binlerce şirket e-imzayı aktif olarak kullanmaktadır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmzanın Hukuki Dayanağı</h2>
            <p className="text-muted-foreground">Türkiye'de elektronik imzanın hukuki çerçevesi, <strong>5070 sayılı Elektronik İmza Kanunu</strong> ile belirlenmiştir. 23 Ocak 2004 tarihinde yürürlüğe giren bu kanuna göre nitelikli elektronik imza, ıslak (elle atılan) imza ile aynı hukuki geçerliliğe sahiptir. Kanun, imzanın hangi koşullarda geçerli sayılacağını, sertifika hizmet sağlayıcılarının yükümlülüklerini ve imzanın ispat gücünü ayrıntılı biçimde düzenlemektedir.</p>
            <p className="text-muted-foreground mt-4">Bu düzenleme, Avrupa Birliği'nin <strong>eIDAS (910/2014) tüzüğü</strong> ile de büyük ölçüde uyumludur. Bu uyum, Türk şirketlerinin Avrupa'daki iş ortaklarıyla e-imzalı belge alışverişini mümkün kılmaktadır. Nitelikli elektronik sertifikalar yalnızca <strong>TÜBİTAK BİLGEM</strong> tarafından akredite edilmiş sertifika hizmet sağlayıcıları aracılığıyla verilebilir.</p>
            <p className="text-muted-foreground mt-4">Türk hukuku, kağıt ortamındaki el yazısı imzanın zorunlu tutulduğu durumlar dışında nitelikli e-imzanın her alanda kullanılmasına olanak tanımaktadır. Mahkeme süreçlerinde, vergi beyannamelerinde, ticari sözleşmelerde ve kamu ihale süreçlerinde e-imza hukuki delil niteliği taşımaktadır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Nasıl Çalışır?</h2>
            <p className="text-muted-foreground">E-imza, <strong>asimetrik şifreleme (PKI — Public Key Infrastructure)</strong> teknolojisini kullanır. Bu teknoloji, birbirine matematiksel olarak bağlı iki anahtar üzerine kuruludur: biri yalnızca sizde bulunan özel anahtar, diğeri herkese açık olan genel anahtar.</p>
            <p className="text-muted-foreground mt-4">İmzalama süreci şu adımlardan oluşur:</p>
            <ol className="text-muted-foreground mt-4 space-y-2 list-decimal list-inside">
              <li>İmzalanacak belge için benzersiz bir matematiksel özet (hash) oluşturulur. Belgede tek bir karakter bile değişse hash tamamen farklı olur.</li>
              <li>Bu özet, USB token üzerinde güvenle saklanan <strong>özel anahtarınız</strong> ile şifrelenir. Özel anahtar hiçbir zaman token dışına çıkmaz.</li>
              <li>Şifreli özet ve sertifika bilgileri belgeye eklenir — bu bütüne "elektronik imza" denir.</li>
              <li>Karşı taraf veya mahkeme, sertifika otoritesinden alınan <strong>genel anahtar</strong> ile imzanın orijinalliğini ve belgenin değiştirilmediğini doğrulayabilir.</li>
              <li>Sertifika otoritesi (TÜBİTAK onaylı), imzanın gerçekten size ait olduğunu garanti eder.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Türleri: Elektronik İmza ve Nitelikli Elektronik İmza</h2>
            <p className="text-muted-foreground">5070 sayılı kanun iki tür elektronik imzayı tanımlar ve bunlar arasında önemli bir hukuki fark bulunmaktadır:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold text-foreground border">Özellik</th>
                    <th className="p-3 text-left font-semibold text-foreground border">Elektronik İmza</th>
                    <th className="p-3 text-left font-semibold text-foreground border">Nitelikli Elektronik İmza</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hukuki geçerlilik", "Sınırlı", "Islak imzayla eşdeğer"],
                    ["Sertifika gereksinimi", "Zorunlu değil", "TÜBİTAK onaylı sertifika şart"],
                    ["Donanım", "Gerekmeyebilir", "USB token (güvenli cihaz)"],
                    ["Kullanım alanı", "İç süreçler", "Kamu, hukuki, ticari"],
                  ].map(([o, e, n]) => (
                    <tr key={o}>
                      <td className="p-3 border text-muted-foreground font-medium">{o}</td>
                      <td className="p-3 border text-muted-foreground">{e}</td>
                      <td className="p-3 border text-muted-foreground">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">Günlük hayatta ve resmi işlemlerde kullanılan e-imza, <strong>nitelikli elektronik imza</strong>dır. Bu nedenle "e-imza" denildiğinde kast edilen genellikle nitelikli elektronik imzadır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile Neler Yapabilirsiniz?</h2>
            <p className="text-muted-foreground">Nitelikli elektronik imza, devlet sistemleri ve ticari hayatın pek çok alanında kullanılmaktadır:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                "e-Devlet üzerinden resmi başvurular",
                "Vergi beyannameleri (GİB sistemi)",
                "SGK bildirimleri ve işlemler",
                "e-Fatura ve e-Arşiv sistemi",
                "e-Deftere geçiş işlemleri",
                "UYAP üzerinden hukuki işlemler",
                "Banka ve finans işlemleri",
                "EKAP kamu ihale başvuruları",
                "Ticari sözleşmeler imzalama",
                "Tapu ve kadastro işlemleri",
                "TÜRMOB sistemi işlemleri",
                "Gümrük ve ihracat belgeleri",
              ].map((u) => (
                <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{u}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Kimler İçin Zorunlu?</h2>
            <p className="text-muted-foreground">Bazı meslekler ve işlem türleri için e-imza kullanımı <strong>yasal zorunluluktur</strong>. Bu gruplar için e-imza olmadan ilgili işlemler yapılamamaktadır:</p>
            <ul className="text-muted-foreground mt-4 space-y-3 list-disc list-inside">
              <li><strong>Serbest Muhasebeci Mali Müşavirler (SMMM) ve Yeminli Mali Müşavirler (YMM):</strong> GİB e-beyanname sistemi için zorunlu.</li>
              <li><strong>Avukatlar:</strong> UYAP (Ulusal Yargı Ağı Bilişim Sistemi) üzerinden dava ve yazışmalar için zorunlu.</li>
              <li><strong>e-Fatura mükellefleri:</strong> Belirli ciro eşiğini aşan şirketler e-fatura kesmek zorunda.</li>
              <li><strong>Kamu ihalelerine katılacak firmalar:</strong> EKAP sistemi üzerinden ihale başvurusu için zorunlu.</li>
              <li><strong>Yapı denetimcileri:</strong> YDS sistemi üzerinden proje onayı için zorunlu.</li>
              <li><strong>Gümrük müşavirleri:</strong> e-Gümrük beyanname sistemi için zorunlu.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile Elektronik Mühür Arasındaki Fark</h2>
            <p className="text-muted-foreground">E-imza, <strong>gerçek kişilere</strong> (bireylere) ait bireysel bir sertifikadır. Türk vatandaşı veya yabancı uyruklu kişi, kimlik doğrulaması yaparak e-imza alabilir.</p>
            <p className="text-muted-foreground mt-4"><strong>Elektronik mühür (e-mühür)</strong> ise tüzel kişilere, yani şirketlere ve kurumlara ait kurumsal bir sertifikadır. Şirketler kendi adlarına belge imzalayacaksa e-mühür kullanır. Örneğin bir şirketten onlarca çalışanın imzalaması gereken toplu belgeler için e-mühür daha pratiktir.</p>
            <p className="text-muted-foreground mt-4">Çoğu durumda bireysel e-imza yeterlidir. Ancak kurumsal işlemlerin yoğun olduğu durumlarda hem bireysel e-imza hem e-mühür birlikte kullanılabilir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Nasıl Saklanır? USB Token Nedir?</h2>
            <p className="text-muted-foreground">Nitelikli elektronik imza sertifikası ve özel anahtar, <strong>USB token</strong> adı verilen özel bir donanım cihazında saklanır. USB token görünüş olarak sıradan bir flash belleğe benzer; ancak içinde güvenli bir mikroişlemci ve kriptografik modül bulunur.</p>
            <p className="text-muted-foreground mt-4">USB token'ın temel özellikleri:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Özel anahtar token dışına çıkamaz, kopyalanamaz</li>
              <li>PIN kodu koruması — yanlış PIN denemelerinde kilitlenir</li>
              <li>CC EAL4+ veya daha yüksek güvenlik sertifikasyonu</li>
              <li>Farklı bilgisayarlarda kullanılabilir</li>
              <li>Genellikle kart okuyucu ile birlikte gelir</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza Sertifikası Ne Kadar Süre Geçerlidir?</h2>
            <p className="text-muted-foreground">Türkiye'de e-imza sertifikaları genellikle <strong>1, 2 veya 3 yıllık</strong> paketlerle sunulmaktadır. Süre sona erdiğinde imza yenilenmelidir. Süresi dolan e-imzayla yeni belge imzalanamaz; ancak daha önce atılmış imzalar geçerliliğini korur.</p>
            <p className="text-muted-foreground mt-4">Yenileme sürecini kolaylaştırmak için <strong>2 veya 3 yıllık paket</strong> almak önerilir. Bu sayede hem yıllık başvuru zahmetinden kurtulur hem de birim maliyet düşer. Süre dolmadan 30-60 gün önce yenileme başvurusu yapılması tavsiye edilir.</p>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-3">Özet: E-İmza Hakkında Bilinmesi Gereken 6 Temel Nokta</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Islak imzayla aynı hukuki geçerliliğe sahip, mahkemede delil niteliği taşır</li>
                <li>TÜBİTAK onaylı sertifika hizmet sağlayıcısından alınması zorunlu</li>
                <li>USB token adı verilen özel donanım cihazında saklanır</li>
                <li>1, 2 veya 3 yıllık paketlerle alınır; uzun paket daha avantajlı</li>
                <li>Süre dolunca yenilenebilir; eski imzalar geçerliliğini korur</li>
                <li>e-Devlet, GİB, UYAP, EKAP gibi sistemlerde zorunlu kullanım alanı vardır</li>
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
            <h2 className="text-xl font-bold text-foreground mb-6">İlgili Makaleler</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
                { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
                { label: "Mali Müşavir E-İmza Rehberi", href: "/blog/mali-musavir-e-imza-rehberi" },
                { label: "KEP Nedir?", href: "/blog/kep-nedir-ne-ise-yarar" },
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
