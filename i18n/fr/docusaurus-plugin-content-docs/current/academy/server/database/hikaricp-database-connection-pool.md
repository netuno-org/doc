---
id: hikaricp-database-connection-pool
title: HikariCP - Pool de connexions à la base de données
sidebar_label: Pool de connexions BDD
---

## Qu'est-ce que c'est

Créer de nouvelles connexions à la base de données exige un certain traitement, notamment lorsqu'il y a authentification.

C'est pourquoi, pour obtenir un meilleur gain de performance, il convient de réutiliser les connexions et de ne pas ouvrir constamment une nouvelle connexion.

Pour résoudre ce problème, on utilise un pool de connexions, ce qui fait que lorsqu'une connexion est libérée, elle n'est pas réellement fermée et détruite ; la connexion est mise en attente pour être réutilisée lorsqu'une nouvelle connexion est nécessaire.

Cela apporte de grands gains de performance et permet également de nombreux paramètres de configuration supplémentaires, y compris le plus connu qui consiste à limiter le nombre maximal de connexions pour éviter une surcharge de la base de données.

## HikariCP

Hikari signifie Lumière en japonais, c'est le plus efficace et largement utilisé dans les applications Java, et il est célèbre pour avoir de loin la meilleure performance.

Le dépôt officiel de HikariCP se trouve ici sur [GitHub](https://github.com/brettwooldridge/HikariCP), consultez les graphiques de performance et les informations sur les configurations.

Netuno utilise HikariCP pour gérer les connexions à PostgreSQL, MariaDB, Microsoft SQL Server et Oracle.

## Configuration

La configuration de HikariCP dans Netuno se fait avec la configuration de la base de données dans les applications.

C'est-à-dire, à l'intérieur de l'application dans le dossier `config` dans la configuration de l'environnement, comme :

- \_development.json
- \_production.json

Dans la section "db", se trouvent les configurations de base de données.

Tant pour la connexion par défaut que pour toute autre, la configuration des paramètres HikariCP peut être effectuée de la même manière.

Ainsi, dans la section default, où se trouvent host, port, name (database), username et password, il suffit d'ajouter d'autres paramètres HikariCP comme :

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "ma_base_de_donnees",
            "username": "mon_utilisateur",
            "password": "mot_de_passe",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

Par exemple, chacune de ces configurations supplémentaires de HikariCP ci-dessus sert à :

* `maximumPoolSize` définit la taille maximale de connexions dans HikariCP, dans cet exemple la limite de connexions sera 25.
* `minimumIdle` définit le nombre minimum de connexions en attente dans la file d'attente pour être utilisées.
* `idleTimeout` est le temps pendant lequel la connexion peut rester en attente.
* `maxLifetime` est la durée de vie maximale de la connexion.

> Les configurations de HikariCP doivent être cohérentes avec la configuration du moteur de base de données.
> Par exemple, le nombre maximal de connexions et les délais ne doivent jamais dépasser ce qui est défini dans le moteur de base de données.

Tout autre paramètre de HikariCP peut être configuré de la même manière, il suffit d'ajouter les paramètres de configuration souhaités.

## Paramètres

Ci-dessous se trouve la liste des paramètres que Netuno permet de configurer pour HikariCP.

Tout autre paramètre de configuration de HikariCP est soit prédéfini automatiquement par Netuno, soit non applicable.

### Fréquemment utilisés

##### autoCommit

Cette propriété contrôle le comportement de validation automatique par défaut des connexions renvoyées par le pool.
C'est une valeur booléenne.

Par défaut : `true`

##### connectionTimeout

Cette propriété contrôle le nombre maximum en millisecondes qu'un client (c'est-à-dire vous) attendra une connexion à partir du pool. Si ce délai est dépassé sans qu'une connexion ne soit disponible, une SQLException sera levée. Le délai de connexion le plus bas acceptable est de 250 ms.

Par défaut : `30000 (30 secondes)`

##### idleTimeout

Cette propriété contrôle la durée maximale pendant laquelle une connexion est autorisée à rester inactive dans le pool. **Ce paramètre ne s'applique que lorsque `minimumIdle` est défini comme étant inférieur à `maximumPoolSize`.** Les connexions inactives ne seront pas retirées lorsque le pool atteint les connexions `minimumIdle`. Si une connexion est retirée comme inactive ou non, elle est sujette à une variation maximale de +30 secondes, et une variation moyenne de +15 secondes. Une connexion ne sera jamais retirée comme inactive avant ce délai. Une valeur de 0 signifie que les connexions inactives ne sont jamais supprimées du pool. La valeur minimale autorisée est de 10000ms (10 secondes).

Par défaut : `600000 (10 minutes)`

##### maxLifetime

