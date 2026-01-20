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
##### Descrição

Fecha a sessão atual.

##### Retorno

( _void_ )


---

## closed

---

#### closed() : boolean
##### Descrição

Verifica se a sessão ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## exec

---

#### exec(comando: string) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Descrição

Executa comandos remotamente através do SSH no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _string_ | Command to be executed remotely on the server. |

##### Retorno

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Resultado da execução do comando.

---

#### exec(comando: string, timeout: int) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Descrição

Executa comandos remotamente através do SSH no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _string_ | Command to be executed remotely on the server. |
| **timeout** | _int_ | Tempo limite para execução do comando. |

##### Retorno

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Resultado da execução do comando.

---

## isClosed

---

#### isClosed() : boolean
##### Retorno

( _boolean_ )


---

