---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o recurso _db.form()

---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Defines a condition with the conditional AND operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |

##### Return

( _[Where](../objects/Where)_ )

Current Where object.

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Defines a second level conditions with the conditional AND operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | Where object of the next level. |

##### Return

( _[Where](../objects/Where)_ )

Current Where object.

---

## contains

---

#### <span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that includes the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## different

---

#### <span style={{color: '#008000'}}>different</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that differs from the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## endsWith

---

#### <span style={{color: '#008000'}}>endsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that ends with the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## equal

---

#### <span style={{color: '#008000'}}>equal</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## getConditions

---

#### <span style={{color: '#008000'}}>getConditions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Description

Returns the other nested conditions of the object.

##### Return

( _java.util.List_ )

The other nested conditions of the object.

---

## getTable

---

#### <span style={{color: '#008000'}}>getTable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the table to which the condition will be applied.

##### Return

( _string_ )

The name of the table to which the condition will be applied.

---

## greaterOrEqualsThan

---

#### <span style={{color: '#008000'}}>greaterOrEqualsThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is greater or equals than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## greaterThan

---

#### <span style={{color: '#008000'}}>greaterThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is greater than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## in

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is equal to any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Ljava.lang.Object;[]_ | Conditional values. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is equal to any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Conditional values. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## inRaw

---

#### <span style={{color: '#008000'}}>inRaw</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](../objects/Where)_ )


---

## lessOrEqualsThan

---

#### <span style={{color: '#008000'}}>lessOrEqualsThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is less or equals than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## lessThan

---

#### <span style={{color: '#008000'}}>lessThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is less than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## notIn

---

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is different any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Ljava.lang.Object;[]_ | Conditional values. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is different any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Conditional values. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Defines a condition with the conditional OR operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |

##### Return

( _[Where](../objects/Where)_ )

Current Where object.

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Defines a second level conditions with the conditional OR operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | Where object of the next level. |

##### Return

( _[Where](../objects/Where)_ )

Current Where object.

---

## setConditions

---

#### <span style={{color: '#008000'}}>setConditions</span>(<span style={{color: '#FF8000'}}>conditions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Defines the other nested conditions of the object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **conditions** | _java.util.List_ | The other nested conditions of the object. |

##### Return

( _[Where](../objects/Where)_ )

Current Where object.

---

## setTable

---

#### <span style={{color: '#008000'}}>setTable</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Defines the name of the table to which the condition will be applied.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the table to which the condition will be applied. |

##### Return

( _[Where](../objects/Where)_ )

Current Where object.

---

## startsWith

---

#### <span style={{color: '#008000'}}>startsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Relational operator that filters any occurrence that starts with the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](../objects/Where)_ )

Relational operator.

---

