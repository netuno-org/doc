---
sidebar_position: 2
id: forms
title: Formulari
---

## Come creare formulari

La gestione dei formulari è l'area in cui puoi creare e amministrare le strutture dati della tua applicazione. Ogni formulario che crei qui diventa un'interfaccia nel backoffice per inserire, modificare e visualizzare dati, oltre a corrispondere a una tabella nel database.

È suddiviso in due passaggi essenziali e obbligatori, con una breve panoramica sul **raggruppamento dei formulari** e sulla **modalità diagramma**.

![gestione-formulari.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Titolo del Formulario

È il nome del tuo formulario, quindi inserisci un nome chiaro e intuitivo. 
Verrà visualizzato nel menu laterale del backoffice nelle seguenti sezioni: **Formulari** (in modalità Visualizza) e **Gestisci Campi** (in modalità Costruisci).

![nome-formulario-titolo.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Nome della Tabella

È il nome tecnico che sarà usato per creare la tabella corrispondente nel database. Questo nome è usato internamente dal sistema e dagli sviluppatori.

**Come compilare:**

- **Manuale:** Digita un nome univoco al singolare, con lettere minuscole e senza spazi o caratteri speciali (usa il formato `snake_case`, ad esempio: registrazione_cliente).
- **Automatico:** Seleziona la casella **Auto** accanto al campo. Il sistema genererà automaticamente un nome tecnico basato sul **Titolo del formulario**. Questa è la pratica consigliata per mantenere la coerenza.
- 

![nome-tabella.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Raggruppamento dei formulari (Padre)

Questo campo consente di creare una gerarchia tra formulari. Selezionando un "Padre", stai definendo che il formulario corrente è un sottoelemento del formulario selezionato. Verrà visualizzato nel menu laterale nelle seguenti sezioni: "Formulari" (in modalità Visualizza) e "Gestisci Campi" (in modalità Costruisci) del formulario principale associato.

**Come compilare:**

- Lascia vuoto se questo è un formulario principale (come "Cliente").
- Seleziona un formulario esistente nell'elenco se vuoi creare una relazione di dipendenza. Ad esempio, un formulario "Indirizzi" potrebbe avere "Cliente" come padre.

![raggruppamento-formulari-padre.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Opzioni di Controllo

Queste caselle di selezione attivano funzionalità specifiche per il formulario.

- **Mostra Id:** Seleziona questa opzione se desideri che il campo di identificazione univoca (ID) di ogni record sia visibile nell'elenco dei dati del formulario.
- **Controllo per Attivo:** Attiva un controllo di stato (Attivo/Inattivo) per ogni record. Ciò consente di disattivare un elemento senza doverlo eliminare dal database.
- **Controllo per Utente:** Fa in modo che ogni record creato nel formulario sia associato all'utente che lo ha creato. È utile per tracciare chi ha effettuato ogni registrazione.
- **Controllo per Gruppo:** Associa ogni record a un gruppo di utenti. Questa opzione è comunemente usata per gestire i permessi di accesso ai dati in base ai gruppi registrati nel sistema.

![opzioni-controllo.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Configurazioni di ordinamento e utenti associati

Questi campi definiscono valori predefiniti per i nuovi record e l'ordine di visualizzazione.

- **Riordina:** Imposta un numero per l'ordine in cui questo formulario apparirà nel menu laterale. I numeri più bassi (come 0, 1, 2) appaiono per primi.
- **Utente:** Seleziona un utente predefinito che sarà associato ai nuovi record, se il "Controllo per Utente" è attivato. "Generale" significa che non c'è un utente specifico.
- **Gruppo:** Seleziona un gruppo predefinito che sarà associato ai nuovi record, se il "Controllo per Gruppo" è attivato. "Generale" significa che non c'è un gruppo specifico.

![impostazioni-ordinamento-utenti-associati.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Modalità Diagramma

La schermata **Diagramma** offre una visualizzazione grafica dell'intera struttura dati della tua applicazione. Noto come Diagramma Entità-Relazione (DER), mostra tutti i formulari (che rappresentano tabelle nel database), i rispettivi campi e le connessioni tra di essi.
Questo strumento è fondamentale per capire rapidamente come le informazioni della tua applicazione sono organizzate e collegate, facilitando l'analisi e lo sviluppo.

![diagramma-formulari.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Prova a creare diversi formulari e campi e visualizzali nella modalità diagramma!

## Passo Successivo

Salva il formulario e passa al passo successivo: creazione dei campi!

Vedi [qui](/docs/academy/ui/fields) come iniziare a creare i campi.