# SHOT by Noon Minutes — Project Brief

_A speculative UX case study for a coffee-first quick-commerce app in Dubai. Built as a portfolio project to demonstrate product thinking, research, and mobile-first design._

---

## 1. Project Overview

**What SHOT is:** A concept for a coffee-first quick-commerce ordering experience under the Noon Minutes umbrella in Dubai. Think Zepto or Blinkit, but built specifically around coffee ordering behavior — not general food delivery.

**Why this project exists:** I originally designed the SHOT brand identity, and this case study reimagines what the product experience could look like if the app were designed with the same intent as the brand: minimal, opinionated, coffee-obsessed.

**Honesty note:** This is a **speculative redesign**. I have no affiliation with Noon Minutes and did not collaborate with their product team. All research, personas, and design decisions are my own, based on desk research, competitive teardown, and my own experience of the Dubai coffee-delivery market.

**Format:** Mobile-first native app concept. UAE market (EN + AR, RTL support).

---

## 2. The Opportunity

The UAE food-delivery market was valued at $3.93 billion in 2023 and is projected to reach $11.18 billion by 2030. Four major players dominate Dubai — Talabat, Careem Food, Deliveroo, and (as of September 2025) Keeta.

**But every one of them treats coffee like just another food item.**

Coffee ordering behavior is fundamentally different from food ordering:
- **Habitual** — most users order the same drink 3–5x a week
- **Highly customized** — milk type, sugar, temperature, size, shot count
- **Time-sensitive** — morning rush is 60%+ of daily volume
- **Low AOV, high frequency** — the opposite of a big food order
- **One-thumb** — often ordered while commuting, walking, in meetings

None of the four major players optimizes for this behavior. They're all built as restaurant-discovery marketplaces. **This is the design opportunity.**

---

## 3. Problem Statement

> **SHOT helps time-pressured Dubai coffee drinkers reorder their usual in under 30 seconds — by replacing restaurant-first food-delivery UX with a habit-first, coffee-native experience built around who they are and when they're ordering.**

### Shorter variants for hero headlines

- **Punchy:** SHOT turns a 90-second, 8-tap coffee reorder into a 2-tap, 30-second habit — designed for Dubai's time-pressured daily drinkers.
- **Product-y:** A coffee-first ordering experience for Dubai, built around habit and time-of-day instead of restaurant discovery.
- **Human:** SHOT gets your usual coffee to your desk before you've finished waking up.

---

## 4. Research

### 4.1 Competitive Landscape

Four dominant players in Dubai's F&B delivery market:

| Player | Positioning | Key Strength | Key Weakness |
|---|---|---|---|
| **Talabat** | Incumbent, largest scale | Personalization engine (~35% conversion lift claimed), 9-country footprint | Poor failure recovery (reported closed tickets, weak compensation); cluttered discovery |
| **Careem Food** | Super-app (rides + food + grocery + payments) | Bundled wallet + services, single account across life; Careem Plus (AED 19/mo) | Super-app tab-switching friction; food is one tab among many |
| **Keeta** | Disruptor, Meituan-owned, launched Sept 2025 | Aggressive pricing (50% off first, free delivery), drone trials, "on-time promise" as core positioning | Too new — feature parity gaps expected |
| **Deliveroo** | Premium curator | Visual restraint, curation, strong food photography; Deliveroo Hop for 15-min grocery via Choithrams partnership | Limited vendor selection compared to Talabat |

### 4.2 Cross-cutting patterns (table stakes)

Every player does these — SHOT must too, or explicitly justify why not:
- Subscription tier (Pro / Plus)
- Real-time GPS tracking with map
- Reorder-from-history module on home screen
- Multiple payment methods including cash on delivery
- Bilingual EN/AR with full RTL support
- Push notifications at each order state
- Search + filter + cuisine categories

### 4.3 Key research insights

1. **Restaurant-first mental model is wrong for coffee.** All four apps make users search for a "restaurant" to find their drink. Coffee drinkers think in drinks, not restaurants.

2. **Repeat orders are 60–80% of coffee-app volume, but no app makes reordering fast.** The current best-case reorder flow is ~5–6 taps and 60+ seconds. Aisha (persona 1) needs it in 2 taps and under 30 seconds.

3. **Trust in the last mile is broken.** Talabat especially has documented UX failures: drivers marking orders as delivered when they haven't arrived, chat closing tickets without resolution. This is a design problem, not a features problem.

4. **Customization UIs are all form-based.** Every app treats "milk type / sugar / size" as a stack of form fields. None of them treat customization as coffee-native (visual, tactile, conversational).

