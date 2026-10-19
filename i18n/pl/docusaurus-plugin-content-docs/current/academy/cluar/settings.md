---
sidebar_position: 9
id: settings
title: Ustawienia
sidebar_label: Ustawienia
---

System parametrów klucz/wartość zarządzany przez edytor treści, bez potrzeby pisania kodu.

## Wprowadzenie

**Ustawienia** to system parametrów klucz/wartość zarządzany przez edytor treści w backoffice — pomyślany dla wartości witryny, które często się zmieniają lub różnią się w zależności od języka (np. numer telefonu, adres, linki do mediów społecznościowych, obraz logo), bez potrzeby ingerencji w kod.

Obejmuje trzy formularze w backoffice:

- **Typ** (`configuration_parameter_type`)
- **Parametr** (`configuration_parameter`)
- **Konfiguracja** (`configuration`)

## Typ

Określa, jaki typ wartości akceptuje Parametr. Zawiera tylko **Kod** (`code`) i **Nazwę** (`name`). Domyślnie są już utworzone:

| Kod | Nazwa |
|---|---|
| `boolean` | Logiczny |
| `number` | Liczba |
| `image` | Obraz |
| `color` | Kolor |
| `text` | Tekst |
| `html` | HTML |

## Parametr

Definiuje "klucz" konfiguracji — **Kod** (`code`, używany w kodzie do pobrania wartości), **Opis** oraz **Typ** (jeden z powyższych typów). Np. parametr `numer-telefonu` typu Tekst.

## Konfiguracja

To **wartość** Parametru dla określonego **Języka** — **Wartość** (`value`, tekst) lub **Obraz** (`value_img`), w zależności od typu parametru.

### Wartości bez języka (ogólny fallback)

Jeśli pole **Język** w Konfiguracji pozostanie puste, ta wartość będzie używana jako **fallback dla wszystkich języków**, które nie mają zdefiniowanej własnej wartości dla tego parametru. Pozwala to uniknąć duplikowania tej samej wartości (np. numeru telefonu, który jest taki sam we wszystkich językach) osobno w każdym języku — definiuje się ją raz, bez przypisanego języka, a wartość specyficzną dla języka tylko tam, gdzie rzeczywiście się różni.

## Programowo

Klasa `website/src/common/Cluar.js` udostępnia funkcje do odczytu konfiguracji:

- `Cluar.configuration(parametr)` — pobiera wartość parametru w bieżącym języku; jeśli nie ma wartości dla tego języka, używa wartości bez języka (fallback); jeśli nie ma żadnej z nich, zwraca samą nazwę parametru (przydatne do szybkiego zauważenia brakującej konfiguracji).
- `Cluar.configurationNumber(parametr)` — tak samo, ale konwertuje wartość na liczbę (0, jeśli nie jest liczbą).
- `Cluar.configurationMultilines(parametr)` — tak samo, ale konwertuje znaki nowej linii na `<br>`.

## Następny krok

Poznaj [Słowniki](/docs/academy/cluar/dictionaries).