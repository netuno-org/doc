> Описанный ниже процесс ориентирован на среды разработки Linux.

## 1. Имя приложения

Переименуйте папку проекта (имя приложения), используя только строчные буквы, цифры и подчёркивание.

## 2. Файл конфигурации

Скопируйте файл конфигурации-образец из корня приложения:

```
cp config/sample.json config/_development.json
```

Для производственной среды используйте вместо этого:

```
cp config/sample.json config/_production.json
```

Затем измените свойство `name` в корне JSON на имя приложения, выбранное на шаге 1.

> Файлы `config/_development.js` и `config/_production.js` уже существуют в проекте и служат для динамических/программных настроек — обычно их не нужно трогать; редактируется соответствующий `.json`.

## 3. База данных

CLUAR требует подключения к базе данных PostgreSQL. [Узнайте, как настроить здесь](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

В `config/_development.json` (или `_production.json`) найдите `db.default` и замените данными вашей базы данных:

```json
"db": {"default": {
    "password": "Ваш-Пароль-БД-SeCr3t-Her3",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. Секрет JWT

В `auth.jwt.secret` задайте случайный секрет из **32 символов**, используемый для обеспечения безопасности аутентификации:

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

> Рекомендуется генерировать секрет с помощью [инструмента генерации случайного кода](https://www.random.org/passwords/).

## 5. Altcha (альтернатива reCAPTCHA)

CLUAR поддерживает [Altcha](https://altcha.org/) — альтернативу Google reCAPTCHA, основанную на доказательстве выполнения работы (*proof-of-work*), без зависимости от внешних сервисов и без сбора данных посетителя. Она используется при входе и регистрации пользователей.

Есть два переключателя в разных местах `.json`:

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

- `auth.altcha.enabled` — включает проверку Altcha на стороне сервера (Netuno). Без установки `true` здесь Altcha не проверяется, даже если он отображается на веб-сайте.
- `auth.altcha.admin.enabled` — включает Altcha также при входе в **бэк-офис Netuno** (порт `9000`), отдельно от входа на веб-сайте.

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

- `settings.cluar.website.auth.altcha` — отражает ту же опцию на стороне веб-сайта: управляет тем, показывается ли виджет Altcha в форме входа/регистрации на сайте.

> Чтобы Altcha работал, включите `enabled: true` **с обеих сторон** — сервер должен выполнять проверку, а веб-сайт должен показывать виджет.

## 6. Настройки CLUAR

В `settings.cluar` настройте конфигурацию веб-сайта:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Название сайта",
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

- `website.url` — URL, по которому будет работать веб-сайт.
- `website.name` — название веб-сайта.
- `website.services.api` — URL API сервисов Netuno, используемой веб-сайтом.
- `website.auth.providers` — включает/отключает методы входа через соцсети (Discord, Facebook, GitHub, Google).
- `uglifyjs` — управляет минификацией кода веб-сайта.

## 7. Автоматический запуск веб-сайта (необязательно)

Веб-сайт может автоматически запускаться вместе с сервером Netuno через список `commands`:

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

Достаточно установить `enabled` в `true` в записи с `"path": "website"`. Тогда при запуске `./netuno server app=cluar` веб-сайт запустится вместе с ним, и вам не нужно будет запускать его вручную в другом терминале.

## Следующий шаг

После настройки приложения переходите к [Запуску](/docs/academy/cluar/execution).