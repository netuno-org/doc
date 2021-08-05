---
id: values
title: Values
sidebar_label: Values
---

---

## .set

---

**.set**(key: _string_, value: _object_) : _values_

#### Descrição

Associa um objeto a uma chave.

#### Como usar

```javascript
var item = _val.init()
item.set('id', 1)
  .set('name', 'Netuno')
  .set('site', 'www.netuno.org')
  .set('active', 'true')
var idComoString = item.getString('id')
var name = item['name']
var site = item['site']
var active = item.getBoolean('active')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que terá o objeto associado. |
| `value`   | object | obrigatório | Objeto que será associado a chave. |

---

## .getInt

---

**.getInt**(key: _string_, defaultValue= _null_ : _integer_) : _integer_

#### Descrição

Devolve o objeto convertido em inteiro referente à chave que é passada.

#### Como usar

```javascript
// Cria um novo objeto do tipo Values
var item = _val.init()
// Define registo com chave = valor
item.set('id', '1')
// Retorna o valor convertido em inteiro
var idNumeroInteiro = item.getInt('id')
// Retorna o valor padrão caso não exista a chave passada
var numeroPadrao = item.getInt('outro', 1)
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que tem o valor que deseja obter. |
| `defaultValue`   | integer | opcional | Valor pré definido retornado caso a chave não exista. |

#### Retorno

(_integer_)

O valor que está associado à chave convertido para inteiro.

---

## .getFloat

---
**.getFloat**(key: _string_, defaultValue= _null_ : _float_) : _float_

##### Descrição

Devolve o objeto convertido em float (número com casas decimais) referente à chave que é passada.

#### Como usar

```javascript
// Cria um novo objeto do tipo Values
var item = _val.init()
// Define registo com chave = valor
item.set('valor', '1.24')
// Retorna o valor convertido em float
var numeroComDecimais = item.getFloat('valor')
// Retorna o valor padrão caso não exista a chave passada
var numeroPadrao = item.getFloat('outro', 1.24)
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que tem o valor que deseja obter. |
| `defaultValue`   | float | opcional | Valor pré definido retornado caso a chave não exista. |

#### Retorno

(_float_)

O valor que está associado à chave convertido para float.

---

## .getDouble

---

**.getDouble**(key: _string_, defaultValue= _null_ : _double_) : _double_

#### Descrição

Devolve o objeto convertido em double (número com casas decimais com maior precisão) referente à chave que é passada.

#### Como usar

```javascript
// Cria um novo objeto do tipo Values
var item = _val.init();
// Define registo com chave = valor
item.set('valor', '1.244324534367')
// Retorna o valor convertido em double
var numeroComDecimais = item.getDouble('valor')
// Retorna o valor padrão caso não exista a chave passada
var numeroPadrao = item.getDouble('outro', 1.2344234)
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que tem o valor que deseja obter. |
| `defaultValue`   | double | opcional | Valor pré definido retornado caso a chave não exista. |

#### Retorno

(_double_)

O valor que está associado à chave convertido para double.

---

## .getBoolean

---

**.getBoolean**(key: _string_, defaultValue= _null_ : _boolean_) : _boolean_

#### Descrição

Devolve o objeto convertido em boolean (true ou false).

#### Como usar

```javascript
// Cria um novo objeto do tipo Values
var item = _val.init()
// Define registo com chave = valor
item.set('valor', 'true')
// Retorna o valor convertido em boolean
var booleano = item.getBoolean('valor')
// Retorna o valor padrão caso não exista a chave passada
var booleanoPadrao = item.getBoolean('outro', true)
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que tem o valor que deseja obter. |
| `defaultValue`   | boolean | opcional | Valor pré definido retornado caso a chave não exista. |

#### Retorno

(_boolean_)

O valor que está associado à chave convertido para boolean.

---

## .get

---

**.get**(key: _string_) : _object_

#### Descrição

Devolve o objeto como string referente à chave que é passada.

#### Como usar

```javascript
var item = _val.init()
item.set('id', 1)
var idComoString = item.getString('id')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que tem o valor que deseja obter. |

#### Retorno

(_object_)

O valor que está associado à chave convertido para object.

---

## .getString

---

Na função getString existem 2 tipos de funções com retornos diferentes.

* **.getString**( key: _string_, defaultValue= _null_ : _string_ ) : _string_
* **.getString**( key: _string_, defaultValue: _string_, charset: _string_ ) : _string_

**.getString**(key: _string_, defaultValue= _null_ : _string_) : _string_

#### Descrição

Devolve o objeto como string referente a chave que é passada.

#### Como usar

```javascript
// Cria um novo objeto do tipo Values
var item = _val.init()
// Define registo com chave = valor
item.set('id', 1)
// Retorna o valor convertido em string
var idComoString = item.getString('id')
// Retorna o valor padrão caso não exista a chave passada
var stringPadrao = item.getBoolean('outro', 'ok')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que tem o valor que deseja obter. |
| `defaultValue`   | string | opcional | Valor pré definido retornado caso a chave não exista. |

#### Retorno

(_string_)

O valor que está associado à chave convertido para string.

**.getString**(key: _string_, defaultValue: _string_, charset: _string_) : _string_

#### Descrição

Devolve o objeto como string referente à chave que é passada e permite definir o tipo de codificação de caracteres que será utilizado.

<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html" target="_blank">Lista dos encodings suportados</a>

#### Como usar

```javascript
// Cria um novo objeto do tipo Values
var animal = _val.init()
// Define registo com chave = valor
animal.set('nome', 'Camaleão')
// Retorna o valor convertido em string forçando o UTF-8
var nomeEmUTF8 = animal.getString('nome', 'Sem Nome', 'UTF-8')
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key`     | string | obrigatório | Nome da chave que tem o valor que deseja obter. |
| `defaultValue`   | string | opcional | Valor pré definido retornado caso a chave não exista. |
| `charset` | string | obrigatório | Encoding que será utilizado na obtenção da string, principais charsets: UTF-8 <br> UTF-16 <br> UTF-32 <br> windows-1252 <br> ISO-8859-15 |

#### Retorno

(_string_)

O valor que está associado à chave convertido para string com uma determinada codificação de caracteres.
