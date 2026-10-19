---
sidebar_position: 1
id: initialization
title: Initialisation
---


# Initialisation 

Initialisation de l'application Demo

Pour commencer ce tutoriel, la première étape consiste à démarrer le serveur de l'application **Demo** et à préparer l'environnement de développement.


### Démarrez le serveur 

Ouvrez le terminal de votre système d'exploitation et naviguez jusqu'au dossier racine où la plateforme Netuno est installée (par exemple, `📁 /netuno`).

Exécutez la commande ci-dessous pour démarrer le serveur :

```bash
./netuno server
```

:::info Alternative d'initialisation
Si la commande principale ne fonctionne pas ou si l'application Demo n'est pas chargée par défaut, forcez l'initialisation en spécifiant le paramètre de l'application :
:::

```bash
./netuno server app=demo
```

### Choisissez l'éditeur de code
Vous pouvez utiliser l'éditeur de code de votre choix pour développer le backend et le frontend de votre application.

Si vous n'en avez pas encore, nous recommandons les options gratuites et open source suivantes :

- VS Code : <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>
- VS Codium : <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- WebStorm : <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>


#### Ouvrez le dossier du projet
Une fois l'éditeur de code ouvert, localisez et ouvrez le répertoire de l'application Demo : `📁 apps/demo`.

Ce dossier contient tous les fichiers et configurations de la nouvelle application. C'est exclusivement dans ce répertoire que tout le développement sera réalisé.

### Prochaines étapes

Avec le serveur en cours d'exécution et les fichiers ouverts dans l'éditeur de code, l'environnement est prêt. Passez à l'étape suivante du tutoriel pour commencer à explorer et modifier l'application.