---
sidebar_position: 5
id: languages
title: Lingue
sidebar_label: Lingue
---

Come CLUAR gestisce le lingue del website e i contenuti multilingue.

## Introduzione

CLUAR è multilingue per impostazione predefinita: ogni **Pagina** è associata a una lingua, e il website presenta un selettore che permette al visitatore di passare tra le lingue disponibili.

Le lingue sono gestite nel backoffice, tramite il modulo **Lingua**.

## Campi

| Campo | Descrizione |
|---|---|
| **Codice** (`code`) | Codice internazionale della lingua (es.: `IT`, `EN`). È il valore usato per associare contenuti (pagine, dizionario, configurazioni) a questa lingua. |
| **Localizzazione** (`locale`) | Localizzazione completa (es.: `it`, `en`). È il valore usato nel link delle pagine e nel cambio di lingua via codice. |
| **Predefinita** (`default`) | Contrassegna questa lingua come preferenziale del website — è quella caricata per impostazione predefinita. |
| **Descrizione** (`description`) | Nome della lingua mostrato al visitatore (es.: "Italiano"). |

## Selezione della lingua nel website

Esistono attualmente due selettori di lingua nel progetto:

- **Header del sito pubblico** (`website/src/base/Header`) — il selettore tradizionale, realizzato con il [Menu di Ant Design](https://ant.design/components/menu/). Al cambio di lingua, naviga verso `/{locale}/`. Elenca solo le lingue che hanno già pagine pubblicate (tramite `Cluar.pages()`), per non mostrare opzioni vuote.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — usato all'interno dell'Area Riservata (`ReservedArea`). È un dropdown più semplice: cambia la lingua attiva e ricarica la pagina corrente, senza navigare verso un'altra rotta.

## Programmaticamente

La classe `website/src/common/Cluar.js` mette a disposizione funzioni per lavorare con le lingue:

- `Cluar.defaultLanguage()` — ottiene la lingua contrassegnata come predefinita.
- `Cluar.currentLanguage()` — ottiene la lingua attiva in quel momento.
- `Cluar.changeLanguage(codiceOLocalizzazione)` — attiva un'altra lingua programmaticamente (accetta sia il `code` che il `locale`).
- `Cluar.languages()` — ottiene l'elenco di tutte le lingue.

## Passo successivo

Scopri come il contenuto di ogni lingua è organizzato nelle [Pagine](/docs/academy/cluar/pages/overview).