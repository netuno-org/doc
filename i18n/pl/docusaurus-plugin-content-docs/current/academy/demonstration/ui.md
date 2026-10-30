---
sidebar_position: 7
id: ui
title: Interfejs i design
---

## Wprowadzenie

Rozwój frontendu, czyli tego, co jest przetwarzane wizualnie przez przeglądarkę, odbywa się w folderze **ui**.

Domyślnie w tym folderze znajduje się środowisko programistyczne oparte na <a href="https://reactjs.org/" target="_blank">ReactJS</a> z <a href="https://ant.design/" target="_blank">Ant.Design</a> i <a href="http://lesscss.org/" target="_blank">Less</a>, kompilowane przy użyciu <a href="https://vite.dev/" target="_blank">Vite</a>.

Mimo że domyślne środowisko jest skonfigurowane pod te technologie, ponieważ są dziś powszechnie stosowane, nie jest ono do nich ograniczone.

Jeśli chcesz użyć innej technologii, takiej jak **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript** itp., wystarczy zmienić w folderze `📂 ui` konfigurację `📂 package.json` i `📂 vite.config.js` na preferowane technologie.

> Więcej o [zintegrowanym i centralnym terminalu](/docs/academy/explore/centralized-terminal).

## Wymagania wstępne

Przed rozpoczęciem warto upewnić się, że masz zainstalowany [Bun](https://bun.sh/).

> Zobacz, [jak zainstalować Bun](/docs/academy/website/bun).

Aby lepiej zrozumieć działanie interfejsu użytkowania, polecamy:

- [Więcej o warstwie UI front-endu.](/docs/academy/ui/ui-layer)

## Rozszerzanie usługi

Po utworzeniu usługi **pracownicy** w `📂 server/services/pracownicy.js` za pomocą Visual Studio Code, która udostępnia informacje w formacie <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> pod adresem:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/pracownicy</a>

Następnym krokiem jest rozszerzenie jej tak, aby prezentowała dane w interfejsie przeglądarki.

Za pomocą tych danych przedstawimy je w tabeli i na wykresie.

Zakładając, że masz otwarty Visual Studio Code lub inny edytor tekstu z aplikacją **Demo**.

Otwórz w edytorze następujący plik:

`📂 ui/src/containers/KontenerDashboardu/index.jsx`

Zmodyfikujemy istniejący kod.

### Przygotowanie `state`

Na samym początku komponentu `KontenerDashboardu` wewnątrz `function` znajduje się definicja jego _state_.

Dodaj nowy wpis do przechowywania danych pracowników w następujący sposób:

```jsx
            // 👇 Dodaj nowe linie kodu poniżej:
            const [pracownicy, setPracownicy] = useState([]);
            const [ladowanie, setLadowanie] = useState(false);
```

Czyli dodaj nową linię stanu `const [pracownicy, setPracownicy] = useState([]);`.

### Utworzenie funkcji `wczytajPracownikow`

Nieco niżej zauważ, że istnieje funkcja o nazwie `wczytajPracownikow`; funkcja ta pobiera dane pracowników, które są obecnie wyświetlane na dashboardzie.

> Ta funkcja służy do wczytywania danych pracowników.

Wstaw poniższy kod:

```jsx
    /**
    *** 🚀 Wczytuje dane pracowników.
    ***    Poprzez wykonanie usługi:
    **     http://localhost:9000/services/pracownicy
    */
    const wczytajPracownikow = () => {
        setPracownicy([]);
        setLadowanie(true);
        _service({
            url: intl.locale.indexOf('pl') == 0 ? '/services/pracownicy' : '/services/workers',
            success: (odpowiedz) => {
                setPracownicy(odpowiedz.json);
                setLadowanie(false);
            },
            fail: (e) => {
                setLadowanie(false);
                console.error('Błąd usługi pracowników.', e);
                message.error(intl.formatMessage({ id: `${komunikaty}.blad_ladowania` }));
            }
        });
    };
```

Powyższy kod przekazuje dane pracowników do _state_ komponentu w ReactJS, wykonując usługę **pracownicy**, która po otrzymaniu danych w JSON zapisuje je w _state_ przez wywołanie `setPracownicy`.

Końcowy kod powinien mieć następującą strukturę:

```jsx
    useEffect(() => {
        ...
    }, []);

    const wczytajPracownikow = () => {
        ...
    }

    return ( 
        ...
    );
```

> Gdzie `...` to poszczególne linie kodu pominięte w odpowiednich blokach.

### Uruchomienie hooka `useEffect`

Teraz pozostaje uruchomić nasz hook `useEffect`, gdy komponent jest „montowany”; hook ten jest wykonywany, gdy komponent jest budowany w warstwie wizualnej przeglądarki.

W tym celu wystarczy nieco wyżej dodać linię kodu `wczytajPracownikow();` wewnątrz hooka `useEffect` w następujący sposób:

```jsx
    useEffect(() => {
        wczytajPracownikow();
    }, []);
```

Ta nowa linia kodu wywoła funkcję wykonującą usługę <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/pracownicy</a>, utworzoną wcześniej, aby pobrać dane w JSON i zapisać je w `state` (_stanie_) komponentu do zaprezentowania w `return` (_widoku_).

### Kompilacja

**Zapisz** plik, a następnie zauważ, że w **terminalu**, w którym działa Netuno, pojawi się wynik nowej kompilacji **ui**, z nowymi liniami wyniku kompilacji <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

Oczekiwany wynik w **terminalu** powinien być podobny do poniższego:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

Jeśli w kompilacji wystąpi jakikolwiek błąd, w **terminalu** pojawi się wskazanie problemu.

Do tego miejsca zrealizowaliśmy korzystanie z naszej usługi **pracownicy**, a uzyskane dane są zapisywane w `state` komponentu `KontenerDashboardu`, dzięki czemu są dostępne do wykorzystania w `return`.

## Prezentacja danych

Pozostaje zaprezentować dane wizualnie w interfejsie, który użytkownik widzi w przeglądarce.

Aby przedstawić dane w przeglądarce, musimy zmienić `return`, który odpowiada za wygląd wizualny komponentów w ReactJS.

Na końcu kodu `KontenerDashboardu` znajdziesz: `return ( ... );`

Zmodyfikujemy go, dodając tylko jedną linię kodu, aby zawierał jeszcze komponent `WizualizacjaDanych`, który zaprezentuje dane dotyczące **pracowników**. Kod powinien wyglądać następująco:

```jsx
    // 🔍 W istniejącym kodzie znajdź:
    return (
    <div ref={ref}>
      { ladowanie == false ?
        <WizualizacjaDanych data={pracownicy} />
        : <Spin/>
      }
      <ListaUslug />
    </div>
  );
```

Zauważ, że należy dodać tylko poniższą linię:

```jsx
<WizualizacjaDanych data={pracownicy} />
```

W ten sposób `WizualizacjaDanych` otrzyma dane uzyskane przez usługę **pracownicy** poprzez JSON, które zostały zapisane w `state`.

### Ostateczna kompilacja

**Zapisz** plik ze wszystkimi dotychczasowymi zmianami.

Upewnij się, że w wynikach **terminala** nie ma błędów.

Teraz odśwież stronę w przeglądarce, a powinieneś zobaczyć końcowy wynik, albo alternatywnie kliknij poniższy link:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Jeśli dashboard pojawi się jako pusty, oznacza to, że w kodzie są błędy.
>
> Sprawdź w konsoli **przeglądarki** w **narzędziach deweloperskich**, czy występują błędy.

## Dowiedz się więcej 👇

Krótkie wprowadzenie do <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Przewodnik dla początkujących po ReactJS.</a>