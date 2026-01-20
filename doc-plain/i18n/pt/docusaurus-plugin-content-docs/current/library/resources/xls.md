---
id: xls
title: XLS
sidebar_label: XLS
---

Criar e ler ficheiros _Excel_, suporta para ficheiros _XLS_ como ficheiros _XLSX_.

Este recurso utiliza a biblioteca [Apache POI](https://poi.apache.org/ "Apache POI").

```javascript
const excel = _xls.create();
const titulos = _val.init()
    .add(
        _val.init()
            .set('value', 'Nome')
    ).add(
        _val.init()
            .set('value', 'Idade')
    );
const endPosition = excel.addDataTable(1, 1, titulos)
const dados = _val.init()
    .add(
        _val.init()
            .add(
                 _val.init()
                     .set('value', 'Maria')
            ).add(
                 _val.init()
                     .set('value', 24)
            )
    ).add(
        _val.init()
            .add(
                 _val.init()
                     .set('value', 'Ricardo')
            ).add(
                 _val.init()
                     .set('value', 22)
            )
    );
endPosition = excel.addDataTable(endPosition.row, 1, data)
excel.output("idades.xls");
```

---

## activeSheet

---

#### `_xls.create()`.activeSheet(index: int) : [XLS](/docs/library/resources/xls)
##### Descrição

Define a folha de cálculos que fica ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

#### `_xls.create()`.activeSheet(sheet: org.apache.poi.ss.usermodel.Sheet) : [XLS](/docs/library/resources/xls)
##### Descrição

Define a folha de cálculos que fica ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto de referência da folha de cálculos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

## addDataTable

---

#### `_xls.create()`.addDataTable(linha: int, coluna: int, dados: java.util.List) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _java.util.List_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(linha: int, coluna: int, dados: java.util.List, vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _java.util.List_ | Lista de dados que serão inseridos. |
| **vertical** | _boolean_ | Inserir dados na vertical. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(linha: int, coluna: int, dados: [Values](/docs/library/objects/Values)) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(linha: int, coluna: int, dados: [Values](/docs/library/objects/Values), vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Lista de dados que serão inseridos. |
| **vertical** | _boolean_ | Inserir dados na vertical. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(config: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, dados: java.util.List) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Configuração da tabela de dados. |
| **dados** | _java.util.List_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, linha: int, coluna: int, dados: java.util.List) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _java.util.List_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### _xls.addDataTable(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: java.util.List, vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _java.util.List_ |   |
| **vertical** | _boolean_ |   |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )


---

#### `_xls.create()`.addDataTable(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, linha: int, coluna: int, dados: [Values](/docs/library/objects/Values)) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### _xls.addDataTable(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: [Values](/docs/library/objects/Values), vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |
| **vertical** | _boolean_ |   |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )


---

## anchorType

---

#### _xls.anchorType(tipo: string) : org.apache.poi.ss.usermodel.ClientAnchor$AnchorType
##### Descrição

Gera o tipo de âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de âncora, suporta:<br/><ul><li>move-and-resize</li><li>dont-move-do-resize</li><li>move-dont-resize</li><li>dont-move-and-resize</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_ )

O tipo de âncora configurado com o tipo definido.

---

## borderStyle

---

#### _xls.borderStyle(tipo: string) : org.apache.poi.ss.usermodel.BorderStyle
##### Descrição

Gera o estilo de contorno das bordas das células.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de estilo de bordas, suporta:<br/><ul><li>none</li><li>thin</li><li>medium</li><li>dashed</li><li>dotted</li><li>thick</li><li>double</li><li>hair</li><li>medium-dashed</li><li>dash-dot</li><li>medium-dash-dot</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.BorderStyle_ )

O estilo de contorno de borda configurado com o tipo definido.

---

## cell

---

#### `_xls.create()`.cell(linha: int, coluna: int) : org.apache.poi.ss.usermodel.Cell
##### Descrição

Obtém uma célula da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Cell_ )

Objeto de representação da célula.

---

#### `_xls.create()`.cell(linha: org.apache.poi.ss.usermodel.Sheet, linha: int, coluna: int) : org.apache.poi.ss.usermodel.Cell
##### Descrição

Obtém uma célula da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha da folha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Cell_ )

Objeto de representação da célula.

---

## cellRangeAddress

---

#### _xls.cellRangeAddress(primeiraLinha: int, ultimaLinha: int, primeiraColuna: int, ultimaColuna: int) : org.apache.poi.ss.util.CellRangeAddress
##### Descrição

