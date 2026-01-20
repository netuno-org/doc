---
id: ProcessLauncher
title: Process
sidebar_label: Process
---

Gerenciar a execução de processos permite executar programas externos e comandos de terminal.

---

## autoCloseOutputStreams

---

#### autoCloseOutputStreams() : boolean
##### Return

( _boolean_ )


---

#### autoCloseOutputStreams(autoCloseOutputStreams: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## await

---

#### await() : boolean
##### Return

( _boolean_ )


---

#### await(wait: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **wait** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## directory

---

#### directory() : string
##### Description

Gets the path where the commands will be executed.

##### Return

( _string_ )

The location where the command will be executed.

---

#### directory(file: java.io.File) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### directory(directory: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _string_ | The location where the command will be executed. |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instance of the operating system resource.

---

#### directory(directory: [File](/docs/library/objects/File)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[File](/docs/library/objects/File)_ | The location where the command will be executed. |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instance of the operating system resource.

---

#### directory(directory: [Storage](/docs/library/resources/storage)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[Storage](/docs/library/resources/storage)_ | The location where the command will be executed. |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instance of the operating system resource.

---

## env

---

#### env() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### env(env: [Values](/docs/library/objects/Values)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## errorOutput

---

#### errorOutput(err: [OutputStream](/docs/library/objects/OutputStream)) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputLineConsumer

---

#### errorOutputLineConsumer() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

#### errorOutputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputStream

---

#### errorOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### errorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

#### errorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## execute

---

#### execute(command: java.lang.String[]) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _java.lang.String[]_ | The command and optional parameters that will be executed. |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Result of executing the command in the operating system, including the output.

---

#### execute(command: java.util.List) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _java.util.List_ | The command and optional parameters that will be executed. |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Result of executing the command in the operating system, including the output.

---

#### execute(command: [Values](/docs/library/objects/Values)) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _[Values](/docs/library/objects/Values)_ | The command and optional parameters that will be executed. |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Result of executing the command in the operating system, including the output.

---

## executeAsync

---

#### executeAsync(command: java.lang.String[]) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _java.lang.String[]_ |   |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### executeAsync(command: java.util.List) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _java.util.List_ |   |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### executeAsync(command: [Values](/docs/library/objects/Values)) : [ProcessResult](/docs/library/objects/ProcessResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

## getAwait

---

#### getAwait() : boolean
##### Return

( _boolean_ )


---

## getDirectory

---

#### getDirectory() : string
##### Description

Gets the path where the commands will be executed.

##### Return

( _string_ )

The location where the command will be executed.

---

## getEnv

---

#### getEnv() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getErrorOutputLineConsumer

---

#### getErrorOutputLineConsumer() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

## getErrorOutputStream

---

#### getErrorOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getOnFinish

---

#### getOnFinish() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

## getOnParallel

---

#### getOnParallel() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

## getOutputLineConsumer

---

#### getOutputLineConsumer() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

## getOutputStream

---

#### getOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getShell

---

#### getShell() : boolean
##### Return

( _boolean_ )


---

## getShellCommand

---

#### getShellCommand() : string
##### Return

( _string_ )


---

## getShellParameter

---

#### getShellParameter() : string
##### Return

( _string_ )


---

## getTimeLimit

---

#### getTimeLimit() : long
##### Return

( _long_ )


---

## getWaitFor

---

#### getWaitFor() : long
##### Return

( _long_ )


---

## inheritErrorOutput

---

#### inheritErrorOutput() : boolean
##### Return

( _boolean_ )


---

#### inheritErrorOutput(inheritErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## inheritOutput

---

#### inheritOutput() : boolean
##### Return

( _boolean_ )


---

#### inheritOutput(inheritOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## isAutoCloseOutputStreams

---

#### isAutoCloseOutputStreams() : boolean
##### Return

( _boolean_ )


---

## isInheritErrorOutput

---

#### isInheritErrorOutput() : boolean
##### Return

( _boolean_ )


---

## isInheritOutput

---

#### isInheritOutput() : boolean
##### Return

