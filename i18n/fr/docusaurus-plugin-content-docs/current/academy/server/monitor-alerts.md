---
id: monitor-alerts
title: Surveillance et Alertes
sidebar_label: Surveillance et Alertes
---

Gestion des alertes sur l'utilisation du matériel du serveur.

## Introduction

Le serveur Netuno intègre le mécanisme de surveillance des performances qui permet d'analyser l'impact du système logiciel sur la consommation du matériel.

Avec la surveillance, les applications peuvent implémenter des règles d'alerte pour émettre un avertissement lorsqu'un élément atteint un seuil nécessitant une attention.

La surveillance et les alertes portent non seulement sur les données de performance du processus du serveur Netuno lui-même, mais aussi sur l'ensemble du système de l'ordinateur en cours d'exécution.

Cela permet donc une surveillance complète avec un système d'alerte.

## Configuration

La configuration générale permet d'activer l'affichage des données dans les logs généraux de Netuno, et de contrôler l'intervalle d'exécution de la collecte et de l'analyse des indicateurs de performance.

La configuration des alertes est réalisée dans chaque application, et permet d'avoir plusieurs alertes par application.

### Journaux et intervalle général

Netuno conserve les logs de performance dans le dossier `logs` situé dans le dossier racine de Netuno.

C'est dans ce dossier `logs` que se trouvent les fichiers `stats-ANNEE_MOIS_JOUR.json`, ceux-ci sont toujours générés automatiquement selon l'intervalle qui peut être modifié comme indiqué ci-après.

> Pour une meilleure visualisation des fichiers, vous pouvez utiliser le formatage automatique de votre éditeur préféré ou des outils en ligne tels que :
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> Ils peuvent également être ouverts dans **Firefox** qui réalise un excellent formatage.

##### Configuration des logs et de l'intervalle général

Pour activer l'affichage des données de performance dans les logs généraux (`logs/netuno.log`) et dans la **console**, modifiez le fichier `config.js` situé à la racine du dossier Netuno.

Ajoutez la ligne suivante si elle n'existe pas déjà :

```
config.monitorLog = true
```

Vous pouvez également modifier l'intervalle par défaut de **60 secondes**, c'est-à-dire que l'information n'est présentée dans le log que de minute en minute. Pour cela, ajoutez aussi la ligne de code ci-dessous et modifiez la valeur des secondes selon la durée souhaitée :

```
config.monitorInterval = 60
```

> Cet intervalle est général et interfère avec l'intervalle configuré dans les alertes des applications, qui ne sera jamais inférieur à cet intervalle général.

**Redémarrez** le serveur Netuno pour que cela prenne effet.

Les informations de surveillance commenceront à être affichées dans la console, par exemple :

```
2020-11-17 14:56:08,109 INFO  [Thread-13] cli.Monitor - MONITOR
CPU Load: 
	System: 19.1% (+19.1%)
	Process: 3.9% (+3.9%)
Memory: 
	System: 
		Used: 9,525.9MB (58.1% +148.0MB)
		Free: 6,858.1MB (41.9% -148.0MB)
	Process: 
		Total: 384.0MB (9.4% +126.0MB)
		Used: 129.6MB (3.2% +18.9MB)
		Free: 254.4MB (6.2% +107.1MB)
		GC: false
Disk: 
	Used: 465,047.8MB (97.5% +21.3MB)
	Free: 11,854.3MB (2.5% -21.3MB)
```

### Alertes dans les applications

Les alertes sont configurées dans les applications, alors modifiez la configuration de votre application.

C'est-à-dire, dans l'application, dans le dossier `config` à la configuration de l'environnement, dans les fichiers tels que :

- _development.json
- _production.json

Ajoutez la configuration des alertes de surveillance :

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mon-alerte",
                "url": "http://NOM-APP.local.netu.no:9000/services/mon-service-d-alerte"
            }
        ]
    }