5. **No app has time-of-day intelligence.** The home screen at 8am looks identical to the home screen at 3pm. But morning ordering behavior (habitual, urgent) is completely different from afternoon behavior (exploratory, treat-seeking).

---

## 5. Users

Four proto-personas built from desk research + competitive teardown. **Not** from live user interviews — this should be stated openly in the case study.

Aisha is the **primary persona**; the other three are used to stress-test edge cases.

### 5.1 Aisha — Morning Commuter (Primary)

- **Age / role:** 28, Marketing Manager at a JLT firm
- **Location:** Lives in Dubai Marina, takes the Metro
- **Coffee habit:** 4–5 mornings a week, currently uses Talabat
- **JTBD:** "Get me my usual coffee to my desk before my 9am call — without making me think."

**Mental state during use:**
- Cognitive: barely functional, doesn't want to make decisions
- Emotional: groggy, mildly time-pressured
- Physical: one thumb, standing, about to board a moving train
- Trust: already knows what she wants — anything else is noise

**Unlocks in the design:** the 2-tap reorder as the hero interaction.

### 5.2 Rohan — WFH Afternoon Slump

- **Age / role:** 34, freelance UX designer
- **Location:** JVC, WFH 4 days a week
- **Coffee habit:** 3pm treat, ~3x/week, currently uses Deliveroo
- **JTBD:** "Rescue my afternoon with something small, warm, and slightly indulgent — without a 5-minute decision spiral."

**Mental state:**
- Fatigued, decisioned-out from work
- Wants a small reward, willing to try something new
- Not time-critical but wants structure to his break

**Unlocks in the design:** time-of-day intelligence on the home screen.

### 5.3 Maria — Office Coordinator

- **Age / role:** 41, Executive Assistant at a DIFC law firm
- **Coffee habit:** Team orders 2–3x/week, 5–8 drinks per order, corporate card
- **JTBD:** "Get every partner the exact drink they asked for, with a receipt finance will accept — and never redo this work twice."

**Mental state:**
- High cognitive load — managing 6 drinks in her head
- Professionally composed, stakes are accuracy
- Frustrated by having to rebuild recurring orders weekly

**Important nuance:** Maria's meetings do **not** have a fixed group of attendees week-to-week. The stable thing is not the group — it's individual drink preferences. Design memory should live at the person level, not the group level.

**Unlocks in the design:** the Tray of 6 with person-level memory.

### 5.4 Yousef — Weekend Host

- **Age / role:** 22, university student at AUD
- **Location:** Lives with family in Al Barsha
- **Coffee habit:** Weekend social orders for friends, 3–4 drinks
- **JTBD:** "Order coffee that looks good enough to post, without spending 20 minutes app-hopping between Instagram and delivery apps."

**Mental state:**
- Relaxed, weekend brain
- Hosting-conscious, wants to look adult and considered
- Instagram-primed — wants photo-worthy delivery
- Exploratory, open to seasonal drinks

**Unlocks in the design:** curation, seasonality, and packaging as brand touchpoints.

---

## 6. Storyboard — Aisha's Morning (6 frames)

Used to visualize the primary persona's day and locate where SHOT does its work.

| # | Time | Moment | What it justifies in the design |
|---|---|---|---|
| 01 | 07:48 | Wake-up lag, bedroom | Why the home screen must be low-cognitive-load |
| 02 | 07:52 | Metro platform, one-thumb | Why the layout must be one-hand, thumb-first |
| 03 | 07:53 | Two-tap reorder (hero moment) | The primary designed interaction |
| 04 | 08:02 | Handed off, "Brewing" notification | Why tracking + notification design matters |
| 05 | 08:41 | Walking to office, "Arriving 2 min" | Why timing accuracy is a promise, not a feature |
| 06 | 08:45 | Desk, coffee waiting | The emotional payoff SHOT delivers |

**Arc:** Groggy → Pressured → Relieved → Ready.

---

## 7. Design Principles

Five principles that every design decision was tested against:

1. **Habit over discovery** — "Your usual" is the app, menu is secondary
2. **One thumb, no thinking** — every primary action reachable in the bottom third
3. **Coffee-native customization** — visual pickers, sliders, toggles; never a form
4. **Time is the interface** — the app looks different at 8am vs 3pm
5. **Confidence over choice** — fewer options, better decisions

---

## 8. Wireframes (7 screens)

Low-fidelity, mobile-first, built to prove structural thinking before styling. Every unusual layout ties back to a research finding.

