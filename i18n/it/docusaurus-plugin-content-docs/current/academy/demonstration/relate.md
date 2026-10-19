---
sidebar_position: 5
id: relate
title: Collegare i Dati
description: Collega attività e registrazioni delle ore per sapere chi ha eseguito quale attività e quanto tempo è stato impiegato.
---

# Collegare i Dati

Crea una relazione tra attività e registrazioni delle ore per sapere **chi** ha eseguito **quale attività** e **quanto tempo** è stato impiegato.

Al termine di questa fase, il modulo **Registrazione** sarà collegato alla tabella **Attività**, permettendo di visualizzare l'attività associata direttamente nell'elenco delle registrazioni.

## Prerequisiti

Prima di iniziare, verifica di aver già completato:

- La creazione del modulo **Attività** con il campo `nome`.
- La creazione del modulo **Registrazione** con i campi di base per le ore lavorate.
- La configurazione delle tabelle corrispondenti nel **Database**.

:::tip
Per maggiori dettagli su come collegare i dati, consulta la [Guida all'Interfaccia: Relazioni](/docs/academy/ui/relationships-between-forms).
:::

Finora hai creato una gestione delle attività e un registro delle ore, ma ogni elenco funziona ancora in modo isolato.  

È importante collegarli, in modo che ogni registrazione delle ore indichi chiaramente quale attività è stata svolta da un collaboratore e in quale periodo.

In questa fase:

- Creare un campo di tipo `select` nel modulo **Registrazione**.
- Configurare il campo per collegarlo alla tabella **Attività**.
- Aggiornare alcuni dati per vedere la relazione funzionare concretamente.

## Campo di Tipo `select`

Aggiungi un campo che permetterà di selezionare l'attività associata a ogni registrazione delle ore.

1. Nell'ambiente **Costruisci**, apri il modulo **Registrazione** e accedi alla gestione dei campi.
2. Crea un nuovo campo con le seguenti configurazioni:
   - **Titolo del Campo**: `Attività`
   - **Nome della Colonna**: `attivita_id`
   - **Tipo**: `select`
3. Attiva l'opzione **Obbligatorio** per garantire che ogni registrazione sia associata a un'attività.
4. Mantieni disattivata l'opzione **Valori Unici**, poiché ci saranno molte registrazioni per la stessa attività.

:::note
Suggeriamo il nome `attivita_id` per mantenere uno standard di denominazione coerente in tutto il modello di dati.
:::

## Usare il Suffisso `_id`

Il nome del campo che fa riferimento a un'altra registrazione deve terminare con `_id`.  
Questo schema facilita l'identificazione del fatto che il campo rappresenta una relazione con un'altra tabella e rende il modello di dati più organizzato.

:::warning
Evita di usare nomi generici come `attivita` o `ref_attivita` per i campi di relazione.  
Standardizzare con `_id` aiuta a evitare confusione quando analizzi dati o crei integrazioni.
:::

## Configurare il Link di Relazione

Configura il **Link**, che è responsabile del collegamento del campo `attivita_id` con la tabella delle attività.

1. Nel campo appena creato (`attivita_id`), scorri fino alla sezione di configurazione del **Link**.
2. Fai clic su **Aggiungi**.
3. Nella finestra che si apre:
   - Seleziona l'opzione **attivita**.
   - Quindi seleziona il campo **nome**.
   - Chiudi la finestra per applicare.

Al termine, il **Link** sarà definito come:

```text
attivita:nome
```

Questo significa che:

- La relazione verrà creata con la tabella **attivita**.
- Nell'interfaccia, verrà visualizzato il valore del campo **nome** dell'attività quando si seleziona nel campo `Attività`.

Fai clic sul pulsante **Salva** per salvare la configurazione del campo.

:::tip
Quando possibile, utilizza un campo descrittivo (come `nome`) per visualizzare l'informazione correlata, invece di un identificatore tecnico o numerico.
:::

## Aggiornare i Registri

Con il campo di relazione configurato, modifica i dati per visualizzare il risultato.

1. Accedi alla visualizzazione del modulo **Registrazione**.
2. Nota che ora la tabella dei risultati ha una nuova colonna chiamata **Attività**, che inizialmente sarà vuota.
3. Modifica alcune registrazioni:
   - Fai clic su una riga nella tabella dei risultati per aprire il modulo di modifica.
   - Nel campo **Attività**, seleziona l'attività corrispondente.
   - Fai clic su **Salva** per salvare.

**Dopo aver salvato:**

- La colonna **Attività** nella tabella dei risultati mostrerà il nome dell'attività associata.
- Ogni **Registrazione** sarà chiaramente collegata a un'**Attività**, permettendo un'analisi più completa del tempo impiegato in ciascuna attività.

:::note
Se ci sono molte registrazioni senza attività definita, valuta la possibilità di eseguire l'aggiornamento in lotti o di definire un'attività predefinita temporanea, in base alla tua politica sui dati.
:::

### Risultato Atteso

L'elenco del modulo **Registrazione** dovrà mostrare:

- Una colonna **Attività** compilata con i nomi delle attività associate.
- Ogni riga che rappresenta una registrazione delle ore con la relativa attività, rendendo più semplice identificare dove è stato investito il tempo.

## Prossimi Passi

Nel prossimo argomento, vedrai come creare un **Servizio** per esporre questi dati e utilizzarli in altre parti dell'applicazione, come report o interfacce personalizzate.