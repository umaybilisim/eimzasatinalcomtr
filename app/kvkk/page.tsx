import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Kişisel verilerin korunması kanunu kapsamında aydınlatma metni.",
  alternates: { canonical: `${siteConfig.url}/kvkk/` },
}

export default function KvkkPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "KVKK" }]} />
          <h1 className="mt-6 text-3xl font-extrabold">KVKK Aydınlatma Metni</h1>
          <p className="mt-2 text-slate-400">Son güncelleme: Ocak 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <p className="text-muted-foreground"><em>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında hazırlanmış örnek bir aydınlatma metnidir. Lütfen hukuk danışmanınızla güncelleyiniz.</em></p>

          <h2>1. Veri Sorumlusu</h2>
          <p>
            <strong>UMAY TÜM BİLİŞİM VE EĞİTİM DAN.YAZILIM İTH. İHR. SAN. TİC. LTD.ŞTİ.</strong> (e-imzasatinal.com)
            olarak, kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında işlemekteyiz.
          </p>
          <ul>
            <li><strong>Vergi Dairesi:</strong> Ali Fuat Cebesoy VD</li>
            <li><strong>Vergi Numarası:</strong> 892 062 5443</li>
            <li><strong>Adres:</strong> Erenler Mah. 1193 Nolu Sk. No:4/1-213, Meydan54 AVM B1 Blok K:2 D:84, Erenler 54200 Sakarya / TÜRKİYE</li>
            <li><strong>E-posta:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><strong>Telefon:</strong> {siteConfig.phone}</li>
          </ul>

          <h2>2. İşlenen Kişisel Veriler</h2>
          <p>Ad, soyad, e-posta adresi, telefon numarası, TC kimlik numarası (e-imza başvurusu için zorunlu), adres bilgileri.</p>

          <h2>3. Kişisel Verilerin İşlenme Amacı</h2>
          <ul>
            <li>E-imza, KEP ve zaman damgası hizmetlerinin sunulması</li>
            <li>Sözleşme süreçlerinin yürütülmesi</li>
            <li>Müşteri desteği ve teknik hizmet sunumu</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h2>4. Kişisel Verilerin Aktarılması</h2>
          <p>Kişisel verileriniz, yalnızca hizmet sunumu için zorunlu olduğu durumlarda ve KVKK kapsamındaki güvencelere uygun olarak üçüncü taraflarla paylaşılabilir (sertifika sağlayıcıları, kargo şirketleri, ödeme kuruluşları).</p>

          <h2>5. Haklarınız</h2>
          <p>KVKK kapsamında kişisel verilerinize erişim, düzeltme, silme ve işlemeye itiraz haklarına sahipsiniz. Haklarınızı kullanmak için <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> adresine yazabilirsiniz.</p>
        </div>
      </section>
    </>
  )
}
