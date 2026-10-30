---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Definition des Dienstschemas.

## Einführung

OpenAPI ist eine Spezifikation, die die von REST-APIs angebotenen Dienste standardisiert und dabei hilft zu verstehen, wie die Dienste definiert sind, etwa Adresse, Eingaben und Ausgaben.

Sie ermöglicht die Generierung einer Testoberfläche und die automatische Generierung von Clients zur Integration mit anderen Technologien.

> Mehr zu <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Aktivierung und Konfiguration

Um OpenAPI in Ihrer Anwendung in Netuno zu aktivieren und zu konfigurieren, müssen Sie die Konfigurationsdatei der Anwendung für die Umgebung bearbeiten, die Sie verwenden, z. B.:

- `📂 config/_development.json`
- `📂 config/_production.json`

Fügen Sie die folgenden Parameter ein und passen Sie sie an:

```
...
    "openapi": {
        "host": "http://meine-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://meine-app.local.netu.no:9000/services",
                "description": "Lokale Entwicklung"
            }
        ]
    },
...
```

Stellen Sie sicher, dass die Konfigurationen sinnvoll sind; im obigen Beispiel gilt dies für die Umgebung _development_.

> In der Produktion sollte `https` verwendet werden.

### _openapi.json in den Diensten

Konfigurieren Sie im Stammverzeichnis der Dienste die Datei `_openapi.json`.

Der vollständige Pfad innerhalb der Anwendung ist:

- `📂 server/services/_openapi.json`

Der Inhalt dieser Datei sieht wie folgt aus:

