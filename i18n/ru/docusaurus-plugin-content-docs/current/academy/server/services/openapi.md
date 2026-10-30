---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Определение схемы сервисов.

## Введение

OpenAPI — это спецификация, которая стандартизирует сервисы, предоставляемые REST API, и помогает понять, как определены сервисы: адрес, входные и выходные данные.

Она позволяет генерировать интерфейс для тестирования и автоматически создавать клиентов для интеграции с другими технологиями.

> Подробнее об <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Активация и настройка

Чтобы включить и настроить OpenAPI в вашем приложении Netuno, необходимо отредактировать файл конфигурации приложения для используемой среды, например:

- `📂 config/_development.json`
- `📂 config/_production.json`

Вставьте и настройте следующие параметры:

```
...
    "openapi": {
        "host": "http://moe-prilozhenie.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://moe-prilozhenie.local.netu.no:9000/services",
                "description": "Локальная разработка"
            }
        ]
    },
...
```

Убедитесь, что настройки имеют смысл; в приведённом выше примере они предназначены для среды _development_.

> В production-среде следует использовать `https`.

### _openapi.json в сервисах

В корне сервисов настройте файл `_openapi.json`.

Полный путь внутри приложения:

- `📂 server/services/_openapi.json`

Содержимое этого файла будет таким, как в этом примере:

