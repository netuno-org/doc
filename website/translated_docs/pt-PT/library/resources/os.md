---
id: os
title: OS
sidebar_label: OS
---

Realiza a execução de comandos no sistema operativo, manipulação de ficheiros e pastas.

---

## command

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">command</span>(<span style="color: #FF8000">comando</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.String;[]</span>) : <span style="font-weight: normal; font-style: italic;">[OSCommand](../../objects/OSCommand)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _[Ljava.lang.String;[]_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">command</span>(<span style="color: #FF8000">comando</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[OSCommand](../../objects/OSCommand)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _java.util.List_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">command</span>(<span style="color: #FF8000">comando</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[OSCommand](../../objects/OSCommand)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _[Values](../../objects/Values)_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

## directory

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">directory</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">directory</span>(<span style="color: #FF8000">diretorio</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _string_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">directory</span>(<span style="color: #FF8000">diretorio</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[File](../../objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">directory</span>(<span style="color: #FF8000">diretorio</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[Storage](../../resources/Storage)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

## env

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">env</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">env</span>(<span style="color: #FF8000">env</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **env** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## file

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">file</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## folder

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">folder</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getDirectory

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">getDirectory</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

## getEnv

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">getEnv</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getFile

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">getFile</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## getFolder

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">getFolder</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getName

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">getName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( _string_ )

O nome do sistema operacional.

---

## getShell

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">getShell</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## getWaitFor

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">getWaitFor</span>() : <span style="font-weight: normal; font-style: italic;">long</span>
##### Retorno

( _long_ )


---

## init

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Descrição

Inicia uma nova instância do OS.

##### Retorno

( _[OS](../../resources/OS)_ )

A nova instância do recurso OS.

---

## isFile

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isFile</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isFolder</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isLinux</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o sistema operacional é Linux.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Linux.

---

## isMac

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isMac</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o sistema operacional é Mac OS X.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Mac OS X.

---

## isOS

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isOS</span>(<span style="color: #FF8000">tipoSO</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isReadCommandError</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isReadCommandOutput

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isReadCommandOutput</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isWindows

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">isWindows</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o sistema operacional é Windows.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Windows.

---

## name

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">name</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( _string_ )

O nome do sistema operacional.

---

## readCommandError

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">readCommandError</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">readCommandError</span>(<span style="color: #FF8000">readCommandError</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandError** | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## readCommandOutput

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">readCommandOutput</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">readCommandOutput</span>(<span style="color: #FF8000">readCommandOutput</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandOutput** | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setDirectory

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setDirectory</span>(<span style="color: #FF8000">diretorio</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _string_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setDirectory</span>(<span style="color: #FF8000">diretorio</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[File](../../objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setDirectory</span>(<span style="color: #FF8000">diretorio</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[Storage](../../resources/Storage)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

## setEnv

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setEnv</span>(<span style="color: #FF8000">shell</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setReadCommandError

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setReadCommandError</span>(<span style="color: #FF8000">readCommandError</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandError** | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setReadCommandOutput

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setReadCommandOutput</span>(<span style="color: #FF8000">readCommandOutput</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readCommandOutput** | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setShell

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setShell</span>(<span style="color: #FF8000">shell</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setWaitFor

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">setWaitFor</span>(<span style="color: #FF8000">waitFor</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## shell

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">shell</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">shell</span>(<span style="color: #FF8000">shell</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## waitFor

---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">waitFor</span>() : <span style="font-weight: normal; font-style: italic;">long</span>
##### Retorno

( _long_ )


---

#### <span style="font-weight: normal">_os</span>.<span style="color: #008000">waitFor</span>(<span style="color: #FF8000">waitFor</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[OS](../../resources/OS)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

