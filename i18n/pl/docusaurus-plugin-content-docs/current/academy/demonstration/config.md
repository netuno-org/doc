---
sidebar_position: 2
id: config
title: Konfiguracja
---

# Konfiguracja aplikacji

Ten przewodnik przedstawia pierwsze kroki konfiguracji języka aplikacji Demo, bazy danych oraz włączania automatycznych poleceń uruchamianych wraz z serwerem.

Wszystkie zmiany wprowadza się w pliku konfiguracyjnym `_development.json` aplikacji **Demo**, znajdującym się w folderze /apps/demo/**config**.

### Wymagania wstępne

Przed edycją konfiguracji potwierdź następujące punkty:

- Aplikacja Demo została już utworzona i zainicjalizowana.
- Jesteś w katalogu głównym projektu Netuno.
- Edytor kodu jest otwarty na pliku `/apps/demo/config/development.json`.
- Będziesz mógł zrestartować serwer po zapisaniu zmian.

## Konfiguracja języków

### 1. Aplikacja

W pliku konfiguracyjnym znajdź pola `language` i `locale`, aby zmienić język aplikacji.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Ustaw wartości zgodnie z wybranym językiem:

- **Portugalski**: `pt_PT` lub `pt_BR`
- **Angielski**: `en_GB` lub `en_US`

### 2. Baza danych

Znajdź obiekt **"db"**, a następnie ustawienia **"default"**.

Zmień pole **"name"**, aby wskazać odpowiednią bazę danych:

- `demo_pt`: baza danych w języku portugalskim.
- `demo_en`: baza danych w języku angielskim.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Włączanie wielu poleceń

Netuno pozwala na jednoczesne uruchamianie wielu poleceń podczas startu serwera, wyświetlając ich dane wyjściowe w tej samej konsoli.

Domyślnie aplikacja **Demo** zawiera skonfigurowane, ale wyłączone polecenie `bun run watch`. Polecenie to automatycznie kompiluje wszelkie zmiany wprowadzone w plikach kodu backoffice.

Aby je włączyć, znajdź tablicę **"commands"** i zmień wartość pola **enabled** z false na **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parametry obiektu "commands"

- `enabled`: włącza (true) lub wyłącza (false) automatyczne wykonywanie polecenia.
- `path`: określa ścieżkę (folder) aplikacji, w której polecenie zostanie wykonane.
- `command`: określa polecenie, które zostanie wykonane w terminalu.

:::tip
Możesz dodać inne polecenia do tablicy `"commands"`, pod warunkiem że zachowasz tę samą strukturę obiektu.
:::


Po zapisaniu pliku konfiguracyjnego zrestartuj serwer Netuno, aby zastosować zmiany.


## Oczekiwany wynik

Po zrestartowaniu serwera potwierdź następujące punkty:

- Aplikacja Demo działa w skonfigurowanym języku.
- Konsola wyświetla wykonanie polecenia `bun run watch`, jeśli zostało ono włączone.

## Następne kroki

Przejdź do kolejnego etapu **Formularz**, aby poznać i zmodyfikować aplikację demonstracyjną.