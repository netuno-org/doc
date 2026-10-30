---
id: implementing-tables-charts
title: Implementacja tabel i wykresów
sidebar_label: Tabele i wykresy
---

W tym samouczku utworzymy interfejs i logikę prostej aplikacji, skupiając się na wizualizacji danych. Opracowanie projektu obejmie następujące zagadnienia:

- Tworzenie **„Formularzy”**, **„Pól”** i **„Relacji”** do strukturyzacji bazy danych.
- Budowę **„Usług sieciowych REST”** do dostarczania danych i dynamicznego wyświetlania informacji w tabelach i na wykresach w aplikacji, z wykorzystaniem bibliotek _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ i zależności _Chart.js_, a także komponentu tabeli z <a href="https://ant.design/" target="_blank">Ant Design</a>.

Cała struktura wizualna projektu będzie tworzona przy użyciu **HTML, JavaScript i React.js**.
Zalecana jest podstawowa znajomość:
- **JavaScript**
- **React.js**
- **HTML**

💡 **Jeśli masz wątpliwości dotyczące tych etapów, zapoznaj się z:**
   - [Przewodnik po interfejsie: Formularze](/docs/academy/ui/forms)
   - [Przewodnik po interfejsie: Pola](/docs/academy/ui/fields)
   - [Przewodnik po interfejsie: Relacje między formularzami](/docs/academy/ui/relationships-between-forms)
   - [Przewodnik po interfejsie: Usługi sieciowe REST](/docs/academy/explore/services)


## Produkt końcowy

Po wykonaniu wszystkich kroków tego samouczka zbudujesz funkcjonalny panel w obszarze roboczym Netuno, zawierający:

* **Tabelę danych** z listą rekordów pracowników i sumami godzin.
* Dynamiczny i kolorowy **wykres słupkowy** wizualnie przedstawiający te same dane.

