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

#### `_xls.create()`.activeSheet(index: _int_) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Descrição

Define a folha de cálculos que fica ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ | Número da folha de cálculos. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Folha de cálculos ativa.

---

## add

---

#### _xls.add(linha: _int_, coluna: _int_, dados: _java.util.Map_) : _[XLS](../../resources/XLS)_
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |
| dados | _java.util.Map_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/XLS)_ )

A instância atual do recurso XLS.

---

#### _xls.add(celula: _org.apache.poi.hssf.usermodel.HSSFCell_, dados: _java.util.Map_) : _[XLS](../../resources/XLS)_
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| celula | _org.apache.poi.hssf.usermodel.HSSFCell_ | Objeto da célula. |
| dados | _java.util.Map_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/XLS)_ )

A instância atual do recurso XLS.

---

#### _xls.add(celula: _org.apache.poi.hssf.usermodel.HSSFCell_, dados: _[Values](../../objects/Values)_) : _[XLS](../../resources/XLS)_
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| celula | _org.apache.poi.hssf.usermodel.HSSFCell_ | Objeto da célula. |
| dados | _[Values](../../objects/Values)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/XLS)_ )

A instância atual do recurso XLS.

---

## addDataTable

---

#### `_xls.create()`.addDataTable(linha: _int_, coluna: _int_, dados: _java.util.List_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |
| dados | _java.util.List_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(linha: _int_, coluna: _int_, dados: _java.util.List_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |
| dados | _java.util.List_ | Lista de dados que serão inseridos. |
| vertical | _boolean_ | Inserir dados na vertical. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(linha: _int_, coluna: _int_, dados: _[Values](../../objects/Values)_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |
| dados | _[Values](../../objects/Values)_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(linha: _int_, coluna: _int_, dados: _[Values](../../objects/Values)_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |
| dados | _[Values](../../objects/Values)_ | Lista de dados que serão inseridos. |
| vertical | _boolean_ | Inserir dados na vertical. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(config: _java.util.Map_, dados: _java.util.List_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _java.util.Map_ | Configuração da tabela de dados. |
| dados | _java.util.List_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(folhaCalculos: _org.apache.poi.hssf.usermodel.HSSFSheet_, linha: _int_, coluna: _int_, dados: _java.util.List_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| folhaCalculos | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Objeto da folha de cálculos. |
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |
| dados | _java.util.List_ | Lista de dados que serão inseridos. |
| vertical | _boolean_ | Inserir os dados na vertical. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.addDataTable(folhaCalculos: _org.apache.poi.hssf.usermodel.HSSFSheet_, linha: _int_, coluna: _int_, dados: _[Values](../../objects/Values)_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| folhaCalculos | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Objeto da folha de cálculos. |
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |
| dados | _[Values](../../objects/Values)_ | Lista de dados que serão inseridos. |
| vertical | _boolean_ | Inserir os dados na vertical. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

## anchorType

---

#### _xls.anchorType(tipo: string) : _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_
##### Descrição

Gera o tipo de âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Nome do tipo de âncora, suporta:<br><ul><li>move-and-resize</li><li>dont-move-do-resize</li><li>move-dont-resize</li><li>dont-move-and-resize</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_ )

O tipo de âncora configurado com o tipo definido.

---

## borderStyle

---

#### _xls.borderStyle(tipo: string) : _org.apache.poi.ss.usermodel.BorderStyle_
##### Descrição

Gera o estilo de contorno das bordas das células.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Nome do tipo de estilo de bordas, suporta:<br><ul><li>none</li><li>thin</li><li>medium</li><li>dashed</li><li>dotted</li><li>thick</li><li>double</li><li>hair</li><li>medium-dashed</li><li>dash-dot</li><li>medium-dash-dot</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.BorderStyle_ )

O estilo de contorno de borda configurado com o tipo definido.

---

## cell

---

#### `_xls.create()`.cell(linha: _int_, coluna: _int_) : _org.apache.poi.hssf.usermodel.HSSFCell_
##### Descrição

Obtém uma célula da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFCell_ )

Objeto de representação da célula.

---

#### `_xls.create()`.cell(linha: _org.apache.poi.hssf.usermodel.HSSFSheet_, linha: _int_, coluna: _int_) : _org.apache.poi.hssf.usermodel.HSSFCell_
##### Descrição

Obtém uma célula da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Objeto da folha de cálculos. |
| linha | _int_ | Número da linha da folha. |
| coluna | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFCell_ )

Objeto de representação da célula.

---

## cellRangeAddress

---

#### _xls.cellRangeAddress(primeiraLinha: _int_, ultimaLinha: _int_, primeiraColuna: _int_, ultimaColuna: _int_) : _org.apache.poi.ss.util.CellRangeAddress_
##### Descrição

Gera o endereço de região da área das células.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| primeiraLinha | _int_ | Número da primeira linha. |
| ultimaLinha | _int_ | Número da última linha. |
| primeiraColuna | _int_ | Número da primeira coluna. |
| ultimaColuna | _int_ | Número da última coluna. |

##### Retorno

( _org.apache.poi.ss.util.CellRangeAddress_ )

A referência do endereço da área das células.

---

## cellStyle

---

#### _xls.cellStyle() : _org.apache.poi.hssf.usermodel.HSSFCellStyle_
##### Descrição

Cria um novo estilo de célula no workbook.

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFCellStyle_ )

O novo estilo de célula criado.

---

## cellStyleFormat

---

#### _xls.cellStyleFormat(formato: string) : _org.apache.poi.hssf.usermodel.HSSFCellStyle_
##### Descrição

Cria um novo estilo de célula com um formato associado no workbook.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formato | string | Definição do padrão do formato. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFCellStyle_ )

