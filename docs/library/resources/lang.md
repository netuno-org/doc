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

#### _lang.get(arg0: string, arg1: _Object[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

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

#### _lang.getLocale() : _Locale_
##### Description

Returns the of the locale.

##### Return

( _Locale_ )


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

#### _lang.init() : _Lang_
##### Description

Initiates the Lang resource.

##### Return

( _Lang_ )

Returns the default lang.

---

#### _lang.init(localeName: string) : _Lang_
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localeName | string | Inserted key. |

##### Return

( _Lang_ )

Returns the key and the text inserted.

---

#### _lang.init(localeName: string, asDefault: _boolean_) : _Lang_
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| localeName | string | Inserted key. |
| asDefault | _boolean_ | Sets if is default. |

##### Return

( _Lang_ )

Returns the key and the text inserted.

---

## locale

---

#### _lang.locale() : _Locale_
##### Description

Returns the of the locale.

##### Return

( _Locale_ )


---

## name

---

#### _lang.name() : string
##### Description

Returns the of the locale.

##### Return

( string )


---

