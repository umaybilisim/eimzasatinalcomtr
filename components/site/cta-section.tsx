import Link from "next/link"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

interface CtaSectionProps {
  title?: string
  subtitle?: string
}

export function CtaSection({
  title = "Hemen Sipariş Verin",
  subtitle = "Sorularınız için bizi arayın veya WhatsApp'tan yazın. En uygun paketi birlikte belirleyelim.",
}: CtaSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg font-bold"
            asChild
          >
            <Link href="/iletisim">
              Sipariş Formu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="bg-green-500 text-white hover:bg-green-400"
            asChild
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ile Yaz
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10"
            asChild
          >
            <a href={`tel:${siteConfig.phoneTel}`}>
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
