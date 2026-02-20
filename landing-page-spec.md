# Beta Landing Page — Component Specification

## Project Context

- **Project:** 50+ TechBridge
- **Page:** About Landing Page
- **Stack:** HTML + Tailwind CSS (via CDN)
- **Goal:** A self-contained beta landing page that communicates the mission, story, and call to action, ready for deployment or use in Claude Code.

---

## Global Design Tokens

| Token | Value |
|---|---|
| Primary Color | `text-slate-900` / `bg-slate-900` |
| Accent Color | `text-orange-500` / `bg-orange-500` |
| Muted Text | `text-slate-600` |
| Border Color | `border-slate-200` |
| Font (Headings) | `font-bold` |
| Font (Body) | `font-normal` |
| Border Radius | `rounded-lg` |
| Max Content Width | `max-w-6xl mx-auto` |

---

## Components

---

### Component 1: Navigation Bar

**Purpose:** Sticky top navigation with logo, links, and CTA.

**Content:**
- Logo: "50+" badge (gradient from blue-900 to orange-500) + "TechBridge" text.
- Links: Home, About (active), Partners.
- CTA Button: "Join Free Today"

**Behavior:**
- Sticky on scroll (`sticky top-0 z-50`).
- Active link is bold (`font-bold`).
- Mobile: Links are hidden, but this is a simplified beta so a hamburger is not required.

---

### Component 2: Hero Section

**Purpose:** Full-width opening declaration.

**Content:**
- H1: "Fighting Ageism Through Technology Education"
- Sub-headline: "We believe age should never be a barrier to digital independence, economic opportunity, or social connection. 50+ TechBridge is proving it—one learner at a time."
- Trust Badges: "Free to join", "1,200+ trained", "45 partner sites" with a checkmark icon.

**Design:**
- Background: `bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900`
- Text: `text-white` or `text-slate-200`
- Centered layout, `py-16`.

---

### Component 3: Mission Section

**Purpose:** Explain the core problem and the organization's mission.

**Content:**
- H2: "Bridging the Digital Divide One Adult at a Time"
- Body Paragraph: "We believe that age should never be a barrier... We're not just teaching technology—we're fighting the lie that age equals obsolescence."
- 3 Cards (grid):
  - Card 1: **Ageism is Real** - "Society Assumes Adults 50+ Can't Learn Technology. We're Proving Them Wrong Every Day."
  - Card 2: **Economic Necessity** - "Many Adults 50+ Need to Work Longer... Digital Skills Unlock Opportunity and Independence."
  - Card 3: **Living Independently** - "80% of People 50+ Want to Live on Their Own Terms. Technology Makes That Possible."

**Design:**
- White background, `py-20`.
- 3-column grid on desktop, 1-column on mobile.
- Cards have `border-2 border-slate-200`.

---

### Component 4: Story Section

**Purpose:** Tell the founding narrative to build trust.

**Content:**
- H2: "How 50+ TechBridge Was Born"
- Body Paragraphs: The story of starting in public libraries with a new approach.
- Pull Quote: "Participants didn't just learn technology—they gained confidence, built community, and discovered new possibilities for their lives after 50." — Brian McKinney, Founder
- Stats: "2023" (Year founded), "Nationwide" (Scaling across the US).

**Design:**
- Background: `bg-slate-50`, `py-20`.
- Pull quote styled with `border-l-4 border-blue-900`.
- Stats in large orange text (`text-orange-500 text-4xl font-bold`).

---

### Component 5: Differentiators Section

**Purpose:** Explain the unique methodology.

**Content:**
- H2: "Built Different, By Design"
- Sub-headline: "Five principles that make our approach work where others have failed."
- 6 Cards (icon + title + body):
  1. Peer-to-Peer Learning
  2. Real-World Focus
  3. Free and Accessible
  4. Train-the-Trainer Model
  5. Community, Not Just Classes
  6. Proven Results

**Design:**
- White background, `py-20`.
- 3-column grid on desktop, 2-column on tablet, 1-column on mobile.
- Cards have a hover effect: `hover:border-orange-400 transition-colors`.

---

### Component 6: Impact / Metrics Section

**Purpose:** Provide quantitative proof of the organization's impact.

**Content:**
- H2: "The Numbers Speak for Themselves"
- 6 Stat Blocks:
  - 1,200+ Lives Changed
  - 85% Completion Rate
  - 45 Partner Sites
  - 92% Feel More Confident
  - $1.2M+ Economic Impact
  - 40% Reduction in Social Isolation

**Design:**
- Dark gradient background (same as hero), `py-20`.
- Stats in large orange text (`text-orange-400 text-5xl font-bold`).
- 3-column grid with stat blocks having a `bg-white/10 rounded-lg` background.

---

### Component 7: Funders Section

**Purpose:** Attract potential funders and partners.

**Content:**
- H2: "Why Funders Choose 50+ TechBridge"
- Body Paragraph: Explains focus on measurable outcomes.
- 2 Cards (grid):
  - Card 1: **What We Track** (Skills Acquisition, Economic Impact, etc.)
  - Card 2: **Funding Compatibility** (WIOA-Eligible, IMLS Standards, etc.)
- Buttons: "Download Sample Impact Report", "Schedule Funder Briefing"

**Design:**
- Background: `bg-slate-50`, `py-20`.
- 2-column grid for the cards.

---

### Component 8: Call to Action Section

**Purpose:** The final invitation to drive user action.

**Content:**
- H2: "Begin Your Digital Journey Today"
- Body Paragraph: "Join 1,200+ adults 50+ who refuse to be invisible..."
- Primary Button: "Join Free Today" (orange)
- Secondary Button: "Partner With Us" (outline)

**Design:**
- Dark gradient background (same as hero), `py-20`.
- Centered text.

---

### Component 9: Footer

**Purpose:** Standard closing for the page.

**Content:**
- Copyright: "© 2026 50+ TechBridge. All rights reserved."

**Design:**
- `bg-black text-gray-400`, `py-8`.
- Centered text.

---

## Build Instructions

1. Create a single, self-contained `index.html` file.
2. Use the Tailwind CSS CDN script in the `<head>`.
3. Implement all 9 components in the correct order.
4. Ensure the page is mobile-responsive, with grids stacking to a single column on smaller screens.
5. Use the global design tokens for consistency.
