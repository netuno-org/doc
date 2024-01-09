---
id: SSHSession
title: SSHSession
sidebar_label: SSHSession
---

Sessão SSH para executar comandos.

---

## close

---

#### close() : _void_
##### Description

Closes the current session.

##### Return

( _void_ )


---

## closed

---

#### closed() : _boolean_
##### Description

Checks if the session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## exec

---

#### exec(command: string) : _[SSHExecResult](../../objects/SSHExecResult)_
##### Description

Execute commands remotely via SSH on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | string | Server path where the folder should be created. |

##### Return

( _[SSHExecResult](../../objects/SSHExecResult)_ )

Command execution result.

---

#### exec(command: string, timeout: _int_) : _[SSHExecResult](../../objects/SSHExecResult)_
##### Description

Execute commands remotely via SSH on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | string | Server path where the folder should be created. |
| timeout | _int_ | Command execution timeout. |

##### Return

( _[SSHExecResult](../../objects/SSHExecResult)_ )

Command execution result.

---

## isClosed

---

#### isClosed() : _boolean_
##### Return

( _boolean_ )


---