Gera o endereço de região da área das células.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **primeiraLinha** | _int_ | Número da primeira linha. |
| **ultimaLinha** | _int_ | Número da última linha. |
| **primeiraColuna** | _int_ | Número da primeira coluna. |
| **ultimaColuna** | _int_ | Número da última coluna. |

##### Retorno

( _org.apache.poi.ss.util.CellRangeAddress_ )

A referência do endereço da área das células.

---

## cellStyle

---

#### _xls.cellStyle() : org.apache.poi.ss.usermodel.CellStyle
##### Descrição

Cria um novo estilo de célula no workbook.

##### Retorno

( _org.apache.poi.ss.usermodel.CellStyle_ )

O novo estilo de célula criado.

---

## cellStyleFormat

---

#### _xls.cellStyleFormat(formato: string) : org.apache.poi.ss.usermodel.CellStyle
##### Descrição

Cria um novo estilo de célula com um formato associado no workbook.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formato** | _string_ | Definição do padrão do formato. |

##### Retorno

( _org.apache.poi.ss.usermodel.CellStyle_ )

O novo estilo de célula criado com o formato configurado.

---

## color

---

#### _xls.color(nome: string) : java.lang.Object
##### Descrição

Gera o código da cor baseado em nomes pré definidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da cor, suporta:<br/><ul><li>black</li><li>brown</li><li>olive_green</li><li>dark_green</li><li>dark_teal</li><li>dark_blue</li><li>indigo</li><li>grey_80_percent</li><li>orange</li><li>dark_yellow</li><li>green</li><li>teal</li><li>blue</li><li>blue_grey</li><li>grey_50_percent</li><li>red</li><li>light_orange</li><li>lime</li><li>sea_green</li><li>aqua</li><li>light_blue</li><li>violet</li><li>grey_40_percent</li><li>pink</li><li>gold</li><li>yellow</li><li>bright_green</li><li>turquoise</li><li>dark_red</li><li>sky_blue</li><li>plum</li><li>grey_25_percent</li><li>rose</li><li>light_yellow</li><li>light_green</li><li>light_turquoise</li><li>pale_blue</li><li>lavender</li><li>white</li><li>cornflower_blue</li><li>lemon_chiffon</li><li>maroon</li><li>orchid</li><li>coral</li><li>royal_blue</li><li>light_cornflower_blue</li><li>tan</li><li>automatic</li></ul> |

##### Retorno

( _java.lang.Object_ )

A referência da cor.

---

## columnReference

---

#### _xls.columnReference(index: int) : string
##### Descrição

Obtém a referência da coluna (letras) com base na sua posição numérico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ | Número da coluna. |

##### Retorno

( _string_ )

Referência em letras da coluna.

---

#### _xls.columnReference(index: string) : int
##### Descrição

Obtém a posição numérica da coluna com base na referência em letras.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _string_ | Referência em letras da coluna. |

##### Retorno

( _int_ )

Posição numérica da coluna.

---

## create

---

#### _xls.create() : [XLS](/docs/library/resources/xls)
##### Descrição

Cria um novo documento Excel.

##### Como Usar

```javascript
const excel = _xls.create();
```

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Nova instância do recurso XLS.

---

## create2007

---

#### _xls.create2007() : [XLS](/docs/library/resources/xls)
##### Descrição

Cria um novo documento Excel 97-2007, no formato antigo.

##### Como Usar

```javascript
const excel = _xls.create2007();
```

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Nova instância do recurso XLS.

---

## createSheet

---

#### `_xls.create()`.createSheet() : org.apache.poi.ss.usermodel.Sheet
##### Descrição

Cria uma nova folha de cálculos.

##### Retorno

( _org.apache.poi.ss.usermodel.Sheet_ )

Folha de cálculos criada.

---

#### `_xls.create()`.createSheet(nome: string) : org.apache.poi.ss.usermodel.Sheet
##### Descrição

Cria uma nova folha de cálculos e define o seu nome.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da folha de cálculos. |

##### Retorno

( _org.apache.poi.ss.usermodel.Sheet_ )

Folha de cálculos criada.

---

## fillPattern

---

#### _xls.fillPattern(tipo: string) : org.apache.poi.ss.usermodel.FillPatternType
##### Descrição

Gera o padrão de preenchimento de fundo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Tipo do padrão de preenchimento, suporta:<br/><ul><li>no-fill</li><li>solid-foreground</li><li>fine-dots</li><li>alt-bars</li><li>sparse-dots</li><li>thick-horz-bands</li><li>thick-vert-bands</li><li>thick-backward-diag</li><li>thick-forward-diag</li><li>big-spots</li><li>bricks</li><li>thin-horz-bands</li><li>thin-vert-bands</li><li>thin-backward-diag</li><li>thin-forward-diag</li><li>squares</li><li>diamonds</li><li>less-dots</li><li>least-dots</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.FillPatternType_ )

