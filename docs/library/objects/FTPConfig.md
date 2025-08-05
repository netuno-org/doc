---
id: FTPConfig
title: FTPConfig
sidebar_label: FTPConfig
---

Definição da configuração do FTP.

---

## getConnectTimeout

---

#### <span style={{color: '#008000'}}>getConnectTimeout</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the conection timeout of the current object.

##### Return

( _int_ )

conection timeout of the current object.

---

## getHost

---

#### <span style={{color: '#008000'}}>getHost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns host of the current object.

##### Return

( _string_ )

Host of the current object.

---

## getPassword

---

#### <span style={{color: '#008000'}}>getPassword</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the password of the current object.

##### Return

( _string_ )

Password of the current object.

---

## getPort

---

#### <span style={{color: '#008000'}}>getPort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Returns the port of the current object.

##### Return

( _int_ )

Port of the current object.

---

## getUsername

---

#### <span style={{color: '#008000'}}>getUsername</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the username of the current object.

##### Return

( _string_ )

Username of the current object.

---

## isDebug

---

#### <span style={{color: '#008000'}}>isDebug</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether debugging is active or not.

##### Return

( _boolean_ )

Whether debugging is active or not.

---

## isEnabled

---

#### <span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns the state of the object, whether it is not activated.

##### Return

( _boolean_ )

Results whether the object is active or not.

---

## isPassiveMode

---

#### <span style={{color: '#008000'}}>isPassiveMode</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether modo passivo is active on the current object.

##### Return

( _boolean_ )

Whether it is active or inactive on the current object.

---

## isSSL

---

#### <span style={{color: '#008000'}}>isSSL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether SSL is active on the current object.

##### Return

( _boolean_ )

Whether it is active or inactive on the current object.

---

## isSecureImplicit

---

#### <span style={{color: '#008000'}}>isSecureImplicit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether FTPS implícito is active on the current object.

##### Return

( _boolean_ )

Whether it is active or inactive on the current object.

---

## isTLS

---

#### <span style={{color: '#008000'}}>isTLS</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether TSL is active on the current object.

##### Return

( _boolean_ )

Whether it is active or inactive on the current object.

---

## setConnectTimeout

---

#### <span style={{color: '#008000'}}>setConnectTimeout</span>(<span style={{color: '#FF8000'}}>conectionTimeout</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines the conection timeout of the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **conectionTimeout** | _int_ | Conection timeout to be defined. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setDebug

---

#### <span style={{color: '#008000'}}>setDebug</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines whether it is activated or not.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Current object.

---

## setEnabled

---

#### <span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines the state of the object, whether it is activated or not.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Current object.

---

## setHost

---

#### <span style={{color: '#008000'}}>setHost</span>(<span style={{color: '#FF8000'}}>host</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines the host of the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ | Host to be defined. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setPassiveMode

---

#### <span style={{color: '#008000'}}>setPassiveMode</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines whether modo passivo is active or inactive on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setPassword

---

#### <span style={{color: '#008000'}}>setPassword</span>(<span style={{color: '#FF8000'}}>password</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines the password of the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ | Password to be defined. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setPort

---

#### <span style={{color: '#008000'}}>setPort</span>(<span style={{color: '#FF8000'}}>port</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines the port of the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **port** | _int_ | Port to be defined. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setSSL

---

#### <span style={{color: '#008000'}}>setSSL</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines whether SSL is active or inactive on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setSecureImplicit

---

#### <span style={{color: '#008000'}}>setSecureImplicit</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines whether FTPS implícito is active or inactive on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setTLS

---

#### <span style={{color: '#008000'}}>setTLS</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines whether TSL is active or inactive on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

## setUsername

---

#### <span style={{color: '#008000'}}>setUsername</span>(<span style={{color: '#FF8000'}}>username</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Description

Defines the username of the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **username** | _string_ | Username to be defined. |

##### Return

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Returns the current object.

---

