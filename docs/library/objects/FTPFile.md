---
id: FTPFile
title: FTPFile
sidebar_label: FTPFile
---

Os dados referente a um ficheiro FTP.

---

## getGroup

---

#### <span style={{color: '#008000'}}>getGroup</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the group owning the file.

##### Return

( _string_ )

The name of the group owning the file.

---

## getHardLinkCount

---

#### <span style={{color: '#008000'}}>getHardLinkCount</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the number of hard links to this file.

##### Return

( _int_ )

The number of hard links to this file.

---

## getLink

---

#### <span style={{color: '#008000'}}>getLink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

If the FTPFile is a symbolic link, this method returns the name of the file being pointed to by the symbolic link. Otherwise it returns null.

##### Return

( _string_ )

The file pointed to by the symbolic link (null if the FTPFile is not a symbolic link).

---

## getName

---

#### <span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the file.

##### Return

( _string_ )

The name of the file.

---

## getRawListing

---

#### <span style={{color: '#008000'}}>getRawListing</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the original FTP server raw listing used to initialize the FTPFile.

##### Return

( _string_ )

The original FTP server raw listing used to initialize the FTPFile.

---

## getSize

---

#### <span style={{color: '#008000'}}>getSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Returns the file size in bytes.

##### Return

( _long_ )

The file size in bytes.

---

## getTimestamp

---

#### <span style={{color: '#008000'}}>getTimestamp</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
##### Description

Returns the file timestamp. This usually the last modification time.

##### Return

( _java.util.Calendar_ )

A Calendar instance representing the file timestamp.

---

## getTimestampInstant

---

#### <span style={{color: '#008000'}}>getTimestampInstant</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Description

Returns the file timestamp. This usually the last modification time.

##### Return

( _java.time.Instant_ )

A Calendar instance representing the file timestamp.

---

## getUser

---

#### <span style={{color: '#008000'}}>getUser</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the user owning the file. Sometimes this will be a string representation of the user number.

##### Return

( _string_ )

The name of the user owning the file.

---

## isDirectory

---

#### <span style={{color: '#008000'}}>isDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether it is a directory.

##### Return

( _boolean_ )

Whether or not it is a directory.

---

## isFile

---

#### <span style={{color: '#008000'}}>isFile</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether it is a file.

##### Return

( _boolean_ )

Whether or not it is a file.

---

## isGroupExecutable

---

#### <span style={{color: '#008000'}}>isGroupExecutable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether a group has file execute permission or directory listing permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isGroupReadable

---

#### <span style={{color: '#008000'}}>isGroupReadable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether a group has read permissions.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isGroupWritable

---

#### <span style={{color: '#008000'}}>isGroupWritable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether a group has write permissions.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isSymbolicLink

---

#### <span style={{color: '#008000'}}>isSymbolicLink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether it is a symbolic link.

##### Return

( _boolean_ )

Whether or not it is a symbolic link.

---

## isUnknown

---

#### <span style={{color: '#008000'}}>isUnknown</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether it is a unknown type.

##### Return

( _boolean_ )

Whether or not it is a unknown type.

---

## isUserExecutable

---

#### <span style={{color: '#008000'}}>isUserExecutable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the user has file execute permission or directory listing permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isUserReadable

---

#### <span style={{color: '#008000'}}>isUserReadable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the user has read permissions

##### Return

( _boolean_ )

Whether or not it has read permission.

---

## isUserWritable

---

#### <span style={{color: '#008000'}}>isUserWritable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the user has write permissions

##### Return

( _boolean_ )

Whether or not it has write permission.

---

## isValid

---

#### <span style={{color: '#008000'}}>isValid</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether an entry is valid.

##### Return

( _boolean_ )

Whether an entry is valid or not.

---

## isWorldExecutable

---

#### <span style={{color: '#008000'}}>isWorldExecutable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether you have global file execute permission or directory listing permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isWorldReadable

---

#### <span style={{color: '#008000'}}>isWorldReadable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether it has global read permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isWorldWritable

---

#### <span style={{color: '#008000'}}>isWorldWritable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether it has global write permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## setGroup

