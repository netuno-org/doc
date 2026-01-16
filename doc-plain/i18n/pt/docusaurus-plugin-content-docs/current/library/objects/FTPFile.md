---
id: FTPFile
title: FTPFile
sidebar_label: FTPFile
---

Os dados referente a um ficheiro FTP.

---

## getGroup

---

#### getGroup() : string
##### Descrição

Retorna o nome do grupo proprietário do arquivo.

##### Retorno

( _string_ )

O nome do grupo que possui o arquivo.

---

## getHardLinkCount

---

#### getHardLinkCount() : int
##### Descrição

Retorna o número de links físicos para este arquivo.

##### Retorno

( _int_ )

O número de links físicos para este arquivo.

---

## getLink

---

#### getLink() : string
##### Descrição

Se o FTPFile for um link simbólico, este método retornará o nome do arquivo apontado pelo link simbólico. Caso contrário, retorna nulo.

##### Retorno

( _string_ )

O arquivo apontado pelo link simbólico (nulo se FTPFile não for um link simbólico).

---

## getName

---

#### getName() : string
##### Descrição

Retorna o nome do arquivo.

##### Retorno

( _string_ )

O nome do arquivo.

---

## getRawListing

---

#### getRawListing() : string
##### Descrição

Retorna a listagem bruta do servidor FTP original usada para inicializar o FTPFile.

##### Retorno

( _string_ )

A listagem bruta do servidor FTP original usada para inicializar o FTPFile.

---

## getSize

---

#### getSize() : long
##### Descrição

Retorna o tamanho do arquivo em bytes.

##### Retorno

( _long_ )

O tamanho do arquivo em bytes.

---

## getTimestamp

---

#### getTimestamp() : java.util.Calendar
##### Descrição

Retorna o momento de data/hora do arquivo. Geralmente é o horário da última modificação.

##### Retorno

( _java.util.Calendar_ )

Uma instância de Calendar que representa o momento de data/hora do arquivo.

---

## getTimestampInstant

---

#### getTimestampInstant() : java.time.Instant
##### Descrição

Retorna o momento de data/hora do arquivo. Geralmente é o horário da última modificação.

##### Retorno

( _java.time.Instant_ )

Uma instância de Calendar que representa o momento de data/hora do arquivo.

---

## getUser

---

#### getUser() : string
##### Descrição

Retorna o nome do utilizador proprietário do arquivo. Às vezes, será uma representação em string do número do utilizador.

##### Retorno

( _string_ )

O nome do utilizador proprietário do arquivo.

---

## isDirectory

---

#### isDirectory() : boolean
##### Descrição

Retorna se é um diretório.

##### Retorno

( _boolean_ )

Se é um diretório ou não.

---

## isFile

---

#### isFile() : boolean
##### Descrição

Retorna se é um arquivo.

##### Retorno

( _boolean_ )

Se é um arquivo ou não.

---

## isGroupExecutable

---

#### isGroupExecutable() : boolean
##### Descrição

Retorna se um grupo tem permissão de execução de arquivo ou permissão de listagem de diretório.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isGroupReadable

---

#### isGroupReadable() : boolean
##### Descrição

Retorna se um grupo tem permissão de leitura.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isGroupWritable

---

#### isGroupWritable() : boolean
##### Descrição

Retorna se um grupo tem permissão de escrita.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isSymbolicLink

---

#### isSymbolicLink() : boolean
##### Descrição

Retorna se é um link símbolico.

##### Retorno

( _boolean_ )

Se é um link símbolico ou não.

---

## isUnknown

---

#### isUnknown() : boolean
##### Descrição

Retorna se é um tipo desconhecido.

##### Retorno

( _boolean_ )

Se é um tipo desconhecido ou não.

---

## isUserExecutable

---

#### isUserExecutable() : boolean
##### Descrição

Retorna se o utilizador tem permissão de execução de arquivo ou permissão de listagem de diretório.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isUserReadable

---

#### isUserReadable() : boolean
##### Descrição

Retorna se o utilizador tem permissão de leitura.

##### Retorno

( _boolean_ )

Se tem ou não permissão de leitura.

---

## isUserWritable

