---
id: os
title: OS
sidebar_label: OS
---

Performs the execution of commands in the operating system, manipulation of files and folders.

---

## command

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>command</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OSCommand](../objects/OSCommand)</span>
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _java.lang.String[]_ | The command and optional parameters that will be executed. |

##### Return

( _[OSCommand](../objects/OSCommand)_ )

Result of executing the command in the operating system, including the output.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>command</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OSCommand](../objects/OSCommand)</span>
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _java.util.List_ | The command and optional parameters that will be executed. |

##### Return

( _[OSCommand](../objects/OSCommand)_ )

Result of executing the command in the operating system, including the output.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>command</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OSCommand](../objects/OSCommand)</span>
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _[Values](../objects/Values)_ | The command and optional parameters that will be executed. |

##### Return

( _[OSCommand](../objects/OSCommand)_ )

Result of executing the command in the operating system, including the output.

---

## directory

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the path where the commands will be executed.

##### Return

( _string_ )

The location where the command will be executed.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _string_ | The location where the command will be executed. |

##### Return

( _[OS](../resources/os)_ )

Instance of the operating system resource.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[File](../objects/File)_ | The location where the command will be executed. |

##### Return

( _[OS](../resources/os)_ )

Instance of the operating system resource.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>directory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[Storage](../resources/storage)_ | The location where the command will be executed. |

##### Return

( _[OS](../resources/os)_ )

Instance of the operating system resource.

---

## env

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>env</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>env</span>(<span style={{color: '#FF8000'}}>env</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **env** | _[Values](../objects/Values)_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## file

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>file</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Description

Gets the object of manipulation of files and folders relative to the passed path, in this case the path must be a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **file**.

---

## folder

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>folder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Description

Gets the object of manipulation of folders and files relative to the passed path, in this case the path must be a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **folder**.

---

## getDirectory

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the path where the commands will be executed.

##### Return

( _string_ )

The location where the command will be executed.

---

## getEnv

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getEnv</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## getFile

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Description

Gets the object of manipulation of files and folders relative to the passed path, in this case the path must be a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **file**.

---

## getFolder

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFolder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Description

Gets the object of manipulation of folders and files relative to the passed path, in this case the path must be a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **folder**.

---

## getName

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the name of the operating system.

##### Return

( _string_ )

The name of the operating system.

---

## getShell

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getShell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## getWaitFor

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getWaitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Return

( _long_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Description

Starts a new instance of the OS.

##### Return

( _[OS](../resources/os)_ )

The new instance of the OS resource.

---

## isFile

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the path is a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _boolean_ )

Whether or not it is a **file**.

---

## isFolder

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isFolder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the path is a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _boolean_ )

Whether or not it is a **folder**.

---

## isLinux

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isLinux</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the operating system is Linux.

##### Return

( _boolean_ )

Whether or not the operating system Linux.

---

## isMac

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isMac</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the operating system is Mac OS X.

##### Return

( _boolean_ )

Whether or not the operating system Mac OS X.

---

## isOS

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isOS</span>(<span style={{color: '#FF8000'}}>osType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks the operating system based on the past name which can be Linux, Mac or Windows.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **osType** | _string_ | The type of operating system that can be Linux, Mac, or Windows. |

##### Return

( _boolean_ )

Whether or not the operating system is indicated.

---

## isReadCommandError

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isReadCommandError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isReadCommandOutput

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isReadCommandOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isWindows

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>isWindows</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the operating system is Windows.

##### Return

( _boolean_ )

Whether or not the operating system Windows.

---

## name

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the name of the operating system.

##### Return

( _string_ )

The name of the operating system.

---

## readCommandError

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandError</span>(<span style={{color: '#FF8000'}}>readCommandError</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readCommandError** | _boolean_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## readCommandOutput

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>readCommandOutput</span>(<span style={{color: '#FF8000'}}>readCommandOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readCommandOutput** | _boolean_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## setDirectory

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _string_ | The location where the command will be executed. |

##### Return

( _[OS](../resources/os)_ )

Instance of the operating system resource.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[File](../objects/File)_ | The location where the command will be executed. |

##### Return

( _[OS](../resources/os)_ )

Instance of the operating system resource.

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setDirectory</span>(<span style={{color: '#FF8000'}}>directory</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _[Storage](../resources/storage)_ | The location where the command will be executed. |

##### Return

( _[OS](../resources/os)_ )

Instance of the operating system resource.

---

## setEnv

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setEnv</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shell** | _[Values](../objects/Values)_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## setReadCommandError

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setReadCommandError</span>(<span style={{color: '#FF8000'}}>readCommandError</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readCommandError** | _boolean_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## setReadCommandOutput

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setReadCommandOutput</span>(<span style={{color: '#FF8000'}}>readCommandOutput</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **readCommandOutput** | _boolean_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## setShell

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setShell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shell** | _boolean_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## setWaitFor

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>setWaitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **waitFor** | _long_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## shell

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>shell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>shell</span>(<span style={{color: '#FF8000'}}>shell</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **shell** | _boolean_ |   |

##### Return

( _[OS](../resources/os)_ )


---

## waitFor

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>waitFor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Return

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>waitFor</span>(<span style={{color: '#FF8000'}}>waitFor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](../resources/os)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **waitFor** | _long_ |   |

##### Return

( _[OS](../resources/os)_ )


---

