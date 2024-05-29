---
id: FTPFile
title: FTPFile
sidebar_label: FTPFile
---

Os dados referente a um ficheiro FTP.

---

## getGroup

---

#### <span style="color: #008000">getGroup</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome do grupo proprietário do arquivo.

##### Retorno

( _string_ )

O nome do grupo que possui o arquivo.

---

## getHardLinkCount

---

#### <span style="color: #008000">getHardLinkCount</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Retorna o número de links físicos para este arquivo.

##### Retorno

( _int_ )

O número de links físicos para este arquivo.

---

## getLink

---

#### <span style="color: #008000">getLink</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Se o FTPFile for um link simbólico, este método retornará o nome do arquivo apontado pelo link simbólico. Caso contrário, retorna nulo.

##### Retorno

( _string_ )

O arquivo apontado pelo link simbólico (nulo se FTPFile não for um link simbólico).

---

## getName

---

#### <span style="color: #008000">getName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome do arquivo.

##### Retorno

( _string_ )

O nome do arquivo.

---

## getRawListing

---

#### <span style="color: #008000">getRawListing</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna a listagem bruta do servidor FTP original usada para inicializar o FTPFile.

##### Retorno

( _string_ )

A listagem bruta do servidor FTP original usada para inicializar o FTPFile.

---

## getSize

---

#### <span style="color: #008000">getSize</span>() : <span style="font-weight: normal; font-style: italic;">long</span>
##### Descrição

Retorna o tamanho do arquivo em bytes.

##### Retorno

( _long_ )

O tamanho do arquivo em bytes.

---

## getTimestamp

---

#### <span style="color: #008000">getTimestamp</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>
##### Descrição

Retorna o momento de data/hora do arquivo. Geralmente é o horário da última modificação.

##### Retorno

( _java.util.Calendar_ )

Uma instância de Calendar que representa o momento de data/hora do arquivo.

---

## getTimestampInstant

---

#### <span style="color: #008000">getTimestampInstant</span>() : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Descrição

Retorna o momento de data/hora do arquivo. Geralmente é o horário da última modificação.

##### Retorno

( _java.time.Instant_ )

Uma instância de Calendar que representa o momento de data/hora do arquivo.

---

## getUser

---

#### <span style="color: #008000">getUser</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome do utilizador proprietário do arquivo. Às vezes, será uma representação em string do número do utilizador.

##### Retorno

( _string_ )

O nome do utilizador proprietário do arquivo.

---

## isDirectory

---

#### <span style="color: #008000">isDirectory</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se é um diretório.

##### Retorno

( _boolean_ )

Se é um diretório ou não.

---

## isFile

---

#### <span style="color: #008000">isFile</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se é um arquivo.

##### Retorno

( _boolean_ )

Se é um arquivo ou não.

---

## isGroupExecutable

---

#### <span style="color: #008000">isGroupExecutable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se um grupo tem permissão de execução de arquivo ou permissão de listagem de diretório.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isGroupReadable

---

#### <span style="color: #008000">isGroupReadable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se um grupo tem permissão de leitura.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isGroupWritable

---

#### <span style="color: #008000">isGroupWritable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se um grupo tem permissão de escrita.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isSymbolicLink

---

#### <span style="color: #008000">isSymbolicLink</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se é um link símbolico.

##### Retorno

( _boolean_ )

Se é um link símbolico ou não.

---

## isUnknown

---

#### <span style="color: #008000">isUnknown</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se é um tipo desconhecido.

##### Retorno

( _boolean_ )

Se é um tipo desconhecido ou não.

---

## isUserExecutable

---

#### <span style="color: #008000">isUserExecutable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o utilizador tem permissão de execução de arquivo ou permissão de listagem de diretório.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isUserReadable

---

#### <span style="color: #008000">isUserReadable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o utilizador tem permissão de leitura.

##### Retorno

( _boolean_ )

Se tem ou não permissão de leitura.

---

## isUserWritable

---

#### <span style="color: #008000">isUserWritable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o utilizador tem permissão de escrita.

##### Retorno

( _boolean_ )

Se tem ou não permissão de escrita.

---

## isValid

---

#### <span style="color: #008000">isValid</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se é uma entrada válida.

##### Retorno

( _boolean_ )

Se é uma entrada válida ou não.

---

## isWorldExecutable

---

#### <span style="color: #008000">isWorldExecutable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se tem permissão global de execução de arquivo ou permissão de listagem de diretório.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isWorldReadable

---

