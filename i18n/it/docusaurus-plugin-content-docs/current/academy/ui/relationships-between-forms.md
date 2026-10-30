---
sidebar_position: 5
id: relationships-between-forms
title: Relazioni tra formulari
sidebar_label: Relazioni
---

## Come creare relazioni tra formulari

La creazione di relazioni tra formulari è una funzionalità essenziale per organizzare le informazioni in modo intelligente. Collegando i formulari, elimini la necessità di duplicare i dati e garantisci che la tua applicazione sia coesa, scalabile e facile da mantenere.

Uno dei grandi vantaggi di Netuno è la capacità di generare automaticamente il diagramma del modello dati.

Le relazioni definiscono come i dati di tabelle diverse interagiscono tra loro. Questa connessione si riflette direttamente nell'interfaccia utente (UI), consentendo ai campi di un formulario di recuperare automaticamente informazioni da un altro.

**Diagramma semplice:** ideale per validare la logica iniziale di piccoli moduli.

![diagramma semplice](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Diagramma complesso:** dimostra la robustezza dello strumento in applicazioni su larga scala, mappando molteplici dipendenze e flussi di dati.
 
![diagramma complesso](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Creazione di un campo relazionale di tipo Select

Il campo Select crea una relazione tra due formulari. Ti permette di scegliere un valore da un elenco a discesa (dropdown), invece di digitarlo manualmente. Questo elenco viene popolato con dati già esistenti in un altro formulario.

Useremo i formulari **Veicoli** e **Colore** come esempio.

**Quando usarlo?** Usa il select quando hai una relazione di tipo "Molti-a-Uno" (N-1).

**Esempio:** Molti Veicoli possono avere un Colore. Invece di digitare "Blu" ogni volta, selezioni "Blu" da un elenco di colori già registrati.

- **Formulario di destinazione:** Veicolo (dove creeremo il campo select).
- **Formulario di origine:** Colore (da dove provengono i dati dell'elenco dei colori).


### Requisiti
Prima di iniziare, assicurati che:

- Entrambi i formulari (**Veicolo** e **Colore**) siano già creati in Netuno. Per maggiori dettagli, consulta la nostra guida sulla [Creazione di formulari](/docs/academy/ui/forms).

- Il formulario di origine (**Colore**) abbia già alcuni record registrati. (Es: "Blu", "Rosso", "Argento"). Per maggiori dettagli, consulta la nostra guida sulla [Creazione di campi](/docs/academy/ui/fields).

### Creare e configurare il Select

Aggiungi il tipo di campo **select** al formulario **Veicolo** in modo che possa "recuperare" i dati dal formulario **Colore**.

![crea e configura il campo select](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Accedi al formulario di destinazione

- Nel Backoffice, vai alla gestione dei campi e apri la modifica del formulario **Veicolo**.
 
#### 2 - Crea il nuovo campo

- Fai clic su "Crea nuovo campo".

#### 3 - Definisci il titolo e il nome della colonna

- **Titolo del campo:** assegna un nome descrittivo che verrà mostrato all'utente. **Esempio:** Colore dell'Automobile.
- **Nome della colonna:** questo è il nome tecnico del campo nel database.

**Buona pratica:** quando crei un campo relazionale, usa sempre il suffisso `_id` nel **Nome della colonna**. Questo chiarisce che questa colonna non memorizza il testo "Blu", ma l'ID di riferimento al record "Blu" nel formulario **Colore**. **Esempio:** `colore_automobile_id`.

#### 4 - Scegli il tipo di dati

- Nel campo **Tipo**, seleziona l'opzione _`select - select`_ dall'elenco.

#### 5 - Configura il Link (la relazione)

![configura il link](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- Quando scegli _`select`_, verrà visualizzato un nuovo campo chiamato **Link**.
- Fai clic sul pulsante **Configura**.
- Si aprirà una finestra modale (modal) che elenca tutti i tuoi formulari. È il momento di scegliere il formulario di Origine.
- Seleziona il formulario che contiene i dati che vuoi elencare. Nel nostro esempio, fai clic su **colore - Colore**.
- Dopo aver selezionato, fai clic sul pulsante **Chiudi** nella modale.

#### 6 - Salva le modifiche

- Fai clic sul pulsante **Salva** nella gestione dei campi per applicare tutte le tue configurazioni.

### Risultato

Fatto! Ora, nella modalità "visualizza", quando aggiungi o modifichi un record nel formulario **Veicolo**, il campo "Colore dell'Automobile" sarà un elenco a discesa (dropdown) che mostrerà tutti i colori registrati nel tuo formulario Colore.

## Creazione di un campo relazionale di tipo Multiselect

Il campo **Multiselect** crea una relazione "Molti-a-Molti" (N-M). Ti permette di selezionare più elementi da un elenco in un unico campo.

Useremo i formulari **Persona**, **Funzione** e **Persona-Funzione** come esempio.

**Quando usarlo?** Usa il multiselect quando un record può essere collegato a vari altri, e viceversa.
**Esempio:** Molte Persone possono avere molte Funzioni.

- Una persona (es: "Ana") può avere le funzioni "Amministratore" e "Gestore".
- La funzione "Gestore" può essere associata a varie persone (es: "Ana", "Bruno" e "Thiago").

Perché questo funzioni, abbiamo bisogno di tre formulari:

- **Formulario "Padre" (Persona):** dove il campo _`multiselect`_ sarà visibile all'utente.
- **Formulario "Origine" (Funzione):** da dove provengono le opzioni dell'elenco (es: "Amministratore", "Gestore").
- **Formulario "Unione" (Persona-Funzione):** un formulario "ponte" che memorizza le connessioni tra **Persona** e **Funzione**.

### Requisiti
Prima di iniziare, assicurati che:

- Il formulario "Padre" (**Persona**) sia già creato e contenga alcuni record (es: "Ana", "Bruno", "Lucas").
- Il formulario "Origine" (**Funzione**) sia già creato e contenga alcuni record (es: "Amministratore", "Gestore", "Consulente").

### Creare e configurare il Multiselect 
La configurazione avviene in 4 fasi:

### Fase 1: creare il formulario di unione (Persona-Funzione)
Per prima cosa, creiamo il formulario "ponte".

1 - **Vai su Gestione > Formulari** e fai clic su "Crea nuovo formulario".

2 - **Titolo del formulario:** Persona-Funzione.

3 - **Nome della tabella:** persona_funzione (o simile).

4 - **Importante:** nel campo **Padre**, seleziona il formulario "Padre" principale, che in questo caso è **Persona**. Questo trasforma **Persona-Funzione** in un sotto-formulario.

5 - Fai clic su **Salva**.

![crea il formulario padre per l'unione](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Fase 2: configurare i campi del formulario di unione

Aggiungi i campi "ponte" al formulario Persona-Funzione.

1 - Accedi alla gestione dei Campi del formulario Persona-Funzione che hai appena creato.

2 - Aggiungi due campi di tipo select: uno che punterà a Persona e l'altro a Funzione.

**Campo 1 (Link per Persona):**

![campo link per persona](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Titolo del campo:** Nome della Persona
- **Nome della colonna:** `nome_persona_id` (seguendo la convenzione **_id**)
- **Tipo:** `select - select`
- **Link:** fai clic su **Configura** e seleziona il campo principale del formulario **Persona**, esempio: `persona:nome`.
- Fai clic su **Salva**.

**Campo 2 (Link per Funzione):**

- **Titolo del campo:** Funzione della Persona. 
- **Nome della colonna:** `funzione_persona_id`.
- **Tipo:** `select - select`.
- **Link:** fai clic su **Configura** e seleziona il campo principale del formulario **Funzione**, esempio: `funzione:funzione_id`.
- Fai clic su **Salva**.

![campo link per persona-funzione](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Fase 3: creare il campo multiselect nel formulario "padre"

Con la "ponte" (**Persona-Funzione**) pronta, possiamo tornare al formulario **Persona** per creare il campo finale.

1 - Vai alla gestione dei Campi del formulario **Persona**.

2 - Fai clic su "Crea nuovo campo".

3 - **Titolo del campo:** Persona Funzione.

4 - **Nome della colonna:** _`persona_funzione_id`_.

5 - **Tipo:** _`multiselect - multiselect`_.


### Fase 4: configurare il campo multiselect

Quando selezioni il tipo _`multiselect`_, appariranno due nuovi campi di configurazione: **Riferimento** e **Link**.

#### 1 - Riferimento (Dove salvare la relazione?)

 - **Questo campo dice a Netuno:** "Quale campo del formulario 'ponte' si riferisce a me (**Persona**)?"
 - Fai clic su **Configura**.
 - Seleziona il formulario di unione (**Persona-Funzione**) e il campo che hai creato nella Fase 2 (Campo 1). **Esempio:** _`persona_funzione:nome_persona_id`_.

#### 2 - Link (Da dove provengono le opzioni?)

 - **Questo campo dice:** "Quale campo del formulario 'ponte' si riferisce alle opzioni (**Funzione**)?"
 - Fai clic su **Configura**.
 - Seleziona il formulario di unione (**Persona-Funzione**) e il campo che hai creato nella Fase 2 (Campo 2). **Esempio:** _`persona_funzione:funzione_persona_id`_.
  
#### 3 - Salva le modifiche

- Fai clic sul pulsante **Salva** nella gestione dei campi per applicare tutte le tue configurazioni.

![configura il campo multiselect](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Risultato

Fatto! Ora, nella modalità "visualizza", quando aggiungi o modifichi un record nel formulario **Persona**, il campo "Persona Funzione" apparirà come una casella di selezione multipla. Potrai scegliere varie funzioni dall'elenco (che provengono dal formulario **Funzione**), e Netuno salverà automaticamente queste associazioni all'interno del formulario **Persona-Funzione**.

Se hai qualche dubbio, contattaci tramite la community e gli altri canali disponibili in fondo a questa pagina.

Buon sviluppo!