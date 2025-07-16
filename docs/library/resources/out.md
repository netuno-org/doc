---
id: out
title: Out
sidebar_label: Out
---

Response feature to HTTP requests.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Closes the sending of HTTP response data.

##### Return

( _[Out](../resources/out)_ )


---

## closed

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>closed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the response to the HTTP request has already been closed.

##### Return

( _boolean_ )

The response to the HTTP request has been closed.

---

## copy

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies all data from an InputStream to Proteu's standard output (OutputStream), starting from the beginning of the input stream.

It is a straightforward utility method, ideal for complete transfers of binary content (such as files, images, etc.), without the need to manipulate positions or limits.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ | Input stream from which data will be read and transferred to the output. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies data from an InputStream to the current output (Proteu OutputStream), optionally skipping the first bytes specified by skip.

This method is a simplified version of the copy method with limited size, useful for transferring entire data streams, starting from a specific position.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ | The input stream from which data will be read. |
| **skip** | _long_ | Number of bytes to skip before starting the copy. Use 0 to start from the beginning. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies data from an InputStream to the current output (OutputStream associated with Out), with optional support for skipping bytes and limiting the total size copied.

This method is useful for efficient transfers of binary streams, with precise control over the starting point and volume of data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ | The input stream from which the data will be read. |
| **skip** | _long_ | Number of bytes to skip before starting the copy (use 0 to skip none). |
| **size** | _long_ | Maximum number of bytes to copy (use -1 to copy to the end of the stream). |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies all content from a file to the response output (OutputStream).

This method is a convenience that encapsulates the creation of an InputStream from a File, and delegates the copy operation to the copy(InputStream in) method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../objects/File)_ | The file from which the data will be copied. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies data from a file to the response output (OutputStream), skipping an initial number of bytes.

This method is a convenience that abstracts the creation of an InputStream from a File and delegates the logic to the copy(InputStream in, long skip) method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../objects/File)_ | The file from which the data will be copied. |
| **skip** | _long_ | Number of bytes to be skipped at the beginning of the file. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies a range of data from a file to the output (OutputStream) of the Proteu instance.

This method is a convenience that encapsulates opening the InputStream of the file and delegates the operation to the copy(InputStream, long, long) method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../objects/File)_ | The file from which the data will be copied. |
| **skip** | _long_ | Number of bytes to be skipped at the beginning of the file. |
| **size** | _long_ | Number of bytes to be copied after the skip. If size is negative (< 0), all remaining content will be copied. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies all content from a Storage resource to the current output, without skipping bytes at the beginning and without a size limit.

This method is a simplified way of calling copy(Storage storage, long skip, long size) with the skip and size parameters set to -1, indicating that there is no initial skip and all content should be copied.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | The storage resource representing the file to be copied. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies data from a Storage resource to the current output, starting reading after skipping a specified number of bytes (skip).

This method is a convenient way to call copy(Storage storage, long skip, long size) with size set to -1, i.e., no size limit — copying all remaining content after skip.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | The storage resource representing the file to be copied. |
| **skip** | _long_ | Number of bytes to be skipped at the beginning of the file. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Copies the entire contents of a file to the response output (OutputStream).

This method is a convenience that encapsulates the creation of an InputStream from a file and delegates the copy operation to the copy(InputStream in) method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | The storage resource representing the file to be copied. |
| **skip** | _long_ | Number of bytes to be skipped at the beginning of the file. |
| **size** | _long_ | Maximum number of bytes to copy after the skip |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## flush

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>flush</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Sends what is pending accumulated in the buffer.

##### Return

( _void_ )


---

## getJSONHTMLEscape

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getJSONHTMLEscape</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns the current state of HTML escape configuration in the JSON response.

This method is equivalent to jsonHTMLEscape() and is present to maintain consistency with JavaBeans-based naming conventions (use of get as a prefix).

##### Return

( _boolean_ )

Returns true if HTML escaping is enabled, otherwise returns false.

---

## getJSONIdentFactor

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getJSONIdentFactor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Auxiliary method that returns the same value as jsonIdentFactor(), maintaining compatibility with JavaBeans-style naming conventions.

##### Return

( _int_ )

Returns the value of the JSON indentation factor.

---

## getMirrors

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getMirrors</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Description

Gets the output replicas.

##### Return

( _java.util.List_ )

List of replicas.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Starts a new instance of output.

