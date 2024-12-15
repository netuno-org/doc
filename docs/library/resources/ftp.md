---
id: ftp
title: FTP
sidebar_label: FTP
---

FTP client feature.

---

## abort

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>abort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

 Abort the current data transfer operation

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## changeToParentDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>changeToParentDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Switches to the previous folder where it should be used to perform operations.

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## changeWorkingDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>changeWorkingDirectory</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Defines the remote path that should be used to perform operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Path on the server to perform the work. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Closes the FTP connection to the server.

##### Return

( _void_ )


---

## config

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](../objects/FTPConfig)</span>
##### Description

Starts a new configuration of its own.

##### Return

( _[FTPConfig](../objects/FTPConfig)_ )

Configuration object loaded from received data.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](../objects/FTPConfig)</span>
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](../objects/Values)_ | Configuration definition data structure. |

##### Return

( _[FTPConfig](../objects/FTPConfig)_ )

Configuration object loaded from received data.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](../objects/FTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[FTPConfig](../objects/FTPConfig)_ | Definition of the new configuration. |

##### Return

( _[FTP](../resources/ftp)_ )

Current FTP object.

---

## connect

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>connect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Starts connecting to the server via FTP.

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## createDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>createDirectory</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Creates a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be created. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## deleteDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>deleteDirectory</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Deletes a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be removed. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## deleteFile

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>deleteFile</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Deletes a file in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the file should be removed. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## disconnect

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>disconnect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Performs FTP disconnection from the server.

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## download

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destination</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[OutputStream](../objects/OutputStream)_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destination</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[File](../objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destination</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[Storage](../resources/storage)_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## downloadBytes

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>downloadBytes</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

## enabled

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTP](../resources/ftp)_ )

Current FTP object.

---

## getClient

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>getClient</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.ftp.FTPClient</span>
##### Description

Gets the base FTP client.

##### Return

( _org.netuno.psamata.ftp.FTPClient_ )

Original base FTP client

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](../objects/FTPConfig)</span>
##### Description

Gets the configuration that is being used.

##### Return

( _[FTPConfig](../objects/FTPConfig)_ )

Object of the active configuration.

---

## getWorkingDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>getWorkingDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the current remote working path where operations are being performed.

##### Return

( _string_ )

The full remote path being used.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Starts a new instance of FTP using the FTP configuration of the `default` key.

##### Return

( _[FTP](../resources/ftp)_ )

The new instance of the FTP resource based on the `default` FTP configuration.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Starts a new instance of FTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the FTP configuration that will be used. |

##### Return

( _[FTP](../resources/ftp)_ )

The new instance of the FTP resource based on the specified FTP configuration.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](../objects/FTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Starts a new instance of FTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[FTPConfig](../objects/FTPConfig)_ | Configuration that will be used. |

##### Return

( _[FTP](../resources/ftp)_ )

The new instance of the FTP resource based on the defined configuration.

---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## list

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>list</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

## rename

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>oldPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Renames a file or folder on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **oldPath** | _string_ | Path on the server that should be renamed. |
| **newPath** | _string_ | The destination path on the server. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## sendCommand

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>sendCommand</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Sends a specific command.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Command that must be sent. |

##### Return

( _int_ )

Command result.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>sendCommand</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>args</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Sends a specific command with additional arguments required for the FTP command.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Command that must be sent. |
| **args** | _string_ | Additional arguments. |

##### Return

( _int_ )

Command result.

---

## sendSiteCommand

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>sendSiteCommand</span>(<span style={{color: '#FF8000'}}>command</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Send a site specific command.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Command that must be sent. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## setConfig

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>setConfig</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](../objects/FTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[FTPConfig](../objects/FTPConfig)_ | Definition of the new configuration. |

##### Return

( _[FTP](../resources/ftp)_ )

Current FTP object.

---

## setEnabled

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTP](../resources/ftp)_ )

Current FTP object.

---

## upload

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[InputStream](../objects/InputStream)_ | Local file as the source. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[File](../objects/File)_ | Local file as the source. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[Storage](../resources/storage)_ | Local file as the source. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## uploadBytes

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>uploadBytes</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **bytes** | _byte[]_ | Array of bytes. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

## uploadText

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>remotePath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](../resources/ftp)</span>
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _[FTP](../resources/ftp)_ )

The current FTP resource.

---

