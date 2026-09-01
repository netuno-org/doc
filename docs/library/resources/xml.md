---
id: xml
title: XML
sidebar_label: XML
---

This feature uses Java's native engine for creating and interpreting _XML_, based on `javax.xml` and `org.w3c.dom`.

```javascript
// Create XML file
const xml = _xml.create();
const document = xml.builder().newDocument();
const root = document.createElement("root");
const item = document.createElement("item");
const attItemId = document.createAttribute("id");
attItemId.setValue("1");
item.setAttributeNode(attItemId);
item.appendChild(document.createTextNode("Text..."))
root.appendChild(item);
document.appendChild(root);
xml.output(document);
```

---

## builder

---

#### `_xml.create()`.<span style={{color: '#008000'}}>builder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.xml.parsers.DocumentBuilder</span>
##### Description

Provides access to the object that builds or parses XML documents.

##### Return

( _javax.xml.parsers.DocumentBuilder_ )

Object for manipulating XML documents.

---

## create

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>create</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[XML](/docs/library/resources/xml)</span>
##### Description

Creates a new instance for manipulating XML.

##### How To Use

```javascript
const xml = _xml.create();
```

##### Return

( _[XML](/docs/library/resources/xml)_ )

New XML resource instance.

---

## factory

---

#### `_xml.create()`.<span style={{color: '#008000'}}>factory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.xml.parsers.DocumentBuilderFactory</span>
##### Description

Provides access to the factory API that creates XML document builders and parsers.

##### Return

( _javax.xml.parsers.DocumentBuilderFactory_ )

Factory API for creating XML manipulation objects.

---

## nodeType

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>nodeType</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Description

Gets the identifier for an XML node type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | XML node type name; supports:<br/><ul><li>element</li><li>attribute</li><li>text</li><li>cdata-section</li><li>entity-reference</li><li>entity</li><li>processing-instruction</li><li>comment</li><li>document</li><li>document-type</li><li>document-fragment</li><li>notation</li></ul> |

##### Return

( _short_ )

XML node type identifier.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Writes the final XML directly to the client and prevents browser caching.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _org.w3c.dom.Document_ | Object containing the XML document structure and data. |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>fileName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Sends the final XML file to the client as a download and prevents browser caching.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _org.w3c.dom.Document_ | Object containing the XML document structure and data. |
| **fileName** | _string_ | File name presented to the client for download. |

##### Return

( _void_ )


---

## parse

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>inputStream</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Description

Parses an XML input stream into a document object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **inputStream** | _[InputStream](/docs/library/objects/InputStream)_ | XML input stream. |

##### Return

( _org.w3c.dom.Document_ )

Parsed XML document object.

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Description

Parses an XML string into a document object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | XML content to parse. |

##### Return

( _org.w3c.dom.Document_ )

Parsed XML document object.

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Description

Parses an XML string into a document object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | XML content to parse. |
| **charset** | _string_ | Character encoding name, such as:<br/><ul><li>US-ASCII</li><li>ISO-8859-1</li><li>UTF-8</li><li>UTF-16BE</li><li>UTF-16LE</li><li>UTF-16</li></ul> |

##### Return

( _org.w3c.dom.Document_ )

Parsed XML document object.

---

#### `_xml.create()`.<span style={{color: '#008000'}}>parse</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>
##### Description

Parses an XML file into a document object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | XML file to parse. |

##### Return

( _org.w3c.dom.Document_ )

Parsed XML document object.

---

## save

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>outputStream</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Writes the document to an output stream.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _org.w3c.dom.Document_ | Object containing the XML document structure and data. |
| **outputStream** | _[OutputStream](/docs/library/objects/OutputStream)_ | Output stream to which the document is written. |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Saves the document to a file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _org.w3c.dom.Document_ | Object containing the XML document structure and data. |
| **file** | _[File](/docs/library/objects/File)_ | Destination file. |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>save</span>(<span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>, <span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Saves the document to application storage.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _org.w3c.dom.Document_ | Object containing the XML document structure and data. |
| **storage** | _[Storage](/docs/library/resources/storage)_ | Application storage destination. |

##### Return

( _void_ )


---

## toString

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>toString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Serializes the document as an XML string.

##### Return

( _string_ )

Complete serialized XML content.

---

#### <span style={{fontWeight: 'normal'}}>_xml</span>.<span style={{color: '#008000'}}>toString</span>(<span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.w3c.dom.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Serializes the document as an XML string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _org.w3c.dom.Document_ | Object containing the XML document structure and data. |

##### Return

( _string_ )

Complete serialized XML content.

---