( _boolean_ )


---

## isReadErrorOutput

---

#### isReadErrorOutput() : boolean
##### Return

( _boolean_ )


---

## isReadOutput

---

#### isReadOutput() : boolean
##### Return

( _boolean_ )


---

## isRedirectErrorStream

---

#### isRedirectErrorStream() : boolean
##### Return

( _boolean_ )


---

## onFinish

---

#### onFinish() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

#### onFinish(onFinish: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## onParallel

---

#### onParallel() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

#### onParallel(onParallel: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## output

---

#### output(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## outputLineConsumer

---

#### outputLineConsumer() : java.util.function.Consumer
##### Return

( _java.util.function.Consumer_ )


---

#### outputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## outputStream

---

#### outputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### outputStream(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readErrorOutput

---

#### readErrorOutput() : boolean
##### Return

( _boolean_ )


---

#### readErrorOutput(readErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readOutput

---

#### readOutput() : boolean
##### Return

( _boolean_ )


---

#### readOutput(readOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## redirectErrorStream

---

#### redirectErrorStream() : boolean
##### Return

( _boolean_ )


---

#### redirectErrorStream(redirectErrorStream: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAutoCloseOutputStreams

---

#### setAutoCloseOutputStreams(autoCloseOutputStreams: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAwait

---

#### setAwait(wait: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **wait** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setDirectory

---

#### setDirectory(file: java.io.File) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### setDirectory(directory: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _string_ | The location where the command will be executed. |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instance of the operating system resource.

---

#### setDirectory(directory: [File](/docs/library/objects/File)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[File](/docs/library/objects/File)_ | The location where the command will be executed. |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instance of the operating system resource.

---

#### setDirectory(directory: [Storage](/docs/library/resources/storage)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[Storage](/docs/library/resources/storage)_ | The location where the command will be executed. |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )

Instance of the operating system resource.

---

## setEnv

---

#### setEnv(env: [Values](/docs/library/objects/Values)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorOutput

---

#### setErrorOutput(err: [OutputStream](/docs/library/objects/OutputStream)) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputLineConsumer

---

#### setErrorOutputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputStream

---

#### setErrorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### setErrorOutputStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorStream

---

#### setErrorStream(err: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setExitDelay

---

#### setExitDelay(timeLimit: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritErrorOutput

---

#### setInheritErrorOutput(inheritErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritOutput

---

#### setInheritOutput(inheritOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOnFinish

---

#### setOnFinish(onFinish: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOnParallel

---

#### setOnParallel(onParallel: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutput

---

#### setOutput(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOutputLineConsumer

---

#### setOutputLineConsumer(consumer: java.util.function.Consumer) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutputStream

---

#### setOutputStream(out: [OutputStream](/docs/library/objects/OutputStream)) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadErrorOutput

---

#### setReadErrorOutput(readErrorOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadOutput

---

#### setReadOutput(readOutput: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setRedirectErrorStream

---

#### setRedirectErrorStream(redirectErrorStream: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShell

---

#### setShell(shell: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shell** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellCommand

---

#### setShellCommand(shellCommand: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellParameter

---

#### setShellParameter(shellParameter: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setTimeLimit

---

#### setTimeLimit(timeLimit: long) : org.netuno.psamata.os.ProcessLauncher
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setWaitFor

---

#### setWaitFor(waitFor: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **waitFor** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shell

---

#### shell() : boolean
##### Return

( _boolean_ )


---

#### shell(shell: boolean) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shell** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellCommand

---

#### shellCommand() : string
##### Return

( _string_ )


---

#### shellCommand(shellCommand: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellParameter

---

#### shellParameter() : string
##### Return

( _string_ )


---

#### shellParameter(shellParameter: string) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## timeLimit

---

#### timeLimit() : long
##### Return

( _long_ )


---

#### timeLimit(timeLimit: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## waitFor

---

#### waitFor() : long
##### Return

( _long_ )


---

#### waitFor(waitFor: long) : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **waitFor** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

