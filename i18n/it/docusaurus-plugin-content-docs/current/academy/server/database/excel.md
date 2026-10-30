---
id: excel
title: Excel
sidebar_label: Excel
---

In qualsiasi tipo di attività, in generale è comune trovare quei classici file Excel o qualsiasi altro tipo di foglio di calcolo come Google Spreadsheets, LibreOffice, OpenOffice, ecc... Sono ampiamente utilizzati, grazie al loro modo semplice di soddisfare l'esigenza di organizzare le informazioni, analizzarle e persino integrarle con altri fogli di calcolo.

Quindi Excel e simili risolvono bene il problema quando la struttura delle informazioni è relativamente piccola e la complessità non è elevata.

Con il passare del tempo la tendenza è a crescere, generando sempre più file con informazioni sparse.

![Immagine di file Excel](/docs/assets/business/excel-danger.jpg "File Excel.")

Il problema sorge quando quel file Excel, insieme a molti altri, diventa un mostro: la gestione inizia a diventare difficile e, peggio ancora, quando coinvolge più persone inizia a generare diversi problemi, indebolendo le informazioni fino al limite di diventare davvero insostenibile.

È allora che nasce l'esigenza di creare un'applicazione più robusta, in grado di gestire profili utente e gruppi, gestire i dati con validazione e in modo meglio strutturato, esportare i dati in report complessi con grafici e tabelle, effettuare ricerche più complesse, integrarsi con altri sistemi e molto altro.

> Il dilemma principale è che Excel è relativamente economico, mentre sviluppare un'applicazione gestionale è troppo costoso.

Con Netuno possiamo, con **poco sforzo**, creare rapidamente un'applicazione per gestire tutte le informazioni e sostituire definitivamente i file Excel sparsi e di complessa gestione.

## Foglio di calcolo in tabelle di database

Non pensate che un database sia troppo complesso: vedrete che non lo è e che è persino molto simile ai fogli Excel.

> Una tabella di database è la stessa cosa di un foglio di calcolo.

Ad esempio, analizzate il vostro foglio di calcolo in Excel:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Prodotto 	| Quantità 	| Prezzo unitario 	| Prezzo totale 	|
| **2** 	|  Forchetta  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Bicchiere  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Coltello  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Prezzo totale**  	|    **66,00**    	|

Per memorizzare queste informazioni in un database è necessario creare una tabella per memorizzare le informazioni dei **Prodotti**.

La tabella sarà strutturata come nell'esempio seguente e conterrà i seguenti dati:

<table>
    <thead>
        <tr>
            <th colspan="3">Prodotti</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Prezzo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Forchetta</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Bicchiere</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Coltello</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Pertanto, ogni volta che si utilizzano i dati di un Prodotto, questi dovranno obbligatoriamente provenire da questa tabella.

In altre parole, è come se si avesse un foglio di calcolo che conserva le informazioni dei Prodotti.

Ogni riga contiene un ID, un identificatore univoco, ad esempio un numero sequenziale.

Per visualizzare nuovamente le informazioni desiderate, i dati relativi al Prodotto saranno forniti dalla nostra tabella dei Prodotti, in questo modo:

![Immagine di file Excel](/docs/assets/business/excel-table.jpg "File Excel.")