---
id: html
title: HTML
sidebar_label: HTML
---

Permite maior facilidade em manipular código HTML, utiliza o [JSOUP](https://jsoup.org).

---

## clean

---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: org.jsoup.safety.Safelist) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _string_ )


---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: org.jsoup.safety.Safelist, outputSettings: org.jsoup.nodes.Document$OutputSettings) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |
| **outputSettings** | _org.jsoup.nodes.Document$OutputSettings_ |   |

##### Retorno

( _string_ )


---

#### _html.clean(bodyHtml: string, safelist: org.jsoup.safety.Safelist) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _string_ )


---

## connect

---

#### _html.connect(url: string) : org.jsoup.Connection
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **url** | _string_ |   |

##### Retorno

( _org.jsoup.Connection_ )


---

## documentOutputSettings

---

#### _html.documentOutputSettings() : org.jsoup.nodes.Document$OutputSettings
##### Retorno

( _org.jsoup.nodes.Document$OutputSettings_ )


---

## isValid

---

#### _html.isValid(bodyHtml: string, safelist: org.jsoup.safety.Safelist) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _boolean_ )


---

## newSession

---

#### _html.newSession() : org.jsoup.Connection
##### Retorno

( _org.jsoup.Connection_ )


---

## parse

---

#### _html.parse(input: [InputStream](/docs/library/objects/InputStream), baseUri: string, charset: string) : org.jsoup.nodes.Document
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Conteúdo de um ficheiro HTML a ser processado. |
| **baseUri** | _string_ | Url base para resolver links relativos. |
| **charset** | _string_ | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo processado em HTML.

---

#### _html.parse(content: string) : org.jsoup.nodes.Document
##### Descrição

Através do código HTML é realiza a interpretação e retorna o objeto de manipulação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ | Conteúdo HTML que será processado. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Objeto do [JSOUP](https://jsoup.org) que permite a interação com o código HTML.

---

#### _html.parse(ficheiro: [File](/docs/library/objects/File), baseUri: string, charset: string) : org.jsoup.nodes.Document
##### Descrição

Realiza a interpretação do conteúdo dum ficheiro e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ficheiro** | _[File](/docs/library/objects/File)_ | Ficheiro que será processado. |
| **baseUri** | _string_ | Url base para resolver links relativos. |
| **charset** | _string_ | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo do ficheiro em HTML.

---

#### _html.parse(storage: [Storage](/docs/library/resources/storage), baseUri: string, charset: string) : org.jsoup.nodes.Document
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
| **baseUri** | _string_ | Url base para resolver links relativos. |
| **charset** | _string_ | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo processado em HTML.

---

## parseBodyFragment

---

#### _html.parseBodyFragment(bodyHtml: string) : org.jsoup.nodes.Document
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |

##### Retorno

( _org.jsoup.nodes.Document_ )


---

#### _html.parseBodyFragment(bodyHtml: string, baseUri: string) : org.jsoup.nodes.Document
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |

##### Retorno

( _org.jsoup.nodes.Document_ )


---

## parseURL

---

#### _html.parseURL(url: string) : org.jsoup.nodes.Document
##### Descrição

Obtém o HTML através de um endereço web (URL), realiza a interpretação e retorna o objeto de manipulação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **url** | _string_ | Objeto que será convertido em texto e enviado. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Objeto do [JSOUP](https://jsoup.org) que permite a interação com o código HTML.

---

#### _html.parseURL(url: string, timeoutMillis: int) : org.jsoup.nodes.Document
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **url** | _string_ |   |
| **timeoutMillis** | _int_ |   |

##### Retorno

( _org.jsoup.nodes.Document_ )


---

## safelist

---

#### _html.safelist() : org.jsoup.safety.Safelist
##### Retorno

( _org.jsoup.safety.Safelist_ )


---

#### _html.safelist(type: string) : org.jsoup.safety.Safelist
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _org.jsoup.safety.Safelist_ )


---

#### _html.safelist(copy: org.jsoup.safety.Safelist) : org.jsoup.safety.Safelist
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **copy** | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _org.jsoup.safety.Safelist_ )


---

