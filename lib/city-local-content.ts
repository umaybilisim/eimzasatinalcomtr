// Şehir sayfalarına özgü içerik (KEP ve zaman damgası).
// Amaç: şehir adını değiştirip aynı metni çoğaltmak yerine her ilin kurumları, sektörleri ve
// yazışma/arşiv ihtiyaçları üzerinden gerçekten farklı, kontrol edilebilir içerik vermek.
// Kural: uydurma rakam, müşteri adı veya "şubemiz" gibi iddia yazılmaz. KEP ve zaman damgası
// tamamen online hizmettir; fiziksel teslimat yalnızca e-imza USB token için geçerlidir.

export interface LocalSection {
  q: string
  a: string
}

export interface LocalProductContent {
  metaTitle: string
  metaDescription: string
  intro: string
  sections: LocalSection[]
  areas: string
  faqs: { question: string; answer: string }[]
}

export const kepLocal: Record<string, LocalProductContent> = {
  istanbul: {
    metaTitle: "İstanbul KEP Adresi Al | Şirketler ve Avukatlar",
    metaDescription: "İstanbul'daki şirketler, hukuk büroları ve mali müşavirler için BTK yetkili KEP adresi. Online başvuru, uzaktan aktivasyon, kurumsal çoklu hesap.",
    intro: "İstanbul'da KEP adresi tamamen online alınır: başvuru ve kimlik doğrulama uzaktan yapılır, adresiniz genellikle aynı gün açılır. İhtarname, fesih ve temerrüt bildirimlerini noter kuyruğuna girmeden, gönderim ve teslim zamanı delil olarak kayıt altına alınmış şekilde iletebilirsiniz.",
    sections: [
      {
        q: "İstanbul'daki şirketler KEP'i hangi yazışmalarda kullanıyor?",
        a: "Türk Ticaret Kanunu'nun 18/3. maddesi, tacirler arasındaki temerrüt, fesih ve sözleşmeden dönme ihbarları için noter ve taahhütlü mektubun yanında güvenli elektronik imzalı KEP'i de sayar. Levent, Maslak ve Ataşehir'deki merkez ofisler bayi ve tedarikçi sözleşmelerinin fesih bildirimlerinde; İkitelli ve Dudullu OSB'lerdeki üreticiler ise ödeme gecikmesi ihtarlarında bu yolu tercih edebilir. Tek şart, karşı tarafın da bir KEP adresine sahip olmasıdır.",
      },
      {
        q: "Çağlayan, Kartal veya Bakırköy'de dava takip eden avukatlar için KEP ne sağlar?",
        a: "Avukatlar, müvekkil adına gönderdikleri ihtar ve bildirimlerin hangi gün, hangi saatte karşı tarafın KEP kutusuna ulaştığını gösteren delil kaydını dosyaya ekleyebilir. Noter masrafı ve süresi ortadan kalkar; ileti içeriğinin sonradan değiştirilmediği de elektronik imza ile kanıtlanır. Büro birden fazla avukatla çalışıyorsa her avukat için ayrı KEP adresi açmak, yetki ve sorumluluk takibini kolaylaştırır.",
      },
    ],
    areas: "Avrupa yakasında Şişli, Beşiktaş, Bakırköy, Beylikdüzü ve Başakşehir; Anadolu yakasında Kadıköy, Ataşehir, Ümraniye, Kartal ve Tuzla dahil tüm ilçelerden online başvuru alıyoruz. Kargo veya ofis ziyareti gerekmez.",
    faqs: [
      {
        question: "İstanbul'daki şirketimiz için kaç KEP adresi gerekir?",
        answer: "Yasal ihbarlar şirket adına gönderildiği için çoğu şirkete tek kurumsal KEP adresi yeter. Hukuk, insan kaynakları ve muhasebe ayrı ayrı yazışıyorsa birim bazında ek hesap açılabilir; hepsi aynı şirket unvanına bağlı kalır.",
      },
      {
        question: "Karşı tarafın KEP adresi yoksa ihtarnamemi KEP ile gönderebilir miyim?",
        answer: "Hayır. KEP iletisi yalnızca başka bir KEP adresine teslim edilebilir. Karşı tarafın KEP adresi yoksa ihtarı noter veya iadeli taahhütlü mektupla göndermeniz gerekir. Göndermeden önce karşı tarafa KEP adresini sormanız önerilir.",
      },
      {
        question: "İstanbul'da KEP başvurusu için ofisinize gelmem gerekir mi?",
        answer: "Gerekmez. KEP tamamen online bir hizmettir; kimlik doğrulama uzaktan yapılır. İstanbul'un hangi ilçesinde olursanız olun başvuru, aktivasyon ve kullanım desteği telefon ve WhatsApp üzerinden verilir.",
      },
    ],
  },
  ankara: {
    metaTitle: "Ankara KEP Adresi Al | Kamu Yazışmaları ve İhale",
    metaDescription: "Ankara'da kamu kurumlarıyla yazışan şirketler, ihale firmaları ve avukatlar için BTK yetkili KEP adresi. Online başvuru, aynı gün aktivasyon.",
    intro: "Ankara'da KEP adresi online başvuruyla, ofise gitmeden alınır. Bakanlık ve kamu kurumlarıyla yazışan şirketler, ihale firmaları ve avukatlar için KEP; gönderilen belgenin içeriğini, gönderim ve teslim zamanını delil niteliğinde kayıt altına alan resmî bir yazışma kanalıdır.",
    sections: [
      {
        q: "Ankara'da kamu kurumlarıyla yazışan firmalar KEP'i neden kullanıyor?",
        a: "Başkentte bakanlıklar, düzenleyici kurumlar ve genel müdürlüklerle düzenli yazışan firmalar için en büyük risk, gönderilen dilekçenin süresinde ulaşıp ulaşmadığının ispatıdır. KEP adresi olan kurumlara gönderilen iletilerde teslim zamanı kayıt altına alınır. Ostim ve İvedik OSB'deki savunma sanayii tedarikçileri ile mühendislik firmaları, sözleşme değişikliği talepleri ve süre uzatımı başvurularında bu ispat kolaylığından yararlanabilir.",
      },
      {
        q: "Ankara Barosu'na kayıtlı avukatlar KEP'i nasıl kullanabilir?",
        a: "Sıhhiye'deki Ankara Adliyesi'nde dava takip eden avukatlar, dava öncesi ihtarname ve temerrüt bildirimlerini karşı tarafın KEP adresine göndererek noter masrafından ve bekleme süresinden kurtulabilir. Gönderim kaydı, ihtarın hangi gün tebliğ edildiğini gösterdiği için faiz ve süre hesaplarında da açıklık sağlar. Kamu hukuku alanında çalışan bürolar idareye yapılan başvuruların takibinde de KEP'ten faydalanır.",
      },
    ],
    areas: "Çankaya, Yenimahalle, Keçiören, Etimesgut, Sincan, Gölbaşı ve Polatlı dahil Ankara'nın tüm ilçelerinden; ODTÜ Teknokent, Bilkent Cyberpark ve Hacettepe Teknokent'teki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Ankara'daki kamu kurumları KEP ile gönderilen belgeyi kabul eder mi?",
        answer: "KEP adresi bulunan kurumlara gönderilen iletiler, teslim zamanıyla birlikte delil kaydı oluşturur. Ancak her kurumun başvuru kabul yöntemi farklıdır; göndermeden önce ilgili kurumun KEP adresini ve kabul ettiği başvuru kanallarını kontrol etmeniz önerilir.",
      },
      {
        question: "İhale yazışmalarında KEP ile e-imza arasındaki fark nedir?",
        answer: "E-imza, belgeyi kimin imzaladığını ve belgenin değişmediğini kanıtlar. KEP ise o belgenin kime, ne zaman gönderildiğini ve teslim edildiğini kanıtlar. İhaleye giren firmalar genellikle ikisini birlikte kullanır: belgeyi e-imzayla imzalar, KEP ile gönderir.",
      },
      {
        question: "Ankara'da KEP adresim ne kadar sürede açılır?",
        answer: "Başvuru ve kimlik doğrulama tamamlandığında KEP adresiniz genellikle aynı gün aktif olur. Tüm süreç online yürüdüğü için Ankara'daki adresinize kargo gönderilmez.",
      },
    ],
  },
  izmir: {
    metaTitle: "İzmir KEP Adresi Al | İhracatçı ve Sanayi Firmaları",
    metaDescription: "İzmir'deki ihracatçı, liman ve sanayi firmaları için BTK yetkili KEP adresi. Fesih, temerrüt ve ihtar bildirimleri için online başvuru.",
    intro: "İzmir'de KEP adresi online başvuruyla alınır ve genellikle aynı gün aktif olur. Alsancak'taki ticaret firmalarından Atatürk OSB'deki üreticilere kadar İzmir şirketleri; temerrüt, fesih ve sözleşme bildirimlerini noter yerine güvenli elektronik imzalı KEP ile, teslim zamanı kayıtlı olarak gönderebilir.",
    sections: [
      {
        q: "İzmir'deki ihracat ve lojistik firmaları KEP'i hangi durumlarda kullanır?",
        a: "Ege Serbest Bölgesi'ndeki ve liman çevresindeki lojistik firmaları, yurt içi taşımacı, depo ve gümrük müşaviri gibi iş ortaklarıyla yaşanan gecikme ve hasar uyuşmazlıklarında yazılı bildirimi hızla ve ispatlanabilir biçimde yapmak ister. Karşı tarafın KEP adresi varsa, ayıp ihbarı veya fesih bildirimi KEP ile gönderildiğinde teslim anı kayıt altına alınır. Bu kayıt, sonradan çıkabilecek süre tartışmalarında güçlü bir delildir.",
      },
      {
        q: "Kemalpaşa ve Çiğli'deki sanayi firmaları için KEP'in pratik faydası nedir?",
        a: "Kemalpaşa OSB ve Atatürk OSB'deki üreticiler, ana sanayi ve tedarikçilerle uzun süreli çerçeve sözleşmelerle çalışır. Sipariş iptali, fiyat farkı talebi veya sözleşme feshi gibi bildirimlerin hukuken geçerli olması için ispatlanabilir bir yazılı kanal gerekir. KEP, her bildirim için ayrı noter işlemine gerek bırakmadan bu ihtiyacı karşılar ve gönderilen tüm iletiler arşivde saklanır.",
      },
    ],
    areas: "Konak, Bayraklı, Karşıyaka, Bornova, Buca, Çiğli, Gaziemir, Torbalı, Kemalpaşa ve Aliağa dahil İzmir'in tüm ilçelerinden online başvuru alıyoruz; İzmir Teknoloji Geliştirme Bölgesi'ndeki firmalar da aynı süreçle KEP edinebilir.",
    faqs: [
      {
        question: "İzmir'deki şirketim yabancı bir alıcıya KEP gönderebilir mi?",
        answer: "KEP, Türkiye'deki BTK yetkili sağlayıcılar arasında çalışan bir sistemdir ve ileti yalnızca KEP adresine teslim edilir. Yurt dışındaki bir alıcının Türk KEP adresi yoksa, bildirimi sözleşmede belirlenen uluslararası yöntemlerle yapmanız gerekir.",
      },
      {
        question: "Gümrük müşavirleri ve lojistik firmaları için KEP gerekli mi?",
        answer: "Sermaye şirketi olarak kurulmuş firmaların yasal ihbarlarını ispatlanabilir bir kanaldan yapması gerekir ve KEP bu kanallardan biridir. Müşteri ve iş ortaklarıyla yoğun bildirim trafiği olan firmalar için noter masrafına göre daha ekonomiktir.",
      },
      {
        question: "İzmir'de KEP başvurusu için hangi bilgiler isteniyor?",
        answer: "Kurumsal başvuruda şirket unvanı, vergi numarası, yetkili kişinin kimlik bilgileri ve imza yetkisini gösteren belge istenir. Bireysel başvuruda kimlik doğrulaması yeterlidir. Belgeler online iletilir.",
      },
    ],
  },
  bursa: {
    metaTitle: "Bursa KEP Adresi Al | Otomotiv ve Tekstil Firmaları",
    metaDescription: "Bursa'daki otomotiv yan sanayi, tekstil ve OSB firmaları için BTK yetkili KEP adresi. Tedarikçi bildirimleri için online başvuru ve aktivasyon.",
    intro: "Bursa'da KEP adresi online alınır, kimlik doğrulama sonrası genellikle aynı gün kullanıma açılır. Nilüfer, Demirtaş ve DOSAB'daki otomotiv yan sanayi ile tekstil firmaları; ana sanayiye ve tedarikçilere yapılan fesih, temerrüt ve fiyat farkı bildirimlerini KEP ile ispatlanabilir biçimde gönderir.",
    sections: [
      {
        q: "Bursa'daki otomotiv yan sanayi firmaları için KEP neden önemli?",
        a: "Otomotiv tedarik zincirinde sözleşmeler genellikle sıkı teslim takvimlerine ve ceza şartlarına bağlıdır. Bursa OSB, Nilüfer OSB veya DOSAB'daki bir parça üreticisi, ham madde gecikmesi ya da fiyat değişikliğini müşterisine zamanında ve yazılı bildirmezse ceza şartıyla karşılaşabilir. Karşı taraf KEP kullanıyorsa bu bildirimler noter beklemeden gönderilir ve teslim zamanı delil kaydına geçer.",
      },
      {
        q: "Bursa'nın tekstil ve konfeksiyon firmaları KEP'i nasıl kullanabilir?",
        a: "Tekstilde fason üretim ve sipariş bazlı çalışma yaygındır; ayıplı mal ihbarı, sipariş iptali ve ödeme ihtarı gibi bildirimlerin süresinde yapılması hak kaybını önler. BTSO üyesi bir tekstil firması, fason üreticisine veya alıcısına KEP ile gönderdiği ihbarın hangi gün teslim edildiğini kanıtlayabilir. Yazışmalar KEP sağlayıcısı tarafından saklandığı için kayıp evrak riski de azalır.",
      },
    ],
    areas: "Osmangazi, Nilüfer, Yıldırım, İnegöl, Gemlik, Mudanya ve Gürsu dahil Bursa'nın tüm ilçelerinden ve ULUTEK Teknopark'taki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Bursa'daki tedarikçimize ayıp ihbarını KEP ile yapabilir miyiz?",
        answer: "Tedarikçinizin KEP adresi varsa evet. Türk Ticaret Kanunu tacirler arası ihbarlarda güvenli elektronik imzalı KEP'i noter ve taahhütlü mektupla birlikte sayar. Tedarikçinin KEP adresi yoksa noter yolunu kullanmanız gerekir.",
      },
      {
        question: "Bursa'da birden fazla fabrikası olan şirket tek KEP adresiyle çalışabilir mi?",
        answer: "Evet. KEP adresi tüzel kişiliğe, yani şirket unvanına bağlıdır. Farklı fabrikalar aynı şirkete aitse tek kurumsal adres yeterlidir; isterseniz birimler için ek hesap açılabilir.",
      },
      {
        question: "KEP adresimizi Bursa'daki müşterilerimize nasıl bildiririz?",
        answer: "KEP adresinizi antetli kâğıt, e-posta imzası, sözleşmelerin tebligat maddesi ve web sitenizde paylaşabilirsiniz. Sözleşmelere taraflar arası bildirimlerin KEP ile yapılacağını yazmak uyuşmazlık riskini azaltır.",
      },
    ],
  },
  antalya: {
    metaTitle: "Antalya KEP Adresi Al | Turizm ve Gayrimenkul",
    metaDescription: "Antalya'daki otel, turizm acentesi, gayrimenkul ve tarım firmaları için BTK yetkili KEP adresi. Sezon sözleşmeleri için online başvuru.",
    intro: "Antalya'da KEP adresi online başvuruyla alınır, ofis ziyareti gerekmez. Otel işletmeleri, turizm acenteleri, gayrimenkul firmaları ve sera üreticileri; sezonluk sözleşmelerde fesih, temerrüt ve ihtar bildirimlerini KEP ile gönderip teslim zamanını delil olarak saklayabilir.",
    sections: [
      {
        q: "Antalya'daki otel ve turizm firmaları KEP'i hangi durumlarda kullanır?",
        a: "Turizmde tur operatörü, acente, tedarikçi ve personel sözleşmeleri büyük ölçüde sezona bağlıdır; sezon başında ve sonunda fesih, kontenjan iptali ve ödeme ihtarı bildirimleri yoğunlaşır. Lara, Belek, Kemer veya Manavgat'taki bir otel işletmesi, karşı tarafın KEP adresi varsa bu bildirimleri noter beklemeden gönderebilir. Teslim zamanı kaydı, sözleşmedeki bildirim sürelerine uyulduğunu kanıtlamayı kolaylaştırır.",
      },
      {
        q: "Gayrimenkul ve inşaat firmaları için KEP ne sağlar?",
        a: "Antalya'da konut projeleri ve yabancıya satışların yoğun olduğu Konyaaltı, Muratpaşa ve Alanya'da faaliyet gösteren inşaat ve emlak firmaları, taşeronlarla ve kat karşılığı sözleşme taraflarıyla yaşanan gecikme uyuşmazlıklarında ihtar göndermek zorunda kalabilir. Taraflar kurumsal ise KEP, bu ihtarların hızlı ve ispatlanabilir biçimde iletilmesini sağlar. Bireysel alıcıların çoğunun KEP adresi olmadığını, onlar için noter yolunun geçerli olduğunu unutmayın.",
      },
    ],
    areas: "Muratpaşa, Konyaaltı, Kepez, Aksu, Döşemealtı, Alanya, Manavgat, Serik, Kemer ve Kumluca dahil Antalya'nın tüm ilçelerinden; Antalya OSB, Antalya Serbest Bölgesi ve Antalya Teknokent'teki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Antalya'daki otelimiz için KEP adresi şirket adına mı alınmalı?",
        answer: "Otel bir şirket tarafından işletiliyorsa KEP adresi o şirketin unvanına alınır. Yasal bildirimler sözleşmenin tarafı olan tüzel kişi adına gönderildiği için şahıs adına alınmış bir KEP adresi şirketi temsil etmez.",
      },
      {
        question: "Sezon dışında KEP adresimi kullanmasam da ücret öder miyim?",
        answer: "KEP paketleri yıllık olarak satılır; kullanım yoğunluğundan bağımsız olarak paket süresi boyunca adresiniz aktif kalır. Gelen iletileri sezon dışında da takip etmeniz önemlidir, çünkü size gönderilen bir ihtar teslim anında hüküm doğurur.",
      },
      {
        question: "Antalya'da KEP ve e-imzayı birlikte alabilir miyim?",
        answer: "Evet. KEP iletilerini imzalamak için genellikle nitelikli elektronik imza kullanılır. E-imza USB token'ı Antalya'ya kargoyla gönderilir, KEP adresi ise online açılır; kurulumu telefon ve WhatsApp üzerinden birlikte yaparız.",
      },
    ],
  },
  kocaeli: {
    metaTitle: "Kocaeli KEP Adresi Al | Gebze, Dilovası, İzmit",
    metaDescription: "Kocaeli'deki sanayi, kimya ve lojistik firmaları için BTK yetkili KEP adresi. GOSB, Dilovası ve İzmit firmalarına online başvuru, hızlı aktivasyon.",
    intro: "Kocaeli'de KEP adresi online alınır ve kimlik doğrulama sonrası genellikle aynı gün açılır. Gebze, Dilovası ve İzmit'teki sanayi firmaları; tedarikçi, taşeron ve müşterilerine yaptığı fesih, temerrüt ve ayıp ihbarlarını KEP ile, gönderim ve teslim zamanı kayıtlı olarak iletebilir.",
    sections: [
      {
        q: "Kocaeli'deki sanayi firmaları KEP'i neden tercih ediyor?",
        a: "GOSB, TOSB ve Dilovası OSB gibi bölgelerde çok sayıda üretici, aynı tedarik zinciri içinde birbirine bağlı çalışır. Sevkiyat gecikmesi, kalite reddi veya sözleşme feshi gibi bildirimlerde gün kaybı ciddi maliyet doğurur. Taraflar KEP kullandığında ihbar dakikalar içinde ulaşır, teslim kaydı oluşur ve noter randevusu beklenmez. Bu da yoğun sevkiyat takvimiyle çalışan Kocaeli firmaları için pratik bir avantajdır.",
      },
      {
        q: "Körfez ve İzmit'teki kimya, enerji ve liman firmaları için KEP nasıl kullanılır?",
        a: "Körfez, Derince ve İzmit çevresindeki petrokimya, enerji ve liman işletmeleri; taşeron hizmet alımları, bakım sözleşmeleri ve depolama anlaşmalarında süreli bildirimlerle çalışır. Sözleşmede bildirimlerin KEP ile yapılacağı yazıldığında, taraflar arasındaki tüm resmî yazışmalar tek bir ispatlanabilir kanalda toplanır. Bu, iş sağlığı ve güvenliği gibi konulardaki yazılı uyarıların kayıt altına alınmasında da işe yarar.",
      },
    ],
    areas: "İzmit, Gebze, Darıca, Çayırova, Dilovası, Körfez, Derince, Gölcük ve Kartepe dahil Kocaeli'nin tüm ilçelerinden; Bilişim Vadisi ve GOSB Teknopark'taki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Kocaeli'deki taşeron firmalarımıza KEP ile ihtar gönderebilir miyiz?",
        answer: "Taşeron firma bir KEP adresine sahipse evet. Sözleşmeye taraflar arası bildirimlerin KEP adresleri üzerinden yapılacağını eklemeniz, ileride KEP adresi olmadığı gerekçesiyle yaşanabilecek tartışmaları önler.",
      },
      {
        question: "Gebze'deki firmamız için KEP başvurusu ne kadar sürer?",
        answer: "Gerekli şirket belgeleri hazırsa başvuru ve kimlik doğrulama aynı gün tamamlanır, KEP adresiniz genellikle aynı gün aktif olur. Tüm süreç online yürür.",
      },
      {
        question: "KEP iletileri ne kadar süre saklanır?",
        answer: "KEP iletileri ve bunlara ait delil kayıtları, BTK düzenlemeleri çerçevesinde KEP hizmet sağlayıcısı tarafından uzun süre saklanır. Böylece yıllar sonra bile bir bildirimin ne zaman gönderildiğini ve teslim edildiğini kanıtlayabilirsiniz.",
      },
    ],
  },
  sakarya: {
    metaTitle: "Sakarya KEP Adresi Al | Adapazarı Ofisinden Destek",
    metaDescription: "Sakarya'daki şirketler için BTK yetkili KEP adresi. Erenler'deki ofisimizden randevuyla yüz yüze kurulum desteği veya tamamen online başvuru.",
    intro: "Sakarya'da KEP adresini online başvuruyla alabilir ya da Erenler'deki Meydan54 AVM ofisimize randevuyla gelip kurulumu birlikte yapabilirsiniz. Adapazarı, Serdivan ve Hendek'teki şirketler; fesih, temerrüt ve ihtar bildirimlerini KEP ile, teslim zamanı kayıtlı olarak gönderebilir.",
    sections: [
      {
        q: "Sakarya'daki otomotiv tedarikçileri KEP'i nasıl kullanabilir?",
        a: "Arifiye ve çevresindeki büyük otomotiv üreticilerine parça ve hizmet sağlayan Sakarya firmaları, sipariş değişikliği, fiyat güncellemesi ve teslim gecikmesi gibi konularda yazılı ve ispatlanabilir bildirim yapmak zorundadır. Karşı tarafın KEP adresi varsa bu bildirimler noter beklemeden gönderilir ve teslim anı kayıt altına alınır. Hendek ve Akyazı'daki organize sanayi bölgelerinde çalışan üreticiler için de aynı kolaylık geçerlidir.",
      },
      {
        q: "Sakarya'da yüz yüze KEP desteği almak mümkün mü?",
        a: "Evet. Merkezimiz Sakarya'da olduğu için Erenler'deki ofisimize randevuyla gelerek KEP hesabınızın kurulumunu, e-imza ile ileti imzalamayı ve ilk gönderimi birlikte yapabilirsiniz. Özellikle KEP'i ilk kez kullanacak muhasebe ve insan kaynakları birimleri için bu yüz yüze anlatım işleri hızlandırır. İsterseniz aynı ziyarette e-imzanızı da elden teslim alabilirsiniz.",
      },
    ],
    areas: "Adapazarı, Serdivan, Erenler, Arifiye, Sapanca, Hendek, Akyazı, Karasu, Geyve ve Pamukova dahil Sakarya'nın tüm ilçelerine online hizmet veriyoruz; Sakarya Teknokent'teki firmalar ve Erenler ofisimize gelebilecek müşteriler için yüz yüze destek de mümkün.",
    faqs: [
      {
        question: "Sakarya'da KEP adresi için ofisinize gelmek zorunlu mu?",
        answer: "Zorunlu değil. KEP başvurusu tamamen online yapılabilir. Yüz yüze anlatım ve kurulum isteyen Sakaryalı müşterilerimiz Erenler'deki ofisimize randevuyla gelebilir.",
      },
      {
        question: "SATSO üyesi şirketimiz için KEP adresi hangi unvanla alınır?",
        answer: "KEP adresi, ticaret sicilinde kayıtlı şirket unvanınıza alınır. Başvuruda vergi numarası, yetkili kişinin kimliği ve imza yetkisini gösteren belge istenir.",
      },
      {
        question: "KEP ve e-imzayı Sakarya'da aynı gün alabilir miyim?",
        answer: "Evet. Randevuyla ofisimize gelirseniz e-imza USB token'ınızı aynı gün elden teslim alabilir, KEP adresinizin kurulumunu da aynı ziyarette yapabilirsiniz.",
      },
    ],
  },
  konya: {
    metaTitle: "Konya KEP Adresi Al | Sanayi ve Tarım Makineleri",
    metaDescription: "Konya'daki sanayi, tarım makineleri, döküm ve gıda firmaları için BTK yetkili KEP adresi. Bayi ve tedarikçi bildirimleri için online başvuru.",
    intro: "Konya'da KEP adresi online alınır, ofis ziyareti veya kargo gerekmez. Konya OSB'deki tarım makineleri, döküm ve otomotiv yan sanayi üreticileri; bayilerine ve tedarikçilerine gönderdikleri fesih, temerrüt ve ödeme ihtarlarını KEP ile ispatlanabilir biçimde iletebilir.",
    sections: [
      {
        q: "Konya'daki tarım makineleri üreticileri KEP'i hangi yazışmalarda kullanır?",
        a: "Tarım makineleri sektöründe üretici ile bayi arasındaki satışlar çoğunlukla vadeli ve sezona bağlıdır. Hasat dönemi sonrası tahsilat gecikmeleri, bayilik sözleşmesi feshi veya bölge değişikliği gibi bildirimlerin ispatlanabilir yapılması gerekir. Bayi KEP adresine sahipse, Konya OSB'deki bir üretici bu ihtarları noter masrafı olmadan gönderebilir ve teslim tarihini delil olarak saklayabilir.",
      },
      {
        q: "Konya'nın döküm ve gıda sektöründe KEP neden işe yarar?",
        a: "Döküm ve metal işleme firmaları ana sanayiye uzun vadeli sözleşmelerle parça üretir; hammadde fiyatlarındaki ani değişimler fiyat revizyonu bildirimlerini sık hale getirir. Gıda ve un sanayisinde ise alım satım sözleşmelerinde kalite itirazları süreye bağlıdır. Her iki durumda da KEP, KTO ve KSO üyesi firmaların bildirimlerini hızlı ve ispatlanabilir yapmasını sağlar.",
      },
    ],
    areas: "Selçuklu, Meram, Karatay, Ereğli, Akşehir, Beyşehir, Seydişehir ve Karaman yolu üzerindeki sanayi bölgeleri dahil Konya'nın tüm ilçelerinden ve Konya Teknokent'teki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Konya'daki bayilerimize toplu bildirim gönderebilir miyiz?",
        answer: "KEP ile her bayinin KEP adresine ayrı ayrı ileti gönderebilirsiniz; her gönderim için ayrı teslim kaydı oluşur. Bayilerinizin KEP adresini sözleşmeye yazdırmanız bu süreci kolaylaştırır.",
      },
      {
        question: "Şahıs firması olarak Konya'da KEP adresi alabilir miyim?",
        answer: "Evet. Şahıs işletmeleri ve serbest meslek sahipleri bireysel KEP adresi alabilir. Sermaye şirketlerinde ise KEP adresi şirket unvanına alınır.",
      },
      {
        question: "KEP iletisini imzalamak için ayrıca e-imza gerekir mi?",
        answer: "Hukuki ispat gücü için KEP iletileri genellikle nitelikli elektronik imza ile imzalanır. E-imzanız yoksa KEP ile birlikte alabilirsiniz; USB token Konya'ya kargoyla gönderilir.",
      },
    ],
  },
  gaziantep: {
    metaTitle: "Gaziantep KEP Adresi Al | İhracatçı ve OSB Firmaları",
    metaDescription: "Gaziantep'teki halı, iplik, gıda ve ihracat firmaları için BTK yetkili KEP adresi. Fason ve tedarikçi bildirimleri için online başvuru.",
    intro: "Gaziantep'te KEP adresi online başvuruyla alınır, genellikle aynı gün aktif olur. Gaziantep OSB'deki halı, iplik ve gıda üreticileri; fason üreticilere, tedarikçilere ve yurt içi alıcılara gönderdikleri fesih, temerrüt ve ayıp ihbarlarını KEP ile, teslim zamanı kayıtlı olarak iletebilir.",
    sections: [
      {
        q: "Gaziantep'teki halı ve iplik üreticileri KEP'i nasıl kullanır?",
        a: "Makine halısı ve iplik üretiminde siparişler yüksek hacimli, teslim süreleri sıkıdır; fason boyama veya dokuma yaptıran firmalar kalite sorunlarını kısa süre içinde bildirmek zorundadır. GSO üyesi bir üretici, karşı tarafın KEP adresi varsa ayıp ihbarını aynı gün gönderip teslim zamanını kayıt altına alabilir. Bu, sonradan ihbar süresinin geçtiği yönündeki itirazlara karşı güçlü bir kanıttır.",
      },
      {
        q: "Gaziantep'in gıda ve ihracat firmaları için KEP ne sağlar?",
        a: "Antep fıstığı, baklava ve kuru gıda gibi ürünlerde yurt içi distribütör ve zincir market sözleşmeleri yaygındır; ödeme gecikmesi ve sözleşme feshi bildirimleri bu ilişkilerin önemli bir parçasıdır. Yurt içindeki kurumsal karşı taraflara gönderilen bu bildirimler KEP ile ispatlanabilir hale gelir. Yurt dışındaki alıcılar ise genellikle Türk KEP adresine sahip olmadığı için onlar için sözleşmedeki bildirim yöntemi geçerlidir.",
      },
    ],
    areas: "Şahinbey, Şehitkamil, Oğuzeli, Nizip, İslahiye ve Nurdağı dahil Gaziantep'in tüm ilçelerinden; Gaziantep OSB, Başpınar sanayi bölgesi ve Gaziantep Teknopark'taki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Gaziantep OSB'deki fabrikamız için KEP adresi nasıl alınır?",
        answer: "Şirket unvanı, vergi numarası, yetkili kişinin kimlik bilgileri ve imza yetkisini gösteren belgeyle online başvuru yapılır. Kimlik doğrulama tamamlandığında KEP adresiniz genellikle aynı gün açılır.",
      },
      {
        question: "Fason üreticimize KEP ile gönderdiğimiz ihbar geçerli olur mu?",
        answer: "Fason üretici bir KEP adresine sahipse ve ileti güvenli elektronik imza ile gönderilmişse, Türk Ticaret Kanunu'na göre noter ve taahhütlü mektupla aynı ispat gücüne sahip bir yolla ihbar yapmış olursunuz.",
      },
      {
        question: "Gaziantep'te KEP için kurulum desteği veriyor musunuz?",
        answer: "Evet. KEP hesabınızın kullanımı ve e-imza ile ileti gönderimi için telefon ve WhatsApp üzerinden uzaktan destek veriyoruz.",
      },
    ],
  },
  adana: {
    metaTitle: "Adana KEP Adresi Al | Çukurova Sanayi ve Tarım",
    metaDescription: "Adana'daki sanayi, tarım ürünleri ve ticaret firmaları için BTK yetkili KEP adresi. Hacı Sabancı OSB ve tüm ilçelere online başvuru.",
    intro: "Adana'da KEP adresi online alınır, kimlik doğrulama sonrası genellikle aynı gün kullanıma açılır. Hacı Sabancı OSB'deki üreticiler, pamuk ve narenciye ticareti yapan firmalar ve avukatlar; fesih, temerrüt ve ihtar bildirimlerini KEP ile, teslim zamanı kayıtlı biçimde gönderebilir.",
    sections: [
      {
        q: "Adana'daki tarım ürünleri ticareti yapan firmalar KEP'i neden kullanır?",
        a: "Çukurova'da pamuk, mısır ve narenciye ticareti genellikle hasat dönemine bağlı alım sözleşmeleriyle yürür. Teslim edilmeyen ürün, kalite itirazı veya ödeme gecikmesi durumunda bildirimlerin süresinde ve ispatlanabilir şekilde yapılması gerekir. Karşı taraf kurumsal bir firma ve KEP adresi varsa, ihtar KEP ile gönderilir; teslim kaydı ileride arabuluculuk veya dava sürecinde delil olarak kullanılabilir.",
      },
      {
        q: "Hacı Sabancı OSB'deki sanayi firmaları için KEP'in avantajı nedir?",
        a: "Organize sanayideki tekstil, gıda, plastik ve kimya üreticileri; makine bakımı, enerji, nakliye ve hammadde tedariki için çok sayıda sözleşmeyle çalışır. ADASO üyesi bir firma, bu sözleşmelerdeki fesih ve süre uzatımı bildirimlerini KEP ile göndererek hem noter masrafından tasarruf eder hem de tüm resmî yazışmalarını tek bir arşivde toplar.",
      },
    ],
    areas: "Seyhan, Çukurova, Yüreğir, Sarıçam, Ceyhan, Kozan ve İmamoğlu dahil Adana'nın tüm ilçelerinden; Hacı Sabancı OSB, Yumurtalık Serbest Bölgesi ve Çukurova Teknokent'teki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Adana'da çiftçiye veya üreticiye KEP ile ihtar gönderebilir miyim?",
        answer: "Bireysel üreticilerin büyük çoğunluğunun KEP adresi yoktur. KEP iletisi yalnızca KEP adresine teslim edildiği için, karşı tarafın KEP adresi yoksa ihtarı noter yoluyla göndermeniz gerekir.",
      },
      {
        question: "Adana Barosu avukatları KEP'i hangi işlerde kullanabilir?",
        answer: "Avukatlar dava öncesi ihtarnameleri ve temerrüt bildirimlerini kurumsal karşı tarafların KEP adreslerine gönderebilir. Gönderim ve teslim kaydı, ihtarın tebliğ tarihini göstermesi bakımından dosyaya eklenebilir.",
      },
      {
        question: "Adana'daki şirketimiz için KEP paketi kaç yıllık alınmalı?",
        answer: "KEP adresi şirketinizin resmî iletişim adresi olarak kullanılacağı için çoğu firma çok yıllık paketi tercih eder; böylece adres değişmez ve yenileme takibi azalır. Güncel paket bilgisi için bize ulaşabilirsiniz.",
      },
    ],
  },
  mersin: {
    metaTitle: "Mersin KEP Adresi Al | Liman, Lojistik ve Gümrük",
    metaDescription: "Mersin'deki lojistik, gümrük müşavirliği, narenciye ihracatı ve liman firmaları için BTK yetkili KEP adresi. Online başvuru, hızlı aktivasyon.",
    intro: "Mersin'de KEP adresi online başvuruyla alınır ve genellikle aynı gün aktif olur. Liman çevresindeki lojistik firmaları, gümrük müşavirleri, Mersin Serbest Bölgesi'ndeki şirketler ve narenciye ihracatçıları; fesih, temerrüt ve hasar bildirimlerini KEP ile teslim zamanı kayıtlı olarak gönderebilir.",
    sections: [
      {
        q: "Mersin'deki lojistik ve taşımacılık firmaları KEP'i neden kullanır?",
        a: "Liman, antrepo ve kara taşımacılığı arasındaki hizmet zincirinde gecikme, hasar ve ardiye ücreti uyuşmazlıkları sık yaşanır; bu uyuşmazlıklarda bildirimin ne zaman yapıldığı çoğu zaman belirleyicidir. MTSO üyesi bir lojistik firması, kurumsal iş ortağına hasar ihbarını KEP ile gönderdiğinde teslim anı kayıt altına alınır. Böylece sözleşmedeki bildirim süresine uyulduğu kolayca kanıtlanır.",
      },
      {
        q: "Gümrük müşavirleri ve serbest bölge firmaları için KEP ne sağlar?",
        a: "Gümrük müşavirlik firmaları, müşterileriyle yaptıkları vekâlet ve hizmet sözleşmelerinde ücret, sorumluluk ve fesih konularında yazılı bildirimlere ihtiyaç duyar. Mersin Serbest Bölgesi'ndeki ticaret ve depolama şirketleri de yurt içi kurumsal müşterileriyle aynı ihtiyacı paylaşır. KEP, bu bildirimleri tek bir ispatlanabilir kanalda toplar ve gönderilen tüm iletileri arşivler.",
      },
    ],
    areas: "Akdeniz, Yenişehir, Mezitli, Toroslar, Tarsus, Erdemli, Silifke ve Anamur dahil Mersin'in tüm ilçelerinden; Mersin Serbest Bölgesi, Tarsus OSB ve Mersin Teknopark'taki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Mersin'deki gümrük müşavirliği firmamız için KEP gerekli mi?",
        answer: "Sermaye şirketi olarak kurulmuş müşavirlik firmalarının yasal ihbarlarını ispatlanabilir bir kanaldan yapması gerekir; KEP bunun en hızlı yoludur. Ayrıca müşterilerle yazışmaların teslim kaydı, olası sorumluluk tartışmalarında belge niteliği taşır.",
      },
      {
        question: "Yabancı armatöre veya alıcıya KEP gönderebilir miyiz?",
        answer: "KEP yalnızca Türkiye'deki KEP adreslerine teslim edilir. Yabancı bir firmanın Türk KEP adresi yoksa, bildirimi sözleşmede öngörülen uluslararası yöntemle yapmanız gerekir.",
      },
      {
        question: "Mersin'de KEP adresi için kargo bekler miyim?",
        answer: "Hayır. KEP tamamen online bir hizmettir; başvuru, kimlik doğrulama ve aktivasyon uzaktan yapılır. Kargo yalnızca e-imza USB token'ı için gerekir.",
      },
    ],
  },
  eskisehir: {
    metaTitle: "Eskişehir KEP Adresi Al | Havacılık ve Raylı Sistem",
    metaDescription: "Eskişehir'deki havacılık, raylı sistemler, beyaz eşya ve seramik firmaları için BTK yetkili KEP adresi. Tedarikçi bildirimleri için online başvuru.",
    intro: "Eskişehir'de KEP adresi online alınır, ofise gitmeye gerek kalmaz. Eskişehir OSB'deki havacılık, raylı sistemler, beyaz eşya ve seramik tedarikçileri; ana yükleniciye ve alt tedarikçilere gönderdikleri fesih, temerrüt ve değişiklik bildirimlerini KEP ile ispatlanabilir biçimde iletebilir.",
    sections: [
      {
        q: "Eskişehir'deki havacılık ve raylı sistem tedarikçileri KEP'i nasıl kullanır?",
        a: "Havacılık motorları ve raylı sistem araçları için parça üreten tedarikçiler, sıkı kalite ve teslim şartları içeren sözleşmelerle çalışır. Teknik değişiklik talepleri, teslim takvimi revizyonları ve uygunsuzluk bildirimlerinin yazılı ve ispatlanabilir olması önemlidir. Ana yüklenici KEP adresine sahipse, Eskişehir OSB'deki bir tedarikçi bu bildirimleri noter beklemeden gönderip teslim zamanını kayıt altında tutabilir.",
      },
      {
        q: "Eskişehir'deki üniversite kökenli teknoloji firmaları KEP'ten nasıl yararlanır?",
        a: "Anadolu, Eskişehir Osmangazi ve Eskişehir Teknik üniversitelerinin çevresinde kurulan teknoloji girişimleri; yatırımcı, müşteri ve kamu destek programlarıyla yaptıkları sözleşmelerde süreli bildirimlerle karşılaşır. Proje teslim bildirimleri, hakediş itirazları ve sözleşme feshi gibi yazışmaları KEP ile yapmak, küçük ekiplerin hukuki takibini kolaylaştırır. ESO ve ETO üyesi firmalar için de aynı süreç geçerlidir.",
      },
    ],
    areas: "Odunpazarı, Tepebaşı, Sivrihisar, Alpu, Mihalıççık ve İnönü dahil Eskişehir'in tüm ilçelerinden; Eskişehir OSB ve teknopark bölgelerindeki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Eskişehir'deki ana yüklenicimiz KEP adresi istiyor, ne yapmalıyız?",
        answer: "Şirket unvanınıza kurumsal KEP adresi alarak ana yükleniciye bildirmeniz yeterlidir. Başvuru online yapılır, kimlik doğrulaması sonrası adres genellikle aynı gün açılır.",
      },
      {
        question: "Teknoloji girişimimiz için KEP gerekli mi?",
        answer: "Limited veya anonim şirket olarak kurulmuş girişimlerin yasal ihbarları ispatlanabilir bir kanaldan yapması gerekir. KEP, noter masrafı olmadan bu ihtiyacı karşılar ve küçük ekipler için kullanımı kolaydır.",
      },
      {
        question: "KEP hesabını birden fazla çalışan kullanabilir mi?",
        answer: "Kurumsal KEP adresinde yetkilendirme yapılarak farklı kullanıcılar tanımlanabilir. Hangi kişinin şirket adına ileti gönderebileceğini belirlemek, iç kontrol açısından önemlidir.",
      },
    ],
  },
  samsun: {
    metaTitle: "Samsun KEP Adresi Al | Medikal, Tarım ve Liman",
    metaDescription: "Samsun'daki medikal cihaz, tarım, gıda ve liman firmaları için BTK yetkili KEP adresi. İlkadım, Atakum ve tüm ilçelere online başvuru.",
    intro: "Samsun'da KEP adresi online başvuruyla alınır, kimlik doğrulama sonrası genellikle aynı gün aktif olur. Merkez OSB'deki medikal cihaz üreticileri, Bafra ve Çarşamba ovasındaki tarım-gıda firmaları ve liman işletmeleri; fesih, temerrüt ve ihtar bildirimlerini KEP ile teslim zamanı kayıtlı olarak gönderebilir.",
    sections: [
      {
        q: "Samsun'daki medikal cihaz üreticileri KEP'i hangi yazışmalarda kullanır?",
        a: "Samsun, medikal cihaz üretiminde öne çıkan şehirlerden biridir. Hastane ve distribütör sözleşmelerinde teslim, servis ve garanti yükümlülükleri; kamu alımlarında ise süre ve şartname uyumu önemlidir. Kurumsal karşı taraflara gönderilen teslim gecikmesi, fiyat revizyonu veya fesih bildirimleri KEP ile yapıldığında teslim anı delil kaydına geçer. Samsun TSO üyesi firmalar bu sayede yazışmalarını noter masrafı olmadan ispatlanabilir hale getirir.",
      },
      {
        q: "Samsun'un tarım, gıda ve liman firmaları için KEP neden önemli?",
        a: "Fındık, hububat ve sebze ticaretinde alım sözleşmeleri hasat dönemine sıkışır; kalite itirazları ve ödeme ihtarları kısa sürede yapılmalıdır. Samsun Limanı çevresindeki depolama ve nakliye firmaları da hasar ve gecikme bildirimlerinde benzer süre baskısıyla karşılaşır. Karşı taraf kurumsal ve KEP adresi olan bir firmaysa bu bildirimler KEP ile anında ve kayıtlı şekilde iletilir.",
      },
    ],
    areas: "İlkadım, Atakum, Canik, Tekkeköy, Bafra, Çarşamba, Terme ve Vezirköprü dahil Samsun'un tüm ilçelerinden; Samsun Merkez OSB ve Samsun Teknopark'taki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Samsun'daki medikal firmamız kamu kurumlarına KEP ile yazışabilir mi?",
        answer: "KEP adresi bulunan kurumlara gönderilen iletiler teslim kaydıyla birlikte ulaşır. Ancak her kurumun başvuru kabul yöntemi farklı olduğundan, göndermeden önce ilgili kurumun KEP adresini ve kabul ettiği kanalları kontrol etmeniz önerilir.",
      },
      {
        question: "Samsun'da KEP adresi ne kadar sürede açılır?",
        answer: "Gerekli belgeler tamamsa başvuru ve kimlik doğrulama aynı gün tamamlanır; KEP adresiniz genellikle aynı gün aktif olur.",
      },
      {
        question: "KEP ile gönderdiğim iletinin okunduğunu nasıl anlarım?",
        answer: "KEP sistemi iletinin karşı tarafın KEP kutusuna teslim edildiği anı delil olarak kaydeder. Hukuken önemli olan genellikle teslim anıdır; ileti alıcının erişimine sunulduğunda tebliğ edilmiş sayılır.",
      },
    ],
  },
  denizli: {
    metaTitle: "Denizli KEP Adresi Al | Tekstil ve Mermer Firmaları",
    metaDescription: "Denizli'deki ev tekstili, mermer-traverten ve kablo üreticileri için BTK yetkili KEP adresi. Fason ve tedarikçi bildirimleri için online başvuru.",
    intro: "Denizli'de KEP adresi online alınır ve genellikle aynı gün aktif olur. Denizli OSB'deki ev tekstili üreticileri, mermer ve traverten işletmeleri ile kablo firmaları; fason üreticilere, tedarikçilere ve yurt içi alıcılara gönderdikleri fesih, temerrüt ve ayıp ihbarlarını KEP ile ispatlanabilir biçimde iletebilir.",
    sections: [
      {
        q: "Denizli'deki ev tekstili üreticileri KEP'i nasıl kullanır?",
        a: "Havlu, bornoz ve nevresim üretiminde iplik, boya ve dikim aşamalarının önemli bir kısmı fason işletmelerle yürür. Renk farkı, ölçü hatası veya geç teslim gibi sorunlarda ayıp ihbarının kısa sürede yapılması hak kaybını önler. DSO ve DTO üyesi bir üretici, fason işletmenin KEP adresi varsa ihbarı aynı gün gönderip teslim zamanını kayıt altına alabilir; böylece süre tartışması ortadan kalkar.",
      },
      {
        q: "Denizli'nin mermer ve traverten işletmeleri için KEP ne sağlar?",
        a: "Ocak işletmeleri, fabrikalar ve nakliyeciler arasındaki sözleşmelerde blok teslimi, kalite sınıfı ve ödeme vadesi sık tartışma konusudur. Honaz ve Kaklık çevresindeki işletmeler, kurumsal iş ortaklarına gönderdikleri ödeme ihtarlarını ve sözleşme fesihlerini KEP ile yaparak noter masrafından tasarruf eder. Tüm yazışmaların tek bir arşivde saklanması, yıllar süren iş ilişkilerinde belge takibini kolaylaştırır.",
      },
    ],
    areas: "Merkezefendi, Pamukkale, Honaz, Sarayköy, Buldan, Çivril, Acıpayam ve Tavas dahil Denizli'nin tüm ilçelerinden; Denizli OSB ve Pamukkale Teknokent'teki firmalardan online başvuru alıyoruz.",
    faqs: [
      {
        question: "Denizli'deki fason üreticimizin KEP adresi yoksa ne yapmalıyız?",
        answer: "KEP iletisi yalnızca KEP adresine teslim edilebilir. Fason üreticinin KEP adresi yoksa ihbarı noter veya iadeli taahhütlü mektupla göndermeniz gerekir. Yeni sözleşmelerde tarafların KEP adreslerini yazmak ileride işinizi kolaylaştırır.",
      },
      {
        question: "İhracatçı firmamız yabancı alıcılara KEP gönderebilir mi?",
        answer: "Hayır, KEP Türkiye'deki KEP adresleri arasında çalışır. Yabancı alıcılarla yazışmalarda sözleşmedeki uluslararası bildirim hükümleri geçerlidir; KEP ise yurt içi tedarikçi ve iş ortaklarıyla yazışmada kullanılır.",
      },
      {
        question: "Denizli'de KEP kurulumunda destek alabilir miyim?",
        answer: "Evet. KEP hesabınızın kullanımı, e-imza ile ileti gönderme ve gelen iletilerin takibi için telefon ve WhatsApp üzerinden uzaktan destek veriyoruz.",
      },
    ],
  },
}

