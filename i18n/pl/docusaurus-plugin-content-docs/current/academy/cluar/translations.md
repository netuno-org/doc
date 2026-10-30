---
sidebar_position: 10
id: translations
title: Słowniki
sidebar_label: Słowniki
---

Jak tłumaczyć stałe teksty interfejsu strony internetowej.

## Wprowadzenie

**Słowniki** to system tłumaczeń stałych tekstów interfejsu strony internetowej — etykiet, komunikatów, tekstów przycisków — czyli rzeczy, które nie są treścią strony, ale tekstem „wbudowanym” w kod, a mimo to musi on istnieć w każdym języku.

Obejmuje dwa formularze w backoffice:

- **Wpis** (`translation_entry`)
- **Słownik** (`translation`)

## Wpis

Definiuje „klucz” tłumaczenia — **Kod** (`code`, używany w kodzie do pobrania wartości) i **Opis**. Np. wpis `formularz-kontaktowy-sukces`, używany dla komunikatu o pomyślnym wysłaniu formularza kontaktowego (dokładnie ten pojawia się w [`FormularzKontaktowy`](/docs/academy/cluar/components/functionality) Funkcjonalności).

## Słownik

To **przetłumaczona wartość** wpisu dla określonego **Języka** (`language_id`) — pole **Wartość** (`value`, akceptuje HTML).

:::info Brak wartości ogólnej/brak języka
W przeciwieństwie do [Konfiguracji](/docs/academy/cluar/settings), Słownik **nie ma** mechanizmu fallbacku bez języka — każdy Wpis wymaga Wartości zdefiniowanej jawnie dla każdego języka, w którym jest używany. Jeśli brakuje tłumaczenia w danym języku, wyświetlanym tekstem jest sam kod Wpisu (np. `formularz-kontaktowy-sukces`), a nie wartość ogólna.
:::

## Programistycznie

Klasa `website/src/common/Cluar.js` udostępnia funkcje do odczytu wpisów słownika; wszystkie zwracają kod wpisu, jeśli nie ma tłumaczenia (przydatne do zauważenia brakujących tłumaczeń):

- `Cluar.translation(wpis)` — pobiera przetłumaczoną wartość w bieżącym języku, w postaci zapisanej (może zawierać HTML).
- `Cluar.plainTranslation(wpis)` — to samo, ale usuwa znaczniki `<p>` i `<br>`. Jest najczęściej używana w etykietach interfejsu (przyciski, pola formularzy, powiadomienia).
- `Cluar.plainTitle(wpis)` — to samo, ale usuwa tylko znaczniki `<p>`.
- `Cluar.plainHTML(wpis)` — usuwa wszystkie znaczniki HTML.
- `Cluar.translationNoParagraph(wpis)` — usuwa tylko znaczniki `<p>` (odpowiednik `plainTitle`).

## Następny krok

Poznaj [Szablony](/docs/academy/cluar/templates).