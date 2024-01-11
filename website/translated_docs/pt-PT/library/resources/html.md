---
id: html
title: HTML
sidebar_label: HTML
---

Permite maior facilidade em manipular código HTML, utiliza o [JSOUP](https://jsoup.org).

---

## clean

---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: _org.jsoup.safety.Safelist_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bodyHtml | string |   |
| baseUri | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( string )


---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: _org.jsoup.safety.Safelist_, outputSettings: _org.jsoup.nodes.Document$OutputSettings_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bodyHtml | string |   |
| baseUri | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |
| outputSettings | _org.jsoup.nodes.Document$OutputSettings_ |   |

##### Retorno

( string )


---

#### _html.clean(bodyHtml: string, safelist: _org.jsoup.safety.Safelist_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bodyHtml | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( string )


---

## connect

---

#### _html.connect(url: string) : _org.jsoup.Connection_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| url | string |   |

##### Retorno

( _org.jsoup.Connection_ )


---

## documentOutputSettings

---

#### _html.documentOutputSettings() : _org.jsoup.nodes.Document$OutputSettings_
##### Retorno

( _org.jsoup.nodes.Document$OutputSettings_ )


---

## isValid

---

#### _html.isValid(bodyHtml: string, safelist: _org.jsoup.safety.Safelist_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bodyHtml | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _boolean_ )


---

## newSession

---

#### _html.newSession() : _org.jsoup.Connection_
##### Retorno

( _org.jsoup.Connection_ )


---

## parse

---

#### _html.parse(input: _java.io.InputStream_, baseUri: string, charset: string) : _org.jsoup.nodes.Document_
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _java.io.InputStream_ | Conteúdo de um ficheiro HTML a ser processado. |
| baseUri | string | Url base para resolver links relativos. |
| charset | string | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo processado em HTML.

---

#### _html.parse(content: string) : _org.jsoup.nodes.Document_
##### Descrição

Através do código HTML é realiza a interpretação e retorna o objeto de manipulação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string | Conteúdo HTML que será processado. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Objeto do [JSOUP](https://jsoup.org) que permite a interação com o código HTML.

---

#### _html.parse(ficheiro: _[File](../../objects/File)_, baseUri: string, charset: string) : _org.jsoup.nodes.Document_
##### Descrição

Realiza a interpretação do conteúdo dum ficheiro e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ficheiro | _[File](../../objects/File)_ | Ficheiro que será processado. |
| baseUri | string | Url base para resolver links relativos. |
| charset | string | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo do ficheiro em HTML.

---

#### _html.parse(storage: _[Storage](../../resources/Storage)_, baseUri: string, charset: string) : _org.jsoup.nodes.Document_
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
| baseUri | string | Url base para resolver links relativos. |
| charset | string | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo processado em HTML.

---

## parseBodyFragment

---

#### _html.parseBodyFragment(bodyHtml: string) : _org.jsoup.nodes.Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bodyHtml | string |   |

##### Retorno

( _org.jsoup.nodes.Document_ )


---

#### _html.parseBodyFragment(bodyHtml: string, baseUri: string) : _org.jsoup.nodes.Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bodyHtml | string |   |
| baseUri | string |   |

##### Retorno

( _org.jsoup.nodes.Document_ )


---

## parseURL

---

#### _html.parseURL(url: string) : _org.jsoup.nodes.Document_
##### Descrição

Obtém o HTML através de um endereço web (URL), realiza a interpretação e retorna o objeto de manipulação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| url | string | Objeto que será convertido em texto e enviado. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Objeto do [JSOUP](https://jsoup.org) que permite a interação com o código HTML.

---

#### _html.parseURL(url: string, timeoutMillis: _int_) : _org.jsoup.nodes.Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| url | string |   |
| timeoutMillis | _int_ |   |

##### Retorno

( _org.jsoup.nodes.Document_ )


---

## safelist

---

#### _html.safelist() : _org.jsoup.safety.Safelist_
##### Retorno

( _org.jsoup.safety.Safelist_ )


---

#### _html.safelist(copy: _org.jsoup.safety.Safelist_) : _org.jsoup.safety.Safelist_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| copy | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _org.jsoup.safety.Safelist_ )


---