O novo estilo de célula criado com o formato configurado.

---

## color

---

#### _xls.color(nome: string) : _short_
##### Descrição

Gera o código da cor baseado em nomes pré definidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Nome da cor, suporta:<br><ul><li>black</li><li>brown</li><li>olive_green</li><li>dark_green</li><li>dark_teal</li><li>dark_blue</li><li>indigo</li><li>grey_80_percent</li><li>orange</li><li>dark_yellow</li><li>green</li><li>teal</li><li>blue</li><li>blue_grey</li><li>grey_50_percent</li><li>red</li><li>light_orange</li><li>lime</li><li>sea_green</li><li>aqua</li><li>light_blue</li><li>violet</li><li>grey_40_percent</li><li>pink</li><li>gold</li><li>yellow</li><li>bright_green</li><li>turquoise</li><li>dark_red</li><li>sky_blue</li><li>plum</li><li>grey_25_percent</li><li>rose</li><li>light_yellow</li><li>light_green</li><li>light_turquoise</li><li>pale_blue</li><li>lavender</li><li>white</li><li>cornflower_blue</li><li>lemon_chiffon</li><li>maroon</li><li>orchid</li><li>coral</li><li>royal_blue</li><li>light_cornflower_blue</li><li>tan</li><li>automatic</li></ul> |

##### Retorno

( _short_ )

A referência da cor.

---

## columnReference

---

#### _xls.columnReference(index: _int_) : string
##### Descrição

Obtém a referência da coluna (letras) com base na sua posição numérico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ | Número da coluna. |

##### Retorno

( string )

Referência em letras da coluna.

---

#### _xls.columnReference(index: string) : _int_
##### Descrição

Obtém a posição numérica da coluna com base na referência em letras.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | string | Referência em letras da coluna. |

##### Retorno

( _int_ )

Posição numérica da coluna.

---

## create

---

#### _xls.create() : _[XLS](../../resources/XLS)_
##### Descrição

Cria um novo documento Excel.

##### Como Usar

```javascript
const excel = _xls.create();
```

##### Retorno

( _[XLS](../../resources/XLS)_ )

Nova instância do recurso XLS.

---

## createSheet

---

#### `_xls.create()`.createSheet() : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Descrição

Cria uma nova folha de cálculos.

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Folha de cálculos criada.

---

#### `_xls.create()`.createSheet(nome: string) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Descrição

Cria uma nova folha de cálculos e define o seu nome.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Nome da folha de cálculos. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Folha de cálculos criada.

---

## fillPattern

---

#### _xls.fillPattern(tipo: string) : _org.apache.poi.ss.usermodel.FillPatternType_
##### Descrição

Gera o padrão de preenchimento de fundo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Tipo do padrão de preenchimento, suporta:<br><ul><li>no-fill</li><li>solid-foreground</li><li>fine-dots</li><li>alt-bars</li><li>sparse-dots</li><li>thick-horz-bands</li><li>thick-vert-bands</li><li>thick-backward-diag</li><li>thick-forward-diag</li><li>big-spots</li><li>bricks</li><li>thin-horz-bands</li><li>thin-vert-bands</li><li>thin-backward-diag</li><li>thin-forward-diag</li><li>squares</li><li>diamonds</li><li>less-dots</li><li>least-dots</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.FillPatternType_ )

O padrão de preenchimento configurado com o tipo definido.

---

## font

---

#### _xls.font() : _org.apache.poi.hssf.usermodel.HSSFFont_
##### Descrição

Cria um novo estilo de fonte no workbook.

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFFont_ )

O novo estilo de fonte criado.

