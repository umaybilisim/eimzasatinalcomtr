"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"

const GA_ID = "G-3LVKN5BK34"
const STORAGE_KEY = "cookie-consent" // "granted" | "denied"
export const OPEN_EVENT = "open-cookie-preferences"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function readConsent(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeConsent(value: "granted" | "denied") {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* gizli sekme vb. — tercih yalnızca bu oturumda geçerli olur */
  }
}

// GA4 yalnızca açık rıza verildiğinde yüklenir (KVKK); rıza yokken hiçbir istek gitmez.
function loadGa() {
  if (window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js, argümanları "arguments" nesnesi olarak bekler
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag("js", new Date())
  window.gtag("config", GA_ID)
  const s = document.createElement("script")
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

function clearGaCookies() {
  const host = location.hostname
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim()
    if (name.startsWith("_ga") || name === "_gid") {
      for (const domain of [host, `.${host}`]) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`
      }
      document.cookie = `${name}=; Max-Age=0; path=/`
    }
  })
}

function track(event: string, params: Record<string, unknown>) {
  window.gtag?.("event", event, params)
}

// Dönüşüm olayları: tel:, wa.me ve mailto bağlantıları sayfa görüntülemesi üretmediği için ayrıca ölçülür.
function onDocumentClick(e: MouseEvent) {
  const a = (e.target as HTMLElement | null)?.closest?.("a")
  if (!a) return
  const href = a.getAttribute("href") || ""
  const params = { link_url: href, page_path: location.pathname }
  if (href.startsWith("tel:")) track("contact_click", { method: "phone", ...params })
  else if (href.startsWith("mailto:")) track("contact_click", { method: "email", ...params })
  else if (/wa\.me|whatsapp\.com/.test(href)) track("whatsapp_click", params)
  else if (href.includes("odeme.umaybilisim.com.tr")) track("begin_checkout", params)
}

function onDocumentSubmit(e: SubmitEvent) {
  const form = e.target as HTMLFormElement | null
  if (form?.dataset.track === "lead") track("generate_lead", { form_id: form.id || "contact", page_path: location.pathname })
}

export function AnalyticsConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = readConsent()
    if (consent === "granted") loadGa()
    else if (consent === null) setOpen(true)

    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    document.addEventListener("click", onDocumentClick, { capture: true })
    document.addEventListener("submit", onDocumentSubmit, { capture: true })
    return () => {
      window.removeEventListener(OPEN_EVENT, reopen)
      document.removeEventListener("click", onDocumentClick, { capture: true })
      document.removeEventListener("submit", onDocumentSubmit, { capture: true })
    }
  }, [])

  const accept = useCallback(() => {
    writeConsent("granted")
    loadGa()
    setOpen(false)
  }, [])

  const reject = useCallback(() => {
    const wasGranted = readConsent() === "granted"
    writeConsent("denied")
    clearGaCookies()
    setOpen(false)
    // Yüklenmiş GA betiği sayfada kalır; tamamen durması için sayfayı yenile.
    if (wasGranted) location.reload()
  }, [])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Çerez tercihleri"
      className="fixed inset-x-0 bottom-0 z-[60] border-t bg-white shadow-2xl"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700 leading-relaxed">
          Sitemizin nasıl kullanıldığını anlamak için, yalnızca izin verirseniz Google Analytics çerezleri kullanıyoruz.
          Ayrıntılar: <Link href="/gizlilik/" className="underline font-medium">Gizlilik ve Çerez Politikası</Link>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="min-h-11 rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={accept}
            className="min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  )
}

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Çerez Tercihleri
    </button>
  )
}
