---
id: server
title: Serveur
sidebar_label: Serveur
---

Développement du backend et de l'API.

## Dossier du serveur

Le dossier `📂 server` contient un ensemble de fichiers et de dossiers qui forment le backend de l'application.

Tout ce qui se trouve dans le dossier `📂 server` est utilisé dans le traitement du serveur backend, comme les intégrations, l'API,
la base de données, la sécurité et l'authentification, les Cron Jobs, entre beaucoup d'autres.

## Structure du dossier

Dans le dossier `📂 server` se trouve la structure suivante :

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Actions

Dans `📂 actions`, on peut ajouter des actions personnalisées sur mesure (_hooks_) dans les opérations CRUD des formulaires
générés automatiquement pour le backoffice ; selon la structure de données, beaucoup d'interventions sur les données peuvent être
effectuées ici.

Par exemple, lorsqu'on supprime un client, il est nécessaire de supprimer toutes ses commandes, ou lorsqu'on crée un nouveau produit, il doit
être intégré avec un autre système. Enfin, tout développement lié directement aux données peut être effectué
ici.

Les actions sont inspirées des `triggers` de base de données, mais au niveau de l'exécution du code.

Il est donc possible de programmer des opérations spécifiques lors de la création, de la modification et de la suppression de données.

## Composants

Les `📂 components` sont utilisés pour définir des types personnalisés de champs dans les formulaires de backoffice, qui
peuvent effectuer leur propre manipulation de données.

Des composants peuvent être créés via des scripts pour fournir un nouveau type de champ spécifique dans l'application.

## Core

Le dossier `📂 core` permet l'injection de code dans le flux de traitement des requêtes HTTP.

Il est également utilisé pour partager du code entre les différents services et autres.

Le `_config.js` est exécuté après le chargement de la configuration à chaque requête HTTP ; il est exécuté après le script de
configuration de l'environnement qui se trouve dans le dossier `📂 config` de l'application.

Le `_init.js` sert à injecter une instruction lorsque l'application est initialisée pour la première fois.

### Traitement des requêtes HTTP

Dans le flux de traitement des requêtes HTTP pour toute URL de l'application, les scripts respectifs sont exécutés :

- `_request_start.js` est exécuté lorsque la requête HTTP arrive au serveur de Netuno.
- `_request_url.js` est exécuté lorsque l'URL est traitée par Netuno ; l'URL peut être modifiée vers une autre destination.
- `_request_close.js` est exécuté lorsque la réponse à la requête HTTP est fermée.
- `_request_end.js` est exécuté lorsque la requête HTTP est définitivement terminée.
- `_request_error.js` est exécuté lorsqu'une erreur survient dans le traitement de la requête HTTP.

### Traitement des services d'API

Dans le flux de traitement de tout service d'API de l'application, les scripts suivants sont exécutés :

- `_service_config.js` est exécuté avant de démarrer l'exécution du service ; il sert à définir les configurations
d'exécution du service, entre autres choses. Il permet de définir si le service peut ou non être exécuté, c'est-à-dire un
contrôle de sécurité sur l'accès au service de l'API.
- `_service_start.js` est exécuté dès qu'un service commence à être traité.
- `_service_end.js` est exécuté après la fin du traitement d'un service.
- `_service_error.js` est exécuté lorsqu'une erreur survient dans le traitement d'un service.

## Services - API

C'est dans le dossier `📂 services` que sont créés les services qui forment l'API applicative.

Les services peuvent être écrits dans divers langages : JavaScript, Python, Java, Kotlin, Ruby ou Groovy.

Comme Netuno est polyglotte, tout fichier de script peut être changé pour un autre langage de programmation
pris en charge ; il suffit d'avoir l'extension des fichiers correspondant au langage.

Aucune configuration supplémentaire n'est nécessaire en fonction du langage de programmation utilisé ; il suffit de créer le fichier
du service avec l'extension correcte correspondant au langage de programmation.

## Configuration

Dans le dossier `📂 setup` se trouve le code généré automatiquement par le moteur de Netuno qui définit les schémas de
base de données, et c'est aussi là que nous pouvons placer le chargement de données essentiel au fonctionnement de
l'application.

Le script `_start.js` est exécuté avant de démarrer le traitement de construction de la base de données.

Le script `_end.js` est exécuté après la fin du traitement de construction de la base de données.

En fonction de la construction de la structure de données, Netuno crée ici, dans le dossier `📂 setup`, automatiquement le code
nécessaire pour que toute la structure de données soit recréée dans une nouvelle base de données, ou pour recréer ce qui manque dans
une autre base de données où l'application serait éventuellement exécutée.

 ## Modèles

Le dossier `📂 templates` contient le contenu HTML des pages de backoffice de l'application, qui sont générées par le serveur
de Netuno.

Le dossier `📂 dev` contient le fichier `dashboard.html` qui permet de modifier l'espace de travail en mode
construction du développeur.

Le `dashboard.html` qui se trouve à la racine des templates contient le HTML de l'espace de travail général du backoffice.

### Modèles natifs

Dans le dossier `📂 _`, tout modèle général peut être remplacé, c'est-à-dire que les modèles par défaut de Netuno peuvent être
modifiés.

- [Voici les modèles natifs de Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Si le nom des dossiers et/ou des fichiers correspond à celui des modèles natifs dans ce dossier, alors le modèle qui se trouve
dans ce dossier est utilisé à la place du modèle natif.

Autrement dit, il suffit de répliquer la même structure du modèle natif dans le dossier `📂 _` pour le remplacer.

### Scripts

Les modèles de scripts injectent des fichiers de code JavaScript à la fin des pages dans le but suivant :

1. `scripts.html` ajouter du code JavaScript à la fin de la page de **backoffice**.
2. `scripts_dev.html` ajouter du code JavaScript à la fin de la page de l'**espace de construction du développeur**.
3. `scripts_login.html` ajouter du code JavaScript à la fin de la page de **connexion**.

### Styles

Les modèles de styles injectent des fichiers de styles au début des pages dans le but suivant :

1. `styles.html` ajouter du code CSS au début de la page de **backoffice**.
2. `styles_dev.html` ajouter du code CSS au début de la page de l'**espace de construction du développeur**.
3. `styles_login.html` ajouter du code CSS au début de la page de **connexion**.