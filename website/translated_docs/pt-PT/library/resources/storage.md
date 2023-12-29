---
id: storage
title: Storage
sidebar_label: Storage
---

Recursos de gestão de ficheiros da aplicação.

---

## absolutePath

---

#### _storage.absolutePath() : string
##### Descrição

Obtém o caminho absoluto do storage que está sendo utilizado.

##### Retorno

( string )

O caminho absoluto do storage.

---

## database

---

#### _storage.database(tabela: string) : _[Storage](../../resources/Storage)_
##### Descrição

Inicia um novo storage para a pasta onde ficam os ficheiros de uma tabela que representa um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que também é mesmo nome do formulário. |

##### Retorno

( _[Storage](../../resources/Storage)_ )

Novo storage iniciado para a tabela de base de dados.

---

#### _storage.database(tabela: string, coluna: string) : _[Storage](../../resources/Storage)_
##### Descrição

Inicia um novo storage para a pasta onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que também é mesmo nome do formulário. |
| coluna | string | Nome da coluna que também é mesmo nome do campo no formulário. |

##### Retorno

( _[Storage](../../resources/Storage)_ )

Novo storage iniciado para a coluna de uma tabela de base de dados.

---

#### _storage.database(tabela: string, coluna: string, caminho: string) : _[Storage](../../resources/Storage)_
##### Descrição

Inicia um novo storage para um caminho específico onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que também é mesmo nome do formulário. |
| coluna | string | Nome da coluna que também é mesmo nome do campo no formulário. |
| caminho | string | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](../../resources/Storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

#### _storage.database(tabela: string, coluna: string, caminho: string, nomeFicheiro: string) : _[Storage](../../resources/Storage)_
##### Descrição

Inicia um novo storage para um caminho específico onde ficam os ficheiros de uma coluna específica de uma tabela que representa um campo de um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que também é mesmo nome do formulário. |
| coluna | string | Nome da coluna que também é mesmo nome do campo no formulário. |
| caminho | string | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |
| nomeFicheiro | string | Possibilidade de adicionar o nome do ficheiro a parte caso haja uma estrutura de caminho muito complexa, muito pouco usual. |

##### Retorno

( _[Storage](../../resources/Storage)_ )

Novo storage iniciado para o caminho específico a partir de uma coluna em uma tabela de base de dados.

---

## ensurePath

---

#### _storage.ensurePath() : _[Storage](../../resources/Storage)_
##### Retorno

( _[Storage](../../resources/Storage)_ )


---

## extension

---

#### _storage.extension() : string
##### Descrição

Obtém a extensão do ficheiro.

##### Retorno

( string )

A extensão do ficheiro.

---

## file

---

#### _storage.file() : _[File](../../objects/File)_
##### Descrição

Objeto de manipulação de ficheiro do storage que está sendo utilizado.

##### Retorno

( _[File](../../objects/File)_ )

Permite interagir com o ficheiro fisicamente.

---

## filesystem

---

#### _storage.filesystem(pasta: string, caminho: string) : _[Storage](../../resources/Storage)_
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| pasta | string | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| caminho | string | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |

##### Retorno

( _[Storage](../../resources/Storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

#### _storage.filesystem(pasta: string, caminho: string, nomeFicheiro: string) : _[Storage](../../resources/Storage)_
##### Descrição

Inicia um novo storage para um caminho específico do filesystem dentro do storage.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| pasta | string | Nome da pasta dentro do `storage/filesystem`, normalmente será public, private ou server. |
| caminho | string | Caminho adicional relativo, normalmente é o nome do ficheiro mas pode ser um caminho mais complexo. |
| nomeFicheiro | string | Possibilidade de adicionar o nome do ficheiro a parte caso haja uma estrutura de caminho muito complexa. |

##### Retorno

( _[Storage](../../resources/Storage)_ )

Novo storage iniciado para o caminho específico a partir do filesystem do storage.

---

## folder

---

#### _storage.folder() : _[File](../../objects/File)_
##### Descrição

Objeto de manipulação de pasta do storage que está sendo utilizado.

##### Retorno

( _[File](../../objects/File)_ )

Permite interagir com a pasta fisicamente.

---

## fullPath

---

#### _storage.fullPath() : string
##### Descrição

Obtém o caminho completo do storage que está sendo utilizado.

##### Retorno

( string )

O caminho completo do storage.

---

## getBase

---

#### _storage.getBase() : string
##### Descrição

Obtém o caminho base do storage que está sendo utilizado.

##### Retorno

( string )

O caminho base do storage.

---

## input

---

#### _storage.input() : _[InputStream](../../objects/InputStream)_
##### Descrição

Obtém o objeto de entrada de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[InputStream](../../objects/InputStream)_ )

Objeto de entrada de dados do Netuno para o storage em uso.

---

## inputStream

---

#### _storage.inputStream() : _java.io.InputStream_
##### Descrição

Obtém o objeto de entrada de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.InputStream_ )

Objeto de entrada de dados do Java para o storage em uso.

---

## isDatabase

---

#### _storage.isDatabase() : _boolean_
##### Descrição

Se o storage está definido na pasta de base de dados.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de base de dados.

---

## isExtension

---

#### _storage.isExtension(charset: string) : _boolean_
##### Descrição

Verifica se o nome ficheiro contém a extensão.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| charset | string | Extensão no nome do ficheiro. |

##### Retorno

( _boolean_ )

Se o ficheiro contém a extensão definida.

---

## isFile

---

#### _storage.isFile() : _boolean_
##### Descrição

Verifica se é um ficheiro.

##### Retorno

( _boolean_ )

Se é um ficheiro.

---

## isFileSystem

---

#### _storage.isFileSystem() : _boolean_
##### Descrição

Se o storage está definido na pasta de filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de filesystem.

---

## isFileSystemPrivate

---

#### _storage.isFileSystemPrivate() : _boolean_
##### Descrição

Se o storage está definido na pasta privada do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta privada do filesystem.

---

## isFileSystemPublic

---

#### _storage.isFileSystemPublic() : _boolean_
##### Descrição

Se o storage está definido na pasta pública do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta pública do filesystem.

---

## isFileSystemServer

---

#### _storage.isFileSystemServer() : _boolean_
##### Descrição

Se o storage está definido na pasta de servidor do filesystem.

##### Retorno

( _boolean_ )

Se está utilizando a pasta de servidor do filesystem.

---

## isFolder

---

#### _storage.isFolder() : _boolean_
##### Descrição

Verifica se é uma pasta.

##### Retorno

( _boolean_ )

Se é uma pasta.

---

## newRandomFile

---

#### _storage.newRandomFile(charset: string) : _[Storage](../../resources/Storage)_
##### Descrição

Gera um novo storage a partir do storage atual mas para um ficheiro com um nome randómico e que ainda não exista e assim possa ser guardado sem conflitos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| charset | string | Extensão no nome do ficheiro. |

##### Retorno

( _[Storage](../../resources/Storage)_ )

Novo storage para um novo ficheiro com um nome randómico inexistente.

---

## output

---

#### _storage.output() : _[OutputStream](../../objects/OutputStream)_
##### Descrição

Obtém o objeto de saída de dados do Netuno para o storage que está sendo utilizado.

##### Retorno

( _[OutputStream](../../objects/OutputStream)_ )

Objeto de saída de dados do Netuno para o storage em uso.

---

## outputStream

---

#### _storage.outputStream() : _java.io.OutputStream_
##### Descrição

Obtém o objeto de saída de dados do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.OutputStream_ )