O padrão de preenchimento configurado com o tipo definido.

---

## font

---

#### _xls.font() : org.apache.poi.ss.usermodel.Font
##### Descrição

Cria um novo estilo de fonte no workbook.

##### Retorno

( _org.apache.poi.ss.usermodel.Font_ )

O novo estilo de fonte criado.

---

## format

---

#### _xls.format(formato: string) : short
##### Descrição

Cria um novo formato de célula no workbook.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formato** | _string_ | Definição do padrão do formato. |

##### Retorno

( _short_ )

Código identificador do novo formato.

---

## getAllSheets

---

#### `_xls.create()`.getAllSheets() : java.util.List
##### Descrição

Lista com todas as folhas de cálculos.

##### Retorno

( _java.util.List_ )

Todas as folhas de cálculos existentes no documento.

---

## getCellData

---

#### `_xls.create()`.getCellData(linha: int, coluna: int) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém um objeto com os dados de uma célula da folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Informações de dados da célula.

---

#### `_xls.create()`.getCellData(celula: org.apache.poi.ss.usermodel.Cell) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém um objeto com os dados de uma célula da folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **celula** | _org.apache.poi.ss.usermodel.Cell_ | Objeto que representa a célula. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Informações de dados da célula.

---

#### `_xls.create()`.getCellData(linha: org.apache.poi.ss.usermodel.Sheet, linha: int, coluna: int) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém um objeto com os dados de uma célula da folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha da folha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Informações de dados da célula.

---

## getNumberOfSheets

---

#### `_xls.create()`.getNumberOfSheets() : int
##### Descrição

Obtém o número total de folhas de cálculos.

##### Retorno

( _int_ )

O número total de folhas de cálculos existentes no documento.

---

## getSheet

---

#### `_xls.create()`.getSheet(index: int) : org.apache.poi.ss.usermodel.Sheet
##### Descrição

Obtém a folha de cálculos através do número (index).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ | Número da folha de cálculos. |

##### Retorno

( _org.apache.poi.ss.usermodel.Sheet_ )

Folha de cálculos referente ao número (index).

---

#### `_xls.create()`.getSheet(nome: string) : org.apache.poi.ss.usermodel.Sheet
##### Descrição

Obtém a folha de cálculos através do nome.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da folha de cálculos. |

##### Retorno

( _org.apache.poi.ss.usermodel.Sheet_ )

Folha de cálculos referente ao nome.

---

## horizontalAlignment

---

#### _xls.horizontalAlignment(tipo: string) : org.apache.poi.ss.usermodel.HorizontalAlignment
##### Descrição

Gera o alinhamento horizontal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de alinhamento horizontal, suporta:<br/><ul><li>general</li><li>left</li><li>center</li><li>right</li><li>fill</li><li>justify</li><li>center-selection</li><li>distributed</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.HorizontalAlignment_ )

O alinhamento horizontal configurado com o tipo definido.

---

## insertPicture

---

#### _xls.insertPicture(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, file: [File](/docs/library/objects/File), ancora: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Descrição

Insere uma imagem associada à âncora em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Folha de cálculos que será utilizada para inserir a imagem. |
| **file** | _[File](/docs/library/objects/File)_ | Ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### _xls.insertPicture(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, storage: [Storage](/docs/library/resources/storage), ancora: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Descrição

Insere uma imagem associada à âncora em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Folha de cálculos que será utilizada para inserir a imagem. |
| **storage** | _[Storage](/docs/library/resources/storage)_ | Referência do storage associado a um ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(file: [File](/docs/library/objects/File), linha: int, coluna: int) : org.apache.poi.ss.usermodel.Picture
##### Descrição

