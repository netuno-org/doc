---
sidebar_position: 11
id: templates
title: Șabloane
sidebar_label: Șabloane
---

Cum este definit aspectul general al unei pagini și cum se creează șabloane noi.

## Introducere

**Șablonul** define aspectul general al unei [Pagini](/docs/academy/cluar/pages/overview) — este valoarea câmpului `template` al paginii și corespunde unui folder din `website/src/pages/Template/`.

:::info Originea mecanismului de Tipuri de componente
Mecanismul de [Tipuri de componente](/docs/academy/cluar/components/types) (foldere dinamice + `info.json`) a fost inspirat din acest mecanism de Șabloane, care funcționa deja astfel înainte. Structura este practic aceeași, doar că este aplicată paginilor întregi în loc de blocuri de conținut.
:::

## Cum funcționează

```
website/src/pages/Template/
├── index.jsx        # router: alege șablonul de randat
└── Default/
    ├── index.jsx      # șablonul în sine
    ├── index.less
    └── info.json       # nume/descriere șablon, pe limbă
```

Fiecare folder din `Template/` este un șablon selectabil în câmpul **Șablon** al formularului de editare a paginii. Numele folderului (`Default`) este valoarea salvată în câmpul `template` al paginii.

`info.json` al șablonului implicit (`Default`), de exemplu:

```json
{
  "en": { "label": "Implicit", "description": "Pentru pagini care folosesc stilizarea generică." },
  "pt": { "label": "Implicit", "description": "Pentru pagini care utilizează stilul generic." }
}
```

:::info Selectul folosește eticheta tradusă din `info.json`
La fel ca la Tipurile de componente, selectul de Șablon din formularul paginii afișează eticheta (`label`) tradusă din `info.json` — pentru aceasta, cererea către serviciu trimite limba curentă (`Cluar.currentLanguage().locale`). Ceea ce este salvat în câmpul `template` al paginii rămâne numele folderului (`Default`).
:::

Există, de asemenea, un serviciu pe server (`server/services/page/template/list/`) care scanează folderele în timp real și returnează lista de șabloane disponibile — din același motiv: **nu este nevoie să repornești serverul pentru a adăuga un șablon nou**, trebuie doar să creezi folderul.

O diferență față de Tipurile de componente: Șabloanele nu au `config.json` — nu există capabilități configurabile pentru fiecare șablon în prezent, doar `index.jsx` și `info.json`.

## Șablonul implicit

Șablonul **implicit** (`Default`) este cel folosit de majoritatea paginilor: înfășoară conținutul paginii cu antetul și subsolul site-ului (`BaseHeader` / `BaseFooter`) în jurul lui `Builder` — componenta care parcurge efectiv și randează componentele paginii (Banner, Conținut, Listare, Slider, Funcționalitate), în ordinea definită de câmpul Ordine al fiecăruia.

:::info Pagină cu șablon nerecunoscut
Dacă câmpul `template` al unei pagini nu corespunde niciunui folder existent (de exemplu, nume scris incorect sau folder șters), CLUAR **nu eșuează și nu folosește șablonul implicit ca substitut** — în schimb, randează doar `Builder` „gol”, fără antetul și fără subsolul site-ului. Este un comportament diferit de cel din Tipurile de componente, unde un tip nerecunoscut trece la tipul implicit.
:::

Routerul (`Template/index.jsx`) decide acest lucru:

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

Observă că există o singură verificare explicită (`"Default"`) — orice altă valoare a lui `template`, recunoscută sau nu, ajunge direct în `else` și randează doar `Builder`.

## Cum se creează un șablon nou

1. Creează un folder nou în `website/src/pages/Template/` (de exemplu, `Template/Prezentare/`).
2. În interiorul lui, creează `index.jsx` (layout-ul React al șablonului), `index.less` (stiluri) și `info.json` (etichetă/descriere pe limbă — această etichetă apare în select).
3. În `index.jsx` al routerului (`Template/index.jsx`), importă noul șablon și adaugă-l la condiția care alege șablonul după câmpul `page.template`.
4. Noul șablon va apărea automat în selectul de Șablon din formularul de editare a paginii, cu numele folderului ca valoare salvată.

## Pasul următor

Explorează [Permisiuni](/docs/academy/cluar/permissions).