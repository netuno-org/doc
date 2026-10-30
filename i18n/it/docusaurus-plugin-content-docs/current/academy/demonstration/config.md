---
sidebar_position: 2
id: config
title: Configurazione
---

# Configura l'applicazione

Questa guida presenta i passaggi iniziali per configurare la lingua dell'applicazione Demo, il database e abilitare comandi automatici eseguiti con il server.

Tutte le modifiche vengono apportate nel file `_development.json` di configurazione dell'applicazione **Demo**, situato nella cartella /apps/demo/**config**.

### Prerequisiti

Prima di modificare la configurazione, verifica i seguenti punti:

- L'applicazione Demo è già stata creata e inizializzata.
- Ti trovi nella radice del progetto Netuno.
- Un editor di codice è aperto su `/apps/demo/config/development.json`.
- Potrai riavviare il server dopo aver salvato le modifiche.

## Configurazione delle lingue

### 1. Applicazione

Nel file di configurazione, individua i campi `language` e `locale` per cambiare la lingua dell'applicazione.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Imposta i valori in base alla lingua desiderata:

- **Portoghese**: `pt_PT` o `pt_BR`
- **Inglese**: `en_GB` o `en_US`

### 2. Database

Individua l'oggetto **"db"** e, subito dopo, le configurazioni di **"default"**.

Modifica il campo **"name"** per definire il database corrispondente:

- `demo_it`: database in italiano.
- `demo_en`: database in inglese.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_it",
            "username": "sa"
        }
    },
...
}
```

### 3. Abilitare più comandi

Netuno consente di eseguire più comandi contemporaneamente all'avvio del server, mostrando gli output nella stessa console.

Per impostazione predefinita, l'applicazione **Demo** include il comando `bun run watch` configurato ma disabilitato. Questo comando compila automaticamente qualsiasi modifica apportata ai file di codice del backoffice.

Per attivarlo, individua l'array **"commands"** e cambia il valore del campo **enabled** da false a **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parametri dell'oggetto "commands"

- `enabled`: attiva (true) o disattiva (false) l'esecuzione automatica del comando.
- `path`: definisce il percorso (cartella) dell'applicazione in cui verrà eseguito il comando.
- `command`: definisce il comando che verrà eseguito nel terminale.

:::tip
Puoi aggiungere altri comandi all'interno dell'array `"commands"`, purché venga mantenuta la stessa struttura dell'oggetto.
:::


Dopo aver salvato il file di configurazione, riavvia il server Netuno per applicare le modifiche.


## Risultato atteso

Dopo aver riavviato il server, verifica i seguenti punti:

- L'applicazione Demo è nella lingua configurata.
- La console mostra l'esecuzione del comando `bun run watch`, se è abilitato.

## Prossimi passi

Procedi alla fase successiva di **Formulario** per esplorare e modificare l'applicazione di dimostrazione.