##### Return

( _[Out](../resources/out)_ )

The new instance of the Output feature.

---

## isClosed

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>isClosed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStarted

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>isStarted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## json

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends a response in JSON format to the client. This method sets the appropriate headers to ensure that the response is not cached and that the content is treated as valid JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **Values** | _java.lang.Object_ | Object of type Values that will be converted into text and sent as JSON. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>String</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends a response in JSON format to the client. This method sets the appropriate headers to ensure that the response is not cached and that the content is treated as valid JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **String** | _string_ | Text in JSON format to be sent as a response. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Generates a formatted JSON response from an array of objects. The content is automatically structured based on a list of objects of type Values.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **Values** | _java.util.List_ | Object of type Values that will be converted into text and sent as JSON. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Generates a JSON response from a Map, using an instance of Values to structure the average content of the sample

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **Values** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ | The data contained in the Map will be automatically converted to JSON. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Generates a formatted JSON response from an instance of the Values class.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **Values** | _[Values](../objects/Values)_ | Object containing the data that will be automatically converted to JSON. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## jsonHTMLEscape

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonHTMLEscape</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks the current status of the HTML character escape configuration in the JSON response.

This configuration determines whether special HTML characters (such as &lt;, &gt;, &amp;, &bsol;‘) will be converted to HTML entities when generating JSON output.

##### Return

( _boolean_ )

Returns true if HTML escaping is enabled, otherwise returns false.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonHTMLEscape</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Defines whether special HTML characters should be escaped in the generated JSON response.

When enabled (true), characters such as &lt; , &gt; , &amp; and &bsol; will be converted to their corresponding HTML entities ('&lt', '&gt', '&bsol', etc.), ensuring greater security when displaying JSON in HTML contexts.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ | true to escape HTML characters in JSON content. false to disable escaping. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## jsonIdentFactor

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonIdentFactor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

The current value of the indentation factor used when generating the JSON response.
This value controls the number of spaces used per indentation level in JSON.

##### Return

( _int_ )

Returns the value of the JSON indentation factor.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonIdentFactor</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sets the indentation factor used when generating the JSON response.
This value determines how many spaces will be used to indent each level of the JSON, making the output more readable for humans.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **int** | _int_ | Number of spaces used per indentation level. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## mirrors

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>mirrors</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Description

Gets the output replicas.

##### Return

( _java.util.List_ )

List of replicas.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>output</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>
##### Description

Provides the original output stream.

##### Return

( _[OutputStream](../objects/OutputStream)_ )

The original output stream..

---

## print

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _boolean_ | Boolean value that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>number</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the number.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **number** | _byte_ | Number that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>character</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the character.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **character** | _char_ | Character that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _double_ | Boolean value that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _float_ | Boolean value that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _int_ | Boolean value that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Converts the object to text and sends it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _java.lang.Object_ | Object that will be converted to text and sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Content that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _long_ | Boolean value that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _short_ | Boolean value that will be sent. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

## printf

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>printf</span>(<span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>objects</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **format** | _string_ |   |
| **objects** | _java.lang.Object[]_ |   |

##### Return

( _[Out](../resources/out)_ )


---

## println

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends a line break.

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _boolean_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>number</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the number with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **number** | _byte_ | Number that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>character</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the character with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **character** | _char_ | Character that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _double_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _float_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _int_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Converts the object to text and sends it with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _java.lang.Object_ | Object that will be converted to text and sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Content that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _long_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _short_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../resources/out)_ )

Current data output.

---

## setJSONHTMLEscape

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>setJSONHTMLEscape</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Defines whether the generated JSON content should escape special HTML characters (such as &lt;, &gt;, &amp;, etc.).