### Screen 01 — Home (Morning mode) · PRIMARY
- **Persona:** Aisha, 07:52
- **Key move:** "Your usual" hero card fills ~60% of the screen. Menu is a small pill at the top (deliberately deprioritized). Primary CTA in the bottom thumb-zone.
- **Design decisions:**
  - Menu is a footnote, not a header — layout signals: app already knows what you want
  - Streak indicator ("🔥 12-day streak") tucked into a single line with time and weather — quiet retention nudge
  - CTA is oversized (60pt tall) for one-handed use on a moving train

### Screen 02 — Home (Afternoon mode)
- **Persona:** Rohan, 15:17
- **Key move:** Same skeleton as Screen 01 but priorities inverted. Horizontal-scrolling curated pairings take the main space; "Your usual" demotes to a small tile.
- **Design decisions:**
  - Copy shifts too: "Good morning, Aisha" → "Hey Rohan — 3pm slump?"
  - Pairings reduce decisions to a single tap (drink + pastry pre-bundled)
  - Same building blocks, different hierarchy = the app has *moods*

### Screen 03 — Drink Builder · 3 EXPLORATIONS
- **Persona:** any user customizing a drink
- **Three parallel mental models explored:**

  **Variation A · Language ("The Sentence")**
  The drink reads as language: "A large latte with oat milk, 1 sugar, and iced." Each variable is an inline pill you tap to swap. Composition is grammatical.

  **Variation B · Object ("The Living Cup")** ← recommended for hi-fi
  The cup itself is the interface. A cup fills the top half and updates live — milk color changes, ice cubes appear, sleeve updates. Bento-style tactile controls below (segmented / swatches / slider / toggle). Everything visible at once, no expansion.

  **Variation C · Recipe ("The Layered Stack")**
  A thin glass on the left fills segment by segment as you build. Bands on the right control each layer — temperature, base, milk, sweet, extras. The recipe is visible.

- **Decision:** Variation B wins for the primary path (live preview + one-thumb + everything-visible). Variation A held as fallback. Variation C best for a slower "explore" mode.
- **Case study framing:** show all three side by side; recruiters value visible exploration.

