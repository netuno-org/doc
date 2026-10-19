---
sidebar_position: 2
id: server-commands-tips
title: Serveur, Commandes & Astuces
sidebar_label: Serveur, Commandes & Astuces
---

# Commandes du Serveur

Référence des principales commandes de Netuno. Exécutez-les dans le **terminal**, à partir du dossier où Netuno est installé.

:::tip
Vous ne savez pas comment accéder au dossier de Netuno ? Consultez le guide d'[Installation](/docs/get-started/installation).
:::

---

## Démarrer le serveur

Démarre le serveur avec l'application de `démonstration`.

```bash
./netuno server
```

---

## Démarrer le serveur dans l'APP

Démarre le serveur avec l'application spécifiée définie par le paramètre `app`. Si aucune n'est définie, l'application de démonstration sera démarrée.

```bash
./netuno server app=APP_NAME
```

---

## Nouvelle Application

Crée une nouvelle application à partir de zéro, en demandant les informations et configurations initiales.

```bash
./netuno app
```

---

## Lister les Commandes

Liste toutes les commandes et paramétrages disponibles avec leurs descriptions respectives.

```bash
./netuno help
```

---

## Statistiques de Performance

Présente les informations de performance les plus récentes, stockées dans `logs/stats-*`.

```bash
./netuno stats
```

---

## Mise à jour vers la version stable

Met à jour Netuno vers la version stable la plus récente.

```bash
./install-stable
```

---

## Mise à jour vers la version en test

Met à jour Netuno vers la version la plus récente en développement.

```bash
./install-testing
```