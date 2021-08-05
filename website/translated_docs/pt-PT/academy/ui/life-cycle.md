---
id: life-cycle
title: Eventos do Ciclo de Vida da Aplicação
sidebar_label: Eventos do Ciclo de Vida da Aplicação
---

## Interface do Utilizador (`ui`)

Na interface de gestão de dados do Netuno é possível injectar código a medida para realizar customizações e manipulações à medida.

O desenvolvimento é realizado na programação dentro da pasta `ui` dentro da pasta raíz da aplicação.

### addPageLoad()

A página não pode ser manipulada com segurança até que a aplicação esteja "pronta".

O método será chamado quando a página estiver carregada.

```javascript
netuno.addPageLoad(() => {
   console.log('faço alguma coisa');
});
```

### addContentLoad()

Quando formulários ou relatórios são carregados, então a interface é alterada com o conteúdo respectivo, seja um formulário de dados, uma pesquisa ou ao filtra dados de algum relatório. 

Assim que algum conteúdo seja carregado, o método é chamado e passa o contentor que conterá o conteúdo que está a ser apresentado.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('faço cenas quando o elemento existir');
   }
});
```
