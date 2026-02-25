---
id: storage
title: Storage
sidebar_label: Storage
---

Application file management resources that are located in the `storage` folder.

---

## absolutePath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>absolutePath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the absolute path to the storage being used.

##### Return

( _string_ )

The absolute storage path.

---

## database

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subpath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Description

Starts a new storage for a specific path where the files for a specific column of a table are located that represent a field on a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table that is also the name of the form. |
| **field** | _string_ | Column name which is also the same as the field name on the form. |
| **subpath** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from a column in a database table.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subpath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Description

Starts a new storage for a specific path where the files for a specific column of a table are located that represent a field on a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ | Name of the table that is also the name of the form. |
| **field** | _string_ | Column name which is also the same as the field name on the form. |
| **subpath** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |
| **fileName** | _string_ | Possibility to add the file name separately if there is a very complex, very unusual path structure. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from a column in a database table.

---

## ensurePath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>ensurePath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Description

Ensures that the folder path exists in the storage; if it doesn't, it will be created.

##### Return

( _[Storage](/docs/library/resources/storage)_ )

The storage instance itself.

---

## extension

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>extension</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the file extension.

##### Return

( _string_ )

The file extension.

---

## file

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>file</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Description

Object for manipulating the file located in the storage being used.

##### Return

( _[File](/docs/library/objects/File)_ )

It allows to interact with the file physically.

---

## filesystem

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>filesystem</span>(<span style={{color: '#FF8000'}}>folder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subpath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Description

Starts a new storage for a specific filesystem path within the storage.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **folder** | _string_ | Name of the folder inside the `storage/filesystem`, it will usually be public, private or server. |
| **subpath** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from the storage filesystem.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>filesystem</span>(<span style={{color: '#FF8000'}}>folder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>subpath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Description

Starts a new storage for a specific filesystem path within the storage.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **folder** | _string_ | Name of the folder inside the `storage/filesystem`, it will usually be public, private or server. |
| **subpath** | _string_ | Relative additional path, usually the name of the file, but it can be a more complex path. |
| **fileName** | _string_ | Possibility to add the file name separately if there is a very complex path structure. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage started for the specific path from the storage filesystem.

---

## folder

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>folder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Description

Object for manipulating the folder located in the storage being used.

##### Return

( _[File](/docs/library/objects/File)_ )

It allows to interact with the folder physically.

---

## fullPath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>fullPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the full path to the storage being used.

##### Return

( _string_ )

The full storage path.

---

## getBase

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getBase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the base path of the storage being used.

##### Return

( _string_ )

The base path of the storage.

---

## getInput

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getInput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Description

Gets the input object from Netuno for the storage being used.

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )

Data input object from Netuno to the storage in use.

---

## getInputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getInputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## getOutput

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Description

Gets the output object from Netuno for the storage being used.

##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Data output object from Netuno to the storage in use.

---

## getOutputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>getOutputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )


---

## input

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>input</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Description

Gets the input object from Netuno for the storage being used.

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )

Data input object from Netuno to the storage in use.

---

## inputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>inputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>
##### Description

Gets the Java input object for the storage being used.

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )

Java data input object for the storage in use.

---

## isDatabase

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isDatabase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Whether storage is defined in the database folder.

##### Return

( _boolean_ )

If you are using the database folder.

---

## isExtension

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isExtension</span>(<span style={{color: '#FF8000'}}>extension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the file name contains the extension.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **extension** | _string_ | File name extension. |

##### Return

( _boolean_ )

Whether the file contains the defined extension.

---

## isFile

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFile</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether it is a file.

##### Return

( _boolean_ )

If is a file.

---

## isFileSystem

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Whether storage is defined in the filesystem folder.

##### Return

( _boolean_ )

If you are using the filesystem folder.

---

## isFileSystemPrivate

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystemPrivate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Whether storage is defined in the filesystem's private folder.

##### Return

( _boolean_ )

If you are using the filesystem's private folder.

---

## isFileSystemPublic

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystemPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Whether storage is defined in the filesystem's public folder.

##### Return

( _boolean_ )

If you are using the filesystem's public folder.

---

## isFileSystemServer

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFileSystemServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Whether storage is defined in the filesystem's server folder.

##### Return

( _boolean_ )

If you are using the filesystem server folder.

---

## isFolder

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>isFolder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether it is a folder.

##### Return

( _boolean_ )

If is a folder.

---

## newRandomFile

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>newRandomFile</span>(<span style={{color: '#FF8000'}}>extension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>
##### Description

Generates a new storage from the current storage but for a file with a random name that does not yet exist and thus can be saved without conflicts.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **extension** | _string_ | File name extension. |

##### Return

( _[Storage](/docs/library/resources/storage)_ )

New storage for a new file with a non-existent random name.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>output</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Description

Gets the output object from Netuno for the storage being used.

##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Data output object from Netuno to the storage in use.

---

## outputStream

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>outputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Description

Gets the Java output object for the storage being used.

##### Return

( _[OutputStream](/docs/library/objects/OutputStream)_ )

Java data output object for the storage in use.

---

## path

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>path</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Description

Retrieves the manipulation object for the path in storage that is being used.

##### Return

( _[File](/docs/library/objects/File)_ )

It allows to interact with the path physically.

---

## reader

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>reader</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Description

Gets the input object as Java text for the storage being used.

##### Return

( _java.io.Reader_ )

Input object as Java text for the storage in use.

---

## readerBOM

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>readerBOM</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
##### Description

Gets the data entry object as BOM text (byte order mark) from Java for the storage being used.

##### Return

( _java.io.Reader_ )

Java text input object (_BOM_) for the storage in use.

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>readerBOM</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>
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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>saveFile</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>setBase</span>(<span style={{color: '#FF8000'}}>base</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

## subpath

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>subpath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the subpath of the storage being used.

##### Return

( _string_ )

The subpath of the storage.

---

## url

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>url</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the URL of the storage being used.

##### Return

( _string_ )

The URL for the storage.

---

## writer

---

#### <span style={{fontWeight: 'normal'}}>_storage</span>.<span style={{color: '#008000'}}>writer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>
##### Description

Gets the output object as Java text for the storage being used.

##### Return

( _java.io.Writer_ )

Output object as Java text for the storage in use.

---

