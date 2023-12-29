---
id: File
title: File
sidebar_label: File
---

O objeto File é utilizado para interagir com ficheiros e pastas.

---

## available

---

#### available() : _int_
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _int_ )


---

## baseName

---

#### baseName() : string
##### Retorno

( string )


---

## bufferedReader

---

#### bufferedReader() : _java.io.BufferedReader_
##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _int_) : _java.io.BufferedReader_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _int_, arg1: string) : _java.io.BufferedReader_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _int_, arg1: _java.nio.charset.Charset_) : _java.io.BufferedReader_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.nio.charset.Charset_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: string) : _java.io.BufferedReader_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _java.nio.charset.Charset_) : _java.io.BufferedReader_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.nio.charset.Charset_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

## bytes

---

#### bytes() : _[B_
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _[B_ )


---

## contentType

---

#### contentType() : string
##### Retorno

( string )


---

## copy

---

#### copy(caminhoDestino: string) : _boolean_
##### Descrição

Copia o ficheiro para o caminho indicado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoDestino | string | Caminho para onde copiar o ficheiro. |

##### Retorno

( _boolean_ )


---

#### copy(caminhoDestino: string, reescrever: _boolean_) : _boolean_
##### Descrição

Copia o ficheiro do caminho indicado com indicação de escrita por cima de um existente.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoDestino | string | Caminho para onde copiar o ficheiro. |
| reescrever | _boolean_ | Escreve por cima se já existir um ficheiro. |

##### Retorno

( _boolean_ )


---

## copyFiles

---

#### copyFiles(caminhoDestino: string, extensao: string) : _boolean_
##### Descrição

Copia os ficheiros indicados pela extensão inserida para o caminho indicado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoDestino | string | Caminho para onde copiar o ficheiro. |
| extensao | string | Extensão do ficheiro. |

##### Retorno

( _boolean_ )


---

## delete

---

#### delete() : _boolean_
##### Descrição

Apaga o ficheiro do caminho inserido.

##### Retorno

( _boolean_ )


---

## deleteAll

---

#### deleteAll() : _boolean_
##### Descrição

Apaga um determinado ficheiro/diretorio e recursivamente todos os subs.

##### Retorno

( _boolean_ )


---

#### deleteAll(arg0: string) : _boolean_
##### Descrição

Apaga um determinado ficheiro/diretorio pela extensão do ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## deleteFiles

---

#### deleteFiles() : _boolean_
##### Descrição

Apaga um determinado ficheiro/diretório e recursivamente todos os subs.

##### Retorno

( _boolean_ )


---

#### deleteFiles(extensao: string) : _boolean_
##### Descrição

Apaga ficheiros designados pela extensão inserida e recursivamente nas subpastas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| extensao | string | Extensão do ficheiro. |

##### Retorno

( _boolean_ )


---

## ensureJail

---

#### ensureJail(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## exists

---

#### exists() : _boolean_
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado existe.

##### Retorno

( _boolean_ )


---

## extension

---

#### extension() : string
##### Retorno

( string )


---

## fullPath

---

#### fullPath() : string
##### Descrição

Permite obter o caminho completo do ficheiro.

##### Retorno

( string )


---

## getBaseName

---

#### getBaseName() : string
##### Descrição

Retorna o nome base do presente ficheiro.

##### Retorno

( string )


---

## getBytes

---

#### getBytes() : _[B_
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _[B_ )


---

## getContentType

---

#### getContentType() : string
##### Retorno

( string )


---

## getExtension

---

#### getExtension() : string
##### Retorno

( string )


---

## getFullPath

---

#### getFullPath() : string
##### Descrição

Retorna o caminho completo até ao presente ficheiro.

##### Retorno

( string )


---

## getInputStream

---

#### getInputStream() : _java.io.InputStream_
##### Descrição

Retorna o número estimado de bytes.

##### Retorno

( _java.io.InputStream_ )


---

## getName

---

#### getName() : string
##### Descrição

Retorna o nome do ficheiro.

##### Retorno

( string )


---

#### getName(caminho: string) : string
##### Descrição

Retorna o nome do ficheiro do caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho para a pasta/diretorio. |

##### Retorno

( string )


---

## getOutputStream

---

#### getOutputStream() : _java.io.OutputStream_
##### Retorno

( _java.io.OutputStream_ )


---

## getPath

---

#### getPath() : string
##### Descrição

Retorna o caminho.

##### Retorno

( string )


---

## getPhysicalPath

---

#### getPhysicalPath() : string
##### Retorno

