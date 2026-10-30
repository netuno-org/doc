---
id: db-query-execute
title: Query ed Execute - Comandi diretti sul database
sidebar_label: Query ed Execute
---

## Prima di iniziare

Per poter comprendere questo tutorial nel modo più efficace possibile, consigliamo di assicurarti di avere nozioni di base di _**JavaScript, SQL**_ e di saper creare servizi in Netuno.

Se non sai come creare servizi, consulta [Servizi Web REST](/docs/academy/server/services/rest).

## Creazione di Query

Netuno include funzioni dedicate alla creazione di query al database; in questo tutorial presenteremo e descriveremo brevemente l'effetto di ciascuna e anche le buone pratiche per ottenere il miglior risultato.

### _db.query('SELECT * FROM ...')

Questa funzione permette di restituire i dati di una query.

```javascript
_out.json(
  _db.query('SELECT * FROM tabella_nome')
)
```

> Nota che la funzione _out.json() serve a consentire la visualizzazione dei dati del servizio sullo schermo quando lo si chiama nel browser

Questa funzione permette anche di accettare argomenti, che vengono passati direttamente tramite la chiamata al servizio; ad esempio, immaginiamo di avere il servizio _seleziona-tutti.js_, la chiamata allo stesso sarà effettuata tramite _**http://localhost:9000/services/seleziona-tutti.netuno**_ dove gli argomenti da passare si inseriscono dopo la chiamata, dopo un punto interrogativo:

```
http://localhost:9000/services/seleziona-tutti.netuno?argomento1=1&argomento2=nome
```

> Nota che per inviare più argomenti basta separarli con una 'e' commerciale (&)

### Query con parametri

E infine basta dichiarare questa variabile nella query come segue:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM tabella_nome WHERE id = ? AND nome = ?', 
        _req.getInt("argomento1"), _req.getString("argomento2")
    )
)
```

> Al posto dei '?' (punti interrogativi) verrà iniettato il parametro corrispondente in base al suo ordine.

## Query con parametri e tipi di PostgreSQL e H2DataBase

Tuttavia H2Database e PostgreSQL supportano una semplice sintassi di conversione, e così possiamo assegnare tipi ai parametri come segue:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM tabella_nome WHERE id = ?::int AND nome = ?::varchar', 
    _req.getInt("id"), _req.getString("nome")
  )
)
```

## Tipi di parametri di H2Database e PostgreSQL

Come avrai potuto notare in precedenza, quando si desidera eseguire una query con argomenti è necessario definire il tipo degli stessi. Segue ora un elenco con tutti i tipi di variabili e il tipo più adatto per ciascuno:

* Adatto per parametri di numeri interi:
    * **?::int**
* Adatto per parametri di numeri decimali:
    * **?::float**
 * Adatto per parametri di identificatore univoco globale/universale, più noti come guid o uuid:
    * **?::uuid**
 * Adatto per parametri di testo generico, stringhe:
    * **?::varchar**
    * **?::text**
 * Adatto per parametri di tipo data:
    * **?::date**
 * Adatto per parametri di tipo ora:
    *  **?::time**
 * Adatto per parametri con data e ora:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Questa funzione permette di eseguire un comando sul database, come update, insert e delete.

Restituisce il numero di record interessati dal comando eseguito.

```javascript
// Esempio di Insert:
const nRecordInseriti = _db.execute(
    "INSERT INTO tabella_nome(id, attivo, nome) " + 
    "VALUES(nextval('tabella_nome_id'), ?::int, ?::varchar)", 
    1, nome
)

// Esempio di Update:
const nRecordAggiornati = _db.execute(
    "UPDATE tabella_nome SET nome = ?::varchar WHERE id = ?::int",
    _req.getString("nome"), _req.getInt("id")
)

// Esempio di Delete:
const nRecordEliminati = _db.execute(
    "DELETE FROM tabella_nome WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Nota:** Quando si esegue un insert, verificare che il campo attivo sia uguale a 1, altrimenti non apparirà nel risultato. 

## Esempio di interazione con i dati

Presentiamo ora alcune norme consigliate per ottenere i migliori risultati possibili.

## Query First

Di seguito vediamo come ottenere la prima riga della query; sarà nullo se non è stata ottenuta alcuna riga.

```javascript
// Selezionare i dati:
const dbRisultato = _db.queryFirst(
    'SELECT nome FROM tabella_nome WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbRisultato) {
    // Codice di stato HTTP:
    _header.status(404)
    // Indicazione dell'errore:
    _out.json(
        _val.map()
            .set('error', 'id-non-trovato')
    )
    // Termina l'esecuzione del servizio:
    _exec.stop()
}
```

## Validare la quantità di record

Quando si esegue una selezione sul database in cui il risultato è unico, per accedere ai dati conviene procedere **nel modo seguente**:

Nota che questo è solo un semplice esempio che garantisce che venga restituito almeno 1 risultato ed evita l'errore nel caso non ci sia alcun risultato.

```javascript
// Selezione dei dati:
var dbRisultati = _db.query(
  'SELECT nome FROM tabella_nome WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let nome = null;
// Garantisce che esistano dati, e può essere utilizzato il 
// simbolo maggiore (risultato.length > 1) nel caso 
// ci sia più di un record:
if (dbRisultati.size() >= 1) {
  // Per accedere direttamente al valore del nome basta:
  nome = dbRisultati.get(0).getString('nome');
}
```

## Iterazione dei record in un ciclo

Se il risultato della selezione è costituito da **più risultati**, puoi interagire con il ciclo 'for' per ottenere i dati come segue:

```javascript
// Eseguire la query
const dbRisultati = _db.query('SELECT id, nome FROM tabella_nome');

// Inizializzare la variabile affinché possa ricevere valori
const elementi = _val.init();

// Iterazione su tutti i risultati per ricevere ogni valore separato
for (const dbRisultato of dbRisultati) {
    elementi.push(
        _val.map()
            .set("uid", dbRisultato.getString("uid"))
            .set("nome", dbRisultato.getString("nome"))
    );
}

// Invia nell'output la nuova lista di dati:
_out.json(elementi);
```

Se hai qualche domanda non esitare a contattarci, consulta le indicazioni nel footer di questo sito web.

Buon sviluppo!