---
id: xml
title: XML
sidebar_label: XML
---

This feature uses Java's native engine for creating and interpreting _XML_, based on `javax.xml` and `org.w3c.dom`.

```javascript
// Create XML file
const xml = _xml.create();
const document = xml.builder().newDocument();
const root = document.createElement("root");
const item = document.createElement("item");
const attItemId = document.createAttribute("id");
attItemId.setValue("1");
item.setAttributeNode(attItemId);
item.appendChild(document.createTextNode("Text..."))
root.appendChild(item);
document.appendChild(root);
xml.output(document);
```

---

## builder

---

#### `_xml.create()`.builder() : javax.xml.parsers.DocumentBuilder
##### Description

Permite aceder o objecto que gere a construção ou interpretação de documentos XML.

##### Return

( _javax.xml.parsers.DocumentBuilder_ )

Objeto que gere a manipulação de documentos XML.

---

## create

---

#### _xml.create() : [XML](/docs/library/resources/xml)
##### Description

Cria uma nova instância para manipular XML.

##### How To Use

```javascript
const xml = _xml.create();
```

##### Return

( _[XML](/docs/library/resources/xml)_ )

Nova instância do recurso XML.

---

## factory

---

#### `_xml.create()`.factory() : javax.xml.parsers.DocumentBuilderFactory
##### Description

Permite aceder a API da fábrica que gera os objetos de construção ou interpretação de documentos XML.

##### Return

( _javax.xml.parsers.DocumentBuilderFactory_ )

API da fábrica que gera os objetos de manipulação de documentos XML.

---

## nodeType

---

#### _xml.nodeType(tipo: string) : short
##### Description

Obtém o identificador para um tipo nó da estrutura do XML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tipo** | _string_ | Identificador do tipo de nó da estrutura do XML através do nome, suporta:<br/><ul><li>element</li><li>attribute</li><li>text</li><li>cdata-section</li><li>entity-reference</li><li>entity</li><li>processing-instruction</li><li>comment</li><li>document</li><li>document-type</li><li>document-fragment</li><li>notation</li></ul> |

##### Return

( _short_ )

Identificador do tipo de nó no XML.

---

## output

---

#### _xml.output(documento: org.w3c.dom.Document) : void
##### Description

Realiza o output do XML final diretamente para o cliente e também evita o cache do browser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |

##### Return

( _void_ )


---

#### _xml.output(documento: org.w3c.dom.Document, ficheiroNome: string) : void
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

#### `_xml.create()`.parse(fluxoEntrada: [InputStream](/docs/library/objects/InputStream)) : org.w3c.dom.Document
##### Description

Através de um fluxo de entrada de dados de XML obtém o objeto de representação do documento para ser interpretado e processado.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fluxoEntrada** | _[InputStream](/docs/library/objects/InputStream)_ | Fluxo de entrada de dados em XML. |

##### Return

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.parse(conteudo: string) : org.w3c.dom.Document
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

#### `_xml.create()`.parse(conteudo: string, charset: string) : org.w3c.dom.Document
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

#### `_xml.create()`.parse(ficheiro: [File](/docs/library/objects/File)) : org.w3c.dom.Document
##### Description

Através de um ficheiro XML obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ficheiro** | _[File](/docs/library/objects/File)_ | Ficheiro XML para ser interpretado e processado. |

##### Return

( _org.w3c.dom.Document_ )

Objeto de representação do documento XML obtido.

---

## save

---

#### _xml.save(documento: org.w3c.dom.Document, fluxoSaida: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Description

Guarda o documento em um fluxo de dados de saída.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **fluxoSaida** | _[OutputStream](/docs/library/objects/OutputStream)_ | Fluxo de dados de saída onde o documento deve ser guardado. |

##### Return

( _void_ )


---

#### _xml.save(documento: org.w3c.dom.Document, ficheiro: [File](/docs/library/objects/File)) : void
##### Description

Guarda o documento em um ficheiro.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **ficheiro** | _[File](/docs/library/objects/File)_ | Ficheiro de destino onde o documento deve ser guardado. |

##### Return

( _void_ )


---

#### _xml.save(documento: org.w3c.dom.Document, storage: [Storage](/docs/library/resources/storage)) : void
##### Description

Guarda o documento no storage da aplicação.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **documento** | _org.w3c.dom.Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| **storage** | _[Storage](/docs/library/resources/storage)_ | Destino no storage da aplicação onde o documento deve ser guardado. |

##### Return

( _void_ )


---

## toString

---

#### _xml.toString() : string
##### Description

A partir da definição do documento obtém uma string com o resultado final em XML.

##### Return

( _string_ )

Todo contéudo XML final em texto.

---

#### _xml.toString(documento: org.w3c.dom.Document) : string
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

