---
id: lang
title: Lang
sidebar_label: Lang
---

Recurso de atribuição de linguagem.

---

## code

---

#### _lang.code() : string
##### Descrição

Retorna todos os locale.

##### Retorno

( string )


---

## get

---

#### _lang.get(chave: string) : string
##### Descrição

Pesquisa a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave a ser procurada. |

##### Retorno

( string )

Retorna a chave correspondente.

---

#### _lang.get(arg0: string, arg1: _Object[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Retorno

( string )


---

## getCode

---

#### _lang.getCode() : string
##### Descrição

Retorna todos os locale.

##### Retorno

( string )


---

## getLocale

---

#### _lang.getLocale() : _Locale_
##### Descrição

Retorna o nome do locale.

##### Retorno

( _Locale_ )


---

## getName

---

#### _lang.getName() : string
##### Descrição

Retorna o nome do locale.

##### Retorno

( string )


---

## getOrDefault

---

#### _lang.getOrDefault(chave: string, texto: string) : string
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave inserida. |
| texto | string | Texto inserido. |

##### Retorno

( string )

Retorna a chave e o texto inseridos.

---

## init

---

#### _lang.init() : _Lang_
##### Descrição

Inicia o recurso Lang .

##### Retorno

( _Lang_ )

Retorna o lang por definição.

---

#### _lang.init(chave: string) : _Lang_
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave inserida. |

##### Retorno

( _Lang_ )

Retorna a chave e o texto inseridos.

---

#### _lang.init(chave: string, porDefeito: _boolean_) : _Lang_
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave inserida. |
| porDefeito | _boolean_ | Definir se é para predefinição. |

##### Retorno

( _Lang_ )

Retorna a chave e o texto inseridos.

---

## locale

---

#### _lang.locale() : _Locale_
##### Descrição

Retorna o nome do locale.

##### Retorno

( _Locale_ )


---

## name

---

#### _lang.name() : string
##### Descrição

Retorna o nome do locale.

##### Retorno

( string )


---

