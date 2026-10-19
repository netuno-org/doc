---
id: configuration
title: Konfiguration
sidebar_label: Konfiguration
---

## Grundlegende Konfiguration einer Anwendung

Jede in Netuno erstellte Anwendung besitzt spezifische Konfigurationen, die definieren, wie sie sich mit Datenbanken, Zugriffsschlüsseln und anderen grundlegenden Parametern verbinden soll.

Netuno verwendet ein intelligentes System, das diese Konfigurationen entsprechend der Umgebung organisiert, in der die Anwendung läuft – sei es lokal, auf einem offiziellen Server oder an einem beliebigen anderen Ort.

Die Konfigurationen Ihrer Anwendung sind im Ordner **config** zentralisiert, der sich im Stammverzeichnis Ihres Projekts befindet.

**Standardpfad:** `meine-app/config`

### Ausführungsumgebungen

Innerhalb des Ordners config werden die Dateien entsprechend der Umgebung benannt, für die sie erstellt wurden. Netuno lädt automatisch nur die Dateien, die der Umgebung entsprechen, in der es gerade ausgeführt wird:

- **Entwicklung**: Dateien mit der Benennung `_development` werden nur gelesen, wenn die Netuno-Umgebung auf Entwicklung gesetzt ist.

- **Produktion**: Dateien mit der Benennung `_production` werden nur gelesen, wenn die Netuno-Umgebung auf Produktion gesetzt ist.


### Typen von Konfigurationsdateien

Für jede Umgebung können Sie zwei Dateitypen verwenden, die zusammenarbeiten:

### JSON

- `_development.json` 
- `_production.json`

**Funktion:** Statische Definitionen und Parametrisierungen speichern.

**Beispiel:** Datenbank-Anmeldeinformationen, URLs externer APIs und feste Konfigurationen ablegen.

### JS

- `_development.js` 
- `_production.js`

**Funktion:** Logik zum Zeitpunkt des Ladens der Konfiguration ausführen.

**Beispiel:** Konfigurationen dynamisch ändern oder erforderliche initiale Aufgaben und Verarbeitungen ausführen, bevor die Anwendung vollständig läuft.


### Festlegung der allgemeinen Umgebung

Damit Ihre Anwendungen wissen, welche Konfiguration sie verwenden sollen, müssen Sie dem Netuno-Server mitteilen, in welchem „Modus“ er arbeitet. Diese globale Konfiguration wird in einer einzigen Datei im Netuno-Stammverzeichnis definiert.

1. **Lokalisieren Sie die globale Konfigurationsdatei:** Gehen Sie zum Stammordner, in dem Netuno installiert wurde. Suchen und öffnen Sie die Datei `config.js`.
2. **Finden Sie die Umgebungsvariable:** Suchen Sie innerhalb der Datei nach der Eigenschaft `config.env`.
3. **Legen Sie die gewünschte Umgebung fest:** Ändern Sie den Wert der Variablen entsprechend der Umgebung, die Sie aktivieren möchten. 


#### Entwicklungsumgebung
Wird verwendet, während Sie auf Ihrem eigenen Rechner programmieren und testen.

```javascript
// In der Datei ./config.js im Netuno-Stammverzeichnis
config.env = 'development'
```

#### Produktionsumgebung
Wird verwendet, wenn Ihr Projekt fertiggestellt ist und auf dem offiziellen Server für die Benutzer läuft.

```javascript
// In der Datei ./config.js im Netuno-Stammverzeichnis
config.env = 'production'
```

#### Weitere Umgebungen (benutzerdefiniert)

Netuno ist flexibel und ermöglicht es Ihnen, benutzerdefinierte Umgebungsnamen zu erstellen, z. B.: `test`, `homologation` oder `staging`.

```javascript
// In der Datei ./config.js im Netuno-Stammverzeichnis
config.env = 'test'
```

> Die Konfiguration der Anwendung muss mit `_` beginnen, die Erweiterung `.json` haben und außerdem eine Datei mit der Erweiterung `.js` besitzen, beide aus derselben Umgebung.

## Git-Repository

Wenn Sie Git zur Versionierung des Codes Ihrer Anwendung verwenden, ist es entscheidend, die Sicherheit Ihrer Daten zu gewährleisten. 

Konfigurationsdateien enthalten häufig sensible Informationen wie Datenbankpasswörter, Schlüssel privater APIs usw. Deshalb **sollten Sie die echten Konfigurationsdateien niemals in das Repository übertragen**.

Um sicherzustellen, dass Ihre Passwörter nicht preisgegeben werden und das Projekt gleichzeitig für andere Entwickler dokumentiert bleibt, befolgen Sie diese beiden Schritte:

### 1. Echte Dateien ausblenden

Öffnen (oder erstellen) Sie im Stammverzeichnis Ihrer Anwendung die Datei `.gitignore`. Fügen Sie die Pfade Ihrer `.json`-Konfigurationsdateien hinzu, damit Git sie vollständig ignoriert.

