---
id: Index
title: Index
sidebar_label: Index
---

Realiza a manipulação de indexes em base de dados.

```javascript
if (!_db.checkExists().index("client", "name")) {
    _db.index().create(
        "client", // Nome da Tabela
        "name" // Nome da Coluna
    ); // O index client_name_idx será criado criado.
}
```

---

## create

---

#### <span style="color: #008000">create</span>(<span style="color: #FF8000">table</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Index](../../objects/Index)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Retorno

( _[Index](../../objects/Index)_ )


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

## sequence

---

#### <span style="color: #008000">sequence</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

