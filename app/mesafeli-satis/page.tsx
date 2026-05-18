import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description: "e-imzasatinal.com mesafeli satış sözleşmesi.",
  alternates: { canonical: `${siteConfig.url}/mesafeli-satis/` },
}

export default function MesafeliSatisPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Mesafeli Satış Sözleşmesi" }]} />
          <h1 className="mt-6 text-3xl font-extrabold">Mesafeli Satış Sözleşmesi</h1>
          <p className="mt-2 text-slate-400">Son güncelleme: Ocak 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <p className="text-muted-foreground"><em>Bu metin, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında örnek bir metindir. Lütfen hukuk danışmanınızla güncelleyiniz.</em></p>

          <h2>Satıcı Bilgileri</h2>
          <ul>
            <li><strong>Ünvan:</strong> UMAY TÜM BİLİŞİM VE EĞİTİM DAN.YAZILIM İTH. İHR. SAN. TİC. LTD.ŞTİ.</li>
            <li><strong>Vergi Dairesi:</strong> Ali Fuat Cebesoy VD</li>
            <li><strong>Vergi Numarası:</strong> 892 062 5443</li>
            <li><strong>Adres:</strong> Erenler Mah. 1193 Nolu Sk. No:4/1-213, Meydan54 AVM B1 Blok K:2 D:84, Erenler 54200 Sakarya / TÜRKİYE</li>
            <li><strong>Web:</strong> <a href="https://www.umaybilisim.com.tr" target="_blank" rel="noopener">www.umaybilisim.com.tr</a> / <a href="https://www.e-imzasatinal.com">www.e-imzasatinal.com</a></li>
            <li><strong>E-posta:</strong> {siteConfig.email}</li>
            <li><strong>Telefon:</strong> {siteConfig.phone}</li>
            <li><strong>Telefon 2:</strong> {siteConfig.phone2}</li>
          </ul>

          <h2>Sözleşme Konusu</h2>
          <p>İşbu sözleşme, alıcının sipariş verdiği e-imza, KEP veya zaman damgası hizmetinin satışına ilişkin şart ve koşulları düzenler.</p>

          <h2>Cayma Hakkı</h2>
          <p>Dijital hizmet niteliğinde olan e-imza ve KEP sertifikaları, aktivasyon tamamlandıktan sonra 6502 sayılı Kanun'un 15. maddesi uyarınca cayma hakkı kapsamı dışındadır. Aktivasyon gerçekleşmeden önce siparişinizi iptal edebilirsiniz.</p>

          <h2>Teslimat</h2>
          <p>USB token kargo yoluyla teslim edilir. Kargo bedeli satıcı tarafından karşılanır. Teslim süresi genellikle 1-3 iş günüdür.</p>

          <h2>Uyuşmazlık Çözümü</h2>
          <p>Uyuşmazlıklarda Tüketici Hakem Heyeti ve Tüketici Mahkemeleri yetkilidir.</p>
        </div>
      </section>
    </>
  )
}
