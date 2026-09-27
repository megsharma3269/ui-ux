# Design Tokens — SHOT by noon Minutes

## Source separation

| Layer | What it provides | What it does NOT provide |
|---|---|---|
| **Primary color palette** (attached swatch) | The three site colors: **black, red, light gray** (+ white) | — |
| **Brand identity** (logo board, brand applications) | Logo marks, logo usage rules, brand photography direction | Colors beyond the three-color palette |
| **Moodboard** (EX GRANO, MOTCHA, Broken Swords, PAUSE, Cocoa Latte) | UI/UX layout patterns, typography treatment ideas, interaction patterns, component shapes | Colors — no greens, browns, creams, or matcha tones carry into the site |

> Hex values are sampled from the palette swatch and brand images. Confirm against the official brand guide if one exists.

---

## 1. Color

### 1.1 Primitives — the full site palette

| Token | Hex | Role |
|---|---|---|
| `black-950` | `#050605` | Logo field, deepest black |
| `black-900` | `#0A0A0A` | Primary ink: text, cups, bags, UI foreground |
| `black-800` | `#1F1F1F` | Elevated dark surface, dark cards |
| `black-700` | `#2B2B2B` | Dark borders, dividers on dark backgrounds |
| `red-600` | `#B81A12` | Pressed / hover / AA-safe red text on white |
| `red-500` | `#E1251B` | **SHOT red** — brand accent, CTA, logo frame, uniform, tote |
| `red-400` | `#FF4A3D` | Red on dark surfaces (improved contrast vs black) |
| `gray-600` | `#555555` | Heavy secondary text |
| `gray-500` | `#6B6862` | Secondary text on light |
| `gray-400` | `#8A8680` | Muted labels, secondary text on dark |
| `gray-300` | `#A8A49C` | Disabled states, hairlines on dark |
| `gray-200` | `#D4D4D4` | **Light gray** from the palette swatch — borders, dividers, backgrounds |
| `gray-100` | `#E8E8E6` | Lighter gray — photo wells, muted backgrounds |
| `gray-50` | `#F5F5F5` | Near-white surface (cards on gray page) |
| `white` | `#FFFFFF` | Logo on black/red, inverse text, page background option |

**That's it.** No greens, browns, creams, or any other hue enters the site. The palette is black + red + gray + white.

### 1.2 Semantic: light theme (default)

| Token | Value | Use |
|---|---|---|
| `color.bg` | `white` | Page background |
| `color.bg-raised` | `gray-50` | Cards, sheets, elevated surfaces |
| `color.bg-inverse` | `black-900` | Hero blocks, footer, logo bands |
| `color.bg-brand` | `red-500` | Full-bleed brand moments, promos |
| `color.bg-muted` | `gray-100` | Product photo wells, input backgrounds |
| `color.surface` | `gray-200` | Subtle section backgrounds, divider bands |
| `color.text` | `black-900` | Primary text |
| `color.text-muted` | `gray-500` | Secondary text, captions |
| `color.text-inverse` | `white` | On black / red backgrounds |
| `color.text-brand` | `red-600` | Small red text on white (AA-safe) |
| `color.border` | `black-900` | Ink strokes, illustrated-style UI borders |
| `color.border-subtle` | `gray-200` | Hairlines, dividers, input borders |
| `color.border-brand` | `red-500` | Logo frame, selected/focus frames |
| `color.accent` | `red-500` | CTAs, active states, badges |
| `color.focus` | `red-500` | 2px focus ring + 2px offset |

### 1.3 Semantic: dark theme

| Token | Value |
|---|---|
| `color.bg` | `black-950` |
| `color.bg-raised` | `black-800` |
| `color.bg-inverse` | `white` |
| `color.bg-muted` | `black-700` |
| `color.surface` | `black-800` |
| `color.text` | `white` |
| `color.text-muted` | `gray-400` |
| `color.text-inverse` | `black-900` |
| `color.border` | `white` |
| `color.border-subtle` | `black-700` |
| `color.text-brand` / `color.accent` / `color.focus` | `red-400` |

