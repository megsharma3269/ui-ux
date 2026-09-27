# Design Tokens — SHOT by noon Minutes

Pulled from three references:

1. **Logo:** `SHOT` stacked/tilted mark + horizontal `SHOT by noon MINUTES` lockup, white on near-black inside a red frame.
2. **Brand applications:** cups, bags, uniform, carrier, and photography in a strict **red / black / white / concrete-gray** system.
3. **Moodboard:** EX GRANO (thin editorial display, black line illustration, paper whites), MOTCHA (cream + matcha, botanical line art), Broken Swords (game-like loyalty UI with pill buttons and XP bar), PAUSE (mono coordinates, macro coffee beans), Cocoa Latte (warm crema browns, product-on-card, window chrome).

**How the parts relate:** the SHOT identity is the **primary** layer (color, logo, heavy display type). The moodboard adds the **secondary** layer: editorial contrast, line illustration, paper-toned surfaces, mono metadata, and playful loyalty/gamified UI. Red is used sparingly, the same way it appears in the brand shots: as a frame, a flood, or a single accent. It is never used as decoration everywhere.

> Hex values are sampled from the images and rounded to clean values. Confirm them against the official brand guide if one exists.

---

## 1. Color

### 1.1 Primitives

| Token | Hex | Source / notes |
|---|---|---|
| `red-500` | `#E1251B` | SHOT red: backgrounds, cup halves, tote, uniform, logo frame |
| `red-600` | `#B81A12` | Pressed/hover state; red text on white needing AA at small sizes |
| `red-400` | `#FF4A3D` | Red on dark surfaces (better contrast against black) |
| `black-950` | `#050605` | Logo field / deepest black (logo board bg) |
| `black-900` | `#0A0A0A` | Cups, bags, primary ink |
| `black-800` | `#1F1F1F` | Presentation canvas; elevated dark surface |
| `black-700` | `#2B2B2B` | Dark borders, dividers on dark |
| `gray-500` | `#6B6862` | Secondary text on light |
| `gray-400` | `#8A8680` | Muted labels (`(cocoa)` captions), secondary text on dark |
| `gray-300` | `#A8A49C` | Disabled, hairlines on dark |
| `gray-200` | `#D9D8D4` | Concrete / studio backdrop gray |
| `gray-100` | `#E8E8E6` | Light studio gray (brand shot backgrounds) |
| `paper-50` | `#F5F2EB` | Warm paper: MOTCHA / PAUSE / Broken Swords base |
| `paper-0` | `#FBFAF7` | Card white (Cocoa Latte window, catalog cards) |
| `white` | `#FFFFFF` | Logo, type on red/black |
| `coffee-900` | `#3B2014` | Deep roast / espresso |
| `coffee-700` | `#6B3A22` | Coffee bean brown |
| `coffee-500` | `#A0642F` | Crema highlight |
| `coffee-300` | `#D1A77A` | Latte foam / milk tint |
| `matcha-600` | `#4F6A24` | Matcha text-safe |
| `matcha-500` | `#6E8B3D` | Matcha powder field |
| `matcha-200` | `#C9D1B0` | Sage line illustration / tint |
| `cream-100` | `#E9E5D6` | MOTCHA cream card |

### 1.2 Semantic: light theme (default)

| Token | Value | Use |
|---|---|---|
| `color.bg` | `paper-50` | Page background |
| `color.bg-raised` | `paper-0` | Cards, sheets |
| `color.bg-inverse` | `black-900` | Hero blocks, footer, logo bands |
| `color.bg-brand` | `red-500` | Full-bleed brand moments, promos |
| `color.bg-muted` | `gray-100` | Product photo wells |
| `color.text` | `black-900` | Primary text |
| `color.text-muted` | `gray-500` | Secondary text, captions |
| `color.text-inverse` | `white` | On black / red |
| `color.text-brand` | `red-600` | Small red text on light (AA) |
| `color.border` | `black-900` | Ink strokes (illustration-style UI) |
| `color.border-subtle` | `gray-200` | Hairlines, dividers |
| `color.border-brand` | `red-500` | Logo frame, focus/selected frames |
| `color.accent` | `red-500` | CTAs, active states, badges |
| `color.focus` | `red-500` | 2px focus ring + 2px offset |

### 1.3 Semantic: dark theme

