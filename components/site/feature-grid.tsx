import { ShieldCheck, Zap, Clock, Headphones, Award, Globe } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "TÜBİTAK & BTK Onaylı",
    desc: "Devlet kurumlarınca onaylanmış, yasal çerçevede faaliyet gösteren sertifika hizmeti.",
  },
  {
    icon: Zap,
    title: "Aynı Gün Aktivasyon",
    desc: "Başvurunuzu tamamladıktan sonra genellikle aynı iş günü içinde e-imzanız aktive edilir.",
  },
  {
    icon: Clock,
    title: "Hızlı Başvuru Süreci",
    desc: "e-Devlet üzerinden kolayca başvurun. Evrak karmaşası yok, uzun bekleme yok.",
  },
  {
    icon: Headphones,
    title: "7/24 Teknik Destek",
    desc: "Telefon, WhatsApp ve e-posta ile her zaman yanınızdayız. Aktivasyon sorunlarınızı çözüyoruz.",
  },
  {
    icon: Award,
    title: "Uygun Fiyat Garantisi",
    desc: "Piyasanın en rekabetçi fiyatlarında 1, 2 veya 3 yıllık paket seçenekleri.",
  },
  {
    icon: Globe,
    title: "Tüm Sektörlere Uygun",
    desc: "Mali müşavir, avukat, KOBİ, esnaf ve bireysel kullanıcılar için özel çözümler.",
  },
]

export function FeatureGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Neden <span className="text-primary">eimzasatinal.com.tr</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Güvenli, hızlı ve uygun fiyatlı dijital imza hizmetleri ile yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-xl border bg-card hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