This method is an alias or helper method that delegates directly to jsonHTMLEscape(boolean htmlEscape), maintaining consistency with the JavaBeans naming convention (use of set as a prefix).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ | true to enable HTML escaping in JSON strings; false to keep the original characters. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## setJSONIdentFactor

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>setJSONIdentFactor</span>(<span style={{color: '#FF8000'}}>jsonIdentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Sets the indentation factor (spacing) used when generating pretty-printed JSON output.

This method is a shortcut that internally delegates to jsonIdentFactor(int jsonIdentFactor), maintaining consistency with JavaBeans conventions (use of set as a prefix).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **jsonIdentFactor** | _int_ | An integer representing the number of spaces for each indentation level in formatted JSON. |
|   |   | Example: |
|   |   |  |
|   |   | 0 or negative values → no indentation (compact JSON) |
|   |   | 2 → each indentation level will have 2 spaces |
|   |   | 4 → more readable indentation, with 4 spaces per level |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## start

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>start</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Starts the output, the HTTP header is sent.

##### Return

( _void_ )


---

## started

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>started</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks whether the response to the HTTP request has already started.

##### Return

( _boolean_ )

The HTTP request response has started and the header has already been sent.

---

## write

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes all bytes of an array directly to binary output.

The method delegates writing to the output stream associated with Proteu, ensuring that all bytes are transferred in the order of the array. It also propagates writing to mirror streams, if present.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ | Array of bytes to be written. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>off</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>len</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a specific sequence of bytes from an array to binary output.

This method allows you to write only a portion of the array, starting from a given index (off) and writing up to a defined length (len). The operation also propagates to mirror streams, if they exist.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ | Array of bytes from which the data will be extracted. |
| **off** | _int_ | Initial position in the array. |
| **len** | _int_ | Initial position in the array. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a single byte to the body of the HTTP response.

Internally, this method delegates the operation to the output stream managed by Proteu, which can perform status checks, start the stream if necessary, and replicate the output to additional streams (mirrors), as well as keeping track of the total number of bytes written.

It is useful for manually constructing responses byte by byte or for custom write streams.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **int** | _int_ | The byte to be written, represented as an integer value (only the least significant 8 bits are used). |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeBoolean

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeBoolean</span>(<span style={{color: '#FF8000'}}>boolean</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a Boolean value to the binary output.
The value true is represented as 1 (byte) and false as 0, and is written directly to the output stream.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **boolean** | _boolean_ | The value to be written to the binary output (true or false). |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeByte

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeByte</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a single byte to the HTTP response stream.

This method is ideal for direct binary output, such as raw data or file contents. Internally, it delegates the call to writeByte(int b) of the Proteu instance's OutputStream, which manages the main output stream and its mirrors (if configured).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **int** | _int_ | The value to be written as a byte. Only the least significant 8 bits are considered (equivalent to b & 0xFF). |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeChar

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeChar</span>(<span style={{color: '#FF8000'}}>char</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a Unicode character (UTF-16) as two bytes in the binary output.

The character is divided into two 8-bit parts: the most significant byte and the least significant byte. Both are written to the output in big-endian order (most significant bits first).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **char** | _char_ | Character to be written to the binary output. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeDouble

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeDouble</span>(<span style={{color: '#FF8000'}}>double</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a double value (64 bits, floating point) to the binary output.
The number is converted to its 8-byte binary representation according to the IEEE 754 standard and written to the output stream in big-endian order.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **double** | _double_ | The floating point value that will be written to the binary output. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeFloat

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeFloat</span>(<span style={{color: '#FF8000'}}>float</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a floating point value (32 bits, floating point) to the binary output.
The value is converted to its 4-byte binary representation according to the IEEE 754 standard and then written to the stream in big-endian order.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **float** | _float_ | The floating point number that will be written to the binary output. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeInt

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeInt</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes an integer value (32 bits) to the HTTP response stream as four bytes in big-endian order (from the most significant byte to the least significant byte).

This method is useful for generating structured binary outputs, such as file headers, binary communication with clients, or custom protocols.

Internally, each byte of the integer is extracted with bit shifts and sent individually to the main OutputStream and its mirrors, if any.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **int** | _int_ | The entire value to be written. It will be broken into four bytes and written sequentially to the stream. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeLong

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeLong</span>(<span style={{color: '#FF8000'}}>long</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a long value (64 bits) to the binary output.
The value is converted to a sequence of 8 bytes in big-endian format (most significant byte first), which ensures compatibility with most binary protocols and file formats.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **long** | _long_ | The numerical value that will be recorded in the binary output. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

## writeShort

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeShort</span>(<span style={{color: '#FF8000'}}>boolean</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Description

Writes a Boolean value (true or false) to the binary output.
The value is converted to a byte: 1 for true and 0 for false, following the common binary pattern.

This method is useful when you need to transmit data at the byte level, such as in binary files, network streams, or protocol buffers.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **boolean** | _short_ | The Boolean value that will be saved. |

##### Return

( _[Out](../resources/out)_ )

Returns the Out object itself

---

