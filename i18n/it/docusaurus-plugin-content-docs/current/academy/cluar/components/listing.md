---
sidebar_position: 5
id: listing
title: Lista
sidebar_label: Lista
---

Come presentare una serie di elementi correlati — prodotti, servizi, notizie e così via.

## Introduzione

La **Lista** serve a presentare una serie di elementi correlati — prodotti, servizi, referenze, notizie e così via. Ogni Lista ha un proprio titolo/contenuto introduttivo e raggruppa diversi **Elementi**, gestiti separatamente nel backoffice (`Lista > Elemento`).

Segue lo stesso meccanismo comune a tutti i componenti, descritto in [Panoramica](/docs/academy/cluar/components/overview) e [Tipi di Componente](/docs/academy/cluar/components/types).

## Campi della Lista

Oltre ai [campi comuni](/docs/academy/cluar/components/overview#campi-comuni) (Tipo, Ordine, Modalità di modifica, Inverti sfondo, Azioni), la Lista ha:

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo della lista. |
| **Contenuto** (`content` / `html_content`) | Testo introduttivo della lista. |
| **Immagine** (`image`) | Immagine associata alla lista stessa (non agli elementi). |
| **Alt immagine** (`image_alt`) | Testo alternativo dell'immagine. |
| **Titolo immagine** (`image_title`) | Attributo `title` dell'immagine. |

## Elementi

Ogni elemento appartiene a una Lista (`page_listing_id`) e ha i propri campi:

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo dell'elemento. |
| **Contenuto** (`content` / `html_content`) | Testo dell'elemento. |
| **Immagine** (`image`) | Immagine dell'elemento. |
| **URL** (`link`) | Link dell'elemento — dove l'utente va quando clicca. |
| **Ordine** (`sorter`) | Posizione dell'elemento all'interno della lista. |

Nota che l'elemento **non ha un proprio campo Tipo** — eredita il tipo della Lista a cui appartiene: il componente React della Lista passa il suo `type` a ogni elemento al momento del rendering.

## Struttura di rendering

A differenza del Banner e del Contenuto, dove ogni tipo è una cartella indipendente all'interno del componente, nella Lista il componente che renderizza gli elementi (`Item`) si trova **dentro** la cartella del tipo:

```
website/src/components/Listing/
├── index.jsx              # router: sceglie il tipo di lista
└── Default/
    ├── index.jsx           # layout della lista, renderizza gli <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # come ogni elemento viene renderizzato, per questo tipo
```

Questo ha senso perché il modo in cui un elemento viene presentato (griglia, lista, schede...) dipende spesso direttamente dal layout della lista — per questo l'`Item` di ogni tipo può essere personalizzato insieme al tipo stesso, invece di essere un componente generico condiviso da tutti i tipi.

## Tipi disponibili

Oggi esiste solo il tipo **Predefinito** (`Default`). Per creare un nuovo tipo di Lista (con il proprio `Item`), segui lo stesso processo descritto in [Tipi di Componente](/docs/academy/cluar/components/types), ricordando di includere la sottocartella `Item/` all'interno del nuovo tipo.

## Prossimo passo

Continua con lo [Slider](/docs/academy/cluar/components/slider).