---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Definiția schemei de servicii.

## Introducere

OpenAPI este o specificație care standardizează serviciile oferite de API-urile REST, ajută la înțelegerea modului în care sunt definite serviciile, cum ar fi adresa, inputurile și outputurile.

Permite generarea interfeței de testare și generarea automată a clienților pentru integrare cu alte tehnologii.

> Mai multe despre <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Activare și Configurare

Pentru a activa și configura OpenAPI în aplicația dvs. din Netuno, este necesar să editați fișierul de configurare al aplicației pentru mediul pe care îl utilizați, cum ar fi:

- `📂 config/_development.json`
- `📂 config/_production.json`

Introduceți și ajustați următorii parametri:

```
...
    "openapi": {
        "host": "http://aplicatia-mea.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://aplicatia-mea.local.netu.no:9000/services",
                "description": "Dezvoltare Locală"
            }
        ]
    },
...
```

Asigurați-vă că setările au sens; în exemplul de mai sus este pentru mediul _development_.

> În producție, este recomandat să utilizați `https`.

### _openapi.json în Servicii

În rădăcina serviciilor, configurați fișierul `_openapi.json`.

Calea completă în cadrul aplicației este:

- `📂 server/services/_openapi.json`

Conținutul acestui fișier va fi ca în acest exemplu:

