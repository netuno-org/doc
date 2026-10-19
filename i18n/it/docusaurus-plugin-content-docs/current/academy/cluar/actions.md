---
sidebar_position: 8
id: actions
title: Azioni
sidebar_label: Azioni
---

Come creare e riutilizzare CTA (pulsanti/link) associati ai componenti.

## Introduzione

Un'**Azione** è, in fondo, un **CTA** (call-to-action) riutilizzabile — un pulsante/link con titolo, testo, immagine e destinazione (`link`) — che può essere associato a [Componenti](/docs/academy/cluar/components/overview) come Banner, Contenuto, Elenco, Slider (negli elementi) e Funzionalità.

## Campi

| Campo | Descrizione |
|---|---|
| **Titolo** (`title`) | Titolo dell'azione, renderizzato come intestazione (`<h4>`). |
| **Contenuto** (`content`) | Testo descrittivo dell'azione, renderizzato come paragrafo (`<p>`). |
| **Indicazione** (`indication`) | Il testo del link/CTA stesso — è ciò che appare scritto **dentro** il pulsante cliccabile (es.: "Scopri di più", "Acquista ora"). |
| **Immagine** (`image`) | Immagine associata all'azione (es.: icona). |
| **Collegamento** (`link`) | Destinazione dell'azione (URL) — dove porta il CTA quando viene cliccato. |
| **Lingua** (`language_id`) | Lingua a cui appartiene questa azione. |
| **Parametro** (`parameter_id`) | Raggruppa questa azione con le sue equivalenti in altre lingue — vedi sotto. |

## Parametro

Il **Parametro** (`action_parameter`, con solo `código` e `descrição`) è un raggruppatore: diverse Azioni — ciascuna nella propria lingua, ma rappresentanti la **stessa funzionalità/destinazione** — condividono lo stesso Parametro.

Questo viene usato quando si [clona una pagina](/docs/academy/cluar/pages/cloning) in un'altra lingua: per ogni Azione associata a un componente della pagina originale, CLUAR cerca, tra le Azioni esistenti, una che abbia lo **stesso Parametro** e sia nella **lingua di destinazione** della clonazione. Se la trova, associa automaticamente quell'Azione (la versione già tradotta) al componente clonato — senza doverla aggiungere manualmente in seguito.

:::info Bisogna creare prima l'Azione nella lingua di destinazione
L'associazione automatica funziona solo se esiste già un'Azione con lo stesso Parametro nella lingua verso cui si sta clonando. Se non esiste ancora, l'azione semplicemente non viene associata al componente clonato — resta come se non fosse stata definita. In altre parole, il Parametro non traduce né crea automaticamente l'Azione; collega solo Azioni equivalenti già esistenti, una volta che siano state create in ciascuna lingua.
:::

Per esempio: un'Azione "Scopri di più" con Parametro `scopri-di-piu`, in italiano, e un'altra Azione "Learn more" con lo stesso Parametro `scopri-di-piu`, in inglese — clonando una pagina dall'italiano all'inglese, un Banner che aveva la prima Azione associata passa ad avere automaticamente la seconda.

## Prossimo passo

Esplora le [Configurazioni](/docs/academy/cluar/settings).