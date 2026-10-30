---
id: db-form-operations
title: Form et les Opérations de Base de Données
sidebar_label: DB Form
---

## Avant de Commencer

Avant de procéder, assurez-vous d'avoir des notions de SQL, de relations entre tables telles que « un à plusieurs » et « plusieurs à un ».

De plus, il est nécessaire d'avoir une connaissance préalable des `Forms` de Netuno et de leur organisation pour pouvoir tirer le maximum du DB Form.

## Introduction

Dans le développement logiciel, nous avons souvent besoin de rechercher des informations dans une base de données, et le faire en utilisant du SQL pur rend les choses massives et stressantes. La requête transforme la construction de requêtes SQL en une expérience intuitive et sans stress. Avec elle, vous pouvez créer des requêtes puissantes en utilisant des méthodes conviviales qui abstraient la complexité du SQL brut, offrant une approche de développement de requêtes qui s'aligne sur votre flux de pensée.

## Comment ça Fonctionne

Au cœur du DB Form se trouve la capacité de structurer des commandes SQL à l'aide d'objets et de méthodes. Au lieu d'écrire directement les commandes SQL, le DB Form vous permet d'utiliser un mécanisme orienté objet pour définir des requêtes et des opérations de manière programmatique.

Chaque requête ou opération de base de données est représentée comme un objet.

Vous créez des instances de classes de requête qui encapsulent différentes parties du SQL, comme la sélection, le filtrage, le regroupement, etc. Et vous exécutez également les opérations de suppression, d'insertion et de mise à jour d'enregistrements.

## Initialisation

Tout commence par l'initialisation du DB Form qui doit savoir quel sera le nom du formulaire de base ou principal qui sera utilisé, c'est-à-dire que les formulaires dans Netuno représentent toujours des tables dans la base de données, donc c'est la même chose que de dire quelle est la table de base ou la table principale.

Dans cet exemple, nous initialisons le DB Form à partir du formulaire/table `personnes` :

```javascript
const dbFormPersonnes = _db.form("personnes")
```

Avec le DB Form initialisé, nous pouvons effectuer des requêtes ou des opérations.

## Requête Simple

Le DB Form fournit deux méthodes très courantes pour l'obtention de données, en plus de la pagination et des résultats distincts, ce sont :

- `all` - Tous les enregistrements sous forme de liste.
- `first` - Obtient uniquement le premier enregistrement.

Voir les exemples ci-dessous.

Pour obtenir toutes les personnes :

```javascript
const dbPersonnes = _db.form("personnes")
    .all()
```

Pour obtenir une seule personne :

```javascript
const dbPersonne = _db.form("personnes")
    .first()
```

## Filtres et Conditions

Avec le where, nous pouvons filtrer les données qui respectent certaines conditions.

Voir quelques exemples :

```js
const dbPersonne = _db.form("personnes")
    .where(_db.where("personnes_user_id").equals(_user.id))
    .first()
```

```js
const dbPersonnes = _db.form("personnes")
    .where(
        _db.where("type").in(_val.list().add("client").add("admin"))
            .and("email").notEqual(null)
    ).all()
```

## Comparaisons Where

Le `_db.where` fournit l'objet [Where](/docs/library/objects/Where) qui prend en charge les opérations de comparaison suivantes :

Comparaisons avec les opérateurs numériques et textuels :

-  `equal(...)` ou `equals(...)` - Vérifie l'égalité, c'est le `=`.
-  `notEqual(...)` ou `notEquals(...)` - Si c'est différent de la valeur passée, c'est le `<>`.
-  `greaterThan(...)` - Si c'est supérieur à la valeur passée, c'est le `>`.
-  `lessThan(...)` - Si c'est inférieur à la valeur passée, c'est le `<`.
-  `greaterOrEqualsThan(...)` - Si c'est supérieur ou égal à la valeur passée, c'est le `>=`.
-  `lessOrEqualsThan(...)` - Si c'est inférieur ou égal à la valeur passée, c'est le `<=`.

Conditions de texte avec l'opérateur `LIKE` :

-  `startsWith('texte')` - Si commence par le préfixe déterminé, c'est le `LIKE '...%'`.
-  `endsWith('texte')` - Si se termine par le suffixe déterminé, c'est le `LIKE '%...'`.
-  `contains('texte')` - Si contient le terme, c'est le `LIKE '%...%'`.

Conditions avec des listes et l'opérateur `IN` :

-  `in(_val.list()...)` - Si est égal à une valeur de la liste, c'est la condition `IN (...)`.
-  `notIn(_val.list()...)` - Si n'est égal à aucune valeur de la liste, c'est la condition `NOT IN (...)`.

## Exemples Pratiques de Requête

Le `DB Form` est accessible à partir de la ressource `_db.form('formulaire')`, une fois invoqué, vous avez entre les mains la requête de base qui peut être configurée en utilisant les méthodes et objets disponibles dans celui-ci.

### Plusieurs vers Un et Résultats Distincts

