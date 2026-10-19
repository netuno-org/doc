---
sidebar_position: 2
id: create
title: Tworzenie z React
sidebar_label: Tworzenie z React
---

Ten proces tworzenia można zastosować w innych kontekstach, na przykład do utworzenia dowolnego typu projektu React; w takim przypadku należy odpowiednio dostosować nazwę i katalog, w którym wykonywane są polecenia.

Podstawowe założenie jest takie, że tworzona będzie warstwa webowa, czyli frontend naszej aplikacji Netuno.

Dlatego zakłada się, że wewnątrz aplikacji Netuno zostanie utworzona `strona` — domyślna nazwa warstwy frontendowej, ale może to być dowolna inna wybrana nazwa.

## Wymagania wstępne

Należy mieć zainstalowany Netuno:

- [Instalacja Netuno.](/docs/get-started/installation)

Ze względu na lepszą wydajność i inne zalety należy zainstalować Bun:

- [Instalacja Bun.](/docs/academy/website/bun)

## Tworzenie

Aby utworzyć aplikację React wewnątrz aplikacji Netuno, zwykle nazywamy ten katalog `strona`.

Więc mając **terminal** otwarty w **katalogu głównym swojej aplikacji** Netuno, który zwykle znajduje się w katalogu:

- `netuno/apps/MOJA_APLIKACJA`

> Gdzie `MOJA_APLIKACJA` to nazwa aplikacji Netuno.

Wykonaj polecenie:

```shell
bun create vite
```

Następnie pojawi się pytanie: `Project name:`

Wpisz `strona` i naciśnij klawisz `ENTER`.

Na następne pytanie: `Select a framework:`

Użyj klawiszy strzałek, naciśnij strzałkę w dół, aż zostanie wybrana opcja `React`, i naciśnij klawisz `ENTER`.

Na koniec pojawi się pytanie: `Select a variant:`

Użyj klawiszy strzałek, naciśnij strzałkę w dół, aż zostanie wybrana opcja `JavaScript`, i naciśnij klawisz `ENTER`.

To polecenie utworzy nowy katalog o nazwie `📂 strona`, w którym będzie znajdować się frontend z React.

Po utworzeniu frontendu z React wykonaj poniższe polecenia, aby zainstalować zależności:

```shell
cd strona
bun install
```

Otwórz katalog swojej aplikacji Netuno w preferowanym edytorze (np. VSCode, WebStorm itp.) i wejdź do utworzonego katalogu `strona`.

## Uruchamianie

Teraz możesz uruchomić serwer frontendu z React za pomocą polecenia:

```shell
bun run dev
```

Spowoduje to, że frontend będzie dostępny pod adresem [http://localhost:5173/](http://localhost:5173/); zwykle w terminalu może pojawić się ten lub inny adres z innym numerem portu. W każdym razie wystarczy otworzyć w przeglądarce adres wyświetlony w terminalu.

> Aby zakończyć działanie w terminalu, naciśnij jednocześnie klawisze `CTRL` i `C`.

## Instalacja zależności

Jeśli w terminalu działa serwer frontendu, czyli `bun run dev`, zaleca się jego zatrzymanie — naciśnij jednocześnie klawisze `CTRL` i `C`.

Zdecydowanie zalecamy zainstalowanie następujących pakietów NPM, ponieważ są bardzo przydatne podczas tworzenia aplikacji React z Netuno (kliknij każdy link, aby uzyskać więcej informacji o danym pakiecie):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Aby zainstalować wymienione pakiety, wystarczy wykonać następujący zestaw poleceń w terminalu:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Alternatywnie możesz zainstalować wszystkie pakiety jednocześnie:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Konfiguracja

Po wykonaniu powyższych poleceń możesz wymusić domyślny adres portu; przejdź do `📂 strona/vite.config.js` i dodaj konfigurację `server` w następujący sposób:

```javascript title="strona/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

Teraz po uruchomieniu poleceniem `bun run dev` zawsze będzie używany port `3000`.

### Less

Zmień rozszerzenie wszystkich plików `.css` znajdujących się w `strona/src` na `.less`.

> Nie zapomnij wprowadzić tej zmiany w kodzie JSX w wierszach, które wykonują `import` plików `.css` — zmień rozszerzenie na `.less`.

LESS pozwala na bardziej uporządkowane i nowoczesne tworzenie CSS.

### Dostosowywanie motywu Ant.Design

Aby dostosować kolory Ant.Design, użyj komponentu `ConfigProvider` w `App.jsx`.

Na przykład:

```jsx title="strona/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Mój przycisk z niestandardowym kolorem</Button>
            ...
        </ConfigProvider>
    );
}
...
```

W ten sposób można dostosować dowolną konfigurację stylizacji Ant.Design.

### Ciemny motyw

Można również użyć ciemnego motywu Ant.Design; wystarczy zaimportować `theme` zawierający tryb ciemny i zastosować go w `ConfigProvider`:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">Mój przycisk z niestandardowym kolorem</Button>
        ...
    </ConfigProvider>
...
```

