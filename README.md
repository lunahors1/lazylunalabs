# Lazy Luna Labs: site (lazylunalabs.com)

Geen externe fonts (de lettertypes staan lokaal, zie onder), scripts of CDN; alles werkt offline met relatieve paden. Gedeelde stijl in `assets/site.css`, paginaspecifieke stijl in een klein `<style>`-blok per pagina. Niets gepubliceerd.

## Structuur
- `index.html`: tijdelijke taalkeuze (navigator.language: nl naar `nl/`, anders `en/`, na 1,2 s; zonder JS twee knoppen).
- `nl/index.html`, `en/index.html`: homepage (zelfde inhoud, hreflang naar elkaar, taalknop NL | EN).
- `nl/budgetmaxx/`: de bron van de BudgetMaxx-pagina's. "Lazy Luna Labs" en "Home" wijzen naar `../index.html`. Het oude prototype staat in `../archief/` en is alleen geschiedenis.
- `en/budgetmaxx/index.html`: Engelse BudgetMaxx-pagina met beta-formulier; `en/budgetmaxx/privacy.html`: Engelse vertaling van de concept-privacyverklaring (hreflang-paar met de NL-versie).
- `nl/img`, `en/img`: screenshot voor de productkaart.
- `_check/`: screenshots van de controle.

## Navigatie (ronde 4, review Gemmie, 16 okt)
- `assets/site.css`: tokens (licht/donker volgt systeem), kopbalk, BudgetMaxx-balk, footer, gedeelde onderdelen. `body.in-budgetmaxx` geeft de muntgroene sfeer; de kopbalk gebruikt vaste tokens (`--hbg` enz.) en blijft overal identiek.
- Niveau 1 op elke pagina: logo, Home · BudgetMaxx · Over · Contact, NL | EN. Binnen BudgetMaxx heeft de tab BudgetMaxx `aria-current` ("page" op het overzicht, "true" op subpagina's).
- Niveau 2 (alleen binnen BudgetMaxx): broodkruimel "Lazy Luna Labs > BudgetMaxx" + subtabs Overzicht · Rondleiding · Gemaakt door Luna · Privacy · Bewijs offline · Word beta-tester (actieve tab met `aria-current="page"`). Op telefoon: rij 1 logo + taalknop, rij 2 hoofdlinks (4 korte woorden), rij 3 broodkruimel, rij 4 horizontaal veegbare subtabs (zonder JS, scrollbalk verborgen, fade rechts). Header is op telefoon niet sticky (te hoog); op desktop wel (sticky rondleiding: `.stage` top 128px).
- Footer: basisregel overal gelijk; binnen BudgetMaxx extra regel (product van Lazy Luna Labs, GPL-3.0).
- EN-kant: `en/budgetmaxx/index.html` heeft dezelfde balken en een subtab "Become a beta tester"; subtabs naar nog niet vertaalde NL-pagina's staan als "(NL)" aangeduid; Privacy wijst naar de EN-versie.
- over.html: kapotte `@media`-regel (Gemmie had gelijk) verdwenen door overstap op site.css.
- `@view-transition` (alleen CSS) voor zachte paginawissel; uit bij prefers-reduced-motion.
- Back-up van de vorige stand: `../lazylunalabs-site-v1/`.
- Controle (Playwright + Chrome): scrollWidth gelijk aan 375 en 390 op alle 8 pagina's (licht en donker), 0 kapotte interne links/src/ankers, rondleiding wisselt (plaatje 1 naar 3 bij stap 3). Screenshots: `_check/ronde4-*.png`.

## Placeholders
- Over-sectie: Luna's verhaal (duidelijk gemarkeerd), foto volgt.
- PayPal-link en repo-link in `nl/budgetmaxx/` staan nog op `href="#"`.
- Privacyverklaring is een concept (NL en EN); juridisch nog laten nakijken.
- Beta-formulieren (NL en EN) versturen niets.
- Bij hosting: absolute hreflang-URL's (https://lazylunalabs.com/nl/ enz.) invullen; nu relatief. Interne links verwijzen naar `index.html` zodat ze ook via file:// werken.

## Hosting: lazylunalabs.nl naar /nl/
- lazylunalabs.com is de hoofdsite. Laat de host `/` doorsturen op basis van Accept-Language (nl naar `/nl/`, anders `/en/`); dan kan het script in de root-`index.html` weg.
- lazylunalabs.nl: 301-redirect naar `https://lazylunalabs.com/nl/` (pad behouden, bijv. `.nl/budgetmaxx/` naar `.com/nl/budgetmaxx/`).
- Mail: hello@lazylunalabs.com (en eventueel hallo@lazylunalabs.nl naar dezelfde inbox).
- Gebruik niet de afkorting "LLL" (BOIP-treffer).

## Sterrenspoor
- `assets/sterren.js` (op elke pagina met `defer`): kleine sterretjes achter de muis, ±0,7 s zichtbaar, max 22 tegelijk, gethrottled, `position:fixed`, `pointer-events:none`, `aria-hidden`. Uit bij `prefers-reduced-motion` en touch (`pointer:coarse`). Kleur: `--acc`, binnen BudgetMaxx `--brand`. Gewone muisaanwijzer blijft ongewijzigd.

## Beeldmerk (ronde 6 A "Zwevend Kwastje", definitief)
- Bron en merkregels: `../beeldmerk/definitief/` (`gebruik.md`). App-icoon is de gevulde variant.
- Kopbalk: inline SVG in `.logo` met klassen `.lm` (sikkel, lavendel) en `.ls` (sterren, goud) in `assets/site.css`, licht/donker via prefers-color-scheme. Binnen `body.in-budgetmaxx` zijn de sterren groen (#1f6f5c / #4fb89b). De root-`index.html` gebruikt `assets/beeldmerk-lijn.svg` via `<img>`.
- `assets/`: favicon.svg, favicon-32.png, apple-touch-icon.png, app-icoon-192.png, app-icoon-512.png, beeldmerk-lijn.svg. Alle pagina's hebben favicon-, png-32- en apple-touch-links met relatieve paden. app-icoon-192/512 zijn nog niet aan een manifest gekoppeld.
- Controle: scrollWidth 375/390 ongewijzigd op 9 pagina's (licht en donker), 0 kapotte src/href; screenshots `_check/beeldmerk-*.png`.

## Lettertypes
Fraunces (variabel, `'SOFT' 100,'WONK' 0`, gewicht 600) voor woordmerk en koppen h1-h3; Nunito Sans (variabel) voor alle andere tekst, fallback system-ui. Licentie OFL. Bestanden in `assets/fonts/` (`Fraunces-e0ad8e.woff2` 120 kB, `NunitoSans-9ad6ba.woff2` 32 kB, samen ca. 152 kB, alleen Latijn); `@font-face` met `font-display:swap` bovenaan `assets/site.css`, en inline op de taalkeuzepagina (`index.html`).
