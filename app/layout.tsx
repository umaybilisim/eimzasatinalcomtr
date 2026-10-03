import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { WhatsappFloat } from "@/components/site/whatsapp-float"
import { AnalyticsConsent } from "@/components/site/analytics-consent"
import { siteConfig } from "@/lib/site-config"

// "optional": font geç gelirse yedek fontla kalır; font değişiminin yarattığı layout shift (CLS) oluşmaz.
const inter = Inter({ subsets: ["latin", "latin-ext"], display: "optional", preload: true })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | eimzasatinal.com.tr",
  },
  description: siteConfig.description,
  keywords: [
    "e-imza",
    "e-imza satın al",
    "elektronik imza",
    "kep",
    "kep adresi al",
    "zaman damgası",
    "e-imza fiyatları",
    "mali müşavir e-imza",
    "kurumsal e-imza",
    "ucuz e-imza",
  ],
  authors: [{ name: "eimzasatinal.com.tr" }],
  creator: "eimzasatinal.com.tr",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.brandName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "eimzasatinal.com.tr — E-İmza, KEP ve Zaman Damgası",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
        <AnalyticsConsent />
      </body>
    </html>
  )
}
