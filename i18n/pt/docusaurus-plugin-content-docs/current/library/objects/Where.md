---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o recurso _db.form()

---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>different</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>endsWith</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>equal</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

## equals

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _boolean_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Number</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Number_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _string_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.sql.Date_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.sql.Time_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.sql.Timestamp_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.time.LocalDate_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.time.LocalDateTime_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.time.LocalTime_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.util.UUID_ | Volor da condição. |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Operador relacional.

---

## getConditions

---

#### <span style={{color: '#008000'}}>getConditions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[ConditionalOperator](/docs/library/objects/ConditionalOperator)&gt;</span>
##### Descrição

Retorna as demais condições aninhadas do objeto.

##### Retorno

( _java.util.List_ )

Demais condições aninhadas do objeto.

---

## getTable

---

#### <span style={{color: '#008000'}}>getTable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome da tabela a qual será aplicado a condição.

##### Retorno

( _string_ )

Nome da tabela a qual será aplicado a condição.

---

## greaterOrEqualsThan

---

#### <span style={{color: '#008000'}}>greaterOrEqualsThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>greaterThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>inRaw</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )


---

## lessOrEqualsThan

---

#### <span style={{color: '#008000'}}>lessOrEqualsThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>lessThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

## notContains

---

#### <span style={{color: '#008000'}}>notContains</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )


---

## notEndsWith

---

#### <span style={{color: '#008000'}}>notEndsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )


---

## notEqual

---

#### <span style={{color: '#008000'}}>notEqual</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )


---

## notEquals

---

#### <span style={{color: '#008000'}}>notEquals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )


---

## notIn

---

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

## notStartsWith

---

#### <span style={{color: '#008000'}}>notStartsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](/docs/library/objects/Where)_ )


---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>setConditions</span>(<span style={{color: '#FF8000'}}>conditions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[ConditionalOperator](/docs/library/objects/ConditionalOperator)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>setTable</span>(<span style={{color: '#FF8000'}}>nomeTabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

#### <span style={{color: '#008000'}}>startsWith</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
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

