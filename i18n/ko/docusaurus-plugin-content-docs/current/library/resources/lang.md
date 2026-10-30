---
id: lang
title: Lang
sidebar_label: Lang
---

Manages texts translated into different languages.

---

## code

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>code</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns all the locale.

##### Return

( _string_ )


---

## get

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>formats</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>getCode</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns all the locale.

##### Return

( _string_ )


---

## getCountry

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>getCountry</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getLanguage

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>getLanguage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getLocale

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>getLocale</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Locale</span>
##### Description

Returns the of the locale.

##### Return

( _java.util.Locale_ )


---

## getName

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the of the locale.

##### Return

( _string_ )


---

## getOrDefault

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>getOrDefault</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Lang](/docs/library/resources/lang)</span>
##### Description

Initiates the Lang resource.

##### Return

( _[Lang](/docs/library/resources/lang)_ )

Returns the default lang.

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>localeName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Lang](/docs/library/resources/lang)</span>
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

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>localeName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>asDefault</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Lang](/docs/library/resources/lang)</span>
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

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>locale</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Locale</span>
##### Description

Returns the of the locale.

##### Return

( _java.util.Locale_ )


---

## name

---

#### <span style={{fontWeight: 'normal'}}>_lang</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the of the locale.

##### Return

( _string_ )


---

