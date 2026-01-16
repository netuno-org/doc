---
id: storage
title: Storage
sidebar_label: Storage
---

Application file management resources that are located in the `storage` folder.

---

## absolutePath

---

#### _storage.absolutePath() : string
##### Description

Gets the absolute path to the storage being used.

##### Return

( _string_ )

The absolute storage path.

---

## database

---

#### _storage.database(table: string) : [Storage](/docs/library/resources/storage)
##### Description

Starts a new storage for the folder where the files of a table that represent a form are.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table that is also the name of the form. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the database table.

---

#### _storage.database(table: string, field: string) : [Storage](/docs/library/resources/storage)
##### Description

Starts a new storage for the folder where the files of a specific column of a table are located that represents a field of a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table that is also the name of the form. |
| **field** | _string_ | Column name which is also the same as the field name on the form. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for a database table column.

---

#### _storage.database(table: string, field: string, path: string) : [Storage](/docs/library/resources/storage)
##### Description

Starts a new storage for a specific path where the files for a specific column of a table are located that represent a field on a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table that is also the name of the form. |
| **field** | _string_ | Column name which is also the same as the field name on the form. |
| **path** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from a column in a database table.

---

#### _storage.database(table: string, field: string, path: string, fileName: string) : [Storage](/docs/library/resources/storage)
##### Description

Starts a new storage for a specific path where the files for a specific column of a table are located that represent a field on a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table that is also the name of the form. |
| **field** | _string_ | Column name which is also the same as the field name on the form. |
| **path** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |
| **fileName** | _string_ | Possibility to add the file name separately if there is a very complex, very unusual path structure. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from a column in a database table.

---

## ensurePath

---

#### _storage.ensurePath() : [Storage](/docs/library/resources/storage)
##### Return

( _[Storage](/docs/library/resources/storage)_ )


---

## extension

---

#### _storage.extension() : string
##### Description

Gets the file extension.

##### Return

( _string_ )

The file extension.

---

## file

---

#### _storage.file() : [File](/docs/library/objects/File)
##### Description

File manipulation object of the storage being used.

##### Return

( _[File](/docs/library/objects/File)_ )

It allows to interact with the file physically.

---

## filesystem

---

#### _storage.filesystem(folder: string, path: string) : [Storage](/docs/library/resources/storage)
##### Description

Starts a new storage for a specific filesystem path within the storage.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **folder** | _string_ | Name of the folder inside the `storage/filesystem`, it will usually be public, private or server. |
| **path** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from the storage filesystem.

---

#### _storage.filesystem(folder: string, path: string, fileName: string) : [Storage](/docs/library/resources/storage)
##### Description

Starts a new storage for a specific filesystem path within the storage.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **folder** | _string_ | Name of the folder inside the `storage/filesystem`, it will usually be public, private or server. |
| **path** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |
| **fileName** | _string_ | Possibility to add the file name separately if there is a very complex path structure. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from the storage filesystem.

---

## folder

---

#### _storage.folder() : [File](/docs/library/objects/File)
##### Description

Folder manipulation object of the storage being used.

##### Return

( _[File](/docs/library/objects/File)_ )

It allows to interact with the folder physically.

---

## fullPath

---

#### _storage.fullPath() : string
##### Description

Gets the full path to the storage being used.

##### Return

( _string_ )

The full storage path.

---

## getBase

---

#### _storage.getBase() : string
##### Description

Gets the base path of the storage being used.

##### Return

( _string_ )

The base path of the storage.

---

## getInput

---

#### _storage.getInput() : [InputStream](/docs/library/objects/InputStream)
##### Description

Gets the input object from Netuno for the storage being used.

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )

Data input object from Netuno to the storage in use.

---

## getInputStream

---

#### _storage.getInputStream() : [InputStream](/docs/library/objects/InputStream)
##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getOutput

---

#### _storage.getOutput() : [OutputStream](/docs/library/objects/OutputStream)
##### Description

Gets the output object from Netuno for the storage being used.

##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Data output object from Netuno to the storage in use.

---

## getOutputStream

---

#### _storage.getOutputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## input

---

#### _storage.input() : [InputStream](/docs/library/objects/InputStream)
##### Description

Gets the input object from Netuno for the storage being used.

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )

