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

#### _csv.format(formatName: string) : _org.apache.commons.csv.CSVFormat_
##### Description

Gets the CSV formatter, supports:<ul><li>default</li><li>excel</li><li>informix-unload</li><li>informix-unload-csv</li><li>mysql</li><li>oracle</li><li>postgresql-csv</li><li>postgresql-text</li><li>rfc4180</li></ul>

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formatName | string | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVFormat_ )

The type of format to be used.

---

## parser

---

#### _csv.parser(reader: _java.io.Reader_) : _org.apache.commons.csv.CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| reader | _java.io.Reader_ | Data stream that will be processed. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(reader: _java.io.Reader_, format: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| reader | _java.io.Reader_ | Data stream that will be processed. |
| format | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(content: string, format: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Text content that must be processed. |
| format | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: _[Storage](../../resources/Storage)_) : _org.apache.commons.csv.CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Path of the file in storage that is to be processed. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: _[Storage](../../resources/Storage)_, charset: string) : _org.apache.commons.csv.CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Path of the file in storage that is to be processed. |
| charset | string | Character encoding type code such as: |
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

#### _csv.parser(storage: _[Storage](../../resources/Storage)_, charset: string, format: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Path of the file in storage that is to be processed. |
| charset | string | Character encoding type code such as: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |
| format | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(reader: _[Storage](../../resources/Storage)_, format: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| reader | _[Storage](../../resources/Storage)_ | Data stream that will be processed. |
| format | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVParser_ )

The parser initialized.

---

#### _csv.parser(arg0: _[Storage](../../resources/Storage)_, arg1: _org.apache.commons.csv.CSVFormat_, arg2: _long_, arg3: _long_) : _org.apache.commons.csv.CSVParser_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Storage](../../resources/Storage)_ |   |
| arg1 | _org.apache.commons.csv.CSVFormat_ |   |
| arg2 | _long_ |   |
| arg3 | _long_ |   |

##### Return

( _org.apache.commons.csv.CSVParser_ )


---

## printer

---

#### _csv.printer(writer: _java.io.Writer_) : _org.apache.commons.csv.CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _java.io.Writer_ | Writer for the CSV file. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

#### _csv.printer(writer: _java.io.Writer_, format: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _java.io.Writer_ | Writer for the CSV file. |
| format | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

#### _csv.printer(writer: _[Storage](../../resources/Storage)_) : _org.apache.commons.csv.CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _[Storage](../../resources/Storage)_ | Writer for the CSV file. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

#### _csv.printer(writer: _[Storage](../../resources/Storage)_, format: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _[Storage](../../resources/Storage)_ | Writer for the CSV file. |
| format | _org.apache.commons.csv.CSVFormat_ | Name of the format to be used. |

##### Return

( _org.apache.commons.csv.CSVPrinter_ )

The printer initialized.

---