export const zdLocal: Record<string, LocalProductContent> = {
  istanbul: {
    metaTitle: "İstanbul Zaman Damgası Al | Yazılım ve Fintech",
    metaDescription: "İstanbul'daki yazılım, fintech ve hukuk firmaları için TÜBİTAK onaylı, RFC 3161 uyumlu zaman damgası. Kaynak kod ve sözleşme tarih kanıtı.",
    intro: "Zaman damgası, bir dosyanın belirli bir anda var olduğunu ve o andan sonra değişmediğini kriptografik olarak kanıtlar. İstanbul'daki yazılım şirketleri, fintech'ler ve hukuk büroları için kontör bazlı, tamamen online bir hizmettir; her damga bir kontör harcar ve sonucu herkes bağımsız olarak doğrulayabilir.",
    sections: [
      {
        q: "İstanbul'daki yazılım şirketleri zaman damgasını neden kullanır?",
        a: "Maslak, Levent, İTÜ ARI Teknokent ve Teknopark İstanbul'daki yazılım ekipleri; kaynak kod sürümlerini, mimari dokümanları ve müşteriye teslim edilen paketleri zaman damgasıyla tarihlendirir. Bir sürümün özeti (hash) damgalandığında, o kodun belirli bir tarihte sizde olduğu kanıtlanır. Zaman damgası tek başına telif tescili değildir, ancak eser sahipliği ve önce oluşturma tartışmalarında güçlü bir tarih delilidir.",
      },
      {
        q: "Fintech ve finans firmaları zaman damgasını nasıl entegre eder?",
        a: "Ataşehir'deki finans merkezi çevresinde faaliyet gösteren ödeme kuruluşları ve fintech'ler; müşteri onayları, sözleşme versiyonları ve işlem kayıtlarının hangi anda oluştuğunu ispatlamak ister. RFC 3161 uyumlu zaman damgası, belge yönetim sistemine veya uygulamanın arka ucuna entegre edilerek her kayda otomatik damga basılabilir. Böylece kayıtların sonradan değiştirilmediği denetimlerde bağımsız olarak gösterilebilir.",
      },
    ],
    areas: "Kontör satın alma ve kullanım tamamen online olduğu için Şişli, Beşiktaş, Sarıyer, Ataşehir, Kadıköy, Ümraniye ve Pendik dahil İstanbul'un tüm ilçelerindeki firmalara aynı gün hizmet veriyoruz.",
    faqs: [
      { question: "İstanbul'daki yazılım ekibimiz için kaç kontör gerekir?", answer: "Her damga bir kontör harcar. Yalnızca ana sürümleri damgalayan küçük bir ekip için 100 kontör uzun süre yetebilir; her derlemeyi veya her müşteri teslimini damgalayan ekipler 500 veya 1000 kontörlük paketi tercih eder." },
      { question: "Zaman damgası kaynak kodumun telif hakkını tescil eder mi?", answer: "Hayır. Zaman damgası tescil yerine geçmez; kodun belirli bir tarihte var olduğunu ve değişmediğini kanıtlar. Bu kanıt, eser sahipliği veya önce oluşturma uyuşmazlıklarında delil olarak kullanılabilir." },
      { question: "Zaman damgasını kendi yazılımımıza nasıl entegre ederiz?", answer: "Hizmet RFC 3161 standardını kullanır; OpenSSL ve yaygın programlama dillerindeki kütüphanelerle istek gönderilebilir. Entegrasyon için gereken erişim bilgileri ve teknik yönlendirme kontör alımıyla birlikte paylaşılır." },
    ],
  },
  ankara: {
    metaTitle: "Ankara Zaman Damgası Al | Ar-Ge ve Proje Belgeleri",
    metaDescription: "Ankara'daki savunma, mühendislik ve Ar-Ge firmaları için TÜBİTAK onaylı zaman damgası. Proje raporu, şartname ve teknik doküman tarih kanıtı.",
    intro: "Ankara'da zaman damgası, mühendislik ve Ar-Ge firmalarının proje belgelerine hangi tarihte sahip olduklarını kriptografik olarak kanıtlamasını sağlar. TÜBİTAK onaylı, RFC 3161 uyumlu hizmet kontör bazlı ve tamamen online çalışır; damgalanan dosyanın kendisi değil yalnızca özeti gönderildiği için içerik gizli kalır.",
    sections: [
      {
        q: "Ankara'daki savunma ve mühendislik firmaları zaman damgasını nasıl kullanır?",
        a: "Ostim ve İvedik OSB'deki savunma sanayii tedarikçileri ile ODTÜ Teknokent ve Bilkent Cyberpark'taki mühendislik firmaları; tasarım dokümanları, test raporları ve teknik şartname revizyonlarının hangi tarihte hazırlandığını kanıtlamak ister. Zaman damgası dosyanın içeriğini paylaşmadan yalnızca özetini damgaladığı için gizlilik gerektiren dokümanlarda da kullanılabilir. Bu, yüklenici ile alt yüklenici arasındaki teslim tarihi tartışmalarında tarafsız bir kanıt sağlar.",
      },
      {
        q: "Ar-Ge ve hibe projelerinde zaman damgası ne işe yarar?",
        a: "Kamu destekli Ar-Ge projeleri yürüten firmalar ve akademisyenler; ara rapor, ölçüm verisi ve prototip dokümanlarının proje takvimine uygun olarak oluşturulduğunu göstermek ister. Hacettepe ve Ankara Üniversitesi teknokentlerindeki ekipler, kritik veri setlerini düzenli olarak damgalayarak sonradan değiştirilmediklerini kanıtlayabilir. Bu uygulama, bir buluşun önce kimin elinde olduğuna dair tartışmalarda da delil oluşturur.",
      },
    ],
    areas: "Çankaya, Yenimahalle, Etimesgut, Gölbaşı ve Sincan dahil Ankara'nın tüm ilçelerindeki firmalara ve teknokentlere online hizmet veriyoruz; kontörler satın alındıktan sonra hemen kullanılabilir.",
    faqs: [
      { question: "Gizli bir teknik dokümanı damgalarken içeriği paylaşmış olur muyum?", answer: "Hayır. Zaman damgası sunucusuna dosyanın kendisi değil, dosyadan hesaplanan tek yönlü özet (hash) gönderilir. Özetten dosya içeriği geri elde edilemez." },
      { question: "Ankara'daki Ar-Ge firmamız için hangi kontör paketi uygun?", answer: "Aylık birkaç rapor damgalayan ekipler için 100 kontör yeterlidir. Ölçüm verilerini veya günlük kayıtları düzenli damgalayan laboratuvar ve yazılım ekipleri 500 veya 1000 kontörü tercih eder." },
      { question: "Zaman damgası ile e-imza aynı şey mi?", answer: "Hayır. E-imza belgeyi kimin imzaladığını kanıtlar; zaman damgası ise belgenin hangi anda var olduğunu kanıtlar. E-imzalı belgeye zaman damgası eklendiğinde, imzanın sertifika geçerliyken atıldığı da ispatlanmış olur." },
    ],
  },
  izmir: {
    metaTitle: "İzmir Zaman Damgası Al | İhracat Belgeleri ve Ar-Ge",
    metaDescription: "İzmir'deki ihracatçı, gıda ve teknoloji firmaları için TÜBİTAK onaylı zaman damgası. Analiz raporu, sözleşme ve Ar-Ge kayıtlarına tarih kanıtı.",
    intro: "Zaman damgası, İzmir'deki ihracatçı ve teknoloji firmalarının belgelerinin belirli bir tarihte var olduğunu ve değişmediğini bağımsız olarak kanıtlar. TÜBİTAK onaylı ve RFC 3161 uyumlu hizmet kontör bazlı satılır, tamamen online kullanılır; damgalar yıllar sonra da doğrulanabilir.",
    sections: [
      {
        q: "İzmir'deki gıda ve tarım ihracatçıları zaman damgasını neden kullanır?",
        a: "Kuru üzüm, incir, zeytinyağı ve su ürünleri gibi Ege'nin ihraç ürünlerinde laboratuvar analiz raporları ve kalite kontrol kayıtları alıcı itirazlarında belirleyicidir. Bir analiz raporunun yükleme öncesinde hazırlandığını ve sonradan değiştirilmediğini kanıtlamak için rapor dosyası zaman damgasıyla tarihlendirilebilir. Bu kayıt, sevkiyat sonrası çıkan kalite tartışmalarında firmanın elini güçlendirir.",
      },
      {
        q: "İzmir'deki teknoloji firmaları zaman damgasından nasıl yararlanır?",
        a: "Urla'daki İzmir Teknoloji Geliştirme Bölgesi ile Ege ve Dokuz Eylül üniversiteleri çevresindeki teknoloji firmaları; yazılım sürümlerini, tasarım dosyalarını ve deney kayıtlarını damgalayarak oluşturma tarihini kanıtlayabilir. Zaman damgası patent veya tasarım tescili yerine geçmez, ancak tescil öncesindeki çalışmaların tarihini ispatlamada delil olarak kullanılabilir.",
      },
    ],
    areas: "Konak, Bornova, Karşıyaka, Çiğli, Gaziemir, Urla, Torbalı ve Kemalpaşa dahil İzmir'in tüm ilçelerindeki firmalara online hizmet veriyoruz; kontörler satın alındıktan sonra hemen kullanılabilir.",
    faqs: [
      { question: "İhracat sözleşmelerimizi zaman damgasıyla tarihlemek ne sağlar?", answer: "Sözleşmenin veya sipariş onayının hangi versiyonunun hangi tarihte elinizde olduğunu kanıtlarsınız. Taraflar arasında farklı versiyonlar dolaşıyorsa, damgalı versiyon tarih açısından tartışmasız bir referans olur." },
      { question: "Zaman damgası yurt dışında da doğrulanabilir mi?", answer: "Zaman damgası RFC 3161 uluslararası standardını kullanır; damga dosyası standart araçlarla doğrulanabilir. Hukuki değerlendirmesi ise ilgili ülkenin delil kurallarına bağlıdır." },
      { question: "Bir kontörle kaç dosya damgalanır?", answer: "Her zaman damgası isteği bir kontör harcar ve bir özeti damgalar. Çok sayıda dosyayı tek seferde damgalamak isterseniz dosyaları bir arşivde toplayıp arşivin özetini damgalayabilirsiniz." },
    ],
  },
  bursa: {
    metaTitle: "Bursa Zaman Damgası Al | Otomotiv ve Tekstil Tasarım",
    metaDescription: "Bursa'daki otomotiv yan sanayi ve tekstil firmaları için TÜBİTAK onaylı zaman damgası. Teknik çizim, kalite kaydı ve desen dosyalarına tarih kanıtı.",
    intro: "Bursa'da zaman damgası, otomotiv yan sanayi firmalarının teknik çizimlerini ve kalite kayıtlarını, tekstil firmalarının ise desen ve koleksiyon dosyalarını belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlamasını sağlar. Hizmet kontör bazlıdır ve tamamen online kullanılır.",
    sections: [
      {
        q: "Bursa'daki otomotiv yan sanayi firmaları zaman damgasını nasıl kullanır?",
        a: "Nilüfer, Demirtaş ve DOSAB'daki parça üreticileri; ana sanayiye sunduğu teknik çizimleri, ilk numune dosyalarını ve muayene raporlarını revizyon bazında saklar. Bir çizim revizyonunun hangi tarihte onaylandığı, hatalı parça veya geri çağırma tartışmalarında kritik olabilir. Revizyon dosyalarının özetini zaman damgasıyla damgalamak, hangi versiyonun hangi tarihte geçerli olduğunu bağımsız olarak kanıtlar.",
      },
      {
        q: "Bursa'nın tekstil firmaları desen ve tasarımlarını nasıl korur?",
        a: "Bursa ipek ve döşemelik kumaş geleneğiyle tanınır; desen ve koleksiyon tasarımları firmaların en değerli varlıkları arasındadır. Tasarım dosyaları zaman damgasıyla damgalandığında, desenin belirli bir tarihte firmanın elinde olduğu kanıtlanır. Bu kanıt tasarım tescilinin yerine geçmez ama tescil öncesindeki çalışmaların ve olası taklit uyuşmazlıklarındaki önceliğin ispatında delil olarak kullanılabilir.",
      },
    ],
    areas: "Osmangazi, Nilüfer, Yıldırım, İnegöl, Gemlik, Mudanya ve Gürsu dahil Bursa'nın tüm ilçelerindeki firmalara ve ULUTEK Teknopark'a online hizmet veriyoruz.",
    faqs: [
      { question: "Teknik çizimlerimizi her revizyonda damgalamalı mıyız?", answer: "Müşteriye gönderilen veya onaylanan her revizyonu damgalamak en güvenli yöntemdir. Her damga bir kontör harcadığı için yoğun revizyon yapan firmalar 500 veya 1000 kontörlük paketi tercih eder." },
      { question: "Desen dosyamı damgalarken dosyayı sunucuya yüklüyor muyum?", answer: "Hayır. Yalnızca dosyanın özeti (hash) gönderilir; desenin kendisi sizden çıkmaz. Damgayı doğrulamak için orijinal dosyayı saklamanız yeterlidir." },
      { question: "Zaman damgası kalite denetimlerinde kullanılabilir mi?", answer: "Evet. Kalite kayıtlarının belirli bir tarihte oluşturulduğunu ve sonradan değiştirilmediğini göstermek için damgalı kayıtlar denetçiye bağımsız olarak doğrulanabilir bir kanıt sunar." },
    ],
  },
  antalya: {
    metaTitle: "Antalya Zaman Damgası Al | Mimari Proje ve Turizm",
    metaDescription: "Antalya'daki mimarlık, inşaat ve turizm firmaları için TÜBİTAK onaylı zaman damgası. Proje çizimi, hakediş ve sözleşme dosyalarına tarih kanıtı.",
    intro: "Antalya'da zaman damgası, mimarlık ve inşaat firmalarının proje çizimlerini, turizm işletmelerinin ise sözleşme ve fiyat listelerini belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlamasını sağlar. TÜBİTAK onaylı hizmet kontör bazlıdır ve tamamen online kullanılır.",
    sections: [
      {
        q: "Antalya'daki mimarlık ve inşaat firmaları zaman damgasını neden kullanır?",
        a: "Konyaaltı, Muratpaşa ve Alanya'daki konut ve otel projelerinde mimari çizimler, statik hesaplar ve keşif dosyaları defalarca revize edilir. Bir proje revizyonunun işverene hangi tarihte teslim edildiği, hakediş ve gecikme uyuşmazlıklarında belirleyici olabilir. Revizyon dosyalarını zaman damgasıyla damgalamak, hangi çizimin hangi tarihte hazır olduğunu tarafsız biçimde kanıtlar ve özgün tasarımın önceliğini gösterir.",
      },
      {
        q: "Antalya'daki turizm işletmeleri için zaman damgasının pratik faydası nedir?",
        a: "Oteller ve acenteler, tur operatörleriyle yaptığı kontenjan sözleşmelerini ve fiyat listelerini sezon boyunca birkaç kez günceller. Hangi fiyat listesinin hangi tarihte geçerli olduğu, sezon sonu mutabakatlarında tartışma konusu olabilir. Güncel sözleşme ve fiyat dosyalarının damgalanması versiyon karmaşasını önler ve olası uyuşmazlıklarda tarih açısından net bir referans sağlar.",
      },
    ],
    areas: "Muratpaşa, Konyaaltı, Kepez, Alanya, Manavgat, Serik ve Kemer dahil Antalya'nın tüm ilçelerindeki firmalara ve Antalya Teknokent'e online hizmet veriyoruz.",
    faqs: [
      { question: "Mimari projemi zaman damgasıyla korursam tescil etmiş olur muyum?", answer: "Hayır. Zaman damgası tescil yerine geçmez; projenin belirli bir tarihte sizde olduğunu ve değişmediğini kanıtlar. Eser sahipliği tartışmalarında bu tarih kanıtı delil olarak kullanılabilir." },
      { question: "Büyük çizim dosyaları için zaman damgası kullanılabilir mi?", answer: "Evet. Damgalanan şey dosyanın kendisi değil, ondan hesaplanan kısa özettir. Bu nedenle dosya boyutu ne olursa olsun damgalama aynı hızda yapılır ve bir kontör harcar." },
      { question: "Antalya'da zaman damgası kontörü nasıl teslim edilir?", answer: "Kontörler online tanımlanır, kargo gerekmez. Kullanım ve doğrulama için telefon ve WhatsApp üzerinden destek veriyoruz." },
    ],
  },
  kocaeli: {
    metaTitle: "Kocaeli Zaman Damgası Al | Sanayi ve Kalite Kayıtları",
    metaDescription: "Kocaeli'deki sanayi, kimya ve Ar-Ge firmaları için TÜBİTAK onaylı zaman damgası. Test raporu, kalite kaydı ve Ar-Ge verilerine tarih kanıtı.",
    intro: "Kocaeli'de zaman damgası, sanayi ve Ar-Ge firmalarının test raporlarını, kalite kayıtlarını ve proje verilerini belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı, RFC 3161 uyumlu hizmet kontör bazlıdır; belge yönetim sistemlerine entegre edilerek otomatik damgalama da yapılabilir.",
    sections: [
      {
        q: "Kocaeli'deki kimya ve üretim firmaları zaman damgasını nasıl kullanır?",
        a: "Dilovası, Körfez ve GOSB'deki kimya, boya ve metal üreticileri; parti bazında test raporları, analiz sertifikaları ve proses kayıtları üretir. Bir parti için hazırlanan analiz raporunun sevkiyattan önce oluşturulduğunu ve sonradan değiştirilmediğini kanıtlamak, müşteri reklamasyonlarında belirleyici olabilir. Rapor dosyalarının özetini zaman damgasıyla damgalamak bu kanıtı bağımsız ve doğrulanabilir hale getirir.",
      },
      {
        q: "Gebze'deki Ar-Ge merkezleri ve teknoparklar için zaman damgası ne sağlar?",
        a: "Gebze'deki Bilişim Vadisi, GOSB Teknopark ve çevredeki araştırma kurumlarında çalışan ekipler; deney verilerini, laboratuvar defterlerini ve yazılım sürümlerini düzenli olarak damgalayarak ne zaman oluşturulduklarını kanıtlayabilir. Bu, patent başvurusu öncesindeki çalışmaların tarihini belgelemek ve ortak projelerdeki katkıları ayırt etmek için kullanışlı bir yöntemdir.",
      },
    ],
    areas: "İzmit, Gebze, Darıca, Çayırova, Dilovası, Körfez, Derince ve Gölcük dahil Kocaeli'nin tüm ilçelerindeki firmalara online hizmet veriyoruz.",
    faqs: [
      { question: "Kalite kayıtlarımızı otomatik olarak damgalayabilir miyiz?", answer: "Evet. Zaman damgası RFC 3161 standardını kullandığı için belge yönetim veya kalite yazılımınıza entegre edilerek her yeni kayda otomatik damga eklenebilir. Bu kullanımda 1000 kontörlük paket genellikle daha ekonomiktir." },
      { question: "Damgalı bir raporun doğruluğunu müşterimiz nasıl kontrol eder?", answer: "Müşteriniz rapor dosyası ve damga dosyasıyla standart doğrulama araçlarını kullanarak raporun damga tarihinden sonra değişmediğini bağımsız olarak kontrol edebilir." },
      { question: "Zaman damgası laboratuvar defterinin yerine geçer mi?", answer: "Hayır, defter tutma yöntemini değiştirmez; defterin dijital kopyasının belirli bir tarihte var olduğunu kanıtlayan ek bir güvence katmanıdır." },
    ],
  },
  sakarya: {
    metaTitle: "Sakarya Zaman Damgası Al | Erenler Ofisinden Destek",
    metaDescription: "Sakarya'daki firmalar için TÜBİTAK onaylı zaman damgası. Online kontör veya Erenler'deki ofisimizde randevuyla yüz yüze kurulum ve kullanım desteği.",
    intro: "Sakarya'da zaman damgası kontörlerini online alabilir, kullanım ve doğrulama desteğini Erenler'deki Meydan54 AVM ofisimizden randevuyla yüz yüze de alabilirsiniz. Zaman damgası, bir dosyanın belirli bir anda var olduğunu ve sonradan değişmediğini TÜBİTAK onaylı altyapıyla kanıtlar.",
    sections: [
      {
        q: "Sakarya'daki otomotiv tedarikçileri zaman damgasını nasıl kullanır?",
        a: "Arifiye ve Hendek çevresindeki otomotiv yan sanayi firmaları; müşteri onaylı çizimleri, ilk numune raporlarını ve kalite kayıtlarını revizyon bazında saklar. Bir revizyonun hangi tarihte geçerli olduğu, hatalı parça tartışmalarında önem kazanır. Bu dosyaların özetini zaman damgasıyla damgalamak, hangi versiyonun hangi tarihte elinizde olduğunu bağımsız olarak kanıtlar.",
      },
      {
        q: "Sakarya'da muhasebe ve hukuk büroları zaman damgasından nasıl yararlanır?",
        a: "Adapazarı ve Serdivan'daki mali müşavirlik ve hukuk büroları, müşterilerine sundukları rapor, sözleşme taslağı ve görüş yazılarının hangi tarihte hazırlandığını kanıtlamak isteyebilir. E-imzalı belgelere zaman damgası eklendiğinde, imzanın sertifika geçerliyken atıldığı da ispatlanır; bu, yıllar sonra yapılacak doğrulamalarda önemlidir. Ofisimize gelerek bu kullanımı birlikte kurabilirsiniz.",
      },
    ],
    areas: "Adapazarı, Serdivan, Erenler, Arifiye, Sapanca, Hendek, Akyazı ve Karasu dahil Sakarya'nın tüm ilçelerine online hizmet veriyoruz; Sakarya Teknokent'teki firmalar ve Erenler ofisimize gelebilecek müşteriler için yüz yüze destek de mümkün.",
    faqs: [
      { question: "Sakarya'da zaman damgası kurulumu için ofisinize gelebilir miyim?", answer: "Evet. Erenler'deki ofisimize randevuyla gelerek damgalama yazılımının kurulumunu ve ilk damgalamayı birlikte yapabilirsiniz. İsterseniz tüm süreç online da yürütülebilir." },
      { question: "E-imzalı belgelere neden zaman damgası eklenir?", answer: "E-imza sertifikasının süresi dolduktan sonra imzanın ne zaman atıldığını kanıtlamak zorlaşır. İmzaya zaman damgası eklendiğinde imzanın sertifika geçerliyken atıldığı kanıtlanır ve belge yıllar sonra da doğrulanabilir." },
      { question: "Küçük bir firma için hangi paket uygun?", answer: "Ayda birkaç belge damgalayan firmalar için 100 kontör genellikle yeterlidir. Kontör kullanımınızı birlikte değerlendirip uygun paketi önerebiliriz." },
    ],
  },
  konya: {
    metaTitle: "Konya Zaman Damgası Al | Sanayi ve Tarım Makineleri",
    metaDescription: "Konya'daki tarım makineleri, döküm ve gıda firmaları için TÜBİTAK onaylı zaman damgası. Tasarım, test raporu ve sözleşmelere bağımsız tarih kanıtı.",
    intro: "Konya'da zaman damgası, tarım makineleri ve döküm firmalarının tasarım dosyalarını ve test raporlarını belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı hizmet kontör bazlıdır, online kullanılır ve damgalanan dosyanın içeriği paylaşılmaz.",
    sections: [
      {
        q: "Konya'daki tarım makineleri üreticileri zaman damgasını neden kullanır?",
        a: "Konya OSB'deki tarım makineleri üreticileri; pulluk, ekim makinesi ve römork gibi ürünlerde kendi geliştirdikleri tasarımlarla rekabet eder. Bir tasarımın teknik çizimlerini ve prototip test sonuçlarını zaman damgasıyla damgalamak, tasarımın belirli bir tarihte firmada olduğunu kanıtlar. Bu kanıt tasarım veya faydalı model tescilinin yerine geçmez, ancak taklit iddialarında öncelik ispatı için delil olarak kullanılabilir.",
      },
      {
        q: "Konya'nın döküm ve gıda firmaları için zaman damgası ne sağlar?",
        a: "Döküm firmaları ana sanayiye gönderdikleri parçalar için malzeme analizleri ve ölçüm raporları hazırlar; gıda ve un sanayisi ise parti bazında laboratuvar sonuçları üretir. Bu raporların sevkiyattan önce oluşturulduğunu ve sonradan değiştirilmediğini kanıtlamak, reklamasyon süreçlerinde firmanın elini güçlendirir. Konya Teknokent'teki yazılım firmaları ise bu damgalamayı üretim yazılımlarına entegre edebilir.",
      },
    ],
    areas: "Selçuklu, Meram, Karatay, Ereğli, Akşehir ve Beyşehir dahil Konya'nın tüm ilçelerindeki firmalara ve Konya Teknokent'e online hizmet veriyoruz.",
    faqs: [
      { question: "Yeni makine tasarımımızı damgalamak için ne yapmalıyız?", answer: "Teknik çizim ve açıklama dosyalarını bir klasörde toplayıp arşivleyebilir, arşiv dosyasını damgalayabilirsiniz. Tek kontörle tüm tasarım paketinin tarihi kanıtlanır; orijinal arşivi değiştirmeden saklamanız gerekir." },
      { question: "Zaman damgası tasarım tescili yerine geçer mi?", answer: "Hayır. Tescil hakları ancak ilgili kuruma yapılan başvuruyla doğar. Zaman damgası, tescil öncesindeki çalışmalarınızın tarihini kanıtlayan ek bir delildir." },
      { question: "Damgalanmış dosyayı sonradan düzenlersem ne olur?", answer: "Dosyada tek bir bayt bile değişirse özeti değişir ve eski damga yeni dosyayı doğrulamaz. Bu yüzden damgaladığınız orijinal dosyayı değiştirmeden saklamalı, yeni versiyonu ayrıca damgalamalısınız." },
    ],
  },
  gaziantep: {
    metaTitle: "Gaziantep Zaman Damgası Al | Halı Deseni ve Gıda",
    metaDescription: "Gaziantep'teki halı, tekstil ve gıda firmaları için TÜBİTAK onaylı zaman damgası. Desen, reçete ve analiz raporlarına bağımsız tarih kanıtı.",
    intro: "Gaziantep'te zaman damgası, halı ve tekstil firmalarının desen dosyalarını, gıda firmalarının ise ürün reçeteleri ve analiz raporlarını belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı hizmet kontör bazlıdır ve tamamen online kullanılır.",
    sections: [
      {
        q: "Gaziantep'teki halı üreticileri desenlerini nasıl korur?",
        a: "Makine halısı sektöründe her sezon çok sayıda yeni desen hazırlanır ve başarılı desenler kısa sürede taklit edilebilir. Gaziantep OSB'deki bir halı üreticisi, desen dosyalarını koleksiyon bazında zaman damgasıyla damgalayarak her desenin belirli bir tarihte kendi elinde olduğunu kanıtlayabilir. Bu kanıt tasarım tescilinin yerine geçmez, ancak taklit uyuşmazlıklarında öncelik ispatı için delil olarak kullanılabilir.",
      },
      {
        q: "Gaziantep'in gıda firmaları zaman damgasını nasıl kullanabilir?",
        a: "Antep fıstığı işleme, baklava ve kuru gıda üretiminde ihracat öncesi aflatoksin ve kalite analizleri belirleyicidir. Bir parti için alınan analiz raporunun yükleme öncesinde mevcut olduğunu ve değiştirilmediğini kanıtlamak, alıcı itirazlarında firmanın elini güçlendirir. Gaziantep Teknopark'taki yazılım firmaları bu damgalamayı üretim ve izlenebilirlik sistemlerine de entegre edebilir.",
      },
    ],
    areas: "Şahinbey, Şehitkamil, Oğuzeli, Nizip ve İslahiye dahil Gaziantep'in tüm ilçelerindeki firmalara, Gaziantep OSB ve Gaziantep Teknopark'a online hizmet veriyoruz.",
    faqs: [
      { question: "Her sezon çok sayıda desen için çok kontör mü gerekir?", answer: "Gerekmez. Desenleri koleksiyon bazında tek bir arşivde toplayıp arşivi damgalayabilirsiniz; böylece tek kontörle tüm koleksiyonun tarihi kanıtlanır. Desen bazında ayrı kanıt istiyorsanız 500 veya 1000 kontörlük paket uygundur." },
      { question: "Damgalı analiz raporunu alıcıya nasıl gösteririz?", answer: "Rapor dosyasını ve damga dosyasını birlikte paylaşırsınız. Alıcı standart araçlarla raporun damga tarihinden sonra değişmediğini kendisi doğrulayabilir." },
      { question: "Gaziantep'te zaman damgası için destek var mı?", answer: "Hizmet tamamen online olduğu için kurulum ve kullanım desteğini telefon ve WhatsApp üzerinden uzaktan veriyoruz." },
    ],
  },
  adana: {
    metaTitle: "Adana Zaman Damgası Al | Sanayi ve Tarım Belgeleri",
    metaDescription: "Adana'daki sanayi, tarım ve hukuk firmaları için TÜBİTAK onaylı zaman damgası. Ekspertiz, analiz raporu ve sözleşmelere bağımsız tarih kanıtı.",
    intro: "Adana'da zaman damgası, sanayi ve tarım firmalarının analiz ve ekspertiz raporlarını, hukuk bürolarının ise dosya ve elektronik delillerini belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı, RFC 3161 uyumlu hizmet kontör bazlıdır ve online kullanılır.",
    sections: [
      {
        q: "Adana'daki tarım ve ticaret firmaları zaman damgasını neden kullanır?",
        a: "Çukurova'da pamuk, mısır ve narenciye ticaretinde nem, kalite ve sınıf tespitleri fiyatı doğrudan etkiler. Teslim anında hazırlanan ekspertiz veya analiz raporunun sonradan değiştirilmediğini kanıtlamak, alım satım uyuşmazlıklarında belirleyici olabilir. Rapor dosyası hazırlandığı gün zaman damgasıyla damgalandığında, o tarihteki içerik bağımsız olarak doğrulanabilir hale gelir.",
      },
      {
        q: "Adana'daki hukuk büroları ve bilirkişiler için zaman damgası ne sağlar?",
        a: "Avukatlar ve bilirkişiler; dijital fotoğraf, ekran görüntüsü ve yazışma dökümü gibi elektronik delillerin hangi tarihte elde edildiğini kanıtlamak ister. Elde edildiği gün damgalanan bir delil dosyasının sonradan değiştirilmediği gösterilebilir. Hacı Sabancı OSB'deki sanayi firmaları da iş kazası ve hasar tespitlerine ait fotoğraf ve raporları aynı yöntemle güvence altına alabilir.",
      },
    ],
    areas: "Seyhan, Çukurova, Yüreğir, Sarıçam, Ceyhan ve Kozan dahil Adana'nın tüm ilçelerindeki firmalara ve Çukurova Teknokent'e online hizmet veriyoruz.",
    faqs: [
      { question: "Ekran görüntüsünü zaman damgasıyla delil haline getirebilir miyim?", answer: "Zaman damgası, ekran görüntüsü dosyasının damga anında var olduğunu ve sonradan değişmediğini kanıtlar. İçeriğin gerçekliği ve delil değeri ise mahkemenin takdirindedir; damga bu değerlendirmede tarih bakımından güçlü bir destek sağlar." },
      { question: "Fotoğrafları tek tek mi damgalamalıyız?", answer: "Tek tek damgalamak her fotoğraf için ayrı kanıt sağlar. Aynı olaya ait fotoğrafları tek arşivde toplayıp arşivi damgalamak ise tek kontörle tüm seti güvence altına alır." },
      { question: "Adana'da kontörleri ne kadar sürede kullanmaya başlarım?", answer: "Satın alma ve tanımlama online yapıldığı için kontörlerinizi genellikle aynı gün kullanmaya başlayabilirsiniz." },
    ],
  },
  mersin: {
    metaTitle: "Mersin Zaman Damgası Al | Lojistik ve Liman Belgeleri",
    metaDescription: "Mersin'deki lojistik, liman ve narenciye ihracat firmaları için TÜBİTAK onaylı zaman damgası. Hasar tespiti ve yükleme belgelerine tarih kanıtı.",
    intro: "Mersin'de zaman damgası, lojistik ve liman firmalarının hasar tespitlerini, yükleme kayıtlarını ve ihracat belgelerini belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı hizmet kontör bazlıdır, online kullanılır ve büyük dosyalarda da tek kontörle çalışır.",
    sections: [
      {
        q: "Mersin'deki lojistik firmaları hasar tespitlerinde zaman damgasını nasıl kullanır?",
        a: "Konteyner açılışı, antrepo girişi veya araç teslimi sırasında çekilen fotoğraflar ve tutanaklar, sonradan çıkan hasar uyuşmazlıklarında en önemli kanıtlardır. Bu dosyalar çekildikleri gün zaman damgasıyla damgalandığında, sonradan değiştirilmedikleri ve o tarihte var oldukları bağımsız olarak gösterilebilir. Mersin Serbest Bölgesi ve liman çevresindeki depolama firmaları için bu, sigorta ve rücu süreçlerini kolaylaştırır.",
      },
      {
        q: "Narenciye ihracatçıları için zaman damgası ne sağlar?",
        a: "Limon, portakal ve mandalina ihracatında yükleme öncesi kalite kontrol raporları, soğuk zincir sıcaklık kayıtları ve paketleme fotoğrafları alıcı itirazlarında belirleyicidir. Bu kayıtları yükleme günü damgalamak, ürünün hangi koşullarda gönderildiğini tarihli olarak kanıtlar. Tarsus ve Erdemli'deki paketleme tesisleri bu yöntemi günlük operasyonlarına kolayca ekleyebilir.",
      },
    ],
    areas: "Akdeniz, Yenişehir, Mezitli, Toroslar, Tarsus, Erdemli ve Silifke dahil Mersin'in tüm ilçelerindeki firmalara, Mersin Serbest Bölgesi ve Mersin Teknopark'a online hizmet veriyoruz.",
    faqs: [
      { question: "Soğuk zincir sıcaklık kayıtlarını damgalamak mantıklı mı?", answer: "Evet. Sıcaklık kaydı dosyasını sevkiyat bitiminde damgalamak, kaydın o tarihten sonra değiştirilmediğini kanıtlar. Düzenli sevkiyat yapan firmalar için 500 veya 1000 kontörlük paket uygundur." },
      { question: "Hasar fotoğraflarını ne zaman damgalamalıyız?", answer: "Fotoğrafları bilgisayara aktarır aktarmaz damgalamak en iyisidir; işlem birkaç saniye sürer. Fotoğrafın çekildiği an ile damga anı arasındaki süreyi kısa tutmak kanıt değerini artırır." },
      { question: "Zaman damgası gümrük belgelerinin yerine geçer mi?", answer: "Hayır. Zaman damgası resmî belgelerin yerini almaz; elinizdeki belge ve kayıtların belirli bir tarihte var olduğunu kanıtlayan ek bir güvencedir." },
    ],
  },
  eskisehir: {
    metaTitle: "Eskişehir Zaman Damgası Al | Havacılık ve Ar-Ge",
    metaDescription: "Eskişehir'deki havacılık, raylı sistem ve Ar-Ge firmaları için TÜBİTAK onaylı zaman damgası. Test ve tasarım kayıtlarına bağımsız tarih kanıtı.",
    intro: "Eskişehir'de zaman damgası, havacılık ve raylı sistem tedarikçilerinin test kayıtlarını, üniversite kökenli Ar-Ge firmalarının ise deney verilerini belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı, RFC 3161 uyumlu hizmet kontör bazlıdır ve online kullanılır.",
    sections: [
      {
        q: "Eskişehir'deki havacılık ve raylı sistem tedarikçileri zaman damgasını nasıl kullanır?",
        a: "Havacılık ve raylı sistem parçalarında izlenebilirlik zorunludur; malzeme sertifikaları, ölçüm raporları ve test kayıtları uzun yıllar saklanır. Eskişehir OSB'deki bir tedarikçi, bu kayıtları oluşturuldukları gün damgalayarak sonradan değiştirilmediklerini bağımsız olarak kanıtlayabilir. Bu uygulama müşteri denetimlerinde güven sağlar ve olası uygunsuzluk tartışmalarında tarih açısından net bir referans oluşturur.",
      },
      {
        q: "Eskişehir'deki üniversite kökenli Ar-Ge ekipleri zaman damgasından nasıl yararlanır?",
        a: "Anadolu, Eskişehir Osmangazi ve Eskişehir Teknik üniversitelerinin çevresindeki girişimler ve araştırma ekipleri; deney sonuçlarını, algoritma sürümlerini ve proje raporlarını düzenli damgalayarak oluşturma tarihlerini belgeleyebilir. Ortak projelerde hangi katkının hangi tarihte yapıldığını göstermek ve patent başvurusu öncesindeki çalışmaları kanıtlamak için bu kayıtlar değerlidir.",
      },
    ],
    areas: "Odunpazarı, Tepebaşı, Sivrihisar ve İnönü dahil Eskişehir'in tüm ilçelerindeki firmalara, Eskişehir OSB ve teknopark bölgelerine online hizmet veriyoruz.",
    faqs: [
      { question: "Test kayıtlarımızı yıllarca saklarsak damga geçerliliğini korur mu?", answer: "Damga, oluşturulduğu tarihteki veriyi kanıtlar ve orijinal dosya ile damga dosyası saklandığı sürece doğrulanabilir. Çok uzun süreli arşivlerde, kullanılan algoritmalar eskimeden önce yeniden damgalama yapmak iyi bir uygulamadır." },
      { question: "Ar-Ge girişimimiz için kaç kontör önerirsiniz?", answer: "Haftalık veya aylık sürümleri damgalayan küçük ekipler için 100 kontör başlangıç için yeterlidir. Kullanım arttıkça daha büyük pakete geçebilirsiniz." },
      { question: "Zaman damgası patent başvurusunda kullanılabilir mi?", answer: "Zaman damgası patent başvurusunun yerine geçmez. Ancak başvuru öncesindeki geliştirme sürecinin tarihini kanıtlamak için ek delil olarak kullanılabilir." },
    ],
  },
  samsun: {
    metaTitle: "Samsun Zaman Damgası Al | Medikal Teknik Dosyalar",
    metaDescription: "Samsun'daki medikal cihaz, gıda ve tarım firmaları için TÜBİTAK onaylı zaman damgası. Teknik dosya, test raporu ve analiz kayıtlarına tarih kanıtı.",
    intro: "Samsun'da zaman damgası, medikal cihaz üreticilerinin teknik dosyalarını ve test raporlarını, gıda firmalarının ise analiz kayıtlarını belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı hizmet kontör bazlıdır, online kullanılır ve dosya içeriğini paylaşmanızı gerektirmez.",
    sections: [
      {
        q: "Samsun'daki medikal cihaz üreticileri zaman damgasını neden kullanır?",
        a: "Medikal cihazlarda tasarım dosyaları, risk analizleri, doğrulama testleri ve değişiklik kayıtları düzenleyici denetimlerin temelidir. Samsun Merkez OSB'deki bir üretici, teknik dosyanın her revizyonunu zaman damgasıyla damgalayarak hangi versiyonun hangi tarihte mevcut olduğunu bağımsız olarak kanıtlayabilir. Bu, denetimlerde belge bütünlüğünü göstermeyi kolaylaştırır ve tasarım geçmişinin sonradan değiştirilmediğine dair güvence verir.",
      },
      {
        q: "Samsun'un tarım ve gıda firmaları için zaman damgası ne sağlar?",
        a: "Bafra ve Çarşamba ovasından gelen ürünleri işleyen gıda firmaları ile fındık ve hububat tüccarları, parti bazında analiz ve kalite raporları üretir. Bu raporların sevkiyattan önce hazırlandığını kanıtlamak, alıcı itirazlarında belirleyici olabilir. Samsun Teknopark'taki yazılım firmaları da izlenebilirlik sistemlerine zaman damgasını entegre ederek bu kanıtı otomatik hale getirebilir.",
      },
    ],
    areas: "İlkadım, Atakum, Canik, Tekkeköy, Bafra ve Çarşamba dahil Samsun'un tüm ilçelerindeki firmalara, Samsun Merkez OSB ve Samsun Teknopark'a online hizmet veriyoruz.",
    faqs: [
      { question: "Medikal teknik dosyamızın her revizyonunu damgalamalı mıyız?", answer: "Onaylanan her revizyonu damgalamak tasarım geçmişini en güçlü şekilde kanıtlar. Sık revizyon yapan firmalar için 500 kontörlük paket genellikle uygundur." },
      { question: "Zaman damgası düzenleyici onayın yerine geçer mi?", answer: "Hayır. Zaman damgası hiçbir onay veya sertifikanın yerini almaz; mevcut belgelerinizin belirli bir tarihte var olduğunu ve değişmediğini kanıtlayan ek bir güvencedir." },
      { question: "Samsun'da kontörleri nasıl teslim alırım?", answer: "Kontörler online tanımlanır, kargo gerekmez. Kullanım ve doğrulama desteğini telefon ve WhatsApp üzerinden veriyoruz." },
    ],
  },
  denizli: {
    metaTitle: "Denizli Zaman Damgası Al | Tekstil Deseni ve İhracat",
    metaDescription: "Denizli'deki ev tekstili, mermer ve ihracat firmaları için TÜBİTAK onaylı zaman damgası. Desen, koleksiyon ve test raporlarına bağımsız tarih kanıtı.",
    intro: "Denizli'de zaman damgası, ev tekstili firmalarının desen ve koleksiyon dosyalarını, ihracatçıların ise test raporları ve sözleşmelerini belirli bir tarihte var olmuş ve değişmemiş olarak kanıtlar. TÜBİTAK onaylı hizmet kontör bazlıdır ve tamamen online kullanılır.",
    sections: [
      {
        q: "Denizli'deki ev tekstili firmaları koleksiyonlarını nasıl korur?",
        a: "Havlu, bornoz ve nevresim koleksiyonları her sezon yenilenir; desen, jakar ve dokuma tasarımları firmaların rekabet gücünü belirler. Denizli OSB'deki bir üretici, koleksiyon dosyalarını fuar veya alıcı sunumundan önce zaman damgasıyla damgalayarak tasarımların o tarihte kendi elinde olduğunu kanıtlayabilir. Bu kanıt tasarım tescilinin yerine geçmez, ancak taklit uyuşmazlıklarında öncelik ispatı için delil olarak kullanılabilir.",
      },
      {
        q: "Denizli'nin ihracatçıları için zaman damgası ne sağlar?",
        a: "Avrupa'daki perakende zincirlerine çalışan ihracatçılar; kumaş test raporları, kimyasal uygunluk belgeleri ve üretim öncesi numune onaylarını saklamak zorundadır. Bu belgelerin hangi tarihte mevcut olduğunu kanıtlamak, sevkiyat sonrası kalite itirazlarında firmanın elini güçlendirir. Mermer ve traverten ihracatçıları da yükleme öncesi blok ve plaka fotoğraflarını aynı yöntemle güvence altına alabilir.",
      },
    ],
    areas: "Merkezefendi, Pamukkale, Honaz, Sarayköy, Buldan ve Çivril dahil Denizli'nin tüm ilçelerindeki firmalara, Denizli OSB ve Pamukkale Teknokent'e online hizmet veriyoruz.",
    faqs: [
      { question: "Fuar öncesi koleksiyonumuzu nasıl damgalarız?", answer: "Koleksiyondaki desen ve tasarım dosyalarını tek bir arşivde toplayıp arşivi damgalayabilirsiniz. Tek kontörle tüm koleksiyonun fuar öncesi tarihi kanıtlanır; orijinal arşivi değiştirmeden saklamanız yeterlidir." },
      { question: "Yabancı alıcı damgalı raporu doğrulayabilir mi?", answer: "Zaman damgası RFC 3161 uluslararası standardını kullanır; alıcı rapor ve damga dosyasıyla standart araçlar üzerinden doğrulama yapabilir." },
      { question: "Denizli'de zaman damgası için destek alabilir miyim?", answer: "Evet. Kurulum, damgalama ve doğrulama için telefon ve WhatsApp üzerinden uzaktan destek veriyoruz." },
    ],
  },
}

