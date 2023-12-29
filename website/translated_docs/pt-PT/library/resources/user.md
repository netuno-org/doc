---
id: user
title: User
sidebar_label: User
---

Gestão dos utilizadores da aplicação e obtenção dos dados do utilizador autenticado.

---

## all

---

#### _user.all() : _java.util.List_
##### Descrição

Obtém a lista de dados de todos os utilizadores.

##### Como Usar

```javascript
// Retorna todos os utilizadores existentes.
_out.json(_user.all())
```

##### Retorno

( _java.util.List_ )

Lista de todos os dados de todos os utilizadores.

---

## allByCode

---

#### _user.allByCode(codigo: string) : _java.util.List_
##### Descrição

Obtém todos os utilizadores a partir do código alternativo.

##### Como Usar

```javascript
// Lista em log os utilizadores que tem o código exemplo.
const utilizadores = _user.allByCode("exemplo")
for (const utilizador of utilizadores) {
    _log.info(`Utilizador ${utilizador.getString("name")}`)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| codigo | string | Código alternativo que os utilizadores podem ter associado. |

##### Retorno

( _java.util.List_ )

Lista dos utilizadores encontrados para o código alternativo.

---

## allProvidersData

---

#### _user.allProvidersData() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _user.allProvidersData(arg0: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## code

---

#### _user.code() : string
##### Descrição

Obtém o código alternativo do utilizador que está autenticado.

##### Como Usar

```javascript
// Código auxiliar do utilizador autenticado.
_log.info(`Código do Utilizador: ${_user.code()}`)
```

##### Retorno

( string )

Código auxiliar do utilizador logado.

---

## create

---

#### _user.create(dadosUtilizador: _[Values](../../objects/Values)_) : _int_
##### Descrição

Cria o novo utilizador.

##### Como Usar

```javascript
// Criar um novo utilizador:
const grupo = _group.firstByCode("exemplo")
_user.create(
    _val.map()
        .set("name", "Nome Completo")
        .set("mail", "utilizador@exemplo.com")
        .set("user", "utilizador")
        .set("pass", "PasswordSecreta123")
        .set("group_id", grupo.getInt("id"))
        // É opcional definir um código alternativo auxiliar:
        .set("code", "identificacao-alternativa-de-exemplo")
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dadosUtilizador | _[Values](../../objects/Values)_ | Dados do utilizador que vai ser criado. |

##### Retorno

( _int_ )

ID do utilizador que foi criado.

---

## createIfNotExists

---

#### _user.createIfNotExists(dadosUtilizador: _[Values](../../objects/Values)_) : _boolean_
##### Descrição

Cria o utilizador caso não exista ainda.

##### Como Usar

```javascript
// Criar um novo utilizador caso não exista ainda:
const grupo = _group.firstByCode("generico")
_user.createIfNotExists(
    _val.map()
        .set("name", "Nome Completo")
        .set("mail", "utilizador@exemplo.com")
        .set("user", "utilizador")
        .set("pass", "PasswordSecreta123")
        .set("group_id", grupo.getInt("id"))
        // É opcional definir um código alternativo auxiliar:
        .set("code", "identificacao-alternativa-de-exemplo")
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dadosUtilizador | _[Values](../../objects/Values)_ | Dados do utilizador que vai ser criado caso não exista ainda. |

##### Retorno

( _boolean_ )

Foi criado com sucesso.

---

## data

---

#### _user.data() : _[Values](../../objects/Values)_
##### Descrição

Obtém toda a informação de dados do utilizador que está autenticado.

##### Como Usar

```javascript
// Toda informação do utilizador autenticado.
_out.json(_user.data())
```

##### Retorno

( _[Values](../../objects/Values)_ )

Todos os dados do utilizador logado.

---

## firstByCode

---

#### _user.firstByCode(codigo: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de um utilizador a partir do código alternativo.

##### Como Usar

```javascript
// Utilizador que tem o código exemplo.
const utilizador = _user.firstByCode("exemplo")
_out.json(utilizador)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| codigo | string | Código alternativo que o utilizador pode ter associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o código alternativo.

---

## firstByMail

---

#### _user.firstByMail(mail: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de um utilizador a partir do e-mail.

##### Como Usar

```javascript
// Utilizador obtido a partir do e-mail.
const utilizador = _user.firstByMail("utilizador@exemplo.com")
_out.json(utilizador)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mail | string | E-mail do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o e-mail.

---

## firstByName

---

#### _user.firstByName(nome: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de um utilizador a partir do nome completo.

##### Como Usar

```javascript
// Utilizador que tem o nome completo.
const utilizador = _user.firstByName("Nome Completo")
_out.json(utilizador)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Nome completo do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o nome completo.

---

## firstByUser

---

#### _user.firstByUser(utilizador: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de um utilizador a partir do nome de utilizador, mesmo nome utilizado no login.

##### Como Usar

```javascript
// Utilizador a partir do username.
const utilizador = _user.firstByMail("utilizador@exemplo.com")
_out.json(utilizador)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| utilizador | string | Username do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o nome de utilizador.

---

## get

---

#### _user.get(id: _int_) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de um utilizador a partir do ID (identificador numérico).

##### Como Usar

```javascript
// Utilizador obtido a partir do ID.
const utilizador = _user.get(1)
_out.json(utilizador)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | _int_ | Identificador numérico do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado.

---

#### _user.get(idOuUidOuUsername: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de um utilizador a partir do ID (identificador numérico), ou do UUID (identificador único universal) ou ainda o nome de utilizador.

##### Como Usar

```javascript
// Utilizador obtido a partir do UUID.
const utilizador = _user.get("7901e01c-c53e-42c2-980d-9f928090422f")
_out.json(utilizador)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| idOuUidOuUsername | string | Tanto pode ser um ID, ou um UID, ou ainda o username. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado.

---

## hasProvider

---

#### _user.hasProvider(arg0: _int_, arg1: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( _boolean_ )


---

#### _user.hasProvider(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## id

---

#### _user.id() : _int_
##### Descrição

Obtém o identificador numérico de quem está autenticado.

##### Como Usar

```javascript
// ID do utilizador autenticado.
_log.info(`ID do Utilizador: ${_user.id()}`)
```

##### Retorno

( _int_ )

ID (identificador númerico) do utilizador logado.

---

## name

---

#### _user.name() : string
##### Descrição

Obtém o nome completo do utilizador que está autenticado.

##### Como Usar

```javascript
// Nome do utilizador autenticado.
_log.info(`Nome completo do Utilizador: ${_user.name()}`)
```

##### Retorno

( string )

Nome completo do utilizador logado.

---

## noPassword

---

#### _user.noPassword(arg0: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _user.noPassword(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## password

---

#### _user.password(arg0: _int_, arg1: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( _boolean_ )


---

#### _user.password(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## providerData

---

#### _user.providerData(arg0: _int_, arg1: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _user.providerData(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## providerDataByUid

---

#### _user.providerDataByUid(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## providerLDAP

---

#### _user.providerLDAP(arg0: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _user.providerLDAP(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## remove

---

#### _user.remove(id: _int_) : _boolean_
##### Descrição

Remove o utilizador refente ao ID passado.

##### Como Usar

```javascript
// Remove o utilizador:
const utilizador = _user.firstByCode("exemplo")
_user.remove(
    utilizador.getInt("id")
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | _int_ | O ID (identificador númerico) do utilizador. |

##### Retorno

( _boolean_ )

Foi apagado com sucesso.

---

## search

---

#### _user.search(termo: string) : _java.util.List_
##### Descrição

Pesquisa os utilizadores que tem alguma ocorrência nos dados com o texto de pesquisa passado.

##### Como Usar

```javascript
// Pesquisa utilizadores com o sobrenome "Apelido".
const utilizadores = _user.search("Apelido")
for (const utilizador of utilizadores) {
    _log.info(`Utilizador encontrado ${utilizador.getString("name")}`)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| termo | string | Chave de pesquisa. |

##### Retorno

( _java.util.List_ )

Lista de dados dos utilizadores encontrados.

---

## searchFirst

---

#### _user.searchFirst(termo: string) : _[Values](../../objects/Values)_
##### Descrição

O primeiro resultado da pesquisa de utilizadores que tem alguma ocorrência nos dados do termo passado.

##### Como Usar

```javascript
// O primeiro utilizador que tem o e-mail com @exemplo.com.
const utilizador = _user.search("@exemplo.com")
_out.json(utilizador)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| termo | string | Chave de pesquisa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado.

---

## setNoPassword

---

#### _user.setNoPassword(arg0: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _user.setNoPassword(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## setPassword

---

#### _user.setPassword(arg0: _int_, arg1: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( _boolean_ )


---

#### _user.setPassword(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## setProviderLDAP

---

#### _user.setProviderLDAP(arg0: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _user.setProviderLDAP(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## uid

---

#### _user.uid() : string
##### Descrição

Obtém o identificador único universal de quem está autenticado.

##### Como Usar

```javascript
// UUID do utilizador autenticado.
_log.info(`UID do Utilizador: ${_user.uid()}`)
```

##### Retorno

( string )

UUID (identificador único universal) do utilizador logado.

---

## update

---

#### _user.update(id: _int_, dadosUtilizador: _[Values](../../objects/Values)_) : _boolean_
##### Descrição

Atualiza os dados do utilizador referente ao ID passado.

##### Como Usar

```javascript
// Atualiza o utilizador:
const utilizador = _user.firstByMail("utilizador@exemplo.com")
utilizador.set("pass", "NovaPasswordSecreta123")
_user.update(
    utilizador.getInt("id"),
    utilizador,
    true
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | _int_ | O ID (identificador numérico) do utilizador. |
| dadosUtilizador | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

#### _user.update(id: _int_, dadosUtilizador: _[Values](../../objects/Values)_, alterarPassword: _boolean_) : _boolean_
##### Descrição

Atualiza os dados do utilizador referente ao ID passado.

##### Como Usar

```javascript
// Atualiza o utilizador:
const utilizador = _user.firstByMail("utilizador@exemplo.com")
utilizador.set("pass", "NovaPasswordSecreta123")
_user.update(
    utilizador.getInt("id"),
    utilizador,
    true
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | _int_ | O ID (identificador numérico) do utilizador. |
| dadosUtilizador | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |
| alterarPassword | _boolean_ | Se deve realizar a alteração da palavra-passe ou senha. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

#### _user.update(dadosUtilizador: _[Values](../../objects/Values)_) : _boolean_
##### Descrição

Atualiza os dados do utilizador referente ao ID definido na estrutura de dados passada.

##### Como Usar

```javascript
// Atualiza o utilizador:
const utilizador = _user.firstByMail("utilizador@exemplo.com")
utilizador.set("pass", "NovaPasswordSecreta123")
_user.update(
    utilizador,
    true
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dadosUtilizador | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

#### _user.update(dadosUtilizador: _[Values](../../objects/Values)_, alterarPassword: _boolean_) : _boolean_
##### Descrição

Atualiza os dados do utilizador referente ao ID definido na estrutura de dados passada.

##### Como Usar

```javascript
// Atualiza o utilizador:
const utilizador = _user.firstByMail("utilizador@exemplo.com")
utilizador.set("pass", "NovaPasswordSecreta123")
_user.update(
    utilizador,
    true
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dadosUtilizador | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |
| alterarPassword | _boolean_ | Se deve realizar a alteração da palavra-passe ou senha. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

## user

---

#### _user.user() : string
##### Descrição

Obtém o nome de utilizador de quem está autenticado.

##### Como Usar

```javascript
// Nome do utilizador autenticado.
_log.info(`Nome completo do Utilizador: ${_user.name()}`)
```

##### Retorno

( string )

Nome de utilizador logado.

---

