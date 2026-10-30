---
id: cors
title: CORS
sidebar_label: CORS
---

Настройка CORS в приложении.

## Введение

CORS (Cross Origin Resource Sharing) — это процесс проверки, который выполняют браузеры, чтобы определить, могут ли они использовать ресурсы, предоставляемые другим адресом.

Он реализуется, когда:

- При разработке фронтенд-слоя с сервером webpack, например при разработке веб-интерфейсов (сайта или веб-приложения) с использованием современных технологий, таких как ReactJS и VueJS.
- Адрес фронтенда отличается от адреса сервисов, например, когда сервисы работают по адресу `http://localhost:9000`, а фронтенд — по адресу `http://localhost:3000`.
- В продакшене, например, сервисы работают в собственном поддомене `api.example.com`, а фронтенд — в `www.example.com`.

> Подробнее о CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno готов обеспечить интеграцию CORS просто и сразу.

## Настройка

Настройка CORS выполняется в файле конфигурации приложения в зависимости от окружения.

Для этого в разрабатываемом приложении перейдите к файлу конфигурации окружения. В этом примере мы будем использовать файл окружения разработки, расположенный по пути:

- 📂 `config/_development.json`

Проверьте, нет ли уже настроек CORS; если их нет, добавьте в конец файла конфигурации (в формате JSON) параметры конфигурации:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> Конфигурация CORS представляет собой массив и поддерживает несколько различных правил CORS.

### Источники

В параметре `origins` указывается список адресов фронтенда, который будет интегрирован с сервисами.

### Продакшен

В продакшене нужно указать в качестве источников адреса, по которым фронтенд будет работать онлайн.

Файл конфигурации приложения, в котором задаётся `cors`, должен отличаться в зависимости от окружения.

Файлом конфигурации приложения должен быть:

- 📂 `config/_production.json`

Пример конфигурации CORS:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://moy-proekt.com", "https://www.moy-proekt.com" ]
        }
    ]
    ...
}
```

Файл конфигурации приложения — это `_production.json` в соответствии с настройкой окружения Netuno, которая находится в файле `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Заголовок (HTTP-заголовок)

Стандартный заголовок (HTTP-заголовок):

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Чтобы настроить стандартный заголовок, добавьте параметр конфигурации `header`, например:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

В приведённом выше примере в заголовке будет приниматься только `Authorization` вместо всех остальных, определённых по умолчанию.

Можно добавлять новые определения в заголовок, а также заменять стандартное определение.

## Вручную

CORS также можно настроить вручную вместо использования автоматического механизма Netuno.

В вашем приложении Netuno достаточно изменить файл:

- `📂 server/core/_request_url.js`

И использовать следующий код:

```javascript title="server/core/_request_url.js"
const httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.moya-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Обратите внимание, что в приведённом выше коде `if` ограничивает «заголовки» в соответствии с адресом источника (`Origin`).

Не забудьте изменить на адреса, которые будете использовать.

> Таким образом, все сервисы и адреса вашего приложения начнут поддерживать заголовки CORS.

### Только для изолированных сервисов

Если вы хотите повысить уровень безопасности, включив заголовки только для конкретных сервисов, используйте ту же логику кода в файле:

- `📂 server/core/_service_config.js`

Вместо файла:

- `📂 server/core/_request_url.js`

## Заключение

Когда CORS настроен, Netuno автоматически отвечает стандартным заголовком (HTTP-заголовком) для адресов, настроенных в `origins`.

Стандартные `headers` можно настраивать и изменять.

Можно настроить несколько правил CORS.

Хотя Netuno поддерживает ручную настройку правил CORS программным способом, предпочтительнее использовать автоматический механизм, встроенный в конфигурацию приложения.