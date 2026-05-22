import Link from "next/link"
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Background decoration — blur kaldırıldı (mobile LCP için) */}
      <div className="absolute inset-0 opacity-5 hidden sm:block" aria-hidden="true">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 text-sm text-blue-200 mb-6">
              <ShieldCheck className="h-4 w-4" />
              TÜBİTAK &amp; BTK Onaylı Hizmet
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-balance">
              E-İmza, KEP ve{" "}
              <span className="text-blue-400">Zaman Damgası</span>{" "}
              Satın Al
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              Bireysel ve kurumsal e-imza paketleri, hızlı aktivasyon, uygun fiyat. Hukuki geçerliliği olan dijital imzanızı bugün alın.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-yellow-400" /> Aynı gün aktivasyon</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-blue-400" /> 7/24 teknik destek</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-400" /> Hukuki geçerlilik</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-900/40">
                <Link href="/iletisim">
                  Hemen Sipariş Ver
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Bilgi Al
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Product cards (mini) */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "E-İmza", desc: "Islak imzayla aynı hukuki geçerlilik", href: "/e-imza", badge: "En Popüler" },
              { name: "KEP", desc: "Yasal delil niteliğinde e-posta", href: "/kep", badge: "Zorunlu" },
              { name: "Zaman Damgası", desc: "Belge varlığı kanıtı, RFC 3161", href: "/zaman-damgasi", badge: "TÜBİTAK" },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex items-center gap-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/40 p-4 transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-blue-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{p.name}</span>
                    <span className="text-xs rounded-full bg-blue-500/30 text-blue-200 px-2 py-0.5">{p.badge}</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-0.5">{p.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
