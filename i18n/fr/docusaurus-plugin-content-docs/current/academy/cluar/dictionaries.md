---
sidebar_position: 10
id: dictionaries
title: Dictionnaires
sidebar_label: Dictionnaires
---

Comment traduire les textes fixes de l'interface du site web.

## Introduction

**Dictionnaires** est le système de traductions des textes fixes de l'interface du site web — libellés, messages, textes de boutons — des choses qui ne sont pas du contenu de page, mais du texte "intégré" dans le code, et qui doivent tout de même exister dans chaque langue.

Cela implique deux formulaires dans le backoffice :

- **Entrée** (`dictionary_entry`)
- **Dictionnaire** (`dictionary`)

## Entrée

Définit une "clé" de traduction — **Code** (`code`, utilisé dans le code pour aller chercher la valeur) et **Description**. Ex. : une entrée `formulaire-contact-succes`, utilisée pour le message de succès du formulaire de contact (c'est exactement celle qui apparaît dans le [`FormulaireContact`](/docs/academy/cluar/components/functionality) de la Fonctionnalité).

## Dictionnaire

C'est la **valeur traduite** d'une Entrée, pour une **Langue** (`language_id`) donnée — champ **Valeur** (`value`, accepte HTML).

:::info Pas de valeur générique/sans langue
Contrairement aux [Configurations](/docs/academy/cluar/settings), le Dictionnaire **n'a pas** de mécanisme de secours sans langue — chaque Entrée a besoin d'une Valeur définie explicitement pour chaque langue dans laquelle elle est utilisée. S'il manque la traduction dans une langue, le texte qui apparaît est le code de l'Entrée lui-même (ex. : `formulaire-contact-succes`), pas une valeur générique.
:::

## Programmatiquement

La classe `website/src/common/Cluar.js` met à disposition des fonctions pour lire les entrées du dictionnaire, toutes renvoyant le code de l'entrée comme résultat s'il n'y a pas de traduction (utile pour remarquer les traductions manquantes) :

- `Cluar.dictionary(entree)` — obtient la valeur traduite dans la langue actuelle, telle qu'elle a été enregistrée (peut inclure du HTML).
- `Cluar.plainDictionary(entree)` — identique, mais supprime les balises `<p>` et `<br>`. C'est la plus utilisée dans les libellés d'interface (boutons, champs de formulaire, notifications).
- `Cluar.plainTitle(entree)` — identique, mais supprime uniquement les balises `<p>`.
- `Cluar.plainHTML(entree)` — supprime toutes les balises HTML.
- `Cluar.dictionaryNoParagraph(entree)` — supprime uniquement les balises `<p>` (équivalent à `plainTitle`).

## Prochaine étape

Explorez les [Modèles](/docs/academy/cluar/templates).