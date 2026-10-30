---
id: templates
title: Vorlagen
sidebar_label: Vorlagen
---

## Bevor Sie beginnen
Bevor Sie Dienste erstellen, die Vorlagen aufrufen, stellen Sie sicher, dass Sie **REST-Webdienste** erstellen können. Falls nicht, besuchen Sie den folgenden Link:

* [REST-Webdienste](/docs/academy/server/services/rest)

Es ist außerdem ratsam, dass Sie sich vor dem Beginn dieses Tutorials vergewissern, dass Sie Grundkenntnisse in _**JavaScript**_ haben.

## Verwendung von Vorlagen in Diensten

In diesem Tutorial behandeln wir die Erstellung von Vorlagen und die notwendigen Schritte, um sie in Ihrem Dienst aufrufen zu können.

Beim Erstellen eines Dienstes in Netuno haben Sie die Möglichkeit, auf selbst erstellte Vorlagen zuzugreifen. Je nach Ergebnis können Sie Ihren Dienst also auf eine HTML-Vorlage mit Daten umleiten.

In diesem Beispiel verwenden wir eine einfache HTML-Vorlage und übergeben Daten vom Dienst an dieselbe Vorlage.

## Erstellen einer Vorlage

![vorlagen1.png](/docs/assets/templates1.png)

Nachdem Sie sich im oben genannten Verzeichnis befinden, erstellen wir eine Datei mit der Endung `.html`, in diesem Beispiel wird sie `vorlage.html` genannt.

Es folgt der Inhalt dieser Seite:

```html
<!-- Aufruf des Netuno-Headers -->
_{include=_|includes/head}

<!-- Stildefinitionen -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Beginn des HTML-Bodys -->
<h1>Titel der Vorlage</h1>

<!-- Wenn Sie Daten von einem Dienst an eine Vorlage übergeben müssen, verwenden Sie _{&variable} -->
<p>Hallo, ich bin eine <b>_{&data=name}</b> und empfange <b>_{&data=daten}</b> von einem Dienst!</p>

<!-- Ende des HTML-Bodys -->

<!-- Aufruf des Netuno-Footers -->
_{include=_|includes/foot}
```

Abschließend wird der Dienst erstellt, der die Vorlage mit folgender Funktion aufruft:

`_template.output('vorlagenname', variablen(optional));`

Es folgt das Beispiel des Dienstes `dienst.js`:

```javascript
// Initialisieren des Objekts 'daten', damit es Daten empfangen kann
var daten = _val.init()
    
// Werte dem Objekt 'daten' zuweisen
    .set("name", "Vorlage")
    .set("daten", "Daten")

// Diese Funktion ermöglicht den Aufruf der Vorlage
_template.output("vorlage", daten);
```

> Wenn sich Ihre Vorlage in einem Unterverzeichnis befindet, geben Sie in der Funktion Folgendes an: `_template.output('verzeichnis/vorlagenname')`

Rufen Sie abschließend den Dienst im Browser auf, und es erscheint etwas Ähnliches wie folgt:

![vorlagen2.png](/docs/assets/templates2.png)

> Beachten Sie, dass die zuvor dargestellten Ergebnisse je nach Browser abweichen können.

Wenn Sie Fragen haben, zögern Sie nicht, uns über die am Ende der Seite angegebenen Kontaktmöglichkeiten zu kontaktieren.

Viel Erfolg bei der Entwicklung!