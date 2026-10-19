---
sidebar_position: 1
id: overview
title: Panoramica
sidebar_label: Panoramica
---

La **Pagina** è l'entità centrale di CLUAR: rappresenta un URL del sito web. Ogni pagina appartiene a una sola lingua — non esiste un'unica pagina "multilingue", ogni lingua ha la propria pagina (con il proprio `link`, titolo, contenuto, ecc.), e sono collegate tra loro solo tramite l'azione di [clonazione](/docs/academy/cluar/pages/cloning).

## Campi

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo della pagina. |
| **Link** (`link`) | L'URL della pagina (es.: `/chi-siamo`). |
| **Lingua** (`language_id`) | Lingua a cui appartiene questa pagina. |
| **Genitore** (`parent_id`) | Pagina genitore, usata per costruire gerarchia/breadcrumb e sottomenu. |
| **Template** (`template`) | Template usato per renderizzare la pagina (vedi [Template](/docs/academy/cluar/templates)). È una select nel modulo, popolata dinamicamente con le cartelle esistenti in `website/src/pages/Template/`. |
| **Stato** (`status_id`) | Bozza o Pubblicata — riflette lo stato della versione corrente. |
| **Menu** (`menu`) | Se selezionato, la pagina appare nel menu di navigazione. |
| **Titolo menu** (`menu_title`) | Titolo alternativo da mostrare nel menu (se vuoto, usa il Titolo della pagina). |
| **Navigabile** (`navigable`) | Controlla se la pagina è accessibile direttamente (anche senza apparire nel menu). |
| **Ordine** (`sorter`) | Posizione della pagina tra le sue "sorelle" (stesso `parent_id`). |
| **Descrizione** / **Parole chiave** | Meta tag SEO (`<meta name="description">` / `<meta name="keywords">`). |
| **Descrizione per i social media** / **Immagine per i social media** | Usate nei tag Open Graph (`og:description`, `og:image`) quando la pagina viene condivisa. |

## Prossimo passo

Ogni pagina ha diverse versioni e segue un flusso di pubblicazione — vedi [Versioni e pubblicazione](/docs/academy/cluar/pages/versions-publishing).