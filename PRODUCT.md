# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and vanilla JS (`index.html`, `styles.css`, `script.js`), no build step. Libraries only via CDN: Google Fonts and Lucide Icons. Tailwind CDN, AOS and GSAP were considered and declined in favor of hand-written CSS and a small IntersectionObserver reveal. Hosted on Cloudflare Pages (project `adv-carrielvieira`), auto-deployed from `main` of GitHub `Yaduri/adv-carrielveira` (public repo). Maintained only by the developer, directly in code; no CMS needed.

## Users

Primary: rural producers (produtores rurais) and landowners in Itapetininga/SP and region who need legal security over land, possession, contracts and assets, including the administrative regularization of rural property. When focus conflicts, they come first.

Secondary, in this order of weight: property owners and buyers, families dealing with inventário and family matters, people who need a contract drafted or reviewed, and local businesses and business families (including holding familiar e patrimonial).

The visitor's job: decide whether this office understands their situation well enough to send a first WhatsApp message describing their case.

## Product Purpose

Landing page for Carriel Vieira Advogados, legally Alessandro Carriel Vieira Sociedade Individual de Advocacia (CNPJ 29.724.516/0001-60), led by Dr. Alessandro Carriel Vieira (OAB/SP 314.944, practicing since 2012). It exists to generate qualified contacts through WhatsApp, conveying authority, clarity, confidentiality, trust and strategic service. Success is a visitor opening WhatsApp with the prefilled message to request a case analysis.

## Positioning

Dr. Alessandro grew up in Itapetininga as the son of an agropecuarista: he knows the producer's reality (safra, verbal contracts, divisa and posse disputes) firsthand, not only in theory. Combined with practice since 2012 and roots in the city, that local, rural-grounded understanding is what a neighboring firm cannot truthfully claim.

## Operating Context

- Practice areas (confirmed by the lawyer on 2026-11-12): Direito Agrário (arrendamento e parceria, regularização de imóveis rurais, assessoria ao produtor), Direito Possessório (retificação de área, usucapião, ação de divisão, reintegração e manutenção de posse), Direito Imobiliário (compra e venda, regularização, locação), Família e Sucessões (inventário judicial e extrajudicial, partilha, direito de família), Contratos (elaboração, revisão, blindagem contratual), Direito Empresarial (assessoria preventiva e contenciosa, holding familiar e patrimonial).
- Administrative procedures for rural property, with partner engineers who work together with the office: CAR (Cadastro Ambiental Rural), ITR, CCIR junto ao INCRA, desmembramento de terras, georreferenciamento rural. Copy frames the office as handling the legal and administrative side and the engineers as independent licensed professionals (Código de Ética art. 40, IV forbids advertising advocacy together with other activities; the lawyer should confirm this framing).
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
- Identification shown on the site: OAB/SP 314.944 (about section, hero caption, footer) and the society's legal name and CNPJ in the footer.
- Open decisions: the society's own OAB registration number (registro da sociedade, distinct from the CNPJ; not yet provided), business hours (omitted until provided), final domain (none yet; no canonical URL; live at `adv-carrielvieira.pages.dev`, which og:image and JSON-LD currently point to), team member names, and the lawyer's review of the FAQ answers.

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
- Verifiable facts only: practicing since 2012, OAB/SP 314.944, CNPJ 29.724.516/0001-60, raised in Itapetininga, son of an agropecuarista, the six practice areas and the rural administrative procedures, address and contacts.
- Absent and not to be fabricated: testimonials, client counts, success rates, awards, press, team member names, names or registrations of the partner engineers.

## Product Principles

1. The rural producer is the first reader: lead with agro and land security, then imóveis, contratos, empresas.
2. Every path ends in the same WhatsApp message; never add a competing conversion channel without a decision.
3. Earn trust with verifiable facts and clarity, never with promises, numbers or social proof the OAB rules out.
4. Confidentiality is part of the offer and should be stated where the visitor decides to make contact.
5. Mobile first: most clicks to WhatsApp happen on a phone, so weight and speed matter more than effects.

## Accessibility & Inclusion

Audience includes older rural clients reading on phones: keep body text comfortably large, high contrast on dark sections, large tap targets, and honor `prefers-reduced-motion`.
