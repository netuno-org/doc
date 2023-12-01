---
id: ftp
title: FTP
sidebar_label: FTP
---

FTP client feature.

---

## abort

---

#### _ftp.abort() : _FTP_
##### Return

( _FTP_ )


---

## changeToParentDirectory

---

#### _ftp.changeToParentDirectory() : _FTP_
##### Return

( _FTP_ )


---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(arg0: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _FTP_ )


---

## close

---

#### _ftp.close() : _void_
##### Return

( _void_ )


---

## config

---

#### _ftp.config() : _FTPConfig_
##### Description

Gets the configuration that is being used.

##### Return

( _FTPConfig_ )

Object of the active configuration.

---

#### _ftp.config(config: _[Values](../../objects/Values)_) : _FTPConfig_
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Configuration definition data structure. |

##### Return

( _FTPConfig_ )

Configuration object loaded from received data.

---

#### _ftp.config(config: _FTPConfig_) : _FTP_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _FTPConfig_ | Definition of the new configuration. |

##### Return

( _FTP_ )

Current FTP object.

---

## connect

---

#### _ftp.connect() : _FTP_
##### Return

( _FTP_ )


---

## createDirectory

---

#### _ftp.createDirectory(arg0: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _FTP_ )


---

## deleteDirectory

---

#### _ftp.deleteDirectory(arg0: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _FTP_ )


---

## deleteFile

---

#### _ftp.deleteFile(arg0: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _FTP_ )


---

## disconnect

---

#### _ftp.disconnect() : _FTP_
##### Return

( _FTP_ )


---

## download

---

#### _ftp.download(arg0: string, arg1: _OutputStream_) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _OutputStream_ |   |

##### Return

( _FTP_ )


---

#### _ftp.download(arg0: string, arg1: _[File](../../objects/File)_) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Return

( _FTP_ )


---

## downloadBytes

---

#### _ftp.downloadBytes(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

## downloadText

---

#### _ftp.downloadText(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _ftp.downloadText(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

## enabled

---

#### _ftp.enabled() : _boolean_
##### Return

( _boolean_ )


---

#### _ftp.enabled(enabled: _boolean_) : _FTP_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _FTP_ )

Current FTP object.

---

## getClient

---

#### _ftp.getClient() : _FTPClient_
##### Return

( _FTPClient_ )


---

## getConfig

---

#### _ftp.getConfig() : _FTPConfig_
##### Description

Gets the configuration that is being used.

##### Return

( _FTPConfig_ )

Object of the active configuration.

---

## getWorkingDirectory

---

#### _ftp.getWorkingDirectory() : string
##### Return

( string )


---

## init

---

#### _ftp.init() : _FTP_
##### Description

Starts a new instance of FTP using the FTP configuration of the `default` key.

##### Return

( _FTP_ )

The new instance of the FTP resource based on the `default` FTP configuration.

---

#### _ftp.init(configKey: string) : _FTP_
##### Description

Starts a new instance of FTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configKey | string | Key of the FTP configuration that will be used. |

##### Return

( _FTP_ )

The new instance of the FTP resource based on the specified FTP configuration.

---

#### _ftp.init(config: _FTPConfig_) : _FTP_
##### Description

Starts a new instance of FTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _FTPConfig_ | Configuration that will be used. |

##### Return

( _FTP_ )

The new instance of the FTP resource based on the defined configuration.

---

## isEnabled

---

#### _ftp.isEnabled() : _boolean_
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## list

---

#### _ftp.list(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

## rename

---

#### _ftp.rename(arg0: string, arg1: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _FTP_ )


---

## sendCommand

---

#### _ftp.sendCommand(arg0: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _int_ )


---

#### _ftp.sendCommand(arg0: string, arg1: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _int_ )


---

## sendSiteCommand

---

#### _ftp.sendSiteCommand(arg0: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _FTP_ )


---

## setConfig

---

#### _ftp.setConfig(config: _FTPConfig_) : _FTP_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _FTPConfig_ | Definition of the new configuration. |

##### Return

( _FTP_ )

Current FTP object.

---

## setEnabled

---

#### _ftp.setEnabled(enabled: _boolean_) : _FTP_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _FTP_ )

Current FTP object.

---

## upload

---

#### _ftp.upload(arg0: string, arg1: _InputStream_) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _InputStream_ |   |

##### Return

( _FTP_ )


---

#### _ftp.upload(arg0: string, arg1: _[File](../../objects/File)_) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Return

( _FTP_ )


---

## uploadBytes

---

#### _ftp.uploadBytes(arg0: string, arg1: _byte[]_) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |

##### Return

( _FTP_ )


---

## uploadText

---

#### _ftp.uploadText(arg0: string, arg1: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _FTP_ )


---

#### _ftp.uploadText(arg0: string, arg1: string, arg2: string) : _FTP_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _FTP_ )


---

