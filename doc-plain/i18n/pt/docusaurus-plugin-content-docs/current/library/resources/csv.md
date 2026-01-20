---
id: csv
title: CSV
sidebar_label: CSV
---

Processa ficheiros do tipo CSV.

Este recurso utiliza a biblioteca [Apache Commons CSV](https://commons.apache.org/proper/commons-csv/ "Apache Commons CSV").

---

## format

---

#### _csv.format(nomeFormato: string) : org.apache.commons.csv.CSVFormat
##### Descrição

Obtém o formatador do CSV, suporta:<ul><li>default</li><li>excel</li><li>informix-unload</li><li>informix-unload-csv</li><li>mysql</li><li>oracle</li><li>postgresql-csv</li><li>postgresql-text</li><li>rfc4180</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeFormato** | _string_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVFormat_ )

O tipo do formato que deverá ser utilizado.

---

## parser

---

#### _csv.parser(reader: java.io.Reader) : org.apache.commons.csv.CSVParser
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reader** | _java.io.Reader_ | Fluxo de dados que será processado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(reader: java.io.Reader, nomeFormato: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reader** | _java.io.Reader_ | Fluxo de dados que será processado. |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(content: string, nomeFormato: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ | Conteúdo de texto que deverá ser processado. |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: [Storage](/docs/library/resources/storage)) : org.apache.commons.csv.CSVParser
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: [Storage](/docs/library/resources/storage), charset: string) : org.apache.commons.csv.CSVParser
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
| **charset** | _string_ | Código do tipo de codificação de caracteres como: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: [Storage](/docs/library/resources/storage), charset: string, nomeFormato: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
| **charset** | _string_ | Código do tipo de codificação de caracteres como: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(reader: [Storage](/docs/library/resources/storage), nomeFormato: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVParser
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reader** | _[Storage](/docs/library/resources/storage)_ | Fluxo de dados que será processado. |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: [Storage](/docs/library/resources/storage), format: org.apache.commons.csv.CSVFormat, characterOffset: long, recordNumber: long) : org.apache.commons.csv.CSVParser
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **format** | _org.apache.commons.csv.CSVFormat_ |   |
| **characterOffset** | _long_ |   |
| **recordNumber** | _long_ |   |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )


---

## printer

---

#### _csv.printer(writer: java.io.Writer) : org.apache.commons.csv.CSVPrinter
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **writer** | _java.io.Writer_ | Escritor para o ficheiro CSV. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

#### _csv.printer(writer: java.io.Writer, nomeFormato: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVPrinter
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **writer** | _java.io.Writer_ | Escritor para o ficheiro CSV. |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

#### _csv.printer(writer: [Storage](/docs/library/resources/storage)) : org.apache.commons.csv.CSVPrinter
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **writer** | _[Storage](/docs/library/resources/storage)_ | Escritor para o ficheiro CSV. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

#### _csv.printer(writer: [Storage](/docs/library/resources/storage), nomeFormato: org.apache.commons.csv.CSVFormat) : org.apache.commons.csv.CSVPrinter
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **writer** | _[Storage](/docs/library/resources/storage)_ | Escritor para o ficheiro CSV. |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

