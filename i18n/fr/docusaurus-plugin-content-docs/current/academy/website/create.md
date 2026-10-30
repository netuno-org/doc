---
sidebar_position: 2
id: create
title: Créer avec React
sidebar_label: Créer avec React
---

Ce processus de création peut être appliqué dans d'autres contextes, par exemple pour créer tout type de projet
React, dans ce cas il convient d'adapter le nom et le dossier où les commandes sont exécutées.

La base de compréhension est que la couche web sera créée, c'est-à-dire le frontend de notre application Netuno.

Il est donc supposé que le `siteweb` sera créé dans l'application Netuno, nom par défaut pour la couche frontend
mais qui peut être tout autre nom souhaité.

## Prérequis

Vous devez avoir Netuno installé :

- [Installation de Netuno.](/docs/get-started/installation)

En raison de meilleures performances entre autres avantages, vous devez avoir Bun installé :

- [Installer Bun.](/docs/academy/website/bun)

## Création

Pour créer une application React dans une application Netuno, nous l'appelons normalement `siteweb`.

Donc, avec le **terminal** dans la **racine de votre application** Netuno, qui se trouve normalement dans le dossier :

- `netuno/apps/MON_APP`

> Où `MON_APP` est le nom de l'application Netuno.

Exécutez la commande :

```shell
bun create vite
```

Ensuite, à la question : `Project name:`

Tapez `siteweb` et appuyez sur la touche `ENTRÉE`.

Ensuite vient la question : `Select a framework:`

Utilisez les flèches du clavier, appuyez sur la flèche vers le bas jusqu'à sélectionner l'option `React` et appuyez sur la touche
`ENTRÉE`.

Pour terminer, la question suivante : `Select a variant:`

Utilisez les flèches du clavier, appuyez sur la flèche vers le bas jusqu'à sélectionner l'option `JavaScript` et appuyez sur la
touche `ENTRÉE`.

Cette commande va créer un nouveau répertoire nommé `📂 siteweb` où sera contenu le frontend avec React.

Après avoir créé le frontend avec React, exécutez ce qui suit pour installer les dépendances :

```shell
cd siteweb
bun install
```

Ouvrez le dossier de votre application Netuno dans votre éditeur préféré (comme VSCode, WebStorm, entre autres), et
entrez dans le dossier `siteweb` qui a été créé.

## Exécuter

Il est maintenant possible de démarrer le serveur frontal avec React en utilisant la commande :

```shell
bun run dev
```

Cela fera que le frontend sera disponible à l'adresse [http://localhost:5173/](http://localhost:5173/), normalement ou à une autre
adresse avec un autre numéro de port pourra apparaître dans le terminal, dans tous les cas il suffit d'ouvrir dans le navigateur l'adresse
présentée dans le terminal.

> Pour terminer l'exécution dans le terminal, appuyez simultanément sur les touches `CTRL` et `C`.

## Installation des dépendances

Si vous exécutez le serveur frontal dans le terminal, c'est-à-dire `bun run dev`, il est recommandé d'arrêter, appuyez
simultanément sur les touches `CTRL` et `C`.

Nous vous conseillons vivement d'installer les paquets NPM suivants, car ils sont très utiles pour le développement
d'applications React avec Netuno (cliquez sur chaque lien pour obtenir plus d'informations sur chacun) :

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Pour installer les paquets listés ci-dessus, il suffit d'exécuter l'ensemble de commandes suivant dans le terminal :

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Alternativement, vous pouvez également installer tous les paquets en une seule fois :

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Configurations

Après avoir exécuté les commandes ci-dessus, vous pouvez forcer une adresse de port par défaut, rendez-vous dans `📂 siteweb/vite.config.js`
et ajoutez la configuration du `server` comme suit :

