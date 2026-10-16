---
sidebar_position: 2
id: server-commands-tips
title: Serveur, Commandes & Astuces
sidebar_label: Serveur, Commandes & Astuces
---

# Commandes du Serveur

Référence des principales commandes de Netuno. Exécutez-les dans le **terminal**, depuis le dossier où Netuno est installé.

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

## Démarrer le serveur sur l'APP

Démarre le serveur avec l'application spécifique définie par le paramètre `app`. Si aucune n'est définie, l'application de démonstration sera démarrée.

```bash
./netuno server app=NOM_APPLICATION
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

## Mise à jour vers la Version Stable

Met à jour Netuno vers la dernière version stable.

```bash
./install-stable
```

---

## Mise à jour vers la Version en Test

Met à jour Netuno vers la dernière version en développement.

```bash
./install-testing
```