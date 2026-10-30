---
id: services
title: Servizi
sidebar_label: Servizi
---

I servizi Web REST in Netuno sono script JavaScript eseguiti sul server (back-end) che permettono di interagire direttamente con il database dell'applicazione. Attraverso di essi è possibile:

* Leggere dati dal database
* Inserire nuovi record
* Aggiornare dati esistenti
* Rimuovere dati
* Eseguire logiche complesse che coinvolgono calcoli o elaborazione dati.
* Integrarsi con sistemi esterni.

Ogni servizio è accessibile tramite un URL (endpoint), il che permette alle interfacce web (front-end), alle applicazioni mobile o ad altri sistemi esterni di consumare i dati della tua applicazione in modo sicuro e standardizzato.

#### Prerequisiti

* Avere nozioni di base di _**JavaScript, React.js**_ e _**HTML**_.
* Familiarità con SQL e con la struttura delle cartelle di un'applicazione.
* È consigliabile avere conoscenze di base su **Moduli**, **Campi** e **Relazioni**.

In caso di dubbi su queste fasi, consulta:

* [Moduli](/docs/academy/ui/forms)
* [Campi](/docs/academy/ui/fields)
* [Relazioni tra moduli](/docs/academy/ui/relationships-between-forms)



## Primi passi

Utilizzeremo un'applicazione per la registrazione delle ore di lavoro, il cui obiettivo è calcolare il totale delle ore svolte da ogni lavoratore.

**Struttura dell'applicazione:**