Insere a imagem na célula específicada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | Ficheiro de imagem. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(file: [File](/docs/library/objects/File), ancora: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Descrição

Insere uma imagem associada à âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | Ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(storage: [Storage](/docs/library/resources/storage), linha: int, coluna: int) : org.apache.poi.ss.usermodel.Picture
##### Descrição

Insere a imagem na célula específicada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Referência do storage associado a um ficheiro de imagem. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(storage: [Storage](/docs/library/resources/storage), ancora: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Descrição

Insere uma imagem associada à âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Referência do storage associado a um ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

## mergedRegion

---

#### _xls.mergedRegion(primeiraLinha: int, ultimaLinha: int, primeiraColuna: int, ultimaColuna: int) : int
##### Descrição

Realiza a mesclagem de células na região.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **primeiraLinha** | _int_ | Número da primeira linha. |
| **ultimaLinha** | _int_ | Número da última linha. |
| **primeiraColuna** | _int_ | Número da primeira coluna. |
| **ultimaColuna** | _int_ | Número da última coluna. |

##### Retorno

( _int_ )

A referência da região de células mesclada.

---

#### _xls.mergedRegion(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, primeiraLinha: int, ultimaLinha: int, primeiraColuna: int, ultimaColuna: int) : int
##### Descrição

Realiza a mesclagem de células na região passada em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Folha de cálculos que será mesclada as células. |
| **primeiraLinha** | _int_ | Número da primeira linha. |
| **ultimaLinha** | _int_ | Número da última linha. |
| **primeiraColuna** | _int_ | Número da primeira coluna. |
| **ultimaColuna** | _int_ | Número da última coluna. |

##### Retorno

( _int_ )

A referência da região de células mesclada.

---

## open

---

#### _xls.open(entrada: [InputStream](/docs/library/objects/InputStream)) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](/docs/library/objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### _xls.open(entrada: [InputStream](/docs/library/objects/InputStream), senha: string) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](/docs/library/objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### _xls.open(arquivo: [File](/docs/library/objects/File)) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arquivo** | _[File](/docs/library/objects/File)_ | Arquivo do tipo documento de Excel. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### _xls.open(arquivo: [File](/docs/library/objects/File), senha: string) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arquivo** | _[File](/docs/library/objects/File)_ | Arquivo do tipo documento de Excel. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### _xls.open(entrada: [InputStream](/docs/library/objects/InputStream)) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](/docs/library/objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### _xls.open(entrada: [InputStream](/docs/library/objects/InputStream), senha: string) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](/docs/library/objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### _xls.open(storage: [Storage](/docs/library/resources/storage)) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Referência do storage onde está o arquivo que será aberto. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### _xls.open(storage: [Storage](/docs/library/resources/storage), senha: string) : [XLS](/docs/library/resources/xls)
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Referência do storage onde está o arquivo que será aberto. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

## output

---

#### `_xls.create()`.output(nomeFicheiro: string) : void
##### Descrição

Realiza o envio de dados do ficheiro final para o cliente realizar o download.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeFicheiro** | _string_ | Nome do ficheiro. |

##### Retorno

( _void_ )


---

## position

---

#### _xls.position(linha: int, coluna: int) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Descrição

Obtém o objeto de posicionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Referência da posição com base nas coordenadas passadas.

---

## read

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream)) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Referência do ficheiro Excel. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), numero: int) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), escondidas: string) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Referência do ficheiro Excel. |
| **escondidas** | _string_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), numero: string, escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), numero: string, escondidas: int) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _int_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(in: [InputStream](/docs/library/objects/InputStream), password: string, sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _xls.read(input: [File](/docs/library/objects/File)) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [File](/docs/library/objects/File), escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Referência do ficheiro Excel. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [File](/docs/library/objects/File), numero: int) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [File](/docs/library/objects/File), numero: int, escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [File](/docs/library/objects/File), escondidas: string) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Referência do ficheiro Excel. |
| **escondidas** | _string_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [File](/docs/library/objects/File), numero: string, escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [File](/docs/library/objects/File), numero: string, escondidas: int) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _int_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(file: [File](/docs/library/objects/File), password: string, sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _xls.read(input: [Storage](/docs/library/resources/storage)) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Referência do ficheiro Excel. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), numero: int) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), numero: int, escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), escondidas: string) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Referência do ficheiro Excel. |
| **escondidas** | _string_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), numero: string, escondidas: boolean) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), numero: string, escondidas: int) : [Values](/docs/library/objects/Values)
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _int_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(storage: [Storage](/docs/library/resources/storage), password: string, sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## row

---

#### `_xls.create()`.row(linha: int) : org.apache.poi.ss.usermodel.Row
##### Descrição

Obtém uma linha da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |

##### Retorno

( _org.apache.poi.ss.usermodel.Row_ )

Objeto de representação da linha.

---

#### `_xls.create()`.row(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, linha: int) : org.apache.poi.ss.usermodel.Row
##### Descrição

Obtém uma linha da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto de folha de cálculos. |
| **linha** | _int_ | Número da linha. |

##### Retorno

( _org.apache.poi.ss.usermodel.Row_ )

Objeto de representação da linha.

---

## safeSheetName

---

#### _xls.safeSheetName(nome: string) : string
##### Descrição

Transforma o texto passado para ser um nome válido de folha de cálculos cumprindo as regras do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome que deverá ser transformado. |

##### Retorno

( _string_ )

Nome válido para ser utilizado como nome da folha de cálculos.

---

#### _xls.safeSheetName(nome: string, caracter: char) : string
##### Descrição

Transforma o texto passado para ser um nome válido de folha de cálculos cumprindo as regras do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome que deverá ser transformado. |
| **caracter** | _char_ | Carácter de substituição. |

##### Retorno

( _string_ )

Nome válido para ser utilizado como nome da folha de cálculos.

---

## save

---

#### `_xls.create()`.save(output: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Descrição

Realiza a escrita dos dados do ficheiro final para o output.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **output** | _[OutputStream](/docs/library/objects/OutputStream)_ | Output onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.save(file: [File](/docs/library/objects/File)) : void
##### Descrição

Realiza a escrita dos dados do ficheiro final.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | Ficheiro que será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.save(output: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Descrição

Realiza a escrita dos dados do ficheiro final para o output.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **output** | _[OutputStream](/docs/library/objects/OutputStream)_ | Output onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.save(storage: [Storage](/docs/library/resources/storage)) : void
##### Descrição

Realiza a escrita dos dados do ficheiro final para o storage interno da aplicação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Referência do storage onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

## setCellData

---

#### _xls.setCellData(linha: int, coluna: int, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [XLS](/docs/library/resources/xls)
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

#### _xls.setCellData(linha: int, coluna: int, dados: [Values](/docs/library/objects/Values)) : [XLS](/docs/library/resources/xls)
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

#### _xls.setCellData(celula: org.apache.poi.ss.usermodel.Cell, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [XLS](/docs/library/resources/xls)
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **celula** | _org.apache.poi.ss.usermodel.Cell_ | Objeto da célula. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

#### _xls.setCellData(celula: org.apache.poi.ss.usermodel.Cell, dados: [Values](/docs/library/objects/Values)) : [XLS](/docs/library/resources/xls)
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **celula** | _org.apache.poi.ss.usermodel.Cell_ | Objeto da célula. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

#### _xls.setCellData(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, linha: int, coluna: int, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [XLS](/docs/library/resources/xls)
##### Descrição

Insere dados numa célula específica em uma planilha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

#### _xls.setCellData(folhaCalculos: org.apache.poi.ss.usermodel.Sheet, linha: int, coluna: int, dados: [Values](/docs/library/objects/Values)) : [XLS](/docs/library/resources/xls)
##### Descrição

Insere dados numa célula específica em uma planilha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

## sheet

---

#### `_xls.create()`.sheet() : org.apache.poi.ss.usermodel.Sheet
##### Descrição

Para obter a folha de cálculos atual que está sendo utilizada para manipular os dados.

##### Como Usar

```javascript
const folhaDeCalculos = _xls.create().sheet();
```

##### Retorno

( _org.apache.poi.ss.usermodel.Sheet_ )

Obtém a folha de cálculos atual.

---

## units

---

#### _xls.units() : java.lang.Class
##### Descrição

Obtém os tipos de unidades pré definidos no Excel, útil para realizar a conversão entre pixeis e pontos.

##### Retorno

( _java.lang.Class_ )

A classe do Apache POI que ajuda a manipular as unidades do Excel.

---

## validSheetName

---

#### _xls.validSheetName(nome: string) : boolean
##### Descrição

Verifica se o texto passado é um nome válido de folha de cálculos que cumpre as regras do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome que deverá ser validado. |

##### Retorno

( _boolean_ )

Se é válido para ser utilizado como nome da folha de cálculos.

---

## verticalAlignment

---

#### _xls.verticalAlignment(tipo: string) : org.apache.poi.ss.usermodel.VerticalAlignment
##### Descrição

Gera o alinhamento vertical.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de alinhamento vertical, suporta:<br/><ul><li>top</li><li>center</li><li>bottom</li><li>justify</li><li>distributed</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.VerticalAlignment_ )

O alinhamento vertical configurado com o tipo definido.

---

## workbook

---

#### `_xls.create()`.workbook() : org.apache.poi.ss.usermodel.Workbook
##### Descrição

Cria um novo documento Excel.

##### Como Usar

```javascript
const workbook = _xls.create().workbook();
```

##### Retorno

( _org.apache.poi.ss.usermodel.Workbook_ )

Obtém o workbook.

---

