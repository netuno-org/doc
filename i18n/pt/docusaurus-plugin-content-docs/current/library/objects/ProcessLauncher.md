---
id: ProcessLauncher
title: Process
sidebar_label: Process
---

Gerencia a execução de processos, permite executar programas externos e comandos de terminal.

---

## autoCloseOutputStreams

---

#### <span style={{color: '#008000'}}>autoCloseOutputStreams</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>autoCloseOutputStreams</span>(<span style={{color: '#FF8000'}}>autoCloseOutputStreams</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## await

---

#### <span style={{color: '#008000'}}>await</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>await</span>(<span style={{color: '#FF8000'}}>wait</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **wait** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## directory

---

#### <span style={{color: '#008000'}}>directory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _string_ | O local onde o comando será executado. |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[File](/docs/library/objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[Storage](/docs/library/resources/storage)_ | O local onde o comando será executado. |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instância do recurso de sistema operacional.

---

## env

---

#### <span style={{color: '#008000'}}>env</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>env</span>(<span style={{color: '#FF8000'}}>env</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## errorOutput

---

#### <span style={{color: '#008000'}}>errorOutput</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputLineConsumer

---

#### <span style={{color: '#008000'}}>errorOutputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>errorOutputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputStream

---

#### <span style={{color: '#008000'}}>errorOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### <span style={{color: '#008000'}}>errorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

#### <span style={{color: '#008000'}}>errorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## execute

---

#### <span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _string[]_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### <span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _java.util.List_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### <span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _[Values](/docs/library/objects/Values)_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

## executeAsync

---

#### <span style={{color: '#008000'}}>executeAsync</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **command** | _string[]_ |   |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### <span style={{color: '#008000'}}>executeAsync</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **command** | _java.util.List_ |   |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### <span style={{color: '#008000'}}>executeAsync</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **command** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

## getAwait

---

#### <span style={{color: '#008000'}}>getAwait</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## getDirectory

---

#### <span style={{color: '#008000'}}>getDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

## getEnv

---

#### <span style={{color: '#008000'}}>getEnv</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getErrorOutputLineConsumer

---

#### <span style={{color: '#008000'}}>getErrorOutputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

## getErrorOutputStream

---

#### <span style={{color: '#008000'}}>getErrorOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getOnFinish

---

#### <span style={{color: '#008000'}}>getOnFinish</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

## getOnParallel

---

#### <span style={{color: '#008000'}}>getOnParallel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

## getOutputLineConsumer

---

#### <span style={{color: '#008000'}}>getOutputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

## getOutputStream

---

#### <span style={{color: '#008000'}}>getOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getShell

---

#### <span style={{color: '#008000'}}>getShell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## getShellCommand

---

#### <span style={{color: '#008000'}}>getShellCommand</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getShellParameter

---

#### <span style={{color: '#008000'}}>getShellParameter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getTimeLimit

---

#### <span style={{color: '#008000'}}>getTimeLimit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Retorno

( _long_ )


---

## getWaitFor

---

#### <span style={{color: '#008000'}}>getWaitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Retorno

( _long_ )


---

## inheritErrorOutput

---

#### <span style={{color: '#008000'}}>inheritErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>inheritErrorOutput</span>(<span style={{color: '#FF8000'}}>inheritErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## inheritOutput

---

#### <span style={{color: '#008000'}}>inheritOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>inheritOutput</span>(<span style={{color: '#FF8000'}}>inheritOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## isAutoCloseOutputStreams

---

#### <span style={{color: '#008000'}}>isAutoCloseOutputStreams</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isInheritErrorOutput

---

#### <span style={{color: '#008000'}}>isInheritErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isInheritOutput

---

#### <span style={{color: '#008000'}}>isInheritOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isReadErrorOutput

---

#### <span style={{color: '#008000'}}>isReadErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isReadOutput

---

#### <span style={{color: '#008000'}}>isReadOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isRedirectErrorStream

---

#### <span style={{color: '#008000'}}>isRedirectErrorStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## onFinish

---

#### <span style={{color: '#008000'}}>onFinish</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>onFinish</span>(<span style={{color: '#FF8000'}}>onFinish</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## onParallel

---

#### <span style={{color: '#008000'}}>onParallel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>onParallel</span>(<span style={{color: '#FF8000'}}>onParallel</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## output

---

#### <span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## outputLineConsumer

---

#### <span style={{color: '#008000'}}>outputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Retorno

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>outputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## outputStream

---

#### <span style={{color: '#008000'}}>outputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### <span style={{color: '#008000'}}>outputStream</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readErrorOutput

---

