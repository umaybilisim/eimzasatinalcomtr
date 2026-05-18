import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "e-imzasatinal.com gizlilik politikası ve çerez kullanımı.",
  alternates: { canonical: `${siteConfig.url}/gizlilik/` },
}

export default function GizlilikPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Gizlilik Politikası" }]} />
          <h1 className="mt-6 text-3xl font-extrabold">Gizlilik Politikası</h1>
          <p className="mt-2 text-slate-400">Son güncelleme: Ocak 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <p className="text-muted-foreground"><em>Bu metin örnek bir gizlilik politikasıdır. Lütfen hukuk danışmanınızla güncelleyiniz.</em></p>

          <h2>Çerezler</h2>
          <p>Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla teknik çerezler kullanmaktadır. Analitik ve pazarlama çerezleri için açık onayınız alınmaktadır.</p>

          <h2>Veri Güvenliği</h2>
          <p>Kişisel verileriniz HTTPS şifrelemesi ve güvenli sunucu altyapısıyla korunmaktadır.</p>

          <h2>İletişim</h2>
          <p>Gizlilik politikasına ilişkin sorularınız için: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        </div>
      </section>
    </>
  )
}
