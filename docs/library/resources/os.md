---
id: os
title: OS
sidebar_label: OS
---

Performs the execution of commands in the operating system, manipulation of files and folders.

---

## file

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>file</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>folder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getFolder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the name of the operating system.

##### Return

( _string_ )

The name of the operating system.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OS](/docs/library/resources/os)</span>
##### Description

Starts a new instance of the OS.

##### Return

( _[OS](/docs/library/resources/os)_ )

The new instance of the OS resource.

---

## initProcess

---

#### <span style={{fontWeight: 'normal'}}>_os</span>.<span style={{color: '#008000'}}>initProcess</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ProcessLauncher](/docs/library/objects/ProcessLauncher)</span>
##### Return

( _[ProcessLauncher](/docs/library/objects/ProcessLauncher)_ )


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

