---
id: centralized-terminal
title: Terminal scentralizowany
sidebar_label: Terminal scentralizowany
---

Netuno pozwala ujednolicić wyjście danych (logi) z wielu poleceń i procesów w jednym oknie terminala — tym samym, w którym uruchomiony jest główny serwer.

W nowoczesnych przepływach pracy deweloperskiej, gdzie często jednocześnie pracuje się z wieloma technologiami, Netuno działa jako orkiestrator logów i może zawierać wiele poleceń skonfigurowanych do automatycznego uruchamiania równolegle, takich jak procesy front-endowe ReactJS, Angular, Vue i dowolne inne.

> Można uruchomić dowolny proces — wystarczy zdefiniować jego polecenie; można nawet zintegrować inny serwer pomocniczego API REST napisanego w dowolnej innej technologii.


## Konfiguracja

Aby zintegrować procesy zewnętrzne, należy edytować plik konfiguracji środowiska aplikacji. W tym przewodniku jako przykład wykorzystamy środowisko deweloperskie.

### Lokalizacja pliku

Przejdź do katalogu aplikacji i znajdź plik:

- 📂 `config/_development.json`

### Struktura konfiguracji


Konfigurację wykonuje się za pomocą klucza "commands", który jest tablicą obiektów. Pozwala to uruchamiać wiele usług równolegle.

Otwórz plik i sprawdź, czy klucz `"commands"` już istnieje. Jeśli nie, dodaj na końcu pliku (z zachowaniem formatu JSON) zgodnie z poniższą konfiguracją:

```json
{
    ...
    "commands": [
        {
            "path": "interfejs",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "strona",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Uwaga:** W powyższym przykładzie skonfigurowaliśmy polecenie dla katalogu „interfejs” i inne dla katalogu „strona”, oba korzystające z menedżera bun.

### Opis parametrów

**Interfejs użytkownika (UI):** Uruchamia `bun run watch` w katalogu `interfejs` aplikacji.

**Strona internetowa:** Uruchamia `bun run dev` w katalogu `strona`.

### env

Definiuje zmienne środowiskowe potrzebne procesowi do działania. Możesz zdefiniować wiele zmiennych jednocześnie.

### path

Definiuje ścieżkę katalogów, w której zostanie wykonane polecenie, względem katalogu głównego aplikacji.

### install

Netuno ma wbudowany mechanizm zarządzania zależnościami pakietów:

- **Automatyczne wykrywanie:** Jeśli Twoje polecenie zaczyna się od `npm`, `bun`, `pnpm` lub `yarn`, Netuno sprawdza, czy istnieje katalog `node_modules`.

- **Inteligentne wykonanie:** Jeśli katalog nie zostanie znaleziony, odpowiednie polecenie instalacji (przykład: `bun install`) jest automatycznie wykonywane przed uruchomieniem głównego procesu.

- **Dostosowanie:** Ręczne zdefiniowanie parametru `install` zastępuje domyślne wykrywanie Twoją niestandardową konfiguracją.

### command

Główne polecenie do wykonania. Całe wyjście danych (`output`) będzie integrowane z Netuno.

### enabled

Określa, czy polecenie ma być automatycznie uruchamiane wraz z aplikacją (true), czy nie (false).

## Podsumowanie

Centralizacja poleceń w Netuno znacznie upraszcza przepływ pracy.
Ujednolicona widoczność pozwala zebrać wszystkie informacje z równoległych procesów w jednym terminalu, ułatwiając monitorowanie w czasie rzeczywistym.

Bezpieczne zakończenie sprawia, że po zatrzymaniu serwera Netuno wszystkie skonfigurowane procesy pomocnicze również są automatycznie kończone, co zapobiega pozostawaniu procesów „w tle” lub blokowaniu portów.