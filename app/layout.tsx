import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { WhatsappFloat } from "@/components/site/whatsapp-float"
import { siteConfig } from "@/lib/site-config"

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap", preload: true })

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
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3LVKN5BK34" strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3LVKN5BK34');
        `}</Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  )
}
