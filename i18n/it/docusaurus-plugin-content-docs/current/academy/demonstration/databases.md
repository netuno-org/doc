---
sidebar_position: 4
id: databases
title: Database
---

# Database

In questa fase, esploreremo il **database** creato automaticamente dal modulo **Compito** definito in precedenza.

Quando hai creato il modulo **Compito** con il campo **Nome**, Netuno ha creato nel database la tabella `compito` con la colonna `nome`, in base ai nomi definiti durante la creazione del modulo.

I **nomi tecnici** dei campi (ad esempio, `compito`, `nome`, `compito_id`) sono usati nella programmazione e nelle query SQL, e non corrispondono ai nomi visualizzati mostrati nell'interfaccia.

## Query

In questa sezione eseguiremo query direttamente nel database usando l'interfaccia di gestione di Netuno.

1. Accedi all'ambiente **Costruisci**.
2. Nel menu, fai clic su **Gestione > Query**.
3. Nell'editor di query, incolla ed esegui i comandi seguenti.

### Query semplici

Elenca solo il nome dei compiti:

```sql
SELECT nome
FROM compito;
```

Elenca tutti i campi della tabella dei compiti:

```sql
SELECT *
FROM compito;
```

Elenca tutti i campi della tabella delle registrazioni:

```sql
SELECT *
FROM registrazione;
```

Elenca tutti i campi della tabella dei lavoratori:

```sql
SELECT *
FROM lavoratore;
```

Facendo clic su **Esegui**, Netuno genera una tabella di risultati per **ogni** comando separato da punto e virgola (`;`).  
Questo è utile quando vuoi eseguire più query in una sola volta.

### Query con relazioni

Ora, esegui una query che mette in relazione tutte le tabelle:

```sql
SELECT
  compito.nome,
  registrazione.inizio,
  registrazione.fine,
  lavoratore.nome
FROM compito
INNER JOIN registrazione
  ON compito.id = registrazione.compito_id
INNER JOIN lavoratore
  ON lavoratore.id = registrazione.lavoratore_id;
```

Questa query restituisce:

- Il nome del compito.
- L'inizio e la fine di ogni registrazione.
- Il nome del lavoratore associato a ogni registrazione.

Mostra come le relazioni tra tabelle permettono di combinare informazioni di entità diverse dell'applicazione.

## Diagramma

Per visualizzare la struttura del database in modo più intuitivo, usa il **Diagramma** di Netuno.

1. Accedi all'ambiente **Costruisci**.
2. Nel menu, fai clic su **Gestione > Diagramma**.

Nel Diagramma puoi:

- Ingrandire o ridurre lo zoom.
- Esportare il diagramma come immagine.

Queste azioni sono disponibili nei pulsanti sul lato destro del pannello del diagramma.

Netuno crea automaticamente le linee con frecce di relazione in base alla configurazione dei **Collegamenti** nei campi (ad esempio, campi di tipo `select` che puntano ad altre tabelle).

## Buone pratiche

Quando modelli il tuo database in Netuno, segui queste buone pratiche:

- Usa il suffisso `_id` nei campi che rappresentano relazioni, ad esempio:
  - `compito_id`
  - `lavoratore_id`
- Evita di usare nomi di tabelle e campi al plurale, come `compiti`, `registrazioni` o `lavoratori`.

Evitare il plurale aiuta a:

- Mantenere i nomi più brevi e leggibili.
- Ridurre le ambiguità quando si scrivono query.
- Facilitare la lettura nei moduli e nei diagrammi, soprattutto quando ci sono più relazioni.

:::tip Convenzione di denominazione
Come regola, usa sempre **nomi al singolare** per moduli, tabelle e campi.  
Esempi: `compito`, `registrazione`, `lavoratore`, `compito_id`, `lavoratore_id`.
:::

## Prossimo passo

Passa alla prossima fase **Relazionare i dati** per continuare con l'applicazione dimostrativa.