---
id: SSHSession
title: SSHSession
sidebar_label: SSHSession
---

Sessão SSH para executar comandos.

---

## close

---

#### close() : void
##### Description

Closes the current session.

##### Return

( _void_ )


---

## closed

---

#### closed() : boolean
##### Description

Checks if the session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## exec

---

#### exec(command: string) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Description

Execute commands remotely via SSH on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Server path where the folder should be created. |

##### Return

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Command execution result.

---

#### exec(command: string, timeout: int) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Description

Execute commands remotely via SSH on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Server path where the folder should be created. |
| **timeout** | _int_ | Command execution timeout. |

##### Return

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Command execution result.

---

## isClosed

---

#### isClosed() : boolean
##### Return

( _boolean_ )


---