| Token | Value |
|---|---|
| `color.bg` | `black-950` |
| `color.bg-raised` | `black-800` |
| `color.bg-inverse` | `paper-50` |
| `color.text` | `white` |
| `color.text-muted` | `gray-400` |
| `color.border` | `white` |
| `color.border-subtle` | `black-700` |
| `color.text-brand` / `color.focus` | `red-400` |

### 1.4 Status (kept in-palette)

| Token | Value | Note |
|---|---|---|
| `color.success` | `matcha-600` | Order ready, level up |
| `color.warning` | `coffee-500` | Low stock, brewing |
| `color.error` | `red-600` | Pair with icon + text; red is also the brand, so never use color alone |
| `color.info` | `black-900` | Neutral notices |

### 1.5 Contrast check (WCAG 2.1)

| Pair | Ratio | Verdict |
|---|---|---|
| white on `red-500` | 4.69 | AA all text ✅ |
| white on `red-600` | 6.57 | AA ✅ |
| `black-900` on `red-500` | 4.23 | Large/bold text only (≥24px or ≥18.66px bold) |
| `red-500` on `black-800` | 3.52 | Large display / UI graphics only; use `red-400` for text |
| `red-400` on `black-900` | 5.94 | AA ✅ |
| `black-900` on `paper-50` | 17.71 | AAA ✅ |
| `gray-500` on `paper-50` | 4.97 | AA ✅ |
| `gray-400` on `paper-50` | 3.24 | Large text / non-essential only |
| `gray-400` on `black-800` | 4.55 | AA ✅ |
| `matcha-500` on `paper-50` | 4.37 | Large only; use `matcha-600` for text |
| `coffee-700` on `paper-50` | 8.34 | AAA ✅ |

---

## 2. Typography

### 2.1 Families

| Role | Look in references | Recommended (web) | Fallback stack |
|---|---|---|---|
| `font.brand` | SHOT wordmark: heavy geometric sans, round O, tight counters | **Outfit 800/900** (alt: Gilroy Black, Qanelas Black if licensed) | `"Outfit", "Poppins", system-ui, sans-serif` |
| `font.editorial` | EX GRANO "COFFEE CATALOG": thin, tall, condensed display | **Oswald 200/300** (alt: Big Shoulders Display 300) | `"Oswald", "Arial Narrow", sans-serif` |
| `font.body` | Clean grotesk UI text | **Inter 400/500/600** | `"Inter", system-ui, -apple-system, sans-serif` |
| `font.mono` | PAUSE coordinates, `HOLDING A MOMENT`, spec labels, XP counts | **Space Mono 400/700** | `"Space Mono", ui-monospace, monospace` |

Use at most two families per view, typically brand + body, or editorial + mono.

### 2.2 Scale (mobile-first, fluid 360→1440px)

| Token | Size | Line height | Tracking | Family / weight | Use |
|---|---|---|---|---|---|
| `type.mega` | `clamp(4rem, 18vw, 12rem)` | 0.85 | -0.04em | brand 900 | Stacked `SH/OT` hero, poster type |
| `type.display` | `clamp(2.75rem, 11vw, 7rem)` | 0.9 | -0.02em | editorial 200 **or** brand 800 | Section openers ("COFFEE CATALOG") |
| `type.h1` | `clamp(2rem, 7vw, 3.5rem)` | 1.0 | -0.02em | brand 800 | Page titles |
| `type.h2` | `clamp(1.5rem, 5vw, 2.5rem)` | 1.1 | -0.01em | brand 800 | Section titles |
| `type.h3` | `1.25rem` | 1.2 | 0 | body 600 | Card titles ("Paladin", "Cocoa Latte") |
| `type.body-lg` | `1.125rem` | 1.5 | 0 | body 400 | Lead paragraphs |
| `type.body` | `1rem` | 1.5 | 0 | body 400 | Default (never below 16px on mobile inputs) |
| `type.body-sm` | `0.875rem` | 1.45 | 0 | body 400 | Secondary copy |
| `type.label` | `0.75rem` | 1.2 | 0.08em, UPPERCASE | mono 700 or body 600 | Nav, buttons, tags ("INCREASE LEVEL") |
| `type.caption` | `0.75rem` | 1.4 | 0.02em | mono 400 | Coordinates, meta, `(cocoa)` captions |
| `type.micro` | `0.625rem` | 1.3 | 0.1em, UPPERCASE | mono 400 | Legal, sub-lockup ("BY noon MINUTES") |

