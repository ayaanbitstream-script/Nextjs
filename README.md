# Accredian Enterprise — Next.js App

## ✅ Requirements Checklist

| Requirement | Status | Details |
|---|---|---|
| All landing page sections | ✅ | 11 sections + header + footer |
| Navigation menu | ✅ | Sticky header, active highlight, smooth scroll |
| Footer | ✅ | Social links, contact, copyright |
| Fully responsive (mobile + desktop) | ✅ | Tailwind sm/md/lg breakpoints, mobile hamburger menu |
| Clean and structured UI | ✅ | Consistent spacing, typography, color system |
| Reusable components | ✅ | Header, Footer, each section is an isolated component |
| Smooth navigation between sections | ✅ | `scrollIntoView({ behavior: "smooth" })` + IntersectionObserver active highlight |
| Next.js App Router | ✅ | `app/` directory, server components, API routes |
| Functional components + hooks | ✅ | `useState`, `useEffect` in Header, Faqs, Testimonial |
| Tailwind CSS | ✅ | Tailwind v4 throughout |
| API integration | ✅ | `fetch('/api/data')` from server component → `/app/api/data/route.ts` |
| Deployment on Vercel | ✅ | `vercel.json` included, `VERCEL_URL` handled automatically |

---

## Project Structure

```
accredian/
├── vercel.json                      ← Vercel deployment config
├── .env.example                     ← Environment variable template
├── next.config.ts                   ← Image domains, env config
├── app/
│   ├── api/data/route.ts            ← GET /api/data — all content as typed objects
│   ├── types.ts                     ← TypeScript interfaces for every section
│   ├── page.tsx                     ← Server component: fetch('/api/data') → pass props
│   ├── layout.tsx                   ← Root layout: Header + children + Footer
│   ├── globals.css                  ← Tailwind import + base styles
│   ├── components/
│   │   ├── Header.tsx               ← Sticky nav, smooth scroll, active highlight, mobile menu
│   │   └── Footer.tsx               ← Social, links, contact, copyright
│   └── sections/
│       ├── Home.tsx                 ← id="home"
│       ├── Stats.tsx                ← id="stats"
│       ├── Clients.tsx              ← id="clients"
│       ├── Edge.tsx                 ← id="edge"
│       ├── Domain.tsx               ← id="domain"
│       ├── CourseSegment.tsx        ← id="courses"
│       ├── SkillEnhancement.tsx     ← id="skill"
│       ├── Cat.tsx                  ← id="cat"
│       ├── HiW.tsx                  ← id="hiw"
│       ├── Faqs.tsx                 ← id="faqs"  (client component — useState)
│       └── Testimonial.tsx          ← id="testimonials" (client component — useState)
```

---

## Getting Started (Local Dev)

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploying to Vercel

**Option A – Vercel CLI:**
```bash
npm i -g vercel
vercel
```

**Option B – Vercel Dashboard:**
1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo → click **Deploy**
4. No environment variables needed (Vercel auto-injects `VERCEL_URL`)

---

## Data Flow

```
Browser
  └─ GET /
       └─ app/page.tsx (Server Component)
            └─ fetch(`${BASE_URL}/api/data`)
                 └─ app/api/data/route.ts  ← edit content HERE
                      └─ returns JSON
            └─ passes typed props to each section component
```

To update **any content** (text, stats, logos, FAQs, etc.) → only edit `app/api/data/route.ts`.
