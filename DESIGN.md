---
name: Carriel Vieira Advogados
description: Sober, documentary landing page for a law office in Itapetininga/SP — warm black, cream paper and matte gold.
colors:
  warm-black: "#0e0c08"
  warm-black-raised: "#16130d"
  warm-black-high: "#211c12"
  footer-black: "#090805"
  logo-brown: "#33290a"
  matte-gold: "#c9a55c"
  pale-gold: "#e2c88c"
  ink-gold: "#7a5d22"
  deed-cream: "#f6f1e7"
  deed-cream-deep: "#ece4d3"
  card-paper: "#fffdf8"
  text-on-dark: "#ece6d8"
  muted-on-dark: "#b3aa97"
  text-on-cream: "#1d1912"
  muted-on-cream: "#5d5545"
  whatsapp-green: "#25d366"
typography:
  display:
    fontFamily: "Cormorant Garamond, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 5.6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Times New Roman, serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cormorant Garamond, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Manrope, system-ui, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, system-ui, Segoe UI, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.24em"
rounded:
  sm: "4px"
  full: "50%"
spacing:
  section-y: "clamp(4.5rem, 9vw, 8rem)"
  container: "1180px"
  gutter: "1.25rem"
  card-pad: "2.2rem 1.7rem 2rem"
components:
  button-primary:
    backgroundColor: "{colors.matte-gold}"
    textColor: "{colors.warm-black}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.pale-gold}"
    textColor: "{colors.warm-black}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.6rem"
  button-dark:
    backgroundColor: "{colors.warm-black}"
    textColor: "{colors.deed-cream}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.6rem"
  button-dark-hover:
    backgroundColor: "{colors.logo-brown}"
  area-card:
    backgroundColor: "{colors.card-paper}"
    textColor: "{colors.text-on-cream}"
    rounded: "{rounded.sm}"
    padding: "{spacing.card-pad}"
  icon-medallion:
    backgroundColor: "{colors.warm-black}"
    textColor: "{colors.matte-gold}"
    rounded: "{rounded.full}"
    size: "3.4rem"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    size: "3.75rem"
---

# Design System: Carriel Vieira Advogados

## Overview

**Creative North Star: "O Cartório de Ouro"**

The site reads like a well-kept notary office: cream paper, black ink and thin gold rules, the visual language of a deed rather than of a startup. Everything is sober and documentary. Authority comes from order, generous margins and a high-contrast serif, never from effects, badges or numbers. The identity is taken from the office's own Instagram (@adv.carrielvieira) and logo: warm black and logo brown, matte gold, a serif with a gold italic flourish, and a widely spaced "ADVOGADOS" signature.

The page alternates warm-black and deed-cream bands. Dark bands carry the person and the promise (hero, about, differentials, contact); cream bands carry the reading (practice areas, process, FAQ). Gold is ink, not paint: it draws lines, frames photographs, marks icons and colors a few words, and it fills a surface only on the primary button.

Motion is quiet. Blocks rise 22px and fade in once as they enter the viewport, cards lift 6px on hover, and the WhatsApp button breathes with a soft ring. Everything stops under `prefers-reduced-motion`.

**Key Characteristics:**
- Alternating warm-black and cream bands; no gradients beyond a faint gold glow in the hero.
- Gold as line and accent: 1px rules, offset photo frames, icon strokes, italic emphasis.
- Serif display, sans body; italic only on the emphasized tail of a headline.
- Square-ish 4px corners; circles only for icon medallions and the WhatsApp button.
- Flat surfaces; one soft shadow, on card hover only.

## Colors

Warm, low-chroma darks and creams with a single metallic accent.

### Primary
- **Matte Gold** (`matte-gold`): the brand accent on dark bands — primary button fill, eyebrow labels, icon strokes, 1px rules and photo frames, italic headline emphasis.
- **Pale Gold** (`pale-gold`): hover state of gold elements, the practice-area strip in the hero, the about quote.
- **Ink Gold** (`ink-gold`): the gold used on cream, for icons, step labels, list dashes and italic emphasis in headlines. It reaches 5.4:1 on deed cream, so it is safe for small labels too.

