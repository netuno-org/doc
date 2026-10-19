---
id: config
title: Configurazione
sidebar_label: Configurazione
---

Impostazioni generali dell'applicazione.

## Cartella delle configurazioni

Le configurazioni dell'applicazione sono disponibili nella cartella `📂 config`, dove vengono effettuate le parametrizzazioni generali dell'applicazione e delle integrazioni esterne.

Netuno supporta diversi tipi di ambienti, per impostazione predefinita utilizziamo `development` (sviluppo) e `production` (produzione),

L'ambiente attivo è definito nel file `config.js` che si trova nella radice dell'installazione di Netuno:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

È possibile utilizzare qualsiasi nome per definire l'ambiente, poiché le applicazioni devono avere lo stesso nome dell'ambiente come nome dei file (`.json` e `.js` nella cartella `📂 config` dell'applicazione.

Per impostazione predefinita, in questa cartella troviamo i seguenti file:

## _development.js

L'iniezione di codice JavaScript che consente di realizzare configurazioni dinamiche tramite la logica programmatica sulle parametrizzazioni definite nel file `_development.json`. Ad esempio definire qualche configurazione in base a informazioni presenti nel database, definire la parametrizzazione del comportamento dell'esecuzione del codice, tra le altre cose.

Questo file viene utilizzato a seconda della definizione dell'ambiente, se questo è `development` (sviluppo).

## _development.json

Definizione delle parametrizzazioni dell'applicazione come la lingua, le configurazioni generali delle risorse e delle integrazioni. Come ad esempio, configurazioni di database, Cron Jobs, integrazioni con SMTP o API remote, autenticazione, tra molte altre.

Questo file viene utilizzato a seconda della definizione dell'ambiente, se questo è `development` (sviluppo).

## _production.js

L'iniezione di codice JavaScript consente di realizzare configurazioni dinamiche tramite la logica programmatica sulle parametrizzazioni definite in `_production.js`. Ad esempio definire la configurazione con informazioni presenti nel database, la parametrizzazione del comportamento dell'esecuzione del codice, tra gli altri.

Questo file viene utilizzato a seconda della definizione dell'ambiente, se questo è `production` (produzione).

## _production.json

Definizione delle parametrizzazioni dell'applicazione come la lingua, le configurazioni generali delle risorse e delle integrazioni. Come ad esempio, configurazioni di database, Cron Jobs, integrazioni con SMTP o API remote, autenticazione, tra molte altre.

Questo file viene utilizzato a seconda della definizione dell'ambiente, se questo è `production` (produzione).