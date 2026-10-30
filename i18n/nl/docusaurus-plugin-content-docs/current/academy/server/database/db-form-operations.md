---
id: db-form-operations
title: Form en de Basisbewerkingen van de Database
sidebar_label: DB Form
---

## Voordat je begint

Voordat je verdergaat, zorg ervoor dat je kennis hebt van SQL en van relaties tussen tabellen zoals "een-op-veel" en "veel-op-een".

Daarnaast is voorkennis nodig over de `Forms` van Netuno en hoe ze zijn georganiseerd om het maximale uit DB Form te halen.

## Inleiding

Bij softwareontwikkeling moeten we vaak informatie uit een database halen, en dat met pure SQL doen maakt dingen omslachtig en stressvol. De query maakt het opbouwen van SQL-query's een intuïtieve en stressvrije ervaring. Hiermee kun je krachtige query's maken met gebruiksvriendelijke methoden die de complexiteit van ruwe SQL abstraheren en een benadering van queryontwikkeling bieden die aansluit bij je gedachtegang.

## Hoe het werkt

In het hart van DB Form ligt de mogelijkheid om SQL-opdrachten te structureren met objecten en methoden. In plaats van de SQL-opdrachten rechtstreeks te schrijven, laat DB Form je een objectgeoriënteerd mechanisme gebruiken om query's en bewerkingen programmatisch te definiëren.

Elke query of databasebewerking wordt weergegeven als een object.

Je maakt instanties aan van queryklassen die verschillende delen van SQL inkapselen, zoals selectie, filtering, groepering, enz. En je voert ook de bewerkingen uit om records te verwijderen, invoegen en bijwerken.

## Initialisatie

Alles begint met de initialisatie van DB Form, die moet weten wat de naam van het basis- of hoofdformulier is dat gebruikt wordt. Met andere woorden: formulieren in Netuno vertegenwoordigen altijd tabellen in de database, dus het is hetzelfde als zeggen wat de basistabel of de hoofdtabel is.

In dit voorbeeld initialiseren we DB Form vanuit het formulier/de tabel `personen`:

```javascript
const dbFormPersonen = _db.form("personen")
```

Met DB Form geïnitialiseerd kunnen we query's of bewerkingen uitvoeren.

## Eenvoudige query

DB Form biedt twee veelgebruikte methoden om gegevens op te halen, naast paginering en onderscheiden resultaten, namelijk:

- `all` - Alle records als een lijst.
- `first` - Haalt alleen het eerste record op.

Bekijk de volgende voorbeelden.

Om alle personen op te halen:

```javascript
const dbPersonen = _db.form("personen")
    .all()
```

Om slechts één persoon op te halen:

```javascript
const dbPersoon = _db.form("personen")
    .first()
```

## Filters en voorwaarden

Met `where` kunnen we de gegevens filteren die aan bepaalde voorwaarden voldoen.

Bekijk enkele voorbeelden:

```js
const dbPersoon = _db.form("personen")
    .where(_db.where("personen_gebruiker_id").equals(_user.id))
    .first()
```

```js
const dbPersonen = _db.form("personen")
    .where(
        _db.where("type").in(_val.list().add("klant").add("beheerder"))
            .and("email").notEqual(null)
    ).all()
```

## Where-vergelijkingen

De `_db.where` biedt het object [Where](/docs/library/objects/Where) dat de volgende vergelijkingsbewerkingen ondersteunt:

Vergelijkingen met de numerieke en tekstuele operatoren:

-  `equal(...)` of `equals(...)` - Controleert gelijkheid, dit is `=`.
-  `notEqual(...)` of `notEquals(...)` - Of het verschillend is van de doorgegeven waarde, dit is `<>`.
-  `greaterThan(...)` - Of het groter is dan de doorgegeven waarde, dit is `>`.
-  `lessThan(...)` - Of het kleiner is dan de doorgegeven waarde, dit is `<`.
-  `greaterOrEqualsThan(...)` - Of het groter dan of gelijk is aan de doorgegeven waarde, dit is `>=`.
-  `lessOrEqualsThan(...)` - Of het kleiner dan of gelijk is aan de doorgegeven waarde, dit is `<=`.

Tekstvoorwaarden met de operator `LIKE`:

-  `startsWith('tekst')` - Of het begint met het opgegeven voorvoegsel, dit is `LIKE '...%'`.
-  `endsWith('tekst')` - Of het eindigt met het opgegeven achtervoegsel, dit is `LIKE '%...'`.
-  `contains('tekst')` - Of het de term bevat, dit is `LIKE '%...%'`.

Voorwaarden met lijsten met de operator `IN`:

-  `in(_val.list()...)` - Of het gelijk is aan een waarde uit de lijst, dit is de voorwaarde `IN (...)`.
-  `notIn(_val.list()...)` - Of het niet gelijk is aan een waarde uit de lijst, dit is de voorwaarde `NOT IN (...)`.

## Praktische queryvoorbeelden

`DB Form` is toegankelijk via de resource `_db.form('formulier')`; zodra je het aanroept, heb je de basisquery in handen die kan worden geconfigureerd met de methoden en objecten die erin beschikbaar zijn.

### Veel-op-een en unieke resultaten

