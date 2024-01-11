---
id: CheckExists
title: CheckExists
sidebar_label: CheckExists
---

Verifica se sequências, tabelas, colunas e indexes existem na base de dados.

```javascript
if (!_db.checkExists().table("client")) {
    _db.table().create(
        "client",
        _db.column().setName("id").setType("int").setPrimaryKey(true),
        _db.column().setName("name").setType("varchar").setNotNull(true).setDefault()
    );
}
```

---

## column

---

#### <span style="color: #008000">column</span>(<span style="color: #FF8000">table</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Return

( _boolean_ )


---

## getKey

---

#### <span style="color: #008000">getKey</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## index

---

#### <span style="color: #008000">index</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="color: #008000">index</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">columnName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **columnName** | _string_ |   |

##### Return

( _boolean_ )


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

## sequence

---

#### <span style="color: #008000">sequence</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="color: #008000">sequence</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="color: #008000">sequence</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">columnName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **columnName** | _string_ |   |

##### Return

( _boolean_ )


---

## table

---

#### <span style="color: #008000">table</span>(<span style="color: #FF8000">table</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |

##### Return

( _boolean_ )


---

