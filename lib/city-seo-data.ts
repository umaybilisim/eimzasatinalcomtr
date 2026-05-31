export interface CityData {
  slug: string
  name: string
  nameGenitive: string   // İstanbul'da, Ankara'da vb.
  nameDative: string     // İstanbul'a, Ankara'ya vb.
  metaTitle: string
  metaDescription: string
  heroDesc: string
  cityContext: string
  sectorNote: string
  deliveryNote: string
  faqs: { question: string; answer: string }[]
}

export const cities: CityData[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    nameGenitive: "İstanbul'da",
    nameDative: "İstanbul'a",
    metaTitle: "İstanbul E-İmza Satın Al 2026 | Hızlı Teslimat | eimzasatinal.com.tr",
    metaDescription: "İstanbul'da e-imza satın alın. TÜBİTAK onaylı bireysel ve kurumsal e-imza paketleri, aynı gün kargo, 0850 777 11 45 hattımızdan sipariş verin.",
    heroDesc: "Türkiye'nin ticaret ve finans merkezi İstanbul'daki bireysel ve kurumsal müşterilerimize TÜBİTAK onaylı e-imza çözümleri sunuyoruz.",
    cityContext: "İstanbul, 18 milyonu aşan nüfusu ve 1 milyondan fazla aktif şirketiyle Türkiye'nin e-imza talebinin en yoğun yaşandığı şehridir. Başta Levent, Maslak, Ümraniye ve Bağcılar olmak üzere İstanbul'un her ilçesinde faaliyet gösteren şirketler; e-fatura, e-beyanname, kamu ihaleleri ve dijital sözleşmeler için e-imzaya ihtiyaç duymaktadır.",
    sectorNote: "İstanbul'daki finans kurumları, hukuk büroları, muhasebe şirketleri, inşaat ve gayrimenkul şirketleri e-imzayı yoğun biçimde kullanmaktadır. Borsa İstanbul'a kayıtlı şirketlerin ve holding gruplarının büyük çoğunluğunun merkezi İstanbul'dadır.",
    deliveryNote: "İstanbul'a e-imza siparişleriniz aynı gün kargoya verilmekte, Anadolu ve Avrupa yakasında 1 iş günü içinde teslim edilmektedir.",
    faqs: [
      { question: "İstanbul'da e-imza nasıl satın alınır?", answer: "Sitemizden online sipariş verin, e-Devlet üzerinden kimlik doğrulamanızı tamamlayın. USB token İstanbul adresinize 1 iş günü içinde kargo ile ulaşır. Aktivasyon desteğimiz kurulum süresince yanınızdadır." },
      { question: "İstanbul'da aynı gün e-imza teslimi mümkün mü?", answer: "Standart siparişler İstanbul'a 1 iş günü içinde ulaşmaktadır. Acil kurumsal ihtiyaçlarınız için 0850 777 11 45 numaralı hattımızı arayarak öncelikli kargo seçeneğini öğrenebilirsiniz." },
      { question: "İstanbul'daki şirketimiz için kaç adet e-imza almalıyız?", answer: "Kamu ihalelerine giren şirketlerde yetkili imzacılar, muhasebe birimi ve hukuk departmanı için e-imza gerekmektedir. Toplu alımlarda kurumsal indirim uygulanmaktadır." },
    ],
  },
  {
    slug: "ankara",
    name: "Ankara",
    nameGenitive: "Ankara'da",
    nameDative: "Ankara'ya",
    metaTitle: "Ankara E-İmza Satın Al 2026 | Kamu & Özel Sektör | eimzasatinal.com.tr",
    metaDescription: "Ankara'da e-imza satın alın. Kamu kurumları, bakanlıklar ve özel sektör için TÜBİTAK onaylı bireysel ve kurumsal e-imza. Hızlı teslimat, uygun fiyat.",
    heroDesc: "Başkent Ankara'da kamu ve özel sektör profesyonelleri için TÜBİTAK onaylı e-imza çözümleri.",
    cityContext: "Türkiye'nin başkenti Ankara, devlet kurumları, bakanlıklar ve kamu ihalelerinin yoğunlaştığı şehirdir. e-Devlet sistemi, Kamu İhale Kurumu (KİK) ekap.gov.tr platformu ve sayısız bakanlık portali e-imza gerektirmektedir. Çankaya, Kızılay, Sıhhiye ve OSB bölgelerindeki şirketler e-imzayı aktif biçimde kullanmaktadır.",
    sectorNote: "Ankara'da savunma sanayii firmaları, mühendislik şirketleri, devlet ihalelerine giren KOBİ'ler ve kamu çalışanları e-imzanın en yoğun kullanıcıları arasındadır. EKAP üzerinden ihale başvurusu yapan binlerce firma Ankara merkezlidir.",
    deliveryNote: "Ankara'ya e-imza siparişleriniz aynı gün kargoya verilmekte, 1 iş günü içinde teslim edilmektedir.",
    faqs: [
      { question: "Ankara'da kamu ihaleleri için e-imza zorunlu mu?", answer: "Evet. EKAP (Elektronik Kamu Alımları Platformu) üzerinden ihaleye katılmak için nitelikli elektronik imza zorunludur. Teklif dosyalarının e-imza ile imzalanması yasal gerekliliktir." },
      { question: "Ankara'da bakanlık işlemleri için hangi e-imzayı almalıyım?", answer: "Bakanlık portallerine erişim ve resmi belge imzalamak için bireysel nitelikli elektronik imza yeterlidir. TÜBİTAK BİLGEM CA tarafından düzenlenen e-imzamız tüm kamu sistemleriyle uyumludur." },
      { question: "Ankara'da e-imza ne kadar sürede aktive edilir?", answer: "Ankara'ya USB token 1 iş günü içinde kargo ile ulaşır. e-Devlet doğrulaması tamamlanmışsa aktivasyon teslimat günü gerçekleştirilir." },
    ],
  },
  {
    slug: "izmir",
    name: "İzmir",
    nameGenitive: "İzmir'de",
    nameDative: "İzmir'e",
    metaTitle: "İzmir E-İmza Satın Al 2026 | İhracat & Serbest Bölge | eimzasatinal.com.tr",
    metaDescription: "İzmir'de e-imza satın alın. Ege ihracatçıları, serbest bölge firmaları ve KOBİ'ler için TÜBİTAK onaylı e-imza. Hızlı kargo, uygun fiyat garantisi.",
    heroDesc: "Ege'nin ticaret merkezi İzmir'deki ihracatçı firmalar ve serbest bölge şirketleri için TÜBİTAK onaylı e-imza.",
    cityContext: "İzmir, Türkiye'nin üçüncü büyük şehri ve Ege Bölgesi'nin ticaret merkezi olarak ihracat odaklı bir ekonomiye sahiptir. Ege Serbest Bölgesi, ESBAŞ, İzmir Atatürk Organize Sanayi Bölgesi ve Kemalpaşa OSB'de faaliyet gösteren firmalar gümrük işlemleri, ihracat belgeleri ve uluslararası sözleşmeler için e-imzaya ihtiyaç duymaktadır.",
    sectorNote: "İzmir'de tekstil, gıda, kimya, makine ve tarım sektörlerinde faaliyet gösteren ihracatçı firmalar ile liman ve lojistik şirketleri e-imzanın en aktif kullanıcılarıdır. Alsancak, Konak ve Bornova'daki hukuk ve muhasebe büroları da yoğun kullanıcı kitlesi arasındadır.",
    deliveryNote: "İzmir'e e-imza siparişleriniz 1 iş günü içinde kargo ile teslim edilmektedir.",
    faqs: [
      { question: "İzmir'de ihracat yapan firmalar için e-imza zorunlu mu?", answer: "Gümrük beyannameleri, ihracat izin belgeleri ve uluslararası ticaret formları için e-imza giderek zorunlu hale gelmektedir. Ege İhracatçı Birlikleri'ne yapılacak başvurular ve e-Gümrük işlemleri e-imza gerektirmektedir." },
      { question: "İzmir serbest bölgesindeki firmalar için e-imza alabilir miyim?", answer: "Evet. Ege Serbest Bölgesi ve diğer serbest bölgelerdeki firmalar için hem bireysel hem kurumsal e-mühür hizmetlerimiz mevcuttur. Toplu başvurularda kurumsal indirim uygulanır." },
      { question: "İzmir'de e-imza teslimat süresi ne kadar?", answer: "İzmir'e siparişler 1 iş günü içinde teslim edilmektedir. Aynı gün aktivasyon için önceden iletişime geçmenizi öneririz." },
    ],
  },
  {
    slug: "bursa",
    name: "Bursa",
    nameGenitive: "Bursa'da",
    nameDative: "Bursa'ya",
    metaTitle: "Bursa E-İmza Satın Al 2026 | Otomotiv & Tekstil Sektörü | eimzasatinal.com.tr",
    metaDescription: "Bursa'da e-imza satın alın. Otomotiv, tekstil ve organize sanayi firmalarına TÜBİTAK onaylı e-imza. Aynı gün kargo, 7/24 teknik destek.",
    heroDesc: "Türkiye'nin sanayi kenti Bursa'daki otomotiv, tekstil ve imalat sektörü firmalarına e-imza çözümleri.",
    cityContext: "Bursa, Türkiye'nin dördüncü büyük şehri ve en önemli sanayi merkezlerinden biridir. TOFAŞ, OYAK Renault, Bosch ve onlarca yan sanayi firmasının bulunduğu Bursa'da tedarikçi sözleşmeleri, kalite belgeleri ve ithalat-ihracat evrakları için e-imza kritik bir ihtiyaçtır. Nilüfer ve Osmangazi OSB'lerindeki firmalar e-imzayı yoğun biçimde kullanmaktadır.",
    sectorNote: "Bursa'da otomotiv yan sanayii, tekstil-konfeksiyon, seramik ve gıda sektörlerindeki firmalar başta olmak üzere muhasebeciler, mali müşavirler ve avukatlar e-imzanın en büyük kullanıcı kitlesini oluşturmaktadır.",
    deliveryNote: "Bursa'ya e-imza siparişleriniz aynı gün kargoya verilmekte, ertesi iş günü teslim edilmektedir.",
    faqs: [
      { question: "Bursa'daki otomotiv tedarikçileri e-imzayı nasıl kullanıyor?", answer: "Otomotiv ana sanayii firmaları, tedarikçilerin sözleşme ve teklifleri e-imzalı göndermesini zorunlu kılmaktadır. EDI sistemleri, kalite belgeleri ve sevkiyat onayları için bireysel veya kurumsal e-imza gerekmektedir." },
      { question: "Bursa'da tekstil firmaları için kurumsal e-imza alabilir miyim?", answer: "Evet. İhracat belgeleri, konşimento onayları ve müşteri sözleşmeleri için kurumsal e-mühür hizmetimiz mevcuttur. Detaylı bilgi için bizi arayın." },
      { question: "Bursa'da e-imza ne kadar sürede teslim edilir?", answer: "Bursa'ya siparişler genellikle 1 iş günü içinde teslim edilmektedir. Gürsu, Kestel, Mudanya gibi ilçelere de aynı sürede kargo ile ulaşılmaktadır." },
    ],
  },
  {
    slug: "antalya",
    name: "Antalya",
    nameGenitive: "Antalya'da",
    nameDative: "Antalya'ya",
    metaTitle: "Antalya E-İmza Satın Al 2026 | Turizm & Gayrimenkul | eimzasatinal.com.tr",
    metaDescription: "Antalya'da e-imza satın alın. Turizm, otelcilik, inşaat ve gayrimenkul sektörüne TÜBİTAK onaylı e-imza. Hızlı teslimat, uygun fiyat.",
    heroDesc: "Turizmin başkenti Antalya'daki otel, inşaat ve gayrimenkul şirketleri için TÜBİTAK onaylı e-imza çözümleri.",
    cityContext: "Antalya, yılda 15 milyonu aşan turist ağırlayan Türkiye'nin turizm merkezi ve en hızlı büyüyen şehirlerinden biridir. Turizm işletmeleri, inşaat ve gayrimenkul şirketleri, tarım ihracatçıları ve Serbest Bölge'deki firmalar e-imzayı aktif biçimde kullanmaktadır. Serik, Alanya, Manavgat ve Kemer'deki işletmeler de kapsama dahildir.",
    sectorNote: "Antalya'da turizm tesisleri (otel, tatil köyü, acente), inşaat şirketleri, gayrimenkul danışmanlık firmaları ve tarım ihracatçıları e-imzanın en yoğun kullandığı sektörler arasındadır.",
    deliveryNote: "Antalya şehir merkezi ve ilçelerine e-imza siparişleriniz 1-2 iş günü içinde teslim edilmektedir.",
    faqs: [
      { question: "Antalya'daki oteller e-imzayı ne için kullanıyor?", answer: "Otel işletmeleri; tedarikçi sözleşmeleri, turizm bakanlığı belgeleri, çalışan sözleşmeleri ve tour operatörü anlaşmaları için e-imzayı kullanmaktadır. Belgeler e-imzayla saniyeler içinde yasal geçerliliğe kavuşur." },
      { question: "Antalya'da gayrimenkul sektörü için e-imza zorunlu mu?", answer: "Tapu devri işlemleri noter aracılığıyla yapılmakla birlikte, ön sözleşmeler, vekalet belgeleri ve müteahhit anlaşmaları e-imzayla geçerli biçimde imzalanabilmektedir. e-Devlet üzerinden yapılan tapu işlemleri de e-imza gerektirmektedir." },
      { question: "Antalya'nın ilçelerine de e-imza teslimatı yapıyor musunuz?", answer: "Evet. Alanya, Manavgat, Serik, Kemer, Kaş ve tüm Antalya ilçelerine kargo ile e-imza gönderimi yapılmaktadır." },
    ],
  },
  {
    slug: "kocaeli",
    name: "Kocaeli",
    nameGenitive: "Kocaeli'nde",
    nameDative: "Kocaeli'ne",
    metaTitle: "Kocaeli E-İmza Satın Al 2026 | Sanayi & Petrokimya | eimzasatinal.com.tr",
    metaDescription: "Kocaeli'nde e-imza satın alın. Petrokimya, otomotiv ve sanayi firmalarına TÜBİTAK onaylı e-imza. İzmit ve Gebze'ye hızlı teslimat.",
    heroDesc: "Türkiye'nin sanayi kalbi Kocaeli'ndeki petrokimya, otomotiv ve üretim firmalarına e-imza çözümleri.",
    cityContext: "Kocaeli (İzmit), Türkiye'nin en büyük sanayi şehirlerinden biridir. TüpRaş, Ford Otosan, AKSA, Arçelik ve yüzlerce yan sanayi firmasının bulunduğu Kocaeli'nde endüstriyel sözleşmeler, kamu ihaleleri ve tedarik zinciri belgeleri için e-imza vazgeçilmezdir. Gebze Organize Sanayi Bölgesi Türkiye'nin en büyük OSB'lerinden biridir.",
    sectorNote: "Kocaeli'nde petrokimya, plastik, otomotiv, beyaz eşya ve elektronik sektörlerindeki firmalar ile Gebze Teknopark'taki teknoloji şirketleri e-imzanın yoğun kullanıcılarıdır.",
    deliveryNote: "Kocaeli, Gebze ve İzmit'e e-imza siparişleriniz aynı gün kargoya verilmekte, ertesi iş günü teslim edilmektedir.",
    faqs: [
      { question: "Kocaeli'ndeki büyük sanayi firmaları için kurumsal e-imza alabilir miyim?", answer: "Evet. 10 kişi ve üzeri toplu e-imza başvurularında kurumsal indirim uygulanmaktadır. Şirketinizin tüm yetkili imzacıları için toplu başvuru yapabilirsiniz." },
      { question: "Gebze OSB'deki firmalar için e-imza teslimat süresi nedir?", answer: "Gebze dahil tüm Kocaeli ilçelerine e-imza 1 iş günü içinde teslim edilmektedir." },
      { question: "Kocaeli'nde kamu ihaleleri için e-imza zorunlu mu?", answer: "Evet. EKAP üzerinden ihaleye katılan tüm firmalar için nitelikli e-imza zorunludur. Kocaeli'ndeki KOBİ'lere özel paket seçeneklerimiz mevcuttur." },
    ],
  },
  {
    slug: "sakarya",
    name: "Sakarya",
    nameGenitive: "Sakarya'da",
    nameDative: "Sakarya'ya",
    metaTitle: "Sakarya E-İmza Satın Al 2026 | Aynı Gün Teslimat | eimzasatinal.com.tr",
    metaDescription: "Sakarya'da e-imza satın alın. Merkezimiz Sakarya'da! Adapazarı ve tüm ilçelere aynı gün teslimat seçeneği. TÜBİTAK onaylı e-imza, uygun fiyat.",
    heroDesc: "Merkezimiz Sakarya'da! Adapazarı ve tüm ilçelere en hızlı e-imza teslimatı, yerinde kurulum desteği.",
    cityContext: "Sakarya, Umay Tüm Bilişim'in merkez şehridir. Bu nedenle Sakarya'daki müşterilerimize en hızlı teslimat ve yerinde teknik destek imkânı sunmaktayız. Adapazarı, Serdivan, Hendek, Arifiye ve Geyve başta olmak üzere tüm Sakarya ilçelerine aynı gün veya ertesi gün e-imza teslim edebiliyoruz. Sakarya Organize Sanayi Bölgesi'ndeki firmalar toplu e-imza müşterilerimiz arasındadır.",
    sectorNote: "Sakarya'da otomotiv yan sanayi (Toyota'ya tedarikçiler), inşaat, tarım ve hizmet sektörlerindeki şirketler ile muhasebe ve hukuk büroları e-imzanın yoğun kullanıcısıdır.",
    deliveryNote: "Sakarya merkezimiz sayesinde tüm ilçelere aynı gün veya en geç ertesi gün teslimat garanti edilmektedir. Elden teslim seçeneği için bizi arayın.",
    faqs: [
      { question: "Sakarya'da e-imzayı elden teslim alabilir miyim?", answer: "Evet! Sakarya merkezimizden randevu ile elden teslim ve yerinde kurulum desteği alabilirsiniz. 0850 777 11 45 veya 0264 777 11 45 numaralarından bizi arayın." },
      { question: "Sakarya'da aynı gün e-imza aktivasyonu mümkün mü?", answer: "Sakarya'da elden teslim siparişlerde aynı gün aktivasyon yapılabilmektedir. Kargo siparişlerinde ise 1 iş günü içinde ulaşım sağlanır." },
      { question: "Sakarya OSB'deki firmalar için toplu e-imza var mı?", answer: "Evet. Sakarya Organize Sanayi Bölgesi'ndeki firmalarımıza özel toplu fiyatlandırma uygulamaktayız. 3 ve üzeri e-imza için teklif almak üzere iletişime geçin." },
    ],
  },
  {
    slug: "konya",
    name: "Konya",
    nameGenitive: "Konya'da",
    nameDative: "Konya'ya",
    metaTitle: "Konya E-İmza Satın Al 2026 | Tarım & İmalat Sektörü | eimzasatinal.com.tr",
    metaDescription: "Konya'da e-imza satın alın. Tarım makineleri, gıda ve imalat sektörü firmalarına TÜBİTAK onaylı e-imza. Hızlı teslimat, uygun fiyat.",
    heroDesc: "Türkiye'nin tahıl ambarı Konya'daki imalat, tarım ve ticaret şirketleri için TÜBİTAK onaylı e-imza çözümleri.",
    cityContext: "Konya, Türkiye'nin en büyük yüzölçümlü şehri ve tarım ile imalat sektörlerinin merkezi olarak hızlı bir dijital dönüşüm sürecinden geçmektedir. Konya Organize Sanayi Bölgesi'ndeki makine imalatçıları, gıda işleme firmaları ve tarım sektörü şirketleri kamu ihaleleri ve e-Devlet işlemleri için e-imzaya ihtiyaç duymaktadır.",
    sectorNote: "Konya'da tarım makineleri imalatçıları, un fabrikaları, çimento ve yapı malzemeleri şirketleri ile ihracatçı gıda firmaları e-imzanın önde gelen kullanıcılarıdır.",
    deliveryNote: "Konya'ya e-imza siparişleriniz 1-2 iş günü içinde kargo ile teslim edilmektedir.",
    faqs: [
      { question: "Konya'daki ihracatçı firmalar e-imzayı nasıl kullanıyor?", answer: "Konya'nın tahıl, şeker pancarı ve makine ihracatçıları; gümrük belgeleri, ihracat teşvik başvuruları ve uluslararası sözleşmeler için e-imzayı aktif biçimde kullanmaktadır." },
      { question: "Konya'da kamu ihaleleri için e-imza şart mı?", answer: "Evet. EKAP üzerinden belediye ve kamu ihalelerine katılan firmalar için nitelikli e-imza zorunludur. Konya Büyükşehir Belediyesi ihalelerine giren tüm firmalar e-imzaya ihtiyaç duymaktadır." },
      { question: "Konya ilçelerine de e-imza gönderebilir misiniz?", answer: "Evet. Selçuklu, Karatay, Meram başta olmak üzere Konya'nın tüm ilçelerine kargo ile teslimat yapılmaktadır." },
    ],
  },
  {
    slug: "gaziantep",
    name: "Gaziantep",
    nameGenitive: "Gaziantep'te",
    nameDative: "Gaziantep'e",
    metaTitle: "Gaziantep E-İmza Satın Al 2026 | İhracat & Tekstil | eimzasatinal.com.tr",
    metaDescription: "Gaziantep'te e-imza satın alın. Tekstil, gıda ihracatçıları ve sınır ticaret şirketlerine TÜBİTAK onaylı e-imza. Hızlı teslimat, uygun fiyat.",
    heroDesc: "Güneydoğu'nun ticaret merkezi Gaziantep'teki ihracatçı firmalar ve KOBİ'ler için TÜBİTAK onaylı e-imza.",
    cityContext: "Gaziantep, Türkiye'nin en fazla ihracat yapan şehirleri arasında yer almakta olup tekstil, gıda, plastik ve makine sektörlerinde güçlü bir üretim altyapısına sahiptir. İSO 500 listesindeki firmalar arasında Gaziantep'ten önemli sayıda şirket yer almaktadır. Organize Sanayi Bölgelerindeki firmalar gümrük, ihracat ve kamu işlemleri için e-imzayı aktif kullanmaktadır.",
    sectorNote: "Gaziantep'te tekstil-konfeksiyon, halı, bakır işlemeciliği, gıda ihracatı ve plastik sektörlerindeki firmalar ile muhasebe ve hukuk büroları e-imzanın yoğun kullanıcılarıdır.",
    deliveryNote: "Gaziantep'e e-imza siparişleriniz 1-2 iş günü içinde kargo ile teslim edilmektedir.",
    faqs: [
      { question: "Gaziantep'teki ihracatçı firmalar için e-imza zorunlu mu?", answer: "İhracat teşvik başvuruları, gümrük beyannameleri ve Güneydoğu İhracatçı Birlikleri işlemleri için e-imza gerekmektedir. Özellikle tekstil ve gıda ihracatçıları için kritik bir ihtiyaçtır." },
      { question: "Gaziantep'te toplu e-imza alımında indirim var mı?", answer: "Evet. 3 ve üzeri e-imza başvurularında kurumsal indirim uygulanmaktadır. Detaylı bilgi için iletişime geçin." },
      { question: "Gaziantep'e e-imza teslimat süresi nedir?", answer: "Gaziantep şehir merkezi ve Şahinbey, Şehitkamil ilçelerine 1-2 iş günü içinde kargo ile teslimat yapılmaktadır." },
    ],
  },
  {
    slug: "adana",
    name: "Adana",
    nameGenitive: "Adana'da",
    nameDative: "Adana'ya",
    metaTitle: "Adana E-İmza Satın Al 2026 | Çukurova Sanayi | eimzasatinal.com.tr",
    metaDescription: "Adana'da e-imza satın alın. Çukurova'nın sanayi ve ticaret firmaları için TÜBİTAK onaylı e-imza. Hızlı teslimat, 7/24 teknik destek.",
    heroDesc: "Çukurova'nın ticaret merkezi Adana'daki sanayi ve tarım şirketlerine TÜBİTAK onaylı e-imza çözümleri.",
    cityContext: "Adana, Çukurova bölgesinin merkezi olarak tekstil, tarım, gıda işleme ve inşaat sektörlerinde güçlü bir ekonomiye sahiptir. Adana Sanayi Odası üyesi firmalar, tarım ihracatçıları ve Tarsus Organize Sanayi Bölgesi'ndeki şirketler e-imzayı kamu ihaleleri ve ihracat işlemlerinde yoğun biçimde kullanmaktadır.",
    sectorNote: "Adana'da pamuk tekstili, narenciye ihracatı, çimento-yapı malzemeleri ve gıda sektörü firmaları e-imzanın başlıca kullanıcılarıdır.",
    deliveryNote: "Adana'ya e-imza siparişleriniz 1-2 iş günü içinde kargo ile teslim edilmektedir. Mersin de aynı sürede kapsanmaktadır.",
    faqs: [
      { question: "Adana'da tarım ihracatçıları için e-imza zorunlu mu?", answer: "Gümrük beyannameleri, bitki sağlık sertifikaları ve ihracat izin belgeleri için e-imza gerekmektedir. Çukurova'nın narenciye ve pamuk ihracatçıları e-imzayı aktif kullanmaktadır." },
      { question: "Adana Sanayi Odası üyeleri için özel paket var mı?", answer: "Toplu başvurularda kurumsal indirim uygulanmaktadır. Dernek ve oda üyeleri aracılığıyla yapılan toplu alımlarda ek avantajlar için iletişime geçin." },
      { question: "Tarsus'a da e-imza teslimatı yapıyor musunuz?", answer: "Evet. Tarsus, Seyhan, Yüreğir ve tüm Adana ilçelerine kargo ile teslimat yapılmaktadır." },
    ],
  },
  {
    slug: "mersin",
    name: "Mersin",
    nameGenitive: "Mersin'de",
    nameDative: "Mersin'e",
    metaTitle: "Mersin E-İmza Satın Al 2026 | Liman & Lojistik Sektörü | eimzasatinal.com.tr",
    metaDescription: "Mersin'de e-imza satın alın. Liman, lojistik ve ithalat-ihracat firmaları için TÜBİTAK onaylı e-imza. Hızlı kargo, uygun fiyat garantisi.",
    heroDesc: "Türkiye'nin en büyük limanına ev sahipliği yapan Mersin'deki lojistik ve dış ticaret şirketlerine e-imza çözümleri.",
    cityContext: "Mersin, Türkiye'nin en büyük limanlarından Mersin Limanı'na ev sahipliği yaparak önemli bir ithalat-ihracat merkezi konumundadır. Mersin Serbest Bölgesi, TOROSLAR ve Tarsus OSB'lerindeki firmalar gümrük işlemleri, konteyner takibi ve uluslararası sözleşmeler için e-imzaya ihtiyaç duymaktadır.",
    sectorNote: "Mersin'de gümrük müşavirliği firmaları, nakliye şirketleri, serbest bölge işletmecileri ve ihracatçı gıda firmaları e-imzanın yoğun kullanıcılarıdır.",
    deliveryNote: "Mersin'e e-imza siparişleriniz 1-2 iş günü içinde kargo ile teslim edilmektedir.",
    faqs: [
      { question: "Mersin'deki gümrük müşavirleri için e-imza zorunlu mu?", answer: "Evet. e-Gümrük sistemi üzerinden beyanname gönderimi ve onaylaması için nitelikli e-imza zorunludur. Gümrük müşaviri ve yardımcıları e-imzasız işlem yapamamaktadır." },
      { question: "Mersin Serbest Bölgesi'ndeki firmalar için e-imza alabilir miyim?", answer: "Evet. Serbest bölge işleticileri ve kullanıcıları için hem bireysel e-imza hem kurumsal e-mühür hizmetimiz mevcuttur." },
      { question: "Mersin'de e-imza teslimat süresi nedir?", answer: "Mersin şehir merkezi ve Tarsus, Silifke, Erdemli ilçelerine 1-2 iş günü içinde kargo ile teslimat yapılmaktadır." },
    ],
  },
  {
    slug: "eskisehir",
    name: "Eskişehir",
    nameGenitive: "Eskişehir'de",
    nameDative: "Eskişehir'e",
    metaTitle: "Eskişehir E-İmza Satın Al 2026 | Havacılık & Teknoloji | eimzasatinal.com.tr",
    metaDescription: "Eskişehir'de e-imza satın alın. Havacılık, savunma ve teknoloji firmalarına TÜBİTAK onaylı e-imza. Hızlı teslimat, 7/24 teknik destek.",
    heroDesc: "Havacılık ve savunma sanayiinin kalbi Eskişehir'deki teknoloji ve imalat firmaları için TÜBİTAK onaylı e-imza.",
    cityContext: "Eskişehir, havacılık ve savunma sanayii alanında Türkiye'nin önde gelen şehridir. ROKETSAN, TEI (Tusaş Motor Sanayii) ve onlarca alt yüklenicinin bulunduğu şehirde savunma ihaleleri, Savunma Sanayii Başkanlığı (SSB) sistemi işlemleri ve Anadolu Üniversitesi'nin teknoloji girişimleri için e-imza yoğun biçimde kullanılmaktadır.",
    sectorNote: "Eskişehir'de havacılık-uzay firmaları, savunma sanayi alt yüklenicileri, teknoloji girişimleri ve üniversite-sanayi iş birliği kapsamındaki şirketler e-imzanın başlıca kullanıcılarıdır.",
    deliveryNote: "Eskişehir'e e-imza siparişleriniz 1 iş günü içinde kargo ile teslim edilmektedir.",
    faqs: [
      { question: "Eskişehir'deki savunma sanayii firmaları için e-imza gerekli mi?", answer: "Savunma Sanayii Başkanlığı (SSB) portalı, savunma ihaleleri ve gizlilik sözleşmeleri için e-imza zorunludur. Savunma firmalarının yetkilendirilmiş personeli bireysel e-imzaya ihtiyaç duymaktadır." },
      { question: "Eskişehir'de teknoloji girişimleri için e-imza alabilir miyim?", answer: "Evet. TÜBİTAK TEYDEB başvuruları, KOSGEB hibe formları ve teknoparklar üzerinden yapılan dijital işlemler için e-imza kullanabilirsiniz." },
      { question: "Eskişehir'e e-imza teslimat süresi nedir?", answer: "Eskişehir şehir merkezi, Tepebaşı ve Odunpazarı ilçelerine 1 iş günü içinde kargo ile teslimat yapılmaktadır." },
    ],
  },
  {
    slug: "samsun",
    name: "Samsun",
    nameGenitive: "Samsun'da",
    nameDative: "Samsun'a",
    metaTitle: "Samsun E-İmza Satın Al 2026 | Karadeniz Bölgesi | eimzasatinal.com.tr",
    metaDescription: "Samsun'da e-imza satın alın. Karadeniz bölgesinin ticaret merkezi Samsun'daki firmalara TÜBİTAK onaylı e-imza. Hızlı teslimat, uygun fiyat.",
    heroDesc: "Karadeniz'in ticaret merkezi Samsun'daki tarım, lojistik ve ticaret firmaları için TÜBİTAK onaylı e-imza.",
    cityContext: "Samsun, Karadeniz Bölgesi'nin en büyük şehri ve ticaret merkezi olarak tarım, lojistik ve hizmet sektörlerinin yoğunlaştığı bir konumdadır. Samsun Limanı, organize sanayi bölgeleri ve tarımsal ticaret şirketleri kamu ihaleleri ve ihracat işlemleri için e-imzaya ihtiyaç duymaktadır.",
    sectorNote: "Samsun'da tütün, fındık ve sebze ihracatçıları, nakliye şirketleri, muhasebe büroları ve kamu ihalelerine giren inşaat firmaları e-imzanın yoğun kullanıcılarıdır.",
    deliveryNote: "Samsun'a e-imza siparişleriniz 1-2 iş günü içinde kargo ile teslim edilmektedir.",
    faqs: [
      { question: "Samsun'da tarım ihracatçıları e-imzayı nasıl kullanıyor?", answer: "Fındık, tütün ve yaş meyve-sebze ihracatçıları; Karadeniz İhracatçı Birlikleri işlemleri, gümrük beyannameleri ve ihracat teşvik başvuruları için e-imzayı kullanmaktadır." },
      { question: "Samsun'da e-imza başvurusu nasıl yapılır?", answer: "Sitemiz üzerinden online başvuru yapın, e-Devlet üzerinden kimlik doğrulamanızı tamamlayın. USB token Samsun adresinize 1-2 iş günü içinde ulaşır." },
      { question: "Samsun ilçelerine de e-imza gönderebilir misiniz?", answer: "Evet. Atakum, Canik, İlkadım başta olmak üzere tüm Samsun ilçelerine kargo ile teslimat yapılmaktadır." },
    ],
  },
  {
    slug: "denizli",
    name: "Denizli",
    nameGenitive: "Denizli'de",
    nameDative: "Denizli'ye",
    metaTitle: "Denizli E-İmza Satın Al 2026 | Tekstil İhracatı | eimzasatinal.com.tr",
    metaDescription: "Denizli'de e-imza satın alın. Tekstil ve ev tekstili ihracatçılarına TÜBİTAK onaylı e-imza. Hızlı teslimat, kurumsal paket seçenekleri.",
    heroDesc: "Tekstil ihracatının kalbi Denizli'deki fabrika ve ticaret şirketleri için TÜBİTAK onaylı e-imza çözümleri.",
    cityContext: "Denizli, dünya genelinde 'Made in Denizli' markasıyla tanınan ev tekstili ve havlu ihracatının merkezi şehridir. Türkiye'nin en fazla ihracat yapan şehirleri arasında yer alan Denizli'de tekstil fabrikaları, ihracatçı ticaret şirketleri ve OSB firmaları gümrük işlemleri ve uluslararası sözleşmeler için e-imzaya ihtiyaç duymaktadır.",
    sectorNote: "Denizli'de havlu-bornoz imalatçıları, kumaş ve iplik üreticileri, Denizli İhracatçılar Birliği üyeleri e-imzanın öncelikli kullanıcılarıdır.",
    deliveryNote: "Denizli'ye e-imza siparişleriniz 1-2 iş günü içinde kargo ile teslim edilmektedir.",
    faqs: [
      { question: "Denizli'deki tekstil ihracatçıları için e-imza zorunlu mu?", answer: "İhracat teşvik başvuruları, Ege ve Denizli İhracatçılar Birliği işlemleri ve gümrük beyannameleri için e-imza gerekmektedir. Yoğun ihracat yapan firmalar için 3 yıllık paket önerilmektedir." },
      { question: "Denizli fabrikamız için kaç e-imza almalıyız?", answer: "Tipik olarak ihracat müdürü, muhasebe müdürü ve satın alma yöneticisi olmak üzere 2-3 kişi için e-imza yeterlidir. Toplu alımlarda indirim uygulanır." },
      { question: "Denizli Organize Sanayi'ne e-imza teslimatı yapıyor musunuz?", answer: "Evet. Denizli OSB ve tüm ilçelere 1-2 iş günü içinde kargo ile teslimat yapılmaktadır." },
    ],
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug)
}

