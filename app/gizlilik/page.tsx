import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "eimzasatinal.com.tr gizlilik politikası ve çerez kullanımı.",
  alternates: { canonical: `${siteConfig.url}/gizlilik/` },
}

export default function GizlilikPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Gizlilik Politikası" }]} />
          <h1 className="mt-6 text-3xl font-extrabold">Gizlilik Politikası</h1>
          <p className="mt-2 text-slate-400">Son güncelleme: Ocak 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <p className="text-muted-foreground"><em>Bu metin örnek bir gizlilik politikasıdır. Lütfen hukuk danışmanınızla güncelleyiniz.</em></p>

          <h2>1. Veri Sorumlusu</h2>
          <p>
            <strong>UMAY TÜM BİLİŞİM VE EĞİTİM DAN.YAZILIM İTH. İHR. SAN. TİC. LTD.ŞTİ.</strong> (eimzasatinal.com.tr)
            olarak kişisel verilerinizin güvenliğine önem veriyoruz.
          </p>
          <ul>
            <li><strong>Vergi Dairesi:</strong> Ali Fuat Cebesoy VD</li>
            <li><strong>Vergi Numarası:</strong> 892 062 5443</li>
            <li><strong>Adres:</strong> Erenler Mah. 1193 Nolu Sk. No:4/1-213, Meydan54 AVM B1 Blok K:2 D:84, Erenler 54200 Sakarya / TÜRKİYE</li>
            <li><strong>Web:</strong> <a href="https://www.umaybilisim.com.tr" target="_blank" rel="noopener">www.umaybilisim.com.tr</a></li>
            <li><strong>E-posta:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><strong>Telefon:</strong> {siteConfig.phone}</li>
          </ul>

          <h2>2. Çerezler</h2>
          <p>Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla teknik çerezler kullanmaktadır. Analitik ve pazarlama çerezleri için açık onayınız alınmaktadır.</p>

          <h2>3. Veri Güvenliği</h2>
          <p>Kişisel verileriniz HTTPS şifrelemesi ve güvenli sunucu altyapısıyla korunmaktadır. Umay Tüm Bilişim olarak 16 yıllık sektör deneyimimizle veri güvenliğini en üst önceliğimiz olarak görüyoruz.</p>

          <h2>4. İletişim</h2>
          <p>Gizlilik politikasına ilişkin sorularınız için: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> veya <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a> numaralı telefondan bize ulaşabilirsiniz.</p>
        </div>
      </section>
    </>
  )
}
