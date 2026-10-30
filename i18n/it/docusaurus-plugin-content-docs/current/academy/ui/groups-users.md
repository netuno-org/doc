---
sidebar_position: 6
id: groups-users
title: Gruppi e Utenti
---

## Creazione e modifica

Questa sezione è il centro amministrativo della tua applicazione. Qui gestisci le credenziali, i livelli di privilegio e verifichi le attività svolte nel sistema, garantendo che ogni utente abbia accesso esattamente a ciò di cui ha bisogno.

#### Requisiti
- **Accesso a Netuno:** è necessario aver effettuato l'accesso alla propria istanza e disporre dell'autorizzazione di **Amministratore**.
- **Applicazione creata:** è necessario disporre di un'applicazione creata in precedenza. Scopri di più: [Guida all'interfaccia: Creare un'applicazione](/docs/academy/app-create).
- **Moduli:** disponi di almeno uno o due moduli creati. Scopri di più: [Guida all'interfaccia: Creare un modulo](/docs/academy/ui/forms).

### Menu

Consente di accedere alle configurazioni per la gestione della sicurezza, degli utenti, dei gruppi e del monitoraggio dei log.

![Menu di accesso](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Accedi alla "modalità visualizzazione" e fai clic su "Developer" nell'angolo in alto a destra dello schermo.

## Password

Consente la modifica della password di accesso al sistema.

Dopo aver fatto clic su "Developer" nell'angolo in alto a destra dello schermo, accedi alla sezione "Password".

- Digita la tua vecchia password.
- Inserisci la tua nuova password. **Deve contenere almeno 8 caratteri, inclusi numeri, lettere maiuscole e minuscole e caratteri speciali.**
- Conferma la password e fai clic sul pulsante **Salva**.
- Dopo questa azione, verrà visualizzato un messaggio di successo.

![Password](/docs/assets/academy/ui/groups-users/password-pt.png)

## Utente

Questa sezione è il centro di controllo per la gestione dei profili utente.

Dopo aver fatto clic su "Developer" nell'angolo in alto a destra dello schermo, accedi alla sezione "Utente".

#### Requisiti

- L'utente da modificare deve essere già registrato nel database.

 ### 1 - Modificare un utente esistente

Questa sezione descrive come individuare e aggiornare le informazioni di un utente già registrato nel sistema.

![Modifica utente esistente](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Come modificare un utente:**

- Seleziona un utente registrato e modifica le informazioni desiderate.
- Fai clic sul pulsante **Salva** per confermare la modifica.
- Dopo questa azione, verrà visualizzato un messaggio di successo.

### 2 - Aggiungere un nuovo utente

Questa sezione consente di registrare nuovi utenti, definendo le loro credenziali di accesso e i livelli di autorizzazione all'interno del sistema.

![Crea nuovo utente](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Nome:** inserisci il nome dell'utente.
- **Utente:** inserisci il nome per il login - deve contenere solo lettere minuscole separate da un punto.
- **Password:** inserisci la prima password di accesso al sistema per il nuovo utente.
- **Email:** inserisci l'email di contatto.
- **Nessuna:** consente di bloccare la password dell'utente per impedire l'accesso.
- **Gruppo:** seleziona il gruppo principale a cui appartiene l'utente.
- **Attivo:** consente di attivare o disattivare un utente nel sistema.
- **Pulsante Salva:** fai clic per salvare le informazioni del nuovo utente.

### 3 - Autorizzazioni dell'utente

La gestione delle autorizzazioni avviene tramite un'interfaccia intuitiva organizzata per schede **(Moduli e Report)**.

Ciò ti consente di configurare in dettaglio ciò a cui l'utente può accedere subito dopo la creazione o durante una modifica.

Nelle colonne **Leggi, Scrivi ed Elimina,** troverai un menu a discesa con diversi livelli di ambito:

- **Niente:** l'utente non ha alcuna autorizzazione per questa azione.
- **Proprietario:** l'utente può interagire solo con i record che ha creato personalmente.
- **Gruppo:** l'utente può interagire con i record creati da qualsiasi membro del suo gruppo.
- **Tutto:** autorizzazione completa. L'utente accede ai record di tutti gli utenti e gruppi.

#### Scheda Moduli

In questa scheda controlli l'interazione dell'utente con i moduli di inserimento dati dell'applicazione.

![Autorizzazioni utente - Moduli](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Per ogni modulo elencato, devi definire i seguenti parametri:

- **Attivo:** definisce la visibilità. Se selezionato, il modulo apparirà nel menu laterale per l'utente.
- **Leggi:** stabilisce il livello di autorizzazione solo per la visualizzazione dei record.
- **Scrivi:** definisce se l'utente è autorizzato a inserire nuovi dati o modificare informazioni esistenti.
- **Elimina:** definisce se l'utente ha l'autorità per rimuovere record dal database.

#### Scheda Report

Simile ai moduli, questa scheda controlla l'accesso alle funzionalità di visualizzazione ed estrazione dei dati analitici.

![Autorizzazioni utente - Report](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Per rendere disponibile un report, l'opzione **Attivo** deve essere selezionata affinché l'utente abbia l'autorizzazione per visualizzarlo.

- **Salva:** fai clic sul pulsante "Salva" per salvare le modifiche.

### 4 - Pulsanti di azione

![Pulsanti di azione](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Salva:** salva tutte le modifiche apportate.

 - **Pulisci:** pulisce tutti i campi del modulo, ripristinando lo stato iniziale di "Aggiungi nuovo utente".

 - **Impersona:** uno strumento potente di Netuno. Dopo aver salvato le autorizzazioni di un utente e fatto clic sul pulsante **"Impersona"**, è possibile visualizzare il sistema esattamente come lo utilizzerà l'utente registrato. Questo è essenziale per verificare se le autorizzazioni sono state configurate correttamente.

 - **Elimina:** rimuove permanentemente il record dell'utente.

## Gruppo

Qui è il pannello centrale per la gestione dei profili di accesso in Netuno, che consente di eseguire due azioni: **"Aggiungi"** un nuovo gruppo e **"Modifica"** un gruppo esistente.

Un gruppo funziona come un profilo o una regola di accesso che determina ciò che ogni insieme di utenti può visualizzare o fare all'interno del sistema.

Invece di configurare le autorizzazioni individualmente per ogni utente, le definisci nel gruppo e colleghi gli utenti ad esso, garantendo un'amministrazione scalabile e organizzata.

Dopo aver fatto clic su **"Developer"** nell'angolo in alto a destra dello schermo, accedi alla sezione **"Gruppo"**.

#### Requisiti

- **Accesso amministrativo:** è necessario disporre di un profilo con autorizzazioni di amministratore per creare o modificare gruppi.

### Come aggiungere un nuovo gruppo

![Aggiungi nuovo gruppo](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Individua la sezione "Aggiungi".
- **Nome:** assegna un nome chiaro e descrittivo al gruppo.
- **Consenti login:** seleziona questa opzione se gli utenti di questo gruppo devono poter accedere al sistema.
- **Amministratore:** seleziona questa opzione solo se gli utenti di questo gruppo hanno accesso completo al sistema.
- **Email:** inserisci un'email di contatto per il gruppo.
- **Attivo:** seleziona questa opzione per attivare le configurazioni nel sistema.
- **Pulsante-Salva:** fai clic per salvare le configurazioni del gruppo.
- **Pulsante-Pulisci:** fai clic per pulire tutti i campi del modulo.

### Come modificare un gruppo esistente

![Modifica gruppo esistente](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Seleziona il gruppo registrato nel campo "Modifica gruppo esistente" in cima alla pagina.
- Fai clic sulla casella di selezione "Seleziona un gruppo".
- Scegli il gruppo che desideri modificare dall'elenco.
- Attendi che i dati del gruppo compilino automaticamente i campi (Nome, Email e le opzioni).
- Apporta le modifiche desiderate e fai clic su "Salva".

## Storico dei record

La schermata "Storico dei record" è lo strumento di log e audit della tua applicazione.

Quando un utente crea, modifica o elimina un record in qualsiasi modulo, il sistema salverà un "log" di questa azione.

Questa pagina consente di cercare e filtrare tutto questo storico. È essenziale per:

 - **Sicurezza:** monitorare attività sospette o non autorizzate.

 - **Audit:** mantenere un registro di conformità di tutte le modifiche ai dati.

 - **Diagnostica:** capire come un record specifico è arrivato al suo stato attuale. Esempio: "chi ha eliminato questo cliente?".

### Come cercare nello storico dei record

![Log](/docs/assets/academy/ui/groups-users/log-pt.png)

Compila uno o più campi "Filtri" per trovare i record di log che desideri cercare, quindi fai clic sul pulsante "Cerca".

- Accedi alla pagina "Storico dei record".
- Compila i filtri desiderati per limitare la ricerca. Non è necessario compilare tutti i campi. Esempio: per vedere tutto ciò che l'utente "Developer" ha fatto oggi:
- Seleziona "Developer" nel campo Utente.
- Nel campo Inizio, seleziona la data e l'ora di oggi.
- Nel campo Fine, seleziona la data e l'ora di oggi.
- Fai clic sul pulsante "Cerca".
- I risultati (l'elenco dei log) verranno visualizzati sotto il modulo di ricerca.

## Esci

Fai clic su "Esci" per terminare la sessione nel sistema in modo sicuro.