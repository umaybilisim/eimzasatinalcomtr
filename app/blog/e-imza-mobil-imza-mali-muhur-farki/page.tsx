import type { Metadata } from "next"
import { pageTitle, ogArticle } from "@/lib/seo"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"
import { AuthorByline, AuthorBox } from "@/components/blog/author-byline"
import { Sources } from "@/components/blog/sources"
import { blogSources } from "@/lib/blog-sources"

const SLUG = "e-imza-mobil-imza-mali-muhur-farki"
const URL = `${siteConfig.url}/blog/${SLUG}/`
const TITLE = "E-İmza, Mobil İmza ve Mali Mühür Farkı: Hangisini Almalı?"
const DESC = "E-imza, mobil imza ve mali mühür arasındaki farklar: kime verilir, nerede kullanılır, hukuki geçerliliği nedir? Karşılaştırma tablosu ve seçim rehberi."
const PUBLISHED = "2026-10-03"

export const metadata: Metadata = {
  title: pageTitle(TITLE),
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { ...ogArticle(PUBLISHED), title: TITLE, description: DESC, url: URL },
}

const faqs = [
  { question: "Mobil imza ile e-imza aynı hukuki geçerliliğe sahip mi?", answer: "Evet. BTK'ya göre mobil elektronik imzanın e-imzadan tek farkı, imza aracı olarak telefondaki SIM kartın kullanılmasıdır. Mevzuat mobil imzayı da kapsadığı için mobil imza, güvenli elektronik imzanın sağladığı hukuki geçerliliği sağlar." },
  { question: "Şirketim e-fatura için mali mühür mü e-imza mı kullanmalı?", answer: "Anonim ve limited şirketler gibi tüzel kişiler e-fatura, e-arşiv ve e-defter uygulamalarında mali mühür kullanır. Şahıs işletmeleri ise bu uygulamalarda nitelikli elektronik imza (e-imza) kullanabilir." },
  { question: "Mali mühürle sözleşme imzalanabilir mi?", answer: "Mali mühür bir kişiye değil kuruma ait olduğu ve GİB e-belge uygulamaları için düzenlendiği için kişisel imza yerine geçmez. Şirket adına sözleşme imzalayacak yetkilinin kendi e-imzasını veya mobil imzasını kullanması gerekir." },
  { question: "E-Devlet şifresi elektronik imza sayılır mı?", answer: "Hayır. E-Devlet şifresi bir kimlik doğrulama yöntemidir; belgeye ıslak imzayla aynı hukuki sonucu doğuran bir imza atmaz. Islak imza yerine geçen imza için nitelikli elektronik sertifikaya dayanan e-imza veya mobil imza gerekir." },
  { question: "Hem e-imzam hem mobil imzam olabilir mi?", answer: "Evet. İkisi de kişiye özel nitelikli elektronik sertifikadır ve aynı kişi adına ayrı ayrı alınabilir. Bilgisayar başında yoğun çalışanlar e-imzayı, sahada veya hareket halinde imza atanlar mobil imzayı tercih eder; bazı kullanıcılar ikisini birlikte kullanır." },
]

