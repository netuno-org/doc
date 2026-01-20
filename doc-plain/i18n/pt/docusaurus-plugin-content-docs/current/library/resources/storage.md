---
id: storage
title: Storage
sidebar_label: Storage
---

Recursos de gestão de ficheiros da aplicação que ficam na pasta `storage`.

---

## absolutePath

---

#### _storage.absolutePath() : string
##### Descrição

Obtém o caminho absoluto do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho absoluto do storage.

---

## database

---

#### _storage.database(tabela: string) : [Storage](/docs/library/resources/storage)
##### Descrição

Inicia um novo storage para a pasta onde ficam os ficheiros de uma tabela que representa um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para a tabela de base de dados.

---

#### _storage.database(tabela: string, coluna: string) : [Storage](/docs/library/resources/storage)
##### Descrição

Inicia um novo storage para a pasta onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para a coluna de uma tabela de base de dados.

---

#### _storage.database(tabela: string, coluna: string, caminho: string) : [Storage](/docs/library/resources/storage)
##### Descrição

Inicia um novo storage para um caminho específico onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabela** | _string_ | Nome da tabela que também é mesmo nome do formulário. |
| **coluna** | _string_ | Nome da coluna que também é mesmo nome do campo no formulário. |
| **caminho** | _string_ | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

#### _storage.database(tabela: string, coluna: string, caminho: string, nomeFicheiro: string) : [Storage](/docs/library/resources/storage)
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

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

## ensurePath

---

#### _storage.ensurePath() : [Storage](/docs/library/resources/storage)
##### Retorno

( _[Storage](/docs/library/resources/storage)_ )


---

## extension

---

#### _storage.extension() : string
##### Descrição

Obtém a extensão do ficheiro.

##### Retorno

( _string_ )

A extensão do ficheiro.

---

## file

---

#### _storage.file() : [File](/docs/library/objects/File)
##### Descrição

Objeto de manipulação de ficheiro do storage que está sendo utilizado.

##### Retorno

( _[File](/docs/library/objects/File)_ )

Permite interagir com o ficheiro fisicamente.

---

## filesystem

---

#### _storage.filesystem(pasta: string, caminho: string) : [Storage](/docs/library/resources/storage)
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pasta** | _string_ | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| **caminho** | _string_ | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

#### _storage.filesystem(pasta: string, caminho: string, nomeFicheiro: string) : [Storage](/docs/library/resources/storage)
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pasta** | _string_ | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| **caminho** | _string_ | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |
| **nomeFicheiro** | _string_ | Possibilidade de adicionar o nome do ficheiro a parte caso haja uma estrutura de caminho muito complexa. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

## folder

---

#### _storage.folder() : [File](/docs/library/objects/File)
##### Descrição

Objeto de manipulação de pasta do storage que está sendo utilizado.

##### Retorno

( _[File](/docs/library/objects/File)_ )

Permite interagir com a pasta fisicamente.

---

## fullPath

---

#### _storage.fullPath() : string
##### Descrição

Obtém o caminho completo do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho completo do storage.

---

## getBase

---

#### _storage.getBase() : string
##### Descrição

Obtém o caminho base do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho base do storage.

---

## getInput

---

#### _storage.getInput() : [InputStream](/docs/library/objects/InputStream)
##### Descrição

Obtém o objeto de entrada de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )

Objeto de entrada de dados do Netuno para o storage em uso.

---

## getInputStream

---

#### _storage.getInputStream() : [InputStream](/docs/library/objects/InputStream)
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getOutput

---

#### _storage.getOutput() : [OutputStream](/docs/library/objects/OutputStream)
##### Descrição

Obtém o objeto de saída de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Objeto de saída de dados do Netuno para o storage em uso.

---

## getOutputStream

---

#### _storage.getOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## input

---

#### _storage.input() : [InputStream](/docs/library/objects/InputStream)
##### Descrição

Obtém o objeto de entrada de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )

