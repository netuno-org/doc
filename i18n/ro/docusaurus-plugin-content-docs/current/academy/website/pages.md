---
sidebar_position: 3
id: pages
title: Pagini și React Router
sidebar_label: Pagini și React Router
---

## Introducere

Crearea paginilor este o necesitate comună atunci când aplicația web devine complexă sau există nevoia de a prezenta
conținuturi distincte; este obișnuit să se întâmple mai ales în cazul unui site web sau al unei platforme.

În dezvoltarea cu React este posibil să creezi mecanismul de navigare între pagini cu [React Router](https://reactrouter.com).

Pașii de mai jos trebuie executați în cadrul proiectului tău de frontend în React.

Dacă este un frontend integrat cu Netuno, atunci trebuie să realizezi pașii de mai jos în folderul aplicației Netuno, dar
unde se află proiectul de frontend, de exemplu în:

- `📂 site/`

## Instalare

Asigură-te că ai instalat modulul React Router în proiectul tău:

```
bun install react-router
```

Și Ant.Design, care va fi utilizat pentru a crea structura generală:

```
bun install antd
```

## Configurare

Pentru a începe, trebuie să edităm `main.jsx`, care se află în folderul `📂 src`; este necesar să adăugăm `BrowserRoute` în acest mod:

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

**Foarte important:** Dacă este un frontend nou creat, trebuie să elimini orice tip de CSS/Stil și importuri inutile,
cum ar fi cele de imagini, pentru a evita comportamente nedorite.

În `App.js`, care se află de asemenea în folderul `📂 src`, adaugă importurile modulelor în felul următor:

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

După importuri, adaugă constantele:

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

În această fază inițială, ceea ce returnează componenta App poate fi în felul următor:

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

Astfel, componentele React Router sunt structurate împreună cu componentele de structură de pagină din Ant.Design.

## Creare Pagini

Pagini se află în componente separate; fiecare pagină este reprezentată de o componentă proprie în React.

O bună practică este să plasezi componentele paginilor într-un folder numit `📂 pagini`.

### Acasă

Creează pagina de intrare, care va fi componenta `Acasa` și va fi asociată cu calea `/`.

Fișierul componentei acestei pagini va fi:

- `pagini/Acasa/index.jsx`

Codul acestui fișier poate fi:

```jsx title="src/pagini/Acasa/index.jsx"
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

> Butonul face schimbarea paginii programatic utilizând funcția `navigate`; este o alternativă la componenta `Link`.

### Informații

Creează o pagină de conținut de exemplu, care va fi componenta `Informatii` și va fi asociată cu calea `/informatii`.

Fișierul componentei acestei pagini va fi:

- `pagini/Informatii/index.jsx`

Codul acestui fișier poate fi:

```jsx title="src/pagini/Informatii/index.jsx"
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

> Butonul face schimbarea paginii programatic utilizând funcția `navigate`; este o alternativă la componenta `Link`.

## Importare Pagini

La începutul `App.jsx`, importă componentele paginilor care au fost create.

```jsx title="src/App.jsx"
import Acasa from './pagini/Acasa';
import Informatii from './pagini/Informatii';
```

Cu paginile importate, este posibil să asociezi fiecare pagină cu o anumită adresă, de exemplu `/`, `/informatii`, etc.

Adresa paginii poate fi înțeleasă și ca o rută, sau `Route`.

Prin urmare, în `App.jsx`, unde sunt definite rutele, sau mai bine spus `Routes`, se va defini adresa și componenta paginilor în felul următor:

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Acasa/>}/>
      <Route path="/informatii" element={<Informatii/>}/>
    </Routes>
    ...
```

> `path` este adresa, iar `element` este componenta paginii.

Observă că în `Menu` avem elemente cu `Link` care trimit către adresele paginilor; prin urmare, atributul `to` din
`Link` indică faptul că trebuie încărcat `Route`-ul corespunzător, care are aceeași valoare asociată în `path`.

În browser poți tasta direct aceste adrese, iar componentele respective, care sunt paginile, ar trebui să apară.

## Navigare

Pentru a realiza mai multe opțiuni de navigare între pagini, trebuie adăugate în `Menu` componente de tip `Link` care trimit
către adresa respectivă.

De asemenea, trebuie adăugate componentele `Route` care asociază adresa cu componenta paginii corespunzătoare.

Cu funcția `navigate` poți realiza schimbări de pagină programatic, de exemplu în aceste situații:

1. În pagina de autentificare, după ce datele au fost validate cu succes, trebuie să efectuezi schimbarea paginii automat.
2. După înregistrarea unui cont, când datele au fost salvate cu succes, trebuie să schimbi automat către pagina de autentificare.

Când utilizatorul interacționează direct cu navigarea prin clic, atunci folosim componenta `Link`.

Pentru celelalte cazuri în care schimbarea paginii are loc într-un moment specific al execuției codului, atunci folosim
funcția `navigate` obținută cu `useNavigate`.

## Concluzie

Cu ReactJS împreună cu React Router este posibil să definești multiple pagini și să realizezi navigarea între ele.

Ant.Design ajută la construirea structurii paginii și oferă diverse componente utile pentru a construi interfețe
complexe și responsive.