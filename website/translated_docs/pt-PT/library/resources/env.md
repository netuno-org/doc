---
id: env
title: Env
sidebar_label: Env
---

Permite consultar o ambiente de desenvolvimento que é configurado no ficheiro `config.js` que encontra-se na raíz do Netuno.
É utilizada a configuração da aplicação que tem o respectivo nome do ambiente.

```javascript
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
_exec.service("outro-script-talvez-em-outro-linguagem");
```

##### Retorno

( string )


---

## is

---

#### _env.is(caminho: string) : _boolean_
##### Descrição

.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do script com origem em 'services/' a executar. |

##### Retorno

( _boolean_ )


---

## isGraal

---

#### _env.isGraal() : _boolean_
##### Retorno

( _boolean_ )


---

