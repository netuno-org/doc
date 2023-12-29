---
id: File
title: File
sidebar_label: File
---

O objeto File é utilizado para interagir com ficheiros e pastas.

---

## available

---

#### available() : _int_
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _int_ )


---

## baseName

---

#### baseName() : string
##### Return

( string )


---

## bufferedReader

---

#### bufferedReader() : _java.io.BufferedReader_
##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _int_) : _java.io.BufferedReader_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _int_, arg1: string) : _java.io.BufferedReader_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _int_, arg1: _java.nio.charset.Charset_) : _java.io.BufferedReader_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.nio.charset.Charset_ |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: string) : _java.io.BufferedReader_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.io.BufferedReader_ )


---

#### bufferedReader(arg0: _java.nio.charset.Charset_) : _java.io.BufferedReader_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.nio.charset.Charset_ |   |

##### Return

( _java.io.BufferedReader_ )


---

## bytes

---

#### bytes() : _[B_
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _[B_ )


---

## contentType

---

#### contentType() : string
##### Return

( string )


---

## copy

---

#### copy(destPath: string) : _boolean_
##### Description

Copies the file to the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| destPath | string | Path where to copy the file/directory. |

##### Return

( _boolean_ )


---

#### copy(destPath: string, override: _boolean_) : _boolean_
##### Description

Copies the file of the inserted path with override option if exists a file

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| destPath | string | Path where to copy the file/directory. |
| override | _boolean_ | Override if exists a file already. |

##### Return

( _boolean_ )


---

## copyFiles

---

#### copyFiles(destPath: string, extension: string) : _boolean_
##### Description

Copies the files by the inserted extension to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| destPath | string | Path where to copy the file/directory. |
| extension | string | File extension. |

##### Return

( _boolean_ )


---

## delete

---

#### delete() : _boolean_
##### Description

Deletes the file of the inserted file

##### Return

( _boolean_ )


---

## deleteAll

---

#### deleteAll() : _boolean_
##### Description

Deletes a file/directory and recursive all the subs

##### Return

( _boolean_ )


---

#### deleteAll(arg0: string) : _boolean_
##### Description

Deletes a file/directory by the file extension

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## deleteFiles

---

#### deleteFiles() : _boolean_
##### Description

Deletes a file/directory and recursive all the subs

##### Return

( _boolean_ )


---

#### deleteFiles(stringExtension: string) : _boolean_
##### Description

Deletes a file of a inserted extension and recursive all the subs

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| stringExtension | string | String extension of the file. |

##### Return

( _boolean_ )


---

## ensureJail

---

#### ensureJail(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## exists

---

#### exists() : _boolean_
##### Description

Returns a boolean result that verify if the inserted path exists

##### Return

( _boolean_ )


---

## extension

---

#### extension() : string
##### Return

( string )


---

## fullPath

---

#### fullPath() : string
##### Description

Allows to get the complete path of the file.

##### Return

( string )


---

## getBaseName

---

#### getBaseName() : string
##### Description

Returns the base name of the present file

##### Return

( string )


---

## getBytes

---

#### getBytes() : _[B_
##### Description

Returns the number of estimated bytes left to read a file

##### Return