![struttura-applicazione-it.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
Il campo **id** viene creato e gestito automaticamente da Netuno in tutte le tabelle, non è necessario definirlo manualmente.
:::

I servizi di un'applicazione Netuno si trovano nella cartella **server/services/**.

#### Struttura delle cartelle

```text
mia-app/
└── server/
    └── services/
        ├── lavoratori.js   ← file di servizio
        └──... 
```

## Creare servizio

Dentro la cartella **server/services/**, crea un nuovo file che definirà l'URL del tuo servizio. Per questo esempio, assegna al file il nome `lavoratori.js`.

:::tip
- Usa solo lettere **minuscole**.
- Se il nome è composto, separa le parole con il **trattino (-)**.
- Esempi: **lavoratori.js**, **rapporto-ore.js**, **registrazione-entrate.js**.
::: 


## Consultare il database

Netuno mette a disposizione l'oggetto globale **_db** per interagire nativamente con il database.

Per eseguire una query SQL, utilizziamo il metodo `_db.query()`.


```javascript
// Esegue una query SQL che raggruppa il totale delle ore per lavoratore
const dbRegistrazioni = _db.query(`
    SELECT DISTINCT
        lavoratore.nome, SUM(DATEDIFF(HOUR, registrazione.inizio, registrazione.fine)) AS totale
    FROM lavoratore INNER JOIN registrazione
        ON lavoratore.id = registrazione.lavoratore_id
    WHERE lavoratore.attivo = true AND registrazione.attivo = true
    GROUP BY lavoratore.nome
    ORDER BY totale ASC
`);
```

:::note Capire la query SQL

* **INNER JOIN**: Unisce le tabelle lavoratore e registrazione usando la chiave esterna lavoratore_id.

* **DATEDIFF(HOUR, inizio, fine)**: Calcola la differenza in ore tra l'entrata e l'uscita.

* **SUM(...) AS totale**: Somma tutte le ore elaborate di ogni lavoratore.

* **WHERE ... attivo = true**: Filtra la ricerca per considerare solo i lavoratori e le registrazioni non eliminati (attivi).

* **GROUP BY lavoratore.nome**: Raggruppa le somme per il nome di ogni lavoratore.

* **ORDER BY totale ASC**: Ordina il risultato finale dal minor numero di ore lavorate al maggiore.
:::

## Elaborare i dati

Il metodo `_db.query()` restituisce i dati in un formato interno di Netuno.

Per inviare una risposta pulita in formato JSON, è necessario trasformare questi dati utilizzando gli oggetti globali **_val.list()** (per gli array) e **_val.map()** (per gli oggetti).

```javascript
// Crea una lista vuota per memorizzare i dati elaborati
const lista = _val.list();

// Itera su ogni registrazione restituita dalla query SQL
for (const dbRegistrazione of dbRegistrazioni) {
    lista.add(
        _val.map()
            .set("nome", dbRegistrazione.getString("nome"))   // Estrae il nome come testo
            .set("totale", dbRegistrazione.getInt("totale"))    // Estrae il totale come numero intero
    );
}
```
### Metodi utilizzati

| Risorsa | Descrizione |
|---------|-----------|
| **_val.list()** | Crea una lista (equivalente a un Array in JS). |
| **_val.map()** | Crea un oggetto chiave-valore (equivalente a un Object o JSON). |
| **.add(...)** | Aggiunge un nuovo elemento in fondo alla lista. |
| **.set("chiave", valore)** | Definisce una nuova proprietà e il relativo valore nella mappa. |
| **.getString("colonna")** | Estrae il valore della colonna specificata formattato come testo (String). |
| **.getInt("colonna")** | Estrae il valore della colonna specificata formattato come numero intero (Integer). |

## Restituzione dei dati

Si utilizza l'oggetto **_out** per inviare la lista elaborata al client in formato JSON.

```javascript
// Invia la lista come risposta HTTP in formato JSON
_out.json(lista);
```

## Esempio pratico

In questa fase finale, consolidiamo tutti i concetti appresi per creare un servizio funzionante.

Il codice completo qui sotto esegue una query al database per calcolare il totale delle ore lavorate e restituisce questi dati formattati in JSON.

```javascript
// 1. Esegue la query sul totale delle ore svolte da ogni lavoratore attivo
const dbRegistrazioni = _db.query(`
    SELECT DISTINCT
        lavoratore.nome, SUM(DATEDIFF(HOUR, registrazione.inizio, registrazione.fine)) AS totale
    FROM lavoratore INNER JOIN registrazione
        ON lavoratore.id = registrazione.lavoratore_id
    WHERE lavoratore.attivo = true AND registrazione.attivo = true
    GROUP BY lavoratore.nome
    ORDER BY totale ASC
`);

// 2. Crea la struttura dati per la risposta
const lista = _val.list();

// 3. Elabora e mappa i risultati
for (const dbRegistrazione of dbRegistrazioni) {
    lista.add(
        _val.map()
            .set("nome", dbRegistrazione.getString("nome"))
            .set("totale", dbRegistrazione.getInt("totale"))
    );
}

// 4. Restituisce i dati in formato JSON
_out.json(lista);
```

### Accedere al servizio

Dopo aver creato e configurato il tuo servizio in Netuno, sarà pronto per essere utilizzato e testato direttamente dal browser o integrato in altre applicazioni.

#### Modalità di accesso

Il servizio può essere utilizzato tramite:

- **Browser:** Per test rapidi di metodi GET.

- **Client HTTP:** Strumenti come Postman, Insomnia o Thunder Client.

- **Front-end:** Tramite richieste fetch o librerie come Axios.

#### Struttura dell'URL

Per impostazione predefinita, Netuno mappa automaticamente i file creati nella cartella dei servizi su indirizzi web.

Se stai eseguendo localmente sulla porta predefinita, l'indirizzo seguirà questo modello:

http://localhost:9000/services/lavoratori



:::info Come funziona il routing?
Netuno utilizza un sistema di routing automatico basato sul file system:

**Cartella di origine:** Tutti i file all'interno di server/services/ diventano rotte.

**Mappatura:** Il file **lavoratori.js** viene convertito nell'endpoint **/services/lavoratori**.

**Estensioni:** Nota che l'estensione **.js** è omessa nell'URL. Facoltativamente, si può utilizzare il suffisso **.netuno** (es: /services/lavoratori.netuno), ma l'accesso senza estensione è lo standard consigliato perché più pulito.
:::

**Esempio di risposta HTTP:**
Se nel tuo database esistono dati compatibili, la risposta restituita dal server sarà simile a questa:

```json
[
    {
        "nome": "Eleonora Rossi",
        "totale": 40
    },
    {
        "nome": "Carlo Bianchi",
        "totale": 35
    },
    {
        "nome": "Maria Ferrari",
        "totale": 45
    }
]
```

## Oggetti globali di sistema

Durante lo sviluppo di servizi in Netuno, utilizzeremo spesso oggetti nativi che facilitano la comunicazione con il database, il controllo delle richieste e l'output delle informazioni.

Questi oggetti sono istanze preconfigurate e pronte all'uso nei tuoi script server **(file .js)**. Eliminano la necessità di importare librerie esterne per attività fondamentali come query SQL o lettura di parametri.

| Oggetto | Descrizione |
|--------|-----------|
| **_db**| Eseguire operazioni di database (query, insert, update, delete). |
| **_val** | Creazione e manipolazione di strutture dati (list, map). |
| **_out** | Invio di risposte all'utente (JSON, HTML...). |
| **_req** | Accesso ai parametri inviati nella richiesta dell'utente (GET, POST). |
| **_log**| Registrazione di messaggi di errore o debug nella console del server.|



In caso di difficoltà o suggerimenti di miglioramento, contattaci.

Il nostro team e la nostra community sono pronti ad aiutarti.

Buon sviluppo!