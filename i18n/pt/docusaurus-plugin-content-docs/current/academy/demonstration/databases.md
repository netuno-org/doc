---
sidebar_position: 4
id: databases
title: Banco de Dados
---

# Banco de Dados

Nesta etapa, vamos explorar o **banco de dados** criado automaticamente a partir do formulário **Tarefa** definido anteriormente.

Ao criar o formulário **Tarefa** com o campo **Nome**, o Netuno criou no banco de dados a tabela `tarefa` com a coluna `nome`, de acordo com os nomes definidos na criação do formulário.

Os **nomes técnicos** dos campos (por exemplo, `tarefa`, `nome`, `tarefa_id`) são usados na programação e nas consultas SQL, e não correspondem aos nomes de exibição mostrados na interface.

## Queries

Nesta seção vamos executar queries diretamente no banco de dados usando a interface de gestão do Netuno.

1. Acesse o ambiente **Construir**.
2. No menu, clique em **Gestão > Query**.
3. No editor de query, cole e execute os comandos abaixo.

### Consultas Simples

Liste apenas o nome das tarefas:

```sql
SELECT nome
FROM tarefa;
```

Liste todos os campos da tabela de tarefas:

```sql
SELECT *
FROM tarefa;
```

Liste todos os campos da tabela de registros:

```sql
SELECT *
FROM registro;
```

Liste todos os campos da tabela de trabalhadores:

```sql
SELECT *
FROM trabalhador;
```

Ao clicar em **Executar**, o Netuno gera uma tabela de resultados para **cada** comando separado por ponto e vírgula (`;`).  
Isso é útil quando você quer executar várias consultas de uma só vez.

### Consulta com Relacionamentos

Agora, execute uma consulta que relaciona todas as tabelas:

```sql
SELECT
  tarefa.nome,
  registro.inicio,
  registro.fim,
  trabalhador.nome
FROM tarefa
INNER JOIN registro
  ON tarefa.id = registro.tarefa_id
INNER JOIN trabalhador
  ON trabalhador.id = registro.trabalhador_id;
```

Essa query retorna:

- O nome da tarefa.
- O início e o fim de cada registro.
- O nome do trabalhador associado a cada registro.

Ela demonstra como os relacionamentos entre tabelas permitem combinar informações de diferentes entidades da aplicação.

## Diagrama

Para visualizar a estrutura do banco de dados de forma mais intuitiva, use o **Diagrama** do Netuno.

1. Acesse o ambiente **Construir**.
2. No menu, clique em **Gestão > Diagrama**.

No Diagrama você pode:

- Ampliar ou reduzir o zoom.
- Exportar o diagrama como imagem.

Essas ações estão disponíveis em botões do lado direito do painel do diagrama.

O Netuno cria automaticamente as linhas com setas de relacionamento com base na configuração de **Links** nos campos (por exemplo, campos do tipo `select` que apontam para outras tabelas).

## Boas Práticas

Ao modelar o seu banco de dados no Netuno, siga estas boas práticas:

- Use o sufixo `_id` nos campos que representam relacionamentos, por exemplo:
  - `tarefa_id`
  - `trabalhador_id`
- Evite usar nomes de tabelas e campos no plural, como `tarefas`, `registros` ou `trabalhadores`.

Evitar o plural ajuda a:

- Manter os nomes mais curtos e legíveis.
- Reduzir ambiguidades ao escrever queries.
- Facilitar a leitura nos formulários e nos diagramas, principalmente quando há múltiplos relacionamentos.

:::tip Padrão de nomenclatura
Como padrão, use sempre **nomes no singular** para formulários, tabelas e campos.  
Exemplos: `tarefa`, `registro`, `trabalhador`, `tarefa_id`, `trabalhador_id`.
:::

## Próximo Passo

Avance para a próxima etapa de **Relacionar Dados** para continuar com a aplicação de demonstração.