### 2.3 Type rules

- **Uppercase** for brand/display headlines, labels, and nav. **Sentence case** for body.
- **Parenthetical lowercase captions** (`(cocoa)`, `(café)`, `(leite)`) for ingredient/product labels, in `gray-400`.
- **Mix weights in one line:** the EX GRANO move where a thin editorial word sits against a heavy one, or an illustration interrupts the headline (`COFFEE [figure] CATALOG`).
- Mono is for data only: coordinates, prices, XP, timestamps, order numbers.

---

## 3. Spacing & Layout

### 3.1 Spacing scale (4px base)

| Token | px | rem |
|---|---|---|
| `space.0` | 0 | 0 |
| `space.1` | 4 | 0.25 |
| `space.2` | 8 | 0.5 |
| `space.3` | 12 | 0.75 |
| `space.4` | 16 | 1 |
| `space.5` | 20 | 1.25 |
| `space.6` | 24 | 1.5 |
| `space.8` | 32 | 2 |
| `space.10` | 40 | 2.5 |
| `space.12` | 48 | 3 |
| `space.16` | 64 | 4 |
| `space.20` | 80 | 5 |
| `space.24` | 96 | 6 |
| `space.32` | 128 | 8 |

### 3.2 Layout

| Token | Mobile (base) | Tablet ≥768 | Desktop ≥1024 | Wide ≥1440 |
|---|---|---|---|---|
| `layout.gutter` (page side padding) | 16px | 24px | 40px | 64px |
| `layout.columns` | 4 | 8 | 12 | 12 |
| `layout.column-gap` | 12px | 16px | 24px | 24px |
| `layout.section-y` | 64px | 80px | 112px | 128px |
| `layout.max-width` | — | — | 1200px | 1320px |
| `layout.max-text` | 65ch | 65ch | 65ch | 65ch |

### 3.3 Breakpoints (min-width, mobile-first)

| Token | Value | Reference |
|---|---|---|
| `bp.sm` | `360px` | EX GRANO "360PX MOBILE" frames |
| `bp.md` | `768px` | |
| `bp.lg` | `1024px` | |
| `bp.xl` | `1440px` | |
| `bp.2xl` | `1920px` | EX GRANO "1920PX DESKTOP" catalog |

---

## 4. Shape

### 4.1 Radius

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Brand frames, full-bleed blocks, logo boxes, posters (SHOT is sharp-edged) |
| `radius.sm` | 4px | Tags, inputs, small chips |
| `radius.md` | 12px | Product cards, catalog cards |
| `radius.lg` | 20px | Sheets, modals, "window" cards (Cocoa Latte) |
| `radius.xl` | 40px | Device-like containers, bottom sheets top corners |
| `radius.pill` | 999px | Primary buttons, progress bars, filter chips |
| `radius.circle` | 50% | Icon buttons (sword / potion / key) |

### 4.2 Border / stroke

| Token | Value | Use |
|---|---|---|
| `border.hairline` | 1px solid `color.border-subtle` | Dividers, table rows (EX GRANO catalog) |
| `border.ink` | 2px solid `color.border` | Illustrated UI: cards, icon buttons, progress track (Broken Swords) |
| `border.frame` | 4px solid `red-500` | Logo frame / feature frame (logo board) |
| `border.focus` | 2px solid `color.focus`, offset 2px | Keyboard focus |

### 4.3 Elevation

The references are flat. Depth comes from photography and strokes, not UI shadows.

| Token | Value | Use |
|---|---|---|
| `shadow.none` | none | Default |
| `shadow.product` | `0 24px 40px -16px rgba(10,10,10,.35)` | Floating product/cup/bag cutouts |
| `shadow.card` | `0 1px 2px rgba(10,10,10,.06), 0 8px 24px rgba(10,10,10,.08)` | Window card on photo background |
| `shadow.hard` | `4px 4px 0 0 #0A0A0A` | Optional playful/gamified buttons & cards |

---

## 5. Motion

| Token | Value | Use |
|---|---|---|
| `duration.fast` | 120ms | Press, hover color |
| `duration.base` | 200ms | Toggles, chips |
| `duration.slow` | 360ms | Sheets, page sections |
| `duration.xp` | 800ms | Progress/XP bar fill |
| `ease.standard` | `cubic-bezier(.2, 0, 0, 1)` | Default |
| `ease.snap` | `cubic-bezier(.34, 1.56, .64, 1)` | Playful overshoot (tilted logo, level-up, cup drop) |
| `tilt.a` | `rotate(-6deg)` | Stacked logo letters, tumbling cups |
| `tilt.b` | `rotate(4deg)` | Counter-tilt for rhythm |

