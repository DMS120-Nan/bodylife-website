# BodyLife — Ecommerce Site

Next.js ecommerce site for the BodyLife brand. The user alternates work between Mac and Windows. This file is for any AI coding agent (Codex / Cursor / Claude Code / Cline / etc.) — read it before doing anything.

## Stack
- Next.js (app router) + React + Tailwind
- Public repo: `DMS120-Nan/bodylife-website`
- Auto-deploys to **Vercel** from GitHub main

## Session keywords — IMPORTANT, follow these exactly

The user controls session lifecycle with two keywords. When you see them in a user message, execute the protocol below before responding to anything else.

### When the user types **`start`** (or "开始" / "begin"):
1. Run `git pull --rebase --autostash` in the project root.
2. If pull fails on uncommitted changes, **stop and ask the user how to proceed** — don't auto-stash.
3. Briefly tell the user: any new commits pulled, current branch + last commit, any uncommitted local changes.
4. Re-read this AGENTS.md so latest conventions are in your context.
5. Ask: "What would you like to work on?"

### When the user types **`finish`** (or "结束" / "done" / "save"):
1. **Update this AGENTS.md** — if anything new was learned this session that future agents should know (a new convention, a pitfall avoided, a design decision, a deployment quirk), add it to the "Conventions" section. Be concise. If nothing notable, skip silently.
2. Show user a summary of uncommitted changes (`git status --short`).
3. If changes exist: `git add -A && git commit -m "<descriptive message>" && git push`.
4. Confirm: "Pushed. Session done." and stop.

### Idempotency
Both keywords are safe to repeat. `start` mid-session just refreshes context; `finish` with nothing to push is a no-op.

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

## Conventions
*(Add project-specific rules, pitfalls, and decisions here as they emerge during sessions. The `finish` protocol will record new ones here.)*
