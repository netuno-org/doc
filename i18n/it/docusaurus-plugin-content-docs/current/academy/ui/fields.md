---
sidebar_position: 3
id: fields
title: Campi
---



I Campi sono i componenti fondamentali e i "mattoni" di un modulo in Netuno. Rappresentano l'interfaccia di interazione con l'utente e definiscono come i dati saranno strutturati e memorizzati.

Nella pratica, ogni campo creato corrisponde a una colonna nella tabella del database, determinando il tipo di informazione che il sistema può elaborare — come testi, numeri, date, selezioni e file. 

### Creare e Modificare i Campi

Questi pulsanti consentono di gestire lo stato generale della modifica:

- **Modifica campo esistente:** Menu a discesa per selezionare un campo già creato e modificarne le configurazioni.

- **Crea nuovo campo:** Svuota tutti i campi del modulo per iniziare da zero la configurazione di un nuovo elemento.

- **Clona campo:** Duplica le configurazioni del campo selezionato per velocizzare la creazione di elementi simili.

![campo-modifica-esistente-it.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Titolo del Campo

Il Titolo del Campo (tecnicamente noto come Label) è l'istruzione visiva che guida l'utente su quale informazione deve essere inserita in un modulo. Funziona come un'etichetta identificativa, garantendo che la compilazione dei dati sia intuitiva e corretta.

In questa fase, il titolo ha una duplice finalità nella piattaforma:

- **Nella Gestione dei Campi (Costruzione):** Serve a identificare il campo all'interno del tuo elenco di elementi durante lo sviluppo dell'applicazione.

![campo-titolo-nome-it.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **Nell'Interfaccia Utente (Visualizza):** È il testo che appare posizionato subito sopra o accanto al campo di input, indicando all'utente finale cosa deve digitare nel modulo.

![campo-titolo-nome-contenuto-it.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Nome della colonna

A differenza del titolo, il **Nome della Colonna** è l'identificatore interno ed esclusivo del campo, utilizzato direttamente nel database e nelle logiche di programmazione. È attraverso questo nome che il sistema individua l'informazione nella base di dati.

**Formattazione Automatica (Interruttore Auto):**

Netuno semplifica questo processo compilando automaticamente il nome in base al "Titolo del campo". Il formato utilizzato è lo snake_case.

**Regole di Scrittura:** Se scegli di compilare manualmente (disattivando "Auto"), mantieni il nome al singolare, usa solo lettere minuscole ed evita spazi o caratteri speciali.

![campo-nome-colonna-it.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Tipi di dati

La definizione del **Tipo di Dato** determina la natura dell'informazione raccolta, influendo direttamente sull'aspetto del campo per l'utente e sul modo in cui il dato viene memorizzato nel sistema.

![campo-tipo-dato-it.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Campi Testuali

Questi campi sono destinati all'inserimento di testo in diversi formati. Variano in base alla necessità di volume dei dati.

| Tipo | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| text | Crea un input semplice per una singola riga. | Nomi, titoli di articoli, quartieri, ecc. |
| textarea | Crea un input con un'area di testo più grande, per più righe. | Descrizioni di prodotti, commenti, osservazioni. |
| email | Crea un input di testo formattato per ricevere un'e-mail. | Registrazione dell'e-mail di contatto, login utente. |
| texthtml | Crea un editor di testo avanzato, che consente la formattazione con HTML. | Creazione di contenuti per un blog, email marketing, pagine di un sito. |
| textmd | Crea un editor di testo che supporta il linguaggio di markup Markdown. | Ideale per documentazione tecnica, post di blog per sviluppatori. |

### 3.2 Campi Numerici

Utilizzati per raccogliere informazioni che sono strettamente numeriche.

| Tipo | Cosa fa? | Esempio di Utilizzo |
| :--- | :--- | :--- |
| textnum | Crea un input per l'inserimento di numeri interi. | Quantità in magazzino, età di una persona, numero di posti disponibili. |
| textfloat | Crea un input per l'inserimento di numeri con decimali. | Prezzi di prodotti (es: 99.90), peso (es: 75.5), altezza (es: 1.82). |

### 3.3 Campi di Selezione

Utilizzati quando l'utente deve scegliere tra opzioni predefinite.

| Tipo | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| select | Crea un elenco di opzioni in cui l'utente può sceglierne una sola. | Selezionare una regione, stato civile, categoria di un prodotto. |
| multiselect | Crea un elenco di opzioni in cui l'utente può sceglierne diverse. | Selezionare interessi (sport, tecnologia), ingredienti di una pizza. |
| checkbox | Mostra una singola casella di controllo (attiva/disattiva). | "Accetto i termini di utilizzo", "Ricorda la mia password". |
| color | Mostra un selettore di colori visivo. | Scegliere il colore di un prodotto, personalizzare il colore di un evento. |

### 3.4 Campi di Data e Ora

Specializzati per l'inserimento di informazioni temporali.

| Tipo | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| date | Mostra un calendario per consentire all'utente di selezionare una data (giorno, mese, anno). | Data di nascita, data di appuntamento. |
| datetime | Consente di selezionare una data e un orario. | Inizio di un evento, data e ora di una pubblicazione. |
| time | Consente di selezionare un orario (ore e minuti). | Orario di apertura, ora di una sveglia. |

### 3.5 Campi di File e Media

Utilizzato per inviare file e immagini alla tua applicazione.

| Tipo | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| file | Crea un campo per l'upload di un file qualsiasi (PDF, DOCX, ZIP). | Allegare un curriculum, inviare una ricevuta di pagamento. |
| image | Un campo ottimizzato per l'upload di immagini (JPG, PNG, GIF). | Foto profilo dell'utente, immagine di un prodotto. |

### 3.6 Campi Tecnici e Speciali

Questi campi hanno comportamenti automatici o servono a scopi specifici del sistema.

| Tipo | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| hidden | Il campo è invisibile all'utente, ma memorizza un valore. | Memorizzare un ID proveniente da un'altra pagina, un codice di tracciamento. |
| uid | Genera automaticamente un Identificatore Univoco Universale. | Chiave primaria di un record, codice univoco di un ordine. |
| user | Associa il record all'utente che lo ha creato o modificato. | Identificare l'autore di un post di blog, il venditore che ha registrato un cliente. |
| lastchange | Memorizza automaticamente la data e l'ora dell'ultima modifica del record. | Audit, per sapere quando un dato è stato modificato l'ultima volta. |
| group | Utilizzato per raggruppare visivamente altri campi nel modulo. | Creare sezioni come "Dati Personali" e "Indirizzo" per organizzare moduli lunghi. |

## 4 - Configurazioni di Comportamento e Layout

Quest'area è il "pannello di controllo" del tuo campo, che definisce le regole di business e le autorizzazioni di accesso.

![campo-impostazioni-comportamento-e-layout-it.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Regole di Integrità dei Dati

Queste opzioni garantiscono la qualità e la coerenza delle informazioni.

| Configurazione | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| Valori Unici (Chiave Primaria) | Trasforma il campo nell'identificatore principale e univoco, impedendo valori duplicati. | Usare per "Codice Fiscale", garantendo che non esistano due clienti con lo stesso numero. |
| Obbligatorio (Non Nullo) | Rende obbligatoria la compilazione del campo. | Applicare a campi essenziali come "Nome" ed "Email". |

### 4.2 Controllo dei Permessi e della Visibilità

Definisce dove e come gli utenti interagiscono con i dati di questo campo.

| Configurazione | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| Mostra nel Risultato | Definisce se la colonna apparirà nell'elenco principale dei dati. | Deselezionare per "Note Interne" per mantenere l'elenco pulito. |
| Consenti Filtro | Aggiunge una casella di ricerca per questa colonna nell'elenco. | Abilitare in "Stato dell'Ordine" per facilitare la ricerca. |
| Consenti Visualizzazione | Controlla se il contenuto sarà mostrato nella modalità di visualizzazione. | Lasciare selezionato nella maggior parte dei casi. |
| Consenti Modifica | Consente di modificare il contenuto quando un record è in fase di modifica. | Deselezionare per i campi che non devono essere modificati, come "Data di Registrazione". |
| Consenti alla Creazione | Definisce se il campo deve apparire nel modulo di creazione. | Deselezionare per i campi di "feedback", che devono essere compilati solo *dopo* la creazione. |
| Consenti Esportazione | Include i dati di questo campo durante l'esportazione dell'elenco (Excel, CSV). | Deselezionare i dati interni non rilevanti per i report esterni. |

## 5 - Organizzazione Visiva del Modulo

Definisce il posizionamento dei campi nel layout.

![campo-organizzazione-visiva-modulo-it.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configurazione | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| Riga | Definisce la posizione verticale del campo nel modulo. | Posizionare "Nome Completo" in Riga: 1 e "Indirizzo" in Riga: 2. |
| Colonna | Definisce la posizione orizzontale, consentendo più campi affiancati. | Per avere "Città" e "Regione" insieme, usare Riga: 3, Colonna: 1 (Città) e Colonna: 2 (Regione). |

## 6 - Vedi Altre Opzioni

Per un controllo più personalizzato, fai clic sul pulsante "+ Vedi Altre Opzioni".

### 6.1 Campo Descrizione

![campo-opzioni-descrizione-it.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configurazione | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| Descrizione | Aggiunge un testo di aiuto o istruzioni che appare sotto il campo. | In "Password", usare la descrizione per indicare le regole: "La password deve avere almeno 8 caratteri...". |

### 6.2 Dimensionamento del Campo

![campo-dimensionamento-layout-it.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Controllo preciso sulle dimensioni del campo.

| Configurazione | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| Larghezza | Definisce la larghezza del componente (basata su una griglia di 12 colonne). | "Codice Fiscale" (Larghezza: 6) e "Data di Nascita" (Larghezza: 6) sulla stessa riga. |
| Altezza | Definisce l'altezza del componente in pixel (px). | In `textarea` "Note", impostare Altezza "120" per un'area più grande. |
| Larghezza della Cella (px) | Definisce una larghezza fissa in pixel per la cella. | Usare per allineare campi con larghezze specifiche, come "Regione" (Larghezza: 80). |
| Altezza della Cella (px) | Definisce un'altezza fissa in pixel per la cella. | Aumentare l'altezza di un campo `image` per creare un'area di "trascina e rilascia". |
| Rowspan | Consente alla cella di espandersi verticalmente su più righe. | Un `textarea` di "Descrizione" che occupi 3 righe in altezza accanto a campi più piccoli. |
| Colspan | Consente alla cella di espandersi orizzontalmente su più colonne. | Un campo "Indirizzo Completo" (Colspan: 2) sopra "Città" e "Regione". |

### 6.3 Validazione e Regole dei Dati

Stabilisci dei limiti per i valori inseriti.

| Configurazione | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| Max | Valore massimo (numerico) o numero massimo di caratteri (testo). | In "Voto (0 a 10)", impostare Max su "10". In "Soprannome", Max "20". |
| Min | Valore minimo (numerico) o numero minimo di caratteri (testo). | In "Quantità", impostare Min su "1". In "Giustificazione", Min "30". |

### 6.4 Controllo di Accesso 

![campo-controllo-accesso-it.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Definisci gruppi e utenti che possono visualizzare e modificare il campo.

| Configurazione | Cosa fa? | Esempio di Utilizzo Pratico |
| :--- | :--- | :--- |
| Vista Utente e Vista Gruppo | Limita la *visualizzazione* del campo ai soli utenti o gruppi specificati. | "Commissione del Venditore" con Vista Gruppo "Manager". |
| Modifica Utente e Modifica Gruppo | Consente solo agli utenti o ai gruppi specificati di *modificare* il campo (gli altri lo vedono come "sola lettura"). | "Stato dell'Ordine" con Modifica Gruppo "Logistica". |