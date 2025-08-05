---
sidebar_position: 5
id: relationships-between-forms
title: Relações entre formulários
sidebar_label: Relações
---

## Como criar relações entre formulários
Neste tutorial iremos ajudá-lo a criar relações entre formulários na plataforma Netuno.

O objetivo destas relações é permitir que formulários possam aceder a informações de outros, permitindo assim evitar que a informação se repita, simplificando o seu desenvolvimento.

Este tutorial está dividido por passos que aconselhamos que siga na respetiva ordem.

## Requisitos
Antes de criar as relações é **obrigatório** ter pelo menos dois formulários criados, caso não saiba como o fazer visite este endereço: [Criação de Formulários](/docs/academy/ui/forms).

E de forma a poder relacionar campos de formulários é **obrigatório** também a criação de campos para os respetivos formulários e aconselhamos que preencha com alguma informação. Caso não o saiba fazer dirija-se a [Criação de Campos](/docs/academy/ui/fields).

## 1º - Escolher um dos formulários

Para começar a relacionar campos de formulários o primeiro passo é escolher o formulário que irá selecionar a informação do outro.

Para exemplificar este tutorial criámos dois formulários simples: **Veículo** e **Cor**, segue-se a seguir a estrutura de cada um deles:

![relacoes-entre-formularios1.png](/docs/assets/relacoes-entre-formularios1.png)

## 2º - Criação do campo relacional
O próximo passo será criar a relação. Neste exemplo a lógica a seguir é que como vários veículos podem ter a mesma cor podemos criar um formulário com todas as cores e associar a cada veículo.

Portanto, o que se deve fazer é editar o formulário **Veículo** adicionando um novo campo, neste caso será **Cor**.

Para criar um campo relacional basta no **Tipo** escolher **Select** e prosseguir para o próximo passo.

> Por norma é aconselhável a que o nome do campo relacional seja 'nome_do_campo' acompanhado de '_id', neste exemplo será 'cor_id'

![relacoes-entre-formularios2.jpg](/docs/assets/relacoes-entre-formularios2.jpg)

## 3º - Escolher o campo a relacionar
Após a criação, clique em **Add** abaixo de **Link**, uma janela irá abrir e é só escolher o campo do formulário para o qual quer criar a relação e por fim clicar em fechar.

Após este processo grave o campo.

![relacoes-entre-formularios3.jpg](/docs/assets/relacoes-entre-formularios3.jpg)

Após estar tudo configurado, ao adicionar dados a ambos os formulários verá que no caso do campo **Cor**, dentro do formulário **Veículo**, estarão todas as cores inseridas no formulário **Cor**.

![relacoes-entre-formularios4.jpg](/docs/assets/relacoes-entre-formularios4.jpg)

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página,

Bom desenvolvimento!
