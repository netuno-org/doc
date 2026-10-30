---
sidebar_position: 2
id: install
title: Установка
sidebar_label: Установка
---

## Требования

Перед установкой CLUAR необходимо иметь:

1. Установленный [Netuno](https://doc.netuno.org/pt/docs/get-started/installation).
2. Установленный [Bun](https://bun.sh/docs/installation).

## Клонирование проекта

CLUAR — это приложение Netuno, поэтому его нужно клонировать в папку `apps` установки Netuno:

```
[корневой каталог Netuno]/apps
```

С помощью команды:

```
git clone https://github.com/netuno-org/cluar.git
```

## Установка веб-сайта (с Bun)

Внутри папки `website`:

```
cd website
```

Выполните команду установки Bun:

```
bun install
```

Необходимо разрешить выполнение недоверенных скриптов ESBUILD:

```
bun pm trust --all
```

Если нужно перезапустить установку веб-сайта, удалите папку `node_modules` и файлы блокировки, затем установите заново:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Следующий шаг

Когда код и зависимости установлены, переходите к [Настройке](/docs/academy/cluar/configuration).