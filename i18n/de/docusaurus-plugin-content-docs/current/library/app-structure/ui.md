---
id: ui
title: UI
sidebar_label: UI
---

Angepasstes Frontend des Backoffice und der Dashboards.

## Benutzeroberfläche

Wie der Name schon sagt, befindet sich im Ordner `📂 ui` die Logik der Benutzeroberfläche der Anwendung.

Ermöglicht die Entwicklung, um das Verhalten des Backoffice der Anwendung zu ändern.

Es ist möglich, maßgeschneiderte Dashboards zu erstellen, Funktionalitäten hinzuzufügen oder zu ändern und vieles mehr.

Für die Entwicklung des allgemeinen Anwendungscodes, sei es Backend oder Frontend, empfehlen wir kostenlose 
Code-Editoren wie:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Ordnerstruktur

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MeinButton</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>DashboardContainer</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Quellcode

Der Ordner `📂 src` enthält den Anwendungscode des Frontends. In diesem Ordner befindet sich die Organisation der 
React-Komponenten, nämlich `components` und `containers`.

### Container

Der Ordner `📂 containers` ist für die Container gedacht, also React-Komponenten für Bereiche mit mehr 
Interaktionen. Das heißt, es sind Komponenten mit mehr Funktionalitäten; normalerweise umfassen sie einen 
beträchtlichen Bereich des Bildschirms und können je nach Umfang weitere Komponenten bündeln.

Zum Beispiel zeigt es eine Bestelltabelle mit einem Formular zum Filtern und zusätzlich ein Diagramm, das 
die Monatssumme aggregiert – alles innerhalb eines Containers, wobei jedes Element eine eigene Komponente 
sein könnte, aber im Bestell-Container des Dashboards zusammengefasst wird.

### Komponenten

Der Ordner `📂 components` ist für die wiederverwendbaren _Komponenten_ in React gedacht. Normalerweise 
implementieren sie sehr spezifische Funktionalitäten, die sich sinnvoll in andere Komponenten oder Container 
integrieren lassen.

Typischerweise haben sie ein einfacheres Verhalten und sind stark auf ihren Zweck für einen bestimmten Umfang 
fokussiert, sodass sie in mehreren Containern oder sogar in anderen Komponenten wiederverwendet werden können.

Beispiele für Komponenten könnten eine bestimmte Tabelle, ein Formular, ein Diagrammtyp und vieles mehr sein.

### Stile

Der Ordner `📂 styles` dient typischerweise für globale Stile der verschiedenen Container der Anwendung. 
Obwohl es in diesem Bereich keinen strengen Standard gibt, empfehlen wir, die spezifischen Stile für die 
`Komponente` oder den `Container` direkt daneben zu organisieren, also intern im jeweiligen Komponentenordner.
 
## Vite
 
Damit die finale JavaScript-Codeversion mit der UI der Anwendung erzeugt wird, kompiliert und optimiert, und 
vom Browser verarbeitet und verwendet wird, ist die entsprechende Kompilierung des in React/JSX geschriebenen 
Frontend-Codes erforderlich.

Diese Kompilierung erfolgt durch [Vite](https://vite.dev/), und ihre Konfiguration sowie weitere Anweisungen befinden 
sich in der Datei:

- `vite.config.js`

die sich im Stammverzeichnis des Ordners `📂 ui` befindet.

## Paketmanager

Die Datei `package.json` wird vom Paketmanager für Abhängigkeitsmodule verwendet. Wir empfehlen die Verwendung 
von [Bun](https://bun.sh), um alle erforderlichen Frontend-Abhängigkeiten zu installieren.

Auch die Ausführungsbefehle verwenden [Bun](https://bun.sh), was eine weitere wichtige Empfehlung ist.

Daher empfehlen wir die Installation von [Bun](https://bun.sh).

## Anweisungen

Die Datei `README.md` enthält die Installations- und Ausführungsanweisungen.

Um die Abhängigkeiten zu installieren, führen Sie aus:

- `bun install`

Und um die Kompilierung des Frontend-Codes im Entwicklungsmodus auszuführen:

- `bun run watch`

Oder für die finale, endgültige und für die Produktion optimierte Kompilierung:

- `bun run build`

Standardmäßig erzeugt die Kompilierung die folgenden Dateien:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Diese Dateien werden in die Verarbeitung von Netuno integriert, um die entsprechenden maßgeschneiderten 
Anpassungen auf den Backoffice-Seiten der Anwendung vorzunehmen, wie Dashboards und spezifische Funktionalitäten.