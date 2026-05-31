import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Mali Müşavir ve Muhasebeciler İçin E-İmza Rehberi 2026",
  description: "Mali müşavir, SMMM ve YMM'ler için e-imza zorunlulukları, kullanım alanları, başvuru süreci ve hangi e-imzayı seçmeleri gerektiğine dair rehber.",
  alternates: { canonical: `${siteConfig.url}/blog/mali-musavir-e-imza-rehberi/` },
  openGraph: { title: "Mali Müşavir E-İmza Rehberi", description: "SMMM ve YMM için kapsamlı e-imza rehberi.", url: `${siteConfig.url}/blog/mali-musavir-e-imza-rehberi/` },
}

const useCases = [
  "e-Beyanname (Gelir İdaresi Başkanlığı)",
  "e-SGK bildirimleri",
  "e-Mutabakat sistemi",
  "e-Fatura ve e-Arşiv bildirimleri",
  "e-Defter kullanımı",
  "KDV iade talepleri",
  "Ba/Bs bildirim formları",
  "İşyeri kurulumu ve tescili",
  "Vergi dairesi yazışmaları",
  "TÜRMOB sistemi işlemleri",
  "Sosyal güvenlik bildirimleri",
  "Gelir Vergisi beyannameleri",
]

const faqs = [
  { question: "SMMM olarak hangi e-imzayı almalıyım?", answer: "Bireysel nitelikli elektronik imza yeterlidir. TÜBİTAK onaylı sertifika ile GİB, SGK ve TÜRMOB sistemlerinde sorunsuz çalışır. Büronuzda birden fazla çalışan varsa her biri için ayrı e-imza gerekmektedir." },
  { question: "E-imza olmadan GİB sistemine girebilir miyim?", answer: "Belirli işlemler için e-Devlet şifresiyle giriş mümkündür. Ancak e-beyanname ve pek çok resmi bildirim için nitelikli elektronik imza zorunludur. Mesleği icra eden SMMM ve YMM'ler için e-imza fiilen zorunlu hale gelmiştir." },
  { question: "E-imzam sona erdiğinde beyanname veremez miyim?", answer: "Süresi dolan e-imzayla yeni beyanname gönderemezsiniz. Bu nedenle süre dolmadan 30-60 gün önce yenileme başvurusu yapmanız kritiktir. Özellikle beyanname dönemlerine denk gelmesi işlerinizi ciddi biçimde aksatabilir." },
  { question: "Birden fazla mükellef için tek e-imzayla işlem yapabilir miyim?", answer: "Evet. GİB sisteminde vekaletname veya sözleşme yetkilendirmesi yapıldıktan sonra tek e-imzanızla birden fazla mükellef adına işlem yapabilirsiniz. Bu, meslek mensubunun normal çalışma şeklidir." },
  { question: "Toplu e-imza alımında nasıl bir indirim sağlanıyor?", answer: "3 ve üzeri başvurularda kurumsal fiyat uygulanır. 5 kişilik bir büro için toplu alım yapıldığında hem birim başı tasarruf sağlanır hem de tüm aktivasyonlar koordineli şekilde yapılır." },
]

