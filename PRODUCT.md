# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and vanilla JS (`index.html`, `styles.css`, `script.js`), no build step. Libraries only via CDN: Google Fonts and Lucide Icons. Tailwind CDN, AOS and GSAP were considered and declined in favor of hand-written CSS and a small IntersectionObserver reveal. Hosted on Cloudflare Pages (project `adv-carrielvieira`), auto-deployed from `main` of GitHub `Yaduri/adv-carrielveira` (public repo). Maintained only by the developer, directly in code; no CMS needed.

## Users

Primary: rural producers (produtores rurais) and landowners in Itapetininga/SP and region who need legal security over land, contracts and assets. When focus conflicts, they come first.

Secondary, in this order of weight: property owners and buyers (imóveis, regularização, inventário), people who need a contract drafted or reviewed, and local businesses needing preventive or litigation counsel.

The visitor's job: decide whether this office understands their situation well enough to send a first WhatsApp message describing their case.

## Product Purpose

Landing page for Carriel Vieira Advogados, led by Dr. Alessandro Carriel Vieira (OAB/SP since 2012). It exists to generate qualified contacts through WhatsApp, conveying authority, clarity, confidentiality, trust and strategic service. Success is a visitor opening WhatsApp with the prefilled message to request a case analysis.

## Positioning

Dr. Alessandro grew up in Itapetininga as the son of an agropecuarista: he knows the producer's reality (safra, verbal contracts, divisa and posse disputes) firsthand, not only in theory. Combined with practice since 2012 and roots in the city, that local, rural-grounded understanding is what a neighboring firm cannot truthfully claim.

## Operating Context

- Practice areas: Direito Agrário (contratos agrários, posse, regularização, proteção ao produtor rural), Direito Imobiliário (compra e venda, regularização, locação, inventário), Contratos (elaboração, revisão, blindagem contratual), Direito Empresarial (assessoria preventiva e contenciosa).
- First contact is always WhatsApp; service is in person at the office and online for the region.
- Office: Rua Adolfo Arruda Melo, 330, Jardim Itália, Itapetininga/SP, CEP 18201-750.
- Phone/WhatsApp: (15) 99760-7199. Instagram: @adv.carrielvieira.
- Canonical WhatsApp link for every CTA and the floating button: `https://wa.me/5515997607199?text=Ol%C3%A1,%20Dr.%20Alessandro.%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20do%20meu%20caso`

## Capabilities and Constraints

- OAB ethics (Código de Ética e Disciplina, Provimento 205/2021) bind all copy: no promised or guaranteed outcomes, no "causa ganha", no client testimonials, no result counters or case numbers, no mention of price or free consultation (fees are "explained clearly at first contact").
- Official name is "Carriel Vieira Advogados" everywhere, even though the team photo reads "Carriel Advogados".
- No email field or contact form for now; WhatsApp only.
- No analytics, pixel or cookie banner; adding analytics later would require revisiting consent.
- FAQ answers are general information written by the developer and still need the lawyer's review.
- Open decisions: OAB/SP registration number (pending from the client; a visible `OAB/SP nº ______` placeholder stays until it arrives), business hours (omitted until provided), final domain (none yet; no canonical URL set; live at `adv-carrielvieira.pages.dev`).

## Brand Commitments

- Visual identity follows the official Instagram @adv.carrielvieira and the logo: warm black/dark brown with matte gold, high-contrast serif headlines with gold-italic emphasis on key words, thin gold frame lines, spaced "ADVOGADOS" signature. User asked to extract identity from the Instagram; aesthetic/structural references were previalowna-gabrielfilemonadv.vercel.app and heitorleal.adv.br.
- Header uses a typographic lockup (scale icon + "CARRIEL VIEIRA / ADVOGADOS") because `logo.jpg` is square, opaque and carries a faint watermark; the logo image is used in the footer and favicon. Swap in a transparent PNG/SVG logo if the client provides one.
- Sections are not numbered (user decision).
- Voice: Portuguese (pt-BR), sober, direct, no legalese, confident without promising results.

## Evidence on Hand

- `./logo.jpg` — office logo.
- `./assinando docs.jpg` — Dr. Alessandro signing documents next to Direito Agrário books (hero).
- `./foto preto e branco.jpg` — black-and-white portrait, light paneled wall (About).
- `./foto bem vindo.jpg` — team of five under "Bem-vindos à Carriel Advogados" (team section). Team is presented collectively; no names or roles are known and none may be invented.
- Verifiable facts only: practicing since 2012, raised in Itapetininga, son of an agropecuarista, the four practice areas, address and contacts.
- Absent and not to be fabricated: testimonials, client counts, success rates, awards, press, team member names.

## Product Principles

1. The rural producer is the first reader: lead with agro and land security, then imóveis, contratos, empresas.
2. Every path ends in the same WhatsApp message; never add a competing conversion channel without a decision.
3. Earn trust with verifiable facts and clarity, never with promises, numbers or social proof the OAB rules out.
4. Confidentiality is part of the offer and should be stated where the visitor decides to make contact.
5. Mobile first: most clicks to WhatsApp happen on a phone, so weight and speed matter more than effects.

## Accessibility & Inclusion

Audience includes older rural clients reading on phones: keep body text comfortably large, high contrast on dark sections, large tap targets, and honor `prefers-reduced-motion`.
