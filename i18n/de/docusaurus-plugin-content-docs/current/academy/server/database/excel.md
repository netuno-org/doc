---
id: excel
title: Excel
sidebar_label: Excel
---

In praktisch jedem Geschäftsbereich gibt es üblicherweise diese besagten Excel-Dateien oder andere Arten von Tabellenkalkulationen wie Google Spreadsheets, LibreOffice, OpenOffice usw. Sie sind weit verbreitet, weil sie auf einfache Weise das Bedürfnis nach Organisation von Informationen, Analyse und sogar der Integration mit anderen Tabellenkalkulationen erfüllen.

Excel und Co. lösen das Problem also gut, wenn die Informationsstruktur relativ klein und die Komplexität nicht allzu hoch ist.

Im Laufe der Zeit nimmt dies tendenziell zu und es entstehen immer mehr Dateien mit verteilten Informationen.

![Bild von Excel-Dateien](/docs/assets/business/excel-danger.jpg "Excel-Dateien.")

Das Problem entsteht, wenn diese Excel-Datei zusammen mit einigen weiteren zu einem Monster wird, dessen Verwaltung schwierig wird, und noch schlimmer, wenn mehrere Personen involviert sind: Dann entstehen verschiedene Probleme, die die Informationen zunehmend schwächen, bis sie schließlich untragbar werden.

Dann entsteht die Notwendigkeit, eine robustere Anwendung zu erstellen, die Benutzerprofile und Gruppen verwalten, Daten mit Validierung und besser strukturiert verwalten, Daten in komplexen Berichten mit Diagrammen und Tabellen exportieren, komplexere Suchen durchführen, eine Integration mit anderen Systemen ermöglichen und vieles mehr kann.

> Das Hauptdilemma ist, dass Excel relativ günstig ist und die Entwicklung einer Verwaltungsanwendung zu teuer ist.

Mit Netuno können wir mit **geringem Aufwand** schnell eine Anwendung erstellen, um alle Informationen zu verwalten und damit die verstreuten und komplex zu verwaltenden Excel-Dateien endgültig zu ersetzen.

## Tabellenkalkulation in Datenbanktabellen

Denken Sie nicht, dass eine Datenbank sehr komplex ist; Sie werden sehen, dass sie es nicht ist und sogar den Excel-Tabellen sehr ähnlich ist.

> Eine Datenbanktabelle ist dasselbe wie eine Tabellenkalkulation.

Analysieren Sie zum Beispiel Ihre Tabellenkalkulation in Excel:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Produkt 	| Menge 	| Stückpreis 	| Gesamtpreis 	|
| **2** 	|  Gabel  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Glas  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Messer  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Gesamtpreis**  	|    **66,00**    	|

Um diese Informationen in einer Datenbank zu speichern, muss eine Tabelle erstellt werden, um die Informationen der **Produkte** zu speichern.

Die Tabelle wird wie im folgenden Beispiel strukturiert und enthält die folgenden Daten:

<table>
    <thead>
        <tr>
            <th colspan="3">Produkte</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Preis</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Gabel</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Glas</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Messer</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Wenn also Daten eines Produkts verwendet werden, müssen diese zwingend aus dieser Tabelle stammen.

Das heißt, es ist, als hätte man eine Tabellenkalkulation, die die Informationen der Produkte speichert.

Jede Zeile enthält eine ID, einen eindeutigen Identifikator, zum Beispiel eine fortlaufende Nummer.

Um die gewünschten Informationen wieder anzuzeigen, werden die Daten zum Produkt von unserer Produkttabelle wie folgt bereitgestellt:

![Bild von Excel-Dateien](/docs/assets/business/excel-table.jpg "Excel-Dateien.")