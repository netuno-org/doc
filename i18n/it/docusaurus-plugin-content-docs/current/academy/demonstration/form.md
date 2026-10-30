---
sidebar_position: 3
id: form
title: Modulo
---


# Modulo

In questa fase della dimostrazione, creerai il modulo **Attività** e configurerai il primo campo dati.

:::info Riferimento
Per una spiegazione più dettagliata sui moduli, consulta la [Guida all'Interfaccia: Moduli](/docs/academy/ui/forms).
:::

## Obiettivo

Al termine di questa fase, avrai:

- Un modulo chiamato **Attività**.
- Una tabella associata nel database.
- Un campo obbligatorio per memorizzare il nome dell'attività.
- Un'interfaccia pronta per creare, modificare, cercare e rimuovere record.

## Prerequisiti

Verifica che:

- L'applicazione dimostrativa sia già stata creata.
- La fase di configurazione sia già stata completata.
- Tu sia nell'area di sviluppo della piattaforma.

## Creare il Modulo

1. Nell'angolo in alto a destra, fai clic su **Costruisci**.
2. Nel menu principale, vai su **Gestione > Moduli**.
3. In **Titolo del Modulo**, inserisci `Attività`.
4. In **Nome della Tabella**, attiva l'opzione **Auto**.
5. Fai clic su **Salva**.

:::note
- **Titolo del Modulo** definisce il nome visualizzato nel menu laterale.
- **Nome della Tabella** definisce l'identificatore tecnico utilizzato nel database.
:::

Dopo il salvataggio, il modulo **Attività** sarà disponibile nel menu laterale sinistro.

## Creare il Primo Campo

Con il modulo creato:

1. Nel menu laterale, fai clic su **Attività**.
2. In **Nome Visualizzato**, inserisci `Nome`.
3. Conferma che il nome tecnico sia stato generato automaticamente con lettere minuscole.
4. Attiva l'opzione **Chiave primaria** (campo univoco).
5. Attiva l'opzione **Non nullo** (campo obbligatorio).
6. In **Tipo**, seleziona `text`.
7. Fai clic su **Salva**.

:::tip
- **Chiave primaria** garantisce valori univoci per ogni record.
- **Non nullo** rende obbligatoria la compilazione.
- Il tipo `text` consente di memorizzare testo semplice.
:::

## Validare il Risultato

Apri l'area di visualizzazione e conferma che:

- Il modulo **Attività** sia disponibile.
- Il campo **Nome** appaia per la compilazione.
- Sia possibile creare un nuovo record.
- Il campo **Nome** sia obbligatorio.

:::info Risultato atteso
Se la configurazione è corretta, il modulo sarà pronto per operazioni di creazione, modifica, ricerca e rimozione di record.
:::

## Prossimi Passi

Passa alla prossima fase di **Database** per esplorare e modificare l'applicazione dimostrativa.