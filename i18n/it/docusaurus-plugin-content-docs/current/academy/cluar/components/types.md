---
sidebar_position: 2
id: types
title: Tipi di Componente
sidebar_label: Tipi di Componente
---

## Cosa sono

Ogni [Componente](/docs/academy/cluar/components/overview) ha un campo **Tipo**, che definisce quale variante visiva viene usata per renderizzarlo. Questo campo non è un elenco fisso salvato nel database — è **dinamico**, costruito a partire dalle cartelle che esistono dentro `website/src/components/<Componente>/`. Ad esempio, per il Banner:

```
website/src/components/Banner/
├── index.jsx           # componente "router": sceglie il tipo da renderizzare
├── Default/
│   ├── index.jsx        # la variante stessa
│   ├── index.less
│   ├── info.json        # nome/descrizione del tipo, per lingua
│   └── config.json       # capacità del tipo (es.: se supporta azioni)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Ogni cartella dentro `Banner/` è un **tipo** selezionabile nel campo **Tipo**, nel modulo di modifica di quel componente (es.: quando si aggiunge o si modifica un Banner in una pagina, è in quel modulo che appare il select con i tipi disponibili).

Nel select, ciò che la persona **vede** è l'etichetta tradotta definita in `info.json` (es.: "Predefinito"), ma ciò che viene **salvato** nel campo `type` del componente è il **nome della cartella** (es.: `Default`) — è questo nome di cartella che il componente "router" usa poi per scegliere quale variante renderizzare (vedi [`info.json` e `config.json`](#infojson-e-configjson) qui sotto).

> Il nome "Sub" in cartelle come `DefaultSubBanner` non indica una sottocartella annidata dentro un altro tipo — è solo un altro tipo, allo stesso livello degli altri, ma con una convenzione di denominazione che indica che è una variante più discreta/secondaria del tipo base.

### `info.json` e `config.json`

- **`info.json`** — definisce l'etichetta e la descrizione del tipo, per lingua. È l'etichetta (`label`) che appare scritta nel select del modulo di modifica:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "it": { "label": "Predefinito", "description": "Aggiunge un banner." }
  }
  ```
- **`config.json`** — definisce le capacità del tipo. Oggi, l'unico parametro è `action`, che controlla se la sezione Azioni appare nel modulo ed è renderizzata in quel tipo:
  ```json
  { "action": true }
  ```

Questi due file vengono letti in tempo reale da un servizio sul server (`server/services/components/<componente>/list/`), che percorre le cartelle dentro `website/src/components/<Componente>/` e restituisce l'elenco dei tipi disponibili — è ciò che alimenta il select di Tipo nel modulo di modifica di quel componente. Per questo, **non è necessario riavviare il server né modificare il database per aggiungere un nuovo tipo** — basta creare la cartella.

Nel componente "router" (`Banner/index.jsx`), il `type` salvato viene usato per decidere quale variante importare e renderizzare:

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## Come creare un nuovo tipo

1. Crea una nuova cartella dentro `website/src/components/<Componente>/` (es.: `Banner/Highlight/`).
2. Al suo interno, crea l'`index.jsx` (il componente React della variante), l'`index.less` (stili), il `info.json` (label/descrizione per lingua) e il `config.json` (con `action: true` o `false`).
3. Nell'`index.jsx` del componente padre (es.: `Banner/index.jsx`), importa il nuovo componente e lo aggiunge alla condizione che sceglie la variante in base al `type`.
4. Il nuovo tipo apparirà automaticamente nel select di Tipo del modulo di modifica di quel componente, con il nome della cartella come valore salvato.

## Prossimo passo

Esplora ogni componente in dettaglio: [Banner](/docs/academy/cluar/components/banner), [Contenuto](/docs/academy/cluar/components/content), [Elenco](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funzionalità](/docs/academy/cluar/components/functionality).