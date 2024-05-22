---
id: SSHFile
title: SSHFile
sidebar_label: SSHFile
---

Dados de um ficheiro via SSH.

---

## getName

---

#### <span style="color: #008000">getName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the file name.

##### Return

( _string_ )

The file name.

---

## getParent

---

#### <span style="color: #008000">getParent</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns parent name of the file.

##### Return

( _string_ )

The parent name of the file.

---

## getPath

---

#### <span style="color: #008000">getPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns path of the file.

##### Return

( _string_ )

Path of the file.

---

## isDirectory

---

#### <span style="color: #008000">isDirectory</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Returns whether it is a directory.

##### Return

( _boolean_ )

Whether it is a directory or not.

---

## isRegularFile

---

#### <span style="color: #008000">isRegularFile</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Returns whether it is a regular file, that is, it is not a directory, symbolic link or any other type of special file.

##### Return

( _boolean_ )

Whether it is a regular file or not.

---

## setDirectory

---

#### <span style="color: #008000">setDirectory</span>(<span style="color: #FF8000">directory</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="color: #008000">setName</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="color: #008000">setParent</span>(<span style="color: #FF8000">parentName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="color: #008000">setPath</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="color: #008000">setRegularFile</span>(<span style="color: #FF8000">directory</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Defines whether it is a regular file, that is, it is not a directory, symbolic link or any other type of special file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **directory** | _boolean_ | Whether or not it is a regular file. |

##### Return

( _void_ )


---

