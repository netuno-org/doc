---
sidebar_position: 4
id: content
title: Contenuto
sidebar_label: Contenuto
---

Il componente di testo e immagine più generico di CLUAR.

## Introduzione

Il **Contenuto** è il componente di testo/immagine più generico di CLUAR — usato per blocchi di testo semplice, testo con immagine affiancata, o solo un'immagine, a seconda del tipo scelto.

Segue lo stesso meccanismo comune a tutti i componenti, descritto in [Panoramica](/docs/academy/cluar/components/overview) e [Tipi di Componente](/docs/academy/cluar/components/types).

## Campi

Oltre ai [campi comuni](/docs/academy/cluar/components/overview#campi-comuni) (Tipo, Ordine, Modalità di modifica, Inverti sfondo, Azioni), il Contenuto ha:

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo del blocco di contenuto. |
| **Contenuto** (`content` / `html_content`) | Testo del blocco. |
| **Immagine** (`image`) | Immagine associata (non usata nei tipi solo testo). |
| **Alt immagine** (`image_alt`) | Testo alternativo dell'immagine. |
| **Titolo immagine** (`image_title`) | Attributo `title` dell'immagine. |
| **Larghezza Massima dell'Immagine** (`image_max_width`) | Limita la larghezza dell'immagine, in pixel — utile per evitare che l'immagine si allunghi troppo su schermi larghi, soprattutto nei tipi in cui l'immagine è affiancata al testo. |

## Tipi disponibili

A differenza del Banner, il Contenuto ha diversi tipi incentrati su differenti disposizioni di immagine e testo:

- **Predefinito** (`Default`)
- **Testo** (`TextContent`) — solo testo, senza immagine.
- **Immagine** (`ImageContent`) — solo immagine, senza testo.
- **Immagine a sinistra** (`ImageLeft`)
- **Immagine a destra** (`ImageRight`)
- **Immagine in alto** (`ImageTop`)
- **Immagine in basso** (`ImageBottom`)

Per i dettagli su come funzionano i tipi e su come crearne uno nuovo, vedi [Tipi di Componente](/docs/academy/cluar/components/types).

## Passo successivo

Continua con l'[Elenco](/docs/academy/cluar/components/listing).