---
id: cron-jobs
title: Cron Jobs - Services planifiés
sidebar_label: Cron Jobs
---

## Avant de commencer

Avant de continuer, assurez-vous d'avoir des notions de base en _**JavaScript**_ et de connaître les bases de Netuno grâce au pas-à-pas disponible sur l'[Académie](/docs/academy/overview).

## Introduction

Il est courant de devoir exécuter des tâches périodiquement, c'est-à-dire qu'il est parfois nécessaire d'envoyer des données vers un autre système, d'importer des données depuis un autre système, d'envoyer un e-mail, de valider des enregistrements en base de données, et bien plus encore...

Sous Linux/UNIX/Mac, il existe le service Cron avec le fameux fichier de configuration `crontab`, tandis que sous Windows il existe le Task Manager (_Gestionnaire des tâches_).

Et dans Netuno, les Cron Jobs sont déjà intégrés, ce qui permet d'éviter des configurations externes.

Ce type d'opérations périodiques est connu sous le nom de Cron Jobs ou, en français, de services planifiés.

Chaque application Netuno peut avoir de nombreux Cron Jobs, et les Cron Jobs de Netuno peuvent exécuter aussi bien des services et des URLs internes que des URLs externes.

> Pour plus d'informations, consultez la documentation de la ressource [cron](/docs/library/resources/cron).

## Comment ça fonctionne

Chaque application dispose de la configuration de ses propres services planifiés (**cron jobs**) avec leur configuration d'exécution respective.

Pour simplifier, chaque service planifié est un **job** à part, qui possède sa propre configuration d'exécution, pouvant être exécuté chaque minute, toutes les 5 minutes, toutes les heures, un jour et une heure précis de la semaine, etc... il dispose aussi de l'URL qui sera appelée au moment de son exécution.

> Netuno utilise la bibliothèque <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> pour gérer l'exécution des services planifiés. La configuration des règles de temporisation est propre à cette bibliothèque.

Ainsi, l'exécution de chaque job passe par l'exécution d'une URL (_adresse web, lien_), qui peut être externe ou interne à l'application elle-même. S'il s'agit d'un lien externe, il peut provenir d'une autre application ou être une URL externe quelconque sur Internet, sur le réseau ou sur l'ordinateur.

![Diagramme Cron](/docs/assets/academy/server/cron.svg)

Le graphique ci-dessus montre que Netuno contient 2 applications, chacune ayant configuré 2 jobs (_services planifiés_), qui sont exécutés à des moments différents, selon une configuration quelconque.

Le comportement d'exécution qui se produira est le suivant :

- App 1 lance 2 jobs :
  - Job 1 : Exécute une URL de service interne de l'App 1 elle-même.
  - Job 2 : Exécute une URL externe, publique.
- App 2 lance 2 jobs :
  - Job 3 : Exécute une URL de service interne de l'App 2 elle-même
  - Job 4 : Exécute une URL de service de l'App 1.

> Les applications doivent placer les services exécutés par les Cron Jobs dans le dossier :
> - 📂 `server/services/jobs`

Chaque URL est exécutée avec la méthode HTTP POST. Dans la configuration du job, il est possible d'ajouter des paramètres supplémentaires, ainsi qu'une clé secrète pour éviter qu'elle soit exécutée en dehors du contexte contrôlé.

## Configuration

La configuration des services planifiés s'effectue dans le fichier de configuration de l'application, selon l'environnement.

> La configuration ne doit jamais commencer par `*`, cela provoquerait une exécution chaque seconde, générant ainsi des complications de performance avec un effet boule de neige si le traitement venait à prendre plus d'une seconde.

Pour ce faire, naviguez dans l'application que vous développez jusqu'au fichier de configuration d'environnement. Dans cet exemple, nous allons utiliser le fichier d'environnement de développement situé dans :

- 📂 `config/_development.json`

