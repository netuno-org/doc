---
id: public
title: Pubblico
sidebar_label: Pubblico
---

File pubblici con URL diretto.

## Cartella pubblica

La cartella `📂 public` raccoglie il contenuto della UI (User Interface) lato client dopo la compilazione, oltre ad altri file pubblici come loghi e icona.

Può contenere qualsiasi file che debba essere accessibile pubblicamente.

## Struttura della cartella

Entrando nella cartella `📂 public` troverai per impostazione predefinita la seguente struttura:

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

## Immagini

La cartella `📂 images` contiene inizialmente i loghi dell'applicazione e l'icona.

In questa cartella puoi inserire tutte le immagini pubbliche della tua applicazione.

### icon.png

Icona dell'applicazione, viene visualizzata nella scheda del browser (favicon).

### logo.png

È l'immagine del logo visualizzata nella pagina di login del backoffice e nelle pagine di errore.

### logo-main.png

È l'immagine del logo visualizzata nell'intestazione (_header_) dopo aver effettuato il login e essere entrati nel backoffice.

## Script

Nella cartella `📂 scripts` si trova il codice JavaScript finale generato dalla compilazione della UI; è qui che possono essere inseriti altri file JavaScript pubblici.

### ui.js

Il file `ui.js` è la compilazione del codice finale della UI.

Tipicamente la UI è sviluppata in React e LESS, mentre viene utilizzato [Vite](https://vite.dev/) per compilare il bundle JavaScript finale, ovvero il file `ui.js`.

Le istruzioni di compilazione si trovano in `ui/vite.config.js`; questo file contiene i dettagli su come `ui.js` viene elaborato e generato.

### ui.js.map

Il file `ui.js.map` è il source map della UI; questo file è importante per indicare qual è il codice originale durante il debug degli errori nella _console_ del browser.

## Stili
  
La cartella `📂 styles` deve contenere i file CSS utilizzati per lo stile dell'applicazione.

### main.css

Il file `main.css` è tipicamente utilizzato per CSS globali o per modificare gli stili predefiniti di Netuno.

### ui.css

Il file `ui.css` è il CSS generato dalla compilazione della UI.

Tipicamente la UI è sviluppata in React e LESS, mentre viene utilizzato [Vite](https://vite.dev/) per compilare il bundle CSS finale, ovvero `ui.css`.

Le istruzioni di compilazione si trovano in `ui/vite.config.js`; questo file contiene i dettagli su come `ui.css` viene generato.