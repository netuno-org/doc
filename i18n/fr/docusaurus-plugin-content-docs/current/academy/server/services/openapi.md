---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Définition du schéma des services.

## Introduction

OpenAPI est une spécification qui normalise les services offerts par les API REST, aide à comprendre comment les services sont définis, comme l'adresse, les entrées et les sorties.

Permet la génération d'interface de tests et la génération automatique de clients à intégrer avec d'autres technologies.

> En savoir plus sur <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Activation et Configuration

Pour activer et configurer l'OpenAPI dans votre application sur Netuno, il est nécessaire de modifier le fichier de configuration de l'application correspondant à l'environnement que vous utilisez, comme :

- `📂 config/_development.json`
- `📂 config/_production.json`

Insérez et ajustez les paramètres suivants :

```
...
    "openapi": {
        "host": "http://mon-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://mon-app.local.netu.no:9000/services",
                "description": "Développement Local"
            }
        ]
    },
...
```

Assurez-vous que les configurations ont du sens, dans l'exemple ci-dessus c'est pour l'environnement de _development_.

> En production, il convient d'utiliser `https`.

### _openapi.json dans les Services

À la racine des services, configurez le fichier `_openapi.json`.

Le chemin complet dans l'application est :

- `📂 server/services/_openapi.json`

Le contenu de ce fichier sera comme cet exemple :

