---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Introduzione

Il grande vantaggio di H2Database è che non richiede un server di database perché permette di funzionare in modalità incorporata nelle applicazioni.

> H2Database è consigliato solo per scopi di sviluppo e test; in produzione dovrebbe essere utilizzato un altro tipo di database più consistente.

## Raccomandazioni e Limitazioni

H2Database non consente a più di un solo processo di accedere al file del database.

Quindi, se si deve manipolare il file o accedere tramite la console web, sarà necessario fermare l'esecuzione di Netuno.

## File del Database

I file del database di H2Database si trovano nella cartella `dbs`, che è all'interno dell'applicazione, per esempio:

- `apps/mia_app/dbs`

Se si desidera rinominare il database, modificare il nome del file e correggere le configurazioni dell'applicazione, per esempio nell'ambiente _development_:

- `config/_development.json`

La correzione deve essere effettuata nella parte della configurazione della connessione al database:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "mio_db",
            "username": ""
        }
    }
    ...
```

## Console Web

Potrebbe essere necessario accedere direttamente al database; in questo caso sarà possibile tramite la console web di H2Database.

La console web viene avviata eseguendo direttamente il _jar_ di H2Database nel modo seguente:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Si presume che ci si trovi nella radice di Netuno.

Per visualizzare le opzioni disponibili:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Avvia la console web sulla porta **9000** di Netuno e consente l'accesso da IP esterni:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> È necessario fermare prima l'esecuzione di Netuno per evitare che più processi manipolino il file del database.

L'URL JDBC per connettersi al database deve essere:

`jdbc:h2:./apps/mia_app/dbs/mio_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Sostituire la parte `mia_app` con il nome dell'app e `mio_db` con il nome del database corrispondente.

L'autenticazione sarà con l'utente `sa` ma senza password.


### Reimpostare gli accessi

Soprattutto quando si perde l'accesso dell'utente `dev`.

Accedere tramite la console web di H2Database come descritto sopra.

Per ricreare l'accesso, eliminare i dati della tabella `netuno_user`, per esempio:

- `delete from netuno_user`
 
In questo modo Netuno ricreerà gli utenti con le rispettive password predefinite quando verrà avviato nuovamente.