---
id: os
title: OS
sidebar_label: OS
---

Realiza a execução de comandos no sistema operativo, manipulação de ficheiros e pastas.

---

## command

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>command</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.String;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OSCommand](../objects/OSCommand)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _[Ljava.lang.String;[]_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>command</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OSCommand](../objects/OSCommand)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _java.util.List_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>command</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OSCommand](../objects/OSCommand)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _[Values](../objects/Values)_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

## directory

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _string_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../resources/os)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[File](../objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../resources/os)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[Storage](../resources/storage)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../resources/os)_ )

Instância do recurso de sistema operacional.

---

## env

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>env</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>env</span>(<span style={{color: '#FF8000'}}>env</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **env** | _[Values](../objects/Values)_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## file

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>file</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## folder

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>folder</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getDirectory

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

## getEnv

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getEnv</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## getFile

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## getFolder

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFolder</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getName

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( _string_ )

O nome do sistema operacional.

---

## getShell

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getShell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## getWaitFor

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getWaitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Retorno

( _long_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Descrição

Inicia uma nova instância do OS.

##### Retorno

( _[OS](../resources/os)_ )

A nova instância do recurso OS.

---

## isFile

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o caminho é um **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _boolean_ )

Se é ou não um **ficheiro**.

---

## isFolder

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isFolder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o caminho é uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _boolean_ )

Se é ou não uma **pasta**.

---

## isLinux

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isLinux</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o sistema operacional é Linux.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Linux.

---

## isMac

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isMac</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o sistema operacional é Mac OS X.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Mac OS X.

---

## isOS

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isOS</span>(<span style={{color: '#FF8000'}}>tipoSO</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica o sistema operacional baseado no nome passado que pode ser Linux, Mac ou Windows.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipoSO** | _string_ | O tipo de sistema operacional que pode ser Linux, Mac ou Windows. |

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional que foi indicado.

---

## isReadCommandError

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isReadCommandError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isReadCommandOutput

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isReadCommandOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isWindows

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isWindows</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o sistema operacional é Windows.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Windows.

---

## name

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( _string_ )

O nome do sistema operacional.

---

## readCommandError

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandError</span>(<span style={{color: '#FF8000'}}>readCommandError</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandError** | _boolean_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## readCommandOutput

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandOutput</span>(<span style={{color: '#FF8000'}}>readCommandOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandOutput** | _boolean_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## setDirectory

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _string_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../resources/os)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[File](../objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../resources/os)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[Storage](../resources/storage)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../resources/os)_ )

Instância do recurso de sistema operacional.

---

## setEnv

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setEnv</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _[Values](../objects/Values)_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## setReadCommandError

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setReadCommandError</span>(<span style={{color: '#FF8000'}}>readCommandError</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandError** | _boolean_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## setReadCommandOutput

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setReadCommandOutput</span>(<span style={{color: '#FF8000'}}>readCommandOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandOutput** | _boolean_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## setShell

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setShell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## setWaitFor

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setWaitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## shell

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>shell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>shell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

## waitFor

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>waitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Retorno

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>waitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[OS](../resources/os)_ )


---

