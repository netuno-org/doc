---
sidebar_position: 8
id: ui-layer
title: Warstwa UI
sidebar_label: Warstwa UI
---

Instalacja i kompilacja dashboardu oraz ogólnego interfejsu aplikacji.

## Kontekst

Aplikacje Netuno domyślnie mają już skonfigurowany zestaw zaawansowanych technologii przeznaczonych dla front-endu, w tym m.in. [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) i [Ant.Design](https://ant.design/).

W aplikacjach znajduje się folder `📁 ui` (_user interface_, interfejs użytkownika), w którym tworzymy dashboardy i inne komponenty front-endu.

## Zanim zaczniesz

Upewnij się, że masz zainstalowany [Bun](https://bun.sh/), który jest wymaganiem wstępnym; więcej o tym, jak:

- [Zainstalować Bun](/docs/academy/website/bun)

## Instalowanie modułów zależności

Aby zainstalować wszystkie zależności dołączone domyślnie, wejdź do folderu `📁 ui` (_user interface_) w swojej aplikacji, nad którą pracujesz, na przykład:

```shell
cd apps/moja_aplikacja/ui/
```

Uruchom polecenie instalacji modułów zależności:

```shell
bun install
```

> [Bun](https://bun.sh) to ulepszona i bardziej zoptymalizowana alternatywa dla NPM.

## Automatyczna kompilacja

Wejdź do folderu `📁 ui` (_user interface_) w swojej aplikacji, nad którą pracujesz, na przykład:

```shell
cd apps/moja_aplikacja/ui/
```

Aby automatycznie kompilować front-end po każdej zmianie kodu, uruchom:

```shell
bun run watch
```

> Upewnij się, że masz zainstalowany [Bun](https://bun.sh/).
 
## Automatyczna integracja front-endu z Netuno

Netuno pozwala uruchomić UI wraz z procesem serwera aplikacji Netuno.

> Wszystkie komunikaty kompilacji React będą zintegrowane w tym samym terminalu co aplikacja Netuno.

W tym celu wystarczy aktywować konfigurację w `commands` aplikacji Netuno w `📂 config/_development.json`, czyli w `command` z `path` równym `ui` ustawić `enabled` na `true`, w następujący sposób:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Za każdym razem, gdy edytujesz pliki konfiguracji aplikacji Netuno, musisz zrestartować serwer, aby przyjął nowe zmiany.

Na koniec uruchom/zrestartuj serwer z aplikacją Netuno, aby sprawdzić jego działanie.

I teraz wszystko będzie zintegrowane w jednym centralnym terminalu, dzięki czemu unikniesz wielu rozproszonych terminali; więcej na ten temat:

- [Centralny terminal](/docs/academy/explore/centralized-terminal)

## Inne technologie front-endu

W folderze `📁 ui` można skonfigurować dowolną technologię front-endu lub dodać dowolny nowy wymagany moduł zależności.

Jeśli nie chcesz używać żadnej ze standardowych technologii, możesz zastąpić ją dowolną inną, w szczególności dostosowując pliki:

- `package.json`
- `vite.config.js`