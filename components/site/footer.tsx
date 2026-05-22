import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Logo } from "./logo"
import { siteConfig, footerLinks } from "@/lib/site-config"
import { cities } from "@/lib/city-seo-data"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo inverted />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              TÜBİTAK onaylı e-imza, KEP ve zaman damgası hizmetleri. Güvenli, hızlı ve uygun fiyatlı dijital imza çözümleri.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                {siteConfig.phone}
              </a>
              <a href={`tel:${siteConfig.phone2Tel}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                {siteConfig.phone2}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                {siteConfig.address}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400 shrink-0" />
                {siteConfig.workingHours}
              </p>
            </div>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* City SEO links */}
        <div className="mt-10 pt-8 border-t border-slate-800">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Hizmet Bölgelerimiz — E-İmza
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/e-imza/${city.slug}`}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {city.name} E-İmza
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} e-imzasatinal.com — Tüm hakları saklıdır.</p>
          <p>
            TÜBİTAK BİLGEM onaylı nitelikli elektronik sertifika hizmetleri |{" "}
            <a
              href="https://www.umaybilisim.com.tr"
              target="_blank"
              rel="noopener"
              className="hover:text-slate-300 transition-colors"
            >
              Umay Bilişim
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
