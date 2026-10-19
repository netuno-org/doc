---
id: cors
title: CORS
sidebar_label: CORS
---

Konfiguracja CORS w aplikacji.

## Wprowadzenie

CORS (Cross-Origin Resource Sharing) to proces walidacji wykonywany przez przeglądarki, aby sprawdzić, czy mogą
zintegrować zasoby udostępniane przez inny adres.

Stosuje się go, gdy:

- Podczas tworzenia warstwy frontendowej z serwerem webpack, np. przy tworzeniu interfejsów web
(strona internetowa lub aplikacja webowa) z użyciem nowoczesnych technologii, takich jak ReactJS i VueJS.
- Adres frontendu różni się od adresu usług, na przykład gdy usługi działają pod adresem
`http://localhost:9000`, a frontend pod adresem `http://localhost:3000`.
- W produkcji, na przykład, usługi działają w osobnej subdomenie `api.przyklad.com`, a frontend pod
`www.przyklad.com`.

> Więcej o CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno jest przygotowany do integracji CORS w prosty i natychmiastowy sposób.

## Konfiguracja

Konfigurację CORS wykonuje się w pliku konfiguracji aplikacji, zależnie od środowiska.

Aby to zrobić, przejdź w rozwijanej aplikacji do pliku konfiguracji środowiska.
W tym przykładzie użyjemy pliku środowiska deweloperskiego znajdującego się w:

- 📂 `config/_development.json`

Sprawdź, czy nie ma już konfiguracji CORS; jeśli nie istnieje, dodaj na końcu pliku konfiguracji (w
formacie JSON) parametry konfiguracyjne:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> Konfiguracja CORS jest tablicą i obsługuje wiele różnych reguł CORS.

### Źródła

Parametr `origins` to lista adresów frontendu, który będzie zintegrowany z usługami.

### Produkcja

W produkcji musimy zdefiniować jako źródła adresy, pod którymi frontend będzie działać online.

Plik konfiguracji aplikacji, w którym znajduje się definicja `cors`, powinien być inny w zależności od środowiska.

Plik konfiguracji aplikacji powinien być:

- 📂 `config/_production.json`

Przykład konfiguracji CORS:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://moj-projekt.com", "https://www.moj-projekt.com" ]
        }
    ]
    ...
}
```

Plikiem konfiguracji aplikacji jest `_production.json` zgodnie z konfiguracją środowiska Netuno, która
znajduje się w pliku `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Nagłówek (Header HTTP)

Domyślny nagłówek (nagłówek protokołu HTTP) to:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Aby dostosować domyślny nagłówek, dodaj parametr konfiguracyjny `header`, na przykład:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

W powyższym przykładzie w nagłówku będzie akceptowany tylko `Authorization` zamiast wszystkich pozostałych,
które były zdefiniowane domyślnie.

Możesz dodawać nowe definicje w nagłówku, np. zastępować definicję domyślną.

## Ręcznie

CORS można skonfigurować również ręcznie, zamiast korzystać z automatycznego mechanizmu Netuno.

W swojej aplikacji Netuno wystarczy zmienić plik:

- `📂 server/core/_request_url.js`

I użyć następującego kodu:

```javascript title="server/core/_request_url.js"
const originNaglowkaHttp = _header.getString("Origin", "null")

if (originNaglowkaHttp == 'https://www.moja-aplikacja.com'
	|| originNaglowkaHttp == 'http://localhost'
	|| originNaglowkaHttp == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", originNaglowkaHttp)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Zauważ, że w powyższym kodzie `if` ogranicza nagłówki zgodnie z adresem pochodzenia (`Origin`).

Pamiętaj, aby dostosować do adresów, których będziesz używać.

> W ten sposób wszystkie usługi i adresy Twojej aplikacji będą obsługiwać nagłówki CORS.

### Tylko dla izolowanych usług

Jeśli chcesz zwiększyć poziom bezpieczeństwa, aktywując nagłówki tylko dla określonych usług, użyj
tej samej logiki kodu w pliku:

- `📂 server/core/_service_config.js`

Zamiast pliku:

- `📂 server/core/_request_url.js`

## Podsumowanie

Po skonfigurowaniu CORS Netuno automatycznie odpowie domyślnym nagłówkiem (nagłówkiem protokołu HTTP)
dla adresów skonfigurowanych jako `origins`.

Domyślne `headers` można dostosować i zmienić.

Możesz skonfigurować wiele reguł CORS.

Chociaż Netuno obsługuje ręczną konfigurację reguł CORS programowo, preferowane jest korzystanie z
automatycznego mechanizmu zintegrowanego z konfiguracją aplikacji.