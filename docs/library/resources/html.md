---
id: html
title: HTML
sidebar_label: HTML
---

Enables greater ease in manipulating HTML code, uses [JSOUP](https://jsoup.org).

---

## clean

---

#### _html.clean(arg0: string, arg1: string, arg2: _Safelist_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _Safelist_ |   |

##### Return

( string )


---

#### _html.clean(arg0: string, arg1: string, arg2: _Safelist_, arg3: _OutputSettings_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _Safelist_ |   |
| arg3 | _OutputSettings_ |   |

##### Return

( string )


---

#### _html.clean(arg0: string, arg1: _Safelist_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Safelist_ |   |

##### Return

( string )


---

## connect

---

#### _html.connect(arg0: string) : _Connection_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Connection_ )


---

## documentOutputSettings

---

#### _html.documentOutputSettings() : _OutputSettings_
##### Return

( _OutputSettings_ )


---

## isValid

---

#### _html.isValid(arg0: string, arg1: _Safelist_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Safelist_ |   |

##### Return

( _boolean_ )


---

## newSession

---

#### _html.newSession() : _Connection_
##### Return

( _Connection_ )


---

## parse

---

#### _html.parse(input: _InputStream_, baseUri: string, charset: string) : _Document_
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _InputStream_ | Content of the HTML file to be processed. |
| baseUri | string | Base Url to resolve relative links. |
| charset | string | Character encoding type code. |

##### Return

( _Document_ )

File content processed in HTML.

---

#### _html.parse(content: string) : _Document_
##### Description

Through the HTML code it performs the interpretation and returns the object of manipulation.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | HTML content that will be processed. |

##### Return

( _Document_ )

Object of [JSOUP](https://jsoup.org) that allows interaction with the HTML code.

---

#### _html.parse(file: _[File](../../objects/File)_, baseUri: string, charset: string) : _Document_
##### Description

It performs an interpretation of the content of a file and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ | File to be processed. |
| baseUri | string | Base Url to resolve relative links. |
| charset | string | Character encoding type code |

##### Return

( _Document_ )

File content in HTML.

---

#### _html.parse(storage: _Storage_, baseUri: string, charset: string) : _Document_
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Path of the file in storage that will be processed. |
| baseUri | string | Base Url to resolve relative links. |
| charset | string | Character encoding type code. |

##### Return

( _Document_ )

File content processed in HTML.

---

## parseBodyFragment

---

#### _html.parseBodyFragment(arg0: string) : _Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Document_ )


---

#### _html.parseBodyFragment(arg0: string, arg1: string) : _Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _Document_ )


---

## parseURL

---

#### _html.parseURL(url: string) : _Document_
##### Description

Get the HTML through a web address (URL), perform the interpretation and return the manipulation object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Object that will be converted to text and sent. |

##### Return

( _Document_ )

Object of [JSOUP](https://jsoup.org) that allows interaction with the HTML code.

---

#### _html.parseURL(arg0: string, arg1: _int_) : _Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _Document_ )


---

## safelist

---

#### _html.safelist() : _Safelist_
##### Return

( _Safelist_ )


---

#### _html.safelist(arg0: _Safelist_) : _Safelist_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Safelist_ |   |

##### Return

( _Safelist_ )


---

