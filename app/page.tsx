import dynamic from "next/dynamic"
import { Hero } from "@/components/site/hero"
import { JsonLd, organizationSchema, faqSchema } from "@/components/seo/json-ld"
import { products } from "@/lib/products"
import { faqData } from "@/lib/faq-data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FeatureGrid = dynamic(() => import("@/components/site/feature-grid").then(m => ({ default: m.FeatureGrid })))
const TestimonialGrid = dynamic(() => import("@/components/site/testimonial-grid").then(m => ({ default: m.TestimonialGrid })))
const PricingTable = dynamic(() => import("@/components/site/pricing-table").then(m => ({ default: m.PricingTable })))
const CtaSection = dynamic(() => import("@/components/site/cta-section").then(m => ({ default: m.CtaSection })))
const Accordion = dynamic(() => import("@/components/ui/accordion").then(m => ({ default: m.Accordion })))

const homeFaqs = faqData.filter((f) =>
  ["genel-1", "genel-2", "eimza-1", "eimza-2", "kep-1"].includes(f.id)
)

export default function HomePage() {
  const eimza = products.find((p) => p.slug === "e-imza")!

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero />

      {/* Products overview */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ürünlerimiz</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              TÜBİTAK ve BTK onaylı dijital kimlik çözümleri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/${product.slug}`}
                className="group rounded-2xl border bg-white p-8 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.shortName}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.tagline}</p>
                <ul className="mt-4 space-y-1">
                  {product.useCases.slice(0, 3).map((u) => (
                    <li key={u} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                  Detaylı İncele
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid />

      {/* E-İmza pricing highlight */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">E-İmza Paketleri</h2>
            <p className="mt-4 text-muted-foreground">1, 2 veya 3 yıllık seçenekler. Tüm paketlerde TÜBİTAK onaylı sertifika.</p>
          </div>
          <PricingTable packages={eimza.packages} />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            KEP ve Zaman Damgası fiyatları için{" "}
            <Link href="/iletisim" className="text-primary hover:underline font-medium">
              teklif alın
            </Link>
          </p>
        </div>
      </section>

      <TestimonialGrid />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground">Sıkça Sorulan Sorular</h2>
          </div>
          <Accordion items={homeFaqs} />
          <div className="mt-6 text-center">
            <Link href="/sss" className="text-primary hover:underline text-sm font-medium">
              Tüm soruları gör →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
