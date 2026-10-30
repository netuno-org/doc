---
sidebar_position: 1
id: folders-overview
title: Panoramica delle Cartelle
sidebar_label: Panoramica
---

Esplora e scopri le cartelle e i file delle applicazioni.

## Struttura

Dalla radice di installazione di Netuno, possiamo trovare la cartella `📂 apps`.

All'interno della cartella `📂 apps` si trovano tutte le applicazioni disponibili nella piattaforma Netuno.

Ci sono applicazioni che possono essere create localmente mentre altre possono essere esterne, ad esempio applicazioni che 
sono cloni di repository GIT. 

Vedi dalla radice di Netuno la struttura completa di un'applicazione appena creata:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>mia_app</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> Nella cartella `apps` ci sono tutte le applicazioni disponibili in Netuno.

Inizialmente in questa cartella esiste già l'applicazione `demo`, che come indica il nome è una **demo** delle 
funzionalità di Netuno.
 
Quando viene creata una nuova applicazione, viene aggiunta una nuova cartella contenente la stessa gerarchia di sottocartelle, come è 
stato mostrato sopra. 

## Cartelle Principali

All'interno della cartella dell'applicazione troviamo le cartelle principali, ognuna delle quali ha una finalità specifica.

Le cartelle principali sono:

- [📂 config](config) - Configurazioni generali;
- [📂 dbs](dbs) - Elementi relativi al database;
- [📂 docs](docs) - Documentazione e altri documenti in generale;
- [📂 public](public) - Contenuto pubblico disponibile direttamente tramite URL, come immagini, JavaScript e CSS;
- [📂 server](server) - Codice backend, come servizi, job, template, report e tutta l'API in generale.
- [📂 storage](storage) - Organizzazione di file correlati ai dati o utilizzati nel codice.
- [📂 ui](ui) - Interfaccia utente del backoffice, codice frontend come dashboard e altre funzionalità.