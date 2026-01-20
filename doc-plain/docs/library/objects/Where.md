---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o recurso _db.form()

---

## and

---

#### and(column: string) : [Where](/docs/library/objects/Where)
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

#### and(where: [Where](/docs/library/objects/Where)) : [Where](/docs/library/objects/Where)
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

#### contains(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

#### different(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

#### endsWith(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

#### equal(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

## getConditions

---

#### getConditions() : java.util.List
##### Description

Returns the other nested conditions of the object.

##### Return

( _java.util.List_ )

The other nested conditions of the object.

---

## getTable

---

#### getTable() : string
##### Description

Returns the name of the table to which the condition will be applied.

##### Return

( _string_ )

The name of the table to which the condition will be applied.

---

## greaterOrEqualsThan

---

#### greaterOrEqualsThan(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

#### greaterThan(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

#### in(values: java.lang.Object[]) : [Where](/docs/library/objects/Where)
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

#### in(values: java.lang.Object) : [Where](/docs/library/objects/Where)
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

#### inRaw(value: java.lang.Object) : [Where](/docs/library/objects/Where)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](/docs/library/objects/Where)_ )


---

## lessOrEqualsThan

---

#### lessOrEqualsThan(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

#### lessThan(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

## notIn

---

#### notIn(values: java.lang.Object[]) : [Where](/docs/library/objects/Where)
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

#### notIn(values: java.lang.Object) : [Where](/docs/library/objects/Where)
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

## or

---

#### or(column: string) : [Where](/docs/library/objects/Where)
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

#### or(where: [Where](/docs/library/objects/Where)) : [Where](/docs/library/objects/Where)
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

#### setConditions(conditions: java.util.List) : [Where](/docs/library/objects/Where)
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

#### setTable(tableName: string) : [Where](/docs/library/objects/Where)
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

#### startsWith(value: java.lang.Object) : [Where](/docs/library/objects/Where)
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

