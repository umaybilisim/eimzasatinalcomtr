import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { WhatsappFloat } from "@/components/site/whatsapp-float"
import { siteConfig } from "@/lib/site-config"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | e-imzasatinal.com",
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
  authors: [{ name: "e-imzasatinal.com" }],
  creator: "e-imzasatinal.com",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  )
}
