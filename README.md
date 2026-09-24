# techcadd Jalandhar — Landing Page

A Next.js recreation of the [techcaddjalandhar.com](https://techcaddjalandhar.com) landing page:
same color scheme, section order, content and layout — header and footer included.

Next.js 16 (App Router) · React 19 · TypeScript · plain CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
npm run lint                 # eslint
```

## Structure

```
app/
  layout.tsx        # metadata, Inter via next/font, mounts ScrollReveal
  page.tsx          # composes the sections in order
  globals.css       # design tokens + every component style
  icon.svg          # favicon (App Router convention)
components/         # one component per section
  Header.tsx        # client — sticky, drawer, active-link tracking
  Hero.tsx  Stats.tsx        # Stats is client — count-up animation
  Technologies.tsx  # client — tab state
  Faq.tsx           # client — one answer open at a time
  EnquiryForm.tsx   # client — form state and validation
  FloatingActions.tsx  # client — back-to-top visibility
  ScrollReveal.tsx  # client — IntersectionObserver for `.reveal`
  Icons.tsx  Logo.tsx
data/content.ts     # all copy: nav, categories, testimonials, tech, FAQs, posts, footer
lib/style.ts        # typed helpers for the --d / --c / --h custom properties
legacy-static/      # the original hand-written HTML/CSS/JS, kept for reference
```

Everything that does not need browser state stays a server component; the page
prerenders as static HTML.

## Design tokens

Extracted from the live site's compiled CSS, so the palette matches exactly.

| Token | Value | Use |
| --- | --- | --- |
| `--hero-950` | `#060e2b` | hero / footer base navy |
| `--hero-900` | `#0b1a4d` | hero gradient mid |
| `--hero-800` | `#123285` | hero gradient mid |
| `--hero-600` | `#1c53d1` | hero gradient end |
| `--hero-glow` | `#2f7dff` | hero radial glow |
| `--brand-600` | `#2563eb` | primary buttons, links, accents |
| `--brand-700` | `#1d4ed8` | primary hover |
| `--accent-500` | `#0ea5e9` | gradient partner (cyan) |
| `--accent-400` | `#22d3ee` | chart / focus ring |
| `--accent-yellow` | `#ffd23f` | highlight words, yellow CTA |
| `--ink` | `#0f172a` | body text |
| `--muted` | `#64748b` | secondary text |
| `--line` | `#e2e8f0` | borders |
| `--tint` | `#f8fafc` | alternating section background |

Typeface: **Inter**, loaded through `next/font/google` and exposed as `--font-inter`.

## Sections, in order

1. Top bar — admissions status, Google rating, phone/email
2. Header — logo, nav with AI mega-menu + dropdowns, Call/Book Demo, branch strip
3. Hero — badge, headline, copy, two CTAs, three feature cards, stats counters
4. Featured AI course banner
5. "Ready to start?" demo strip
6. About — two decades + four training formats
7. How it works — four steps
8. Categories — six tracks
9. Featured Courses — bento grid (terminal, chart, metrics, alerts)
10. Why techcadd — four differentiators
11. Testimonials — 4.9/5, six Google reviews
12. Modules — five bundled inclusions
13. Technologies — seven tabbed groups
14. FAQs — accordion
15. Blogs — six posts
16. Final CTA — enquiry form
17. Footer — brand, address/contact/hours, socials, four link columns, legal bar
18. Floating WhatsApp + back-to-top

## Notes

- `EnquiryForm` validates client-side and shows a confirmation; it posts nowhere.
  Wire it to a route handler or server action to collect real leads.
- Blog thumbnails and the hero background are CSS gradients — drop in real imagery
  by replacing `.post__thumb--*` and the `.hero` background in `globals.css`.
- Content is reproduced from the source site for layout fidelity; swap the copy,
  contact details and testimonials before any public deployment.
- `legacy-static/` is the pre-conversion static site. Delete it once you're happy.
