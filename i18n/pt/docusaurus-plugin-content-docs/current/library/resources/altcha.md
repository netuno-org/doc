---
id: altcha
title: Altcha
sidebar_label: Altcha
---

Suporte ao [Altcha](https://altcha.org/), captcha open-source que implementa o mecanismo de segurança que evita robôs e garante interação humana na execução dos serviços na API REST.

Exemplo da configuração completa com os valores padrão:
```json
"altcha": {
    "enabled": true,
    "algorithm": "PBKDF2/SHA-256",
    "secret": "POR_PADRÃO_O_SEGREDO_É_AUTOGERADO",
    "keySecret": "POR_PADRÃO_A_CHAVE_DO_SEGREDO_É_AUTOGERADO",
    "cost": 10000,
    "counter": 10000,
    "expires": 3600, // EM SEGUNDOS
    "checkExpires": true
}
```



```javascript
const altchaPayload = _req.getString("altcha");
if (_altcha.enabled() && !_altcha.verifySolution(altchaPayload)) {
    _header.status(409);
    _out.json(
        _val.map()
            .set("error", `invalid-altcha-payload`)
    );
    _exec.stop();
}

```

---

## algorithm

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>algorithm</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

O tipo de algoritmo que é utilizado na encriptação.

##### Retorno

( _string_ )

O código que identifica o algoritmo de encriptação.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>algorithm</span>(<span style={{color: '#FF8000'}}>algoritmo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define o tipo de algoritmo que é utilizado na encriptação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **algoritmo** | _string_ | Código que identifica o algoritmo de encriptação. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## challenge

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>challenge</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Gera as configurações de desafio para o widget do frontend.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Dados de configuração para o widget poder processar o resultado do desafio.

---

## checkExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>checkExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Obtém se checa o tempo de expiração ou não.

##### Retorno

( _boolean_ )

Checar o tempo de expiração ou não.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>checkExpires</span>(<span style={{color: '#FF8000'}}>checaExpira</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define se checa o tempo de expiração ou não.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **checaExpira** | _boolean_ | Se deve checar o tempo de expiração ou não. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## cost

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>cost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Quantidade de interações para chegar ao prefixo da chave derivada.

##### Retorno

( _long_ )

Contagem de força bruta.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>cost</span>(<span style={{color: '#FF8000'}}>custo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define a quantidade de interações para chegar ao prefixo da chave derivada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **custo** | _int_ | O número da contagem de força bruta. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## counter

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>counter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

No modo determinístico, é calculado o prefixo da chave a partir do contador.

##### Retorno

( _long_ )

Contador do modo determinístico.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>counter</span>(<span style={{color: '#FF8000'}}>contador</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define no modo determinístico, o contador que é utilizado para calcular o prefixo da chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contador** | _int_ | O valor do contador do modo determinístico. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## enabled

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Obtém se o Altcha está habilitado.

##### Retorno

( _boolean_ )

Se está ativo ou não.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>habilitado</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define se o Altcha está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **habilitado** | _boolean_ | Se deve ser ativado ou não. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## expires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>expires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Obtém o tempo tempo de expiração em segundos.

##### Retorno

( _int_ )

O tempo de expiração em segundos.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>expires</span>(<span style={{color: '#FF8000'}}>expira</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define o tempo tempo de expiração em segundos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **expira** | _int_ | O limite em segundos para expiração. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## getAlgorithm

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getAlgorithm</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

O tipo de algoritmo que é utilizado na encriptação.

##### Retorno

( _string_ )

O código que identifica o algoritmo de encriptação.

---

## getCost

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getCost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Quantidade de interações para chegar ao prefixo da chave derivada.

##### Retorno

( _long_ )

Contagem de força bruta.

---

## getCounter

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getCounter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

No modo determinístico, é calculado o prefixo da chave a partir do contador.

##### Retorno

( _long_ )

Contador do modo determinístico.

---

## getExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Obtém o tempo tempo de expiração em segundos.

##### Retorno

( _int_ )

O tempo de expiração em segundos.

---

## getKeySecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getKeySecret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém a chave de assinatura secreta que está sendo utilizada na encriptação.

##### Retorno

( _string_ )

A chave de assinatura secreta utilizada na encriptação.

---

## getSecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getSecret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o código secreto que está sendo utilizado na encriptação.

##### Retorno

( _string_ )

O código secreto utilizado na encriptação.

---

## isCheckExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>isCheckExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Obtém se checa o tempo de expiração ou não.

##### Retorno

( _boolean_ )

Checar o tempo de expiração ou não.

---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Obtém se o Altcha está habilitado.

##### Retorno

( _boolean_ )

Se está ativo ou não.

---

## keySecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>keySecret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém a chave de assinatura secreta que está sendo utilizada na encriptação.

##### Retorno

( _string_ )

A chave de assinatura secreta utilizada na encriptação.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>keySecret</span>(<span style={{color: '#FF8000'}}>chaveSecreta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define a chave de assinatura secreta que será utilizada na encriptação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chaveSecreta** | _string_ | Chave de assinatura secreta que a encriptação deve usar. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## load

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Carrega as configurações relacionadas ao recurso Altcha na aplicação.

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## secret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>secret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o código secreto que está sendo utilizado na encriptação.

##### Retorno

( _string_ )

O código secreto utilizado na encriptação.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>secret</span>(<span style={{color: '#FF8000'}}>segredo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define o código secreto que será utilizado na encriptação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **segredo** | _string_ | O código secreto que a encriptação deve usar. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setAlgorithm

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setAlgorithm</span>(<span style={{color: '#FF8000'}}>algoritmo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define o tipo de algoritmo que é utilizado na encriptação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **algoritmo** | _string_ | Código que identifica o algoritmo de encriptação. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setCheckExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setCheckExpires</span>(<span style={{color: '#FF8000'}}>checaExpira</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define se checa o tempo de expiração ou não.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **checaExpira** | _boolean_ | Se deve checar o tempo de expiração ou não. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setCost

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setCost</span>(<span style={{color: '#FF8000'}}>custo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define a quantidade de interações para chegar ao prefixo da chave derivada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **custo** | _int_ | O número da contagem de força bruta. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setCounter

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setCounter</span>(<span style={{color: '#FF8000'}}>contador</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define no modo determinístico, o contador que é utilizado para calcular o prefixo da chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contador** | _int_ | O valor do contador do modo determinístico. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setEnabled

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>habilitado</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define se o Altcha está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **habilitado** | _boolean_ | Se deve ser ativado ou não. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setExpires</span>(<span style={{color: '#FF8000'}}>expira</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define o tempo tempo de expiração em segundos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **expira** | _int_ | O limite em segundos para expiração. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setKeySecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setKeySecret</span>(<span style={{color: '#FF8000'}}>chaveSecreta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define a chave de assinatura secreta que será utilizada na encriptação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chaveSecreta** | _string_ | Chave de assinatura secreta que a encriptação deve usar. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## setSecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setSecret</span>(<span style={{color: '#FF8000'}}>segredo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Descrição

Define o código secreto que será utilizado na encriptação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **segredo** | _string_ | O código secreto que a encriptação deve usar. |

##### Retorno

( _[Altcha](/docs/library/resources/altcha)_ )

Instância atual do recurso Altcha.

---

## verifySolution

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>verifySolution</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o resultado do desafio gerado pelo widget no frontend é válido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **payload** | _string_ |   |

##### Retorno

( _boolean_ )

Se o resultado do desafio é válido ou não.

---