### 1.4 Status colors (within palette)

| Token | Value | Note |
|---|---|---|
| `color.success` | `black-900` | Pair with ✓ icon; no green in the palette |
| `color.warning` | `red-500` | Pair with ⚠ icon + explanatory text |
| `color.error` | `red-600` | Pair with ✕ icon; red = brand, so never color alone for errors |
| `color.info` | `gray-500` | Neutral notices |

### 1.5 Contrast check (WCAG 2.1)

| Pair | Ratio | Verdict |
|---|---|---|
| `white` on `red-500` | 4.69 | AA ✅ |
| `white` on `red-600` | 6.57 | AA ✅ |
| `black-900` on `red-500` | 4.23 | Large/bold text only |
| `red-400` on `black-900` | 5.94 | AA ✅ |
| `red-500` on `black-800` | 3.52 | Large display / graphics only; use `red-400` for text on dark |
| `black-900` on `white` | 21.0 | AAA ✅ |
| `black-900` on `gray-200` | 12.6 | AAA ✅ |
| `black-900` on `gray-100` | 16.0 | AAA ✅ |
| `gray-500` on `white` | 5.74 | AA ✅ |
| `gray-400` on `black-800` | 4.55 | AA ✅ |
| `gray-400` on `white` | 3.94 | Large text only; use `gray-500`+ for body text |
| `white` on `black-800` | 16.48 | AAA ✅ |

---

## 2. Typography

### 2.1 Families

| Role | Moodboard inspiration | Recommended (web) | Fallback stack |
|---|---|---|---|
| `font.brand` | SHOT wordmark: heavy geometric sans, round O | **Outfit 800/900** (alt: Gilroy Black if licensed) | `"Outfit", "Poppins", system-ui, sans-serif` |
| `font.editorial` | EX GRANO "COFFEE CATALOG": thin condensed display | **Oswald 200/300** | `"Oswald", "Arial Narrow", sans-serif` |
| `font.body` | Clean grotesk UI text across all moodboard screens | **Inter 400/500/600** | `"Inter", system-ui, -apple-system, sans-serif` |
| `font.mono` | PAUSE coordinates, XP counts, spec labels | **Space Mono 400/700** | `"Space Mono", ui-monospace, monospace` |

Use at most two families per view. Brand + body is the default pairing.

### 2.2 Scale (mobile-first, fluid 360→1440px)

| Token | Size | Line height | Tracking | Family / weight | Use |
|---|---|---|---|---|---|
| `type.mega` | `clamp(4rem, 18vw, 12rem)` | 0.85 | -0.04em | brand 900 | Stacked `SH/OT` hero, poster type |
| `type.display` | `clamp(2.75rem, 11vw, 7rem)` | 0.9 | -0.02em | editorial 200 **or** brand 800 | Section openers |
| `type.h1` | `clamp(2rem, 7vw, 3.5rem)` | 1.0 | -0.02em | brand 800 | Page titles |
| `type.h2` | `clamp(1.5rem, 5vw, 2.5rem)` | 1.1 | -0.01em | brand 800 | Section titles |
| `type.h3` | `1.25rem` | 1.2 | 0 | body 600 | Card titles |
| `type.body-lg` | `1.125rem` | 1.5 | 0 | body 400 | Lead paragraphs |
| `type.body` | `1rem` | 1.5 | 0 | body 400 | Default (never below 16px on mobile inputs) |
| `type.body-sm` | `0.875rem` | 1.45 | 0 | body 400 | Secondary copy |
| `type.label` | `0.75rem` | 1.2 | 0.08em, UPPERCASE | mono 700 or body 600 | Nav, buttons, tags |
| `type.caption` | `0.75rem` | 1.4 | 0.02em | mono 400 | Metadata, prices, timestamps |
| `type.micro` | `0.625rem` | 1.3 | 0.1em, UPPERCASE | mono 400 | Legal, sub-lockup ("BY noon MINUTES") |

### 2.3 Type rules

