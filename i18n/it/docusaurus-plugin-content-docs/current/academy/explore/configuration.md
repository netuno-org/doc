---
id: configuration
title: Configurazione
sidebar_label: Configurazione
---

## Configurazioni di Base di un'Applicazione

Ogni applicazione creata in Netuno possiede configurazioni specifiche che definiscono come deve connettersi a database, chiavi di accesso e altri parametri fondamentali.

Netuno utilizza un sistema intelligente che organizza queste configurazioni in base all'ambiente in cui l'applicazione è in esecuzione, sia localmente, su un server ufficiale o in qualsiasi altro.

Le configurazioni della tua applicazione sono centralizzate nella cartella **config**, situata nella radice del tuo progetto.

**Percorso predefinito:** `mia-app/config`

### Ambienti di Esecuzione

All'interno della cartella config, i file sono denominati in base all'ambiente per il quale sono stati creati. Netuno carica automaticamente solo i file che corrispondono all'ambiente in cui è in esecuzione in quel momento:

- **Sviluppo**: i file denominati `_development` vengono letti solo quando l'ambiente di Netuno è impostato su sviluppo.

- **Produzione**: i file denominati `_production` vengono letti solo quando l'ambiente di Netuno è impostato su produzione.


### Tipi di File di Configurazione

Per ogni ambiente, puoi utilizzare due tipi di file che lavorano insieme:

### JSON

- `_development.json` 
- `_production.json`

**Funzione:** Memorizzare le definizioni e parametrizzazioni statiche.

**Esempio:** Inserire credenziali di database, URL di API esterne e configurazioni fisse.

### JS

- `_development.js` 
- `_production.js`

**Funzione:** Eseguire logiche nel momento in cui la configurazione viene caricata.

**Esempio:** Modificare configurazioni dinamicamente o eseguire attività ed elaborazioni iniziali necessarie prima che l'applicazione sia completamente avviata.


### Definizione dell'Ambiente Generale

Per far sì che le tue applicazioni sappiano quale configurazione devono utilizzare, devi indicare al server Netuno in quale "modalità" sta operando. Questa configurazione globale è definita in un unico file nella radice di Netuno.

1. **Individua il file di configurazione globale:** Vai nella cartella radice dove è stato installato Netuno. Trova e apri il file chiamato `config.js`.
2. **Trova la variabile di ambiente:** All'interno del file, cerca la proprietà `config.env`.
3. **Definisci l'ambiente desiderato:** Modifica il valore della variabile in base all'ambiente che desideri attivare. 


#### Ambiente di Sviluppo
Utilizzato mentre stai programmando e testando sulla tua macchina.

```javascript
// Nel file ./config.js nella radice di Netuno
config.env = 'development'
```

#### Ambiente di Produzione
Utilizzato quando il tuo progetto è finalizzato e in esecuzione sul server ufficiale per gli utenti.

```javascript
// Nel file ./config.js nella radice di Netuno
config.env = 'production'
```

#### Altri Ambienti (Personalizzati)

Netuno è flessibile e permette di creare nomi di ambiente personalizzati, ad esempio: `test`, `collaudo` o `preproduzione`.

```javascript
// Nel file ./config.js nella radice di Netuno
config.env = 'test'
```

> La configurazione dell'applicazione deve iniziare con `_`, avere l'estensione `.json` e anche un file con l'estensione `.js`, entrambi dello stesso ambiente.

## Repository Git

Quando utilizzi Git per versionare il codice della tua applicazione, è fondamentale garantire la sicurezza dei tuoi dati. 

I file di configurazione contengono generalmente informazioni sensibili, come password di database, chiavi di API private e così via... Per questo, **non devi mai inviare i file di configurazione reali al repository**.

Per garantire che le tue password non trapelino e, allo stesso tempo, mantenere il progetto documentato per altri sviluppatori, segui questi due passaggi:

### 1. Nascondi i File Reali

Nella radice della tua applicazione, apri (o crea) il file chiamato `.gitignore`. Aggiungi i percorsi dei tuoi file di configurazione `.json` affinché Git li ignori completamente.