Cette propriété contrôle la durée de vie maximale d'une connexion dans le pool. Une connexion en cours d'utilisation ne sera jamais retirée, ce n'est que lorsqu'elle est fermée qu'elle sera alors supprimée. Sur une base connexion par connexion, une légère atténuation négative est appliquée pour éviter un retrait massif du pool. **Nous recommandons vivement de définir cette valeur, et elle doit être plusieurs secondes plus courte que tout délai de connexion imposé par une base de données ou une infrastructure.** Une valeur de 0 indique une durée de vie maximale (durée infinie), soumise évidemment à la définition de `idleTimeout`. La valeur minimale autorisée est de 30000ms (30 secondes).

Par défaut : `1800000 (30 minutes)`

##### minimumIdle

Cette propriété contrôle le nombre minimum de connexions inactives que HikariCP tente de maintenir dans le pool. Si les connexions inactives tombent en dessous de cette valeur et que le total des connexions dans le pool est inférieur à la taille `maximumPoolSize`, HikariCP fait de son mieux pour ajouter des connexions supplémentaires de manière rapide et efficace. Cependant, pour des performances maximales et une capacité de réponse aux pics de demande, nous recommandons de ne pas définir cette valeur et, au lieu de cela, de permettre à HikariCP d'agir comme un ensemble de connexions de taille fixe.

Par défaut : identique à la taille `maximumPoolSize`

##### maximumPoolSize

Cette propriété contrôle la taille maximale que le pool peut atteindre, y compris les connexions inactives et celles en cours d'utilisation. Fondamentalement, cette valeur déterminera le nombre maximal de connexions réelles au backend de la base de données. Une valeur raisonnable pour cela est mieux déterminée par votre environnement d'exécution. Lorsque le pool atteint cette taille, et qu'il n'y a pas de connexions inactives disponibles, les appels à getConnection() seront bloqués jusqu'à `connectionTimeout` millisecondes avant le délai d'expiration.

Par défaut : `10`

### Peu utilisés

##### initializationFailTimeout

Cette propriété contrôle si le pool va « échouer rapidement » si le pool ne peut pas être initialisé avec succès avec une connexion initiale. Tout nombre positif est considéré comme le nombre de millisecondes pour tenter d'acquérir une connexion initiale ; le thread applicatif sera bloqué pendant cette période. Si une connexion ne peut pas être acquise avant cet intervalle de temps, une exception sera levée. Ce délai est appliqué après la période `connectionTimeout`. Si la valeur est zéro (0), HikariCP tentera d'obtenir et de valider une connexion. Si une connexion est obtenue mais échoue à la validation, une exception sera levée et le pool ne sera pas démarré. Cependant, s'il n'est pas possible d'obtenir une connexion, le pool démarrera, mais les efforts ultérieurs pour obtenir une connexion peuvent échouer. Une valeur inférieure à zéro contournera toute tentative initiale de connexion, et le pool démarrera immédiatement en essayant d'obtenir des connexions en arrière-plan. Par conséquent, les efforts ultérieurs pour obtenir une connexion peuvent échouer.

Par défaut : `1`

##### catalog

Cette propriété définit le catalogue par défaut pour les bases de données qui prennent en charge le concept de catalogues. Si cette propriété n'est pas spécifiée, le catalogue prédéfini défini par le driver JDBC est utilisé.

Par défaut : `driver default`

##### validationTimeout

Cette propriété contrôle la durée maximale pendant laquelle une connexion sera testée quant à sa vivacité. Cette valeur doit être inférieure au temps de `connectionTimeout`. Le délai de validation le plus bas acceptable est de 250 ms.

Par défaut : `5000`

##### leakDetectionThreshold

Cette propriété contrôle la durée pendant laquelle une connexion peut être hors du pool avant qu'un message indiquant une possible fuite de connexion ne soit enregistré. Une valeur de 0 signifie que la détection des fuites est désactivée. La valeur la plus basse acceptable pour permettre la détection des fuites est de 2000 (2 secondes).

Par défaut : `0`

##### schema

Cette propriété définit le schéma par défaut pour les bases de données qui prennent en charge le concept de schémas. Si cette propriété n'est pas spécifiée, le schéma prédéfini défini par le driver JDBC est utilisé.

Par défaut : `driver default`

### DataSource

Il est également possible d'ajouter des configurations au DataSource, c'est-à-dire des configurations supplémentaires spécifiques au type de base de données utilisé.

Pour réaliser cette configuration plus avancée, il est nécessaire d'ajouter l'objet de configuration `datasource` à l'intérieur de l'objet de configuration de la connexion à la base de données.

Par exemple, ainsi :

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "ma_base_de_donnees",
            "username": "mon_utilisateur",
            "password": "mot_de_passe",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Notez que la valeur des configurations des paramètres du DataSource est de type _string_, de toute façon Netuno convertit automatiquement toujours en _string_.

## Conclusion

Avec l'utilisation de HikariCP, il est possible de réaliser des configurations avancées pour gérer la charge et le comportement des connexions à la base de données.

Pouvant être optimisé pour les scénarios les plus divers, garantissant ses hautes performances.