```
{
  "info": {
    "title": "Aplicația Mea",
    "description": "API REST al Aplicației Mele, utilizați cu moderație.",
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

Ajustați titlul și descrierea pentru ceea ce are sens în cazul dvs.

## Intrare

Când configurați fișierele _schema_ de intrare, permiteți Netuno să efectueze validarea parametrilor primiți comparându-i cu regulile JSON Schema.

> Mai multe despre <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

În cazul în care există o eroare de validare, executarea serviciului este împiedicată și se afișează o eroare în `log`-ul Netuno, iar pentru consumatorul serviciului se returnează codul de stare HTTP **400** (_Bad Request_).

Pentru a configura regulile parametrilor de intrare, este necesar să creați un fișier cu extensia `in.json` lângă fișierul de cod al serviciului; numele trebuie să fie același.

- Serviciul `detaliu.js` ar trebui să aibă fișierul `detaliu.in.json`.
- Serviciul `detaliu.post.js` ar trebui să aibă fișierul `detaliu.post.in.json`.
- Serviciul `detaliu/post.js` ar trebui să aibă fișierul `detaliu/post.in.json`.

Exemplu de conținut al `in.json`:

```
{
    "tags":[
      "servicii de produs"
    ],
    "summary": "Detaliu Produs",
    "description": "Se obțin toate câmpurile de detaliu ale produsului specificat.",
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

Netuno acceptă și unele tipuri suplimentare care nu sunt acceptate de JSON Schema, cum ar fi `string-not-empty`, `array-not-empty`, `id` și `uid` (sau `uuid` sau `guid`).

> Mai multe despre această specificație la <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Ieșire

Când configurați fișierele _schema_ de ieșire, permiteți Netuno să efectueze validarea parametrilor trimiși comparându-i cu regulile JSON Schema.

> Mai multe despre <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

În cazul în care există o eroare de validare, ieșirea este trimisă totuși consumatorului serviciului, dar mesajele de eroare de validare sunt afișate în `log`-ul Netuno.

Pentru a configura regulile parametrilor de ieșire, este necesar să creați un fișier cu extensia `out.200.json` lângă fișierul de cod al serviciului; numele trebuie să fie același cu cel al serviciului.

Unde **200** este codul de stare HTTP care merge în răspuns; pentru a accepta mai multe coduri de stare HTTP, este suficient să adăugați mai multe fișiere JSON cu numărul diferit.

Câteva exemple:
- Serviciul `salvare.js` ar trebui să aibă fișierul `salvare.out.200.json`.
- Serviciul `salvare.post.js` ar trebui să aibă fișierul `salvare.post.out.200.json`.
- Serviciul `salvare/post.js` ar trebui să aibă fișierul `salvare/post.out.200.json`.

Exemplu de conținut al `out.200.json`:

```
{
    "type": "object",
    "properties": {
      "result": {
        "type": "boolean"
      }
    },
    "required": [
      "result"
    ]
}
```

Netuno acceptă și unele tipuri suplimentare care nu sunt acceptate de JSON Schema, cum ar fi `string-not-empty`, `array-not-empty`, `id` și `uid` (sau `uuid` sau `guid`).

> Mai multe despre această specificație la <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Import de Schema

Netuno acceptă importul de _schemas_, ceea ce permite reutilizarea unei părți din _schema_ în mai multe JSON-uri.

> La importul de _schemas_ se evită repetarea codului.

Creați folderul `_schema` în rădăcina folderului serviciilor, în:

- `📂 server/services/_schema`

Acum, în configurația JSON, este posibil să importați _schemas_ cu parametrul `_schema` în JSON, de exemplu:

```
{
    "summary": "Șterge Produse",
    "description": "Permite ștergerea definitivă a produselor.",
    "_schema": "get/doar-cod.in"
}
```

Aceasta înseamnă că va fi importat fișierul `_schema/get/doar-cod.in.json` unde se află parametrul `_schema`.

## Specificație și Teste

Pentru a genera specificația completă a tuturor serviciilor care acceptă OpenAPI cu JSON Schema, accesați de exemplu:

- http://localhost:9000/services/_openapi

Va fi afișat un JSON cu întreaga specificație.

Pentru a testa, copiați întregul JSON generat.

Deschideți Editorul Swagger: https://editor.swagger.io/

Ștergeți conținutul din partea stângă și lipiți JSON-ul și răspundeți da la întrebarea de conversie din JSON în YAML.

Cu interfața generată în partea dreaptă, este posibil să înțelegeți mai bine toate serviciile disponibile și să efectuați teste.

De asemenea, permite generarea automată de clienți pentru alte tehnologii.

## Programatic

În folderul `_schema` putem utiliza fișiere `.js` care vor fi executate împreună cu generarea definiției OpenAPI, dar și în procesul de validare a intrării și ieșirii serviciilor.

Prin programarea schemei putem genera validări dinamice, de exemplu:
- Acceptarea doar a unui cod care există în baza de date.
- Cu `UID` se obține înregistrarea din baza de date și se partajează cu serviciile.
- Dacă este `POST` sau `PUT`, generează un tip de schemă diferit de cel generat în cazul `DELETE`.

### Exemplu cu Listă de Valori

Imaginați-vă că avem un serviciu care primește codul unei anumite categorii.

Nu putem primi orice valoare ca cod, deoarece poate fi o valoare care nu corespunde unui cod valid de categorie.

Așadar, putem restricționa codurile acceptate doar la cele care sunt înregistrate în baza de date.

Se creează schema în: `server/services/_schema/categorie/coduri.js`

```javascript
const dbCategorii = _db.query("SELECT cod FROM categorie")

const listaCoduri = _val.list()

for (const dbCategorie of dbCategorii) {
    listaCoduri.add(dbCategorie.getString("cod"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listaCoduri
    )
```

> În `listaCoduri` vor fi toate codurile de categorii înregistrate în baza de date.

În serviciu putem avea următorul `JSON` care utilizează schema `categorie/coduri`:

```json
{
  "summary": "Listează Produsele din Categorie",
  "description": "Obține toate produsele asociate unei anumite categorii.",
  "type": "object",
  "properties": {
    "categorie": {
      "type": "object",
      "properties": {
        "cod": {
          "_schema": "categorie/coduri"
        }
      },
      "required": [
        "cod"
      ]
    }
  },
  "required": [
    "categorie"
  ]
}
```

Astfel reușim să garantăm că serviciul se execută doar dacă codul este valid.

### Exemplu cu Obiect Global

Imaginați-vă că avem mai multe servicii care primesc `UID`-ul clientului și în fiecare serviciu trebuie să accesăm baza de date pentru a obține datele clientului asociate cu `UID`-ul său.

Putem centraliza acest lucru într-o schemă programată care, prin `UID`-ul clientului primit, obține datele clientului din baza de date și le stochează într-un obiect global accesibil în codul serviciilor.

Astfel, datele clientului sunt întotdeauna încărcate global și automat atunci când primim un `UID` de client.

Creăm o schemă programată în: `server/services/_schema/client.js`

```javascript
const client = _req.getValues('client', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbClient = _db.get('client', client.getString("uid"))
    
    if (dbClient == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'client-negasit')
        )
        _service.cancel()
    }
    
    _val.global().set('client', dbClient)
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

> Cu `_service.isGeneratingOpenAPIDefinition()` putem valida dacă este generarea definiției OpenAPI, altfel este o execuție a unei cereri HTTP.
> 
> Dacă `UID`-ul clientului nu este găsit, atunci returnează 404 și întrerupe execuția serviciului.
> 
> Observați că folosim `_val.global()`, care permite partajarea datelor global între toate fișierele de cod care sunt executate în procesarea cererii HTTP.

În continuarea exemplului, avem un serviciu care listează cumpărăturile efectuate de client.

Avem validarea de intrare pentru serviciu în: `server/services/client/cumparari/post.in.json`

```json
{
    "summary": "Listă de Cumpărături",
    "description": "Listează cumpărăturile efectuate de client.",
    "type": "object",
    "properties": {
        "client": {
            "_schema": "client"
        }
    },
    "required": [
        "client"
    ]
}
```

> Observați că valoarea lui `"_schema"` a clientului este numele fișierului de cod pe care l-am programat în schema anterioară.

Și în codul serviciului de cumpărături ale clienților în: `server/services/client/cumparari/post.js`

```javascript
const dbClient = _val.global().getValues('client')
...
```

Prin `_val.global()` obținem datele clientului din baza de date care au fost încărcate automat de codul schemei.

### Exemplu cu Metodă HTTP

Putem returna o schemă diferită pentru fiecare tip de metodă HTTP.

De exemplu, putem genera o schemă prin cod pentru operațiile de creare, editare sau eliminare a porturilor de rețea:

- Dacă este POST, realizează operația de creare, deci nu conține UID, dar necesită numele și numărul portului.
- Dacă este PUT, realizează operația de editare, trebuie să solicite UID, numele și numărul portului de rețea.
- Când este PUT sau DELETE, este nevoie de UID pentru a realiza operațiile respective de editare și eliminare.

```javascript
const properties = _val.map()
const required = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    properties.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    required.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    properties
        .set(
            'nume',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinim)
                .set('maximum', portMaxim)
        )
    required
        .add('nume')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        properties
    )
    .set(
        'required',
        required
    )
```

## Videoclipuri

Urmează câteva videoclipuri exemplificative despre cum să dezvoltați API-ul integrat cu OpenAPI:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="Player video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Concluzie

Cu suportul OpenAPI putem crea reguli de validare folosind JSON Schema, ceea ce oferă următoarele avantaje:

- Garantarea unei securități mai mari a datelor care sunt injectate în servicii.
- Alertă în `log` în cazul în care ieșirea serviciului nu este conform specificației.
- Generează cu ușurință o interfață de navigare în servicii și de testare.