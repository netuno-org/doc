---
id: actions
title: Ações (Actions)
sidebar_label: Actions
---

Customizações nas operações de base de dados.

## Introdução

O tempo todo é realizado alguma manipulação de dados, e é comum haver regras como, por exemplo:

- Ao remover um cliente deve ser removido o seu histórico.
- Ao cancelar um produto é preciso removê-lo das encomendas e ajustar o valor total.
- Ao finalizar uma compra é preciso enviar os dados para outro sistema que realiza a distribuição. 

As ações (_actions_) servem justamente para isso, para injetar código para ser executado em situações específicas
quando ocorre uma manipulação de dados.

Ao **inserir** ou **alterar** alguma informação, então é executado as ações de salvar (_save_) e salvado 
(_saved_):

- `save`: Antes de executar o comando em base de dados.
- `saved`: Após ter executado o comando em base de dados.

Já ao **remover**, **apagar** ou **eliminar** alguma informação é entõa executado as ações de remover (_remove_) e 
removido (_removed_).

- `remove`: Antes de executar o comando em base de dados.
- `removed`: Após ter executado o comando em base de dados.

Assim quando alteramos algo num formulário, com operações de criar, alterar ou remover informações, são 
executadas operações distintas em base de dados, e as respetivas ações (_actions_) são executadas.

> Já ouviu falar em _triggers_ de base de dados? O _trigger_ de base de dados é executado sempre que há
> modificações de dados, portanto as ações (_actions_) são semelhantes aos _triggers_, só que ao nível do código.

Recorde que cada tipo de operação executa um comando distinto em base de dados, são eles:

- Criar: `insert into ...`
- Alterar: `update ...`
- Remover: `delete from ...`

Quando executamos um destes comandos de base dados através do `_db.execute(...)` nenhuma ação será executada, 
porque o comando é executado diretamente na base de dados sem ser possível interagir com as ações.

> No código das ações pode utilizar qualquer recurso da framework low-code poliglota.

As ações são executadas quando acontece alguma manipulação de dados nos formulários de backoffice auto-gerado 
pelo Netuno, ou quando executamos operações em base de dados no código utilizando:

- `_db.insert(...)`, `_db.form(...).insert()`, `_db.insertIfNotExits(...)`, `_db.insertMany(...)`, entre outros. 
- `_db.update(...)`, `_db.form(...).update()`, `_db.updateMany(...)`, entre outros.
- `_db.delete(...)`, `_db.form(...).delete()`, `_db.insertMany(...)`, entre outros.

Ou seja, quando utilizamos no código algum mecanismo da framework low-code poliglota para realizar as operações de
manipulação de dados, será executado a respetiva ação caso exista.

Entretanto, se for executado um comando diretamente na base de dados, então não será possível executar a ação.

> É recomendado evitar executar comandos diretamente na base de dados para não contornar os mecanismos de 
> manipulação de dados que o Netuno oferece.

No código das ações pode realizar qualquer operação associada a manipulação de dados.

## Item de Dados (Data Item)

O item de dados (`_dataItem`), é um recurso da framework low-code poliglota que contém toda a relação de dados 
que está a ser criado, alterado ou removido.

Através do recurso `_dataItem` podemos aceder a toda a informação e verificar detalhes do processo da operação
que está acontecendo. 

> Veja a documentação do objeto [DataItem](/docs/library/objects/DataItem) para saber mais detalhes sobre o que
> o recurso `_dataItem` suporta.

**Atenção:** O recurso `_dataItem` apenas está disponível no código das ações (_actions_).

## Salvar, Guardar, Alterar, ou Criar Novo (_Save_)

Para criar uma action que será executada quando for criado um novo registro, ou quando for alterado algo, o script
desta action será chamado de `save`, que quer dizer que algo está sendo salvaguardo em base de dados, por exemplo:

- `minha_app/server/actions/meu_formulario/save.js`

> Está ação é executada antes de executar o comando de base de dados.

Quando for para executar código após os dados serem salvaguardados em base de dados, então utilizamos a ação 
`saved`, por exemplo:

- `minha_app/server/actions/meu_formulario/saved.js`

> Está ação é executada após ter sido executado o comando de base de dados.

Ou seja, dentro da aplicação na pasta `server/actions` criamos uma subpasta com o nome do formulário (tabela), e 
dentro colocamos um script chamado de `save` ou `saved`, que contém o código respectivo para ser executado antes 
ou depois do comando de base de dados.

Para distinguir se é uma criação de dados podemos verificar com um `if` o resultado do método 
`_dataItem.isInsert()`, por exemplo:

```javascript title="minha_app/server/actions/meu_formulario/save.js"
if (_dataItem.isInsert()) {
    // Está sendo criado novos dados...
}
```

Para distinguir se é uma alteração de dados podemos verificar com um `if` o resultado do método 
`_dataItem.isUpdate()`, por exemplo:

