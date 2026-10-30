---
id: cli
title: Ligne de commandes
sidebar_label: Ligne de commandes
---


L'interface en ligne de commande de Netuno est l'outil principal pour gérer votre environnement de développement. Grâce à elle, vous pouvez consulter les informations du système, gérer les applications et configurer le serveur rapidement.

#### Prérequis

- **Terminal :** Vous devez disposer d'un terminal (Invite de commandes, PowerShell ou Bash) ouvert dans le dossier racine où Netuno a été installé.

Voici les commandes initiales pour vérifier si votre environnement est prêt à l'emploi.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `help` | Permet de visualiser toutes les commandes disponibles dans Netuno. |
| `version` | Permet de visualiser la version actuelle de Netuno. |

#### Lister les commandes disponibles

Si vous avez des doutes sur les opérations que vous pouvez effectuer, utilisez la commande d'aide. Elle renvoie une liste complète des fonctions.

```shell
./netuno help
```
#### Afficher la version de Netuno

Il est essentiel de savoir quelle version vous utilisez pour garantir la compatibilité avec des scripts et des modules spécifiques.

```shell
./netuno version
```

## Installer

Avant de commencer le développement, il est nécessaire d'installer le moteur Netuno dans votre environnement. Pour plus d'informations, consultez notre page [Installation](/docs/get-started/installation).

Cette section détaille les paramètres pouvant être utilisés pendant le processus d'installation pour automatiser ou optimiser celui-ci.

| OPTION | DESCRIPTION |
|----------|--------------|
| `checksum` | Met à jour le code de vérification (checksum) de tous les fichiers du paquet installé. |
| `force` | Force le remplacement de tous les fichiers, même si des modifications locales existent. |
| `graal=true/false` | Définit l'utilisation de GraalVM pour obtenir de meilleures performances lors de l'exécution des applications. |
| `path=[Répertoire]` | Définit manuellement le chemin (dossier) où Netuno sera installé. |
| `remove` | Supprime complètement tous les fichiers liés à Netuno du système. |
| `version=[version]` | Sélectionne une version spécifique à installer. Utilisez latest pour la version de développement. |
| `yes` | Répond automatiquement « OUI » à toutes les confirmations, en ignorant les avertissements de perte de données. |

#### Exemple de mise à jour du checksum :

```shell
./netuno install checksum
```

#### Exemple pour forcer toutes les modifications locales :

```shell
./netuno install force
```

#### Exemple de désactivation de GraalVM :

```shell
./netuno install graal=false
```

> GraalVM est activée par défaut et est téléchargée automatiquement lors de l'installation de Netuno.

#### Exemple pour définir le chemin d'installation :

```shell
./netuno install path ='netunoDossier'
```
#### Exemple pour supprimer tous les dossiers de Netuno :

```shell
./netuno install remove
```

#### Exemple pour sélectionner la version de Netuno à installer :

```shell
./netuno install version='latest'
```

##### Exemple pour répondre OUI à toutes les questions :
```shell
./netuno install yes 
```

## Serveur

Après avoir terminé l'installation, démarrez le serveur pour commencer à développer vos applications.

Pour démarrer le serveur avec les configurations par défaut, exécutez la commande ci-dessous dans le dossier racine de Netuno :

```shell
./netuno server
```

> Par défaut, le serveur utilise le port 9000. Dès que le terminal indique que le système est prêt, vous pourrez accéder au panneau de gestion via le lien : http://localhost:9000/

Cette section détaille les paramètres pouvant être utilisés pendant le processus de démarrage du serveur.

OPTION | DESCRIPTION |
|----------|--------------|
| `app=[nom_de_l_app]` | Définit spécifiquement quelle application doit être démarrée |
| `host=[IP/nom de l'hôte]` | Vous permet de modifier le nom d'hôte de Netuno |
| `launch=true/false` | Définit si Netuno doit ouvrir automatiquement le navigateur |
| `npm` | Exécute automatiquement la commande « npm watch » pour compiler le frontend de l'application en temps réel |
| `port=[numéro]` | Définit le port de démarrage du serveur |
| `secret=[mot_de_passe]` | Définit un mot de passe de sécurité pour permettre l'accès à la gestion à distance du serveur |
| `web=[dossier]` | Modifie le dossier racine du projet (web home) prédéfini |

Par défaut, Netuno utilise le dossier **'webapp'** pour stocker tous les fichiers essentiels à son fonctionnement.

**Attention lors de la modification du répertoire :** Si vous utilisez le paramètre web=[dossier] pour changer le nom du dossier racine, rappelez-vous que vous devez également renommer physiquement le dossier dans votre système de fichiers. La commande indique seulement au code de Netuno où chercher les fichiers ; elle ne renomme pas les dossiers automatiquement.

