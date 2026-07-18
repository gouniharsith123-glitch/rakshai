# RakshAI — AI Digital Public Safety Intelligence Platform

Phase 1 of the RakshAI build: project scaffold + the full Landing Page,
hand-written (no `create-next-app`/`shadcn` CLI was available in the build
sandbox — no network access — so every file below is written directly and
is dependency-complete).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included in this phase

- Next.js 15 (App Router) + TypeScript + Tailwind CSS, dark mode by default
- Custom design system: `void` (backgrounds), `signal` (blue), `intel`
  (violet), `pulse` (cyan), `threat.*` (risk-level colors) — see
  `tailwind.config.ts`
- Glassmorphism primitives (`components/ui/card.tsx`, `button.tsx`)
- Framer Motion scroll reveals + a fully custom animated **Threat Radar**
  hero visual (`components/landing/threat-radar.tsx`) — not a stock
  illustration, built from concentric SVG/CSS rings, a rotating sweep, and
  floating scam-category nodes (Digital Arrest, UPI Fraud, Fake Currency,
  QR Scam, Phishing)
- Full landing page: Navbar, Hero, Why RakshAI, How It Works, Key Features,
  Statistics, Awareness, Testimonials, FAQ, Footer — all with realistic
  cybersecurity copy, no Lorem Ipsum

## Roadmap (next phases — not yet built)

1. Auth pages (Login / Signup) + Citizen Dashboard with Recharts
2. AI Scan Center — 4 modules (message analyzer, website/QR analyzer,
   currency detector, safety chat assistant)
3. Command Center for investigators — Mapbox live fraud map, React Flow
   fraud network graph, report management, case details, analytics, alerts
4. Supabase schema + persistence (`users`, `reports`, `scan_history`,
   `chat_history`, `investigation_reports`)
5. Real Gemini API wiring for all 4 AI modules with mock-data fallback
6. AI Intelligence Hub — multi-evidence analyzer, case prioritization,
   recommendation engine, case timeline, knowledge base, daily summary

## Environment variables (for later phases)

```
GEMINI_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
