---
id: os
title: OS
sidebar_label: OS
---

Realiza a execução de comandos no sistema operativo, manipulação de ficheiros e pastas.

---

## file

---

#### _os.file(caminho: string) : [File](/docs/library/objects/File)
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](/docs/library/objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## folder

---

#### _os.folder(caminho: string) : [File](/docs/library/objects/File)
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](/docs/library/objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getFile

---

#### _os.getFile(caminho: string) : [File](/docs/library/objects/File)
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **ficheiro**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](/docs/library/objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **ficheiro**.

---

## getFolder

---

#### _os.getFolder(caminho: string) : [File](/docs/library/objects/File)
##### Descrição

Obtém o objeto de manipulação de pastas e ficheiros relativo ao caminho passado, neste caso o caminho deverá ser uma **pasta**.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | O caminho da **pasta** que deve obter o objeto de manipulação. |

##### Retorno

( _[File](/docs/library/objects/File)_ )

Instância do objeto de manipulação de ficheiros e pastas relativo ao caminho passado, neste caso uma **pasta**.

---

## getName

---

#### _os.getName() : string
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( _string_ )

O nome do sistema operacional.

---

## init

---

#### _os.init() : [OS](/docs/library/resources/os)
##### Descrição

Inicia uma nova instância do OS.

##### Retorno

( _[OS](/docs/library/resources/os)_ )

A nova instância do recurso OS.

---

## initProcess

---

#### _os.initProcess() : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## isFile

---

#### _os.isFile(path: string) : boolean
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

#### _os.isFolder(path: string) : boolean
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

#### _os.isLinux() : boolean
##### Descrição

Verifica se o sistema operacional é Linux.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Linux.

---

## isMac

---

#### _os.isMac() : boolean
##### Descrição

Verifica se o sistema operacional é Mac OS X.

##### Retorno

( _boolean_ )

Se é ou não o sistema operacional Mac OS X.

---

## isOS

---

#### _os.isOS(tipoSO: string) : boolean
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

## isWindows

---

#### _os.isWindows() : boolean
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

( _string_ )

O nome do sistema operacional.

---