Vérifiez qu'il n'existe pas déjà de configurations pour le Cron ; si ce n'est pas le cas, ajoutez à la fin du fichier de configuration (au format JSON) les paramètres de configuration :

```
{
    ...
    "cron": {
        "secret": "m0n-S3cr3t",
        "jobs": [
            {
                "name": "mon-job",
                "config": "0 30 12 * * ?",
                "url": "http://mon-app.local.netu.no:9000/services/jobs/mon-job"
            },
            {
                "name": "mon-job",
                "config": "0 0/2 * * * ?",
                "url": "http://mon-app.local.netu.no:9000/services/jobs/mon-autre-job",
                "params": {
                    "secret": "m0n-Au7r3-S3cr3t",
                    "type": "client"
                }
            }
        ]
    },
    ...
}
```

Dans cette configuration, le premier job sera exécuté tous les jours à 12 h 30.

Et le second job s'exécutera toutes les 2 minutes.

##### Jobs

La liste des services planifiés que nous avons dans l'application ; comme il s'agit d'un tableau, nous pouvons avoir plusieurs services configurés.

##### Secret

C'est un paramètre de clé de sécurité qui protège le service, afin qu'il ne soit exécuté que lorsqu'il reçoit ce paramètre avec une valeur exactement identique.

En effet, les `jobs` sont des services publics et, pour éviter qu'ils soient exécutés de l'extérieur, ils contiennent cette protection.

##### Name

Le nom qui identifie le service en interne, lequel pourra être utilisé pour effectuer des manipulations de gestion, comme arrêter et reprendre.

##### Config

La configuration de l'expression de temporisation du service, c'est-à-dire les règles de sa planification.

> La configuration ne doit jamais commencer par `*`, cela provoquerait une exécution chaque seconde, générant ainsi des complications de performance avec un effet boule de neige si le traitement venait à prendre plus d'une seconde.

Consultez ci-dessous les expressions prises en charge.

##### URL

L'adresse qui sera exécutée périodiquement.

##### Params

Ce sont les paramètres transmis à l'URL lors de son exécution ; l'URL est exécutée avec la méthode **HTTP POST**, et il est ainsi possible d'ajouter des paramètres supplémentaires comme le _type_ dans l'exemple ci-dessus, ou même de spécifier une autre clé secrète.

### Formats pris en charge des expressions Cron

|NOM DU CHAMP | OBLIGATOIRE | VALEURS ACCEPTÉES | CARACTÈRES SPÉCIAUX AUTORISÉS |
| ------- |:------:|:-----------:|--------------|
| Secondes | OUI | 0-59 | , - * / |
| Minutes | OUI | 0-59 | , - * / |
| Heures | OUI | 0-23 | , - * / |
| Jour du Mois | OUI | 1-31 | , - * ? / L W |
| Mois | OUI | 1-12 ou JAN-DEC | , - * / |
| Jour de la semaine | OUI | 1-7 ou SUN-SAT | , - * ? / L # |
| Année | NON | vide, 1970-2099 | , - * / |

##### Exemples d'expressions Cron

