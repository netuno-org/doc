---
id: csv
title: CSV
sidebar_label: CSV
---

Processes CSV type files.
This feature uses the [Apache Commons CSV](https://commons.apache.org/proper/commons-csv/ "Apache Commons CSV") library.

---

## format

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>format</span>(<span style={{color: '#FF8000'}}>formatName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>
##### Description

Gets the CSV formatter, supports:<ul><li>default</li><li>excel</li><li>informix-unload</li><li>informix-unload-csv</li><li>mysql</li><li>oracle</li><li>postgresql-csv</li><li>postgresql-text</li><li>rfc4180</li></ul>

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formatName** | _string_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVFormat_ )

The type of format to be used.

---

## parser

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>reader</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reader** | _java.io.Reader_ | Data stream that will be processed. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>reader</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>, <span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reader** | _java.io.Reader_ | Data stream that will be processed. |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Text content that must be processed. |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Path of the file in storage that is to be processed. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Path of the file in storage that is to be processed. |
| **charset** | _string_ | Character encoding type code such as: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Path of the file in storage that is to be processed. |
| **charset** | _string_ | Character encoding type code such as: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>reader</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reader** | _[Storage](../resources/storage)_ | Data stream that will be processed. |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>parser</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>, <span style={{color: '#FF8000'}}>characterOffset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>recordNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVParser</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ |   |
| **format** | _org.apache.commons.csv.CSVFormat_ |   |
| **characterOffset** | _long_ |   |
| **recordNumber** | _long_ |   |

##### Return

( _org.apache.commons.csv.CSVParser_ )


---

## printer

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>printer</span>(<span style={{color: '#FF8000'}}>writer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVPrinter</span>
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **writer** | _java.io.Writer_ | Writer for the CSV file. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>printer</span>(<span style={{color: '#FF8000'}}>writer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>, <span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVPrinter</span>
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **writer** | _java.io.Writer_ | Writer for the CSV file. |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>printer</span>(<span style={{color: '#FF8000'}}>writer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVPrinter</span>
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **writer** | _[Storage](../resources/storage)_ | Writer for the CSV file. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

#### <span style={{fontWeight: 'normal'}}>_csv</span>.<span style={{color: '#008000'}}>printer</span>(<span style={{color: '#FF8000'}}>writer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVFormat</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.apache.commons.csv.CSVPrinter</span>
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **writer** | _[Storage](../resources/storage)_ | Writer for the CSV file. |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

