---
id: File
title: File
sidebar_label: File
---

O objeto File é utilizado para interagir com ficheiros e pastas.

---

## available

---

#### <span style={{color: '#008000'}}>available</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _int_ )


---

## baseName

---

#### <span style={{color: '#008000'}}>baseName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## bufferedReader

---

#### <span style={{color: '#008000'}}>bufferedReader</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.BufferedReader</span>
##### Retorno

( _java.io.BufferedReader_ )


---

#### <span style={{color: '#008000'}}>bufferedReader</span>(<span style={{color: '#FF8000'}}>bufferSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.BufferedReader</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bufferSize** | _int_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### <span style={{color: '#008000'}}>bufferedReader</span>(<span style={{color: '#FF8000'}}>bufferSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.BufferedReader</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _string_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### <span style={{color: '#008000'}}>bufferedReader</span>(<span style={{color: '#FF8000'}}>bufferSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.charset.Charset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.BufferedReader</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _java.nio.charset.Charset_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### <span style={{color: '#008000'}}>bufferedReader</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.BufferedReader</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _string_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

#### <span style={{color: '#008000'}}>bufferedReader</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.charset.Charset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.BufferedReader</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Retorno

( _java.io.BufferedReader_ )


---

## bytes

---

#### <span style={{color: '#008000'}}>bytes</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _byte[]_ )


---

## contentType

---

#### <span style={{color: '#008000'}}>contentType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{color: '#008000'}}>contentType</span>(<span style={{color: '#FF8000'}}>contentType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contentType** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## copy

---

#### <span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>caminhoDestino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Copia o ficheiro para o caminho indicado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoDestino** | _string_ | Caminho para onde copiar o ficheiro. |

##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>caminhoDestino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>reescrever</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{color: '#008000'}}>copyFiles</span>(<span style={{color: '#FF8000'}}>caminhoDestino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>extensao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{color: '#008000'}}>delete</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Apaga o ficheiro do caminho inserido.

##### Retorno

( _boolean_ )


---

## deleteAll

---

#### <span style={{color: '#008000'}}>deleteAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Apaga um determinado ficheiro/diretorio e recursivamente todos os subs.

##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>deleteAll</span>(<span style={{color: '#FF8000'}}>extension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{color: '#008000'}}>deleteFiles</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Apaga um determinado ficheiro/diretório e recursivamente todos os subs.

##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>deleteFiles</span>(<span style={{color: '#FF8000'}}>extensao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{color: '#008000'}}>ensureJail</span>(<span style={{color: '#FF8000'}}>jailPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jailPath** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## exists

---

#### <span style={{color: '#008000'}}>exists</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado existe.

##### Retorno

( _boolean_ )


---

## extension

---

#### <span style={{color: '#008000'}}>extension</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## fullPath

---

#### <span style={{color: '#008000'}}>fullPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Permite obter o caminho completo do ficheiro.

##### Retorno

( _string_ )


---

## getBaseName

---

#### <span style={{color: '#008000'}}>getBaseName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome base do presente ficheiro.

##### Retorno

( _string_ )


---

## getBytes

---

#### <span style={{color: '#008000'}}>getBytes</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Descrição

Retorna o número estimado de bytes restantes para a leitura dum ficheiro.

##### Retorno

( _byte[]_ )


---

## getContentType

---

#### <span style={{color: '#008000'}}>getContentType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getExtension

---

#### <span style={{color: '#008000'}}>getExtension</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getFullPath

---

#### <span style={{color: '#008000'}}>getFullPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o caminho completo até ao presente ficheiro.

##### Retorno

( _string_ )


---

## getInput

---

#### <span style={{color: '#008000'}}>getInput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getInputStream

---

#### <span style={{color: '#008000'}}>getInputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Descrição

Retorna o número estimado de bytes.

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getName

---

#### <span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome do ficheiro.

##### Retorno

( _string_ )


---

#### <span style={{color: '#008000'}}>getName</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{color: '#008000'}}>getOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getOutputStream

---

#### <span style={{color: '#008000'}}>getOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getPath

---

