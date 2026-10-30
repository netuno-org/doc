---
id: rest
title: REST - Веб-сервисы
sidebar_label: REST - Веб-сервисы
---

## Введение

REST-запросы — это онлайн-адреса, которые возвращают информацию о данных, обработанных на сервере, содержащем бизнес-логику данных, требующих безопасности и надёжности, с интеграцией базы данных.

> Подробнее о <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

Построение REST API выполняется на основе сервисов Netuno.

## ALL

Чтобы создать в Netuno сервис, отвечающий на любой тип метода HTTP:

- `📂 server/services/мой-сервис.js`

В браузере этот сервис будет выполняться для всех типов запросов по адресу:

- http://localhost:9000/services/мой-сервис

## GET

Адреса типа GET обычно используются для операций перечисления или получения данных.

Чтобы создать в Netuno сервис, отвечающий только на тип метода GET, используйте одну из следующих форм:

- `📂 server/services/список/get.js`
- `📂 server/services/список.get.js`

В браузере этот сервис будет выполняться только для типа запроса GET по адресу:

- GET http://localhost:9000/services/список

## POST

Адреса типа POST обычно используются для операций, которые создают или генерируют новые данные.

Чтобы создать в Netuno сервис, отвечающий только на тип метода POST, создайте файл кода, используя одну из следующих форм:

- `📂 server/services/создать/post.js`
- `📂 server/services/создать.post.js`

Этот сервис будет выполняться только для типа запроса POST по адресу:

- POST http://localhost:9000/services/создать

## PUT

Адреса типа PUT обычно используются для операций, которые изменяют записи данных.

Чтобы создать в Netuno сервис, отвечающий только на тип метода PUT, создайте файл кода, используя одну из следующих форм:

- `📂 server/services/сохранить/put.js`
- `📂 server/services/сохранить.put.js`

Этот сервис будет выполняться только для типа запроса PUT по адресу:

- PUT http://localhost:9000/services/сохранить

## DELETE

Адреса типа DELETE обычно используются для операций, которые удаляют записи данных.

Чтобы создать в Netuno сервис, отвечающий только на тип метода DELETE, создайте файл кода, используя одну из следующих форм:

- `📂 server/services/удалить/delete.js`
- `📂 server/services/удалить.delete.js`

Этот сервис будет выполняться только для типа запроса DELETE по адресу:

- DELETE http://localhost:9000/services/удалить

## OPTIONS

При интеграции с фронтендом в процессе проверки CORS браузер выполняет вызов типа OPTIONS.

> Подробнее о <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Чтобы создать в Netuno сервис, отвечающий только на тип метода OPTIONS, создайте файл кода, используя одну из следующих форм:

- `📂 server/services/перечислить/options.js`
- `📂 server/services/перечислить.options.js`

Должен быть реализован для всех сервисов, интегрируемых с внешним фронтендом, например с веб-сайтом.

Обычно используемый код:

```javascript
_out.json(_val.map().set("результат", true))
```

Этот сервис будет выполняться для типа запроса OPTIONS по адресу:

- OPTIONS http://localhost:9000/services/перечислить

## Клиенты и выполнение тестов

Для выполнения тестов сервисов с определённым типом метода можно использовать специализированные программы для тестирования REST API, например:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

С помощью команды `curl` в терминале можно выполнить любой тип теста.

Из консоли/командной строки отправьте GET:

```
curl http://localhost:9000/services/записать
```

С помощью `-X` можно указать тип метода:

```
curl -X POST -F 'имя=Тест' -F 'email=email@пример.com' http://localhost:9000/services/записать
```

> Параметр `-F` отправляет с Content-Type: `multipart/form-data`

Другой способ отправки параметров:

```
curl -X POST -d 'имя=Тест' -d 'email=email@пример.com' http://localhost:9000/services/записать
```

Можно объединить следующим образом:

```
curl -X POST -d 'имя=Тест&email=email@пример.com' http://localhost:9000/services/записать
```

> Параметр `-d` отправляет с Content-Type: `application/x-www-form-urlencoded`

### JSON

Для отправки в формате JSON необходимо указать тип содержимого:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"имя": "Тест", "email": "email@пример.com"}' \
    http://localhost:9000/services/записать
```

> `-H` задаёт параметризацию заголовка (_HEADER_)

### Загрузка

Для загрузки файлов:

```
curl -X POST -F 'изображение=@/home/пользователь/файл.jpg' http://localhost:9000/services/записать
```

## Клиент сервисов - NPM

Для упрощения интеграции с фронтендом предоставляется модуль NPM:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Команда установки: `npm i -S @netuno/service-client`

При определении адреса сервисов, например:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Вы сможете выполнять сервисы, интегрированные с фронтендом, например:

```
  _service({
      url: "/services/мой-сервис",
      method: 'POST',
      data: { параметр1: "1", параметр2: "2" },
      success: (ответ) => {
          if (ответ.json) {
              console.log("Ответ сервиса", ответ.json);
          }
      },
      fail: (e) => {
          console.log("Ошибка сервиса", e);
      }
  });
```

## Заключение

Поддерживается ограничение сервисов только нужным типом метода HTTP.

Интеграцию с фронтендом можно выполнить на самом низком уровне с помощью `fetch`.

Для ускорения и стандартизации реализации предоставляется модуль NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client).