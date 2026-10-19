---
sidebar_position: 3
id: api
title: API
---

Netuno dispone di un proprio framework per creare API REST in modo low-code, con supporto a JWT (JSON Web Token) e OpenAPI 3.0.

L'intero framework per lo sviluppo di servizi web in Netuno è molto versatile e consente di realizzare qualsiasi tipo di sviluppo.

Il framework include già molte funzionalità per lo sviluppo low-code, risparmiando molte righe di codice per soddisfare le esigenze più comuni come inviare email, consumare altre API REST, integrarsi con altri database, generare file PDF ed Excel, inviare SMS, manipolare dati del database, tra molte altre.

E quando nel framework di Netuno non esistono soluzioni, è possibile integrare facilmente librerie Java, Kotlin o anche JavaScript già esistenti per sviluppare risorse personalizzate da integrare con il framework di Netuno.

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) è la specifica dello standard per il passaggio dei dati del contesto di sessione al client, tramite un oggetto JSON.

In questo modo, il server non ha bisogno di conservare i dati sensibili degli utenti connessi in sessione; al contrario, questi diventano un token che viene trasmesso al client e che, successivamente, deve essere restituito a ogni richiesta.

Questo token è soggetto ad alcuni controlli di sicurezza, come il tempo massimo di validità e un processo che consente di creare un nuovo token senza richiedere una nuova autenticazione.

Netuno ha integrato il supporto a JWT; è semplice e facile da usare e funziona anche integrandosi con gli utenti e l'autenticazione nativa di Netuno.

## OpenAPI 3.0

Dopo il successo di Swagger v1 e v2, che da tempo sono diventati uno standard per lo sviluppo della definizione dei servizi web e la generazione del codice client.

Così, Swagger ha reso aperta la propria definizione ed è diventato [OpenAPI 3](https://www.openapis.org/).

Rimane la base per definire lo standard su come viene documentata l'API e su come vengono generati i client per consumarla.

Netuno offre già l'integrazione completa con OpenAPI 3.0 e utilizza la definizione OpenAPI insieme alla validazione di [JSON Schema](https://json-schema.org/).

Ciò significa che Netuno consente anche di validare l'input e l'output dei servizi web, ricorrendo alla validazione dello schema del JSON ricevuto e restituito, come segue:

- `Input`: se una chiamata al servizio web non rispetta la struttura e le validazioni, viene rifiutata
- `Output`: se restituisce dati che non rispettano la struttura e le validazioni definite, viene generato un avviso che il servizio web non è conforme.

In questo modo, Netuno da un lato evita di dover creare molti `if` nel codice per la validazione dei dati ricevuti, dall'altro garantisce una validazione del risultato generato dal servizio web, eseguendo un _test unitario_.

Inoltre, la struttura OpenAPI generata da Netuno può essere utilizzata con l'[Editor Swagger](https://editor.swagger.io/) per generare l'interfaccia di test, la documentazione e il codice per i client dell'API in altre tecnologie.

## Base

Netuno supporta anche la creazione di servizi web e l'autenticazione senza complicazioni, ovvero non è obbligatorio utilizzare JWT o OpenAPI, pur trattandosi della raccomandazione predefinita.

Spesso, per velocizzare la creazione dell'API o in situazioni che implicano la comunicazione tra server, si sceglie di semplificare al massimo e guadagnare tempo.

> Netuno consente di effettuare l'[autenticazione HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).