```
{
  "info": {
    "title": "Моё приложение",
    "description": "REST API моего приложения, используйте с осторожностью.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Настройте заголовок и описание так, как это имеет смысл в вашем случае.

## Входные данные

Настройка файлов _схемы_ входных данных позволяет Netuno проверять полученные параметры, сравнивая их с правилами JSON Schema.

> Подробнее о <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

При любой ошибке проверки выполнение сервиса блокируется, в `log` Netuno выводится ошибка, а потребителю сервиса возвращается код состояния HTTP **400** (_Bad Request_).

Чтобы настроить правила входных параметров, необходимо создать файл с расширением `in.json` рядом с файлом кода сервиса; имя должно совпадать.

- У сервиса `podrobnosti.js` должен быть файл `podrobnosti.in.json`.
- У сервиса `podrobnosti.post.js` должен быть файл `podrobnosti.post.in.json`.
- У сервиса `podrobnosti/post.js` должен быть файл `podrobnosti/post.in.json`.

Пример содержимого `in.json`:

```
{
    "tags":[
      "сервисы продукта"
    ],
    "summary": "Детали продукта",
    "description": "Получаются все поля сведений об указанном продукте.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno поддерживает некоторые дополнительные типы, не поддерживаемые JSON Schema, такие как `string-not-empty`, `array-not-empty`, `id` и `uid` (или `uuid`, или `guid`).

> Подробнее об этой спецификации в <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Выходные данные

Настройка файлов _схемы_ выходных данных позволяет Netuno проверять отправленные параметры, сравнивая их с правилами JSON Schema.

> Подробнее о <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

При ошибке проверки выходные данные всё равно отправляются потребителю сервиса, но сообщения об ошибках проверки выводятся в `log` Netuno.

Чтобы настроить правила выходных параметров, необходимо создать файл с расширением `out.200.json` рядом с файлом кода сервиса; имя должно совпадать с именем сервиса.

Здесь **200** — это код состояния HTTP, который будет в ответе; для поддержки нескольких кодов состояния HTTP достаточно добавить дополнительные JSON-файлы с другим номером.

Несколько примеров:
- У сервиса `sohranit.js` должен быть файл `sohranit.out.200.json`.
- У сервиса `sohranit.post.js` должен быть файл `sohranit.post.out.200.json`.
- У сервиса `sohranit/post.js` должен быть файл `sohranit/post.out.200.json`.

Пример содержимого `out.200.json`:

```
{
    "type": "object",
    "properties": {
      "rezultat": {
        "type": "boolean"
      }
    },
    "required": [
      "rezultat"
    ]
}
```

Netuno поддерживает некоторые дополнительные типы, не поддерживаемые JSON Schema, такие как `string-not-empty`, `array-not-empty`, `id` и `uid` (или `uuid`, или `guid`).

> Подробнее об этой спецификации в <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Импорт схемы

Netuno поддерживает импорт _схем_, что позволяет повторно использовать часть _схемы_ в нескольких JSON.

> Импорт _схем_ позволяет избежать дублирования кода.

Создайте папку `_schema` в корне папки сервисов:

- `📂 server/services/_schema`

Теперь в конфигурации JSON можно импортировать _схемы_ с помощью параметра `_schema`, например:

```
{
    "summary": "Удалить продукты",
    "description": "Позволяет окончательно удалить продукты.",
    "_schema": "get/tolko-kod.in"
}
```

Это означает, что будет импортирован файл `_schema/get/tolko-kod.in.json`, в котором находится параметр `_schema`.

## Спецификация и тестирование

Чтобы сгенерировать полную спецификацию всех сервисов, поддерживающих OpenAPI с JSON Schema, перейдите, например, по адресу:

- http://localhost:9000/services/_openapi

Будет показан JSON со всей спецификацией.

Для тестирования скопируйте весь сгенерированный JSON.

Откройте редактор Swagger: https://editor.swagger.io/

Удалите содержимое слева, вставьте JSON и ответьте «да» на вопрос о преобразовании JSON в YAML.

С помощью сгенерированного интерфейса справа можно лучше понять все доступные сервисы и выполнить тестирование.

Также это позволяет автоматически генерировать клиентов для других технологий.

## Программно

В папке `_schema` можно использовать файлы `.js`, которые будут выполняться вместе с генерацией определения OpenAPI, а также в процессе проверки входных и выходных данных сервисов.

С помощью программирования схемы можно создавать динамические проверки, например:
- Принимать только код, который существует в базе данных.
- По `UID` получать запись из базы данных и передавать её сервисам.
- Для `POST` или `PUT` создавать тип схемы, отличный от создаваемого для `DELETE`.

### Пример со списком значений

Представьте, что у нас есть сервис, который получает код определённой категории.

Мы не можем принимать любое значение как код, потому что это может быть значение, не соответствующее допустимому коду категории.

Тогда можно ограничить принимаемые коды только теми, которые зарегистрированы в базе данных.

Создаётся схема в: `server/services/_schema/kategoriya/kody.js`

```javascript
const dbKategorii = _db.query("SELECT kod FROM kategoriya")

const spisokKodov = _val.list()

for (const dbKategoriya of dbKategorii) {
    spisokKodov.add(dbKategoriya.getString("kod"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        spisokKodov
    )
```

> В `spisokKodov` будут содержаться все коды категорий, зарегистрированные в базе данных.

В сервисе можно использовать следующий `JSON`, который использует схему `kategoriya/kody`:

```json
{
  "summary": "Список продуктов в категории",
  "description": "Получает все продукты, связанные с указанной категорией.",
  "type": "object",
  "properties": {
    "kategoriya": {
      "type": "object",
      "properties": {
        "kod": {
          "_schema": "kategoriya/kody"
        }
      },
      "required": [
        "kod"
      ]
    }
  },
  "required": [
    "kategoriya"
  ]
}
```

Таким образом мы гарантируем, что сервис выполнится только при допустимом коде.

### Пример с глобальным объектом

Представьте, что у нас есть несколько сервисов, которые получают `UID` клиента, и в каждом сервисе нужно обращаться к базе данных, чтобы получить данные клиента, связанные с его `UID`.

Мы можем централизовать это в программной схеме, которая по полученному `UID` клиента получает данные клиента из базы данных и сохраняет их в глобальном объекте, доступном в коде сервисов.

Таким образом, данные клиента всегда загружаются глобально и автоматически, когда мы получаем `UID` клиента.

Создаём программную схему в: `server/services/_schema/klient.js`

```javascript
const klient = _req.getValues('klient', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbKlient = _db.get('klient', klient.getString("uid"))
    
    if (dbKlient == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'klient-ne-nayden')
        )
        _service.cancel()
    }
    
    _val.global().set('klient', dbKlient)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> С помощью `_service.isGeneratingOpenAPIDefinition()` можно проверить, идёт ли генерация определения OpenAPI; в противном случае это выполнение HTTP-запроса.
> 
> Если `UID` клиента не найден, возвращается 404 и выполнение сервиса прерывается.
> 
> Обратите внимание, что используется `_val.global()`, который позволяет глобально разделять данные между всеми файлами кода, выполняемыми при обработке HTTP-запроса.

Продолжая пример, у нас есть сервис, который выводит список покупок, совершённых клиентом.

Проверка входных данных для сервиса находится в: `server/services/klient/pokupki/post.in.json`

```json
{
    "summary": "Список покупок",
    "description": "Список покупок, совершённых клиентом.",
    "type": "object",
    "properties": {
        "klient": {
            "_schema": "klient"
        }
    },
    "required": [
        "klient"
    ]
}
```

> Обратите внимание, что значение `"_schema"` клиента — это имя файла кода, который мы запрограммировали в схеме ранее. 

А в коде сервиса покупок клиентов в: `server/services/klient/pokupki/post.js`

```javascript
const dbKlient = _val.global().getValues('klient')
...
```

Через `_val.global()` мы получаем данные клиента из базы данных, которые были автоматически загружены кодом схемы.

### Пример с HTTP-методом

Можно возвращать разную схему для каждого типа HTTP-метода.

Например, можно сгенерировать схему в коде для операций создания, редактирования или удаления сетевых портов:

- Для POST выполняется операция создания, поэтому UID не требуется, но требуются название и номер порта.
- Для PUT выполняется операция редактирования, поэтому требуются UID, название и номер сетевого порта.
- Для PUT или DELETE требуется UID для выполнения соответствующих операций редактирования и удаления. 

```javascript
const properties = _val.map()
const required = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    properties.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    required.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    properties
        .set(
            'name',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinimum)
                .set('maximum', portMaximum)
        )
    required
        .add('name')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        properties
    )
    .set(
        'required',
        required
    )
```

## Видео

Ниже приведены примеры видео о том, как разрабатывать API с интеграцией с OpenAPI:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Заключение

Благодаря поддержке OpenAPI мы можем создавать правила проверки с использованием JSON Schema, что даёт следующие преимущества:

- Обеспечение большей безопасности данных, которые передаются в сервисы. 
- Предупреждение в `log`, если выходные данные сервиса не соответствуют заданной спецификации.
- Простое создание интерфейса навигации по сервисам и тестирования.