---
sidebar_position: 3
id: pages
title: Pages et React Router
sidebar_label: Pages et React Router
---

## Introduction

La création de pages est un besoin courant lorsque l'application web devient complexe ou qu'il est nécessaire de présenter
des contenus distincts ; cela arrive fréquemment, en particulier lorsqu'il s'agit d'un site web ou d'une plateforme.

Dans le développement avec React, il est possible de créer le mécanisme de navigation entre les pages avec [React Router](https://reactrouter.com).

Les étapes ci-dessous doivent être exécutées dans votre projet frontend en React.

S'il s'agit d'un frontend intégré avec Netuno, vous devez alors effectuer les étapes ci-dessous dans le dossier de l'application Netuno, mais
à l'endroit où se trouve le projet frontend, par exemple dans :

- `📂 website/`

## Installation

Assurez-vous que le module React Router est installé dans votre projet :

```
bun install react-router
```

Et celui d'Ant.Design, qui sera utilisé pour créer la structure générale :

```
bun install antd
```

## Configuration

Pour commencer, nous devons modifier le `main.jsx` qui se trouve dans le dossier `📂 src`, il faut placer le `BrowserRoute` de cette manière :

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

**Très important :** S'il s'agit d'un frontend récemment créé, vous devez supprimer tout type de CSS/Style et les importations inutiles
comme celles d'images, afin d'éviter des comportements indésirables.

Dans le `App.js` qui se trouve également dans le dossier `📂 src`, ajoutez l'importation des modules de la manière suivante :

```javascript title="src/App.jsx"
import { Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
```

Après les importations, ajoutez les constantes :

```javascript title="src/App.jsx"
const { Header, Footer, Content } = Layout;
```

À ce stade initial, le retour du composant App pourra être de la manière suivante :

```jsx title="src/App.jsx"
  ...
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Accueil</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/informations">Informations</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes>
          { /* Les routes des pages seront ici ! */ }
        </Routes>
      </Content>
      <Footer>Pied de page</Footer>
    </Layout>
  );
  ...
```

De cette manière, les composants de React Router sont structurés avec les composants de structure de page d'Ant.Design.

## Créer des pages

Les pages se trouvent dans des composants à part, chaque page est représentée par un composant propre en React.

Une bonne pratique est de placer les composants des pages dans un dossier appelé `📂 pages`.

### Accueil

Créer la page d'entrée, qui sera le composant `Accueil` et sera associée au path `/`.

Le fichier du composant de cette page sera :

- `pages/Accueil/index.jsx`

Le code de ce fichier peut être :

```jsx title="src/pages/Accueil/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Accueil() {
  const naviguer = useNavigate();
  return (
    <div>
      <h1>Accueil</h1>
      <Button onClick={()=> naviguer('/informations')}>
        Aller à la page Informations
      </Button>
    </div>
  );
};

export default Accueil;
```

> Le bouton effectue le changement de page programmatiquement en utilisant la fonction `naviguer`, c'est une alternative au composant `Link`.

### Informations

Créer une page de contenu d'exemple, qui sera le composant `Informations` et sera associée au path `/informations`.

Le fichier du composant de cette page sera :

- `pages/Informations/index.jsx`

Le code de ce fichier peut être :

```jsx title="src/pages/Informations/index.jsx"
import {useNavigate} from 'react-router';
import {Button} from 'antd';

function Informations() {
  const naviguer = useNavigate();
  return (
    <div>
      <h1>Informations</h1>
      <Button onClick={()=> naviguer('/')}>
        Retour à l'accueil
      </Button>
    </div>
  );
}

export default Informations;
```

> Le bouton effectue le changement de page programmatiquement en utilisant la fonction `naviguer`, c'est une alternative au composant `Link`. 

## Importer des pages

Au début du `App.jsx`, importez les composants de pages qui ont été créés.

```jsx title="src/App.jsx"
import Accueil from './pages/Accueil';
import Informations from './pages/Informations';
```

Avec les pages importées, il est possible de relier chaque page à une adresse déterminée, par exemple `/`, `/informations`, etc.

L'adresse de la page peut aussi être comprise comme une route, ou `Route`.

Donc dans le `App.jsx` où sont définies les routes ou plutôt `Routes`, vous allez définir l'adresse et le composant des pages de la manière suivante :

```jsx title="src/App.jsx"
    ...
    <Routes>
      <Route path="/" element={<Accueil/>}/>
      <Route path="/informations" element={<Informations/>}/>
    </Routes>
    ...
```

> Le `path` est l'adresse et le `element` est le composant de la page.

Remarquez que dans le `Menu`, nous avons des éléments avec le `Link` qui pointent vers les adresses des pages, donc l'attribut `to` dans le 
`Link` indique qu'il doit charger le `Route` correspondant qui a la même valeur associée dans le `path`.

Dans le navigateur, vous pouvez saisir directement ces adresses et les composants respectifs, qui sont les pages, devraient apparaître.

## Navigation

Pour réaliser plus d'options de navigation de pages, il faudra ajouter dans le `Menu` des composants de type `Link` qui pointent
vers l'adresse respective.

Il faudra également ajouter les composants `Route` qui associent l'adresse au composant de page correspondant.

Avec la fonction `naviguer`, vous pouvez effectuer des changements de pages programmatiquement, par exemple dans ces situations :

1. Sur la page de connexion, après validation réussie des données, vous devez procéder automatiquement au changement de page.
2. Après avoir enregistré un compte, lorsque les données ont été sauvegardées avec succès, vous devez passer automatiquement à la page de connexion.

Lorsque l'utilisateur interagit directement avec la navigation via un clic, nous utilisons alors le composant `Link`.

Pour les autres cas où le changement de page se produit à un moment spécifique de l'exécution du code, nous utilisons alors la
fonction `naviguer` obtenue avec `useNavigate`.

## Conclusion

Avec ReactJS et React Router, il est possible de définir plusieurs pages et d'effectuer la navigation entre elles.

Ant.Design aide à la construction de la structure de la page et offre divers composants utiles pour construire des interfaces 
complexes et responsives.