import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Zaman Damgası Nedir? TÜBİTAK Onaylı Belge Güvencesi",
  description: "Zaman damgası nedir, nasıl çalışır, hangi amaçlarla kullanılır ve ne kadar maliyetlidir? RFC 3161 uyumlu TÜBİTAK onaylı zaman damgası rehberi.",
  alternates: { canonical: `${siteConfig.url}/blog/zaman-damgasi-nedir/` },
  openGraph: { title: "Zaman Damgası Nedir?", description: "RFC 3161 uyumlu TÜBİTAK onaylı zaman damgası rehberi.", url: `${siteConfig.url}/blog/zaman-damgasi-nedir/` },
}

const faqs = [
  { question: "Zaman damgası olmadan ne gibi riskler var?", answer: "Dijital belgelerin ne zaman oluşturulduğu tartışma konusu olabilir. Bilgisayar saati kolayca değiştirilebilir, dosya tarihleri manipüle edilebilir. TÜBİTAK onaylı zaman damgası, bu tartışmaları ortadan kaldıran bağımsız ve değiştirilemez bir kanıttır." },
  { question: "Zaman damgası e-imzayla aynı şey mi?", answer: "Hayır, bunlar farklı teknolojilerdir. E-imza belgenin kimliğini ve değiştirilmediğini kanıtlarken, zaman damgası belgenin belirli bir tarihte var olduğunu kanıtlar. İkisi birlikte kullanıldığında maksimum güvence sağlanır." },
  { question: "Zaman damgası token veya donanım gerektiriyor mu?", answer: "Hayır. Zaman damgası tamamen yazılım tabanlıdır ve API üzerinden kullanılır. USB token gibi donanım cihazı gerekmez. Kontör satın alınır ve her damgalama işleminde 1 kontör harcanır." },
  { question: "Zaman damgasının geçerlilik süresi var mı?", answer: "Zaman damgasının kendisi kalıcıdır ve belgenin zaman kanıtını sonsuza kadar sağlar. Ancak kullanılan algoritmalar zaman içinde güncellenebilir. Uzun vadeli arşivleme için belgenin yeniden damgalanması veya LTA (Long Term Archival) formatı kullanılması önerilir." },
  { question: "Zaman damgasını Excel veya Word belgelerine ekleyebilir miyim?", answer: "Evet. PDF belgelerine en kolay entegrasyon sağlanır. Word ve Excel belgelerini PDF'e çevirerek zaman damgası eklenebilir. Doğrudan Office entegrasyonu için yazılım eklentileri de mevcuttur." },
]

