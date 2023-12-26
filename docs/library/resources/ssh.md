---
id: ssh
title: SSH
sidebar_label: SSH
---

Feature to connect, transfer files and execute commands via SSH.

---

## close

---

#### _ssh.close() : _void_
##### Return

( _void_ )


---

## config

---

#### _ssh.config() : _[SSHConfig](../../objects/SSHConfig)_
##### Description

Gets the configuration that is being used.

##### Return

( _[SSHConfig](../../objects/SSHConfig)_ )

Object of the active configuration.

---

#### _ssh.config(config: _[Values](../../objects/Values)_) : _[SSHConfig](../../objects/SSHConfig)_
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Configuration definition data structure. |

##### Return

( _[SSHConfig](../../objects/SSHConfig)_ )

Configuration object loaded from received data.

---

#### _ssh.config(config: _[SSHConfig](../../objects/SSHConfig)_) : _SSH_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SSHConfig](../../objects/SSHConfig)_ | Definition of the new configuration. |

##### Return

( _SSH_ )

Current FTP object.

---

## connect

---

#### _ssh.connect() : _SSH_
##### Return

( _SSH_ )


---

## disconnect

---

#### _ssh.disconnect() : _SSH_
##### Return

( _SSH_ )


---

## enabled

---

#### _ssh.enabled() : _boolean_
##### Return

( _boolean_ )


---

#### _ssh.enabled(enabled: _boolean_) : _SSH_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _SSH_ )

Current FTP object.

---

## getClient

---

#### _ssh.getClient() : _SSHClient_
##### Return

( _SSHClient_ )


---

## getConfig

---

#### _ssh.getConfig() : _[SSHConfig](../../objects/SSHConfig)_
##### Description

Gets the configuration that is being used.

##### Return

( _[SSHConfig](../../objects/SSHConfig)_ )

Object of the active configuration.

---

## init

---

#### _ssh.init() : _SSH_
##### Description

Starts a new instance of SSH using the SSH configuration of the `default` key.

##### Return

( _SSH_ )

The new instance of the SSH resource based on the `default` SSH configuration.

---

#### _ssh.init(configKey: string) : _SSH_
##### Description

Starts a new instance of SSH from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configKey | string | Key of the SSH configuration that will be used. |

##### Return

( _SSH_ )

The new instance of the SSH resource based on the specified SSH configuration.

---

#### _ssh.init(config: _[SSHConfig](../../objects/SSHConfig)_) : _SSH_
##### Description

Starts a new instance of SSH from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SSHConfig](../../objects/SSHConfig)_ | Configuration that will be used. |

##### Return

( _SSH_ )

The new instance of the SSH resource based on the defined configuration.

---

## initSCP

---

#### _ssh.initSCP() : _[SSHSCP](../../objects/SSHSCP)_
##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )


---

## initSFTP

---

#### _ssh.initSFTP() : _[SSHSFTP](../../objects/SSHSFTP)_
##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )


---

## initSession

---

#### _ssh.initSession() : _[SSHSession](../../objects/SSHSession)_
##### Return

( _[SSHSession](../../objects/SSHSession)_ )


---

## isEnabled

---

#### _ssh.isEnabled() : _boolean_
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## setConfig

---

#### _ssh.setConfig(config: _[SSHConfig](../../objects/SSHConfig)_) : _SSH_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[SSHConfig](../../objects/SSHConfig)_ | Definition of the new configuration. |

##### Return

( _SSH_ )

Current FTP object.

---

## setEnabled

---

#### _ssh.setEnabled(enabled: _boolean_) : _SSH_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _SSH_ )

Current FTP object.

---

