---
id: html
title: HTML
sidebar_label: HTML
---

Permite maior facilidade em manipular código HTML, utiliza o [JSOUP](https://jsoup.org).

---

## clean

---

#### _html.clean(arg0: string, arg1: string, arg2: _Safelist_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _Safelist_ |   |

##### Retorno

( string )


---

#### _html.clean(arg0: string, arg1: string, arg2: _Safelist_, arg3: _OutputSettings_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _Safelist_ |   |
| arg3 | _OutputSettings_ |   |

##### Retorno

( string )


---

#### _html.clean(arg0: string, arg1: _Safelist_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Safelist_ |   |

##### Retorno

( string )


---

## connect

---

#### _html.connect(arg0: string) : _Connection_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Connection_ )


---

## documentOutputSettings

---

#### _html.documentOutputSettings() : _OutputSettings_
##### Retorno

( _OutputSettings_ )


---

## isValid

---

#### _html.isValid(arg0: string, arg1: _Safelist_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Safelist_ |   |

##### Retorno

( _boolean_ )


---

## newSession

---

#### _html.newSession() : _Connection_
##### Retorno

( _Connection_ )


---

## parse

---

#### _html.parse(input: _InputStream_, baseUri: string, charset: string) : _Document_
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _InputStream_ | Conteúdo de um ficheiro HTML a ser processado. |
| baseUri | string | Url base para resolver links relativos. |
| charset | string | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _Document_ )

Conteúdo processado em HTML.

---

#### _html.parse(content: string) : _Document_
##### Descrição

Através do código HTML é realiza a interpretação e retorna o objeto de manipulação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string | Conteúdo HTML que será processado. |

##### Retorno

( _Document_ )

Objeto do [JSOUP](https://jsoup.org) que permite a interação com o código HTML.

---

#### _html.parse(ficheiro: _[File](../../objects/File)_, baseUri: string, charset: string) : _Document_
##### Descrição

Realiza a interpretação do conteúdo dum ficheiro e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ficheiro | _[File](../../objects/File)_ | Ficheiro que será processado. |
| baseUri | string | Url base para resolver links relativos. |
| charset | string | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _Document_ )

Conteúdo do ficheiro em HTML.

---

#### _html.parse(storage: _Storage_, baseUri: string, charset: string) : _Document_
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _Storage_ | Caminho do ficheiro em storage que deverá ser processado. |
| baseUri | string | Url base para resolver links relativos. |
| charset | string | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _Document_ )

Conteúdo processado em HTML.

---

## parseBodyFragment

---

#### _html.parseBodyFragment(arg0: string) : _Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Document_ )


---

#### _html.parseBodyFragment(arg0: string, arg1: string) : _Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _Document_ )


---

## parseURL

---

#### _html.parseURL(url: string) : _Document_
##### Descrição

Obtém o HTML através de um endereço web (URL), realiza a interpretação e retorna o objeto de manipulação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| url | string | Objeto que será convertido em texto e enviado. |

##### Retorno

( _Document_ )

Objeto do [JSOUP](https://jsoup.org) que permite a interação com o código HTML.

---

#### _html.parseURL(arg0: string, arg1: _int_) : _Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _Document_ )


---

## safelist

---

#### _html.safelist() : _Safelist_
##### Retorno

( _Safelist_ )


---

#### _html.safelist(arg0: _Safelist_) : _Safelist_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Safelist_ |   |

##### Retorno

( _Safelist_ )


---

