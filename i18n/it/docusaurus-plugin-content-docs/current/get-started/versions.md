---
sidebar_position: 4
id: versions
title: Versioni
sidebar_label: Versioni
---


# Versioni

Se stai iniziando a utilizzare Netuno, ti consigliamo di eseguire l'**installazione standard** per garantire l'uso della versione più recente e stabile della piattaforma.

Netuno permette inoltre di installare versioni precedenti specifiche o versioni sperimentali ancora in sviluppo, utili per ambienti di test o riproduzione di bug.

Prima di installare o aggiornare a una versione specifica, consulta l'elenco ufficiale delle release:

- **Elenco delle Versioni:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Suggerimento
Verifica le note della release prima di installare una versione specifica, soprattutto in ambienti di produzione.
:::

## Installazione di una Versione Specifica

Per installare o aggiornare Netuno a una versione specifica, aggiungi il parametro `version` al comando di installazione con l'identificativo della versione desiderata.

Scegli il metodo più adatto al tuo ambiente:

### Metodo 1: Installer Java

Usa questo metodo per nuove installazioni:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Metodo 2: Esecutore Principale

Usa questo metodo se Netuno è già installato e vuoi aggiornare a una versione specifica:

```bash
./netuno install version=20230417.0119
```

### Metodo 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Sostituisci `20230417.0119` con l'identificativo della versione desiderata, disponibile nell'**[elenco delle release](https://github.com/netuno-org/platform/releases)**.

Dopo aver eseguito il comando, Netuno avvierà automaticamente il processo di installazione della versione indicata.
:::