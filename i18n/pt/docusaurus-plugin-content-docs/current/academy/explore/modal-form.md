---
id: modal-form
title: Formulário Modal
---

Criação e gerenciamento de formulários em janelas modais.
## Introdução

O Modal é um recurso de (UI) que permite abrir um formulário sem que o usuário precise sair da página atual.

O uso de modais melhora significativamente a Experiência do Usuário (UX), permitindo a execução de operações de **CRUD (Criar, Ler, Atualizar, Excluir)** sem a necessidade de recarregar a página ou perder o contexto da tela atual. 

O Netuno gerencia automaticamente a comunicação com o backend e a injeção do HTML necessário.


#### Pré-requisitos

Para implementar os exemplos, você precisará de:

- Acesso ao ambiente de desenvolvimento de sua aplicação Netuno.
- Um formulário devidamente configurado no painel administrativo (backoffice) do Netuno.
- Conhecimento básico em JavaScript e manipulação de eventos no DOM.

Nos exemplos a seguir, utilizaremos um formulário genérico chamado **"test"**.

Caso tenha dúvidas nestas etapas, consulte: [Formulários](/docs/academy/ui/forms).

## Estrutura Base

A criação e manipulação de modais no Netuno é centralizada no objeto `netuno.modal`.

O método **netuno.modal.create()** cria a estrutura base do modal na interface. Recebe um objeto de configuração com as seguintes propriedades:

- **name (String):** O nome do formulário (criado no backoffice) que servirá de base para o modal.
- **callback (Function):** Função executada assim que a estrutura do modal é injetada no DOM (mas antes de ser exibida), recebe como parâmetro o elemento do modal criado.

### Função Callback

Dentro da função callback, deverá definir qual será o estado (modo) do formulário utilizando as funções de carregamento nativas:

- **Modo Listagem - `netuno.loadForm()`**: Renderiza a tabela de pesquisa e listagem dos registros daquele formulário.

- **Modo Edição/Criação - `netuno.loadFormEdit()`**: Renderiza os campos de input do formulário. Pode ser usado para inserir um novo registro ou editar um existente.

## Implementação
Abaixo, detalhamos três cenários de uso mais comuns.

### 1. Modo de Listagem

O `netuno.loadForm()` é utilizado quando você deseja que o usuário visualize todos os dados de um formulário em formato de tabela (grid) de pesquisa.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    // 1. Localiza o contêiner interno destinado a receber o formulário
    let formContainer = modal.find('[netuno-form]');
    
    // 2. Injeta a lista de dados do formulário no contêiner
    netuno.loadForm(formContainer); 
    
    // 3. Exibe o modal para o usuário
    netuno.modal.show(modal);
  }
});
```
### 2. Modo de Criação

O `netuno.loadFormEdit()` é utilizado para botões do tipo "Adicionar Novo". Abre o formulário limpo, pronto para a entrada de dados.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    
    // Carrega o formulário em modo de inserção (novo registro)
    netuno.loadFormEdit(formContainer); 
    
    netuno.modal.show(modal);
  }
});
```

:::info
Ao utilizar `netuno.loadFormEdit()` sem passar um **ID**, o Netuno entende que você quer usar a "tela de edição" a partir do zero. Ele carrega a interface com os inputs vazios, prontos para a criação de um novo registro. Nesse cenário, o Netuno dispara internamente o evento `netuno:new`.
:::


### 3. Modo de Edição

Se você precisa que o modal carregue um registro específico para alteração, deve passar o **UID** ou **ID** do registro como segundo parâmetro na função de carregamento.

```jsx
// Exemplo: Editando o registro de ID 1234
const recordId = 1234; 

netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    
    // Injeta os dados do registro 1234 nos campos do formulário
    netuno.loadFormEdit(formContainer, recordId); 
    
    netuno.modal.show(modal);
  }
});
```


## Eventos

O contêiner do formulário (`[netuno-form]`) emite eventos customizados que acompanham o ciclo de vida da interação do usuário. É altamente recomendado o uso desses eventos para disparar lógicas de negócios específicas do seu frontend (como atualizar tabelas em background, exibir alertas, etc).

| TIPO DE EVENTO   | DESCRIÇÃO    |
| ------- |--------------|
| ` netuno:new` | Disparado quando a tela de criação de um novo item é exibida. |
| `netuno:edit` | Disparado quando a tela de edição de um item existente é exibida. |
| `netuno:save` | Disparado quando um novo item é adicionado. |
| `netuno:back` | Disparado após o clique no botão de voltar. |
| `netuno:delete` | Disparado após a exclusão de um item. |


### Exemplo: Interceptando Múltiplos Eventos

Neste exemplo pronto para produção, criamos o modal e adicionamos *listeners* para acompanhar o sucesso das operações do usuário:

```javascript
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    
    // Monitorando a tela de inserção
    formContainer.on('netuno:new', function(event) {
       console.info("Interface de criação carregada.");
    });

    // Monitorando um salvamento bem-sucedido
    formContainer.on('netuno:save', function(event) {
       console.success("O registro foi salvo com sucesso!");
       // Exemplo: Fechar o modal automaticamente após salvar
       netuno.modal.hide(modal); 
    });

    // Renderizando o modal em modo de lista e exibindo
    netuno.loadForm(formContainer);
    netuno.modal.show(modal);
  }
});
```
Caso tenha dificuldades ou sugestões de melhoria, entre em contato.
Nossa equipe e comunidade estão prontas para ajudar.

Bom desenvolvimento!