---
sidebar_position: 2
id: types
title: Tipuri de componente
sidebar_label: Tipuri de componente
---

## Ce sunt

Fiecare [componentă](/docs/academy/cluar/components/overview) are un câmp **Tip**, care definește ce variantă vizuală este folosită pentru a o randa. Acest câmp nu este o listă fixă salvată în baza de date — este **dinamic**, construit pe baza folderelor care există în `website/src/components/<Component>/`. De exemplu, pentru Banner:

```
website/src/components/Banner/
├── index.jsx           # componenta „router”: alege tipul de randat
├── Implicit/
│   ├── index.jsx        # varianta în sine
│   ├── index.less
│   ├── info.json        # numele/descrierea tipului, pentru fiecare limbă
│   └── config.json       # capacitățile tipului (de ex.: dacă acceptă acțiuni)
├── Secundar/
│   └── ...
└── ImplicitSubBanner/
    └── ...
```

Fiecare folder din `Banner/` este un **tip** selectabil în câmpul **Tip**, în formularul de editare al acestei componente (de ex.: când adaugi sau editezi un Banner într-o pagină, în acest formular apare selectul cu tipurile disponibile).

În select, ceea ce persoana **vede** este eticheta tradusă definită în `info.json` (de ex.: „Implicit”), dar ceea ce este **salvat** în câmpul `type` al componentei este **numele folderului** (de ex.: `Implicit`) — acest nume de folder este cel pe care componenta „router” îl folosește apoi pentru a alege ce variantă să randeze (vezi [`info.json` și `config.json`](#infojson-și-configjson) mai jos).

> Numele „Sub” din foldere precum `ImplicitSubBanner` nu indică un subfolder imbricat în interiorul altui tip — este doar încă un tip, la același nivel cu celelalte, doar că are o convenție de denumire care indică faptul că este o variantă mai discretă/secundară a tipului de bază.

### `info.json` și `config.json`

- **`info.json`** — definește eticheta și descrierea tipului, pentru fiecare limbă. Este eticheta (`label`) care apare scrisă în selectul formularului de editare:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "ro": { "label": "Implicit", "description": "Adaugă un banner." }
  }
  ```
- **`config.json`** — definește capacitățile tipului. În prezent, singurul parametru este `action`, care controlează dacă secțiunea Acțiuni apare în formular și este randată în acel tip:
  ```json
  { "action": true }
  ```

Aceste două fișiere sunt citite în timp real de un serviciu de pe server (`server/services/components/<component>/list/`), care parcurge folderele din `website/src/components/<Component>/` și returnează lista de tipuri disponibile — aceasta este ceea ce alimentează selectul de Tip din formularul de editare al acestei componente. Prin urmare, **nu este nevoie să repornești serverul și nici să modifici baza de date pentru a adăuga un tip nou** — este suficient să creezi folderul.

În componenta „router” (`Banner/index.jsx`), `type` salvat este folosit pentru a decide ce variantă să imporți și să randezi:

```jsx
if (props.type === "Implicit") {
  layout = <Implicit {...props} actions={renderedActions} />;
} else if (props.type === "Secundar") {
  layout = <Secundar {...props} actions={renderedActions} />;
} else if (props.type === "ImplicitSubBanner") {
  layout = <ImplicitSubBanner {...props} actions={renderedActions} />;
}
```

## Cum creezi un tip nou

1. Creează un folder nou în interiorul `website/src/components/<Component>/` (de ex.: `Banner/Evidențiere/`).
2. În interiorul lui, creează `index.jsx` (componenta React a variantei), `index.less` (stiluri), `info.json` (etichetă/descriere pentru fiecare limbă) și `config.json` (cu `action: true` sau `false`).
3. În `index.jsx` al componentei părinte (de ex.: `Banner/index.jsx`), importă noua componentă și adaugă-o la condiția care alege varianta după `type`.
4. Noul tip va apărea automat în selectul de Tip al formularului de editare al acestei componente, cu numele folderului ca valoare salvată.

## Pasul următor

Explorează fiecare componentă în detaliu: [Banner](/docs/academy/cluar/components/banner), [Conținut](/docs/academy/cluar/components/content), [Listare](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funcționalitate](/docs/academy/cluar/components/functionality).