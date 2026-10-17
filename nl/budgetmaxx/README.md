# Website-prototype BudgetMaxx
Vier zelfstandige pagina's (NL): `index.html` (landingspagina), `over.html` (Over), `privacy.html` (concept-privacyverklaring) en `offline.html` (bewijs zelf dat het offline werkt). Alle CSS inline, geen externe scripts, fonts of CDN.
Openen: dubbelklik `index.html` (werkt offline in elke browser); licht/donker volgt het systeem.

Verwerkt (besluiten Luna, 16 okt): slogan "Maximale rust in je portemonnee." (EN later: "Maximum calmness in your wallet."), blok "Gratis en open-source" met donatieknop, blok "Eerlijk over AI", hybride gezicht ("gemaakt door Luna"), FAQ bijgewerkt.

Beeld (16 okt): screenshots in `img/` (6 desktop op 1440 breed, 2 telefoon op 390 breed), gemaakt met het fictieve demoprofiel "Max" (alle bedragen verzonnen) in een kopie van de app (`../demo/budgetmaxxing.html`). Hero met laptop- en telefoonframe in CSS, galerij met scroll-snap (zonder script), inline-SVG-iconen en -illustraties.

Nog placeholder:
- PayPal-link "Trakteer Max" (`href="#"`, commentaar "PayPal-link nog invullen"), op beide pagina's
- Repo-link "Bekijk de code" (`href="#"`, commentaar "repo-URL nog invullen"), op beide pagina's
- Luna's eigen verhaal en foto op `over.html`
- Contactadres (footer en `privacy.html`)
- `privacy.html` is een CONCEPT, juridisch nog laten nakijken; formuliertool/hosting nog niet gekozen (TODO-commentaar in de pagina)
- Beta-formulier: verstuurt niets, toont alleen een bedankmelding; de koppeling moet nog worden gekozen
- Licentie is besloten (GPL-3.0, 16:10) en staat in de footer, samen met KvK 89453980. Handelsnaam bewust weggelaten (nog niet definitief). Contactadres zelf volgt nog.

Nieuw (16 okt): `privacy.html`, `offline.html`, footerlinks naar beide op alle pagina's, `overflow-wrap` tegen lange woorden. 

Geen reviews of aantallen; alle teksten zijn concept.

Update 16 okt (na review Gemmie): back-up van de vorige landingspagina in `index-v1.html`. Alt-tekst budgetcoach gecorrigeerd (€ 46,77 vandaag, € 327,42 per 7 dagen: Gemmie had gelijk). Hero gebruikt echte beeldverhoudingen (telefoon alleen bovenaan gecropt, zonder rek, zodat onderaan geen halve regel staat). Galerij vervangen door scrollytelling (sticky browserframe, telefoonframe bij Dashboard en Jouw dag, tabs, IntersectionObserver in klein inline-script; onder 960 px elk screenshot onder zijn tekst; zonder JS leesbaar; prefers-reduced-motion respecteerd). Beta-formulier met verplichte toestemming, privacylink, bewaartermijn (3 maanden na lancering) en "de app zelf verstuurt nooit iets" (verstuurt nog steeds niets). Probleem als vergelijking achteraf/vooraf, tijdlijn met 3 stappen, kerncijfers van Max (alleen uit screenshots). Skip-link, sticky header, "Trakteer Max via PayPal", over.html opgeschoond (placeholder voor Luna's verhaal blijft), footer met GPL-3.0 en KvK op alle pagina's.
Controle (Playwright + Chrome): scrollWidth = 375 en 390 op alle 4 pagina's, dus geen horizontale scroll. Screenshots in `_check/`.
Nog te bevestigen door Luna/Max: knop "Bankafschrift inladen" (zichtbaar in maand.png, bewust niet vermeld i.v.m. "geen bankkoppeling") en de statusregel "Auto back-up" (zichtbaar in de zijbalk, niet vermeld).
