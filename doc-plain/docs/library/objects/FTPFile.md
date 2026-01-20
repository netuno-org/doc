---
id: FTPFile
title: FTPFile
sidebar_label: FTPFile
---

Os dados referente a um ficheiro FTP.

---

## getGroup

---

#### getGroup() : string
##### Description

Returns the name of the group owning the file.

##### Return

( _string_ )

The name of the group owning the file.

---

## getHardLinkCount

---

#### getHardLinkCount() : int
##### Description

Returns the number of hard links to this file.

##### Return

( _int_ )

The number of hard links to this file.

---

## getLink

---

#### getLink() : string
##### Description

If the FTPFile is a symbolic link, this method returns the name of the file being pointed to by the symbolic link. Otherwise it returns null.

##### Return

( _string_ )

The file pointed to by the symbolic link (null if the FTPFile is not a symbolic link).

---

## getName

---

#### getName() : string
##### Description

Returns the name of the file.

##### Return

( _string_ )

The name of the file.

---

## getRawListing

---

#### getRawListing() : string
##### Description

Returns the original FTP server raw listing used to initialize the FTPFile.

##### Return

( _string_ )

The original FTP server raw listing used to initialize the FTPFile.

---

## getSize

---

#### getSize() : long
##### Description

Returns the file size in bytes.

##### Return

( _long_ )

The file size in bytes.

---

## getTimestamp

---

#### getTimestamp() : java.util.Calendar
##### Description

Returns the file timestamp. This usually the last modification time.

##### Return

( _java.util.Calendar_ )

A Calendar instance representing the file timestamp.

---

## getTimestampInstant

---

#### getTimestampInstant() : java.time.Instant
##### Description

Returns the file timestamp. This usually the last modification time.

##### Return

( _java.time.Instant_ )

A Calendar instance representing the file timestamp.

---

## getUser

---

#### getUser() : string
##### Description

Returns the name of the user owning the file. Sometimes this will be a string representation of the user number.

##### Return

( _string_ )

The name of the user owning the file.

---

## isDirectory

---

#### isDirectory() : boolean
##### Description

Returns whether it is a directory.

##### Return

( _boolean_ )

Whether or not it is a directory.

---

## isFile

---

#### isFile() : boolean
##### Description

Returns whether it is a file.

##### Return

( _boolean_ )

Whether or not it is a file.

---

## isGroupExecutable

---

#### isGroupExecutable() : boolean
##### Description

Returns whether a group has file execute permission or directory listing permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isGroupReadable

---

#### isGroupReadable() : boolean
##### Description

Returns whether a group has read permissions.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isGroupWritable

---

#### isGroupWritable() : boolean
##### Description

Returns whether a group has write permissions.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isSymbolicLink

---

#### isSymbolicLink() : boolean
##### Description

Returns whether it is a symbolic link.

##### Return

( _boolean_ )

Whether or not it is a symbolic link.

---

## isUnknown

---

#### isUnknown() : boolean
##### Description

Returns whether it is a unknown type.

##### Return

( _boolean_ )

Whether or not it is a unknown type.

---

## isUserExecutable

---

#### isUserExecutable() : boolean
##### Description

Returns whether the user has file execute permission or directory listing permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isUserReadable

---

#### isUserReadable() : boolean
##### Description

Returns whether the user has read permissions

##### Return

( _boolean_ )

Whether or not it has read permission.

---

## isUserWritable

---

#### isUserWritable() : boolean
##### Description

Returns whether the user has write permissions

##### Return

( _boolean_ )

Whether or not it has write permission.

---

## isValid

---

#### isValid() : boolean
##### Description

Returns whether an entry is valid.

##### Return

( _boolean_ )

Whether an entry is valid or not.

---

## isWorldExecutable

---

#### isWorldExecutable() : boolean
##### Description

Returns whether you have global file execute permission or directory listing permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isWorldReadable

---

#### isWorldReadable() : boolean
##### Description

Returns whether it has global read permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## isWorldWritable

---

#### isWorldWritable() : boolean
##### Description

Returns whether it has global write permission.

##### Return

( _boolean_ )

Whether or not it has permission.

---

## setGroup

---

#### setGroup(group: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines the name of the group owning the file

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **group** | _string_ | The name of the group owning the file. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setGroupExecutable

---

#### setGroupExecutable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines file execute permission or directory listing permission for a group.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setGroupReadable

---

#### setGroupReadable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines read permission for a group.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setGroupWritable

---

#### setGroupWritable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines write permission for a group.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setHardLinkCount

---

#### setHardLinkCount(links: int) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines the number of hard links to this file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **links** | _int_ | The number of hard links to this file. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setLink

---

#### setLink(link: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

If the FTPFile is a symbolic link, use this method to defines the name of the file being pointed to by the symbolic link.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **link** | _string_ | The file pointed to by the symbolic link. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setName

---

#### setName(name: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines the name of the file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the file. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setRawListing

---

#### setRawListing(rawListing: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines the original FTP server raw listing from which the FTPFile was created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rawListing** | _string_ | The raw FTP server listing. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setSize

---

#### setSize(size: long) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines the file size in bytes.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **size** | _long_ | The file size in bytes. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setTimestamp

---

#### setTimestamp(date: java.util.Calendar) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines the file timestamp. This usually the last modification time. The parameter is not cloned, so do not alter its value after calling this method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **date** | _java.util.Calendar_ | A Calendar instance representing the file timestamp. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setUser

---

#### setUser(user: string) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines the name of the user owning the file. This may be a string representation of the user number.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **user** | _string_ | The name of the user owning the file. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setUserExecutable

---

#### setUserExecutable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines file execute permission or directory listing permission for a user.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setUserReadable

---

#### setUserReadable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines read permission for a user.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has read permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setUserWritable

---

#### setUserWritable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines write permission for a user.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has write permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setWorldExecutable

---

#### setWorldExecutable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines global file execution permission or directory listing permission.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setWorldReadable

---

#### setWorldReadable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines global read permission.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## setWorldWritable

---

#### setWorldWritable(access: boolean) : [FTPFile](/docs/library/objects/FTPFile)
##### Description

Defines global write permission.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **access** | _boolean_ | Whether or not it has permission. |

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## toDirectory

---

#### toDirectory() : [FTPFile](/docs/library/objects/FTPFile)
##### Description

indicates that the current object is a directory.

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## toFile

---

#### toFile() : [FTPFile](/docs/library/objects/FTPFile)
##### Description

indicates that the current object is a file.

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## toFormattedString

---

#### toFormattedString() : string
##### Description

Returns a string representation of the FTPFile information.

##### Return

( _string_ )

String representation of FTPFile information.

---

#### toFormattedString(timezone: string) : string
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

#### toSymbolicLink() : [FTPFile](/docs/library/objects/FTPFile)
##### Description

indicates that the current object is a symbolic link.

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

## toUnknown

---

#### toUnknown() : [FTPFile](/docs/library/objects/FTPFile)
##### Description

indicates that the current object is a unknown type.

##### Return

( _[FTPFile](/docs/library/objects/FTPFile)_ )

The current FTPFile object.

---

