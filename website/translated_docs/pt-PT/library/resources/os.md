---
id: os
title: OS
sidebar_label: OS
---

Realiza a execução de comandos no sistema operativo, manipulação de ficheiros e pastas.

---

## command

---

#### _os.command(comando: _[Ljava.lang.String;_) : _[OSCommand](../../objects/OSCommand)_
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | _[Ljava.lang.String;_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### _os.command(comando: _java.util.List_) : _[OSCommand](../../objects/OSCommand)_
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | _java.util.List_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### _os.command(comando: _[Values](../../objects/Values)_) : _[OSCommand](../../objects/OSCommand)_
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | _[Values](../../objects/Values)_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

## directory

---

#### _os.directory() : string
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( string )

O local onde o comando será executado.

---

#### _os.directory(diretorio: string) : _[OS](../../resources/OS)_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | string | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### _os.directory(diretorio: _[File](../../objects/File)_) : _[OS](../../resources/OS)_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | _[File](../../objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### _os.directory(diretorio: _[Storage](../../resources/Storage)_) : _[OS](../../resources/OS)_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | _[Storage](../../resources/Storage)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

## env

---

#### _os.env() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _os.env(arg0: _[Values](../../objects/Values)_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## file

---

#### _os.file(caminho: string) : _[File](../../objects/File)_
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## folder

---

#### _os.folder(caminho: string) : _[File](../../objects/File)_
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getDirectory

---

#### _os.getDirectory() : string
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( string )

O local onde o comando será executado.

---

## getEnv

---

#### _os.getEnv() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getFile

---

#### _os.getFile(caminho: string) : _[File](../../objects/File)_
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## getFolder

---

#### _os.getFolder(caminho: string) : _[File](../../objects/File)_
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](../../objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getName

---

#### _os.getName() : string
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( string )

O nome do sistema operacional.

---

## getShell

---

#### _os.getShell() : _boolean_
##### Retorno

( _boolean_ )


---

## getWaitFor

---

#### _os.getWaitFor() : _long_
##### Retorno

( _long_ )


---

## init

---

#### _os.init() : _[OS](../../resources/OS)_
##### Descrição

Inicia uma nova instância do OS.

##### Retorno

( _[OS](../../resources/OS)_ )

A nova instância do recurso OS.

---

## isFile

---

#### _os.isFile(arg0: string) : _boolean_
##### Descrição

Verifica se o caminho é um **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )

Se é ou não um **ficheiro**.

---

## isFolder

---

#### _os.isFolder(arg0: string) : _boolean_
##### Descrição

Verifica se o caminho é uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )

Se é ou não uma **pasta**.

---

## isLinux

---

#### _os.isLinux() : _boolean_
##### Descrição

Verifica se o sistema operacional é Linux.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Linux.

---

## isMac

---

#### _os.isMac() : _boolean_
##### Descrição

Verifica se o sistema operacional é Mac OS X.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Mac OS X.

---

## isOS

---

#### _os.isOS(tipoSO: string) : _boolean_
##### Descrição

Verifica o sistema operacional baseado no nome passado que pode ser Linux, Mac ou Windows.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipoSO | string | O tipo de sistema operacional que pode ser Linux, Mac ou Windows. |

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional que foi indicado.

---

## isReadCommandError

---

#### _os.isReadCommandError() : _boolean_
##### Retorno

( _boolean_ )


---

## isReadCommandOutput

---

#### _os.isReadCommandOutput() : _boolean_
##### Retorno

( _boolean_ )


---

## isWindows

---

#### _os.isWindows() : _boolean_
##### Descrição

Verifica se o sistema operacional é Windows.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Windows.

---

## name

---

#### _os.name() : string
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( string )

O nome do sistema operacional.

---

## readCommandError

---

#### _os.readCommandError() : _boolean_
##### Retorno

( _boolean_ )


---

#### _os.readCommandError(arg0: _boolean_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## readCommandOutput

---

#### _os.readCommandOutput() : _boolean_
##### Retorno

( _boolean_ )


---

#### _os.readCommandOutput(arg0: _boolean_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setDirectory

---

#### _os.setDirectory(diretorio: string) : _[OS](../../resources/OS)_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | string | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### _os.setDirectory(diretorio: _[File](../../objects/File)_) : _[OS](../../resources/OS)_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | _[File](../../objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

#### _os.setDirectory(diretorio: _[Storage](../../resources/Storage)_) : _[OS](../../resources/OS)_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | _[Storage](../../resources/Storage)_ | O local onde o comando será executado. |

##### Retorno

( _[OS](../../resources/OS)_ )

Instância do recurso de sistema operacional.

---

## setEnv

---

#### _os.setEnv(arg0: _[Values](../../objects/Values)_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setReadCommandError

---

#### _os.setReadCommandError(arg0: _boolean_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setReadCommandOutput

---

#### _os.setReadCommandOutput(arg0: _boolean_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setShell

---

#### _os.setShell(arg0: _boolean_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## setWaitFor

---

#### _os.setWaitFor(arg0: _long_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## shell

---

#### _os.shell() : _boolean_
##### Retorno

( _boolean_ )


---

#### _os.shell(arg0: _boolean_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

## waitFor

---

#### _os.waitFor() : _long_
##### Retorno

( _long_ )


---

#### _os.waitFor(arg0: _long_) : _[OS](../../resources/OS)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _[OS](../../resources/OS)_ )


---

