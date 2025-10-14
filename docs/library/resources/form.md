---
id: form
title: Form
sidebar_label: Form
---

Responsible for managing application forms programmatically.

---

## all

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Return

( _java.util.List_ )


---

## create

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponent

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>createComponent</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>createComponent</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponentIfNotExists

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>createComponentIfNotExists</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>createComponentIfNotExists</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createIfNotExists

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>createIfNotExists</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## get

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>nameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getAllComponents

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getAllComponents</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getAllComponents</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## getComponent

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getComponent</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getComponent</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>nameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getComponent</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getComponent</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getComponent</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>getComponent</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## mandatoryFields

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>mandatoryFields</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>mandatoryFields</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## uniqueFields

---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>uniqueFields</span>(<span style={{color: '#FF8000'}}>formId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_form</span>.<span style={{color: '#008000'}}>uniqueFields</span>(<span style={{color: '#FF8000'}}>formNameOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