```
{
  "info": {
    "title": "Mon Application",
    "description": "API REST de Mon Application à utiliser avec modération.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Ajustez le titre et la description pour ce qui a du sens dans votre cas.

## Entrée

En configurant des fichiers _schema_ d'entrées, cela permet à Netuno d'effectuer la validation des paramètres reçus en les comparant aux règles du JSON Schema.

> En savoir plus sur le <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

En cas d'échec de validation, l'exécution du service est empêchée et une erreur est présentée dans le `log` de Netuno et, pour celui qui consomme le service, le code de statut HTTP **400** (_Bad Request_) est retourné.

Pour configurer les règles des paramètres d'entrée, il est nécessaire de créer un fichier avec l'extension `in.json` à côté du fichier de code du service, le nom doit être le même.

- Le service `detail.js` devrait avoir le fichier `detail.in.json`.
- Le service `detail.post.js` devrait avoir le fichier `detail.post.in.json`.
- Le service `detail/post.js` devrait avoir le fichier `detail/post.in.json`.

Exemple de contenu du `in.json` :

```
{
    "tags":[
      "services de produit"
    ],
    "summary": "Détail du Produit",
    "description": "Tous les champs de détail du produit spécifié sont obtenus.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno prend en charge certains types supplémentaires qui ne sont pas pris en charge par JSON Schema, comme `string-not-empty`, `array-not-empty`, `id` et le `uid` (ou `uuid` ou encore `guid`).

> En savoir plus sur cette spécification dans <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Sortie

En configurant des fichiers _schema_ de sorties, cela permet à Netuno d'effectuer la validation des paramètres envoyés en les comparant aux règles du JSON Schema.

> En savoir plus sur le <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

En cas d'échec de validation, la sortie est quand même envoyée à celui qui consomme le service, mais les messages d'échec de validation sont présentés dans le `log` de Netuno.

Pour configurer les règles des paramètres de sortie, il est nécessaire de créer un fichier avec l'extension `out.200.json` à côté du fichier de code du service, le nom doit être le même que celui du service.

Où le **200** est le code de statut HTTP qui figure dans la réponse, pour prendre en charge plusieurs codes de statut HTTP, il suffit d'ajouter d'autres fichiers JSON avec un numéro différent.

Quelques exemples :
- Le service `enregistrer.js` devrait avoir le fichier `enregistrer.out.200.json`.
- Le service `enregistrer.post.js` devrait avoir le fichier `enregistrer.post.out.200.json`.
- Le service `enregistrer/post.js` devrait avoir le fichier `enregistrer/post.out.200.json`.

Exemple de contenu du `out.200.json` :

```
{
    "type": "object",
    "properties": {
      "resultat": {
        "type": "boolean"
      }
    },
    "required": [
      "resultat"
    ]
}
```

Netuno prend en charge certains types supplémentaires qui ne sont pas pris en charge par JSON Schema, comme `string-not-empty`, `array-not-empty`, `id` et le `uid` (ou `uuid` ou encore `guid`).

> En savoir plus sur cette spécification dans <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Importation de Schéma

Netuno prend en charge l'importation de _schemas_, ce qui permet de réutiliser une partie du _schema_ dans plusieurs JSONs.

> L'importation de _schemas_ évite la répétition de code.

Créez le dossier `_schema` à la racine du dossier des services, dans :

- `📂 server/services/_schema`

Maintenant, dans la configuration du JSON, il est possible d'importer des _schemas_ avec le paramètre `_schema` dans le JSON, par exemple :

```
{
    "summary": "Supprimer les Produits",
    "description": "Permet de supprimer définitivement des produits.",
    "_schema": "get/seulement-code.in"
}
```

Cela signifie que le fichier `_schema/get/seulement-code.in.json` sera importé là où se trouve le paramètre `_schema`.

## Spécification et Tests

Pour générer la spécification complète de tous les services qui prennent en charge OpenAPI avec JSON Schema, accédez par exemple à :

- http://localhost:9000/services/_openapi

Un JSON avec toute la spécification sera présenté.

Pour tester, copiez tout le JSON généré.

Ouvrez l'éditeur Swagger : https://editor.swagger.io/

Effacez le contenu qui se trouve à gauche et collez le JSON, puis répondez oui à la question de conversion de JSON en YAML.

Avec l'interface générée à droite, il est possible de mieux comprendre tous les services disponibles et d'effectuer des tests.

Permet également de générer automatiquement des clients pour d'autres technologies.

## Programmatiquement

Dans le dossier `_schema`, nous pouvons utiliser des fichiers `.js` qui seront exécutés lors de la génération de la définition OpenAPI, mais aussi dans le processus de validation des entrées et sorties des services.

Grâce à la programmation du schéma, nous pouvons générer des validations dynamiques, par exemple :
- Accepter uniquement un code qui existe dans la base de données.
- Avec l'`UID`, obtient l'enregistrement dans la base de données et le partage avec les services.
- Si c'est `POST` ou `PUT`, génère un type de schéma différent de celui généré dans le cas du `DELETE`.

### Exemple avec Liste de Valeurs

Imaginez que nous avons un service qui reçoit le code d'une certaine catégorie.

Nous ne pouvons pas recevoir n'importe quelle valeur comme code, car cela peut être une valeur qui ne correspond pas à un code valide de catégorie.

Alors nous pouvons restreindre les codes acceptés à ceux qui sont enregistrés dans la base de données.

On crée le schéma dans : `server/services/_schema/categorie/codes.js`

```javascript
const dbCategories = _db.query("SELECT code FROM categorie")

const listeCodes = _val.list()

for (const dbCategorie of dbCategories) {
    listeCodes.add(dbCategorie.getString("code"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listeCodes
    )
```

> Le `listeCodes` contiendra tous les codes de catégories enregistrés dans la base de données.

Dans le service, nous pouvons avoir le `JSON` suivant qui utilise le schéma `categorie/codes` :

```json
{
  "summary": "Liste les Produits dans la Catégorie",
  "description": "Obtient tous les produits associés à une certaine catégorie.",
  "type": "object",
  "properties": {
    "categorie": {
      "type": "object",
      "properties": {
        "code": {
          "_schema": "categorie/codes"
        }
      },
      "required": [
        "code"
      ]
    }
  },
  "required": [
    "categorie"
  ]
}
```

De cette façon, nous pouvons garantir que le service ne s'exécute que si le code est valide.

### Exemple avec Objet Global

Imaginez que nous avons plusieurs services qui reçoivent l'`UID` du client et dans chaque service nous devons accéder à la base de données pour obtenir les données du client liées à son `UID`.

Nous pouvons centraliser cela dans un schéma programmé qui, grâce à l'`UID` du client reçu, obtient les données du client dans la base de données et les stocke dans un objet global accessible dans le code des services.

Ainsi, les données du client sont toujours chargées globalement et automatiquement lorsque nous recevons un `UID` de client.

Nous créons un schéma programmé dans : `server/services/_schema/client.js`

```javascript
const client = _req.getValues('client', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbClient = _db.get('client', client.getString("uid"))
    
    if (dbClient == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('erreur', true)
                .set('code', 'client-introuvable')
        )
        _service.cancel()
    }
    
    _val.global().set('client', dbClient)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> Avec `_service.isGeneratingOpenAPIDefinition()`, nous pouvons valider s'il s'agit de la génération de la définition OpenAPI, sinon il s'agit de l'exécution d'une requête HTTP.
> 
> Si l'`UID` du client n'est pas trouvé, alors il retourne le 404 et interrompt l'exécution du service.
> 
> Remarquez que nous utilisons `_val.global()`, qui permet de partager des données globalement entre tous les fichiers de code exécutés lors du traitement de la requête HTTP.

Dans la suite de l'exemple, nous avons un service qui liste les achats effectués par le client.

Nous avons la validation d'entrée pour le service dans : `server/services/client/achats/post.in.json`

```json
{
    "summary": "Liste des Achats",
    "description": "Liste les achats effectués par le client.",
    "type": "object",
    "properties": {
        "client": {
            "_schema": "client"
        }
    },
    "required": [
        "client"
    ]
}
```

> Remarquez que la valeur du `"_schema"` du client est le nom du fichier de code que nous avons programmé dans le schéma précédemment.

Et dans le code du service des achats de clients dans : `server/services/client/achats/post.js`

```javascript
const dbClient = _val.global().getValues('client')
...
```

Grâce à `_val.global()`, nous obtenons les données du client dans la base de données qui ont été chargées automatiquement par le code du schéma.

### Exemple avec Méthode HTTP

Nous pouvons retourner un schéma différent pour chaque type de méthode HTTP.

Par exemple, nous pouvons générer un schéma par code pour les opérations de création, édition ou suppression de ports réseau :

- Si c'est POST, effectue l'opération de création, alors il ne contient pas l'UID mais exige le nom et le numéro de port.
- Si c'est PUT, effectue l'opération d'édition, il doit exiger l'UID, le nom et le numéro du port réseau.
- Lorsque c'est PUT ou DELETE, il a besoin de l'UID pour effectuer les opérations respectives d'édition et de suppression.

```javascript
const proprietes = _val.map()
const requis = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    proprietes.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    requis.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    proprietes
        .set(
            'nom',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinimum)
                .set('maximum', portMaximum)
        )
    requis
        .add('nom')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        proprietes
    )
    .set(
        'required',
        requis
    )
```

## Vidéos

Voici quelques vidéos illustrant comment développer l'API intégrée avec OpenAPI :

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Conclusion

Avec le support d'OpenAPI, nous pouvons créer des règles de validation en utilisant JSON Schema, ce qui offre les avantages suivants :

- Garantir une plus grande sécurité des données injectées dans les services.
- Alerte dans le `log` si la sortie du service n'est pas conforme à ce qui a été spécifié.
- Génère facilement une interface de navigation dans les services et de tests.