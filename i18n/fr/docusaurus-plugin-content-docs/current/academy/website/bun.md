---
sidebar_position: 1
id: bun
title: Installer Bun
sidebar_label: Installer Bun
---

## Introduction

NodeJS et NPM sont à la base de la définition de l'écosystème du développement frontend.

Malgré leur utilité, leurs performances respectives laissent beaucoup à désirer.

C'est pourquoi nous recommandons d'utiliser Bun pour obtenir des bénéfices significatifs et palpables avec la facilité d'une adaptation rapide et maintenir la compatibilité.

Dans Netuno, Bun est de plus en plus utilisé, voyez les raisons...

## Bun

Bun est comparable à NodeJS mais bien plus boosté, moderne, intuitif et super rapide.

La performance de Bun est incontestable, celui qui passe de l'exécution de NodeJS à Bun remarque immédiatement le bénéfice.

Comme les projets frontend mettent souvent un certain temps à démarrer, avec Bun l'initialisation est immédiate.

Et les dépendances frontend ont tendance à occuper beaucoup d'espace, où le dossier `📂 node_modules` peut facilement atteindre des centaines de mégaoctets voire des gigas.

Bun résout également le problème d'espace gaspillé par la duplication des copies de dépendances pour plusieurs projets.

Créant un dépôt central de dépendances partagé par tous les projets qui, à l'installation, configure des dossiers liés.

Ainsi, il réduit drastiquement la consommation d'espace occupé par les dépendances.

> Parmi divers autres avantages, il se distingue encore par son ergonomie et sa sortie qui est améliorée, intuitive et plus évoluée en général.

Étant donné que les avantages de performance sont d'une importance extrême pour le développement agile, nous recommandons son utilisation.

Pour installer Bun, suivez les étapes sur :

- [**Installation de Bun**](https://bun.sh/docs/installation)

### Utilisation dans les Projets

Pour utiliser Bun dans les projets, assurez-vous que si vous utilisez déjà NPM, Yarn ou un autre, vous devez supprimer le dossier `📂 node_modules`.

Là où se trouve le fichier `package.json`, vous devez exécuter la commande d'installation des dépendances :

- `bun install`

Maintenant, il suffit d'exécuter les actions de `scripts` configurées dans `package.json`, par exemple :

- `bun run dev`

Et pour compiler :

- `bun run build`

Utiliser Bun est très similaire à NPM, Yarn, PNPM, etc., sauf que c'est bien plus rapide et meilleur en général, et encore lors du déploiement vers les environnements de test et de production, il permet d'obtenir des performances élevées avec un déploiement terminé rapidement et plus efficace en général.

### Commandes Intégrées dans Netuno

Du côté de Netuno, avec la centralisation du terminal, où toutes les commandes du projet s'exécutent ensemble dans le même processus et terminal de Netuno.

- [Plus d'informations sur le Terminal Centralisé.](/docs/academy/explore/centralized-terminal)

Si vous êtes intégré et utilisez l'exécution des commandes de NPM, vous devez effectuer un changement vers Bun.

Modifiez pour Bun dans la configuration des `commands` de l'application Netuno dans `📂 config/_development.json`, par exemple :

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "site",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Conclusion

Ne souffrez plus du manque d'espace avec de nombreuses répliques de dépendances dans les dossiers `📂 node_modules` gaspillant des gigas.

Et ne restez plus aussi longtemps à attendre jusqu'à ce que finalement votre projet installe des dépendances, démarre ou compile.

Rien n'empêche l'utilisation de Bun, car il garantit la compatibilité avec NodeJS et NPM, c'est littéralement deux en un.

Dans les projets avec Netuno, nous utilisons et migrons tout vers **Bun**, suivez cette tendance.