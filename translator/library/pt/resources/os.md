---
id: os
title: OS
sidebar_label: OS
---

Realiza a execução de comandos no sistema operativo, manipulação de ficheiros e pastas.

---

## file

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>file</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>folder</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFolder</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o nome do sistema operacional.

##### Retorno

( _string_ )

O nome do sistema operacional.

---

## getPath

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getPath</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Descrição

Fornece o objeto de manipulação de arquivos para o caminho no sistema.

##### Como Usar

```javascript
// Cria a estrutura de pastas na raíz do sistema.
_os.path("/tmp/netuno").mkdirs()
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho relativo do arquivo ou pasta dentro da aplicação. |

##### Retorno

( _[File](/docs/library/objects/File)_ )

Retorna o objeto de manipulação para o caminho.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](/docs/library/resources/os)</span>
##### Descrição

Inicia uma nova instância do OS.

##### Retorno

( _[OS](/docs/library/resources/os)_ )

A nova instância do recurso OS.

---

## initProcess

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>initProcess</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


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

## path

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>path</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Descrição

Fornece o objeto de manipulação de arquivos para o caminho no sistema.

##### Como Usar

```javascript
// Cria a estrutura de pastas na raíz do sistema.
_os.path("/tmp/netuno").mkdirs()
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho relativo do arquivo ou pasta dentro da aplicação. |

##### Retorno

( _[File](/docs/library/objects/File)_ )

Retorna o objeto de manipulação para o caminho.

---

