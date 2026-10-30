---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

Il componente carosello, per presentare una sequenza di elementi in evidenza.

## Introduzione

Lo **Slider** presenta una sequenza di elementi in carosello — ognuno con immagine di sfondo, titolo, testo e, facoltativamente, le proprie azioni. È renderizzato con la libreria [Keen Slider](https://keen-slider.io/).

Segue lo stesso meccanismo comune a tutti i componenti, descritto in [Panoramica](/docs/academy/cluar/components/overview) e [Tipi di Componente](/docs/academy/cluar/components/types).

## Campi dello Slider

Oltre ai [campi comuni](/docs/academy/cluar/components/overview#campi-comuni) (Tipo, Ordine, Modalità di Modifica, Inverti sfondo), lo Slider ha:

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo del blocco slider. |
| **Contenuto** (`content` / `html_content`) | Testo introduttivo del blocco. |
| **Immagine** (`image`) | Immagine associata allo slider stesso (non agli elementi). |
| **Immagine Alt** (`image_alt`) | Testo alternativo dell'immagine. |
| **Immagine Titolo** (`image_title`) | Attributo `title` dell'immagine. |

## Elementi

Ogni elemento appartiene a uno Slider (`page_slider_id`), ed è una delle "slide" del carosello:

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo della slide. |
| **Contenuto** (`content` / `html_content`) | Testo della slide. |
| **Immagine** (`image`) | Immagine di sfondo della slide. |
| **Immagine Alt** (`image_alt`) | Testo alternativo dell'immagine. |
| **Immagine Titolo** (`image_title`) | Attributo `title` dell'immagine. |
| **Ordine** (`sorter`) | Posizione della slide all'interno del carosello. |
| **Azioni** | Ogni elemento può avere le proprie azioni associate — vedi [Azioni](/docs/academy/cluar/actions). |

:::info Differenza rispetto all'Elencazione
A differenza dell'Elemento dell'Elencazione, l'Elemento dello Slider **ha azioni proprie**, associate individualmente (`page_slider_item_action`) — ogni slide può avere il proprio pulsante/link.
:::

## Struttura di rendering

Come nell'Elencazione, l'`Item` dello Slider si trova **all'interno** della cartella del tipo, non come cartella sorella:

```
website/src/components/Slider/
├── index.jsx              # router: sceglie il tipo di slider
└── Default/
    ├── index.jsx           # layout dello slider, monta il carosello con gli <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # ogni slide, incluse le proprie azioni
```

## Tipi disponibili

Oggi esiste solo il tipo **Predefinito** (`Default`). Per creare un nuovo tipo di Slider (con il proprio `Item`), segui lo stesso processo descritto in [Tipi di Componente](/docs/academy/cluar/components/types), ricordando di includere la sottocartella `Item/` all'interno del nuovo tipo.

## Passo successivo

Continua con la [Funzionalità](/docs/academy/cluar/components/functionality).