```javascript title="siteweb/vite.config.js"
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

Maintenant, en démarrant avec la commande `bun run dev`, il utilisera toujours le port `3000`.

### Less

Modifiez tous les fichiers `.css` qui se trouvent dans `siteweb/src` pour l'extension `.less`.

> N'oubliez pas d'effectuer cette modification dans le code JSX aux lignes qui font l'`import` des fichiers `.css`, à changer
> pour `.less`.

LESS permet un développement plus structuré et moderne du CSS.

### Personnalisation du thème d'Ant.Design

Pour personnaliser les couleurs d'Ant.Design, utilisez le composant `ConfigProvider` dans `App.jsx`.

Par exemple :

```jsx title="siteweb/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Mon Bouton avec Couleur Personnalisée</Button>
            ...
        </ConfigProvider>
    );
}
...
```

Ainsi, il est possible d'ajuster toute configuration de style d'Ant.Design.

### Thème Sombre

Il est également possible d'utiliser le thème sombre d'Ant.Design, pour cela il suffit d'importer le `theme` qui contient le dark mode
et de l'appliquer dans `ConfigProvider` :

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
        <Button type="primary">Mon Bouton avec Couleur Personnalisée</Button>
        ...
    </ConfigProvider>
...
```

### Restyle

Remarquez que dans les paramétrages du `ConfigProvider` ci-dessus, il est possible de modifier facilement le style d'Ant.Design,
plus d'informations sur la personnalisation d'Ant.Design :

- [Personnaliser le thème](https://ant.design/docs/react/customize-theme)

Dans chaque composant d'Ant.Design, il y a les configurations possibles de Design Token, par exemple dans les Boutons :

- [Bouton - Design Token](https://ant.design/components/button#design-token)

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
    <Button type="primary">Mon Bouton avec Couleur Personnalisée</Button>
    ...
</ConfigProvider>
```

## Démarrage automatique du frontend avec Netuno

Netuno vous permet de démarrer l'application React en même temps que le processus serveur de l'application Netuno.

> Tous les messages de compilation de l'application React seront intégrés dans le même terminal que l'application Netuno.

Pour cela, il suffit d'ajouter à la configuration `commands` de l'application Netuno dans `📂 config/_development.json` ce qui suit :

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "siteweb",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Chaque fois que vous modifiez les fichiers de configuration de l'application Netuno, il est nécessaire de redémarrer le serveur pour qu'il puisse
> prendre en compte les nouvelles modifications.

Enfin, démarrez/redémarrez le serveur avec votre application Netuno pour vérifier son fonctionnement.

Et maintenant, tout sera intégré dans un seul terminal centralisé, évitant ainsi d'avoir plusieurs terminaux
dispersés, plus d'informations sur :

- [Terminal Centralisé](/docs/academy/explore/centralized-terminal)

## Configuration de CORS (Cross-Origin Resource Sharing)

Pour configurer CORS et éviter d'éventuelles erreurs de communication entre le frontend et les services de l'application Netuno,
modifiez la configuration de l'application dans :

- `📂 config/_development.json`

Vérifiez s'il existe déjà la configuration `cors`, et si dans `origins` il y a `*`, alors cela convient bien pour le développement
et peut rester ainsi.

S'il n'y a pas de configuration `cors`, alors ajoutez-la sur la base de cet exemple, l'adresse devant être la
même que celle du frontend :

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

> Si `origins` contient un `*`, cela signifie que toute adresse de front-end sera supportée, par exemple :
> - `"origins": [ "*" ]`
> Normalement, nous utilisons le `*` en développement.

Une fois la configuration mise en place, vous pouvez intégrer les services d'API que vous souhaitez avec le
frontend, sans problèmes de sécurité CORS.

> Plus d'informations sur [CORS](/docs/academy/server/services/cors)

## Variables d'Environnement

La configuration des variables d'environnement peut être définie par la création du fichier `siteweb/.env`, avec les
définitions des variables, par exemple :

```
NODE_ENV=development
```

Ou via la configuration de l'application Netuno, par exemple dans :

- `📂 config/_development.json`

Et en définissant les variables d'environnement dans la configuration de la commande au paramétrage `env`, par exemple :

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "siteweb",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```