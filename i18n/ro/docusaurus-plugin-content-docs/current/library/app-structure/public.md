---
id: public
title: Public
sidebar_label: Public
---

Fișiere publice cu URL direct.

## Directorul Public

Directorul `📂 public` reunește conținutul UI (User Interface) client-side după compilare, printre alte fișiere 
publice precum logo-uri și pictograme.

Poate conține orice fișier care trebuie să fie accesat public.

## Structura Directorului

La intrarea în directorul `📂 public` veți găsi implicit următoarea structură:

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

Directorul `📂 images` conține inițial logo-urile aplicației și pictograma.

În acest director puteți plasa toate imaginile publice ale aplicației dumneavoastră.

### icon.png

Pictograma aplicației, apare în fila browserului (favicon).

### logo.png

Este imaginea de logo care este afișată pe pagina de autentificare a backoffice-ului și pe paginile de erori.

### logo-main.png

Este imaginea de logo care este afișată în antet (_header_) după autentificare și intrarea în backoffice.

## Scripturi

În directorul `📂 scripts` se află codul JavaScript final generat de compilarea UI, aici pot fi plasate și alte fișiere 
publice JavaScript.

### ui.js

Fișierul `ui.js` este compilarea codului final al UI.

De obicei UI este dezvoltat în React și LESS, fiind utilizat [Vite](https://vite.dev/) pentru a realiza compilarea 
bundle-ului JavaScript final, care este fișierul `ui.js`.

Instrucțiunile de compilare se află în `ui/vite.config.js`, acest fișier conține detaliile despre cum este procesat 
și generat `ui.js`.

### ui.js.map

Fișierul `ui.js.map` este source maps al UI, acest fișier este important pentru a indica care este codul original 
atunci când se depanează erori în _console_ browserului.

## Stiluri

În directorul `📂 styles` trebuie să se afle fișierele CSS care sunt utilizate pentru stilizarea aplicației.

### main.css

`main.css` este de obicei utilizat pentru CSS globale sau pentru a modifica stilurile implicite ale Netuno.

### ui.css

`ui.css` este CSS-ul generat din compilarea UI.

De obicei UI este dezvoltat în React și LESS, fiind utilizat [Vite](https://vite.dev/) pentru a realiza compilarea 
bundle-ului CSS final care este `ui.css`.

Instrucțiunile de compilare se află în `ui/vite.config.js`, acest fișier conține detaliile despre cum este generat 
`ui.css`.