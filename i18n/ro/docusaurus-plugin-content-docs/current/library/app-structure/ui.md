---
id: ui
title: UI
sidebar_label: UI
---

Frontend personalizat al backoffice-ului și al dashboard-urilor.

## Interfața utilizatorului

După cum sugerează numele, în folderul `📂 ui` se află logica interfeței utilizatorului aplicației.

Permite dezvoltarea pentru a modifica comportamentul backoffice-ului aplicației.

Este posibil să generați dashboard-uri personalizate, să adăugați sau să modificați funcționalități, printre altele.

Pentru dezvoltarea codului general al aplicației, fie backend, fie frontend, recomandăm editoare de cod gratuite, precum:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Structura folderului

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>ButonMeu</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>ContainerTablouDeBord</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Sursă

Folderul `📂 src` reunește codul aplicațional al frontend-ului. În acest folder se află organizarea componentelor React, respectiv `components` și `containers`.

### Containere

Folderul `📂 containers` este destinat containerelor, care sunt componente React pentru zonele cu mai multe interacțiuni, adică sunt componente care au mai multe funcționalități, de obicei acoperă o zonă considerabilă a ecranului și pot agrega alte componente în funcție de domeniu.

De exemplu, prezintă un tabel de comenzi cu un formular pentru filtrare și, de asemenea, un grafic care agregă totalul lunar, toate acestea în interiorul unui container, deși fiecare lucru ar putea fi un component separat, dar este agregat în containerul comenzilor din dashboard.

### Componente

Folderul `📂 components` este destinat componentelor reutilizabile în React, care de obicei implementează funcționalități foarte specifice, utile pentru a fi integrate în alte componente sau în containere.

De obicei, conține un comportament mai simplu, fiind foarte concentrat pe obiectivul său pentru un anumit domeniu, și servește pentru a fi reutilizat în mai multe containere sau chiar în alte componente.

Ca exemple de componente ar putea fi un anumit tabel, un formular, un tip de grafic, printre altele.

### Stiluri

Folderul `📂 styles` serve de obicei pentru stilurile globale ale diverselor containere ale aplicației. Deși nu există un standard puternic în acest domeniu, sugerăm o organizare a stilurilor specifice `component`-ului sau `container`-ului lângă acesta, adică în interiorul folderului respectiv de component.
 
## Vite
 
Pentru a se genera versiunea finală a codului în JavaScript care conține UI-ul aplicației, compilat și optimizat, și care este procesat și utilizat de browser, este necesar să se execute compilarea respectivă a codului de frontend scris în React/JSX.

Această compilare este realizată de [Vite](https://vite.dev/), iar configurația sa și alte instrucțiuni se află în fișierul:

- `vite.config.js`

Care se află în rădăcina folderului `📂 ui`.

## Manager de pachete

Fișierul `package.json` este utilizat de managerul modulelor de dependențe; recomandăm utilizarea [Bun](https://bun.sh) pentru a instala toate dependențele necesare ale frontend-ului.

Iar comenzile de execuție utilizează [Bun](https://bun.sh), care este o altă recomandare importantă.

Prin urmare, recomandăm instalarea [Bun](https://bun.sh).

## Instrucțiuni

Fișierul `README.md` conține instrucțiunile de instalare și execuție.

Pentru a instala dependențele, executați:

- `bun install`

Iar pentru a executa compilarea codului de frontend în dezvoltare:

- `bun run watch`

Sau dacă este compilarea finală și definitivă optimizată pentru producție:

- `bun run build`

În mod implicit, compilarea creează următoarele fișiere:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Aceste fișiere sunt integrate în procesarea Netuno pentru a realiza personalizările necesare la cerere în paginile de backoffice ale aplicației, cum ar fi dashboard-uri și funcționalități specifice.