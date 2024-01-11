---
id: report
title: Form
sidebar_label: Form
---

Application reports generator programmatically.

---

## all

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Return

( _java.util.List_ )


---

## create

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">create</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponent

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponentIfNotExists

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createIfNotExists

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">createIfNotExists</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## get

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getAllComponents

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## getComponent

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## notNulls

---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style="font-weight: normal">_report</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