```
{
  "info": {
    "title": "Meine Anwendung",
    "description": "REST API meiner Anwendung, mit Bedacht verwenden.",
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

Passen Sie Titel und Beschreibung an Ihren Anwendungsfall an.

## Eingabe

Durch die Konfiguration von _Schema_-Dateien für Eingaben kann Netuno die empfangenen Parameter validieren, indem es sie mit den Regeln des JSON Schema vergleicht.

> Mehr zum <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Falls bei der Validierung ein Fehler auftritt, wird die Ausführung des Dienstes verhindert, im `log` von Netuno wird ein Fehler angezeigt, und an den Konsumenten des Dienstes wird der HTTP-Statuscode **400** (_Bad Request_) zurückgegeben.

Um die Regeln für Eingabeparameter zu konfigurieren, muss eine Datei mit der Erweiterung `in.json` neben der Codedatei des Dienstes erstellt werden; der Name muss derselbe sein.

- Der Dienst `detail.js` müsste die Datei `detail.in.json` haben.
- Der Dienst `detail.post.js` müsste die Datei `detail.post.in.json` haben.
- Der Dienst `detail/post.js` müsste die Datei `detail/post.in.json` haben.

Beispiel für den Inhalt von `in.json`:

```
{
    "tags":[
      "Produktdienste"
    ],
    "summary": "Produktdetail",
    "description": "Es werden alle Detailfelder des angegebenen Produkts abgerufen.",
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

Netuno unterstützt einige zusätzliche Typen, die vom JSON Schema nicht unterstützt werden, wie `string-not-empty`, `array-not-empty`, `id` und `uid` (oder `uuid` oder auch `guid`).

> Mehr zu dieser Spezifikation unter <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Ausgabe

Durch die Konfiguration von _Schema_-Dateien für Ausgaben kann Netuno die gesendeten Parameter validieren, indem es sie mit den Regeln des JSON Schema vergleicht.

> Mehr zum <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Falls bei der Validierung ein Fehler auftritt, wird die Ausgabe trotzdem an den Konsumenten des Dienstes gesendet, die Meldungen zu Validierungsfehlern werden jedoch im `log` von Netuno angezeigt.

Um die Regeln für Ausgabeparameter zu konfigurieren, muss eine Datei mit der Erweiterung `out.200.json` neben der Codedatei des Dienstes erstellt werden; der Name muss derselbe wie der des Dienstes sein.

Dabei ist **200** der HTTP-Statuscode der Antwort; um mehrere HTTP-Statuscodes zu unterstützen, fügen Sie einfach weitere JSON-Dateien mit der abweichenden Nummer hinzu.

Einige Beispiele:
- Der Dienst `speichern.js` müsste die Datei `speichern.out.200.json` haben.
- Der Dienst `speichern.post.js` müsste die Datei `speichern.post.out.200.json` haben.
- Der Dienst `speichern/post.js` müsste die Datei `speichern/post.out.200.json` haben.

Beispiel für den Inhalt von `out.200.json`:

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

Netuno unterstützt einige zusätzliche Typen, die vom JSON Schema nicht unterstützt werden, wie `string-not-empty`, `array-not-empty`, `id` und `uid` (oder `uuid` oder auch `guid`).

> Mehr zu dieser Spezifikation unter <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Schema-Import

Netuno unterstützt das Importieren von _Schemas_, wodurch Teile des _Schemas_ in mehreren JSONs wiederverwendet werden können.

> Durch das Importieren von _Schemas_ wird Code-Duplizierung vermieden.

Erstellen Sie den Ordner `_schema` im Stammverzeichnis des Diensteordners unter:

- `📂 server/services/_schema`

In der JSON-Konfiguration ist es nun möglich, _Schemas_ mit dem Parameter `_schema` im JSON zu importieren, zum Beispiel:

```
{
    "summary": "Produkte löschen",
    "description": "Ermöglicht das endgültige Löschen von Produkten.",
    "_schema": "get/nur-code.in"
}
```

Das bedeutet, dass die Datei `_schema/get/nur-code.in.json` importiert wird, in der sich der Parameter `_schema` befindet.

## Spezifikation und Tests

Um die vollständige Spezifikation aller Dienste zu generieren, die OpenAPI mit JSON Schema unterstützen, rufen Sie zum Beispiel auf:

- http://localhost:9000/services/_openapi

Es wird ein JSON mit der gesamten Spezifikation angezeigt.

Zum Testen kopieren Sie das gesamte generierte JSON.

Öffnen Sie den Swagger Editor: https://editor.swagger.io/

Löschen Sie den vorhandenen Inhalt auf der linken Seite, fügen Sie das JSON ein und bestätigen Sie die Frage zur Konvertierung von JSON nach YAML mit Ja.

Mit der rechts generierten Oberfläche können Sie alle verfügbaren Dienste besser verstehen und Tests durchführen.

Außerdem können automatisch Clients für andere Technologien generiert werden.

## Programmatisch

Im Ordner `_schema` können wir `.js`-Dateien verwenden, die sowohl bei der Generierung der OpenAPI-Definition als auch im Validierungsprozess für Eingabe und Ausgabe der Dienste ausgeführt werden.

Durch die Programmierung des Schemas können wir dynamische Validierungen erzeugen, zum Beispiel:
- Nur einen Code akzeptieren, der in der Datenbank existiert.
- Mit der `UID` den Datensatz aus der Datenbank abrufen und mit den Diensten teilen.
- Im Fall von `POST` oder `PUT` wird ein anderer Schema-Typ erzeugt als im Fall von `DELETE`.

### Beispiel mit Werteliste

Stellen Sie sich vor, wir haben einen Dienst, der den Code einer bestimmten Kategorie empfängt.

Wir können nicht jeden beliebigen Wert als Code empfangen, da es sich um einen Wert handeln kann, der keinem gültigen Kategoriecode entspricht.

Daher können wir einschränken, dass nur die Codes akzeptiert werden, die in der Datenbank registriert sind.

Das Schema wird erstellt unter: `server/services/_schema/kategorie/codes.js`

```javascript
const dbKategorien = _db.query("SELECT code FROM kategorie")

const listeCodes = _val.list()

for (const dbKategorie of dbKategorien) {
    listeCodes.add(dbKategorie.getString("code"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listeCodes
    )
```

> In `listeCodes` sind alle in der Datenbank registrierten Kategoriecodes enthalten.

Im Dienst können wir das folgende `JSON` haben, das das Schema `kategorie/codes` verwendet:

```json
{
  "summary": "Listet die Produkte in der Kategorie auf",
  "description": "Ruft alle Produkte ab, die einer bestimmten Kategorie zugeordnet sind.",
  "type": "object",
  "properties": {
    "kategorie": {
      "type": "object",
      "properties": {
        "code": {
          "_schema": "kategorie/codes"
        }
      },
      "required": [
        "code"
      ]
    }
  },
  "required": [
    "kategorie"
  ]
}
```

Auf diese Weise können wir sicherstellen, dass der Dienst nur ausgeführt wird, wenn der Code gültig ist.

### Beispiel mit globalem Objekt

Stellen Sie sich vor, wir haben mehrere Dienste, die die `UID` des Kunden empfangen, und in jedem Dienst müssen wir auf die Datenbank zugreifen, um die Daten des Kunden zu seiner `UID` abzurufen.

Wir können dies in einem programmierten Schema zentralisieren, das anhand der empfangenen `UID` des Kunden die Kundendaten aus der Datenbank abruft und in einem globalen Objekt speichert, das im Code der Dienste zugänglich ist.

So werden die Kundendaten immer global und automatisch geladen, wenn wir eine Kunden-`UID` empfangen.

Wir erstellen ein programmiertes Schema unter: `server/services/_schema/kunde.js`

```javascript
const kunde = _req.getValues('kunde', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbKunde = _db.get('kunde', kunde.getString("uid"))
    
    if (dbKunde == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'kunde-nicht-gefunden')
        )
        _service.cancel()
    }
    
    _val.global().set('kunde', dbKunde)
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

> Mit `_service.isGeneratingOpenAPIDefinition()` können wir prüfen, ob die OpenAPI-Definition generiert wird; andernfalls handelt es sich um die Ausführung einer HTTP-Anfrage.
> 
> Falls die `UID` des Kunden nicht gefunden wird, wird 404 zurückgegeben und die Ausführung des Dienstes abgebrochen.
> 
> Beachten Sie, dass wir `_val.global()` verwenden, wodurch Daten global zwischen allen Codedateien geteilt werden können, die bei der Verarbeitung der HTTP-Anfrage ausgeführt werden.

Im weiteren Verlauf des Beispiels haben wir einen Dienst, der die vom Kunden getätigten Einkäufe auflistet.

Wir haben die Eingabevalidierung für den Dienst in: `server/services/kunde/einkaeufe/post.in.json`

```json
{
    "summary": "Einkaufsliste",
    "description": "Listet die vom Kunden getätigten Einkäufe auf.",
    "type": "object",
    "properties": {
        "kunde": {
            "_schema": "kunde"
        }
    },
    "required": [
        "kunde"
    ]
}
```

> Beachten Sie, dass der Wert von `"_schema"` des Kunden der Name der Codedatei ist, die wir zuvor im Schema programmiert haben.

Und im Code des Kundeneinkaufsdienstes in: `server/services/kunde/einkaeufe/post.js`

```javascript
const dbKunde = _val.global().getValues('kunde')
...
```

Über `_val.global()` rufen wir die Kundendaten aus der Datenbank ab, die automatisch durch den Schema-Code geladen wurden.

### Beispiel mit HTTP-Methode

Wir können für jeden HTTP-Methodentyp ein anderes Schema zurückgeben.

Zum Beispiel können wir per Code ein Schema für Operationen zum Erstellen, Bearbeiten oder Entfernen von Netzwerkports generieren:

- Im Fall von POST wird die Erstellungsoperation ausgeführt, daher enthält es keine UID, erfordert aber Name und Portnummer.
- Im Fall von PUT wird die Bearbeitungsoperation ausgeführt, es muss UID, Name und Netzwerkportnummer erfordern.
- Bei PUT oder DELETE wird die UID benötigt, um die jeweiligen Bearbeitungs- und Entfernungsoperationen auszuführen.

```javascript
const eigenschaften = _val.map()
const erforderlich = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    eigenschaften.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    erforderlich.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    eigenschaften
        .set(
            'name',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinimum)
                .set('maximum', portMaximum)
        )
    erforderlich
        .add('name')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        eigenschaften
    )
    .set(
        'required',
        erforderlich
    )
```

## Videos

Im Folgenden finden Sie einige Beispielvideos zur Entwicklung einer API mit OpenAPI-Integration:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Fazit

Mit der Unterstützung von OpenAPI können wir Validierungsregeln mit JSON Schema erstellen, was folgende Vorteile bietet:

- Größere Sicherheit der Daten gewährleisten, die in die Dienste injiziert werden.
- Warnung im `log`, falls die Ausgabe des Dienstes nicht der Spezifikation entspricht.
- Erzeugt auf einfache Weise eine Navigations- und Testoberfläche für die Dienste.