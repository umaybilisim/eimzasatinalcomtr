"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig, navLinks } from "@/lib/site-config"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", dropdownOpen && "rotate-180")} />
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 rounded-xl border bg-white shadow-lg p-1 z-50"
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm rounded-lg hover:bg-muted hover:text-primary transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex flex-col items-end text-xs">
              <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.phone}
              </a>
              <a href={`tel:${siteConfig.phone2Tel}`} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.phone2}
              </a>
            </div>
            <Button asChild>
              <Link href="/iletisim">Sipariş Ver</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-3 py-2 text-sm rounded-lg hover:bg-muted hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button className="w-full" asChild>
              <Link href="/iletisim" onClick={() => setMobileOpen(false)}>
                Sipariş Ver
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
