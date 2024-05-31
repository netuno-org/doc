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
##### Descrição

Fecha e encerra a conexão com pasta IMAP atual.

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

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

Objeto IMAP atual.

---

## connect

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">connect</span>() : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Efetua a conexão ao servidor IMAP.

##### Retorno

( _[IMAP](../../resources/imap)_ )

Objeto IMAPClient.

---

## deletedSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">deletedSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Deleta as mensagens de uma pasta IMAP e retorna o tamanho (em bytes) das mensagens excluídas.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens excluídas.

---

## enabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">enabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">enabled</span>(<span style="color: #FF8000">ativo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

Objeto IMAP atual.

---

## getClient

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">getClient</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.IMAPClient</span>
##### Descrição

Retorna o objeto IMAPClient onde estão as configurações do recurso.

##### Retorno

( _org.netuno.psamata.mail.IMAPClient_ )

Objeto IMAPClient.

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

## init

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Inicia uma nova instância do IMAP utilizando a configuração do IMAP da chave `default`.

##### Retorno

( _[IMAP](../../resources/imap)_ )

A nova instância do recurso IMAP com base na configuração do IMAP `default`.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">configKey</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração IMAP que será utilizada. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

A nova instância do recurso IMAP com base na configuração do IMAP especificada.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

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

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mail</span>(<span style="color: #FF8000">posicao</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.mail.Mail</span>
##### Descrição

Retorna uma mensagem específica na pasta IMAP.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **posicao** | _int_ | Índice da mensagem. |

##### Retorno

( _org.netuno.psamata.mail.Mail_ )

Mensagem.

---

## mails

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mails</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Descrição

Retorna todas as mensagens contidas na pasta.

##### Retorno

( _java.util.List_ )

Lista de mensagens

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">mails</span>(<span style="color: #FF8000">início</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">final</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Descrição

Retorna um intervalo específico de mensagens contidas na pasta IMAP.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **início** | _int_ | Índice da primeira mensagem. |
| **final** | _int_ | Índice da última mensagem. |

##### Retorno

( _java.util.List_ )

Lista de mensagens

---

## newSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">newSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Retorna o tamanho (em bytes) das novas mensagens (não lidas) em uma pasta IMAP.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens novas mensagens não lidas.

---

## openFolder

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">openFolder</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Abre a pasta INBOX do servidor (modo leitura).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da past INBOX. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

Recurso IMAP atual.

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">openFolder</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">escrita</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Abre a pasta INBOX do servidor porém, especificando se é em modo de escrita ou não.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da past INBOX. |
| **escrita** | _boolean_ | Se é ou não em modo de escrita. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

Recurso IMAP atual.

---

## setConfig

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">setConfig</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[IMAPConfig](../../objects/IMAPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

Objeto IMAP atual.

---

## setEnabled

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">ativo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

Objeto IMAP atual.

---

## size

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">size</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Retorna o tamanho (em bytes) das mensagens de uma pasta IMAP.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens.

---

## unreadSize

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">unreadSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Retorna o tamanho (em bytes) de todas as mensagens não lidas em uma pasta IMAP.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens não lidas.

---

## with

---

#### <span style="font-weight: normal">_imap</span>.<span style="color: #008000">with</span>(<span style="color: #FF8000">smtp</span>: <span style="font-weight: normal; font-style: italic;">[SMTP](../../resources/smtp)</span>) : <span style="font-weight: normal; font-style: italic;">[IMAP](../../resources/imap)</span>
##### Descrição

Define uma nova configuração de SMTP diferente da atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **smtp** | _[SMTP](../../resources/smtp)_ | Configuração SMTP a ser usada. |

##### Retorno

( _[IMAP](../../resources/imap)_ )

Recurso IMAP atual.

---

