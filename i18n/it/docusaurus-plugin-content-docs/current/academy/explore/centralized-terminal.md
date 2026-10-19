---
id: centralized-terminal
title: Terminale Centralizzato
sidebar_label: Terminale Centralizzato
---

Netuno consente di unificare l'output dei dati (log) di più comandi e processi in un'unica finestra di terminale — la stessa in cui è in esecuzione il server principale.

Nei flussi di sviluppo moderni, in cui è comune gestire diverse tecnologie contemporaneamente, Netuno agisce come un orchestratore di log, potendo contenere diversi comandi configurati per essere avviati automaticamente in parallelo, come processi front-end di ReactJS, Angular, Vue e qualsiasi altro.

> Qualunque processo può essere avviato, basta definire il suo comando; ad esempio si può persino integrare un altro server di un'API REST ausiliaria sviluppata con qualsiasi altra tecnologia.


## Configurazione

Per integrare processi esterni, è necessario modificare il file di configurazione dell'ambiente della tua applicazione. In questa guida utilizzeremo l'ambiente di sviluppo come esempio.

### Posizione del File

Accedi alla cartella della tua applicazione e individua il file:

- 📂 `config/_development.json`

### Struttura di Configurazione


La configurazione avviene tramite la chiave "commands", che consiste in un array di oggetti. Ciò consente di eseguire più servizi in parallelo.

Apri il file e verifica se la chiave `"commands"` esiste già. In caso contrario, inseriscila alla fine del file (rispettando il formato JSON) seguendo la configurazione riportata di seguito:

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "sito-web",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Nota:** Nell'esempio sopra, abbiamo configurato un comando per la cartella "ui" e un altro per la cartella "sito-web", entrambi utilizzando il gestore bun.

### Riferimento dei Parametri

**Interfaccia Utente (UI):** esegue `bun run watch` all'interno della directory `ui` della tua applicazione.

**Sito web:** esegue `bun run dev` all'interno della cartella `sito-web`.

### env

Definisce le variabili d'ambiente necessarie al processo per l'esecuzione. È possibile definire più variabili contemporaneamente.

### path

Definisce il percorso delle cartelle in cui verrà eseguito il comando, relativo alla radice dell'applicazione.

### install

Netuno dispone di una logica integrata per gestire le dipendenze dei pacchetti:

- **Rilevamento Automatico:** Se il comando inizia con `npm`, `bun`, `pnpm` o `yarn`, Netuno verifica se esiste la cartella `node_modules`.

- **Esecuzione Intelligente:** Se la cartella non viene trovata, il comando di installazione corrispondente (ad esempio `bun install`) viene eseguito automaticamente prima di avviare il processo principale.

- **Personalizzazione:** Definendo manualmente il parametro `install`, il rilevamento predefinito viene sostituito dalla configurazione personalizzata.

### command

Il comando principale da eseguire. Tutto l'output (`output`) sarà integrato con Netuno.

### enabled

Definisce se il comando deve essere avviato automaticamente con l'applicazione (true) o meno (false).

## Conclusione

La centralizzazione dei comandi in Netuno semplifica molto il flusso di lavoro.
La visibilità unificata consente di consolidare tutte le informazioni dei processi paralleli in un unico terminale, facilitando il monitoraggio in tempo reale.

La chiusura sicura fa sì che, quando si arresta l'esecuzione del server Netuno, anche tutti i processi ausiliari configurati vengano terminati automaticamente, evitando processi "in background" o conflitti di porta.