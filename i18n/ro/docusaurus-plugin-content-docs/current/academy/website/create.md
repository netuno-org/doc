---
sidebar_position: 2
id: create
title: Creare cu React
sidebar_label: Creare cu React
---

Acest proces de creare poate fi aplicat în alte contexte, de exemplu pentru a crea orice tip de proiect
React, în acest caz făcând adaptările necesare de nume și folderul în care sunt executate comenzile.

Baza înțelegerii este că va fi creat stratul web, adică frontend-ul aplicației noastre Netuno.

Prin urmare, se presupune că va fi creat în aplicația Netuno `site`, numele standard pentru stratul de frontend,
dar care poate fi orice alt nume dorit.

## Cerințe preliminare

Trebuie să aveți Netuno instalat:

- [Instalarea Netuno.](/docs/get-started/installation)

Datorită performanței mai bune, printre alte avantaje, trebuie să aveți Bun instalat:

- [Instalarea Bun.](/docs/academy/website/bun)

## Creare

Pentru a crea o aplicație React în interiorul unei aplicații Netuno, de obicei o numim `site`.

Deci, cu **terminalul** în **rădăcina aplicației** dvs. Netuno, care de obicei se află în folderul:

- `netuno/apps/APLICATIA_MEA`

> Unde `APLICATIA_MEA` este numele aplicației Netuno.

Executați comanda:

```shell
bun create vite
```

Apoi, la întrebarea: `Project name:`

Tastați `site` și apăsați tasta `ENTER`.

În continuare, apare întrebarea: `Select a framework:`

Folosiți tastele săgeți de pe tastatură și apăsați tasta în jos până selectați opțiunea `React`, apoi apăsați tasta 
`ENTER`.

Pentru a finaliza, următoarea întrebare: `Select a variant:`

Folosiți tastele săgeți de pe tastatură și apăsați tasta în jos până selectați opțiunea `JavaScript`, apoi apăsați 
tasta `ENTER`.

Această comandă va crea un director nou numit `📂 site` unde va fi conținut frontend-ul cu React.

După ce ați creat frontend-ul cu React, executați după cum urmează pentru a instala dependențele:

```shell
cd site
bun install
```

Deschideți folderul aplicației dvs. Netuno în editorul preferat (cum ar fi VSCode, WebStorm, printre altele) și
intrați în folderul `site` care a fost creat.

## Rulare

Acum este posibil să porniți serverul de frontend cu React folosind comanda:

```shell
bun run dev
```

Aceasta va face ca frontend-ul să fie disponibil la adresa [http://localhost:5173/](http://localhost:5173/); de obicei, sau la altă 
adresă cu alt număr de port poate apărea în terminal; în orice caz, deschideți în browser adresa
afișată în terminal.

> Pentru a termina execuția în terminal, apăsați simultan tastele `CTRL` și `C`.

## Instalarea dependențelor

Dacă rulați serverul de frontend în terminal, adică `bun run dev`, se recomandă să îl opriți; apăsați 
simultan tastele `CTRL` și `C`.

Vă recomandăm insistent să instalați următoarele pachete NPM, deoarece sunt foarte utile pentru dezvoltarea de 
aplicații React cu Netuno (faceți clic pe fiecare link pentru mai multe informații despre fiecare):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Pentru a instala pachetele enumerate mai sus, este suficient să executați următorul set de comenzi în terminal:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Alternativ, puteți instala toate pachetele dintr-o singură dată:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Configurări

După executarea comenzilor de mai sus, puteți forța o adresă de port standard; mergeți la `📂 site/vite.config.js` 
și adăugați configurația `server` după cum urmează:

```javascript title="site/vite.config.js"
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

Acum, la pornirea cu comanda `bun run dev`, se va folosi întotdeauna portul `3000`.

### Less

Schimbați toate fișierele `.css` care se află în `site/src` în extensia `.less`.

> Nu uitați să faceți această modificare în codul JSX la liniile care fac `import` la fișierele `.css`, schimbați 
> în `.less`.

LESS permite o dezvoltare mai structurată și modernă a CSS-ului.

### Personalizarea temei Ant.Design

Pentru a personaliza culorile Ant.Design, folosiți componenta `ConfigProvider` în `App.jsx`.

De exemplu:

```jsx title="site/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Butonul Meu cu Culoare Personalizată</Button>
            ...
        </ConfigProvider>
    );
}
...
```

Astfel este posibil să ajustați orice configurație de stilizare a Ant.Design.

### Temă întunecată

De asemenea, este posibil să utilizați tema întunecată a Ant.Design; pentru aceasta este suficient să importați 
`theme` care conține dark mode și să îl aplicați în `ConfigProvider`:

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
        <Button type="primary">Butonul Meu cu Culoare Personalizată</Button>
        ...
    </ConfigProvider>
...
```

### Restilizare

Observați că în parametrizările `ConfigProvider` de mai sus, este posibil să modificați cu ușurință stilul Ant.Design; 
mai multe despre personalizarea Ant.Design:

- [Personalizați tema](https://ant.design/docs/react/customize-theme)

În fiecare componentă Ant.Design există configurațiile posibile de Design Token, de exemplu la butoane:

- [Buton - Design Token](https://ant.design/components/button#design-token)

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
    <Button type="primary">Butonul Meu cu Culoare Personalizată</Button>
    ...
</ConfigProvider>
```

## Pornirea automată a frontend-ului cu Netuno

Netuno vă permite să porniți aplicația React împreună cu procesul de server al aplicației Netuno.

> Toate mesajele de compilare ale aplicației React vor fi integrate în același terminal cu aplicația Netuno.

Pentru aceasta, este suficient să adăugați la configurația `commands` a aplicației Netuno din `📂 config/_development.json` următoarele:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "site",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Întotdeauna când editați fișierele de configurare ale aplicației Netuno, este necesar să reporniți serverul pentru a putea
> prelua noile modificări.

În final, porniți/reporțiți serverul cu aplicația dvs. Netuno pentru a verifica funcționarea acesteia.

Iar acum totul va fi integrat într-un singur terminal centralizat, evitând astfel să aveți mai multe terminale 
dispersate; mai multe despre:

- [Terminal centralizat](/docs/academy/explore/centralized-terminal)

## Configurarea CORS (Cross-Origin Resource Sharing)

Pentru a configura CORS și a evita posibile erori între comunicarea frontend-ului cu serviciile aplicației Netuno,
editați configurația aplicației în:

- `📂 config/_development.json`

Verificați dacă există deja configurația `cors` și dacă în `origins` se află `*`; atunci este potrivită pentru dezvoltare
și poate rămâne așa.

Dacă nu există configurația `cors`, atunci adăugați pe baza acestui exemplu, iar adresa trebuie să fie aceeași
adresă a frontend-ului:

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

> Dacă `origins` conține un `*`, înseamnă că orice adresă de front-end va fi acceptată, de exemplu:
> - `"origins": [ "*" ]`
> De obicei folosim `*` în dezvoltare.

Odată ce configurația este implementată, puteți integra serviciile API dorite cu
frontend-ul, fără probleme de securitate CORS.

> Mai multe despre [CORS](/docs/academy/server/services/cors)

## Variabile de mediu

Configurația variabilelor de mediu poate fi definită prin crearea fișierului `site/.env`, cu 
definițiile variabilelor, de exemplu:

```
NODE_ENV=development
```

Sau prin configurația aplicației Netuno, de exemplu în:

- `📂 config/_development.json`

Și definind variabilele de mediu în configurația comenzii la parametrul `env`, de exemplu:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "site",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```