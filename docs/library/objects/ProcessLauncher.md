---
id: ProcessLauncher
title: Process
sidebar_label: Process
---

Gerenciar a execução de processos permite executar programas externos e comandos de terminal.

---

## autoCloseOutputStreams

---

#### <span style={{color: '#008000'}}>autoCloseOutputStreams</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>autoCloseOutputStreams</span>(<span style={{color: '#FF8000'}}>autoCloseOutputStreams</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## await

---

#### <span style={{color: '#008000'}}>await</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>await</span>(<span style={{color: '#FF8000'}}>wait</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **wait** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## directory

---

#### <span style={{color: '#008000'}}>directory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the path where the commands will be executed.

##### Return

( _string_ )

The location where the command will be executed.

---

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
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

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
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

#### <span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
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

#### <span style={{color: '#008000'}}>env</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>env</span>(<span style={{color: '#FF8000'}}>env</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## errorOutput

---

#### <span style={{color: '#008000'}}>errorOutput</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputLineConsumer

---

#### <span style={{color: '#008000'}}>errorOutputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>errorOutputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## errorOutputStream

---

#### <span style={{color: '#008000'}}>errorOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### <span style={{color: '#008000'}}>errorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

#### <span style={{color: '#008000'}}>errorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## execute

---

#### <span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string[]_ | The command and optional parameters that will be executed. |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )

Result of executing the command in the operating system, including the output.

---

#### <span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
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

#### <span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
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

#### <span style={{color: '#008000'}}>executeAsync</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string[]_ |   |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### <span style={{color: '#008000'}}>executeAsync</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _java.util.List_ |   |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

#### <span style={{color: '#008000'}}>executeAsync</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessResult](/docs/library/objects/ProcessResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[ProcessResult](/docs/library/objects/ProcessResult)_ )


---

## getAwait

---

#### <span style={{color: '#008000'}}>getAwait</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## getDirectory

---

#### <span style={{color: '#008000'}}>getDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the path where the commands will be executed.

##### Return

( _string_ )

The location where the command will be executed.

---

## getEnv

---

#### <span style={{color: '#008000'}}>getEnv</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getErrorOutputLineConsumer

---

#### <span style={{color: '#008000'}}>getErrorOutputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

## getErrorOutputStream

---

#### <span style={{color: '#008000'}}>getErrorOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getOnFinish

---

#### <span style={{color: '#008000'}}>getOnFinish</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

## getOnParallel

---

#### <span style={{color: '#008000'}}>getOnParallel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

## getOutputLineConsumer

---

#### <span style={{color: '#008000'}}>getOutputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

## getOutputStream

---

#### <span style={{color: '#008000'}}>getOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getShell

---

#### <span style={{color: '#008000'}}>getShell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## getShellCommand

---

#### <span style={{color: '#008000'}}>getShellCommand</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getShellParameter

---

#### <span style={{color: '#008000'}}>getShellParameter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getTimeLimit

---

#### <span style={{color: '#008000'}}>getTimeLimit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Return

( _long_ )


---

## getWaitFor

---

#### <span style={{color: '#008000'}}>getWaitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Return

( _long_ )


---

## inheritErrorOutput

---

#### <span style={{color: '#008000'}}>inheritErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>inheritErrorOutput</span>(<span style={{color: '#FF8000'}}>inheritErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## inheritOutput

---

#### <span style={{color: '#008000'}}>inheritOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>inheritOutput</span>(<span style={{color: '#FF8000'}}>inheritOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## isAutoCloseOutputStreams

---

#### <span style={{color: '#008000'}}>isAutoCloseOutputStreams</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isInheritErrorOutput

---

#### <span style={{color: '#008000'}}>isInheritErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isInheritOutput

---

#### <span style={{color: '#008000'}}>isInheritOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isReadErrorOutput

---

#### <span style={{color: '#008000'}}>isReadErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isReadOutput

---

#### <span style={{color: '#008000'}}>isReadOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isRedirectErrorStream

---

#### <span style={{color: '#008000'}}>isRedirectErrorStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## onFinish

---

#### <span style={{color: '#008000'}}>onFinish</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>onFinish</span>(<span style={{color: '#FF8000'}}>onFinish</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## onParallel

---

#### <span style={{color: '#008000'}}>onParallel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>onParallel</span>(<span style={{color: '#FF8000'}}>onParallel</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## output

---

#### <span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## outputLineConsumer

---

#### <span style={{color: '#008000'}}>outputLineConsumer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>
##### Return

( _java.util.function.Consumer_ )


---

#### <span style={{color: '#008000'}}>outputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## outputStream

---

#### <span style={{color: '#008000'}}>outputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

#### <span style={{color: '#008000'}}>outputStream</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readErrorOutput

---