- **Uppercase** for brand/display headlines, labels, and nav. **Sentence case** for body.
- **Mix weights in one line** (moodboard idea from EX GRANO): thin editorial word against a heavy one, or an illustration interrupting the headline.
- Mono is for data only: prices, timestamps, order numbers, quantities.

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
| `layout.gutter` | 16px | 24px | 40px | 64px |
| `layout.columns` | 4 | 8 | 12 | 12 |
| `layout.column-gap` | 12px | 16px | 24px | 24px |
| `layout.section-y` | 64px | 80px | 112px | 128px |
| `layout.max-width` | — | — | 1200px | 1320px |
| `layout.max-text` | 65ch | 65ch | 65ch | 65ch |

### 3.3 Breakpoints (min-width, mobile-first)

| Token | Value |
|---|---|
| `bp.sm` | `360px` |
| `bp.md` | `768px` |
| `bp.lg` | `1024px` |
| `bp.xl` | `1440px` |
| `bp.2xl` | `1920px` |

---

## 4. Shape

### 4.1 Radius

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Brand frames, logo boxes, full-bleed blocks (SHOT is sharp-edged) |
| `radius.sm` | 4px | Tags, inputs, small chips |
| `radius.md` | 12px | Product cards, catalog cards |
| `radius.lg` | 20px | Sheets, modals, window-style cards |
| `radius.xl` | 40px | Device containers, bottom sheet top corners |
| `radius.pill` | 999px | Buttons, progress bars, filter chips |
| `radius.circle` | 50% | Icon buttons |

### 4.2 Border / stroke

| Token | Value | Use |
|---|---|---|
| `border.hairline` | 1px solid `color.border-subtle` | Dividers, table rows |
| `border.ink` | 2px solid `color.border` | Illustrated UI borders, icon button outlines |
| `border.frame` | 4px solid `red-500` | Logo frame, feature frame |
| `border.focus` | 2px solid `color.focus`, offset 2px | Keyboard focus ring |

### 4.3 Elevation

Flat by default. Depth from photography and strokes, not shadows.

| Token | Value | Use |
|---|---|---|
| `shadow.none` | none | Default |
| `shadow.product` | `0 24px 40px -16px rgba(10,10,10,.35)` | Floating product cutouts |
| `shadow.card` | `0 1px 2px rgba(10,10,10,.06), 0 8px 24px rgba(10,10,10,.08)` | Card on photo background |
| `shadow.hard` | `4px 4px 0 0 #0A0A0A` | Playful/gamified cards & buttons |

---

## 5. Motion

| Token | Value | Use |
|---|---|---|
| `duration.fast` | 120ms | Press, hover color |
| `duration.base` | 200ms | Toggles, chips |
| `duration.slow` | 360ms | Sheets, page sections |
| `duration.xp` | 800ms | Progress bar fill |
| `ease.standard` | `cubic-bezier(.2, 0, 0, 1)` | Default |
| `ease.snap` | `cubic-bezier(.34, 1.56, .64, 1)` | Playful overshoot (logo tilt, level-up bounce) |
| `tilt.a` | `rotate(-6deg)` | Stacked logo letters, tumbling product shots |
| `tilt.b` | `rotate(4deg)` | Counter-tilt for rhythm |

Respect `prefers-reduced-motion`: drop tilts and overshoot, keep only opacity fades.

---

## 6. Iconography & Illustration

- **Icons:** 24px grid, **2px stroke**, rounded caps, `color.border` (black on light, white on dark). Outlined default, filled active. Sparkle ✦ glyphs as brand accents.
- **Illustration:** single-weight black line art. Flat, no gradients. Occasional solid-black fills. **No color tints** — keep to black/white/red only.
- **Icon buttons:** 48×48 min (touch target 44+), `radius.circle`, `border.ink`.

## 7. Photography

- **Studio product:** cups/bags on `gray-100` or `red-500` seamless, tumbling or tilted, soft `shadow.product`.
- **Architectural / moody:** grayscale concrete, hard diagonal light & shadow, small red object as focal point.
- **Macro texture:** coffee beans, crema surface as full-bleed backgrounds under a card.
- **Lifestyle:** red props (stools, uniform) against black/white/gray. 1–2 neutrals plus the red.

