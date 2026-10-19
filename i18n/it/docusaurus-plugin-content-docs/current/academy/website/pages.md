---
sidebar_position: 3
id: pages
title: Pagine e React Router
sidebar_label: Pagine e React Router
---

## Introduzione

La creazione di pagine è un'esigenza comune quando l'applicazione web diventa complessa o c'è la necessità di presentare
contenuti distinti; succede spesso soprattutto quando si tratta di un sito web o di una piattaforma.

Nello sviluppo con React è possibile creare il meccanismo di navigazione tra le pagine con [React Router](https://reactrouter.com).

I passaggi seguenti devono essere eseguiti all'interno del tuo progetto frontend in React.

Se è un frontend integrato con Netuno, devi quindi eseguire i passaggi seguenti all'interno della cartella dell'applicazione Netuno
ma dove si trova il progetto frontend, ad esempio in:

- `📂 website/`

## Installazione

Assicurati di avere installato il modulo React Router nel tuo progetto:

```
bun install react-router
```

E quello di Ant.Design, che sarà utilizzato per creare la struttura generale:

```
bun install antd
```

## Configurazione

Per iniziare dobbiamo modificare il file `main.jsx` che si trova nella cartella `📂 src`; è necessario inserire `BrowserRouter` in questo modo:

```javascript title="src/main.jsx"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

**Molto importante:** Se si tratta di un frontend appena creato, devi rimuovere ogni tipo di CSS/Style e le importazioni non necessarie
come quelle delle immagini, per evitare comportamenti indesiderati.

Nel file `App.js` che si trova anch'esso nella cartella `📂 src`, aggiungi l'importazione dei moduli come segue:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

Dopo le importazioni aggiungi le costanti:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

In questa fase iniziale il valore di ritorno del componente App può essere il seguente:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/info">Info</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* Le rotte delle pagine saranno qui! */ }
        </Routes>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
  ...
```

In questo modo i componenti di React Router sono strutturati con i componenti di struttura di pagina di Ant.Design.

## Creare pagine

Le pagine risiedono in componenti separati; ogni pagina è rappresentata da un componente React dedicato.

Una buona pratica è inserire i componenti delle pagine in una cartella chiamata `📂 pages`.

### Home

Crea la pagina iniziale, che sarà il componente `Home` e sarà associata al percorso `/`.

Il file del componente di questa pagina sarà:

- `pages/Home/index.jsx`

Il codice di questo file può essere:

```jsx title="src/pages/Home/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={()=> navigate('/info')}>
        Vai alla pagina delle Informazioni
      </Button>
    </div>
  );
};

export default Home;
```

> Il pulsante cambia pagina in modo programmatico utilizzando la funzione `navigate`; è un'alternativa al componente `Link`.

### Info

Crea una pagina di contenuto di esempio, che sarà il componente `Info` e sarà associata al percorso `/info`.

Il file del componente di questa pagina sarà:

- `pages/Info/index.jsx`

Il codice di questo file può essere:

```jsx title="src/pages/Info/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Info() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Info</h1>
      <Button onClick={()=> navigate('/')}>
        Torna alla Home
      </Button>
    </div>
  );
}

export default Info;
```

> Il pulsante cambia pagina in modo programmatico utilizzando la funzione `navigate`; è un'alternativa al componente `Link`.

## Importare pagine

All'inizio di `App.jsx` importa i componenti delle pagine che sono stati creati.

```jsx title="src/App.jsx"
import Home from './pages/Home';
import Info from './pages/Info';
```

Con le pagine importate è possibile associare ogni pagina a un determinato indirizzo, ad esempio `/`, `/info`, ecc.

L'indirizzo della pagina può anche essere inteso come una rotta, o `Route`.

Quindi in `App.jsx`, dove si definiscono le rotte o meglio `Routes`, definirai l'indirizzo e il componente delle pagine come segue:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/info" element={<Info/>}/>
    </Routes>
    ...
```

> Il `path` è l'indirizzo e l'`element` è il componente della pagina.

Nota che nel `Menu` abbiamo elementi con `Link` che puntano agli indirizzi delle pagine; quindi l'attributo `to` in
`Link` indica che deve caricare il `Route` corrispondente che ha lo stesso valore associato nel `path`.

Nel browser puoi digitare direttamente questi indirizzi e i componenti corrispondenti, che sono le pagine, dovrebbero apparire.

## Navigazione

Per realizzare più opzioni di navigazione tra le pagine, devono essere aggiunti nel `Menu` componenti di tipo `Link` che puntano
all'indirizzo corrispondente.

Devono anche essere aggiunti i componenti `Route` che associano l'indirizzo al componente di pagina corrispondente.

Con la funzione `navigate` puoi cambiare pagina in modo programmatico, ad esempio in queste situazioni:

1. Nella pagina di login, dopo che i dati sono stati validati con successo, si deve passare automaticamente alla pagina successiva.
2. Dopo aver registrato un account, quando i dati sono stati salvati con successo, si deve passare automaticamente alla pagina di login.

Quando l'utente interagisce direttamente con la navigazione tramite clic, allora utilizziamo il componente `Link`.

Per gli altri casi in cui il cambio pagina avviene in un momento specifico dell'esecuzione del codice, allora utilizziamo la
funzione `navigate` ottenuta con `useNavigate`.

## Conclusione

Con ReactJS e React Router è possibile definire più pagine ed eseguire la navigazione tra esse.

Ant.Design aiuta nella costruzione della struttura della pagina e offre diversi componenti utili per costruire interfacce
complesse e responsive.