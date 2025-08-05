---
id: SSHSession
title: SSHSession
sidebar_label: SSHSession
---

Sessão SSH para executar comandos.

---

## close

---

#### <span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Fecha a sessão atual.

##### Retorno

( _void_ )


---

## closed

---

#### <span style={{color: '#008000'}}>closed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se a sessão ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## exec

---

#### <span style={{color: '#008000'}}>exec</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHExecResult](/docs/library/objects/SSHExecResult)</span>
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

#### <span style={{color: '#008000'}}>exec</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>timeout</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHExecResult](/docs/library/objects/SSHExecResult)</span>
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

#### <span style={{color: '#008000'}}>isClosed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