export default function ZamanDamgasiNedirPage() {
  return (
    <>
      <JsonLd data={articleSchema({ title: "Zaman Damgası Nedir?", description: "Zaman damgası rehberi", url: `${siteConfig.url}/blog/zaman-damgasi-nedir/`, datePublished: "2026-02-01" })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }, { name: "Zaman Damgası Nedir?", url: `${siteConfig.url}/blog/zaman-damgasi-nedir/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Zaman Damgası Nedir?" }]} />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-200 border border-teal-500/30">Zaman Damgası</span>
            <span className="text-sm text-slate-400">1 Şubat 2026 · 10 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance">Zaman Damgası Nedir? TÜBİTAK Onaylı Belge Güvencesi</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">Zaman damgası, bir dijital verinin belirli bir zaman anında var olduğunu ve o tarihten bu yana değiştirilmediğini kanıtlayan elektronik kayıttır. TÜBİTAK BİLGEM TSA tarafından sertifikalandırılmış zaman damgaları, Türk hukukunda ve uluslararası platformlarda geçerli hukuki delil niteliği taşır.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Zaman Damgası Neden Gereklidir?</h2>
            <p className="text-muted-foreground">Dijital ortamda zaman ile ilgili önemli bir sorun vardır: bilgisayar saatleri kolayca değiştirilebilir ve dosya tarihleri manipüle edilebilir. Bir belgenin gerçekten hangi tarihte oluşturulduğu veya imzalandığı, ilerleyen dönemde uyuşmazlık konusu olabilir.</p>
            <p className="text-muted-foreground mt-4">Bu sorunu çözmek için güvenilir bir üçüncü tarafın — TÜBİTAK gibi devlet tarafından akredite edilmiş bir kurumun — belgenin belirli bir zamanda var olduğunu kriptografik olarak onaylaması gerekir. İşte zaman damgası tam olarak bunu yapar.</p>
            <p className="text-muted-foreground mt-4">Zaman damgası; patent başvurusu, hukuki uyuşmazlık, arşiv doğrulaması ve regülatif uyumluluk gibi pek çok kritik alanda belge bütünlüğünün tartışmasız kanıtını sağlar.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Zaman Damgası Nasıl Çalışır?</h2>
            <p className="text-muted-foreground">Teknik süreç, matematiksel açıdan son derece sağlam bir temele dayanır:</p>
            <ol className="text-muted-foreground mt-4 space-y-3 list-decimal list-inside">
              <li><strong>Hash Oluşturma:</strong> Damgalanacak belge için kriptografik bir özet (hash) değeri hesaplanır. Belgede tek bir karakter bile değişse hash tamamen farklı olur.</li>
              <li><strong>TSA'ya Gönderme:</strong> Bu hash değeri (belgenin kendisi değil, yalnızca özeti) TÜBİTAK Zaman Damgalama Yetkilisi'ne (TSA) gönderilir. Belge içeriği hiçbir zaman dışarıya çıkmaz.</li>
              <li><strong>Zaman Kaydı:</strong> TSA, o anki kesin saati (atom saatiyle uyumlu) hash'e ekler ve bu birleşimi kendi özel anahtarıyla dijital olarak imzalar.</li>
              <li><strong>Token Oluşturma:</strong> Bu imzalı yapıya "zaman damgası token" denir ve belgeyle birlikte saklanır. RFC 3161 standardını izler.</li>
              <li><strong>Doğrulama:</strong> İleride herhangi bir taraf, TSA'nın genel anahtarını kullanarak hem belgenin değiştirilmediğini hem de damgalanma zamanını doğrulayabilir.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">RFC 3161 Standardı Nedir?</h2>
            <p className="text-muted-foreground"><strong>RFC 3161</strong>, IETF (İnternet Mühendisliği Görev Gücü) tarafından yayımlanan ve zaman damgalama protokolünü tanımlayan uluslararası standarttır. Bu standart;</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Zaman damgası isteği ve yanıt formatını tanımlar</li>
              <li>TSA ile istemci arasındaki iletişim protokolünü belirler</li>
              <li>Farklı sistemler arasında uyumluluk sağlar</li>
              <li>AB eIDAS tüzüğü ve Türk mevzuatıyla uyumludur</li>
            </ul>
            <p className="text-muted-foreground mt-4">TÜBİTAK BİLGEM TSA, RFC 3161 standardını tam olarak uygulayan ve Türkiye'nin en güvenilir zaman damgalama otoritesidir. Bu sertifikasyona sahip zaman damgaları hem Türk mahkemelerinde hem de Avrupa kurumlarında geçerliliğini korur.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Zaman Damgasının Kullanım Alanları</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { title: "Patent ve Fikri Mülkiyet", desc: "Bir fikir veya tasarımın belirli tarihte size ait olduğunu kanıtlamak için. Patent başvurusu öncesi ön tescil amacıyla kullanılır." },
                { title: "Hukuki Belgeler", desc: "Sözleşmelerin hangi tarihte imzalandığını tartışmasız biçimde kanıtlar. Kira sözleşmeleri, iş akitleri ve ticari anlaşmalar için." },
                { title: "Yazılım ve Kaynak Kodu", desc: "Yazılımın belirli versiyonunun ne zaman geliştirildiğini kanıtlar. Telif hakkı ve lisanslama uyuşmazlıklarında kritik delil." },
                { title: "e-Fatura Arşivleme", desc: "Vergi mevzuatı gereği e-faturaların uzun vadeli arşivlenmesinde zaman bütünlüğü sağlar." },
                { title: "Dijital Arşiv", desc: "Kurumların resmi belgelerini uzun vadeli saklarken değiştirilmediğini kanıtlamaları için. ISO 14721 uyumlu arşivlerde kullanılır." },
                { title: "API Entegrasyonu", desc: "Yazılımlara doğrudan entegre edilerek toplu ve otomatik damgalama yapılabilir. ERP ve DMS sistemleriyle uyumluluk." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border bg-white shadow-sm">
                  <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Kontör Sistemi ve Fiyatlandırma</h2>
            <p className="text-muted-foreground">Zaman damgası hizmeti <strong>kontör (kredi) sistemi</strong> ile çalışır. Her belge damgalama işlemi 1 kontör harcar. Kontörler toplu paket halinde satın alınır.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left font-semibold border">Paket</th>
                    <th className="p-3 text-left font-semibold border">Kontör</th>
                    <th className="p-3 text-left font-semibold border">Geçerlilik</th>
                    <th className="p-3 text-left font-semibold border">Kimlere Uygun</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Başlangıç", "100 kontör", "1 yıl", "Bireysel ve küçük ofis"],
                    ["Profesyonel", "500 kontör", "1 yıl", "KOBİ ve hukuk büroları"],
                    ["Kurumsal", "1.000 kontör", "1 yıl", "Yoğun kullanım ve API"],
                  ].map(([p, k, g, u]) => (
                    <tr key={p}>
                      <td className="p-3 border font-medium">{p}</td>
                      <td className="p-3 border text-muted-foreground">{k}</td>
                      <td className="p-3 border text-muted-foreground">{g}</td>
                      <td className="p-3 border text-muted-foreground">{u}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">Kontörler satın alındıktan itibaren <strong>1 yıl süre</strong> ile geçerlidir. Yıl sonuna kadar kullanılmayan kontörler geçerliliğini yitirir. Bu nedenle kullanım sıklığınıza göre uygun paket seçimi önemlidir.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Zaman Damgası API Entegrasyonu</h2>
            <p className="text-muted-foreground">Büyük hacimli belge damgalama işlemleri için API entegrasyonu tercih edilir. Bu yöntemle:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li>Yazılımınız veya ERP sisteminiz otomatik olarak belge damgalayabilir</li>
              <li>Toplu damgalama süreçleri saniyeler içinde tamamlanır</li>
              <li>İnsan hatası riski ortadan kalkar</li>
              <li>Damgalama log kayıtları otomatik tutulur</li>
              <li>REST veya SOAP API desteğiyle mevcut sistemlere entegrasyon kolaydır</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Zaman Damgası ve E-İmza Birlikte Kullanımı</h2>
            <p className="text-muted-foreground">E-imza ve zaman damgası birbirini tamamlayan iki teknolojidir. Birlikte kullanıldığında sağladıkları güvence:</p>
            <ul className="text-muted-foreground mt-4 space-y-2 list-disc list-inside">
              <li><strong>E-imza:</strong> Belgeyi kimin imzaladığını ve imzadan sonra değiştirilmediğini kanıtlar</li>
              <li><strong>Zaman damgası:</strong> İmzanın ne zaman atıldığını ve imzadan sonra değiştirilmediğini kanıtlar</li>
              <li><strong>İkisi birlikte:</strong> Kim + ne zaman + içerik bütünlüğü — üçü birden kanıtlanmış, tartışmasız bir belge</li>
            </ul>
            <p className="text-muted-foreground mt-4">Uzun vadeli arşivleme ve kritik hukuki belgeler için her iki teknolojinin birlikte kullanılması en güvenli yaklaşımdır.</p>

            <div className="mt-10 p-6 rounded-xl bg-secondary border border-primary/20">
              <h3 className="font-bold text-foreground mb-2">Zaman Damgası Olmadan Ne Risk Var?</h3>
              <p className="text-sm text-muted-foreground">Dijital belgelerin ne zaman oluşturulduğu uyuşmazlıklarda kolaylıkla tartışma konusu olabilir. Sistem saati manipüle edilebilir, dosya tarihleri değiştirilebilir. Rakibiniz aynı tasarımı bir gün önce yaratmış gibi gösterebilir. TÜBİTAK onaylı zaman damgası, bu tartışmaları kesin biçimde kapatan bağımsız bir güvencedir.</p>
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
                { label: "Zaman Damgası Satın Al", href: "/zaman-damgasi" },
                { label: "E-İmza Nedir?", href: "/blog/e-imza-nedir" },
                { label: "KEP Nedir?", href: "/blog/kep-nedir-ne-ise-yarar" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaSection title="Zaman Damgası Paketinizi Seçin" subtitle="Kontörlerinizi hemen alın, bugün aktive edin." />
    </>
  )
}
