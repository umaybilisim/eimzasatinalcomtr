import { ShieldCheck, Building2, MapPin, Receipt, Headphones, BadgeCheck } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

// Yalnızca doğrulanabilir bilgiler. Gerçek müşteri yorumları toplandığında (Google İşletme Profili vb.)
// bu bölüme kaynağıyla birlikte eklenmelidir; uydurma yorum/puan kullanılmaz.
export const trustItems = [
  {
    icon: ShieldCheck,
    title: "TÜBİTAK ve BTK onaylı ürünler",
    desc: "Sattığımız e-imza, KEP ve zaman damgası ürünleri, 5070 sayılı Elektronik İmza Kanunu kapsamında BTK tarafından yetkilendirilmiş sağlayıcılara aittir.",
  },
  {
    icon: Building2,
    title: "15 yılı aşkın yazılım deneyimi",
    desc: "Umay Tüm Bilişim olarak 15 yılı aşkın süredir DİA ERP ve e-dönüşüm çözümlerinde, 5 yıldır e-imza, KEP ve zaman damgasında hizmet veriyoruz.",
  },
  {
    icon: MapPin,
    title: "Fiziksel ofis: Sakarya",
    desc: "Meydan54 AVM B1 Blok K:2 D:84, Erenler / Sakarya. Sakarya'da randevuyla elden teslim, diğer illere kargo ve uzaktan kurulum.",
  },
  {
    icon: Receipt,
    title: "Faturalı, resmî şirket",
    desc: `Tüm satışlar ${siteConfig.legalName} adına faturalandırılır.`,
  },
  {
    icon: BadgeCheck,
    title: "Şeffaf, KDV dahil fiyat",
    desc: "E-imza paketlerinin fiyatları sitede KDV dahil yazılıdır; sonradan eklenen gizli ücret yoktur.",
  },
  {
    icon: Headphones,
    title: "Gerçek kişiyle destek",
    desc: `${siteConfig.workingHours} telefon (${siteConfig.phone}) ve WhatsApp üzerinden kurulum ve kullanım desteği.`,
  },
]

export function TrustGrid({ heading = "Neden eimzasatinal.com.tr?" }: { heading?: string }) {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{heading}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Kim olduğumuzu, nerede olduğumuzu ve nasıl çalıştığımızı açıkça yazıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((t) => (
            <div key={t.title} className="bg-white rounded-xl border p-6 flex flex-col gap-3 shadow-sm">
              <t.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="font-semibold text-foreground">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
