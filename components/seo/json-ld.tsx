import { siteConfig } from "@/lib/site-config"

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

const SITE = siteConfig.url
export const ORG_ID = `${SITE}/#organization`
export const WEBSITE_ID = `${SITE}/#website`
const LOGO = `${SITE}/logo.png`
const OG_IMAGE = `${SITE}/og-image.png`

const sameAs = Object.values(siteConfig.social).filter(Boolean)

// Diğer şemalardan kuruluşa yalnızca @id ile bağlanılır; tam tanım ana sayfada bir kez yer alır.
const orgRef = { "@id": ORG_ID }

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortLegalName,
    url: SITE,
    logo: { "@type": "ImageObject", url: LOGO, width: 512, height: 512 },
    image: OG_IMAGE,
    description: siteConfig.entityDescription,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneTel,
        contactType: "customer service",
        availableLanguage: ["Turkish"],
        areaServed: "TR",
      },
    ],
    priceRange: "₺₺",
    currenciesAccepted: "TRY, USD, EUR",
    paymentAccepted: "Kredi Kartı, Havale, EFT",
    areaServed: { "@type": "Country", name: "Türkiye" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Elektronik Sertifika Hizmetleri",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-İmza (Nitelikli Elektronik Sertifika)", url: `${SITE}/e-imza/` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "KEP (Kayıtlı Elektronik Posta)", url: `${SITE}/kep/` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zaman Damgası", url: `${SITE}/zaman-damgasi/` } },
      ],
    },
    ...(sameAs.length ? { sameAs } : {}),
  }
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.brandName,
    alternateName: ["eimzasatinal", "E-İmza Satın Al"],
    url: SITE,
    inLanguage: "tr-TR",
    publisher: orgRef,
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
  }

  const common = {
    priceCurrency: "TRY",
    availability: "https://schema.org/InStock",
    url,
    seller: orgRef,
    shippingDetails,
    hasMerchantReturnPolicy: returnPolicy,
  }

  let offers: Record<string, unknown>
  if (lowPrice && highPrice) {
    offers = { "@type": "AggregateOffer", lowPrice, highPrice, offerCount: "3", ...common }
  } else if (price) {
    offers = { "@type": "Offer", price, ...common }
  } else {
    offers = { "@type": "Offer", availability: "https://schema.org/InStock", url, seller: orgRef }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image: image ?? OG_IMAGE,
    brand: { "@type": "Brand", name: siteConfig.brandName },
    offers,
  }
}

export function serviceSchema({
  name,
  description,
  url,
  image,
  city,
}: {
  name: string
  description: string
  url: string
  image?: string
  city?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: image ?? OG_IMAGE,
    provider: orgRef,
    areaServed: city
      ? { "@type": "City", name: city, containedInPlace: { "@type": "Country", name: "Türkiye" } }
      : { "@type": "Country", name: "Türkiye" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: siteConfig.phoneTel,
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
  dateModified,
  image,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: image ?? OG_IMAGE,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", "@id": ORG_ID, name: siteConfig.brandName, url: SITE },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteConfig.brandName,
      logo: { "@type": "ImageObject", url: LOGO },
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
