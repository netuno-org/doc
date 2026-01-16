---
id: ProcessLauncher
title: Process
sidebar_label: Process
---

Gerencia a execução de processos, permite executar programas externos e comandos de terminal.

---

## autoCloseOutputStreams

---

#### autoCloseOutputStreams() : boolean
##### Retorno

( _boolean_ )


---

#### autoCloseOutputStreams(autoCloseOutputStreams: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## await

---

#### await() : boolean
##### Retorno

( _boolean_ )


---

#### await(wait: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **wait** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## directory

---

#### directory() : string
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

#### directory(file: java.io.File) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### directory(diretorio: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
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

#### directory(diretorio: [File](/docs/library/objects/File)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
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

#### directory(diretorio: [Storage](/docs/library/resources/storage)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
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

#### env() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### env(env: [Values](/docs/library/objects/Values)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## errorOutput

---

#### errorOutput(err: [OutputStream](/docs/library/objects/OutputStream)) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputLineConsumer

---

#### errorOutputLineConsumer() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

#### errorOutputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputStream

---

#### errorOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### errorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

#### errorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## execute

---

#### execute(comando: java.lang.String[]) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Descrição

Executa um comando no sistema operacional e obtém o resultado da execução, o primeiro item é o comando e os seguintes são parâmetros.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _java.lang.String[]_ | O comando e parâmetros opcionais que serão executados. |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Resultado da execução do comando no sistema operacional, incluí o output.

---

#### execute(comando: java.util.List) : [ProcessResult](/docs/library/objects/ProcessResult)
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

#### execute(comando: [Values](/docs/library/objects/Values)) : [ProcessResult](/docs/library/objects/ProcessResult)
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

#### executeAsync(command: java.lang.String[]) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **command** | _java.lang.String[]_ |   |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### executeAsync(command: java.util.List) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **command** | _java.util.List_ |   |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### executeAsync(command: [Values](/docs/library/objects/Values)) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **command** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

## getAwait

---

#### getAwait() : boolean
##### Retorno

( _boolean_ )


---

## getDirectory

---

#### getDirectory() : string
##### Descrição

Obtém o caminho onde os comandos serão executados.

##### Retorno

( _string_ )

O local onde o comando será executado.

---

## getEnv

---

#### getEnv() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getErrorOutputLineConsumer

---

#### getErrorOutputLineConsumer() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

## getErrorOutputStream

---

#### getErrorOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getOnFinish

---

#### getOnFinish() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

## getOnParallel

---

#### getOnParallel() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

## getOutputLineConsumer

---

#### getOutputLineConsumer() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

## getOutputStream

---

#### getOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getShell

---

#### getShell() : boolean
##### Retorno

( _boolean_ )


---

## getShellCommand

---

#### getShellCommand() : string
##### Retorno

( _string_ )


---

## getShellParameter

---

#### getShellParameter() : string
##### Retorno

( _string_ )


---

## getTimeLimit

---

#### getTimeLimit() : long
##### Retorno

( _long_ )


---

## getWaitFor

---

#### getWaitFor() : long
##### Retorno

( _long_ )


---

## inheritErrorOutput

---

#### inheritErrorOutput() : boolean
##### Retorno

( _boolean_ )


---

#### inheritErrorOutput(inheritErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## inheritOutput

---

#### inheritOutput() : boolean
##### Retorno

( _boolean_ )


---

#### inheritOutput(inheritOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## isAutoCloseOutputStreams

---

#### isAutoCloseOutputStreams() : boolean
##### Retorno

( _boolean_ )


---

## isInheritErrorOutput

---

#### isInheritErrorOutput() : boolean
##### Retorno

( _boolean_ )


---

## isInheritOutput

---

#### isInheritOutput() : boolean
##### Retorno

( _boolean_ )


---

## isReadErrorOutput

---

#### isReadErrorOutput() : boolean
##### Retorno

( _boolean_ )


---

## isReadOutput

---

#### isReadOutput() : boolean
##### Retorno

( _boolean_ )


---

## isRedirectErrorStream

---

#### isRedirectErrorStream() : boolean
##### Retorno

( _boolean_ )


---

## onFinish

---

#### onFinish() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

#### onFinish(onFinish: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## onParallel

---

#### onParallel() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

#### onParallel(onParallel: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## output

---

#### output(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## outputLineConsumer

---

#### outputLineConsumer() : java.util.function.Consumer
##### Retorno

( _java.util.function.Consumer_ )


---

#### outputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## outputStream

---

#### outputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### outputStream(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readErrorOutput

---

#### readErrorOutput() : boolean
##### Retorno

( _boolean_ )


---

#### readErrorOutput(readErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readOutput

---

#### readOutput() : boolean
##### Retorno

( _boolean_ )


---

#### readOutput(readOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## redirectErrorStream

---

#### redirectErrorStream() : boolean
##### Retorno

( _boolean_ )


---

#### redirectErrorStream(redirectErrorStream: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAutoCloseOutputStreams

---

#### setAutoCloseOutputStreams(autoCloseOutputStreams: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAwait

---

#### setAwait(wait: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **wait** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setDirectory

---

#### setDirectory(file: java.io.File) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### setDirectory(diretorio: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
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

#### setDirectory(diretorio: [File](/docs/library/objects/File)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
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

#### setDirectory(diretorio: [Storage](/docs/library/resources/storage)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
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

#### setEnv(env: [Values](/docs/library/objects/Values)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorOutput

---

#### setErrorOutput(err: [OutputStream](/docs/library/objects/OutputStream)) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputLineConsumer

---

#### setErrorOutputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputStream

---

#### setErrorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### setErrorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorStream

---

#### setErrorStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setExitDelay

---

#### setExitDelay(timeLimit: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritErrorOutput

---

#### setInheritErrorOutput(inheritErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritOutput

---

#### setInheritOutput(inheritOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOnFinish

---

#### setOnFinish(onFinish: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOnParallel

---

#### setOnParallel(onParallel: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutput

---

#### setOutput(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOutputLineConsumer

---

#### setOutputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutputStream

---

#### setOutputStream(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadErrorOutput

---

#### setReadErrorOutput(readErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadOutput

---

#### setReadOutput(readOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setRedirectErrorStream

---

#### setRedirectErrorStream(redirectErrorStream: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShell

---

#### setShell(shell: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellCommand

---

#### setShellCommand(shellCommand: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellParameter

---

#### setShellParameter(shellParameter: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setTimeLimit

---

#### setTimeLimit(timeLimit: long) : org.netuno.psamata.os.ProcessLauncher
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Retorno

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setWaitFor

---

#### setWaitFor(waitFor: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shell

---

#### shell() : boolean
##### Retorno

( _boolean_ )


---

#### shell(shell: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shell** | _boolean_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellCommand

---

#### shellCommand() : string
##### Retorno

( _string_ )


---

#### shellCommand(shellCommand: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellParameter

---

#### shellParameter() : string
##### Retorno

( _string_ )


---

#### shellParameter(shellParameter: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## timeLimit

---

#### timeLimit() : long
##### Retorno

( _long_ )


---

#### timeLimit(timeLimit: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## waitFor

---

#### waitFor() : long
##### Retorno

( _long_ )


---

#### waitFor(waitFor: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **waitFor** | _long_ |   |

##### Retorno

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