![produkt-koncowy-pl.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Architektura rozwiązania

Przed napisaniem jakiegokolwiek kodu warto zrozumieć, jak współgrają ze sobą poszczególne elementy. Rozwiązanie jest podzielone na **4 warstwy**, które komunikują się od góry do dołu:

```
KontenerDashboardu         (pobiera dane z serwera)
       │
       ▼
WizualizacjaDanych          (organizuje układ w dwóch kolumnach)
       │
  ┌────┴────┐
  ▼         ▼
ListaTabeli  WykresSlupkowy        (renderują otrzymane dane)
```

:::tip
Zaletą tej architektury jest to, że każdy komponent ma **jedną odpowiedzialność**.
:::

## Krok 1: Struktura danych

Pierwszym krokiem jest utworzenie formularzy, skonfigurowanie relacji między nimi i wypełnienie ich danymi, aby później wygenerować tabelę i wykres.

To jest diagram z architekturą formularzy i polami, które należy odtworzyć w środowisku Netuno:

![pierwszy-krok-pl.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Ważne:** Chociaż pole `id` występuje na diagramie, **nie trzeba tworzyć go ręcznie**. Netuno generuje ten identyfikator automatycznie zaraz po utworzeniu tabeli.

### Szablon dashboardu

Aby wyświetlić tabelę i wykres, potrzebujemy miejsca w interfejsie aplikacji. Netuno udostępnia już szablon bazowy dla głównego panelu.

Otwórz edytor kodu i znajdź plik:

```text
/apps/mojaapp/server/templates/dashboard.html
```
*(Pamiętaj, aby zastąpić **mojaapp** rzeczywistą nazwą folderu swojej aplikacji).*

Zauważysz następującą linię kodu HTML:

```html
<div id="app-dashboard"></div>
```

## Krok 2: Usługa danych

Teraz, gdy mamy gotową bazę danych i przygotowany HTML, musimy utworzyć „pośrednika” (usługę sieciową REST). Będzie on odpowiedzialny za sięgnięcie do bazy danych, obliczenie sumy godzin każdego pracownika i przekazanie tej informacji w gotowej formie do tabeli i wykresu.


### Tworzenie pliku usługi

Usługi w Netuno są przechowywane w folderze `server/services/`. Przejdź do katalogu swojego projektu i utwórz plik `pracownicy.js`:

```text
/apps/mojaapp/server/services/pracownicy.js
```
**KontenerDashboardu** wykrywa język panelu i wywołuje **/services/pracownicy**, gdy panel jest w języku polskim, lub **/services/workers**, gdy jest w języku angielskim. Każdy język ma własny plik usługi.

### Pisanie kodu

Ten kod wykonuje trzy główne działania przy użyciu natywnych zasobów Netuno (**_db**, **_val** i **_out**):

- **Zapytanie `_db.query`:** Wyszukuje w bazie danych tylko **aktywnych** pracowników i oblicza sumę przepracowanych godzin dla każdego z nich.

- **Przetwarzanie `_val.list` i `_val.map`:** Porządkuje wynik w czystą listę ze strukturalnymi obiektami.

- **Odpowiedź `_out.json`:** Wysyła dane w formacie JSON, aby interfejs (React) mógł je odczytać.

Otwórz plik `pracownicy.js` i wklej poniższy kod:

```javascript
// 1. Zapytanie, _db.query() wykonuje SQL i zwraca listę znalezionych rekordów.
const rekordyBazy = _db.query(`
    SELECT DISTINCT
        pracownik.nazwa, SUM(DATEDIFF(HOUR, rejestr.poczatek, rejestr.koniec)) AS suma
    FROM pracownik INNER JOIN rejestr
        ON pracownik.id = rejestr.pracownik_id
    WHERE pracownik.aktywny = true AND rejestr.aktywny = true
    GROUP BY pracownik.nazwa
    ORDER BY suma ASC
`);

// 2. Przetwarzanie danych, _val.list() tworzy pustą listę do przechowywania przetworzonych danych.
const lista = _val.list();

// Iteruje po każdym wierszu zwróconym przez bazę danych
for (const rekordBazy of rekordyBazy) {
    lista.add(
        // _val.map() tworzy obiekt z polami, które będzie konsumować React
        _val.map()
            .set("nazwa", rekordBazy.getString("nazwa"))  // nazwa → pole "nazwa"
            .set("suma", rekordBazy.getInt("suma"))       // suma godzin → pole "suma"
    );
}

// 3. Odpowiedź
// Wysyła końcową listę w formacie JSON do interfejsu React.
_out.json(lista);
```
:::tip
- **Uwaga na nazwy pól:** Pola zdefiniowane tutaj jako **"nazwa"** i **"suma"** są dokładnie tymi samymi, których komponenty React będą szukać w kolejnych krokach (`dataIndex: 'nazwa'` i `dataIndex: 'suma'`). Muszą być identyczne.

- **O filtrze `aktywny = true`:** Baza danych ma kolumnę **aktywny** w tabelach **pracownik** i **rejestr**. Filtrując tylko aktywne rekordy, gwarantujemy, że zarchiwizowane lub dezaktywowane dane nie pojawią się w tabeli ani na wykresie.
:::

## Krok 3: Środowisko frontendowe (React)

Teraz, gdy backend (baza danych i usługi) jest gotowy, przygotujemy interfejs wizualny.

Otwórz terminal i wykonaj poniższe kroki:

#### 1. Instalacja podstawowych zależności
Przejdź do folderu `ui` swojej aplikacji i zainstaluj pakiety.

```bash
npm install
```

#### 2. Instalacja bibliotek do wykresów

Ponieważ projekt będzie wyświetlać wykresy, pobierz biblioteki, które narysują je na ekranie:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Zarządzanie wieloma językami

Zainstaluj bibliotekę do zarządzania wieloma językami:

```bash
npm install react-intl
```

#### 4. Uruchomienie kompilatora (watch)

Gdy wszystko jest zainstalowane, po każdym zapisaniu pliku ekran zaktualizuje się automatycznie:

```bash
npm run watch
```

#### 5. Tworzenie komponentów
Aby zachować porządek w projekcie, utwórz osobne komponenty dla tabeli i wykresu.

Przejdź do katalogu `src/components/` swojej aplikacji i utwórz foldery:

* Tabela: ListaTabeli
* Wykres: WykresSlupkowy
* Kontener: WizualizacjaDanych

```text
/apps/nazwa_twojej_aplikacji/ui/src/components/ListaTabeli/
/apps/nazwa_twojej_aplikacji/ui/src/components/WykresSlupkowy/
/apps/nazwa_twojej_aplikacji/ui/src/containers/WizualizacjaDanych/
```

## Krok 4: Komponent ListaTabeli

Komponent **ListaTabeli** otrzyma dane z usługi i automatycznie zbuduje kolumny przy użyciu **Ant Design** — biblioteki gotowych komponentów wizualnych, która jest już częścią interfejsu Netuno.

Przejdź do folderu `ListaTabeli` i utwórz plik `index.jsx`:

```text
/apps/nazwa_twojej_aplikacji/ui/src/components/ListaTabeli/index.jsx
```

Otwórz plik i wklej poniższy kod:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Komponent tabeli z Ant Design

import './index.less';

const komunikaty = 'kontenerdashboardu.wizualizacjadanych.tabela';

function ListaTabeli({ dane = [] }) {
  // Definicja nagłówków i pola obiektu do wyświetlenia w każdej kolumnie
  const kolumny = [
    {
      title: <FormattedMessage id={`${komunikaty}.pracownicy`} />, // Przetłumaczony tytuł
      dataIndex: 'nazwa',  // Pole "nazwa" z JSON-a zwróconego przez usługę
    },
    {
      title: <FormattedMessage id={`${komunikaty}.suma`} />,
      dataIndex: 'suma', // Pole "suma" z JSON-a zwróconego przez usługę
    }
  ];

  return (
    <Table
      columns={kolumny}      // Struktura kolumn
      dataSource={dane}      // Same dane (lista obiektów)
      pagination={false}     // Bez paginacji: wszystkie rekordy naraz
      bordered={true}        // Z widocznymi obramowaniami komórek
    />
  );
}

export default ListaTabeli;
```

 **Zrozumienie kodu:**

Ten komponent funkcyjny otrzymuje listę `dane` jako parametr (prop) i przekazuje ją bezpośrednio do `<Table>` z Ant Design.

Konfiguracja **columns** informuje Ant Design, jaki tytuł wyświetlić w nagłówku **title** i które pole obiektu JSON wypełnić w komórce `dataIndex`. Ant Design automatycznie zajmuje się całym HTML, stylami obramowań i układem — nie trzeba tworzyć ręcznego CSS.

**Plik `index.less`:** Utwórz plik `index.less` w tym samym folderze. Na razie może pozostać pusty, ponieważ Ant Design zapewnia podstawowe stylowanie tabeli.


## Krok 5: Komponent WykresSlupkowy

Utworzymy wykres słupkowy do wizualizacji danych przy użyciu biblioteki **react-chartjs-2**. Ten komponent otrzyma dane, przekształci je do formatu zrozumiałego dla Chart.js, przypisze kolory i narysuje wykres na ekranie.

Przejdź do folderu `WykresSlupkowy` i utwórz plik o nazwie `index.jsx`:

```text
/apps/nazwa_twojej_aplikacji/ui/src/components/WykresSlupkowy/index.jsx
```
Otwórz plik i wklej poniższy kod:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Komponent wykresu słupkowego
import { Chart, registerables } from 'chart.js';  // Rdzeń Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const komunikaty = 'kontenerdashboardu.wizualizacjadanych.wykres';

// OBOWIĄZKOWE: zarejestruj wszystkie elementy Chart.js przed użyciem.
// Bez tej linii wykres się nie renderuje i zgłasza błąd w konsoli.
Chart.register(...registerables);

function WykresSlupkowy({ dane }) {
  const intl = useIntl();
  const [daneWykresu, setDaneWykresu] = useState(null); // Dane w formacie Chart.js

  useEffect(() => {
    // Paleta 7 kolorów dla słupków (cykliczna, jeśli elementów jest więcej niż 7)
    const kolory = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const etykiety = [];
    const wartosci = [];

    // Struktura danych wymagana przez Chart.js
    const noweDaneWykresu = {
      labels: [],       // Nazwy na osi X (poziomej)
      datasets: [
        {
          label: intl.formatMessage({ id: `${komunikaty}.etykieta` }), // Przetłumaczona legenda
          data: [],           // Wartości na osi Y (wysokość słupków)
          backgroundColor: [] // Kolor każdego słupka
        }
      ]
    };

    // Iteruj po otrzymanych danych i buduj listy
    for (const i in dane) {
      etykiety.push(dane[i].nazwa);   // Nazwa pracownika → oś X
      wartosci.push(dane[i].suma);    // Suma godzin → wysokość słupka

      // (i + 1) % 7: gdy "i" osiągnie 7, wraca do 0, powtarzając kolory cyklicznie
      noweDaneWykresu.datasets[0].backgroundColor.push(kolory[(i + 1) % 7]);
    }

    noweDaneWykresu.labels = etykiety;
    noweDaneWykresu.datasets[0].data = wartosci;

    setDaneWykresu(noweDaneWykresu); // Zapisz w stanie, aby wywołać ponowne renderowanie

  }, [dane]); // Uruchamiaj ponownie za każdym razem, gdy "dane" się zmienią

  // Dopóki dane nie zostały przetworzone, nic nie renderuj
  if (daneWykresu == null) {
    return null;
  }

  return (
    <Bar data={daneWykresu} />
  );
}

export default WykresSlupkowy;
```
**Zrozumienie kodu:**

Ten komponent ma trzy główne zadania:

**Przygotowanie `useState`:** Inicjuje komponent stanem `null`, aby poczekać na przetworzenie danych przychodzących z serwera.

**Przetwarzanie danych `useEffect`:** Gdy dane przychodzą przez prop `dane`, Hook **useEffect** uruchamia się automatycznie. Definiuje paletę kolorów i używa pętli **for**, aby rozdzielić informacje: nazwy pracowników trafiają do etykiet osi X **labels**, sumy godzin określają wysokość słupków `data`, a każdemu słupkowi cyklicznie przypisywany jest kolor.

**Rysowanie na ekranie `return`:** Używa komponentu `<Bar>` z biblioteki do narysowania wykresu na podstawie przetworzonych danych zapisanych w stanie.

**Plik `index.less`:** Utwórz także plik `index.less` w folderze `WykresSlupkowy`. Na razie może pozostać pusty.


## Krok 6: Układ wizualny WizualizacjaDanych

Teraz, gdy komponenty tabeli i wykresu są gotowe, potrzebujemy kontenera, który umieści je obok siebie na ekranie.

Przejdź do folderu **WizualizacjaDanych** i utwórz plik o nazwie `index.jsx`:

```text
/apps/nazwa_twojej_aplikacji/ui/src/containers/WizualizacjaDanych/index.jsx
```

Otwórz plik i wklej poniższy kod:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Tytuły tłumaczone na poszczególne języki

import WykresSlupkowy from "../../components/WykresSlupkowy";
import ListaTabeli from "../../components/ListaTabeli";

import './index.less';

const komunikaty = 'kontenerdashboardu.wizualizacjadanych';

function WizualizacjaDanych({ dane = [] }) {
  return (
    <div>
      <div className="row">              {/* Wiersz Bootstrapa */}

        {/* Lewa kolumna: tabela */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading wizualizacja-danych__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${komunikaty}.tabela.tytul`} />
              </h3>
            </div>
            <div className="panel-body">
              <ListaTabeli dane={dane} />   {/* Przekazuje dane do tabeli */}
            </div>
          </div>
        </div>

        {/* Prawa kolumna: wykres */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading wizualizacja-danych__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${komunikaty}.wykres.tytul`} />
              </h3>
            </div>
            <div className="panel-body">
              <WykresSlupkowy dane={dane} />    {/* Przekazuje te same dane do wykresu */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WizualizacjaDanych;
```
**Zrozumienie kodu:**

Ten komponent pełni rolę wizualnego organizatora. Otrzymuje listę `dane` i przekazuje ją do dwóch komponentów podrzędnych bez żadnych przekształceń.

Klasy `row` i `col-lg-6` pochodzą z siatki Bootstrap i dzielą ekran na pół: lewa kolumna zawiera tabelę, a prawa wykres. Na mniejszych ekranach (telefonach) automatycznie układają się jedna pod drugą.

Klasy `panel`, `panel-heading` i `panel-body` tworzą wygląd „ramki z tytułem” dla każdego komponentu.

**Plik `index.less`:** Utwórz także plik `index.less` w tym folderze na przyszłe stylowanie paneli.

## Krok 7: Kontener dashboardu

Mamy już usługi w backendzie i komponenty wizualne we frontendzie. Potrzebujemy kontenera, który pójdzie do serwera, pobierze dane i przekaże je do **WizualizacjaDanych**.

Netuno automatycznie generuje podstawową strukturę dashboardu. Edytuj istniejący plik:

```text
/apps/nazwa_twojej_aplikacji/ui/src/containers/KontenerDashboardu/index.jsx
```

Zastąp zawartość pliku poniższym kodem:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Oficjalny klient HTTP Netuno

import { Spin, message } from 'antd';           // Wskaźnik ładowania i komunikaty błędów

import WizualizacjaDanych from "../WizualizacjaDanych"; // Układ wizualny

import { useIntl } from 'react-intl';           // Obsługa wielu języków

import './index.less';

const komunikaty = 'kontenerdashboardu.wizualizacjadanych';

function KontenerDashboardu({}, ref) {
  const intl = useIntl();
  const [pracownicy, setPracownicy] = useState([]);   // Stan: lista pracowników
  const [ladowanie, setLadowanie] = useState(false); // Stan: czy trwa ładowanie?

  // Po otwarciu strony automatycznie uruchom pobieranie
  useEffect(() => {
    zaladujPracownikow();
  }, []);

  const zaladujPracownikow = () => {
    setPracownicy([]);      // Wyczyść poprzednie dane
    setLadowanie(true);     // Włącz wskaźnik ładowania

    _service({
      // Wykrywa język panelu i wywołuje właściwy adres URL usługi
      url: intl.locale.indexOf('pl') == 0 ? '/services/pracownicy' : '/services/workers',
      success: (response) => {
        setPracownicy(response.json); // Zapisz otrzymane dane w stanie
        setLadowanie(false);
      },
      fail: (e) => {
        setLadowanie(false);
        console.error('Usługa pracowników nie powiodła się.', e);
        message.error(intl.formatMessage({ id: `${komunikaty}.blad_ladowania` }));
      }
    });
  };

  // Pozwala komponentowi nadrzędnemu (Dashboard) wywołać zaladujPracownikow() przez ref
  useImperativeHandle(ref, () => ({
    zaladujPracownikow
  }));

  return (
    <div ref={ref}>
      { ladowanie == false
        ? <WizualizacjaDanych dane={pracownicy} /> // Dane gotowe: pokaż panel
        : <Spin/>                              // Nadal ładowanie: pokaż wskaźnik
      }
    </div>
  );
}

export default React.forwardRef(KontenerDashboardu);
```

**Zrozumienie kodu:**

Ten komponent ma trzy główne zadania:

**Stan początkowy `useState`:** Tworzy dwa wewnętrzne mechanizmy kontrolne — **pracownicy** (lista pochodząca z serwera) i **ladowanie** (wskaźnik informujący, czy dane są nadal pobierane).

**Pobieranie danych `_service`:** Funkcja **zaladujPracownikow** używa **_service** do wywołania usługi backendowej. W przeciwieństwie do natywnego **fetch** w JavaScripcie, **_service** automatycznie zarządza uwierzytelnianiem, sesją i obsługą błędów. Wykrywa także język panelu i wybiera właściwy adres URL: `/services/pracownicy` dla języka polskiego, `/services/workers` dla języka angielskiego.

**Dystrybucja i rysowanie `return`:** Podczas pobierania danych wyświetla wskaźnik ładowania **(Spin)**. Gdy dane dotrą, przekazuje listę **pracownicy** do **WizualizacjaDanych**, która rozdziela ją do tabeli i wykresu.

### Stylowanie dashboardu

Otwórz plik `index.less` w folderze `KontenerDashboardu` i wklej poniższy kod, aby wyróżnić nagłówki paneli:

```text
/apps/nazwa_twojej_aplikacji/ui/src/containers/KontenerDashboardu/index.less
```

```css
.tloPanelu {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Zrozumienie kodu:**

Ta klasa definiuje niebieskie tło **(#3f54ba)** i obszar wypełnienia **(padding)** w nagłówkach.

Jest używana przez klasy `wizualizacja-danych__panel` w `WizualizacjaDanych`, aby tytuły **Tabela** i **Wykres** były wizualnie wyróżnione.


## Krok 8: Kompilowanie projektu

Aby upewnić się, że cały kod React zostanie skompilowany przez Netuno:

* **Jeśli terminal pozostał otwarty** z uruchomionym w tle `npm run watch`: zmiany są kompilowane automatycznie po każdym zapisaniu pliku.
* **Jeśli zamknąłeś terminal** lub proces się zatrzymał: nie ma problemu. Otwórz terminal ponownie, przejdź do folderu `ui` i ponownie wykonaj polecenie:

```bash
npm run watch
```

## Podsumowanie

W trakcie tego samouczka zdobyłeś podstawowe umiejętności pracy z platformą Netuno, opanowując cykl integracji przepływu danych między serwerem a interfejsem użytkownika.

Ten projekt obejmował następujące zagadnienia:

- **Baza danych:** Tworzenie i organizowanie tabel oraz struktur danych w sposób wizualny i wydajny.

- **Backend REST:** Tworzenie usług i logiki biznesowej do udostępniania danych przez API.

- **Frontend z React:** Integracja i dynamiczne wyświetlanie tych danych w nowoczesnym i responsywnym interfejsie.

Jeśli napotkasz trudności lub masz sugestie ulepszeń, skontaktuj się z nami.

Nasz zespół i społeczność chętnie pomogą.

Dobrego programowania!