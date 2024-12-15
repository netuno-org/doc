---
id: excel
title: Excel
sidebar_label: Excel
---

Em qualquer tipo de negócio no geral é comum haver aqueles tais ficheiros em Excel ou qualquer outro tipo de folha de cálculos como a do Google Spreadsheets, do LibreOffice, OpenOffice, etc... são amplamente utilizadas, devido a sua forma simples de resolver a necessidade da organização da informação, análise e até a integração com outras folhas de cálculos.

Portanto Excel e companhia resolvem bem o problema quando a estrutura de informação é relativamente pequena e a complexidade não é muita.

A tendência ao longo do tempo tende a crescer gerando mais e mais ficheiros com informação espalhada.

![Imagem de Ficheiros Exceis](/docs/assets/business/excel-danger.jpg "Ficheiros em Excel.")

O problema reside quando aquele ficheiro Excel junto com mais uns tantos tornam-se num monstro, onde passa a ficar difícil a gestão e pior ainda quando envolve várias pessoas, começa a gerar vários problemas fragilizando a informação até ao limite de ficar mesmo insustentável.

É quando surge a necessidade de criar uma aplicação mais robusta capaz de gerir perfis de utilizadores, grupos, gerir os dados com validação e melhor estruturados, exportar os dados em relatórios complexos com gráficos e tabelas, realizar pesquisas mais complexas, integração com outros sistemas, e muito mais.

> O principal dilema é que o Excel é relativamente barato, e desenvolver uma aplicação de gestão é demasiado caro.

Com o Netuno podemos com **baixo esforço** criar rapidamente uma aplicação para gerir toda a informação e assim substituir definitivamente os ficheiros Exceis expalhados e de complexa gestão.

## Folha de Cálculos em Tabelas de Base de Dados

Não pense que uma base de dados é muito complexa, verá que não é e que até é muito semelhante às folhas de Excel.

> Uma tabela de base de dados é a mesma coisa que uma folha de cálculo.

Por exemplo, analise a sua folha de cálculo no Excel:

|   	|    A    	|      B     	|       C       	|      D      	|
|:-:	|:-------:	|:----------:	|:-------------:	|:-----------:	|
| **1** 	| Produto 	| Quantidade 	| Preço Unidade 	| Preço Total 	|
| **2** 	|  Garfo  	|     10     	|      3,00     	|    30,00    	|
| **3** 	|   Copo  	|      5     	|      4,00     	|    20,00    	|
| **4** 	|   Faca  	|      8     	|      2,00     	|    16,00    	|
| **5** 	|         	|            	|  **Preço Total**  	|    **66,00**    	|

Para armazenar esta informação em base de dados é preciso criar uma tabela para armazenar a informação dos **Produtos**.

A tabela será estruturada como exemplo abaixo e conterá os seguintes dados:

<table>
    <thead>
        <tr>
            <th colspan="3">Produtos</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Garfo</td>
            <td>3,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Copo</td>
            <td>4,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Faca</td>
            <td>2,00</td>
        </tr>
    </tbody>
</table>

Assim, sempre que for utilizado os dados de algum Produto terão que obrigatoriamente vir desta tabela.

Ou seja, é como se tivesse uma folha de cálculos que guarda a informação dos Produtos.

Cada linha contém um ID, um identificador único, por exemplo um número sequencial.

Para voltar a apresentar a informação desejada os dados referentes ao Produto serão fornecidos pela nossa tabela de Produtos, desta forma:

![Imagem de Ficheiros Exceis](/docs/assets/business/excel-table.jpg "Ficheiros em Excel.")
