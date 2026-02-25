---
id: val
title: Val
sidebar_label: Val
---

Recurso para interagir com listas ou mapas com chaves e valores (dicionários).

Permite o armazenamento de dados que pode ser representado como uma lista ou como um mapa de dados (dicionário).

Uma vez inicializado como uma dessas estruturas, ou seja, como uma lista ou como um mapa, então não poderá mais ser utilizada como outra.

```javascript
const mapaDeDados = _val.map()
    .set('id', 1)
    .set('name', 'Netuno')
    .set('site', 'www.netuno.org')
    .set('active', 'true')
const idComoString = mapaDeDados.getString('id')
const name = mapaDeDados['name']
const site = mapaDeDados['site']
const active = mapaDeDados.getBoolean('active')

const listaDeDados = _val.list()
    .add('Linha 1')
    .push('Linha 2')
    .add('Linha 3')
for (const linha of listaDeDados) {
    _log.info(linha)
}
```

---

## cast

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>cast</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Transforma um objeto em valores se possível.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O objeto convertido para valores.

---

## fromJSON

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>fromJSON</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Obtém o values de uma string com array ou objecto em JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Conteúdo JSON. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O objeto de valores carregado com a estrutura e dados obtidos com a string JSON.

---

## global

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>global</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Instância do tipo Values para armazenar dados que ficam disponíveis apenas durante a execução do pedido HTTP, é útil para partilhar dados entre scripts.

##### Como Usar

```javascript
// Define que esta sendo processado o cliente 10:
const global = _val.global()
global.set('clienteId', 10)
_out.json(global)
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Dados que são partilhados globalmente entre os diversos scripts durante a execução da chamada HTTP.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O novo objeto de valores genérico.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable_ | Objeto para carregar o novo objeto de valores criado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O novo objeto de valores iniciado com os dados do objeto passado.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _java.lang.Object_ | Objeto para carregar o novo objeto de valores criado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O novo objeto de valores iniciado com os dados do objeto passado.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Objeto para carregar o novo objeto de valores criado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O novo objeto de valores iniciado com os dados do objeto passado.

---

## is

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>is</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o objeto é do tipo de valores.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _java.lang.Object_ | Objeto para ser validado se é do tipo de valores. |

##### Retorno

( _boolean_ )

Resultado da verificação se é do tipo valores ou não.

---

## list

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>list</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Inicia um novo objeto de valores mas do tipo lista.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O novo objeto de valores iniciado como lista.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>list</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Objeto de valores no modo lista. |

##### Retorno

( _java.util.List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>list</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores no modo lista. |

##### Retorno

( _java.util.List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

## map

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>map</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Inicia um novo objeto de valores mas do tipo mapa.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O novo objeto de valores iniciado como mapa.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>map</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Objeto de valores no modo mapa. |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>map</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores no modo mapa. |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

---

## persistent

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>persistent</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Instância do tipo Values para armazenar dados que persistem na memória, ou seja os dados aqui guardados ficam disponíveis por todos os pedidos HTTP.

##### Como Usar

```javascript
// Contagem mantida em memória que aumenta a cada refresh:
const persistente = _val.persistent()
persistente.set('counter', persistente.getInt('counter') + 1)
_out.json(persistente)
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Dados que são mantidos em memória e que estão disponíveis para todas as solicitações.

---

## toJSON

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.util.List_ | Objeto de valores para ser transformado no formato JSON. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>emHTML</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.util.List_ | Objeto de valores para ser transformado no formato JSON. |
| **emHTML** | _boolean_ | Ativa a formatação automática em HTML dos caracteres especiais que estão nos valores de texto, útil para a transformação de acentos. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>emHTML</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Como Usar

```javascript
const lista = _val.list()
    .add("Item 1")
    .add("Item 2")
    .add("Item 3")
const listaString = _val.toJSON(lista)
_out.println(`${listaString}<br/>`)
const mapa = _val.map()
    .set("chave1", "Valor 1")
    .set("chave2", "Valor 2")
const mapaString = _val.toJSON(mapa)
_out.println(`${mapaString}<br/>`)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.util.List_ | Objeto de valores para ser transformado no formato JSON. |
| **emHTML** | _boolean_ | Ativa a formatação automática em HTML dos caracteres especiais que estão nos valores de texto, útil para a transformação de acentos. |
| **indentacao** | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>, <span style={{color: '#FF8000'}}>indentacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.util.List_ | Objeto de valores para ser transformado no formato JSON. |
| **indentacao** | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>emHTML</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |
| **emHTML** | _boolean_ | Ativa a formatação automática em HTML dos caracteres especiais que estão nos valores de texto, útil para a transformação de acentos. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>emHTML</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Como Usar

```javascript
const lista = _val.list()
    .add("Item 1")
    .add("Item 2")
    .add("Item 3")
const listaString = _val.toJSON(lista)
_out.println(`${listaString}<br/>`)
const mapa = _val.map()
    .set("chave1", "Valor 1")
    .set("chave2", "Valor 2")
const mapaString = _val.toJSON(mapa)
_out.println(`${mapaString}<br/>`)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |
| **emHTML** | _boolean_ | Ativa a formatação automática em HTML dos caracteres especiais que estão nos valores de texto, útil para a transformação de acentos. |
| **indentacao** | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>indentacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |
| **indentacao** | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( _string_ )

String JSON com a estrutura e dados do objeto de valores.

---

## toList

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toList</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Objeto de valores no modo lista. |

##### Retorno

( _java.util.List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toList</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores no modo lista. |

##### Retorno

( _java.util.List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

## toMap

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toMap</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _java.lang.Object_ | Objeto de valores no modo mapa. |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

---

#### <span style={{fontWeight: 'normal'}}>_val</span>.<span style={{color: '#008000'}}>toMap</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Objeto de valores no modo mapa. |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

---

