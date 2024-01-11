---
id: Sequence
title: Sequence
sidebar_label: Sequence
---

Realiza a manipulação de sequências em base de dados.

```javascript
if (!_db.checkExists().sequence("client", "name")) {
    _db.index().create(
        "client", // Nome da Tabela
        "name" // Nome da Coluna
    ); // O index client_name_idx será criado criado.
}
```

---

## commandNextValue

---

#### <span style="color: #008000">commandNextValue</span>(<span style="color: #FF8000">sequenceName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Retorno

( _string_ )


---

## create

---

#### <span style="color: #008000">create</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Sequence](../../objects/Sequence)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

#### <span style="color: #008000">create</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">startWith</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Sequence](../../objects/Sequence)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **startWith** | _int_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## drop

---

#### <span style="color: #008000">drop</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Sequence](../../objects/Sequence)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## getCurrentValue

---

#### <span style="color: #008000">getCurrentValue</span>(<span style="color: #FF8000">sequenceName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Retorno

( _int_ )


---

## getKey

---

#### <span style="color: #008000">getKey</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## isH2

---

#### <span style="color: #008000">isH2</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="color: #008000">isH2</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMSSQL

---

#### <span style="color: #008000">isMSSQL</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="color: #008000">isMSSQL</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMariaDB

---

#### <span style="color: #008000">isMariaDB</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="color: #008000">isMariaDB</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isPostgreSQL

---

#### <span style="color: #008000">isPostgreSQL</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="color: #008000">isPostgreSQL</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## rename

---

#### <span style="color: #008000">rename</span>(<span style="color: #FF8000">oldName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">newName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Sequence](../../objects/Sequence)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## renameIfExists

---

#### <span style="color: #008000">renameIfExists</span>(<span style="color: #FF8000">oldName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">newName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Sequence](../../objects/Sequence)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## restart

---

#### <span style="color: #008000">restart</span>(<span style="color: #FF8000">sequenceName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">nextValue</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Sequence](../../objects/Sequence)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |
| **nextValue** | _int_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

#### <span style="color: #008000">restart</span>(<span style="color: #FF8000">sequenceName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Sequence](../../objects/Sequence)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |
| **tableName** | _string_ |   |
| **column** | _string_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## sequence

---

#### <span style="color: #008000">sequence</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## supported

---

#### <span style="color: #008000">supported</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

