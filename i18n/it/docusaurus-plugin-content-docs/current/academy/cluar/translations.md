---
sidebar_position: 10
id: translations
title: Dizionari
sidebar_label: Dizionari
---

Come tradurre i testi fissi dell'interfaccia del sito web.

## Introduzione

**Dizionari** è il sistema di traduzioni dei testi fissi dell'interfaccia del sito web — etichette, messaggi, testi dei pulsanti — cose che non sono contenuto di pagina, ma testo "incorporato" nel codice, e che comunque deve esistere in ogni lingua.

Coinvolge due formulari nel backoffice:

- **Voce** (`translation_entry`)
- **Dizionario** (`translation`)

## Voce

Definisce una "chiave" di traduzione — **Codice** (`code`, usato nel codice per recuperare il valore) e **Descrizione**. Es.: una voce `modulo-contatto-successo`, usata per il messaggio di successo del modulo di contatto (è esattamente quella che appare nel [`ModuloContatto`](/docs/academy/cluar/components/functionality) della Funzionalità).

## Dizionario

È il **valore tradotto** di una Voce, per una determinata **Lingua** (`language_id`) — campo **Valore** (`value`, accetta HTML).

:::info Senza valore generico/senza lingua
A differenza delle [Impostazioni](/docs/academy/cluar/settings), il Dizionario **non ha** un meccanismo di fallback senza lingua — ogni Voce deve avere un Valore definito esplicitamente per ogni lingua in cui viene usata. Se manca la traduzione in una lingua, il testo che appare è il codice stesso della Voce (es.: `modulo-contatto-successo`), non un valore generico.
:::

## Programmaticamente

La classe `website/src/common/Cluar.js` mette a disposizione funzioni per leggere voci del dizionario, tutte restituendo il codice della voce come risultato se non c'è traduzione (utile per notare traduzioni mancanti):

- `Cluar.translation(voce)` — ottiene il valore tradotto nella lingua corrente, così come è stato salvato (può includere HTML).
- `Cluar.plainTranslation(voce)` — uguale, ma rimuove i tag `<p>` e `<br>`. È la più usata nelle etichette dell'interfaccia (pulsanti, campi di formulario, notifiche).
- `Cluar.plainTitle(voce)` — uguale, ma rimuove solo i tag `<p>`.
- `Cluar.plainHTML(voce)` — rimuove tutti i tag HTML.
- `Cluar.translationNoParagraph(voce)` — rimuove solo i tag `<p>` (equivalente a `plainTitle`).

## Prossimo passo

Esplora i [Template](/docs/academy/cluar/templates).