---
id: html
title: HTML
sidebar_label: HTML
---

Permite maior facilidade em manipular código HTML, utiliza o [JSOUP](https://jsoup.org).

---

## parse

---

#### _html.parse(arg0: _InputStream_, arg1: string, arg2: string) : _Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _Document_ )


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

#### _html.parse(arg0: _[File](../../objects/File)_, arg1: string, arg2: string) : _Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _Document_ )


---

#### _html.parse(arg0: _Storage_, arg1: string, arg2: string) : _Document_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | string |   |
| arg2 | string |   |

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

