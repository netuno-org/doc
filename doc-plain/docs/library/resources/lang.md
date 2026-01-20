---
id: lang
title: Lang
sidebar_label: Lang
---

Manages texts translated into different languages.

---

## code

---

#### _lang.code() : string
##### Description

Returns all the locale.

##### Return

( _string_ )


---

## get

---

#### _lang.get(key: string) : string
##### Description

Searchs for a key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Key to be searched. |

##### Return

( _string_ )

Returns the match key.

---

#### _lang.get(key: string, formats: java.lang.Object[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **formats** | _java.lang.Object[]_ |   |

##### Return

( _string_ )


---

## getCode

---

#### _lang.getCode() : string
##### Description

Returns all the locale.

##### Return

( _string_ )


---

## getCountry

---

#### _lang.getCountry() : string
##### Return

( _string_ )


---

## getLanguage

---

#### _lang.getLanguage() : string
##### Return

( _string_ )


---

## getLocale

---

#### _lang.getLocale() : java.util.Locale
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

( _string_ )


---

## getOrDefault

---

#### _lang.getOrDefault(key: string, text: string) : string
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Inserted key. |
| **text** | _string_ | Inserted text. |

##### Return

( _string_ )

Returns the key and the text inserted.

---

## init

---

#### _lang.init() : [Lang](/docs/library/resources/lang)
##### Description

Initiates the Lang resource.

##### Return

( _[Lang](/docs/library/resources/lang)_ )

Returns the default lang.

---

#### _lang.init(localeName: string) : [Lang](/docs/library/resources/lang)
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localeName** | _string_ | Inserted key. |

##### Return

( _[Lang](/docs/library/resources/lang)_ )

Returns the key and the text inserted.

---

#### _lang.init(localeName: string, asDefault: boolean) : [Lang](/docs/library/resources/lang)
##### Description

Sets the default locale key with a inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **localeName** | _string_ | Inserted key. |
| **asDefault** | _boolean_ | Sets if is default. |

##### Return

( _[Lang](/docs/library/resources/lang)_ )

Returns the key and the text inserted.

---

## locale

---

#### _lang.locale() : java.util.Locale
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

( _string_ )


---

