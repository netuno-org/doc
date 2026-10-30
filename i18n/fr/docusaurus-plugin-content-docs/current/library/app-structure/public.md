---
id: public
title: Public
sidebar_label: Public
---

Fichiers publics directement accessibles par URL.

## Dossier public

Le dossier `📂 public` rassemble le contenu de l'UI (User Interface) côté client après compilation, entre autres fichiers publics comme les logos et l'icône.

Il peut contenir tout fichier qui doit être accessible publiquement.

## Structure du dossier

En entrant dans le dossier `📂 public`, vous trouverez par défaut la structure suivante :

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## Images

Le dossier `📂 images` contient initialement les logos de l'application et l'icône.

C'est dans ce dossier que vous pouvez placer toutes les images publiques de votre application.

### icon.png

Icône de l'application, il apparaît dans l'onglet du navigateur (favicon).

### logo.png

C'est l'image de logo qui est affichée sur la page de connexion du backoffice et sur les pages d'erreur.

### logo-main.png

C'est l'image de logo qui est affichée dans l'en-tête (_header_) après la connexion et l'entrée dans le backoffice.

## Scripts

Dans le dossier `📂 scripts` se trouve le code JavaScript final généré par la compilation de l'UI, c'est là que d'autres fichiers JavaScript publics peuvent être placés.

### ui.js

Le fichier `ui.js` est la compilation finale du code de l'UI.

Typiquement, l'UI est développée en React et LESS, et [Vite](https://vite.dev/) est utilisé pour réaliser la compilation du bundle JavaScript final, qui est le fichier `ui.js`.

Les instructions de compilation se trouvent dans `ui/vite.config.js`, ce fichier contient les détails de la façon dont `ui.js` est traité et généré.

### ui.js.map

Le fichier `ui.js.map` est le source map de l'UI, ce fichier est important pour indiquer le code original lors du débogage des erreurs dans la _console_ du navigateur.

## Styles

Le dossier `📂 styles` doit contenir les fichiers CSS qui sont utilisés pour la stylisation de l'application.

### main.css

Le `main.css` est typiquement utilisé pour des CSS globaux ou pour modifier les styles par défaut de Netuno.

### ui.css

Le `ui.css` est le CSS généré à partir de la compilation de l'UI.

Typiquement, l'UI est développée en React et LESS, et [Vite](https://vite.dev/) est utilisé pour réaliser la compilation du bundle CSS final qui est `ui.css`.

Les instructions de compilation se trouvent dans `ui/vite.config.js`, ce fichier contient les détails de la façon dont `ui.css` est généré.