export function getKepCityMeta(city: CityData) {
  return {
    metaTitle: `${city.name} KEP Adresi Al 2026 | Kayıtlı Elektronik Posta | eimzasatinal.com.tr`,
    metaDescription: `${city.name}'da KEP adresi satın alın. BTK yetkili, yasal delil niteliğinde e-posta. Sermaye şirketleri için zorunlu KEP. Hızlı aktivasyon, uygun fiyat.`,
    heroDesc: `${city.nameGenitive} faaliyet gösteren şirketler için BTK yetkili KEP adresi. Yasal tebligat ve resmi yazışmalarınızı güvence altına alın.`,
    faqs: [
      {
        question: `${city.name}'da KEP adresi almak zorunlu mu?`,
        answer: `Türk Ticaret Kanunu gereği sermaye şirketleri (A.Ş., Ltd. Şti.) KEP adresi edinmek zorundadır. ${city.nameGenitive} faaliyet gösteren tüm sermaye şirketleri bu yükümlülük kapsamındadır.`,
      },
      {
        question: `${city.name}'da KEP aktivasyonu ne kadar sürer?`,
        answer: `KEP başvurusu online olarak tamamlanmaktadır. Kimlik doğrulama sonrası KEP adresiniz genellikle aynı gün aktive edilir. ${city.deliveryNote.replace("e-imza", "KEP").replace("USB token", "KEP hesabı")}`,
      },
      {
        question: `KEP ile normal e-posta arasındaki fark nedir?`,
        answer: `KEP (Kayıtlı Elektronik Posta), gönderim zamanı, teslim ve okundu bilgisi yasal delil niteliğinde kaydedilen e-posta sistemidir. Normal e-posta bu hukuki güvenceye sahip değildir. ${city.nameGenitive} mahkemeler ve kurumlar arası resmi yazışmalarda KEP kullanımı giderek yaygınlaşmaktadır.`,
      },
    ],
  }
}