#### <span style="color: #008000">isWorldReadable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se tem permissão global de leitura.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isWorldWritable

---

#### <span style="color: #008000">isWorldWritable</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se tem permissão global de escrita.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## setGroup

---

#### <span style="color: #008000">setGroup</span>(<span style="color: #FF8000">grupo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define o nome do grupo proprietário do arquivo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **grupo** | _string_ | O nome do grupo proprietário do arquivo. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setGroupExecutable

---

#### <span style="color: #008000">setGroupExecutable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão de execução de arquivo ou permissão de listagem de diretório para um grupo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setGroupReadable

---

#### <span style="color: #008000">setGroupReadable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão de leitura para um grupo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setGroupWritable

---

#### <span style="color: #008000">setGroupWritable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão de escrita para um grupo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setHardLinkCount

---

#### <span style="color: #008000">setHardLinkCount</span>(<span style="color: #FF8000">links</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define o número de links físicos para este arquivo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **links** | _int_ | O número de links físicos para este arquivo. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setLink

---

#### <span style="color: #008000">setLink</span>(<span style="color: #FF8000">link</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Se FTPFile for um link simbólico, use este método para definir o nome do arquivo apontado pelo link simbólico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **link** | _string_ | O arquivo apontado pelo link simbólico. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setName

---

#### <span style="color: #008000">setName</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define o nome do arquivo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do arquivo. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setRawListing

---

#### <span style="color: #008000">setRawListing</span>(<span style="color: #FF8000">rawListing</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define a listagem bruta do servidor FTP original a partir da qual o FTPFile foi criado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **rawListing** | _string_ | A listagem bruta do servidor FTP. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setSize

---

#### <span style="color: #008000">setSize</span>(<span style="color: #FF8000">tamanho</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define o tamanho do arquivo em bytes.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tamanho** | _long_ | O tamanho do arquivo em bytes. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setTimestamp

---

#### <span style="color: #008000">setTimestamp</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define o momento de data/hora do arquivo. Geralmente é o horário da última modificação. O parâmetro não é clonado, portanto não altere seu valor após chamar este método.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.Calendar_ | Uma instância do Calendar que representa o momento de data/hora do arquivo. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUser

---

#### <span style="color: #008000">setUser</span>(<span style="color: #FF8000">utilizador</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define o nome do utilizador proprietário do arquivo. Pode ser uma representação em string do número do utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizador** | _string_ | O nome do utilizador proprietário do arquivo. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUserExecutable

---

#### <span style="color: #008000">setUserExecutable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão de execução de arquivo ou permissão de listagem de diretório para um utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUserReadable

---

#### <span style="color: #008000">setUserReadable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão de leitura para um utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão de leitura. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUserWritable

---

#### <span style="color: #008000">setUserWritable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão de escrita para um utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão de escrita. |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setWorldExecutable

---

#### <span style="color: #008000">setWorldExecutable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão global de execução de arquivo ou permissão de listagem de diretório.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setWorldReadable

---

#### <span style="color: #008000">setWorldReadable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão global de leitura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setWorldWritable

---

#### <span style="color: #008000">setWorldWritable</span>(<span style="color: #FF8000">acesso</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Define permissão global de escrita.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toDirectory

---

#### <span style="color: #008000">toDirectory</span>() : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Indica que o objeto é um diretório.

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toFile

---

#### <span style="color: #008000">toFile</span>() : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Indica que o objeto é um arquivo.

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toFormattedString

---

#### <span style="color: #008000">toFormattedString</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna uma representação em string das informações do FTPFile.

##### Retorno

( _string_ )

Representação em string das informações do FTPFile.

---

#### <span style="color: #008000">toFormattedString</span>(<span style="color: #FF8000">fuso</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna uma representação de string das informações do FTPFile.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fuso** | _string_ | Fuso horário a ser usado para exibir o momento de data e hora. |

##### Retorno

( _string_ )

Representação de string das informações do FTPFile.

---

## toSymbolicLink

---

#### <span style="color: #008000">toSymbolicLink</span>() : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Indica que o objeto é um link simbólico.

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toUnknown

---

#### <span style="color: #008000">toUnknown</span>() : <span style="font-weight: normal; font-style: italic;">[FTPFile](../../objects/FTPFile)</span>
##### Descrição

Indica que o objeto é um tipo desconhecido.

##### Retorno

( _[FTPFile](../../objects/FTPFile)_ )

Objeto FTPFile atual.

---

