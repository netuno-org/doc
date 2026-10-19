---
id: hikaricp-database-connection-pool
title: HikariCP - Pool di connessioni al database
sidebar_label: Pool di connessioni DB
---

## Che cos'è

La creazione di nuove connessioni al database richiede una certa elaborazione, soprattutto quando è presente l'autenticazione.

Per questo motivo, per ottenere un maggiore guadagno in termini di prestazioni, conviene riutilizzare le connessioni e non aprire costantemente una nuova connessione.

Per risolvere questo problema si utilizza un pool di connessioni, che fa sì che quando una connessione viene scartata non venga realmente chiusa e distrutta; la connessione viene quindi messa in attesa per essere riutilizzata quando serve una nuova connessione.

Questo apporta grandi vantaggi in termini di prestazioni e consente anche molti più parametri di configurazione, incluso il più noto, ovvero limitare il numero massimo di connessioni per evitare sovraccarichi nel database.

## HikariCP

Hikari significa luce in giapponese; è il più efficiente e ampiamente utilizzato nelle applicazioni Java, ed è famoso per avere di gran lunga le migliori prestazioni.

Il repository ufficiale di HikariCP può essere trovato qui su [GitHub](https://github.com/brettwooldridge/HikariCP); consulta i grafici delle prestazioni e le informazioni sulle configurazioni.

Netuno utilizza HikariCP per gestire le connessioni a PostgreSQL, MariaDB, Microsoft SQL Server e Oracle.

## Configurazione

La configurazione di HikariCP in Netuno viene effettuata insieme alla configurazione del database nelle applicazioni.

Ovvero, all'interno dell'applicazione nella cartella `config` nella configurazione dell'ambiente, come:

- \_development.json
- \_production.json

Nella sezione "db" sono contenute le configurazioni del database.

Sia per la connessione predefinita sia per qualsiasi altra, è possibile effettuare la configurazione dei parametri di HikariCP allo stesso modo.

Quindi, all'interno della voce default, dove sono presenti host, port, name (database), username e password, è sufficiente aggiungere altri parametri di HikariCP come:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "mio_database",
            "username": "mio_utente",
            "password": "segreta",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

Ad esempio, ciascuna di queste configurazioni extra di HikariCP sopra riportate serve a:

* `maximumPoolSize` definisce la dimensione massima delle connessioni in HikariCP; in questo esempio il limite di connessioni sarà 25.
* `minimumIdle` definisce il numero minimo di connessioni in attesa nella coda per essere utilizzate.
* `idleTimeout` è il tempo che la connessione può rimanere in attesa.
* `maxLifetime` è il tempo massimo di vita della connessione.

> Le configurazioni di HikariCP devono essere coerenti con la configurazione del motore del database.
> Ad esempio, il numero massimo di connessioni e i tempi limite non devono mai superare quanto definito nel motore del database.

Qualsiasi altro parametro di HikariCP può essere configurato allo stesso modo; è sufficiente aggiungere i parametri di configurazione desiderati.

## Parametri

Di seguito è contenuto l'elenco dei parametri che Netuno consente di configurare per HikariCP.

Qualsiasi altro parametro di configurazione di HikariCP o è predefinito automaticamente da Netuno oppure non è applicabile.

### Utilizzati frequentemente

##### autoCommit

Questa proprietà controlla il comportamento di conferma automatica predefinito delle connessioni restituite dal pool.
È un valore booleano.

Predefinito: `true`

##### connectionTimeout

Questa proprietà controlla il numero massimo in millisecondi che un client (che sei tu) attenderà per una connessione dal pool. Se questo tempo viene superato senza che una connessione sia disponibile, verrà lanciata una SQLException. Il timeout di connessione più basso accettabile è di 250 ms.

Predefinito: `30000 (30 secondi)`

##### idleTimeout

Questa proprietà controlla la quantità massima di tempo per cui a una connessione è consentito rimanere inattiva nel pool. **Questa impostazione si applica solo quando `minimumIdle` è impostato a un valore inferiore a `maximumPoolSize`.** Le connessioni inattive non vengono rimosse quando il pool raggiunge le connessioni `minimumIdle`. Se una connessione viene rimossa come inattiva o meno, è soggetta a una variazione massima di +30 secondi e a una variazione media di +15 secondi. Una connessione non verrà mai ritirata come inattiva prima di questo timeout. Un valore di 0 significa che le connessioni inattive non vengono mai rimosse dal pool. Il valore minimo consentito è 10000 ms (10 secondi).

Predefinito: `600000 (10 minuti)`

##### maxLifetime

Questa proprietà controlla la durata di vita massima di una connessione nel pool. Una connessione in uso non verrà mai ritirata; solo quando è chiusa verrà quindi rimossa. Su base connessione per connessione, viene applicata un'attenuazione negativa minore per evitare la rimozione di massa nel pool. **Consigliamo vivamente di impostare questo valore, e deve essere alcuni secondi più breve di qualsiasi timeout di connessione imposto da un database o da un'infrastruttura.** Un valore di 0 indica una durata massima (durata infinita), soggetta evidentemente all'impostazione di `idleTimeout`. Il valore minimo consentito è 30000 ms (30 secondi).

Predefinito: `1800000 (30 minuti)`

##### minimumIdle

Questa proprietà controlla il numero minimo di connessioni inattive che HikariCP cerca di mantenere nel pool. Se le connessioni inattive scendono al di sotto di questo valore e il totale delle connessioni nel pool è inferiore alla dimensione `maximumPoolSize`, HikariCP fa del suo meglio per aggiungere connessioni aggiuntive in modo rapido ed efficiente. Tuttavia, per prestazioni massime e capacità di risposta alle esigenze di picco, consigliamo di non impostare questo valore e, invece, di consentire a HikariCP di agire come un pool di connessioni di dimensione fissa.

Predefinito: uguale alla dimensione `maximumPoolSize`

##### maximumPoolSize

Questa proprietà controlla la dimensione massima che il pool può raggiungere, includendo sia le connessioni inattive sia quelle in uso. Fondamentalmente, questo valore determinerà il numero massimo di connessioni reali al backend del database. Un valore ragionevole è determinato meglio dal tuo ambiente di esecuzione. Quando il pool raggiunge questa dimensione e non sono disponibili connessioni inattive, le chiamate a getConnection() verranno bloccate fino a `connectionTimeout` millisecondi prima del timeout.

Predefinito: `10`

### Poco utilizzati

##### initializationFailTimeout

Questa proprietà controlla se il pool "fallirà rapidamente" se il pool non può essere inizializzato correttamente con una connessione iniziale. Qualsiasi numero positivo è considerato il numero di millisecondi per tentare di acquisire una connessione iniziale; il thread dell'applicazione verrà bloccato durante questo periodo. Se non è possibile acquisire una connessione prima di questo intervallo di tempo, verrà lanciata un'eccezione. Questo timeout viene applicato dopo il periodo di `connectionTimeout`. Se il valore è zero (0), HikariCP tenterà di ottenere e validare una connessione. Se viene ottenuta una connessione ma la validazione fallisce, verrà lanciata un'eccezione e il pool non verrà avviato. Tuttavia, se non è possibile ottenere una connessione, il pool verrà avviato, ma i successivi tentativi di ottenere una connessione potrebbero fallire. Un valore inferiore a zero aggirerà qualsiasi tentativo iniziale di connessione e il pool verrà avviato immediatamente mentre tenta di ottenere connessioni in background. Di conseguenza, i successivi tentativi di ottenere una connessione potrebbero fallire.

Predefinito: `1`

##### catalog

Questa proprietà definisce il catalogo predefinito per i database che supportano il concetto di cataloghi. Se questa proprietà non è specificata, viene utilizzato il catalogo predefinito definito dal driver JDBC.

Predefinito: `predefinito del driver`

##### validationTimeout

Questa proprietà controlla il periodo massimo di tempo in cui una connessione verrà testata per verificarne la vitalità. Questo valore deve essere inferiore al tempo di `connectionTimeout`. Il timeout di validazione più basso accettabile è di 250 ms.

Predefinito: `5000`

##### leakDetectionThreshold

Questa proprietà controlla la quantità di tempo in cui una connessione può rimanere fuori dal pool prima che venga registrato un messaggio che indichi una possibile fuga di connessione. Un valore di 0 significa che il rilevamento delle fughe è disabilitato. Il valore più basso accettabile per abilitare il rilevamento delle fughe è 2000 (2 secondi).

Predefinito: `0`

##### schema

Questa proprietà definisce lo schema predefinito per i database che supportano il concetto di schemi. Se questa proprietà non è specificata, viene utilizzato lo schema predefinito definito dal driver JDBC.

Predefinito: `predefinito del driver`

### DataSource

È anche possibile aggiungere configurazioni al DataSource, ovvero configurazioni aggiuntive specifiche per il tipo di database utilizzato.

Per realizzare questa configurazione più avanzata è necessario aggiungere l'oggetto di configurazione `datasource` all'interno dell'oggetto di configurazione della connessione al database.

Ad esempio, così:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "mio_database",
            "username": "mio_utente",
            "password": "segreta",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Nota che il valore delle configurazioni dei parametri del DataSource è di tipo _string_; in ogni caso Netuno converte automaticamente sempre in _string_.

## Conclusione

Con l'utilizzo di HikariCP è possibile realizzare configurazioni avanzate per gestire il carico e il comportamento delle connessioni al database.

Potendo essere ottimizzato per gli scenari più diversi, garantendo prestazioni elevate.