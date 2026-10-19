---
sidebar_position: 11
id: templates
title: Modèles
sidebar_label: Modèles
---

Comment la mise en page générale d'une page est définie, et comment créer de nouveaux modèles.

## Introduction

Le **modèle** définit la mise en page générale d'une [Page](/docs/academy/cluar/pages/overview) — c'est la valeur du champ `template` de la page, et correspond à un dossier dans `website/src/pages/Template/`.

:::info Origine du mécanisme des Types de Composants
Le mécanisme des [Types de Composants](/docs/academy/cluar/components/types) (dossiers dynamiques + `info.json`) a été inspiré de ce mécanisme de modèles, qui fonctionnait déjà ainsi en premier. La structure est pratiquement la même, mais appliquée à des pages entières au lieu de blocs de contenu.
:::

## Fonctionnement

```
website/src/pages/Template/
├── index.jsx        # routeur : choisit le modèle à rendre
└── Default/
    ├── index.jsx      # le modèle lui-même
    ├── index.less
    └── info.json       # nom/description du modèle, par langue
```

Chaque dossier dans `Template/` est un modèle sélectionnable dans le champ **Template** du formulaire d'édition de la page. Le nom du dossier (`Default`) est la valeur enregistrée dans le champ `template` de la page.

Le `info.json` du modèle par défaut, par exemple :

```json
{
  "en": { "label": "Default", "description": "For pages that use generic styling." },
  "fr": { "label": "Par défaut", "description": "Pour les pages qui utilisent le style générique." }
}
```

:::info La liste déroulante utilise le libellé traduit du `info.json`
Comme dans les Types de Composants, la liste déroulante Template du formulaire de la page affiche le libellé (`label`) traduit du `info.json` — pour cela, la requête au service envoie la langue actuelle (`Cluar.currentLanguage().locale`). Ce qui est enregistré dans le champ `template` de la page reste le nom du dossier (`Default`).
:::

Il y a aussi un service sur le serveur (`server/services/page/template/list/`) qui parcourt les dossiers en temps réel et renvoie la liste des modèles disponibles — pour la même raison : **il n'est pas nécessaire de redémarrer le serveur pour ajouter un nouveau modèle**, il suffit de créer le dossier.

Une différence par rapport aux Types de Composants : les modèles n'ont pas de `config.json` — il n'y a pas de capacités configurables par modèle aujourd'hui, seulement le `index.jsx` et le `info.json`.

## Le modèle par défaut

Le modèle **par défaut** (`Default`) est celui que la plupart des pages utilisent : il entoure le contenu de la page avec l'en-tête et le pied de page du site (`BaseHeader` / `BaseFooter`) autour du `Builder` — le composant qui parcourt et rend effectivement les composants de la page (Bannière, Contenu, Liste, Slider, Fonctionnalité), dans l'ordre défini par le champ Ordre de chacun.

:::info Page avec un template non reconnu
Si le champ `template` d'une page ne correspond à aucun dossier existant (par ex. : nom mal orthographié, ou dossier supprimé), CLUAR **n'échoue pas et n'utilise pas le modèle par défaut comme substitut** — à la place, il rend uniquement le `Builder` « nu », sans l'en-tête ni le pied de page du site. C'est un comportement différent de celui des Types de Composants, où un type non reconnu bascule vers le type par défaut.
:::

C'est le routeur (`Template/index.jsx`) qui décide cela :

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

Remarquez qu'il n'y a qu'une seule vérification explicite (`"Default"`) — toute autre valeur de `template`, reconnue ou non, tombe directement dans le `else` et rend uniquement le `Builder`.

## Comment créer un nouveau modèle

1. Créez un nouveau dossier dans `website/src/pages/Template/` (ex. : `Template/Atterrissage/`).
2. À l'intérieur, créez le `index.jsx` (la mise en page React du modèle), le `index.less` (styles) et le `info.json` (libellé/description par langue — c'est ce libellé qui apparaît dans la liste déroulante).
3. Dans le `index.jsx` du routeur (`Template/index.jsx`), importez le nouveau modèle et ajoutez-le à la condition qui choisit le modèle via le champ `page.template`.
4. Le nouveau modèle apparaît automatiquement dans la liste déroulante de Template du formulaire d'édition de la page, avec le nom du dossier comme valeur enregistrée.

## Prochaine étape

Explorez les [Permissions](/docs/academy/cluar/permissions).