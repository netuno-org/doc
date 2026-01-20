---
id: SSHExecResult
title: SSHExecResult
sidebar_label: SSHExecResult
---

Resultado gerado pelos comandos SSH depois que são executados.

---

## error

---

#### error() : string
##### Descrição

Retorna o erro da execução do comando do objeto atual (se houver).

##### Retorno

( _string_ )

Erro da execução do comando.

---

#### error(erro: string) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Descrição

Define o erro da execução do comando do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **erro** | _string_ | Erro da execução do comando. |

##### Retorno

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Objeto SSHExecResult atual.

---

## exitErrorMessage

---

#### exitErrorMessage() : string
##### Descrição

Retorna a mensagem de erro da execução do comando do objeto atual (se houver).

##### Retorno

( _string_ )

Mensagem de erro da execução do comando.

---

#### exitErrorMessage(mensagemErro: string) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Descrição

Define a mensagem de erro da execução do comando do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagemErro** | _string_ | Mensagem de erro da execução do comando. |

##### Retorno

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Objeto SSHExecResult atual.

---

## exitStatus

---

#### exitStatus() : int
##### Descrição

Retorna o código de saída do comando que foi executado.

##### Retorno

( _int_ )

Código de saída do comando que foi executado.

---

#### exitStatus(statusSaida: int) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Descrição

Define o código de saída do comando que foi executado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **statusSaida** | _int_ | Código de saída do comando que foi executado. |

##### Retorno

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Objeto SSHExecResult atual.

---

## id

---

#### id() : int
##### Descrição

Retorna a identificação do objeto atual.

##### Retorno

( _int_ )

Identificação do objeto atual.

---

#### id(identificacao: int) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Descrição

Define a identificação do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **identificacao** | _int_ | Identificação do objeto atual. |

##### Retorno

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Objeto SSHExecResult atual.

---

## output

---

#### output() : string
##### Descrição

Retorna o resultado da execução do comando do objeto atual.

##### Retorno

( _string_ )

Resultado da execução do comando.

---

#### output(resultado: string) : [SSHExecResult](/docs/library/objects/SSHExecResult)
##### Descrição

Define o resultado da execução do comando do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **resultado** | _string_ | Resultado da execução do comando. |

##### Retorno

( _[SSHExecResult](/docs/library/objects/SSHExecResult)_ )

Objeto SSHExecResult atual.

---

