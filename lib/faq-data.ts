export interface FaqItem {
  id: string
  question: string
  answer: string
  category: "e-imza" | "kep" | "zaman-damgasi" | "genel"
}

export const faqData: FaqItem[] = [
  // E-İmza
  {
    id: "eimza-1",
    question: "E-imza nedir ve nasıl çalışır?",
    answer:
      "Nitelikli elektronik imza (e-imza), 5070 sayılı Elektronik İmza Kanunu kapsamında ıslak imza ile aynı hukuki geçerliliğe sahip dijital imzadır. Kriptografik algoritmalar kullanarak belgenizin kim tarafından, ne zaman imzalandığını kanıtlar ve imza sonrası belgede herhangi bir değişiklik yapılıp yapılmadığını tespit eder.",
    category: "e-imza",
  },
  {
    id: "eimza-2",
    question: "E-imza almak için ne gerekiyor?",
    answer:
      "E-imza almak için TC kimlik numarası, e-posta adresi ve telefon numarası yeterlidir. Başvurunuzu e-Devlet üzerinden veya kimlik doğrulama yöntemiyle tamamlayabilirsiniz. İmzanız genellikle 1-2 iş günü içinde aktive edilir.",
    category: "e-imza",
  },
  {
    id: "eimza-3",
    question: "E-imza kaç yıl süreyle geçerlidir?",
    answer:
      "E-imza sertifikaları 1, 2 veya 3 yıl süreyle geçerlidir. Süre dolmadan önce yenileme yapmanız gerekir. Süresi dolmuş sertifika ile yeni imza atamazsınız ancak daha önce attığınız imzalar geçerliliğini korur.",
    category: "e-imza",
  },
  {
    id: "eimza-4",
    question: "E-imza hangi alanlarda kullanılabilir?",
    answer:
      "E-imza; e-Devlet işlemleri, vergi beyannameleri, e-fatura, SGK bildirimleri, banka işlemleri, hukuki sözleşmeler, iş başvuruları ve resmi yazışmalarda kullanılabilir. Mali müşavirler, avukatlar ve KOBİ sahipleri için zorunlu hale gelen işlemler her geçen yıl artmaktadır.",
    category: "e-imza",
  },
  {
    id: "eimza-5",
    question: "E-imzam başka bir bilgisayarda çalışır mı?",
    answer:
      "Evet. E-imza sertifikanız USB token (akıllı kart) üzerinde taşınır. Herhangi bir bilgisayara takarak, gerekli yazılımı yükledikten sonra imzanızı kullanabilirsiniz. Sertifika bilgisayara bağlı değil, token cihazına bağlıdır.",
    category: "e-imza",
  },
  // KEP
  {
    id: "kep-1",
    question: "KEP (Kayıtlı Elektronik Posta) nedir?",
    answer:
      "KEP, gönderilen elektronik iletilerin içeriğinin, gönderim ve alım zamanının, gönderici ve alıcı bilgilerinin yasal delil niteliğinde kayıt altına alındığı e-posta sistemidir. BTK (Bilgi Teknolojileri ve İletişim Kurumu) tarafından yetkilendirilmiş KEP hizmet sağlayıcıları aracılığıyla kullanılır.",
    category: "kep",
  },
  {
    id: "kep-2",
    question: "KEP kimler için zorunludur?",
    answer:
      "Türk Ticaret Kanunu'na göre anonim şirketler, limited şirketler ve kooperatiflerin KEP adresi edinmesi zorunludur. Bunların yanı sıra KAP'a bildirim yükümlülüğü olan şirketler, banka ve sigorta şirketleri de KEP kullanmak zorundadır.",
    category: "kep",
  },
  {
    id: "kep-3",
    question: "Normal e-posta ile KEP arasındaki fark nedir?",
    answer:
      "Normal e-posta yasal delil niteliği taşımaz; gönderim, alım ve içerik kolayca değiştirilebilir. KEP'te ise tüm bu bilgiler değiştirilemez biçimde kayıt altına alınır. KEP ile gönderilen iletiler iadeli taahhütlü posta ile eşdeğer hukuki güce sahiptir.",
    category: "kep",
  },
  {
    id: "kep-4",
    question: "KEP adresini nasıl kullanabilirim?",
    answer:
      "KEP adresinizi web tarayıcısı üzerinden veya IMAP/SMTP protokolü destekleyen e-posta istemcileriyle kullanabilirsiniz. KEP mesajları güvenli sunucularda saklanır ve istenildiğinde yasal delil olarak mahkemeye sunulabilir.",
    category: "kep",
  },
  // Zaman Damgası
  {
    id: "zd-1",
    question: "Zaman damgası nedir?",
    answer:
      "Zaman damgası, bir elektronik verinin belirli bir zaman anında var olduğunu ve bu tarihten sonra değiştirilmediğini kanıtlayan elektronik kayıttır. TÜBİTAK BİLGEM TSA (Zaman Damgalama Yetkilisi) tarafından sertifikalandırılmış bir zaman damgası hukuki geçerlilik taşır.",
    category: "zaman-damgasi",
  },
  {
    id: "zd-2",
    question: "Zaman damgası hangi amaçlarla kullanılır?",
    answer:
      "Zaman damgası; dijital arşivleme, patent ve fikri mülkiyet hakları, yazılım geliştirme (commit zamanı kanıtı), e-fatura ve e-arşiv, hukuki belgelerin doğrulanması ve API entegrasyonları için yaygın olarak kullanılır.",
    category: "zaman-damgasi",
  },
  {
    id: "zd-3",
    question: "Zaman damgası kontörü nasıl çalışır?",
    answer:
      "Zaman damgası hizmeti kontör (kredi) sistemiyle çalışır. Her damgalama işlemi 1 kontör harcar. 100, 500 veya 1000 kontörlük paketler satın alabilirsiniz. Kontörleriniz 1 yıl süreyle geçerlidir.",
    category: "zaman-damgasi",
  },
  {
    id: "zd-4",
    question: "Zaman damgasını API üzerinden kullanabilir miyim?",
    answer:
      "Evet. Zaman damgası hizmetimiz RFC 3161 standardına uygun API sunar. Yazılımınıza entegre ederek otomatik damgalama yapabilirsiniz. API dokümantasyonu ve örnek kodlar için bizimle iletişime geçin.",
    category: "zaman-damgasi",
  },
  // Genel
  {
    id: "genel-1",
    question: "Sipariş verdikten sonra ne kadar sürede teslim alırım?",
    answer:
      "E-imza siparişleriniz genellikle 1-2 iş günü içinde aktive edilir. Kimlik doğrulama süreciniz eksiksiz tamamlandığında aktivasyon hızlanır. KEP ve zaman damgası hizmetleri ise çoğunlukla aynı gün içinde aktive edilir.",
    category: "genel",
  },
  {
    id: "genel-2",
    question: "Ödeme seçenekleri nelerdir?",
    answer:
      "Kredi kartı, banka havalesi ve EFT ile ödeme kabul etmekteyiz. Kurumsal müşterilerimiz için faturalı ödeme seçenekleri de mevcuttur. Ödeme konusunda detaylı bilgi için bizimle iletişime geçin.",
    category: "genel",
  },
]

export function getFaqByCategory(category: FaqItem["category"]): FaqItem[] {
  return faqData.filter((f) => f.category === category || f.category === "genel")
}

export function getFaqById(id: string): FaqItem | undefined {
  return faqData.find((f) => f.id === id)
}