...
```

> Ceci est la configuration la plus simplifiée.

Lorsqu'une situation nécessitant une alerte se produit, cette `url` sera appelée et les paramètres de performance seront transmis.

Par défaut, les alertes ont un intervalle de **1 h** pour chaque type d'alerte ; ainsi, l'alerte ne sera déclenchée que si le **Processeur**, la **Mémoire** ou le **Disque** (HD) dépasse la limite de **90 %** de la capacité maximale, et après une heure, une autre alerte sera envoyée.

> En cas d'alertes multiples, l'intervalle est abrégé ; par exemple, si l'alerte de la Mémoire a été déclenchée et que, 20 minutes plus tard, le Disque dépasse aussi les 90 %, alors une nouvelle alerte est déclenchée immédiatement, et l'intervalle d'1 heure recommence.

### Alertes avancées

Ci-dessous se trouve une configuration plus avancée qui permet de modifier l'intervalle et les limites de consommation du **Processeur**, de la **Mémoire** ou du **Disque** (HD) :

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mon-alerte-simple",
                "url": "http://NOM-APP.local.netu.no:9000/services/mon-service-d-alerte"
            },
            {
                "name": "mon-alerte-avancee",
                "url": "http://NOM-APP.local.netu.no:9000/services/mon-service-d-alerte",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "mon-alerte-plus-avancee",
                "url": "http://NOM-APP.local.netu.no:9000/services/mon-service-d-alerte",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": {
                        "system": 90,
                        "process": 90
                    },
                    "memory": {
                        "system": 90,
                        "process": 90
                    },
                    "disk": 90
                }
            }
        ]
    }
...
```

> Les valeurs ci-dessus sont des **valeurs par défaut** !

##### Name

Nom d'identification de l'alerte.

##### Enabled

Permet d'activer et de désactiver l'alerte, par défaut _true_ (actif).

##### Interval

Définit l'intervalle entre les alertes en **secondes**, par défaut _3600 secondes_ (une heure).

##### Threshold

Définit les limites de CPU, Mémoire et Disque (HD).

##### CPU

La limite de consommation CPU à partir de laquelle l'alerte doit être déclenchée.

Permet aussi de définir la limite spécifique pour le _system_ et pour le _process_.

##### Memory

La limite de consommation Mémoire à partir de laquelle l'alerte doit être déclenchée.

Permet aussi de définir la limite spécifique pour le _system_ et pour le _process_.

##### System

Ce sont les limites pour le système d'exploitation en général avec tous les processus en cours d'exécution.

##### Process

Ce sont les limites uniquement pour le processus du serveur Netuno.

##### Disk

La limite de consommation Disque (HD) à partir de laquelle l'alerte doit être déclenchée.

## Paramètres envoyés

Lorsqu'une `url` est invoquée, une alerte est déclenchée parce qu'une limite a été dépassée ; les données de performance de consommation du matériel sont alors envoyées.

L'`url` est exécutée avec la méthode `POST` et le contenu est envoyé en JSON : `Content-Type: application/json`.

Exemple du JSON avec les données envoyées à l'`url` des alertes :

```
{
    "key": "mon-alerte-simple",
    "app": "mon-app",
    "hostname": "mon-ordinateur",
    "timezone": "Europe/Lisbon",
    "started": "2020-11-17 14:55:07.682",
    "moment": "2020-11-17 14:56:08.098",
    "before": {
        ...
    },
    "alerts": [
        {
            "threshold": 90,
            "type": "cpu-system"
        },
        {
            "threshold": 90,
            "type": "disk"
        }
    ],
    "cpu": {
        "cores": 4,
        "vcores": 8,
        "load": {
            "system": 0.91311,
            "process": 0.03945,
            "ticks": [ 575084, 0, 260470, 6796463, 0, 0, 0, 0 ],
            "frequency": {
                "average": 2500000000,
                "max": 2500000000
            }
        }
    },
    "memory": {
        "system": {
            "total": 17179869184,
            "used": 9988640768,
            "free": 7191228416
        },
        "process": {
            "total": 402653184,
            "max": 4294967296,
            "used": 135885832,
            "free": 266767352,
            "gc": false
        }
    },
    "disk": {
        "total": 500068036608,
        "used": 487637929984,
        "free": 12430106624
    }
}
```

### Description des paramètres

##### Key

Le nom (clé) défini dans la configuration de l'alerte dans l'application.

##### App

Le nom de l'application qui a l'alerte configurée et qui provoque son déclenchement.

