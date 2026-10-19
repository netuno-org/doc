---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configurazione di MSSQL su Docker

Presupponendo che Docker sia già installato, è sufficiente scaricare l'immagine del container dal Microsoft Container Registry con il seguente comando:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

E per avviare il nuovo container eseguire il seguente comando:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

Il parametro *-e 'SA\_PASSWORD=Secret123'* dove si trova *Secret123* sarà la parola d'ordine/password dell'utente *sa*.

Attenzione: la password deve contenere almeno 8 caratteri per rispettare la norma minima di sicurezza di MSSQL, altrimenti il container non verrà inizializzato.

Dopo l'inizializzazione del container assicurarsi che MSSQL funzioni correttamente; a tal fine è possibile installare il comando *mssql* tramite *NPM*:

```
npm install mssql -g
```

Con questo potrete eseguire il comando per connettervi a MSSQL tramite il terminale:

```
mssql -u sa -p Secret123
```

Attenzione! Se avete modificato la password, sostituite *Secret123* con la password di _sa_ configurata nel container.

## Creare una nuova applicazione

Per creare una nuova applicazione in Netuno collegata a Microsoft SQL Server, seguite i normali passaggi di creazione di una nuova applicazione in Netuno e scegliete il motore di base dati MSSQL.

Quindi seguite i passaggi del tutorial:

Dopo aver scelto il motore di base dati MSSQL vi verranno richiesti i dati per realizzare la connessione alla base dati in MSSQL.

Come ad esempio:

![app-create](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Modificare la configurazione delle applicazioni

Perché un'applicazione possa lavorare con MSSQL e passare così a utilizzare MSSQL come base dati principale dell'applicazione, modificate le configurazioni di ambiente in:

```
/web/app/TUA_APP/config/_development.json
/web/app/TUA_APP/config/_production.json
/web/app/TUA_APP/config/_TUO_AMBIENTE.json
```

La configurazione dovrà essere fatta nel modo seguente:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

Se volete connettervi come base dati alternativa e non principale, allora sostituite _"default"_ con il nome desiderato per questa connessione.

## Istanze

Se dovete connettervi a un'istanza specifica di MSSQLSRV, allora aggiungete alla configurazione della connessione il valore `instance`, come ad esempio:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "nome-della-mia-istanza",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```