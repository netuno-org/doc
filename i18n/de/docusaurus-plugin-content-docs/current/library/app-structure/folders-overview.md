---
sidebar_position: 1
id: folders-overview
title: Übersicht über die Ordner
sidebar_label: Übersicht
---

Erkunden und entdecken Sie die Ordner und Dateien der Anwendungen.

## Struktur

Ausgehend vom Stammverzeichnis der Netuno-Installation finden wir den Ordner `📂 apps`.

Im Ordner `📂 apps` befinden sich alle auf der Netuno-Plattform verfügbaren Anwendungen.

Es gibt Anwendungen, die lokal erstellt werden können, während andere extern sein können, zum Beispiel Anwendungen, die Klone von GIT-Repositories sind.

Sehen Sie ausgehend vom Netuno-Stammverzeichnis die vollständige Struktur einer neu erstellten Anwendung:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>meine_app</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> Im Ordner `apps` befinden sich alle in Netuno verfügbaren Anwendungen.

Zunächst existiert in diesem Ordner bereits die Anwendung `demo`, bei der es sich, wie der Name schon sagt, um eine **Demo**_nstration_ der Funktionalitäten von Netuno handelt.
 
Wenn eine neue Anwendung erstellt wird, wird ein neuer Ordner mit derselben Unterordnerhierarchie hinzugefügt, wie oben dargestellt.

## Hauptordner

Innerhalb des Anwendungsordners gibt es die Hauptordner, von denen jeder einen bestimmten Zweck hat.

Die Hauptordner sind:

- [📂 config](config) – Allgemeine Konfigurationen;
- [📂 dbs](dbs) – Datenbankbezogene Dinge;
- [📂 docs](docs) – Dokumentation und sonstige Dokumente im Allgemeinen;
- [📂 public](public) – Öffentliche Inhalte, die direkt über eine URL verfügbar sind, wie Bilder, JavaScript und CSS;
- [📂 server](server) – Backend-Code, wie Services, Jobs, Templates, Reports und die gesamte API im Allgemeinen.
- [📂 storage](storage) – Organisation von Dateien, die mit Daten zusammenhängen oder im Code verwendet werden.
- [📂 ui](ui) – Backoffice-Benutzeroberfläche, Frontend-Code wie Dashboards und weitere Funktionalitäten.