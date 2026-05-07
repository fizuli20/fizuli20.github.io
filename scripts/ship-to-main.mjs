#!/usr/bin/env node
// Promotes portfolio-website to main and pushes, triggering a Vercel
// production deploy that replaces the legacy static site.

import { execSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, "..")

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`)
  return execSync(cmd, {
    cwd: repoRoot,
    stdio: "inherit",
    ...opts,
  })
}

function capture(cmd) {
  return execSync(cmd, { cwd: repoRoot }).toString().trim()
}

console.log("==> Repo root:", repoRoot)
console.log("==> Current branch:", capture("git rev-parse --abbrev-ref HEAD"))

run("git fetch origin --prune")

const dirty = capture("git status --porcelain")
if (dirty) {
  console.error("\n!! Working tree has uncommitted changes. Aborting.")
  console.error(dirty)
  process.exit(1)
}

run("git checkout main")
run("git reset --hard origin/main")

const mergeMessage = [
  "chore: ship Next.js portfolio to production",
  "",
  "Replaces the legacy static index.html/style.css/script.js site with the",
  "Next.js 15 + Tailwind v4 + Framer Motion portfolio (logo, new Product",
  "Owner CV, duotone photo, full sections). main is now the single source",
  "of truth for fizuli20.github.io.",
  "",
  "Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>",
].join("\n")

run(`git merge --no-ff origin/portfolio-website -m ${JSON.stringify(mergeMessage)}`)

run("git push origin main")

console.log("\n==> Done. main is now at:")
run("git log -1 --oneline")
