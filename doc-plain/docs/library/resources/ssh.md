---
id: ssh
title: SSH
sidebar_label: SSH
---

Resource to connect, transfer files and execute commands via SSH.

---

## close

---

#### _ssh.close() : void
##### Description

Closes all open sessions and performs SSH disconnection from the server.

##### Return

( _void_ )

Current SSH object.

---

## config

---

#### _ssh.config() : [SSHConfig](/docs/library/objects/SSHConfig)
##### Description

Starts a new configuration of its own.

##### Return

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Configuration object loaded from received data.

---

#### _ssh.config(config: [Values](/docs/library/objects/Values)) : [SSHConfig](/docs/library/objects/SSHConfig)
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Configuration definition data structure. |

##### Return

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Configuration object loaded from received data.

---

#### _ssh.config(config: [SSHConfig](/docs/library/objects/SSHConfig)) : [SSH](/docs/library/resources/ssh)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SSHConfig](/docs/library/objects/SSHConfig)_ | Definition of the new configuration. |

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

Current SSH resource.

---

## connect

---

#### _ssh.connect() : [SSH](/docs/library/resources/ssh)
##### Description

Starts connecting to the server via SSH.

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

Current SSH resource.

---

## disconnect

---

#### _ssh.disconnect() : [SSH](/docs/library/resources/ssh)
##### Description

Closes all open sessions and performs SSH disconnection from the server.

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

Current SSH resource.

---

## enabled

---

#### _ssh.enabled() : boolean
##### Return

( _boolean_ )


---

#### _ssh.enabled(enabled: boolean) : [SSH](/docs/library/resources/ssh)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

Current SSH resource.

---

## getClient

---

#### _ssh.getClient() : org.netuno.psamata.ssh.SSHClient
##### Description

Gets the base SSH client.

##### Return

( _org.netuno.psamata.ssh.SSHClient_ )

Original base SSH client

---

## getConfig

---

#### _ssh.getConfig() : [SSHConfig](/docs/library/objects/SSHConfig)
##### Description

Gets the configuration that is being used.

##### Return

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Object of the active configuration.

---

## init

---

#### _ssh.init() : [SSH](/docs/library/resources/ssh)
##### Description

Starts a new instance of SSH using the SSH configuration of the `default` key.

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

The new instance of the SSH resource based on the `default` SSH configuration.

---

#### _ssh.init(configKey: string) : [SSH](/docs/library/resources/ssh)
##### Description

Starts a new instance of SSH from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the SSH configuration that will be used. |

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

The new instance of the SSH resource based on the specified SSH configuration.

---

#### _ssh.init(config: [SSHConfig](/docs/library/objects/SSHConfig)) : [SSH](/docs/library/resources/ssh)
##### Description

Starts a new instance of SSH from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SSHConfig](/docs/library/objects/SSHConfig)_ | Configuration that will be used. |

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

The new instance of the SSH resource based on the defined configuration.

---

## initSCP

---

#### _ssh.initSCP() : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Starts SCP session to manage folders and transfer files.

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

The SCP session started to execute commands.

---

## initSFTP

---

#### _ssh.initSFTP() : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Starts SFTP session to manage folders and transfer files.

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The SFTP session started to execute commands.

---

## initSession

---

#### _ssh.initSession() : [SSHSession](/docs/library/objects/SSHSession)
##### Description

Starts SSH session to execute commands.

##### Return

( _[SSHSession](/docs/library/objects/SSHSession)_ )

The session started to execute commands.

---

## isEnabled

---

#### _ssh.isEnabled() : boolean
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## setConfig

---

#### _ssh.setConfig(config: [SSHConfig](/docs/library/objects/SSHConfig)) : [SSH](/docs/library/resources/ssh)
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SSHConfig](/docs/library/objects/SSHConfig)_ | Definition of the new configuration. |

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

Current SSH resource.

---

## setEnabled

---

#### _ssh.setEnabled(enabled: boolean) : [SSH](/docs/library/resources/ssh)
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SSH](/docs/library/resources/ssh)_ )

Current SSH resource.

---

