---
id: custom-urls
title: Niestandardowe adresy URL
sidebar_label: Niestandardowe adresy URL
---

## Wprowadzenie

Netuno pozwala zmienić domyślne adresy, na przykład:

- Adres interfejsu administracyjnego, `admin`.
- Adres plików publicznych, takich jak obrazy, CSS i JS, `public`.
- Adres usług API REST, `services`.

## Konfiguracja

W aplikacji, którą tworzysz, przejdź do pliku konfiguracji środowiska. W tym przykładzie użyjemy pliku konfiguracji środowiska lokalnego rozwoju znajdującego się w:

- 📂 `config/_development.json`

Sprawdź, czy konfiguracja URL już nie istnieje; jeśli jej nie ma, dodaj na końcu pliku konfiguracyjnego (w formacie JSON) parametry konfiguracji URL, na przykład:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Określa prefiks adresu URL interfejsu administracyjnego; domyślnie jest to tylko `/`.

### public

Określa prefiks adresu URL publicznych plików statycznych, takich jak obrazy, style CSS i kod JavaScript; domyślnie jest to `/public`.

### services

Określa początkowy adres URL usług internetowych API REST; domyślnie jest to `/services`.

## Podsumowanie

Dostosowywanie adresów URL jest ważne, zarówno ze względu na możliwość nadania im bardziej intuicyjnej formy, jak i na możliwość ich skomplikowania i zwiększenia bezpieczeństwa.

Na przykład w adresie administracyjnym można umieścić prefiks z losowym ciągiem znaków; wtedy tylko osoba znająca go na pamięć uzyska dostęp do adresu, co utrudnia dostęp i pomaga uniknąć ataków.