#### <span style={{color: '#008000'}}>getPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o caminho.

##### Retorno

( _string_ )


---

## getPhysicalPath

---

#### <span style={{color: '#008000'}}>getPhysicalPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getSequenceName

---

#### <span style={{color: '#008000'}}>getSequenceName</span>(<span style={{color: '#FF8000'}}>caminhoDestino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>, <span style={{color: '#FF8000'}}>nomeFicheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{color: '#008000'}}>getSequenceName</span>(<span style={{color: '#FF8000'}}>caminhoDestino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nomeFicheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

## input

---

#### <span style={{color: '#008000'}}>input</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## inputStream

---

#### <span style={{color: '#008000'}}>inputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## isBaseName

---

#### <span style={{color: '#008000'}}>isBaseName</span>(<span style={{color: '#FF8000'}}>baseName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **baseName** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isDirectory

---

#### <span style={{color: '#008000'}}>isDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado é uma pasta.

##### Retorno

( _boolean_ )


---

## isExtension

---

#### <span style={{color: '#008000'}}>isExtension</span>(<span style={{color: '#FF8000'}}>extension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **extension** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isFile

---

#### <span style={{color: '#008000'}}>isFile</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna um resultado booleano que verifica se o caminho indicado é um ficheiro.

##### Retorno

( _boolean_ )


---

## isJail

---

#### <span style={{color: '#008000'}}>isJail</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Efetua uma verificação se o ficheiro tem a sua localização limitada a um outro diretório .

##### Retorno

( _boolean_ )


---

## lastModified

---

#### <span style={{color: '#008000'}}>lastModified</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Retorna a hora que o ficheiro do caminho indicado foi modificado pela ultima vez.

##### Retorno

( _long_ )


---

## list

---

#### <span style={{color: '#008000'}}>list</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Retorna uma lista de todos os ficheiros e pastas presentes no caminho inserido.

##### Retorno

( _java.util.List_ )


---

## mkdir

---

#### <span style={{color: '#008000'}}>mkdir</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Cria uma pasta no caminho atual.

##### Retorno

( _boolean_ )


---

## mkdirs

---

#### <span style={{color: '#008000'}}>mkdirs</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## name

---

#### <span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome do ficheiro.

##### Retorno

( _string_ )


---

## output

---

#### <span style={{color: '#008000'}}>output</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## outputStream

---

#### <span style={{color: '#008000'}}>outputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## path

---

#### <span style={{color: '#008000'}}>path</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o caminho do ficheiro/pasta.

##### Retorno

( _string_ )

Retorna uma verificação boolean da existência do ficheiro e localiza a pasta onde se encontra.

---

## physicalPath

---

#### <span style={{color: '#008000'}}>physicalPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Permite obter o caminho do ficheiro.

##### Retorno

( _string_ )


---

## reader

---

#### <span style={{color: '#008000'}}>reader</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Retorno

( _java.io.Reader_ )


---

## readerBOM

---

#### <span style={{color: '#008000'}}>readerBOM</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Retorno

( _java.io.Reader_ )


---

#### <span style={{color: '#008000'}}>readerBOM</span>(<span style={{color: '#FF8000'}}>charsetName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charsetName** | _string_ |   |

##### Retorno

( _java.io.Reader_ )


---

## rename

---

#### <span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>novoNome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{color: '#008000'}}>renameTo</span>(<span style={{color: '#FF8000'}}>caminhoDestino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Guarda o ficheiro no determinado caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _java.lang.Object_ | Caminho do ficheiro. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{color: '#008000'}}>sequenceName</span>(<span style={{color: '#FF8000'}}>targetPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>, <span style={{color: '#FF8000'}}>fileName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **targetPath** | _java.io.File_ |   |
| **fileName** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{color: '#008000'}}>sequenceName</span>(<span style={{color: '#FF8000'}}>targetPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{color: '#008000'}}>setContentType</span>(<span style={{color: '#FF8000'}}>contentType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contentType** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## writer

---

#### <span style={{color: '#008000'}}>writer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>
##### Retorno

( _java.io.Writer_ )


---