Respect `prefers-reduced-motion`: drop tilts and overshoot, and keep only opacity fades.

---

## 6. Iconography & Illustration

- **Icons:** 24px grid, **2px stroke**, rounded caps, black ink (`color.border`). Outlined by default, filled for the active state. Include 4-point **sparkle** ✦ glyphs as accents (Broken Swords).
- **Illustration:** single-weight black line art on paper or white (EX GRANO figures, MOTCHA botanical engravings). Flat, no gradients, occasional solid-black fills. Tinted variants in `matcha-200` or `coffee-300` are allowed for sub-brands.
- **Icon buttons:** 48×48 min (touch target 44+), `radius.circle`, `border.ink`.

## 7. Photography

- **Studio product:** cups/bags on `gray-100` or `red-500` seamless, tumbling or tilted, soft `shadow.product`.
- **Architectural / moody:** grayscale concrete, hard diagonal light & shadow, small red object as focal point.
- **Macro texture:** coffee beans, crema bubbles, matcha powder as full-bleed backgrounds under a card.
- **Lifestyle:** red props (stools, uniform) with black/white cups. Keep scenes to 1–2 colors plus the red.

---

## 8. Logo usage

| Token | Value |
|---|---|
| `logo.primary` | Stacked tilted `SH / OT` (square-ish; avatars, app icon, cup sides) |
| `logo.lockup` | Horizontal `SHOT` + `BY noon [MINUTES]` (header, footer, packaging) |
| `logo.color` | White on `black-950`, black on `paper`/`white`, white on `red-500`, red on white |
| `logo.clearspace` | ≥ height of the letter **O** on all sides |
| `logo.min-height` | 24px lockup / 32px stacked (digital) |
| `logo.frame` | Optional `border.frame` (4px red) around black logo field, `radius.none` |

Don't: recolor outside the palette, add shadows or outlines, re-letter the tilt, or put the logo on busy photography without a solid field.

---

## 9. Component tokens (starter)

### Button: primary
- bg `black-900` · text `white` · `type.label` · `radius.pill` · height 48px (mobile) · padding-x `space.6`
- Optional leading/trailing sparkle ✦ icons (Broken Swords "INCREASE LEVEL")
- hover: bg `red-500` · active: bg `red-600` · focus: `border.focus`

### Button: brand
- bg `red-500` · text `white` · otherwise as primary · hover `red-600`

### Button: secondary / ghost
- bg transparent · `border.ink` · text `color.text` · hover: bg `color.text`, text `color.bg`

### Chip / filter
- height 32px · `radius.pill` · `border.hairline` · `type.label` · selected: bg `black-900`, text `white`

### Card: product
- bg `color.bg-raised` · `radius.md` · padding `space.4` · image well `color.bg-muted`
- Title `type.h3`, origin/price in `type.caption` (mono), ingredient captions in `(parentheses)`

### Card: window (Cocoa Latte)
- `radius.lg` · `shadow.card` · top bar 36px with dots `#FF5F57` / `#FEBC2E` / `#28C840` (8px) · title `type.body-sm`

### Progress / loyalty bar (Broken Swords XP)
- track: height 12px · `radius.pill` · `border.ink` · bg `color.bg-raised`
- fill: `black-900` (or `red-500` for brand moments) · animate with `duration.xp` / `ease.standard`
- labels below in `type.caption` mono: `5000 exp` ··· `12000 exp`

### Badge / stamp
- MOTCHA-style rounded stamp: `radius.pill`, `border.hairline`, `type.micro` mono. Use for "NEW", "LIMITED", origin tags.

### Navigation (mobile)
- Top bar 56px: lockup left, icon buttons right · bottom tab bar optional 64px + safe-area inset
- Nav text `type.label`; active item uses a red 2px underline or red dot

---

## 10. CSS custom properties (drop-in)

