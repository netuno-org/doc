---
sidebar_position: 2
id: versions-publishing
title: Versioni e Pubblicazione
sidebar_label: Versioni e Pubblicazione
---

## Versioni

Ogni pagina ha una o più **Versioni** (`page_version`), ognuna con il proprio stato (Bozza / Pubblicata). Ciò consente di modificare una nuova versione del contenuto senza influire su ciò che è pubblicato — solo quando la versione viene contrassegnata come Pubblicata diventa la versione attiva della pagina.

I componenti di contenuto (Banner, Contenuto, Elenco, Slider, Funzionalità) appartengono sempre a una versione specifica (`page_version_id`), non direttamente alla pagina. In altre parole, modificare un componente in una versione in bozza non influisce su ciò che è pubblicato.

## Pubblicazione

Quando si pubblica una pagina, CLUAR:

1. Raccoglie tutti i componenti attivi della versione pubblicata (banner, contenuti, elenchi, slider, funzionalità, con le rispettive azioni).
2. Genera un file di struttura in JSON con tale contenuto.
3. In produzione, pre-renderizza un `index.html` statico per l'URL della pagina (per lingua), già con i meta tag SEO e Open Graph compilati — importante per la condivisione sui social network e per i motori di ricerca, poiché il sito stesso è una SPA in React.

## Prossimo passo

Un modo comune per creare una pagina è duplicarne un'altra già esistente — vedi [Clonare pagina](/docs/academy/cluar/pages/cloning).