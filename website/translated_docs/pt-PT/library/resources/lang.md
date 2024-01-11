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

#### _lang.get(key: string, formats: _[Ljava.lang.Object;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| formats | _[Ljava.lang.Object;[]_ |   |

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

#### _lang.getLocale() : _java.util.Locale_
##### Descrição

Retorna o nome do locale.

##### Retorno

( _java.util.Locale_ )


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

#### _lang.init() : _[Lang](../../resources/Lang)_
##### Descrição

Inicia o recurso Lang .

##### Retorno

( _[Lang](../../resources/Lang)_ )

Retorna o lang por definição.

---

#### _lang.init(chave: string) : _[Lang](../../resources/Lang)_
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave inserida. |

##### Retorno

( _[Lang](../../resources/Lang)_ )

Retorna a chave e o texto inseridos.

---

#### _lang.init(chave: string, porDefeito: _boolean_) : _[Lang](../../resources/Lang)_
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave inserida. |
| porDefeito | _boolean_ | Definir se é para predefinição. |

##### Retorno

( _[Lang](../../resources/Lang)_ )

Retorna a chave e o texto inseridos.

---

## locale

---

#### _lang.locale() : _java.util.Locale_
##### Descrição

Retorna o nome do locale.

##### Retorno

( _java.util.Locale_ )


---

## name

---

#### _lang.name() : string
##### Descrição

Retorna o nome do locale.

##### Retorno

( string )


---

