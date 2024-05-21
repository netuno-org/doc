---
id: user
title: User
sidebar_label: User
---

Gestão dos utilizadores da aplicação e obtenção dos dados do utilizador autenticado.

---

## all

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
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

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">allByCode</span>(<span style="color: #FF8000">codigo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
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
| **codigo** | _string_ | Código alternativo que os utilizadores podem ter associado. |

##### Retorno

( _java.util.List_ )

Lista dos utilizadores encontrados para o código alternativo.

---

## allProvidersData

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">allProvidersData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">allProvidersData</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## code

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">code</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o código alternativo do utilizador que está autenticado.

##### Como Usar

```javascript
// Código auxiliar do utilizador autenticado.
_log.info(`Código do Utilizador: ${_user.code()}`)
```

##### Retorno

( _string_ )

Código auxiliar do utilizador logado.

---

## create

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">create</span>(<span style="color: #FF8000">dadosUtilizador</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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
| **dadosUtilizador** | _[Values](../../objects/Values)_ | Dados do utilizador que vai ser criado. |

##### Retorno

( _int_ )

ID do utilizador que foi criado.

---

## createIfNotExists

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">createIfNotExists</span>(<span style="color: #FF8000">dadosUtilizador</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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
| **dadosUtilizador** | _[Values](../../objects/Values)_ | Dados do utilizador que vai ser criado caso não exista ainda. |

##### Retorno

( _boolean_ )

Foi criado com sucesso.

---

## data

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">data</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByCode</span>(<span style="color: #FF8000">codigo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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
| **codigo** | _string_ | Código alternativo que o utilizador pode ter associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o código alternativo.

---

## firstByMail

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByMail</span>(<span style="color: #FF8000">mail</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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
| **mail** | _string_ | E-mail do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o e-mail.

---

## firstByName

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByName</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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
| **nome** | _string_ | Nome completo do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o nome completo.

---

## firstByUser

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByUser</span>(<span style="color: #FF8000">utilizador</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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
| **utilizador** | _string_ | Username do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado com o nome de utilizador.

---

## get

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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
| **id** | _int_ | Identificador numérico do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">idOuUidOuUsername</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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
| **idOuUidOuUsername** | _string_ | Tanto pode ser um ID, ou um UID, ou ainda o username. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado.

---

## hasProvider

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">hasProvider</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |
| **providerCode** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">hasProvider</span>(<span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **providerCode** | _string_ |   |

##### Retorno

( _boolean_ )


---

## id

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">id</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
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

## load

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">load</span>() : <span style="font-weight: normal; font-style: italic;">[User](../../resources/User)</span>
##### Retorno

( _[User](../../resources/User)_ )


---

## name

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">name</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o nome completo do utilizador que está autenticado.

##### Como Usar

```javascript
// Nome do utilizador autenticado.
_log.info(`Nome completo do Utilizador: ${_user.name()}`)
```

##### Retorno

( _string_ )

Nome completo do utilizador logado.

---

## noPassword

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">noPassword</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">noPassword</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## password

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">password</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |
| **password** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">password</span>(<span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **password** | _string_ |   |

##### Retorno

( _boolean_ )


---

## providerData

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerData</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |
| **providerCode** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerData</span>(<span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **providerCode** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## providerDataByUid

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerDataByUid</span>(<span style="color: #FF8000">uid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **uid** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## providerLDAP

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerLDAP</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerLDAP</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## remove

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">remove</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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
| **id** | _int_ | O ID (identificador númerico) do utilizador. |

##### Retorno

( _boolean_ )

Foi apagado com sucesso.

---

## search

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">search</span>(<span style="color: #FF8000">termo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
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
| **termo** | _string_ | Chave de pesquisa. |

##### Retorno

( _java.util.List_ )

Lista de dados dos utilizadores encontrados.

---

## searchFirst

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">searchFirst</span>(<span style="color: #FF8000">termo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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
| **termo** | _string_ | Chave de pesquisa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados do utilizador encontrado.

---

## setNoPassword

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setNoPassword</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setNoPassword</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## setPassword

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setPassword</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |
| **password** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setPassword</span>(<span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **password** | _string_ |   |

##### Retorno

( _boolean_ )


---

## setProviderLDAP

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setProviderLDAP</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setProviderLDAP</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## uid

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">uid</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o identificador único universal de quem está autenticado.

##### Como Usar

```javascript
// UUID do utilizador autenticado.
_log.info(`UID do Utilizador: ${_user.uid()}`)
```

##### Retorno

( _string_ )

UUID (identificador único universal) do utilizador logado.

---

## update

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dadosUtilizador</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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
| **id** | _int_ | O ID (identificador numérico) do utilizador. |
| **dadosUtilizador** | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dadosUtilizador</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">alterarPassword</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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
| **id** | _int_ | O ID (identificador numérico) do utilizador. |
| **dadosUtilizador** | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |
| **alterarPassword** | _boolean_ | Se deve realizar a alteração da palavra-passe ou senha. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">dadosUtilizador</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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
| **dadosUtilizador** | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">dadosUtilizador</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">alterarPassword</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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
| **dadosUtilizador** | _[Values](../../objects/Values)_ | Dados do utilizador para atualizar a informação armazenada em base de dados. |
| **alterarPassword** | _boolean_ | Se deve realizar a alteração da palavra-passe ou senha. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

## user

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">user</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o nome de utilizador de quem está autenticado.

##### Como Usar

```javascript
// Nome do utilizador autenticado.
_log.info(`Nome completo do Utilizador: ${_user.name()}`)
```

##### Retorno

( _string_ )

Nome de utilizador logado.

---