// E-imza şehir sayfaları: mevcut metaTitle/metaDescription/faqs (city-seo-data.ts) korunur,
// buradaki içerik bunlara eklenir. Teslimat süreleri her şehrin deliveryNote alanıyla tutarlı olmalıdır.
export type EimzaLocalContent = Pick<LocalProductContent, "intro" | "sections" | "areas" | "faqs">

export const eimzaLocal: Record<string, EimzaLocalContent> = {
  istanbul: {
    intro: "İstanbul'da e-imza almak için başvuruyu online yapar, kimliğinizi doğrular ve USB token'ı adresinize kargoyla teslim alırsınız; kurulumu telefon veya WhatsApp üzerinden birlikte yaparız. E-imza; UYAP'ta dava evrakı göndermekten GİB ve e-Devlet işlemlerine kadar ıslak imzayla aynı hukuki sonucu doğurur.",
    sections: [
      {
        q: "İstanbul'daki avukatlar e-imzayı hangi işlemlerde kullanır?",
        a: "UYAP Avukat Portalı'ndan dava açmak, dilekçe ve delil göndermek için nitelikli elektronik imza gerekir. Çağlayan, Kartal ve Bakırköy adliyelerinde dosya takip eden avukatlar e-imza sayesinde adliyeye gitmeden evrak sunabilir, dosya inceleyebilir ve harç ödeyebilir. Büroda birden fazla avukat çalışıyorsa her avukatın kendi adına e-imzası olmalıdır; e-imza kişiye özeldir ve başkasına devredilemez.",
      },
      {
        q: "İstanbul'daki mali müşavirlik büroları kaç e-imzaya ihtiyaç duyar?",
        a: "Beyanname gönderme ve e-Devlet üzerinden yapılan işlemler büro sahibinin kimliğiyle yürür; ancak işlemleri fiilen yapan çalışanların da kendi adlarına e-imzası olması iş akışını hızlandırır. Şişli, Kadıköy veya Beylikdüzü'ndeki çok çalışanlı bürolar genellikle yetkili kişiler için ayrı ayrı e-imza alır ve yenileme tarihlerini aynı döneme denk getirerek takibi kolaylaştırır.",
      },
    ],
    areas: "USB token'ı Avrupa ve Anadolu yakasındaki tüm ilçelere kargoyla gönderiyoruz; Şişli, Beşiktaş, Bakırköy, Başakşehir, Kadıköy, Ataşehir, Ümraniye, Kartal ve Tuzla dahil. Kurulum uzaktan yapılır, ofis ziyareti gerekmez.",
    faqs: [
      { question: "İstanbul'daki büromuzdaki her avukat için ayrı e-imza mı gerekir?", answer: "Evet. Nitelikli elektronik imza kişiye özeldir ve UYAP'ta işlem yapan avukatın kendi kimliğine bağlıdır. Bir avukatın e-imzasını başka bir avukatın kullanması hukuken mümkün değildir." },
      { question: "E-imzam bozulursa veya kaybolursa ne yapmalıyım?", answer: "Önce sertifikanızı iptal ettirmeniz gerekir; ardından yeni USB token ve sertifika için başvuru yapılır. Bize ulaştığınızda iptal ve yeniden başvuru adımlarında yönlendiririz." },
    ],
  },
  ankara: {
    intro: "Ankara'da e-imza, online başvuru ve kimlik doğrulamanın ardından USB token'ın kargoyla adresinize gönderilmesiyle alınır. EKAP'ta e-teklif vermek, bakanlık portallerinde işlem yapmak ve e-Devlet'e güvenli giriş için kullanılan nitelikli elektronik imza, 5070 sayılı Kanun gereği ıslak imzayla aynı hukuki sonucu doğurur.",
    sections: [
      {
        q: "Ankara'daki ihale firmaları EKAP için e-imzayı nasıl kullanır?",
        a: "Elektronik Kamu Alımları Platformu'nda e-teklif hazırlayan firmalar, teklif ve ekli belgeleri nitelikli elektronik imzayla imzalar. Ostim, İvedik ve Sincan'daki sanayi firmaları ile Çankaya'daki danışmanlık şirketleri için e-imzanın teklif son saatinden önce kurulu ve çalışır durumda olması kritiktir. Teklif hazırlayan ve imza yetkisi olan kişilerin her biri için ayrı e-imza alınması, son gün yaşanabilecek aksaklıkları önler.",
      },
      {
        q: "Ankara'daki mühendis ve müşavirler e-imzayı hangi işlerde kullanır?",
        a: "Proje ve danışmanlık hizmeti veren mühendisler; kamu kurumlarının elektronik başvuru sistemlerine belge yüklerken, hakediş ve rapor imzalarken e-imzaya ihtiyaç duyar. ODTÜ Teknokent ve Bilkent Cyberpark'taki teknoloji firmaları da destek programı başvurularında ve sözleşmelerde e-imza kullanır. Her kurumun sistemi farklı olduğundan, kullandığınız portalın e-imza gereksinimini önceden kontrol etmeniz önerilir.",
      },
    ],
    areas: "USB token'ı Çankaya, Yenimahalle, Keçiören, Etimesgut, Sincan, Gölbaşı ve Polatlı dahil Ankara'nın tüm ilçelerine kargoyla gönderiyoruz; kurulum ve EKAP öncesi test desteği uzaktan verilir.",
    faqs: [
      { question: "EKAP'ta e-teklif vermeden önce e-imzamı nasıl test ederim?", answer: "Kurulumdan sonra e-imza yazılımıyla örnek bir belge imzalayıp doğrulamanız yeterlidir. İhale son gününü beklemeden bu testi yapmanızı öneririz; kurulum sırasında testi birlikte yapabiliriz." },
      { question: "Kamu personeliyim, kurumumun verdiği e-imza dışında kişisel e-imza alabilir miyim?", answer: "Evet. Kurumun verdiği e-imza genellikle kurum işleri içindir; kişisel işlemleriniz için kendi adınıza ayrı bir nitelikli elektronik imza alabilirsiniz." },
    ],
  },
  izmir: {
    intro: "İzmir'den verilen e-imza siparişlerinde kimlik doğrulama internet üzerinden yapılır ve token ertesi iş günü civarında elinize ulaşır. Alsancak'taki gümrük müşaviri beyanname, Bornova'daki esnaf e-fatura, Bayraklı adliyesindeki avukat UYAP işlemi için bu imzayı kullanır; hepsinde hukuki sonuç ıslak imzayla aynıdır.",
    sections: [
      {
        q: "İzmir'deki gümrük müşavirleri ve ihracatçılar e-imzayı nasıl kullanır?",
        a: "Gümrük işlemlerinin elektronik ortamda yürütüldüğü sistemlerde beyanname ve ilgili belgeler e-imzayla imzalanır. Alsancak ve Gaziemir çevresindeki gümrük müşavirlik firmalarında beyanname hazırlayan her müşavir ve müşavir yardımcısının kendi e-imzasına sahip olması iş akışının kesintisiz sürmesini sağlar. Yoğun ihracat dönemlerinde yedek bir yetkilinin de e-imzasının hazır olması önerilir.",
      },
      {
        q: "İzmir'deki şahıs işletmeleri e-fatura için e-imzayı nasıl kullanır?",
        a: "Gerçek kişi tacirler ve serbest meslek erbabı, GİB'in e-fatura ve e-arşiv portallerinde mali mühür yerine nitelikli elektronik imza kullanabilir. Bornova, Karşıyaka ve Buca'daki esnaf, e-fatura zorunluluğu kapsamına girdiğinde e-imzasıyla portale başvurup fatura kesmeye başlayabilir. Şirketler ise bu işlemler için mali mühür kullanır; şahıs işletmesi ile şirket arasındaki bu ayrım başvurudan önce netleştirilmelidir.",
      },
    ],
    areas: "Konak, Bayraklı, Karşıyaka, Bornova, Buca, Çiğli, Gaziemir, Torbalı, Kemalpaşa ve Aliağa'ya token gönderiyoruz. İzmir Teknoloji Geliştirme Bölgesi'ndeki ekipler dahil, kurulumu görüntülü veya sesli görüşmeyle yapıyoruz.",
    faqs: [
      { question: "Şahıs firmam için e-fatura e-imzayla mı, mali mühürle mi kesilir?", answer: "Şahıs işletmeleri GİB portallerinde nitelikli elektronik imza kullanabilir. Anonim ve limited şirketler ise mali mühür kullanmak zorundadır." },
      { question: "İzmir'deki müşavirlik firmamızda kaç e-imza olmalı?", answer: "Elektronik ortamda belge imzalayan her kişinin kendi e-imzası olmalıdır. Pratikte beyanname hazırlayan müşavirler ve yetkili yardımcılar için ayrı e-imza alınır." },
    ],
  },
  bursa: {
    intro: "Bursa'da e-imza online başvuru ve kimlik doğrulamanın ardından USB token'ın kargoyla gönderilmesiyle alınır; kurulumu uzaktan birlikte yaparız. Otomotiv yan sanayi ve tekstil firmalarının yetkilileri, mali müşavirler ve şahıs işletmeleri e-Devlet, GİB ve sözleşme işlemlerinde nitelikli elektronik imza kullanır.",
    sections: [
      {
        q: "Bursa'daki OSB firmalarında e-imzayı kimler kullanmalı?",
        a: "Nilüfer, Demirtaş ve DOSAB'daki üretim firmalarında e-imza genellikle şirket yetkilileri, muhasebe sorumlusu ve dış ticaret birimi için alınır. Kamu kurumlarının elektronik başvuru sistemleri, teşvik ve destek başvuruları ile elektronik sözleşmeler bu kişilerin e-imzasıyla imzalanır. E-imza kişiye özel olduğu için görev değişikliğinde yeni sorumlunun kendi e-imzasını alması gerekir; eski çalışanın e-imzası kullanılmamalıdır.",
      },
      {
        q: "Bursa'nın tekstil ve konfeksiyon atölyeleri e-imzadan nasıl yararlanır?",
        a: "Osmangazi, Yıldırım ve İnegöl'deki küçük atölyelerin önemli bir kısmı şahıs işletmesi olarak çalışır. Bu işletmeler e-Devlet ve GİB işlemlerinde, e-fatura kapsamına girdiklerinde ise faturalarını kesmek için nitelikli elektronik imza kullanabilir. Böylece mali müşavire her işlem için evrak taşımak yerine işlemlerin önemli kısmı elektronik ortamda tamamlanır.",
      },
    ],
    areas: "USB token'ı Osmangazi, Nilüfer, Yıldırım, İnegöl, Gemlik, Mudanya, Gürsu ve Kestel dahil Bursa'nın tüm ilçelerine kargoyla gönderiyoruz; ULUTEK Teknopark'taki firmalara da aynı şekilde hizmet veriyoruz.",
    faqs: [
      { question: "Çalışanımız işten ayrılırsa e-imzası ne olur?", answer: "E-imza kişiye özeldir ve çalışanın kimliğine bağlıdır; şirkete devredilemez. Ayrılan çalışanın şirket adına yetkilerinin kaldırılması ve yerine gelen kişinin kendi e-imzasını alması gerekir." },
      { question: "Bursa'ya e-imza kaç günde ulaşır?", answer: "Kimlik doğrulama tamamlandıktan sonra USB token aynı gün kargoya verilir ve Bursa'ya genellikle ertesi iş günü ulaşır. Kurulumu teslimat günü uzaktan yapabiliriz." },
    ],
  },
  antalya: {
    intro: "Antalya'da e-imza, online başvuru ve kimlik doğrulamanın ardından USB token'ın kargoyla gönderilmesiyle alınır. Otel muhasebecileri, gayrimenkul danışmanları, mimarlar ve şahıs işletmeleri; e-Devlet, GİB ve kurum portallerindeki işlemlerini ıslak imzayla aynı hukuki sonucu doğuran nitelikli elektronik imzayla yürütür.",
    sections: [
      {
        q: "Antalya'daki gayrimenkul ve inşaat sektörü e-imzayı nasıl kullanır?",
        a: "Konyaaltı, Muratpaşa ve Alanya'da faaliyet gösteren inşaat firmaları ve mimarlık büroları; belediyelerin ve kamu kurumlarının elektronik başvuru sistemlerinde, proje ve rapor imzalarında e-imzaya ihtiyaç duyabilir. Kullanılan sistemler kurumdan kuruma değiştiği için, işlem yapacağınız belediye veya kurumun e-imza gereksinimini önceden kontrol etmeniz önerilir. Elektronik sözleşmelerde e-imza, tarafların aynı şehirde bulunmasına gerek bırakmaz.",
      },
      {
        q: "Antalya'daki otel ve turizm işletmeleri neden e-imza alır?",
        a: "Oteller ve acenteler; muhasebe, insan kaynakları ve resmî yazışmalarda e-Devlet ve GİB işlemlerini sezon yoğunluğunda bile hızla tamamlamak ister. Yetkili kişilerin e-imzası olduğunda bu işlemler fiziksel evrak gönderimine gerek kalmadan yapılır. Sezonluk çalışan yöneticiler için e-imzanın yenileme tarihinin sezon ortasına denk gelmemesine dikkat etmek iş akışını korur.",
      },
    ],
    areas: "USB token'ı Muratpaşa, Konyaaltı, Kepez, Aksu, Döşemealtı, Alanya, Manavgat, Serik, Kemer ve Kumluca dahil Antalya'nın tüm ilçelerine kargoyla gönderiyoruz; kurulum uzaktan yapılır.",
    faqs: [
      { question: "Antalya'da yabancı uyruklu kişiler e-imza alabilir mi?", answer: "Türkiye'de geçerli kimlik bilgilerine (örneğin yabancı kimlik numarası) sahip yabancılar için de nitelikli elektronik imza başvurusu yapılabilir. Gerekli belgeler başvuru sırasında ayrıca netleştirilir." },
      { question: "E-imzanın yenileme tarihi nasıl takip edilir?", answer: "Sertifikanın geçerlilik bitiş tarihi e-imza yazılımında görünür. Süre dolmadan önce yenileme başvurusu yapmanız işlemlerinizin kesintiye uğramamasını sağlar; hatırlatma için bize ulaşabilirsiniz." },
    ],
  },
  kocaeli: {
    intro: "Kocaeli'de e-imza, online başvuru ve kimlik doğrulamanın ardından USB token'ın kargoyla adresinize gönderilmesiyle alınır. Gebze, Dilovası ve İzmit'teki sanayi firmalarının yetkilileri, mühendisler ve mali müşavirler; EKAP, e-Devlet ve kurum portallerindeki işlemlerini nitelikli elektronik imzayla güvenle yürütür.",
    sections: [
      {
        q: "Kocaeli'deki sanayi firmaları kamu ihaleleri için e-imzayı nasıl kullanır?",
        a: "Kamu kurumlarına mal ve hizmet satan GOSB, TOSB ve Dilovası firmaları, EKAP üzerinden e-teklif verirken teklif belgelerini nitelikli elektronik imzayla imzalar. Teklif son gününde e-imzanın kurulu ve test edilmiş olması, son dakika aksaklıklarını önler. İhale sorumlusu ile imza yetkilisinin farklı kişiler olduğu firmalarda her iki kişi için de e-imza alınması önerilir.",
      },
      {
        q: "Kocaeli'deki mühendis ve teknik personel için e-imza ne sağlar?",
        a: "Sanayi tesislerinde çalışan mühendisler ve teknik sorumlular; kamu kurumlarının elektronik sistemlerinde rapor, başvuru ve onay işlemleri yaparken e-imzaya ihtiyaç duyabilir. Gebze'deki Bilişim Vadisi ve teknoparklarda çalışan teknoloji firmaları ise elektronik sözleşmelerde ve destek programı başvurularında e-imza kullanır. İşlem yapılacak sistemin e-imza gereksinimini önceden kontrol etmek zaman kazandırır.",
      },
    ],
    areas: "USB token'ı İzmit, Gebze, Darıca, Çayırova, Dilovası, Körfez, Derince, Gölcük ve Kartepe dahil Kocaeli'nin tüm ilçelerine kargoyla gönderiyoruz; kurulum uzaktan yapılır.",
    faqs: [
      { question: "İhale son günü e-imzam çalışmazsa ne yapmalıyım?", answer: "Önce kart okuyucunun takılı olduğunu ve e-imza yazılımının sertifikayı gördüğünü kontrol edin. Sorun devam ederse hafta içi 09:00-18:00 arasında bizi arayın; bu tür riskleri önlemek için e-imzayı son günden önce test etmenizi öneririz." },
      { question: "Kocaeli'deki firmamız için kurumsal e-imza ile bireysel e-imza farkı nedir?", answer: "Nitelikli elektronik imza her zaman kişiye aittir. Kurumsal başvuruda sertifikaya kişinin çalıştığı kurum bilgisi de eklenebilir; ancak imza yine o kişiye özeldir ve başkası kullanamaz." },
    ],
  },
  sakarya: {
    intro: "Sakarya'da e-imzanızı Erenler'deki Meydan54 AVM ofisimizden randevuyla aynı gün elden teslim alabilir, kurulumu orada birlikte yapabilirsiniz; isterseniz kargoyla da gönderiyoruz. Yapı denetimciler, mali müşavirler, avukatlar ve otomotiv tedarikçileri YDS, e-Devlet, UYAP ve GİB işlemlerini nitelikli elektronik imzayla yürütür.",
    sections: [
      {
        q: "Sakarya'daki yapı denetim firmaları e-imzayı nasıl kullanır?",
        a: "Yapı denetim süreçleri Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın Yapı Denetim Sistemi (YDS) üzerinden yürür ve sistemde işlem yapan denetçiler, kontrol elemanları ve yetkililer nitelikli elektronik imza kullanır. Deprem bölgesinde yer alan Sakarya'da yapı denetim faaliyeti yoğundur; yeni işe başlayan bir denetçinin e-imzasını beklemeden alabilmesi bu yüzden önemlidir. Ofisimize gelen yapı denetim personeline e-imzayı aynı gün teslim edip YDS için gerekli kurulumu birlikte yapıyoruz.",
      },
      {
        q: "Sakarya'da e-imzayı aynı gün almak nasıl mümkün?",
        a: "Merkezimiz Erenler'de olduğu için kimlik doğrulaması tamamlanan Sakaryalı müşterilerimiz USB token'ı kargo beklemeden ofisimizden teslim alabilir. Randevu sırasında kart okuyucu sürücüsü, e-imza yazılımı ve kullanacağınız sistem (e-Devlet, UYAP, YDS veya GİB) için ilk girişi birlikte yaparız. Adapazarı, Serdivan ve Arifiye'den gelenler için ofisimiz kısa mesafededir; daha uzak ilçelere ise kargo ile gönderim yapıyoruz.",
      },
    ],
    areas: "Adapazarı, Serdivan, Erenler, Arifiye, Sapanca, Hendek, Akyazı, Karasu, Geyve ve Pamukova dahil Sakarya'nın tüm ilçelerine hizmet veriyoruz; ofisimiz Erenler'de, Meydan54 AVM B1 Blok K:2 D:84 adresindedir.",
    faqs: [
      { question: "YDS için hangi e-imzayı almalıyım?", answer: "YDS'de işlem yapmak için kendi adınıza düzenlenmiş nitelikli elektronik imza gerekir. Ofisimizden aldığınız e-imzanın YDS kurulumunu teslim sırasında birlikte yapabiliriz." },
      { question: "Ofisinize gelmeden önce ne hazırlamalıyım?", answer: "Randevu öncesinde online başvuru ve kimlik doğrulama adımlarını tamamlamanız, teslimatı hızlandırır. Gelirken kimliğinizi ve e-imzayı kullanacağınız bilgisayarı yanınızda getirirseniz kurulumu orada bitiririz." },
    ],
  },
  konya: {
    intro: "Konya'da e-imza almak isteyen bir sanayici, tarım makineleri bayisi ya da çiftçi başvurusunu internetten yapar; kimlik doğrulama sonrası token kargoyla ulaşır ve ilk kullanımda telefonla yanınızda oluruz. EKAP teklifinden e-Devlet'teki tarım başvurularına kadar bu imza ıslak imzayla aynı sonucu doğurur.",
    sections: [
      {
        q: "Konya'daki sanayi firmaları e-imzayı hangi işlemlerde kullanır?",
        a: "Konya OSB'deki döküm, otomotiv yan sanayi ve tarım makineleri üreticileri; kamu ihalelerine e-teklif verirken, teşvik ve destek başvurularında ve elektronik sözleşmelerde e-imzaya ihtiyaç duyar. Firma yetkilisi ile muhasebe sorumlusu için ayrı e-imza alınması, işlemlerin tek bir kişiye bağlı kalmasını önler. Selçuklu ve Karatay'daki ticaret firmaları da e-Devlet işlemlerini aynı yöntemle yürütür.",
      },
      {
        q: "Konya'daki çiftçiler ve tarım işletmeleri e-imzadan nasıl yararlanır?",
        a: "Tarım destekleri, kayıt sistemleri ve diğer kamu başvurularının giderek daha fazlası e-Devlet üzerinden yapılıyor. Ereğli, Çumra ve Karapınar gibi tarım ağırlıklı ilçelerdeki işletmeler, e-imza ile bu sistemlere güvenli giriş yapabilir ve elektronik belge imzalayabilir. Şahıs işletmesi olarak çalışan tarım ve ticaret işletmeleri, e-fatura kapsamına girdiklerinde faturalarını da e-imzayla kesebilir.",
      },
    ],
    areas: "Selçuklu, Meram ve Karatay'ın yanı sıra Ereğli, Akşehir, Beyşehir, Seydişehir, Çumra ve Karapınar'a da token gönderiyoruz. Konya Teknokent'teki ekipler için birden fazla kişinin kurulumunu aynı görüşmede yapabiliyoruz.",
    faqs: [
      { question: "E-Devlet'e e-imzayla giriş yapabilir miyim?", answer: "Evet. E-Devlet Kapısı, şifre ve mobil imzanın yanında nitelikli elektronik imzayla girişi de destekler. E-imza ile giriş, şifre paylaşımı riskini ortadan kaldırır." },
      { question: "Konya'daki ilçelere de e-imza gönderiyor musunuz?", answer: "Evet. USB token Konya'nın tüm ilçelerine kargoyla gönderilir ve genellikle 1-2 iş gününde ulaşır." },
    ],
  },
  gaziantep: {
    intro: "Gaziantep'ten e-imza siparişi verdiğinizde başvuru ve kimlik doğrulama internet üzerinden tamamlanır, USB token ise kargoyla elinize ulaşır. Halı ve gıda ihracatçıları gümrük beyannamelerini, çarşıdaki şahıs işletmeleri e-faturalarını, mali müşavirler ise müşterilerinin vergi işlemlerini bu imzayla, ıslak imzanın hukuki gücüyle yapar.",
    sections: [
      {
        q: "Gaziantep'teki ihracatçılar ve gümrük müşavirleri e-imzayı nasıl kullanır?",
        a: "Gaziantep'in Orta Doğu ve Avrupa'ya yönelik yoğun ihracatı, gümrük işlemlerini günlük bir iş haline getirir. Elektronik ortamda hazırlanan gümrük beyannameleri ve ilgili belgeler e-imzayla imzalanır; bu nedenle beyanname hazırlayan her müşavir ve yetkili yardımcının kendi e-imzası olmalıdır. Gaziantep OSB'deki ihracatçı firmaların dış ticaret sorumluları da destek ve teşvik başvurularında e-imza kullanır.",
      },
      {
        q: "Gaziantep'teki esnaf ve şahıs işletmeleri neden e-imza alır?",
        a: "Bakırcılar, baklavacılar, kuru gıda ve tekstil ticareti yapan şahıs işletmeleri; e-Devlet ve GİB işlemlerini e-imzayla kendi bilgisayarlarından yapabilir. E-fatura kapsamına giren gerçek kişi tacirler, faturalarını GİB portalinde mali mühür yerine nitelikli elektronik imzayla kesebilir. Bu, Şahinbey ve Şehitkamil'deki küçük işletmeler için ek bir yazılım maliyeti olmadan e-faturaya geçiş imkânı sağlar.",
      },
    ],
    areas: "Kargo; Şahinbey, Şehitkamil, Oğuzeli, Nizip, İslahiye ve Nurdağı'nın yanı sıra Gaziantep OSB ve Başpınar'daki fabrikalara da ulaşıyor. Token elinize geçtiğinde kart okuyucu ve yazılım kurulumunu telefonda adım adım tamamlıyoruz.",
    faqs: [
      { question: "Baklava ve gıda işletmemiz şahıs firması; e-fatura için e-imza yeterli mi?", answer: "Evet. Şahıs işletmeleri GİB'in e-fatura portalinde nitelikli elektronik imza kullanabilir. Anonim ve limited şirketler ise mali mühür kullanmak zorundadır." },
      { question: "Gümrük müşavirliği firmamızda her çalışana e-imza gerekir mi?", answer: "Elektronik ortamda belge imzalayan her kişinin kendi e-imzası olmalıdır. Beyanname hazırlamayan destek personeli için e-imza gerekmeyebilir." },
    ],
  },
  adana: {
    intro: "Adana'daki hekimler, avukatlar ve sanayiciler e-imzayı ofise uğramadan edinir: başvuru ve kimlik doğrulama internetten yapılır, token kargoyla gelir. E-reçete yazmak, UYAP'a dilekçe göndermek ya da Hacı Sabancı OSB'deki bir firma adına ihale teklifi imzalamak için gereken imza tam olarak budur.",
    sections: [
      {
        q: "Adana'daki hekimler e-imzayı neden kullanır?",
        a: "Reçete ve bazı sağlık kayıtları elektronik ortamda düzenlenir ve hekimin nitelikli elektronik imzasıyla imzalanır. Seyhan ve Çukurova'daki özel muayenehaneler, poliklinikler ve hastanelerde çalışan hekimlerin kendi adlarına e-imzası olması bu nedenle günlük işin bir parçasıdır. E-imzanın süresinin dolması reçete yazmayı aksatacağı için yenileme tarihinin önceden takip edilmesi önemlidir.",
      },
      {
        q: "Adana'daki avukatlar ve sanayi firmaları e-imzayı nasıl kullanır?",
        a: "Adana Adliyesi'nde dava takip eden avukatlar UYAP Avukat Portalı'nda dilekçe ve evrak göndermek için e-imza kullanır. Hacı Sabancı OSB'deki sanayi firmalarının yetkilileri ise kamu ihalelerinde e-teklif, teşvik başvuruları ve elektronik sözleşmeler için e-imzaya ihtiyaç duyar. Her iki durumda da e-imza kişiye özeldir; işlem yapan her kişinin kendi e-imzası olmalıdır.",
      },
    ],
    areas: "Seyhan, Çukurova, Yüreğir, Sarıçam, Ceyhan, Kozan ve İmamoğlu'ndaki adreslere teslimat yapıyoruz; Çukurova Teknokent'teki firmalar da kapsamda. UYAP ve hastane sistemlerindeki ilk girişi telefonda birlikte tamamlıyoruz.",
    faqs: [
      { question: "Hekim olarak e-reçete için hangi e-imzayı almalıyım?", answer: "Kendi adınıza düzenlenmiş nitelikli elektronik imza gerekir. Kullandığınız hastane veya muayenehane yazılımının e-imza kurulumunu teslimattan sonra birlikte yapabiliriz." },
      { question: "E-imzamın süresi dolarsa reçete yazabilir miyim?", answer: "Süresi dolmuş sertifikayla elektronik imza atılamaz. Bu yüzden bitiş tarihinden önce yenileme başvurusu yapmanızı öneririz; yenileme sürecinde size yardımcı oluyoruz." },
    ],
  },
  mersin: {
    intro: "Mersin'de e-imza başvurusu tamamen internet üzerinden ilerler; kimlik doğrulaması bittiğinde USB token kargoyla gönderilir. Limanda beyanname imzalayan gümrük müşavirleri, narenciye ihracatçıları, Tarsus ve Mezitli'deki lojistik firmaları ile Mersin Adliyesi'nde dava takip eden avukatlar için bu imza günlük işin vazgeçilmez aracıdır.",
    sections: [
      {
        q: "Mersin'deki gümrük müşavirleri neden yedek e-imzaya önem verir?",
        a: "Mersin Limanı ve Mersin Serbest Bölgesi çevresinde gümrük işlemleri yoğun ve zamana karşı yürür; beyanname imzalayacak kişinin e-imzasının bozulması veya süresinin dolması sevkiyatı bekletebilir. Bu nedenle müşavirlik firmalarında beyanname imzalayan her müşavirin kendi e-imzası olması ve yenileme tarihlerinin önceden planlanması önerilir. Yoğun dönemlerde ikinci bir yetkilinin e-imzasının hazır olması iş sürekliliğini korur.",
      },
      {
        q: "Mersin'deki lojistik ve ihracat firmaları e-imzadan nasıl yararlanır?",
        a: "Narenciye ve tarım ürünleri ihracatçıları ile Tarsus ve Mezitli'deki lojistik firmaları; e-Devlet ve GİB işlemlerini, destek başvurularını ve elektronik sözleşmeleri yetkililerinin e-imzasıyla imzalar. Şahıs işletmesi olarak çalışan nakliyeciler e-fatura kapsamına girdiklerinde faturalarını GİB portalinde e-imzayla kesebilir.",
      },
    ],
    areas: "Akdeniz, Yenişehir, Mezitli, Toroslar, Tarsus, Erdemli, Silifke ve Anamur adreslerine teslimat yapıyoruz. Gümrük yazılımlarında e-imzanın tanınması için gereken ayarlarda uzaktan yardımcı oluyoruz.",
    faqs: [
      { question: "Gümrük beyannamesi için kendi e-imzam mı gerekir?", answer: "Evet. Beyannameyi elektronik ortamda imzalayan kişinin kendi adına düzenlenmiş nitelikli elektronik imzası olmalıdır; başkasının e-imzası kullanılamaz." },
      { question: "E-imzam bozulursa sevkiyatlarım ne olur?", answer: "Bozulan veya kaybolan e-imza için sertifika iptal edilip yenisi düzenlenir. Bu süre içinde işlemlerin aksamaması için firmada ikinci bir yetkilinin e-imzası hazır olmalıdır." },
    ],
  },
  eskisehir: {
    intro: "Eskişehir'deki bir sanayi yöneticisi, teknopark girişimcisi ya da serbest meslek sahibi olarak e-imzanızı birkaç adımda edinirsiniz: online başvuru, uzaktan kimlik doğrulama ve token'ın adresinize gönderilmesi. İhale teklifi, vergi beyanı veya sözleşme fark etmez; bu imza ıslak imzanın yerini tutar.",
    sections: [
      {
        q: "Eskişehir'deki sanayi ve teknoloji firmaları e-imzayı nasıl kullanır?",
        a: "Havacılık, raylı sistemler, beyaz eşya ve seramik alanlarında çalışan Eskişehir OSB firmaları; kamu ihalelerinde e-teklif, teşvik ve destek başvuruları ile elektronik sözleşmeler için yetkililerinin e-imzasına ihtiyaç duyar. Üniversite çevresindeki teknoloji girişimleri de yatırımcı ve müşteri sözleşmelerini e-imzayla imzalayarak farklı şehirlerdeki taraflarla zaman kaybetmeden anlaşabilir.",
      },
      {
        q: "Eskişehir'de bireysel e-imza kimler için faydalı?",
        a: "Tepebaşı ve Odunpazarı'ndaki serbest meslek sahipleri, danışmanlar ve şahıs işletmeleri; e-Devlet ve GİB işlemlerini e-imzayla şifre paylaşmadan, kendi bilgisayarlarından yapabilir. E-fatura kapsamına giren gerçek kişi tacirler ve serbest meslek erbabı, faturalarını mali mühür yerine nitelikli elektronik imzayla kesebilir.",
      },
    ],
    areas: "Odunpazarı ve Tepebaşı başta olmak üzere Sivrihisar, Alpu, Mihalıççık ve İnönü'ye de token gönderiyoruz. Bilgisayarınıza kurulum ve ilk imza denemesi telefon desteğiyle yapılır.",
    faqs: [
      { question: "Serbest meslek makbuzu için e-imza kullanabilir miyim?", answer: "E-serbest meslek makbuzu kapsamındaki gerçek kişiler GİB portalinde nitelikli elektronik imza kullanabilir. Kapsam ve geçiş tarihleri için mali müşavirinize danışmanızı öneririz." },
      { question: "E-imzayı Mac bilgisayarda kullanabilir miyim?", answer: "E-imza yazılımları Windows'un yanında macOS için de sunulur; ancak kullanacağınız portal veya programın Mac desteği ayrıca kontrol edilmelidir. Kurulum sırasında birlikte test ederiz." },
    ],
  },
  samsun: {
    intro: "Samsun'dan sipariş edilen e-imza, internet üzerinden yapılan başvuru ve kimlik doğrulamanın ardından kargoyla gelir. E-reçete düzenleyen hekimler, kamu sistemlerinde firma adına işlem yapan medikal cihaz yetkilileri, fındık ve hububat tüccarları ile mali müşavirler bu imzayı ıslak imza yerine kullanır.",
    sections: [
      {
        q: "Samsun'daki medikal cihaz firmaları e-imzayı neden kullanır?",
        a: "Medikal cihaz üreticileri ve satıcıları; ürün kayıt ve takip sistemleri başta olmak üzere kamu kurumlarının elektronik sistemlerinde firma yetkilisi adına işlem yapar ve bu işlemlerde nitelikli elektronik imza istenebilir. Samsun Merkez OSB'deki üreticilerin kamu ihalelerine e-teklif vermesi de e-imza gerektirir. Bu yüzden yetkili kişiler ile ruhsat ve kayıt sorumluları için ayrı e-imza alınması önerilir.",
      },
      {
        q: "Samsun'daki hekimler ve sağlık çalışanları için e-imza ne sağlar?",
        a: "Elektronik reçete ve bazı sağlık kayıtları hekimin nitelikli elektronik imzasıyla imzalanır. İlkadım ve Atakum'daki muayenehaneler, poliklinikler ve hastanelerde çalışan hekimler için e-imza günlük işin bir parçasıdır. Sertifikanın süresi dolduğunda reçete yazılamayacağı için yenileme tarihinin önceden takip edilmesi gerekir.",
      },
    ],
    areas: "İlkadım, Atakum, Canik ve Tekkeköy'ün yanında Bafra, Çarşamba, Terme ve Vezirköprü'ye de gönderim var; Samsun Teknopark'taki firmalar da aynı süreçten yararlanır. Hastane veya muayenehane yazılımındaki kurulumu birlikte test ediyoruz.",
    faqs: [
      { question: "Medikal firmamızda kaç kişiye e-imza gerekir?", answer: "Kamu sistemlerinde firma adına işlem yapan ve belge imzalayan her kişinin kendi e-imzası olmalıdır. Pratikte firma yetkilisi ile kayıt/ruhsat sorumlusu için e-imza alınır." },
      { question: "Hekim olarak e-imzamı birden fazla hastanede kullanabilir miyim?", answer: "Evet. E-imza kişiye özeldir ve kurumdan bağımsızdır; çalıştığınız her yerde kendi e-imzanızı kullanabilirsiniz. Her kurumun yazılımında ayrıca kurulum gerekebilir." },
    ],
  },
  denizli: {
    intro: "Denizli'de nitelikli elektronik imza edinmek için ofise gitmeniz gerekmez: kimliğinizi internet üzerinden doğrularsınız, token birkaç gün içinde kapınıza gelir. Havlu ve bornoz ihracatçıları, traverten ocakları, Buldan'ın dokuma atölyeleri ve mali müşavirler bu imzayla resmî işlemlerini evrak taşımadan halleder.",
    sections: [
      {
        q: "Denizli'deki tekstil ihracatçıları e-imzayı nasıl kullanır?",
        a: "Ev tekstili ihracatçıları; ihracat destek ve teşvik başvurularında, dış ticaret işlemlerinde ve elektronik sözleşmelerde yetkililerinin e-imzasını kullanır. Denizli OSB'deki firmalarda dış ticaret müdürü, muhasebe sorumlusu ve şirket yetkilisi için ayrı e-imza alınması, işlemlerin tek kişiye bağlı kalmasını önler. Gümrük beyannamelerini hazırlayan müşavirlerin de kendi e-imzaları olmalıdır.",
      },
      {
        q: "Denizli'deki küçük atölyeler ve şahıs işletmeleri neden e-imza alır?",
        a: "Buldan'daki dokuma atölyeleri, Merkezefendi ve Pamukkale'deki konfeksiyon ve ticaret işletmelerinin önemli bir kısmı şahıs firması olarak çalışır. Bu işletmeler e-Devlet ve GİB işlemlerini e-imzayla kendileri yapabilir; e-fatura kapsamına girdiklerinde ise faturalarını GİB portalinde mali mühür yerine nitelikli elektronik imzayla kesebilir.",
      },
    ],
    areas: "Merkezefendi ve Pamukkale'den Honaz, Sarayköy, Buldan, Çivril, Acıpayam ve Tavas'a kadar her ilçeye ve Pamukkale Teknokent'e gönderim yapıyoruz. Paket açıldıktan sonra gerekli sürücüleri WhatsApp üzerinden birlikte yüklüyoruz.",
    faqs: [
      { question: "Buldan'daki atölyemiz için e-imza kaç günde gelir?", answer: "Kimlik doğrulama tamamlandıktan sonra USB token kargoya verilir ve Denizli'nin ilçelerine genellikle 1-2 iş gününde ulaşır." },
      { question: "Şirketimizin e-faturası için e-imza kullanabilir miyiz?", answer: "Anonim ve limited şirketler e-fatura için mali mühür kullanmak zorundadır. Nitelikli elektronik imza ise şahıs işletmelerinin e-faturası ve şirket yetkililerinin kişisel imza işlemleri için kullanılır." },
    ],
  },
}
