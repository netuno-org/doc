---
id: db-form-operations
title: Form und grundlegende Datenbankoperationen
sidebar_label: DB Form
---

## Bevor Sie beginnen

Bevor Sie fortfahren, stellen Sie sicher, dass Sie Kenntnisse in SQL sowie in Beziehungen zwischen Tabellen wie „eins zu vielen“ und „vielen zu eins“ haben.

Außerdem sind Vorkenntnisse über die `Forms` von Netuno und deren Organisation erforderlich, um das Maximum aus dem DB Form herauszuholen.

## Einführung

In der Softwareentwicklung müssen wir häufig Informationen aus Datenbanken abrufen, und dies mit reinem SQL zu tun, macht die Sache oft massiv und stressig. Query verwandelt die Erstellung von SQL-Abfragen in eine intuitive und stressfreie Erfahrung. Damit können Sie leistungsstarke Abfragen mit benutzerfreundlichen Methoden erstellen, die die Komplexität von rohem SQL abstrahieren und einen Ansatz zur Abfrageentwicklung bieten, der mit Ihrem Denkfluss übereinstimmt.

## Wie es funktioniert

Im Kern des DB Form steht die Fähigkeit, SQL-Befehle mithilfe von Objekten und Methoden zu strukturieren. Anstatt die SQL-Befehle direkt zu schreiben, ermöglicht Ihnen das DB Form, einen objektorientierten Mechanismus zu verwenden, um Abfragen und Operationen programmatisch zu definieren.

Jede Abfrage oder Datenbankoperation wird als Objekt dargestellt.

Sie erstellen Instanzen von Abfrageklassen, die verschiedene Teile des SQL kapseln, wie Auswahl, Filterung, Gruppierung usw. Und Sie führen auch die Operationen zum Löschen, Einfügen und Aktualisieren von Datensätzen aus.

## Initialisierung

Alles beginnt mit der Initialisierung des DB Form, das wissen muss, welcher Basis- oder Hauptformularname verwendet wird; das heißt, die Formulare in Netuno repräsentieren immer Tabellen in der Datenbank, daher ist es gleichbedeutend damit, welche Basistabelle oder Haupttabelle verwendet wird.

In diesem Beispiel initialisieren wir das DB Form aus dem Formular/der Tabelle `personen`:

```javascript
const dbFormPersonen = _db.form("personen")
```

Mit dem initialisierten DB Form können wir Abfragen oder Operationen durchführen.

## Einfache Abfrage

Das DB Form bietet zwei sehr gebräuchliche Methoden zum Abrufen von Daten, zusätzlich zur Paginierung und zu unterschiedlichen Ergebnissen, nämlich:

- `all` – Alle Datensätze als Liste.
- `first` – Ruft nur den ersten Datensatz ab.

Siehe die folgenden Beispiele.

Um alle Personen abzurufen:

```javascript
const dbPersonen = _db.form("personen")
    .all()
```

Um nur eine Person abzurufen:

```javascript
const dbPerson = _db.form("personen")
    .first()
```

## Filter und Bedingungen

Mit where können wir die Daten filtern, die bestimmte Bedingungen erfüllen.

Siehe einige Beispiele:

```js
const dbPerson = _db.form("personen")
    .where(_db.where("personen_user_id").equals(_user.id))
    .first()
```

```js
const dbPersonen = _db.form("personen")
    .where(
        _db.where("typ").in(_val.list().add("kunde").add("admin"))
            .and("email").notEqual(null)
    ).all()
```

## Where-Vergleiche

Das `_db.where` stellt das [Where](/docs/library/objects/Where)-Objekt bereit, das die folgenden Vergleichsoperationen unterstützt:

Vergleiche mit numerischen und textuellen Operatoren:

-  `equal(...)` oder `equals(...)` – Prüft die Gleichheit, entspricht `=`.
-  `notEqual(...)` oder `notEquals(...)` – Ob es sich vom übergebenen Wert unterscheidet, entspricht `<>`.
-  `greaterThan(...)` – Ob es größer als der übergebene Wert ist, entspricht `>`.
-  `lessThan(...)` – Ob es kleiner als der übergebene Wert ist, entspricht `<`.
-  `greaterOrEqualsThan(...)` – Ob es größer oder gleich dem übergebenen Wert ist, entspricht `>=`.
-  `lessOrEqualsThan(...)` – Ob es kleiner oder gleich dem übergebenen Wert ist, entspricht `<=`.

Textbedingungen mit dem Operator `LIKE`:

-  `startsWith('text')` – Wenn es mit dem angegebenen Präfix beginnt, entspricht `LIKE '...%'`.
-  `endsWith('text')` – Wenn es mit dem angegebenen Suffix endet, entspricht `LIKE '%...'`.
-  `contains('text')` – Wenn es den Begriff enthält, entspricht `LIKE '%...%'`.

Bedingungen mit Listen mit dem Operator `IN`:

-  `in(_val.list()...)` – Wenn es gleich einem Wert der Liste ist, entspricht der Bedingung `IN (...)`.
-  `notIn(_val.list()...)` – Wenn es keinem Wert der Liste entspricht, entspricht der Bedingung `NOT IN (...)`.

## Praktische Abfragebeispiele

Das `DB Form` ist über die Ressource `_db.form('formular')` zugänglich; nach dem Aufruf haben Sie die Basisabfrage in der Hand, die mit den verfügbaren Methoden und Objekten konfiguriert werden kann.

### Viele zu einem und unterschiedliche Ergebnisse

