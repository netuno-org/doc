---
id: ssh
title: SSH
sidebar_label: SSH
---

Feature to connect, transfer files and execute commands via SSH.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Closes all open sessions and performs SSH disconnection from the server.

##### Return

( _void_ )

Current SSH object.

---

## config

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](../objects/SSHConfig)</span>
##### Description

Starts a new configuration of its own.

##### Return

( _[SSHConfig](../objects/SSHConfig)_ )

Configuration object loaded from received data.

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](../objects/SSHConfig)</span>
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](../objects/Values)_ | Configuration definition data structure. |

##### Return

( _[SSHConfig](../objects/SSHConfig)_ )

Configuration object loaded from received data.

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](../objects/SSHConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SSHConfig](../objects/SSHConfig)_ | Definition of the new configuration. |

##### Return

( _[SSH](../resources/ssh)_ )

Current SSH resource.

---

## connect

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>connect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Starts connecting to the server via SSH.

##### Return

( _[SSH](../resources/ssh)_ )

Current SSH resource.

---

## disconnect

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>disconnect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Closes all open sessions and performs SSH disconnection from the server.

##### Return

( _[SSH](../resources/ssh)_ )

Current SSH resource.

---

## enabled

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SSH](../resources/ssh)_ )

Current SSH resource.

---

## getClient

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>getClient</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.ssh.SSHClient</span>
##### Description

Gets the base SSH client.

##### Return

( _org.netuno.psamata.ssh.SSHClient_ )

Original base SSH client

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](../objects/SSHConfig)</span>
##### Description

Gets the configuration that is being used.

##### Return

( _[SSHConfig](../objects/SSHConfig)_ )

Object of the active configuration.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Starts a new instance of SSH using the SSH configuration of the `default` key.

##### Return

( _[SSH](../resources/ssh)_ )

The new instance of the SSH resource based on the `default` SSH configuration.

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Starts a new instance of SSH from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKey** | _string_ | Key of the SSH configuration that will be used. |

##### Return

( _[SSH](../resources/ssh)_ )

The new instance of the SSH resource based on the specified SSH configuration.

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](../objects/SSHConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Starts a new instance of SSH from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SSHConfig](../objects/SSHConfig)_ | Configuration that will be used. |

##### Return

( _[SSH](../resources/ssh)_ )

The new instance of the SSH resource based on the defined configuration.

---

## initSCP

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>initSCP</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Description

Starts SCP session to manage folders and transfer files.

##### Return

( _[SSHSCP](../objects/SSHSCP)_ )

The SCP session started to execute commands.

---

## initSFTP

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>initSFTP</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](../objects/SSHSFTP)</span>
##### Description

Starts SFTP session to manage folders and transfer files.

##### Return

( _[SSHSFTP](../objects/SSHSFTP)_ )

The SFTP session started to execute commands.

---

## initSession

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>initSession</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSession](../objects/SSHSession)</span>
##### Description

Starts SSH session to execute commands.

##### Return

( _[SSHSession](../objects/SSHSession)_ )

The session started to execute commands.

---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## setConfig

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>setConfig</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](../objects/SSHConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[SSHConfig](../objects/SSHConfig)_ | Definition of the new configuration. |

##### Return

( _[SSH](../resources/ssh)_ )

Current SSH resource.

---

## setEnabled

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](../resources/ssh)</span>
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[SSH](../resources/ssh)_ )

Current SSH resource.

---

