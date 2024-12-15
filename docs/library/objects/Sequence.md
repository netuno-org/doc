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

#### <span style={{color: '#008000'}}>commandNextValue</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Return

( _string_ )


---

## create

---

#### <span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Sequence](../objects/Sequence)_ )


---

#### <span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>startWith</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **startWith** | _int_ |   |

##### Return

( _[Sequence](../objects/Sequence)_ )


---

## drop

---

#### <span style={{color: '#008000'}}>drop</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Sequence](../objects/Sequence)_ )


---

## getCurrentValue

---

#### <span style={{color: '#008000'}}>getCurrentValue</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Return

( _int_ )


---

## getKey

---

#### <span style={{color: '#008000'}}>getKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## isH2

---

#### <span style={{color: '#008000'}}>isH2</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isH2</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMSSQL

---

#### <span style={{color: '#008000'}}>isMSSQL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isMSSQL</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMariaDB

---

#### <span style={{color: '#008000'}}>isMariaDB</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isMariaDB</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isPostgreSQL

---

#### <span style={{color: '#008000'}}>isPostgreSQL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isPostgreSQL</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## rename

---

#### <span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>oldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Sequence](../objects/Sequence)_ )


---

## renameIfExists

---

#### <span style={{color: '#008000'}}>renameIfExists</span>(<span style={{color: '#FF8000'}}>oldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Sequence](../objects/Sequence)_ )


---

## restart

---

#### <span style={{color: '#008000'}}>restart</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nextValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |
| **nextValue** | _int_ |   |

##### Return

( _[Sequence](../objects/Sequence)_ )


---

#### <span style={{color: '#008000'}}>restart</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](../objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |
| **tableName** | _string_ |   |
| **column** | _string_ |   |

##### Return

( _[Sequence](../objects/Sequence)_ )


---

## sequence

---

#### <span style={{color: '#008000'}}>sequence</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## supported

---

#### <span style={{color: '#008000'}}>supported</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

