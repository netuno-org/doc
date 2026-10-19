---
id: config
title: Configuration
sidebar_label: Configuration
---

Paramètres généraux de l'application.

## Dossier des configurations

Les configurations de l'application sont disponibles dans le dossier `📂 config`, c'est là que sont réalisés les paramétrages généraux de l'application et des intégrations externes.

Netuno prend en charge plusieurs types d'environnements, par défaut nous utilisons `development` (développement) et `production` (production),

L'environnement actif est défini dans `config.js` qui se trouve à la racine de l'installation de Netuno :

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Tout nom peut être utilisé pour définir l'environnement, étant donné que les applications doivent avoir le même nom d'environnement que le nom des fichiers (`.json` et `.js` dans le dossier `📂 config` de l'application.

Par défaut, dans ce dossier, nous trouvons les fichiers suivants :

## _development.js

L'injection de code JavaScript qui permet de réaliser des configurations dynamiques via la logique programmatique sur les paramétrages définis dans le fichier `_development.json`. Par exemple, définir une configuration basée sur des informations qui se trouvent dans une base de données, définir le paramétrage du comportement de l'exécution du code, entre autres.

Ce fichier est utilisé en fonction de la définition de l'environnement, s'il s'agit de `development` (développement).

## _development.json

Définition des paramétrages de l'application comme la langue, les configurations générales des ressources et des intégrations. Par exemple, les configurations de bases de données, les tâches Cron, les intégrations avec SMTP ou des API distantes, l'authentification, entre beaucoup d'autres.

Ce fichier est utilisé en fonction de la définition de l'environnement, s'il s'agit de `development` (développement).

## _production.js

L'injection de code JavaScript permet de réaliser des configurations dynamiques via la logique programmatique sur les paramétrages définis dans `_production.js`. Par exemple, définir la configuration avec des informations qui se trouvent dans une base de données, le paramétrage du comportement de l'exécution du code, entre autres.

Ce fichier est utilisé en fonction de la définition de l'environnement, s'il s'agit de `production` (production).

## _production.json

Définition des paramétrages de l'application comme la langue, les configurations générales des ressources et des intégrations. Par exemple, les configurations de bases de données, les tâches Cron, les intégrations avec SMTP ou des API distantes, l'authentification, entre beaucoup d'autres.

Ce fichier est utilisé en fonction de la définition de l'environnement, s'il s'agit de `production` (production).