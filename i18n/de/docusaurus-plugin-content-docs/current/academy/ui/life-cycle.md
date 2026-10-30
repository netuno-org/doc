---
sidebar_position: 7
id: life-cycle
title: Ereignisse des Lebenszyklus der Benutzeroberfläche
sidebar_label: Lebenszyklus-Ereignisse
---

## Benutzeroberfläche (`ui`)

In der Datenverwaltungsoberfläche von Netuno können maßgeschneiderter Code eingefügt und individuelle Anpassungen und Manipulationen vorgenommen werden.

Die Entwicklung findet im Code innerhalb des Ordners `ui` im Stammverzeichnis der Anwendung statt.

### addPageLoad()

Die Seite kann nicht sicher manipuliert werden, bis die Anwendung „bereit“ ist.

Die Methode wird aufgerufen, wenn die Seite geladen ist.

```javascript
netuno.addPageLoad(() => {
   console.log('ich mache etwas');
});
```

### addContentLoad()

Wenn Formulare oder Berichte geladen werden, wird die Benutzeroberfläche mit dem jeweiligen Inhalt verändert, sei es ein Datenformular, eine Suche oder beim Filtern von Daten eines Berichts.

Sobald ein Inhalt geladen wird, wird die Methode aufgerufen und übergibt den Container, der den Inhalt enthält, der gerade angezeigt wird.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('ich mache Dinge, wenn das Element existiert');
   }
});
```