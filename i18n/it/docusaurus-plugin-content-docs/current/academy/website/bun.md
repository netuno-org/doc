---
sidebar_position: 1
id: bun
title: Installare Bun
sidebar_label: Installare Bun
---

## Introduzione

NodeJS e NPM sono la base per definire l'ecosistema dello sviluppo frontend.

Nonostante la loro utilità, le rispettive prestazioni lasciano molto a desiderare.

Per questo consigliamo di utilizzare Bun per ottenere benefici significativi e tangibili con la facilità di un rapido
adattamento e mantenendo la compatibilità.

In Netuno viene sempre più utilizzato Bun, ecco i motivi...

## Bun

Bun è equiparabile a NodeJS ma ben potenziato, moderno, intuitivo e super veloce.

Le prestazioni di Bun sono indiscutibili, chi passa dall'esecuzione di NodeJS a Bun nota immediatamente il
beneficio.

Poiché i progetti frontend di solito impiegano un po' di tempo per avviarsi, con Bun l'inizializzazione è immediata.

E le dipendenze frontend tendono a occupare molto spazio, dove la cartella `📂 node_modules` può facilmente
raggiungere centinaia di megabyte o addirittura giga.

Bun risolve anche il problema dello spazio sprecato con la replica della copia delle dipendenze su più
progetti.

Creando un repository centrale di dipendenze condiviso da tutti i progetti che, durante l'installazione, configura cartelle
collegate.

Così riduce drasticamente il consumo di spazio occupato dalle dipendenze.

> Tra i vari altri vantaggi, si distingue anche per l'usabilità e per l'output che è migliorato, intuitivo e più
> evoluto in generale.

Dato che i vantaggi in termini di prestazioni sono di estrema importanza per lo sviluppo agile, ne consigliamo
l'utilizzo.

Per installare Bun segui i passaggi in:

- [**Installazione di Bun**](https://bun.sh/docs/installation)

### Utilizzo nei Progetti

Per utilizzare Bun nei progetti, assicurati che, se già utilizzi NPM, Yarn o altro, devi rimuovere la cartella `📂 node_modules`.

Dove si trova il file `package.json` devi eseguire il comando di installazione delle dipendenze:

- `bun install`

Ora basta eseguire le azioni di `scripts` configurate nel `package.json`, ad esempio:

- `bun run dev`

E per compilare:

- `bun run build`

Utilizzare Bun è molto simile a NPM, Yarn, PNPM, ecc., solo che è molto più veloce e migliore in generale, e inoltre nel
deploy verso gli ambienti di test e produzione, permette di ottenere alte prestazioni con il deploy completato rapidamente e
più efficiente in generale.

### Comandi Integrati in Netuno

Dal lato di Netuno con la centralizzazione del terminale, dove tutti i comandi del progetto vengono eseguiti insieme nello stesso
processo e terminale di Netuno.

- [Maggiori informazioni sul Terminale Centralizzato.](/docs/academy/explore/centralized-terminal)

Se è integrato e stai utilizzando l'esecuzione di comandi di NPM, devi effettuare la modifica per Bun.

Passa a Bun nella configurazione dei `commands` dell'applicazione Netuno in `📂 config/_development.json`, ad esempio:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Conclusione

Non soffrire più per la mancanza di spazio con numerose repliche di dipendenze all'interno delle cartelle `📂 node_modules` che sprecano giga.

E non restare nemmeno così tanto tempo in attesa che il tuo progetto installi finalmente le dipendenze, si avvii o compili.

Niente impedisce l'utilizzo di Bun, perché garantisce la compatibilità con NodeJS e NPM, è letteralmente due in uno.

Nei progetti con Netuno stiamo utilizzando e migrando tutto a **Bun**, segui questa tendenza.