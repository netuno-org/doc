---
id: Column
title: Column
sidebar_label: Column
---

Realiza a manipulação de colunas em base de dados.

```javascript
if (!_db.checkExists().column("client", "description")) {
    _db.column().rename(
        "client", // Tabela
        "description", // Nome Antigo
        "name" // Novo Nome
    );
}
```

---

## changeType

---

#### <span style="color: #008000">changeType</span>(<span style="color: #FF8000">table</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## drop

---

#### <span style="color: #008000">drop</span>(<span style="color: #FF8000">table</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## getDefault

---

#### <span style="color: #008000">getDefault</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getKey

---

#### <span style="color: #008000">getKey</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getMaxLength

---

#### <span style="color: #008000">getMaxLength</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## getName

---

#### <span style="color: #008000">getName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getType

---

#### <span style="color: #008000">getType</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.manager.Column$Type</span>
##### Return

( _org.netuno.tritao.db.manager.Column$Type_ )


---

## isH2

---

#### <span style="color: #008000">isH2</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="color: #008000">isH2</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMSSQL

---

#### <span style="color: #008000">isMSSQL</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="color: #008000">isMSSQL</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMariaDB

---

#### <span style="color: #008000">isMariaDB</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="color: #008000">isMariaDB</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isNotNull

---

#### <span style="color: #008000">isNotNull</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isPostgreSQL

---

#### <span style="color: #008000">isPostgreSQL</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="color: #008000">isPostgreSQL</span>(<span style="color: #FF8000">builder</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.Builder</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isPrimaryKey

---

#### <span style="color: #008000">isPrimaryKey</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## rename

---

#### <span style="color: #008000">rename</span>(<span style="color: #FF8000">table</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">oldName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">newName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## renameIfExists

---

#### <span style="color: #008000">renameIfExists</span>(<span style="color: #FF8000">table</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">oldName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">newName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## sequence

---

#### <span style="color: #008000">sequence</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## setDefault

---

#### <span style="color: #008000">setDefault</span>() : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Return

( _[Column](../../objects/Column)_ )


---

#### <span style="color: #008000">setDefault</span>(<span style="color: #FF8000">_default</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### <span style="color: #008000">setDefault</span>(<span style="color: #FF8000">_default</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _float_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### <span style="color: #008000">setDefault</span>(<span style="color: #FF8000">_default</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _int_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### <span style="color: #008000">setDefault</span>(<span style="color: #FF8000">_default</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _string_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentDate

---

#### <span style="color: #008000">setDefaultAsCurrentDate</span>() : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentTime

---

#### <span style="color: #008000">setDefaultAsCurrentTime</span>() : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentTimeStamp

---

#### <span style="color: #008000">setDefaultAsCurrentTimeStamp</span>() : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsNewUUID

---

#### <span style="color: #008000">setDefaultAsNewUUID</span>() : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Return

( _[Column](../../objects/Column)_ )


---

## setMaxLength

---

#### <span style="color: #008000">setMaxLength</span>(<span style="color: #FF8000">maxLength</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **maxLength** | _int_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setName

---

#### <span style="color: #008000">setName</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setNotNull

---

#### <span style="color: #008000">setNotNull</span>(<span style="color: #FF8000">notNull</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **notNull** | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setPrimaryKey

---

#### <span style="color: #008000">setPrimaryKey</span>(<span style="color: #FF8000">primaryKey</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **primaryKey** | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setType

---

#### <span style="color: #008000">setType</span>(<span style="color: #FF8000">typeName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **typeName** | _string_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### <span style="color: #008000">setType</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.db.manager.Column$Type</span>) : <span style="font-weight: normal; font-style: italic;">[Column](../../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _org.netuno.tritao.db.manager.Column$Type_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## toDefaultDefinition

---

#### <span style="color: #008000">toDefaultDefinition</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## toTypeDefinition

---

#### <span style="color: #008000">toTypeDefinition</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

