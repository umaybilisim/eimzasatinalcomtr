import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const packages = [
  "E-İmza 1 Yıl",
  "E-İmza 2 Yıl",
  "E-İmza 3 Yıl",
  "KEP 1 Yıl",
  "KEP 2 Yıl",
  "KEP 3 Yıl",
  "Zaman Damgası 100 Kontör",
  "Zaman Damgası 500 Kontör",
  "Zaman Damgası 1000 Kontör",
  "Bilgi almak istiyorum",
]

export function ContactForm() {
  const subject = "e-imzasatinal.com - Sipariş / Bilgi Talebi"

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">İletişim Bilgileri</h2>
        <div className="space-y-5">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-start gap-4 p-4 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Telefon</p>
              <p className="text-primary font-bold">{siteConfig.phone}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 rounded-xl border bg-card hover:border-green-200 hover:shadow-sm transition-all group"
          >
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">WhatsApp</p>
              <p className="text-green-600 font-bold">Hızlı Sipariş & Bilgi</p>
            </div>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-start gap-4 p-4 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">E-posta</p>
              <p className="text-primary">{siteConfig.email}</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-4 rounded-xl border bg-card">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Adres</p>
              <p className="text-muted-foreground">{siteConfig.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl border bg-card">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Çalışma Saatleri</p>
              <p className="text-muted-foreground">{siteConfig.workingHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Form — mailto based */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Sipariş / Bilgi Formu</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Formu doldurun, bilgilerinizle birlikte e-posta uygulamanız açılacak. Gönderdikten sonra en kısa sürede size dönüş yapıyoruz.
        </p>

        {/* mailto: form — statik site uyumlu, JS gerektirmez */}
        <form
          action={`mailto:${siteConfig.email}`}
          method="GET"
          encType="text/plain"
          className="space-y-4"
        >
          <input type="hidden" name="subject" value={subject} />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Ad</label>
              <input
                name="Ad"
                required
                className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Soyad</label>
              <input
                name="Soyad"
                required
                className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Soyadınız"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Telefon</label>
            <input
              name="Telefon"
              type="tel"
              required
              className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="05XX XXX XX XX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">E-posta</label>
            <input
              name="Eposta"
              type="email"
              className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="ornek@mail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">TC Kimlik / Vergi No</label>
            <input
              name="TC_Vergi_No"
              className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="TC Kimlik veya Vergi Numaranız"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">İlgilendiğiniz Paket</label>
            <select
              name="Paket"
              className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {packages.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Mesaj</label>
            <textarea
              name="Mesaj"
              rows={3}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
              placeholder="Ek bilgi veya sorularınız..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            E-posta Gönder
            <Mail className="h-5 w-5" />
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Hızlı yanıt için{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            WhatsApp
          </a>{" "}
          veya{" "}
          <a href={`tel:${siteConfig.phoneTel}`} className="text-primary font-semibold hover:underline">
            telefon
          </a>{" "}
          tercih edebilirsiniz.
        </p>
      </div>
    </div>
  )
}
