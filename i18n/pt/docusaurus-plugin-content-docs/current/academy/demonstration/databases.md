---
sidebar_position: 3
id: databases
title: Base de Dados
---

Recorde que já foi criado o formulário **Tarefa** com o campo **Nome**, que são os nomes de _Exibição_.

Isto implica que já foi criada na base de dados a tabela **tarefa** com a coluna **nome**, cujos nomes foram inicialmente definidos na criação.

Os **nomes**, e não os nomes de exibição, é que são relevantes a nível de programação de acesso aos dados, assim como na construção de consultas à base de dados.

## Queries

No Netuno é possível manipular a base de dados diretamente através da interface que o Netuno disponibiliza para realizar operações diretamente à base de dados.

Esta interface encontra-se no ambiente **Construir** e no menu em **Gestão** > **Query**.

Experimente executar os seguintes comandos:

```
select nome from tarefa;

select * from tarefa;

select * from registo;

select * from trabalhador;
```

Repare que ao clicar em **Executar** é gerada uma tabela de resultados para cada comando, o que é útil ao executar múltiplos comandos separados por **;** (ponto e vírgula).

Realize agora uma consulta mais complexa relacionando todas as tabelas:

```
SELECT tarefa.nome, registo.inicio, registo.fim, trabalhador.nome
FROM tarefa
  INNER JOIN registo ON tarefa.id = registo.tarefa_id
  INNER JOIN trabalhador ON trabalhador.id = registo.trabalhador_id
```

## Diagrama

Para visualizar toda a estrutura da base de dados, de forma mais intuitiva, podemos explorar o Diagrama da base de dados.

O Diagrama encontra-se disponível no ambiente **Construir** em **Gestão** > **Diagrama**.

É possível ampliar o diagrama e exportar o mesmo como imagem. Estas ações encontram-se em botões disponíveis do lado direito.

O Netuno cria as linhas com setas de relacionamento através da configuração dos **Links** configurados nos campos, como no caso do campo do tipo **select**.

## Considerações

Repare que é importante utilizar o sufixo **_id** no nome dos campos que tem relacionamento com **Link** para ajudar a distinguir melhor nas consultas e, consequentemente, no diagrama.

Também não se devem utilizar nomes no plural, como **tarefa**_s_, **registo**_s_ ou **trabalhador**_es_, isto porque além dos nomes ficarem mais compridos, também se cria mais entropia na sua interpretação, principalmente no caso de formulários e tarefas para múltiplos relacionamentos.

> Como padrão o Nome dos formulários e campos deverá ser sempre no singular.