( string )


---

## getSequenceName

---

#### getSequenceName(caminhoDestino: _java.io.File_, nomeFicheiro: string) : string
##### Descrição

Retorna o nome do ficheiro inserido com um número de sequência se o ficheiro já existir com o nome original.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoDestino | _java.io.File_ | Caminho onde guardar o ficheiro. |
| nomeFicheiro | string | Nome do Ficheiro. |

##### Retorno

( string )


---

#### getSequenceName(caminhoDestino: string, nomeFicheiro: string) : string
##### Descrição

Retorna o nome do ficheiro inserido com um número de sequência se o ficheiro já existir com o nome original.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoDestino | string | Caminho onde guardar o ficheiro. |
| nomeFicheiro | string | Nome do Ficheiro. |

##### Retorno

( string )


---

## input

---

#### input() : _[InputStream](../../objects/InputStream)_
##### Retorno

( _[InputStream](../../objects/InputStream)_ )


---

## inputStream

---

#### inputStream() : _java.io.InputStream_
##### Retorno

( _java.io.InputStream_ )


---

## isBaseName

---

#### isBaseName(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## isDirectory

---

#### isDirectory() : _boolean_
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado é uma pasta.

##### Retorno

( _boolean_ )


---

## isExtension

---

#### isExtension(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## isFile

---

#### isFile() : _boolean_
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado é um ficheiro.

##### Retorno

( _boolean_ )


---

## isJail

---

#### isJail() : _boolean_
##### Descrição

Efetua uma verificação se o ficheiro tem a sua localização limitada a um outro diretório .

##### Retorno

( _boolean_ )


---

## lastModified

---

#### lastModified() : _long_
##### Descrição

Retorna a hora que o ficheiro do caminho indicado foi modificado pela ultima vez.

##### Retorno

( _long_ )


---

## list

---

#### list() : _java.util.List_
##### Descrição

Retorna uma lista de todos os ficheiros e pastas presentes no caminho inserido.

##### Retorno

( _java.util.List_ )


---

## mkdir

---

#### mkdir() : _boolean_
##### Descrição

Cria uma pasta no caminho atual.

##### Retorno

( _boolean_ )


---

## mkdirs

---

#### mkdirs() : _boolean_
##### Retorno

( _boolean_ )


---

## name

---

#### name() : string
##### Descrição

Retorna o nome do ficheiro.

##### Retorno

( string )


---

## output

---

#### output() : _[OutputStream](../../objects/OutputStream)_
##### Retorno

( _[OutputStream](../../objects/OutputStream)_ )


---

## outputStream

---

#### outputStream() : _java.io.OutputStream_
##### Retorno

( _java.io.OutputStream_ )


---

## path

---

#### path() : string
##### Descrição

Retorna o caminho do ficheiro/pasta.

##### Retorno

( string )

Retorna uma verificação boolean da existência do ficheiro e localiza a pasta onde se encontra.

---

## physicalPath

---

#### physicalPath() : string
##### Descrição

Permite obter o caminho do ficheiro.

##### Retorno

( string )


---

## reader

---

#### reader() : _java.io.Reader_
##### Retorno

( _java.io.Reader_ )


---

## readerBOM

---

#### readerBOM() : _java.io.Reader_
##### Retorno

( _java.io.Reader_ )


---

#### readerBOM(arg0: string) : _java.io.Reader_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.io.Reader_ )


---

## rename

---

#### rename(novoNome: string) : _boolean_
##### Descrição

Renomeia um ficheiro com o novo nome inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| novoNome | string | Novo nome para renomear o ficheiro. |

##### Retorno

( _boolean_ )


---

## renameTo

---

#### renameTo(caminhoDestino: string) : _boolean_
##### Descrição

Renomeia o ficheiro do caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoDestino | string | Caminho para o ficheiro. |

##### Retorno

( _boolean_ )


---

## save

---

#### save(caminho: _java.lang.Object_) : _void_
##### Descrição

Guarda o ficheiro no determinado caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | _java.lang.Object_ | Caminho do ficheiro. |

##### Retorno

( _void_ )


---

#### save(caminho: string) : _void_
##### Descrição

Guarda o ficheiro no caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho onde guarda o ficheiro. |

##### Retorno

( _void_ )


---

## sequenceName

---

#### sequenceName(arg0: _java.io.File_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.File_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### sequenceName(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## writer

---

#### writer() : _java.io.Writer_
##### Retorno

( _java.io.Writer_ )


---

