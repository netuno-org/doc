---
id: xml
title: XML
sidebar_label: XML
---

Este recurso utiliza o mecanismo nativo do Java para criar e interpretar _XML_, baseado no `javax.xml` e no `org.w3c.dom`.

```javascript
// Criar ficheiro XML
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

#### `_xml.create()`.<span style={{color: '#008000'}}>builder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.xml.parsers.DocumentBuilder</span>
##### Descrição

Permite aceder o objecto que gere a construção ou interpretação de documentos XML.

##### Retorno

( _javax.xml.parsers.DocumentBuilder_ )

Objeto que gere a manipulação de documentos XML.

---

## create

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>create</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[XML](/docs/library/resources/xml)</span>
##### Descrição

Cria uma nova instância para manipular XML.

##### Como Usar

```javascript
const xml = _xml.create();
```

##### Retorno

( _[XML](/docs/library/resources/xml)_ )

Nova instância do recurso XML.

---

## factory

---

#### `_xml.create()`.<span style={{color: '#008000'}}>factory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.xml.parsers.DocumentBuilderFactory</span>
##### Descrição

Permite aceder a API da fábrica que gera os objetos de construção ou interpretação de documentos XML.

##### Retorno

( _javax.xml.parsers.DocumentBuilderFactory_ )

API da fábrica que gera os objetos de manipulação de documentos XML.

---

## nodeType

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>nodeType</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Descrição

Obtém o identificador para um tipo nó da estrutura do XML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Identificador do tipo de nó da estrutura do XML através do nome, suporta:<br/><ul><li>element</li><li>attribute</li><li>text</li><li>cdata-section</li><li>entity-reference</li><li>entity</li><li>processing-instruction</li><li>comment</li><li>document</li><li>document-type</li><li>document-fragment</li><li>notation</li></ul> |

##### Retorno

( _short_ )

Identificador do tipo de nó no XML.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Realiza o output do XML final diretamente para o cliente e também evita o cache do browser.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>ficheiroNome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Realiza o output do ficheiro XML final para o cliente realizar o download final diretamente para o cliente e também evita o cache do browser.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **ficheiroNome** | _string_ | Nome do ficheiro que será indicado para o cliente efetuar o download. |

##### Retorno

( _void_ )


---

## parse

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>fluxoEntrada</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Descrição

Através de um fluxo de entrada de dados de XML obtém o objeto de representação do documento para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fluxoEntrada** | _[InputStream](/docs/library/objects/InputStream)_ | Fluxo de entrada de dados em XML. |

##### Retorno

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Descrição

Através de um texto XML em string obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo XML para ser interpretado e processado. |

##### Retorno

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Descrição

Através de um texto XML em string obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo XML para ser interpretado e processado. |
| **charset** | _string_ | Código do tipo de codificação de caracteres como:<br/><ul><li>US-ASCII</li><li>ISO-8859-1</li><li>UTF-8</li><li>UTF-16BE</li><li>UTF-16LE</li><li>UTF-16</li></ul> |

##### Retorno

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Descrição

Através de um ficheiro XML obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ficheiro** | _[File](/docs/library/objects/File)_ | Ficheiro XML para ser interpretado e processado. |

##### Retorno

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

## save

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>fluxoSaida</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Guarda o documento em um fluxo de dados de saída.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **fluxoSaida** | _[OutputStream](/docs/library/objects/OutputStream)_ | Fluxo de dados de saída onde o documento deve ser guardado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Guarda o documento em um ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **ficheiro** | _[File](/docs/library/objects/File)_ | Ficheiro de destino onde o documento deve ser guardado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Guarda o documento no storage da aplicação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **storage** | _[Storage](/docs/library/resources/storage)_ | Destino no storage da aplicação onde o documento deve ser guardado. |

##### Retorno

( _void_ )


---

## toString

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>toString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

A partir da definição do documento obtém uma string com o resultado final em XML.

##### Retorno

( _string_ )

Todo contéudo XML final em texto.

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>toString</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

A partir da definição do documento obtém uma string com o resultado final em XML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |

##### Retorno

( _string_ )

Todo contéudo XML final em texto.

---

