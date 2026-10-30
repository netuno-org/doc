---
id: centralized-terminal
title: Terminal Centralisé
sidebar_label: Terminal Centralisé
---

Netuno permet d'unifier la sortie de données (logs) de plusieurs commandes et processus dans une seule fenêtre de terminal — la même où le serveur principal est en cours d'exécution.

Dans les flux de développement modernes, où il est courant de gérer plusieurs technologies simultanément, Netuno agit comme un orchestrateur de logs, pouvant contenir plusieurs commandes configurées pour être démarrées automatiquement en parallèle, comme des processus front-end ReactJS, Angular, Vue et tout autre.

> N'importe quel processus peut être démarré, il suffit de définir sa commande ; par exemple, il est même possible d'intégrer un autre serveur d'une API REST auxiliaire développée dans n'importe quelle autre technologie.

## Configuration

Pour intégrer des processus externes, vous devez modifier le fichier de configuration d'environnement de votre application. Dans ce guide, nous utiliserons l'environnement de développement comme exemple.

### Emplacement du Fichier

Naviguez jusqu'au dossier de votre application et localisez le fichier :

- 📂 `config/_development.json`

### Structure de Configuration

La configuration se fait via la clé « commands », qui consiste en un tableau d'objets. Cela vous permet d'exécuter plusieurs services en parallèle.

Ouvrez le fichier et vérifiez si la clé `"commands"` existe déjà. Sinon, insérez à la fin du fichier (en respectant le format JSON) en suivant la configuration ci-dessous :

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "site_web",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Remarque :** Dans l'exemple ci-dessus, nous avons configuré une commande pour le dossier « ui » et une autre pour le dossier « site_web », toutes deux utilisant le gestionnaire bun.

### Référence des Paramètres

**Interface Utilisateur (UI) :** Exécute `bun run watch` dans le répertoire `ui` de votre application.

**Site web :** Exécute `bun run dev` dans le dossier `site_web`.

### env

Définit les variables d'environnement dont le processus a besoin pour s'exécuter. Vous pouvez définir plusieurs variables simultanément.

### path

Définit le chemin des dossiers où la commande sera exécutée, relatif à la racine de l'application.

### install

Netuno dispose d'une intelligence intégrée pour gérer les dépendances de paquets :

- **Détection Automatique :** Si votre commande commence par `npm`, `bun`, `pnpm` ou `yarn`, Netuno vérifie si le dossier `node_modules` existe.

- **Exécution Intelligente :** Si le dossier n'est pas trouvé, la commande d'installation correspondante (par exemple : `bun install`) est exécutée automatiquement avant de démarrer le processus principal.

- **Personnalisation :** En définissant manuellement le paramètre `install`, la détection par défaut est remplacée par votre configuration personnalisée.

### command

La commande principale à exécuter. Toute la sortie de données (`output`) sera intégrée avec Netuno.

### enabled

Définit si la commande doit (true) ou non (false) être démarrée automatiquement avec l'application.

## Conclusion

La centralisation des commandes dans Netuno simplifie grandement le flux de travail.
La visibilité unifiée permet de consolider toutes les informations des processus parallèles dans un seul terminal, facilitant la surveillance en temps réel.

L'arrêt sécurisé fait que, lorsque vous arrêtez l'exécution du serveur Netuno, tous les processus auxiliaires configurés sont également arrêtés automatiquement, évitant les processus « en arrière-plan » ou les blocages de port.