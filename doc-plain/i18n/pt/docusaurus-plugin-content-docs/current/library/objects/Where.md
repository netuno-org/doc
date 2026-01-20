---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o recurso _db.form()

---

## and

---

#### and(coluna: string) : [Where](/docs/library/objects/Where)
##### Descrição

Define uma condição com o operador condicional AND no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where atual.

---

#### and(where: [Where](/docs/library/objects/Where)) : [Where](/docs/library/objects/Where)
##### Descrição

Define um segundo nivel condições com o operador condicional AND no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Objeto Where do proximo nivel. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where atual.

---

## contains

---

#### contains(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que inclua o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## different

---

#### different(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que diferente do padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## endsWith

---

#### endsWith(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que termina com o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## equal

---

#### equal(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## getConditions

---

#### getConditions() : java.util.List
##### Descrição

Retorna as demais condições aninhadas do objeto.

##### Retorno

( _java.util.List_ )

Demais condições aninhadas do objeto.

---

## getTable

---

#### getTable() : string
##### Descrição

Retorna o nome da tabela a qual será aplicado a condição.

##### Retorno

( _string_ )

Nome da tabela a qual será aplicado a condição.

---

## greaterOrEqualsThan

---

#### greaterOrEqualsThan(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja maior ou igual que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## greaterThan

---

#### greaterThan(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja maior que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## in

---

#### in(valores: java.lang.Object[]) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja igual a algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object[]_ | Volores da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### in(valores: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja igual a algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Volores da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## inRaw

---

#### inRaw(value: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )


---

## lessOrEqualsThan

---

#### lessOrEqualsThan(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja menor ou igual que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## lessThan

---

#### lessThan(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja menor que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## notIn

---

#### notIn(valores: java.lang.Object[]) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja diferente de algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object[]_ | Volores da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### notIn(valores: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja diferente de algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Volores da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## or

---

#### or(coluna: string) : [Where](/docs/library/objects/Where)
##### Descrição

Define uma condição com o operador condicional OR no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where atual.

---

#### or(where: [Where](/docs/library/objects/Where)) : [Where](/docs/library/objects/Where)
##### Descrição

Define um segundo nivel condições com o operador condicional OR no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Objeto Where do proximo nivel. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where atual.

---

## setConditions

---

#### setConditions(conditions: java.util.List) : [Where](/docs/library/objects/Where)
##### Descrição

Define as demais condições aninhadas do objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conditions** | _java.util.List_ | Demais condições aninhadas do objeto. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where atual.

---

## setTable

---

#### setTable(nomeTabela: string) : [Where](/docs/library/objects/Where)
##### Descrição

Define o nome da tabela a qual será aplicado a condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela a qual será aplicado a condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where atual.

---

## startsWith

---

#### startsWith(valor: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Descrição

Operador relacional que filtra qualquer ocorrência que inicia com o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

