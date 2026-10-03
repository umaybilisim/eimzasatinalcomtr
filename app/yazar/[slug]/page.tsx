import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, UserRound } from "lucide-react"
import { pageTitle, ogDefaults } from "@/lib/seo"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, breadcrumbSchema, personSchema } from "@/components/seo/json-ld"
import { authors, authorUrl } from "@/lib/authors"
import { blogPosts } from "@/lib/blog-data"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = authors[params.slug]
  if (!a) return {}
  const title = `${a.name} — ${a.jobTitle}`
  return {
    title: pageTitle(title),
    description: a.shortBio,
    alternates: { canonical: authorUrl(a) },
    openGraph: { ...ogDefaults, type: "profile", title, description: a.shortBio, url: authorUrl(a) },
  }
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const a = authors[params.slug]
  if (!a) notFound()

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: authorUrl(a),
          mainEntity: personSchema(a),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog/` },
          { name: a.name, url: authorUrl(a) },
        ])}
      />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: a.name }]} />
          <div className="mt-6 flex items-center gap-4">
            <span className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center shrink-0" aria-hidden="true">
              <UserRound className="h-8 w-8" />
            </span>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold">{a.name}</h1>
              <p className="mt-1 text-slate-300">{a.jobTitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Hakkında</h2>
          {a.bio.map((p) => (
            <p key={p.slice(0, 30)} className="mt-4 text-muted-foreground leading-relaxed">{p}</p>
          ))}

          <h2 className="mt-12 text-2xl font-bold text-foreground">Yazıları</h2>
          <ul className="mt-6 space-y-3">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}/`} className="group flex items-start justify-between gap-4 rounded-xl border p-4 hover:border-primary transition-colors">
                  <span>
                    <span className="font-semibold text-foreground group-hover:text-primary">{post.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{post.excerpt}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
