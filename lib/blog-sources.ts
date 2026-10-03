import type { Source } from "@/components/blog/sources"

// Tüm bağlantılar 2026-10-03 tarihinde erişilebilir olduğu (HTTP 200) doğrulandı.
const S = {
  k5070: { title: "5070 sayılı Elektronik İmza Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5070&MevzuatTur=1&MevzuatTertip=5", publisher: "Mevzuat Bilgi Sistemi" },
  ttk: { title: "6102 sayılı Türk Ticaret Kanunu (md. 18/3)", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6102&MevzuatTur=1&MevzuatTertip=5", publisher: "Mevzuat Bilgi Sistemi" },
  tebligat: { title: "7201 sayılı Tebligat Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=7201&MevzuatTur=1&MevzuatTertip=5", publisher: "Mevzuat Bilgi Sistemi" },
  btkEimza: { title: "Elektronik İmza — Genel Bilgi", url: "https://www.btk.gov.tr/elektronik-imza-genel-bilgi", publisher: "Bilgi Teknolojileri ve İletişim Kurumu (BTK)" },
  btkEimzaSss: { title: "E-İmza ile İlgili Sıkça Sorulan Sorular", url: "https://www.btk.gov.tr/e-imza-ile-ilgili-sikca-sorulan-sorular", publisher: "BTK" },
  btkEimzaMevzuat: { title: "Elektronik İmza Mevzuatı", url: "https://www.btk.gov.tr/elektronik-imza-mevzuati", publisher: "BTK" },
  btkEshs: { title: "Elektronik Sertifika Hizmet Sağlayıcıları listesi", url: "https://www.btk.gov.tr/elektronik-sertifika-hizmet-saglayicilari", publisher: "BTK" },
  btkKep: { title: "Kayıtlı Elektronik Posta — Genel Bilgi", url: "https://www.btk.gov.tr/kayitli-elektronik-posta-genel-bilgi", publisher: "BTK" },
  btkKepSss: { title: "KEP'e İlişkin Sıkça Sorulan Sorular", url: "https://www.btk.gov.tr/kep-e-iliskin-sikca-sorulan-sorular", publisher: "BTK" },
  btkKephs: { title: "Kayıtlı Elektronik Posta Hizmet Sağlayıcıları", url: "https://www.btk.gov.tr/kayitli-elektronik-posta-hizmet-saglayicilar", publisher: "BTK" },
  btkKepMevzuat: { title: "Kayıtlı Elektronik Posta Mevzuatı", url: "https://www.btk.gov.tr/kayitli-elektronik-posta-mevzuat", publisher: "BTK" },
  kamusmZd: { title: "Zaman Damgası", url: "https://kamusm.bilgem.tubitak.gov.tr/urunler/zaman_damgasi/", publisher: "TÜBİTAK BİLGEM Kamu Sertifikasyon Merkezi" },
  rfc3161: { title: "RFC 3161 — Time-Stamp Protocol (TSP)", url: "https://www.rfc-editor.org/rfc/rfc3161", publisher: "IETF" },
  eidas: { title: "910/2014 sayılı AB Tüzüğü (eIDAS)", url: "https://eur-lex.europa.eu/eli/reg/2014/910/oj", publisher: "EUR-Lex" },
  gibEbelge: { title: "e-Fatura Uygulaması Hakkında", url: "https://ebelge.gib.gov.tr/efaturahakkinda.html", publisher: "Gelir İdaresi Başkanlığı e-Belge" },
  gib: { title: "Gelir İdaresi Başkanlığı", url: "https://www.gib.gov.tr/", publisher: "GİB" },
  edevlet: { title: "e-Devlet Kapısı", url: "https://www.turkiye.gov.tr/", publisher: "Cumhurbaşkanlığı Dijital Dönüşüm Ofisi" },
  uyap: { title: "UYAP Avukat Portalı", url: "https://avukat.uyap.gov.tr/", publisher: "Adalet Bakanlığı" },
  ekap: { title: "Elektronik Kamu Alımları Platformu (EKAP)", url: "https://ekap.kik.gov.tr/EKAP/", publisher: "Kamu İhale Kurumu" },
  yds: { title: "Yapı Denetim Sistemi (YDS)", url: "https://yds.csb.gov.tr/", publisher: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı" },
} satisfies Record<string, Source>

export const blogSources: Record<string, Source[]> = {
  "e-imza-nedir": [S.k5070, S.btkEimza, S.btkEshs, S.btkEimzaSss, S.eidas],
  "e-imza-nasil-alinir": [S.btkEshs, S.k5070, S.btkEimzaSss, S.edevlet],
  "kep-nedir-ne-ise-yarar": [S.btkKep, S.btkKepSss, S.btkKephs, S.btkKepMevzuat, S.ttk, S.tebligat],
  "zaman-damgasi-nedir": [S.k5070, S.kamusmZd, S.rfc3161, S.btkEimzaMevzuat],
  "mali-musavir-e-imza-rehberi": [S.k5070, S.gib, S.gibEbelge, S.edevlet, S.btkEshs],
  "e-imza-yenileme": [S.btkEimzaSss, S.btkEshs, S.k5070],
  "yapi-denetimcisi-e-imza-rehberi": [S.yds, S.k5070, S.btkEshs],
  "sakarya-e-imza": [S.btkEshs, S.k5070, S.edevlet, S.yds],
  "e-fatura-icin-e-imza-gerekli-mi": [S.gibEbelge, S.gib, S.k5070, S.btkEshs],
  "e-imza-mobil-imza-mali-muhur-farki": [S.btkEimzaSss, S.k5070, S.btkEshs, S.gibEbelge, S.uyap, S.ekap, S.edevlet],
}
