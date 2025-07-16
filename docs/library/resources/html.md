---
id: html
title: HTML
sidebar_label: HTML
---

Enables greater ease in manipulating HTML code, uses [JSOUP](https://jsoup.org).

---

## clean

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>clean</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |
| **baseUri** | _string_ |   |
| **safelist** | _org.jsoup.safety.Safelist_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>clean</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>, <span style={{color: '#FF8000'}}>outputSettings</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document$OutputSettings</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>clean</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>connect</span>(<span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.Connection</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ |   |

##### Return

( _org.jsoup.Connection_ )


---

## documentOutputSettings

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>documentOutputSettings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document$OutputSettings</span>
##### Return

( _org.jsoup.nodes.Document$OutputSettings_ )


---

## isValid

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>isValid</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>safelist</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>newSession</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.Connection</span>
##### Return

( _org.jsoup.Connection_ )


---

## parse

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../objects/InputStream)_ | Content of the HTML file to be processed. |
| **baseUri** | _string_ | Base Url to resolve relative links. |
| **charset** | _string_ | Character encoding type code. |

##### Return

( _org.jsoup.nodes.Document_ )

File content processed in HTML.

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Description

It performs an interpretation of the content of a file and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../objects/File)_ | File to be processed. |
| **baseUri** | _string_ | Base Url to resolve relative links. |
| **charset** | _string_ | Character encoding type code |

##### Return

( _org.jsoup.nodes.Document_ )

File content in HTML.

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Description

It performs an interpretation of a content and returns it in HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Path of the file in storage that will be processed. |
| **baseUri** | _string_ | Base Url to resolve relative links. |
| **charset** | _string_ | Character encoding type code. |

##### Return

( _org.jsoup.nodes.Document_ )

File content processed in HTML.

---

## parseBodyFragment

---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseBodyFragment</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bodyHtml** | _string_ |   |

##### Return

( _org.jsoup.nodes.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseBodyFragment</span>(<span style={{color: '#FF8000'}}>bodyHtml</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>baseUri</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseURL</span>(<span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>parseURL</span>(<span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>timeoutMillis</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.nodes.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>safelist</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>
##### Return

( _org.jsoup.safety.Safelist_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>safelist</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ |   |

##### Return

( _org.jsoup.safety.Safelist_ )


---

#### <span style={{fontWeight: 'normal'}}>_html</span>.<span style={{color: '#008000'}}>safelist</span>(<span style={{color: '#FF8000'}}>copy</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.jsoup.safety.Safelist</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **copy** | _org.jsoup.safety.Safelist_ |   |

##### Return

( _org.jsoup.safety.Safelist_ )


---