Objeto de saída de dados do Java para o storage em uso.

---

## path

---

#### _storage.path() : string
##### Descrição

Obtém o caminho do storage que está sendo utilizado.

##### Retorno

( string )

O caminho do storage.

---

## reader

---

#### _storage.reader() : _java.io.Reader_
##### Descrição

Obtém o objeto de entrada de dados como texto do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Reader_ )

Objeto de entrada de dados como texto do Java para o storage em uso.

---

## readerBOM

---

#### _storage.readerBOM() : _java.io.Reader_
##### Descrição

Obtém o objeto de entrada de dados como texto BOM (marca de ordem de byte) do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Reader_ )

Objeto de entrada de dados como texto (_BOM_) do Java para o storage em uso.

---

#### _storage.readerBOM(charset: string) : _java.io.Reader_
##### Descrição

Obtém o objeto de entrada de dados como texto BOM (marca de ordem de byte) do Java para o storage que está sendo utilizado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| charset | string | Código do tipo de codificação de caracteres como: |
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

#### _storage.saveFile(ficheiro: _[File](../../objects/File)_) : _void_
##### Descrição

Guarda o ficheiro no caminho do storage atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ficheiro | _[File](../../objects/File)_ | Ficheiro que será guardado no `storage` atual. |

##### Retorno

( _void_ )


---

## setBase

---

#### _storage.setBase(base: string) : _boolean_
##### Descrição

Define o caminho base do storage que será utilizado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| base | string | O caminho base do storage. |

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

( string )

A URL para o storage.

---

## writer

---

#### _storage.writer() : _java.io.Writer_
##### Descrição

Obtém o objeto de saída de dados como texto do Java para o storage que está sendo utilizado.

##### Retorno

( _java.io.Writer_ )

Objeto de saída de dados como texto do Java para o storage em uso.

---

