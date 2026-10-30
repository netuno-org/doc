---
sidebar_position: 7
id: functionality
title: Funzionalità
sidebar_label: Funzionalità
---

Le funzionalità concrete disponibili da includere in una pagina, come moduli e mappe.

## Introduzione

La **Funzionalità** è diversa dagli altri componenti: invece di varianti visive dello stesso contenuto, ogni tipo è una **funzionalità concreta** da includere nella pagina — oggi, un modulo di contatto o una mappa.

Segue lo stesso meccanismo comune a tutti i componenti, descritto in [Panoramica](/docs/academy/cluar/components/overview) e [Tipi di Componente](/docs/academy/cluar/components/types) — ma qui, scegliendo il Tipo, si sta scegliendo **quale funzionalità** appare nella pagina, non solo uno stile diverso.

## Campi

Oltre ai [campi comuni](/docs/academy/cluar/components/overview#campi-comuni) (Tipo, Ordine, Modalità di Modifica, Inverti sfondo, Azioni), la Funzionalità ha:

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo del blocco. |
| **Contenuto** (`content` / `html_content`) | Testo del blocco. |
| **Immagine** (`image`) | Immagine associata (non tutti i tipi la usano). |

## Tipi disponibili

### Modulo di Contatto (`ContactForm`)

Presenta un modulo di contatto (nome, e-mail, messaggio), protetto da reCAPTCHA. All'invio, invia i dati al servizio `contact` sul server, che li salva nell'entità `contact` (visibile nel backoffice) e consente di configurare avvisi via e-mail.

### Mappa di Contatto (`ContactMap`)

Presenta una mappa interattiva, usando [Mapbox](https://www.mapbox.com/). Usa la configurazione `settings.cluar.website.mapbox` (vedi [Configurazione](/docs/academy/cluar/configuration)) — in particolare l'`accessToken` (obbligatorio per il funzionamento della mappa) e l'opzione `dark` (tema chiaro o scuro della mappa).

## Passo successivo

Con i 5 componenti esplorati, passa alle [Azioni](/docs/academy/cluar/actions), che possono essere associate alla maggior parte di essi.