### Neutral
- **Warm Black** (`warm-black`): page background and dark bands; text on gold buttons.
- **Warm Black Raised** (`warm-black-raised`): the differentials band, one step lighter to separate it from neighboring dark bands.
- **Footer Black** (`footer-black`): footer, the darkest step, closing the page.
- **Logo Brown** (`logo-brown`): the logo's own background; hover fill for dark buttons.
- **Deed Cream** (`deed-cream`): background of reading bands.
- **Card Paper** (`card-paper`): practice-area cards on cream, a sheet slightly brighter than the band.
- **Text on Dark / Muted on Dark** (`text-on-dark`, `muted-on-dark`): body and secondary text on black.
- **Text on Cream / Muted on Cream** (`text-on-cream`, `muted-on-cream`): body and secondary text on cream.
- **WhatsApp Green** (`whatsapp-green`): only the floating WhatsApp button, kept in the platform's own color so it is recognized instantly.

### Named Rules
**The Ink, Not Paint Rule.** Gold draws lines, frames, icons and a few words. The only gold-filled surface is the primary button.

**The One Green Rule.** WhatsApp green appears once, on the floating button. Every other WhatsApp CTA is gold.

## Typography

**Display Font:** Cormorant Garamond (fallback Times New Roman, serif), weights 500/600 and italic 500
**Body Font:** Manrope (fallback system-ui, Segoe UI, sans-serif), weights 400–700

**Character:** A high-contrast book serif for the voice of the office, a clean geometric sans for everything that must be read quickly on a phone.

### Hierarchy
- **Display** (500, clamp 2.5–4.5rem, 1.08): the hero headline only.
- **Headline** (500, clamp 2.1–3.3rem, 1.08): one per section, balanced wrapping.
- **Title** (600, 1.5rem, 1.2): card, step and differential titles; FAQ questions at 1.4rem.
- **Body** (400, 1rem, 1.7): paragraphs held to roughly 34–44rem measure; hero lead at 1.08rem.
- **Label** (600, 0.74rem, 0.24em tracking, uppercase): eyebrows, step numbers, contact field names.
- **Signature** (header lockup): "CARRIEL VIEIRA" in the serif at 1.32rem with 0.14em tracking, "ADVOGADOS" below in the sans at 0.7rem with 0.44em tracking (0.69rem / 0.38em on phones), in gold.

### Named Rules
**The Gold Tail Rule.** A headline may end with one italic gold phrase that completes the thought ("…*no campo, nos imóveis e nos negócios.*"). One per headline, always at the end, never a single word. This is an approved exception to the italic-serif detector (user confirmed).

**The Few Eyebrows Rule.** Uppercase gold eyebrows appear only where the headline alone would not say what the section is: the hero, "Sobre o advogado" and "Localização e contato". Every other section opens with the headline. Never add more than three besides the hero.

## Layout

Single column of full-bleed bands, content in a centered container of 1180px with 1.25rem gutters (`min(100% - 2.5rem, 1180px)`). Band padding is fluid, `clamp(4.5rem, 9vw, 8rem)` top and bottom.

Two-column splits (hero, about, team, differentials, contact) use unequal fractions such as 1.12/0.88 or 0.85/1.15, with gaps of `clamp(2.5rem, 6vw, 5.5rem)`, so text and image never mirror each other. Practice areas are a 4-up grid, and the process is a 4-step row joined by dashed gold connectors.

Breakpoints: at 1080px cards and steps go 2-up; at 900px every split stacks, the nav becomes a drop-down panel and the differentials header stops being sticky; at 600px cards and steps go 1-up, steps turn into icon-left rows, and hero and contact CTAs become full width.

## Elevation & Depth