#### <span style={{color: '#008000'}}>readErrorOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>readErrorOutput</span>(<span style={{color: '#FF8000'}}>readErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## readOutput

---

#### <span style={{color: '#008000'}}>readOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>readOutput</span>(<span style={{color: '#FF8000'}}>readOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## redirectErrorStream

---

#### <span style={{color: '#008000'}}>redirectErrorStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>redirectErrorStream</span>(<span style={{color: '#FF8000'}}>redirectErrorStream</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAutoCloseOutputStreams

---

#### <span style={{color: '#008000'}}>setAutoCloseOutputStreams</span>(<span style={{color: '#FF8000'}}>autoCloseOutputStreams</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **autoCloseOutputStreams** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setAwait

---

#### <span style={{color: '#008000'}}>setAwait</span>(<span style={{color: '#FF8000'}}>wait</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **wait** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setDirectory

---

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
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

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
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

#### <span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
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

#### <span style={{color: '#008000'}}>setEnv</span>(<span style={{color: '#FF8000'}}>env</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **env** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorOutput

---

#### <span style={{color: '#008000'}}>setErrorOutput</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputLineConsumer

---

#### <span style={{color: '#008000'}}>setErrorOutputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setErrorOutputStream

---

#### <span style={{color: '#008000'}}>setErrorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

#### <span style={{color: '#008000'}}>setErrorOutputStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setErrorStream

---

#### <span style={{color: '#008000'}}>setErrorStream</span>(<span style={{color: '#FF8000'}}>err</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **err** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setExitDelay

---

#### <span style={{color: '#008000'}}>setExitDelay</span>(<span style={{color: '#FF8000'}}>timeLimit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritErrorOutput

---

#### <span style={{color: '#008000'}}>setInheritErrorOutput</span>(<span style={{color: '#FF8000'}}>inheritErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setInheritOutput

---

#### <span style={{color: '#008000'}}>setInheritOutput</span>(<span style={{color: '#FF8000'}}>inheritOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inheritOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOnFinish

---

#### <span style={{color: '#008000'}}>setOnFinish</span>(<span style={{color: '#FF8000'}}>onFinish</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$Result&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onFinish** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOnParallel

---

#### <span style={{color: '#008000'}}>setOnParallel</span>(<span style={{color: '#FF8000'}}>onParallel</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;org.netuno.psamata.os.ProcessLauncher$ParallelThread&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **onParallel** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutput

---

#### <span style={{color: '#008000'}}>setOutput</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setOutputLineConsumer

---

#### <span style={{color: '#008000'}}>setOutputLineConsumer</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setOutputStream

---

#### <span style={{color: '#008000'}}>setOutputStream</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadErrorOutput

---

#### <span style={{color: '#008000'}}>setReadErrorOutput</span>(<span style={{color: '#FF8000'}}>readErrorOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readErrorOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setReadOutput

---

#### <span style={{color: '#008000'}}>setReadOutput</span>(<span style={{color: '#FF8000'}}>readOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readOutput** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setRedirectErrorStream

---

#### <span style={{color: '#008000'}}>setRedirectErrorStream</span>(<span style={{color: '#FF8000'}}>redirectErrorStream</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **redirectErrorStream** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShell

---

#### <span style={{color: '#008000'}}>setShell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shell** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellCommand

---

#### <span style={{color: '#008000'}}>setShellCommand</span>(<span style={{color: '#FF8000'}}>shellCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setShellParameter

---

#### <span style={{color: '#008000'}}>setShellParameter</span>(<span style={{color: '#FF8000'}}>shellParameter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## setTimeLimit

---

#### <span style={{color: '#008000'}}>setTimeLimit</span>(<span style={{color: '#FF8000'}}>timeLimit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.os.ProcessLauncher</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Return

( _org.netuno.psamata.os.ProcessLauncher_ )


---

## setWaitFor

---

#### <span style={{color: '#008000'}}>setWaitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **waitFor** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shell

---

#### <span style={{color: '#008000'}}>shell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>shell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shell** | _boolean_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellCommand

---

#### <span style={{color: '#008000'}}>shellCommand</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>shellCommand</span>(<span style={{color: '#FF8000'}}>shellCommand</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellCommand** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## shellParameter

---

#### <span style={{color: '#008000'}}>shellParameter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>shellParameter</span>(<span style={{color: '#FF8000'}}>shellParameter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shellParameter** | _string_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## timeLimit

---

#### <span style={{color: '#008000'}}>timeLimit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Return

( _long_ )


---

#### <span style={{color: '#008000'}}>timeLimit</span>(<span style={{color: '#FF8000'}}>timeLimit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeLimit** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## waitFor

---

#### <span style={{color: '#008000'}}>waitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Return

( _long_ )


---

#### <span style={{color: '#008000'}}>waitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **waitFor** | _long_ |   |

##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

