---
sidebar_position: 2
id: config
title: Configuration
---

# Configurer l'application

Ce guide présente les premières étapes pour configurer la langue de l'application Demo, la base de données et activer les commandes automatiques exécutées avec le serveur.

Toutes les modifications sont effectuées dans le fichier `_development.json` de configuration de l'application **Demo**, situé dans le dossier /apps/demo/**config**.

### Prérequis

Avant de modifier la configuration, vérifiez les points suivants :

- L'application Demo a déjà été créée et initialisée.
- Vous êtes à la racine du projet Netuno.
- Un éditeur de code est ouvert sur `/apps/demo/config/development.json`.
- Vous pourrez redémarrer le serveur après avoir enregistré les modifications.

## Configuration des langues

### 1. Application

Dans le fichier de configuration, localisez les champs `language` et `locale` pour modifier la langue de l'application.

```json title="/apps/demo/config/development.json"
{
  "language": "fr_FR",
  "locale": "fr_FR",
}
```

Définissez les valeurs selon la langue souhaitée :

- **Français** : `fr_FR` ou `fr_CA`
- **Anglais** : `en_GB` ou `en_US`

### 2. Base de données

Localisez l'objet **"db"**, puis les configurations de **"default"**.

Modifiez le champ **"name"** pour définir la base de données correspondante :

- `demo_fr` : base de données en français.
- `demo_en` : base de données en anglais.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_fr",
            "username": "sa"
        }
    },
...
}
```

### 3. Activer plusieurs commandes

Netuno permet d'exécuter plusieurs commandes simultanément au démarrage du serveur, en affichant leurs sorties dans la même console.

Par défaut, l'application **Demo** fournit la commande `bun run watch` configurée, mais désactivée. Cette commande compile automatiquement toute modification apportée aux fichiers de code du backoffice.

Pour l'activer, localisez dans le tableau **"commands"** et remplacez la valeur du champ **enabled** de false par **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Paramètres de l'objet "commands"

- `enabled` : active (true) ou désactive (false) l'exécution automatique de la commande.
- `path` : définit le chemin (dossier) de l'application où la commande sera exécutée.
- `command` : définit la commande qui sera exécutée dans le terminal.

:::tip
Vous pouvez ajouter d'autres commandes dans le tableau `"commands"`, à condition de conserver la même structure d'objet.
:::


Après avoir enregistré le fichier de configuration, redémarrez le serveur Netuno pour appliquer les modifications.


## Résultat attendu

Après avoir redémarré le serveur, vérifiez les points suivants :

- L'application Demo est dans la langue configurée.
- La console affiche l'exécution de la commande `bun run watch`, si elle est activée.

## Étapes suivantes

Passez à la prochaine étape **Formulaire** pour explorer et modifier l'application de démonstration.