Flat by default. Depth comes from tonal steps between bands (warm-black, raised, footer-black), from 1px gold rules, and from photo frames offset about 1rem behind the image like a mat. The one shadow is a soft drop under a practice card on hover (`0 24px 48px -28px` in warm black at 45%). The header gains a 94% warm-black fill with a 10px backdrop blur after the first 24px of scroll.

### Named Rules
**The Mat Frame Rule.** Portrait photographs sit on a 1px gold frame offset about 1rem from the image, never inside a rounded card or a shadow.

## Shapes

Nearly square: 4px corners on buttons, cards and the footer logo. Full circles only for icon medallions, step icons and the WhatsApp button. Borders are 1px in gold at about 28% opacity on dark and warm black at 14% on cream. The decorative vocabulary is lines: section dividers, the hero strip's vertical separators, the quote's left rule and the gold bar that draws across a card's top edge on hover.

## Components

### Buttons
Confident but plain, like a stamped seal.
- **Shape:** gently squared (4px), padding 1rem × 1.6rem; small variant 0.7rem × 1.1rem; large 1.15rem × 1.9rem.
- **Primary (gold):** matte gold fill with warm-black text, 600 weight. Every WhatsApp CTA on the page uses it, with the WhatsApp glyph inline when space allows.
- **Hover / Focus:** lifts 2px and lightens to pale gold; focus shows a 2px gold outline offset 3px.
- **Ghost:** transparent with a gold 28% border on dark bands, for secondary navigation (for example "Áreas de atuação").
- **Dark:** warm-black fill with cream text, the CTA on cream bands; hover goes to logo brown.

### Cards / Containers
- **Practice-area card:** card paper on cream, 4px corners, 1px warm-black 14% border, padding 2.2rem × 1.7rem. Contents: black medallion with a gold Lucide icon, serif title, muted paragraph, then a ruled list with short ink-gold dashes. On hover it rises 6px, takes the soft shadow and draws a 2px gold bar across its top.

### Navigation
- **Desktop:** transparent over the hero, becoming warm-black at 94% with a gold hairline after scroll. Links are 0.86rem Manrope in text-on-dark with a gold underline on hover, and the gold "Análise do caso" button closes the row.
- **Mobile (≤900px):** a 46px outlined gold menu button opens a full-width panel with 1rem links separated by hairlines and a full-width gold CTA. Escape or choosing a link closes it.

### Accordion (FAQ)
Serif questions at 1.4rem (1.2rem on mobile) between hairlines, with a gold plus that rotates into an ×. Only one item is open at a time, and panels expand with a grid-row transition. Buttons sit inside h3 elements and use aria-expanded and aria-controls.

### Process steps
Outlined gold circle icon (3.7rem), "PASSO N" label, serif title and muted text, joined by dashed ink-gold connectors on wide screens.

### WhatsApp float
A 3.75rem green circle fixed at the bottom right, appearing after 320px of scroll, with a slow pulsing ring that is disabled under reduced motion.

## Do's and Don'ts

### Do:
- **Do** alternate dark and cream bands, with the person and the promise on dark and the reading on cream.
- **Do** frame portraits with the offset gold mat frame and keep the photos' own black-and-white or desaturated grading.
- **Do** keep every CTA pointing to the same WhatsApp link, in gold, with the one green floating button.
- **Do** use Lucide line icons at 1.5 stroke, inlined as SVG (no icon CDN), in gold or ink gold, inside a medallion or outlined circle.
- **Do** use ink gold, never matte gold, for any gold text on cream; matte gold on cream fails contrast.

### Don't:
- **Don't** add testimonials, counters, result badges or "case won" figures. The OAB rules out the content, and the system has no component for it.
- **Don't** use gold as a background fill beyond the primary button, or add gradients other than the faint hero glow.
- **Don't** round corners beyond 4px or put photographs inside rounded or shadowed cards.
- **Don't** set whole headlines in italic or emphasize single words; the italic gold tail ends the line.
- **Don't** introduce a second accent color. The palette is warm black, cream and gold, plus WhatsApp green on one button.