**Esempio di cosa aggiungere nel `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. File di Configurazione di Esempio

Crea un file di esempio con i dati necessari affinché nuovi sviluppatori possano configurare il progetto facilmente.

- Vai nella cartella config/ della tua applicazione.
- Crea un file chiamato `esempio.json`.
- Copia la struttura del tuo `_development.json` al suo interno, lasciando solo i nomi dei campi.

Ecco come deve apparire il tuo **config/esempio.json**:

```json
{
  "database": {
    "host": "INSERISCI_QUI_LHOST",
    "user": "TUO_UTENTE",
    "password": "TUA_PASSWORD"
  }
}
```

#### Come Accedere alle Configurazioni nel Codice

Dopo aver definito le tue variabili e chiavi nei file di configurazione (come `_development.json`), dovrai utilizzarle nella logica della tua applicazione — ad esempio, creando un servizio che si connette a un'API e necessita di un *token* di accesso salvato. 

In Netuno, è possibile accedere a queste configurazioni tramite la risorsa nativa `_app`.

#### Come Recuperare i Dati

All'interno di qualsiasi codice eseguito dal server (come nella cartella `server/services/`), utilizzerai la funzione `_app.config()` per recuperare i valori presenti nel tuo file di configurazione attivo.

Per capire come avviene il collegamento, immagina che nel tuo file di configurazione (`config/_development.json`) tu abbia definito quanto segue:

```json
{
  "name": "Mia Applicazione",
  "versione": 2
}
```
 
 Per prendere il valore della chiave "name" e stamparlo nella console (log) del server, useresti il seguente codice nel tuo servizio .js:

```javascript
// 1. Netuno va nel file JSON, cerca la chiave "name" e prende il suo valore.
// 2. Poi salva questo valore nella variabile JavaScript che chiamiamo 'nomeApp'.
let nomeApp = _app.config().getString("name");

// 3. Stampa il contenuto della nostra variabile nel terminale di Netuno: "Mia Applicazione"
_log.info(nomeApp);
```

## Configurazioni Personalizzate

Oltre alle configurazioni predefinite del database e del server, puoi creare le tue variabili di configurazione. 

Questo è molto utile per definire regole di business, come ad esempio "quantità massima di elementi per pagina" o "intervallo di invio delle e-mail", senza dover modificare il codice dell'applicazione ogni volta che queste regole cambiano.

Queste variabili vengono memorizzate nel blocco `"settings"` nei tuoi file di configurazione JSON, come `_development.json` o `_production.json`.  

### Struttura del JSON e Visibilità (Pubblico vs. Privato)

Quando crei le tue configurazioni, è fondamentale separare ciò che l'Interfaccia Utente (Frontend) può vedere e ciò che deve rimanere protetto solo sul Server (Backend).

* **Variabili Private:** Si trovano dentro il blocco `"settings"`. Solo il server vi ha accesso.
* **Variabili Pubbliche:** Si trovano dentro il sotto-blocco `"public"`. Vengono inviate all'interfaccia utente (cartella `ui`), dell'area amministrativa, come nello sviluppo di dashboard.

**Esempio di come strutturare il tuo file `.json`:**

```json
{
  ...
  "settings": {
    "public": {
      "elementiPerPagina": 10
    },
    "intervalloEmail": 10
  }
}
```

### Come Accedere alle Configurazioni nel Codice
Il modo di recuperare questi dati cambia a seconda di dove stai programmando:

**1. Sul Server / Backend (Servizi)**

Per accedere a configurazioni generali o private, utilizza la risorsa `_app.settings()` nel tuo codice server (file .js nella cartella server).  

```javascript
// Accede alla variabile privata "intervalloEmail"
const intervalloEmail = _app.settings().getInt("intervalloEmail");

_log.info("L'intervallo definito è: " + intervalloEmail);
```

**2. Nell'Interfaccia / Frontend (UI)**

Nello sviluppo dell'interfaccia (file della cartella ui), puoi accedere a tutto ciò che è stato definito all'interno del blocco "public". Per farlo, utilizza l'oggetto globale `netuno.config.app.settings`.

```javascript
// Accede alla variabile pubblica "elementiPerPagina" nel frontend
const elementiPerPagina = netuno.config.app.settings.elementiPerPagina;

console.log("Mostrando " + elementiPerPagina + " elementi nella tabella.");
```
## Conclusione

Il sistema di configurazioni di Netuno offre flessibilità e sicurezza strutturale per la tua applicazione. Attraverso di esso, è possibile:

* **Gestire Molteplici Ambienti:** Creare e supportare diversi contesti di esecuzione (sviluppo, produzione, ecc.) con parametrizzazioni indipendenti.
* **Personalizzare Variabili:** Utilizzare il blocco `settings` per aggiungere configurazioni specifiche del tuo business. 
* **Separare le Responsabilità:** Isolare e proteggere configurazioni riservate al backend da quelle che devono essere accessibili nel frontend.