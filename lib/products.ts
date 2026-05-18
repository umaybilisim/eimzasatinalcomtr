export type ProductSlug = "e-imza" | "kep" | "zaman-damgasi"

export interface Package {
  id: string
  name: string
  duration: string
  price: string
  priceNote: string
  features: string[]
  highlighted?: boolean
}

export interface Product {
  slug: ProductSlug
  name: string
  shortName: string
  tagline: string
  description: string
  icon: string
  color: string
  packages: Package[]
  useCases: string[]
  faqIds: string[]
}

export const products: Product[] = [
  {
    slug: "e-imza",
    name: "Nitelikli Elektronik İmza",
    shortName: "E-İmza",
    tagline: "Hukuki geçerliliği olan dijital imzanız",
    description:
      "5070 sayılı Elektronik İmza Kanunu kapsamında hukuki geçerliliği olan, TÜBİTAK tarafından onaylanmış nitelikli elektronik imza.",
    icon: "pen-tool",
    color: "blue",
    useCases: [
      "e-Devlet işlemleri",
      "Vergi beyannameleri",
      "Hukuki sözleşmeler",
      "e-Fatura & e-Arşiv",
      "SGK bildirimleri",
      "Banka işlemleri",
    ],
    faqIds: ["eimza-1", "eimza-2", "eimza-3", "eimza-4", "eimza-5"],
    packages: [
      {
        id: "eimza-1y",
        name: "1 Yıllık E-İmza",
        duration: "1 Yıl",
        price: "2.750 TL",
        priceNote: "KDV Dahil",
        features: [
          "TÜBİTAK onaylı sertifika",
          "Kart okuyucu dahil",
          "Hukuki geçerlilik",
          "e-Devlet desteği",
          "Ücretsiz kurulum desteği",
          "7/24 teknik destek",
        ],
      },
      {
        id: "eimza-2y",
        name: "2 Yıllık E-İmza",
        duration: "2 Yıl",
        price: "3.099 TL",
        priceNote: "KDV Dahil",
        features: [
          "TÜBİTAK onaylı sertifika",
          "Kart okuyucu dahil",
          "Hukuki geçerlilik",
          "e-Devlet desteği",
          "Ücretsiz kurulum desteği",
          "7/24 teknik destek",
          "En popüler seçim",
        ],
      },
      {
        id: "eimza-3y",
        name: "3 Yıllık E-İmza",
        duration: "3 Yıl",
        price: "3.750 TL",
        priceNote: "KDV Dahil",
        highlighted: true,
        features: [
          "TÜBİTAK onaylı sertifika",
          "Kart okuyucu dahil",
          "Hukuki geçerlilik",
          "e-Devlet desteği",
          "Ücretsiz kurulum desteği",
          "7/24 teknik destek",
          "En düşük yıllık maliyet",
        ],
      },
    ],
  },
  {
    slug: "kep",
    name: "Kayıtlı Elektronik Posta",
    shortName: "KEP",
    tagline: "Yasal delil niteliğinde e-posta gönderimi",
    description:
      "BTK tarafından yetkilendirilmiş KEP hizmeti. Gönderdiğiniz e-postaların yasal delil niteliği kazanmasını sağlar.",
    icon: "mail-check",
    color: "indigo",
    useCases: [
      "Resmi yazışmalar",
      "Sözleşme bildirimleri",
      "İhtar ve tebligatlar",
      "Ticari iletişim",
      "KAP bildirimleri",
      "Banka ve sigorta işlemleri",
    ],
    faqIds: ["kep-1", "kep-2", "kep-3", "kep-4"],
    packages: [
      {
        id: "kep-1y",
        name: "KEP 1 Yıl",
        duration: "1 Yıl",
        price: "Teklif Alın",
        priceNote: "İletişime Geçin",
        features: [
          "BTK yetkili KEP hizmeti",
          "Yasal delil niteliği",
          "5 GB depolama",
          "Teslim bildirimi",
          "Okundu bilgisi",
        ],
      },
      {
        id: "kep-2y",
        name: "KEP 2 Yıl",
        duration: "2 Yıl",
        price: "Teklif Alın",
        priceNote: "İletişime Geçin",
        highlighted: true,
        features: [
          "BTK yetkili KEP hizmeti",
          "Yasal delil niteliği",
          "10 GB depolama",
          "Teslim bildirimi",
          "Okundu bilgisi",
          "Uzun vadeli tasarruf",
        ],
      },
      {
        id: "kep-3y",
        name: "KEP 3 Yıl",
        duration: "3 Yıl",
        price: "Teklif Alın",
        priceNote: "İletişime Geçin",
        features: [
          "BTK yetkili KEP hizmeti",
          "Yasal delil niteliği",
          "10 GB depolama",
          "Teslim bildirimi",
          "Okundu bilgisi",
          "En avantajlı fiyat",
        ],
      },
    ],
  },
  {
    slug: "zaman-damgasi",
    name: "Zaman Damgası",
    shortName: "Zaman Damgası",
    tagline: "Belgelerinizin varlığını kanıtlayın",
    description:
      "TÜBİTAK BİLGEM TSA tarafından sağlanan zaman damgası hizmeti. Belgenizin belirli bir anda var olduğunu ve değiştirilmediğini kanıtlar.",
    icon: "clock-check",
    color: "teal",
    useCases: [
      "Dijital arşivleme",
      "Patent & fikri mülkiyet",
      "Yazılım geliştirme",
      "e-Fatura arşivi",
      "Hukuki belge güvencesi",
      "API entegrasyonu",
    ],
    faqIds: ["zd-1", "zd-2", "zd-3", "zd-4"],
    packages: [
      {
        id: "zd-100",
        name: "100 Kontör",
        duration: "100 damga",
        price: "Teklif Alın",
        priceNote: "İletişime Geçin",
        features: [
          "TÜBİTAK TSA sertifikalı",
          "RFC 3161 uyumlu",
          "API desteği",
          "1 yıl geçerlilik",
        ],
      },
      {
        id: "zd-500",
        name: "500 Kontör",
        duration: "500 damga",
        price: "Teklif Alın",
        priceNote: "İletişime Geçin",
        highlighted: true,
        features: [
          "TÜBİTAK TSA sertifikalı",
          "RFC 3161 uyumlu",
          "API desteği",
          "1 yıl geçerlilik",
          "Adet başına daha düşük maliyet",
        ],
      },
      {
        id: "zd-1000",
        name: "1000 Kontör",
        duration: "1000 damga",
        price: "Teklif Alın",
        priceNote: "İletişime Geçin",
        features: [
          "TÜBİTAK TSA sertifikalı",
          "RFC 3161 uyumlu",
          "API desteği",
          "1 yıl geçerlilik",
          "En düşük birim maliyet",
          "Kurumsal API desteği",
        ],
      },
    ],
  },
]

export function getProduct(slug: ProductSlug): Product | undefined {
  return products.find((p) => p.slug === slug)
}