##### Hostname

Nom de l'ordinateur sur lequel est exécuté le serveur Netuno qui provoque l'alerte.

##### Timezone

Fuseau horaire de l'ordinateur qui exécute le serveur Netuno et qui provoque l'alerte.

##### Started

Date et heure du démarrage du serveur Netuno.

##### Moment

Date et heure du moment où l'alerte a été générée.

##### Before

Informations de l'alerte précédente, elle a exactement la même structure JSON mais avec les données relatives à l'alerte précédemment provoquée.

##### Alerts

Liste des alertes qui ont été déclenchées, où sont précisés le type (_type_) de l'alerte et la limite (_threshold_) qui a été dépassée.

Les types d'alertes sont :

- `cpu-system` : Alerte de consommation CPU du système de l'ordinateur avec tous les processus en cours d'exécution en général.
- `cpu-process` : Alerte de consommation CPU du processus du serveur Netuno.
- `memory-system` : Alerte de consommation Mémoire du système de l'ordinateur avec tous les processus en cours d'exécution en général.
- `memory-process` : Alerte de consommation Mémoire du processus du serveur Netuno.
- `disk` : Alerte du Disque (HD).

##### CPU

Ce sont les données du Processeur qui sont envoyées avec les informations suivantes :

- `cores` : Nombre de processeurs physiques.
- `vcores` : Nombre de processeurs virtuels (threads).
- `load` : Informations sur la charge du processeur :
  - `system` : La charge de traitement du système d'exploitation avec tous les processus en général, la valeur est comprise entre **0** (_0 %_) et **1** (_100 %_).
  - `process` : La charge de traitement du serveur Netuno, la valeur est comprise entre **0** (_0 %_) et **1** (_100 %_).
  - `ticks` : Retourne la charge du processeur dans le système général sous forme de tableau à huit éléments représentant en millisecondes ce qui a été dépensé dans les états suivants : _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) et _Steal_ (7).
  - `frequency` : Fréquence maximale (`max`) du processeur et moyenne de la fréquence utilisée parmi tous les cœurs (`average`), les valeurs sont en _hertz_, donc 2500000000 _Hz_ équivalent à 2,5 _GHz_.

> La division de la fréquence est réalisée de la manière suivante :
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2,5 _GHz_
>
> Hz (_Hertz_), KHz (_Kilohertz_), MGz (_Megahertz_), GHz (_Gigahertz_)

##### Memory

Ce sont les données de la Mémoire qui sont envoyées avec les informations suivantes :

- `system` : Ce sont les informations de consommation de mémoire du système d'exploitation avec tous les processus en général.
  - `total` : Mémoire totale de l'ordinateur.
  - `used` : Mémoire allouée en utilisation.
  - `free` : Mémoire disponible libre.
- `process` : Ce sont les données d'utilisation de la mémoire du processus du serveur Netuno.
  - `max` : Quantité maximale de mémoire pouvant être utilisée par Netuno.
  - `total` : Total de la mémoire réservée (allouée), inclut la mémoire utilisée et « libre ».
  - `used` : Quantité de mémoire réellement utilisée.
  - `free` : Quantité de mémoire libre (réservée) disponible pour être utilisée.
  - `gc` : Si l'exécution du _garbage collector_ (ramasse-miettes) a été invoquée.

> Les valeurs sont en octets, ainsi 17179869184 octets équivalent à 16 gigaoctets.
>
> Comment est réalisée la division :
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_octets_), KB (_kilooctets_), MB (_mégaoctets_), GB (_gigaoctets_)

##### Disk

Ce sont les données d'utilisation du disque dur (HD) qui sont envoyées avec les informations suivantes :

- `total` : Taille totale du disque.
- `used` : Quantité d'espace utilisé sur le disque.
- `free` : Quantité d'espace disponible sur le disque.

> Les valeurs sont en octets, ainsi 500068036608 octets équivalent à 465,72 gigaoctets.
>
> Comment est réalisée la division :
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (_octets_), KB (_kilooctets_), MB (_mégaoctets_), GB (_gigaoctets_)

## Exemple de services d'alerte

Les services de Netuno peuvent être utilisés comme `url` des alertes.

