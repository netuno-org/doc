---
id: group
title: Group
sidebar_label: Group
---

Management of the application groups and obtaining the authenticated user's group data.

---

## all

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Obtém a lista de dados de todos os grupo.

##### How To Use

```javascript
// Retorna todos os grupos existentes.
_out.json(_group.all())
```

##### Return

( _java.util.List_ )

Lista de todos os dados de todos os grupos.

---

## allByCode

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>allByCode</span>(<span style={{color: '#FF8000'}}>codigo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Obtém todos os grupos a partir do código alternativo.

##### How To Use

```javascript
// Lista em log os grupos que tem o código exemplo.
const grupos = _group.allByCode("exemplo")
for (const grupo of grupos) {
    _log.info(`Grupo ${grupo.getString("name")}`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **codigo** | _string_ | Código alternativo que os grupos podem ter associado. |

##### Return

( _java.util.List_ )

Lista dos utilizadores encontrados para o código alternativo.

---

## code

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>code</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtém o código alternativo do grupo do utilizador que está autenticado.

##### How To Use

```javascript
// Código auxiliar do grupo do utilizador autenticado.
_log.info(`Código do Utilizador: ${_group.code()}`)
```

##### Return

( _string_ )

Código auxiliar do grupo do utilizador logado.

---

## create

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>dadosGrupo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Cria o novo grupo.

##### How To Use

```javascript
// Criar um novo grupo:
_group.create(
    _val.map()
        .set("name", "Exemplo")
        .set("mail", "grupo@exemplo.com")
        // É opcional definir um código alternativo auxiliar:
        .set("code", "identificacao-alternativa-de-exemplo")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dadosGrupo** | _[Values](/docs/library/objects/Values)_ | Dados do grupo que vai ser criado. |

##### Return

( _int_ )

ID do grupo que foi criado.

---

## createIfNotExists

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>createIfNotExists</span>(<span style={{color: '#FF8000'}}>dadosGrupo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Cria o utilizador caso não exista ainda.

##### How To Use

```javascript
// Criar um novo grupo caso não exista ainda:
_group.createIfNotExists(
    _val.map()
        .set("name", "Exemplo")
        .set("mail", "grupo@exemplo.com")
        // É opcional definir um código alternativo auxiliar:
        .set("code", "identificacao-alternativa-de-exemplo")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dadosGrupo** | _[Values](/docs/library/objects/Values)_ | Dados do grupo que vai ser criado caso não exista ainda. |

##### Return

( _boolean_ )

It was successfully created.

---

## data

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>data</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtém toda a informação de dados do grupo do utilizador que está autenticado.

##### How To Use

```javascript
// Toda informação do grupo do utilizador autenticado.
_out.json(_group.data())
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Todos os dados do grupo do utilizador logado.

---

## firstByCode

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByCode</span>(<span style={{color: '#FF8000'}}>codigo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtém os dados de um grupo a partir do código alternativo.

##### How To Use

```javascript
// Grupo que tem o código exemplo.
const grupo = _group.firstByCode("exemplo")
_out.json(grupo)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **codigo** | _string_ | Código alternativo que o grupo pode ter associado. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Dados do grupo encontrado com o código alternativo.

---

## firstByMail

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByMail</span>(<span style={{color: '#FF8000'}}>mail</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtém os dados de um grupo a partir do e-mail.

##### How To Use

```javascript
// Grupo obtido a partir do e-mail.
const grupo = _group.firstByMail("grupo@exemplo.com")
_out.json(grupo)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **mail** | _string_ | E-mail do grupo. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Dados do grupo encontrado com o e-mail.

---

## firstByName

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByName</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtém os dados de um grupo a partir do nome.

##### How To Use

```javascript
// Grupo que tem o nome.
const grupo = _group.firstByName("Exemplo")
_out.json(grupo)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nome** | _string_ | Nome do grupo. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Dados do utilizador encontrado com o nome.

---

## get

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtém os dados de um grupo a partir do ID (identificador numérico).

##### How To Use

```javascript
// Grupo obtido a partir do ID.
const grupo = _group.get(1)
_out.json(grupo)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | Identificador numérico do grupo. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Dados do grupo encontrado.

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>idOuUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtém os dados de um grupo a partir do ID (identificador numérico) ou do UUID (identificador único universal).

##### How To Use

```javascript
// Grupo obtido a partir do UID.
const grupo = _group.get("0dd572b8-7841-4977-80de-abb9660a0df0")
_out.json(grupo)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **idOuUid** | _string_ | Tanto pode ser um ID ou um UID do grupo. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Dados do grupo encontrado.

---

## id

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>id</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Obtém o identificador numérico do grupo de quem está autenticado.

##### How To Use

```javascript
// Group ID of the authenticated user.
_log.info(`Group ID: ${_group.id()}`)
```

##### Return

( _int_ )

ID (numeric identifier) of the logged-in user's group.

---

## load

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Group](/docs/library/resources/group)</span>
##### Return

( _[Group](/docs/library/resources/group)_ )


---

## name

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtém o nome completo do grupo do utilizador que está autenticado.

##### How To Use

```javascript
// Nome do grupo do utilizador autenticado.
_log.info(`Nome do Grupo: ${_group.name()}`)
```

##### Return

( _string_ )

Nome do grupo do utilizador logado.

---

## remove

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Remove o grupo refente ao ID passado.

##### How To Use

```javascript
// Remove o grupo:
const grupo = _group.firstByCode("exemplo")
_group.remove(
    grupo.getInt("id")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | O ID (identificador númerico) do grupo. |

##### Return

( _boolean_ )

It was successfully deleted.

---

## search

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>termo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Pesquisa os grupos que tem alguma ocorrência nos dados com o texto de pesquisa passado.

##### How To Use

```javascript
// Pesquisa grupos com o nome "Exemplo".
const grupos = _group.search("Exemplo")
for (const grupo of grupos) {
    _log.info(`Grupo encontrado ${grupo.getString("name")}`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **termo** | _string_ | Chave de pesquisa. |

##### Return

( _java.util.List_ )

Lista de dados dos grupos encontrados.

---

## searchFirst

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>searchFirst</span>(<span style={{color: '#FF8000'}}>termo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

O primeiro resultado da pesquisa de grupos que tem alguma ocorrência nos dados do termo passado.

##### How To Use

```javascript
// O primeiro grupo que tem o e-mail com @exemplo.com.
const grupo = _group.search("@exemplo.com")
_out.json(grupo)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **termo** | _string_ | Chave de pesquisa. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Dados do grupo encontrado.

---

## uid

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>uid</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtém o identificador único universal do grupo de quem está autenticado.

##### How To Use

```javascript
// UUID do grupo do utilizador autenticado.
_log.info(`UID do Grupo: ${_group.uid()}`)
```

##### Return

( _string_ )

UUID (identificador único universal) do grupo do utilizador logado.

---

## update

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dadosGrupo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Atualiza os dados do grupo referente ao ID passado.

##### How To Use

```javascript
// Atualiza o grupo:
const grupo = _group.firstByMail("grupo@exemplo.com")
grupo.set("name", "Novo Nome")
_group.update(
    grupo.getInt("id"),
    grupo
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | O ID (identificador númerico) do grupo. |
| **dadosGrupo** | _[Values](/docs/library/objects/Values)_ | Dados do grupo para atualizar a informação armazenada em base de dados. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>dadosUtilizador</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Atualiza os dados do grupo referente ao ID passado.

##### How To Use

```javascript
// Atualiza o utilizador:
const grupo = _group.firstByMail("grupo@exemplo.com")
grupo.set("name", "Novo Nome")
_group.update(
    grupo
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dadosUtilizador** | _[Values](/docs/library/objects/Values)_ | Dados do grupo para atualizar a informação armazenada em base de dados. |

##### Return

( _boolean_ )

It was successfully updated.

---

