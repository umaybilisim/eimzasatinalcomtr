import Link from "next/link"
import { UserRound } from "lucide-react"
import { DEFAULT_AUTHOR, type Author } from "@/lib/authors"

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })

// Blog yazısı başlığının altında görünen yazar ve güncelleme bilgisi (E-E-A-T).
export function AuthorByline({ updated, author = DEFAULT_AUTHOR }: { updated: string; author?: Author }) {
  return (
    <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
      <span className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center shrink-0" aria-hidden="true">
        <UserRound className="h-5 w-5" />
      </span>
      <p>
        <Link href={`/yazar/${author.slug}/`} className="font-semibold text-white hover:underline">
          {author.name}
        </Link>
        <span className="text-slate-400"> · {author.jobTitle}</span>
        <br />
        <span className="text-slate-400">Son güncelleme: </span>
        <time dateTime={updated}>{fmt(updated)}</time>
      </p>
    </div>
  )
}

// Yazının sonunda yazar kutusu.
export function AuthorBox({ author = DEFAULT_AUTHOR }: { author?: Author }) {
  return (
    <aside className="mt-12 rounded-2xl border bg-secondary/40 p-6 flex gap-4">
      <span className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
        <UserRound className="h-6 w-6 text-primary" />
      </span>
      <div>
        <p className="text-sm text-muted-foreground">Yazar</p>
        <Link href={`/yazar/${author.slug}/`} className="text-lg font-bold text-foreground hover:underline">
          {author.name}
        </Link>
        <p className="text-sm text-muted-foreground">{author.jobTitle}</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{author.shortBio}</p>
      </div>
    </aside>
  )
}
