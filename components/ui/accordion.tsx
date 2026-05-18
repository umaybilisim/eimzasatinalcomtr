"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-foreground hover:text-primary transition-colors gap-4"
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-96 pb-4" : "max-h-0")}>
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: { question: string; answer: string }[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-border rounded-xl border bg-card p-2", className)}>
      {items.map((item, i) => (
        <AccordionItem key={i} {...item} defaultOpen={i === 0} />
      ))}
    </div>
  )
}
