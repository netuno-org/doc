---
id: env
title: Env
sidebar_label: Env
---

Permite consultar o ambiente de desenvolvimento que é configurado no ficheiro `config.js` que encontra-se na raíz do Netuno.
É utilizada a configuração da aplicação que tem o respectivo nome do ambiente.

```javascript
// Configurado em $NETUNO_HOME/config.js:
config.env = 'development'
```

---

## current

---

#### _env.current() : string
##### Descrição

Nome do ambiente que está configurado no Netuno.

##### Como Usar

```javascript
_out.println(`Ambiente Atual: ${_env.current()}`)
```

##### Retorno

( string )

O nome do ambiente atual.

---

## is

---

#### _env.is(nome: string) : _boolean_
##### Descrição

Serve para verificar o ambiente atual, útil em condições `if`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Compara se o nome do ambiente configurado em utilização é igual ao valor passado. |

##### Retorno

( _boolean_ )

Se o ambiente configurado têm o mesmo nome.

---

## isGraal

---

#### _env.isGraal() : _boolean_
##### Descrição

Serve para verificar se está a utilizar o Graal.

##### Retorno

( _boolean_ )

Caso Graal esteja em uso será retornado true.

---

