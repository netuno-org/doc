---
sidebar_position: 11
id: templates
title: Templates
sidebar_label: Templates
---

Wie das allgemeine Layout einer Seite definiert wird und wie neue Templates erstellt werden.

## Einführung

Das **Template** definiert das allgemeine Layout einer [Seite](/docs/academy/cluar/pages/overview) — es ist der Wert des Feldes `template` der Seite und entspricht einem Ordner in `website/src/pages/Template/`.

:::info Herkunft des Mechanismus der Komponententypen
Der Mechanismus der [Komponententypen](/docs/academy/cluar/components/types) (dynamische Ordner + `info.json`) wurde von diesem Template-Mechanismus inspiriert, der bereits zuerst so funktionierte. Die Struktur ist praktisch dieselbe, nur wird sie auf ganze Seiten statt auf Inhaltsblöcke angewendet.
:::

## Funktionsweise

```
website/src/pages/Template/
├── index.jsx        # Router: wählt das zu rendernde Template aus
└── Default/
    ├── index.jsx      # das Template selbst
    ├── index.less
    └── info.json       # Name/Beschreibung des Templates, nach Sprache
```

Jeder Ordner innerhalb von `Template/` ist ein im Feld **Template** des Seitenbearbeitungsformulars auswählbares Template. Der Ordnername (`Default`) ist der im Feld `template` der Seite gespeicherte Wert.

Die `info.json` des Standard-Templates zum Beispiel:

```json
{
  "en": { "label": "Default", "description": "Für Seiten, die das generische Styling verwenden." },
  "pt": { "label": "Standard", "description": "Für Seiten, die das generische Styling verwenden." }
}
```

:::info Das Auswahlfeld verwendet die übersetzte Bezeichnung aus `info.json`
Wie bei den Komponententypen zeigt das Template-Auswahlfeld im Seitenformular die übersetzte Bezeichnung (`label`) aus `info.json` an — dafür sendet die Anfrage an den Dienst die aktuelle Sprache (`Cluar.currentLanguage().locale`). Was im Feld `template` der Seite gespeichert wird, bleibt weiterhin der Ordnername (`Default`).
:::

Außerdem gibt es einen Dienst auf dem Server (`server/services/page/template/list/`), der die Ordner in Echtzeit durchsucht und die Liste der verfügbaren Templates zurückgibt — aus demselben Grund: **Der Server muss nicht neu gestartet werden, um ein neues Template hinzuzufügen**, es genügt, den Ordner zu erstellen.

Ein Unterschied zu den Komponententypen: Templates haben keine `config.json` — es gibt derzeit keine pro Template konfigurierbaren Funktionen, nur `index.jsx` und `info.json`.

## Das Standard-Template

Das **Standard-Template** (`Default`) ist das, was die meisten Seiten verwenden: Es umschließt den Inhalt der Seite mit dem Kopf- und Fußbereich der Website (`BaseHeader` / `BaseFooter`) um den `Builder` — die Komponente, die tatsächlich die Komponenten der Seite (Banner, Inhalt, Auflistung, Slider, Funktionalität) durchläuft und rendert, in der Reihenfolge, die im Feld Reihenfolge jedes einzelnen definiert ist.

:::info Seite mit nicht erkanntem Template
Wenn das Feld `template` einer Seite keinem vorhandenen Ordner entspricht (z. B. falsch geschriebener Name oder gelöschter Ordner), **schlägt CLUAR nicht fehl und verwendet auch nicht das Standard-Template als Ersatz** — stattdessen wird nur der „nackte“ `Builder` gerendert, ohne Kopf- und Fußbereich der Website. Das ist ein anderes Verhalten als bei den Komponententypen, wo ein nicht erkannter Typ auf den Standardtyp zurückfällt.
:::

Es ist der Router (`Template/index.jsx`), der das entscheidet:

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

Beachte, dass es nur eine explizite Prüfung (`"Default"`) gibt — jeder andere Wert von `template`, ob erkannt oder nicht, fällt direkt in den `else`-Zweig und rendert nur den `Builder`.

## Wie man ein neues Template erstellt

1. Erstelle einen neuen Ordner innerhalb von `website/src/pages/Template/` (z. B. `Template/Landingpage/`).
2. Erstelle darin die `index.jsx` (das React-Layout des Templates), die `index.less` (Styles) und die `info.json` (Bezeichnung/Beschreibung nach Sprache — diese Bezeichnung erscheint im Auswahlfeld).
3. Importiere im `index.jsx` des Routers (`Template/index.jsx`) das neue Template und füge es der Bedingung hinzu, die das Template anhand des Feldes `page.template` auswählt.
4. Das neue Template erscheint dann automatisch im Template-Auswahlfeld des Seitenbearbeitungsformulars, mit dem Ordnernamen als gespeichertem Wert.

## Nächster Schritt

Erkunde die [Berechtigungen](/docs/academy/cluar/permissions).