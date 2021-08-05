---
id: os
title: OS
sidebar_label: OS
---

Realiza a execução de comandos no sistema operativo, manipulação de ficheiros e pastas.

---

## command

---

#### _os.command(comando: _String[]_) : _[OSCommand](../../objects/OSCommand)_
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | _String[]_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[OSCommand](../../objects/OSCommand)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### _os.command(comando: _List_) : _[OSCommand](../../objects/OSCommand)_
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | _List_ | O comando e parâmetros opcionais que serão executados. |

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

#### _os.directory(diretorio: string) : _OS_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | string | O local onde o comando será executado. |

##### Retorno

( _OS_ )

Instância do recurso de sistema operacional.

---

#### _os.directory(diretorio: _Storage_) : _OS_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | _Storage_ | O local onde o comando será executado. |

##### Retorno

( _OS_ )

Instância do recurso de sistema operacional.

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

## init

---

#### _os.init() : _OS_
##### Descrição

Inicia uma nova instância do OS.

##### Retorno

( _OS_ )

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

## setDirectory

---

#### _os.setDirectory(diretorio: string) : _OS_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | string | O local onde o comando será executado. |

##### Retorno

( _OS_ )

Instância do recurso de sistema operacional.

---

#### _os.setDirectory(diretorio: _Storage_) : _OS_
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| diretorio | _Storage_ | O local onde o comando será executado. |

##### Retorno

( _OS_ )

Instância do recurso de sistema operacional.

---

