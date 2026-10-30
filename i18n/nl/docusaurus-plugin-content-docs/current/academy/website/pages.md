---
sidebar_position: 3
id: pages
title: Pagina's en React Router
sidebar_label: Pagina's en React Router
---

## Inleiding

Het maken van pagina's is een veelvoorkomende behoefte wanneer de webapplicatie complex wordt of wanneer er behoefte is om verschillende inhoud te tonen; dit gebeurt vaak, vooral bij een website of een platform.

Bij ontwikkeling met React is het mogelijk om het navigatiemechanisme tussen pagina's te maken met [React Router](https://reactrouter.com).

De onderstaande stappen moeten binnen uw React-frontendproject worden uitgevoerd.

Als het een frontend betreft die met Netuno is geïntegreerd, moet u de onderstaande stappen uitvoeren in de map van de Netuno-applicatie waar het frontendproject zich bevindt, bijvoorbeeld in:

- `📂 website/`

## Installatie

Controleer of de React Router-module in uw project is geïnstalleerd:

```
bun install react-router
```

En die van Ant.Design, dat wordt gebruikt om de algemene structuur te maken:

```
bun install antd
```

## Configuratie

Om te beginnen moeten we `main.jsx` bewerken, dat zich in de map `📂 src` bevindt; we moeten de `BrowserRoute` als volgt plaatsen:

```javascript title="src/main.jsx"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import Applicatie from './Applicatie.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Applicatie />
  </BrowserRouter>,
);
```

**Heel belangrijk:** Als het een pas aangemaakte frontend is, moet u alle soorten CSS/Style en onnodige imports zoals van afbeeldingen verwijderen om ongewenst gedrag te voorkomen.

Voeg in `Applicatie.jsx`, dat zich ook in de map `📂 src` bevindt, de imports van de modules als volgt toe:

```javascript title="src/Applicatie.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

Voeg na de imports de constanten toe:

```javascript title="src/Applicatie.jsx"
const { Header, Footer, Content } = Layout;
```

In deze beginfase kan de return van de component `Applicatie` er als volgt uitzien:

```jsx title="src/Applicatie.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Startpagina</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/informatie">Informatie</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* De routes van de pagina's komen hier! */ }
        </Routes>
      </Content>
      <Footer>Voettekst</Footer>
    </Layout>
  );
  ...
```

Op deze manier zijn de React Router-componenten gestructureerd met de paginastructuurcomponenten van Ant.Design.

## Pagina's maken

De pagina's staan in afzonderlijke componenten; elke pagina wordt vertegenwoordigd door een eigen React-component.

Een goede praktijk is om de paginacomponenten in een map met de naam `📂 paginas` te plaatsen.

### Startpagina

Maak de startpagina, dat de component `Startpagina` zal zijn en aan het pad `/` wordt gekoppeld.

Het bestand van de component voor deze pagina is:

- `paginas/Startpagina/index.jsx`

De code van dit bestand kan zijn:

```jsx title="src/paginas/Startpagina/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Startpagina() {
  const navigeer = useNavigate();
  return (
    <div>
      <h1>Startpagina</h1>
      <Button onClick={()=> navigeer('/informatie')}>
        Ga naar de informatiepagina
      </Button>
    </div>
  );
};

export default Startpagina;
```

> De knop wisselt programmatisch van pagina met behulp van de functie `navigeer`; dit is een alternatief voor de `Link`-component.

### Informatie

Maak een pagina met voorbeeldinhoud, dat de component `Informatie` zal zijn en aan het pad `/informatie` wordt gekoppeld.

Het bestand van de component voor deze pagina is:

- `paginas/Informatie/index.jsx`

De code van dit bestand kan zijn:

```jsx title="src/paginas/Informatie/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Informatie() {
  const navigeer = useNavigate();
  return (
    <div>
      <h1>Informatie</h1>
      <Button onClick={()=> navigeer('/')}>
        Terug naar de startpagina
      </Button>
    </div>
  );
}

export default Informatie;
```

> De knop wisselt programmatisch van pagina met behulp van de functie `navigeer`; dit is een alternatief voor de `Link`-component. 

## Pagina's importeren

Importeer bovenaan `Applicatie.jsx` de paginacomponenten die zijn gemaakt.

```jsx title="src/Applicatie.jsx"
import Startpagina from './paginas/Startpagina';
import Informatie from './paginas/Informatie';
```

Met de geïmporteerde pagina's is het mogelijk elke pagina aan een bepaald adres te koppelen, bijvoorbeeld `/`, `/informatie`, enz.

Het adres van de pagina kan ook worden opgevat als een route, of `Route`.

Daarom definieert u in `Applicatie.jsx`, waar de routes of beter gezegd de `Routes` worden gedefinieerd, het adres en de component van de pagina's als volgt:

```jsx title="src/Applicatie.jsx"
    ...
    <Routes>
      <Route path="/" element={<Startpagina/>}/>
      <Route path="/informatie" element={<Informatie/>}/>
    </Routes>
    ...
```

> De `path` is het adres en de `element` is de paginacomponent.

Merk op dat we in het `Menu` items hebben met de `Link`-componenten die naar de pagina-adressen verwijzen; daarom geeft het attribuut `to` in de `Link` aan dat de betreffende `Route` moet worden geladen die dezelfde gekoppelde waarde in `path` heeft.

In de browser kunt u deze adressen rechtstreeks typen en de bijbehorende componenten, de pagina's, zouden moeten verschijnen.

## Navigatie

Om meer opties voor paginanavigatie te bieden, moeten in het `Menu` componenten van het type `Link` worden toegevoegd die naar het betreffende adres verwijzen.

Ook moeten de `Route`-componenten worden toegevoegd die het adres aan de betreffende paginacomponent koppelen.

Met de functie `navigeer` kunt u programmatisch van pagina wisselen, bijvoorbeeld in deze situaties:

1. Op de loginpagina moet na succesvolle validatie van de gegevens automatisch naar een andere pagina worden gegaan.
2. Na het registreren van een account moet, wanneer de gegevens succesvol zijn opgeslagen, automatisch naar de loginpagina worden gegaan.

Wanneer de gebruiker rechtstreeks via een klik met de navigatie interacteert, gebruiken we de `Link`-component.

In de andere gevallen, waarin de paginawissel op een specifiek moment in de code-uitvoering plaatsvindt, gebruiken we de functie `navigeer` die we via `useNavigate` hebben verkregen.

## Conclusie

Met ReactJS en React Router is het mogelijk meerdere pagina's te definiëren en ertussen te navigeren.

Ant.Design helpt bij het opbouwen van de paginastructuur en biedt diverse nuttige componenten om complexe en responsieve interfaces te bouwen.