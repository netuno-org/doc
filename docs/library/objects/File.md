---
id: File
title: File
sidebar_label: File
---

O objeto File é utilizado para interagir com ficheiros e pastas.

---

## available

---

#### <span style="color: #008000">available</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _int_ )


---

## baseName

---

#### <span style="color: #008000">baseName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## bufferedReader

---

#### <span style="color: #008000">bufferedReader</span>() : <span style="font-weight: normal; font-style: italic;">java.io.BufferedReader</span>
##### Return

( _java.io.BufferedReader_ )


---

#### <span style="color: #008000">bufferedReader</span>(<span style="color: #FF8000">bufferSize</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.io.BufferedReader</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bufferSize** | _int_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### <span style="color: #008000">bufferedReader</span>(<span style="color: #FF8000">bufferSize</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.io.BufferedReader</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _string_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### <span style="color: #008000">bufferedReader</span>(<span style="color: #FF8000">bufferSize</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">java.nio.charset.Charset</span>) : <span style="font-weight: normal; font-style: italic;">java.io.BufferedReader</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### <span style="color: #008000">bufferedReader</span>(<span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.io.BufferedReader</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### <span style="color: #008000">bufferedReader</span>(<span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">java.nio.charset.Charset</span>) : <span style="font-weight: normal; font-style: italic;">java.io.BufferedReader</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _java.io.BufferedReader_ )


---

## bytes

---

#### <span style="color: #008000">bytes</span>() : <span style="font-weight: normal; font-style: italic;">byte[]</span>
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _byte[]_ )


---

## contentType

---

#### <span style="color: #008000">contentType</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

#### <span style="color: #008000">contentType</span>(<span style="color: #FF8000">contentType</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **contentType** | _string_ |   |

##### Return

( _[File](../../objects/File)_ )


---

## copy

---

#### <span style="color: #008000">copy</span>(<span style="color: #FF8000">destPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Copies the file to the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **destPath** | _string_ | Path where to copy the file/directory. |

##### Return

( _boolean_ )


---

#### <span style="color: #008000">copy</span>(<span style="color: #FF8000">destPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">override</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Copies the file of the inserted path with override option if exists a file

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **destPath** | _string_ | Path where to copy the file/directory. |
| **override** | _boolean_ | Override if exists a file already. |

##### Return

( _boolean_ )


---

## copyFiles

---

#### <span style="color: #008000">copyFiles</span>(<span style="color: #FF8000">destPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">extension</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Copies the files by the inserted extension to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **destPath** | _string_ | Path where to copy the file/directory. |
| **extension** | _string_ | File extension. |

##### Return

( _boolean_ )


---

## delete

---

#### <span style="color: #008000">delete</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Deletes the file of the inserted file

##### Return

( _boolean_ )


---

## deleteAll

---

#### <span style="color: #008000">deleteAll</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Deletes a file/directory and recursive all the subs

##### Return

( _boolean_ )


---

#### <span style="color: #008000">deleteAll</span>(<span style="color: #FF8000">extension</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Deletes a file/directory by the file extension

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **extension** | _string_ |   |

##### Return

( _boolean_ )


---

## deleteFiles

---

#### <span style="color: #008000">deleteFiles</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Deletes a file/directory and recursive all the subs

##### Return

( _boolean_ )


---

#### <span style="color: #008000">deleteFiles</span>(<span style="color: #FF8000">stringExtension</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Deletes a file of a inserted extension and recursive all the subs

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **stringExtension** | _string_ | String extension of the file. |

##### Return

( _boolean_ )


---

## ensureJail

---

#### <span style="color: #008000">ensureJail</span>(<span style="color: #FF8000">jailPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **jailPath** | _string_ |   |

##### Return

( _[File](../../objects/File)_ )


---

## exists

---

#### <span style="color: #008000">exists</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Returns a boolean result that verify if the inserted path exists

##### Return

( _boolean_ )


---

## extension

---

#### <span style="color: #008000">extension</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## fullPath

---

#### <span style="color: #008000">fullPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Allows to get the complete path of the file.

##### Return

( _string_ )


---

## getBaseName

---

#### <span style="color: #008000">getBaseName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the base name of the present file

##### Return

( _string_ )


---

## getBytes

---

#### <span style="color: #008000">getBytes</span>() : <span style="font-weight: normal; font-style: italic;">byte[]</span>
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _byte[]_ )


---

## getContentType

---

#### <span style="color: #008000">getContentType</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getExtension

---

#### <span style="color: #008000">getExtension</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getFullPath

---

#### <span style="color: #008000">getFullPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the full path until the present file

##### Return

( _string_ )


---

## getInput

---

#### <span style="color: #008000">getInput</span>() : <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>
##### Return

( _[InputStream](../../objects/InputStream)_ )


---

## getInputStream

---

#### <span style="color: #008000">getInputStream</span>() : <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>
##### Description

Returns the number of estimated bytes

##### Return

( _[InputStream](../../objects/InputStream)_ )


---

## getName

---

#### <span style="color: #008000">getName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of a file

##### Return

( _string_ )


---

#### <span style="color: #008000">getName</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of a file in the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Path to the file/directory. |

##### Return

( _string_ )


---

## getOutput

---

#### <span style="color: #008000">getOutput</span>() : <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>
##### Return

( _[OutputStream](../../objects/OutputStream)_ )


---

## getOutputStream

---

#### <span style="color: #008000">getOutputStream</span>() : <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>
##### Return

( _[OutputStream](../../objects/OutputStream)_ )


---

## getPath

---

#### <span style="color: #008000">getPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the path

##### Return