---

#### <span style={{color: '#008000'}}>setGroup</span>(<span style={{color: '#FF8000'}}>group</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines the name of the group owning the file

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **group** | _string_ | The name of the group owning the file. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setGroupExecutable

---

#### <span style={{color: '#008000'}}>setGroupExecutable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines file execute permission or directory listing permission for a group.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setGroupReadable

---

#### <span style={{color: '#008000'}}>setGroupReadable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines read permission for a group.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setGroupWritable

---

#### <span style={{color: '#008000'}}>setGroupWritable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines write permission for a group.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setHardLinkCount

---

#### <span style={{color: '#008000'}}>setHardLinkCount</span>(<span style={{color: '#FF8000'}}>links</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines the number of hard links to this file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **links** | _int_ | The number of hard links to this file. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setLink

---

#### <span style={{color: '#008000'}}>setLink</span>(<span style={{color: '#FF8000'}}>link</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

If the FTPFile is a symbolic link, use this method to defines the name of the file being pointed to by the symbolic link.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **link** | _string_ | The file pointed to by the symbolic link. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setName

---

#### <span style={{color: '#008000'}}>setName</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines the name of the file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the file. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setRawListing

---

#### <span style={{color: '#008000'}}>setRawListing</span>(<span style={{color: '#FF8000'}}>rawListing</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines the original FTP server raw listing from which the FTPFile was created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rawListing** | _string_ | The raw FTP server listing. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setSize

---

#### <span style={{color: '#008000'}}>setSize</span>(<span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines the file size in bytes.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **size** | _long_ | The file size in bytes. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setTimestamp

---

#### <span style={{color: '#008000'}}>setTimestamp</span>(<span style={{color: '#FF8000'}}>date</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines the file timestamp. This usually the last modification time. The parameter is not cloned, so do not alter its value after calling this method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **date** | _java.util.Calendar_ | A Calendar instance representing the file timestamp. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setUser

---

#### <span style={{color: '#008000'}}>setUser</span>(<span style={{color: '#FF8000'}}>user</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines the name of the user owning the file. This may be a string representation of the user number.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **user** | _string_ | The name of the user owning the file. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setUserExecutable

---

#### <span style={{color: '#008000'}}>setUserExecutable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines file execute permission or directory listing permission for a user.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setUserReadable

---

#### <span style={{color: '#008000'}}>setUserReadable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines read permission for a user.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has read permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setUserWritable

---

#### <span style={{color: '#008000'}}>setUserWritable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines write permission for a user.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has write permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setWorldExecutable

---

#### <span style={{color: '#008000'}}>setWorldExecutable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines global file execution permission or directory listing permission.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setWorldReadable

---

#### <span style={{color: '#008000'}}>setWorldReadable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines global read permission.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## setWorldWritable

---

#### <span style={{color: '#008000'}}>setWorldWritable</span>(<span style={{color: '#FF8000'}}>access</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

Defines global write permission.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## toDirectory

---

#### <span style={{color: '#008000'}}>toDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

indicates that the current object is a directory.

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## toFile

---

#### <span style={{color: '#008000'}}>toFile</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

indicates that the current object is a file.

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## toFormattedString

---

#### <span style={{color: '#008000'}}>toFormattedString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns a string representation of the FTPFile information.

##### Return

( _string_ )

String representation of FTPFile information.

---

#### <span style={{color: '#008000'}}>toFormattedString</span>(<span style={{color: '#FF8000'}}>timezone</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns a string representation of the FTPFile information.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timezone** | _string_ | Time zone to use to display the date and time moment. |

##### Return

( _string_ )

String representation of FTPFile information.

---

## toSymbolicLink

---

#### <span style={{color: '#008000'}}>toSymbolicLink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

indicates that the current object is a symbolic link.

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

## toUnknown

---

#### <span style={{color: '#008000'}}>toUnknown</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPFile](../objects/FTPFile)</span>
##### Description

indicates that the current object is a unknown type.

##### Return

( _[FTPFile](../objects/FTPFile)_ )

The current FTPFile object.

---

