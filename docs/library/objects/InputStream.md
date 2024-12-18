---
id: InputStream
title: InputStream
sidebar_label: InputStream
---

É utilizado para gerir a entrada do fluxo de dados.

---

## available

---

#### <span style={{color: '#008000'}}>available</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## close

---

#### <span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## mark

---

#### <span style={{color: '#008000'}}>mark</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _int_ |   |

##### Return

( _void_ )


---

## markSupported

---

#### <span style={{color: '#008000'}}>markSupported</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## nullInputStream

---

#### <span style={{color: '#008000'}}>nullInputStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Return

( _[InputStream](../objects/InputStream)_ )


---

## read

---

#### <span style={{color: '#008000'}}>read</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

#### <span style={{color: '#008000'}}>read</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _byte[]_ |   |

##### Return

( _int_ )


---

#### <span style={{color: '#008000'}}>read</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>off</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ |   |
| **off** | _int_ |   |
| **length** | _int_ |   |

##### Return

( _int_ )


---

## readAll

---

#### <span style={{color: '#008000'}}>readAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readAll</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readAll</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readAll</span>(<span style={{color: '#FF8000'}}>r</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **r** | _java.io.Reader_ |   |

##### Return

( _string_ )


---

## readAllAndClose

---

#### <span style={{color: '#008000'}}>readAllAndClose</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## readAllBytes

---

#### <span style={{color: '#008000'}}>readAllBytes</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Return

( _byte[]_ )


---

#### <span style={{color: '#008000'}}>readAllBytes</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Return

( _byte[]_ )


---

## readAllBytesAndClose

---

#### <span style={{color: '#008000'}}>readAllBytesAndClose</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Return

( _byte[]_ )


---

## readAllBytesFromFile

---

#### <span style={{color: '#008000'}}>readAllBytesFromFile</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Return

( _byte[]_ )


---

#### <span style={{color: '#008000'}}>readAllBytesFromFile</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _string_ |   |

##### Return

( _byte[]_ )


---

#### <span style={{color: '#008000'}}>readAllBytesFromFile</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.file.Path</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.nio.file.Path_ |   |

##### Return

( _byte[]_ )


---

## readFromFile

---

#### <span style={{color: '#008000'}}>readFromFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.io.File_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readFromFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.File</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.io.File_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readFromFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readFromFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readFromFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.file.Path</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.nio.file.Path_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readFromFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.file.Path</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.nio.file.Path_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

## readLine

---

#### <span style={{color: '#008000'}}>readLine</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readLine</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Return

( _string_ )


---

## readNBytes

---

#### <span style={{color: '#008000'}}>readNBytes</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>arg2</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _byte[]_ |   |
| **arg1** | _int_ |   |
| **arg2** | _int_ |   |

##### Return

( _int_ )


---

#### <span style={{color: '#008000'}}>readNBytes</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _int_ |   |

##### Return

( _byte[]_ )


---

## readString

---

#### <span style={{color: '#008000'}}>readString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readString</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.charset.Charset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _string_ )


---

## readStringAndClose

---

#### <span style={{color: '#008000'}}>readStringAndClose</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>readStringAndClose</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.charset.Charset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _string_ )


---

## reset

---

#### <span style={{color: '#008000'}}>reset</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## skip

---

#### <span style={{color: '#008000'}}>skip</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _long_ |   |

##### Return

( _long_ )


---

## skipNBytes

---

#### <span style={{color: '#008000'}}>skipNBytes</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _long_ |   |

##### Return

( _void_ )


---

## transferTo

---

#### <span style={{color: '#008000'}}>transferTo</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _long_ )


---

## writeTo

---

#### <span style={{color: '#008000'}}>writeTo</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../objects/InputStream)_ )


---

#### <span style={{color: '#008000'}}>writeTo</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../objects/InputStream)_ )


---

## writeToAndClose

---

#### <span style={{color: '#008000'}}>writeToAndClose</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../objects/InputStream)_ )


---

#### <span style={{color: '#008000'}}>writeToAndClose</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../objects/InputStream)_ )


---