( _string_ )


---

## getPhysicalPath

---

#### <span style="color: #008000">getPhysicalPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getSequenceName

---

#### <span style="color: #008000">getSequenceName</span>(<span style="color: #FF8000">targetPath</span>: <span style="font-weight: normal; font-style: italic;">java.io.File</span>, <span style="color: #FF8000">fileName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of the inserted file with a sequence number if the file already exists with the original name

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **targetPath** | _java.io.File_ | Path to the file/directory. |
| **fileName** | _string_ | Name of the file. |

##### Return

( _string_ )


---

#### <span style="color: #008000">getSequenceName</span>(<span style="color: #FF8000">targetPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">fileName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of the inserted file with a sequence number if the file already exists with the original name

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **targetPath** | _string_ | Path to the file/directory. |
| **fileName** | _string_ | Name of the file. |

##### Return

( _string_ )


---

## input

---

#### <span style="color: #008000">input</span>() : <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>
##### Return

( _[InputStream](../../objects/InputStream)_ )


---

## inputStream

---

#### <span style="color: #008000">inputStream</span>() : <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>
##### Return

( _[InputStream](../../objects/InputStream)_ )


---

## isBaseName

---

#### <span style="color: #008000">isBaseName</span>(<span style="color: #FF8000">baseName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **baseName** | _string_ |   |

##### Return

( _boolean_ )


---

## isDirectory

---

#### <span style="color: #008000">isDirectory</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Returns a boolean result that verify if the inserted path is a directory

##### Return

( _boolean_ )


---

## isExtension

---

#### <span style="color: #008000">isExtension</span>(<span style="color: #FF8000">extension</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **extension** | _string_ |   |

##### Return

( _boolean_ )


---

## isFile

---

#### <span style="color: #008000">isFile</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Returns a boolean result that verify if the inserted path is a file

##### Return

( _boolean_ )


---

## isJail

---

#### <span style="color: #008000">isJail</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Does a authentication if the file has his location limited to another folder

##### Return

( _boolean_ )


---

## lastModified

---

#### <span style="color: #008000">lastModified</span>() : <span style="font-weight: normal; font-style: italic;">long</span>
##### Description

Returns the hour that the file of the inserted path was last modified

##### Return

( _long_ )


---

## list

---

#### <span style="color: #008000">list</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

Returns a list of all the files and directories on the inserted path

##### Return

( _java.util.List_ )


---

## mkdir

---

#### <span style="color: #008000">mkdir</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Creates a directory in the present path.

##### Return

( _boolean_ )


---

## mkdirs

---

#### <span style="color: #008000">mkdirs</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## name

---

#### <span style="color: #008000">name</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of a file

##### Return

( _string_ )


---

## output

---

#### <span style="color: #008000">output</span>() : <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>
##### Return

( _[OutputStream](../../objects/OutputStream)_ )


---

## outputStream

---

#### <span style="color: #008000">outputStream</span>() : <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>
##### Return

( _[OutputStream](../../objects/OutputStream)_ )


---

## path

---

#### <span style="color: #008000">path</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the path of the file/directory

##### Return

( _string_ )

Returns a boolean verification of the existence of the file and tracks it folder location.

---

## physicalPath

---

#### <span style="color: #008000">physicalPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Allows to get the path of the file.

##### Return

( _string_ )


---

## reader

---

#### <span style="color: #008000">reader</span>() : <span style="font-weight: normal; font-style: italic;">java.io.Reader</span>
##### Return

( _java.io.Reader_ )


---

## readerBOM

---

#### <span style="color: #008000">readerBOM</span>() : <span style="font-weight: normal; font-style: italic;">java.io.Reader</span>
##### Return

( _java.io.Reader_ )


---

#### <span style="color: #008000">readerBOM</span>(<span style="color: #FF8000">charsetName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.io.Reader</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charsetName** | _string_ |   |

##### Return

( _java.io.Reader_ )


---

## rename

---

#### <span style="color: #008000">rename</span>(<span style="color: #FF8000">newName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Renames a file with the new name inserted

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **newName** | _string_ | New name to rename the file. |

##### Return

( _boolean_ )


---

## renameTo

---

#### <span style="color: #008000">renameTo</span>(<span style="color: #FF8000">destPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Renames the file of the inserted file

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **destPath** | _string_ | Path to the file/directory. |

##### Return

( _boolean_ )


---

## save

---

#### <span style="color: #008000">save</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Saves the file in the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.lang.Object_ | Path of the file. |

##### Return

( _void_ )


---

#### <span style="color: #008000">save</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Saves the file in the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Path where to save the file. |

##### Return

( _void_ )


---

## sequenceName

---

#### <span style="color: #008000">sequenceName</span>(<span style="color: #FF8000">targetPath</span>: <span style="font-weight: normal; font-style: italic;">java.io.File</span>, <span style="color: #FF8000">fileName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **targetPath** | _java.io.File_ |   |
| **fileName** | _string_ |   |

##### Return

( _string_ )


---

#### <span style="color: #008000">sequenceName</span>(<span style="color: #FF8000">targetPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">fileName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **targetPath** | _string_ |   |
| **fileName** | _string_ |   |

##### Return

( _string_ )


---

## setContentType

---

#### <span style="color: #008000">setContentType</span>(<span style="color: #FF8000">contentType</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **contentType** | _string_ |   |

##### Return

( _[File](../../objects/File)_ )


---

## writer

---

#### <span style="color: #008000">writer</span>() : <span style="font-weight: normal; font-style: italic;">java.io.Writer</span>
##### Return

( _java.io.Writer_ )


---

