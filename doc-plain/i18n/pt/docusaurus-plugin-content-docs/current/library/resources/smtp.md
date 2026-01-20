---
id: smtp
title: SMTP
sidebar_label: SMTP
---

Recurso de envio de e-mail por SMTP.

---

## attachment

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: [File](/docs/library/objects/File)) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[File](/docs/library/objects/File)_ | O ficheiro. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: [File](/docs/library/objects/File), idConteudo: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[File](/docs/library/objects/File)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: [File](/docs/library/objects/File), idConteudo: string, emLinha: boolean) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[File](/docs/library/objects/File)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |
| **emLinha** | _boolean_ | Se é ou não para ser injetado no conteúdo. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: [Storage](/docs/library/resources/storage)) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[Storage](/docs/library/resources/storage)_ | O ficheiro. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: [Storage](/docs/library/resources/storage), idConteudo: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[Storage](/docs/library/resources/storage)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: [Storage](/docs/library/resources/storage), idConteudo: string, emLinha: boolean) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do anexo. |
| **tipo** | _string_ | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| **ficheiro** | _[Storage](/docs/library/resources/storage)_ | O ficheiro. |
| **idConteudo** | _string_ | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |
| **emLinha** | _boolean_ | Se é ou não para ser injetado no conteúdo. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## bcc

---

#### _smtp.bcc() : string
##### Descrição

Obtém quem recebe uma cópia escondida do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia oculta.

---

#### _smtp.bcc(bcc: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define quem recebe uma cópia escondida do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bcc** | _string_ | O e-mail de quem vai receber o e-mail como cópia oculta. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## cc

---

#### _smtp.cc() : string
##### Descrição

Obtém quem recebe uma cópia do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia.

---

#### _smtp.cc(cc: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define quem recebe uma cópia do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cc** | _string_ | O e-mail de quem vai receber o e-mail como cópia. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## config

---

#### _smtp.config() : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _smtp.config(config: [Values](/docs/library/objects/Values)) : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _smtp.config(config: [SMTPConfig](/docs/library/objects/SMTPConfig)) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SMTPConfig](/docs/library/objects/SMTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## emptyMail

---

#### _smtp.emptyMail() : org.netuno.psamata.mail.Mail
##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## enabled

---

#### _smtp.enabled() : boolean
##### Retorno

( _boolean_ )


---

#### _smtp.enabled(ativo: boolean) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## from

---

#### _smtp.from() : string
##### Descrição

Obtém o endereço do remetente do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem envia.

---

#### _smtp.from(de: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o endereço do remetente do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **de** | _string_ | O endereço de e-mail de quem envia. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## getBcc

---

#### _smtp.getBcc() : string
##### Descrição

Obtém quem recebe uma cópia escondida do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia oculta.

---

## getCc

---

#### _smtp.getCc() : string
##### Descrição

Obtém quem recebe uma cópia do e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como cópia.

---

## getConfig

---

#### _smtp.getConfig() : [SMTPConfig](/docs/library/objects/SMTPConfig)
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[SMTPConfig](/docs/library/objects/SMTPConfig)_ )

Objeto da configuração ativa.

---

## getFrom

---

#### _smtp.getFrom() : string
##### Descrição

Obtém o endereço do remetente do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem envia.

---

## getHTML

---

#### _smtp.getHTML() : string
##### Descrição

Obtém o HTML do corpo do e-mail.

##### Retorno

( _string_ )

O HTML que vai ir no e-mail.

---

## getMultipartSubtype

---

#### _smtp.getMultipartSubtype() : string
##### Descrição

Obtém o subtipo do multipart como por exemplo `mixed`, `alternative`, `digest` e `parallel`.

##### Retorno

( _string_ )

O subtipo do multipart.

---

## getReplyTo

---

#### _smtp.getReplyTo() : string
##### Descrição

Obtém quem deve receber a resposta ao e-mail.

##### Retorno

( _string_ )

O e-mail de quem vai receber o e-mail como resposta.

---

## getSubject

---

#### _smtp.getSubject() : string
##### Descrição

Obtém o título do e-mail.

##### Retorno

( _string_ )

O título que vai ir no e-mail.

---

## getSubjectPrefix

---

#### _smtp.getSubjectPrefix() : string
##### Descrição

Obtém o prefixo do título do e-mail.

##### Retorno

( _string_ )

O prefixo do título que vai ir no e-mail.

---

## getText

---

#### _smtp.getText() : string
##### Descrição

Obtém o texto do corpo do e-mail.

##### Retorno

( _string_ )

O texto que vai ir no e-mail.

---

## getTo

---

#### _smtp.getTo() : string
##### Descrição

Obtém o endereço de destinatário do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem recebe.

---

## html

---

#### _smtp.html() : string
##### Retorno

( _string_ )


---

#### _smtp.html(html: string) : [SMTP](/docs/library/resources/smtp)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **html** | _string_ |   |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )


---

## init

---

#### _smtp.init() : [SMTP](/docs/library/resources/smtp)
##### Descrição