const rows: [string, string, string, string][] = [
  ["Kime verilir?", "Gerçek kişiye", "Gerçek kişiye", "Tüzel kişiye (kuruma)"],
  ["İmza aracı", "USB token veya akıllı kart + kart okuyucu", "Mobil imza uyumlu SIM kart", "USB token veya akıllı kart"],
  ["Hukuki sonuç", "Islak imzayla aynı (5070 sayılı Kanun)", "Islak imzayla aynı (5070 sayılı Kanun)", "Kişisel imza yerine geçmez; kurum adına e-belge mühürler"],
  ["Tipik kullanım", "UYAP, EKAP, e-Devlet, GİB, sözleşmeler", "e-Devlet ve mobil imzayı destekleyen sistemler", "e-Fatura, e-Arşiv, e-Defter"],
  ["Nereden alınır?", "BTK yetkili elektronik sertifika hizmet sağlayıcısı", "GSM operatörü ve anlaşmalı sertifika sağlayıcısı", "Kurum adına başvuruyla (GİB e-belge uygulamaları için)"],
  ["Taşınabilirlik", "Token'ı taktığınız bilgisayarda", "Telefonunuz yanınızdaysa her yerde", "Mührün kurulu olduğu sistemde"],
]

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({ title: TITLE, description: DESC, url: URL, datePublished: PUBLISHED })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "E-İmza, Mobil İmza ve Mali Mühür", url: URL }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "E-İmza, Mobil İmza ve Mali Mühür" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">8 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">E-İmza, Mobil İmza ve Mali Mühür: Farkları Nelerdir, Hangisini Almalısınız?</h1>
          <AuthorByline updated={PUBLISHED} />
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <div className="rounded-xl border-l-4 border-primary bg-secondary/50 p-5">
              <p className="text-sm font-semibold text-foreground">Kısa cevap</p>
              <p className="mt-1 text-muted-foreground">E-imza ve mobil imza, kişiye ait ve ıslak imzayla aynı hukuki sonucu doğuran nitelikli elektronik imzalardır; aralarındaki fark yalnızca imza aracıdır (USB token ya da telefondaki SIM kart). Mali mühür ise bir kişiye değil şirkete aittir ve e-fatura, e-arşiv, e-defter gibi GİB uygulamalarında kullanılır. Şirketler genellikle her ikisine de ihtiyaç duyar.</p>
            </div>

            <nav aria-label="İçindekiler" className="mt-8 rounded-xl border p-5">
              <p className="font-semibold text-foreground">İçindekiler</p>
              <ol className="mt-2 list-decimal list-inside text-sm text-muted-foreground space-y-1">
                <li><a href="#e-imza" className="hover:text-primary">E-imza nedir, kimler kullanır?</a></li>
                <li><a href="#mobil-imza" className="hover:text-primary">Mobil imza nedir, e-imzadan farkı ne?</a></li>
                <li><a href="#mali-muhur" className="hover:text-primary">Mali mühür nedir, kimler için gerekli?</a></li>
                <li><a href="#karsilastirma" className="hover:text-primary">Karşılaştırma tablosu</a></li>
                <li><a href="#hangisi" className="hover:text-primary">Hangisini almalısınız?</a></li>
                <li><a href="#sss" className="hover:text-primary">Sıkça sorulan sorular</a></li>
              </ol>
            </nav>

            <h2 id="e-imza" className="text-2xl font-bold text-foreground mt-10 mb-4">E-imza nedir, kimler kullanır?</h2>
            <p className="text-muted-foreground"><strong>E-imza, bir kişiye ait nitelikli elektronik sertifikayla atılan ve 5070 sayılı Elektronik İmza Kanunu'na göre ıslak imzayla aynı hukuki sonucu doğuran imzadır.</strong> Sertifika, BTK tarafından yetkilendirilmiş bir elektronik sertifika hizmet sağlayıcısı tarafından kimlik doğrulamasından sonra düzenlenir ve bir USB token ya da akıllı kart üzerinde taşınır. Geçerlilik süresi genellikle 1 ile 3 yıl arasındadır.</p>
            <p className="text-muted-foreground mt-4">E-imza; UYAP'ta dava evrakı gönderen avukatlar, EKAP'ta e-teklif veren firmalar, YDS'de işlem yapan yapı denetimciler, e-reçete düzenleyen hekimler ve e-Devlet ile GİB işlemlerini kendi bilgisayarından yapmak isteyen herkes tarafından kullanılır. İmza kişiye özeldir; şirket adına işlem yapan her yetkilinin kendi e-imzası olmalıdır.</p>

            <h2 id="mobil-imza" className="text-2xl font-bold text-foreground mt-10 mb-4">Mobil imza nedir, e-imzadan farkı ne?</h2>
            <p className="text-muted-foreground"><strong>Mobil imza, imzanın USB token yerine telefondaki özel bir SIM kartla oluşturulduğu nitelikli elektronik imzadır ve hukuki sonucu e-imzayla aynıdır.</strong> BTK'nın açıklamasına göre iki imza arasındaki tek fark, imza oluşturma aracı olarak mobil cihazdaki SIM kartın kullanılmasıdır.</p>
            <p className="text-muted-foreground mt-4">Mobil imzanın en büyük avantajı taşınabilirliktir: token ve kart okuyucu gerekmez, imza işlemi telefona gelen onay ve şifreyle tamamlanır. Buna karşılık her elektronik sistem mobil imzayı desteklemeyebilir ve mobil imza GSM hattınıza bağlıdır; hat değişikliği veya SIM kart kaybı durumunda yeniden işlem gerekir. İşlem yapacağınız sistemin (UYAP, EKAP, kurum portalı vb.) mobil imzayı kabul edip etmediğini başvurudan önce kontrol etmenizi öneririz.</p>

            <h2 id="mali-muhur" className="text-2xl font-bold text-foreground mt-10 mb-4">Mali mühür nedir, kimler için gerekli?</h2>
            <p className="text-muted-foreground"><strong>Mali mühür, bir kişiye değil şirkete (tüzel kişiye) ait olan ve GİB'in e-fatura, e-arşiv ve e-defter gibi e-belge uygulamalarında belgeleri kurum adına mühürlemek için kullanılan elektronik sertifikadır.</strong> Anonim ve limited şirketler bu uygulamalara geçtiklerinde mali mühür kullanır.</p>
            <p className="text-muted-foreground mt-4">Mali mühür bir yetkilinin kişisel imzası değildir; bu yüzden sözleşme imzalamak, UYAP veya EKAP'ta işlem yapmak ya da e-Devlet'e kişisel giriş için kullanılamaz. Şahıs işletmeleri ise e-fatura ve e-arşiv işlemlerinde mali mühür yerine nitelikli elektronik imza kullanabilir. Bu ayrımın ayrıntısını <Link href="/blog/e-fatura-icin-e-imza-gerekli-mi/" className="text-primary underline">E-Fatura İçin E-İmza Gerekli mi?</Link> yazımızda anlattık.</p>

            <h2 id="karsilastirma" className="text-2xl font-bold text-foreground mt-10 mb-4">E-imza, mobil imza ve mali mühür karşılaştırması</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold text-foreground border">Özellik</th>
                    <th className="p-3 text-left font-semibold text-foreground border">E-İmza</th>
                    <th className="p-3 text-left font-semibold text-foreground border">Mobil İmza</th>
                    <th className="p-3 text-left font-semibold text-foreground border">Mali Mühür</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([k, a, b, c]) => (
                    <tr key={k}>
                      <th scope="row" className="p-3 text-left font-medium text-foreground border bg-secondary/30">{k}</th>
                      <td className="p-3 border text-muted-foreground">{a}</td>
                      <td className="p-3 border text-muted-foreground">{b}</td>
                      <td className="p-3 border text-muted-foreground">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="hangisi" className="text-2xl font-bold text-foreground mt-10 mb-4">Hangisini almalısınız?</h2>
            <p className="text-muted-foreground"><strong>Seçim, kimin adına ve hangi sistemde işlem yaptığınıza bağlıdır.</strong> En sık karşılaşılan durumlar için önerimiz şöyle:</p>
            <ul className="text-muted-foreground mt-4 space-y-3 list-disc list-inside">
              <li><strong>Avukat, mali müşavir, yapı denetimci veya hekimseniz:</strong> E-imza. Mesleki sistemlerin büyük bölümü e-imzayla sorunsuz çalışır; mobil imzayı destek amacıyla ayrıca düşünebilirsiniz.</li>
              <li><strong>Anonim veya limited şirketseniz:</strong> e-Fatura, e-arşiv ve e-defter için mali mühür; şirket adına sözleşme imzalayan ve kamu sistemlerinde işlem yapan her yetkili için ayrıca kişisel e-imza.</li>
              <li><strong>Şahıs işletmesiyseniz:</strong> E-imza. Hem e-Devlet ve GİB işlemlerinde hem de e-fatura kapsamına girdiğinizde faturalarınızı kesmek için kullanabilirsiniz.</li>
              <li><strong>Sahada çalışıyor, bilgisayardan uzakta imza atıyorsanız:</strong> Kullandığınız sistem destekliyorsa mobil imza pratik bir tercihtir.</li>
              <li><strong>İhaleye giriyorsanız:</strong> E-imza. Teklif son gününden önce kurulumu yapıp test etmeyi unutmayın.</li>
            </ul>

            <div className="mt-10 p-6 rounded-xl bg-blue-50 border border-blue-200">
              <p className="font-semibold text-foreground">E-imzanız mı yok?</p>
              <p className="mt-1 text-sm text-muted-foreground">1, 2 ve 3 yıllık e-imza paketlerini KDV dahil fiyatlarıyla <Link href="/e-imza/" className="text-primary underline">e-imza sayfamızda</Link> inceleyebilir, kurulumu telefon veya WhatsApp üzerinden birlikte yapabilirsiniz.</p>
              <Link href="/e-imza/" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">E-imza paketlerini gör <ArrowRight className="h-4 w-4" /></Link>
            </div>

            <h2 id="sss" className="text-2xl font-bold text-foreground mt-10 mb-4">Sıkça sorulan sorular</h2>
            {faqs.map((f) => (
              <div key={f.question} className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">{f.question}</h3>
                <p className="mt-2 text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Sources items={blogSources[SLUG]} />
          <AuthorBox />
        </div>
      </article>

      <CtaSection title="E-İmzanızı Hemen Alın" subtitle="TÜBİTAK onaylı e-imza, KDV dahil şeffaf fiyat, uzaktan kurulum desteği." />
    </>
  )
}
