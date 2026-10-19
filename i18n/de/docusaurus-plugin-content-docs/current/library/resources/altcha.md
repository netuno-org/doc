---
id: altcha
title: Altcha
sidebar_label: Altcha
---

Support for [Altcha](https://altcha.org/), an open-source captcha that implements a security mechanism to prevent bots and ensure human interaction in the execution of services on the REST API.

Example of the complete configuration with default values:
```json
"altcha": {
    "enabled": true,
    "algorithm": "PBKDF2/SHA-256",
    "secret": "BY_DEFAULT_THE_SECRET_IS_AUTOGENERATE",
    "keySecret": "BY_DEFAULT_THE_SECRET_KEY_IS_AUTOGENERATE",
    "cost": 10000,
    "counter": 10000,
    "expires": 3600, // a SECONDS
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
##### Description

The type of algorithm used in the cryptography.

##### Return

( _string_ )

The code that identifies the encryption algorithm.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>algorithm</span>(<span style={{color: '#FF8000'}}>algorithm</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

It defines the type of algorithm used in cryptography.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **algorithm** | _string_ | Code that identifies the encryption algorithm. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## challenge

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>challenge</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Generates the challenge settings for the frontend widget.

##### Return

( _[Values](/docs/library/objects/Values)_ )

Configuration data for the widget to process the challenge result.

---

## checkExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>checkExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Obtains whether the expiration time should be checked or not.

##### Return

( _boolean_ )

Check the expiration time or not.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>checkExpires</span>(<span style={{color: '#FF8000'}}>checkExpires</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines whether to check the expiration time or not.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **checkExpires** | _boolean_ | Whether it should check the expiration time or not. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## cost

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>cost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Number of iterations required to arrive at the derived key prefix.

##### Return

( _long_ )

Brute force counting.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>cost</span>(<span style={{color: '#FF8000'}}>cost</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines the number of iterations required to arrive at the derived key prefix.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cost** | _int_ | The number of the brute force count. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## counter

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>counter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

In deterministic mode, the key prefix is calculated from the counter.

##### Return

( _long_ )

Deterministic mode counter.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>counter</span>(<span style={{color: '#FF8000'}}>counter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines, in deterministic mode, the counter that is used to calculate the key prefix.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **counter** | _int_ | The counter value in deterministic mode. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## enabled

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Retrieves whether Altcha is enabled.

##### Return

( _boolean_ )

Whether it's active or not.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines whether Altcha is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it should be activated or not. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## expires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>expires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Get the expiration time in seconds.

##### Return

( _int_ )

Expiration time in seconds.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>expires</span>(<span style={{color: '#FF8000'}}>expires</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Set the expiration time in seconds.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **expires** | _int_ | The time limit in seconds for expiration. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## getAlgorithm

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getAlgorithm</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

The type of algorithm used in the cryptography.

##### Return

( _string_ )

The code that identifies the encryption algorithm.

---

## getCost

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getCost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Number of iterations required to arrive at the derived key prefix.

##### Return

( _long_ )

Brute force counting.

---

## getCounter

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getCounter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

In deterministic mode, the key prefix is calculated from the counter.

##### Return

( _long_ )

Deterministic mode counter.

---

## getExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Get the expiration time in seconds.

##### Return

( _int_ )

Expiration time in seconds.

---

## getKeySecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getKeySecret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtain the secret signing key being used in the encryption.

##### Return

( _string_ )

The secret signing key used in cryptography.

---

## getSecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>getSecret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtain the secret code that is being used in the encryption.

##### Return

( _string_ )

The secret code used in cryptography.

---

## isCheckExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>isCheckExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Obtains whether the expiration time should be checked or not.

##### Return

( _boolean_ )

Check the expiration time or not.

---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Retrieves whether Altcha is enabled.

##### Return

( _boolean_ )

Whether it's active or not.

---

## keySecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>keySecret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtain the secret signing key being used in the encryption.

##### Return

( _string_ )

The secret signing key used in cryptography.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>keySecret</span>(<span style={{color: '#FF8000'}}>keySecret</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Define the secret signing key that will be used in the encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **keySecret** | _string_ | The secret signing key that the cryptography should use. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## load

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Loads the configurations related to the Altcha resource in the application.

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## secret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>secret</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Obtain the secret code that is being used in the encryption.

##### Return

( _string_ )

The secret code used in cryptography.

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>secret</span>(<span style={{color: '#FF8000'}}>secret</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Define the secret code that will be used in the encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ | The secret code that cryptography should use. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setAlgorithm

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setAlgorithm</span>(<span style={{color: '#FF8000'}}>algorithm</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

It defines the type of algorithm used in cryptography.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **algorithm** | _string_ | Code that identifies the encryption algorithm. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setCheckExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setCheckExpires</span>(<span style={{color: '#FF8000'}}>checkExpires</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines whether to check the expiration time or not.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **checkExpires** | _boolean_ | Whether it should check the expiration time or not. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setCost

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setCost</span>(<span style={{color: '#FF8000'}}>cost</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines the number of iterations required to arrive at the derived key prefix.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cost** | _int_ | The number of the brute force count. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setCounter

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setCounter</span>(<span style={{color: '#FF8000'}}>counter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines, in deterministic mode, the counter that is used to calculate the key prefix.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **counter** | _int_ | The counter value in deterministic mode. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setEnabled

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Defines whether Altcha is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it should be activated or not. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setExpires

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setExpires</span>(<span style={{color: '#FF8000'}}>expires</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Set the expiration time in seconds.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **expires** | _int_ | The time limit in seconds for expiration. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setKeySecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setKeySecret</span>(<span style={{color: '#FF8000'}}>keySecret</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Define the secret signing key that will be used in the encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **keySecret** | _string_ | The secret signing key that the cryptography should use. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## setSecret

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>setSecret</span>(<span style={{color: '#FF8000'}}>secret</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Altcha](/docs/library/resources/altcha)</span>
##### Description

Define the secret code that will be used in the encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ | The secret code that cryptography should use. |

##### Return

( _[Altcha](/docs/library/resources/altcha)_ )

Current instance of the Altcha resource.

---

## verifySolution

---

#### <span style={{fontWeight: 'normal'}}>_altcha</span>.<span style={{color: '#008000'}}>verifySolution</span>(<span style={{color: '#FF8000'}}>payload</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks if the result of the challenge generated by the widget on the frontend is valid.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **payload** | _string_ |   |

##### Return

( _boolean_ )

Whether the result of the challenge is valid or not.

---

