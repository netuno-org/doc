---
id: in
title: In
sidebar_label: In
---

HTTP request data input resource.

---

## available

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>available</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## close

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[In](/docs/library/resources/in)</span>
##### Return

( _[In](/docs/library/resources/in)_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[In](/docs/library/resources/in)</span>
##### Return

( _[In](/docs/library/resources/in)_ )


---

## isAvailable

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>isAvailable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## read

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>read</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>read</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>off</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## readAllAndClose

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readAllAndClose</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## readAllBytes

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readAllBytes</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Return

( _byte[]_ )


---

## readAllBytesAndClose

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readAllBytesAndClose</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Return

( _byte[]_ )


---

## readLine

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readLine</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## readString

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readString</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.charset.Charset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _string_ )


---

## readStringAndClose

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readStringAndClose</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>readStringAndClose</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.nio.charset.Charset</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _string_ )


---

## save

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |

##### Return

( _void_ )


---

## writeTo

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>writeTo</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[In](/docs/library/resources/in)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[In](/docs/library/resources/in)_ )


---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>writeTo</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[In](/docs/library/resources/in)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[In](/docs/library/resources/in)_ )


---

## writeToAndClose

---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>writeToAndClose</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[In](/docs/library/resources/in)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[In](/docs/library/resources/in)_ )


---

#### <span style={{fontWeight: 'normal'}}>_in</span>.<span style={{color: '#008000'}}>writeToAndClose</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[In](/docs/library/resources/in)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[In](/docs/library/resources/in)_ )


---