---

## 8. Logo usage

| Token | Value |
|---|---|
| `logo.primary` | Stacked tilted `SH / OT` (square format; avatars, app icon, cup sides) |
| `logo.lockup` | Horizontal `SHOT` + `BY noon [MINUTES]` (header, footer, packaging) |
| `logo.color` | White on `black-950`, black on white/gray, white on `red-500` |
| `logo.clearspace` | ≥ height of the letter **O** on all sides |
| `logo.min-height` | 24px lockup / 32px stacked (digital) |
| `logo.frame` | Optional `border.frame` (4px red) around black logo field, `radius.none` |

Don't: recolor outside the palette, add shadows, re-letter the tilt, or place on busy photography without a solid field behind it.

---

## 9. Moodboard → UI pattern ideas (no colors, just patterns)

These are **interaction and layout patterns** borrowed from the moodboard. They use only the SHOT palette.

| Moodboard source | Pattern to take | How it maps to SHOT |
|---|---|---|
| EX GRANO | Thin editorial display + heavy brand type in one headline; catalog grid with filter chips; mixed mobile/desktop breakpoint callouts | Section headers mixing `font.editorial` 200 with `font.brand` 800; product catalog grid |
| MOTCHA | 3-up product card row with origin badges; botanical line illustration in cards | Menu item cards with stamp badges ("NEW", "LIMITED") |
| Broken Swords | Gamified loyalty UI: XP progress bar, level display, pill-shaped action button with arrows, circular icon buttons in a toolbar | Loyalty/rewards section: progress bar, rank, circular action icons |
| PAUSE | Monospace coordinates and metadata; macro product photography as poster | Mono metadata labels; full-bleed product photography sections |
| Cocoa Latte | Window-chrome card (dots + title bar); product on textured background; parenthetical ingredient labels | Featured product card with window-style radius; `(ingredient)` captions |

---

## 10. Component tokens (starter)

### Button: primary
- bg `black-900` · text `white` · `type.label` · `radius.pill` · height 48px (mobile) · padding-x `space.6`
- hover: bg `red-500` · active: bg `red-600` · focus: `border.focus`

### Button: brand
- bg `red-500` · text `white` · otherwise as primary · hover `red-600`

### Button: secondary / ghost
- bg transparent · `border.ink` · text `color.text` · hover: bg `color.text`, text `color.bg`

### Chip / filter
- height 32px · `radius.pill` · `border.hairline` · `type.label`
- selected: bg `black-900`, text `white`

### Card: product
- bg `color.bg-raised` · `radius.md` · padding `space.4` · image well `color.bg-muted`
- Title `type.h3`, price in `type.caption` (mono)

### Card: window (from Cocoa Latte pattern)
- `radius.lg` · `shadow.card` · top bar 36px with window dots (decorative only, in `red-500` / `gray-300` / `gray-200`) · title `type.body-sm`

### Progress / loyalty bar (from Broken Swords pattern)
- track: height 12px · `radius.pill` · `border.ink` · bg `color.bg-raised`
- fill: `black-900` (or `red-500` for brand moments) · animate `duration.xp` / `ease.standard`
- labels: `type.caption` mono

### Badge / stamp
- `radius.pill` · `border.hairline` · `type.micro` mono · for "NEW", "LIMITED", origin tags

### Navigation (mobile)
- Top bar 56px: lockup left, icon buttons right
- Bottom tab bar optional: 64px + safe-area inset
- Active item: red 2px underline or red dot

---

## 11. CSS custom properties (drop-in)

