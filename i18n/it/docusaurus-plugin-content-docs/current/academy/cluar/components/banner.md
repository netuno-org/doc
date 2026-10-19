---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

Il componente in evidenza in grande formato, normalmente usato nella parte superiore della pagina.

## Introduzione

Il **Banner** è il grande elemento in evidenza di una pagina — normalmente un'immagine che occupa tutta la larghezza, con un titolo in evidenza sopra e, facoltativamente, un testo introduttivo e azioni (pulsanti/link).

Segue lo stesso meccanismo comune a tutti i componenti, descritto in [Panoramica](/docs/academy/cluar/components/overview) e [Tipi di componente](/docs/academy/cluar/components/types).

## Campi

Oltre ai [campi comuni](/docs/academy/cluar/components/overview#campi-comuni) (Tipo, Ordine, Modalità di modifica, Inverti sfondo, Azioni), il Banner ha:

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo in evidenza sopra l'immagine. |
| **Contenuto** (`content` / `html_content`) | Testo introduttivo, sotto il titolo. |
| **Immagine** (`image`) | Immagine di sfondo del banner. |
| **Immagine Alt** (`image_alt`) | Testo alternativo dell'immagine, per accessibilità e SEO. |
| **Titolo immagine** (`image_title`) | Attributo `title` dell'immagine. |
| **Posizione X** / **Posizione Y** (`position_x`, `position_y`) | Regolano il punto focale dell'immagine di sfondo (`background-position`), in percentuale. |

## Posizione dell'immagine

I campi **Posizione X** e **Posizione Y** controllano quale parte dell'immagine di sfondo rimane sempre visibile, man mano che il banner viene ridimensionato a risoluzioni diverse — lo stesso principio di `background-position` in CSS.

Ad esempio, `50%` / `50%` centra il punto focale al centro dell'immagine: a qualsiasi risoluzione, è il centro dell'immagine a rimanere visibile, ritagliando i bordi secondo necessità.

## Tipi disponibili

Attualmente esistono tre tipi di Banner:

- **Predefinito** (`Default`) — layout di base, con titolo, contenuto e azioni.
- **Secondario** (`Secondary`) — visivamente diverso dal Predefinito (stile proprio in CSS/LESS), ma con la stessa struttura di campi.
- **Predefinito con Evidenza** (`DefaultSubBanner`) — variante più discreta, senza supporto per azioni (`action: false` in `config.json`).

Per i dettagli su come funzionano i tipi e su come crearne uno nuovo, vedi [Tipi di componente](/docs/academy/cluar/components/types).

## Prossimo passo

Continua con il [Contenuto](/docs/academy/cluar/components/content).