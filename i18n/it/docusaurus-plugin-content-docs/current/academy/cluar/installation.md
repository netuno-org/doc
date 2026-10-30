---
sidebar_position: 2
id: install
title: Installazione
sidebar_label: Installazione
---

## Requisiti

Prima di installare CLUAR, è necessario avere:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) installato.
2. [Bun](https://bun.sh/docs/installation) installato.

## Clonare il progetto

CLUAR è un'app Netuno, quindi deve essere clonata all'interno della cartella `apps` dell'installazione di Netuno:

```
[directory radice di Netuno]/apps
```

Usando il comando:

```
git clone https://github.com/netuno-org/cluar.git
```

## Installare il website (con Bun)

All'interno della cartella `website`:

```
cd website
```

Eseguire il comando di installazione di Bun:

```
bun install
```

È necessario consentire l'esecuzione di script non attendibili di ESBUILD:

```
bun pm trust --all
```

Se hai bisogno di riavviare l'installazione del website, rimuovi la cartella `node_modules` e i file di lock, quindi installa nuovamente:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Passo successivo

Con il codice e le dipendenze installati, passa alla [Configurazione](/docs/academy/cluar/configuration).