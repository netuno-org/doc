---
id: ui
title: UI
sidebar_label: UI
---

Frontend personnalisé du back-office et des tableaux de bord.

## Interface utilisateur

Comme son nom l'indique, le dossier `📂 ui` contient la logique de l'interface utilisateur de l'application.

Il permet de réaliser le développement pour modifier le comportement du back-office de l'application.

Il est possible de générer des tableaux de bord sur mesure, d'ajouter ou de modifier des fonctionnalités, entre autres.

Pour réaliser le développement du code général de l'application, que ce soit le backend ou le frontend, nous recommandons des éditeurs de code gratuits, tels que :

- VS Codium : <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom : <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code : <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm : <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Structure du dossier

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MonBouton</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>ConteneurTableauDeBord</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Source

Le dossier `📂 src` regroupe le code applicatif du frontend. Dans ce dossier se trouve l'organisation des composants React, respectivement `components` et `containers`.

### Conteneurs

Le dossier `📂 containers` est destiné aux conteneurs, qui sont des composants React pour les zones comportant plus d'interactions, c'est-à-dire des composants qui ont plus de fonctionnalités, couvrant normalement une zone considérable de l'écran et pouvant agréger d'autres composants selon le contexte.

Par exemple, il présente un tableau de commandes avec un formulaire pour filtrer, ainsi qu'un graphique agrégeant le total mensuel, tout cela dans un conteneur, chaque élément pouvant être un composant à part mais qui est agrégé dans le conteneur des commandes du tableau de bord.

### Composants

Le dossier `📂 components` est destiné aux _composants_ réutilisables en React, qui implémentent normalement des fonctionnalités très spécifiques utiles pour être intégrées dans d'autres composants ou conteneurs.

Typiquement, il contient un comportement plus simple, très axé sur son objectif pour un périmètre donné, servant à être réutilisé dans plusieurs conteneurs ou même dans d'autres composants.

Comme exemples de composants, on pourrait citer un tableau donné, un formulaire, un type de graphique, entre autres.

### Styles

Le dossier `📂 styles` sert typiquement aux styles globaux des différents conteneurs de l'application. Bien qu'il n'y ait pas de norme forte dans ce domaine, nous suggérons une organisation des styles spécifiques au `composant` ou au `conteneur` à côté de celui-ci, c'est-à-dire à l'intérieur du dossier du composant respectif.
 
## Vite
 
Pour que soit générée la version finale du code JavaScript contenant l'UI de l'application, compilée et optimisée, et qui est traitée et utilisée par le navigateur, il est nécessaire d'exécuter la compilation correspondante du code frontend qui est codé en React/JSX.

Cette compilation est réalisée par [Vite](https://vite.dev/) et sa configuration ainsi que d'autres instructions se trouvent dans le fichier :

- `vite.config.js`

qui se trouve à la racine du dossier `📂 ui`.

## Gestionnaire de paquets

Le fichier `package.json` est utilisé par le gestionnaire des modules de dépendances ; nous recommandons l'utilisation de [Bun](https://bun.sh) pour installer toutes les dépendances nécessaires du frontend.

Et les commandes d'exécution utilisent [Bun](https://bun.sh), ce qui est une autre recommandation importante.

Par conséquent, nous recommandons l'installation de [Bun](https://bun.sh).

## Instructions

Le fichier `README.md` contient les instructions d'installation et d'exécution.

Pour installer les dépendances, exécutez :

- `bun install`

Et pour exécuter la compilation du code frontend en développement :

- `bun run watch`

Ou s'il s'agit de la compilation finale et définitive optimisée pour la production :

- `bun run build`

Par défaut, la compilation crée les fichiers suivants :

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Ces fichiers sont intégrés au traitement de Netuno pour réaliser les personnalisations sur mesure appropriées dans les pages de back-office de l'application, telles que les tableaux de bord et les fonctionnalités spécifiques.