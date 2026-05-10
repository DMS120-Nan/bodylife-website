# BodyLife — Ecommerce Site

Next.js ecommerce site for the BodyLife brand. The user alternates work between Mac and Windows. This file is for any AI coding agent (Codex / Cursor / Claude Code / Cline / etc.) — read it before doing anything.

## Stack
- Next.js (app router) + React + Tailwind
- Public repo: `DMS120-Nan/bodylife-website`
- Auto-deploys to **Vercel** from GitHub main

## At session start
1. `git pull --rebase` to grab anything the other machine pushed.
2. If the pull fails on local uncommitted changes, **stop and ask the user** — don't blindly stash/discard.

## Before session ends
- Surface any unpushed commits to the user. Ask to push.

## Deployment rules (critical)
- **Do NOT run `vercel deploy`, `vercel --prod`, or any direct upload to Vercel.**
- Deployment is GitHub-driven. `git push origin main` triggers Vercel build automatically.
- GitHub is the single sync channel between Mac and Windows.

## Project layout
- `app/` — Next.js pages and route handlers
- `components/` — React components
- `lib/` — shared helpers / data fetching
- `public/` — static assets
- `next.config.mjs`, `tailwind.config.js`, `postcss.config.js` — framework config
- `SETUP.md`, `LAUNCH_CHECKLIST.md` — onboarding + launch readiness
- `proxy.js` — local proxy / mock

## Local dev
- `npm run dev` — start dev server
- `npm run build && npm start` — production-mode preview
- `npm run lint` — eslint

## Related project (don't confuse)
**bodylifeglobal.com** is a DIFFERENT site — WordPress on Hostinger, OEM/ODM manufacturing business. See `~/codex-projects/AGENTS.md` for its ops notes. This repo here is the consumer-facing Bodylife brand site.
