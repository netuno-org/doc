---
id: services
title: Dienste
sidebar_label: Dienste
---

Die Web-REST-Dienste in Netuno sind JavaScript-Skripte, die auf dem Server (Backend) ausgeführt werden und es ermöglichen, direkt mit der Datenbank der Anwendung zu interagieren. Damit können Sie:

* Daten aus der Datenbank lesen
* Neue Datensätze einfügen
* Bestehende Daten aktualisieren
* Daten entfernen
* Komplexe Logik ausführen, die Berechnungen oder Datenverarbeitung umfasst.
* Mit externen Systemen integrieren.

Jeder Dienst wird über eine URL (Endpunkt) aufgerufen. Dadurch können Weboberflächen (Frontend), mobile Anwendungen oder andere externe Systeme die Daten Ihrer Anwendung sicher und standardisiert nutzen.

#### Voraussetzungen

* Grundkenntnisse in _**JavaScript, React.js**_ und _**HTML**_ besitzen.
* Vertrautheit mit SQL und der Ordnerstruktur einer Anwendung.
* Es wird empfohlen, Grundkenntnisse in **Formularen**, **Feldern** und **Beziehungen** zu haben.

Falls Sie bei diesen Schritten Fragen haben, lesen Sie:

* [Formulare](/docs/academy/ui/forms)
* [Felder](/docs/academy/ui/fields)
* [Beziehungen zwischen Formularen](/docs/academy/ui/relationships-between-forms)



## Erste Schritte

Wir verwenden eine Anwendung zur Arbeitszeiterfassung, deren Ziel es ist, die insgesamt geleisteten Stunden pro Mitarbeiter zu berechnen.

**Anwendungsstruktur:**

