---
id: server
title: Server
sidebar_label: Server
---

Sviluppo del backend e API.

## Cartella del Server

La cartella `📂 server` contiene un insieme di file e cartelle che formano il backend dell'applicazione.

Tutto ciò che si trova nella cartella `📂 server` viene utilizzato nell'elaborazione del server backend, come integrazioni, API,
database, sicurezza e autenticazione, Cron Jobs, tra molti altri.

## Struttura della Cartella

Nella cartella `📂 server` si trova la seguente struttura:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Actions

Nella cartella `📂 actions` possono essere aggiunte azioni personalizzate su misura (_hooks_) nelle operazioni CRUD dei moduli
generati automaticamente per il backoffice; in base alla struttura dei dati, qui può essere fatto molto intervento sui dati.

Ad esempio, quando si rimuove un cliente è necessario rimuovere tutti i suoi ordini, oppure quando si crea un nuovo prodotto deve
essere integrato con un altro sistema. In breve, qualsiasi sviluppo direttamente correlato ai dati può essere fatto
qui.

Le actions sono ispirate ai `triggers` del database, ma a livello di esecuzione del codice.

Pertanto è possibile programmare operazioni specifiche nella creazione, modifica e rimozione dei dati.

## Components

I `📂 components` sono utilizzati per definire tipi personalizzati di campi nei moduli del backoffice, che
possono eseguire la propria manipolazione dei dati.

Possono essere creati componenti tramite script per fornire un nuovo tipo di campo specifico nell'applicazione.

## Core

La cartella `📂 core` consente l'iniezione di codice nel flusso di elaborazione delle richieste HTTP.

È anche utilizzata per condividere codice tra i vari servizi e altro.

Il file `_config.js` viene eseguito dopo che la configurazione è stata caricata in ogni richiesta HTTP, viene eseguito dopo lo script di
configurazione dell'ambiente che si trova nella cartella `📂 config` dell'applicazione.

Il file `_init.js` serve a iniettare qualche istruzione quando l'applicazione viene inizializzata per la prima volta.

### Elaborazione delle richieste HTTP

Nel flusso di elaborazione delle richieste HTTP per qualsiasi URL dell'applicazione vengono eseguiti i rispettivi script:

- `_request_start.js` viene eseguito quando la richiesta HTTP arriva al server di Netuno.
- `_request_url.js` viene eseguito quando l'URL viene elaborato da Netuno; l'URL può essere modificato verso un'altra destinazione.
- `_request_close.js` viene eseguito quando la risposta alla richiesta HTTP viene chiusa.
- `_request_end.js` viene eseguito quando la richiesta HTTP è conclusa definitivamente.
- `_request_error.js` viene eseguito quando si verifica un errore nell'elaborazione della richiesta HTTP.

### Elaborazione dei Servizi API

Nel flusso di elaborazione di qualsiasi servizio API dell'applicazione vengono eseguiti i seguenti script:

- `_service_config.js` viene eseguito prima di iniziare l'esecuzione del servizio; serve a definire le configurazioni di
esecuzione del servizio, tra le altre cose. Si può definire se il servizio può o non può essere eseguito, ovvero un
controllo di sicurezza nell'accesso al servizio API.
- `_service_start.js` viene eseguito non appena un servizio inizia a essere elaborato.
- `_service_end.js` viene eseguito dopo che è terminata l'elaborazione di un servizio.
- `_service_error.js` viene eseguito quando si verifica un errore nell'elaborazione di un servizio.

## Services - API

È nella cartella `📂 services` che vengono creati i servizi che formano l'API applicativa.

I servizi possono essere scritti in diversi linguaggi: JavaScript, Python, Java, Kotlin, Ruby o Groovy.

Poiché Netuno è poliglotta, qualsiasi file di script può essere modificato per un altro linguaggio di programmazione
supportato; basta avere l'estensione dei file in base al linguaggio.

Non sono necessarie configurazioni aggiuntive in funzione del linguaggio di programmazione utilizzato; basta creare il file
del servizio con l'estensione corretta corrispondente al linguaggio di programmazione.

## Setup

Nella cartella `📂 setup` si trova il codice generato automaticamente dal motore di Netuno che definisce gli schemi del
database, ed è anche dove possiamo inserire il caricamento dei dati essenziale per il funzionamento
dell'applicazione.

Lo script `_start.js` viene eseguito prima di iniziare l'elaborazione di costruzione del database.

Lo script `_end.js` viene eseguito dopo che l'elaborazione di costruzione del database è terminata.

In base alla costruzione della struttura dei dati, Netuno crea qui nella cartella `📂 setup` automaticamente il codice
necessario affinché tutta la struttura dei dati venga ricreata in un nuovo database, o per ricreare qualcosa che manca in
un altro database in cui l'applicazione venga eventualmente eseguita.

 ## Templates

La cartella `📂 templates` contiene il contenuto HTML delle pagine di backoffice dell'applicazione, generate dal server
di Netuno.

Nella cartella `📂 dev` è contenuto il file `dashboard.html` che consente la modifica dell'area di lavoro nella modalità di
costruzione dello sviluppatore.

Il file `dashboard.html` che si trova nella radice dei template contiene l'HTML dell'area di lavoro generale del backoffice.

### Template Nativi

Nella cartella `📂 _` qualsiasi template generale può essere sostituito, ovvero i template predefiniti di Netuno possono essere
modificati.

- [Qui ci sono i template nativi di Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Se il nome delle cartelle e/o dei file coincide con quello dei template nativi all'interno di questa cartella, allora viene utilizzato
il template che si trova in questa cartella invece del template nativo.

Ovvero, basta replicare la stessa struttura del template nativo all'interno della cartella `📂 _` per sostituirlo.

### Scripts

I template di script iniettano file di codice JavaScript alla fine delle pagine con il seguente scopo:

1. `scripts.html` aggiungere codice JavaScript alla fine della pagina di **backoffice**.
2. `scripts_dev.html` aggiungere codice JavaScript alla fine della pagina dell'**area di costruzione dello sviluppatore**.
3. `scripts_login.html` aggiungere codice JavaScript alla fine della pagina di **login**.

### Styles

I template di stili iniettano file di stili all'inizio delle pagine con il seguente scopo:

1. `styles.html` aggiungere codice CSS all'inizio della pagina di **backoffice**.
2. `styles_dev.html` aggiungere codice CSS all'inizio della pagina dell'**area di costruzione dello sviluppatore**.
3. `styles_login.html` aggiungere codice CSS all'inizio della pagina di **login**.