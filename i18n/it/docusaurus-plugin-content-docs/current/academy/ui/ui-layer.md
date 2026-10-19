---
sidebar_position: 8
id: ui-layer
title: Livello UI
sidebar_label: Livello UI
---

Installazione e compilazione della dashboard e dell'interfaccia generale delle applicazioni.

## Contesto

Le applicazioni Netuno includono già configurate, per impostazione predefinita, un insieme di tecnologie avanzate orientate al
front-end, tra cui alcune sono [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/)
e [Ant.Design](https://ant.design/).

All'interno delle applicazioni c'è la cartella `📁 ui` (_user interface_, interfaccia di utilizzo), che è dove sviluppiamo le
dashboard e altri componenti di front-end.

## Prima di Iniziare

Verifica di avere installato [Bun](https://bun.sh/), che è un prerequisito, maggiori informazioni su come:

- [Installare Bun](/docs/academy/website/bun)

## Installare i Moduli di Dipendenza

Per installare tutte le dipendenze incluse per impostazione predefinita, entra nella cartella `📁 ui` (_user interface_) all'interno della tua
applicazione in sviluppo, ad esempio:

```shell
cd apps/mia_app/ui/
```

Esegui il comando di installazione dei moduli di dipendenza:

```shell
bun install
```

> [Bun](https://bun.sh) è un'alternativa migliorata e più ottimizzata rispetto a NPM.

## Compilazione Automatica

Entra nella cartella `📁 ui` (_user interface_) della tua applicazione in sviluppo, ad esempio:

```shell
cd apps/mia_app/ui/
```

Per compilare il front-end automaticamente a ogni modifica del codice, esegui:

```shell
bun run watch
```

> Verifica di avere [Bun](https://bun.sh/) installato.
 
## Integrazione Automatica del Front-end con Netuno

Netuno ti permette di avviare la UI insieme al processo server dell'applicazione Netuno.

> Tutti i messaggi di compilazione di React saranno integrati nello stesso terminale dell'applicazione Netuno.

Per farlo è sufficiente attivare la configurazione nei `commands` dell'applicazione Netuno in `📂 config/_development.json`,
ovvero nel `command` con il `path` della `ui` impostare `enabled` su `true`, nel modo seguente:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Ogni volta che modifichi i file di configurazione dell'applicazione Netuno è necessario riavviare il server affinché possa
> assumere le nuove modifiche.

Infine avvia/riavvia il server con la tua applicazione Netuno per verificarne il funzionamento.

E ora tutto sarà integrato in un solo terminale centralizzato, evitando così di avere più terminali
sparsi, maggiori informazioni su:

- [Terminale Centralizzato](/docs/academy/explore/centralized-terminal)

## Altre Tecnologie di Front-end

All'interno della cartella `📁 ui` è possibile configurare qualsiasi tecnologia di front-end, o includere qualsiasi nuovo modulo di
dipendenza che sia necessario.

Se non desideri utilizzare nessuna delle tecnologie standard, puoi sostituirla con qualsiasi altra, in particolare
adattando i file:

- `package.json`
- `vite.config.js`