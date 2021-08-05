---
id: html
title: HTML
sidebar_label: HTML
---

Enables greater ease in manipulating HTML code, uses [JSOUP](https://jsoup.org).

---

## parse

---

#### _html.parse(arg0: _InputStream_, arg1: string, arg2: string) : _Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _Document_ )


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

#### _html.parse(arg0: _[File](../../objects/File)_, arg1: string, arg2: string) : _Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _Document_ )


---

#### _html.parse(arg0: _Storage_, arg1: string, arg2: string) : _Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | string |   |
| arg2 | string |   |

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

