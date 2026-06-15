# Fizuli Hasanov Portfolio

Personal portfolio for Fizuli Hasanov, built with Next.js, React, Tailwind CSS, Framer Motion, and Vercel.

## Live Site

Canonical production URL: https://fizuli20-github-io.vercel.app

The repository is named `fizuli20.github.io`, but this app is deployed through Vercel. GitHub Pages is not the canonical deployment target for the current Next.js app.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Run the full verification suite with:

```bash
npm run check
```

The same check runs in GitHub Actions on pushes to `main` and pull requests.

## Deployment Notes

- Package manager: npm
- Lockfile: `package-lock.json`
- Runtime: Node.js 22.x
- Vercel install command: `npm ci`
- Vercel build command: `npm run build`
- Production branch should stay aligned with `main`
- Pushes to `main` should trigger the Git-linked Vercel production deployment.

## Maintenance

- Keep portfolio claims, CV, and linked ventures in sync.
- Keep `metadataBase`, Open Graph URLs, and the GitHub repository homepage pointed at the canonical production URL.
- Close stale generated PRs after confirming their useful changes have landed on `main`.
