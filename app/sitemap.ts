import type { MetadataRoute } from "next"

const BASE = "https://fizuli20-github-io.vercel.app"

// Flagship case studies first, matching the on-site priority order.
const routes = [
  { path: "/", priority: 1 },
  { path: "/work/aise", priority: 0.9 },
  { path: "/work/fveda", priority: 0.9 },
  { path: "/work/carboryn", priority: 0.9 },
  { path: "/work/hyperautomation", priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}
