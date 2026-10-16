---
sidebar_position: 2
id: types
title: Tipuri de Componente
sidebar_label: Tipuri de Componente
---

## Ce sunt

Fiecare [Componentă](/docs/academy/cluar/components/overview) are un câmp **Tip**, care definește ce variantă vizuală este folosită pentru a o reda. Acest câmp nu este o listă fixă salvată în baza de date — este **dinamic**, construit din folderele care există în `website/src/components/<Componentă>/`. De exemplu, pentru Banner:

```
website/src/components/Banner/
├── index.jsx           # componenta "router": alege tipul de redat
├── Implicit/
│   ├── index.jsx        # varianta în sine
│   ├── index.less
│   ├── info.json        # numele/descrierea tipului, pe limbă
│   └── config.json       # capacitățile tipului (ex.: dacă suportă acțiuni)
├── Secundar/
│   └── ...
└── ImplicitSubBanner/
    └── ...
```

Fiecare folder din `Banner/` este un **tip** selectabil în câmpul **Tip**, în formularul de editare al acestui component (de ex.: când adaugi sau editezi un Banner într-o pagină, în acest formular apare select-ul cu tipurile disponibile).

În select, ceea ce persoana **vede** este eticheta tradusă definită în `info.json` (de ex.: "Implicit"), dar ceea ce este **salvat** în câmpul `type` al componentului este **numele folderului** (de ex.: `Implicit`) — acest nume de folder este cel pe care componenta "router" îl folosește apoi pentru a alege ce variantă să redeze (vezi [`info.json` și `config.json`](#infojson-e-configjson) mai jos).

> Numele "Sub" în foldere precum `ImplicitSubBanner` nu indică un subfolder imbricat în interiorul altui tip — este doar un alt tip, la același nivel cu celelalte, doar că are o convenție de denumire care indică faptul că este o variantă mai discretă/secundară a tipului de bază.

### `info.json` și `config.json`

- **`info.json`** — definește eticheta și descrierea tipului, pe limbă. Este eticheta (`label`) care apare scrisă în select-ul formularului de editare:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "ro": { "label": "Implicit", "description": "Adaugă un banner." }
  }
  ```
- **`config.json`** — definește capacitățile tipului. Astăzi, singurul parametru este `action`, care controlează dacă secțiunea de Acțiuni apare în formular și este redată în acel tip:
  ```json
  { "action": true }
  ```

Aceste două fișiere sunt citite în timp real de către un serviciu de pe server (`server/services/components/<componentă>/list/`), care parcurge folderele din `website/src/components/<Componentă>/` și returnează lista de tipuri disponibile — acesta este lucrul care alimentează select-ul de Tip din formularul de editare al acestui component. Prin urmare, **nu este nevoie să repornești serverul sau să modifici baza de date pentru a adăuga un tip nou** — este suficient să creezi folderul.

În componenta "router" (`Banner/index.jsx`), `type`-ul salvat este folosit pentru a decide ce variantă să imporți și să redezi:

```jsx
if (props.type === "Implicit") {
  aranjare = <Implicit {...props} actiuni={actiuniRedate} />;
} else if (props.type === "Secundar") {
  aranjare = <Secundar {...props} actiuni={actiuniRedate} />;
} else if (props.type === "ImplicitSubBanner") {
  aranjare = <ImplicitSubBanner {...props} actiuni={actiuniRedate} />;
}
```

## Cum să creezi un tip nou

1. Creează un folder nou în `website/src/components/<Componentă>/` (de ex.: `Banner/Evidențiere/`).
2. În interiorul lui, creează `index.jsx` (componenta React a variantei), `index.less` (stilurile), `info.json` (eticheta/descrierea pe limbă) și `config.json` (cu `action: true` sau `false`).
3. În `index.jsx` al componentului părinte (de ex.: `Banner/index.jsx`), importă noul component și adaugă-l la condiția care alege varianta după `type`.
4. Noul tip va apărea automat în select-ul de Tip al formularului de editare al acestui component, cu numele folderului ca valoare salvată.

## Următorul pas

Explorează fiecare component în detaliu: [Banner](/docs/academy/cluar/components/banner), [Conținut](/docs/academy/cluar/components/content), [Listare](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funcționalitate](/docs/academy/cluar/components/functionality).