---

#### isUserWritable() : boolean
##### Descrição

Retorna se o utilizador tem permissão de escrita.

##### Retorno

( _boolean_ )

Se tem ou não permissão de escrita.

---

## isValid

---

#### isValid() : boolean
##### Descrição

Retorna se é uma entrada válida.

##### Retorno

( _boolean_ )

Se é uma entrada válida ou não.

---

## isWorldExecutable

---

#### isWorldExecutable() : boolean
##### Descrição

Retorna se tem permissão global de execução de arquivo ou permissão de listagem de diretório.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isWorldReadable

---

#### isWorldReadable() : boolean
##### Descrição

Retorna se tem permissão global de leitura.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## isWorldWritable

---

#### isWorldWritable() : boolean
##### Descrição

Retorna se tem permissão global de escrita.

##### Retorno

( _boolean_ )

Se tem ou não permissão.

---

## setGroup

---

#### setGroup(grupo: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define o nome do grupo proprietário do arquivo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **grupo** | _string_ | O nome do grupo proprietário do arquivo. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setGroupExecutable

---

#### setGroupExecutable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão de execução de arquivo ou permissão de listagem de diretório para um grupo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setGroupReadable

---

#### setGroupReadable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão de leitura para um grupo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setGroupWritable

---

#### setGroupWritable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão de escrita para um grupo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setHardLinkCount

---

#### setHardLinkCount(links: int) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define o número de links físicos para este arquivo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **links** | _int_ | O número de links físicos para este arquivo. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setLink

---

#### setLink(link: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Se FTPFile for um link simbólico, use este método para definir o nome do arquivo apontado pelo link simbólico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **link** | _string_ | O arquivo apontado pelo link simbólico. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setName

---

#### setName(nome: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define o nome do arquivo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do arquivo. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setRawListing

---

#### setRawListing(rawListing: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define a listagem bruta do servidor FTP original a partir da qual o FTPFile foi criado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **rawListing** | _string_ | A listagem bruta do servidor FTP. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setSize

---

#### setSize(tamanho: long) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define o tamanho do arquivo em bytes.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tamanho** | _long_ | O tamanho do arquivo em bytes. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setTimestamp

---

#### setTimestamp(data: java.util.Calendar) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define o momento de data/hora do arquivo. Geralmente é o horário da última modificação. O parâmetro não é clonado, portanto não altere seu valor após chamar este método.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.Calendar_ | Uma instância do Calendar que representa o momento de data/hora do arquivo. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUser

---

#### setUser(utilizador: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define o nome do utilizador proprietário do arquivo. Pode ser uma representação em string do número do utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizador** | _string_ | O nome do utilizador proprietário do arquivo. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUserExecutable

---

#### setUserExecutable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão de execução de arquivo ou permissão de listagem de diretório para um utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUserReadable

---

#### setUserReadable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão de leitura para um utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão de leitura. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setUserWritable

---

#### setUserWritable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão de escrita para um utilizador.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão de escrita. |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setWorldExecutable

---

#### setWorldExecutable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão global de execução de arquivo ou permissão de listagem de diretório.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setWorldReadable

---

#### setWorldReadable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão global de leitura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## setWorldWritable

---

#### setWorldWritable(acesso: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Define permissão global de escrita.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acesso** | _boolean_ | Se tem ou não permissão |

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toDirectory

---

#### toDirectory() : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Indica que o objeto é um diretório.

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toFile

---

#### toFile() : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Indica que o objeto é um arquivo.

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toFormattedString

---

#### toFormattedString() : string
##### Descrição

Retorna uma representação em string das informações do FTPFile.

##### Retorno

( _string_ )

Representação em string das informações do FTPFile.

---

#### toFormattedString(fuso: string) : string
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

#### toSymbolicLink() : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Indica que o objeto é um link simbólico.

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

## toUnknown

---

#### toUnknown() : [FTPFile](/docs/library/objects/FTPFile)
##### Descrição

Indica que o objeto é um tipo desconhecido.

##### Retorno

( _[FTPFile](/docs/library/objects/FTPFile)_ )

Objeto FTPFile atual.

---

