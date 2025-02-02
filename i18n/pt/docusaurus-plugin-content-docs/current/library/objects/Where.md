---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o recurso _db.form()

---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Define uma condição com o operador condicional AND no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Objeto Where atual.

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Define um segundo nivel condições com o operador condicional AND no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | Objeto Where do proximo nivel. |

##### Retorno

( _[Where](../objects/Where)_ )

Objeto Where atual.

---

## contains

---

#### <span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que inclua o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## different

---

#### <span style={{color: '#008000'}}>different</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que diferente do padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## endsWith

---

#### <span style={{color: '#008000'}}>endsWith</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que termina com o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## equal

---

#### <span style={{color: '#008000'}}>equal</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja exata ao padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## getConditions

---

#### <span style={{color: '#008000'}}>getConditions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{color: '#008000'}}>greaterOrEqualsThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja maior ou igual que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## greaterThan

---

#### <span style={{color: '#008000'}}>greaterThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja maior que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## in

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja igual a algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object[]_ | Volores da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja igual a algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Volores da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## inRaw

---

#### <span style={{color: '#008000'}}>inRaw</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](../objects/Where)_ )


---

## lessOrEqualsThan

---

#### <span style={{color: '#008000'}}>lessOrEqualsThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja menor ou igual que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## lessThan

---

#### <span style={{color: '#008000'}}>lessThan</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja menor que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## notIn

---

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja diferente de algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object[]_ | Volores da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que seja diferente de algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Volores da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Define uma condição com o operador condicional OR no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Objeto Where atual.

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Define um segundo nivel condições com o operador condicional OR no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | Objeto Where do proximo nivel. |

##### Retorno

( _[Where](../objects/Where)_ )

Objeto Where atual.

---

## setConditions

---

#### <span style={{color: '#008000'}}>setConditions</span>(<span style={{color: '#FF8000'}}>conditions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Define as demais condições aninhadas do objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conditions** | _java.util.List_ | Demais condições aninhadas do objeto. |

##### Retorno

( _[Where](../objects/Where)_ )

Objeto Where atual.

---

## setTable

---

#### <span style={{color: '#008000'}}>setTable</span>(<span style={{color: '#FF8000'}}>nomeTabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Define o nome da tabela a qual será aplicado a condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela a qual será aplicado a condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Objeto Where atual.

---

## startsWith

---

#### <span style={{color: '#008000'}}>startsWith</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Operador relacional que filtra qualquer ocorrência que inicia com o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[Where](../objects/Where)_ )

Operador relacional.

---

