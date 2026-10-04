import { siteConfig } from "@/lib/site-config"

export interface Author {
  slug: string
  name: string
  jobTitle: string
  shortBio: string
  bio: string[]
  sameAs: string[]
  image?: string
}

// Yazar bilgileri yalnızca kullanıcının verdiği bilgilerden oluşur; eğitim, ödül vb. eklenmeden önce teyit alınmalı.
export const authors: Record<string, Author> = {
  "aycan-firtin": {
    slug: "aycan-firtin",
    name: "Aycan Fırtın",
    jobTitle: "Umay Bilişim Kurucu Ortağı",
    shortBio: "Umay Tüm Bilişim kurucu ortağı. 20 yılı aşkın süredir yazılım ve e-dönüşüm sektöründe; e-imza, KEP ve zaman damgası süreçlerinde kurumlara danışmanlık veriyor.",
    bio: [
      "Aycan Fırtın, Sakarya merkezli Umay Tüm Bilişim'in kurucu ortağıdır ve 20 yılı aşkın süredir yazılım ve e-dönüşüm sektörünün içindedir.",
      "Umay Bilişim bünyesinde DİA ERP yazılımı ve e-dönüşüm çözümlerinin satış, eğitim ve destek süreçlerini yürüttükten sonra bu deneyimi e-imza, KEP ve zaman damgası hizmetlerine taşıdı. Mali müşavirlerden yapı denetim firmalarına, avukatlardan sanayi şirketlerine kadar farklı sektörlerdeki kullanıcıların e-imza seçimi, kurulumu ve günlük kullanımında karşılaştığı sorunları yakından tanır.",
      "eimzasatinal.com.tr blogundaki yazılar, bu saha deneyiminden yola çıkarak kullanıcıların en sık sorduğu soruları sade ve doğru bilgiyle yanıtlamak amacıyla hazırlanır.",
    ],
    sameAs: ["https://www.linkedin.com/in/aycanfirtin"],
  },
}

export const DEFAULT_AUTHOR = authors["aycan-firtin"]

export const authorUrl = (a: Author) => `${siteConfig.url}/yazar/${a.slug}/`
