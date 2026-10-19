---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o recurso _db.form()

---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Defines a condition with the conditional AND operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Current Where object.

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Defines a second level conditions with the conditional AND operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Where object of the next level. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Current Where object.

---

## contains

---

#### <span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that includes the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## different

---

#### <span style={{color: '#008000'}}>different</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that differs from the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## endsWith

---

#### <span style={{color: '#008000'}}>endsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that ends with the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## equal

---

#### <span style={{color: '#008000'}}>equal</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## equals

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _boolean_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Number</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Number_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _string_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.sql.Date_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.sql.Time_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.sql.Timestamp_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.time.LocalDate_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.time.LocalDateTime_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.time.LocalTime_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>equals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is exact to the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.util.UUID_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## getConditions

---

#### <span style={{color: '#008000'}}>getConditions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[ConditionalOperator](/docs/library/objects/ConditionalOperator)&gt;</span>
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

#### <span style={{color: '#008000'}}>greaterOrEqualsThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is greater or equals than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## greaterThan

---

#### <span style={{color: '#008000'}}>greaterThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is greater than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## in

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is equal to any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object[]_ | Conditional values. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is equal to any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Conditional values. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## inRaw

---

#### <span style={{color: '#008000'}}>inRaw</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](/docs/library/objects/Where)_ )


---

## lessOrEqualsThan

---

#### <span style={{color: '#008000'}}>lessOrEqualsThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is less or equals than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## lessThan

---

#### <span style={{color: '#008000'}}>lessThan</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters out any occurrence that is less than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## notContains

---

#### <span style={{color: '#008000'}}>notContains</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](/docs/library/objects/Where)_ )


---

## notEndsWith

---

#### <span style={{color: '#008000'}}>notEndsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](/docs/library/objects/Where)_ )


---

## notEqual

---

#### <span style={{color: '#008000'}}>notEqual</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](/docs/library/objects/Where)_ )


---

## notEquals

---

#### <span style={{color: '#008000'}}>notEquals</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](/docs/library/objects/Where)_ )


---

## notIn

---

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is different any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object[]_ | Conditional values. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

#### <span style={{color: '#008000'}}>notIn</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that is different any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Conditional values. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

## notStartsWith

---

#### <span style={{color: '#008000'}}>notStartsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](/docs/library/objects/Where)_ )


---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Defines a condition with the conditional OR operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Current Where object.

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Defines a second level conditions with the conditional OR operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Where object of the next level. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Current Where object.

---

## setConditions

---

#### <span style={{color: '#008000'}}>setConditions</span>(<span style={{color: '#FF8000'}}>conditions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[ConditionalOperator](/docs/library/objects/ConditionalOperator)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Defines the other nested conditions of the object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **conditions** | _java.util.List_ | The other nested conditions of the object. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Current Where object.

---

## setTable

---

#### <span style={{color: '#008000'}}>setTable</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Defines the name of the table to which the condition will be applied.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the table to which the condition will be applied. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Current Where object.

---

## startsWith

---

#### <span style={{color: '#008000'}}>startsWith</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Relational operator that filters any occurrence that starts with the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[Where](/docs/library/objects/Where)_ )

Relational operator.

---

