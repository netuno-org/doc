---
sidebar_position: 4
id: execution
title: Запуск
sidebar_label: Запуск
---

Когда проект установлен и настроен, пора его запускать.

## Запуск сервера

В корневом каталоге Netuno выполните:

```
./netuno server app=cluar
```

Это одновременно запускает бэкенд и фронтенд.

> Первый запуск может занять больше времени из-за установки зависимостей фронтенда.

По умолчанию:

- Бэк-офис Netuno доступен по адресу [http://localhost:9000/](http://localhost:9000/)
- OpenAPI сервисов доступен по адресу [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Запуск сайта

Чтобы запустить сайт вручную:

```
cd website
bun run dev
```

По умолчанию сайт доступен по адресу [http://localhost:3000/](http://localhost:3000/)

> Можно настроить автоматический запуск сайта вместе с сервером Netuno, включив соответствующую команду в `config/_development.json` — см. [Конфигурация](/docs/academy/cluar/configuration#7-автоматический-запуск-веб-сайта-необязательно).

## Устранение неполадок

### Ошибка версии GLIBC при запуске `bun run dev`

Если при запуске сайта появляется такая ошибка:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Это не упомянутый в сообщении баг npm с опциональными зависимостями, а **несовместимость версии GLIBC**: нативный бинарник Rollup был скомпилирован с требованием `GLIBC_2.32` или новее, а в более старых дистрибутивах Linux (например, Ubuntu 20.04, где используется glibc 2.31) его нет.

Чтобы решить проблему, заставьте Rollup использовать версию WASM вместо нативной, добавив поле `overrides` в корень `package.json` сайта:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Затем переустановите зависимости:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Следующий шаг

Когда проект запущен, изучите [Языки](/docs/academy/cluar/languages) или [модель страниц](/docs/academy/cluar/pages/overview).