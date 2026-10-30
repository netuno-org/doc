---
sidebar_position: 2
id: types
title: Types de Composant
sidebar_label: Types de Composant
---

## Ce que c'est

Chaque [Composant](/docs/academy/cluar/components/overview) possède un champ **Type**, qui définit quelle variante visuelle est utilisée pour le rendre. Ce champ n'est pas une liste fixe enregistrée dans la base de données — il est **dynamique**, construit à partir des dossiers qui existent dans `website/src/components/<Composant>/`. Par exemple, pour le Banner :

```
website/src/components/Banner/
├── index.jsx           # composant « routeur » : choisit le type à rendre
├── Default/
│   ├── index.jsx        # la variante elle-même
│   ├── index.less
│   ├── info.json        # nom/description du type, par langue
│   └── config.json       # capacités du type (ex. : s'il prend en charge les actions)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Chaque dossier dans `Banner/` est un **type** sélectionnable dans le champ **Type**, dans le formulaire d'édition de ce composant (ex. : lors de l'ajout ou de la modification d'un Banner sur une page, c'est dans ce formulaire qu'apparaît la liste déroulante avec les types disponibles).

Dans la liste déroulante, ce que la personne **voit** est le libellé traduit défini dans `info.json` (ex. : « Par défaut »), mais ce qui est **enregistré** dans le champ `type` du composant est le **nom du dossier** (ex. : `Default`) — c'est ce nom de dossier que le composant « routeur » utilise ensuite pour choisir quelle variante rendre (voir [`info.json` et `config.json`](#infojson-et-configjson) ci-dessous).

> Le nom « Sub » dans des dossiers comme `DefaultSubBanner` n'indique pas un sous-dossier imbriqué dans un autre type — c'est simplement un type de plus, au même niveau que les autres, avec une convention de nommage qui indique qu'il s'agit d'une variante plus discrète/secondaire du type de base.

### `info.json` et `config.json`

- **`info.json`** — définit le libellé et la description du type, par langue. C'est le libellé (`label`) qui apparaît écrit dans la liste déroulante du formulaire d'édition :
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "fr": { "label": "Par défaut", "description": "Ajouter une bannière." }
  }
  ```
- **`config.json`** — définit les capacités du type. Aujourd'hui, le seul paramètre est `action`, qui contrôle si la section Actions apparaît dans le formulaire et est rendue dans ce type :
  ```json
  { "action": true }
  ```

Ces deux fichiers sont lus en temps réel par un service sur le serveur (`server/services/components/<composant>/list/`), qui parcourt les dossiers dans `website/src/components/<Composant>/` et renvoie la liste des types disponibles — c'est ce qui alimente la liste déroulante de Type dans le formulaire d'édition de ce composant. C'est pourquoi, **il n'est pas nécessaire de redémarrer le serveur ni de modifier la base de données pour ajouter un nouveau type** — il suffit de créer le dossier.

Dans le composant « routeur » (`Banner/index.jsx`), le `type` enregistré est utilisé pour décider quelle variante importer et rendre :

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## Comment créer un nouveau type

1. Créez un nouveau dossier dans `website/src/components/<Composant>/` (ex. : `Banner/Surlignage/`).
2. À l'intérieur, créez le `index.jsx` (le composant React de la variante), le `index.less` (styles), le `info.json` (libellé/description par langue) et le `config.json` (avec `action: true` ou `false`).
3. Dans le `index.jsx` du composant parent (ex. : `Banner/index.jsx`), importez le nouveau composant et ajoutez-le à la condition qui choisit la variante par le `type`.
4. Le nouveau type apparaît automatiquement dans la liste déroulante de Type du formulaire d'édition de ce composant, avec le nom du dossier comme valeur enregistrée.

## Étape suivante

Explorez chaque composant en détail : [Bannière](/docs/academy/cluar/components/banner), [Contenu](/docs/academy/cluar/components/content), [Liste](/docs/academy/cluar/components/listing), [Carrousel](/docs/academy/cluar/components/slider), [Fonctionnalité](/docs/academy/cluar/components/functionality).