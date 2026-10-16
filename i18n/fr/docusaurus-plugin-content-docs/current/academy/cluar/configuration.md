---
sidebar_position: 3
id: configuration
title: Configuration
sidebar_label: Configuration
---

> Le processus ci-dessous est destiné aux environnements de développement Linux.

## 1. Nom de l'application

Renomme le dossier du projet (le nom de l'application) en utilisant uniquement des lettres minuscules, des chiffres et des underscores.

## 2. Fichier de configuration

Copie le fichier de configuration d'exemple, depuis la racine de l'application :

```
cp config/sample.json config/_development.json
```

Pour un environnement de production, utilisez plutôt :

```
cp config/sample.json config/_production.json
```

Ensuite, modifiez la propriété `name` à la racine du JSON pour le nom de l'application choisi à l'étape 1.

> Les fichiers `config/_development.js` et `config/_production.js` existent déjà dans le projet et servent pour des configurations dynamiques/programmatiques — normalement, vous n'avez pas besoin d'y toucher ; ce qui s'édite, c'est le `.json` correspondant.

## 3. Base de données

CLUAR a besoin d'une connexion à une base de données PostgreSQL. [Apprenez à configurer ici](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

Dans `config/_development.json` (ou `_production.json`), localisez `db.default` et remplacez par les données de votre base de données :

```json
"db": {"default": {
    "password": "Votre-Mot-De-Passe-SeCr3t-Ici",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. Secret JWT

Dans `auth.jwt.secret`, définissez un secret aléatoire de **32 caractères**, utilisé pour garantir la sécurité de l'authentification :

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "CeSecretDoitAvoir32Caracteres!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> Il est recommandé de générer le secret avec un [outil de génération de code aléatoire](https://www.random.org/passwords/).

## 5. Altcha (alternative au reCAPTCHA)

CLUAR prend en charge [Altcha](https://altcha.org/) — une alternative au Google reCAPTCHA basée sur une preuve de travail (*proof-of-work*), sans dépendre de services externes ni collecter de données du visiteur. Il est utilisé à la connexion et à l'inscription des utilisateurs.

Il existe deux interrupteurs, à des endroits différents du `.json` :

```json
"auth": {
    "altcha": {
        "enabled": false,
        "admin": {
            "enabled": false
        }
    }
}
```

- `auth.altcha.enabled` — active la vérification d'Altcha côté serveur (Netuno). Sans cela à `true`, Altcha n'est pas validé, même s'il apparaît sur le site web.
- `auth.altcha.admin.enabled` — active Altcha également à la connexion du **backoffice de Netuno** (port `9000`), séparé de la connexion du site web.

```json
"settings": {
    "cluar": {
        "website": {
            "auth": {
                "altcha": {
                    "enabled": false,
                    "admin": {
                        "enabled": false
                    }
                }
            }
        }
    }
}
```

- `settings.cluar.website.auth.altcha` — reflète la même option côté site web : contrôle si le widget Altcha est affiché dans le formulaire de connexion/inscription du site.

> Pour qu'Altcha fonctionne, activez `enabled: true` **des deux côtés** — le serveur doit valider, et le site web doit afficher le widget.

## 6. Paramètres de CLUAR

Dans `settings.cluar`, ajustez la configuration du site web :

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Nom du site",
            "analytics": null,
            "mapbox": {
                "dark": false,
                "accessToken": null
            },
            "services": {
                "api": "http://localhost:9000/services/"
            },
            "auth": {"providers": {
                "discord": false,
                "facebook": false,
                "github": false,
                "google": false
            }}
        },
        "uglifyjs": false
    }
}
```

- `website.url` — URL où le site web va s'exécuter.
- `website.name` — nom du site web.
- `website.services.api` — URL de l'API de services de Netuno, consommée par le site web.
- `website.auth.providers` — active/désactive les méthodes de connexion sociale (Discord, Facebook, GitHub, Google).
- `uglifyjs` — contrôle si le code du site web est minifié.

## 7. Démarrage automatique du site web (facultatif)

Le site web peut démarrer automatiquement avec le serveur Netuno, via la liste `commands` :

```json
"commands": [
    {
        "path": "website",
        "command": "bun run dev",
        "install": "bun install",
        "enabled": true
    }
]
```

Il suffit de mettre `enabled` à `true` dans l'entrée avec `"path": "website"`. Ainsi, en exécutant `./netuno server app=cluar`, le site web démarre en même temps sans que vous ayez besoin de le lancer manuellement dans un autre terminal.

## Prochaine étape

Une fois l'application configurée, passez à [Exécution](/docs/academy/cluar/execution).