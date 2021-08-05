---
id: app-life-cycle
title: Eventos do Ciclo de Vida da Aplicação
sidebar_label: Eventos do Ciclo de Vida da Aplicação
---

Uma página não pode ser manipulada com segurança até que a aplicação esteja “pronta”. O Netuno detecta este estado de prontidão por si. 

## addPageLoad()

O método será chamado quando a página estiver carregada.

```javascript
netuno.addPageLoad(() => {
   console.log('Página carregada.');
});
```

## addContentLoad()

Assim que um componente for carregado, o método é chamado.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('Container carregado.');
   }
});
```
