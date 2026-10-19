---
id: public
title: Public
sidebar_label: Public
---

Fișiere publice cu URL direct.

## Folderul public

Folderul `📂 public` reunește conținutul interfeței de utilizator (UI) din partea clientului după compilare, împreună cu alte fișiere publice precum logo-uri și iconițe.

Poate conține orice fișier care trebuie să fie accesat public.

## Structura folderului

Când intri în folderul `📂 public`, vei găsi implicit următoarea structură:

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

## Imagini

Folderul `📂 images` conține inițial logo-urile aplicației și iconița.

În acest folder poți plasa toate imaginile publice ale aplicației tale.

### icon.png

Iconița aplicației, apare în tabul browserului (favicon).

### logo.png

Este imaginea de logo afișată pe pagina de autentificare a backoffice-ului și pe paginile de erori.

### logo-main.png

Este imaginea de logo afișată în header (_header_) după ce te autentifici și intri în backoffice.

## Scripts

În folderul `📂 scripts` se află codul JavaScript final generat de compilarea UI, aici pot fi plasate alte fișiere publice JavaScript.

### ui.js

Fișierul `ui.js` este compilarea codului final al UI.

De obicei, UI este dezvoltat în React și LESS, iar [Vite](https://vite.dev/) este utilizat pentru a compila bundle-ul JavaScript final, care este fișierul `ui.js`.

Instrucțiunile de compilare se află în `ui/vite.config.js`; acest fișier conține detaliile despre modul în care `ui.js` este procesat și generat.

### ui.js.map

Fișierul `ui.js.map` este source map-ul UI; acest fișier este important pentru a indica care este codul original atunci când se depanează erori în _console_ browserului.

## Stiluri
  
În folderul `📂 styles` trebuie să conțină fișierele CSS utilizate pentru stilizarea aplicației.

### main.css

`main.css` este folosit de obicei pentru CSS global sau pentru a modifica stilurile implicite ale Netuno.

### ui.css

`ui.css` este CSS-ul generat în urma compilării UI.

De obicei, UI este dezvoltat în React și LESS, iar [Vite](https://vite.dev/) este utilizat pentru a compila bundle-ul CSS final, care este `ui.css`.

Instrucțiunile de compilare se află în `ui/vite.config.js`; acest fișier conține detaliile despre modul în care `ui.css` este generat.