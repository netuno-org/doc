---
id: excel
title: Excel
sidebar_label: Excel
---

W każdym rodzaju działalności na ogół często spotyka się pliki Excel lub inne arkusze kalkulacyjne, takie jak Google Spreadsheets, LibreOffice, OpenOffice itp. ... Są one szeroko stosowane ze względu na prosty sposób zaspokajania potrzeby organizacji informacji, analizy, a nawet integracji z innymi arkuszami kalkulacyjnymi.

Dlatego Excel i spółka dobrze rozwiązują problem, gdy struktura informacji jest stosunkowo niewielka, a złożoność niezbyt duża.

Z czasem tendencja ta zwykle rośnie, generując coraz więcej plików z rozproszoną informacją.

![Obraz plików Excela](/docs/assets/business/excel-danger.jpg "Pliki w Excelu.")

Problem pojawia się, gdy ten plik Excel wraz z kilkoma innymi staje się potworem, w którym zarządzanie staje się trudne, a jeszcze gorzej, gdy angażuje wiele osób – zaczyna generować różne problemy, osłabiając informację do granicy, w której staje się ona wręcz nie do utrzymania.

Wtedy pojawia się potrzeba stworzenia solidniejszej aplikacji zdolnej do zarządzania profilami użytkowników, grupami, zarządzania danymi z walidacją i lepszą strukturą, eksportowania danych w złożonych raportach z wykresami i tabelami, przeprowadzania bardziej złożonych wyszukiwań, integracji z innymi systemami i wiele więcej.

> Główny dylemat polega na tym, że Excel jest stosunkowo tani, a opracowanie aplikacji do zarządzania jest zbyt drogie.

Z Netuno możemy przy **niskim nakładzie pracy** szybko stworzyć aplikację do zarządzania wszystkimi informacjami i tym samym definitywnie zastąpić rozproszone i trudne w zarządzaniu pliki Excela.

## Arkusz kalkulacyjny w tabelach bazy danych

Nie myśl, że baza danych jest bardzo złożona – zobaczysz, że nie jest, a nawet jest bardzo podobna do arkuszy Excel.

> Tabela bazy danych to to samo co arkusz kalkulacyjny.

Na przykład przeanalizuj swój arkusz kalkulacyjny w Excelu:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Produkt 	| Ilość 	| Cena jednostkowa 	| Cena całkowita 	|
| **2** 	|  Widelec  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Szklanka  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Nóż  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Cena całkowita**  	|    **66,00**    	|

Aby przechowywać te informacje w bazie danych, trzeba utworzyć tabelę do przechowywania informacji o **Produktach**.

Tabela będzie miała strukturę jak w poniższym przykładzie i będzie zawierać następujące dane:

<table>
    <thead>
        <tr>
            <th colspan="3">Produkty</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Nazwa</th>
            <th>Cena</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Widelec</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Szklanka</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Nóż</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Zatem zawsze, gdy używane są dane jakiegoś Produktu, muszą one obowiązkowo pochodzić z tej tabeli.

Innymi słowy, to tak, jakbyś miał arkusz kalkulacyjny przechowujący informacje o Produktach.

Każdy wiersz zawiera ID, unikalny identyfikator, na przykład numer sekwencyjny.

Aby ponownie przedstawić żądaną informację, dane dotyczące Produktu będą dostarczane przez naszą tabelę Produktów w następujący sposób:

![Obraz plików Excela](/docs/assets/business/excel-table.jpg "Pliki w Excelu.")