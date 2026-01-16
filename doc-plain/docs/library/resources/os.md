---
id: os
title: OS
sidebar_label: OS
---

Performs the execution of commands in the operating system, manipulation of files and folders.

---

## file

---

#### _os.file(path: string) : [File](/docs/library/objects/File)
##### Description

Gets the object of manipulation of files and folders relative to the passed path, in this case the path must be a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](/docs/library/objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **file**.

---

## folder

---

#### _os.folder(path: string) : [File](/docs/library/objects/File)
##### Description

Gets the object of manipulation of folders and files relative to the passed path, in this case the path must be a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](/docs/library/objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **folder**.

---

## getFile

---

#### _os.getFile(path: string) : [File](/docs/library/objects/File)
##### Description

Gets the object of manipulation of files and folders relative to the passed path, in this case the path must be a **file**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](/docs/library/objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **file**.

---

## getFolder

---

#### _os.getFolder(path: string) : [File](/docs/library/objects/File)
##### Description

Gets the object of manipulation of folders and files relative to the passed path, in this case the path must be a **folder**.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | The path of **folder** that the manipulation object should obtain. |

##### Return

( _[File](/docs/library/objects/File)_ )

Instance of the file and folder manipulation object relative to the passed path, in this case a **folder**.

---

## getName

---

#### _os.getName() : string
##### Description

Gets the name of the operating system.

##### Return

( _string_ )

The name of the operating system.

---

## init

---

#### _os.init() : [OS](/docs/library/resources/os)
##### Description

Starts a new instance of the OS.

##### Return

( _[OS](/docs/library/resources/os)_ )

The new instance of the OS resource.

---

## initProcess

---

#### _os.initProcess() : [ProcessLauncher](/docs/library/objects/ProcessLauncher)
##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


---

## isFile

---

#### _os.isFile(path: string) : boolean
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

#### _os.isFolder(path: string) : boolean
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

#### _os.isLinux() : boolean
##### Description

Checks whether the operating system is Linux.

##### Return

( _boolean_ )

Whether or not the operating system Linux.

---

## isMac

---

#### _os.isMac() : boolean
##### Description

Checks whether the operating system is Mac OS X.

##### Return

( _boolean_ )

Whether or not the operating system Mac OS X.

---

## isOS

---

#### _os.isOS(osType: string) : boolean
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

## isWindows

---

#### _os.isWindows() : boolean
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

( _string_ )

The name of the operating system.

---