export default function MaliMusavirEImzaPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "Mali Müşavir E-İmza Rehberi", description: "SMMM ve YMM için e-imza rehberi", url: `${siteConfig.url}/blog/mali-musavir-e-imza-rehberi/`, datePublished: "2026-02-10" })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "Mali Müşavir E-İmza Rehberi", url: `${siteConfig.url}/blog/mali-musavir-e-imza-rehberi/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Mali Müşavir E-İmza Rehberi" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-500/30">E-İmza</span>
            <span className="text-sm text-slate-400">10 Şubat 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">Mali Müşavir ve Muhasebeciler İçin E-İmza Rehberi 2026</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Mali müşavir, SMMM (Serbest Muhasebeci Mali Müşavir) ve YMM (Yeminli Mali Müşavir) meslek mensupları için e-imza artık bir tercih değil, mesleki zorunluluktur. GİB'in dijital dönüşümü ve e-beyanname zorunluluğuyla birlikte e-imzasız muhasebe bürosu işletemez hale gelindi. Bu rehberde tüm detayları ele aldık.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Mali Müşavirlere E-İmza Neden Zorunlu?</h2>
            <p className="text-muted-foreground"><strong>Gelir İdaresi Başkanlığı (GİB)</strong>, e-beyanname sistemi aracılığıyla meslek mensuplarının elektronik ortamda beyanname göndermesini zorunlu hale getirmiştir. Bu sistem, e-imza veya mali mühür (Gelir İdaresi Başkanlığı'nın özel sistemi) ile çalışmaktadır.</p>
            <p className="text-muted-foreground mt-4">Nitelikli elektronik imza olmadan:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>e-Beyanname sistemine giriş yapılamaz</li>
              <li>Mükellef adına elektronik bildirim gönderilemez</li>
              <li>e-Deftere geçiş yapılamaz</li>
              <li>SGK e-bildirim sistemine erişim kısıtlıdır</li>
              <li>TÜRMOB üzerinden yapılan resmi işlemler tamamlanamaz</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile Yapabileceğiniz İşlemler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {useCases.map((u) => (
                <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {u}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">SMMM ve YMM İçin Hangi E-İmzayı Seçmeli?</h2>
            <p className="text-muted-foreground">Mali müşavirler için standart <strong>bireysel nitelikli elektronik imza</strong> yeterlidir. Bu imza, tüm GİB, SGK ve TÜRMOB sistemleriyle uyumludur.</p>
            <p className="text-muted-foreground mt-4">Paket seçiminde dikkat edilmesi gerekenler:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold border">Paket</th>
                    <th className="p-3 text-left font-semibold border">Maliyet</th>
                    <th className="p-3 text-left font-semibold border">Avantaj</th>
                    <th className="p-3 text-left font-semibold border">Öneri</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1 Yıllık", "Düşük başlangıç", "Kısa taahhüt", "Yeni meslek mensubu"],
                    ["2 Yıllık", "Orta", "2 yıl güvence", "Aktif kullanıcı"],
                    ["3 Yıllık", "En ekonomik birim", "Uzun vadeli güvence", "Aktif büro — tavsiye"],
                  ].map(([p, m, a, o]) => (
                    <tr key={p}>
                      <td className="p-3 border font-medium">{p}</td>
                      <td className="p-3 border text-muted-foreground">{m}</td>
                      <td className="p-3 border text-muted-foreground">{a}</td>
                      <td className="p-3 border text-muted-foreground">{o}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">Aktif bir muhasebe bürosu için <strong>3 yıllık paket açık ara en akıllı seçimdir.</strong> Yıllık yenileme zahmetinden kurtulur, beyanname dönemlerinde sürpriz sertifika sona ermesiyle karşılaşmazsınız.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">E-İmza ile GİB Sistemine Bağlanma</h2>
            <p className="text-muted-foreground">GİB e-beyanname sistemine e-imzayla ilk kez bağlanmak için şu adımları izleyin:</p>
            <ol className="text-muted-foreground mt-4 space-y-3 list-decimal list-inside">
              <li><strong>Sürücü Kurulumu:</strong> USB token sürücüsünü ve GİB uygulamasını bilgisayarınıza yükleyin. Güncel sürümü GİB'in resmi web sitesinden indirin.</li>
              <li><strong>Token Bağlantısı:</strong> USB token'ı bilgisayara takın. Kart okuyucu varsa önce okuyucuyu, ardından token'ı takın.</li>
              <li><strong>GİB Portala Giriş:</strong> ebeyanname.gib.gov.tr adresine gidin ve "e-İmza ile Giriş" seçeneğini seçin.</li>
              <li><strong>PIN Girişi:</strong> Token PIN kodunuzu girin. Yanlış PIN ile üç deneme hakkınız vardır; ardından token kilitlenir.</li>
              <li><strong>Mükellef Yetkilendirmesi:</strong> Sistem sizi tanıdıktan sonra mükellefleri ekleyerek onlar adına işlem yapabilirsiniz.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Beyanname Dönemlerinde Dikkat Edilmesi Gerekenler</h2>
            <p className="text-muted-foreground">Nisan ve Ekim ayları en yoğun beyanname dönemleridir. Bu dönemlerde e-imza sorunları yaşamamak için önerileri:</p>
            <ul className="text-muted-foreground mt-4 space-y-3 list-disc list-inside">
              <li><strong>Sertifika bitiş tarihini kontrol edin:</strong> Beyanname dönemine 30 günden az süre kaldıysa acilen yenileme başvurusu yapın.</li>
              <li><strong>Token'ı güvenli saklayın:</strong> Beyanname döneminde token kaybolursa ciddi gecikme yaşanabilir. Token'ı ofis kasasında veya güvenli çekmeceyle muhafaza edin.</li>
              <li><strong>PIN kodunu hatırlayın:</strong> Üç yanlış denemede token kilitlenir; kilit açma işlemi ek süre alır.</li>
              <li><strong>Yedek bilgisayara sürücü yükleyin:</strong> Ana bilgisayar arızalandığında yedek sistemde hızlıca çalışabilmek için önceden hazırlık yapın.</li>
              <li><strong>Teknik destek hattını kaydedin:</strong> Sorun yaşadığınızda hızla ulaşabileceğiniz destek numarası size zaman kazandırır.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Birden Fazla Müşaviriniz İçin Toplu E-İmza</h2>
            <p className="text-muted-foreground">Muhasebe büronuzda birden fazla çalışan GİB sistemini kullanıyorsa her biri için ayrı e-imza gerekmektedir. Toplu başvurularda önemli avantajlar söz konusudur:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>3 ve üzeri başvurularda kurumsal indirim uygulanır</li>
              <li>Tüm çalışanlar aynı gün aktive edilebilir</li>
              <li>Kurumsal fatura (e-fatura) imkânı mevcuttur</li>
              <li>Beyanname dönemi koordinasyonu için toplu aktivasyon planlaması yapılır</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Mali Müşavirlerin E-İmzayı Sık Kullandığı Sistemler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { sys: "GİB e-Beyanname", desc: "Gelir, KDV, Muhtasar, Kurumlar Vergisi beyannameleri" },
                { sys: "GİB e-Mutabakat", desc: "Mükelleflerin borç/alacak mutabakat sistemi" },
                { sys: "SGK e-Bildirim", desc: "İşçi girişi/çıkışı ve aylık prim bildirgeleri" },
                { sys: "e-Defter", desc: "Yevmiye ve kebir defterlerinin elektronik tutulması" },
                { sys: "TÜRMOB", desc: "Meslek odası üyelik ve bildirim işlemleri" },
                { sys: "e-Devlet", desc: "Müvekkil adına kamu işlemleri" },
              ].map((item) => (
                <div key={item.sys} className="p-4 rounded-xl border bg-white shadow-sm">
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.sys}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-2">Mali Müşavirler İçin E-İmza Özeti</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Bireysel nitelikli elektronik imza yeterli — e-mühür gerekmez</li>
                <li>3 yıllık paket en avantajlı seçim</li>
                <li>Beyanname dönemlerinden önce sertifika bitiş tarihini kontrol edin</li>
                <li>5 kişi ve üzeri bürolarda toplu alımda kurumsal indirim uygulanır</li>
                <li>GİB, SGK, TÜRMOB ve e-Devlet sistemlerinin tümüyle uyumlu</li>
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
                { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
                { label: "İletişim", href: "/iletisim" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="Mali Müşavirler İçin Özel Teklif" subtitle="Toplu başvuru ve kurumsal paketler için bizi arayın." />
    </>
  )
}
