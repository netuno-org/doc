---
id: ui
title: UI
sidebar_label: UI
---

Aangepaste frontend van de backoffice en dashboards.

## Gebruikersinterface

Zoals de naam aangeeft, bevindt zich in de map `📂 ui` de logica van de gebruikersinterface van de applicatie.

Hiermee kan ontwikkeling worden uitgevoerd om het gedrag van de backoffice van de applicatie te wijzigen.

Het is mogelijk dashboards op maat te genereren, functionaliteiten toe te voegen of te wijzigen, enzovoort.

Voor de ontwikkeling van de algemene code van de applicatie, zowel backend als frontend, raden we gratis
code-editors aan, zoals:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Mapstructuur

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MijnKnop</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>DashboardContainer</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Bron

De map `📂 src` bevat de applicatiecode van de frontend. In deze map bevindt zich de organisatie van
React-componenten, respectievelijk `components` en `containers`.

### Containers

De map `📂 containers` is bestemd voor de containers, dit zijn React-componenten voor de gebieden met de meeste
interacties, dat wil zeggen componenten met meer functionaliteiten, die gewoonlijk een aanzienlijk deel
van het scherm beslaan en andere componenten kunnen bundelen afhankelijk van het domein.

Bijvoorbeeld, het toont een tabel met bestellingen met een formulier om te filteren, en ook een grafiek die
het maandtotaal samenvoegt, dit alles binnen een container, waarbij elk onderdeel een afzonderlijke component
zou kunnen zijn, maar wordt samengevoegd in de container van de bestellingen in het dashboard.

### Componenten

De map `📂 components` is bestemd voor de herbruikbare _componenten_ in React, die gewoonlijk
zeer specifieke functionaliteiten implementeren die nuttig zijn om te integreren in andere componenten of in containers.

Doorgaans bevatten ze eenvoudiger gedrag en zijn ze sterk gericht op hun doel voor een bepaald domein,
zodat ze kunnen worden hergebruikt in meerdere containers of zelfs in andere componenten.

Als voorbeelden van componenten kan een bepaalde tabel, een formulier, een type grafiek, enzovoort dienen.

### Stijlen

De map `📂 styles` dient doorgaans voor globale stijlen van de verschillende containers van de applicatie. Hoewel er
op dit gebied geen sterke standaard is, raden we aan de stijlen die specifiek zijn voor het `component` of de
`container` daarbij te plaatsen, dat wil zeggen intern in de respectieve componentmap.
 
## Vite
 
Om de uiteindelijke codeversie in JavaScript te genereren die de UI van de applicatie bevat, gecompileerd en
geoptimaliseerd, en die door de browser wordt verwerkt en gebruikt. Het is noodzakelijk de respectieve compilatie
uit te voeren van de frontendcode die in React/JSX is geschreven.

Deze compilatie wordt uitgevoerd door [Vite](https://vite.dev/) en de configuratie en andere instructies staan in
het bestand:

- `vite.config.js`

Dat zich in de hoofdmap van `📂 ui` bevindt.

## Pakketbeheerder

Het bestand `package.json` wordt gebruikt door de beheerder van de afhankelijkheidsmodules; we raden het gebruik van
[Bun](https://bun.sh) aan om alle benodigde frontend-afhankelijkheden te installeren.

En de uitvoeringscommando's gebruiken [Bun](https://bun.sh), wat een andere belangrijke aanbeveling is.

Daarom raden we de installatie van [Bun](https://bun.sh) aan.

## Instructies

Het bestand `README.md` bevat de installatie- en uitvoeringsinstructies.

Voer het volgende uit om de afhankelijkheden te installeren:

- `bun install`

En om de compilatie van de frontendcode in ontwikkeling uit te voeren:

- `bun run watch`

Of als het gaat om de definitieve, voor productie geoptimaliseerde compilatie:

- `bun run build`

Standaard maakt de compilatie de volgende bestanden aan:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Deze bestanden worden geïntegreerd in de verwerking van Netuno om de nodige aanpassingen op maat uit te voeren op de
backofficepagina's van de applicatie, zoals dashboards en specifieke functionaliteiten.