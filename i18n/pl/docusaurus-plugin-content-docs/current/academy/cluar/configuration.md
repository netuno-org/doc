---
sidebar_position: 3
id: configuration
title: Konfiguracja
sidebar_label: Konfiguracja
---

> Poniższy proces jest przeznaczony dla środowisk deweloperskich Linux.

## 1. Nazwa aplikacji

Zmień nazwę folderu projektu (czyli nazwę aplikacji), używając wyłącznie małych liter, cyfr i podkreślnika.

## 2. Plik konfiguracyjny

Skopiuj przykładowy plik konfiguracyjny z katalogu głównego aplikacji:

```
cp config/sample.json config/_development.json
```

W środowisku produkcyjnym użyj zamiast tego:

```
cp config/sample.json config/_production.json
```

Następnie zmień właściwość `name` w głównym poziomie JSON na nazwę aplikacji wybraną w kroku 1.

> Pliki `config/_development.js` i `config/_production.js` już istnieją w projekcie i służą do konfiguracji dynamicznych/programowych — zwykle nie musisz ich modyfikować; edytuje się odpowiedni plik `.json`.

## 3. Baza danych

CLUAR wymaga połączenia z bazą danych PostgreSQL. [Dowiedz się, jak to skonfigurować tutaj](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

W pliku `config/_development.json` (lub `_production.json`) znajdź `db.default` i zastąp go danymi swojej bazy danych:

```json
"db": {"default": {
    "password": "Twoje-Tajne-Haslo-Do-Bazy",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. Sekret JWT

W `auth.jwt.secret` ustaw losowy sekret o długości **32 znaków**, używany do zapewnienia bezpieczeństwa uwierzytelniania:

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "TenSekretMaDokladnie32Znaki!!!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> Zaleca się wygenerowanie sekretu za pomocą [narzędzia do generowania losowego kodu](https://www.random.org/passwords/).

## 5. Altcha (alternatywa dla reCAPTCHA)

CLUAR obsługuje [Altcha](https://altcha.org/) — alternatywę dla Google reCAPTCHA opartą na dowodzie pracy (*proof-of-work*), bez zależności od usług zewnętrznych i bez zbierania danych odwiedzających. Jest używany podczas logowania i rejestracji użytkowników.

Istnieją dwa przełączniki w różnych miejscach pliku `.json`:

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

- `auth.altcha.enabled` — włącza weryfikację Altcha po stronie serwera (Netuno). Bez ustawienia tego na `true` weryfikacja Altcha nie jest przeprowadzana, nawet jeśli pojawia się w witrynie.
- `auth.altcha.admin.enabled` — włącza Altcha również podczas logowania do **backoffice Netuno** (port `9000`), oddzielnie od logowania do witryny.

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

- `settings.cluar.website.auth.altcha` — odzwierciedla tę samą opcję po stronie witryny: kontroluje, czy widget Altcha jest wyświetlany w formularzu logowania/rejestracji w witrynie.

> Aby mechanizm Altcha działał, ustaw `enabled: true` **po obu stronach** — serwer musi weryfikować, a witryna musi wyświetlać widget.

## 6. Ustawienia CLUAR

W `settings.cluar` dostosuj konfigurację witryny:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Nazwa witryny",
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

- `website.url` — URL, pod którym będzie działać witryna.
- `website.name` — nazwa witryny.
- `website.services.api` — URL API usług Netuno, z którego korzysta witryna.
- `website.auth.providers` — włącza/wyłącza metody logowania przez serwisy społecznościowe (Discord, Facebook, GitHub, Google).
- `uglifyjs` — kontroluje, czy kod witryny jest minimalizowany.

## 7. Automatyczne uruchamianie witryny (opcjonalne)

Witryna może uruchamiać się automatycznie razem z serwerem Netuno za pomocą listy `commands`:

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

Wystarczy ustawić `enabled` na `true` we wpisie z `"path": "website"`. Dzięki temu po uruchomieniu `./netuno server app=cluar` witryna uruchomi się razem z serwerem, bez konieczności ręcznego uruchamiania jej w innym terminalu.

## Następny krok

Gdy aplikacja jest skonfigurowana, przejdź do [Uruchomienie](/docs/academy/cluar/execution).