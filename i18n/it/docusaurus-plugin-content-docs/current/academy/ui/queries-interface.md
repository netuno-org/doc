---
sidebar_position: 4
id: queries-interface
title: Interfaccia Query
---


Lo strumento Query di Netuno è una risorsa potente che consente l'interazione diretta con il database dell'applicazione tramite SQL (Structured Query Language). 

Questa funzionalità è essenziale per testare logiche di business, validare informazioni memorizzate e gettare le basi per report o componenti di interfaccia complessi. Netuno supporta attualmente tre sistemi di gestione dei database: **PostgreSql, H2 Database e MySQL**.

## 1 - Sezione Query

In modalità “Costruisci”, nel menu laterale, accedi all'area “Gestione” e fai clic sulla sezione "Query”.

![Interfaccia Query](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Area dei Comandi

Questa area è l'ambiente di interazione diretta con il database del progetto. Qui è possibile eseguire comandi per consultare, cercare e analizzare i dati in modo preciso e istantaneo. 

Assicurati che la sintassi utilizzata sia compatibile con il database configurato nel tuo ambiente Netuno.

![Area di query del database](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Area di Validazione

L'area di validazione fornisce un feedback istantaneo sulla sintassi e sull'esecuzione del tuo codice.

- **Successo (Verde):** Quando la query viene eseguita senza errori di sintassi o di struttura, il messaggio viene visualizzato con lo sfondo di colore verde. Ciò indica che i dati sono stati elaborati e sono pronti per la visualizzazione.

![Area di validazione - successo](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Errore o Fallimento (Rosso):** Se c'è qualsiasi impedimento nell'esecuzione (come errore di sintassi, nome di colonna errato o mancanza di permessi), il messaggio verrà visualizzato con lo sfondo di colore rosso. Oltre al colore, il sistema mostrerà il log dell'errore tecnico per aiutare nella diagnosi.

![Area di validazione - errore](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Area dei Risultati

È il luogo in cui le informazioni richieste al database vengono presentate in forma strutturata. Consente di visualizzare il contenuto delle tabelle e confermare se la logica della query restituisce i record attesi.

![Area dei risultati](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Pulsanti di Azione

Questa sezione descrive in dettaglio gli strumenti disponibili per eseguire, salvare e gestire i tuoi script SQL, ottimizzando il flusso di lavoro e il riutilizzo di query complesse.

Consente non solo l'esecuzione di comandi in tempo reale, ma anche una gestione intelligente della produttività tramite cronologia e librerie di script salvati.

![Pulsanti di azione della query](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Pulsante - Esegui

- **Funzione:** Invia lo script presente nell'area “Comandi” per essere elaborato dal database.

- **Feedback:** Dopo l'esecuzione, il sistema mostra un messaggio di successo (in verde) e popola automaticamente l'“Area dei Risultati” con i dati richiesti.

### 5.2 Pulsante - Cronologia

- **Funzione:** Registra le query eseguite di recente, mostrando il tempo di esecuzione (in millisecondi) e la registrazione di “data/ora” di ogni azione.

- **Recupero Rapido:** Facendo clic su qualsiasi voce dell'elenco della cronologia, lo script corrispondente viene reinserito nell'area “Comandi” per essere eseguito o modificato.

![Pulsante cronologia comandi della query](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Pulsante - Salva

**Funzione:** Consente di memorizzare script utili e trasformarli in modelli permanenti. È utile per query complesse che devono essere eseguite spesso.

**Passaggi per Salvare:**

- Con lo script pronto nell'editor, fai clic su Salva.

- Nella finestra modale “Salva Comando”, inserisci un “Nome” chiaro per identificare la funzione della query (es: “Filtra prodotti per prezzo”).

- Fai clic sul pulsante Salva all'interno della modale per confermare la memorizzazione.

![Pulsante salva comando della query](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Pulsante - Registro

**Funzione:** Consente di elencare tutti gli script salvati in precedenza.

- **Carica script:** Fai clic sullo script desiderato per aggiungerlo all'area “Comandi”.

- **Elimina:** Usa l'icona del cestino accanto a ogni voce per rimuoverla definitivamente dopo la conferma.

![Pulsante comandi registrati della query](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)