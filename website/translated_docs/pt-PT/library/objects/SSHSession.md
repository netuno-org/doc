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
##### Descrição

Fecha a sessão atual.

##### Retorno

( _void_ )


---

## closed

---

#### closed() : _boolean_
##### Descrição

Verifica se a sessão ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## exec

---

#### exec(comando: string) : _[SSHExecResult](../../objects/SSHExecResult)_
##### Descrição

Executa comandos remotamente através do SSH no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | string | Command to be executed remotely on the server. |

##### Retorno

( _[SSHExecResult](../../objects/SSHExecResult)_ )

Resultado da execução do comando.

---

#### exec(comando: string, timeout: _int_) : _[SSHExecResult](../../objects/SSHExecResult)_
##### Descrição

Executa comandos remotamente através do SSH no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | string | Command to be executed remotely on the server. |
| timeout | _int_ | Tempo limite para execução do comando. |

##### Retorno

( _[SSHExecResult](../../objects/SSHExecResult)_ )

Resultado da execução do comando.

---

## isClosed

---

#### isClosed() : _boolean_
##### Retorno

( _boolean_ )


---

