---
id: generate-uid-guid
title: Générer des ID uniques (UID/GUID)
sidebar_label: Générer des ID uniques (UID/GUID)
---

## Avant de commencer

Avant de continuer, assurez-vous que vous savez créer des **Services Web REST**, sinon, consultez le lien suivant :

* [Services Web REST](/docs/academy/server/services/rest)

Il est également conseillé, avant de commencer ce tutoriel, de vous assurer que vous avez des notions de base en _**JavaScript**_.

## Qu'est-ce qu'un UID

Un UID (_unique identifier_), comme son nom l'indique, est une chaîne unique dans toute votre application. Il est également connu sous le nom de GUID (_global unique identifier_).

Pour illustrer la génération d'UID, nous allons créer un service.

## Génération d'UID

Nous allons maintenant démontrer la création d'un UID aléatoire, c'est assez simple car Netuno intègre déjà une fonction spécifiquement créée pour cet effet :

```javascript
_out.println(
  _uid.generate()
)
```

> Notez que la fonction `_out.println()` sert uniquement à permettre la visualisation du résultat à l'écran lors de l'appel du service dans le navigateur

Si vous avez des questions, n'hésitez pas à nous contacter via les moyens présentés en bas de page.

Bon développement !