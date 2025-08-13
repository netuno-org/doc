---
id: modal-form
title: Formulário Modal
---

Este método é responsável por adicionar um formulário dentro de uma modal.
A modal carrega o formulário no modo de listagem ou no modo de edição.

Antes de começar com o formulário modal, é preciso que exista pelo menos um formulário criado na aplicação.

Para saber como criar formulários [clique aqui](/docs/academy/ui/forms).

### Exemplo em modo listagem

Exibe o formulário chamado **Teste** em modo listagem. Observe a função **netuno.loadForm()**.

```javascript
netuno.modal.create({
  name: 'teste',
  callback: function (modal) {
      let form = modal.find('[netuno-form]');
      netuno.loadForm(form);            
      netuno.modal.show(modal);
  }
});
```

### Exemplo em modo edição

Exibe o formulário chamado **Teste** em modo edição. Observe a função **netuno.loadFormEdit()**.

```javascript
netuno.modal.create({
  name: 'teste',
  callback: function (modal) {
    let form = modal.find('[netuno-form]');
    netuno.loadFormEdit(form);
    netuno.modal.show(modal);
  }
});
```

### Exemplo em modo edição com id do formulário

A função **netuno.loadFormEdit()** também pode ser chamada passando diretamente o id de um formulário específico.

```javascript
netuno.modal.create({
  name: 'teste',
  callback: function (modal) {
    let form = modal.find('[netuno-form]');
    netuno.loadFormEdit(form, 1234);
    netuno.modal.show(modal);
  }
});
```

### Eventos

A classe do formulário modal expõe alguns eventos para se conectar às funcionalidades da modal. Dentro do callback é possível aceder a alguns eventos do formulário.

| TIPO DE EVENTO   | DESCRIÇÃO    |
| ------- |--------------|
| netuno:new | Este evento é acionado quando exibe o ecrã de criação de um novo item. |
| netuno:edit | Este evento é acionado quando exibe o ecrã de edição de um item existente. |
| netuno:save | Este evento é acionado quando é adicionado um novo item. |
| netuno:back | Este evento é acionado após o clique no botão de voltar. |
| netuno:delete | Este evento é acionado após a exclusão de um item. |

A seguir pode ver o exemplo de uso do evento `netuno:new`.

Só é preciso adicioná-lo dentro do método `callback`.

```javascript
modal.find('[netuno-form]').on('netuno:new', ()=> {
  console.log('new');
});
```