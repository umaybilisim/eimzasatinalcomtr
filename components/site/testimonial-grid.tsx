import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Mali Müşavir",
    city: "İstanbul",
    text: "3 yıldır e-imzamı bu hizmetten alıyorum. Hızlı aktivasyon ve sorunsuz teknik destek için teşekkürler.",
    rating: 5,
  },
  {
    name: "Fatma Kaya",
    role: "Avukat",
    city: "Ankara",
    text: "KEP adresimi de buradan aldım. İşlem çok hızlı oldu ve her soruma anında yanıt verdiler.",
    rating: 5,
  },
  {
    name: "Mehmet Demir",
    role: "KOBİ Sahibi",
    city: "İzmir",
    text: "Kurumsal e-imza için birden fazla personelimize aldık. Fiyat performans açısından çok memnunuz.",
    rating: 5,
  },
  {
    name: "Elif Şahin",
    role: "Serbest Muhasebeci",
    city: "Bursa",
    text: "E-imza yenileme işlemimi de buradan yaptım. Hem eski imzamı hem yenisini aynı anda hallettim.",
    rating: 5,
  },
  {
    name: "Ali Çelik",
    role: "Yazılım Geliştirici",
    city: "İzmir",
    text: "Zaman damgası API'si için mükemmel. RFC 3161 uyumlu entegrasyon çok kolay oldu.",
    rating: 5,
  },
  {
    name: "Zeynep Arslan",
    role: "Eczacı",
    city: "Konya",
    text: "E-devlet işlemleri için e-imza aldım. Telefon desteği çok yardımcı oldu, kurulum sorunsuz.",
    rating: 5,
  },
]

export function TestimonialGrid() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Müşterilerimiz Ne Diyor?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Binlerce memnun müşterimizden bazı yorumlar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl border p-6 flex flex-col gap-4 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} — {t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
