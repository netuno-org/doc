---
id: services
title: Services
sidebar_label: Services
---

Les services Web REST dans Netuno sont des scripts JavaScript exécutés côté serveur (Back-end) qui permettent d'interagir directement avec la base de données de l'application. Grâce à eux, il est possible de :

* Lire des données de la base de données 
* Insérer de nouveaux enregistrements 
* Mettre à jour des données existantes 
* Supprimer des données 
* Exécuter des logiques complexes impliquant des calculs ou du traitement de données.
* Intégrer avec des systèmes externes.

Chaque service est accessible via une URL (endpoint), ce qui permet aux interfaces web (Front-end), aux applications mobiles ou à d'autres systèmes externes de consommer les données de votre application de manière sécurisée et standardisée.

#### Prérequis

* Avoir des notions de base en _**JavaScript, React.js**_ et _**HTML**_.
* Une familiarité avec SQL et la structure des dossiers d'une application. 
* Il est recommandé d'avoir des connaissances de base en **Formulaires**, **Champs** et **Relations**. 

Si vous avez des questions sur ces étapes, consultez :

* [Formulaires](/docs/academy/ui/forms)
* [Champs](/docs/academy/ui/fields)
* [Relations entre formulaires](/docs/academy/ui/relationships-between-forms)



## Premiers pas  

Nous utiliserons une application d'enregistrement des heures de travail, dont l'objectif est de calculer le total d'heures effectuées par chaque travailleur.

**Structure de l'application :**

