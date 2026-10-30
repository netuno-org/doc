---
id: public
title: Öffentlich
sidebar_label: Öffentlich
---

Öffentliche Dateien, die direkt über eine URL erreichbar sind.

## Öffentlicher Ordner

Der Ordner `📂 public` enthält den Inhalt der clientseitigen UI (User Interface) nach der Kompilierung sowie weitere öffentliche Dateien wie Logos und Icons.

Er kann jede Datei enthalten, die öffentlich zugänglich sein muss.

## Ordnerstruktur

Beim Öffnen des Ordners `📂 public` finden Sie standardmäßig folgende Struktur:

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## Bilder

Der Ordner `📂 images` enthält anfangs die Logos der Anwendung und das Icon.

In diesem Ordner können Sie alle öffentlichen Bilder Ihrer Anwendung ablegen.

### icon.png

Icon der Anwendung, es erscheint im Browser-Tab (Favicon).

### logo.png

Dies ist das Logo-Bild, das auf der Login-Seite des Backoffice und auf den Fehlerseiten angezeigt wird.

### logo-main.png

Dies ist das Logo-Bild, das in der Kopfzeile (_Header_) nach dem Login und dem Betreten des Backoffice angezeigt wird.

## Skripte

Im Ordner `📂 scripts` befindet sich der finale JavaScript-Code, der durch die Kompilierung der UI erzeugt wird; hier können weitere öffentliche JavaScript-Dateien abgelegt werden.

### ui.js

Die Datei `ui.js` ist das Ergebnis der finalen Kompilierung des UI-Codes.

Typischerweise wird die UI in React und LESS entwickelt, wobei [Vite](https://vite.dev/) verwendet wird, um das finale JavaScript-Bundle zu kompilieren, also die Datei `ui.js`.

Die Kompilierungsanweisungen befinden sich in `ui/vite.config.js`; diese Datei enthält die Details dazu, wie `ui.js` verarbeitet und erzeugt wird.

### ui.js.map

Die Datei `ui.js.map` ist die Source Map der UI; diese Datei ist wichtig, um beim Debuggen von Fehlern in der _Konsole_ des Browsers anzugeben, welcher Originalcode vorliegt.

## Stile
  
Im Ordner `📂 styles` sollten die CSS-Dateien enthalten sein, die für die Gestaltung der Anwendung verwendet werden.

### main.css

`main.css` wird typischerweise für globales CSS oder zum Ändern der Standardstile von Netuno verwendet.

### ui.css

`ui.css` ist das CSS, das aus der Kompilierung der UI erzeugt wird.

Typischerweise wird die UI in React und LESS entwickelt, wobei [Vite](https://vite.dev/) verwendet wird, um das finale CSS-Bundle zu kompilieren, also `ui.css`.

Die Kompilierungsanweisungen befinden sich in `ui/vite.config.js`; diese Datei enthält die Details dazu, wie `ui.css` erzeugt wird.