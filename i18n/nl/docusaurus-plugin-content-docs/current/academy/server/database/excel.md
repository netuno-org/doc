---
id: excel
title: Excel
sidebar_label: Excel
---

In vrijwel elk type bedrijf is het gebruikelijk dat er Excel-bestanden of andere soorten spreadsheets zoals Google Spreadsheets, LibreOffice, OpenOffice, enz. bestaan... ze worden op grote schaal gebruikt vanwege hun eenvoudige manier om informatie te organiseren, te analyseren en zelfs te integreren met andere spreadsheets.

Excel en consorten lossen het probleem dus goed op wanneer de informatiestructuur relatief klein is en de complexiteit niet groot is.

Na verloop van tijd groeit de neiging om steeds meer bestanden met verspreide informatie te genereren.

![Afbeelding van Excel-bestanden](/docs/assets/business/excel-danger.jpg "Excel-bestanden.")

Het probleem ontstaat wanneer dat ene Excel-bestand samen met nog een aantal andere verandert in een monster, waarbij het beheer moeilijk wordt en nog erger wanneer er meerdere mensen bij betrokken zijn; het begint allerlei problemen te veroorzaken en de informatie wordt verzwakt tot het punt dat het echt onhoudbaar wordt.

Dan ontstaat de behoefte om een robuustere applicatie te creëren die gebruikersprofielen en groepen kan beheren, gegevens met validatie en beter gestructureerd kan beheren, gegevens kan exporteren in complexe rapporten met grafieken en tabellen, complexere zoekopdrachten kan uitvoeren, integratie met andere systemen mogelijk maakt, en nog veel meer.

> Het belangrijkste dilemma is dat Excel relatief goedkoop is, en dat het ontwikkelen van een beheertoepassing te duur is.

Met Netuno kunnen we met **weinig inspanning** snel een applicatie creëren om alle informatie te beheren en zo de verspreide Excel-bestanden met complex beheer definitief te vervangen.

## Spreadsheets in databasetabellen

Denk niet dat een database erg complex is; u zult zien dat dat niet zo is en dat het zelfs erg lijkt op Excel-spreadsheets.

> Een databasetabel is hetzelfde als een spreadsheet.

Analyseer bijvoorbeeld uw spreadsheet in Excel:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Product 	| Hoeveelheid 	| Prijs per eenheid 	| Totaalprijs 	|
| **2** 	|  Vork  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Beker  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Mes  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Totaalprijs**  	|    **66,00**    	|

Om deze informatie in een database op te slaan, moet u een tabel maken om de informatie van de **Producten** op te slaan.

De tabel wordt gestructureerd zoals in het onderstaande voorbeeld en bevat de volgende gegevens:

<table>
    <thead>
        <tr>
            <th colspan="3">Producten</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Naam</th>
            <th>Prijs</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Vork</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Beker</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Mes</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Dus wanneer de gegevens van een Product worden gebruikt, moeten deze verplicht uit deze tabel komen.

Met andere woorden, het is alsof u een spreadsheet hebt die de informatie van de Producten opslaat.

Elke rij bevat een ID, een unieke identificatie, bijvoorbeeld een sequentieel nummer.

Om de gewenste informatie opnieuw weer te geven, worden de gegevens met betrekking tot het Product geleverd door onze Productentabel, op deze manier:

![Afbeelding van Excel-bestanden](/docs/assets/business/excel-table.jpg "Excel-bestanden.")