import { ExternalLink } from "lucide-react"

export interface Source {
  title: string
  url: string
  publisher: string
}

// Yazıdaki mevzuat ve kurum bilgilerinin dayandığı resmî kaynaklar.
export function Sources({ items }: { items: Source[] }) {
  if (!items.length) return null
  return (
    <section className="mt-12 border-t pt-8" aria-labelledby="kaynaklar">
      <h2 id="kaynaklar" className="text-xl font-bold text-foreground">Kaynaklar</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((s) => (
          <li key={s.url} className="flex gap-2">
            <ExternalLink className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span>
              <a href={s.url} target="_blank" rel="noopener" className="text-primary hover:underline">
                {s.title}
              </a>
              <span className="text-muted-foreground"> — {s.publisher}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
