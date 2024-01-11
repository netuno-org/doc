---
id: SSHSession
title: SSHSession
sidebar_label: SSHSession
---

Sessão SSH para executar comandos.

---

## close

---

#### <span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Closes the current session.

##### Return

( _void_ )


---

## closed

---

#### <span style="color: #008000">closed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if the session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## exec

---

#### <span style="color: #008000">exec</span>(<span style="color: #FF8000">command</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHExecResult](../../objects/SSHExecResult)</span>
##### Description

Execute commands remotely via SSH on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Server path where the folder should be created. |

##### Return

( _[SSHExecResult](../../objects/SSHExecResult)_ )

Command execution result.

---

#### <span style="color: #008000">exec</span>(<span style="color: #FF8000">command</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">timeout</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[SSHExecResult](../../objects/SSHExecResult)</span>
##### Description

Execute commands remotely via SSH on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **command** | _string_ | Server path where the folder should be created. |
| **timeout** | _int_ | Command execution timeout. |

##### Return

( _[SSHExecResult](../../objects/SSHExecResult)_ )

Command execution result.

---

## isClosed

---

#### <span style="color: #008000">isClosed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

