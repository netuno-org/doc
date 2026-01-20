---
id: File
title: File
sidebar_label: File
---

O objeto File é utilizado para interagir com ficheiros e pastas.

---

## available

---

#### available() : long
##### Descrição

Retorna o número de bytes para a leitura do arquivo.

##### Retorno

( _long_ )


---

## baseName

---

#### baseName() : string
##### Retorno

( _string_ )


---

## bufferedReader

---

#### bufferedReader() : java.io.BufferedReader
##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(bufferSize: int) : java.io.BufferedReader
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bufferSize** | _int_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(bufferSize: int, charset: string) : java.io.BufferedReader
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _string_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(bufferSize: int, charset: java.nio.charset.Charset) : java.io.BufferedReader
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _java.nio.charset.Charset_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(charset: string) : java.io.BufferedReader
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _string_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(charset: java.nio.charset.Charset) : java.io.BufferedReader
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

## bytes

---

#### bytes() : byte[]
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _byte[]_ )


---

## contentType

---

#### contentType() : string
##### Retorno

( _string_ )


---

#### contentType(contentType: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contentType** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## copy

---

#### copy(caminhoDestino: string) : boolean
##### Descrição

Copia o ficheiro para o caminho indicado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoDestino** | _string_ | Caminho para onde copiar o ficheiro. |

##### Retorno

( _boolean_ )


---

#### copy(caminhoDestino: string, reescrever: boolean) : boolean
##### Descrição

Copia o ficheiro do caminho indicado com indicação de escrita por cima de um existente.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoDestino** | _string_ | Caminho para onde copiar o ficheiro. |
| **reescrever** | _boolean_ | Escreve por cima se já existir um ficheiro. |

##### Retorno

( _boolean_ )


---

## copyFiles

---

#### copyFiles(caminhoDestino: string, extensao: string) : boolean
##### Descrição

Copia os ficheiros indicados pela extensão inserida para o caminho indicado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoDestino** | _string_ | Caminho para onde copiar o ficheiro. |
| **extensao** | _string_ | Extensão do ficheiro. |

##### Retorno

( _boolean_ )


---

## delete

---

#### delete() : boolean
##### Descrição

Apaga o ficheiro do caminho inserido.

##### Retorno

( _boolean_ )


---

## deleteAll

---

#### deleteAll() : boolean
##### Descrição

Apaga um determinado ficheiro/diretorio e recursivamente todos os subs.

##### Retorno

( _boolean_ )


---

#### deleteAll(extension: string) : boolean
##### Descrição

Apaga um determinado ficheiro/diretorio pela extensão do ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **extension** | _string_ |   |

##### Retorno

( _boolean_ )


---

## deleteFiles

---

#### deleteFiles() : boolean
##### Descrição

Apaga um determinado ficheiro/diretório e recursivamente todos os subs.

##### Retorno

( _boolean_ )


---

#### deleteFiles(extensao: string) : boolean
##### Descrição

Apaga ficheiros designados pela extensão inserida e recursivamente nas subpastas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **extensao** | _string_ | Extensão do ficheiro. |

##### Retorno

( _boolean_ )


---

## ensureJail

---

#### ensureJail(jailPath: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jailPath** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## exists

---

#### exists() : boolean
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado existe.

##### Retorno

( _boolean_ )


---

## extension

---

#### extension() : string
##### Retorno

( _string_ )


---

## fullPath

---

#### fullPath() : string
##### Descrição

Permite obter o caminho completo do ficheiro.

##### Retorno

( _string_ )


---

## getBaseName

---

#### getBaseName() : string
##### Descrição

Retorna o nome base do presente ficheiro.

##### Retorno

( _string_ )


---

## getBytes

---

#### getBytes() : byte[]
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _byte[]_ )


---

## getContentType

---

#### getContentType() : string
##### Retorno

( _string_ )


---

## getExtension

---

#### getExtension() : string
##### Retorno

( _string_ )


---

## getFullPath

---

#### getFullPath() : string
##### Descrição

Retorna o caminho completo até ao presente ficheiro.

##### Retorno

( _string_ )


---

## getInput

---

#### getInput() : [InputStream](/docs/library/objects/InputStream)
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getInputStream

---

#### getInputStream() : [InputStream](/docs/library/objects/InputStream)
##### Descrição

Retorna o número estimado de bytes.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getName

---

#### getName() : string
##### Descrição

Retorna o nome do ficheiro.

##### Retorno

( _string_ )


---

#### getName(caminho: string) : string
##### Descrição

Retorna o nome do ficheiro do caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho para a pasta/diretorio. |

##### Retorno

( _string_ )


---

## getOutput

---

#### getOutput() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getOutputStream

---

#### getOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getPath

---

#### getPath() : string
##### Descrição

Retorna o caminho.

##### Retorno

( _string_ )


---

## getPhysicalPath

---

#### getPhysicalPath() : string
##### Retorno

( _string_ )


---

## getSequenceName

---

#### getSequenceName(caminhoDestino: java.io.File, nomeFicheiro: string) : string
##### Descrição

