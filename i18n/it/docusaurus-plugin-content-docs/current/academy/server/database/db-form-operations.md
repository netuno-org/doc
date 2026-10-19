---
id: db-form-operations
title: Form e le Operazioni di Base del Database
sidebar_label: DB Form
---

## Prima di Iniziare

Prima di procedere assicurati di avere nozioni di SQL e di relazioni tra tabelle come "uno a molti" e "molti a uno".

Inoltre, è necessaria una conoscenza preliminare dei `Form` di Netuno e di come sono organizzati per riuscire a sfruttare al massimo il DB Form.

## Introduzione

Nello sviluppo software spesso dobbiamo recuperare informazioni da un database e farlo usando SQL puro rende le cose macchinose e stressanti. La Query trasforma la costruzione di query SQL in un'esperienza intuitiva e priva di stress. Con essa puoi creare query potenti usando metodi intuitivi che astraggono la complessità dell'SQL grezzo, offrendo un approccio allo sviluppo di query che si allinea al tuo flusso di pensiero.

## Come Funziona

Al cuore del DB Form c'è la capacità di strutturare comandi SQL utilizzando oggetti e metodi. Invece di scrivere i comandi SQL direttamente, il DB Form ti permette di usare un meccanismo orientato agli oggetti per definire query e operazioni in modo programmatico.

Ogni query o operazione sul database è rappresentata come un oggetto.

Crei istanze di classi di query che incapsulano diverse parti dell'SQL, come selezione, filtro, raggruppamento, ecc. Ed esegui anche le operazioni di eliminazione, inserimento e aggiornamento dei record.

## Inizializzazione

Tutto inizia con l'inizializzazione del DB Form, che deve sapere quale sarà il nome del form base o principale da utilizzare, ovvero i form in Netuno rappresentano sempre tabelle nel database, quindi equivale a dire qual è la tabella base o la tabella principale.

In questo esempio iniziamo il DB Form a partire dal form/tabella `persone`:

```javascript
const dbFormPersone = _db.form("persone")
```

Con il DB Form inizializzato possiamo eseguire query o operazioni.

## Query Semplice

Il DB Form fornisce due metodi molto comuni per ottenere dati, oltre alla paginazione e ai risultati distinti, sono:

- `all` - Tutti i record come lista.
- `first` - Ottiene solo il primo record.

Vedi gli esempi seguenti.

Per ottenere tutte le persone:

```javascript
const dbPersone = _db.form("persone")
    .all()
```

Per ottenere solo una persona:

```javascript
const dbPersona = _db.form("persone")
    .first()
```

## Filtri e Condizioni

Con `where` possiamo filtrare i dati che rispettano determinate condizioni.

Vedi alcuni esempi:

```js
const dbPersona = _db.form("persone")
    .where(_db.where("persone_user_id").equals(_user.id))
    .first()
```

```js
const dbPersone = _db.form("persone")
    .where(
        _db.where("tipo").in(_val.list().add("cliente").add("amministratore"))
            .and("email").notEqual(null)
    ).all()
```

## Confronti Where

Il `_db.where` fornisce l'oggetto [Where](/docs/library/objects/Where) che supporta le seguenti operazioni di confronto:

Confronti con gli operatori numerici e testuali:

-  `equal(...)` o `equals(...)` - Verifica l'uguaglianza, è `=`.
-  `notEqual(...)` o `notEquals(...)` - Se è diverso dal valore passato, è `<>`.
-  `greaterThan(...)` - Se è maggiore del valore passato, è `>`.
-  `lessThan(...)` - Se è minore del valore passato, è `<`.
-  `greaterOrEqualsThan(...)` - Se è maggiore o uguale al valore passato, è `>=`.
-  `lessOrEqualsThan(...)` - Se è minore o uguale al valore passato, è `<=`.

Condizioni di testo con l'operatore `LIKE`:

-  `startsWith('testo')` - Se inizia con il determinato prefisso, è `LIKE '...%'`.
-  `endsWith('testo')` - Se termina con il determinato suffisso, è `LIKE '%...'`.
-  `contains('testo')` - Se contiene il termine, è `LIKE '%...%'`.

Condizioni con liste con l'operatore `IN`:

-  `in(_val.list()...)` - Se è uguale a uno dei valori della lista, è la condizione `IN (...)`.
-  `notIn(_val.list()...)` - Se non è uguale a nessuno dei valori della lista, è la condizione `NOT IN (...)`.

## Esempi Pratici di Query

Il `DB Form` è accessibile dalla risorsa `_db.form('form')`; una volta invocato hai in mano la query base che può essere configurata usando i metodi e gli oggetti disponibili nello stesso.

### Molti a Uno e Risultati Distinti

```javascript
const query = _db.form('persone')
    .where(
        _db.where('nome').startsWith('jail')
        .and(
             _db.where('email').contains('jai')
             .or('email').endsWith('com')
         )
    )
    .link('lavoro', _db.where('codice').equal('responsabile'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'persone_user_id',  
            _db.where('mail').startsWith('jai')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('persone')
            )
        )
    )
    .get("persone.nome", "persone_nome")
    .get("persone.attivo", "persone_attivo")
    .get("persone.uid", "persone_uid")
    .debug(true)
    .distinct(true)

const risultati = query.all();
```