---

## format

---

#### _xls.format(formato: string) : _short_
##### Descrição

Cria um novo formato de célula no workbook.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formato | string | Definição do padrão do formato. |

##### Retorno

( _short_ )

Código identificador do novo formato.

---

## getSheet

---

#### `_xls.create()`.getSheet(index: _int_) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Descrição

Obtém a folha de cálculos através do número (index).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ | Número da folha de cálculos. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Folha de cálculos referente ao número (index).

---

#### `_xls.create()`.getSheet(nome: string) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Descrição

Obtém a folha de cálculos através do nome.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Nome da folha de cálculos. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Folha de cálculos referente ao nome.

---

## horizontalAlignment

---

#### _xls.horizontalAlignment(tipo: string) : _org.apache.poi.ss.usermodel.HorizontalAlignment_
##### Descrição

Gera o alinhamento horizontal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Nome do tipo de alinhamento horizontal, suporta:<br><ul><li>general</li><li>left</li><li>center</li><li>right</li><li>fill</li><li>justify</li><li>center-selection</li><li>distributed</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.HorizontalAlignment_ )

O alinhamento horizontal configurado com o tipo definido.

---

## insertPicture

---

#### _xls.insertPicture(folhaCalculos: _org.apache.poi.hssf.usermodel.HSSFSheet_, file: _[File](../../objects/File)_, ancora: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Descrição

Insere uma imagem associada à âncora em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| folhaCalculos | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Folha de cálculos que será utilizada para inserir a imagem. |
| file | _[File](../../objects/File)_ | Ficheiro de imagem. |
| ancora | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### _xls.insertPicture(folhaCalculos: _org.apache.poi.hssf.usermodel.HSSFSheet_, storage: _[Storage](../../resources/Storage)_, ancora: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Descrição

Insere uma imagem associada à âncora em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| folhaCalculos | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Folha de cálculos que será utilizada para inserir a imagem. |
| storage | _[Storage](../../resources/Storage)_ | Referência do storage associado a um ficheiro de imagem. |
| ancora | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(file: _[File](../../objects/File)_, linha: _int_, coluna: _int_) : _org.apache.poi.ss.usermodel.Picture_
##### Descrição

Insere a imagem na célula específicada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ | Ficheiro de imagem. |
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(file: _[File](../../objects/File)_, ancora: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Descrição

Insere uma imagem associada à âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ | Ficheiro de imagem. |
| ancora | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(storage: _[Storage](../../resources/Storage)_, linha: _int_, coluna: _int_) : _org.apache.poi.ss.usermodel.Picture_
##### Descrição

Insere a imagem na célula específicada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Referência do storage associado a um ficheiro de imagem. |
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.insertPicture(storage: _[Storage](../../resources/Storage)_, ancora: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Descrição

Insere uma imagem associada à âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Referência do storage associado a um ficheiro de imagem. |
| ancora | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

## mergedRegion

---

#### _xls.mergedRegion(primeiraLinha: _int_, ultimaLinha: _int_, primeiraColuna: _int_, ultimaColuna: _int_) : _int_
##### Descrição

Realiza a mesclagem de células na região.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| primeiraLinha | _int_ | Número da primeira linha. |
| ultimaLinha | _int_ | Número da última linha. |
| primeiraColuna | _int_ | Número da primeira coluna. |
| ultimaColuna | _int_ | Número da última coluna. |

##### Retorno

( _int_ )

A referência da região de células mesclada.

---

#### _xls.mergedRegion(folhaCalculos: _org.apache.poi.hssf.usermodel.HSSFSheet_, primeiraLinha: _int_, ultimaLinha: _int_, primeiraColuna: _int_, ultimaColuna: _int_) : _int_
##### Descrição

Realiza a mesclagem de células na região passada em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| folhaCalculos | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Folha de cálculos que será mesclada as células. |
| primeiraLinha | _int_ | Número da primeira linha. |
| ultimaLinha | _int_ | Número da última linha. |
| primeiraColuna | _int_ | Número da primeira coluna. |
| ultimaColuna | _int_ | Número da última coluna. |

##### Retorno

( _int_ )

A referência da região de células mesclada.

---

## output

---

#### `_xls.create()`.output(nomeFicheiro: string) : _void_
##### Descrição

Realiza o envio de dados do ficheiro final para o cliente realizar o download.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nomeFicheiro | string | Nome do ficheiro. |

##### Retorno

( _void_ )


---

## position

---

#### _xls.position(linha: _int_, coluna: _int_) : _[XLSPosition](../../objects/XLSPosition)_
##### Descrição

Obtém o objeto de posicionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |
| coluna | _int_ | Número da coluna. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição com base nas coordenadas passadas.

---

## read

---

#### _xls.read(input: _java.io.InputStream_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _java.io.InputStream_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _java.io.InputStream_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _java.io.InputStream_ | Referência do ficheiro Excel. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _java.io.InputStream_, numero: _int_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _java.io.InputStream_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _java.io.InputStream_, numero: _int_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _java.io.InputStream_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[File](../../objects/File)_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[File](../../objects/File)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[File](../../objects/File)_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[File](../../objects/File)_, numero: _int_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[File](../../objects/File)_, numero: _int_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, numero: _int_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, numero: _int_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Referência do ficheiro Excel. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_, numero: _int_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_, numero: _int_, escondidas: _boolean_) : _[Values](../../objects/Values)_
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Referência do ficheiro Excel. |
| numero | _int_ | Número da folha de cálculos. |
| escondidas | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

## row

---

#### `_xls.create()`.row(linha: _int_) : _org.apache.poi.hssf.usermodel.HSSFRow_
##### Descrição

Obtém uma linha da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | _int_ | Número da linha. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFRow_ )

Objeto de representação da linha.

---

#### `_xls.create()`.row(folhaCalculos: _org.apache.poi.hssf.usermodel.HSSFSheet_, linha: _int_) : _org.apache.poi.hssf.usermodel.HSSFRow_
##### Descrição

Obtém uma linha da folha de cálculos e caso não exista então será criada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| folhaCalculos | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Objeto de folha de cálculos. |
| linha | _int_ | Número da linha. |

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFRow_ )

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
| nome | string | Nome que deverá ser transformado. |

