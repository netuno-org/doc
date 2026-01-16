---
id: html
title: HTML
sidebar_label: HTML
---

Enables greater ease in manipulating HTML code, uses [JSOUP](https://jsoup.org).

---

## clean

---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: org.jsoup.safety.Safelist) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Return

( _string_ )


---

#### _html.clean(bodyHtml: string, baseUri: string, safelist: org.jsoup.safety.Safelist, outputSettings: org.jsoup.nodes.Document$OutputSettings) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |
| **outputSettings** | _org.jsoup.nodes.Document$OutputSettings_ |   |

##### Return

( _string_ )


---

#### _html.clean(bodyHtml: string, safelist: org.jsoup.safety.Safelist) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Return

( _string_ )


---

## connect

---

#### _html.connect(url: string) : org.jsoup.Connection
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ |   |

##### Return

( _org.jsoup.Connection_ )


---

## documentOutputSettings

---

#### _html.documentOutputSettings() : org.jsoup.nodes.Document$OutputSettings
##### Return

( _org.jsoup.nodes.Document$OutputSettings_ )


---

## isValid

---

#### _html.isValid(bodyHtml: string, safelist: org.jsoup.safety.Safelist) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Return

( _boolean_ )


---

## newSession

---

#### _html.newSession() : org.jsoup.Connection
##### Return

( _org.jsoup.Connection_ )


---

## parse

---

#### _html.parse(input: [InputStream](/docs/library/objects/InputStream), baseUri: string, charset: string) : org.jsoup.nodes.Document
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Content of the HTML file to be processed. |
| **baseUri** | _string_ | Base Url to resolve relative links. |
| **charset** | _string_ | Character encoding type code. |

##### Return

( _org.jsoup.nodes.Document_ )

File content processed in HTML.

---

#### _html.parse(content: string) : org.jsoup.nodes.Document
##### Description

Through the HTML code it performs the interpretation and returns the object of manipulation.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | HTML content that will be processed. |

##### Return

( _org.jsoup.nodes.Document_ )

Object of [JSOUP](https://jsoup.org) that allows interaction with the HTML code.

---

#### _html.parse(file: [File](/docs/library/objects/File), baseUri: string, charset: string) : org.jsoup.nodes.Document
##### Description

It performs an interpretation of the content of a file and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | File to be processed. |
| **baseUri** | _string_ | Base Url to resolve relative links. |
| **charset** | _string_ | Character encoding type code |

##### Return

( _org.jsoup.nodes.Document_ )

File content in HTML.

---

#### _html.parse(storage: [Storage](/docs/library/resources/storage), baseUri: string, charset: string) : org.jsoup.nodes.Document
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Path of the file in storage that will be processed. |
| **baseUri** | _string_ | Base Url to resolve relative links. |
| **charset** | _string_ | Character encoding type code. |

##### Return

( _org.jsoup.nodes.Document_ )

File content processed in HTML.

---

## parseBodyFragment

---

#### _html.parseBodyFragment(bodyHtml: string) : org.jsoup.nodes.Document
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |

##### Return

( _org.jsoup.nodes.Document_ )


---

#### _html.parseBodyFragment(bodyHtml: string, baseUri: string) : org.jsoup.nodes.Document
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |

##### Return

( _org.jsoup.nodes.Document_ )


---

## parseURL

---

#### _html.parseURL(url: string) : org.jsoup.nodes.Document
##### Description

Get the HTML through a web address (URL), perform the interpretation and return the manipulation object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Object that will be converted to text and sent. |

##### Return

( _org.jsoup.nodes.Document_ )

Object of [JSOUP](https://jsoup.org) that allows interaction with the HTML code.

---

#### _html.parseURL(url: string, timeoutMillis: int) : org.jsoup.nodes.Document
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ |   |
| **timeoutMillis** | _int_ |   |

##### Return

( _org.jsoup.nodes.Document_ )


---

## safelist

---

#### _html.safelist() : org.jsoup.safety.Safelist
##### Return

( _org.jsoup.safety.Safelist_ )


---

#### _html.safelist(type: string) : org.jsoup.safety.Safelist
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _org.jsoup.safety.Safelist_ )


---

#### _html.safelist(copy: org.jsoup.safety.Safelist) : org.jsoup.safety.Safelist
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **copy** | _org.jsoup.safety.Safelist_ |   |

##### Return

( _org.jsoup.safety.Safelist_ )


---