```css
:root {
  /* ── Primitives: black / red / gray / white ── */
  --black-950: #050605;
  --black-900: #0A0A0A;
  --black-800: #1F1F1F;
  --black-700: #2B2B2B;

  --red-600: #B81A12;
  --red-500: #E1251B;
  --red-400: #FF4A3D;

  --gray-600: #555555;
  --gray-500: #6B6862;
  --gray-400: #8A8680;
  --gray-300: #A8A49C;
  --gray-200: #D4D4D4;
  --gray-100: #E8E8E6;
  --gray-50:  #F5F5F5;
  --white:    #FFFFFF;

  /* ── Semantic (light) ── */
  --color-bg:             var(--white);
  --color-bg-raised:      var(--gray-50);
  --color-bg-inverse:     var(--black-900);
  --color-bg-brand:       var(--red-500);
  --color-bg-muted:       var(--gray-100);
  --color-surface:        var(--gray-200);

  --color-text:           var(--black-900);
  --color-text-muted:     var(--gray-500);
  --color-text-inverse:   var(--white);
  --color-text-brand:     var(--red-600);

  --color-border:         var(--black-900);
  --color-border-subtle:  var(--gray-200);
  --color-border-brand:   var(--red-500);

  --color-accent:         var(--red-500);
  --color-focus:          var(--red-500);

  /* ── Type ── */
  --font-brand:     "Outfit", "Poppins", system-ui, sans-serif;
  --font-editorial: "Oswald", "Arial Narrow", sans-serif;
  --font-body:      "Inter", system-ui, -apple-system, sans-serif;
  --font-mono:      "Space Mono", ui-monospace, monospace;

  --type-mega:     clamp(4rem, 18vw, 12rem);
  --type-display:  clamp(2.75rem, 11vw, 7rem);
  --type-h1:       clamp(2rem, 7vw, 3.5rem);
  --type-h2:       clamp(1.5rem, 5vw, 2.5rem);
  --type-h3:       1.25rem;
  --type-body-lg:  1.125rem;
  --type-body:     1rem;
  --type-body-sm:  0.875rem;
  --type-label:    0.75rem;
  --type-caption:  0.75rem;
  --type-micro:    0.625rem;

  /* ── Space ── */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 20px; --space-6: 24px;  --space-8: 32px;  --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px; --space-24: 96px;
  --space-32: 128px;
  --gutter: 16px;
  --section-y: 64px;

  /* ── Shape ── */
  --radius-none: 0;
  --radius-sm:   4px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   40px;
  --radius-pill:  999px;

  --border-ink:      2px solid var(--color-border);
  --border-hairline: 1px solid var(--color-border-subtle);
  --border-frame:    4px solid var(--red-500);

  --shadow-product: 0 24px 40px -16px rgba(10,10,10,.35);
  --shadow-card:    0 1px 2px rgba(10,10,10,.06), 0 8px 24px rgba(10,10,10,.08);
  --shadow-hard:    4px 4px 0 0 var(--black-900);

  /* ── Motion ── */
  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 360ms;
  --duration-xp:   800ms;
  --ease-standard: cubic-bezier(.2, 0, 0, 1);
  --ease-snap:     cubic-bezier(.34, 1.56, .64, 1);
}

/* ── Responsive overrides ── */
@media (min-width: 768px)  { :root { --gutter: 24px; --section-y: 80px; } }
@media (min-width: 1024px) { :root { --gutter: 40px; --section-y: 112px; } }
@media (min-width: 1440px) { :root { --gutter: 64px; --section-y: 128px; } }

/* ── Dark theme ── */
[data-theme="dark"] {
  --color-bg:            var(--black-950);
  --color-bg-raised:     var(--black-800);
  --color-bg-inverse:    var(--white);
  --color-bg-muted:      var(--black-700);
  --color-surface:       var(--black-800);

  --color-text:          var(--white);
  --color-text-muted:    var(--gray-400);
  --color-text-inverse:  var(--black-900);
  --color-text-brand:    var(--red-400);

  --color-border:        var(--white);
  --color-border-subtle: var(--black-700);

  --color-accent:        var(--red-400);
  --color-focus:         var(--red-400);
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-base: 0ms;
    --duration-slow: 0ms;
    --duration-xp: 0ms;
  }
}
```

---

## 12. Open questions for the build

1. Is there an official SHOT typeface? It would replace the Outfit approximation.
2. How far should the gamified loyalty pattern (XP bar, levels, sparkle buttons from Broken Swords) go in the actual product?
3. Default theme: light (white/gray page) or dark (black page)? Tokens support both; light is the current default.
