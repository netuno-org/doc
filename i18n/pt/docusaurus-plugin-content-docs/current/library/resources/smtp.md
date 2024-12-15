---
id: smtp
title: SMTP
sidebar_label: SMTP
---

Recurso de envio de e-mail por SMTP.

---

## attachment

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>attachment</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[File](../objects/File)_ | O ficheiro. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>attachment</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>idConteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[File](../objects/File)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>attachment</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>idConteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>emLinha</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[File](../objects/File)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |
| **emLinha** | _boolean_ | Se é ou não para ser injetado no conteúdo. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>attachment</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[Storage](../resources/storage)_ | O ficheiro. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>attachment</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>idConteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[Storage](../resources/storage)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>attachment</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ficheiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>idConteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>emLinha</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[Storage](../resources/storage)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |
| **emLinha** | _boolean_ | Se é ou não para ser injetado no conteúdo. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## bcc

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>bcc</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém quem recebe uma cópia escondida do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia oculta.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>bcc</span>(<span style={{color: '#FF8000'}}>bcc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define quem recebe uma cópia escondida do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bcc** | _string_ | O e-mail de quem vai receber o e-mail como cópia oculta. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## cc

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>cc</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém quem recebe uma cópia do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>cc</span>(<span style={{color: '#FF8000'}}>cc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define quem recebe uma cópia do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cc** | _string_ | O e-mail de quem vai receber o e-mail como cópia. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## config

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](../objects/SMTPConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[SMTPConfig](../objects/SMTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](../objects/SMTPConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[SMTPConfig](../objects/SMTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](../objects/SMTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SMTPConfig](../objects/SMTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## emptyMail

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>emptyMail</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.mail.Mail</span>
##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## enabled

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## from

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>from</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o endereço do remetente do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem envia.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>from</span>(<span style={{color: '#FF8000'}}>de</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o endereço do remetente do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **de** | _string_ | O endereço de e-mail de quem envia. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## getBcc

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getBcc</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém quem recebe uma cópia escondida do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia oculta.

---

## getCc

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getCc</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém quem recebe uma cópia do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia.

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](../objects/SMTPConfig)</span>
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[SMTPConfig](../objects/SMTPConfig)_ )

Objeto da configuração ativa.

---

## getFrom

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getFrom</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o endereço do remetente do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem envia.

---

## getHTML

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getHTML</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o HTML do corpo do e-mail.

##### Retorno

( _string_ )

O HTML que vai ir no e-mail.

---

## getMultipartSubtype

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getMultipartSubtype</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o subtipo do multipart como por exemplo `mixed`, `alternative`, `digest` e `parallel`.

##### Retorno

( _string_ )

O subtipo do multipart.

---

## getReplyTo

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getReplyTo</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém quem deve receber a resposta ao e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como resposta.

---

## getSubject

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getSubject</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o título do e-mail.

##### Retorno

( _string_ )

O título que vai ir no e-mail.

---

## getSubjectPrefix

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getSubjectPrefix</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o prefixo do título do e-mail.

##### Retorno

( _string_ )

O prefixo do título que vai ir no e-mail.

---

## getText

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getText</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o texto do corpo do e-mail.

##### Retorno

( _string_ )

O texto que vai ir no e-mail.

---

## getTo

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>getTo</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o endereço de destinatário do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem recebe.

---

## html

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>html</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>html</span>(<span style={{color: '#FF8000'}}>html</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **html** | _string_ |   |

##### Retorno

( _[SMTP](../resources/smtp)_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Inicia uma nova instância do SMTP utilizando a configuração do STMP da chave `default`.

##### Retorno

( _[SMTP](../resources/smtp)_ )

A nova instância do recurso SMTP com base na configuração do STMP `default`.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Inicia uma nova instância do SMTP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração SMTP que será utilizada. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

A nova instância do recurso SMTP com base na configuração do SMTP especificada.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](../objects/SMTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Inicia uma nova instância do SMTP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SMTPConfig](../objects/SMTPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

A nova instância do recurso SMTP com base na configuração definida.

---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## mail

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>mail</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.mail.Mail</span>
##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## multipartSubtype

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>multipartSubtype</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>multipartSubtype</span>(<span style={{color: '#FF8000'}}>html</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **html** | _string_ |   |

##### Retorno

( _[SMTP](../resources/smtp)_ )


---

## replyTo

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>replyTo</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>replyTo</span>(<span style={{color: '#FF8000'}}>replyTo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **replyTo** | _string_ |   |

##### Retorno

( _[SMTP](../resources/smtp)_ )


---

## send

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>send</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Realiza o envio do e-mail.

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>mail</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.mail.Mail</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mail** | _org.netuno.psamata.mail.Mail_ |   |

##### Retorno

( _void_ )


---

## setBcc

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setBcc</span>(<span style={{color: '#FF8000'}}>bcc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define quem recebe uma cópia escondida do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bcc** | _string_ | O e-mail de quem vai receber o e-mail como cópia oculta. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setCc

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setCc</span>(<span style={{color: '#FF8000'}}>cc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define quem recebe uma cópia do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cc** | _string_ | O e-mail de quem vai receber o e-mail como cópia. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setConfig

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setConfig</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTPConfig](../objects/SMTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SMTPConfig](../objects/SMTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setEnabled

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setFrom

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setFrom</span>(<span style={{color: '#FF8000'}}>de</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o endereço do remetente do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **de** | _string_ | O endereço de e-mail de quem envia. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setHTML

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setHTML</span>(<span style={{color: '#FF8000'}}>html</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o HTML do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **html** | _string_ | O HTML que vai ir no e-mail. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setMultipartSubtype

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setMultipartSubtype</span>(<span style={{color: '#FF8000'}}>multipartSubtipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o subtipo do multipart como por exemplo `mixed`, `alternative`, `digest` e `parallel`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **multipartSubtipo** | _string_ | O subtipo do multipart. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setReplyTo

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setReplyTo</span>(<span style={{color: '#FF8000'}}>replyTo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define quem deve ser respondido ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **replyTo** | _string_ | O e-mail de quem vai receber o e-mail como resposta. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setSubject

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setSubject</span>(<span style={{color: '#FF8000'}}>titulo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **titulo** | _string_ | O título que vai ir no e-mail. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setSubjectPrefix

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setSubjectPrefix</span>(<span style={{color: '#FF8000'}}>tituloPrefixo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o prefixo do título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tituloPrefixo** | _string_ | O prefixo do título que vai ir no e-mail. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setText

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setText</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o texto do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | O texto que vai ir no e-mail. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## setTo

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>setTo</span>(<span style={{color: '#FF8000'}}>para</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o endereço do destinatário do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **para** | _string_ | O endereço de e-mail de quem recebe. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## subject

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>subject</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o título do e-mail.

##### Retorno

( _string_ )

O título que vai ir no e-mail.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>subject</span>(<span style={{color: '#FF8000'}}>titulo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **titulo** | _string_ | O título que vai ir no e-mail. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## subjectPrefix

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>subjectPrefix</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>subjectPrefix</span>(<span style={{color: '#FF8000'}}>subjectPrefix</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subjectPrefix** | _string_ |   |

##### Retorno

( _[SMTP](../resources/smtp)_ )


---

## text

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>text</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o texto do corpo do e-mail.

##### Retorno

( _string_ )

O texto que vai ir no e-mail.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o texto do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | O texto que vai ir no e-mail. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## to

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>to</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o endereço de destinatário do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem recebe.

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>to</span>(<span style={{color: '#FF8000'}}>para</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Descrição

Define o endereço do destinatário do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **para** | _string_ | O endereço de e-mail de quem recebe. |

##### Retorno

( _[SMTP](../resources/smtp)_ )

Objeto SMTP atual.

---

## with

---

#### <span style={{fontWeight: 'normal'}}>_smtp</span>.<span style={{color: '#008000'}}>with</span>(<span style={{color: '#FF8000'}}>imap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[IMAP](../resources/imap)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SMTP](../resources/smtp)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **imap** | _[IMAP](../resources/imap)_ |   |

##### Retorno

( _[SMTP](../resources/smtp)_ )


---

