import { MapPin } from "lucide-react"
import type { LocalProductContent } from "@/lib/city-local-content"

// Şehre özgü soru-cevap bölümleri: her H2 bir soru, ilk cümle doğrudan cevap (alıntılanabilir yapı).
export function CityLocalSections({
  content,
  cityName,
}: {
  content: Pick<LocalProductContent, "sections" | "areas">
  cityName: string
}) {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
        {content.sections.map((s) => (
          <div key={s.q}>
            <h2 className="text-2xl font-bold text-foreground">{s.q}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.a}</p>
          </div>
        ))}
        <div className="rounded-xl border bg-white p-5 flex gap-3">
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="font-semibold text-foreground">{cityName} hizmet bölgesi</h2>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{content.areas}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
