---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Definizione dello schema dei servizi.

## Introduzione

OpenAPI è una specifica che standardizza i servizi offerti dalle API REST, aiuta a capire come i servizi sono definiti, come indirizzo, input e output.

Permette la generazione di un'interfaccia di test e la generazione automatica di client da integrare con altre tecnologie.

> Maggiori informazioni su <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Attivazione e Configurazione

Per attivare e configurare OpenAPI nella tua applicazione su Netuno è necessario modificare il file di configurazione dell'applicazione relativo all'ambiente che stai utilizzando, come:

- `📂 config/_development.json`
- `📂 config/_production.json`

Inserisci e regola i seguenti parametri:

```
...
    "openapi": {
        "host": "http://mia-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://mia-app.local.netu.no:9000/services",
                "description": "Sviluppo Locale"
            }
        ]
    },
...
```

Verifica che le configurazioni abbiano senso, nell'esempio sopra è per l'ambiente di _development_.

> In produzione, conviene utilizzare `https`.

### _openapi.json nei Servizi

Nella radice dei servizi, configura il file `_openapi.json`.

Il percorso completo all'interno dell'applicazione è:

- `📂 server/services/_openapi.json`

Il contenuto di questo file sarà come questo esempio:

```
{
  "info": {
    "title": "Mia Applicazione",
    "description": "REST API della Mia Applicazione, utilizzala con moderazione.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Adatta il titolo e la descrizione a ciò che ha senso nel tuo caso.

## Input

Configurando i file _schema_ degli input, permetti a Netuno di eseguire la validazione dei parametri ricevuti confrontandoli con le regole dello JSON Schema.

> Maggiori informazioni sullo <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

In caso di errore di validazione, viene impedita l'esecuzione del servizio e viene mostrato un errore nel `log` di Netuno; a chi consuma il servizio viene restituito il codice di stato HTTP **400** (_Bad Request_).

Per configurare le regole dei parametri di input è necessario creare un file con estensione `in.json` accanto al file di codice del servizio, il nome deve essere lo stesso.

- Il servizio `dettaglio.js` deve avere il file `dettaglio.in.json`.
- Il servizio `dettaglio.post.js` deve avere il file `dettaglio.post.in.json`.
- Il servizio `dettaglio/post.js` deve avere il file `dettaglio/post.in.json`.

Esempio di contenuto del `in.json`:

```
{
    "tags":[
      "servizi di prodotto"
    ],
    "summary": "Dettaglio del Prodotto",
    "description": "Vengono ottenuti tutti i campi di dettaglio del prodotto specificato.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno supporta alcuni tipi aggiuntivi che non sono supportati dallo JSON Schema, come `string-not-empty`, `array-not-empty`, `id` e `uid` (o `uuid` o anche `guid`).

> Maggiori informazioni su questa specifica in <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Output

Configurando i file _schema_ degli output, permetti a Netuno di eseguire la validazione dei parametri inviati confrontandoli con le regole dello JSON Schema.

> Maggiori informazioni sullo <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

In caso di errore di validazione l'output viene comunque inviato a chi consuma il servizio, ma i messaggi di errore di validazione vengono mostrati nel `log` di Netuno.

Per configurare le regole dei parametri di output è necessario creare un file con estensione `out.200.json` accanto al file di codice del servizio, il nome deve essere lo stesso del servizio.

Dove **200** è il codice di stato HTTP della risposta, per supportare più codici di stato HTTP basta aggiungere altri file JSON con un numero diverso.

Alcuni esempi:
- Il servizio `salva.js` deve avere il file `salva.out.200.json`.
- Il servizio `salva.post.js` deve avere il file `salva.post.out.200.json`.
- Il servizio `salva/post.js` deve avere il file `salva/post.out.200.json`.

Esempio di contenuto del `out.200.json`:

```
{
    "type": "object",
    "properties": {
      "risultato": {
        "type": "boolean"
      }
    },
    "required": [
      "risultato"
    ]
}
```

Netuno supporta alcuni tipi aggiuntivi che non sono supportati dallo JSON Schema, come `string-not-empty`, `array-not-empty`, `id` e `uid` (o `uuid` o anche `guid`).

> Maggiori informazioni su questa specifica in <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Importazione di Schema

Netuno supporta l'importazione di _schemi_, il che permette di riutilizzare parte dello _schema_ in più JSON.

> Importando _schemi_ si evita la ripetizione di codice.

Crea la cartella `_schema` nella radice della cartella dei servizi, in:

- `📂 server/services/_schema`

Ora nella configurazione del JSON è possibile importare _schemi_ con il parametro `_schema` nel JSON, per esempio:

```
{
    "summary": "Elimina Prodotti",
    "description": "Permette di eliminare definitivamente i prodotti.",
    "_schema": "get/solo-codice.in"
}
```

Questo significa che verrà importato il file `_schema/get/solo-codice.in.json` in cui si trova il parametro `_schema`.

## Specifica e Test

Per generare la specifica completa di tutti i servizi che supportano OpenAPI con JSON Schema, accedi per esempio:

- http://localhost:9000/services/_openapi

Verrà mostrato un JSON con tutta la specifica.

Per testare, copia tutto il JSON generato.

Apri l'Editor di Swagger: https://editor.swagger.io/

Elimina il contenuto presente a sinistra e incolla il JSON e rispondi sì alla domanda di conversione da JSON a YAML.

Con l'interfaccia generata a destra è possibile comprendere meglio tutti i servizi disponibili ed eseguire test.

Permette anche di generare automaticamente client per altre tecnologie.

## Programmaticamente

Nella cartella `_schema` possiamo utilizzare file `.js` che verranno eseguiti insieme alla generazione della definizione OpenAPI, ma anche nel processo di validazione di input e output dei servizi.

Attraverso la programmazione dello schema possiamo generare validazioni dinamiche, per esempio:
- Accettare solo un codice che esiste nel database.
- Con l'`UID` ottiene il record nel database e lo condivide con i servizi.
- Se è `POST` o `PUT` genera un tipo di schema diverso da quello generato nel caso di `DELETE`.

### Esempio con Elenco di Valori

Immagina di avere un servizio che riceve il codice di una determinata categoria.

Non possiamo ricevere qualsiasi valore come codice, perché potrebbe essere un valore che non corrisponde a un codice valido di categoria.

Quindi possiamo limitare i codici accettati solo a quelli registrati nel database.

Si crea lo schema in: `server/services/_schema/categoria/codici.js`

```javascript
const dbCategorie = _db.query("SELECT codice FROM categoria")

const listaCodici = _val.list()

for (const dbCategoria of dbCategorie) {
    listaCodici.add(dbCategoria.getString("codice"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listaCodici
    )
```

> Il `listaCodici` conterrà tutti i codici di categoria registrati nel database.

Nel servizio possiamo avere il seguente `JSON` che utilizza lo schema `categoria/codici`:

```json
{
  "summary": "Elenca i Prodotti nella Categoria",
  "description": "Ottiene tutti i prodotti associati a una determinata categoria.",
  "type": "object",
  "properties": {
    "categoria": {
      "type": "object",
      "properties": {
        "codice": {
          "_schema": "categoria/codici"
        }
      },
      "required": [
        "codice"
      ]
    }
  },
  "required": [
    "categoria"
  ]
}
```

In questo modo riusciamo a garantire che il servizio venga eseguito solo se il codice è valido.

### Esempio con Oggetto Globale

Immagina di avere diversi servizi che ricevono l'`UID` del cliente e in ogni servizio dobbiamo accedere al database per ottenere i dati del cliente correlati al suo `UID`.

Possiamo centralizzare questo in uno schema programmato che, tramite l'`UID` del cliente ricevuto, ottiene i dati del cliente dal database e li memorizza in un oggetto globale accessibile nel codice dei servizi.

Così i dati del cliente vengono sempre caricati globalmente e automaticamente quando riceviamo un `UID` di cliente.

Creiamo uno schema programmato in: `server/services/_schema/cliente.js`

```javascript
const cliente = _req.getValues('cliente', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbCliente = _db.get('cliente', cliente.getString("uid"))
    
    if (dbClient == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'cliente-non-trovato')
        )
        _service.cancel()
    }
    
    _val.global().set('cliente', dbCliente)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> Con `_service.isGeneratingOpenAPIDefinition()` possiamo verificare se è la generazione della definizione OpenAPI, altrimenti è l'esecuzione di una richiesta HTTP.
> 
> Se l'`UID` del cliente non viene trovato, restituisce 404 e interrompe l'esecuzione del servizio.
> 
> Nota che utilizziamo `_val.global()`, che permette di condividere dati globalmente tra tutti i file di codice eseguiti durante l'elaborazione della richiesta HTTP.

Nel seguito dell'esempio, abbiamo un servizio che elenca gli acquisti effettuati dal cliente.

Abbiamo la validazione di input per il servizio in: `server/services/cliente/acquisti/post.in.json`

```json
{
    "summary": "Elenco degli Acquisti",
    "description": "Elenca gli acquisti effettuati dal cliente.",
    "type": "object",
    "properties": {
        "cliente": {
            "_schema": "cliente"
        }
    },
    "required": [
        "cliente"
    ]
}
```

> Nota che il valore di `"_schema"` del cliente è il nome del file di codice che abbiamo programmato nello schema precedente. 

E nel codice del servizio degli acquisti dei clienti in: `server/services/cliente/acquisti/post.js`

```javascript
const dbCliente = _val.global().getValues('cliente')
...
```

Tramite `_val.global()` otteniamo i dati del cliente dal database che sono stati caricati automaticamente dal codice dello schema.

### Esempio con Metodo HTTP

Possiamo restituire uno schema diverso per ogni tipo di metodo HTTP.

Per esempio possiamo generare uno schema tramite codice per operazioni di creazione, modifica o rimozione di porte di rete:

- Se è POST esegue l'operazione di creazione, quindi non contiene l'UID ma richiede il nome e il numero della porta.
- Se è PUT esegue l'operazione di modifica, deve richiedere l'UID, il nome e il numero della porta di rete.
- Quando è PUT o DELETE serve l'UID per eseguire le rispettive operazioni di modifica e rimozione. 

```javascript
const proprieta = _val.map()
const richiesti = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    proprieta.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    richiesti.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    proprieta
        .set(
            'nome',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'porta',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portaMinima)
                .set('maximum', portaMassima)
        )
    richiesti
        .add('nome')
        .add('porta')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        proprieta
    )
    .set(
        'required',
        richiesti
    )
```

## Video

Di seguito alcuni video esemplificativi su come sviluppare l'API integrata con OpenAPI:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="Lettore video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Conclusione

Con il supporto di OpenAPI possiamo creare regole di validazione utilizzando JSON Schema, il che offre i seguenti vantaggi:

- Garantire una maggiore sicurezza dei dati iniettati nei servizi. 
- Avviso nel `log` se l'output del servizio non è come specificato.
- Genera facilmente un'interfaccia di navigazione nei servizi e di test.