```javascript
const abfrage = _db.form('personen')
    .where(
        _db.where('name').startsWith('jail')
        .and(
             _db.where('email').contains('jai')
             .or('email').endsWith('com')
         )
    )
    .link('beruf', _db.where('code').equal('manager'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'personen_user_id',  
            _db.where('mail').startsWith('jai')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('personen')
            )
        )
    )
    .get("personen.name", "personen_name")
    .get("personen.aktiv", "personen_aktiv")
    .get("personen.uid", "personen_uid")
    .debug(true)
    .distinct(true)

const ergebnisse = abfrage.all();
```

Im obigen Beispiel führen wir eine Abfrage für die Tabelle `personen` durch, die mit zwei weiteren Tabellen verknüpft wird, `beruf` und `netuno_user`, wobei `beruf` über die Methode `link` und `netuno_user` über den `join` verknüpft wird. Es ist zu erkennen, dass `link` viel einfacher als `join` ist; das liegt daran, dass `link` die Beziehung des Netuno-`Form` wiederverwendet, um die Relation abzubilden, während `join` nur die in der Methode angegebenen Informationen verwendet. Außerdem lassen sich die weiteren verwendeten Methoden und Objekte erkennen wie:

- `where` : Objekt, das bereitgestellt wird, um Bedingungen für eine Tabelle zu erstellen.
- `link` : Methode, die die Haupttabelle mit einer anderen Tabelle unter Verwendung der Kriterien des Netuno-`Form` verknüpft.
- `join` : Methode, die ein Beziehungsobjekt zwischen Tabellen erhält.
- `get` : Methode, die definiert, welche Felder in der Abfrage zurückgegeben werden.
- `manyToOne` : Objekt, das den Beziehungstyp zwischen Tabellen definiert, in diesem Fall eine Beziehung vom Typ `Many To One`.
- `debug` : Methode, die bestimmt, ob die erstellte Abfrage in der Konsole ausgegeben wird.
- `distinct` : Methode, die bestimmt, ob der Befehl `DISTINCT` auf die Abfrage angewendet wird.
- `all` : Methode, die die Abfrage ausführt und die Ergebnisse als Liste zurückgibt.

> Die Methode `link` sollte nur verwendet werden, wenn die Tabellen bereits über das Netuno-`Form` in Beziehung stehen.

### Erster Datensatz mit Beziehung und Sortierung

```javascript
const abfrage = _db.form('personen')
    .where(
        _db.where('name').startsWith('jail')
        .and('email').in(
            _val.list().add('erste@mail.com').add('zweite@mail.com'))
    )
    .link('beruf')
    .get("personen.name", "personen_name")
    .get("personen.aktiv", "personen_aktiv")
    .get("beruf.code", "beruf_code")
    .order('personen.alter', 'desc')
    .debug(true)

const erstesErgebnis = abfrage.first();
```
Am Ende des obigen Beispiels rufen wir die Methode `first()` auf; diese gibt das erste bei der Ausführung der Abfrage gefundene Vorkommen zurück; falls keines gefunden wird, wird `null` zurückgegeben.

### Paginierung

```javascript
const abfrage = _db.form('personen')
    .link(
        'beruf', 
        _db.link('aufgabe')
    )
    .get("personen.name", "personen_name")
    .get("personen.aktiv", "personen_aktiv")
    .get("beruf.code", "beruf_code")
    .group("personen.id")
    .debug(true)

const seite = abfrage.page(_db.pagination(1, 10));
```

> Die Seitennummer im Pagination-Objekt beginnt bei 1, daher entspricht das obige Beispiel: `offset = 0` und `limit = 10`.

Am Ende des obigen Beispiels rufen wir die Methode `page()` auf und übergeben als Parameter das `pagination`-Objekt, das die Paginierungseinstellungen enthält. Dies gibt ein Seitenobjekt mit den entsprechenden Attributen zurück, zum Beispiel:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"beruf_code": "trainee",
			"personen_aktiv": true,
			"personen_name": "Junior Freitas"
		},
		{
			"beruf_code": "manager",
			"personen_aktiv": true,
			"personen_name": "Caio Andrade"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Datensätze einfügen

Um Daten in die Datenbank einzufügen, verwenden wir die Methode `insert`, zum Beispiel:

```javascript
const dbPersonEingefuegt = _db.form("personen")
    .set("name", "Caio Andrade")
    .set("email", "caio@mail.com")
    .insert();
```

Mit dem Ergebnis von `insert` können wir die ID des Datensatzes abrufen, der in die Datenbank eingefügt wurde.

Daher erhält man in `dbPersonEingefuegt` die `id` des eingefügten Datensatzes wie folgt:

```javascript
_log.info("Personen-ID eingefügt: "+ dbPersonEingefuegt.getInt('id'))
```

## Datensätze bearbeiten

Über das DB Form können Sie die Datensätze der Abfrage einfach und intuitiv aktualisieren.

```javascript
_db.form('personen')
    .link(
        'beruf',
        _db.where('code').equal('trainee')
    )
    .set("name", "neuer Name")
    .set("email", "meineneueemail@mail.com")
    .update();
```

> `Wichtig`. Die Methode `update()` aktualisiert alle Vorkommen der Abfrage, daher Vorsicht bei der Verwendung.

> Darüber hinaus können Sie andere Methoden wie `order()` und `limit()` kombinieren, um Ihre Abfragen zu verbessern.

## Datensätze löschen

Das DB Form ermöglicht es Ihnen außerdem, in der Abfrage zurückgegebene Datensätze einfach zu löschen.

```javascript
_db.form('personen')
    .link(
        'beruf',
        _db.where('code').equal('trainee')
    )
    .delete();
```

> `Wichtig`. Die Methode `delete()` löscht alle Vorkommen der Abfrage, daher Vorsicht bei der Verwendung.

> Wie bei den anderen ist es möglich, andere Methoden wie `order()` und `limit()` zu kombinieren, um die Ergebnisse zu verbessern.