### Screen 04 — Tray of 6
- **Persona:** Maria, 10:47
- **Key move:** 2×3 grid of cups at the top — literal digital tray. Tap an empty cup, assign a person, their default drink pre-fills.
- **Design decisions:**
  - Digital flow maps to physical tray (the object she'll receive)
  - Person = drink, remembered forever. Not group = drinks (because meeting composition rotates)
  - "Recent at your firm" builds itself over time — no list-maintenance UI
  - Sleeve labels write themselves from assigned names

### Screen 05 — Live Tracking
- **Persona:** Aisha, 08:02
- **Key move:** Vertical timeline, not a map. Current stage is ~60% of screen. Past stages are small ticks above; upcoming are dim below.
- **Design decisions:**
  - Aisha cares about *stage*, not *location*. Time-based mental model, not geographic
  - Coffee-flavored stage names: "Grinding" → "Brewing" → "Sealed & out" → "Arriving"
  - Map is a toggle at the bottom, equal-weight with "Chat rider" — both are tools, neither is the interface
  - Directly responds to Talabat's documented "premature delivered" trust problem

### Screen 06 — Delivered
- **Persona:** Aisha, 08:45
- **Key move:** The coffee cup fills the screen. Primary CTA isn't "Rate" — it's "Schedule for tomorrow, 8:45."
- **Design decisions:**
  - The delivered moment becomes the celebration, not a receipt modal
  - The single most valuable moment for retention is right *after* a good experience. Convert it into the next habit loop.
  - Streak reinforcement ("🔥 13-day streak — nice work") is quiet, warm, non-gamified

### Screen 07 — Menu
- **Persona:** Yousef browsing, or anyone exploring
- **Key move:** Familiar navigation — standard category names (Espresso / Milk / Cold / Food), horizontal Netflix-style shelves, search always visible. One curated "Try today" pick per shelf.
- **Design decisions:**
  - Restraint is the decision. Browsing is a job that rewards familiarity, not experimentation.
  - Color-swatch cards instead of photo cards — scans faster, saves a 40-drink photoshoot for hi-fi
  - Sticky "Your usual" bar at the bottom holds the habit-first thesis even in the browse screen
  - This is where the case study should explicitly frame: *"After exploring three creative approaches on Screen 03, I stayed conventional here because the job doesn't need complexity. Every design choice should earn its cost."*

---

## 9. Key Design Decisions & Trade-offs

Decisions that shaped the whole system, worth surfacing in the case study:

1. **Chose habit-first as the whole architecture, not just a feature.** The "Your usual" card isn't a shortcut — it's the app's homepage.

2. **Time-of-day changes the layout, not just the copy.** Morning and afternoon home screens use the same building blocks but re-choreograph them.

3. **Explored three approaches to customization before committing.** Live-preview cup (B) chosen over sentence (A) and recipe stack (C) for the primary path — but all three are shown to demonstrate exploration.

4. **Group orders are people-based, not group-based.** After revision — meeting composition rotates weekly, but individual drink preferences don't.

5. **Tracking is time-based, not geographic.** Users care where in the process their coffee is, not where the rider is on Sheikh Zayed Road.

6. **The delivered screen is a retention moment, not a receipt.** Primary action converts one order into a habit.

7. **The menu screen is deliberately conventional.** Not every screen should be experimental — restraint is a decision.

---

## 10. What's Intentionally Out of Scope

Being explicit about scope demonstrates senior-level product thinking:

- **No live user testing yet.** Personas are proto-personas from desk research. Next step: 3–5 usability interviews with real Dubai coffee drinkers.
- **No accessibility audit yet.** WCAG contrast checks + screen reader flow are pre-hi-fi work.
- **No detailed error/edge-case states.** Wireframes show happy-path only. Full state coverage comes in hi-fi.
- **No settings, profile, order history, or account screens.** Focused on the core purchase loop.
- **No design system documentation.** The visual system exists in the SHOT branding file separately.

---

## 11. Case Study Structure (Recommended for Portfolio)

The narrative order that makes the case study read as senior:

1. **Hero** — headline + one-line problem statement + hero image
2. **Context** — what is SHOT / what is Noon Minutes / the Dubai market landscape
3. **Research** — competitive matrix (hero visual) + 3 key insights pulled out
4. **Users** — 4 personas, Aisha framed as primary
5. **Journey** — Aisha's 6-frame storyboard
6. **Problem statement** — the one-sentence version, positioned as *conclusion* of research (not assumption)
7. **Design principles** — the 5 rules
8. **Wireframes** — 7 screens with reasoning; Screen 03 shows all 3 explorations
9. **Design decisions & trade-offs** — 3–4 key moments with visible thinking
10. **Reflection** — what would I do next / what would I test first / what I learned

Each section should include one clear visual + short prose. Aim for **scannable**, not exhaustive.

---

## 12. Reference Artifacts (already built)

Four pre-built research/design artifacts. Can be embedded as iframes on the case study page or referenced visually.

- **Competitive UX Matrix:** https://claude.ai/artifact/TA6YWhLRY1qkMv2XRGz9dY
- **User Personas:** https://claude.ai/artifact/4h41n4ZgPMm6LauXWKxRxo
- **Storyboard (Aisha, 6 frames):** https://claude.ai/artifact/BxdfL5JbUzaSvyYwVZxn6e
- **Wireframes (7 screens, mobile-first):** https://claude.ai/artifact/G1t1XTi6ysHPz9AYZC9dvQ

All four use a shared visual language (dark theme, orange accent, monospace + sans) so they read as one cohesive set.

---

## 13. Notes for Claude Code (or whoever is building the site)

If you're building the portfolio case study site from this brief:

- **Mobile-first, always.** Design at 375px width first, expand up. The subject matter (a mobile app) is best presented on a page that itself looks great on mobile.
- **Dark theme is primary.** Matches SHOT's brand and the visual language of the existing artifacts.
- **Use the SHOT orange sparingly.** Only for primary CTAs, active states, and important accents. Never as a background block.
- **Type-forward.** Big typography, plenty of whitespace. The SHOT brand is minimal — the site should be too.
- **No stock photos.** Illustrations and diagrams only.
- **Embed the 4 artifacts** either as iframes or by rebuilding key visuals as native components.
- **Keep the "honesty notes"** — speculative project, no client, proto-personas, etc. Being transparent about methodology reads as senior.

### Suggested tech
- If using Framer: build as a new case study page in the existing folio
- If using code: Next.js + Tailwind, deploy on Vercel
- If using this brief with Claude Code: put this file in the project root as `project-brief.md` and start with the prompt: *"Read project-brief.md and design-tokens.md first, then summarize what you understand about the project before we build."*

---

## 14. Reflection (for the case study writeup)

Prompts to answer in your own words when you get to the reflection section:

- **What's the strongest design decision you made?** (Probably: the habit-first architecture, or the drink-builder explorations)
- **What would you test first with real users?** (Probably: the sentence vs living-cup customization UI)
- **What would you do differently in a real client engagement?** (Probably: real user interviews, one round of usability testing before hi-fi, coordination with backend/operational constraints)
- **What did you learn about your own transition from visual design to product?** (This is where the case study becomes personal and memorable to recruiters — don't skip it)

---

_End of brief. This document is the source of truth for the SHOT case study — update it as decisions evolve._
