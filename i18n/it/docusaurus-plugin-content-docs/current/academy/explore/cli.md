---
id: cli
title: Riga di Comando
sidebar_label: Riga di Comando
---


L'interfaccia a riga di comando di Netuno è lo strumento principale per gestire il tuo ambiente di sviluppo. Tramite essa, puoi consultare informazioni di sistema, gestire applicazioni e configurare il server rapidamente.

#### Prerequisiti

- **Terminale:** Devi avere un terminale (Prompt dei comandi, PowerShell o Bash) aperto nella cartella radice in cui è stato installato Netuno.

Questi sono i comandi iniziali per verificare se il tuo ambiente è pronto per l'uso.

| OPZIONE    | DESCRIZIONE    |
|----------|--------------|
| `help` | Consente di visualizzare tutti i comandi disponibili in Netuno. |
| `version` | Consente di visualizzare la versione corrente di Netuno. |

#### Elencare i comandi disponibili

Se hai dubbi su quali operazioni puoi eseguire, usa il comando di aiuto. Restituirà un elenco completo delle funzioni.

```shell
./netuno help
```
#### Visualizzare la versione di Netuno

È fondamentale sapere quale versione stai utilizzando per garantire la compatibilità con script e moduli specifici.

```shell
./netuno version
```

## Installare

Prima di iniziare lo sviluppo, è necessario installare il motore di Netuno nel tuo ambiente. Per maggiori informazioni visita la nostra pagina di [Installazione](/docs/get-started/installation).

Questa sezione descrive in dettaglio i parametri che possono essere utilizzati durante il processo di installazione per automatizzare o ottimizzare la procedura.

| OPZIONE | DESCRIZIONE |
|----------|--------------|
| `checksum` | Aggiorna il codice di verifica (checksum) di tutti i file del pacchetto installato. |
| `force` | Forza la sostituzione di tutti i file, anche se esistono modifiche locali. |
| `graal=true/false` | Definisce l'uso di GraalVM per ottenere prestazioni migliori nell'esecuzione delle applicazioni. |
| `path=[Cartella]`| Definisce manualmente il percorso (cartella) in cui verrà installato Netuno. |
| `remove` | Rimuove completamente tutti i file relativi a Netuno dal sistema. |
| `version=[versione]`| Seleziona una versione specifica da installare. Usa latest per la versione di sviluppo. |
| `yes`| Risponde automaticamente "SÌ" a tutte le conferme, ignorando gli avvisi sulla perdita di dati. |

#### Esempio di come aggiornare il checksum:

```shell
./netuno install checksum
```

#### Esempio di come forzare tutte le modifiche locali:

```shell
./netuno install force
```

#### Esempio di come disattivare GraalVM: 

```shell
./netuno install graal=false
```

> Per impostazione predefinita, GraalVM è attiva e viene scaricata automaticamente durante l'installazione di Netuno.

#### Esempio di come definire il percorso di installazione:

```shell
./netuno install path ='cartellaNetuno'
```
#### Esempio di come rimuovere tutte le cartelle di Netuno:

```shell
./netuno install remove
```

#### Esempio di come selezionare la versione di Netuno da installare:

```shell
./netuno install version='latest'
```

##### Esempio di come rispondere SÌ a tutte le domande: 
```shell
./netuno install yes 
```

## Server

Dopo aver completato l'installazione, avvia il server per iniziare a sviluppare le tue applicazioni.

Per avviare il server con le configurazioni predefinite, esegui il comando seguente nella cartella radice di Netuno:

```shell
./netuno server
```

> Per impostazione predefinita, il server utilizza la porta 9000. Non appena il terminale indica che il sistema è pronto, potrai accedere al pannello di gestione tramite il link: http://localhost:9000/

Questa sezione descrive in dettaglio i parametri che possono essere utilizzati durante il processo di avvio del server.

OPZIONE | DESCRIZIONE |
|----------|--------------|
| `app=[nome_app]` | Specifica quale applicazione deve essere avviata |
| `host=[IP/nome_host]` | Consente di modificare il nome host di Netuno |
| `launch=true/false` | Definisce se Netuno deve aprire automaticamente il browser |
| `npm` | Esegue automaticamente il comando 'npm watch' per compilare il frontend dell'app in tempo reale |
| `port=[numero]` | Definisce la porta di avvio del server |
| `secret=[password]` | Definisce una password di sicurezza per consentire l'accesso alla gestione remota del server |
| `web=[cartella]` | Modifica la cartella radice del progetto (web home) predefinita |

Per impostazione predefinita, Netuno utilizza la cartella **'webapp'** per archiviare tutti i file essenziali al suo funzionamento.

**Attenzione quando si modifica la directory:** Se utilizzi il parametro web=[cartella] per cambiare il nome della cartella radice, ricorda che devi anche rinominare fisicamente la cartella nel tuo file system. Il comando indica solo al codice di Netuno dove cercare i file, non rinomina automaticamente le cartelle.

