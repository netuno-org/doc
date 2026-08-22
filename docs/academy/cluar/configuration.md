---
sidebar_position: 3
id: configuration
title: Configuration
sidebar_label: Configuration
---

> The process below is oriented towards Linux development environments.

## 1. App name

Rename the project folder (the app name) using only lowercase letters, numbers and underscores.

## 2. Configuration file

Copy the sample configuration file, from the app root:

```
cp config/sample.json config/_development.json
```

For a production environment, use this instead:

```
cp config/sample.json config/_production.json
```

Then, change the `name` property at the root of the JSON to the app name chosen in step 1.

> The `config/_development.js` and `config/_production.js` files already exist in the project and are used for dynamic/programmatic configuration — you don't normally need to touch them; the file you edit is the corresponding `.json`.

## 3. Database

CLUAR needs a connection to a PostgreSQL database. [Learn how to set it up here](https://doc.netuno.org/docs/academy/server/database/psql/).

In `config/_development.json` (or `_production.json`), find `db.default` and replace it with your database details:

```json
"db": {"default": {
    "password": "Your-DB-SeCr3t-Her3",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. JWT secret

In `auth.jwt.secret`, set a random secret with **32 characters**, used to secure authentication:

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "ThisSecretMustContains32Chars!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> It's recommended to generate the secret with a [random password generator tool](https://www.random.org/passwords/).

## 5. Altcha (reCAPTCHA alternative)

CLUAR supports [Altcha](https://altcha.org/) — an alternative to Google reCAPTCHA based on proof-of-work, without relying on external services or collecting visitor data. It's used on login and user registration.

There are two switches, in different places in the `.json`:

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

- `auth.altcha.enabled` — enables Altcha verification on the server side (Netuno). Without this set to `true`, Altcha isn't validated, even if it shows up on the website.
- `auth.altcha.admin.enabled` — also enables Altcha on the **Netuno backoffice** login (port `9000`), separate from the website login.

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

- `settings.cluar.website.auth.altcha` — mirrors the same option on the website side: controls whether the Altcha widget is shown on the site's login/registration form.

> For Altcha to work, set `enabled: true` **on both sides** — the server needs to validate it, and the website needs to display the widget.

## 6. CLUAR settings

In `settings.cluar`, adjust the website configuration:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Website Name",
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

- `website.url` — URL where the website will run.
- `website.name` — the website's name.
- `website.services.api` — URL of the Netuno services API, consumed by the website.
- `website.auth.providers` — enable/disable social login methods (Discord, Facebook, GitHub, Google).
- `uglifyjs` — controls whether the website code is minified.

## 7. Automatic website startup (optional)

The website can start automatically together with the Netuno server, through the `commands` list:

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

Just set `enabled` to `true` on the entry with `"path": "website"`. This way, when running `./netuno server app=cluar`, the website starts up alongside it, without needing to start it manually in another terminal.

## Next step

With the app configured, continue to [Execution](/docs/academy/cluar/execution).