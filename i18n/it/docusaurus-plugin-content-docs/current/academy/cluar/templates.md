---
sidebar_position: 11
id: templates
title: Template
sidebar_label: Template
---

Come viene definito il layout generale di una pagina e come creare nuovi template.

## Introduzione

Il **Template** definisce il layout generale di una [Pagina](/docs/academy/cluar/pages/overview) — è il valore del campo `template` della pagina e corrisponde a una cartella in `website/src/pages/Template/`.

:::info Origine del meccanismo dei Tipi di Componente
Il meccanismo dei [Tipi di Componente](/docs/academy/cluar/components/types) (cartelle dinamiche + `info.json`) è stato ispirato a questo meccanismo dei Template, che già funzionava in questo modo per primo. La struttura è praticamente la stessa, solo applicata a pagine intere invece che a blocchi di contenuto.
:::

## Come funziona

```
website/src/pages/Template/
├── index.jsx        # router: sceglie il template da renderizzare
└── Default/
    ├── index.jsx      # il template stesso
    ├── index.less
    └── info.json       # nome/descrizione del template, per lingua
```

Ogni cartella dentro `Template/` è un template selezionabile nel campo **Template** del modulo di modifica della pagina. Il nome della cartella (`Default`) è il valore salvato nel campo `template` della pagina.

Il `info.json` del template Predefinito, ad esempio:

```json
{
  "en": { "label": "Default", "description": "For pages that use generic styling." },
  "it": { "label": "Predefinito", "description": "Per pagine che utilizzano lo stile generico." }
}
```

:::info Il select usa l'etichetta tradotta del `info.json`
Come nei Tipi di Componente, il select di Template nel modulo della pagina mostra l'etichetta (`label`) tradotta del `info.json` — a tal fine, la richiesta al servizio invia la lingua corrente (`Cluar.currentLanguage().locale`). Ciò che viene salvato nel campo `template` della pagina rimane il nome della cartella (`Default`).
:::

Esiste anche un servizio lato server (`server/services/page/template/list/`) che scansiona le cartelle in tempo reale e restituisce l'elenco dei template disponibili — per lo stesso motivo: **non è necessario riavviare il server per aggiungere un nuovo template**, basta creare la cartella.

Una differenza rispetto ai Tipi di Componente: i Template non hanno `config.json` — oggi non ci sono capacità configurabili per template, solo `index.jsx` e `info.json`.

## Il template Predefinito

Il template **Predefinito** (`Default`) è quello usato dalla maggior parte delle pagine: avvolge il contenuto della pagina con l'intestazione e il piè di pagina del sito (`BaseHeader` / `BaseFooter`) attorno al `Builder` — il componente che effettivamente percorre e renderizza i componenti della pagina (Banner, Contenuto, Elenco, Slider, Funzionalità), nell'ordine definito dal campo Ordine di ciascuno.

:::info Pagina con template non riconosciuto
Se il campo `template` di una pagina non corrisponde a nessuna cartella esistente (es.: nome scritto in modo errato, o cartella eliminata), CLUAR **non fallisce né usa il Predefinito come sostituto** — invece, renderizza solo il `Builder` "nudo", senza l'intestazione né il piè di pagina del sito. È un comportamento diverso da quello che accade nei Tipi di Componente, dove un tipo non riconosciuto ricade sul tipo Predefinito.
:::

È il router (`Template/index.jsx`) che decide questo:

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

Nota che esiste solo un controllo esplicito (`"Default"`) — qualsiasi altro valore di `template`, riconosciuto o no, cade direttamente nell'`else` e renderizza solo il `Builder`.

## Come creare un nuovo template

1. Crea una nuova cartella dentro `website/src/pages/Template/` (es.: `Template/Landing/`).
2. All'interno, crea `index.jsx` (il layout React del template), `index.less` (stili) e `info.json` (label/descrizione per lingua — è questa etichetta che appare nel select).
3. Nel `index.jsx` del router (`Template/index.jsx`), importa il nuovo template e aggiungilo alla condizione che sceglie il template tramite il campo `page.template`.
4. Il nuovo template inizia ad apparire automaticamente nel select di Template del modulo di modifica della pagina, con il nome della cartella come valore salvato.

## Passo successivo

Esplora i [Permessi](/docs/academy/cluar/permissions).