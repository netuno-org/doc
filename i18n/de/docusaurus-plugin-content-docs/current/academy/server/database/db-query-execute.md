---
id: db-query-execute
title: Query und Execute - Direkte Befehle in der Datenbank
sidebar_label: Abfrage & Ausführen
---

## Bevor Sie beginnen

Um dieses Tutorial möglichst effektiv zu verstehen, empfehlen wir, dass Sie sicherstellen, dass Sie Grundkenntnisse in _**JavaScript und SQL**_ haben und wissen, wie man Dienste in Netuno erstellt.

Falls Sie nicht wissen, wie man Dienste erstellt, lesen Sie bitte [REST-Webdienste](/docs/academy/server/services/rest).

## Erstellung von Abfragen

Netuno bietet Funktionen zur Erstellung von Datenbankabfragen. In diesem Tutorial stellen wir jede kurz vor, beschreiben ihre Wirkung und zeigen bewährte Vorgehensweisen für optimale Ergebnisse.

### _db.query('SELECT * FROM ...')

Diese Funktion gibt Daten aus einer Abfrage zurück.

```javascript
_out.json(
  _db.query('SELECT * FROM tabelle_name')
)
```

> Beachten Sie, dass die Funktion _out.json() die Anzeige der Dienstdaten auf dem Bildschirm ermöglicht, wenn der Dienst im Browser aufgerufen wird.

Diese Funktion erlaubt auch die Annahme von Argumenten, die direkt beim Aufruf des Dienstes übergeben werden. Nehmen wir beispielsweise an, wir haben den Dienst _alle-auswaehlen.js_; der Aufruf erfolgt über _**http://localhost:9000/services/alle-auswaehlen.netuno**_, wobei die zu übergebenden Argumente nach dem Aufruf hinter einem Fragezeichen angehängt werden:

```
http://localhost:9000/services/alle-auswaehlen.netuno?argument1=1&argument2=name
```

> Beachten Sie, dass mehrere Argumente durch ein kaufmännisches Und (&) getrennt werden.

### Abfrage mit Parametern

Und schließlich deklarieren Sie diese Variablen in der Abfrage wie folgt:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM tabelle_name WHERE id = ? AND name = ?', 
        _req.getInt("argument1"), _req.getString("argument2")
    )
)
```

> Anstelle der '?' (Fragezeichen) wird der entsprechende Parameter gemäß seiner Reihenfolge eingesetzt.

## Abfrage mit Parametern und Typen von PostgreSQL und H2DataBase

H2Database und PostgreSQL unterstützen jedoch eine einfache Konvertierungssyntax, sodass wir den Parametern wie folgt Typen zuweisen können:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM tabelle_name WHERE id = ?::int AND name = ?::varchar', 
    _req.getInt("id"), _req.getString("name")
  )
)
```

## Parametertypen von H2Database und PostgreSQL

Wie Sie oben gesehen haben, müssen beim Ausführen einer Abfrage mit Argumenten deren Typen definiert werden. Es folgt eine Liste aller Variablentypen und des jeweils am besten geeigneten Typs:

* Geeignet für ganzzahlige Parameter:
    * **?::int**
* Geeignet für Dezimalzahlen:
    * **?::float**
 * Geeignet für Parameter eines global eindeutigen/universellen Bezeichners, besser bekannt als GUID oder UUID:
    * **?::uuid**
 * Geeignet für Parameter für allgemeinen Text, Strings:
    * **?::varchar**
    * **?::text**
 * Geeignet für Parameter vom Typ Datum:
    * **?::date**
 * Geeignet für Parameter vom Typ Uhrzeit:
    *  **?::time**
 * Geeignet für Parameter mit Datum und Uhrzeit:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Diese Funktion führt ein Datenbankkommando wie Updates, Inserts und Deletes aus.

Gibt die Anzahl der vom ausgeführten Befehl betroffenen Datensätze zurück.

```javascript
// Beispiel für ein Insert:
const anzahlEingefuegteDatensaetze = _db.execute(
    "INSERT INTO tabelle_name(id, aktiv, name) " + 
    "VALUES(nextval('tabelle_name_id'), ?::int, ?::varchar)", 
    1, name
)

// Beispiel für ein Update:
const anzahlAktualisierteDatensaetze = _db.execute(
    "UPDATE tabelle_name SET name = ?::varchar WHERE id = ?::int",
    _req.getString("name"), _req.getInt("id")
)

// Beispiel für ein Delete:
const anzahlGeloeschteDatensaetze = _db.execute(
    "DELETE FROM tabelle_name WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Hinweis:** Stellen Sie bei einem Insert sicher, dass das Feld aktiv gleich 1 ist; andernfalls erscheint der Datensatz nicht im Ergebnis.

## Beispiel für die Interaktion mit den Daten

Im Folgenden stellen wir empfohlene Vorgehensweisen vor, damit Sie bestmögliche Ergebnisse erzielen.

## Erste Abfrage

Nachfolgend sehen Sie, wie Sie die erste Zeile der Abfrage abrufen; ist keine Zeile vorhanden, ist das Ergebnis null.

```javascript
// Daten auswählen:
const dbErgebnis = _db.queryFirst(
    'SELECT name FROM tabelle_name WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbErgebnis) {
    // HTTP-Statuscode:
    _header.status(404)
    // Fehlerangabe:
    _out.json(
        _val.map()
            .set('error', 'id-nicht-gefunden')
    )
    // Beendet die Ausführung des Dienstes:
    _exec.stop()
}
```

## Anzahl der Datensätze validieren

Wenn Sie eine Datenbankabfrage durchführen, deren Ergebnis eindeutig sein soll, sollten Sie zum Zugriff auf die Daten **wie folgt** vorgehen:

Beachten Sie, dass dies nur ein einfaches Beispiel ist, das sicherstellt, dass mindestens 1 Ergebnis zurückgegeben wird, und den Fehler vermeidet, falls kein Ergebnis vorhanden ist.

```javascript
// Daten auswählen:
var dbErgebnisse = _db.query(
  'SELECT name FROM tabelle_name WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let name = null;
// Stellt sicher, dass Daten vorhanden sind, und es kann das 
// Größer-als-Symbol (ergebnis.length > 1) verwendet werden, 
// falls mehr als ein Datensatz vorhanden ist:
if (dbErgebnisse.size() >= 1) {
  // Um direkt auf den Wert von name zuzugreifen:
  name = dbErgebnisse.get(0).getString('name');
}
```

## Schleifeniteration über die Datensätze

Falls die Auswahl **mehrere Ergebnisse** liefert, können Sie mit der 'for'-Schleife wie folgt auf die Daten zugreifen:

```javascript
// Abfrage ausführen
const dbErgebnisse = _db.query('SELECT id, name FROM tabelle_name');

// Initialisiert die Variable, damit sie Werte aufnehmen kann
const eintraege = _val.init();

// Iteration über alle Ergebnisse, um jeden einzelnen Wert zu übernehmen
for (const dbErgebnis of dbErgebnisse) {
    eintraege.push(
        _val.map()
            .set("uid", dbErgebnis.getString("uid"))
            .set("name", dbErgebnis.getString("name"))
    );
}

// Gibt die neue Datenliste in der Datenausgabe aus:
_out.json(eintraege);
```

Wenn Sie Fragen haben, zögern Sie nicht, uns zu kontaktieren; beachten Sie die Hinweise im Footer dieser Website.

Viel Erfolg bei der Entwicklung!