---
sidebar_position: 1
id: overview
title: Panoramica
sidebar_label: Panoramica
---

I **Componenti** sono i blocchi di contenuto che compongono una [Pagina](/docs/academy/cluar/pages/overview), all'interno di una [Versione](/docs/academy/cluar/pages/versions-publishing). Esistono 5 tipi:

- **Banner**
- **Contenuto**
- **Elenco** (con Elementi)
- **Slider** (con Elementi)
- **Funzionalità**

Ognuno ha la propria entità (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), il proprio modulo nel backoffice e il proprio componente React nel sito web.

## Campi comuni

Sebbene ogni componente abbia campi propri, la maggior parte condivide una base simile:

| Campo | Descrizione |
|---|---|
| **Tipo** (`type`) | Definisce quale variante visiva viene usata per rendere questo componente — vedi [Tipi di Componente](/docs/academy/cluar/components/types). |
| **Ordine** (`sorter`) | Posizione del componente all'interno della pagina. |
| **Modalità di Modifica** (`edit_mode`) | Definisce se il contenuto (`content`) è testo semplice o HTML (`html_content`). |
| **Inverti sfondo del titolo / contenuto** (`title_invert_background`, `content_invert_background`) | Inverte lo schema di colore (chiaro/scuro) dell'**editor** di testo del titolo/contenuto — utile quando si scrive un testo che starà su uno sfondo scuro (es.: un'immagine scura nel banner), per vedere il testo con contrasto durante la modifica. Non modifica il colore del contenuto già pubblicato nella pagina. |
| **Azioni** | Pulsanti/link associati al componente — vedi [Azioni](/docs/academy/cluar/actions). Non tutti i tipi supportano azioni — vedi [Tipi di Componente](/docs/academy/cluar/components/types). |

## Passo successivo

Ogni componente usa lo stesso meccanismo di tipi dinamici — vedi [Tipi di Componente](/docs/academy/cluar/components/types). Poi, esplora ogni componente in dettaglio: [Banner](/docs/academy/cluar/components/banner), [Contenuto](/docs/academy/cluar/components/content), [Elenco](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funzionalità](/docs/academy/cluar/components/functionality).