export function getZdCityMeta(city: CityData) {
  return {
    metaTitle: `${city.name} Zaman Damgası Al 2026 | TÜBİTAK Onaylı | eimzasatinal.com.tr`,
    metaDescription: `${city.name}'da zaman damgası satın alın. TÜBİTAK onaylı, RFC 3161 uyumlu zaman damgası. Belge varlığı kanıtı için güvenilir çözüm. Kontör bazlı paketler.`,
    heroDesc: `${city.nameGenitive} hukuk büroları, teknoloji ve finans firmaları için TÜBİTAK onaylı zaman damgası hizmeti. RFC 3161 uyumlu, hukuki geçerliliği olan belge zaman kanıtı.`,
    faqs: [
      {
        question: `${city.name}'da zaman damgası neden kullanılır?`,
        answer: `Zaman damgası, bir belgenin belirli bir tarihte var olduğunu kriptografik olarak kanıtlar. ${city.nameGenitive} hukuk büroları, muhasebe firmaları ve kamu kurumları; sözleşmeler, raporlar ve dijital dosyaların zaman bütünlüğünü ispat etmek için zaman damgası kullanmaktadır.`,
      },
      {
        question: `Zaman damgası kontörleri nasıl çalışır?`,
        answer: `Zaman damgası kontör bazlı satılır: her belgede bir kontör harcanır. 100, 500 veya 1000 kontörlük paket seçebilirsiniz. ${city.nameGenitive} yoğun belge işleyen firmalar için büyük paket daha ekonomiktir.`,
      },
      {
        question: `${city.name}'da zaman damgası API entegrasyonu mümkün mü?`,
        answer: `Evet. RFC 3161 uyumlu zaman damgamız kendi yazılımlarınıza veya belge yönetim sistemlerinize entegre edilebilir. ${city.nameGenitive} yazılım şirketleri ve teknoloji firmaları için API dökümanı ve teknik destek sağlanmaktadır.`,
      },
    ],
  }
}
