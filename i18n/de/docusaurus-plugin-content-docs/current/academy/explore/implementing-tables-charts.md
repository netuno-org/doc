---
id: implementing-tables-charts
title: Implementierung von Tabellen und Diagrammen
sidebar_label: Tabellen und Diagramme
---

In diesem Tutorial erstellen wir die Oberfläche und die Logik einer einfachen Anwendung mit Schwerpunkt auf Datenvisualisierung. Die Projektentwicklung behandelt folgende Themen:

- Die Erstellung von **„Formularen“**, **„Feldern“** und **„Beziehungen“** zur Strukturierung der Datenbank.
- Den Aufbau von **„REST-Webdiensten“**, um die Daten bereitzustellen und Informationen dynamisch in Tabellen und Diagrammen in der Anwendung anzuzeigen, mithilfe der Bibliotheken _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ und der Abhängigkeit _Chart.js_ sowie der Tabellenkomponente von <a href="https://ant.design/" target="_blank">Ant Design</a>.

Die gesamte visuelle Struktur des Projekts wird mit **HTML, JavaScript und React.js** entwickelt.
Es ist empfehlenswert, Grundkenntnisse in folgenden Bereichen zu haben:
- **JavaScript**
- **React.js**
- **HTML**

💡 **Falls Sie bei diesen Schritten Fragen haben, lesen Sie:**
   - [Leitfaden zur Oberfläche: Formulare](/docs/academy/ui/forms)
   - [Leitfaden zur Oberfläche: Felder](/docs/academy/ui/fields)
   - [Leitfaden zur Oberfläche: Beziehungen zwischen Formularen](/docs/academy/ui/relationships-between-forms)
   - [Leitfaden zur Oberfläche: REST-Webdienste](/docs/academy/explore/services)


## Endergebnis

Wenn Sie alle Schritte dieses Tutorials befolgen, erstellen Sie ein funktionsfähiges Dashboard im Arbeitsbereich von Netuno mit:

* Einer **Datentabelle**, die die Datensätze der Mitarbeiter und die Gesamtstunden auflistet.
* Einem dynamischen und farbigen **Balkendiagramm**, das diese Daten visuell darstellt.

