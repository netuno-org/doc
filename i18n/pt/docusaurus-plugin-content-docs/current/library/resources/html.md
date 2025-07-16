---
id: html
title: HTML
sidebar_label: HTML
---

Permite maior facilidade em manipular código HTML, utiliza o [JSOUP](https://jsoup.org).

---

## clean

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>clean</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>clean</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>, <span style={{color: '#FF8000'}}>outputSettings</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document$OutputSettings</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>clean</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>connect</span>(<span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.Connection</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **url** | _string_ |   |

##### Retorno

( _org.jsoup.Connection_ )


---

## documentOutputSettings

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>documentOutputSettings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document$OutputSettings</span>
##### Retorno

( _org.jsoup.nodes.Document$OutputSettings_ )


---

## isValid

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>isValid</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>newSession</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.Connection</span>
##### Retorno

( _org.jsoup.Connection_ )


---

## parse

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](../objects/InputStream)_ | Conteúdo de um ficheiro HTML a ser processado. |
| **baseUri** | _string_ | Url base para resolver links relativos. |
| **charset** | _string_ | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo processado em HTML.

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Descrição

Realiza a interpretação do conteúdo dum ficheiro e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ficheiro** | _[File](../objects/File)_ | Ficheiro que será processado. |
| **baseUri** | _string_ | Url base para resolver links relativos. |
| **charset** | _string_ | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo do ficheiro em HTML.

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Descrição

Realiza a interpretação dum conteúdo e retorna-o em HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
| **baseUri** | _string_ | Url base para resolver links relativos. |
| **charset** | _string_ | Código do tipo de codificação de caracteres. Exemplo:UTF-8. |

##### Retorno

( _org.jsoup.nodes.Document_ )

Conteúdo processado em HTML.

---

## parseBodyFragment

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseBodyFragment</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bodyHtml** | _string_ |   |

##### Retorno

( _org.jsoup.nodes.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseBodyFragment</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseURL</span>(<span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseURL</span>(<span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>timeoutMillis</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>safelist</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>
##### Retorno

( _org.jsoup.safety.Safelist_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>safelist</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _org.jsoup.safety.Safelist_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>safelist</span>(<span style={{color: '#FF8000'}}>copy</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **copy** | _org.jsoup.safety.Safelist_ |   |

##### Retorno

( _org.jsoup.safety.Safelist_ )


---

