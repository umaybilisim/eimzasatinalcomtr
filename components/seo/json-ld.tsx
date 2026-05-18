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
    name: "e-imzasatinal.com",
    url: "https://e-imzasatinal.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+902120000000",
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
}: {
  name: string
  description: string
  url: string
  price?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
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
