---
id: imap
title: IMAP
sidebar_label: IMAP
---

Recurso de consulta da caixa de e-mails através do IMAP.

---

## close

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Retorno

( _void_ )


---

## config

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">config</span>() : <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](../../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

Objeto IMAP atual.

---

## connect

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">connect</span>() : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Retorno

( _[IMAP](../../resources/IMAP)_ )


---

## deletedSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">deletedSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## enabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">enabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">enabled</span>(<span style="color: #FF8000">ativo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

Objeto IMAP atual.

---

## getClient

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getClient</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.IMAPClient</span>
##### Retorno

( _org.netuno.psamata.mail.IMAPClient_ )


---

## getConfig

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getConfig</span>() : <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Objeto da configuração ativa.

---

## getMail

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getMail</span>(<span style="color: #FF8000">position</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **position** | _int_ |   |

##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## getMails

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getMails</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getMails</span>(<span style="color: #FF8000">start</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">end</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **start** | _int_ |   |
| **end** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## init

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Descrição

Inicia uma nova instância do IMAP utilizando a configuração do IMAP da chave `default`.

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

A nova instância do recurso IMAP com base na configuração do IMAP `default`.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">configKey</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração IMAP que será utilizada. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

A nova instância do recurso IMAP com base na configuração do IMAP especificada.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

A nova instância do recurso IMAP com base na configuração definida.

---

## isEnabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## mail

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mail</span>(<span style="color: #FF8000">position</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **position** | _int_ |   |

##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## mails

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mails</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mails</span>(<span style="color: #FF8000">start</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">end</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **start** | _int_ |   |
| **end** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## newSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">newSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## openFolder

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">openFolder</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">openFolder</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">write</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **write** | _boolean_ |   |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )


---

## setConfig

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">setConfig</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

Objeto IMAP atual.

---

## setEnabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">ativo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

Objeto IMAP atual.

---

## size

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">size</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## unreadSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">unreadSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## with

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">with</span>(<span style="color: #FF8000">smtp</span>: <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/SMTP)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/IMAP)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **smtp** | _[SMTP](../../resources/SMTP)_ |   |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )


---

