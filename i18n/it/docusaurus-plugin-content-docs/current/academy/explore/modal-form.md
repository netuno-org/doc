---
id: modal-form
title: Modulo Modale
---

Creazione e gestione di moduli in finestre modali.
## Introduzione

Il Modale è una funzionalità dell'interfaccia utente (UI) che consente di aprire un modulo senza che l'utente debba uscire dalla pagina corrente.

L'uso dei modali migliora significativamente l'Esperienza Utente (UX), consentendo l'esecuzione di operazioni **CRUD (Creare, Leggere, Aggiornare, Eliminare)** senza la necessità di ricaricare la pagina o perdere il contesto della schermata corrente. 

Netuno gestisce automaticamente la comunicazione con il backend e l'iniezione dell'HTML necessario.


#### Prerequisiti

Per implementare gli esempi, avrai bisogno di:

- Accesso all'ambiente di sviluppo della tua applicazione Netuno.
- Un modulo configurato correttamente nel pannello amministrativo (backoffice) di Netuno.
- Conoscenza di base di JavaScript e gestione degli eventi nel DOM.

Negli esempi seguenti utilizzeremo un modulo generico chiamato **"prova"**.

Se hai dubbi su questi passaggi, consulta: [Moduli](/docs/academy/ui/forms).

## Struttura di Base

La creazione e la gestione dei modali in Netuno è centralizzata nell'oggetto `netuno.modal`.

Il metodo **netuno.modal.create()** crea la struttura di base del modale nell'interfaccia. Riceve un oggetto di configurazione con le seguenti proprietà:

- **name (String):** Il nome del modulo (creato nel backoffice) che servirà come base per il modale.
- **callback (Function):** Funzione eseguita non appena la struttura del modale viene iniettata nel DOM (ma prima che venga visualizzata), riceve come parametro l'elemento del modale creato.

### Funzione Callback

All'interno della funzione callback, dovrai definire quale sarà lo stato (modalità) del modulo utilizzando le funzioni di caricamento native:

- **Modalità Elenco - `netuno.loadForm()`**: Renderizza la tabella di ricerca e l'elenco dei record di quel modulo.

- **Modalità Modifica/Creazione - `netuno.loadFormEdit()`**: Renderizza i campi di input del modulo. Può essere usato per inserire un nuovo record o modificare uno esistente.

## Implementazione
Di seguito, dettagliamo i tre scenari d'uso più comuni.

### 1. Modalità di Elenco

`netuno.loadForm()` viene utilizzato quando desideri che l'utente visualizzi tutti i dati di un modulo sotto forma di tabella (griglia) di ricerca.

```jsx
netuno.modal.create({
  name: 'prova',
  callback: function (modale) {
    // 1. Individua il contenitore interno destinato a ricevere il modulo
    let contenitoreModulo = modale.find('[netuno-form]');
    // 2. Inserisce l'elenco dei dati del modulo nel contenitore
    netuno.loadForm(contenitoreModulo); 
    // 3. Mostra il modale all'utente
    netuno.modal.show(modale);
  }
});
```
### 2. Modalità di Creazione

`netuno.loadFormEdit()` viene utilizzato per pulsanti del tipo "Aggiungi Nuovo". Apre il modulo pulito, pronto per l'inserimento dei dati.

```jsx
netuno.modal.create({
  name: 'prova',
  callback: function (modale) {
    let contenitoreModulo = modale.find('[netuno-form]');
    // Carica il modulo in modalità inserimento (nuovo record)
    netuno.loadFormEdit(contenitoreModulo); 
    netuno.modal.show(modale);
  }
});
```

:::info
Quando utilizzi `netuno.loadFormEdit()` senza passare un **ID**, Netuno interpreta che desideri usare la "schermata di modifica" da zero. Carica l'interfaccia con i campi di input vuoti, pronti per la creazione di un nuovo record. In questo scenario, Netuno attiva internamente l'evento `netuno:new`.
:::

### 3. Modalità di Modifica

Se hai bisogno che il modale carichi un record specifico per la modifica, devi passare l'**UID** o l'**ID** del record come secondo parametro nella funzione di caricamento.

```jsx
// Esempio: Modifica del record con ID 1234
const idRecord = 1234; 

netuno.modal.create({
  name: 'prova',
  callback: function (modale) {
    let contenitoreModulo = modale.find('[netuno-form]');
    // Inserisce i dati del record 1234 nei campi del modulo
    netuno.loadFormEdit(contenitoreModulo, idRecord); 
    netuno.modal.show(modale);
  }
});
```


## Eventi

Il contenitore del modulo (`[netuno-form]`) emette eventi personalizzati che accompagnano il ciclo di vita dell'interazione dell'utente. 

Si consiglia l'uso di questi eventi per attivare logiche di business specifiche del tuo frontend (come aggiornare tabelle in background, mostrare avvisi, ecc.).

| TIPO DI EVENTO   | DESCRIZIONE    |
| ------- |--------------|
| ` netuno:new` | Attivato quando viene visualizzata la schermata di creazione di un nuovo elemento. |
| `netuno:edit` | Attivato quando viene visualizzata la schermata di modifica di un elemento esistente. |
| `netuno:save` | Attivato quando viene aggiunto un nuovo elemento. |
| `netuno:back` | Attivato dopo il clic sul pulsante di ritorno. |
| `netuno:delete` | Attivato dopo l'eliminazione di un elemento. |


### Esempio: Intercettare Più Eventi

In questo esempio pronto per la produzione, creiamo il modale e aggiungiamo *listener* per monitorare il successo delle operazioni dell'utente:

```jsx
netuno.modal.create({
  name: 'prova',
  callback: function (modale) {
    let contenitoreModulo = modale.find('[netuno-form]');
    
    // Monitora la schermata di inserimento
    contenitoreModulo.on('netuno:new', function(evento) {
       console.info("Interfaccia di creazione caricata.");
    });

    // Monitora un salvataggio riuscito
    contenitoreModulo.on('netuno:save', function(evento) {
       console.success("Il record è stato salvato con successo!");
       // Esempio: Chiudere automaticamente il modale dopo il salvataggio
       netuno.modal.hide(modale); 
    });

    // Renderizza il modale in modalità elenco e lo visualizza
    netuno.loadForm(contenitoreModulo);
    netuno.modal.show(modale);
  }
});
```
Se hai difficoltà o suggerimenti di miglioramento, contattaci.
Il nostro team e la community sono pronti ad aiutare.

Buon sviluppo!