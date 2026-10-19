---
id: implementing-tables-charts
title: Implementazione di tabelle e grafici
sidebar_label: Tabelle e Grafici
---

In questo tutorial creeremo l'interfaccia e la logica di un'applicazione semplice, con particolare attenzione alla visualizzazione dei dati. Lo sviluppo del progetto tratterà i seguenti argomenti:

- La creazione di **"Formulari"**, **"Campi"** e **"Relazioni"** per la strutturazione del database.
- La costruzione di **"Servizi Web REST"** per fornire i dati e la visualizzazione dinamica delle informazioni in tabelle e grafici nell'applicazione, utilizzando le librerie _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ e la dipendenza _Chart.js_, oltre al componente tabella di <a href="https://ant.design/" target="_blank">Ant Design</a>.

Tutta la struttura visiva del progetto sarà sviluppata utilizzando **HTML, JavaScript e React.js**.
È consigliabile avere conoscenze di base di:
- **JavaScript**
- **React.js**
- **HTML**

💡 **In caso di dubbi su questi passaggi, consulta:**
   - [Guida dell'Interfaccia: Formulari](/docs/academy/ui/forms)
   - [Guida dell'Interfaccia: Campi](/docs/academy/ui/fields)
   - [Guida dell'Interfaccia: Relazioni tra formulari](/docs/academy/ui/relationships-between-forms)
   - [Guida dell'Interfaccia: Servizi Web REST](/docs/academy/explore/services)


## Prodotto Finale

Seguendo tutti i passaggi di questo tutorial, costruirai un pannello funzionale nell'area di lavoro di Netuno, contenente:

* Una **tabella dati** che elenca i record dei lavoratori e i totali delle ore.
* Un **grafico a barre** dinamico e colorato che mostra visivamente questi stessi dati.

![prodotto-finale-it.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Architettura della Soluzione

Prima di scrivere qualsiasi codice, è importante capire come si incastrano i pezzi. La soluzione è divisa in **4 livelli** che comunicano dall'alto verso il basso:

```
DashboardContainer         (recupera i dati dal server)
       │
       ▼
VisualizzazioneDati        (organizza il layout in due colonne)
       │
  ┌────┴────┐
  ▼         ▼
ElencoTabella  GraficoBarre        (renderizzano i dati ricevuti)
```

:::tip
Il vantaggio di questa architettura è che ogni componente ha **una sola responsabilità**.
:::

## Passo 1: Struttura dei Dati

Il primo passo è creare i formulari, configurare la relazione tra di essi e compilarli con dati per generare la tabella e il grafico più avanti.

Questo è il diagramma con l'architettura dei formulari e i campi che dovrai replicare nel tuo ambiente Netuno:

![primo-passo-it.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Importante:** Sebbene il campo `id` compaia nel diagramma, **non è necessario crearlo manualmente**. Netuno genera questo identificatore automaticamente subito dopo la creazione della tabella.

### Template della Dashboard

Per visualizzare la tabella e il grafico, avremo bisogno di un punto nell'interfaccia della tua applicazione. Netuno mette già a disposizione un template di base per il pannello principale.

Apri il tuo editor di codice e trova il file:

```text
/apps/miaapp/server/templates/dashboard.html
```
*(Ricorda di sostituire **miaapp** con il nome reale della cartella della tua applicazione).*

Noterai la seguente riga di codice HTML:

```html
<div id="app-dashboard"></div>
```

## Passo 2: Servizio Dati

Ora che abbiamo il database pronto e l'HTML preparato, dobbiamo creare il "messaggero" (un Servizio Web REST). Sarà responsabile di andare al database, calcolare il totale delle ore di ogni lavoratore e consegnare questa informazione pronta per la tabella e il grafico.


### Creazione del file del servizio

I servizi in Netuno sono conservati nella cartella `server/services/`. Vai alla directory del tuo progetto e crea il file `lavoratori.js`:

```text
/apps/miaapp/server/services/lavoratori.js
```
Il **DashboardContainer** rileva la lingua del pannello e chiama **/services/lavoratori** quando il pannello è in Italiano, o **/services/workers** quando è in Inglese. Ogni lingua ha il proprio file di servizio.

### Scrittura del codice

Questo codice esegue tre azioni principali utilizzando le risorse native di Netuno (**_db**, **_val** e **_out**):

- **Query _db.query:** Cerca solo i lavoratori **attivi** nel database e calcola la somma delle ore lavorate da ciascuno.

- **Elaborazione _val.list e _val.map:** Organizza il risultato in una lista pulita con oggetti strutturati.

- **Risposta _out.json:** Invia i dati in formato JSON affinché l'interfaccia (React) possa leggerli.

Apri il file `lavoratori.js` e incolla il codice seguente:

```javascript
// 1. Query, _db.query() esegue l'SQL e restituisce l'elenco dei record trovati.
const righeDb = _db.query(`
    SELECT DISTINCT
        lavoratore.nome, SUM(DATEDIFF(HOUR, registro.inizio, registro.fine)) AS totale
    FROM lavoratore INNER JOIN registro
        ON lavoratore.id = registro.lavoratore_id
    WHERE lavoratore.attivo = true AND registro.attivo = true
    GROUP BY lavoratore.nome
    ORDER BY totale ASC
`);

// 2. Elaborazione dei Dati, _val.list() crea una lista vuota per memorizzare i dati elaborati.
const lista = _val.list();

// Itera su ogni riga restituita dal database
for (const rigaDb of righeDb) {
    lista.add(
        // _val.map() crea un oggetto con i campi che React utilizzerà
        _val.map()
            .set("nome", rigaDb.getString("nome"))  // nome → campo "nome"
            .set("totale", rigaDb.getInt("totale"))   // totale ore → campo "totale"
    );
}

// 3. Risposta
// Invia la lista finale in formato JSON all'interfaccia React.
_out.json(lista);
```
:::tip
- **Attenzione ai nomi dei campi:** I campi definiti qui come **"nome"** e **"totale"** sono esattamente gli stessi che i componenti React cercheranno nei passaggi successivi (dataIndex: 'nome' e dataIndex: 'totale'). Devono essere identici.

- **Informazioni sul filtro attivo = true:** Il database possiede una colonna **attivo** nelle tabelle **lavoratore** e **registro**. Filtrando solo i record attivi, garantiamo che i dati archiviati o disattivati non compaiano nella tabella e nel grafico.
:::

## Passo 3: Ambiente Frontend (React)

Ora che il backend (database e servizi) è pronto, prepariamo l'interfaccia visiva.

Apri il terminale e segui i passaggi seguenti:

#### 1. Installare le dipendenze di base
Vai alla cartella `ui` della tua applicazione e installa i pacchetti.

```bash
npm install
```

#### 2. Installare le librerie per i Grafici

Poiché il progetto mostrerà grafici, scarica le librerie che realizzeranno questo disegno sullo schermo:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Gestire più lingue

Installa la libreria per gestire più lingue:

```bash
npm install react-intl
```

#### 4. Avviare il Compilatore (Watch)

Con tutto installato, ogni volta che salviamo un file, aggiornerà automaticamente lo schermo:

```bash
npm run watch
```

#### 5. Creare Componenti
Per mantenere il progetto organizzato, crea componenti separati per la Tabella e per il Grafico.

Vai alla directory `src/components/` della tua applicazione e crea le cartelle:

* Tabella: ElencoTabella
* Grafico: GraficoBarre
* Container: VisualizzazioneDati

```text
/apps/nome_della_tua_app/ui/src/components/ElencoTabella/
/apps/nome_della_tua_app/ui/src/components/GraficoBarre/
/apps/nome_della_tua_app/ui/src/containers/VisualizzazioneDati/
```

## Passo 4: Componente ElencoTabella

Il componente **ElencoTabella** riceverà i dati dal servizio e costruirà automaticamente le colonne usando **Ant Design** — una libreria di componenti visivi pronti che accompagna già l'interfaccia di Netuno.

Vai alla cartella ElencoTabella e crea un file `index.jsx`:

```text
/apps/nome_della_tua_app/ui/src/components/ElencoTabella/index.jsx
```

Apri il file e incolla il codice seguente:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Componente Tabella di Ant Design

import './index.less';

const messages = 'dashboardcontainer.visualizzazionedati.tabella';

function ElencoTabella({ dati = [] }) {
  // Definizione delle intestazioni e quale campo dell'oggetto mostrare in ogni colonna
  const colonne = [
    {
      title: <FormattedMessage id={`${messages}.lavoratori`} />, // Titolo tradotto
      dataIndex: 'nome',  // Campo "nome" del JSON restituito dal servizio
    },
    {
      title: <FormattedMessage id={`${messages}.totale`} />,
      dataIndex: 'totale', // Campo "totale" del JSON restituito dal servizio
    }
  ];

  return (
    <Table
      columns={colonne}      // Struttura delle colonne
      dataSource={dati}      // I dati stessi (lista di oggetti)
      pagination={false}     // Senza paginazione: tutti i record in una volta
      bordered={true}        // Con bordi visibili nelle celle
    />
  );
}

export default ElencoTabella;
```

 **Capire il codice:**

Questo componente funzionale riceve la lista `dati` come parametro (prop) e la consegna direttamente al `<Table>` di Ant Design.

La configurazione **colonne** informa ad Ant Design quale titolo mostrare nell'intestazione **title** e quale campo dell'oggetto JSON inserire nella cella `dataIndex`. Ant Design gestisce automaticamente tutto l'HTML, gli stili dei bordi e il layout — non è necessario creare CSS manuale per questo.

**File index.less:** Crea il file `index.less` nella stessa cartella. Per ora può rimanere vuoto, poiché Ant Design fornisce già lo stile di base della tabella.


## Passo 5: Componente GraficoBarre

Creeremo un Grafico a Barre per la visualizzazione dei dati utilizzando la libreria **react-chartjs-2**. Questo componente riceverà i dati, li trasformerà nel formato compreso da Chart.js, assegnerà i colori e disegnerà il grafico sullo schermo.

Vai alla cartella `GraficoBarre` e crea un file chiamato `index.jsx`:

```text
/apps/nome_della_tua_app/ui/src/components/GraficoBarre/index.jsx
```
Apri il file e incolla il codice seguente:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Componente grafico a barre
import { Chart, registerables } from 'chart.js';  // Nucleo di Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const messages = 'dashboardcontainer.visualizzazionedati.grafico';

// OBBLIGATORIO: registrare tutti gli elementi di Chart.js prima dell'uso.
// Senza questa riga il grafico non viene renderizzato e genera un errore nella console.
Chart.register(...registerables);

function GraficoBarre({ dati }) {
  const intl = useIntl();
  const [datiGrafico, setDatiGrafico] = useState(null); // Dati nel formato di Chart.js

  useEffect(() => {
    // Palette di 7 colori per le barre (ciclica se ci sono più di 7 elementi)
    const colori = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const etichette = [];
    const valori = [];

    // Struttura dati richiesta da Chart.js
    const nuoviDatiGrafico = {
      labels: [],       // Nomi sull'asse X (orizzontale)
      datasets: [
        {
          label: intl.formatMessage({ id: `${messages}.etichetta` }), // Legenda tradotta
          data: [],           // Valori sull'asse Y (altezza delle barre)
          backgroundColor: [] // Colore di ogni barra
        }
      ]
    };

    // Itera sui dati ricevuti e costruisce le liste
    for (const i in dati) {
      etichette.push(dati[i].nome);   // Nome del lavoratore → asse X
      valori.push(dati[i].totale);  // Totale ore → altezza della barra

      // (i + 1) % 7: quando "i" arriva a 7, torna a 0, ripetendo i colori in ciclo
      nuoviDatiGrafico.datasets[0].backgroundColor.push(colori[(i + 1) % 7]);
    }

    nuoviDatiGrafico.labels = etichette;
    nuoviDatiGrafico.datasets[0].data = valori;

    setDatiGrafico(nuoviDatiGrafico); // Salva nello stato per attivare il re-render

  }, [dati]); // Esegui di nuovo ogni volta che "dati" cambia

  // Finché i dati non sono stati elaborati, non renderizzare nulla
  if (datiGrafico == null) {
    return null;
  }

  return (
    <Bar data={datiGrafico} />
  );
}

export default GraficoBarre;
```
**Capire il codice:**

Questo componente ha tre responsabilità principali:

**Preparazione `useState`:** Inizializza il componente con stato `null` per attendere l'elaborazione dei dati provenienti dal server.

**Elaborazione dei Dati `useEffect`:** Quando i dati arrivano tramite la prop `dati`, l'Hook **useEffect** viene attivato automaticamente. Definisce una palette di colori e usa un ciclo **for** per separare le informazioni: i nomi dei lavoratori vanno nelle etichette dell'asse X **labels**, i totali delle ore definiscono l'altezza delle barre `data`, e un colore viene assegnato a ogni barra in modo ciclico.

**Disegno sullo Schermo `return`:** Utilizza il componente `<Bar>` della libreria per disegnare il grafico in base ai dati elaborati e salvati nello stato.

**File index.less:** Crea anche il file `index.less` dentro la cartella `GraficoBarre`. Per ora può rimanere vuoto.


## Passo 6: Layout Visivo VisualizzazioneDati

Ora che i componenti Tabella e Grafico sono pronti, abbiamo bisogno di un container che li posizioni fianco a fianco sullo schermo.

Vai alla cartella **VisualizzazioneDati** e crea un file chiamato `index.jsx`:

```text
/apps/nome_della_tua_app/ui/src/containers/VisualizzazioneDati/index.jsx
```

Apri il file e incolla il codice seguente:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Titoli traducibili per lingua

import GraficoBarre from "../../components/GraficoBarre";
import ElencoTabella from "../../components/ElencoTabella";

import './index.less';

const messages = 'dashboardcontainer.visualizzazionedati';

function VisualizzazioneDati({ dati = [] }) {
  return (
    <div>
      <div className="row">              {/* Riga di Bootstrap */}

        {/* Colonna sinistra: Tabella */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading visualizzazione-dati__pannello">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.tabella.titolo`} />
              </h3>
            </div>
            <div className="panel-body">
              <ElencoTabella dati={dati} />   {/* Passa i dati alla Tabella */}
            </div>
          </div>
        </div>

        {/* Colonna destra: Grafico */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading visualizzazione-dati__pannello">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.grafico.titolo`} />
              </h3>
            </div>
            <div className="panel-body">
              <GraficoBarre dati={dati} />    {/* Passa gli stessi dati al Grafico */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VisualizzazioneDati;
```
**Capire il codice:**

Questo componente agisce come un organizzatore visivo. Riceve la lista `dati` e la distribuisce ai due componenti figli senza alcuna trasformazione.

Le classi `row` e `col-lg-6` sono del "Bootstrap Grid" e dividono lo schermo a metà: la colonna di sinistra riceve la Tabella e quella di destra riceve il Grafico. Su schermi più piccoli (cellulari), si impilano automaticamente.

Le classi `panel`, `panel-heading` e `panel-body` creano l'aspetto di una "scatolina con titolo" per ogni componente.

**File index.less:** Crea anche il file `index.less` in questa cartella per la futura stilizzazione dei pannelli.

## Passo 7: Container Dashboard

Abbiamo già i servizi nel backend e i componenti visivi nel frontend. Avremo bisogno di un container per andare al server, recuperare i dati e passarli al componente **VisualizzazioneDati**.

Netuno genera già automaticamente la struttura di base della Dashboard. Modifica il file esistente:

```text
/apps/nome_della_tua_app/ui/src/containers/DashboardContainer/index.jsx
```

Sostituisci il contenuto del file con il codice seguente:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Client HTTP ufficiale di Netuno

import { Spin, message } from 'antd';           // Indicatore di caricamento ed errori

import VisualizzazioneDati from "../VisualizzazioneDati"; // Il layout visivo

import { useIntl } from 'react-intl';           // Supporto multilingua

import './index.less';

const messages = 'dashboardcontainer.visualizzazionedati';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [lavoratori, setLavoratori] = useState([]);   // Stato: elenco dei lavoratori
  const [caricamento, setCaricamento] = useState(false); // Stato: sta caricando?

  // All'apertura della pagina, avvia automaticamente la ricerca
  useEffect(() => {
    caricaLavoratori();
  }, []);

  const caricaLavoratori = () => {
    setLavoratori([]);      // Pulisci i dati precedenti
    setCaricamento(true);    // Attiva l'indicatore di caricamento

    _service({
      // Rileva la lingua del pannello e chiama l'URL corretto del servizio
      url: intl.locale.indexOf('it') == 0 ? '/services/lavoratori' : '/services/workers',
      success: (risposta) => {
        setLavoratori(risposta.json); // Salva i dati ricevuti nello stato
        setCaricamento(false);
      },
      fail: (e) => {
        setCaricamento(false);
        console.error('Servizio lavoratori non riuscito.', e);
        message.error(intl.formatMessage({ id: `${messages}.errore_caricamento` }));
      }
    });
  };

  // Consente al componente padre (Dashboard) di avviare caricaLavoratori() tramite ref
  useImperativeHandle(ref, () => ({
    caricaLavoratori
  }));

  return (
    <div ref={ref}>
      { caricamento == false
        ? <VisualizzazioneDati dati={lavoratori} /> // Dati pronti: mostra il pannello
        : <Spin/>                              // Ancora in caricamento: mostra la rotella
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**Capire il codice:**

Questo componente ha tre responsabilità principali:

**Stato iniziale `useState`:** Crea due controlli interni — **lavoratori** (la lista proveniente dal server) e **caricamento** (un indicatore che segnala se i dati sono ancora in fase di recupero).

**Recupero dati `_service`:** La funzione **caricaLavoratori** usa **_service** per chiamare il servizio backend. A differenza di **fetch** nativo di JavaScript, **_service** gestisce autenticazione, sessione e gestione degli errori automaticamente. Rileva inoltre la lingua del pannello e sceglie l'URL corretto `/lavoratori` per IT, `/workers` per EN.

**Distribuzione e Disegno `return`:** Mentre i dati vengono recuperati, mostra la rotella di caricamento **(Spin)**. Quando i dati arrivano, passa la lista **lavoratori** al componente **VisualizzazioneDati**, che la distribuisce alla Tabella e al Grafico.

### Stilizzare la Dashboard

Apri il file `index.less` della cartella `DashboardContainer` e incolla il codice seguente per evidenziare le intestazioni dei pannelli:

```text
/apps/nome_della_tua_app/ui/src/containers/DashboardContainer/index.less
```

```css
.sfondoPannello {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Capire il codice:**

Questa classe definisce un colore di sfondo blu **(#3f54ba)** e un'area di riempimento **(padding)** nelle intestazioni.

Viene utilizzata dalle classi `visualizzazione-dati__pannello` del componente `VisualizzazioneDati` per garantire che i titoli **Tabella** e **Grafico** risultino visivamente evidenziati.


## Passo 8: Compilare il Progetto

Per garantire che tutto il codice React venga compilato da Netuno:

* **Se il tuo terminale è rimasto aperto** con `npm run watch` in esecuzione in background: le tue modifiche vengono compilate automaticamente ogni volta che un file viene salvato.
* **Se hai chiuso il terminale** o il processo si è fermato: nessun problema. Apri di nuovo il terminale, vai alla cartella `ui` ed esegui nuovamente il comando:

```bash
npm run watch
```

## Conclusione

Nel corso di questo tutorial, hai acquisito competenze essenziali per lavorare con la piattaforma Netuno, padroneggiando il ciclo
di integrazione del flusso di dati tra il server e l'interfaccia utente.

Questo sviluppo ha trattato i seguenti argomenti:

- **Database:** Creazione e organizzazione di tabelle e strutture dati in modo visivo ed efficiente.

- **Backend REST:** Sviluppo di servizi e logica di business per rendere disponibili i dati via API.

- **Frontend con React:** Integrazione e visualizzazione dinamica di questi dati in un'interfaccia moderna e responsiva.

Se hai difficoltà o suggerimenti di miglioramento, contattaci.

Il nostro team e la nostra community sono pronti ad aiutarti.

Buon sviluppo!