---
id: xml
title: XML
sidebar_label: XML
---

Este recurso utiliza o mecanismo nativo do Java para criar e interpretar _XML_, baseado no `javax.xml` e no `org.w3c.dom`.

```javascript
//Criar ficheiro XML
const xml = _xml.create();
const document = xml.builder().newDocument();
const root = document.createElement("root");
const item = document.createElement("item");
const attItemId = document.createAttribute("id");
attItemId.setValue("1");
item.setAttributeNode(attItemId);
item.appendChild(document.createTextNode("Texto..."))
root.appendChild(item);
document.appendChild(root);
xml.output(document);
```

---

## builder

---

#### `_xml.create()`.<span style="color: #008000">builder</span>() : <span style="font-weight: normal; font-style: italic;">javax.xml.parsers.DocumentBuilder</span>
##### Description

Permite aceder o objecto que gere a construção ou interpretação de documentos XML.

##### Return

( _javax.xml.parsers.DocumentBuilder_ )

Objeto que gere a manipulação de documentos XML.

---

## create

---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">create</span>() : <span style="font-weight: normal; font-style: italic;">[XML](../../resources/XML)</span>
##### Description

Cria uma nova instância para manipular XML.

##### How To Use

```javascript
const xml = _xml.create();
```

##### Return

( _[XML](../../resources/XML)_ )

Nova instância do recurso XML.

---

## factory

---

#### `_xml.create()`.<span style="color: #008000">factory</span>() : <span style="font-weight: normal; font-style: italic;">javax.xml.parsers.DocumentBuilderFactory</span>
##### Description

Permite aceder a API da fábrica que gera os objetos de construção ou interpretação de documentos XML.

##### Return

( _javax.xml.parsers.DocumentBuilderFactory_ )

API da fábrica que gera os objetos de manipulação de documentos XML.

---

## nodeType

---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">nodeType</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Description

Obtém o identificador para um tipo nó da estrutura do XML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tipo** | _string_ | Identificador do tipo de nó da estrutura do XML através do nome, suporta:<br><ul><li>element</li><li>attribute</li><li>text</li><li>cdata-section</li><li>entity-reference</li><li>entity</li><li>processing-instruction</li><li>comment</li><li>document</li><li>document-type</li><li>document-fragment</li><li>notation</li></ul> |

##### Return

( _short_ )

Identificador do tipo de nó no XML.

---

## output

---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">documento</span>: <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Realiza o output do XML final diretamente para o cliente e também evita o cache do browser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">documento</span>: <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>, <span style="color: #FF8000">ficheiroNome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Realiza o output do ficheiro XML final para o cliente realizar o download final diretamente para o cliente e também evita o cache do browser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **ficheiroNome** | _string_ | Nome do ficheiro que será indicado para o cliente efetuar o download. |

##### Return

( _void_ )


---

## parse

---

#### `_xml.create()`.<span style="color: #008000">parse</span>(<span style="color: #FF8000">fluxoEntrada</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>
##### Description

Através de um fluxo de entrada de dados de XML obtém o objeto de representação do documento para ser interpretado e processado.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fluxoEntrada** | _[InputStream](../../objects/InputStream)_ | Fluxo de entrada de dados em XML. |

##### Return

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.<span style="color: #008000">parse</span>(<span style="color: #FF8000">conteudo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>
##### Description

Através de um texto XML em string obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **conteudo** | _string_ | Conteúdo XML para ser interpretado e processado. |

##### Return

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.<span style="color: #008000">parse</span>(<span style="color: #FF8000">conteudo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>
##### Description

Através de um texto XML em string obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **conteudo** | _string_ | Conteúdo XML para ser interpretado e processado. |
| **charset** | _string_ | Código do tipo de codificação de caracteres como:<br/><ul><li>US-ASCII</li><li>ISO-8859-1</li><li>UTF-8</li><li>UTF-16BE</li><li>UTF-16LE</li><li>UTF-16</li></ul> |

##### Return

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.<span style="color: #008000">parse</span>(<span style="color: #FF8000">ficheiro</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>
##### Description

Através de um ficheiro XML obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ficheiro** | _[File](../../objects/File)_ | Ficheiro XML para ser interpretado e processado. |

##### Return

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

## save

---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">save</span>(<span style="color: #FF8000">documento</span>: <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>, <span style="color: #FF8000">fluxoSaida</span>: <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Guarda o documento em um fluxo de dados de saída.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **fluxoSaida** | _[OutputStream](../../objects/OutputStream)_ | Fluxo de dados de saída onde o documento deve ser guardado. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">save</span>(<span style="color: #FF8000">documento</span>: <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>, <span style="color: #FF8000">ficheiro</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Guarda o documento em um ficheiro.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **ficheiro** | _[File](../../objects/File)_ | Ficheiro de destino onde o documento deve ser guardado. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">save</span>(<span style="color: #FF8000">documento</span>: <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>, <span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Guarda o documento no storage da aplicação.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **storage** | _[Storage](../../resources/Storage)_ | Destino no storage da aplicação onde o documento deve ser guardado. |

##### Return

( _void_ )


---

## toString

---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">toString</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

A partir da definição do documento obtém uma string com o resultado final em XML.

##### Return

( _string_ )

Todo contéudo XML final em texto.

---

#### <span style="font-weight: normal">_xml</span>.<span style="color: #008000">toString</span>(<span style="color: #FF8000">documento</span>: <span style="font-weight: normal; font-style: italic;">org.w3c.dom.Document</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

A partir da definição do documento obtém uma string com o resultado final em XML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |

##### Return

( _string_ )

Todo contéudo XML final em texto.

---

