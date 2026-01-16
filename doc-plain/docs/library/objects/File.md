---
id: File
title: File
sidebar_label: File
---

O objeto File é utilizado para interagir com ficheiros e pastas.

---

## available

---

#### available() : long
##### Description

Returns the number of bytes required to read the file.

##### Return

( _long_ )


---

## baseName

---

#### baseName() : string
##### Return

( _string_ )


---

## bufferedReader

---

#### bufferedReader() : java.io.BufferedReader
##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(bufferSize: int) : java.io.BufferedReader
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bufferSize** | _int_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(bufferSize: int, charset: string) : java.io.BufferedReader
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _string_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(bufferSize: int, charset: java.nio.charset.Charset) : java.io.BufferedReader
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bufferSize** | _int_ |   |
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(charset: string) : java.io.BufferedReader
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(charset: java.nio.charset.Charset) : java.io.BufferedReader
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _java.io.BufferedReader_ )


---

## bytes

---

#### bytes() : byte[]
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _byte[]_ )


---

## contentType

---

#### contentType() : string
##### Return

( _string_ )


---

#### contentType(contentType: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **contentType** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## copy

---

#### copy(destPath: string) : boolean
##### Description

Copies the file to the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **destPath** | _string_ | Path where to copy the file/directory. |

##### Return

( _boolean_ )


---

#### copy(destPath: string, override: boolean) : boolean
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

#### copyFiles(destPath: string, extension: string) : boolean
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

#### delete() : boolean
##### Description

Deletes the file of the inserted file

##### Return

( _boolean_ )


---

## deleteAll

---

#### deleteAll() : boolean
##### Description

Deletes a file/directory and recursive all the subs

##### Return

( _boolean_ )


---

#### deleteAll(extension: string) : boolean
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

#### deleteFiles() : boolean
##### Description

Deletes a file/directory and recursive all the subs

##### Return

( _boolean_ )


---

#### deleteFiles(stringExtension: string) : boolean
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

#### ensureJail(jailPath: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **jailPath** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## exists

---

#### exists() : boolean
##### Description

Returns a boolean result that verify if the inserted path exists

##### Return

( _boolean_ )


---

## extension

---

#### extension() : string
##### Return

( _string_ )


---

## fullPath

---

#### fullPath() : string
##### Description

Allows to get the complete path of the file.

##### Return

( _string_ )


---

## getBaseName

---

#### getBaseName() : string
##### Description

Returns the base name of the present file

##### Return

( _string_ )


---

## getBytes

---

#### getBytes() : byte[]
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _byte[]_ )


---

## getContentType

---

#### getContentType() : string
##### Return

( _string_ )


---

## getExtension

---

#### getExtension() : string
##### Return

( _string_ )


---

## getFullPath

---

#### getFullPath() : string
##### Description

Returns the full path until the present file

##### Return

( _string_ )


---

## getInput

---

#### getInput() : [InputStream](/docs/library/objects/InputStream)
##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getInputStream

---

#### getInputStream() : [InputStream](/docs/library/objects/InputStream)
##### Description

Returns the number of estimated bytes

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getName

---

#### getName() : string
##### Description

Returns the name of a file

##### Return

( _string_ )


---

#### getName(path: string) : string
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

#### getOutput() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getOutputStream

---

#### getOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## getPath

---

#### getPath() : string
##### Description

Returns the path

##### Return

( _string_ )


---

## getPhysicalPath

---

#### getPhysicalPath() : string
##### Return

( _string_ )


---

## getSequenceName

---

#### getSequenceName(targetPath: java.io.File, fileName: string) : string
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

#### getSequenceName(targetPath: string, fileName: string) : string
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

## inMemoryFile

---

#### inMemoryFile() : boolean
##### Return

( _boolean_ )


---

## input

---

#### input() : [InputStream](/docs/library/objects/InputStream)
##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## inputStream

---

#### inputStream() : [InputStream](/docs/library/objects/InputStream)
##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## isBaseName

---

#### isBaseName(baseName: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **baseName** | _string_ |   |

##### Return

( _boolean_ )


---

## isDirectory

---

#### isDirectory() : boolean
##### Description

Returns a boolean result that verify if the inserted path is a directory

##### Return

( _boolean_ )


---

## isExtension

---

#### isExtension(extension: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **extension** | _string_ |   |

##### Return

( _boolean_ )


---

## isFile

---

#### isFile() : boolean
##### Description

Returns a boolean result that verify if the inserted path is a file

##### Return

( _boolean_ )


---

## isInMemoryFile

---

#### isInMemoryFile() : boolean
##### Return

( _boolean_ )


---

## isJail

---

#### isJail() : boolean
##### Description

Does a authentication if the file has his location limited to another folder

##### Return

( _boolean_ )


---

## lastModified

---

#### lastModified() : long
##### Description

Returns the hour that the file of the inserted path was last modified

##### Return

( _long_ )


---

## list

---

#### list() : java.util.List
##### Description

Returns a list of all the files and directories on the inserted path

##### Return

( _java.util.List_ )


---

## mkdir

---

#### mkdir() : boolean
##### Description

Creates a directory in the present path.

##### Return

( _boolean_ )


---

## mkdirs

---

#### mkdirs() : boolean
##### Return

( _boolean_ )


---

## name

---

#### name() : string
##### Description

Returns the name of a file

##### Return

( _string_ )


---

## output

---

#### output() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## outputStream

---

#### outputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## path

---

#### path() : string
##### Description

Returns the path of the file/directory

##### Return

( _string_ )

Returns a boolean verification of the existence of the file and tracks it folder location.

---

## physicalPath

---

#### physicalPath() : string
##### Description

Allows to get the path of the file.

##### Return

( _string_ )


---

## reader

---

#### reader() : java.io.Reader
##### Return

( _java.io.Reader_ )


---

## readerBOM

---

#### readerBOM() : java.io.Reader
##### Return

( _java.io.Reader_ )


---

#### readerBOM(charsetName: string) : java.io.Reader
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charsetName** | _string_ |   |

##### Return

( _java.io.Reader_ )


---

## rename

---

#### rename(newName: string) : boolean
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

#### renameTo(destPath: string) : boolean
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

#### save(path: java.lang.Object) : void
##### Description

Saves the file in the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.lang.Object_ | Path of the file. |

##### Return

( _void_ )


---

#### save(path: string) : void
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

#### sequenceName(targetPath: java.io.File, fileName: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **targetPath** | _java.io.File_ |   |
| **fileName** | _string_ |   |

##### Return

( _string_ )


---

#### sequenceName(targetPath: string, fileName: string) : string
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

#### setContentType(contentType: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **contentType** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## size

---

#### size() : long
##### Return

( _long_ )


---

## sizeGB

---

#### sizeGB() : double
##### Return

( _double_ )


---

## sizeKB

---

#### sizeKB() : double
##### Return

( _double_ )


---

## sizeMB

---

#### sizeMB() : double
##### Return

( _double_ )


---

## writer

---

#### writer() : java.io.Writer
##### Return

( _java.io.Writer_ )


---

