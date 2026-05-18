import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Package } from "@/lib/products"
import { siteConfig } from "@/lib/site-config"

interface PricingTableProps {
  packages: Package[]
  ctaHref?: string
}

export function PricingTable({ packages, ctaHref = "/iletisim" }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className={cn(
            "relative rounded-2xl border p-6 flex flex-col gap-4 transition-shadow",
            pkg.highlighted
              ? "border-primary bg-primary shadow-xl shadow-primary/20 text-white"
              : "border-border bg-card hover:shadow-md"
          )}
        >
          {pkg.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="popular" className="shadow-sm">En Avantajlı</Badge>
            </div>
          )}

          <div>
            <h3 className={cn("text-xl font-bold", pkg.highlighted ? "text-white" : "text-foreground")}>
              {pkg.name}
            </h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={cn("text-3xl font-extrabold", pkg.highlighted ? "text-white" : "text-primary")}>
                {pkg.price}
              </span>
              <span className={cn("text-sm", pkg.highlighted ? "text-blue-100" : "text-muted-foreground")}>
                {pkg.priceNote}
              </span>
            </div>
          </div>

          <ul className="space-y-2 flex-1">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className={cn("h-4 w-4 mt-0.5 shrink-0", pkg.highlighted ? "text-blue-200" : "text-primary")} />
                <span className={pkg.highlighted ? "text-blue-50" : "text-muted-foreground"}>{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <Button
              variant={pkg.highlighted ? "secondary" : "default"}
              className={pkg.highlighted ? "bg-white text-primary hover:bg-blue-50" : ""}
              asChild
            >
              <Link href={ctaHref}>
                Hemen Sipariş Ver
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={pkg.highlighted ? "text-blue-100 hover:bg-white/10" : ""}
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${pkg.name} hakkında bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ile Sor
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
