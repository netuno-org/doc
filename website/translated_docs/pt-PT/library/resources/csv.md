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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">format</span>(<span style="color: #FF8000">nomeFormato</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">reader</span>: <span style="font-weight: normal; font-style: italic;">java.io.Reader</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">reader</span>: <span style="font-weight: normal; font-style: italic;">java.io.Reader</span>, <span style="color: #FF8000">nomeFormato</span>: <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">nomeFormato</span>: <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">nomeFormato</span>: <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Caminho do ficheiro em storage que deverá ser processado. |
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">reader</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">nomeFormato</span>: <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
##### Descrição

Obtém o parser do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reader** | _[Storage](../../resources/storage)_ | Fluxo de dados que será processado. |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )

O parser inicializado.

---

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">parser</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">format</span>: <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>, <span style="color: #FF8000">characterOffset</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">recordNumber</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVParser</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ |   |
| **format** | _org.apache.commons.csv.CSVFormat_ |   |
| **characterOffset** | _long_ |   |
| **recordNumber** | _long_ |   |

##### Retorno

( _org.apache.commons.csv.CSVParser_ )


---

## printer

---

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">printer</span>(<span style="color: #FF8000">writer</span>: <span style="font-weight: normal; font-style: italic;">java.io.Writer</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVPrinter</span>
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">printer</span>(<span style="color: #FF8000">writer</span>: <span style="font-weight: normal; font-style: italic;">java.io.Writer</span>, <span style="color: #FF8000">nomeFormato</span>: <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVPrinter</span>
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

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">printer</span>(<span style="color: #FF8000">writer</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVPrinter</span>
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **writer** | _[Storage](../../resources/storage)_ | Escritor para o ficheiro CSV. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

#### <span style="font-weight: normal">_csv</span>.<span style="color: #008000">printer</span>(<span style="color: #FF8000">writer</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">nomeFormato</span>: <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVFormat</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.commons.csv.CSVPrinter</span>
##### Descrição

Obtém o printer do CSV.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **writer** | _[Storage](../../resources/storage)_ | Escritor para o ficheiro CSV. |
| **nomeFormato** | _org.apache.commons.csv.CSVFormat_ | Nome do formato que será utilizado. |

##### Retorno

( _org.apache.commons.csv.CSVPrinter_ )

O printer inicializado.

---

