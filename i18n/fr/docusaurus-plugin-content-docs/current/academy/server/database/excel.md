---
id: excel
title: Excel
sidebar_label: Excel
---

Dans tout type d'entreprise en général, il est courant de trouver ces fameux fichiers Excel ou tout autre type de feuille de calcul comme Google Spreadsheets, LibreOffice, OpenOffice, etc... elles sont largement utilisées, en raison de leur manière simple de répondre au besoin d'organisation de l'information, d'analyse et même d'intégration avec d'autres feuilles de calcul.

Ainsi, Excel et compagnie résolvent bien le problème lorsque la structure d'information est relativement petite et que la complexité n'est pas grande.

La tendance au fil du temps a tendance à croître, générant de plus en plus de fichiers avec des informations éparpillées.

![Image de fichiers Excel](/docs/assets/business/excel-danger.jpg "Fichiers Excel.")

Le problème réside lorsque ce fichier Excel, avec quelques autres, devient un monstre, où la gestion devient difficile et pire encore lorsqu'elle implique plusieurs personnes, elle commence à générer plusieurs problèmes fragilisant l'information jusqu'à la limite de devenir vraiment insoutenable.

C'est alors que surgit la nécessité de créer une application plus robuste capable de gérer des profils d'utilisateurs, des groupes, de gérer les données avec validation et mieux structurées, d'exporter les données dans des rapports complexes avec graphiques et tableaux, d'effectuer des recherches plus complexes, l'intégration avec d'autres systèmes, et bien plus encore.

> Le principal dilemme est que Excel est relativement bon marché, et développer une application de gestion est trop cher.

Avec Netuno, nous pouvons avec **peu d'effort** créer rapidement une application pour gérer toute l'information et ainsi remplacer définitivement les fichiers Excel éparpillés et complexes à gérer.

## Feuille de calcul en tables de base de données

Ne pensez pas qu'une base de données est très complexe, vous verrez que ce n'est pas le cas et qu'elle est même très similaire aux feuilles Excel.

> Une table de base de données est la même chose qu'une feuille de calcul.

Par exemple, analysez votre feuille de calcul dans Excel :

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Produit 	| Quantité 	| Prix Unitaire 	| Prix Total 	|
| **2** 	|  Fourchette  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Verre  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Couteau  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Prix Total**  	|    **66,00**    	|

Pour stocker cette information dans une base de données, il est nécessaire de créer une table pour stocker les informations des **Produits**.

La table sera structurée comme l'exemple ci-dessous et contiendra les données suivantes :

<table>
    <thead>
        <tr>
            <th colspan="3">Produits</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Fourchette</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Verre</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Couteau</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Ainsi, chaque fois que les données d'un Produit seront utilisées, elles devront obligatoirement provenir de cette table.

Autrement dit, c'est comme si vous aviez une feuille de calcul qui conserve les informations des Produits.

Chaque ligne contient un ID, un identifiant unique, par exemple un numéro séquentiel.

Pour afficher à nouveau les informations souhaitées, les données relatives au Produit seront fournies par notre table de Produits, de cette manière :

![Image de fichiers Excel](/docs/assets/business/excel-table.jpg "Fichiers Excel.")