|EXPRESSION | SIGNIFICATION |
| ------- |------|
| 1 * * * * ? | S'exécute à la seconde numéro 1 de chaque minute. |
| 0 0 12 * * ? | Démarre à 12 h 00 tous les jours |
| 0 15 10 ? * * | Démarre à 10 h 15 tous les jours |
| 0 15 10 * * ? | Démarre à 10 h 15 tous les jours |
| 0 15 10 * * ? * | Démarre à 10 h 15 tous les jours |
| 0 15 10 * * ? 2005 | Démarre à 10 h 15 tous les jours pendant l'année 2005 |
| 0 * 14 * * ? | Démarre chaque minute à partir de 14 h 00 et se termine à 14 h 59, tous les jours |
| 0 0/5 14 * * ? | Démarre toutes les 5 minutes à partir de 14 h 00 et se termine à 14 h 55, tous les jours |
| 0 0/5 14,18 * * ? | Démarre toutes les 5 minutes à partir de 14 h 00 et se termine à 14 h 55. Ensuite, démarre toutes les 5 minutes à partir de 18 h 00 et se termine à 18 h 55, tous les jours |
| 0 0-5 14 * * ? | Démarre chaque minute à partir de 14 h 00 et se termine à 14 h 05, tous les jours |
| 0 10,44 14 ? 3 WED | Démarre à 14 h 10 et à 14 h 44 chaque mercredi du mois de mars. |
| 0 15 10 ? * MON-FRI | Démarre à 10 h 15 chaque jour ouvré de la semaine (du lundi au vendredi) |
| 0 15 10 15 * ? | Démarre à 10 h 15 le 15 de chaque mois |
| 0 15 10 L * ? | Démarre à 10 h 15 le dernier jour de chaque mois |
| 0 15 10 L-2 * ? | Démarre à 10 h 15 l'avant-dernier jour de chaque mois |
| 0 15 10 ? * 6L | Démarre à 10 h 15 le dernier vendredi de chaque mois |
| 0 15 10 ? * 6L 2002-2005 | Démarre à 10 h 15 chaque dernier vendredi de chaque mois pendant les années 2002, 2003, 2004 et 2005 |
| 0 15 10 ? * 6#3 | Démarre à 10 h 15 le troisième vendredi de chaque mois |
| 0 0 12 1/5 * ? | Démarre à 12 h 00 tous les 5 jours de chaque mois, à partir du premier jour de chaque mois. |
| 0 11 11 11 11 ? | Démarre chaque 11 novembre à 11 h 11. |

> La configuration ne doit jamais commencer par `*`, cela provoquerait une exécution chaque seconde, générant ainsi des complications de performance avec un effet boule de neige si le traitement venait à prendre plus d'une seconde.

## Service

Les services planifiés doivent être programmés dans le dossier :

- 📂 `server/services/jobs`

Netuno exécutera automatiquement ces services et effectue la validation du paramètre `secret` avec la valeur présente dans la configuration.

> Le `secret` sert à ce que le service puisse être exécuté de l'extérieur sans authentification, mais de manière sécurisée.

Le service sera exécuté périodiquement selon le paramétrage défini.

Pour tester manuellement l'exécution du service, il suffit d'exécuter directement l'URL du service et de passer le paramètre `secret`.

Par exemple, via GET :

- http://mon-app.local.netu.no:9000/services/job/mon-job?secret=\*\*\*\*\*

À la place des `*****` à la fin de l'URL, il faudra mettre la valeur réelle configurée de `secret`.

## Exemple

Créez le fichier dans :

- 📂 `server/services/jobs/test.js`

Dans ce fichier de service, placez le code suivant :
```javascript
_log.info("Job de test !")
_out.print("Ok")
```

Dans le JSON de configuration de votre application, ajustez le paramétrage comme suit :

```json
{
    ...
    "cron": {
        "secret": "m0n-S3cr3t",
        "jobs": [
            {
                "name": "test",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/test"
            }
        ]
    },
    ...
}
```

Lorsque vous exécutez le serveur Netuno dans le terminal, le message `Job de test !` commencera à apparaître toutes les 30 secondes.

Si vous ouvrez l'URL dans le navigateur :

- http://localhost:9000/services/jobs/test?secret=m0n-S3cr3t

Il retournera uniquement `Ok` et le message `Job de test !` apparaîtra dans le terminal.

> Dans l'environnement `development`, la validation du `secret` n'a pas d'effet ; vous pouvez donc exécuter sans passer de `secret` et cela fonctionnera, mais dans un autre environnement, comme la production, elle est prise en compte.

## De nombreuses tâches

Lorsqu'il est nécessaire de créer de nombreuses tâches planifiées, il convient d'augmenter le nombre de threads utilisés pour l'exécution parallèle des différentes tâches planifiées.

