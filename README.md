# krishnachittella.dev

Source for [krishnachittella.dev](https://krishnachittella.dev), the personal site of Krishna Chittella. It is a statically exported Next.js (App Router) site: every route is prerendered to HTML at build time and there is no server runtime.

## Prerequisites

- Node.js 24 LTS (pinned in `.nvmrc` and `package.json` `engines`)
- npm (ships with Node)

If you use a version manager, `nvm use` / `fnm use` picks up `.nvmrc`. Without one, any command can be run on Node 24 without changing the system Node:

```sh
npx -p node@24 -c "npm run build"
```

## Setup

```sh
npm ci
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server at http://localhost:3000 |
| `npm run lint` | ESLint (flat config, `eslint.config.mjs`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run build` | Static export to `./out` |

`npm run start` is not useful here: `output: "export"` produces static files, not a server build. To preview the export, serve `./out` with any static file server.

## Project layout

```
app/(portfolio)/   Portfolio (light site), served at /
app/(playground)/  Playground (dark site), served at /playground
components/        Shared UI components
lib/data.ts        All site copy: experience, projects, apps, games
public/            Static files (CNAME, robots.txt, résumé PDF, images)
```

## CI and deployment

- **Pull requests to `main`** run `.github/workflows/ci.yml`: install, lint, typecheck, build.
- **Pushes to `main`** run `.github/workflows/deploy.yml`: the same checks, then the contents of `./out` are published to GitHub Pages. If any check fails, nothing is deployed. Changes that only touch Markdown files or `docs/` do not trigger a deploy.

The custom domain is set by `public/CNAME`. DNS is managed in Cloudflare and points at GitHub Pages.

> **Hosting is currently GitHub Pages.** A migration to Cloudflare Workers Static Assets is planned (still built and deployed from GitHub Actions). Until that happens, do not remove `public/CNAME` or `public/.nojekyll`.
