---
sidebar_position: 3
id: api
title: API
---

Netuno ma własny framework do tworzenia API REST w podejściu low-code, z obsługą JWT (JSON Web Token) i OpenAPI 3.0.

Cały framework Netuno do tworzenia usług webowych jest bardzo wszechstronny i umożliwia realizację dowolnego rodzaju projektów.

Framework zapewnia już wiele funkcjonalności do tworzenia w podejściu low-code, oszczędzając wiele linii kodu przy realizacji najczęstszych potrzeb, takich jak wysyłanie e-maili, korzystanie z innych API REST, integracja z innymi bazami danych, generowanie plików PDF i Excel, wysyłanie SMS-ów, manipulowanie danymi w bazie danych i wiele innych.

Gdy w frameworku Netuno brakuje rozwiązań, można łatwo zintegrować istniejące biblioteki Java, Kotlin czy nawet JavaScript, aby tworzyć zasoby na miarę i integrować je z frameworkiem Netuno.

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) to specyfikacja standardu przekazywania danych kontekstu sesji do klienta za pośrednictwem obiektu JSON.

Dzięki temu serwer nie musi przechowywać poufnych danych zalogowanych użytkowników w sesji; zamiast tego dane te stają się tokenem przekazywanym klientowi, a następnie przy każdym żądaniu token ten musi zostać zwrócony.

Token ten podlega niektórym kontrolom bezpieczeństwa, takim jak limit czasu ważności oraz proces umożliwiający utworzenie nowego tokenu bez wymagania ponownego uwierzytelnienia.

Netuno ma zintegrowaną obsługę JWT; jest ona prosta i łatwa w użyciu, a także działa w połączeniu z użytkownikami i natywnym uwierzytelnianiem Netuno.

## OpenAPI 3.0

Po sukcesie Swaggera v1 i v2, które już dawno stały się standardem przy opracowywaniu definicji usług webowych i generowaniu kodu klienta.

W ten sposób Swagger udostępnił swoją definicję jako otwartą i stał się [OpenAPI 3](https://www.openapis.org/).

Nadal stanowi fundament do określania standardu dokumentowania API i generowania klientów do korzystania z API.

Netuno zapewnia pełną integrację z OpenAPI 3.0, wykorzystując definicję OpenAPI wraz z walidacją [JSON Schema](https://json-schema.org/).

Oznacza to, że Netuno pozwala również walidować dane wejściowe i wyjściowe usług webowych, korzystając z walidacji schematu otrzymywanego i zwracanego JSON, w następujący sposób:

- `Wejście`: Jeśli wywołanie usługi webowej nie spełnia struktury i walidacji, zostaje odrzucone
- `Wyjście`: Jeśli zwracane dane nie spełniają zdefiniowanej struktury i walidacji, generowane jest ostrzeżenie, że usługa webowa nie jest zgodna z wymaganiami.

Dzięki temu Netuno nie tylko oszczędza tworzenie wielu `if` w kodzie do walidacji otrzymywanych danych, ale także zapewnia walidację wyniku generowanego przez usługę webową, przeprowadzając _test jednostkowy_.

Struktura OpenAPI wygenerowana przez Netuno może być również wykorzystana z [Edytorem Swaggera](https://editor.swagger.io/) do wygenerowania interfejsu testowego, dokumentacji oraz kodu klientów API w innych technologiach.

## Podstawy

Netuno obsługuje również tworzenie usług webowych i uwierzytelnianie bez zbędnych komplikacji, czyli nie ma obowiązku używania JWT ani OpenAPI, choć jest to domyślne zalecenie.

Często, aby przyspieszyć tworzenie API lub w sytuacjach obejmujących komunikację między serwerami, decydujemy się maksymalnie uprościć rozwiązanie i zyskać więcej czasu.

> Netuno umożliwia [uwierzytelnianie HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).