![anwendungsstruktur.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
Das Feld **id** wird von Netuno in allen Tabellen automatisch erstellt und verwaltet und muss nicht manuell definiert werden.
:::

Die Dienste einer Netuno-Anwendung befinden sich im Ordner **server/services/**.

#### Ordnerstruktur

```text
meine-app/
└── server/
    └── services/
        ├── mitarbeiter.js   ← Dienstdatei
        └──... 
```

## Dienst erstellen

Erstellen Sie im Ordner **server/services/** eine neue Datei, die die URL Ihres Dienstes festlegt. Benennen Sie die Datei in diesem Beispiel `mitarbeiter.js`.

:::tip
- Verwenden Sie nur **Kleinbuchstaben**.
- Wenn der Name zusammengesetzt ist, trennen Sie die Wörter mit einem **Bindestrich (-)**.
- Beispiele: **mitarbeiter.js**, **stundenbericht.js**, **eintrag-erfassungen.js**.
::: 


## Datenbank abfragen

Netuno stellt das globale Objekt **_db** bereit, um nativ mit der Datenbank zu interagieren.

Zum Ausführen einer SQL-Abfrage verwenden wir die Methode `_db.query()`.


```javascript
// Führt eine SQL-Abfrage aus, die die Gesamtstunden pro Mitarbeiter gruppiert
const dbEintraege = _db.query(`
    SELECT DISTINCT
        mitarbeiter.name, SUM(DATEDIFF(HOUR, eintrag.beginn, eintrag.ende)) AS gesamt
    FROM mitarbeiter INNER JOIN eintrag
        ON mitarbeiter.id = eintrag.mitarbeiter_id
    WHERE mitarbeiter.aktiv = true AND eintrag.aktiv = true
    GROUP BY mitarbeiter.name
    ORDER BY gesamt ASC
`);
```

:::note Die SQL-Abfrage verstehen

* **INNER JOIN**: Verknüpft die Tabellen mitarbeiter und eintrag über den Fremdschlüssel mitarbeiter_id.

* **DATEDIFF(HOUR, beginn, ende)**: Berechnet die Differenz in Stunden zwischen Beginn und Ende.

* **SUM(...) AS gesamt**: Summiert alle erfassten Stunden jedes Mitarbeiters.

* **WHERE ... aktiv = true**: Filtert die Abfrage, sodass nur Mitarbeiter und Einträge berücksichtigt werden, die nicht gelöscht wurden (aktiv).

* **GROUP BY mitarbeiter.name**: Gruppiert die Summen nach dem Namen jedes Mitarbeiters.

* **ORDER BY gesamt ASC**: Sortiert das Endergebnis vom niedrigsten zum höchsten Wert der geleisteten Stunden.
:::

## Daten verarbeiten

Die Methode `_db.query()` gibt die Daten in einem internen Netuno-Format zurück.

Um eine saubere Antwort im JSON-Format zu senden, müssen diese Daten mit den globalen Objekten **_val.list()** (für Arrays) und **_val.map()** (für Objekte) transformiert werden.

```javascript
// Erstellt eine leere Liste zum Speichern der verarbeiteten Daten
const liste = _val.list();

// Iteriert über jeden von der SQL-Abfrage zurückgegebenen Datensatz
for (const dbEintrag of dbEintraege) {
    liste.add(
        _val.map()
            .set("name", dbEintrag.getString("name"))   // Extrahiert den Namen als Text
            .set("gesamt", dbEintrag.getInt("gesamt"))    // Extrahiert die Gesamtsumme als Ganzzahl
    );
}
```
### Verwendete Methoden

| Ressource | Beschreibung |
|---------|-----------|
| **_val.list()** | Erstellt eine Liste (entspricht einem Array in JS). |
| **_val.map()** | Erstellt ein Schlüssel-Wert-Objekt (entspricht einem Object oder JSON). |
| **.add(...)** | Fügt ein neues Element am Ende der Liste hinzu. |
| **.set("schlüssel", wert)** | Legt eine neue Eigenschaft und ihren jeweiligen Wert in der Map fest. |
| **.getString("spalte")** | Extrahiert den Wert der angegebenen Spalte als Text (String). |
| **.getInt("spalte")** | Extrahiert den Wert der angegebenen Spalte als Ganzzahl (Integer). |

## Datenrückgabe

Mit dem Objekt **_out** wird die verarbeitete Liste im JSON-Format an den Client gesendet.

```javascript
// Sendet die Liste als HTTP-Antwort im JSON-Format
_out.json(liste);
```

## Praxisbeispiel

In diesem letzten Schritt fassen wir alle gelernten Konzepte zusammen, um einen funktionsfähigen Dienst zu erstellen.

Der folgende vollständige Code führt eine Abfrage an der Datenbank aus, um die insgesamt geleisteten Arbeitsstunden zu berechnen, und gibt diese Daten im JSON-Format zurück.

```javascript
// 1. Fragt die Gesamtzahl der von jedem aktiven Mitarbeiter geleisteten Stunden ab
const dbEintraege = _db.query(`
    SELECT DISTINCT
        mitarbeiter.name, SUM(DATEDIFF(HOUR, eintrag.beginn, eintrag.ende)) AS gesamt
    FROM mitarbeiter INNER JOIN eintrag
        ON mitarbeiter.id = eintrag.mitarbeiter_id
    WHERE mitarbeiter.aktiv = true AND eintrag.aktiv = true
    GROUP BY mitarbeiter.name
    ORDER BY gesamt ASC
`);

// 2. Erstellt die Datenstruktur für die Antwort
const liste = _val.list();

// 3. Verarbeitet und ordnet die Ergebnisse zu
for (const dbEintrag of dbEintraege) {
    liste.add(
        _val.map()
            .set("name", dbEintrag.getString("name"))
            .set("gesamt", dbEintrag.getInt("gesamt"))
    );
}

// 4. Gibt die Daten im JSON-Format zurück
_out.json(liste);
```

### Zugriff auf den Dienst

Nachdem Sie Ihren Dienst in Netuno erstellt und konfiguriert haben, kann er direkt im Browser getestet oder in andere Anwendungen integriert werden.

#### Zugriffsarten

Der Dienst kann über folgende Wege genutzt werden:

- **Browser:** Für schnelle Tests von GET-Methoden.

- **HTTP-Clients:** Tools wie Postman, Insomnia oder Thunder Client.

- **Frontend:** Über fetch-Anfragen oder Bibliotheken wie Axios.

#### URL-Struktur

Standardmäßig ordnet Netuno die im Dienstordner erstellten Dateien automatisch Webadressen zu.

Wenn Sie lokal auf dem Standardport laufen, folgt die Adresse diesem Muster:

http://localhost:9000/services/mitarbeiter



:::info Wie funktioniert das Routing?
Netuno verwendet ein automatisches Routing-System, das auf dem Dateisystem basiert:

**Quellordner:** Alle Dateien in server/services/ werden zu Routen.

**Zuordnung:** Die Datei **mitarbeiter.js** wird in den Endpunkt **/services/mitarbeiter** umgewandelt.

**Erweiterungen:** Beachten Sie, dass die Erweiterung **.js** in der URL weggelassen wird. Optional kann das Suffix **.netuno** verwendet werden (z. B. /services/mitarbeiter.netuno), aber der Zugriff ohne Erweiterung ist der empfohlene Standard, da er sauberer ist.
:::

**Beispiel einer HTTP-Antwort:**
Wenn passende Daten in Ihrer Datenbank vorhanden sind, sieht die vom Server zurückgegebene Antwort ähnlich aus wie diese:

```json
[
    {
        "name": "Lena Schmidt",
        "gesamt": 40
    },
    {
        "name": "Karl Weber",
        "gesamt": 35
    },
    {
        "name": "Maria Hoffmann",
        "gesamt": 45
    }
]
```

## Globale Systemobjekte

Bei der Entwicklung von Diensten in Netuno verwenden wir häufig native Objekte, die die Kommunikation mit der Datenbank, die Steuerung von Anfragen und die Ausgabe von Informationen erleichtern.

Diese Objekte sind vorkonfigurierte Instanzen, die in Ihren Server-Skripten **(Dateien .js)** sofort einsatzbereit sind. Sie machen das Importieren externer Bibliotheken für grundlegende Aufgaben wie SQL-Abfragen oder das Lesen von Parametern überflüssig.

| Objekt | Beschreibung |
|--------|-----------|
| **_db**| Ausführen von Datenbankoperationen (query, insert, update, delete). |
| **_val** | Erstellung und Manipulation von Datenstrukturen (list, map). |
| **_out** | Senden von Antworten an den Benutzer (JSON, HTML...). |
| **_req** | Zugriff auf die in der Benutzeranfrage gesendeten Parameter (GET, POST). |
| **_log**| Protokollierung von Fehler- oder Debug-Meldungen in der Serverkonsole. |



Falls Sie Schwierigkeiten haben oder Verbesserungsvorschläge haben, kontaktieren Sie uns.

Unser Team und unsere Community sind bereit zu helfen.

Viel Erfolg bei der Entwicklung!