export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "e-imza-nedir",
    title: "E-İmza Nedir? Hukuki Geçerliliği ve Kullanım Alanları",
    excerpt: "5070 sayılı Elektronik İmza Kanunu kapsamında e-imzanın tanımı, nasıl çalıştığı, hukuki dayanağı ve kimler tarafından kullanılabileceğine dair kapsamlı rehber.",
    date: "2026-01-15",
    readTime: "8 dk",
    category: "E-İmza",
  },
  {
    slug: "e-imza-nasil-alinir",
    title: "E-İmza Nasıl Alınır? Adım Adım Başvuru Rehberi",
    excerpt: "E-imza başvuru süreci, gerekli belgeler, e-Devlet üzerinden başvuru ve aktivasyon adımlarını anlatan eksiksiz rehber.",
    date: "2026-01-20",
    readTime: "10 dk",
    category: "E-İmza",
  },
  {
    slug: "kep-nedir-ne-ise-yarar",
    title: "KEP Nedir, Ne İşe Yarar? Kayıtlı Elektronik Posta Rehberi",
    excerpt: "Kayıtlı Elektronik Posta'nın tanımı, normal e-postadan farkları, kimlere zorunlu olduğu ve nasıl kullanıldığına dair kapsamlı rehber.",
    date: "2026-01-25",
    readTime: "7 dk",
    category: "KEP",
  },
  {
    slug: "zaman-damgasi-nedir",
    title: "Zaman Damgası Nedir? TÜBİTAK Onaylı Belge Güvencesi",
    excerpt: "Zaman damgasının tanımı, RFC 3161 standardı, kullanım alanları, hukuki geçerliliği ve API entegrasyonu hakkında bilgiler.",
    date: "2026-02-01",
    readTime: "6 dk",
    category: "Zaman Damgası",
  },
  {
    slug: "mali-musavir-e-imza-rehberi",
    title: "Mali Müşavir ve Muhasebeciler İçin E-İmza Rehberi 2026",
    excerpt: "Mali müşavir ve muhasebecilerin hangi işlemlerde e-imza kullandığı, hangi kurumlarla entegrasyon sağladığı ve nasıl başvuru yapacağına dair özel rehber.",
    date: "2026-02-10",
    readTime: "9 dk",
    category: "E-İmza",
  },
  {
    slug: "e-imza-yenileme",
    title: "E-İmza Yenileme — Süresi Dolanlar İçin Adım Adım Rehber",
    excerpt: "E-imza sertifikasının süresi dolmadan veya dolduktan sonra nasıl yenileneceği, yenileme süreci ve dikkat edilmesi gerekenler.",
    date: "2026-02-15",
    readTime: "7 dk",
    category: "E-İmza",
  },
]
