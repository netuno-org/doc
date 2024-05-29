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

#### `_xls.create()`.<span style="color: #008000">activeSheet</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Define a folha de cálculos que fica ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

#### `_xls.create()`.<span style="color: #008000">activeSheet</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.hssf.usermodel.HSSFSheet</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Define a folha de cálculos que fica ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Objeto de referência da folha de cálculos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

## addDataTable

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _java.util.List_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
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

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](../../objects/Values)_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](../../objects/Values)_ | Lista de dados que serão inseridos. |
| **vertical** | _boolean_ | Inserir dados na vertical. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Configuração da tabela de dados. |
| **dados** | _java.util.List_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
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

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _java.util.List_ |   |
| **vertical** | _boolean_ |   |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )


---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Descrição

Adiciona uma tabela de dados na folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](../../objects/Values)_ | Lista de dados que serão inseridos. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição da última célula com dados inserida.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |
| **vertical** | _boolean_ |   |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )


---

## anchorType

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">anchorType</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor$AnchorType</span>
##### Descrição

Gera o tipo de âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de âncora, suporta:<br><ul><li>move-and-resize</li><li>dont-move-do-resize</li><li>move-dont-resize</li><li>dont-move-and-resize</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_ )

O tipo de âncora configurado com o tipo definido.

---

## borderStyle

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">borderStyle</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.BorderStyle</span>
##### Descrição

Gera o estilo de contorno das bordas das células.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de estilo de bordas, suporta:<br><ul><li>none</li><li>thin</li><li>medium</li><li>dashed</li><li>dotted</li><li>thick</li><li>double</li><li>hair</li><li>medium-dashed</li><li>dash-dot</li><li>medium-dash-dot</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.BorderStyle_ )

O estilo de contorno de borda configurado com o tipo definido.

---

## cell

---

#### `_xls.create()`.<span style="color: #008000">cell</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>
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

#### `_xls.create()`.<span style="color: #008000">cell</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">cellRangeAddress</span>(<span style="color: #FF8000">primeiraLinha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">ultimaLinha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">primeiraColuna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">ultimaColuna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.util.CellRangeAddress</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">cellStyle</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.CellStyle</span>
##### Descrição

Cria um novo estilo de célula no workbook.

##### Retorno

( _org.apache.poi.ss.usermodel.CellStyle_ )

O novo estilo de célula criado.

---

## cellStyleFormat

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">cellStyleFormat</span>(<span style="color: #FF8000">formato</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.CellStyle</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">color</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Descrição

Gera o código da cor baseado em nomes pré definidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da cor, suporta:<br><ul><li>black</li><li>brown</li><li>olive_green</li><li>dark_green</li><li>dark_teal</li><li>dark_blue</li><li>indigo</li><li>grey_80_percent</li><li>orange</li><li>dark_yellow</li><li>green</li><li>teal</li><li>blue</li><li>blue_grey</li><li>grey_50_percent</li><li>red</li><li>light_orange</li><li>lime</li><li>sea_green</li><li>aqua</li><li>light_blue</li><li>violet</li><li>grey_40_percent</li><li>pink</li><li>gold</li><li>yellow</li><li>bright_green</li><li>turquoise</li><li>dark_red</li><li>sky_blue</li><li>plum</li><li>grey_25_percent</li><li>rose</li><li>light_yellow</li><li>light_green</li><li>light_turquoise</li><li>pale_blue</li><li>lavender</li><li>white</li><li>cornflower_blue</li><li>lemon_chiffon</li><li>maroon</li><li>orchid</li><li>coral</li><li>royal_blue</li><li>light_cornflower_blue</li><li>tan</li><li>automatic</li></ul> |

##### Retorno

( _short_ )

A referência da cor.

---

## columnReference

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">columnReference</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">columnReference</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">create</span>() : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Cria um novo documento Excel.

##### Como Usar

```javascript
const excel = _xls.create();
```

##### Retorno

( _[XLS](../../resources/xls)_ )

Nova instância do recurso XLS.

---

## createSheet

---

#### `_xls.create()`.<span style="color: #008000">createSheet</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
##### Descrição

Cria uma nova folha de cálculos.

##### Retorno

( _org.apache.poi.ss.usermodel.Sheet_ )

Folha de cálculos criada.

---

#### `_xls.create()`.<span style="color: #008000">createSheet</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">fillPattern</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.FillPatternType</span>
##### Descrição

