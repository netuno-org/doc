---
sidebar_position: 5
id: languages
title: Języki
sidebar_label: Języki
---

Jak CLUAR zarządza językami witryny i treścią wielojęzyczną.

## Wprowadzenie

CLUAR jest domyślnie wielojęzyczny: każda **Strona** jest powiązana z językiem, a witryna wyświetla selektor umożliwiający odwiedzającemu przełączanie się między dostępnymi językami.

Językami zarządza się w panelu administracyjnym za pomocą formularza **Język**.

## Pola

| Pole | Opis |
|---|---|
| **Kod** (`code`) | Międzynarodowy kod języka (np.: `PT`, `EN`). Jest to wartość używana do powiązania treści (stron, słownika, konfiguracji) z tym językiem. |
| **Lokalizacja** (`locale`) | Pełna lokalizacja (np.: `pt`, `en`). Jest to wartość używana w linkach stron oraz przy zmianie języka programowo. |
| **Domyślny** (`default`) | Oznacza ten język jako preferowany w witrynie — jest to język ładowany domyślnie. |
| **Opis** (`description`) | Nazwa języka wyświetlana odwiedzającemu (np.: „portugalski”). |

## Wybór języka w witrynie

Obecnie w projekcie istnieją dwa selektory języka:

- **Nagłówek publicznej witryny** (`website/src/base/Header`) — tradycyjny selektor wykonany za pomocą [Menu Ant Design](https://ant.design/components/menu/). Po zmianie języka następuje nawigacja do `/{locale}/`. Wyświetla tylko języki, które mają już opublikowane strony (poprzez `Cluar.pages()`), aby nie pokazywać pustych opcji.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — używany w Obszarze Zastrzeżonym (`ReservedArea`). To prostsza lista rozwijana: zmienia aktywny język i przeładowuje bieżącą stronę, bez przechodzenia do innej trasy.

## Programowo

Klasa `website/src/common/Cluar.js` udostępnia funkcje do pracy z językami:

- `Cluar.defaultLanguage()` — pobiera język oznaczony jako domyślny.
- `Cluar.currentLanguage()` — pobiera aktualnie aktywny język.
- `Cluar.changeLanguage(kodLubLokalizacja)` — programowo aktywuje inny język (akceptuje zarówno `code`, jak i `locale`).
- `Cluar.languages()` — pobiera listę wszystkich języków.

## Następny krok

Sprawdź, jak treść w każdym języku jest zorganizowana na [Stronach](/docs/academy/cluar/pages/overview).