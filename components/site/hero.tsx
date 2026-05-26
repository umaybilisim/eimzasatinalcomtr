"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Zap, Clock, Monitor, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const slides = [
  {
    id: 0,
    badge: { icon: ShieldCheck, text: "TÜBİTAK & BTK Onaylı Hizmet" },
    title: (
      <>
        E-İmza, KEP ve{" "}
        <span className="text-blue-400">Zaman Damgası</span>{" "}
        Satın Al
      </>
    ),
    subtitle: "Bireysel ve kurumsal e-imza paketleri, hızlı aktivasyon, uygun fiyat. Hukuki geçerliliği olan dijital imzanızı bugün alın.",
    features: [
      { icon: Zap, color: "text-yellow-400", text: "Aynı gün aktivasyon" },
      { icon: Clock, color: "text-blue-400", text: "7/24 teknik destek" },
      { icon: ShieldCheck, color: "text-green-400", text: "Hukuki geçerlilik" },
    ],
    right: "cards",
  },
  {
    id: 1,
    badge: { icon: Zap, text: "Uzaktan Aktivasyon · %100 Online" },
    title: (
      <>
        E-İmzanızı{" "}
        <span className="text-blue-400">15 Dakikada</span>{" "}
        Alın — Ofise Gelmenize Gerek Yok
      </>
    ),
    subtitle: "Online kimlik doğrulama ile başvurunuzu tamamlayın, e-imzanız anında aktive edilsin. Masaüstü veya laptop'unuzdan kolayca kullanın.",
    features: [
      { icon: Monitor, color: "text-blue-400", text: "Windows 10 / 11" },
      { icon: Monitor, color: "text-slate-300", text: "macOS" },
      { icon: ShieldCheck, color: "text-green-400", text: "Hukuki geçerlilik" },
    ],
    right: "steps",
  },
]

const steps = [
  { num: "1", title: "Formu Doldurun", desc: "Paketinizi seçin, bilgilerinizi girin", time: "~2 dk" },
  { num: "2", title: "Kimliğinizi Doğrulayın", desc: "Online kimlik doğrulama, ofise gelmeye gerek yok", time: "~5 dk" },
  { num: "3", title: "E-İmzanız Aktif", desc: "Aktivasyon tamamlanır, kullanmaya başlayın", time: "Anında" },
]

const cards = [
  { name: "E-İmza", desc: "Islak imzayla aynı hukuki geçerlilik", href: "/e-imza", badge: "En Popüler" },
  { name: "KEP", desc: "Yasal delil niteliğinde e-posta", href: "/kep", badge: "Zorunlu" },
  { name: "Zaman Damgası", desc: "Belge varlığı kanıtı, RFC 3161", href: "/zaman-damgasi", badge: "TÜBİTAK" },
]

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[active]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-5 hidden sm:block" aria-hidden="true">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[320px]">

          {/* Left: Text */}
          <div key={active} className="animate-fade-in flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 text-sm text-blue-200 mb-6">
              <slide.badge.icon className="h-4 w-4" />
              {slide.badge.text}
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-balance">
              {slide.title}
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              {slide.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
              {slide.features.map((f) => (
                <span key={f.text} className="flex items-center gap-1.5">
                  <f.icon className={`h-4 w-4 ${f.color}`} />
                  {f.text}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-900/40">
                <Link href="/iletisim">
                  Hemen Sipariş Ver
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Bilgi Al
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Cards or Steps */}
          <div key={`right-${active}`} className="grid grid-cols-1 gap-3 animate-fade-in lg:pl-10">
            {slide.right === "cards" ? (
              cards.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/40 p-3 transition-all"
                >
                  <div className="h-8 w-8 rounded-lg bg-blue-500/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4 text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{p.name}</span>
                      <span className="text-xs rounded-full bg-blue-500/30 text-blue-200 px-2 py-0.5">{p.badge}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-0.5">{p.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))
            ) : (
              steps.map((s) => (
                <div key={s.num} className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 p-3">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0 font-bold text-white text-base">
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{s.title}</span>
                      <span className="text-xs rounded-full bg-green-500/30 text-green-300 px-2 py-0.5">{s.time}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-0.5">{s.desc}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-blue-400" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
