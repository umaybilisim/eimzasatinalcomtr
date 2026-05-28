import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot"],
        allow: "/",
      },
      {
        userAgent: ["ClaudeBot", "anthropic-ai", "Claude-Web"],
        allow: "/",
      },
      {
        userAgent: ["PerplexityBot"],
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Googlebot-Image"],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
