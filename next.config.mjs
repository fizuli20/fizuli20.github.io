/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can deploy to GitHub Pages (fizuli20.github.io)
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
