---
id: SSHFile
title: SSHFile
sidebar_label: SSHFile
---

Dados de um ficheiro via SSH.

---

## getName

---

#### getName() : string
##### Description

Returns the file name.

##### Return

( _string_ )

The file name.

---

## getParent

---

#### getParent() : string
##### Description

Returns parent name of the file.

##### Return

( _string_ )

The parent name of the file.

---

## getPath

---

#### getPath() : string
##### Description

Returns path of the file.

##### Return

( _string_ )

Path of the file.

---

## isDirectory

---

#### isDirectory() : boolean
##### Description

Returns whether it is a directory.

##### Return

( _boolean_ )

Whether it is a directory or not.

---

## isRegularFile

---

#### isRegularFile() : boolean
##### Description

Returns whether it is a regular file, that is, it is not a directory, symbolic link or any other type of special file.

##### Return

( _boolean_ )

Whether it is a regular file or not.

---

## setDirectory

---

#### setDirectory(directory: boolean) : void
##### Description

Defines whether it is a directory.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _boolean_ | Whether or not it is a directory. |

##### Return

( _void_ )


---

## setName

---

#### setName(name: string) : void
##### Description

Defines the file name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Name to be defined. |

##### Return

( _void_ )


---

## setParent

---

#### setParent(parentName: string) : void
##### Description

Defines the parent name of the file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **parentName** | _string_ | Parent name to be defined. |

##### Return

( _void_ )


---

## setPath

---

#### setPath(path: string) : void
##### Description

Defines the path of the file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Path to be defined. |

##### Return

( _void_ )


---

## setRegularFile

---

#### setRegularFile(directory: boolean) : void
##### Description

Defines whether it is a regular file, that is, it is not a directory, symbolic link or any other type of special file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _boolean_ | Whether or not it is a regular file. |

##### Return

( _void_ )


---

