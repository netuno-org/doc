---
id: public
title: Publiek
sidebar_label: Publiek
---

Openbare bestanden met een directe URL.

## Publieke map

De map `📂 public` bevat de inhoud van de client-side UI (User Interface) na de compilatie, naast andere openbare bestanden zoals logo's en het pictogram.

De map kan elk bestand bevatten dat openbaar toegankelijk moet zijn.

## Mapstructuur

Wanneer u de map `📂 public` opent, vindt u standaard de volgende structuur:

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## Afbeeldingen

De map `📂 images` bevat aanvankelijk de logo's van de applicatie en het pictogram.

In deze map kunt u alle openbare afbeeldingen van uw applicatie plaatsen.

### icon.png

Pictogram van de applicatie; verschijnt in het browsertabblad (favicon).

### logo.png

Dit is de logoafbeelding die wordt weergegeven op de inlogpagina van de backoffice en op de foutpagina's.

### logo-main.png

Dit is de logoafbeelding die wordt weergegeven in de koptekst (_header_) nadat u bent ingelogd en de backoffice hebt geopend.

## Scripts

In de map `📂 scripts` staat de definitieve JavaScript-code die door de compilatie van de UI is gegenereerd; hier kunnen ook andere openbare JavaScript-bestanden worden geplaatst.

### ui.js

Het bestand `ui.js` is de definitieve gecompileerde UI-code.

Doorgaans wordt de UI ontwikkeld in React en LESS, waarbij [Vite](https://vite.dev/) wordt gebruikt om de definitieve JavaScript-bundle te compileren, namelijk het bestand `ui.js`.

De compilatie-instructies staan in `ui/vite.config.js`; dit bestand bevat de details over hoe `ui.js` wordt verwerkt en gegenereerd.

### ui.js.map

Het bestand `ui.js.map` bevat de source maps van de UI; dit bestand is belangrijk om aan te geven wat de oorspronkelijke code is bij het debuggen van fouten in de browserconsole.

## Stijlen
  
De map `📂 styles` moet de CSS-bestanden bevatten die worden gebruikt voor de styling van de applicatie.

### main.css

`main.css` wordt doorgaans gebruikt voor globale CSS of om de standaardstijlen van Netuno te wijzigen.

### ui.css

`ui.css` is de CSS die wordt gegenereerd uit de compilatie van de UI.

Doorgaans wordt de UI ontwikkeld in React en LESS, waarbij [Vite](https://vite.dev/) wordt gebruikt om de definitieve CSS-bundle te compileren, namelijk `ui.css`.

De compilatie-instructies staan in `ui/vite.config.js`; dit bestand bevat de details over hoe `ui.css` wordt gegenereerd.