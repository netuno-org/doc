---
id: ui
title: UI
sidebar_label: UI
---

Frontend personalizzato del backoffice e delle dashboard.

## Interfaccia Utente

Come indica il nome, nella cartella `📂 ui` si trova la logica dell'interfaccia utente dell'applicazione.

Consente di sviluppare per modificare il comportamento del backoffice dell'applicazione.

È possibile generare dashboard su misura, aggiungere o modificare funzionalità, tra le altre cose.

Per lo sviluppo del codice generale dell'applicazione, sia backend sia frontend, consigliamo editor di 
codice gratuiti, come:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Struttura della Cartella

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MioPulsante</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>ContenitoreDashboard</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Sorgente

La cartella `📂 src` raccoglie il codice applicativo del frontend. In questa cartella si trova l'organizzazione dei componenti 
React, rispettivamente `components` e `containers`.

### Container

La cartella `📂 containers` è destinata ai container, che sono componenti React per le aree con più 
interazioni, ossia sono componenti che hanno più funzionalità, normalmente coprono un'area considerevole 
dello schermo e possono aggregare altri componenti in base all'ambito.

Ad esempio, presenta una tabella di ordini con un modulo per filtrare, e inoltre un grafico che aggrega 
il totale mensile, tutto questo all'interno di un container, mentre ciascuna cosa potrebbe essere un componente separato ma 
viene aggregata nel container degli ordini nella dashboard.

### Componenti

La cartella `📂 components` è destinata ai _componenti_ riutilizzabili in React, che normalmente implementano 
funzionalità molto specifiche utili per essere integrati in altri componenti o in container.

Tipicamente contengono un comportamento più semplice, essendo molto focalizzati sul proprio obiettivo per un determinato ambito, 
e servono per essere riutilizzati in molteplici container o anche in altri componenti.

Come esempi di componenti si potrebbero avere una determinata tabella, un modulo, un tipo di grafico, tra gli altri.

### Stili

La cartella `📂 styles` serve tipicamente per gli stili globali dei vari container dell'applicazione. Anche se non 
esiste uno standard rigido in questo campo, suggeriamo un'organizzazione degli stili specifici del `component` o del 
`container` insieme allo stesso, ossia internamente nella rispettiva cartella del componente.
 
## Vite
 
Per generare la versione finale del codice in JavaScript contenente l'UI dell'applicazione, compilata e 
ottimizzata, che viene elaborata e utilizzata dal browser, è necessario eseguire la relativa compilazione 
del codice frontend codificato in React/JSX.

Questa compilazione viene eseguita da [Vite](https://vite.dev/) e la sua configurazione e altre istruzioni si trovano nel 
file:

- `vite.config.js`

Che si trova nella radice della cartella `📂 ui`.

## Gestore di Pacchetti

Il file `package.json` è utilizzato dal gestore dei moduli delle dipendenze; consigliamo l'uso di 
[Bun](https://bun.sh) per installare tutte le dipendenze necessarie del frontend.

E i comandi di esecuzione utilizzano [Bun](https://bun.sh), che rappresenta un altro consiglio importante.

Pertanto, consigliamo l'installazione di [Bun](https://bun.sh).

## Istruzioni

Il file `README.md` contiene le istruzioni di installazione ed esecuzione.

Per installare le dipendenze, esegui:

- `bun install`

E per eseguire la compilazione del codice frontend in sviluppo:

- `bun run watch`

Oppure, se si tratta della compilazione finale e definitiva ottimizzata per la produzione:

- `bun run build`

Per impostazione predefinita, la compilazione crea i seguenti file:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Questi file vengono integrati nell'elaborazione di Netuno per realizzare le necessarie personalizzazioni su misura nelle 
pagine di backoffice dell'applicazione, come dashboard e funzionalità specifiche.