Nell'esempio sopra eseguiamo una query sulla tabella `persone` mettendola in relazione con altre due tabelle, `lavoro` e `netuno_user`, dove `lavoro` è correlata tramite il metodo `link` e `netuno_user` tramite il `join`. È possibile osservare che `link` è molto più semplificato rispetto a `join`: questo perché `link` riutilizza la relazione del `Form` di Netuno per mappare la relazione, mentre `join` utilizza solo le informazioni fornite nel metodo. Si possono anche notare gli altri metodi e oggetti utilizzati, come:

- `where` : Oggetto fornito per costruire condizioni per una tabella.
- `link` : Metodo che mette in relazione la tabella principale con un'altra tabella usando i criteri del `Form` di Netuno.
- `join` : Metodo che riceve un oggetto di relazione tra tabelle.
- `get` : Metodo che definisce quali campi saranno restituiti nella query.
- `manyToOne` : Oggetto che definisce il tipo di relazione tra tabelle, in questo caso una relazione di tipo `Many To One`.
- `debug` : Metodo che determina se la query costruita verrà stampata nella console.
- `distinct` : Metodo che determina se il comando `DISTINCT` sarà applicato alla query.
- `all` : Metodo che esegue la query e restituisce i risultati sotto forma di lista.

> Il metodo `link` deve essere usato solo quando le tabelle hanno già una relazione tramite il `Form` di Netuno.

### Primo Record con Relazione e Ordinamento

```javascript
const query = _db.form('persone')
    .where(
        _db.where('nome').startsWith('jail')
        .and('email').in(
            _val.list().add('primo@mail.com').add('secondo@mail.com'))
    )
    .link('lavoro')
    .get("persone.nome", "persone_nome")
    .get("persone.attivo", "persone_attivo")
    .get("lavoro.codice", "lavoro_codice")
    .order('persone.eta', 'desc')
    .debug(true)

const primoRisultato = query.first();
```
Alla fine dell'esempio sopra invochiamo il metodo `first()`; questo restituisce la prima occorrenza trovata nell'esecuzione della query e, se non ne trova nessuna, restituisce `null`.

### Paginazione

```javascript
const query = _db.form('persone')
    .link(
        'lavoro', 
        _db.link('attivita')
    )
    .get("persone.nome", "persone_nome")
    .get("persone.attivo", "persone_attivo")
    .get("lavoro.codice", "lavoro_codice")
    .group("persone.id")
    .debug(true)

const pagina = query.page(_db.pagination(1, 10));
```

> Il numero della pagina nell'oggetto Pagination inizia da 1, quindi l'esempio sopra equivale a: `offset = 0` e `limit = 10`.

Alla fine dell'esempio sopra invochiamo il metodo `page()` passando come parametro l'oggetto `pagination`, che contiene le preferenze di paginazione. Questo restituirà un oggetto pagina con gli attributi equivalenti, ad esempio:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"lavoro_codice": "tirocinante",
			"persone_attivo": true,
			"persone_nome": "Junior Freitas"
		},
		{
			"lavoro_codice": "responsabile",
			"persone_attivo": true,
			"persone_nome": "Caio Andrade"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Inserire Record

Per inserire dati nel database utilizziamo il metodo `insert`, ad esempio:

```javascript
const dbPersonaInserita = _db.form("persone")
    .set("nome", "Caio Andrade")
    .set("email", "caio@mail.com")
    .insert();
```

Con il risultato di `insert` possiamo ottenere l'id del record inserito nel database.

Quindi, in `dbPersonaInserita` si ottiene l'`id` del record inserito nel modo seguente:

```javascript
_log.info("ID Persona Inserita: "+ dbPersonaInserita.getInt('id'))
```

## Modificare Record

Tramite l'oggetto DB Form puoi aggiornare i record della query in modo semplice e intuitivo.

```javascript
_db.form('persone')
    .link(
        'lavoro',
        _db.where('codice').equal('tirocinante')
    )
    .set("nome", "nuovo nome")
    .set("email", "mianuovaemail@mail.com")
    .update();
```

> `Importante`. Il metodo `update()` aggiornerà tutte le occorrenze della query, quindi presta attenzione quando lo utilizzi.

> Inoltre puoi usare altri metodi combinati come `order()` e `limit()` per migliorare le tue query.

## Eliminare Record

Il DB Form permette anche di eliminare in modo semplice i record restituiti dalla query.

```javascript
_db.form('persone')
    .link(
        'lavoro',
        _db.where('codice').equal('tirocinante')
    )
    .delete();
```

> `Importante`. Il metodo `delete()` eliminerà tutte le occorrenze della query, quindi presta attenzione quando lo usi.

> Come per gli altri, è possibile combinare altri metodi come `order()` e `limit()` per migliorare i risultati.