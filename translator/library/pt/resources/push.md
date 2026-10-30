---
id: push
title: Push
sidebar_label: Push
---

Gestor de notificações no browser, integra a [Push API](https://developer.mozilla.org/pt-BR/docs/Web/API/Push_API) e utiliza o [Web Push](https://github.com/interaso/webpush).

---

## applicationServerKey

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>applicationServerKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getApplicationServerKey

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>getApplicationServerKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getPrivateKey

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>getPrivateKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getPublicKey

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>getPublicKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Push](/docs/library/resources/push)</span>
##### Retorno

( _[Push](/docs/library/resources/push)_ )


---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Push](/docs/library/resources/push)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ |   |

##### Retorno

( _[Push](/docs/library/resources/push)_ )


---

## privateKey

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>privateKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## publicKey

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>publicKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## send

---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>endpoint</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>p256dh</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **payload** | _string_ |   |
| **endpoint** | _string_ |   |
| **p256dh** | _string_ |   |
| **auth** | _string_ |   |

##### Retorno

( _[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)_ )


---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>endpoint</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>p256dh</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ttl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>topic</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>urgency</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **payload** | _string_ |   |
| **endpoint** | _string_ |   |
| **p256dh** | _string_ |   |
| **auth** | _string_ |   |
| **ttl** | _int_ |   |
| **topic** | _string_ |   |
| **urgency** | _string_ |   |

##### Retorno

( _[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)_ )


---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>endpoint</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>p256dh</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **payload** | _java.util.Map_ |   |
| **endpoint** | _string_ |   |
| **p256dh** | _string_ |   |
| **auth** | _string_ |   |

##### Retorno

( _[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)_ )


---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>endpoint</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>p256dh</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ttl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>topic</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>urgency</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **payload** | _java.util.Map_ |   |
| **endpoint** | _string_ |   |
| **p256dh** | _string_ |   |
| **auth** | _string_ |   |
| **ttl** | _int_ |   |
| **topic** | _string_ |   |
| **urgency** | _string_ |   |

##### Retorno

( _[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)_ )


---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)_ )


---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>endpoint</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>p256dh</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **payload** | _[Values](/docs/library/objects/Values)_ |   |
| **endpoint** | _string_ |   |
| **p256dh** | _string_ |   |
| **auth** | _string_ |   |

##### Retorno

( _[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)_ )


---

#### <span style={{fontWeight: 'normal'}}>_push</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>endpoint</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>p256dh</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ttl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>topic</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>urgency</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **payload** | _[Values](/docs/library/objects/Values)_ |   |
| **endpoint** | _string_ |   |
| **p256dh** | _string_ |   |
| **auth** | _string_ |   |
| **ttl** | _int_ |   |
| **topic** | _string_ |   |
| **urgency** | _string_ |   |

##### Retorno

( _[PushSubscriptionState](/docs/library/objects/PushSubscriptionState)_ )


---