#### Esempio di come avviare il server di un'applicazione specifica:

```shell
./netuno server app=miaapp
```

#### Esempio di come cambiare il nome host:

```shell
./netuno server host=localhost
```

#### Esempio di come definire se Netuno avvia automaticamente il browser:

```shell
./netuno server launch=false
```

> Per impostazione predefinita, Netuno apre il browser e avvia il link http://localhost:9000.

#### Esempio di come eseguire npm per compilare automaticamente il frontend

```shell
./netuno server npm
```

#### Esempio di come cambiare la porta:

```shell
./netuno server port=10000
```

#### Esempio di come definire una password per accedere alla gestione remota del server:

```shell
./netuno server secret='p#ssw@rd'
```

#### Esempio di come modificare la cartella web predefinita:

```shell
./netuno server web=webapp
```

## Licenza

Per iniziare lo sviluppo con Netuno, è necessario registrare il tuo ambiente.

Per gestire la tua licenza, utilizza il comando base:

```shell
./netuno license
```

> Attualmente, Netuno offre tre modalità di licenza: **Community, Standard e Enterprise**.

Questa sezione descrive in dettaglio le azioni disponibili per configurare o consultare la tua licenza.

| OPZIONE    | DESCRIZIONE    |
|----------|--------------|
| `create , change` | Avvia il processo per creare una nuova licenza o modificare quella attuale |
| `key` | Mostra la chiave di licenza attiva nel tuo ambiente |
| `mail=[tuo@mail.com]` | Definisce l'indirizzo e-mail associato all'account della licenza |
| `type=[community/standard/enterprise]`  | Definisce il tipo di licenza|


#### Esempio di come creare una licenza:

```shell
./netuno license create
```

#### Esempio di come visualizzare la chiave della licenza: 

```shell
./netuno license key
```
##### Esempio di come definire la tua e-mail e il tipo di licenza:

```shell
./netuno license mail='mario.rossi@example.com' type='community'
```

## Applicazione

Con il server configurato e la licenza attiva, puoi espandere il tuo ecosistema creando nuove soluzioni.

```shell
./netuno app
```

I file generati saranno organizzati automaticamente all'interno della struttura di cartelle di Netuno.

Per accedere o modificare i file della tua applicazione, naviga nel seguente percorso a partire dalla radice del sistema: **webapp / apps / [nome_della_tua_app]**

#### Struttura delle Cartelle

- **webapp**: È la cartella radice che contiene tutti i file essenziali per il funzionamento di Netuno.

- **apps**: Cartella specifica in cui sono archiviate tutte le applicazioni sviluppate o in dimostrazione.

- **[nome_della_tua_app]**: La cartella esclusiva dell'applicazione che hai appena creato.

Per impostazione predefinita, Netuno dispone di un'applicazione dimostrativa che viene mostrata all'avvio del server Netuno.

| OPZIONE    | DESCRIZIONE    |
|----------|--------------|
| `database=[nome_database]` | Definisce il nome del database |
| `engine=[nome]` | Definisce il tipo di database |
| `host=[indirizzo]` | Definisce l'indirizzo del database. |
| `language=[lingua]`  | Definisce la lingua dell'applicazione |
| `locale=[lingua]` | Definisce il locale dell'applicazione |
| `name=[nome]`  | Consente di creare un'applicazione o ricostruire un'applicazione esistente |
| `password=[password]`  | Definisce una password per il database |
| `port=[numero]`  | Definisce la porta del database |
| `username=[nome]`  | Definisce il nome utente del database |

#### Esempio di come definire il nome del database:

```shell
./netuno app database=dipendente
```

> Il nome del database può contenere numeri e lettere; se il nome ha più di una parola, deve essere separato da "_", nel modo seguente.
>
> **Esempio:** dipendente_db

#### Esempio di come definire il tipo di database:

```shell
./netuno app engine=pg
```
Esistono i seguenti tipi di database:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Esempio di come definire l'indirizzo del server del database:

```shell
./netuno app host=localhost
```

#### Esempio di come definire la lingua e il locale:

```shell
./netuno app language=pt_PT locale=pt_PT
```
Esistono le seguenti lingue:
> - Portoghese - pt_PT
> - Brasiliano - pt_BR
> - Inglese - en_US
> - Spagnolo - es_ES

#### Esempio di come creare un'applicazione o ricostruire un'applicazione esistente:

```shell
./netuno app name=demo
```

#### Esempio di come definire la password del database:

```shell
./netuno app password=segreta
```

#### Esempio di come definire la porta del database:

```shell
./netuno app port=5432
```
Per impostazione predefinita, le porte corrispondono a:  

> - PostgreSQL - **5432**
> - MariaDB - **3306**
> - Microsoft SQL Server - **1433**

#### Esempio di come definire il nome utente del database:

```shell
./netuno username=root
```