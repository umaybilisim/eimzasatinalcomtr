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
    name: "UMAY TÜM BİLİŞİM — e-imzasatinal.com",
    url: "https://www.eimzasatinal.com.tr",
    logo: "https://www.eimzasatinal.com.tr/og-image.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+908507771145",
      contactType: "customer service",
      availableLanguage: "Turkish",
    },
  }
}

export function productSchema({
  name,
  description,
  url,
  price,
  image,
}: {
  name: string
  description: string
  url: string
  price?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image: image ?? "https://www.eimzasatinal.com.tr/og-image.png",
    brand: {
      "@type": "Brand",
      name: "e-imzasatinal.com",
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        priceCurrency: "TRY",
        price,
        availability: "https://schema.org/InStock",
        url,
        seller: {
          "@type": "Organization",
          name: "UMAY TÜM BİLİŞİM VE EĞİTİM DAN.YAZILIM İTH. İHR. SAN. TİC. LTD.ŞTİ.",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "TRY",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "TR",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 0,
              maxValue: 1,
              unitCode: "DAY",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 3,
              unitCode: "DAY",
            },
          },
        },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "TR",
          returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
          merchantReturnDays: 0,
        },
      },
    }),
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
      name: "e-imzasatinal.com",
    },
    publisher: {
      "@type": "Organization",
      name: "e-imzasatinal.com",
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
