---
id: html
title: HTML
sidebar_label: HTML
---

Enables greater ease in manipulating HTML code, uses [JSOUP](https://jsoup.org).

---

## clean

---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: _org.jsoup.safety.Safelist_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bodyHtml | string |   |
| baseUri | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |

##### Return

( string )


---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: _org.jsoup.safety.Safelist_, outputSettings: _org.jsoup.nodes.Document$OutputSettings_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bodyHtml | string |   |
| baseUri | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |
| outputSettings | _org.jsoup.nodes.Document$OutputSettings_ |   |

##### Return

( string )


---

#### _html.clean(bodyHtml: string, safelist: _org.jsoup.safety.Safelist_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bodyHtml | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |

##### Return

( string )


---

## connect

---

#### _html.connect(url: string) : _org.jsoup.Connection_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string |   |

##### Return

( _org.jsoup.Connection_ )


---

## documentOutputSettings

---

#### _html.documentOutputSettings() : _org.jsoup.nodes.Document$OutputSettings_
##### Return

( _org.jsoup.nodes.Document$OutputSettings_ )


---

## isValid

---

#### _html.isValid(bodyHtml: string, safelist: _org.jsoup.safety.Safelist_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bodyHtml | string |   |
| safelist | _org.jsoup.safety.Safelist_ |   |

##### Return

( _boolean_ )


---

## newSession

---

#### _html.newSession() : _org.jsoup.Connection_
##### Return

( _org.jsoup.Connection_ )


---

## parse

---

#### _html.parse(input: _java.io.InputStream_, baseUri: string, charset: string) : _org.jsoup.nodes.Document_
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _java.io.InputStream_ | Content of the HTML file to be processed. |
| baseUri | string | Base Url to resolve relative links. |
| charset | string | Character encoding type code. |

##### Return

( _org.jsoup.nodes.Document_ )

File content processed in HTML.

---

#### _html.parse(content: string) : _org.jsoup.nodes.Document_
##### Description

Through the HTML code it performs the interpretation and returns the object of manipulation.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | HTML content that will be processed. |

##### Return

( _org.jsoup.nodes.Document_ )

Object of [JSOUP](https://jsoup.org) that allows interaction with the HTML code.

---

#### _html.parse(file: _[File](../../objects/File)_, baseUri: string, charset: string) : _org.jsoup.nodes.Document_
##### Description

It performs an interpretation of the content of a file and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ | File to be processed. |
| baseUri | string | Base Url to resolve relative links. |
| charset | string | Character encoding type code |

##### Return

( _org.jsoup.nodes.Document_ )

File content in HTML.

---

#### _html.parse(storage: _[Storage](../../resources/Storage)_, baseUri: string, charset: string) : _org.jsoup.nodes.Document_
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Path of the file in storage that will be processed. |
| baseUri | string | Base Url to resolve relative links. |
| charset | string | Character encoding type code. |

##### Return

( _org.jsoup.nodes.Document_ )

File content processed in HTML.

---

## parseBodyFragment

---

#### _html.parseBodyFragment(bodyHtml: string) : _org.jsoup.nodes.Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bodyHtml | string |   |

##### Return

( _org.jsoup.nodes.Document_ )


---

#### _html.parseBodyFragment(bodyHtml: string, baseUri: string) : _org.jsoup.nodes.Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bodyHtml | string |   |
| baseUri | string |   |

##### Return

( _org.jsoup.nodes.Document_ )


---

## parseURL

---

#### _html.parseURL(url: string) : _org.jsoup.nodes.Document_
##### Description

Get the HTML through a web address (URL), perform the interpretation and return the manipulation object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Object that will be converted to text and sent. |

##### Return

( _org.jsoup.nodes.Document_ )

Object of [JSOUP](https://jsoup.org) that allows interaction with the HTML code.

---

#### _html.parseURL(url: string, timeoutMillis: _int_) : _org.jsoup.nodes.Document_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string |   |
| timeoutMillis | _int_ |   |

##### Return

( _org.jsoup.nodes.Document_ )


---

## safelist

---

#### _html.safelist() : _org.jsoup.safety.Safelist_
##### Return

( _org.jsoup.safety.Safelist_ )


---

#### _html.safelist(copy: _org.jsoup.safety.Safelist_) : _org.jsoup.safety.Safelist_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| copy | _org.jsoup.safety.Safelist_ |   |

##### Return

( _org.jsoup.safety.Safelist_ )


---

