---
sidebar_position: 4
id: versions
title: Versions
sidebar_label: Versions
---


# Versions

Si vous commencez à utiliser Netuno, nous vous recommandons d'effectuer l'**installation standard** afin de garantir l'utilisation de la version la plus récente et stable de la plateforme.

Netuno permet également d'installer des versions antérieures spécifiques ou des versions expérimentales encore en développement, utile pour les environnements de test ou la reproduction de bugs.

Avant d'installer ou de mettre à jour vers une version spécifique, consultez la liste officielle des releases :

- **Liste des versions :** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Astuce
Vérifiez les notes de version avant d'installer une version spécifique, en particulier dans les environnements de production.
:::

## Installation d'une version spécifique

Pour installer ou mettre à jour Netuno vers une version spécifique, ajoutez le paramètre `version` à la commande d'installation avec l'identifiant de la version souhaitée.

Choisissez la méthode qui correspond le mieux à votre environnement :

### Méthode 1 : Installateur Java

Utilisez cette méthode pour les nouvelles installations :

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Méthode 2 : Exécuteur principal

Utilisez cette méthode si Netuno est déjà installé et que vous souhaitez mettre à jour vers une version spécifique :

```bash
./netuno install version=20230417.0119
```

### Méthode 3 : netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Remplacez `20230417.0119` par l'identifiant de la version souhaitée, disponible dans la **[liste des releases](https://github.com/netuno-org/platform/releases)**.

Après avoir exécuté la commande, Netuno lancera automatiquement le processus d'installation de la version indiquée.
:::