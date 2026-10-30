---
id: generate-uid-guid
title: Generowanie unikalnych ID (UID/GUID)
sidebar_label: Generowanie unikalnych ID (UID/GUID)
---

## Zanim zaczniesz

Zanim przejdziesz dalej, upewnij się, że potrafisz tworzyć **usługi sieciowe REST**. Jeśli nie, odwiedź poniższy link:

* [Usługi sieciowe REST](/docs/academy/server/services/rest)

Zalecane jest również, aby przed rozpoczęciem tego samouczka upewnić się, że masz podstawową wiedzę z zakresu _**JavaScript**_.

## Czym jest UID

UID (_unique identifier_), jak sama nazwa wskazuje, to unikalny ciąg znaków w całej Twojej aplikacji. Znany jest również jako GUID (_global unique identifier_).

Aby zademonstrować generowanie UID-ów, stworzymy usługę.

## Generowanie UID-ów

Pokażemy teraz tworzenie losowego UID-a. Jest to dość proste, ponieważ Netuno zawiera funkcję stworzoną specjalnie w tym celu:

```javascript
_out.println(
  _uid.generate()
)
```

> Zwróć uwagę, że funkcja `_out.println()` służy jedynie do umożliwienia wyświetlenia wyniku na ekranie podczas wywoływania usługi w przeglądarce.

Jeśli masz jakiekolwiek pytania, nie wahaj się z nami skontaktować za pośrednictwem kanałów podanych na dole strony.

Dobrego programowania!