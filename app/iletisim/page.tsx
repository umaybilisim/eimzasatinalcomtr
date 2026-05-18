import type { Metadata } from "next"
import { ContactForm } from "@/components/site/contact-form"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, organizationSchema, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "İletişim — Sipariş ve Bilgi",
  description: "E-imza, KEP ve zaman damgası siparişi için bizimle iletişime geçin. WhatsApp, telefon veya form ile ulaşın.",
  alternates: { canonical: `${siteConfig.url}/iletisim/` },
}

export default function IletisimPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "İletişim", url: `${siteConfig.url}/iletisim/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "İletişim" }]} />
          <h1 className="mt-6 text-4xl font-extrabold">Sipariş ve Bilgi</h1>
          <p className="mt-3 text-slate-300">Hızlı yanıt için WhatsApp veya telefonu tercih edin.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Konumumuz</h2>
          <div className="rounded-2xl overflow-hidden border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.969969983087!2d30.409818100000003!3d40.7406863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb332bc00b271%3A0xd3b0ccc010297b5a!2zVU1BWSBUw5xNIELEsEzEsMWexLBNIFZFIEXEnsSwVMSwTSBEQU5JxZ5NQU5MSUsgTFRELsWeVMSwLg!5e0!3m2!1str!2str!4v1779135520797!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UMAY TÜM BİLİŞİM Konum"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <a
              href="https://maps.google.com/?q=UMAY+TÜM+BİLİŞİM+VE+EĞİTİM+DANIŞMANLIK+LTD.ŞTİ,+Erenler+Sakarya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Adrese Git
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
