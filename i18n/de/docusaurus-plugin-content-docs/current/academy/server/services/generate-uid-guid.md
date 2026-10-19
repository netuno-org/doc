---
id: generate-uid-guid
title: Eindeutige IDs generieren (UID/GUID)
sidebar_label: Eindeutige IDs generieren (UID/GUID)
---

## Bevor Sie beginnen

Bevor Sie fortfahren, stellen Sie sicher, dass Sie **REST-Webdienste** erstellen können. Falls nicht, besuchen Sie den folgenden Link:

* [REST-Webdienste](/docs/academy/server/services/rest)

Es ist außerdem ratsam, dass Sie sich vor Beginn dieses Tutorials mit den Grundlagen von _**JavaScript**_ vertraut machen.

## Was ist eine UID

Eine UID (_unique identifier_) ist, wie der Name schon sagt, eine in Ihrer gesamten Anwendung eindeutige Zeichenkette. Sie ist auch als GUID (_global unique identifier_) bekannt.

Um die Generierung von UIDs zu veranschaulichen, erstellen wir einen Dienst.

## Generierung von UIDs

Wir zeigen nun die Erstellung einer zufälligen UID. Das ist recht einfach, denn Netuno bringt bereits eine eigens dafür geschaffene Funktion mit:

```javascript
_out.println(
  _uid.generate()
)
```

> Beachten Sie, dass die Funktion `_out.println()` nur dazu dient, das Ergebnis bei der Anfrage des Dienstes im Browser auf dem Bildschirm sichtbar zu machen

Falls Sie Fragen haben, zögern Sie nicht, uns über die am Ende der Seite aufgeführten Wege zu kontaktieren.

Viel Erfolg bei der Entwicklung!