```css
:root {
  /* primitives */
  --red-400: #FF4A3D; --red-500: #E1251B; --red-600: #B81A12;
  --black-950: #050605; --black-900: #0A0A0A; --black-800: #1F1F1F; --black-700: #2B2B2B;
  --gray-500: #6B6862; --gray-400: #8A8680; --gray-300: #A8A49C; --gray-200: #D9D8D4; --gray-100: #E8E8E6;
  --paper-50: #F5F2EB; --paper-0: #FBFAF7; --white: #FFFFFF;
  --coffee-900: #3B2014; --coffee-700: #6B3A22; --coffee-500: #A0642F; --coffee-300: #D1A77A;
  --matcha-600: #4F6A24; --matcha-500: #6E8B3D; --matcha-200: #C9D1B0; --cream-100: #E9E5D6;

  /* semantic (light) */
  --color-bg: var(--paper-50);
  --color-bg-raised: var(--paper-0);
  --color-bg-inverse: var(--black-900);
  --color-bg-brand: var(--red-500);
  --color-bg-muted: var(--gray-100);
  --color-text: var(--black-900);
  --color-text-muted: var(--gray-500);
  --color-text-inverse: var(--white);
  --color-text-brand: var(--red-600);
  --color-border: var(--black-900);
  --color-border-subtle: var(--gray-200);
  --color-border-brand: var(--red-500);
  --color-accent: var(--red-500);
  --color-focus: var(--red-500);

  /* type */
  --font-brand: "Outfit", "Poppins", system-ui, sans-serif;
  --font-editorial: "Oswald", "Arial Narrow", sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --type-mega: clamp(4rem, 18vw, 12rem);
  --type-display: clamp(2.75rem, 11vw, 7rem);
  --type-h1: clamp(2rem, 7vw, 3.5rem);
  --type-h2: clamp(1.5rem, 5vw, 2.5rem);
  --type-h3: 1.25rem;
  --type-body-lg: 1.125rem;
  --type-body: 1rem;
  --type-body-sm: 0.875rem;
  --type-label: 0.75rem;
  --type-caption: 0.75rem;
  --type-micro: 0.625rem;

  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 20px;
  --space-6: 24px; --space-8: 32px; --space-10: 40px; --space-12: 48px; --space-16: 64px;
  --space-20: 80px; --space-24: 96px; --space-32: 128px;
  --gutter: 16px;
  --section-y: 64px;

  /* shape */
  --radius-sm: 4px; --radius-md: 12px; --radius-lg: 20px; --radius-xl: 40px; --radius-pill: 999px;
  --border-ink: 2px solid var(--color-border);
  --border-hairline: 1px solid var(--color-border-subtle);
  --border-frame: 4px solid var(--red-500);
  --shadow-product: 0 24px 40px -16px rgba(10,10,10,.35);
  --shadow-card: 0 1px 2px rgba(10,10,10,.06), 0 8px 24px rgba(10,10,10,.08);
  --shadow-hard: 4px 4px 0 0 var(--black-900);

  /* motion */
  --duration-fast: 120ms; --duration-base: 200ms; --duration-slow: 360ms; --duration-xp: 800ms;
  --ease-standard: cubic-bezier(.2, 0, 0, 1);
  --ease-snap: cubic-bezier(.34, 1.56, .64, 1);
}

@media (min-width: 768px)  { :root { --gutter: 24px; --section-y: 80px; } }
@media (min-width: 1024px) { :root { --gutter: 40px; --section-y: 112px; } }
@media (min-width: 1440px) { :root { --gutter: 64px; --section-y: 128px; } }

[data-theme="dark"] {
  --color-bg: var(--black-950);
  --color-bg-raised: var(--black-800);
  --color-bg-inverse: var(--paper-50);
  --color-text: var(--white);
  --color-text-muted: var(--gray-400);
  --color-text-inverse: var(--black-900);
  --color-text-brand: var(--red-400);
  --color-border: var(--white);
  --color-border-subtle: var(--black-700);
  --color-focus: var(--red-400);
}

@media (prefers-reduced-motion: reduce) {
  :root { --duration-fast: 0ms; --duration-base: 0ms; --duration-slow: 0ms; --duration-xp: 0ms; }
}
```

---

## 11. Open questions for the build

1. Is there an official SHOT typeface or brand guide? It would replace the Outfit approximation.
2. Should matcha/cocoa act as **sub-brand accents** (menu categories), or stay moodboard-only?
3. How far should the gamified loyalty idea (XP bar, levels, sparkle buttons) go in the product?
4. Default theme: light paper (moodboard) or dark (brand board)? These tokens support both. Light is the default.
