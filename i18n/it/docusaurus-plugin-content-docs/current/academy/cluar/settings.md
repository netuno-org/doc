---
sidebar_position: 9
id: settings
title: Impostazioni
sidebar_label: Impostazioni
---

Il sistema di parametri chiave/valore gestiti dall'editor dei contenuti, senza bisogno di codice.

## Introduzione

**Impostazioni** è un sistema di parametri chiave/valore, gestiti dall'editor dei contenuti nel backoffice — pensato per valori del sito web che cambiano spesso o variano per lingua (es.: numero di telefono, indirizzo, link ai social network, un'immagine del logo), senza dover mettere mano al codice.

Coinvolge tre moduli nel backoffice:

- **Tipo** (`configuration_parameter_type`)
- **Parametro** (`configuration_parameter`)
- **Configurazione** (`configuration`)

## Tipo

Definisce quale tipo di valore accetta un Parametro. Ha solo **Codice** (`code`) e **Nome** (`name`). Sono già creati per impostazione predefinita:

| Codice | Nome |
|---|---|
| `boolean` | Booleano |
| `number` | Numero |
| `image` | Immagine |
| `color` | Colore |
| `text` | Testo |
| `html` | HTML |

## Parametro

Definisce una "chiave" di configurazione — **Codice** (`code`, usato nel codice per recuperare il valore), **Descrizione** e il **Tipo** (quale dei tipi sopra). Es.: un parametro `numero-telefono`, di tipo Testo.

## Configurazione

È il **valore** di un Parametro, per una determinata **Lingua** — **Valore** (`value`, testo) o **Immagine** (`value_img`), a seconda del tipo del parametro.

### Valori senza lingua (fallback generico)

Se il campo **Lingua** di una Configurazione rimane vuoto, quel valore viene usato come **fallback per tutte le lingue** che non hanno un valore proprio definito per quel parametro. Questo evita di dover duplicare lo stesso valore (es.: un numero di telefono uguale in tutte le lingue) per ogni lingua separatamente — si definisce una sola volta, senza lingua associata, e si definisce un valore specifico per lingua solo dove è davvero diverso.

## Programmaticamente

La classe `website/src/common/Cluar.js` mette a disposizione funzioni per leggere le configurazioni:

- `Cluar.configuration(parametro)` — ottiene il valore di un parametro nella lingua corrente; se non esiste un valore per quella lingua, usa il valore senza lingua (fallback); se non esiste nessuno dei due, restituisce il nome stesso del parametro (utile per notare rapidamente una configurazione mancante).
- `Cluar.configurationNumber(parametro)` — analogo, ma converte il valore in numero (0 se non è numerico).
- `Cluar.configurationMultilines(parametro)` — analogo, ma converte le interruzioni di riga in `<br>`.

## Prossimo passo

Esplora i [Dizionari](/docs/academy/cluar/dictionaries).