![structure-application-fr.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
Le champ **id** est créé et géré automatiquement par Netuno dans toutes les tables, il n'est pas nécessaire de le définir manuellement.
:::

Les services d'une application Netuno se trouvent dans le dossier **server/services/**.

#### Structure des dossiers

```text
mon-app/
└── server/
    └── services/
        ├── travailleurs.js   ← fichier de service
        └──... 
```

## Créer un service

Dans le dossier **server/services/**, créez un nouveau fichier qui définira l'URL de votre service. Pour cet exemple, nommez le fichier `travailleurs.js`.

:::tip
- Utilisez uniquement des lettres **minuscules**.
- Si le nom est composé, séparez les mots par un **trait d'union (-)**.
- Exemples : **travailleurs.js**, **rapport-heures.js**, **enregistrement-entrees.js**.
::: 


## Consulter la base de données

Netuno met à disposition l'objet global **_db** pour interagir nativement avec la base de données. 

Pour exécuter une requête SQL, nous utilisons la méthode `_db.query()`.


```javascript
// Exécute une requête SQL qui regroupe le total d'heures par travailleur
const dbEnregistrements = _db.query(`
    SELECT DISTINCT
        travailleur.nom, SUM(DATEDIFF(HOUR, enregistrement.debut, enregistrement.fin)) AS total
    FROM travailleur INNER JOIN enregistrement
        ON travailleur.id = enregistrement.travailleur_id
    WHERE travailleur.active = true AND enregistrement.active = true
    GROUP BY travailleur.nom
    ORDER BY total ASC
`);
```

:::note Comprendre la requête SQL

* **INNER JOIN** : Joint les tables travailleur et enregistrement en utilisant la clé étrangère travailleur_id.

* **DATEDIFF(HOUR, debut, fin)** : Calcule la différence en heures entre l'entrée et la sortie.

* **SUM(...) AS total** : Additionne toutes les heures traitées de chaque travailleur.

* **WHERE ... active = true** : Filtre la recherche pour ne considérer que les travailleurs et les enregistrements qui n'ont pas été supprimés (actifs).

* **GROUP BY travailleur.nom** : Regroupe les sommes par le nom de chaque travailleur.

* **ORDER BY total ASC** : Trie le résultat final du plus petit au plus grand nombre d'heures travaillées.
:::

## Traiter les données

La méthode `_db.query()` retourne les données dans un format interne de Netuno. 

Pour envoyer une réponse propre au format JSON, il est nécessaire de transformer ces données en utilisant les objets globaux **_val.list()** (pour les tableaux) et **_val.map()** (pour les objets).

```javascript
// Crée une liste vide pour stocker les données traitées
const liste = _val.list();

// Itère sur chaque enregistrement retourné par la requête SQL
for (const dbEnregistrement of dbEnregistrements) {
    liste.add(
        _val.map()
            .set("nom", dbEnregistrement.getString("nom"))   // Extrait le nom en tant que texte
            .set("total", dbEnregistrement.getInt("total"))    // Extrait le total en tant qu'entier
    );
}
```
### Méthodes utilisées

| Ressource | Description |
|---------|-----------|
| **_val.list()** | Crée une liste (équivalent à un Array en JS). |
| **_val.map()** | Crée un objet clé-valeur (équivalent à un Object ou JSON). |
| **.add(...)** | Ajoute un nouvel élément à la fin de la liste. |
| **.set("clé", valeur)** | Définit une nouvelle propriété et sa valeur correspondante dans le map. |
| **.getString("colonne")** | Extrait la valeur de la colonne spécifiée formatée en texte (String). |
| **.getInt("colonne")** | Extrait la valeur de la colonne spécifiée formatée en nombre entier (Integer). |

## Retour des données 

On utilise l'objet **_out** pour envoyer la liste traitée au client au format JSON.

```javascript
// Envoie la liste comme réponse HTTP au format JSON
_out.json(liste);
```

## Exemple pratique

Dans cette étape finale, nous consolidons tous les concepts appris pour créer un service fonctionnel. 

Le code complet ci-dessous effectue une requête à la base de données pour calculer le total d'heures travaillées et retourne ces données formatées en JSON.

```javascript
// 1. Consulte le total d'heures effectuées par chaque travailleur actif
const dbEnregistrements = _db.query(`
    SELECT DISTINCT
        travailleur.nom, SUM(DATEDIFF(HOUR, enregistrement.debut, enregistrement.fin)) AS total
    FROM travailleur INNER JOIN enregistrement
        ON travailleur.id = enregistrement.travailleur_id
    WHERE travailleur.active = true AND enregistrement.active = true
    GROUP BY travailleur.nom
    ORDER BY total ASC
`);

// 2. Crée la structure de données pour la réponse
const liste = _val.list();

// 3. Traite et mappe les résultats
for (const dbEnregistrement of dbEnregistrements) {
    liste.add(
        _val.map()
            .set("nom", dbEnregistrement.getString("nom"))
            .set("total", dbEnregistrement.getInt("total"))
    );
}

// 4. Retourne les données au format JSON
_out.json(liste);
```

### Accéder au service

Après avoir créé et configuré votre service dans Netuno, il sera prêt à être utilisé et testé directement dans le navigateur ou intégré à d'autres applications.

#### Modes d'accès

Le service peut être consommé en utilisant :

- **Navigateur :** Pour des tests rapides de méthodes GET.

- **Clients HTTP :** Des outils comme Postman, Insomnia ou Thunder Client.

- **Front-end :** Via des requêtes fetch ou des bibliothèques comme Axios.

#### Structure de l'URL

Par défaut, Netuno mappe automatiquement les fichiers créés dans le dossier de services vers des adresses web.

Si vous exécutez localement sur le port par défaut, l'adresse suivra ce modèle :

http://localhost:9000/services/travailleurs



:::info Comment fonctionne le routage ?
Netuno utilise un système de routage automatique basé sur le système de fichiers :

**Dossier source :** Tous les fichiers dans server/services/ deviennent des routes.

**Mappage :** Le fichier **travailleurs.js** est converti en endpoint **/services/travailleurs**.

**Extensions :** Notez que l'extension **.js** est omise dans l'URL. Optionnellement, on peut utiliser le suffixe **.netuno** (ex. : /services/travailleurs.netuno), mais l'accès sans extension est le standard recommandé car plus propre.
:::

**Exemple de réponse HTTP :**
S'il existe des données compatibles dans votre base de données, la réponse renvoyée par le serveur sera similaire à celle-ci :

```json
[
    {
        "nom": "Leonor Santos",
        "total": 40
    },
    {
        "nom": "Carlos Alves",
        "total": 35
    },
    {
        "nom": "Maria Oliveira",
        "total": 45
    }
]
```

## Objets globaux du système

Pendant le développement de services dans Netuno, nous utiliserons fréquemment des objets natifs qui facilitent la communication avec la base de données, le contrôle des requêtes et la sortie d'informations.

Ces objets sont des instances préconfigurées et prêtes à l'emploi dans vos scripts serveur **(fichiers .js)**. Ils éliminent le besoin d'importer des bibliothèques externes pour des tâches fondamentales comme les requêtes SQL ou la lecture de paramètres.

| Objet | Description |
|--------|-----------|
| **_db**| Exécuter des opérations de base de données (query, insert, update, delete). |
| **_val** | Création et manipulation de structures de données (list, map). |
| **_out** | Envoi de réponses à l'utilisateur (JSON, HTML...). |
| **_req** | Accès aux paramètres envoyés dans la requête de l'utilisateur (GET, POST). |
| **_log**| Enregistrement des messages d'erreur ou de débogage dans la console du serveur. |



Si vous rencontrez des difficultés ou avez des suggestions d'amélioration, contactez-nous.

Notre équipe et notre communauté sont prêtes à vous aider.

Bon développement !