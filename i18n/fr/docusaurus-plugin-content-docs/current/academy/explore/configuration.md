---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Configurations de base d'une application

Toute application créée dans Netuno possède des configurations spécifiques qui définissent comment elle doit se connecter à des bases de données, des clés d'accès et d'autres paramètres fondamentaux. 

Netuno utilise un système intelligent qui organise ces configurations en fonction de l'environnement dans lequel l'application s'exécute, que ce soit localement, sur un serveur officiel ou sur tout autre.

Les configurations de votre application sont centralisées dans le dossier **config**, situé à la racine de votre projet.

**Chemin par défaut :** `mon-app/config`

### Environnements d'exécution

Dans le dossier config, les fichiers sont nommés en fonction de l'environnement pour lequel ils ont été créés. Netuno charge automatiquement uniquement les fichiers qui correspondent à l'environnement dans lequel il s'exécute à ce moment-là :

- **Développement** : Les fichiers nommés `_development` sont lus uniquement lorsque l'environnement de Netuno est défini sur développement.

- **Production** : Les fichiers nommés `_production` sont lus uniquement lorsque l'environnement de Netuno est défini sur production.


### Types de fichiers de configuration

Pour chaque environnement, vous pouvez utiliser deux types de fichiers qui fonctionnent ensemble :

### JSON

- `_development.json` 
- `_production.json`

**Fonction :** Stocker les définitions et paramétrages statiques.

**Exemple :** Placer les identifiants de base de données, les URL d'API externes et les configurations fixes.

### JS

- `_development.js` 
- `_production.js`

**Fonction :** Exécuter des logiques au moment où la configuration est chargée.

**Exemple :** Modifier dynamiquement les configurations ou effectuer des tâches et des traitements initiaux nécessaires avant que l'application ne s'exécute complètement.


### Définition de l'environnement général

Pour que vos applications sachent quelle configuration utiliser, vous devez indiquer au serveur Netuno dans quel « mode » il fonctionne. Cette configuration globale est définie dans un seul fichier à la racine de Netuno.

1. **Localisez le fichier de configuration global :** Allez dans le dossier racine où Netuno a été installé. Trouvez et ouvrez le fichier appelé `config.js`.
2. **Trouvez la variable d'environnement :** Dans le fichier, recherchez la propriété `config.env`.
3. **Définissez l'environnement souhaité :** Modifiez la valeur de la variable en fonction de l'environnement que vous souhaitez activer. 


#### Environnement de développement
Utilisé pendant que vous programmez et testez sur votre propre machine.

```javascript
// Dans le fichier ./config.js à la racine de Netuno
config.env = 'development'
```

#### Environnement de production
Utilisé lorsque votre projet est finalisé et s'exécute sur le serveur officiel pour les utilisateurs.

```javascript
// Dans le fichier ./config.js à la racine de Netuno
config.env = 'production'
```

#### Autres environnements (personnalisés)

Netuno est flexible et vous permet de créer des noms d'environnements personnalisés, par exemple : `test`, `homologation` ou `staging`.

```javascript
// Dans le fichier ./config.js à la racine de Netuno
config.env = 'test'
```

> La configuration de l'application doit commencer par `_`, avoir l'extension `.json` et également un fichier avec l'extension `.js`, tous deux du même environnement.

## Dépôt Git

Lorsque vous utilisez Git pour versionner le code de votre application, il est essentiel de garantir la sécurité de vos données. 

Les fichiers de configuration contiennent généralement des informations sensibles, comme des mots de passe de base de données, des clés d'API privées, etc. C'est pourquoi **vous ne devez jamais envoyer les fichiers de configuration réels vers le dépôt**.

Pour garantir que vos mots de passe ne fuient pas et, en même temps, garder le projet documenté pour les autres développeurs, suivez ces deux étapes :

### 1. Masquez les fichiers réels

À la racine de votre application, ouvrez (ou créez) le fichier appelé `.gitignore`. Ajoutez les chemins de vos fichiers de configuration `.json` pour que Git les ignore complètement.

**Exemple de ce qu'il faut ajouter dans `.gitignore` :**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Fichier de configuration d'exemple

Créez un fichier d'exemple avec les données nécessaires pour que les nouveaux développeurs configurent facilement le projet.

- Allez dans le dossier config/ de votre application.
- Créez un fichier appelé `exemple.json`.
- Copiez la structure de votre `_development.json` dedans, en ne laissant que les noms des champs.