Gera o padrão de preenchimento de fundo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Tipo do padrão de preenchimento, suporta:<br><ul><li>no-fill</li><li>solid-foreground</li><li>fine-dots</li><li>alt-bars</li><li>sparse-dots</li><li>thick-horz-bands</li><li>thick-vert-bands</li><li>thick-backward-diag</li><li>thick-forward-diag</li><li>big-spots</li><li>bricks</li><li>thin-horz-bands</li><li>thin-vert-bands</li><li>thin-backward-diag</li><li>thin-forward-diag</li><li>squares</li><li>diamonds</li><li>less-dots</li><li>least-dots</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.FillPatternType_ )

O padrão de preenchimento configurado com o tipo definido.

---

## font

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">font</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Font</span>
##### Descrição

Cria um novo estilo de fonte no workbook.

##### Retorno

( _org.apache.poi.ss.usermodel.Font_ )

O novo estilo de fonte criado.

---

## format

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">format</span>(<span style="color: #FF8000">formato</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
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

#### `_xls.create()`.<span style="color: #008000">getAllSheets</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Descrição

Lista com todas as folhas de cálculos.

##### Retorno

( _java.util.List_ )

Todas as folhas de cálculos existentes no documento.

---

## getCellData

---

#### `_xls.create()`.<span style="color: #008000">getCellData</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém um objeto com os dados de uma célula da folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _[Values](../../objects/Values)_ )

Informações de dados da célula.

---

#### `_xls.create()`.<span style="color: #008000">getCellData</span>(<span style="color: #FF8000">celula</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém um objeto com os dados de uma célula da folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **celula** | _org.apache.poi.ss.usermodel.Cell_ | Objeto que representa a célula. |

##### Retorno

( _[Values](../../objects/Values)_ )

Informações de dados da célula.

---

#### `_xls.create()`.<span style="color: #008000">getCellData</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém um objeto com os dados de uma célula da folha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha da folha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _[Values](../../objects/Values)_ )

Informações de dados da célula.

---

## getNumberOfSheets

---

#### `_xls.create()`.<span style="color: #008000">getNumberOfSheets</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Obtém o número total de folhas de cálculos.

##### Retorno

( _int_ )

O número total de folhas de cálculos existentes no documento.

---

## getSheet

---

#### `_xls.create()`.<span style="color: #008000">getSheet</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### `_xls.create()`.<span style="color: #008000">getSheet</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">horizontalAlignment</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.HorizontalAlignment</span>
##### Descrição

Gera o alinhamento horizontal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de alinhamento horizontal, suporta:<br><ul><li>general</li><li>left</li><li>center</li><li>right</li><li>fill</li><li>justify</li><li>center-selection</li><li>distributed</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.HorizontalAlignment_ )

O alinhamento horizontal configurado com o tipo definido.

---

## insertPicture

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">ancora</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Descrição

Insere uma imagem associada à âncora em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Folha de cálculos que será utilizada para inserir a imagem. |
| **file** | _[File](../../objects/File)_ | Ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">ancora</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Descrição

Insere uma imagem associada à âncora em uma folha de cálculos específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Folha de cálculos que será utilizada para inserir a imagem. |
| **storage** | _[Storage](../../resources/storage)_ | Referência do storage associado a um ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Descrição

Insere a imagem na célula específicada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../../objects/File)_ | Ficheiro de imagem. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">ancora</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Descrição

Insere uma imagem associada à âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../../objects/File)_ | Ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Descrição

Insere a imagem na célula específicada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Referência do storage associado a um ficheiro de imagem. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">ancora</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Descrição

Insere uma imagem associada à âncora.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Referência do storage associado a um ficheiro de imagem. |
| **ancora** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Âncora para associar a imagem. |

##### Retorno

( _org.apache.poi.ss.usermodel.Picture_ )

O objeto de referência da imagem inserida.

---

