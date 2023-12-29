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

#### _csv.format(nomeFormato: string) : _org.apache.commons.csv.CSVFormat_
##### Descrição

Obtém o formatador do CSV, suporta:<ul><li>default</li><li>excel</li><li>informix-unload</li><li>informix-unload-csv</li><li>mysql</li><li>oracle</li><li>postgresql-csv</li><li>postgresql-text</li><li>rfc4180</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nomeFormato | string | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVFormat_ )

O tipo do formato que deverá ser utilizado.

---

## parser

---

#### _csv.parser(reader: _java.io.Reader_) : _org.apache.commons.csv.CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| reader | _java.io.Reader_ | Fluxo de dados que será processado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(reader: _java.io.Reader_, nomeFormato: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| reader | _java.io.Reader_ | Fluxo de dados que será processado. |
| nomeFormato | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(content: string, nomeFormato: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string | Conteúdo de texto que deverá ser processado. |
| nomeFormato | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: _[Storage](../../resources/Storage)_) : _org.apache.commons.csv.CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Caminho do ficheiro em storage que deverá ser processado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: _[Storage](../../resources/Storage)_, charset: string) : _org.apache.commons.csv.CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
| charset | string | Código do tipo de codificação de caracteres como: |
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

#### _csv.parser(storage: _[Storage](../../resources/Storage)_, charset: string, nomeFormato: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
| charset | string | Código do tipo de codificação de caracteres como: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |
| nomeFormato | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(reader: _[Storage](../../resources/Storage)_, nomeFormato: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| reader | _[Storage](../../resources/Storage)_ | Fluxo de dados que será processado. |
| nomeFormato | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### _csv.parser(arg0: _[Storage](../../resources/Storage)_, arg1: _org.apache.commons.csv.CSVFormat_, arg2: _long_, arg3: _long_) : _org.apache.commons.csv.CSVParser_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Storage](../../resources/Storage)_ |   |
| arg1 | _org.apache.commons.csv.CSVFormat_ |   |
| arg2 | _long_ |   |
| arg3 | _long_ |   |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )


---

## printer

---

#### _csv.printer(writer: _java.io.Writer_) : _org.apache.commons.csv.CSVPrinter_
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| writer | _java.io.Writer_ | Escritor para o ficheiro CSV. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

#### _csv.printer(writer: _java.io.Writer_, nomeFormato: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVPrinter_
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| writer | _java.io.Writer_ | Escritor para o ficheiro CSV. |
| nomeFormato | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

#### _csv.printer(writer: _[Storage](../../resources/Storage)_) : _org.apache.commons.csv.CSVPrinter_
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| writer | _[Storage](../../resources/Storage)_ | Escritor para o ficheiro CSV. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

#### _csv.printer(writer: _[Storage](../../resources/Storage)_, nomeFormato: _org.apache.commons.csv.CSVFormat_) : _org.apache.commons.csv.CSVPrinter_
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| writer | _[Storage](../../resources/Storage)_ | Escritor para o ficheiro CSV. |
| nomeFormato | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