**Beispiel für den Inhalt der `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Beispiel-Konfigurationsdatei

Erstellen Sie eine Beispieldatei mit den erforderlichen Daten, damit neue Entwickler das Projekt einfach konfigurieren können.

- Gehen Sie zum Ordner config/ Ihrer Anwendung.
- Erstellen Sie eine Datei namens `beispiel.json`.
- Kopieren Sie die Struktur Ihrer `_development.json` hinein und lassen Sie nur die Feldnamen stehen.

Sehen Sie, wie Ihre **config/beispiel.json** aussehen sollte:

```json
{
  "database": {
    "host": "HIER_DEN_HOST_EINTRAGEN",
    "user": "IHR_BENUTZER",
    "password": "IHR_PASSWORT"
  }
}
```

#### Zugriff auf die Konfiguration im Code

Nachdem Sie Ihre Variablen und Schlüssel in den Konfigurationsdateien (wie `_development.json`) definiert haben, müssen Sie sie in der Logik Ihrer Anwendung verwenden – zum Beispiel beim Erstellen eines Dienstes, der sich mit einer API verbindet und ein gespeichertes *Token* für den Zugriff benötigt. 

In Netuno können diese Konfigurationen über die native Ressource `_app` abgerufen werden.

#### Abrufen der Daten

Innerhalb jedes vom Server ausgeführten Codes (z. B. im Ordner `server/services/`) verwenden Sie die Funktion `_app.config()`, um die Werte aus Ihrer aktiven Konfigurationsdatei abzurufen.

Um zu verstehen, wie die Verknüpfung erfolgt, nehmen Sie an, dass Sie in Ihrer Konfigurationsdatei (`config/_development.json`) Folgendes definiert haben:

```json
{
  "name": "Meine Anwendung",
  "version": 2
}
```
 
 Um den Wert des Schlüssels „name“ abzurufen und ihn in der Konsole (Log) des Servers auszugeben, würden Sie in Ihrem .js-Dienst den folgenden Code verwenden:

```javascript
// 1. Netuno greift auf die JSON-Datei zu, sucht den Schlüssel "name" und übernimmt seinen Wert.
// 2. Anschließend speichert er diesen Wert in der JavaScript-Variablen, die wir 'nameDerApp' nennen.
let nameDerApp = _app.config().getString("name");

// 3. Gibt den Inhalt unserer Variablen im Netuno-Terminal aus: "Meine Anwendung"
_log.info(nameDerApp);
```

## Benutzerdefinierte Konfigurationen

Neben den Standardkonfigurationen für Datenbank und Server können Sie Ihre eigenen Konfigurationsvariablen erstellen. 

Dies ist sehr nützlich, um Geschäftsregeln zu definieren, wie zum Beispiel „maximale Anzahl von Elementen pro Seite“ oder „Zeitintervall für den E-Mail-Versand“, ohne jedes Mal den Anwendungscode ändern zu müssen, wenn sich diese Regeln ändern.

Diese Variablen werden im Block `"settings"` in Ihren JSON-Konfigurationsdateien wie `_development.json` oder `_production.json` gespeichert.  

### JSON-Struktur und Sichtbarkeit (öffentlich vs. privat)

Beim Erstellen Ihrer Konfigurationen ist es entscheidend, zu trennen, was die Benutzeroberfläche (Frontend) sehen darf und was ausschließlich auf dem Server (Backend) geschützt bleiben muss.

* **Private Variablen:** Befinden sich im Block `"settings"`. Nur der Server hat Zugriff.
* **Öffentliche Variablen:** Befinden sich im Unterblock `"public"`. Sie werden an die Benutzeroberfläche (Ordner `ui`) des Administrationsbereichs gesendet, wie bei der Entwicklung von Dashboards.

**Beispiel für die Struktur Ihrer `.json`-Datei:**

```json
{
  ...
  "settings": {
    "public": {
      "elementeProSeite": 10
    },
    "emailIntervall": 10
  }
}
```

### Zugriff auf die Konfiguration im Code
Die Art und Weise, diese Daten abzurufen, hängt davon ab, wo Sie programmieren:

**1. Auf dem Server / Backend (Dienste)**

Um auf allgemeine oder private Konfigurationen zuzugreifen, verwenden Sie die Ressource `_app.settings()` in Ihrem Servercode (.js-Dateien im Ordner server).  

```javascript
// Greift auf die private Variable "emailIntervall" zu
const emailIntervall = _app.settings().getInt("emailIntervall");

_log.info("Das definierte Intervall beträgt: " + emailIntervall);
```

**2. In der Oberfläche / Frontend (UI)**

Bei der Entwicklung der Oberfläche (Dateien im Ordner ui) können Sie auf alles zugreifen, was im Block „public“ definiert wurde. Verwenden Sie dazu das globale Objekt `netuno.config.app.settings`.

```javascript
// Greift im Frontend auf die öffentliche Variable "elementeProSeite" zu
const elementeProSeite = netuno.config.app.settings.elementeProSeite;

console.log("Anzeige von " + elementeProSeite + " Elementen in der Tabelle.");
```
## Fazit

Das Konfigurationssystem von Netuno bietet Flexibilität und strukturelle Sicherheit für Ihre Anwendung. Damit ist es möglich:

* **Mehrere Umgebungen verwalten:** Unterschiedliche Ausführungskontexte (Entwicklung, Produktion usw.) mit unabhängigen Parametrisierungen erstellen und unterstützen.
* **Variablen anpassen:** Den Block `settings` verwenden, um geschäftsspezifische Konfigurationen hinzuzufügen. 
* **Verantwortlichkeiten trennen:** Backend-beschränkte Konfigurationen von denen isolieren und schützen, die im Frontend zugänglich sein sollen.