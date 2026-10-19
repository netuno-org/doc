---
id: db-query-execute
title: Query en Execute - Directe opdrachten in de database
sidebar_label: Query & Uitvoeren
---

## Voordat je begint

Om deze tutorial zo effectief mogelijk te kunnen begrijpen, raden we je aan om te controleren of je basiskennis hebt van _**JavaScript, SQL**_ en of je services in Netuno kunt aanmaken.

Als je niet weet hoe je services moet aanmaken, ga dan naar [REST-webservices](/docs/academy/server/services/rest).

## Queries maken

Netuno bevat functies die gericht zijn op het maken van queries voor de database. In deze tutorial presenteren en beschrijven we kort het effect van elke functie en ook de best practices om het beste resultaat te behalen.

### _db.query('SELECT * FROM ...')

Deze functie maakt het mogelijk om gegevens uit een query te retourneren.

```javascript
_out.json(
  _db.query('SELECT * FROM tabel_naam')
)
```

> Merk op dat de functie _out.json() bedoeld is om de gegevens van de service op het scherm weer te geven wanneer je deze in de browser aanroept.

Deze functie accepteert ook argumenten, die rechtstreeks via de aanroep van de service worden doorgegeven. Stel bijvoorbeeld dat we de service _selecteer-alles.js_ hebben; de aanroep ervan gebeurt via _**http://localhost:9000/services/selecteer-alles.netuno**_, waarbij de door te geven argumenten na de aanroep worden geplaatst, na een vraagteken:

```
http://localhost:9000/services/selecteer-alles.netuno?argument1=1&argument2=naam
```

> Merk op dat je voor het verzenden van meerdere argumenten deze simpelweg scheidt met een ampersand (&).

### Query met parameters

En ten slotte hoef je deze variabele alleen nog als volgt in de query te declareren:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM tabel_naam WHERE id = ? AND naam = ?', 
        _req.getInt("argument1"), _req.getString("argument2")
    )
)
```

> Op de plaats van de '?' (vraagtekens) wordt de overeenkomstige parameter geïnjecteerd, afhankelijk van de volgorde.

## Query met parameters en typen van PostgreSQL en H2Database

H2Database en PostgreSQL ondersteunen echter een eenvoudige conversiesyntaxis, waardoor we als volgt typen aan parameters kunnen toekennen:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM tabel_naam WHERE id = ?::int AND naam = ?::varchar', 
    _req.getInt("id"), _req.getString("naam")
  )
)
```

## Parametertypen van H2Database en PostgreSQL

Zoals je eerder hebt kunnen zien, moet je, wanneer je een query met argumenten wilt uitvoeren, het type ervan definiëren. Hieronder volgt een lijst met alle variabeletypen en welk type het meest geschikt is voor elk ervan:

* Geschikt voor parameters met gehele getallen:
    * **?::int**
* Geschikt voor decimale getalparameters:
    * **?::float**
* Geschikt voor parameters van een globaal/universaal unieke identificator, beter bekend als guid of uuid:
    * **?::uuid**
* Geschikt voor parameters met algemene tekst, strings:
    * **?::varchar**
    * **?::text**
* Geschikt voor datumparameters:
    * **?::date**
* Geschikt voor tijdparameters:
    * **?::time**
* Geschikt voor parameters met datum en tijd:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Deze functie maakt het mogelijk om een databaseopdracht uit te voeren, zoals updates, inserts en deletes.

Retourneert het aantal records dat door de uitgevoerde opdracht is betrokken.

```javascript
// Voorbeeld van een Insert:
const aantalToegevoegdeRecords = _db.execute(
    "INSERT INTO tabel_naam(id, active, naam) " + 
    "VALUES(nextval('tabel_naam_id'), ?::int, ?::varchar)", 
    1, naam
)

// Voorbeeld van een Update:
const aantalBijgewerkteRecords = _db.execute(
    "UPDATE tabel_naam SET naam = ?::varchar WHERE id = ?::int",
    _req.getString("naam"), _req.getInt("id")
)

// Voorbeeld van een Delete:
const aantalVerwijderdeRecords = _db.execute(
    "DELETE FROM tabel_naam WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Let op:** Controleer bij een insert of het veld active gelijk is aan 1; anders verschijnt het niet in het resultaat. 

## Voorbeeld van interactie met de gegevens

We presenteren nu aanbevolen richtlijnen om de best mogelijke resultaten te behalen.

## Query First

Zie hieronder hoe je de eerste rij van de query kunt ophalen; deze is null als er geen rij is verkregen.

```javascript
// Gegevens selecteren:
const dbResultaat = _db.queryFirst(
    'SELECT naam FROM tabel_naam WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbResultaat) {
    // HTTP-statuscode:
    _header.status(404)
    // Aanduiding van de fout:
    _out.json(
        _val.map()
            .set('error', 'id-niet-gevonden')
    )
    // Beëindigt de uitvoering van de service:
    _exec.stop()
}
```

## Het aantal records valideren

Wanneer je een databasequery uitvoert waarvan het resultaat uniek is, is het raadzaam om als volgt te werk te gaan om toegang te krijgen tot de gegevens:

Merk op dat dit slechts een eenvoudig voorbeeld is dat garandeert dat er ten minste 1 resultaat wordt geretourneerd en voorkomt dat er een fout optreedt als er geen resultaat is.

```javascript
// Gegevens selecteren:
var dbResultaten = _db.query(
  'SELECT naam FROM tabel_naam WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let naam = null;
// Zorgt ervoor dat er gegevens bestaan, en het is mogelijk om het 
// groter-dan-symbool (resultaat.length > 1) te gebruiken in het geval 
// dat er meer dan één record is:
if (dbResultaten.size() >= 1) {
  // Om rechtstreeks toegang te krijgen tot de waarde van naam:
  naam = dbResultaten.get(0).getString('naam');
}
```

## Records in een lus doorlopen

Als het resultaat van de selectie **meerdere resultaten** bevat, kun je de gegevens als volgt met een 'for'-lus doorlopen:

```javascript
// Voer de query uit
const dbResultaten = _db.query('SELECT id, naam FROM tabel_naam');

// Initialiseer de variabele zodat deze waarden kan ontvangen
const items = _val.init();

// Itereer over alle resultaten om elke afzonderlijke waarde te ontvangen
for (const dbResultaat of dbResultaten) {
    items.push(
        _val.map()
            .set("uid", dbResultaat.getString("uid"))
            .set("naam", dbResultaat.getString("naam"))
    );
}

// Stuurt de nieuwe gegevenslijst naar de uitvoer:
_out.json(items);
```

Als je vragen hebt, aarzel dan niet om contact op te nemen; zie de aanwijzingen in de footer van deze website.

Veel succes met ontwikkelen!