Voici à quoi doit ressembler votre **config/exemple.json** :

```json
{
  "database": {
    "host": "METTEZ_LE_HOTE_ICI",
    "user": "VOTRE_UTILISATEUR",
    "password": "VOTRE_MOT_DE_PASSE"
  }
}
```

#### Comment accéder aux configurations dans le code

Après avoir défini vos variables et clés dans les fichiers de configuration (comme `_development.json`), vous devrez les utiliser dans la logique de votre application — par exemple, lors de la création d'un service qui se connecte à une API et a besoin d'un *token* d'accès enregistré. 

Dans Netuno, ces configurations peuvent être accessibles via la ressource native `_app`.

#### Comment récupérer les données

Dans tout code exécuté par le serveur (comme dans le dossier `server/services/`), vous utiliserez la fonction `_app.config()` pour récupérer les valeurs se trouvant dans votre fichier de configuration actif.

Pour comprendre comment le lien est fait, imaginez que dans votre fichier de configuration (`config/_development.json`) vous ayez défini ce qui suit :

```json
{
  "nom": "Mon Application",
  "version": 2
}
```
 
 Pour récupérer la valeur de la clé "nom" et l'imprimer dans la console (log) du serveur, vous utiliseriez le code suivant dans votre service .js :

```javascript
// 1. Netuno va dans le fichier JSON, cherche la clé "nom" et récupère sa valeur.
// 2. Ensuite, il stocke cette valeur dans la variable JavaScript que nous appelons 'nomDeLApp'.
let nomDeLApp = _app.config().getString("nom");

// 3. Affiche le contenu de notre variable dans le terminal de Netuno : "Mon Application"
_log.info(nomDeLApp);
```

## Configurations personnalisées

En plus des configurations par défaut de la base de données et du serveur, vous pouvez créer vos propres variables de configuration. 

C'est très utile pour définir des règles métier, comme par exemple « quantité maximale d'éléments par page » ou « intervalle d'envoi d'e-mails », sans avoir à modifier le code de l'application à chaque fois que ces règles changent.

Ces variables sont stockées dans le bloc `"settings"` de vos fichiers de configuration JSON, comme `_development.json` ou `_production.json`.  

### Structure du JSON et visibilité (Public vs Privé)

Lors de la création de vos configurations, il est essentiel de séparer ce que l'interface utilisateur (Frontend) peut voir et ce qui doit rester protégé uniquement sur le serveur (Backend).

* **Variables privées :** Elles se trouvent dans le bloc `"settings"`. Seul le serveur y a accès.
* **Variables publiques :** Elles se trouvent dans le sous-bloc `"public"`. Elles sont envoyées à l'interface utilisateur (dossier `ui`), de la zone administrative, comme dans le développement de tableaux de bord.

**Exemple de structuration de votre fichier `.json` :**

```json
{
  ...
  "settings": {
    "public": {
      "elementsParPage": 10
    },
    "intervalleEmails": 10
  }
}
```

### Comment accéder aux configurations dans le code
La façon de récupérer ces données change selon l'endroit où vous programmez :

**1. Dans le serveur / Backend (Services)**

Pour accéder aux configurations générales ou privées, utilisez la ressource `_app.settings()` dans votre code serveur (fichiers .js dans le dossier server).  

```javascript
// Accède à la variable privée "intervalleEmails"
const intervalleEmails = _app.settings().getInt("intervalleEmails");

_log.info("L'intervalle défini est de : " + intervalleEmails);
```

**2. Dans l'interface / Frontend (UI)**

Lors du développement de l'interface (fichiers du dossier `ui`), vous pouvez accéder à tout ce qui a été défini dans le bloc "public". Pour cela, utilisez l'objet global `netuno.config.app.settings`.

```javascript
// Accède à la variable publique "elementsParPage" dans le frontend
const elementsParPage = netuno.config.app.settings.elementsParPage;

console.log("Affichage de " + elementsParPage + " éléments dans le tableau.");
```
## Conclusion

Le système de configuration de Netuno offre flexibilité et sécurité structurelle à votre application. Grâce à lui, il est possible de :

* **Gérer plusieurs environnements :** Créer et prendre en charge différents contextes d'exécution (développement, production, etc.) avec des paramétrages indépendants.
* **Personnaliser les variables :** Utiliser le bloc `settings` pour ajouter des configurations spécifiques à votre activité. 
* **Séparer les responsabilités :** Isoler et protéger les configurations réservées au backend de celles qui doivent être accessibles dans le frontend.