Objeto de entrada de dados do Netuno para o storage em uso.

---

## inputStream

---

#### _storage.inputStream() : [InputStream](/docs/library/objects/InputStream)
##### Descrição

Obtém o objeto de entrada de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )

Objeto de entrada de dados do Java para o storage em uso.

---

## isDatabase

---

#### _storage.isDatabase() : boolean
##### Descrição

Se o storage está definido na pasta de base de dados.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de base de dados.

---

## isExtension

---

#### _storage.isExtension(charset: string) : boolean
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

#### _storage.isFile() : boolean
##### Descrição

Verifica se é um ficheiro.

##### Retorno

( _boolean_ )

Se é um ficheiro.

---

## isFileSystem

---

#### _storage.isFileSystem() : boolean
##### Descrição

Se o storage está definido na pasta de filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de filesystem.

---

## isFileSystemPrivate

---

#### _storage.isFileSystemPrivate() : boolean
##### Descrição

Se o storage está definido na pasta privada do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta privada do filesystem.

---

## isFileSystemPublic

---

#### _storage.isFileSystemPublic() : boolean
##### Descrição

Se o storage está definido na pasta pública do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta pública do filesystem.

---

## isFileSystemServer

---

#### _storage.isFileSystemServer() : boolean
##### Descrição

Se o storage está definido na pasta de servidor do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de servidor do filesystem.

---

## isFolder

---

#### _storage.isFolder() : boolean
##### Descrição

Verifica se é uma pasta.

##### Retorno

( _boolean_ )

Se é uma pasta.

---

## newRandomFile

---

#### _storage.newRandomFile(charset: string) : [Storage](/docs/library/resources/storage)
##### Descrição

Gera um novo storage a partir do storage atual mas para um ficheiro com um nome randómico e que ainda não exista e assim possa ser guardado sem conflitos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _string_ | Extensão no nome do ficheiro. |

##### Retorno

( _[Storage](/docs/library/resources/storage)_ )

Novo storage para um novo ficheiro com um nome randómico inexistente.

---

## output

---

#### _storage.output() : [OutputStream](/docs/library/objects/OutputStream)
##### Descrição

Obtém o objeto de saída de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Objeto de saída de dados do Netuno para o storage em uso.

---

## outputStream

---

#### _storage.outputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Descrição

Obtém o objeto de saída de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Objeto de saída de dados do Java para o storage em uso.

---

## path

---

#### _storage.path() : string
##### Descrição

Obtém o caminho do storage que está sendo utilizado.

##### Retorno

( _string_ )

O caminho do storage.

---

## reader

---

#### _storage.reader() : java.io.Reader
##### Descrição

Obtém o objeto de entrada de dados como texto do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Reader_ )

Objeto de entrada de dados como texto do Java para o storage em uso.

---

## readerBOM

---

#### _storage.readerBOM() : java.io.Reader
##### Descrição

Obtém o objeto de entrada de dados como texto BOM (marca de ordem de byte) do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Reader_ )

Objeto de entrada de dados como texto (_BOM_) do Java para o storage em uso.

---

#### _storage.readerBOM(charset: string) : java.io.Reader
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

#### _storage.saveFile(ficheiro: [File](/docs/library/objects/File)) : void
##### Descrição

Guarda o ficheiro no caminho do storage atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ficheiro** | _[File](/docs/library/objects/File)_ | Ficheiro que será guardado no `storage` atual. |

##### Retorno

( _void_ )


---

## setBase

---

#### _storage.setBase(base: string) : boolean
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

#### _storage.url() : string
##### Descrição

Obtém a URL do storage que está sendo utilizado.

##### Retorno

( _string_ )

A URL para o storage.

---

## writer

---

#### _storage.writer() : java.io.Writer
##### Descrição

Obtém o objeto de saída de dados como texto do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Writer_ )

Objeto de saída de dados como texto do Java para o storage em uso.

---

