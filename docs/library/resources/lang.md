---
id: lang
title: Lang
sidebar_label: Lang
---

Recurso de atribuição de linguagem.

---

## code

---

#### _lang.code() : string
##### Description

Returns all the locale.

##### Return

( string )


---

## get

---

#### _lang.get(key: string) : string
##### Description

Searchs for a key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Key to be searched. |

##### Return

( string )

Returns the match key.

---

#### _lang.get(key: string, formats: _[Ljava.lang.Object;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| formats | _[Ljava.lang.Object;[]_ |   |

##### Return

( string )


---

## getCode

---

#### _lang.getCode() : string
##### Description

Returns all the locale.

##### Return

( string )


---

## getLocale

---

#### _lang.getLocale() : _java.util.Locale_
##### Description

Returns the of the locale.

##### Return

( _java.util.Locale_ )


---

## getName

---

#### _lang.getName() : string
##### Description

Returns the of the locale.

##### Return

( string )


---

## getOrDefault

---

#### _lang.getOrDefault(key: string, text: string) : string
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Inserted key. |
| text | string | Inserted text. |

##### Return

( string )

Returns the key and the text inserted.

---

## init

---

#### _lang.init() : _[Lang](../../resources/Lang)_
##### Description

Initiates the Lang resource.

##### Return

( _[Lang](../../resources/Lang)_ )

Returns the default lang.

---

#### _lang.init(localeName: string) : _[Lang](../../resources/Lang)_
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localeName | string | Inserted key. |

##### Return

( _[Lang](../../resources/Lang)_ )

Returns the key and the text inserted.

---

#### _lang.init(localeName: string, asDefault: _boolean_) : _[Lang](../../resources/Lang)_
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localeName | string | Inserted key. |
| asDefault | _boolean_ | Sets if is default. |

##### Return

( _[Lang](../../resources/Lang)_ )

Returns the key and the text inserted.

---

## locale

---

#### _lang.locale() : _java.util.Locale_
##### Description

Returns the of the locale.

##### Return

( _java.util.Locale_ )


---

## name

---

#### _lang.name() : string
##### Description

Returns the of the locale.

##### Return

( string )


---

