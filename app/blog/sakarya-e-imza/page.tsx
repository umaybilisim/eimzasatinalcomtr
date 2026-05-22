import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, MapPin, Truck, Phone, Clock } from "lucide-react"
import { CtaSection } from "@/components/site/cta-section"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Sakarya E-İmza Al — Adapazarı'nda Aynı Gün Elden Teslim 2026",
  description:
    "Sakarya ve Adapazarı'nda e-imza satın alın. Merkezimiz Sakarya'da! Aynı gün elden teslim, yerinde kurulum. Toyota tedarikçileri, OSB firmaları ve muhasebecilere özel TÜBİTAK onaylı e-imza çözümleri.",
  alternates: { canonical: `${siteConfig.url}/blog/sakarya-e-imza/` },
  openGraph: {
    title: "Sakarya E-İmza Al — Adapazarı'nda Aynı Gün Elden Teslim",
    description: "Merkezimiz Sakarya'da! TÜBİTAK onaylı e-imza. Aynı gün elden teslim ve yerinde kurulum desteği.",
    url: `${siteConfig.url}/blog/sakarya-e-imza/`,
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: "Sakarya'da e-imzayı elden teslim alabilir miyim?",
    answer: "Evet. Merkezimiz Sakarya Erenler'de olduğu için randevu ile elden teslim yapabiliyoruz. Aynı gün aktivasyon ve yerinde kurulum desteği de sunuyoruz. 0850 777 11 45 veya 0264 777 11 45 numaralarından randevu alabilirsiniz.",
  },
  {
    question: "Sakarya'da e-imza kaç günde teslim edilir?",
    answer: "Merkezimiz Sakarya'da olduğu için elden teslim siparişlerde aynı gün kurulum yapılabilmektedir. Kargo tercih ederseniz Adapazarı, Serdivan, Hendek ve tüm Sakarya ilçelerine en geç 1 iş günü içinde ulaşılmaktadır.",
  },
  {
    question: "Sakarya OSB'deki firmamız için toplu e-imza alabilir miyiz?",
    answer: "Evet. Sakarya Organize Sanayi Bölgesi'ndeki firmalar için 3 ve üzeri e-imza başvurularında toplu fiyatlandırma uygulanmaktadır. Şirketinizdeki tüm yetkili imzacılar için tek seferde başvuru yapabilirsiniz.",
  },
  {
    question: "Toyota tedarikçisi olarak e-imzaya ihtiyacım var mı?",
    answer: "Toyota Türkiye ve diğer otomotiv ana sanayii firmalarına tedarik yapan şirketler, EDI sistemleri, kalite belgeleri, sevkiyat onayları ve tedarikçi sözleşmeleri için e-imzaya ihtiyaç duymaktadır. Sakarya'daki Toyota tedarikçilerine özel destek sunuyoruz.",
  },
  {
    question: "Sakarya'da muhasebeci olarak e-imzayı nasıl kullanırım?",
    answer: "Mali müşavir ve muhasebeciler; e-beyanname imzalama, SGK bildirimleri, TÜRMOB işlemleri ve müşteri sözleşmeleri için e-imzayı aktif biçimde kullanmaktadır. Sakarya'daki SM ve SMMM unvanlı meslektaşlarımıza aynı gün kurulum desteği sunuyoruz.",
  },
]

const kullanimAlanlari = [
  "e-Beyanname imzalama (Gelir İdaresi)",
  "SGK bildirimleri ve e-bildirge",
  "Kamu ihaleleri (EKAP platformu)",
  "e-Fatura ve e-Defter uygulamaları",
  "Ticari sözleşme imzalama",
  "e-Devlet işlemleri",
  "TÜRMOB ve SMMM portal işlemleri",
  "Banka ve finans başvuruları",
  "Toyota & otomotiv EDI sistemleri",
  "Sakarya Büyükşehir Belediyesi ihaleleri",
  "UYAP (avukatlar için)",
  "TÜBİTAK TEYDEB proje başvuruları",
]

const adimlar = [
  { n: "1", title: "Online Başvuru", desc: "Formu doldurun veya WhatsApp'tan yazın — 5 dakika yeterli." },
  { n: "2", title: "Kimlik Doğrulama", desc: "e-Devlet üzerinden veya merkezimizde yüz yüze doğrulama." },
  { n: "3", title: "Ödeme", desc: "Kredi kartı, havale veya nakit (elden teslimde) ile ödeme." },
  { n: "4", title: "Teslim & Kurulum", desc: "Sakarya'da elden teslim veya kargo. Yerinde aktivasyon desteği." },
]

