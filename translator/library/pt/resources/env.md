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

#### <span style={{fontWeight: 'normal'}}>_env</span>.<span style={{color: '#008000'}}>current</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Nome do ambiente que está configurado no Netuno.

##### Como Usar

```javascript
_out.println(`Ambiente Atual: ${_env.current()}`)
```

##### Retorno

( _string_ )

O nome do ambiente atual.

---

## is

---

#### <span style={{fontWeight: 'normal'}}>_env</span>.<span style={{color: '#008000'}}>is</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Serve para verificar o ambiente atual, útil em condições `if`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Compara se o nome do ambiente configurado em utilização é igual ao valor passado. |

##### Retorno

( _boolean_ )

Se o ambiente configurado têm o mesmo nome.

---

## isGraal

---

#### <span style={{fontWeight: 'normal'}}>_env</span>.<span style={{color: '#008000'}}>isGraal</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Serve para verificar se está a utilizar o Graal.

##### Retorno

( _boolean_ )

Caso Graal esteja em uso será retornado true.

---

