---
sidebar_position: 1
id: overview
title: Panoramica
sidebar_label: Panoramica
---

CLUAR è un CMS open source, costruito su [Netuno](https://www.netuno.org/), per la creazione di siti web multilingue. I componenti visivi delle pagine (banner, elenchi, slider, ecc.) sono sviluppati in ReactJS, con [Ant Design](https://ant.design/) per l'interfaccia, [React Router](https://reactrouter.com/) per la navigazione e [Less](https://lesscss.org/) per gli stili — mentre i contenuti (pagine, testi, immagini, lingue, menu) sono gestiti tramite un backoffice, senza necessità di programmare.

Il codice è disponibile nel [repository CLUAR su GitHub](https://github.com/netuno-org/cluar) — i contributi sono benvenuti.

## Modello di contenuto

Il contenuto di CLUAR segue la struttura **Pagina → Versione → Componenti**:

- Ogni **Pagina** rappresenta un URL del sito (`link`), con titolo, menu, SEO, ecc.
- Ogni pagina ha una o più **Versioni**, che consentono di lavorare su una bozza senza influire su ciò che è già pubblicato.
- All'interno di ogni versione si inseriscono i **Componenti** di contenuto — Banner, Contenuto, Elenco, Slider e Funzionalità — che sono i blocchi visualizzati effettivamente nella pagina, ciascuno con il proprio tipo visivo e, opzionalmente, azioni (pulsanti/link) associate.

## Architettura del progetto

Il progetto è suddiviso in quattro parti:

- **`server`** — l'applicazione Netuno: entità dati, servizi REST e gli script di configurazione iniziale (`setup`).
- **`website`** — il sito in ReactJS che consuma i dati via REST e renderizza le pagine.
- **`ui`** — estensioni al backoffice di Netuno specifiche di CLUAR.
- **`config`** — configurazione dell'ambiente (database, autenticazione, impostazioni generali).

## Prossimi passi

- [Installazione](/docs/academy/cluar/install)
- [Configurazione](/docs/academy/cluar/configuration)
- [Componenti](/docs/academy/cluar/components/overview)
- [Pagine](/docs/academy/cluar/pages/overview)
- [Lingue](/docs/academy/cluar/languages)
- [Permessi](/docs/academy/cluar/permissions)