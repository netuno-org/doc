---
sidebar_position: 2
id: create
title: Creare con React
sidebar_label: Creare con React
---

Questo processo di creazione può essere applicato in altri contesti, ad esempio per creare qualsiasi tipo di progetto
React, in questo caso apportando le dovute modifiche al nome e alla cartella in cui vengono eseguiti i comandi.

Il presupposto è che verrà creato il livello web, ovvero il frontend della nostra applicazione Netuno.

Per questo si presuppone che all'interno dell'applicazione Netuno venga creato il `sito`, nome predefinito per il livello frontend
ma che può essere qualsiasi altro nome desiderato.

## Prerequisiti

È necessario avere Netuno installato:

- [Installazione di Netuno.](/docs/get-started/installation)

Per le migliori prestazioni, tra gli altri vantaggi, deve essere installato Bun:

- [Installare Bun.](/docs/academy/website/bun)

## Creazione

Per creare un'applicazione React all'interno di un'applicazione Netuno normalmente la chiamiamo `sito`.

Quindi, con il **terminale** nella **radice della tua applicazione** Netuno, che normalmente si trova nella cartella:

- `netuno/apps/MIA_APP`

> Dove `MIA_APP` è il nome dell'applicazione Netuno.

Esegui il comando:

```shell
bun create vite
```

Subito dopo, alla domanda: `Project name:`

Digita `sito` e premi il tasto `INVIO`.

Successivamente appare la domanda: `Select a framework:`

Usa le frecce della tastiera e premi la freccia giù fino a selezionare l'opzione `React`, quindi premi il tasto
`INVIO`.

Per terminare, la domanda successiva: `Select a variant:`

Usa le frecce della tastiera e premi la freccia giù fino a selezionare l'opzione `JavaScript`, quindi premi il
tasto `INVIO`.

Questo comando creerà una nuova directory denominata `📂 sito` in cui sarà contenuto il frontend con React.

Dopo aver creato il frontend con React, esegui come segue per installare le dipendenze:

```shell
cd sito
bun install
```

Apri la cartella della tua applicazione Netuno nel tuo editor preferito (come VSCode, WebStorm, tra gli altri) ed
entra nella cartella `sito` che è stata creata.

## Eseguire

Ora è possibile avviare il server frontend con React utilizzando il comando:

```shell
bun run dev
```

Questo farà sì che il frontend sia disponibile all'indirizzo [http://localhost:5173/](http://localhost:5173/); normalmente, oppure in un altro
indirizzo con un altro numero di porta, potrà apparire nel terminale; in ogni caso è sufficiente aprire nel browser l'indirizzo
mostrato nel terminale.

> Per terminare l'esecuzione nel terminale premi contemporaneamente i tasti `CTRL` e `C`.

## Installazione delle Dipendenze

Se stai eseguendo il server frontend nel terminale, ovvero `bun run dev`, è consigliabile fermarlo: premi
contemporaneamente i tasti `CTRL` e `C`.

Consigliamo vivamente di installare i seguenti pacchetti NPM, poiché sono molto utili per lo sviluppo di
applicazioni React con Netuno (clicca su ciascun link per ottenere maggiori informazioni su ognuno):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Per installare i pacchetti sopra elencati è sufficiente eseguire il seguente insieme di comandi nel terminale:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

In alternativa puoi anche installare tutti i pacchetti in una sola volta:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Configurazioni

Dopo aver eseguito i comandi sopra, puoi forzare un indirizzo di porta predefinito: vai a `📂 sito/vite.config.js`
e aggiungi la configurazione di `server` come segue:

```javascript title="sito/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

Ora, all'avvio con il comando `bun run dev`, utilizzerà sempre la porta `3000`.

### Less

Cambia tutti i file `.css` che si trovano in `sito/src` con estensione `.less`.

> Non dimenticare di apportare questa modifica nel codice JSX nelle righe che eseguono l'`import` dei file `.css`,
> cambiandole in `.less`.

LESS consente uno sviluppo CSS più strutturato e moderno.

### Personalizzazione del Tema di Ant.Design

Per personalizzare i colori di Ant.Design utilizza il componente `ConfigProvider` in `App.jsx`.

Ad esempio:

```jsx title="sito/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Il Mio Pulsante con Colore Personalizzato</Button>
            ...
        </ConfigProvider>
    );
}
...
```

Così è possibile regolare qualsiasi configurazione di stile di Ant.Design.

### Tema Scuro

È anche possibile utilizzare il tema scuro di Ant.Design; per farlo è sufficiente importare `theme`, che contiene la modalità scura,
e applicarlo in `ConfigProvider`:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">Il Mio Pulsante con Colore Personalizzato</Button>
        ...
    </ConfigProvider>
...
```

### Ristilizzazione

Nota che nelle parametrizzazioni di `ConfigProvider` sopra è possibile modificare facilmente lo stile di Ant.Design;
maggiori informazioni sulla personalizzazione di Ant.Design:

- [Personalizza Tema](https://ant.design/docs/react/customize-theme)

In ogni componente di Ant.Design sono presenti le possibili configurazioni dei Design Token, ad esempio nei Pulsanti:

- [Button - Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">Il Mio Pulsante con Colore Personalizzato</Button>
    ...
</ConfigProvider>
```

## Avvio automatico del frontend con Netuno

Netuno ti permette di avviare l'applicazione React insieme al processo server dell'applicazione Netuno.

> Tutti i messaggi di compilazione dell'applicazione React saranno integrati nello stesso terminale dell'applicazione Netuno.

Per farlo è sufficiente aggiungere alla configurazione `commands` dell'applicazione Netuno in `📂 config/_development.json` quanto segue:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "sito",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Ogni volta che modifichi i file di configurazione dell'applicazione Netuno è necessario riavviare il server affinché possa
> recepire le nuove modifiche.

Infine avvia/riavvia il server con la tua applicazione Netuno per verificarne il funzionamento.

E ora tutto sarà integrato in un unico terminale centralizzato, evitando così di avere diversi terminali
dispersi; maggiori informazioni su:

- [Terminale Centralizzato](/docs/academy/explore/centralized-terminal)

## Configurazione di CORS (Cross-Origin Resource Sharing)

Per configurare CORS ed evitare possibili errori nella comunicazione tra il frontend e i servizi dell'applicazione Netuno,
modifica la configurazione dell'applicazione in:

- `📂 config/_development.json`

Verifica se esiste già la configurazione `cors` e se in `origins` è presente `*`: in tal caso va bene per lo sviluppo
e può rimanere così.

Se non è presente la configurazione `cors`, aggiungila in base a questo esempio, tenendo presente che l'indirizzo deve essere
lo stesso indirizzo del frontend:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> Se `origins` contiene `*`, significa che qualsiasi indirizzo frontend sarà supportato, ad esempio:
> - `"origins": [ "*" ]`
> Normalmente utilizziamo `*` in sviluppo.

Una volta implementata la configurazione, puoi integrare con il frontend i servizi API che desideri,
senza problemi di sicurezza CORS.

> Maggiori informazioni su [CORS](/docs/academy/server/services/cors)

## Variabili d'Ambiente

La configurazione delle variabili d'ambiente può essere definita creando il file `sito/.env`, con le
definizioni delle variabili, ad esempio:

```
NODE_ENV=development
```

Oppure tramite la configurazione dell'applicazione Netuno, ad esempio in:

- `📂 config/_development.json`

E definendo le variabili d'ambiente nella configurazione del comando nel parametro `env`, ad esempio:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "sito",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```