---
id: excel
title: Excel
sidebar_label: Excel
---

## About Excel

`Excel files` or any other type of spreadsheet such as `Google Spreadsheets`, `LibreOffice`,`OpenOffice` are very often used in any type of business due to their simple way of problem solving, data management and analysis, even integration with other spreadsheets.

Therefore, Excel will solve the issue well when the information structure is slightly small and not bigger complexity.

The trend over time tends to grow generating more and more files with scattered information.

![Imagem de Ficheiros Exceis](/docs/assets/business/excel-danger.jpg "Ficheiros em Excel.")

The problem comes when that Excel file together with a few more become extremely bigger, where management tend to be more difficult and even worse when it involves several persons, starting to generate many problems, weakening the data to the limit of becoming even unsustainable.

The need to build a more robust application capable of managing user profiles, groups, also data with validation and better structured, exporting data in complex reports with graphs and tables, performing more complex searches, integration with other systems, and much more.

> One of the first situations encountered is that Excel is relatively cheap and in other hand developing a management application is too expensive.

With _Netuno_ **You Can** with **Less Effort**, quickly create an `app` to manage all the data and thus permanently replace the scattered and complex management `Excel files`.

## Calculation Spreadsheet on Database Tables

You will see that Database is not too complex and that it is very similar to Excel spreadsheets.

> A Database Table is the same thing as a spreadsheet.

Analyze your Excel spreadsheet, as below:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Product 	| Quantity	| Price per Unity 	| Total Price 	|
| **2** 	|  Fork  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Glass  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   knive	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Total Price**  	|    **66,00**    	|

To store this information into a database it is necessary to create a table to store the **Products** information.

The table will be structured as an example below and will contain the following data:

<table>
    <thead>
        <tr>
            <th colspan="3">Products</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Fork</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Glass</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Knife</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

So whenever Product data used, it will come from this table.

It is like having a spreadsheet that stores the information about the Products.

Each line has an ID, meaning identification number.

To represent the desired information, the data referring to the Product will be provided by our Product table, as follows:

![Imagem de Ficheiros Exceis](/docs/assets/business/excel-table.jpg "Ficheiros em Excel.")
