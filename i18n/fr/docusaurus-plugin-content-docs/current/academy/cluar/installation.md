---
sidebar_position: 2
id: install
title: Installation
sidebar_label: Installation
---

## Prérequis

Avant d'installer CLUAR, il faut :

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) installé.
2. [Bun](https://bun.sh/docs/installation) installé.

## Cloner le projet

CLUAR est une application Netuno, elle doit donc être clonée dans le dossier `apps` de l'installation de Netuno :

```
[répertoire racine de Netuno]/apps
```

À l'aide de la commande :

```
git clone https://github.com/netuno-org/cluar.git
```

## Installer le site web (avec Bun)

Dans le dossier `website` :

```
cd website
```

Exécuter la commande d'installation de Bun :

```
bun install
```

Il est nécessaire d'autoriser l'exécution des scripts non fiables d'ESBUILD :

```
bun pm trust --all
```

Si tu as besoin de redémarrer l'installation du site web, supprime le dossier `node_modules` et les fichiers de verrouillage, puis réinstalle :

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Étape suivante

Une fois le code et les dépendances installés, passe à la [Configuration](/docs/academy/cluar/configuration).