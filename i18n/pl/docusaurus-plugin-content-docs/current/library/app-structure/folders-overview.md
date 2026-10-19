---
sidebar_position: 1
id: folders-overview
title: Przegląd folderów
sidebar_label: Przegląd
---

Poznaj foldery i pliki aplikacji.

## Struktura

Od katalogu głównego, w którym zainstalowano Netuno, możemy znaleźć folder `📂 apps`.

Wewnątrz folderu `📂 apps` znajdują się wszystkie aplikacje dostępne na platformie Netuno.

Niektóre aplikacje mogą być tworzone lokalnie, a inne mogą być zewnętrzne, na przykład aplikacje będące
klonami repozytoriów GIT.

Zobacz od katalogu głównego Netuno pełną strukturę nowo utworzonej aplikacji:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>moja_aplikacja</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> W folderze `apps` znajdują się wszystkie aplikacje dostępne w Netuno.

Początkowo w tym folderze istnieje już aplikacja `demo`, która jak sama nazwa wskazuje jest **demo**_nstracją_
funkcjonalności Netuno.

Gdy tworzona jest nowa aplikacja, dodawany jest nowy folder zawierający tę samą hierarchię podfolderów, jak
przedstawiono powyżej.

## Główne foldery

Wewnątrz folderu aplikacji znajdują się główne foldery, z których każdy ma określone przeznaczenie.

Głównymi folderami są:

- [📂 config](config) - Konfiguracje ogólne;
- [📂 dbs](dbs) - Elementy związane z bazą danych;
- [📂 docs](docs) - Dokumentacja i ogólnie inne dokumenty;
- [📂 public](public) - Treści publiczne dostępne bezpośrednio przez URL, takie jak obrazy, JavaScript i CSS;
- [📂 server](server) - Kod backendu, taki jak usługi, joby, szablony, raporty i ogólnie całe API.
- [📂 storage](storage) - Organizacja plików związanych z danymi lub wykorzystywanych w kodzie.
- [📂 ui](ui) - Interfejs użytkownika backoffice, kod frontendu, taki jak dashboardy i inne funkcjonalności.