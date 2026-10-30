---
id: config
title: Konfiguracja
sidebar_label: Konfiguracja
---

Ogólne ustawienia aplikacji.

## Folder konfiguracji

Konfiguracja aplikacji jest dostępna w folderze `📂 config`, gdzie odbywa się ogólna parametryzacja aplikacji i integracji zewnętrznych.

Netuno obsługuje różne typy środowisk; domyślnie używamy `development` (środowisko programistyczne) i `production` (środowisko produkcyjne).

Aktywne środowisko jest definiowane w `config.js`, który znajduje się w katalogu głównym instalacji Netuno:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Do zdefiniowania środowiska można użyć dowolnej nazwy, przy czym aplikacje muszą mieć taką samą nazwę środowiska jak nazwy plików (`.json` i `.js` w folderze `📂 config` aplikacji).

Domyślnie w tym folderze znajdują się następujące pliki:

## _development.js

Wstrzykiwanie kodu JavaScript umożliwia wykonywanie dynamicznych konfiguracji za pomocą logiki programistycznej na parametryzacjach zdefiniowanych w pliku `_development.json`. Na przykład zdefiniować konfigurację na podstawie informacji znajdujących się w bazie danych, określić parametryzację zachowania wykonywania kodu i inne.

Ten plik jest używany w zależności od definicji środowiska, jeśli jest to `development` (środowisko programistyczne).

## _development.json

Definicja parametryzacji aplikacji, takich jak język, ogólne ustawienia zasobów i integracji. Na przykład konfiguracje baz danych, zadania Cron, integracje z SMTP lub zdalnymi API, uwierzytelnianie i wiele innych.

Ten plik jest używany w zależności od definicji środowiska, jeśli jest to `development` (środowisko programistyczne).

## _production.js

Wstrzykiwanie kodu JavaScript umożliwia wykonywanie dynamicznych konfiguracji za pomocą logiki programistycznej na parametryzacjach zdefiniowanych w `_production.js`. Na przykład zdefiniować konfigurację na podstawie informacji znajdujących się w bazie danych, parametryzację zachowania wykonywania kodu i inne.

Ten plik jest używany w zależności od definicji środowiska, jeśli jest to `production` (środowisko produkcyjne).

## _production.json

Definicja parametryzacji aplikacji, takich jak język, ogólne ustawienia zasobów i integracji. Na przykład konfiguracje baz danych, zadania Cron, integracje z SMTP lub zdalnymi API, uwierzytelnianie i wiele innych.

Ten plik jest używany w zależności od definicji środowiska, jeśli jest to `production` (środowisko produkcyjne).