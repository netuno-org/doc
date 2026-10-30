---
sidebar_position: 3
id: configuration
title: Konfiguration
sidebar_label: Konfiguration
---

> Der folgende Prozess ist auf Linux-Entwicklungsumgebungen ausgerichtet.

## 1. Name der App

Benenne den Projektordner (den Namen der App) um und verwende dabei nur Kleinbuchstaben, Zahlen und Unterstriche.

## 2. Konfigurationsdatei

Kopiere die Beispiel-Konfigurationsdatei aus dem Stammverzeichnis der App:

```
cp config/sample.json config/_development.json
```

Für eine Produktionsumgebung verwende stattdessen:

```
cp config/sample.json config/_production.json
```

Ändere dann die Eigenschaft `name` im JSON-Stammverzeichnis auf den in Schritt 1 gewählten App-Namen.

> Die Dateien `config/_development.js` und `config/_production.js` existieren bereits im Projekt und dienen dynamischen/programmatischen Konfigurationen — normalerweise musst du sie nicht anfassen; bearbeitet wird die entsprechende `.json`-Datei.

## 3. Datenbank

CLUAR benötigt eine Verbindung zu einer PostgreSQL-Datenbank. [Hier erfährst du, wie du sie konfigurierst](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

Suche in `config/_development.json` (oder `_production.json`) nach `db.default` und ersetze es durch die Daten deiner Datenbank:

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

## 4. JWT-Geheimnis

Lege in `auth.jwt.secret` ein zufälliges Geheimnis mit **32 Zeichen** fest, das zur Sicherung der Authentifizierung verwendet wird:

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

> Es wird empfohlen, das Geheimnis mit einem [Zufallscode-Generator](https://www.random.org/passwords/) zu erzeugen.

## 5. Altcha (Alternative zu reCAPTCHA)

CLUAR unterstützt [Altcha](https://altcha.org/) — eine Alternative zu Google reCAPTCHA basierend auf Proof-of-Work, ohne Abhängigkeit von externen Diensten und ohne Erfassung von Besucherdaten. Es wird bei der Anmeldung und Registrierung von Benutzern verwendet.

Es gibt zwei Schalter an verschiedenen Stellen der `.json`-Datei:

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

- `auth.altcha.enabled` — aktiviert die Altcha-Überprüfung auf der Serverseite (Netuno). Ohne `true` wird Altcha nicht validiert, selbst wenn es auf der Website angezeigt wird.
- `auth.altcha.admin.enabled` — aktiviert Altcha auch bei der Anmeldung im **Netuno-Backoffice** (Port `9000`), getrennt von der Website-Anmeldung.

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

- `settings.cluar.website.auth.altcha` — spiegelt dieselbe Option auf der Website-Seite: steuert, ob das Altcha-Widget im Anmelde-/Registrierungsformular der Website angezeigt wird.

> Damit Altcha funktioniert, aktiviere `enabled: true` **auf beiden Seiten** — der Server muss validieren und die Website muss das Widget anzeigen.

## 6. CLUAR-Einstellungen

Passe in `settings.cluar` die Konfiguration der Website an:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Website-Name",
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

- `website.url` — URL, unter der die Website laufen wird.
- `website.name` — Name der Website.
- `website.services.api` — URL der Netuno-Services-API, die von der Website konsumiert wird.
- `website.auth.providers` — aktiviert/deaktiviert Methoden für soziale Anmeldung (Discord, Facebook, GitHub, Google).
- `uglifyjs` — steuert, ob der Code der Website minifiziert wird.

## 7. Automatischer Start der Website (optional)

Die Website kann automatisch zusammen mit dem Netuno-Server über die Liste `commands` starten:

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

Setze einfach `enabled` auf `true` im Eintrag mit `"path": "website"`. Dadurch startet die Website zusammen, wenn du `./netuno server app=cluar` ausführst, ohne dass du sie manuell in einem anderen Terminal starten musst.

## Nächster Schritt

Nachdem die App konfiguriert ist, fahre mit [Ausführung](/docs/academy/cluar/execution) fort.