Cette configuration s'effectue dans le fichier `config.js` situé à la racine de Netuno, en ajoutant la ligne d'exemple :

```javascript
config.cronThreadCount = 10
```

> Par défaut, cette configuration n'autorise que 3 threads.
> 
> Veillez à augmenter le nombre de threads en fonction du nombre de cœurs du CPU.

Utiliser peu de threads pour exécuter de nombreuses planifications en parallèle peut entraîner l'arrêt de l'exécution des tâches planifiées.

Par conséquent, s'il arrive que les tâches restent bloquées après un certain temps, c'est probablement que trop de tâches sont exécutées en parallèle ; il est alors nécessaire d'augmenter le nombre de threads.

## Programmatiquement

Netuno permet de configurer et de contrôler les Cron Jobs programmatiquement.

Cela signifie que, via le code, nous pouvons tout gérer.

### Créer une nouvelle tâche

Pour créer une nouvelle tâche, nous créons sa planification via [`_cron.schedule`](/docs/library/resources/cron#schedule).

Le [`_cron.schedule`](/docs/library/resources/cron#schedule) reçoit les paramètres suivants :

1. Clé d'identification de la tâche : `key`.
2. Configuration du temps de planification pour l'exécution.
3. Adresse du service qui doit être exécuté, c'est-à-dire l'`URL`.
4. Paramètres supplémentaires envoyés lors de l'appel du service.

```javascript
_cron.schedule(
    'ma-tache',
    '0 0/60 * * * ?',
    `/services/jobs/produit-mise-a-jour`,
    _val.map()
        .set('id', 123)
)
```

S'il est nécessaire de créer les tâches automatiquement au démarrage de l'application, cet automatisme peut alors être codé dans le fichier :

- `server/core/_init.js`

Ce fichier est exécuté chaque fois que l'application est initialisée par le serveur Netuno.

### Supprimer une tâche

Pour supprimer une tâche donnée, nous utilisons [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Où `key` est la clé d'identification de la tâche.

Voir l'exemple :

```javascript
_cron.remove('ma-tache')
```

### Lister les tâches

Via [`_cron.schedules()`](/docs/library/resources/cron#schedules), nous pouvons lister toutes les tâches configurées.

Exemple de liste de toutes les tâches planifiées : 

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cl&eacute;</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Param&egrave;tres</td>`)
_out.println(`  <td>Description</td>`)
_out.println(`  <td>Derni&egrave;re Ex&eacute;cution</td>`)
_out.println(`  <td>Prochaine Ex&eacute;cution</td>`)
_out.println(`  <td>Priorit&eacute;</td>`)
_out.println('</tr>')
for (const schedule of list) {
        _out.println('<tr>')
        _out.println(`  <td>${schedule.getString('key')}</td>`)
        _out.println(`  <td>${schedule.getString('url')}</td>`)
        _out.println(`  <td>${schedule.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${schedule.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Mettre en pause les tâches

Via [`_cron.pause(key)`](/docs/library/resources/cron#pause), nous pouvons mettre en pause l'exécution d'une tâche donnée.

Exemple de mise en pause de toutes les tâches planifiées :

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cl&eacute;</td>`)
_out.println(`  <td>Arr&ecirc;t&eacute;</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Remarquez l'utilisation de `_cron.pause` dans l'exemple ci-dessus.

### Reprendre les tâches

Via [`_cron.resume(key)`](/docs/library/resources/cron#resume), nous pouvons reprendre l'exécution d'une tâche donnée.

Exemple de reprise de toutes les tâches planifiées, et affichage du moment où les tâches seront exécutées :

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Cl&eacute;</td>`)
_out.println(`  <td>R&eacute;activ&eacute;</td>`)
_out.println(`  <td>Prochaine Ex&eacute;cution</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(schedule.getString('key'))}</td>`)
    _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Remarquez l'utilisation de `_cron.resume` dans l'exemple ci-dessus.