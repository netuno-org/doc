---
id: SSHSFTP
title: SSHSFTP
sidebar_label: SSHSFTP
---

Cliente SFTP utilizado com o SSH.

---

## close

---

#### <span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Closes the SFTP current session.

##### Return

( _void_ )


---

## closed

---

#### <span style={{color: '#008000'}}>closed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks if the SFTP session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## createDirectories

---

#### <span style={{color: '#008000'}}>createDirectories</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Creates the path of folders in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder structure should be created. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## createDirectory

---

#### <span style={{color: '#008000'}}>createDirectory</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Creates a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be created. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## deleteDirectory

---

#### <span style={{color: '#008000'}}>deleteDirectory</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Deletes a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be removed. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## deleteFile

---

#### <span style={{color: '#008000'}}>deleteFile</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Deletes a file in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the file should be removed. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## download

---

#### <span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destination</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[OutputStream](/docs/library/objects/OutputStream)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

#### <span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destination</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[File](/docs/library/objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## downloadBytes

---

#### <span style={{color: '#008000'}}>downloadBytes</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Description

Obtain a byte array as content from a file server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |

##### Return

( _byte[]_ )

Byte array with the remote file content in the server.

---

## downloadText

---

#### <span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtain a text content of a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |

##### Return

( _string_ )

Text content of the remote file in the server.

---

#### <span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtain a text content of a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _string_ )

Text content of the remote file in the server.

---

## isClosed

---

#### <span style={{color: '#008000'}}>isClosed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## list

---

#### <span style={{color: '#008000'}}>list</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[SSHFile](/docs/library/objects/SSHFile)&gt;</span>
##### Description

List of items in a server folder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Folder path in the server. |

##### Return

( _java.util.List_ )

The list of itens into the server path.

---

## size

---

#### <span style={{color: '#008000'}}>size</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Obtains the file size in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the file is. |

##### Return

( _long_ )

The file size.

---

## upload

---

#### <span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[InputStream](/docs/library/objects/InputStream)_ | Local file as the source. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

#### <span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[File](/docs/library/objects/File)_ | Local file as the source. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## uploadBytes

---

#### <span style={{color: '#008000'}}>uploadBytes</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **bytes** | _byte[]_ | Array of bytes. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## uploadText

---

#### <span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

#### <span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