Data input object from Netuno to the storage in use.

---

## inputStream

---

#### _storage.inputStream() : [InputStream](/docs/library/objects/InputStream)
##### Description

Gets the Java input object for the storage being used.

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )

Java data input object for the storage in use.

---

## isDatabase

---

#### _storage.isDatabase() : boolean
##### Description

Whether storage is defined in the database folder.

##### Return

( _boolean_ )

If you are using the database folder.

---

## isExtension

---

#### _storage.isExtension(charset: string) : boolean
##### Description

Checks whether the file name contains the extension.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ | File name extension. |

##### Return

( _boolean_ )

Whether the file contains the defined extension.

---

## isFile

---

#### _storage.isFile() : boolean
##### Description

Checks whether it is a file.

##### Return

( _boolean_ )

If it is a file.

---

## isFileSystem

---

#### _storage.isFileSystem() : boolean
##### Description

Whether storage is defined in the filesystem folder.

##### Return

( _boolean_ )

If you are using the filesystem folder.

---

## isFileSystemPrivate

---

#### _storage.isFileSystemPrivate() : boolean
##### Description

Whether storage is defined in the filesystem's private folder.

##### Return

( _boolean_ )

If you are using the filesystem's private folder.

---

## isFileSystemPublic

---

#### _storage.isFileSystemPublic() : boolean
##### Description

Whether storage is defined in the filesystem's public folder.

##### Return

( _boolean_ )

If you are using the filesystem's public folder.

---

## isFileSystemServer

---

#### _storage.isFileSystemServer() : boolean
##### Description

Whether storage is defined in the filesystem's server folder.

##### Return

( _boolean_ )

If you are using the filesystem server folder.

---

## isFolder

---

#### _storage.isFolder() : boolean
##### Description

Checks whether it is a folder.

##### Return

( _boolean_ )

If it is a folder.

---

## newRandomFile

---

#### _storage.newRandomFile(charset: string) : [Storage](/docs/library/resources/storage)
##### Description

Generates a new storage from the current storage but for a file with a random name that does not yet exist and thus can be saved without conflicts.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ | File name extension. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage for a new file with a non-existent random name.

---

## output

---

#### _storage.output() : [OutputStream](/docs/library/objects/OutputStream)
##### Description

Gets the output object from Netuno for the storage being used.

##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Data output object from Netuno to the storage in use.

---

## outputStream

---

#### _storage.outputStream() : [OutputStream](/docs/library/objects/OutputStream)
##### Description

Gets the Java output object for the storage being used.

##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Java data output object for the storage in use.

---

## path

---

#### _storage.path() : string
##### Description

Gets the path of the storage being used.

##### Return

( _string_ )

The path of the storage.

---

## reader

---

#### _storage.reader() : java.io.Reader
##### Description

Gets the input object as Java text for the storage being used.

##### Return

( _java.io.Reader_ )

Input object as Java text for the storage in use.

---

## readerBOM

---

#### _storage.readerBOM() : java.io.Reader
##### Description

Gets the data entry object as BOM text (byte order mark) from Java for the storage being used.

##### Return

( _java.io.Reader_ )

Java text input object (_BOM_) for the storage in use.

---

#### _storage.readerBOM(charset: string) : java.io.Reader
##### Description

Gets the data entry object as BOM text (byte order mark) from Java for the storage being used.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ | Character encoding type code such as: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Return

( _java.io.Reader_ )

Java text input object (_BOM_) for the storage in use.

---

## saveFile

---

#### _storage.saveFile(file: [File](/docs/library/objects/File)) : void
##### Description

Save the file in the current storage path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | File that will be saved in the current storage. |

##### Return

( _void_ )


---

## setBase

---

#### _storage.setBase(base: string) : boolean
##### Description

Defines the base path of the storage to be used.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **base** | _string_ | The base path of the storage. |

##### Return

( _boolean_ )

Whether the path is valid and has been defined.

---

## url

---

#### _storage.url() : string
##### Description

Gets the URL of the storage being used.

##### Return

( _string_ )

The URL for the storage.

---

## writer

---

#### _storage.writer() : java.io.Writer
##### Description

Gets the output object as Java text for the storage being used.

##### Return

( _java.io.Writer_ )

Output object as Java text for the storage in use.

---