### Zmiana stylu

Zauważ, że w powyższych parametrach `ConfigProvider` można łatwo zmienić styl Ant.Design; więcej o dostosowywaniu Ant.Design:

- [Dostosowywanie motywu](https://ant.design/docs/react/customize-theme)

Każdy komponent Ant.Design ma możliwe ustawienia Design Token, na przykład w przyciskach:

- [Przycisk – Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">Mój przycisk z niestandardowym kolorem</Button>
    ...
</ConfigProvider>
```

## Automatyczne uruchamianie frontendu z Netuno

Netuno pozwala uruchomić aplikację React razem z procesem serwera aplikacji Netuno.

> Wszystkie komunikaty kompilacji aplikacji React będą zintegrowane w tym samym terminalu co aplikacja Netuno.

W tym celu wystarczy dodać do konfiguracji `commands` aplikacji Netuno w `📂 config/_development.json` następujący fragment:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "strona",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Zawsze po edycji plików konfiguracyjnych aplikacji Netuno należy ponownie uruchomić serwer, aby przyjął nowe zmiany.

Na koniec uruchom/ponownie uruchom serwer ze swoją aplikacją Netuno, aby potwierdzić jego działanie.

I teraz wszystko będzie zintegrowane w jednym centralnym terminalu, co pozwala uniknąć wielu rozproszonych terminali; więcej na ten temat:

- [Scentralizowany terminal](/docs/academy/explore/centralized-terminal)

## Konfiguracja CORS (Cross-Origin Resource Sharing)

Aby skonfigurować CORS i uniknąć możliwych błędów w komunikacji frontendu z usługami aplikacji Netuno, edytuj konfigurację aplikacji w:

- `📂 config/_development.json`

Sprawdź, czy istnieje już konfiguracja `cors`; jeśli w `origins` znajduje się `*`, to dobrze sprawdzi się podczas tworzenia i może tak zostać.

Jeśli nie ma konfiguracji `cors`, dodaj ją na podstawie poniższego przykładu, przy czym adres musi być taki sam jak adres frontendu:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> Jeśli `origins` zawiera `*`, oznacza to, że obsługiwany będzie dowolny adres frontendu, na przykład:
> - `"origins": [ "*" ]`
> Zwykle używamy `*` podczas tworzenia.

Po wdrożeniu konfiguracji możesz zintegrować z frontendem wybrane usługi API bez problemów związanych z bezpieczeństwem CORS.

> Więcej o [CORS](/docs/academy/server/services/cors)

## Zmienne środowiskowe

Konfigurację zmiennych środowiskowych można zdefiniować, tworząc plik `strona/.env` z definicjami zmiennych, na przykład:

```
NODE_ENV=development
```

Można też zrobić to przez konfigurację aplikacji Netuno, na przykład w:

- `📂 config/_development.json`

I definiując zmienne środowiskowe w konfiguracji polecenia w parametrze `env`, na przykład:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "strona",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```