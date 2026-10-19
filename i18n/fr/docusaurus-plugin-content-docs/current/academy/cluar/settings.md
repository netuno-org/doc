---
sidebar_position: 9
id: settings
title: Paramètres
sidebar_label: Paramètres
---

Le système de paramètres clé/valeur gérés par l'éditeur de contenu, sans avoir besoin de code.

## Introduction

**Paramètres** est un système de paramètres clé/valeur, gérés par l'éditeur de contenu dans le backoffice — pensé pour les valeurs du site web qui changent fréquemment ou varient selon la langue (ex. : numéro de téléphone, adresse, liens de réseaux sociaux, une image de logo), sans avoir besoin de toucher au code.

Cela implique trois formulaires dans le backoffice :

- **Type** (`configuration_parameter_type`)
- **Paramètre** (`configuration_parameter`)
- **Configuration** (`configuration`)

## Type

Définit le type de valeur qu'un Paramètre accepte. Il n'a que **Code** (`code`) et **Nom** (`name`). Ils sont déjà créés par défaut :

| Code | Nom |
|---|---|
| `boolean` | Booléen |
| `number` | Nombre |
| `image` | Image |
| `color` | Couleur |
| `text` | Texte |
| `html` | HTML |

## Paramètre

Définit une « clé » de configuration — **Code** (`code`, utilisé dans le code pour récupérer la valeur), **Description** et le **Type** (lequel des types ci-dessus). Ex. : un paramètre `numero-telephone`, de type Texte.

## Configuration

C'est la **valeur** d'un Paramètre, pour une **Langue** donnée — **Valeur** (`value`, texte) ou **Image** (`value_img`), selon le type du paramètre.

### Valeurs sans langue (fallback générique)

Si le champ **Langue** d'une Configuration est laissé vide, cette valeur est alors utilisée comme **fallback pour toutes les langues** qui n'ont pas de valeur propre définie pour ce paramètre. Cela évite de devoir dupliquer la même valeur (ex. : un numéro de téléphone identique dans toutes les langues) dans chaque langue séparément — on la définit une seule fois, sans langue associée, et on définit une valeur spécifique par langue uniquement là où c'est réellement différent.

## Programmatiquement

La classe `website/src/common/Cluar.js` fournit des fonctions pour lire les configurations :

- `Cluar.configuration(parametre)` — obtient la valeur d'un paramètre dans la langue actuelle ; s'il n'y a pas de valeur pour cette langue, utilise la valeur sans langue (fallback) ; s'il n'y en a aucune des deux, retourne le nom du paramètre lui-même (utile pour repérer rapidement une configuration manquante).
- `Cluar.configurationNumber(parametre)` — identique, mais convertit la valeur en nombre (0 si non numérique).
- `Cluar.configurationMultilines(parametre)` — identique, mais convertit les sauts de ligne en `<br>`.

## Étape suivante

Explorez les [Dictionnaires](/docs/academy/cluar/dictionaries).