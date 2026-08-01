# trueX — currency exchange for global travelers

An interactive mobile-app prototype for **trueX**, an app that helps global
travelers find the current exchange rate between two currencies and exchange
them quickly and easily.

Built to the existing trueX brand from the Figma source — nothing about the
logo or palette was changed.

## Run it

Open `index.html` in any modern browser. No build step, no dependencies.
On desktop it renders inside a phone frame; on a phone it fills the screen.

## Brand system (from Figma, unchanged)

| Token | Hex | Use |
| --- | --- | --- |
| Void black | `#0A0A0A` | Background |
| Electric blue | `#2B3EFF` | "You send" / primary card + actions |
| Volt | `#D4FF3D` | "You get" / accents + confirm actions |

- **Wordmark** — `trueX` set in a serif face, "true" white, "X" volt.
- **Type** — serif for headlines & figures, monospace for labels, system sans for UI.

## Screens

1. **Splash** — a fun, animated globe: the left hemisphere is a quiet "real"
   Earth, the right hemisphere is a morse-style dot/dash matrix drawn **only**
   in the two brand colors (`#D4FF3D` + `#2B3EFF`), rippling in from the seam.
   `trueX` wordmark + "SAFE DIGITAL SPACE" tagline. Tap anywhere / *Get started*.
2. **Create account** & **Log in** — clean auth with the gradient header.
3. **Home / Convert** — the core tool: live mid-market rate, a two-card
   converter (send/get) with a swap button, live fee line, quick-rates rail,
   and travel-card promo. **Two coins float slowly** in the hero.
4. **Rates** — live rate list against a switchable base currency.
5. **Wallet** — total balance card + per-currency holdings.
6. **Profile** — account & settings.
7. **Currency picker** and **Exchange confirm** bottom sheets + a success screen.

## Interactions

- Type any amount → live conversion across 13 currencies (real cross-rates).
- Swap currencies, pick from a searchable sheet, confirm an exchange → success.
- Rates gently drift every few seconds to feel live; press feedback + haptics.
- Respects `prefers-reduced-motion`.

## Files

```
index.html      all screens (single app shell)
css/styles.css  brand system + components
js/globe.js     animated splash globe (canvas)
js/app.js       navigation, converter, rates, sheets, exchange flow
```
