---
id: group
title: Group
sidebar_label: Group
---

Gestão dos grupos da aplicação e obtenção dos dados do grupo do utilizador autenticado.

---

## all

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Obtém a lista de dados de todos os grupo.

##### Como Usar

```javascript
// Retorna todos os grupos existentes.
_out.json(_group.all())
```

##### Retorno

( _java.util.List_ )

Lista de todos os dados de todos os grupos.

---

## allByCode

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>allByCode</span>(<span style={{color: '#FF8000'}}>codigo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Obtém todos os grupos a partir do código alternativo.

##### Como Usar

```javascript
// Lista em log os grupos que tem o código exemplo.
const grupos = _group.allByCode("exemplo")
for (const grupo of grupos) {
    _log.info(`Grupo ${grupo.getString("name")}`)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codigo** | _string_ | Código alternativo que os grupos podem ter associado. |

##### Retorno

( _java.util.List_ )

Lista dos utilizadores encontrados para o código alternativo.

---

## code

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>code</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o código alternativo do grupo do utilizador que está autenticado.

##### Como Usar

```javascript
// Código auxiliar do grupo do utilizador autenticado.
_log.info(`Código do Utilizador: ${_group.code()}`)
```

##### Retorno

( _string_ )

Código auxiliar do grupo do utilizador logado.

---

## create

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>dadosGrupo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Cria o novo grupo.

##### Como Usar

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

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dadosGrupo** | _[Values](../objects/Values)_ | Dados do grupo que vai ser criado. |

##### Retorno

( _int_ )

ID do grupo que foi criado.

---

## createIfNotExists

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>createIfNotExists</span>(<span style={{color: '#FF8000'}}>dadosGrupo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Cria o utilizador caso não exista ainda.

##### Como Usar

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

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dadosGrupo** | _[Values](../objects/Values)_ | Dados do grupo que vai ser criado caso não exista ainda. |

##### Retorno

( _boolean_ )

Foi criado com sucesso.

---

## data

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>data</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém toda a informação de dados do grupo do utilizador que está autenticado.

##### Como Usar

```javascript
// Toda informação do grupo do utilizador autenticado.
_out.json(_group.data())
```

##### Retorno

( _[Values](../objects/Values)_ )

Todos os dados do grupo do utilizador logado.

---

## firstByCode

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByCode</span>(<span style={{color: '#FF8000'}}>codigo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de um grupo a partir do código alternativo.

##### Como Usar

```javascript
// Grupo que tem o código exemplo.
const grupo = _group.firstByCode("exemplo")
_out.json(grupo)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codigo** | _string_ | Código alternativo que o grupo pode ter associado. |

##### Retorno

( _[Values](../objects/Values)_ )

Dados do grupo encontrado com o código alternativo.

---

## firstByMail

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByMail</span>(<span style={{color: '#FF8000'}}>mail</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de um grupo a partir do e-mail.

##### Como Usar

```javascript
// Grupo obtido a partir do e-mail.
const grupo = _group.firstByMail("grupo@exemplo.com")
_out.json(grupo)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mail** | _string_ | E-mail do grupo. |

##### Retorno

( _[Values](../objects/Values)_ )

Dados do grupo encontrado com o e-mail.

---

## firstByName

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByName</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de um grupo a partir do nome.

##### Como Usar

```javascript
// Grupo que tem o nome.
const grupo = _group.firstByName("Exemplo")
_out.json(grupo)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome do grupo. |

##### Retorno

( _[Values](../objects/Values)_ )

Dados do utilizador encontrado com o nome.

---

## get

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de um grupo a partir do ID (identificador numérico).

##### Como Usar

```javascript
// Grupo obtido a partir do ID.
const grupo = _group.get(1)
_out.json(grupo)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ | Identificador numérico do grupo. |

##### Retorno

( _[Values](../objects/Values)_ )

Dados do grupo encontrado.

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>idOuUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de um grupo a partir do ID (identificador numérico) ou do UUID (identificador único universal).

##### Como Usar

```javascript
// Grupo obtido a partir do UID.
const grupo = _group.get("0dd572b8-7841-4977-80de-abb9660a0df0")
_out.json(grupo)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **idOuUid** | _string_ | Tanto pode ser um ID ou um UID do grupo. |

##### Retorno

( _[Values](../objects/Values)_ )

Dados do grupo encontrado.

---

## id

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>id</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Obtém o identificador númerico do grupo de quem está autenticado.

##### Como Usar

```javascript
// ID do grupo do utilizador autenticado.
_log.info(`ID do Grupo: ${_group.id()}`)
```

##### Retorno

( _int_ )

ID (identificador númerico) do grupo do utilizador logado.

---

## load

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Group](../resources/group)</span>
##### Retorno

( _[Group](../resources/group)_ )


---

## name

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o nome completo do grupo do utilizador que está autenticado.

##### Como Usar

```javascript
// Nome do grupo do utilizador autenticado.
_log.info(`Nome do Grupo: ${_group.name()}`)
```

##### Retorno

( _string_ )

Nome do grupo do utilizador logado.

---

## remove

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Remove o grupo refente ao ID passado.

##### Como Usar

```javascript
// Remove o grupo:
const grupo = _group.firstByCode("exemplo")
_group.remove(
    grupo.getInt("id")
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ | O ID (identificador númerico) do grupo. |

##### Retorno

( _boolean_ )

Foi apagado com sucesso.

---

## search

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>termo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Pesquisa os grupos que tem alguma ocorrência nos dados com o texto de pesquisa passado.

##### Como Usar

```javascript
// Pesquisa grupos com o nome "Exemplo".
const grupos = _group.search("Exemplo")
for (const grupo of grupos) {
    _log.info(`Grupo encontrado ${grupo.getString("name")}`)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **termo** | _string_ | Chave de pesquisa. |

##### Retorno

( _java.util.List_ )

Lista de dados dos grupos encontrados.

---

## searchFirst

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>searchFirst</span>(<span style={{color: '#FF8000'}}>termo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

O primeiro resultado da pesquisa de grupos que tem alguma ocorrência nos dados do termo passado.

##### Como Usar

```javascript
// O primeiro grupo que tem o e-mail com @exemplo.com.
const grupo = _group.search("@exemplo.com")
_out.json(grupo)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **termo** | _string_ | Chave de pesquisa. |

##### Retorno

( _[Values](../objects/Values)_ )

Dados do grupo encontrado.

---

## uid

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>uid</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o identificador único universal do grupo de quem está autenticado.

##### Como Usar

```javascript
// UUID do grupo do utilizador autenticado.
_log.info(`UID do Grupo: ${_group.uid()}`)
```

##### Retorno

( _string_ )

UUID (identificador único universal) do grupo do utilizador logado.

---

## update

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>dadosGrupo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Atualiza os dados do grupo referente ao ID passado.

##### Como Usar

```javascript
// Atualiza o grupo:
const grupo = _group.firstByMail("grupo@exemplo.com")
grupo.set("name", "Novo Nome")
_group.update(
    grupo.getInt("id"),
    grupo
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ | O ID (identificador númerico) do grupo. |
| **dadosGrupo** | _[Values](../objects/Values)_ | Dados do grupo para atualizar a informação armazenada em base de dados. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>dadosUtilizador</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Atualiza os dados do grupo referente ao ID passado.

##### Como Usar

```javascript
// Atualiza o utilizador:
const grupo = _group.firstByMail("grupo@exemplo.com")
grupo.set("name", "Novo Nome")
_group.update(
    grupo
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dadosUtilizador** | _[Values](../objects/Values)_ | Dados do grupo para atualizar a informação armazenada em base de dados. |

##### Retorno

( _boolean_ )

Foi atualizado com sucesso.

---

