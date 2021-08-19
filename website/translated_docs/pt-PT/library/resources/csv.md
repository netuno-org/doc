---
id: csv
title: CSV
sidebar_label: CSV
---

Processa ficheiros do tipo CSV.

---

## format

---

#### _csv.format(nomeFormato: string) : _CSVFormat_
##### Descrição

Obtém o formatador do CSV, suporta:<ul><li>default</li><li>excel</li><li>informix-unload</li><li>informix-unload-csv</li><li>mysql</li><li>oracle</li><li>postgresql-csv</li><li>postgresql-text</li><li>rfc4180</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nomeFormato | string | Nome do formato que será utilizado. |

##### Retorno

( _CSVFormat_ )

O tipo do formato que deverá ser utilizado.

---

## parser

---

#### _csv.parser(storage: _Reader_) : _CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _Reader_ | Caminho do ficheiro em storage que deverá ser processado. |

##### Retorno

( _CSVParser_ )

O parser inicializado.

---

#### _csv.parser(reader: _Reader_, nomeFormato: _CSVFormat_) : _CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| reader | _Reader_ | Fluxo de dados que será processado. |
| nomeFormato | _CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _CSVParser_ )

O parser inicializado.

---

#### _csv.parser(content: string, nomeFormato: _CSVFormat_) : _CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string | Conteúdo de texto que deverá ser processado. |
| nomeFormato | _CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: _Storage_) : _CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _Storage_ | Caminho do ficheiro em storage que deverá ser processado. |

##### Retorno

( _CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: _Storage_, charset: string) : _CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _Storage_ | Caminho do ficheiro em storage que deverá ser processado. |
| charset | string | Código do tipo de codificação de caracteres como: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Retorno

( _CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: _Storage_, charset: string, nomeFormato: _CSVFormat_) : _CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _Storage_ | Caminho do ficheiro em storage que deverá ser processado. |
| charset | string | Código do tipo de codificação de caracteres como: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |
| nomeFormato | _CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _CSVParser_ )

O parser inicializado.

---

#### _csv.parser(storage: _Storage_, charset: _CSVFormat_) : _CSVParser_
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _Storage_ | Caminho do ficheiro em storage que deverá ser processado. |
| charset | _CSVFormat_ | Código do tipo de codificação de caracteres como: |
|   |   | - US-ASCII |
|   |   | - ISO-8859-1 |
|   |   | - UTF-8 |
|   |   | - UTF-16BE |
|   |   | - UTF-16LE |
|   |   | - UTF-16 |

##### Retorno

( _CSVParser_ )

O parser inicializado.

---

#### _csv.parser(arg0: _Storage_, arg1: _CSVFormat_, arg2: _long_, arg3: _long_) : _CSVParser_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _CSVFormat_ |   |
| arg2 | _long_ |   |
| arg3 | _long_ |   |

##### Retorno

( _CSVParser_ )


---

## printer

---

#### _csv.printer(arg0: _Storage_, arg1: _CSVFormat_) : _CSVPrinter_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _CSVFormat_ |   |

##### Retorno

( _CSVPrinter_ )


---

