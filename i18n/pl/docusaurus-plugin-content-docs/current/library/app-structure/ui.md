---
id: ui
title: UI
sidebar_label: UI
---

Dostosowany frontend backoffice'u i dashboardów.

## Interfejs użytkownika

Jak sama nazwa wskazuje, w folderze `📂 ui` znajduje się logika interfejsu użytkownika aplikacji.

Umożliwia prowadzenie prac rozwojowych w celu zmiany zachowania backoffice'u aplikacji.

Można generować dashboardy na miarę, dodawać lub zmieniać funkcjonalności, między innymi.

Do rozwijania ogólnego kodu aplikacji, zarówno backendu, jak i frontendu, polecamy darmowe edytory kodu, takie jak:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Struktura folderów

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MojPrzycisk</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>KontenerDashboardu</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Kod źródłowy

Folder `📂 src` gromadzi kod aplikacyjny frontendu. W tym folderze znajduje się organizacja komponentów React, odpowiednio `components` i `containers`.

### Kontenery

Folder `📂 containers` jest przeznaczony dla kontenerów, czyli komponentów React dla obszarów z większą liczbą interakcji, to znaczy komponentów mających więcej funkcjonalności, które zwykle obejmują znaczną część ekranu i mogą agregować inne komponenty w zależności od zakresu.

Na przykład prezentuje tabelę zamówień z formularzem do filtrowania oraz wykres agregujący sumę miesięczną – wszystko to w jednym kontenerze, przy czym każdy element mógłby być osobnym komponentem, ale jest agregowany w kontenerze zamówień na dashboardzie.

### Komponenty

Folder `📂 components` jest przeznaczony dla _komponentów_ wielokrotnego użytku w React; zwykle implementują one dość specyficzne funkcjonalności, które przydają się do integracji z innymi komponentami lub kontenerami.

Zazwyczaj zawierają prostsze zachowanie i są mocno skupione na swoim celu w określonym zakresie, dzięki czemu nadają się do ponownego użycia w wielu kontenerach lub nawet w innych komponentach.

Przykładami komponentów mogą być konkretna tabela, formularz, określony typ wykresu i inne.

### Style

Folder `📂 styles` zwykle służy do stylów globalnych różnych kontenerów aplikacji. Choć nie ma w tym zakresie mocno ustalonego standardu, sugerujemy umieszczanie stylów właściwych dla `komponent` lub `kontener` razem z nim, czyli wewnątrz odpowiedniego folderu komponentu.
 
## Vite
 
Aby wygenerować końcową wersję kodu JavaScript zawierającą interfejs użytkownika aplikacji, skompilowaną i zoptymalizowaną, która jest przetwarzana i używana przez przeglądarkę, konieczne jest wykonanie odpowiedniej kompilacji kodu frontendu napisanego w React/JSX.

Ta kompilacja jest wykonywana przez [Vite](https://vite.dev/), a jej konfiguracja i pozostałe instrukcje znajdują się w pliku:

- `vite.config.js`

który znajduje się w katalogu głównym folderu `📂 ui`.

## Menedżer pakietów

Plik `package.json` jest używany przez menedżer modułów zależności; polecamy użycie [Bun](https://bun.sh) do zainstalowania wszystkich niezbędnych zależności frontendu.

Polecenia uruchamiania również korzystają z [Bun](https://bun.sh), co jest kolejną ważną rekomendacją.

Dlatego zalecamy instalację [Bun](https://bun.sh).

## Instrukcje

Plik `README.md` zawiera instrukcje instalacji i uruchamiania.

Aby zainstalować zależności, wykonaj:

- `bun install`

Aby uruchomić kompilację kodu frontendu w trybie deweloperskim:

- `bun run watch`

Lub jeśli ma to być końcowa, ostateczna kompilacja zoptymalizowana pod produkcję:

- `bun run build`

Domyślnie kompilacja tworzy następujące pliki:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Te pliki są integrowane w przetwarzaniu Netuno w celu wprowadzenia odpowiednich dostosowań na miarę na stronach backoffice'u aplikacji, takich jak dashboardy i funkcje specyficzne.