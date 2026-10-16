---
id: excel
title: Excel
sidebar_label: Excel
---

În orice tip de afacere, în general, este obișnuit să existe acele fișiere Excel sau orice alt tip de foaie de calcul precum Google Spreadsheets, LibreOffice, OpenOffice etc... sunt utilizate pe scară largă, datorită modului lor simplu de a rezolva nevoia de organizare a informațiilor, analiză și chiar integrare cu alte foi de calcul.

Prin urmare, Excel și compania rezolvă bine problema atunci când structura informațiilor este relativ mică și complexitatea nu este mare.

Tendința de-a lungul timpului este de a crește, generând tot mai multe fișiere cu informații răspândite.

![Imagine cu fișiere Excel](/docs/assets/business/excel-danger.jpg "Fișiere în Excel.")

Problema apare atunci când acel fișier Excel, împreună cu alte câteva, devine un monstru, unde gestionarea devine dificilă și cu atât mai rău când implică mai multe persoane, începe să genereze mai multe probleme, fragilizând informațiile până la limita de a deveni chiar insustenabil.

Atunci apare nevoia de a crea o aplicație mai robustă capabilă să gestioneze profiluri de utilizatori, grupuri, să gestioneze datele cu validare și mai bine structurate, să exporte datele în rapoarte complexe cu grafice și tabele, să realizeze căutări mai complexe, integrare cu alte sisteme și multe altele.

> Dilema principală este că Excel este relativ ieftin, iar dezvoltarea unei aplicații de gestionare este prea scumpă.

Cu Netuno putem, cu **efort redus**, crea rapid o aplicație pentru a gestiona toate informațiile și astfel înlocui definitiv fișierele Excel răspândite și greu de gestionat.

## Foaie de calcul în tabele de baze de date

Nu credeți că o bază de date este foarte complexă; veți vedea că nu este și că este chiar foarte asemănătoare cu foile de calcul Excel.

> Un tabel de bază de date este același lucru cu o foaie de calcul.

De exemplu, analizați foaia dumneavoastră de calcul în Excel:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Produs 	| Cantitate 	| Preț unitar 	| Preț total 	|
| **2** 	|  Furculiță  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Pahar  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Cuțit  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Preț total**  	|    **66,00**    	|

Pentru a stoca aceste informații într-o bază de date, este necesar să creați un tabel pentru a stoca informațiile despre **Produse**.

Tabelul va fi structurat ca în exemplul de mai jos și va conține următoarele date:

<table>
    <thead>
        <tr>
            <th colspan="3">Produse</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Nume</th>
            <th>Preț</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Furculiță</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Pahar</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Cuțit</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Astfel, ori de câte ori sunt utilizate datele unui Produs, acestea trebuie obligatoriu să provină din acest tabel.

Cu alte cuvinte, este ca și cum ați avea o foaie de calcul care păstrează informațiile despre Produse.

Fiecare rând conține un ID, un identificator unic, de exemplu un număr secvențial.

Pentru a afișa din nou informațiile dorite, datele referitoare la Produs vor fi furnizate de tabelul nostru de Produse, astfel:

![Imagine cu fișiere Excel](/docs/assets/business/excel-table.jpg "Fișiere în Excel.")