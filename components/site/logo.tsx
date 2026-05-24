import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  inverted?: boolean
}

export function Logo({ className, inverted }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-bold", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="36" height="36" rx="8" fill={inverted ? "white" : "#1a56db"} />
        <path
          d="M18 6L26 10.5V20.5C26 24.5 22 28 18 30C14 28 10 24.5 10 20.5V10.5L18 6Z"
          fill={inverted ? "#1a56db" : "white"}
          fillOpacity="0.15"
          stroke={inverted ? "#1a56db" : "white"}
          strokeWidth="1.5"
        />
        <path
          d="M14 18L17 21L22 15"
          stroke={inverted ? "#1a56db" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={cn("text-lg leading-none", inverted ? "text-white" : "text-foreground")}>
        eimza<span className={inverted ? "text-blue-200" : "text-primary"}>satinal</span>
        <span className="text-xs font-normal opacity-70">.com.tr</span>
      </span>
    </Link>
  )
}