![endergebnis-de.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Lösungsarchitektur

Bevor Sie Code schreiben, ist es wichtig zu verstehen, wie die Teile zusammenpassen. Die Lösung ist in **4 Schichten** unterteilt, die von oben nach unten kommunizieren:

```
DashboardContainer         (lädt die Daten vom Server)
       │
       ▼
DatenVisualisierung          (ordnet das Layout in zwei Spalten an)
       │
  ┌────┴────┐
  ▼         ▼
TabellenListe  Balkendiagramm        (rendern die empfangenen Daten)
```

:::tip
Der Vorteil dieser Architektur ist, dass jede Komponente **eine einzige Verantwortung** hat.
:::

## Schritt 1: Datenstruktur

Der erste Schritt besteht darin, die Formulare zu erstellen, die Beziehung zwischen ihnen zu konfigurieren und sie mit Daten zu füllen, um später die Tabelle und das Diagramm zu erzeugen.

Dies ist das Diagramm mit der Architektur der Formulare und den Feldern, die Sie in Ihrer Netuno-Umgebung nachbilden sollten:

![erster-schritt-de.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Wichtig:** Obwohl das Feld `id` im Diagramm erscheint, **muss es nicht manuell erstellt werden**. Netuno generiert diese Kennung automatisch direkt nach der Erstellung der Tabelle.

### Dashboard-Template

Um die Tabelle und das Diagramm anzuzeigen, benötigen wir einen Platz in der Oberfläche Ihrer Anwendung. Netuno stellt bereits ein Basistemplate für das Haupt-Dashboard bereit.

Öffnen Sie Ihren Code-Editor und suchen Sie die Datei:

```text
/apps/meineapp/server/templates/dashboard.html
```
*(Denken Sie daran, **meineapp** durch den tatsächlichen Namen Ihres Anwendungsordners zu ersetzen.)*

Sie werden folgende HTML-Codezeile bemerken:

```html
<div id="app-dashboard"></div>
```

## Schritt 2: Datendienst

Nun, da die Datenbank bereit und das HTML vorbereitet ist, müssen wir den „Boten“ erstellen (einen REST-Webdienst). Er ist dafür verantwortlich, zur Datenbank zu gehen, die Gesamtstunden jedes Mitarbeiters zu berechnen und diese Information fertig für die Tabelle und das Diagramm zu liefern.


### Dienstdatei erstellen

Die Dienste in Netuno werden im Ordner `server/services/` gespeichert. Navigieren Sie zum Verzeichnis Ihres Projekts und erstellen Sie die Datei `mitarbeiter.js`:

```text
/apps/meineapp/server/services/mitarbeiter.js
```
Der **DashboardContainer** erkennt die Sprache des Dashboards und ruft **/services/mitarbeiter** auf, wenn das Dashboard auf Deutsch steht, bzw. **/services/workers**, wenn es auf Englisch steht. Jede Sprache hat ihre eigene Dienstdatei.

### Code schreiben

Dieser Code führt drei Hauptaktionen mit den nativen Ressourcen von Netuno (**_db**, **_val** und **_out**) aus:

- **Abfrage _db.query:** Sucht nur die **aktiven** Mitarbeiter in der Datenbank und berechnet die Summe der geleisteten Stunden für jeden.

- **Verarbeitung _val.list und _val.map:** Ordnet das Ergebnis in einer sauberen Liste mit strukturierten Objekten.

- **Antwort _out.json:** Sendet die Daten im JSON-Format, damit die Oberfläche (React) sie lesen kann.

Öffnen Sie die Datei `mitarbeiter.js` und fügen Sie den folgenden Code ein:

```javascript
// 1. Abfrage: _db.query() führt das SQL aus und gibt die Liste der gefundenen Datensätze zurück.
const dbEintraege = _db.query(`
    SELECT DISTINCT
        mitarbeiter.name, SUM(DATEDIFF(HOUR, eintrag.beginn, eintrag.ende)) AS total
    FROM mitarbeiter INNER JOIN eintrag
        ON mitarbeiter.id = eintrag.mitarbeiter_id
    WHERE mitarbeiter.active = true AND eintrag.active = true
    GROUP BY mitarbeiter.name
    ORDER BY total ASC
`);

// 2. Datenverarbeitung: _val.list() erstellt eine leere Liste für die verarbeiteten Daten.
const liste = _val.list();

// Jede von der Datenbank zurückgegebene Zeile durchlaufen
for (const dbEintrag of dbEintraege) {
    liste.add(
        // _val.map() erstellt ein Objekt mit den Feldern, die React konsumiert
        _val.map()
            .set("name", dbEintrag.getString("name"))  // name → Feld "name"
            .set("total", dbEintrag.getInt("total"))   // Gesamtstunden → Feld "total"
    );
}

// 3. Antwort
// Sendet die endgültige Liste im JSON-Format an die React-Oberfläche.
_out.json(liste);
```
:::tip
- **Achten Sie auf die Feldnamen:** Die hier als **"name"** und **"total"** definierten Felder sind genau dieselben, die die React-Komponenten in den nächsten Schritten abrufen (dataIndex: 'name' und dataIndex: 'total'). Sie müssen identisch sein.

- **Zum Filter active = true:** Die Datenbank besitzt eine Spalte **active** in den Tabellen **mitarbeiter** und **eintrag**. Indem nur aktive Datensätze gefiltert werden, stellen wir sicher, dass archivierte oder deaktivierte Daten nicht in der Tabelle und im Diagramm erscheinen.
:::

## Schritt 3: Frontend-Umgebung (React)

Nun, da das Backend (Datenbank und Dienste) bereit ist, bereiten wir die visuelle Oberfläche vor.

Öffnen Sie das Terminal und folgen Sie den Schritten unten:

#### 1. Basisabhängigkeiten installieren
Navigieren Sie zum Ordner `ui` Ihrer Anwendung und installieren Sie die Pakete.

```bash
npm install
```

#### 2. Diagrammbibliotheken installieren

Da das Projekt Diagramme anzeigen wird, laden Sie die Bibliotheken herunter, die diese Zeichnung auf dem Bildschirm erzeugen:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Mehrere Sprachen verwalten

Installieren Sie die Bibliothek zur Verwaltung mehrerer Sprachen:

```bash
npm install react-intl
```

#### 4. Compiler starten (Watch)

Nachdem alles installiert ist, aktualisiert er bei jedem Speichern einer Datei automatisch den Bildschirm:

```bash
npm run watch
```

#### 5. Komponenten erstellen
Um das Projekt organisiert zu halten, erstellen Sie getrennte Komponenten für die Tabelle und das Diagramm.

Navigieren Sie zum Verzeichnis `src/components/` Ihrer Anwendung und erstellen Sie die Ordner:

* Tabelle: TabellenListe
* Diagramm: Balkendiagramm
* Container: DatenVisualisierung

```text
/apps/name_deiner_app/ui/src/components/TabellenListe/
/apps/name_deiner_app/ui/src/components/Balkendiagramm/
/apps/name_deiner_app/ui/src/containers/DatenVisualisierung/
```

## Schritt 4: Komponente TabellenListe

Die Komponente **TabellenListe** empfängt die Daten vom Dienst und erstellt die Spalten automatisch mit **Ant Design** – einer Bibliothek fertiger visueller Komponenten, die bereits in der Netuno-Oberfläche enthalten ist.

Navigieren Sie zum Ordner TabellenListe und erstellen Sie eine Datei `index.jsx`:

```text
/apps/name_deiner_app/ui/src/components/TabellenListe/index.jsx
```

Öffnen Sie die Datei und fügen Sie den folgenden Code ein:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Tabellenkomponente von Ant Design

import './index.less';

const meldungen = 'dashboardcontainer.datenvisualisierung.tabelle';

function TabellenListe({ daten = [] }) {
  // Definition der Überschriften und des Feldes, das in jeder Spalte angezeigt wird
  const spalten = [
    {
      title: <FormattedMessage id={`${meldungen}.mitarbeiter`} />, // Übersetzter Titel
      dataIndex: 'name',  // Feld "name" des vom Dienst zurückgegebenen JSON
    },
    {
      title: <FormattedMessage id={`${meldungen}.gesamt`} />,
      dataIndex: 'total', // Feld "total" des vom Dienst zurückgegebenen JSON
    }
  ];

  return (
    <Table
      columns={spalten}      // Struktur der Spalten
      dataSource={daten}      // Die Daten selbst (Liste von Objekten)
      pagination={false}     // Keine Paginierung: alle Datensätze auf einmal
      bordered={true}        // Mit sichtbaren Rändern in den Zellen
    />
  );
}

export default TabellenListe;
```

 **Den Code verstehen:**

Diese funktionale Komponente empfängt die Liste `daten` als Parameter (Prop) und übergibt sie direkt an `<Table>` von Ant Design.

Die Konfiguration **spalten** teilt Ant Design mit, welcher Titel in der Kopfzeile **title** angezeigt werden soll und welches Feld des JSON-Objekts in der Zelle `dataIndex` ausgefüllt werden soll. Ant Design kümmert sich automatisch um das gesamte HTML, die Rahmenstile und das Layout – es ist nicht nötig, dafür manuell CSS zu erstellen.

**Datei index.less:** Erstellen Sie die Datei `index.less` im selben Ordner. Sie kann vorerst leer bleiben, da Ant Design bereits die Basisgestaltung der Tabelle bereitstellt.


## Schritt 5: Komponente Balkendiagramm

Wir erstellen ein Balkendiagramm zur Visualisierung der Daten mit der Bibliothek **react-chartjs-2**. Diese Komponente empfängt die Daten, wandelt sie in das von Chart.js verstandene Format um, weist Farben zu und zeichnet das Diagramm auf dem Bildschirm.

Navigieren Sie zum Ordner `Balkendiagramm` und erstellen Sie eine Datei namens `index.jsx`:

```text
/apps/name_deiner_app/ui/src/components/Balkendiagramm/index.jsx
```
Öffnen Sie die Datei und fügen Sie den folgenden Code ein:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Balkendiagramm-Komponente
import { Chart, registerables } from 'chart.js';  // Kern von Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const meldungen = 'dashboardcontainer.datenvisualisierung.diagramm';

// PFLICHT: alle Elemente von Chart.js vor der Verwendung registrieren.
// Ohne diese Zeile wird das Diagramm nicht gerendert und es entsteht ein Fehler in der Konsole.
Chart.register(...registerables);

function Balkendiagramm({ daten }) {
  const intl = useIntl();
  const [diagrammDaten, setDiagrammDaten] = useState(null); // Daten im Format von Chart.js

  useEffect(() => {
    // Farbpalette mit 7 Farben für die Balken (zyklisch, wenn mehr als 7 Elemente vorhanden sind)
    const farben = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const beschriftungen = [];
    const werte = [];

    // Von Chart.js geforderte Datenstruktur
    const neueDiagrammDaten = {
      labels: [],       // Namen auf der X-Achse (horizontal)
      datasets: [
        {
          label: intl.formatMessage({ id: `${meldungen}.beschriftung` }), // Übersetzte Legende
          data: [],           // Werte auf der Y-Achse (Höhe der Balken)
          backgroundColor: [] // Farbe jedes Balkens
        }
      ]
    };

    // Über die empfangenen Daten iterieren und die Listen aufbauen
    for (const i in daten) {
      beschriftungen.push(daten[i].name);   // Name des Mitarbeiters → X-Achse
      werte.push(daten[i].total);  // Gesamtstunden → Höhe des Balkens

      // (i + 1) % 7: wenn "i" 7 erreicht, geht es zurück auf 0 und die Farben wiederholen sich zyklisch
      neueDiagrammDaten.datasets[0].backgroundColor.push(farben[(i + 1) % 7]);
    }

    neueDiagrammDaten.labels = beschriftungen;
    neueDiagrammDaten.datasets[0].data = werte;

    setDiagrammDaten(neueDiagrammDaten); // Im State speichern, um die erneute Darstellung auszulösen

  }, [daten]); // Bei jeder Änderung von "daten" erneut ausführen

  // Solange die Daten nicht verarbeitet wurden, wird nichts gerendert
  if (diagrammDaten == null) {
    return null;
  }

  return (
    <Bar data={diagrammDaten} />
  );
}

export default Balkendiagramm;
```
**Den Code verstehen:**

Diese Komponente hat drei Hauptaufgaben:

**Vorbereitung `useState`:** Startet die Komponente mit dem Zustand `null`, um die Verarbeitung der vom Server kommenden Daten abzuwarten.

**Datenverarbeitung `useEffect`:** Wenn die Daten über die Prop `daten` eintreffen, wird der Hook **useEffect** automatisch ausgelöst. Er definiert eine Farbpalette und verwendet eine **for**-Schleife, um die Informationen zu trennen: Die Namen der Mitarbeiter gehen in die Beschriftungen der X-Achse **labels**, die Gesamtstunden bestimmen die Höhe der Balken `data`, und jedem Balken wird zyklisch eine Farbe zugewiesen.

**Zeichnung auf dem Bildschirm `return`:** Verwendet die Komponente `<Bar>` der Bibliothek, um das Diagramm auf Basis der verarbeiteten und im Zustand gespeicherten Daten zu zeichnen.

**Datei index.less:** Erstellen Sie ebenfalls die Datei `index.less` im Ordner `Balkendiagramm`. Sie kann vorerst leer bleiben.


## Schritt 6: Visuelles Layout DatenVisualisierung

Nun, da die Komponenten für Tabelle und Diagramm fertig sind, benötigen wir einen Container, der sie nebeneinander auf dem Bildschirm positioniert.

Navigieren Sie zum Ordner **DatenVisualisierung** und erstellen Sie eine Datei namens `index.jsx`:

```text
/apps/name_deiner_app/ui/src/containers/DatenVisualisierung/index.jsx
```

Öffnen Sie die Datei und fügen Sie den folgenden Code ein:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Je nach Sprache übersetzbare Titel

import Balkendiagramm from "../../components/Balkendiagramm";
import TabellenListe from "../../components/TabellenListe";

import './index.less';

const meldungen = 'dashboardcontainer.datenvisualisierung';

function DatenVisualisierung({ daten = [] }) {
  return (
    <div>
      <div className="row">              {/* Bootstrap-Zeile */}

        {/* Linke Spalte: Tabelle */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading daten-visualisierung__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${meldungen}.tabelle.titel`} />
              </h3>
            </div>
            <div className="panel-body">
              <TabellenListe daten={daten} />   {/* Reicht die Daten an die Tabelle weiter */}
            </div>
          </div>
        </div>

        {/* Rechte Spalte: Diagramm */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading daten-visualisierung__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${meldungen}.diagramm.titel`} />
              </h3>
            </div>
            <div className="panel-body">
              <Balkendiagramm daten={daten} />    {/* Reicht dieselben Daten an das Diagramm weiter */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DatenVisualisierung;
```
**Den Code verstehen:**

Diese Komponente fungiert als visueller Organisator. Sie empfängt die Liste `daten` und verteilt sie ohne Transformation an die beiden Kindkomponenten.

Die Klassen `row` und `col-lg-6` stammen aus dem „Bootstrap Grid“ und teilen den Bildschirm in zwei Hälften: Die linke Spalte erhält die Tabelle, die rechte das Diagramm. Auf kleineren Bildschirmen (Mobiltelefonen) stapeln sie sich automatisch.

Die Klassen `panel`, `panel-heading` und `panel-body` erzeugen das visuelle Erscheinungsbild einer „Box mit Titel“ für jede Komponente.

**Datei index.less:** Erstellen Sie ebenfalls die Datei `index.less` in diesem Ordner für die spätere Gestaltung der Panels.

## Schritt 7: Dashboard-Container

Wir haben bereits die Dienste im Backend und die visuellen Komponenten im Frontend. Wir benötigen einen Container, der zum Server geht, die Daten abruft und sie an die **DatenVisualisierung** weiterreicht.

Netuno erzeugt bereits automatisch die Grundstruktur des Dashboards. Bearbeiten Sie die vorhandene Datei:

```text
/apps/name_deiner_app/ui/src/containers/DashboardContainer/index.jsx
```

Ersetzen Sie den Inhalt der Datei durch den folgenden Code:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Offizieller HTTP-Client von Netuno

import { Spin, message } from 'antd';           // Ladeanzeige und Fehlermeldungen

import DatenVisualisierung from "../DatenVisualisierung"; // Das visuelle Layout

import { useIntl } from 'react-intl';           // Unterstützung mehrerer Sprachen

import './index.less';

const meldungen = 'dashboardcontainer.datenvisualisierung';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [mitarbeiter, setMitarbeiter] = useState([]);   // State: Liste der Mitarbeiter
  const [laden, setLaden] = useState(false); // State: Wird gerade geladen?

  // Beim Öffnen der Seite die Suche automatisch auslösen
  useEffect(() => {
    ladeMitarbeiter();
  }, []);

  const ladeMitarbeiter = () => {
    setMitarbeiter([]);      // Vorherige Daten löschen
    setLaden(true);    // Ladeanzeige aktivieren

    _service({
      // Erkennt die Sprache des Dashboards und ruft die korrekte Dienst-URL auf
      url: intl.locale.indexOf('de') == 0 ? '/services/mitarbeiter' : '/services/workers',
      success: (antwort) => {
        setMitarbeiter(antwort.json); // Empfangene Daten im State speichern
        setLaden(false);
      },
      fail: (fehler) => {
        setLaden(false);
        console.error('Mitarbeiterdienst fehlgeschlagen.', fehler);
        message.error(intl.formatMessage({ id: `${meldungen}.ladefehler` }));
      }
    });
  };

  // Ermöglicht der übergeordneten Komponente (Dashboard), ladeMitarbeiter() über ref auszulösen
  useImperativeHandle(ref, () => ({
    ladeMitarbeiter
  }));

  return (
    <div ref={ref}>
      { laden == false
        ? <DatenVisualisierung daten={mitarbeiter} /> // Daten bereit: Dashboard anzeigen
        : <Spin/>                              // Wird noch geladen: Ladeanzeige anzeigen
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**Den Code verstehen:**

Diese Komponente hat drei Hauptaufgaben:

**Anfangszustand `useState`:** Erstellt zwei interne Steuerungen – **mitarbeiter** (die vom Server kommende Liste) und **laden** (ein Signal, das angibt, ob die Daten noch abgerufen werden).

**Datenabruf `_service`:** Die Funktion **ladeMitarbeiter** verwendet **_service**, um den Backend-Dienst aufzurufen. Anders als das native **fetch** von JavaScript verwaltet **_service** Authentifizierung, Sitzung und Fehlerbehandlung automatisch. Er erkennt außerdem die Sprache des Dashboards und wählt die korrekte URL `/services/mitarbeiter` für DE, `/services/workers` für EN.

**Verteilung und Zeichnung `return`:** Während die Daten abgerufen werden, zeigt er die Ladeanzeige **(Spin)** an. Wenn die Daten eintreffen, übergibt er die Liste **mitarbeiter** an die **DatenVisualisierung**, die sie auf Tabelle und Diagramm verteilt.

### Dashboard gestalten

Öffnen Sie die Datei `index.less` im Ordner `DashboardContainer` und fügen Sie den folgenden Code ein, um die Kopfzeilen der Panels hervorzuheben:

```text
/apps/name_deiner_app/ui/src/containers/DashboardContainer/index.less
```

```css
.panelHintergrund {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Den Code verstehen:**

Diese Klasse definiert eine blaue Hintergrundfarbe **(#3f54ba)** und einen Innenabstand **(padding)** für die Kopfzeilen.

Sie wird von den Klassen `daten-visualisierung__panel` der `DatenVisualisierung` verwendet, um sicherzustellen, dass die Titel **Tabelle** und **Diagramm** visuell hervorgehoben werden.


## Schritt 8: Projekt kompilieren

Um sicherzustellen, dass der gesamte React-Code von Netuno kompiliert wird:

* **Wenn Ihr Terminal weiterhin geöffnet war** und `npm run watch` im Hintergrund lief: Ihre Änderungen werden bei jedem Speichern einer Datei automatisch kompiliert.
* **Wenn Sie das Terminal geschlossen haben** oder der Prozess angehalten wurde: Kein Problem. Öffnen Sie das Terminal erneut, navigieren Sie zum Ordner `ui` und führen Sie den Befehl erneut aus:

```bash
npm run watch
```

## Fazit

Im Laufe dieses Tutorials haben Sie wesentliche Kompetenzen für die Arbeit mit der Netuno-Plattform erworben und den Integrationszyklus des Datenflusses zwischen Server und Benutzeroberfläche beherrscht.

Diese Entwicklung behandelte folgende Themen:

- **Datenbank:** Erstellung und Organisation von Tabellen und Datenstrukturen auf visuelle und effiziente Weise.

- **REST-Backend:** Entwicklung von Diensten und Geschäftslogik zur Bereitstellung von Daten über eine API.

- **Frontend mit React:** Integration und dynamische Anzeige dieser Daten in einer modernen und responsiven Oberfläche.

Falls Sie Schwierigkeiten haben oder Verbesserungsvorschläge haben, kontaktieren Sie uns.

Unser Team und unsere Community sind bereit zu helfen.

Viel Erfolg bei der Entwicklung!