L'envoi d'alertes peut être implémenté par e-mail, SMS, ou même enregistrer les informations dans une base de données.

Tout type d'`url` peut également être utilisé, et ainsi l'alerte peut être déclenchée vers d'autres technologies comme NodeJS, PHP, .NET, Rails, Laravel, Sails, etc.

Dans le cas de Netuno, un service peut être implémenté pour l'envoi d'e-mails en suivant les indications du tutoriel [Envoi d'e-mails](/docs/academy/server/services/sending-emails).

Voici ci-dessous comment implémenter un exemple complet adapté à l'alerte de surveillance.

Avant de commencer, assurez-vous que la configuration SMTP est présente dans la configuration de l'application ainsi que la configuration de la surveillance, par exemple :

```
...
    "smtp": {
        "alerte": {
            "enabled": true,
            "host": "MON.SERVEUR.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Alerte : ",
            "from": "noreply@MON.DOMAINE.com",
            "to": "info@MON.DOMAINE.com",
            "username": "noreply@MON.DOMAINE.com",
            "password": "S3cr3t"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "alerte-email",
                "url": "http://MON-APP.local.netu.no:9000/services/surveillance/alerte"
            }
        ]
    }
...
```

> Assurez-vous d'ajuster les paramètres, en particulier ceux mis en évidence par des valeurs en lettres majuscules.

Le service d'alerte pourra se trouver dans `server/services/surveillance/alerte.js`, avec le code suivant :

```
_log.info("Informations d'alerte de surveillance :\n"+ _req.toJSON())

const processeur = _req.getValues("cpu")
const memoire = _req.getValues("memory")
const disque = _req.getValues("disk")

const chargeCpuSysteme = Math.round(processeur.getValues("load").getFloat("system") * 100)
const chargeCpuProcessus = Math.round(processeur.getValues("load").getFloat("process") * 100)
const memoireSystemeLibre = Math.round(memoire.getValues("system").getLong("free") / 1024 / 1024)
const memoireProcessusLibre = Math.round(memoire.getValues("process").getLong("free") / 1024 / 1024)
const disqueLibre = Math.round(disque.getLong("free") / 1024 / 1024)

let typesSujet = ""
let infosHtml = ""

for (const typeAlerte of _req.getValues("alerts")) {
    if (typesSujet != "") {
        typesSujet += ", "
    }
    if (typeAlerte.getString("type") == 'cpu-system') {
        typesSujet += "CPU du Système"
        infosHtml += `<p>Le processeur du <b>système</b> atteint <b>${chargeCpuSysteme} %</b></p>`
    }
    if (typeAlerte.getString("type") == 'cpu-process') {
        typesSujet += "CPU du Processus"
        infosHtml += `<p>Le processeur du <b>processus</b> atteint <b>${chargeCpuProcessus} %</b></p>`
    }
    if (typeAlerte.getString("type") == 'memory-system') {
        typesSujet += "Mémoire du Système"
        infosHtml += `La mémoire du <b>système</b> ne dispose que de <b>${memoireSystemeLibre} MB</b> libres.`
    }
    if (typeAlerte.getString("type") == 'memory-process') {
        typesSujet += "Mémoire du Processus"
        infosHtml += `La mémoire du processus ne dispose que de <b>${memoireProcessusLibre} MB</b> libres.`
    }
    if (typeAlerte.getString("type") == 'disk') {
        typesSujet += "Disque"
        infosHtml += `Le disque ne dispose que de <b>${disqueLibre} MB</b> libres.`
    }
}

const smtp = _smtp.init("alerte")

smtp.subject += `${_req.getString("hostname")} - ${typesSujet}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${infosHtml}`

smtp.text = "Informations dans la version de contenu HTML de cet e-mail."

smtp.send()
```

> Un e-mail avec les alertes sera envoyé.

Dans ce cas, il a seulement été nécessaire d'alerter sur la situation de l'espace disque, comme on peut le voir dans cet e-mail reçu :

![courriel](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Pour implémenter l'envoi de **SMS**, il existe des exemples dans l'application de **démo**_nstration_ avec l'intégration d'API REST distantes qui permet de s'intégrer à la plateforme SMS de votre choix.