( _[B_ )


---

## getContentType

---

#### getContentType() : string
##### Return

( string )


---

## getExtension

---

#### getExtension() : string
##### Return

( string )


---

## getFullPath

---

#### getFullPath() : string
##### Description

Returns the full path until the present file

##### Return

( string )


---

## getInputStream

---

#### getInputStream() : _java.io.InputStream_
##### Description

Returns the number of estimated bytes

##### Return

( _java.io.InputStream_ )


---

## getName

---

#### getName() : string
##### Description

Returns the name of a file

##### Return

( string )


---

#### getName(path: string) : string
##### Description

Returns the name of a file in the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Path to the file/directory. |

##### Return

( string )


---

## getOutputStream

---

#### getOutputStream() : _java.io.OutputStream_
##### Return

( _java.io.OutputStream_ )


---

## getPath

---

#### getPath() : string
##### Description

Returns the path

##### Return

( string )


---

## getPhysicalPath

---

#### getPhysicalPath() : string
##### Return

( string )


---

## getSequenceName

---

#### getSequenceName(targetPath: _java.io.File_, fileName: string) : string
##### Description

Returns the name of the inserted file with a sequence number if the file already exists with the original name

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| targetPath | _java.io.File_ | Path to the file/directory. |
| fileName | string | Name of the file. |

##### Return

( string )


---

#### getSequenceName(targetPath: string, fileName: string) : string
##### Description

Returns the name of the inserted file with a sequence number if the file already exists with the original name

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| targetPath | string | Path to the file/directory. |
| fileName | string | Name of the file. |

##### Return

( string )


---

## input

---

#### input() : _[InputStream](../../objects/InputStream)_
##### Return

( _[InputStream](../../objects/InputStream)_ )


---

## inputStream

---

#### inputStream() : _java.io.InputStream_
##### Return

( _java.io.InputStream_ )


---

## isBaseName

---

#### isBaseName(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## isDirectory

---

#### isDirectory() : _boolean_
##### Description

Returns a boolean result that verify if the inserted path is a directory

##### Return

( _boolean_ )


---

## isExtension

---

#### isExtension(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## isFile

---

#### isFile() : _boolean_
##### Description

Returns a boolean result that verify if the inserted path is a file

##### Return

( _boolean_ )


---

## isJail

---

#### isJail() : _boolean_
##### Description

Does a authentication if the file has his location limited to another folder

##### Return

( _boolean_ )


---

## lastModified

---

#### lastModified() : _long_
##### Description

Returns the hour that the file of the inserted path was last modified

##### Return

( _long_ )


---

## list

---

#### list() : _java.util.List_
##### Description

Returns a list of all the files and directories on the inserted path

##### Return

( _java.util.List_ )


---

## mkdir

---

#### mkdir() : _boolean_
##### Description

Creates a directory in the present path.

##### Return

( _boolean_ )


---

## mkdirs

---

#### mkdirs() : _boolean_
##### Return

( _boolean_ )


---

## name

---

#### name() : string
##### Description

Returns the name of a file

##### Return

( string )


---

## output

---

#### output() : _[OutputStream](../../objects/OutputStream)_
##### Return

( _[OutputStream](../../objects/OutputStream)_ )


---

## outputStream

---

#### outputStream() : _java.io.OutputStream_
##### Return

( _java.io.OutputStream_ )


---

## path

---

#### path() : string
##### Description

Returns the path of the file/directory

##### Return

( string )

Returns a boolean verification of the existence of the file and tracks it folder location.

---

## physicalPath

---

#### physicalPath() : string
##### Description

Allows to get the path of the file.

##### Return

( string )


---

## reader

---

#### reader() : _java.io.Reader_
##### Return

( _java.io.Reader_ )


---

## readerBOM

---

#### readerBOM() : _java.io.Reader_
##### Return

( _java.io.Reader_ )


---

#### readerBOM(arg0: string) : _java.io.Reader_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.io.Reader_ )


---

## rename

---

#### rename(newName: string) : _boolean_
##### Description

Renames a file with the new name inserted

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| newName | string | New name to rename the file. |

##### Return

( _boolean_ )


---

## renameTo

---

#### renameTo(destPath: string) : _boolean_
##### Description

Renames the file of the inserted file

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| destPath | string | Path to the file/directory. |

##### Return

( _boolean_ )


---

## save

---

#### save(path: _java.lang.Object_) : _void_
##### Description

Saves the file in the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | _java.lang.Object_ | Path of the file. |

##### Return

( _void_ )


---

#### save(path: string) : _void_
##### Description

Saves the file in the inserted path

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Path where to save the file. |

##### Return

( _void_ )


---

## sequenceName

---

#### sequenceName(arg0: _java.io.File_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.File_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### sequenceName(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

## writer

---

#### writer() : _java.io.Writer_
##### Return

( _java.io.Writer_ )


---

