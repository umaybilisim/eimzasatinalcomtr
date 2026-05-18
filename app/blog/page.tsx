import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog — E-İmza, KEP ve Zaman Damgası Hakkında Her Şey",
  description: "E-imza nasıl alınır, KEP nedir, zaman damgası ne işe yarar? Dijital imza hakkında kapsamlı rehberler ve güncel bilgiler.",
  alternates: { canonical: `${siteConfig.url}/blog/` },
}

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Ana Sayfa", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog/` }])} />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold">Blog</h1>
          <p className="mt-3 text-slate-300 max-w-xl">E-imza, KEP ve zaman damgası hakkında kapsamlı rehberler.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-primary border border-primary/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                  Devamını Oku
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