```javascript title="minha_app/server/actions/meu_formulario/saved.js"
if (_dataItem.isUpdate()) {
    // Está sendo alterado os dados...
}
```

### Obter o ID

Para obter o ID (identificador) do item que está sendo alterado:

```javascript
_dataItem.getId()
```

### Verificar o que é Modificado

Para verificar o que está sendo modificado, podemos utilizar o `getOldRecord()` para obter os dados antigos em
base de dados e comparar com os novos dados `getRecord()`, por exemplo:

```javascript
if (_dataItem.getOldRecord().getString('email') !== _dataItem.getRecord().getString('email')) {
    // Atenção: O e-mail está sendo alterado!
}
```

### Gerar Erro

É possível gerar um erro para impedir que a operação avance, a geração do erro normalmente é feita antes de 
executar o comando de base de dados, portanto na ação `save`, por exemplo:

```javascript title="minha_app/server/actions/meu_formulario/save.js"
_dataItem.setStatusWithError()
    .setErrorTitle('E-mail')
    .setErrorMessage('Não é permitido alterar o e-mail.')
```

### Verificar se houve Erro

É possível verificar se houve algum erro na execução do comando em base de dados, diversos erros podem ocorrer,
por exemplo:

- Não é permitido ter e-mails repetidos.
- Um campo obrigatório não foi corretamente preenchido.
- Entre muitos outros.

A verificação de erros é realizada normalmente após a execução do comando de base de dados, portanto na ação 
`saved`, por exemplo:

```javascript title="minha_app/server/actions/meu_formulario/saved.js"
if (_dataItem.isError()) {
    // Ocorreu algum erro e não foi possível salvar os dados...
}
```

### Setup

É possível ter uma `action` específica que é executada apenas quando é realizada alterações de dados durante a
configuração (_setup_) da base de dados.

Por exemplo:

- `minha_app/server/actions/meu_formulario/setup_save.js`
- `minha_app/server/actions/meu_formulario/setup_saved.js`

## Remover, Apagar, ou Eliminar (_Remove_)

Para criar uma action que será executada quando for removido algum registro, o script desta action será chamado 
de `remove`, que quer dizer que algo está sendo eliminado em base de dados, por exemplo:

- `minha_app/server/actions/meu_formulario/remove.js`

> Está ação é executada antes de executar o comando de base de dados.

Quando for para executar código após os dados serem salvaguardados em base de dados, então utilizamos a ação
`removed`, por exemplo:

- `minha_app/server/actions/meu_formulario/removed.js`

> Está ação é executada após ter sido executado o comando de base de dados.

Ou seja, dentro da aplicação na pasta `server/actions` criamos uma subpasta com o nome do formulário (tabela), e
dentro colocamos um script chamado de `remove` ou `removed`, que contém o código respectivo para ser executado antes
ou depois do comando de base de dados.

### Conflito com Relações

Dependendo do modelo de dados pode acontecer que ao remover um registro que esteja sendo utilizado na relação com
outra tabela, que também é outro formulário, não possa ser removido para evitar que a relação fique quebrada.

Então na ação `removed` que executa após o comando de base de dados de remoção, podemos verificar se acontece este
erro da seguinte forma:

```javascript title="minha_app/server/actions/meu_formulario/removed.js"
if (_dataItem.isStatusAsError() && _dataItem.isStatusAsRelations()) {
    _log.error(
        'Não foi possível remover porque há relação com a tabela '
        + _dataItem.getRelationTable() +' utilizando o ID '+ _dataItem.getRelationItem().getInt('id')
    )
}
```

Podemos em alternativa na ação `remove`, que executa antes de realizar o comando de base que apaga o registro,
implementar a "limpeza" de outros registros que podem ter relação, por exemplo:

```javascript title="minha_app/server/actions/meu_formulario/remove.js"
_db.form('outro_formulario')
    .where(
        _db.where('meu_formulario_id')
            .equals(_dataItem.getRecord().getInt('id'))
    )
    .delete()
```

### Setup

É possível ter uma `action` específica que é executada apenas quando é realizada a remoção de dados durante a
configuração (_setup_) da base de dados.

Por exemplo:

- `minha_app/server/actions/meu_formulario/setup_remove.js`
- `minha_app/server/actions/meu_formulario/setup_removed.js`

## Conclusão

Com as ações (`actions`) podemos centralizar operações específicas que estão relacionadas com a manipulação de
determinados dados.

Permite artilhar com código que fornecem mecanismos úteis para garantir integridade, facilitar tarefas, realizar
integrações, fazer operações paralelas, ter verificações adicionais, e muito mais.

A codificar ações é simples e extremamente úteis, é possível extender com a utilização de qualquer outro recurso
da framework low-code poliglota.

> No código das ações pode utilizar qualquer recurso da framework low-code poliglota.

Considere a utilização das ações e rapidamente é possível comprovar como que a facilidade obtida pode potencializar
muitas estratégias úteis.
