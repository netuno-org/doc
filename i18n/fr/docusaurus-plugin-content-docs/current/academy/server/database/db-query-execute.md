---
id: db-query-execute
title: Requête et Exécution - Commandes directes dans la Base de Données
sidebar_label: Requête & Exécution
---

## Avant de commencer

Pour pouvoir comprendre ce tutoriel le plus efficacement possible, nous vous conseillons de vous assurer que vous avez des notions de base en _**JavaScript, SQL**_ et que vous savez créer des services dans Netuno.

Si vous ne savez pas créer de services, rendez-vous sur [Services Web REST](/docs/academy/server/services/rest).

## Création de requêtes

Netuno apporte avec lui des fonctions dédiées à la création de requêtes vers la base de données, et dans ce tutoriel nous allons présenter et décrire brièvement l'effet de chacune ainsi que les bonnes pratiques pour obtenir le meilleur résultat.

### _db.query('SELECT * FROM ...')

Cette fonction permet de retourner les données d'une requête.

```javascript
_out.json(
  _db.query('SELECT * FROM nom_table')
)
```

> Notez que la fonction _out.json() permet de visualiser les données du service à l'écran lorsqu'on l'appelle dans le navigateur

Cette fonction permet également l'acceptation d'arguments, ceux-ci étant passés directement lors de l'appel au service, par exemple, imaginons que nous avons le service _selectionner-tous.js_, l'appel à celui-ci se fera par _**http://localhost:9000/services/selectionner-tous.netuno**_ où les arguments à passer se placent après l'appel, après un point d'interrogation :

```
http://localhost:9000/services/selectionner-tous.netuno?argument1=1&argument2=nom
```

> Notez que pour envoyer plusieurs arguments, il suffit de les séparer par une esperluette (&)

### Requête avec paramètres

Et enfin, il suffit de déclarer cette variable dans la requête de la manière suivante :

```javascript
_out.json(
    _db.query(
        'SELECT * FROM nom_table WHERE id = ? AND nom = ?', 
        _req.getInt("argument1"), _req.getString("argument2")
    )
)
```

> À la place des '?' (points d'interrogation), le paramètre correspondant sera injecté selon son ordre.

## Requête avec paramètres et types de PostgreSQL et H2DataBase

Cependant H2Database et PostgreSQL prennent en charge une syntaxe de conversion simple, et nous pouvons ainsi attribuer des types aux paramètres de la manière suivante :

```javascript
_out.json(
  _db.query(
    'SELECT * FROM nom_table WHERE id = ?::int AND nom = ?::varchar', 
    _req.getInt("id"), _req.getString("nom")
  )
)
```

## Types de paramètres de H2Database et PostgreSQL

Comme vous avez pu le remarquer précédemment, lorsque l'on souhaite exécuter une requête avec des arguments, il faut définir leur type. Voici maintenant une liste de tous les types de variables et le type le plus adapté à chacun :

* Adapté aux paramètres de nombres entiers :
    * **?::int**
* Adapté aux paramètres de nombres décimaux :
    * **?::float**
 * Adapté aux paramètres d'identifiant unique global/universel plus connus sous le nom de guids ou uuid :
    * **?::uuid**
 * Adapté aux paramètres de texte générique, chaînes de caractères :
    * **?::varchar**
    * **?::text**
 * Adapté aux paramètres de type date :
    * **?::date**
 * Adapté aux paramètres de type heure :
    *  **?::time**
 * Adapté aux paramètres avec date et heure :
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Cette fonction permet d'exécuter une commande de base de données, comme des updates, des inserts et des deletes.

Retourne le nombre d'enregistrements affectés par la commande exécutée.

```javascript
// Exemple d'Insertion :
const nEnregistrementsInseres = _db.execute(
    "INSERT INTO nom_table(id, actif, nom) " + 
    "VALUES(nextval('nom_table_id'), ?::int, ?::varchar)", 
    1, nom
)

// Exemple de Mise à jour :
const nEnregistrementsModifies = _db.execute(
    "UPDATE nom_table SET nom = ?::varchar WHERE id = ?::int",
    _req.getString("nom"), _req.getInt("id")
)

// Exemple de Suppression :
const nEnregistrementsSupprimes = _db.execute(
    "DELETE FROM nom_table WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Remarque :** Lorsque vous effectuez un insert, vérifiez que le champ actif est égal à 1, sinon il n'apparaîtra pas dans le résultat. 

## Exemple d'interaction avec les données

Nous allons maintenant présenter les normes conseillées pour obtenir les meilleurs résultats possibles.

## Première requête

Voyez ci-dessous comment obtenir la première ligne de la requête, ou null s'il n'y a aucune ligne obtenue.

```javascript
// Sélectionner les données :
const resultatBd = _db.queryFirst(
    'SELECT nom FROM nom_table WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!resultatBd) {
    // Code d'état HTTP :
    _header.status(404)
    // Indication de l'erreur :
    _out.json(
        _val.map()
            .set('erreur', 'id-non-trouve')
    )
    // Termine l'exécution du service :
    _exec.stop()
}
```

## Vérifier le nombre d'enregistrements

Lorsque vous effectuez une sélection dans la base de données dont le résultat est unique, pour accéder aux données, il convient de procéder de la **manière suivante** :

Notez que ceci n'est qu'un simple exemple qui garantit qu'au moins 1 résultat est retourné et évite l'erreur s'il n'y a aucun résultat.

```javascript
// Sélection des données :
var resultatsBd = _db.query(
  'SELECT nom FROM nom_table WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let nom = null;
// Garantit qu'il existe des données, et le 
// symbole supérieur (resultat.length > 1) peut être utilisé 
// dans le cas où il y a plus d'un enregistrement :
if (resultatsBd.size() >= 1) {
  // Pour accéder directement à la valeur du nom, il suffit de :
  nom = resultatsBd.get(0).getString('nom');
}
```

## Itération en boucle des enregistrements

Si le résultat de la sélection est **multiple**, vous pouvez utiliser la boucle 'for' pour obtenir les données de la manière suivante :

```javascript
// Exécuter la requête
const resultatsBd = _db.query('SELECT id, nom FROM nom_table');

// Initialiser la variable pour qu'elle puisse recevoir des valeurs
const elements = _val.init();

// Itération sur tous les résultats pour recevoir chaque valeur séparée
for (const resultatBd of resultatsBd) {
    elements.push(
        _val.map()
            .set("uid", resultatBd.getString("uid"))
            .set("nom", resultatBd.getString("nom"))
    );
}

// Envoie dans la sortie de données la nouvelle liste de données :
_out.json(elements);
```

Si vous avez des questions, n'hésitez pas à nous contacter, voir les indications dans le pied de page de ce site web.

Bon développement !