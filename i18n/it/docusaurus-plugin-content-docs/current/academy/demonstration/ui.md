---
sidebar_position: 7
id: ui
title: Interfaccia e Design
---

## Introduzione

Lo sviluppo del frontend, ovvero ciò che viene elaborato visivamente dal browser, avviene all'interno della cartella **ui**.

Per impostazione predefinita, in questa cartella si trova l'ambiente di sviluppo realizzato in <a href="https://reactjs.org/" target="_blank">ReactJS</a> con <a href="https://ant.design/" target="_blank">Ant.Design</a> e <a href="http://lesscss.org/" target="_blank">Less</a>, compilato utilizzando <a href="https://vite.dev/" target="_blank">Vite</a>.

Anche se l'ambiente predefinito è configurato per queste tecnologie, poiché sono molto utilizzate oggi, non è limitato ad esse.

Se desideri utilizzare un'altra tecnologia come **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript**, ecc... è sufficiente modificare all'interno della cartella `📂 ui` le configurazioni del `📂 package.json` e del `📂 vite.config.js` per le tecnologie che preferisci.

> Maggiori informazioni sul [terminale integrato e centralizzato](/docs/academy/explore/centralized-terminal).

## Prerequisiti

Prima di iniziare è importante assicurarsi di avere [Bun](https://bun.sh/) installato.

> Scopri come [installare Bun](/docs/academy/website/bun).

Per comprendere meglio come funziona l'interfaccia di utilizzo consigliamo:

- [Maggiori informazioni sul livello UI di front-end.](/docs/academy/ui/ui-layer)

## Estendere il Servizio

Dopo aver creato il servizio **lavoratori** in `📂 server/services/lavoratori.js` tramite Visual Studio Code che rende disponibile l'informazione in <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> all'indirizzo:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/lavoratori</a>

Il passo successivo è estenderlo per presentare i dati nell'interfaccia del browser.

Con questi dati li presenteremo in una tabella e in un grafico.

Supponendo di avere Visual Studio Code o un altro editor di testo aperto con l'applicazione **Demo**.

Apri il seguente file nell'editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

Modificheremo questo codice già esistente.

### Preparare lo `state`

Subito all'inizio del componente `DashboardContainer` all'interno della `function` si trova la definizione del suo _state_.

Aggiungi una nuova voce per salvare i dati dei lavoratori come segue:

```jsx
            // 👇 Aggiungi le nuove righe di codice qui sotto:
            const [lavoratori, setLavoratori] = useState([]);
            const [caricamento, setCaricamento] = useState(false);
```

Ovvero, aggiungi la nuova riga `const [lavoratori, setLavoratori] = useState([]);` di stato.

### Creare la funzione `caricaLavoratori`

Più in basso nota che esiste una funzione chiamata `caricaLavoratori`, questa funzione effettua l'ottenimento dei dati dei lavoratori che appaiono attualmente nella dashboard.

> Questa funzione viene usata per caricare i dati dei lavoratori.

Inserisci il codice qui sotto:

```jsx
    /**
    *** 🚀 Carica i dati dei lavoratori.
    ***    Tramite l'esecuzione del servizio:
    **     http://localhost:9000/services/lavoratori
    */
    const caricaLavoratori = () => {
        setLavoratori([]);
        setCaricamento(true);
        _service({
            url: intl.locale.indexOf('it') == 0 ? '/services/lavoratori' : '/services/workers',
            success: (response) => {
                setLavoratori(response.json);
                setCaricamento(false);
            },
            fail: (e) => {
                setCaricamento(false);
                console.error('Errore nel servizio dei lavoratori.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

Ciò che questo codice sopra fa è passare i dati dei **lavoratori** allo _state_ del componente in <a href="https://reactjs.org/" target="_blank">ReactJS</a>, cioè tramite l'esecuzione del servizio **lavoratori** che, ricevendo i dati in <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a>, li memorizza nello _state_ tramite l'esecuzione di `setLavoratori`.

Il codice finale dovrebbe essere strutturato in questo modo:

```jsx
    useEffect(() => {
        ...
    }, []);

    const caricaLavoratori = () => {
        ...
    }

    return ( 
        ...
    );
```

> Dove i `...` sono le varie righe di codice omesse all'interno dei rispettivi blocchi.

### Eseguire l'hook `useEffect`

Ora manca eseguire il nostro hook `useEffect` quando il componente è "montato", questo hook viene eseguito quando il componente viene costruito nella presentazione visiva del browser.

Per questo è sufficiente, un po' più in alto, aggiungere la riga di codice `caricaLavoratori();` all'interno dell'hook `useEffect` in questo modo:

```jsx
    useEffect(() => {
        caricaLavoratori();
    }, []);
```

Questa nuova riga di codice chiamerà la funzione che esegue il servizio <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/lavoratori</a>, creato in precedenza, per ottenere i dati in JSON e salvarli nello `state` (_stato_) del componente per essere presentati nel return (_visualizzazione_).

### Compilazione

**Salva** il file e subito dopo nota che nel **terminale** dove hai Netuno in esecuzione apparirà il risultato della nuova compilazione della **ui**, con nuove righe del risultato di compilazione di <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

L'output atteso nel **terminale** dovrebbe essere qualcosa di simile al seguente:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

Caso ci sia qualche errore nella compilazione allora apparirà nel **terminale** l'indicazione del problema.

Fino a qui abbiamo realizzato il consumo del nostro servizio **lavoratori** in cui i dati ottenuti restano salvati nello `state` del componente `DashboardContainer` che così rimane disponibile per essere utilizzato nel `return`.

## Presentare i Dati

Manca presentare i dati visivamente nell'interfaccia che l'utente vede nel browser.

Per presentare i dati nel browser dobbiamo modificare il `return`, che elabora l'aspetto visivo dei componenti in <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

Alla fine del codice del `DashboardContainer` troverai il: `return ( ... );`

Modifichiamolo aggiungendo solo un'altra riga di codice per contenere un altro componente `DataVisualization` che presenterà i dati relativi ai **lavoratori**, il codice dovrebbe risultare come segue:

```jsx
    // 🔍 Cerca nel codice esistente:
    return (
    <div ref={ref}>
      { caricamento == false ?
        <DataVisualization data={lavoratori} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Nota che solo la riga qui sotto deve essere aggiunta:

```jsx
<DataVisualization data={lavoratori} />
```

Così il `DataVisualization` riceverà i dati ottenuti tramite il servizio **lavoratori** via JSON che sono rimasti salvati nello `state`.

### Compilazione Finale

**Salva** il file con tutte le modifiche realizzate fino a qui.

Assicurati che nell'output del **terminale** non ci siano errori.

Ora aggiorna la pagina nel browser e dovresti vedere il risultato finale, oppure, clicca sul link qui sotto:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Se la dashboard appare bianca significa che ci sono errori nel codice.
>
> Verifica nella console del **browser** negli **strumenti per sviluppatori** se ci sono errori.

## Scopri di più 👇

Introduzione rapida a <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Una guida per principianti a ReactJS.</a>