```javascript
const zoekopdracht = _db.form('personen')
    .where(
        _db.where('naam').startsWith('jan')
        .and(
             _db.where('email').contains('jan')
             .or('email').endsWith('nl')
         )
    )
    .link('functie', _db.where('code').equal('manager'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'personen_gebruiker_id',  
            _db.where('mail').startsWith('jan')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('personen')
            )
        )
    )
    .get("personen.naam", "personen_naam")
    .get("personen.actief", "personen_actief")
    .get("personen.uid", "personen_uid")
    .debug(true)
    .distinct(true)

const resultaten = zoekopdracht.all();
```

In het bovenstaande voorbeeld doen we een query op de tabel `personen` en relateren we deze aan nog twee andere tabellen, `functie` en `netuno_user`, waarbij `functie` wordt gerelateerd via de methode `link` en `netuno_user` via de `join`. Je kunt zien dat de `link` veel eenvoudiger is dan de `join`; dit komt doordat de `link` de relatie van het `Form` van Netuno hergebruikt om de relatie te mappen, terwijl de `join` alleen de informatie gebruikt die in de methode wordt opgegeven. Ook zijn de andere gebruikte methoden en objecten te zien, zoals:

- `where` : Object dat wordt geleverd om voorwaarden voor een tabel op te bouwen.
- `link` : Methode die de hoofdtabel relateert aan een andere tabel met behulp van de criteria van het `Form` van Netuno.
- `join` : Methode die een relatieobject tussen tabellen ontvangt.
- `get` : Methode die definieert welke velden in de query worden geretourneerd.
- `manyToOne` : Object dat het type relatie tussen tabellen definieert, in dit geval een relatie van het type `Many To One`.
- `debug` : Methode die bepaalt of de opgebouwde query in de console wordt afgedrukt.
- `distinct` : Methode die bepaalt of het commando `DISTINCT` op de query wordt toegepast.
- `all` : Methode die de query uitvoert en de resultaten als lijst retourneert.

> De methode `link` mag alleen worden gebruikt wanneer de tabellen al een relatie hebben via het `Form` van Netuno.

### Eerste record met relatie en sortering

```javascript
const zoekopdracht = _db.form('personen')
    .where(
        _db.where('naam').startsWith('jan')
        .and('email').in(
            _val.list().add('eerste@mail.com').add('tweede@mail.com'))
    )
    .link('functie')
    .get("personen.naam", "personen_naam")
    .get("personen.actief", "personen_actief")
    .get("functie.code", "functie_code")
    .order('personen.leeftijd', 'desc')
    .debug(true)

const eersteResultaat = zoekopdracht.first();
```

Aan het einde van het bovenstaande voorbeeld roepen we de methode `first()` aan; deze retourneert het eerste resultaat dat bij de uitvoering van de query wordt gevonden. Als er geen wordt gevonden, retourneert deze `null`.

### Paginering

```javascript
const zoekopdracht = _db.form('personen')
    .link(
        'functie', 
        _db.link('taak')
    )
    .get("personen.naam", "personen_naam")
    .get("personen.actief", "personen_actief")
    .get("functie.code", "functie_code")
    .group("personen.id")
    .debug(true)

const pagina = zoekopdracht.page(_db.pagination(1, 10));
```

> Het paginanummer in het object `Pagination` begint bij 1, dus het bovenstaande voorbeeld is gelijk aan: `offset = 0` en `limit = 10`.

Aan het einde van het bovenstaande voorbeeld roepen we de methode `page()` aan en geven we als parameter het object `pagination` mee dat de pagineringsvoorkeuren bevat. Dit retourneert een pagina-object met de equivalente attributen, bijvoorbeeld:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"functie_code": "trainee",
			"personen_actief": true,
			"personen_naam": "Jan de Vries"
		},
		{
			"functie_code": "manager",
			"personen_actief": true,
			"personen_naam": "Sanne Jansen"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Records invoegen

Om gegevens in de database in te voegen, gebruiken we de methode `insert`, bijvoorbeeld:

```javascript
const dbPersoonIngevoegd = _db.form("personen")
    .set("naam", "Sanne Jansen")
    .set("email", "sanne@mail.com")
    .insert();
```

Met het resultaat van `insert` kunnen we het id ophalen van het record dat in de database is ingevoegd.

Daarom verkrijg je in `dbPersoonIngevoegd` het `id` van het ingevoegde record als volgt:

```javascript
_log.info("ID van ingevoegde persoon: "+ dbPersoonIngevoegd.getInt('id'))
```

## Records bewerken

Via het DB Form-object kun je de records van de query eenvoudig en intuïtief bijwerken.

```javascript
_db.form('personen')
    .link(
        'functie',
        _db.where('code').equal('trainee')
    )
    .set("naam", "nieuwe naam")
    .set("email", "mijnnieuweemail@mail.com")
    .update();
```

> `Belangrijk`. De methode `update()` werkt alle resultaten van de query bij, dus let op bij het gebruik ervan.

> Bovendien kun je andere methoden combineren, zoals `order()` en `limit()`, om je query's te verbeteren.

## Records verwijderen

DB Form stelt je ook in staat om records die door de query worden geretourneerd eenvoudig te verwijderen.

```javascript
_db.form('personen')
    .link(
        'functie',
        _db.where('code').equal('trainee')
    )
    .delete();
```

> `Belangrijk`. De methode `delete()` verwijdert alle resultaten van de query, dus let op bij het gebruik ervan.

> Net als bij de andere kun je andere methoden combineren, zoals `order()` en `limit()`, om de resultaten te verbeteren.