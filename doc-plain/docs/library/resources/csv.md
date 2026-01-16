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

#### _csv.format(formatName: string) : org.apache.commons.csv.CSVFormat
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

#### _csv.parser(reader: java.io.Reader) : org.apache.commons.csv.CSVParser
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

#### _csv.parser(reader: java.io.Reader, format: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
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

#### _csv.parser(content: string, format: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
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

#### _csv.parser(storage: [Storage](/docs/library/resources/storage)) : org.apache.commons.csv.CSVParser
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Path of the file in storage that is to be processed. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: [Storage](/docs/library/resources/storage), charset: string) : org.apache.commons.csv.CSVParser
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Path of the file in storage that is to be processed. |
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

#### _csv.parser(storage: [Storage](/docs/library/resources/storage), charset: string, format: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Path of the file in storage that is to be processed. |
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

#### _csv.parser(reader: [Storage](/docs/library/resources/storage), format: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reader** | _[Storage](/docs/library/resources/storage)_ | Data stream that will be processed. |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: [Storage](/docs/library/resources/storage), format: org.apache.commons.csv.CSVFormat, characterOffset: long, recordNumber: long) : org.apache.commons.csv.CSVParser
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **format** | _org.apache.commons.csv.CSVFormat_ |   |
| **characterOffset** | _long_ |   |
| **recordNumber** | _long_ |   |

##### Return

( _org.apache.commons.csv.CSVParser_ )


---

## printer

---

#### _csv.printer(writer: java.io.Writer) : org.apache.commons.csv.CSVPrinter
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

#### _csv.printer(writer: java.io.Writer, format: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVPrinter
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

#### _csv.printer(writer: [Storage](/docs/library/resources/storage)) : org.apache.commons.csv.CSVPrinter
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **writer** | _[Storage](/docs/library/resources/storage)_ | Writer for the CSV file. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

#### _csv.printer(writer: [Storage](/docs/library/resources/storage), format: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVPrinter
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **writer** | _[Storage](/docs/library/resources/storage)_ | Writer for the CSV file. |
| **format** | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

