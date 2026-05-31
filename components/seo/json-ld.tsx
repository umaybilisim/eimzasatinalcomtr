interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UMAY TÜM BİLİŞİM — eimzasatinal.com.tr",
    url: "https://eimzasatinal.com.tr",
    logo: "https://eimzasatinal.com.tr/og-image.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+908507771145",
      contactType: "customer service",
      availableLanguage: "Turkish",
    },
  }
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eimzasatinal.com.tr",
    alternateName: "E-İmza Satın Al — eimzasatinal.com.tr",
    url: "https://eimzasatinal.com.tr",
    description: "TÜBİTAK onaylı e-imza, KEP ve zaman damgası satın al. Hızlı aktivasyon, uygun fiyat.",
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: "UMAY TÜM BİLİŞİM",
      url: "https://eimzasatinal.com.tr",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://eimzasatinal.com.tr/blog/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "eimzasatinal.com.tr — E-İmza, KEP ve Zaman Damgası",
    alternateName: "UMAY TÜM BİLİŞİM",
    url: "https://eimzasatinal.com.tr",
    logo: "https://eimzasatinal.com.tr/og-image.png",
    image: "https://eimzasatinal.com.tr/og-image.png",
    description: "TÜBİTAK ve BTK onaylı e-imza, KEP ve zaman damgası satış ve aktivasyon hizmetleri. Uzaktan aktivasyon, aynı gün teslimat.",
    telephone: "+908507771145",
    email: "bilgi@umaybilisim.com.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Erenler Mah. 1193 Nolu Sk. No:4/1-213, Meydan54 AVM B1 Blok K:2 D:84",
      addressLocality: "Erenler",
      addressRegion: "Sakarya",
      postalCode: "54200",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7731",
      longitude: "30.3897",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: "Kredi Kartı, Havale, EFT",
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-İmza Ürünleri",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-İmza" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "KEP (Kayıtlı Elektronik Posta)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zaman Damgası" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

export function productSchema({
  name,
  description,
  url,
  price,
  lowPrice,
  highPrice,
  image,
}: {
  name: string
  description: string
  url: string
  price?: string
  lowPrice?: string
  highPrice?: string
  image?: string
}) {
  const seller = {
    "@type": "Organization",
    name: "UMAY TÜM BİLİŞİM VE EĞİTİM DAN.YAZILIM İTH. İHR. SAN. TİC. LTD.ŞTİ.",
  }

  const shippingDetails = {
    "@type": "OfferShippingDetails",
    shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "TRY" },
    shippingDestination: { "@type": "DefinedRegion", addressCountry: "TR" },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
      transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" },
    },
  }

  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "TR",
    returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    merchantReturnDays: 0,
  }

  let offers: Record<string, unknown>
  if (lowPrice && highPrice) {
    offers = {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      lowPrice,
      highPrice,
      offerCount: "3",
      availability: "https://schema.org/InStock",
      url,
      seller,
      shippingDetails,
      hasMerchantReturnPolicy: returnPolicy,
    }
  } else if (price) {
    offers = {
      "@type": "Offer",
      priceCurrency: "TRY",
      price,
      availability: "https://schema.org/InStock",
      url,
      seller,
      shippingDetails,
      hasMerchantReturnPolicy: returnPolicy,
    }
  } else {
    offers = {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url,
      seller,
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image: image ?? "https://eimzasatinal.com.tr/og-image.png",
    brand: { "@type": "Brand", name: "eimzasatinal.com.tr" },
    offers,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Ahmet Yılmaz" },
        reviewBody: "3 yıldır e-imzamı bu hizmetten alıyorum. Hızlı aktivasyon ve sorunsuz teknik destek için teşekkürler.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Fatma Kaya" },
        reviewBody: "KEP adresimi de buradan aldım. İşlem çok hızlı oldu ve her soruma anında yanıt verdiler.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Mehmet Demir" },
        reviewBody: "Kurumsal e-imza için birden fazla personelimize aldık. Fiyat performans açısından çok memnunuz.",
      },
    ],
  }
}

export function serviceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: image ?? "https://eimzasatinal.com.tr/og-image.png",
    provider: {
      "@type": "Organization",
      name: "UMAY TÜM BİLİŞİM VE EĞİTİM DAN.YAZILIM İTH. İHR. SAN. TİC. LTD.ŞTİ.",
      url: "https://eimzasatinal.com.tr",
    },
    areaServed: { "@type": "Country", name: "Türkiye" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
    },
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
}: {
  title: string
  description: string
  url: string
  datePublished: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Organization",
      name: "eimzasatinal.com.tr",
    },
    publisher: {
      "@type": "Organization",
      name: "eimzasatinal.com.tr",
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