Retorna o nome do ficheiro inserido com um número de sequência se o ficheiro já existir com o nome original.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoDestino** | _java.io.File_ | Caminho onde guardar o ficheiro. |
| **nomeFicheiro** | _string_ | Nome do Ficheiro. |

##### Retorno

( _string_ )


---

#### getSequenceName(caminhoDestino: string, nomeFicheiro: string) : string
##### Descrição

Retorna o nome do ficheiro inserido com um número de sequência se o ficheiro já existir com o nome original.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoDestino** | _string_ | Caminho onde guardar o ficheiro. |
| **nomeFicheiro** | _string_ | Nome do Ficheiro. |

##### Retorno

( _string_ )


---

## inMemoryFile

---

#### inMemoryFile() : boolean
##### Retorno

( _boolean_ )


---

## input

---

#### input() : [InputStream](/docs/library/objects/InputStream)
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## inputStream

---

#### inputStream() : [InputStream](/docs/library/objects/InputStream)
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## isBaseName

---

#### isBaseName(baseName: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **baseName** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isDirectory

---

#### isDirectory() : boolean
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado é uma pasta.

##### Retorno

( _boolean_ )


---

## isExtension

---

#### isExtension(extension: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **extension** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isFile

---

#### isFile() : boolean
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado é um ficheiro.

##### Retorno

( _boolean_ )


---

## isInMemoryFile

---

#### isInMemoryFile() : boolean
##### Retorno

( _boolean_ )


---

## isJail

---

#### isJail() : boolean
##### Descrição

Efetua uma verificação se o ficheiro tem a sua localização limitada a um outro diretório .

##### Retorno

( _boolean_ )


---

## lastModified

---

#### lastModified() : long
##### Descrição

Retorna a hora que o ficheiro do caminho indicado foi modificado pela ultima vez.

##### Retorno

( _long_ )


---

## list

---

#### list() : java.util.List
##### Descrição

Retorna uma lista de todos os ficheiros e pastas presentes no caminho inserido.

##### Retorno

( _java.util.List_ )


---

## mkdir

---

#### mkdir() : boolean
##### Descrição

Cria uma pasta no caminho atual.

##### Retorno

( _boolean_ )


---

## mkdirs

---

#### mkdirs() : boolean
##### Retorno

( _boolean_ )


---

## name

---

#### name() : string
##### Descrição

Retorna o nome do ficheiro.

##### Retorno

( _string_ )


---

## output

---

#### output() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## outputStream

---

#### outputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## path

---

#### path() : string
##### Descrição

Retorna o caminho do ficheiro/pasta.

##### Retorno

( _string_ )

Retorna uma verificação boolean da existência do ficheiro e localiza a pasta onde se encontra.

---

## physicalPath

---

#### physicalPath() : string
##### Descrição

Permite obter o caminho do ficheiro.

##### Retorno

( _string_ )


---

## reader

---

#### reader() : java.io.Reader
##### Retorno

( _java.io.Reader_ )


---

## readerBOM

---

#### readerBOM() : java.io.Reader
##### Retorno

( _java.io.Reader_ )


---

#### readerBOM(charsetName: string) : java.io.Reader
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charsetName** | _string_ |   |

##### Retorno

( _java.io.Reader_ )


---

## rename

---

#### rename(novoNome: string) : boolean
##### Descrição

Renomeia um ficheiro com o novo nome inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **novoNome** | _string_ | Novo nome para renomear o ficheiro. |

##### Retorno

( _boolean_ )


---

## renameTo

---

#### renameTo(caminhoDestino: string) : boolean
##### Descrição

Renomeia o ficheiro do caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoDestino** | _string_ | Caminho para o ficheiro. |

##### Retorno

( _boolean_ )


---

## save

---

#### save(caminho: java.lang.Object) : void
##### Descrição

Guarda o ficheiro no determinado caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _java.lang.Object_ | Caminho do ficheiro. |

##### Retorno

( _void_ )


---

#### save(caminho: string) : void
##### Descrição

Guarda o ficheiro no caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho onde guarda o ficheiro. |

##### Retorno

( _void_ )


---

## sequenceName

---

#### sequenceName(targetPath: java.io.File, fileName: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **targetPath** | _java.io.File_ |   |
| **fileName** | _string_ |   |

##### Retorno

( _string_ )


---

#### sequenceName(targetPath: string, fileName: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **targetPath** | _string_ |   |
| **fileName** | _string_ |   |

##### Retorno

( _string_ )


---

## setContentType

---

#### setContentType(contentType: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contentType** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## size

---

#### size() : long
##### Retorno

( _long_ )


---

## sizeGB

---

#### sizeGB() : double
##### Retorno

( _double_ )


---

## sizeKB

---

#### sizeKB() : double
##### Retorno

( _double_ )


---

## sizeMB

---

#### sizeMB() : double
##### Retorno

( _double_ )


---

## writer

---

#### writer() : java.io.Writer
##### Retorno

( _java.io.Writer_ )


---