## mergedRegion

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">mergedRegion</span>(<span style="color: #FF8000">primeiraLinha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">ultimaLinha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">primeiraColuna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">ultimaColuna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">mergedRegion</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">primeiraLinha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">ultimaLinha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">primeiraColuna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">ultimaColuna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">entrada</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](../../objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">entrada</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](../../objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">arquivo</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arquivo** | _[File](../../objects/File)_ | Arquivo do tipo documento de Excel. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">arquivo</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arquivo** | _[File](../../objects/File)_ | Arquivo do tipo documento de Excel. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">entrada</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](../../objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">entrada</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **entrada** | _[InputStream](../../objects/InputStream)_ | Objeto de fluxo de entrada de dados do arquivo. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Referência do storage onde está o arquivo que será aberto. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Abre um arquivo do Excel.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Referência do storage onde está o arquivo que será aberto. |
| **senha** | _string_ | Senha do arquivo. |

##### Retorno

( _[XLS](../../resources/xls)_ )

Arquivo aberto em uma nova instância do recurso XLS.

---

## output

---

#### `_xls.create()`.<span style="color: #008000">output</span>(<span style="color: #FF8000">nomeFicheiro</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">position</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Descrição

Obtém o objeto de posicionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |

##### Retorno

( _[XLSPosition](../../objects/XLSPosition)_ )

Referência da posição com base nas coordenadas passadas.

---

## read

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| **escondidas** | _string_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _int_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](../../objects/InputStream)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| **escondidas** | _string_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _int_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../../objects/File)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Referência do ficheiro Excel. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Referência do ficheiro Excel. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _int_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Referência do ficheiro Excel. |
| **escondidas** | _string_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _boolean_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">numero</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">escondidas</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Realiza a leitura de um ficheiro Excel, obtém todos os dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Referência do ficheiro Excel. |
| **numero** | _string_ | Número da folha de cálculos. |
| **escondidas** | _int_ | Processa também folhas de cálculos escondidas. |

##### Retorno

( _[Values](../../objects/Values)_ )

Estrutura com todos os dados obtidos através da leitura e processamento do ficheiros Excel.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## row

---

#### `_xls.create()`.<span style="color: #008000">row</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Row</span>
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

#### `_xls.create()`.<span style="color: #008000">row</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Row</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">safeSheetName</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">safeSheetName</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">caracter</span>: <span style="font-weight: normal; font-style: italic;">char</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">output</span>: <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Realiza a escrita dos dados do ficheiro final para o output.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **output** | _[OutputStream](../../objects/OutputStream)_ | Output onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Realiza a escrita dos dados do ficheiro final.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../../objects/File)_ | Ficheiro que será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">output</span>: <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Realiza a escrita dos dados do ficheiro final para o output.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **output** | _[OutputStream](../../objects/OutputStream)_ | Output onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Realiza a escrita dos dados do ficheiro final para o storage interno da aplicação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Referência do storage onde o ficheiro será guardado. |

##### Retorno

( _void_ )


---

## setCellData

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](../../objects/Values)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">celula</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **celula** | _org.apache.poi.ss.usermodel.Cell_ | Objeto da célula. |
| **dados** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">celula</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Insere dados numa célula específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **celula** | _org.apache.poi.ss.usermodel.Cell_ | Objeto da célula. |
| **dados** | _[Values](../../objects/Values)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Insere dados numa célula específica em uma planilha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">folhaCalculos</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Descrição

Insere dados numa célula específica em uma planilha de cálculos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **folhaCalculos** | _org.apache.poi.ss.usermodel.Sheet_ | Objeto da folha de cálculos. |
| **linha** | _int_ | Número da linha. |
| **coluna** | _int_ | Número da coluna. |
| **dados** | _[Values](../../objects/Values)_ | Dados que serão inseridos. |

##### Retorno

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

## sheet

---

#### `_xls.create()`.<span style="color: #008000">sheet</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">units</span>() : <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>
##### Descrição

Obtém os tipos de unidades pré definidos no Excel, útil para realizar a conversão entre pixeis e pontos.

##### Retorno

( _java.lang.Class_ )

A classe do Apache POI que ajuda a manipular as unidades do Excel.

---

## validSheetName

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">validSheetName</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">verticalAlignment</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.VerticalAlignment</span>
##### Descrição

Gera o alinhamento vertical.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de alinhamento vertical, suporta:<br><ul><li>top</li><li>center</li><li>bottom</li><li>justify</li><li>distributed</li></ul> |

##### Retorno

( _org.apache.poi.ss.usermodel.VerticalAlignment_ )

O alinhamento vertical configurado com o tipo definido.

---

## workbook

---

#### `_xls.create()`.<span style="color: #008000">workbook</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Workbook</span>
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

