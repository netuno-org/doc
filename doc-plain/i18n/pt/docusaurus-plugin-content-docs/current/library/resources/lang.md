---
id: lang
title: Lang
sidebar_label: Lang
---

Faz a gestão de textos com tradução para os diversos idiomas.

---

## code

---

#### _lang.code() : string
##### Descrição

Retorna todos os locale.

##### Retorno

( _string_ )


---

## get

---

#### _lang.get(chave: string) : string
##### Descrição

Pesquisa a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave a ser procurada. |

##### Retorno

( _string_ )

Retorna a chave correspondente.

---

#### _lang.get(key: string, formats: java.lang.Object[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **formats** | _java.lang.Object[]_ |   |

##### Retorno

( _string_ )


---

## getCode

---

#### _lang.getCode() : string
##### Descrição

Retorna todos os locale.

##### Retorno

( _string_ )


---

## getCountry

---

#### _lang.getCountry() : string
##### Retorno

( _string_ )


---

## getLanguage

---

#### _lang.getLanguage() : string
##### Retorno

( _string_ )


---

## getLocale

---

#### _lang.getLocale() : java.util.Locale
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

( _string_ )


---

## getOrDefault

---

#### _lang.getOrDefault(chave: string, texto: string) : string
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave inserida. |
| **texto** | _string_ | Texto inserido. |

##### Retorno

( _string_ )

Retorna a chave e o texto inseridos.

---

## init

---

#### _lang.init() : [Lang](/docs/library/resources/lang)
##### Descrição

Inicia o recurso Lang .

##### Retorno

( _[Lang](/docs/library/resources/lang)_ )

Retorna o lang por definição.

---

#### _lang.init(chave: string) : [Lang](/docs/library/resources/lang)
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave inserida. |

##### Retorno

( _[Lang](/docs/library/resources/lang)_ )

Retorna a chave e o texto inseridos.

---

#### _lang.init(chave: string, porDefeito: boolean) : [Lang](/docs/library/resources/lang)
##### Descrição

Define a chave do locale de predefinição com um texto inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave inserida. |
| **porDefeito** | _boolean_ | Definir se é para predefinição. |

##### Retorno

( _[Lang](/docs/library/resources/lang)_ )

Retorna a chave e o texto inseridos.

---

## locale

---

#### _lang.locale() : java.util.Locale
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

( _string_ )


---

