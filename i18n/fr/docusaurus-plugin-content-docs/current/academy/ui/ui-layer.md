---
sidebar_position: 8
id: ui-layer
title: Couche UI
sidebar_label: Couche UI
---

Installation et compilation du tableau de bord et de l'interface générale des applications.

## Contexte

Les applications Netuno intègrent déjà par défaut un ensemble de technologies avancées orientées front-end, dont certaines sont [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) et [Ant.Design](https://ant.design/).

Dans les applications, il y a le dossier `📁 ui` (_interface utilisateur_, interface d'utilisation), où nous développons les tableaux de bord et d'autres composants front-end.

## Avant de commencer

Vérifiez que [Bun](https://bun.sh/) est installé, car il s'agit d'un prérequis ; pour en savoir plus :

- [Installer Bun](/docs/academy/website/bun)

## Installer les modules de dépendance

Pour installer toutes les dépendances fournies par défaut, entrez dans le dossier `📁 ui` (_interface utilisateur_) de votre application en cours de développement, par exemple :

```shell
cd apps/mon_app/ui/
```

Exécutez la commande d'installation des modules de dépendance :

```shell
bun install
```

> [Bun](https://bun.sh) est une alternative améliorée et plus optimisée que NPM.

## Compilation automatique

Entrez dans le dossier `📁 ui` (_interface utilisateur_) de votre application en cours de développement, par exemple :

```shell
cd apps/mon_app/ui/
```

Pour compiler le front-end automatiquement à chaque modification du code, exécutez :

```shell
bun run watch
```

> Vérifiez que [Bun](https://bun.sh/) est installé.
 
## Intégration automatique du front-end avec Netuno

Netuno vous permet de démarrer l'UI en même temps que le processus serveur de l'application Netuno.

> Tous les messages de compilation de React seront intégrés dans le même terminal que l'application Netuno.

Pour cela, il suffit d'activer la configuration dans les `commands` de l'application Netuno dans `📂 config/_development.json`, c'est-à-dire dans le `command` dont le `path` est `ui`, passer `enabled` à `true`, de la manière suivante :

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Chaque fois que vous modifiez les fichiers de configuration de l'application Netuno, il est nécessaire de redémarrer le serveur pour qu'il prenne en compte les nouvelles modifications.

Enfin, démarrez/redémarrez le serveur avec votre application Netuno pour vérifier son bon fonctionnement.

Et maintenant, tout sera intégré dans un seul terminal centralisé, vous évitant ainsi d'avoir plusieurs terminaux dispersés ; pour en savoir plus :

- [Terminal centralisé](/docs/academy/explore/centralized-terminal)

## Autres technologies front-end

Dans le dossier `📁 ui`, il est possible de configurer n'importe quelle technologie front-end, ou d'inclure tout nouveau module de dépendance nécessaire.

Si vous ne souhaitez pas utiliser l'une des technologies par défaut, vous pouvez la remplacer par n'importe quelle autre, notamment en adaptant les fichiers :

- `package.json`
- `vite.config.js`