export default function SakaryaEImzaPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "Sakarya E-İmza Al — Adapazarı'nda Aynı Gün Elden Teslim 2026",
          description:
            "Sakarya ve Adapazarı'nda e-imza satın alın. Merkezimiz Sakarya'da! Aynı gün elden teslim, yerinde kurulum desteği.",
          url: `${siteConfig.url}/blog/sakarya-e-imza/`,
          datePublished: "2026-05-22",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog/` },
          { name: "Sakarya E-İmza", url: `${siteConfig.url}/blog/sakarya-e-imza/` },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Sakarya E-İmza" },
            ]}
          />
          <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Merkezimiz Sakarya&apos;da</span>
            <span className="text-slate-500">·</span>
            <Clock className="h-4 w-4" />
            <span>8 dk okuma</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-balance leading-tight">
            Sakarya E-İmza Al —{" "}
            <span className="text-blue-400">Adapazarı&apos;nda Aynı Gün Elden Teslim</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            TÜBİTAK onaylı nitelikli elektronik imzanızı Sakarya merkezimizden elden teslim alın, aynı gün aktive edin. Toyota tedarikçileri, OSB firmaları, mali müşavirler ve tüm Sakarya işletmelerine özel hizmet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Merhaba, Sakarya'da e-imza almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              WhatsApp ile Sipariş Ver
            </a>
            <a
              href={`tel:${siteConfig.phone2Tel}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone2}
            </a>
          </div>
        </div>
      </section>

      <article className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">

          {/* Giriş */}
          <p className="text-lg text-muted-foreground leading-relaxed not-prose">
            Sakarya, Umay Tüm Bilişim&apos;in merkez şehridir. Bu nedenle Sakarya&apos;daki müşterilerimize diğer illerden farklı bir ayrıcalık sunabiliyoruz: <strong>aynı gün elden teslim ve yerinde aktivasyon.</strong> Adapazarı, Serdivan, Hendek, Arifiye, Erenler ve tüm Sakarya ilçelerindeki bireysel ve kurumsal müşterilerimiz, e-imzalarını kargo beklemek zorunda kalmadan aynı gün alıp hemen kullanmaya başlayabiliyor.
          </p>

          {/* Elden teslim highlight */}
          <div className="not-prose my-8 rounded-2xl bg-blue-50 border border-blue-100 p-6 flex flex-col sm:flex-row gap-4 items-start">
            <Truck className="h-8 w-8 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-foreground text-lg">Sakarya&apos;ya Özel: Aynı Gün Elden Teslim</p>
              <p className="text-muted-foreground mt-1">
                Merkezimiz <strong>Meydan54 AVM, Erenler / Sakarya</strong>&apos;da. Randevu alarak USB token ve kart okuyucunuzu elden teslim alın, aynı gün kurulumu birlikte yapalım.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.phone2Tel}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline">
                  <Phone className="h-3.5 w-3.5" /> {siteConfig.phone2}
                </a>
                <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline">
                  <Phone className="h-3.5 w-3.5" /> {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Kimler kullanıyor */}
          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Sakarya&apos;da E-İmzayı Kimler Kullanıyor?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sakarya, Toyota Türkiye&apos;nin üretim üssü ve Türkiye&apos;nin önemli otomotiv yan sanayi merkezlerinden biridir. Organize Sanayi Bölgesi&apos;ndeki yüzlerce firma, Sakarya Büyükşehir Belediyesi ihalelerine giren KOBİ&apos;ler ve şehrin dinamik ticaret hayatı e-imzayı yoğun biçimde kullanmaktadır.
          </p>

          <div className="not-prose mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { baslik: "Toyota Tedarikçileri", aciklama: "EDI sistemleri, kalite belgeleri, sevkiyat onayları ve tedarikçi sözleşmeleri için e-imza zorunlu hale gelmektedir." },
              { baslik: "OSB Firmaları", aciklama: "Sakarya Organize Sanayi Bölgesi'ndeki imalat firmaları kamu ihaleleri ve ihracat belgelerinde e-imzayı aktif kullanmaktadır." },
              { baslik: "Mali Müşavir & SMMM", aciklama: "e-Beyanname, SGK bildirimleri ve TÜRMOB işlemleri için Sakarya'daki muhasebecilerin büyük çoğunluğu e-imza kullanmaktadır." },
              { baslik: "Hukuk Büroları", aciklama: "UYAP üzerinden e-imzalı belge gönderimi Sakarya'daki avukatlar için zorunluluk haline gelmiştir." },
              { baslik: "İnşaat & Müteahhitler", aciklama: "Sakarya Büyükşehir Belediyesi ve kamu ihalelerine katılan inşaat firmaları EKAP için e-imzaya ihtiyaç duymaktadır." },
              { baslik: "Bireysel Kullanıcılar", aciklama: "e-Devlet, SGK, tapu ve banka işlemleri için bireysel e-imza talep eden Sakarya sakinlerine de hizmet veriyoruz." },
            ].map((item) => (
              <div key={item.baslik} className="rounded-xl border bg-secondary/40 p-5">
                <p className="font-bold text-foreground mb-1">{item.baslik}</p>
                <p className="text-sm text-muted-foreground">{item.aciklama}</p>
              </div>
            ))}
          </div>

          {/* Kullanım alanları */}
          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Sakarya&apos;da E-İmza ile Neler Yapabilirsiniz?</h2>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {kullanimAlanlari.map((u) => (
              <div key={u} className="flex items-center gap-2.5 p-3 rounded-lg bg-secondary/50 border">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{u}</span>
              </div>
            ))}
          </div>

          {/* Nasıl alınır */}
          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Sakarya&apos;da E-İmza Nasıl Alınır?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sakarya&apos;da e-imza almak Türkiye&apos;nin herhangi bir şehrinden çok daha pratiktir. Merkezimizde randevuyla gelerek tüm süreci tek seferde tamamlayabilirsiniz.
          </p>

          <div className="not-prose mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            {adimlar.map((adim) => (
              <div key={adim.n} className="flex flex-col items-center text-center p-4 rounded-xl border bg-white">
                <div className="h-10 w-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-3 text-sm shrink-0">
                  {adim.n}
                </div>
                <p className="font-semibold text-foreground text-sm mb-1">{adim.title}</p>
                <p className="text-xs text-muted-foreground">{adim.desc}</p>
              </div>
            ))}
          </div>

          {/* Teslimat seçenekleri */}
          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Sakarya&apos;da Teslimat Seçenekleri</h2>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border-2 border-primary bg-blue-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="font-bold text-foreground">Elden Teslim (Önerilen)</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Aynı gün aktivasyon</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Yerinde yazılım kurulumu</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Yüz yüze kimlik doğrulama</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Nakit, kart veya havale ile ödeme</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                <strong>Adres:</strong> Meydan54 AVM B1 Blok K:2 D:84, Erenler / Sakarya
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <p className="font-bold text-foreground">Kargo ile Teslimat</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Sakarya&apos;nın tüm ilçelerine</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> 1 iş günü içinde teslimat</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Uzaktan aktivasyon desteği</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Online ödeme</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Adapazarı, Serdivan, Hendek, Arifiye, Geyve, Karasu ve tüm ilçelere kargo ile gönderim yapılmaktadır.
              </p>
            </div>
          </div>

          {/* Fiyat */}
          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Sakarya E-İmza Fiyatları</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sakarya&apos;da e-imza fiyatları Türkiye genelinde uyguladığımız standart paketlerle aynıdır — ekstra bir ücret bulunmamaktadır. 1, 2 ve 3 yıllık paket seçeneklerinden ihtiyacınıza uygun olanı seçebilirsiniz. Uzun vadeli kullanımda 3 yıllık paket önemli tasarruf sağlamaktadır.
          </p>
          <div className="not-prose mt-5">
            <Link
              href="/e-imza"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              E-İmza Paket Fiyatlarını Gör
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Toyota / Otomotiv bölümü */}
          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Toyota Tedarikçileri ve Otomotiv Sektörü için E-İmza</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sakarya, Toyota Türkiye&apos;nin 1997&apos;den bu yana üretim yaptığı şehirdir. Toyota&apos;ya ve diğer otomotiv ana sanayii firmalarına tedarik yapan yüzlerce Sakarya firması, tedarik zinciri yönetiminde e-imzayı zorunlu olarak kullanmaktadır.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Tedarikçi kalifikasyon sözleşmeleri, kalite kontrol belgeleri, sevkiyat onayları ve EDI sistemi entegrasyonlarında bireysel ya da kurumsal e-mühür tercih edilmektedir. Sakarya OSB&apos;deki firmalara toplu e-imza başvurularında özel fiyatlandırma sunmaktayız — detaylar için iletişime geçin.
          </p>

          {/* SSS */}
          <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Sakarya E-İmza — Sıkça Sorulan Sorular</h2>
          <div className="not-prose space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border bg-white">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-foreground list-none">
                  {faq.question}
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-3" />
                </summary>
                <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          {/* İlgili sayfalar */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">İlgili Sayfalar</h2>
          <div className="not-prose flex flex-wrap gap-3">
            {[
              { label: "Sakarya E-İmza Ürün Sayfası", href: "/e-imza/sakarya" },
              { label: "E-İmza Nasıl Alınır?", href: "/blog/e-imza-nasil-alinir" },
              { label: "Mali Müşavir E-İmza Rehberi", href: "/blog/mali-musavir-e-imza-rehberi" },
              { label: "E-İmza Yenileme", href: "/blog/e-imza-yenileme" },
              { label: "Tüm E-İmza Paketleri", href: "/e-imza" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {l.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </article>

      <CtaSection
        title="Sakarya'da E-İmzanızı Bugün Alın"
        subtitle="Randevu alın, merkezimize gelin — aynı gün kurulum yapıyoruz. Kargo tercih ederseniz 1 iş günü içinde adresinizde."
      />
    </>
  )
}
