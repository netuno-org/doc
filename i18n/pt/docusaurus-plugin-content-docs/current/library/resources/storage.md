---
id: storage
title: Storage
sidebar_label: Storage
---

Recursos de gestão de arquivos da aplicação que ficam na pasta `storage`.

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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Inicia um novo storage para a pasta onde ficam os arquivos de uma tabela que representa um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para a tabela de base de dados.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Inicia um novo storage para a pasta onde ficam os arquivos de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para a coluna de uma tabela de base de dados.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subcaminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico onde ficam os arquivos de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |
| **subcaminho** | _string_ | Caminho adicional relativo, normalmente é o nome do arquivos mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>tabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subcaminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nomeArquivo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico onde ficam os arquivos de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |
| **subcaminho** | _string_ | Caminho adicional relativo, normalmente é o nome do arquivo mas pode ser um caminho mais complexo. |
| **nomeArquivo** | _string_ | Possibilidade de adicionar o nome do arquivo a parte caso haja uma estrutura de caminho muito complexa, muito pouco usual. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

## ensurePath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>ensurePath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Garante que o caminho de pastas no storage existe, caso não exista será criado.

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

A própria instância do storage.

---

## extension

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>extension</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém a extensão do arquivo.

##### Retorno

( _string_ )

A extensão do arquivo.

---

## file

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>file</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Descrição

Objeto de manipulação do arquivo existente no storage que está sendo utilizado.

##### Retorno

( _[File](/docs/library/objects/File)_ )

Permite interagir com o arquivo fisicamente.

---

## filesystem

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>filesystem</span>(<span style={{color: '#FF8000'}}>pasta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subcaminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pasta** | _string_ | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| **subcaminho** | _string_ | Caminho adicional relativo, normalmente é o nome do arquivo mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>filesystem</span>(<span style={{color: '#FF8000'}}>pasta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subcaminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nomeArquivo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pasta** | _string_ | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| **subcaminho** | _string_ | Caminho adicional relativo, normalmente é o nome do arquivo mas pode ser um caminho mais complexo. |
| **nomeArquivo** | _string_ | Possibilidade de adicionar o nome do arquivo a parte caso haja uma estrutura de caminho muito complexa. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

## folder

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>folder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Descrição

Objeto de manipulação da pasta existente no storage que está sendo utilizado.

##### Retorno

( _[File](/docs/library/objects/File)_ )

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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getInput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Descrição

Obtém o objeto de entrada de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )

Objeto de entrada de dados do Netuno para o storage em uso.

---

## getInputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getInputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getOutput

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Descrição

Obtém o objeto de saída de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Objeto de saída de dados do Netuno para o storage em uso.

---

## getOutputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## input

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>input</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Descrição

Obtém o objeto de entrada de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )

Objeto de entrada de dados do Netuno para o storage em uso.

---

## inputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>inputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Descrição

Obtém o objeto de entrada de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )

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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isExtension</span>(<span style={{color: '#FF8000'}}>extensao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o nome arquivo contém a extensão.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **extensao** | _string_ | Extensão no nome do arquivo. |

##### Retorno

( _boolean_ )

Se o arquivo contém a extensão definida.

---

## isFile

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFile</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se é um arquivo.

##### Retorno

( _boolean_ )

Se é um arquivo.

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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>newRandomFile</span>(<span style={{color: '#FF8000'}}>extensao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Descrição

Gera um novo storage a partir do storage atual mas para um arquivo com um nome randómico e que ainda não exista e assim possa ser salvado sem conflitos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **extensao** | _string_ | Extensão no nome do arquivo. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage para um novo arquivo com um nome randómico inexistente.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>output</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Descrição

Obtém o objeto de saída de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Objeto de saída de dados do Netuno para o storage em uso.

---

## outputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>outputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Descrição

Obtém o objeto de saída de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Objeto de saída de dados do Java para o storage em uso.

---

## path

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>path</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Descrição

Obtém o objeto de manipulação para o caminho no storage que está sendo utilizado.

##### Retorno

( _[File](/docs/library/objects/File)_ )

Permite interagir com a caminho fisicamente.

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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>saveFile</span>(<span style={{color: '#FF8000'}}>arquivo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Salva o arquivo no caminho do storage atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arquivo** | _[File](/docs/library/objects/File)_ | Arquivo que será salvado no `storage` atual. |

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

## subpath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>subpath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o subcaminho do storage que está sendo utilizado.

##### Retorno

( _string_ )

O subcaminho do storage.

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

