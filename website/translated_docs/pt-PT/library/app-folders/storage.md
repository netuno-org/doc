---
id: storage
title: Storage
sidebar_label: Storage
---

## storage/

A pasta `storage` tem a funcionalidade de guardar de forma segura a informação dos utilizadores segmentada por níveis de acesso.

#### Estrutura da pasta storage

Na pasta `storage` encontra-se a seguinte estrutura:

```plaintext
└─ storage/
   ├─ database/
   └─ filesystem/
      ├─ private/
      ├─ public/
      └─ server/
```
### database/
A pasta `database` é utilizada para armazenar arquivos ou imagens de formulários. 

### filesystem/
A pasta `filesystem` permite restrições de acesso.

As restrições estão divididas no seguinte: 

##### private/

A pasta `private` só poderá ser acedida (via url até ao ficheiro ou pasta) para leitura ou escrita por utilizadores autenticados na aplicação.

##### public/

A pasta `public` está disponível para acesso externo a qualquer pessoal que saiba o respectivo URL.

##### server/

A Pasta `server` só permite a leitura e escrita a partir de código na aplicação. Assim sendo, nenhum utilizador consegue aceder ao seu conteudo directamente pelo URL.
