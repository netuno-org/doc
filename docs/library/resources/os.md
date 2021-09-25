---
id: os
title: OS
sidebar_label: OS
---

Performs the execution of commands in the operating system, manipulation of files and folders.

---

## command

---

#### _os.command(command: _String[]_) : _[OSCommand](../../objects/OSCommand)_
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | _String[]_ | The command and optional parameters that will be executed. |

##### Return

( _[OSCommand](../../objects/OSCommand)_ )

Result of executing the command in the operating system, including the output.

---

#### _os.command(command: _List_) : _[OSCommand](../../objects/OSCommand)_
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | _List_ | The command and optional parameters that will be executed. |

##### Return

( _[OSCommand](../../objects/OSCommand)_ )

Result of executing the command in the operating system, including the output.

---

#### _os.command(command: _[Values](../../objects/Values)_) : _[OSCommand](../../objects/OSCommand)_
##### Description

Executes a command in the operating system and obtains the result of the execution, the first item is the command and the following are parameters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | _[Values](../../objects/Values)_ | The command and optional parameters that will be executed. |

##### Return

( _[OSCommand](../../objects/OSCommand)_ )

Result of executing the command in the operating system, including the output.

---

## directory

---

#### _os.directory() : string
##### Description

Gets the path where the commands will be executed.

##### Return

( string )

The location where the command will be executed.

---

#### _os.directory(directory: string) : _OS_
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| directory | string | The location where the command will be executed. |

##### Return

( _OS_ )

Instance of the operating system resource.

---

#### _os.directory(directory: _[File](../../objects/File)_) : _OS_
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| directory | _[File](../../objects/File)_ | The location where the command will be executed. |

##### Return

( _OS_ )

Instance of the operating system resource.

---

#### _os.directory(directory: _Storage_) : _OS_
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| directory | _Storage_ | The location where the command will be executed. |

##### Return

( _OS_ )

Instance of the operating system resource.

---

## file

---

#### _os.file(path: string) : _[File](../../objects/File)_
##### Description

Gets the object of manipulation of files and folders relative to the passed path, in this case the path must be a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **file**.

---

## folder

---

#### _os.folder(path: string) : _[File](../../objects/File)_
##### Description

Gets the object of manipulation of folders and files relative to the passed path, in this case the path must be a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **folder**.

---

## getDirectory

---

#### _os.getDirectory() : string
##### Description

Gets the path where the commands will be executed.

##### Return

( string )

The location where the command will be executed.

---

## getFile

---

#### _os.getFile(path: string) : _[File](../../objects/File)_
##### Description

Gets the object of manipulation of files and folders relative to the passed path, in this case the path must be a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **file**.

---

## getFolder

---

#### _os.getFolder(path: string) : _[File](../../objects/File)_
##### Description

Gets the object of manipulation of folders and files relative to the passed path, in this case the path must be a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](../../objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **folder**.

---

## getName

---

#### _os.getName() : string
##### Description

Gets the name of the operating system.

##### Return

( string )

The name of the operating system.

---

## getWaitFor

---

#### _os.getWaitFor() : _long_
##### Return

( _long_ )


---

## init

---

#### _os.init() : _OS_
##### Description

Starts a new instance of the OS.

##### Return

( _OS_ )

The new instance of the OS resource.

---

## isFile

---

#### _os.isFile(arg0: string) : _boolean_
##### Description

Checks whether the path is a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )

Whether or not it is a **file**.

---

## isFolder

---

#### _os.isFolder(arg0: string) : _boolean_
##### Description

Checks whether the path is a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )

Whether or not it is a **folder**.

---

## isLinux

---

#### _os.isLinux() : _boolean_
##### Description

Checks whether the operating system is Linux.

##### Return

( _boolean_ )

Whether or not the operating system Linux.

---

## isMac

---

#### _os.isMac() : _boolean_
##### Description

Checks whether the operating system is Mac OS X.

##### Return

( _boolean_ )

Whether or not the operating system Mac OS X.

---

## isOS

---

#### _os.isOS(osType: string) : _boolean_
##### Description

Checks the operating system based on the past name which can be Linux, Mac or Windows.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| osType | string | The type of operating system that can be Linux, Mac, or Windows. |

##### Return

( _boolean_ )

Whether or not the operating system is indicated.

---

## isReadCommandError

---

#### _os.isReadCommandError() : _boolean_
##### Return

( _boolean_ )


---

## isReadCommandOutput

---

#### _os.isReadCommandOutput() : _boolean_
##### Return

( _boolean_ )


---

## isWindows

---

#### _os.isWindows() : _boolean_
##### Description

Checks whether the operating system is Windows.

##### Return

( _boolean_ )

Whether or not the operating system Windows.

---

## name

---

#### _os.name() : string
##### Description

Gets the name of the operating system.

##### Return

( string )

The name of the operating system.

---

## readCommandError

---

#### _os.readCommandError() : _boolean_
##### Return

( _boolean_ )


---

#### _os.readCommandError(arg0: _boolean_) : _OS_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _OS_ )


---

## readCommandOutput

---

#### _os.readCommandOutput() : _boolean_
##### Return

( _boolean_ )


---

#### _os.readCommandOutput(arg0: _boolean_) : _OS_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _OS_ )


---

## setDirectory

---

#### _os.setDirectory(directory: string) : _OS_
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| directory | string | The location where the command will be executed. |

##### Return

( _OS_ )

Instance of the operating system resource.

---

#### _os.setDirectory(directory: _[File](../../objects/File)_) : _OS_
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| directory | _[File](../../objects/File)_ | The location where the command will be executed. |

##### Return

( _OS_ )

Instance of the operating system resource.

---

#### _os.setDirectory(directory: _Storage_) : _OS_
##### Description

Defines the path where the commands will be executed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| directory | _Storage_ | The location where the command will be executed. |

##### Return

( _OS_ )

Instance of the operating system resource.

---

## setReadCommandError

---

#### _os.setReadCommandError(arg0: _boolean_) : _OS_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _OS_ )


---

## setReadCommandOutput

---

#### _os.setReadCommandOutput(arg0: _boolean_) : _OS_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _OS_ )


---

## setWaitFor

---

#### _os.setWaitFor(arg0: _long_) : _OS_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _OS_ )


---

## waitFor

---

#### _os.waitFor() : _long_
##### Return

( _long_ )


---

#### _os.waitFor(arg0: _long_) : _OS_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _OS_ )


---

