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
  api/lead/route.ts # receives both forms, appends the row to Google Sheets
public/
  logo-techcadd.png # the techcadd wordmark, served through next/image
components/         # one component per section
  Header.tsx        # client — sticky, drawer, active-link tracking
  LeadHero.tsx      # hero copy + trust stats (server)
  DemoForm.tsx      # client — the demo form, rendered in the hero and the CTA
  Courses.tsx       # client — tabbed course catalogue
  Branches.tsx  Reviews.tsx  About.tsx  FinalCta.tsx  Footer.tsx  TopBar.tsx
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
3. **Lead hero** — "Best IT Institute in Punjab", trust stats, Google rating, and a
   Book-a-Free-Demo form (Name / Email / Mobile / Course / Centre), modelled on
   brilliko.com/register.php
4. About — "Two decades of turning students into engineers" + four training formats
5. Courses — tabbed catalogue (Programming, AI & Data, Digital Marketing, Cyber & Cloud,
   Civil/Mechanical, Basic Skills); course names taken from techcaddjalandhar.com/courses
6. Branches — seven Punjab centres, Jalandhar flagged as head office
7. Reviews — Google Business Profile card (4.9, rating breakdown, link out) beside six
   Google-styled review cards
8. Final CTA — enquiry form
9. Footer — brand, address/contact/hours, socials, four link columns, legal bar
10. Floating WhatsApp + back-to-top

### Components not currently rendered

The earlier homepage sections are still in `components/` but nothing imports them, so
they are tree-shaken out of the build: `Hero`, `Stats`, `AiBanner`, `DemoStrip`,
`HowItWorks`, `Categories`, `FeaturedCourses`, `WhyTechcadd`, `Testimonials`,
`Modules`, `Technologies`, `Faq`, `Blogs`. Add any of them back by importing it in
`app/page.tsx`. Delete them if you are sure you do not want them.

## Connecting the forms to your Google Sheet

Both forms (hero and bottom CTA) post to `app/api/lead/route.ts`, which appends a row
via SheetDB. The SheetDB URL lives only on the server, so it never appears in the page
source and nobody can write to your sheet from the browser.

**1. Prepare the sheet.** Create a Google Sheet and put these exact headers in row 1:

```
Timestamp | Source | Name | Email | Mobile | Course | Centre
```

The names must match exactly — SheetDB maps JSON keys to these headers.

**2. Create the SheetDB API.** Go to https://sheetdb.io, sign in, click *Create new API*
and paste your Google Sheet URL. Make sure the sheet is shared so SheetDB can edit it
(it tells you which account to share with). You get a URL like
`https://sheetdb.io/api/v1/abc123xyz`.

**3. Point the site at it.**

```bash
cp .env.example .env.local
# then edit .env.local:
SHEETDB_URL=https://sheetdb.io/api/v1/abc123xyz
```

Restart `npm run dev` after changing it. When deploying, add `SHEETDB_URL` as an
environment variable on your host (Vercel: Settings → Environment Variables).

**Until it is set**, both forms return a polite "Enquiries are not configured yet.
Please call us instead." and nothing is lost silently.

**Switching to Sheety instead:** change only the request body in
`app/api/lead/route.ts` from `{ data: [row] }` to `{ sheet1: row }`, where `sheet1` is
your tab name in lowercase, and set `SHEETDB_URL` to the Sheety endpoint.

### Anti-spam and validation

- Every field is re-validated on the server; the browser is never trusted.
- A hidden honeypot field catches bots — their submission returns success but is
  silently dropped, so they do not retry.
- Values are trimmed, stripped of newlines and length-capped before reaching the sheet.
- Outbound requests time out after 10 seconds.

## Course logos

Each course card shows the real brand logo where one exists, otherwise a two-letter
chip. Hovering the logo reveals a one-line description of the course.

Logos come from the [simple-icons](https://simpleicons.org) package (a devDependency,
so it is not shipped). Only the icons actually used are extracted into
`data/brandIcons.ts` — regenerate that file after adding a course:

```bash
node scripts/gen-brand-icons.js data/brandIcons.ts
```

Edit the `MAP` at the top of `scripts/gen-brand-icons.js` to add a course-to-slug
mapping. The script prints any slug it could not resolve.

**15 of the 45 courses have no logo** and fall back to initials. Microsoft, Adobe,
Amazon, Tableau and OpenAI marks were removed from simple-icons following trademark
requests, so Power BI, Tableau, AWS, MS Office, DTP and ChatGPT use the chip — as do
generic tracks with no brand at all (Full Stack Development, Cybersecurity, Tally,
Typing and the AI-technique courses). Drop your own licensed SVGs in if you have the
rights to use them.

## Notes

- Both forms are the same component, `components/DemoForm.tsx`, rendered twice with a
  different `source` value so the sheet records which one converted.
- The hero background is a CSS gradient — drop in real imagery by replacing the
  `.lead` background in `globals.css`.
- Branch cards show the real Jalandhar address; the other six show a short descriptor
  rather than an invented street address. Fill those in from your own records.
- Content is reproduced from the source site for layout fidelity; swap the copy,
  contact details and testimonials before any public deployment.
- `legacy-static/` is the pre-conversion static site. Delete it once you're happy.
