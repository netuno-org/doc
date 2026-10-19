---
sidebar_position: 2
id: apps
title: Applicazioni
---

Netuno è un server multi-applicazione che distribuisce l'accesso alle applicazioni tramite domini e sottodomini.

Più applicazioni web possono essere sia pubbliche sia private, poiché Netuno realizza la costruzione di back office. Quindi, di norma, le applicazioni hanno sempre un accesso privato, ma l'interfaccia pubblica è opzionale.

Quando si sviluppano più applicazioni in Netuno, queste possono essere disaccoppiate o anche accoppiate a livello di database.

Ciò significa che possiamo condividere lo stesso database tra più applicazioni oppure avere database separati per ciascuna applicazione.

## Applicazioni disaccoppiate su più database

Quando si tratta di applicazioni con ambiti completamente diversi, non ha senso che condividano lo stesso database.

Immagina di avere un'applicazione per l'invio di newsletter, un'altra per gestire Libri e un'altra per gestire le Consegne; poiché nessuna necessita di informazioni archiviate in un'altra applicazione, sono completamente indipendenti.

Quindi non c'è motivo per cui debbano condividere lo stesso database: ciascuna dovrebbe avere il proprio database:

![Applicazioni disaccoppiate.](/docs/assets/business/apps-db-pt-desacopladas.svg "Applicazioni disaccoppiate.")

In questo modo nessuna applicazione conosce le informazioni archiviate nelle altre applicazioni e il suo intero funzionamento è indipendente dalle altre applicazioni esistenti.

## Applicazioni accoppiate sullo stesso database

Quando lavoriamo con applicazioni che devono condividere informazioni e può esserci un grande volume di dati, la condivisione del database è la soluzione più praticabile a livello di prestazioni, ma non è la migliore a livello di sicurezza e integrità dei dati.

Quindi, per motivi di sicurezza e integrità, normalmente si creano grandi applicazioni web in cui tutto è centralizzato in un'applicazione complessa che utilizza il proprio database esclusivo; se l'applicazione ha bisogno di dati esterni, può integrarsi con altri database e web service, se necessario.

In questo caso, Netuno fornisce già tutti i mezzi per lo sviluppo di questo tipo di applicazioni, ma offre anche una buona soluzione per applicazioni con database condiviso.

Poiché il problema principale è la sicurezza e l'integrità dei dati, con Netuno, quando più applicazioni utilizzano lo stesso database, queste vengono automaticamente limitate alle proprie tabelle correlate ai propri form.

Consente di condividere il form e, di conseguenza, la sua tabella con le altre applicazioni accoppiate nel database.

Immagina uno scenario in cui hai un'applicazione per la gestione dei clienti, un'altra per la gestione dei fornitori e un'altra per la fatturazione: avrai infatti sia fatture di fornitori da pagare sia fatture di clienti da incassare.

L'applicazione dei clienti non deve condividere dati con l'applicazione dei fornitori: sono applicazioni distinte.

Ma l'applicazione di fatturazione deve integrarsi con entrambe le applicazioni per ottenere i dati dell'applicazione dei clienti e dei fornitori, così da poter collegare le fatture e gestire incassi e pagamenti nelle diverse situazioni.

![Applicazioni accoppiate.](/docs/assets/business/apps-db-pt-acopladas.svg "Applicazioni accoppiate.")

Per garantire che le applicazioni non interferiscano con dati sensibili delle altre, si raccomanda anche l'utilizzo di accessi al database distinti per ciascuna applicazione; è inoltre possibile controllare, tramite il database, i loro accessi alle tabelle per garantire che non vi siano interferenze indesiderate.

Per il resto, Netuno esegue il controllo per separare ciò che appartiene a una o all'altra applicazione e anche ciò che è condiviso tra loro.

## Indirizzo di ogni applicazione

Netuno distribuisce automaticamente l'accesso alle applicazioni tramite dominio e sottodominio.

Quando arriva una richiesta a Netuno, il dominio viene elaborato nel modo seguente:

![Immagine di esempio dell'indirizzo dell'applicazione con sottodominio.](/docs/assets/business/apps-subdomain.svg "Applicazioni con sottodominio.")

Netuno verifica, fino al primo punto, se esiste un'applicazione con questo nome.

Se esiste un'applicazione con questo nome, sarà questa a ricevere la richiesta.

Se non esiste alcuna applicazione con questo nome, la richiesta verrà consegnata all'applicazione predefinita (_default_).

Questa risoluzione dei domini funziona anche quando si tratta di un sotto-sottodominio, ad esempio:


![Immagine di esempio dell'indirizzo dell'applicazione con sotto-sottodominio.](/docs/assets/business/apps-sub-subdomain.svg "Applicazioni con sotto-sottodominio.")

In altre parole, fino al primo punto viene definita quale applicazione riceverà la richiesta da elaborare.

Netuno consente anche di definire un indirizzo esatto con dominio per l'applicazione: basta definire quale sarà l'indirizzo esatto su cui l'applicazione funzionerà.

> L'utilizzo della modalità automatica per elaborare i domini consente il funzionamento delle applicazioni nella grande maggioranza dei casi; se comunque ci sono situazioni in cui è necessario un indirizzo completamente diverso e specifico per il funzionamento dell'applicazione, allora è necessario definirlo nella sua configurazione.