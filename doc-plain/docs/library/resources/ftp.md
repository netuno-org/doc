---
id: ftp
title: FTP
sidebar_label: FTP
---

FTP client feature.

---

## abort

---

#### _ftp.abort() : [FTP](/docs/library/resources/ftp)
##### Description

 Abort the current data transfer operation

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## changeToParentDirectory

---

#### _ftp.changeToParentDirectory() : [FTP](/docs/library/resources/ftp)
##### Description

Switches to the previous folder where it should be used to perform operations.

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(remotePath: string) : [FTP](/docs/library/resources/ftp)
##### Description

Defines the remote path that should be used to perform operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Path on the server to perform the work. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## close

---

#### _ftp.close() : void
##### Description

Closes the FTP connection to the server.

##### Return

( _void_ )


---

## config

---

#### _ftp.config() : [FTPConfig](/docs/library/objects/FTPConfig)
##### Description

Starts a new configuration of its own.

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Configuration object loaded from received data.

---

#### _ftp.config(config: [Values](/docs/library/objects/Values)) : [FTPConfig](/docs/library/objects/FTPConfig)
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Configuration definition data structure. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Configuration object loaded from received data.

---

#### _ftp.config(config: [FTPConfig](/docs/library/objects/FTPConfig)) : [FTP](/docs/library/resources/ftp)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[FTPConfig](/docs/library/objects/FTPConfig)_ | Definition of the new configuration. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

Current FTP object.

---

## connect

---

#### _ftp.connect() : [FTP](/docs/library/resources/ftp)
##### Description

Starts connecting to the server via FTP.

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## createDirectory

---

#### _ftp.createDirectory(remotePath: string) : [FTP](/docs/library/resources/ftp)
##### Description

Creates a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be created. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## deleteDirectory

---

#### _ftp.deleteDirectory(remotePath: string) : [FTP](/docs/library/resources/ftp)
##### Description

Deletes a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be removed. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## deleteFile

---

#### _ftp.deleteFile(remotePath: string) : [FTP](/docs/library/resources/ftp)
##### Description

Deletes a file in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the file should be removed. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## disconnect

---

#### _ftp.disconnect() : [FTP](/docs/library/resources/ftp)
##### Description

Performs FTP disconnection from the server.

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## download

---

#### _ftp.download(remotePath: string, destination: [OutputStream](/docs/library/objects/OutputStream)) : [FTP](/docs/library/resources/ftp)
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[OutputStream](/docs/library/objects/OutputStream)_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

#### _ftp.download(remotePath: string, destination: [File](/docs/library/objects/File)) : [FTP](/docs/library/resources/ftp)
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[File](/docs/library/objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

#### _ftp.download(remotePath: string, destination: [Storage](/docs/library/resources/storage)) : [FTP](/docs/library/resources/ftp)
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[Storage](/docs/library/resources/storage)_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## downloadBytes

---

#### _ftp.downloadBytes(remotePath: string) : byte[]
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

#### _ftp.downloadText(remotePath: string) : string
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

#### _ftp.downloadText(remotePath: string, charset: string) : string
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

#### _ftp.enabled() : boolean
##### Return

( _boolean_ )


---

#### _ftp.enabled(enabled: boolean) : [FTP](/docs/library/resources/ftp)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

Current FTP object.

---

## getClient

---

#### _ftp.getClient() : org.netuno.psamata.ftp.FTPClient
##### Description

Gets the base FTP client.

##### Return

( _org.netuno.psamata.ftp.FTPClient_ )

Original base FTP client

---

## getConfig

---

#### _ftp.getConfig() : [FTPConfig](/docs/library/objects/FTPConfig)
##### Description

Gets the configuration that is being used.

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Object of the active configuration.

---

## getWorkingDirectory

---

#### _ftp.getWorkingDirectory() : string
##### Description

Gets the current remote working path where operations are being performed.

##### Return

( _string_ )

The full remote path being used.

---

## init

---

#### _ftp.init() : [FTP](/docs/library/resources/ftp)
##### Description

Starts a new instance of FTP using the FTP configuration of the `default` key.

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The new instance of the FTP resource based on the `default` FTP configuration.

---

#### _ftp.init(configKey: string) : [FTP](/docs/library/resources/ftp)
##### Description

Starts a new instance of FTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the FTP configuration that will be used. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The new instance of the FTP resource based on the specified FTP configuration.

---

#### _ftp.init(config: [FTPConfig](/docs/library/objects/FTPConfig)) : [FTP](/docs/library/resources/ftp)
##### Description

Starts a new instance of FTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[FTPConfig](/docs/library/objects/FTPConfig)_ | Configuration that will be used. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The new instance of the FTP resource based on the defined configuration.

---

## isEnabled

---

#### _ftp.isEnabled() : boolean
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## list

---

#### _ftp.list(remotePath: string) : java.util.List
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

#### _ftp.rename(oldPath: string, newPath: string) : [FTP](/docs/library/resources/ftp)
##### Description

Renames a file or folder on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **oldPath** | _string_ | Path on the server that should be renamed. |
| **newPath** | _string_ | The destination path on the server. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## sendCommand

---

#### _ftp.sendCommand(command: string) : int
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

#### _ftp.sendCommand(command: string, args: string) : int
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

#### _ftp.sendSiteCommand(command: string) : [FTP](/docs/library/resources/ftp)
##### Description

Send a site specific command.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Command that must be sent. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## setConfig

---

#### _ftp.setConfig(config: [FTPConfig](/docs/library/objects/FTPConfig)) : [FTP](/docs/library/resources/ftp)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[FTPConfig](/docs/library/objects/FTPConfig)_ | Definition of the new configuration. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

Current FTP object.

---

## setEnabled

---

#### _ftp.setEnabled(enabled: boolean) : [FTP](/docs/library/resources/ftp)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

Current FTP object.

---

## upload

---

#### _ftp.upload(remotePath: string, source: [InputStream](/docs/library/objects/InputStream)) : [FTP](/docs/library/resources/ftp)
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[InputStream](/docs/library/objects/InputStream)_ | Local file as the source. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

#### _ftp.upload(remotePath: string, source: [File](/docs/library/objects/File)) : [FTP](/docs/library/resources/ftp)
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[File](/docs/library/objects/File)_ | Local file as the source. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

#### _ftp.upload(remotePath: string, source: [Storage](/docs/library/resources/storage)) : [FTP](/docs/library/resources/ftp)
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[Storage](/docs/library/resources/storage)_ | Local file as the source. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## uploadBytes

---

#### _ftp.uploadBytes(remotePath: string, bytes: byte[]) : [FTP](/docs/library/resources/ftp)
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **bytes** | _byte[]_ | Array of bytes. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

## uploadText

---

#### _ftp.uploadText(remotePath: string, text: string) : [FTP](/docs/library/resources/ftp)
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

#### _ftp.uploadText(remotePath: string, text: string, charset: string) : [FTP](/docs/library/resources/ftp)
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _[FTP](/docs/library/resources/ftp)_ )

The current FTP resource.

---

