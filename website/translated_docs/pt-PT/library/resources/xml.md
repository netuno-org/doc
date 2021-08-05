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

#### `_xml.create()`.builder() : _DocumentBuilder_
##### Descrição

Permite aceder o objecto que gere a construção ou interpretação de documentos XML.

##### Retorno

( _DocumentBuilder_ )

Objeto que gere a manipulação de documentos XML.

---

## create

---

#### _xml.create() : _XML_
##### Descrição

Cria uma nova instância para manipular XML.

##### Como Usar

```javascript
const xml = _xml.create();
```

##### Retorno

( _XML_ )

Nova instância do recurso XML.

---

## factory

---

#### `_xml.create()`.factory() : _DocumentBuilderFactory_
##### Descrição

Permite aceder a API da fábrica que gera os objetos de construção ou interpretação de documentos XML.

##### Retorno

( _DocumentBuilderFactory_ )

API da fábrica que gera os objetos de manipulação de documentos XML.

---

## nodeType

---

#### _xml.nodeType(tipo: string) : _short_
##### Descrição

Obtém o identificador para um tipo nó da estrutura do XML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Identificador do tipo de nó da estrutura do XML através do nome, suporta:<br><ul><li>element</li><li>attribute</li><li>text</li><li>cdata-section</li><li>entity-reference</li><li>entity</li><li>processing-instruction</li><li>comment</li><li>document</li><li>document-type</li><li>document-fragment</li><li>notation</li></ul> |

##### Retorno

( _short_ )

Identificador do tipo de nó no XML.

---

## output

---

#### _xml.output(documento: _Document_) : _void_
##### Descrição

Realiza o output do XML final diretamente para o cliente e também evita o cache do browser.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| documento | _Document_ | Objeto que contém a estrutura e dados do documento de XML. |

##### Retorno

( _void_ )


---

#### _xml.output(documento: _Document_, ficheiroNome: string) : _void_
##### Descrição

Realiza o output do ficheiro XML final para o cliente realizar o download final diretamente para o cliente e também evita o cache do browser.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| documento | _Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| ficheiroNome | string | Nome do ficheiro que será indicado para o cliente efetuar o download. |

##### Retorno

( _void_ )


---

## parse

---

#### `_xml.create()`.parse(fluxoEntrada: _InputStream_) : _Document_
##### Descrição

Através de um fluxo de entrada de dados de XML obtém o objeto de representação do documento para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| fluxoEntrada | _InputStream_ | Fluxo de entrada de dados em XML. |

##### Retorno

( _Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.parse(conteudo: string) : _Document_
##### Descrição

Através de um texto XML em string obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo XML para ser interpretado e processado. |

##### Retorno

( _Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.parse(conteudo: string, charset: string) : _Document_
##### Descrição

Através de um texto XML em string obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo XML para ser interpretado e processado. |
| charset | string | Código do tipo de codificação de caracteres como:<br/><ul><li>US-ASCII</li><li>ISO-8859-1</li><li>UTF-8</li><li>UTF-16BE</li><li>UTF-16LE</li><li>UTF-16</li></ul> |

##### Retorno

( _Document_ )

Objeto de representação do documento XML obtido.

---

#### `_xml.create()`.parse(ficheiro: _[File](../../objects/File)_) : _Document_
##### Descrição

Através de um ficheiro XML obtém o objeto de representação do documento XML para ser interpretado e processado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ficheiro | _[File](../../objects/File)_ | Ficheiro XML para ser interpretado e processado. |

##### Retorno

( _Document_ )

Objeto de representação do documento XML obtido.

---

## save

---

#### _xml.save(documento: _Document_, fluxoSaida: _OutputStream_) : _void_
##### Descrição

Guarda o documento em um fluxo de dados de saída.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| documento | _Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| fluxoSaida | _OutputStream_ | Fluxo de dados de saída onde o documento deve ser guardado. |

##### Retorno

( _void_ )


---

#### _xml.save(documento: _Document_, ficheiro: _[File](../../objects/File)_) : _void_
##### Descrição

Guarda o documento em um ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| documento | _Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| ficheiro | _[File](../../objects/File)_ | Ficheiro de destino onde o documento deve ser guardado. |

##### Retorno

( _void_ )


---

#### _xml.save(documento: _Document_, storage: _Storage_) : _void_
##### Descrição

Guarda o documento no storage da aplicação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| documento | _Document_ | Objeto que contém a estrutura e dados do documento de XML. |
| storage | _Storage_ | Destino no storage da aplicação onde o documento deve ser guardado. |

##### Retorno

( _void_ )


---

## toString

---

#### _xml.toString() : string
##### Descrição

A partir da definição do documento obtém uma string com o resultado final em XML.

##### Retorno

( string )

Todo contéudo XML final em texto.

---

#### _xml.toString(documento: _Document_) : string
##### Descrição

A partir da definição do documento obtém uma string com o resultado final em XML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| documento | _Document_ | Objeto que contém a estrutura e dados do documento de XML. |

##### Retorno

( string )

Todo contéudo XML final em texto.

---