##### Retorno

( string )

Nome válido para ser utilizado como nome da folha de cálculos.

---

#### _xls.safeSheetName(nome: string, caracter: _char_) : string
##### Descrição

Transforma o texto passado para ser um nome válido de folha de cálculos cumprindo as regras do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Nome que deverá ser transformado. |
| caracter | _char_ | Carácter de substituição. |

##### Retorno

( string )

Nome válido para ser utilizado como nome da folha de cálculos.

---

## save

---

#### `_xls.create()`.save(output: _java.io.OutputStream_) : _void_
##### Descrição

Realiza a escrita dos dados do ficheiro final para o output.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| output | _java.io.OutputStream_ | Output onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.save(file: _[File](../../objects/File)_) : _void_
##### Descrição

Realiza a escrita dos dados do ficheiro final.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ | Ficheiro que será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.save(output: _[OutputStream](../../objects/OutputStream)_) : _void_
##### Descrição

Realiza a escrita dos dados do ficheiro final para o output.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| output | _[OutputStream](../../objects/OutputStream)_ | Output onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.save(storage: _[Storage](../../resources/Storage)_) : _void_
##### Descrição

Realiza a escrita dos dados do ficheiro final para o storage interno da aplicação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Referência do storage onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

## sheet

---

#### `_xls.create()`.sheet() : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Descrição

Para obter a folha de cálculos atual que está sendo utilizada para manipular os dados.

##### Como Usar

```javascript
const folhaDeCalculos = _xls.create().sheet();
```

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Obtém a folha de cálculos atual.

---

## units

---

#### _xls.units() : _java.lang.Class_
##### Descrição

Obtém os tipos de unidades pré definidos no Excel, útil para realizar a conversão entre pixeis e pontos.

##### Retorno

( _java.lang.Class_ )

A classe do Apache POI que ajuda a manipular as unidades do Excel.

---

## validSheetName

---

#### _xls.validSheetName(nome: string) : _boolean_
##### Descrição

Verifica se o texto passado é um nome válido de folha de cálculos que cumpre as regras do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Nome que deverá ser validado. |

##### Retorno

( _boolean_ )

Se é válido para ser utilizado como nome da folha de cálculos.

---

## verticalAlignment

---

#### _xls.verticalAlignment(tipo: string) : _org.apache.poi.ss.usermodel.VerticalAlignment_
##### Descrição

Gera o alinhamento vertical.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Nome do tipo de alinhamento vertical, suporta:<br><ul><li>top</li><li>center</li><li>bottom</li><li>justify</li><li>distributed</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.VerticalAlignment_ )

O alinhamento vertical configurado com o tipo definido.

---

## workbook

---

#### `_xls.create()`.workbook() : _org.apache.poi.hssf.usermodel.HSSFWorkbook_
##### Descrição

Cria um novo documento Excel.

##### Como Usar

```javascript
const workbook = _xls.create().workbook();
```

##### Retorno

( _org.apache.poi.hssf.usermodel.HSSFWorkbook_ )

Obtém o workbook.

---

