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

#### _csv.format(formatName: string) : _CSVFormat_
##### Description

Gets the CSV formatter, supports:<ul><li>default</li><li>excel</li><li>informix-unload</li><li>informix-unload-csv</li><li>mysql</li><li>oracle</li><li>postgresql-csv</li><li>postgresql-text</li><li>rfc4180</li></ul>

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formatName | string | Name of the format to be used. |

##### Return

( _CSVFormat_ )

The type of format to be used.

---

## parser

---

#### _csv.parser(storage: _Reader_) : _CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Reader_ | Path of the file in storage that is to be processed. |

##### Return

( _CSVParser_ )

The parser initialized.

---

#### _csv.parser(reader: _Reader_, format: _CSVFormat_) : _CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| reader | _Reader_ | Data stream that will be processed. |
| format | _CSVFormat_ | Name of the format to be used. |

##### Return

( _CSVParser_ )

The parser initialized.

---

#### _csv.parser(content: string, format: _CSVFormat_) : _CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Text content that must be processed. |
| format | _CSVFormat_ | Name of the format to be used. |

##### Return

( _CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: _Storage_) : _CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Path of the file in storage that is to be processed. |

##### Return

( _CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: _Storage_, charset: string) : _CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Path of the file in storage that is to be processed. |
| charset | string | Character encoding type code such as: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Return

( _CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: _Storage_, charset: string, format: _CSVFormat_) : _CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Path of the file in storage that is to be processed. |
| charset | string | Character encoding type code such as: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |
| format | _CSVFormat_ | Name of the format to be used. |

##### Return

( _CSVParser_ )

The parser initialized.

---

#### _csv.parser(storage: _Storage_, charset: _CSVFormat_) : _CSVParser_
##### Description

Gets the CSV parser.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Path of the file in storage that is to be processed. |
| charset | _CSVFormat_ | Character encoding type code such as: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Return

( _CSVParser_ )

The parser initialized.

---

#### _csv.parser(arg0: _Storage_, arg1: _CSVFormat_, arg2: _long_, arg3: _long_) : _CSVParser_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _CSVFormat_ |   |
| arg2 | _long_ |   |
| arg3 | _long_ |   |

##### Return

( _CSVParser_ )


---

## printer

---

#### _csv.printer(writer: _Writer_) : _CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _Writer_ | Writer for the CSV file. |

##### Return

( _CSVPrinter_ )

The printer initialized.

---

#### _csv.printer(writer: _Writer_, format: _CSVFormat_) : _CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _Writer_ | Writer for the CSV file. |
| format | _CSVFormat_ | Name of the format to be used. |

##### Return

( _CSVPrinter_ )

The printer initialized.

---

#### _csv.printer(writer: _Storage_) : _CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _Storage_ | Writer for the CSV file. |

##### Return

( _CSVPrinter_ )

The printer initialized.

---

#### _csv.printer(writer: _Storage_, format: _CSVFormat_) : _CSVPrinter_
##### Description

Gets the CSV printer.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| writer | _Storage_ | Writer for the CSV file. |
| format | _CSVFormat_ | Name of the format to be used. |

##### Return

( _CSVPrinter_ )

The printer initialized.

---

