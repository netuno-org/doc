---
sidebar_position: 2
id: types
title: Komponententypen
sidebar_label: Komponententypen
---

## Was sie sind

Jede [Komponente](/docs/academy/cluar/components/overview) hat ein Feld **Typ**, das festlegt, welche visuelle Variante zu ihrer Darstellung verwendet wird. Dieses Feld ist keine feste, in der Datenbank gespeicherte Liste — es ist **dynamisch** und wird aus den Ordnern aufgebaut, die in `website/src/components/<Komponente>/` vorhanden sind. Zum Beispiel für das Banner:

```
website/src/components/Banner/
├── index.jsx           # „Router“-Komponente: wählt den zu renderenden Typ aus
├── Default/
│   ├── index.jsx        # die Variante selbst
│   ├── index.less
│   ├── info.json        # Name/Beschreibung des Typs, pro Sprache
│   └── config.json       # Fähigkeiten des Typs (z. B.: ob Aktionen unterstützt werden)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Jeder Ordner innerhalb von `Banner/` ist ein im Feld **Typ** auswählbarer **Typ** im Bearbeitungsformular dieser Komponente (z. B.: Wenn du auf einer Seite ein Banner hinzufügst oder bearbeitest, erscheint in diesem Formular das Auswahlfeld mit den verfügbaren Typen).

Im Auswahlfeld **sieht** die Person die im `info.json` definierte übersetzte Bezeichnung (z. B.: „Standard“), aber im Feld `type` der Komponente wird der **Ordnername** **gespeichert** (z. B.: `Default`) — dieser Ordnername wird anschließend von der „Router“-Komponente verwendet, um auszuwählen, welche Variante gerendert wird (siehe [`info.json` und `config.json`](#infojson-und-configjson) unten).

> Der Name „Sub“ in Ordnern wie `DefaultSubBanner` bezeichnet keinen Unterordner, der in einem anderen Typ verschachtelt ist — er ist einfach ein weiterer Typ auf derselben Ebene wie die anderen, nur mit einer Namenskonvention, die anzeigt, dass es sich um eine diskretere/sekundäre Variante des Basistyps handelt.

### `info.json` und `config.json`

- **`info.json`** — definiert Bezeichnung und Beschreibung des Typs pro Sprache. Die Bezeichnung (`label`) wird im Auswahlfeld des Bearbeitungsformulars angezeigt:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "de": { "label": "Standard", "description": "Fügt ein Banner hinzu." }
  }
  ```
- **`config.json`** — definiert Fähigkeiten des Typs. Heute ist der einzige Parameter `action`; er steuert, ob der Abschnitt Aktionen im Formular angezeigt und bei diesem Typ gerendert wird:
  ```json
  { "action": true }
  ```

Diese beiden Dateien werden in Echtzeit von einem Dienst auf dem Server gelesen (`server/services/components/<komponente>/list/`), der die Ordner innerhalb von `website/src/components/<Komponente>/` durchläuft und die Liste der verfügbaren Typen zurückgibt — das ist es, was das Typ-Auswahlfeld im Bearbeitungsformular dieser Komponente speist. Deshalb **muss der Server nicht neu gestartet und die Datenbank nicht geändert werden, um einen neuen Typ hinzuzufügen** — es genügt, den Ordner zu erstellen.

In der „Router“-Komponente (`Banner/index.jsx`) wird der gespeicherte `type` verwendet, um zu entscheiden, welche Variante importiert und gerendert wird:

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## Einen neuen Typ erstellen

1. Erstelle einen neuen Ordner innerhalb von `website/src/components/<Komponente>/` (z. B.: `Banner/Hervorhebung/`).
2. Erstelle darin `index.jsx` (die React-Komponente der Variante), `index.less` (Stile), `info.json` (Bezeichnung/Beschreibung pro Sprache) und `config.json` (mit `action: true` oder `false`).
3. Importiere in `index.jsx` der übergeordneten Komponente (z. B.: `Banner/index.jsx`) die neue Komponente und füge sie der Bedingung hinzu, die die Variante anhand von `type` auswählt.
4. Der neue Typ erscheint dann automatisch im Typ-Auswahlfeld des Bearbeitungsformulars dieser Komponente, wobei der Ordnername als gespeicherter Wert verwendet wird.

## Nächster Schritt

Entdecke jede Komponente im Detail: [Banner](/docs/academy/cluar/components/banner), [Inhalt](/docs/academy/cluar/components/content), [Auflistung](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funktion](/docs/academy/cluar/components/functionality).