```javascript
const requete = _db.form('personnes')
    .where(
        _db.where('nom').startsWith('jail')
        .and(
             _db.where('email').contains('jai')
             .or('email').endsWith('com')
         )
    )
    .link('emploi', _db.where('code').equal('gestionnaire'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'personnes_user_id',  
            _db.where('mail').startsWith('jai')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('personnes')
            )
        )
    )
    .get("personnes.nom", "personnes_nom")
    .get("personnes.actif", "personnes_actif")
    .get("personnes.uid", "personnes_uid")
    .debug(true)
    .distinct(true)

const resultats = requete.all();
```

Dans l'exemple ci-dessus, nous effectuons une requête sur la table `personnes` en la reliant à deux autres tables, `emploi` et `netuno_user`, où `emploi` est relié via la méthode `link` et `netuno_user` via le `join`. Il est possible d'observer que le `link` est beaucoup plus simplifié que le `join`, c'est parce que le `link` réutilise la relation du `Form` de Netuno pour mapper la relation tandis que le `join` utilise uniquement les informations fournies dans la méthode. Il est également possible de remarquer les autres méthodes et objets utilisés comme :

- `where` : Objet fourni pour construire des conditions pour une table.
- `link` : Méthode qui relie la table principale à une autre table en utilisant les critères du `Form` de Netuno.
- `join` : Méthode qui reçoit un objet de relation entre tables.
- `get` : Méthode qui définit quels champs seront retournés dans la requête.
- `manyToOne` : Objet qui définit le type de relation entre tables, dans ce cas une relation de type `Many To One`.
- `debug` : Méthode qui détermine si la requête construite sera imprimée dans la console.
- `distinct` : Méthode qui détermine si la commande `DISTINCT` sera appliquée à la requête.
- `all` : Méthode qui exécute la requête et retourne les résultats sous forme de liste.

> La méthode `link` ne doit être utilisée que lorsque les tables possèdent déjà une relation via le `Form` de Netuno.

### Premier Enregistrement avec Relation et Tri

```javascript
const requete = _db.form('personnes')
    .where(
        _db.where('nom').startsWith('jail')
        .and('email').in(
            _val.list().add('premier@mail.com').add('deuxieme@mail.com'))
    )
    .link('emploi')
    .get("personnes.nom", "personnes_nom")
    .get("personnes.actif", "personnes_actif")
    .get("emploi.code", "emploi_code")
    .order('personnes.age', 'desc')
    .debug(true)

const premierResultat = requete.first();
```
À la fin de l'exemple ci-dessus, nous invoquons la méthode `first()`, celle-ci retourne la première occurrence trouvée lors de l'exécution de la requête ; si elle n'en trouve aucune, elle retournera `null`.

### Pagination

```javascript
const requete = _db.form('personnes')
    .link(
        'emploi', 
        _db.link('tache')
    )
    .get("personnes.nom", "personnes_nom")
    .get("personnes.actif", "personnes_actif")
    .get("emploi.code", "emploi_code")
    .group("personnes.id")
    .debug(true)

const page = requete.page(_db.pagination(1, 10));
```

> Le numéro de page dans l'objet Pagination commence à partir de 1, donc l'exemple ci-dessus équivaut à : `offset = 0` et `limit = 10`.

À la fin de l'exemple ci-dessus, nous invoquons la méthode `page()` en passant comme paramètre l'objet `pagination` qui possède les préférences de pagination. Celui-ci retournera un objet page avec les attributs équivalents, par exemple :

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"emploi_code": "stagiaire",
			"personnes_actif": true,
			"personnes_nom": "Marie Martin"
		},
		{
			"emploi_code": "gestionnaire",
			"personnes_actif": true,
			"personnes_nom": "Jean Dupont"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Insérer des Enregistrements

Pour insérer des données dans la base de données, nous utilisons la méthode `insert`, par exemple :

```javascript
const dbPersonneInseree = _db.form("personnes")
    .set("nom", "Jean Dupont")
    .set("email", "jean.dupont@mail.com")
    .insert();
```

Avec le résultat de l'`insert`, nous pouvons obtenir l'id de l'enregistrement qui a été inséré dans la base de données.

Ainsi, dans `dbPersonneInseree`, on obtient l'`id` de l'enregistrement inséré de la manière suivante :

```javascript
_log.info("ID de la personne insérée : "+ dbPersonneInseree.getInt('id'))
```

## Modifier des Enregistrements

À travers l'objet DB Form, vous pouvez mettre à jour les enregistrements de la requête de manière simple et intuitive.

```javascript
_db.form('personnes')
    .link(
        'emploi',
        _db.where('code').equal('stagiaire')
    )
    .set("nom", "nouveau nom")
    .set("email", "monnouveaumail@mail.com")
    .update();
```

> `Important`. La méthode `update()` mettra à jour toutes les occurrences de la requête, faites donc attention lorsque vous l'utilisez.

> De plus, vous pouvez utiliser d'autres méthodes combinées comme `order()` et `limit()` pour améliorer vos requêtes.

## Supprimer des Enregistrements

Le DB Form permet également de supprimer simplement les enregistrements retournés dans la requête.

```javascript
_db.form('personnes')
    .link(
        'emploi',
        _db.where('code').equal('stagiaire')
    )
    .delete();
```

> `Important`. La méthode `delete()` supprimera toutes les occurrences de la requête, faites donc attention lorsque vous l'utilisez.

> Comme les autres, il est possible de combiner d'autres méthodes comme `order()` et `limit()` pour améliorer les résultats.