#### <span style={{color: '#008000'}}>readErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>readErrorOutput</span>(<span style={{color: '#FF8000'}}>readErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readOutput

---

#### <span style={{color: '#008000'}}>readOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>readOutput</span>(<span style={{color: '#FF8000'}}>readOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## redirectErrorStream

---

#### <span style={{color: '#008000'}}>redirectErrorStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>redirectErrorStream</span>(<span style={{color: '#FF8000'}}>redirectErrorStream</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAutoCloseOutputStreams

---

#### <span style={{color: '#008000'}}>setAutoCloseOutputStreams</span>(<span style={{color: '#FF8000'}}>autoCloseOutputStreams</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAwait

---

#### <span style={{color: '#008000'}}>setAwait</span>(<span style={{color: '#FF8000'}}>wait</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **wait** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setDirectory

---

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _string_ | O local onde o comando será executado. |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[File](/docs/library/objects/File)_ | O local onde o comando será executado. |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instância do recurso de sistema operacional.

---

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>diretorio</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Descrição

Define o caminho onde os comandos serão executados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **diretorio** | _[Storage](/docs/library/resources/storage)_ | O local onde o comando será executado. |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instância do recurso de sistema operacional.

---

## setEnv

---

#### <span style={{color: '#008000'}}>setEnv</span>(<span style={{color: '#FF8000'}}>env</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorOutput

---

#### <span style={{color: '#008000'}}>setErrorOutput</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputLineConsumer

---

#### <span style={{color: '#008000'}}>setErrorOutputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputStream

---

#### <span style={{color: '#008000'}}>setErrorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### <span style={{color: '#008000'}}>setErrorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorStream

---

#### <span style={{color: '#008000'}}>setErrorStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setExitDelay

---

#### <span style={{color: '#008000'}}>setExitDelay</span>(<span style={{color: '#FF8000'}}>timeLimit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritErrorOutput

---

#### <span style={{color: '#008000'}}>setInheritErrorOutput</span>(<span style={{color: '#FF8000'}}>inheritErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritOutput

---

#### <span style={{color: '#008000'}}>setInheritOutput</span>(<span style={{color: '#FF8000'}}>inheritOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOnFinish

---

#### <span style={{color: '#008000'}}>setOnFinish</span>(<span style={{color: '#FF8000'}}>onFinish</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOnParallel

---

#### <span style={{color: '#008000'}}>setOnParallel</span>(<span style={{color: '#FF8000'}}>onParallel</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutput

---

#### <span style={{color: '#008000'}}>setOutput</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOutputLineConsumer

---

#### <span style={{color: '#008000'}}>setOutputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutputStream

---

#### <span style={{color: '#008000'}}>setOutputStream</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadErrorOutput

---

#### <span style={{color: '#008000'}}>setReadErrorOutput</span>(<span style={{color: '#FF8000'}}>readErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadOutput

---

#### <span style={{color: '#008000'}}>setReadOutput</span>(<span style={{color: '#FF8000'}}>readOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setRedirectErrorStream

---

#### <span style={{color: '#008000'}}>setRedirectErrorStream</span>(<span style={{color: '#FF8000'}}>redirectErrorStream</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShell

---

#### <span style={{color: '#008000'}}>setShell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellCommand

---

#### <span style={{color: '#008000'}}>setShellCommand</span>(<span style={{color: '#FF8000'}}>shellCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellParameter

---

#### <span style={{color: '#008000'}}>setShellParameter</span>(<span style={{color: '#FF8000'}}>shellParameter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setTimeLimit

---

#### <span style={{color: '#008000'}}>setTimeLimit</span>(<span style={{color: '#FF8000'}}>timeLimit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setWaitFor

---

#### <span style={{color: '#008000'}}>setWaitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shell

---

#### <span style={{color: '#008000'}}>shell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{color: '#008000'}}>shell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellCommand

---

#### <span style={{color: '#008000'}}>shellCommand</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{color: '#008000'}}>shellCommand</span>(<span style={{color: '#FF8000'}}>shellCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellParameter

---

#### <span style={{color: '#008000'}}>shellParameter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{color: '#008000'}}>shellParameter</span>(<span style={{color: '#FF8000'}}>shellParameter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## timeLimit

---

#### <span style={{color: '#008000'}}>timeLimit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Retorno

( _long_ )


---

#### <span style={{color: '#008000'}}>timeLimit</span>(<span style={{color: '#FF8000'}}>timeLimit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## waitFor

---

#### <span style={{color: '#008000'}}>waitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Retorno

( _long_ )


---

#### <span style={{color: '#008000'}}>waitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

