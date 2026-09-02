import Link from "next/link"
import { Globe, Check, ArrowRight } from "lucide-react"
import { internationalPricing } from "@/lib/products"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function InternationalPricing() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 text-sm text-blue-200 mb-4">
            <Globe className="h-4 w-4" />
            Yurt Dışı Müşteriler İçin
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">Uluslararası Fiyatlandırma</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Türkiye dışından sipariş veren müşterilerimiz için USD ve EUR fiyatlandırma. Ödeme döviz cinsinden alınır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {internationalPricing.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-2xl border p-6 flex flex-col gap-4",
                pkg.highlighted
                  ? "border-blue-400 bg-blue-600/20 shadow-xl"
                  : "border-slate-700 bg-slate-800/60"
              )}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    En Avantajlı
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">{pkg.usd}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-3xl font-extrabold text-white">{pkg.eur}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{pkg.note}</p>
              </div>

              <ul className="space-y-2 flex-1 border-t border-slate-700 pt-4">
                {["TÜBİTAK onaylı sertifika", "Uluslararası kargo", "Hukuki geçerlilik", "Uzaktan kurulum desteği"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-blue-400" />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello, I would like to order ${pkg.name} (International). / Merhaba, ${pkg.name} yurt dışı paketi hakkında bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm",
                  pkg.highlighted
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                WhatsApp ile Sipariş
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Uluslararası siparişleriniz için{" "}
          <Link href="/iletisim" className="text-blue-300 hover:text-blue-200 underline">
            bizimle iletişime geçin
          </Link>
          {" "}— ödeme ve teslimat detaylarını birlikte planlayalım.
        </p>
      </div>
    </section>
  )
}
