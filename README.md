# Portfolio — Next.js

My modern portfolio website migrated from Create React App to Next.js 14.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Three.js via @react-three/fiber

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set up environment variables

Copy the example env file and fill in your EmailJS credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Important:** In Next.js, browser-accessible env vars must be prefixed `NEXT_PUBLIC_`.
> Your old `REACT_APP_` vars will NOT work — rename them.

### 3. Copy static assets into `/public`

Next.js serves static files from `/public`. Move these from `src/assets/`:

```bash
# From your old CRA project:
cp src/assets/circle.png        public/circle.png
cp src/assets/githelper.png     public/assets/githelper.png
cp src/assets/uvault.png        public/assets/uvault.png
cp src/assets/project1.png      public/assets/project1.png
cp src/assets/trackXpenses.png  public/assets/trackXpenses.png

# Also copy your existing public files:
cp public/A.png      public/A.png      # (already there)
cp public/manifest.json public/manifest.json
cp public/robots.txt    public/robots.txt
```

> `circle.png` goes directly in `/public/` (not `/public/assets/`) because
> `AnimationCanvas` references it as `/circle.png`.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
portfolio-nextjs/
├── public/
│   ├── circle.png              ← Three.js particle texture (root of public!)
│   ├── assets/
│   │   ├── githelper.png
│   │   ├── uvault.png
│   │   ├── project1.png
│   │   └── trackXpenses.png
│   ├── A.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.jsx          ← Root layout (replaces index.html + metadata)
│   │   ├── page.jsx            ← Home page
│   │   └── globals.css         ← Merged App.css + index.css
│   ├── components/
│   │   ├── HeroContainer.jsx
│   │   ├── AnimationLogo/
│   │   │   ├── AnimationLogo.jsx
│   │   │   └── SVG.jsx
│   │   ├── AnimationCanvas/
│   │   │   └── AnimationCanvas.jsx   ← dynamic import, ssr: false
│   │   ├── Main/
│   │   │   └── Main.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── NavbarList.jsx
│   │   ├── MobileNav/
│   │   │   └── MobileNavbar.jsx
│   │   ├── Skill/
│   │   │   ├── Skill.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── TechTag.jsx
│   │   ├── Experience/
│   │   │   └── ExperienceCard.jsx
│   │   ├── Project/
│   │   │   ├── Project.jsx
│   │   │   └── ProjectCard/
│   │   │       ├── ProjectEigth.jsx
│   │   │       └── ProjectSeven.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── icons/
│   │   │   ├── github.jsx
│   │   │   ├── linkedIn.jsx
│   │   │   ├── live.jsx
│   │   │   └── x.jsx
│   │   ├── About.jsx
│   │   ├── Intro.jsx
│   │   ├── IntroText.jsx
│   │   └── Logo.jsx
│   └── utils/
│       └── constant.js
├── .env.local.example
├── .gitignore
├── .prettierrc
├── jsconfig.json               ← Path alias: @/* → src/*
├── next.config.js
├── postcss.config.js
└── tailwind.config.js
```

---

## Key Migration Changes

### 1. `twin.macro` removed
Next.js uses SWC (not Babel) by default, which is incompatible with `twin.macro`.
All `tw\`...\`` template literals have been replaced with plain Tailwind `className` strings.

### 2. `react-three-fiber` → `@react-three/fiber`
The old v5 package is CRA-era. The new `@react-three/fiber` v8 has API changes:

| Old (CRA) | New (Next.js) |
|---|---|
| `import { Canvas } from 'react-three-fiber'` | `import { Canvas } from '@react-three/fiber'` |
| `attachObject={['attributes', 'position']}` | `attach="attributes-position"` |

`AnimationCanvas` is dynamically imported with `ssr: false` since Three.js requires browser APIs:
```js
const AnimationCanvas = dynamic(() => import('./AnimationCanvas/AnimationCanvas'), { ssr: false })
```

### 3. `'use client'` directives
Every component using hooks, event handlers, or framer-motion needs `'use client'` at the top.
Server components (no interactivity) can omit it for better performance.

### 4. Environment variables renamed
```
REACT_APP_EMAILJS_SERVICE_ID  →  NEXT_PUBLIC_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID →  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY  →  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### 5. Static assets moved to `/public`
In CRA you could `import img from '../assets/img.png'` and get a processed URL.
In Next.js, place assets in `/public` and reference them as strings: `'/assets/img.png'`.
Use `next/image`'s `<Image>` component for optimized image loading.

### 6. Metadata via `layout.jsx`
The `<head>` tags from `index.html` are replaced by the `export const metadata` object in `layout.jsx`.

### 7. `ReactDOM.render` removed
Next.js handles rendering entirely. No `index.js` entry point needed.

---

## Deployment (Vercel)

```bash
# Push to GitHub, then:
vercel deploy
```

Or connect your GitHub repo in the Vercel dashboard — it auto-detects Next.js.

Make sure to add your `NEXT_PUBLIC_EMAILJS_*` env vars in the Vercel project settings.
