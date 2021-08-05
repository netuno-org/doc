---
id: csv
title: CSV
sidebar_label: CSV
---

Processa ficheiros do tipo CSV.

---

## format

---

#### _csv.format(arg0: _string_) : _CSVFormat_
##### Descrição

Obtém o formatador do CSV, suporta: <ul><li>default</li><li>excel</li><li>informix-unload</li><li>informix-unload-csv</li><li>mysql</li><li>oracle</li><li>postgresql-csv</li><li>postgresql-text</li><li>rfc4180</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _CSVFormat_ )


---

## parser

---

#### _csv.parser(arg0: _Storage_, arg1: _string_, arg2: _CSVFormat_) : _CSVParser_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _string_ |   |
| arg2 | _CSVFormat_ |   |

##### Retorno

( _CSVParser_ )


---

#### _csv.parser(arg0: _string_, arg1: _CSVFormat_) : _CSVParser_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _CSVFormat_ |   |

##### Retorno

( _CSVParser_ )


---

#### _csv.parser(arg0: _Reader_, arg1: _CSVFormat_) : _CSVParser_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |
| arg1 | _CSVFormat_ |   |

##### Retorno

( _CSVParser_ )


---

## toString

---

#### _csv.toString() : _string_
##### Retorno

( _string_ )


---