#### Exemple pour démarrer le serveur d'une application spécifique :

```shell
./netuno server app=monapp
```

#### Exemple pour changer le nom de l'hôte (host) :

```shell
./netuno server host=localhost
```

#### Exemple pour définir si Netuno initialise le navigateur automatiquement :

```shell
./netuno server launch=false
```

> Par défaut, Netuno ouvre le navigateur et initialise le lien http://localhost:9000.

#### Exemple pour exécuter npm afin de construire automatiquement le frontend

```shell
./netuno server npm
```

#### Exemple pour changer le port :

```shell
./netuno server port=10000
```

#### Exemple pour définir un mot de passe afin d'accéder à la gestion à distance du serveur :

```shell
./netuno server secret='p#ssw@rd'
```

#### Exemple pour modifier le dossier web par défaut :

```shell
./netuno server web=webapp
```

## Licence

Pour commencer le développement avec Netuno, il est nécessaire d'enregistrer votre environnement.

Pour gérer votre licence, utilisez la commande de base :

```shell
./netuno license
```

> Actuellement, Netuno propose trois modalités de licence : **Community, Standard et Enterprise**.

Cette section détaille les actions disponibles pour configurer ou consulter votre licence.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `create , change` | Démarre le processus pour créer une nouvelle licence ou modifier la licence actuelle |
| `key` | Affiche la clé de licence active dans votre environnement |
| `mail=[votre@mail.com]` | Définit l'adresse e-mail associée au compte de licence |
| `type=[community/standard/enterprise]`  | Définit le type de licence |


#### Exemple pour créer une licence :

```shell
./netuno license create
```

#### Exemple pour visualiser la clé de licence :

```shell
./netuno license key
```
##### Exemple pour définir votre e-mail et votre type de licence :

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## Application

Une fois le serveur configuré et la licence active, vous pouvez étendre votre écosystème en créant de nouvelles solutions.

```shell
./netuno app
```

Les fichiers générés seront automatiquement organisés dans la structure de dossiers de Netuno.

Pour accéder aux fichiers de votre application ou les modifier, parcourez le chemin suivant depuis la racine du système : **webapp / apps / [nom_de_votre_application]**

#### Structure des dossiers

- **webapp** : C'est le dossier racine qui contient tous les fichiers essentiels au fonctionnement de Netuno.

- **apps** : Dossier spécifique où sont stockées toutes les applications développées ou de démonstration.

- **[nom_de_votre_application]** : Le dossier exclusif de l'application que vous venez de créer.

Par défaut, Netuno dispose d'une application de démonstration qui est affichée lorsque le serveur Netuno est démarré.

| OPTION    | DESCRIPTION    |
|----------|--------------|
| `database=[nom_de_la_base_de_donnees]` | Définit le nom de la base de données |
| `engine=[nom]` | Définit le type de la base de données |
| `host=[adresse]` | Définit l'adresse de la base de données. |
| `language=[langue]`  | Définit la langue de l'application |
| `locale=[langue]` | Définit la langue locale de l'application |
| `name=[nom]`  | Permet de créer une application ou de reconstruire une application existante |
| `password=[mot_de_passe]`  | Définit un mot de passe pour la base de données |
| `port=[numéro]`  | Définit le port de la base de données |
| `username=[nom]`  | Définit le nom de l'utilisateur de la base de données |

#### Exemple pour définir le nom de la base de données :

```shell
./netuno app database=employe
```

> Le nom de la base de données peut contenir des chiffres et des lettres ; si le nom comporte plus d'un mot, il doit être séparé par « _ », de la manière suivante.
>
> **Exemple :** employe_db

#### Exemple pour définir le type de base de données :

```shell
./netuno app engine=pg
```
Il existe les types de base de données suivants :
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Exemple pour définir l'adresse du serveur de base de données :

```shell
./netuno app host=localhost
```

#### Exemple pour définir la langue et la locale :

```shell
./netuno app language=pt_PT locale=pt_PT
```
Il existe les langues suivantes :
> - Portugais - pt_PT
> - Brésilien - pt_BR
> - Anglais - en_US
> - Espagnol - es_ES

#### Exemple pour créer une application ou reconstruire une application existante :

```shell
./netuno app name=demo
```

#### Exemple pour définir le mot de passe de la base de données :

```shell
./netuno app password=secret
```

#### Exemple pour définir le port de la base de données :

```shell
./netuno app port=5432
```
Par défaut, les ports correspondent à :  

> - PostgreSQL - **5432**
> - MariaDB - **3306**
> - Microsoft SQL Server - **1433**

#### Exemple pour définir le nom d'utilisateur de la base de données :

```shell
./netuno username=root
```