Inicia uma nova instância do SMTP utilizando a configuração do STMP da chave `default`.

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

A nova instância do recurso SMTP com base na configuração do STMP `default`.

---

#### _smtp.init(configKey: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Inicia uma nova instância do SMTP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração SMTP que será utilizada. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

A nova instância do recurso SMTP com base na configuração do SMTP especificada.

---

#### _smtp.init(config: [SMTPConfig](/docs/library/objects/SMTPConfig)) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Inicia uma nova instância do SMTP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SMTPConfig](/docs/library/objects/SMTPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

A nova instância do recurso SMTP com base na configuração definida.

---

## isEnabled

---

#### _smtp.isEnabled() : boolean
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## mail

---

#### _smtp.mail() : org.netuno.psamata.mail.Mail
##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## multipartSubtype

---

#### _smtp.multipartSubtype() : string
##### Retorno

( _string_ )


---

#### _smtp.multipartSubtype(html: string) : [SMTP](/docs/library/resources/smtp)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **html** | _string_ |   |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )


---

## replyTo

---

#### _smtp.replyTo() : string
##### Retorno

( _string_ )


---

#### _smtp.replyTo(replyTo: string) : [SMTP](/docs/library/resources/smtp)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **replyTo** | _string_ |   |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )


---

## send

---

#### _smtp.send() : void
##### Descrição

Realiza o envio do e-mail.

##### Retorno

( _void_ )


---

#### _smtp.send(mail: org.netuno.psamata.mail.Mail) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mail** | _org.netuno.psamata.mail.Mail_ |   |

##### Retorno

( _void_ )


---

## setBcc

---

#### _smtp.setBcc(bcc: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define quem recebe uma cópia escondida do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bcc** | _string_ | O e-mail de quem vai receber o e-mail como cópia oculta. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setCc

---

#### _smtp.setCc(cc: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define quem recebe uma cópia do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cc** | _string_ | O e-mail de quem vai receber o e-mail como cópia. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setConfig

---

#### _smtp.setConfig(config: [SMTPConfig](/docs/library/objects/SMTPConfig)) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SMTPConfig](/docs/library/objects/SMTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setEnabled

---

#### _smtp.setEnabled(ativo: boolean) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setFrom

---

#### _smtp.setFrom(de: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o endereço do remetente do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **de** | _string_ | O endereço de e-mail de quem envia. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setHTML

---

#### _smtp.setHTML(html: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o HTML do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **html** | _string_ | O HTML que vai ir no e-mail. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setMultipartSubtype

---

#### _smtp.setMultipartSubtype(multipartSubtipo: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o subtipo do multipart como por exemplo `mixed`, `alternative`, `digest` e `parallel`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **multipartSubtipo** | _string_ | O subtipo do multipart. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setReplyTo

---

#### _smtp.setReplyTo(replyTo: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define quem deve ser respondido ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **replyTo** | _string_ | O e-mail de quem vai receber o e-mail como resposta. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setSubject

---

#### _smtp.setSubject(titulo: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **titulo** | _string_ | O título que vai ir no e-mail. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setSubjectPrefix

---

#### _smtp.setSubjectPrefix(tituloPrefixo: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o prefixo do título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tituloPrefixo** | _string_ | O prefixo do título que vai ir no e-mail. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setText

---

#### _smtp.setText(texto: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o texto do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | O texto que vai ir no e-mail. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## setTo

---

#### _smtp.setTo(para: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o endereço do destinatário do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **para** | _string_ | O endereço de e-mail de quem recebe. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## subject

---

#### _smtp.subject() : string
##### Descrição

Obtém o título do e-mail.

##### Retorno

( _string_ )

O título que vai ir no e-mail.

---

#### _smtp.subject(titulo: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **titulo** | _string_ | O título que vai ir no e-mail. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## subjectPrefix

---

#### _smtp.subjectPrefix() : string
##### Retorno

( _string_ )


---

#### _smtp.subjectPrefix(subjectPrefix: string) : [SMTP](/docs/library/resources/smtp)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subjectPrefix** | _string_ |   |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )


---

## text

---

#### _smtp.text() : string
##### Descrição

Obtém o texto do corpo do e-mail.

##### Retorno

( _string_ )

O texto que vai ir no e-mail.

---

#### _smtp.text(texto: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o texto do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | O texto que vai ir no e-mail. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## to

---

#### _smtp.to() : string
##### Descrição

Obtém o endereço de destinatário do e-mail.

##### Retorno

( _string_ )

O endereço de e-mail de quem recebe.

---

#### _smtp.to(para: string) : [SMTP](/docs/library/resources/smtp)
##### Descrição

Define o endereço do destinatário do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **para** | _string_ | O endereço de e-mail de quem recebe. |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )

Objeto SMTP atual.

---

## with

---

#### _smtp.with(imap: [IMAP](/docs/library/resources/imap)) : [SMTP](/docs/library/resources/smtp)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **imap** | _[IMAP](/docs/library/resources/imap)_ |   |

##### Retorno

( _[SMTP](/docs/library/resources/smtp)_ )


---

