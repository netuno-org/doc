---
id: storage
title: Storage
sidebar_label: Storage
---

Recursos de gestão de ficheiros da aplicação.

---

## absolutePath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>absolutePath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho absoluto do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho absoluto do storage.

---

## database

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Descrição

Inicia um novo storage para a pasta onde ficam os ficheiros de uma tabela que representa um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |

##### Retorno

( _[Storage](../resources/storage)_ )

Novo storage iniciado para a tabela de base de dados.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Descrição

Inicia um novo storage para a pasta onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |

##### Retorno

( _[Storage](../resources/storage)_ )

Novo storage iniciado para a coluna de uma tabela de base de dados.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |
| **caminho** | _string_ | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](../resources/storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nomeFicheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |
| **caminho** | _string_ | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |
| **nomeFicheiro** | _string_ | Possibilidade de adicionar o nome do ficheiro a parte caso haja uma estrutura de caminho muito complexa, muito pouco usual. |

##### Retorno

( _[Storage](../resources/storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

## ensurePath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>ensurePath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Retorno

( _[Storage](../resources/storage)_ )


---

## extension

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>extension</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém a extensão do ficheiro.

##### Retorno

( _string_ )

A extensão do ficheiro.

---

## file

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>file</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Objeto de manipulação de ficheiro do storage que está sendo utilizado.

##### Retorno

( _[File](../objects/File)_ )

Permite interagir com o ficheiro fisicamente.

---

## filesystem

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>filesystem</span>(<span style={{color: '#FF8000'}}>pasta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pasta** | _string_ | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| **caminho** | _string_ | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](../resources/storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>filesystem</span>(<span style={{color: '#FF8000'}}>pasta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nomeFicheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pasta** | _string_ | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| **caminho** | _string_ | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |
| **nomeFicheiro** | _string_ | Possibilidade de adicionar o nome do ficheiro a parte caso haja uma estrutura de caminho muito complexa. |

##### Retorno

( _[Storage](../resources/storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

## folder

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>folder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Objeto de manipulação de pasta do storage que está sendo utilizado.

##### Retorno

( _[File](../objects/File)_ )

Permite interagir com a pasta fisicamente.

---

## fullPath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>fullPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho completo do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho completo do storage.

---

## getBase

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getBase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho base do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho base do storage.

---

## getInput

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getInput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Descrição

Obtém o objeto de entrada de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](../objects/InputStream)_ )

Objeto de entrada de dados do Netuno para o storage em uso.

---

## getInputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getInputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Retorno

( _[InputStream](../objects/InputStream)_ )


---

## getOutput

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>
##### Descrição

Obtém o objeto de saída de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](../objects/OutputStream)_ )

Objeto de saída de dados do Netuno para o storage em uso.

---

## getOutputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>
##### Retorno

( _[OutputStream](../objects/OutputStream)_ )


---

## input

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>input</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Descrição

Obtém o objeto de entrada de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](../objects/InputStream)_ )

Objeto de entrada de dados do Netuno para o storage em uso.

---

## inputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>inputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Descrição

Obtém o objeto de entrada de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](../objects/InputStream)_ )

Objeto de entrada de dados do Java para o storage em uso.

---

## isDatabase

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isDatabase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Se o storage está definido na pasta de base de dados.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de base de dados.

---

## isExtension

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isExtension</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o nome ficheiro contém a extensão.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _string_ | Extensão no nome do ficheiro. |

##### Retorno

( _boolean_ )

Se o ficheiro contém a extensão definida.

---

## isFile

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFile</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se é um ficheiro.

##### Retorno

( _boolean_ )

Se é um ficheiro.

---

## isFileSystem

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Se o storage está definido na pasta de filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de filesystem.

---

## isFileSystemPrivate

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystemPrivate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Se o storage está definido na pasta privada do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta privada do filesystem.

---

## isFileSystemPublic

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystemPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Se o storage está definido na pasta pública do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta pública do filesystem.

---

## isFileSystemServer

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystemServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Se o storage está definido na pasta de servidor do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de servidor do filesystem.

---

## isFolder

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFolder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se é uma pasta.

##### Retorno

( _boolean_ )

Se é uma pasta.

---

## newRandomFile

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>newRandomFile</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>
##### Descrição

Gera um novo storage a partir do storage atual mas para um ficheiro com um nome randómico e que ainda não exista e assim possa ser guardado sem conflitos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _string_ | Extensão no nome do ficheiro. |

##### Retorno

( _[Storage](../resources/storage)_ )

Novo storage para um novo ficheiro com um nome randómico inexistente.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>output</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>
##### Descrição

Obtém o objeto de saída de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](../objects/OutputStream)_ )

Objeto de saída de dados do Netuno para o storage em uso.

---

## outputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>outputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>
##### Descrição

Obtém o objeto de saída de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](../objects/OutputStream)_ )

Objeto de saída de dados do Java para o storage em uso.

---

## path

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>path</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho do storage.

---

## reader

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>reader</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Descrição

Obtém o objeto de entrada de dados como texto do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Reader_ )

Objeto de entrada de dados como texto do Java para o storage em uso.

---

## readerBOM

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>readerBOM</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Descrição

Obtém o objeto de entrada de dados como texto BOM (marca de ordem de byte) do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Reader_ )

Objeto de entrada de dados como texto (_BOM_) do Java para o storage em uso.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>readerBOM</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Descrição

Obtém o objeto de entrada de dados como texto BOM (marca de ordem de byte) do Java para o storage que está sendo utilizado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _string_ | Código do tipo de codificação de caracteres como: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Retorno

( _java.io.Reader_ )

Objeto de entrada de dados como texto (_BOM_) do Java para o storage em uso.

---

## saveFile

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>saveFile</span>(<span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Guarda o ficheiro no caminho do storage atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ficheiro** | _[File](../objects/File)_ | Ficheiro que será guardado no `storage` atual. |

##### Retorno

( _void_ )


---

## setBase

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>setBase</span>(<span style={{color: '#FF8000'}}>base</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Define o caminho base do storage que será utilizado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **base** | _string_ | O caminho base do storage. |

##### Retorno

( _boolean_ )

Se o caminho é válido e foi definido.

---

## url

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>url</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém a URL do storage que está sendo utilizado.

##### Retorno

( _string_ )

A URL para o storage.

---

## writer

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>writer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>
##### Descrição

Obtém o objeto de saída de dados como texto do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Writer_ )

Objeto de saída de dados como texto do Java para o storage em uso.

---

