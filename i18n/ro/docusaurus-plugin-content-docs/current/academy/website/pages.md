---
sidebar_position: 3
id: pages
title: Pagini și React Router
sidebar_label: Pagini și React Router
---

## Introducere

Crearea paginilor este o necesitate comună atunci când aplicația web devine complexă sau există necesitatea de a prezenta
conținuturi distincte; acest lucru se întâmplă frecvent, mai ales în cazul unui website sau al unei platforme.

În dezvoltarea cu React este posibil să creați mecanismul de navigare între pagini cu [React Router](https://reactrouter.com).

Pașii de mai jos trebuie executați în interiorul proiectului dumneavoastră de frontend în React.

Dacă este un frontend integrat cu Netuno, atunci trebuie să realizați pașii de mai jos în folderul aplicației Netuno,
dar acolo unde se află proiectul de frontend, de exemplu în:

- `📂 website/`

## Instalare

Asigurați-vă că aveți instalat modulul React Router în proiectul dumneavoastră:

```
bun install react-router
```

Și Ant.Design, care va fi utilizat pentru a crea structura generală:

```
bun install antd
```

## Configurare

Pentru a începe trebuie să edităm `main.jsx` care se află în folderul `📂 src`, trebuie să plasăm `BrowserRouter` astfel:

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

**Foarte important:** Dacă este un frontend nou creat, trebuie să eliminați orice tip de CSS/Style și importuri inutile,
precum cele de imagini, pentru a evita comportamente nedorite.

În `App.js` care se află de asemenea în folderul `📂 src`, adăugați importul modulelor astfel:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

După importuri adăugați constantele:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

În această fază inițială, returnul componentei App poate fi după cum urmează:

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Acasă</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/informatii">Informații</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* Rutele paginilor vor fi aici! */ }
        </Routes>
      </Content>
      <Footer>Subsol</Footer>
    </Layout>
  );
  ...
```

În acest fel, componentele React Router sunt structurate împreună cu componentele de structură a paginii din Ant.Design.

## Crearea paginilor

Paginile se află în componente separate, fiecare pagină este reprezentată de o componentă proprie în React.

O bună practică este să plasați componentele paginilor într-un folder numit `📂 pages`.

### Acasă

Creați pagina de intrare, care va fi componenta `Acasa` și va fi asociată cu path-ul `/`.

Fișierul componentei acestei pagini va fi:

- `pages/Acasa/index.jsx`

Codul acestui fișier poate fi:

```jsx title="src/pages/Acasa/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Acasa() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Acasă</h1>
      <Button onClick={()=> navigate('/informatii')}>
        Mergi la pagina de Informații
      </Button>
    </div>
  );
};

export default Acasa;
```

> Butonul realizează schimbarea paginii în mod programatic utilizând funcția `navigate`, este o alternativă la componenta `Link`.

### Informații

Creați o pagină cu conținut de exemplu, care va fi componenta `Informatii` și va fi asociată cu path-ul `/informatii`.

Fișierul componentei acestei pagini va fi:

- `pages/Informatii/index.jsx`

Codul acestui fișier poate fi:

```jsx title="src/pages/Informatii/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Informatii() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Informații</h1>
      <Button onClick={()=> navigate('/')}>
        Înapoi la Acasă
      </Button>
    </div>
  );
}

export default Informatii;
```

> Butonul realizează schimbarea paginii în mod programatic utilizând funcția `navigate`, este o alternativă la componenta `Link`. 

## Importarea paginilor

La începutul `App.jsx` importați componentele paginilor care au fost create.

```jsx title="src/App.jsx"
import Acasa from './pages/Acasa';
import Informatii from './pages/Informatii';
```

Cu paginile importate este posibil să asociați fiecare pagină cu o anumită adresă, de exemplu `/`, `/informatii`, etc.

Adresa paginii poate fi înțeleasă și ca o rută, sau `Route`.

Prin urmare, în `App.jsx` unde sunt definite rutele, sau mai bine spus `Routes`, veți defini adresa și componenta paginilor astfel:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Acasa/>}/>
      <Route path="/informatii" element={<Informatii/>}/>
    </Routes>
    ...
```

> `path` este adresa și `element` este componenta paginii.

Observați că în `Menu` avem elemente cu `Link` care indică spre adresele paginilor, prin urmare atributul `to` din
`Link` indică faptul că trebuie încărcat `Route`-ul corespunzător care are aceeași valoare asociată în `path`.

În browser puteți tasta direct aceste adrese și componentele respective, care sunt paginile, ar trebui să apară.

## Navigare

Pentru a realiza mai multe opțiuni de navigare între pagini, trebuie adăugate în `Menu` componente de tip `Link` care
indică spre adresa respectivă.

De asemenea, trebuie adăugate componentele `Route` care asociază adresa cu componenta de pagină corespunzătoare.

Cu funcția `navigate` puteți realiza schimbări de pagini în mod programatic, de exemplu în aceste situații:

1. Pe pagina de login, după ce datele sunt validate cu succes, trebuie să procedați la schimbarea automată a paginii.
2. După înregistrarea unui cont, când datele au fost salvate cu succes, trebuie să se treacă automat la pagina de login.

Când utilizatorul interacționează direct cu navigarea prin click, atunci folosim componenta `Link`.

Pentru celelalte cazuri în care schimbarea paginii are loc într-un moment specific al execuției codului, atunci folosim
funcția `navigate` obținută cu `useNavigate`.

## Concluzie

Cu ReactJS și React Router este posibil să definiți mai multe pagini și să realizați navigarea între ele.

Ant.Design ajută la construirea structurii paginii și oferă diverse componente utile pentru construirea de interfețe
complexe și responsive.