---
id: xls
title: XLS - export
sidebar_label: XLS
---
O recurso `_xls` permite criar e exportar um ficheiro em formato XLS, utilizando a API <a href="https://poi.apache.org/" target="_blank">Apache poi</a> para gerar os XLS's.

Abaixo tem toda a informação acerca de cada função da variável `xls`. Uma breve descrição, como utilizar e tudo acerca dos atributos e o que retornam.

## create

_xls.**create**(): _void_

#### Descrição

Cria um novo ficheiro em excel.

#### Como usar

```javascript
// Criar novo excel
var excel = _xls.create();
```

## color

_xls.**color**(cor : _string_): _void_

#### Descrição

Define uma cor destinada a qualquer elemento excel (fonte, célula, borda da célula, ... ).

#### Como usar

```javascript
// Definir a cor amarela
_xls.color('yellow');
```

## workbook.createFont

_xls.**workbook.createFont**(): _void_

#### Descrição

Cria uma fonte estilizada para ser utilizada no ficheiro excel.

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `setBold()` | boolean | false | Definir estilo da fonte para bold.|
| `setFontHeightInPoints()` | int | 11 | Tamanho da fonte em pt(points).|

#### Como usar

```javascript
// Criar novo excel
var excel = _xls.create();
// Criar nova fonte
var fontStyle = excel.workbook.createFont()
fontStyle.setBold(true)
fontStyle.setFontHeightInPoints(14)
fontStyle.setColor(_xls.color('yellow'))
```

## fillPattern

_xls.**fillPattern**(estiloDoPadrao : _string_): _void_

#### Descrição

Define o estilo do padrão do fundo da célula.

#### Como usar

```javascript
// Definir um padrão sólido
_xls.fillPattern('solid-foreground')
```

## borderStyle

_xls.**borderStyle**(estiloDaBorda : _string_): _void_

#### Descrição

Define o estilo da borda da célula.

#### Como usar

```javascript
// Definir a borda fina
_xls.borderStyle('thin')
```

## horizontalAlignment

_xls.**horizontalAlignment**(formatacaoDoTexto : _string_): _void_

#### Descrição

Define a formatação do texto da célula ou tabela.

#### Como usar

```javascript
// Alinhar o texto ao centro
_xls.horizontalAlignment('center')
```

## workbook.createCellStyle()

_xls.**workbook.createCellStyle**(): _void_

#### Descrição

Cria uma célula estilizada para ser utilizada no ficheiro excel.

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `setFont()` | object |  | Define a fonte da célula.|
| `setFillPattern() `| object |  | Define o estilo do padrão do fundo da célula.|
| `setFillBackgroundColor()` | object |  | Define a cor de fundo da célula.|
| `setAlignment()` | object |  | Define o alinhamento do texto da célula.|
| `setBorderBottom()` | object |  | Define o estilo da borda de baixo da célula.|
| `setBorderTop()` | object |  | Define o estilo da borda de cima da célula.|
| `setBorderLeft()` | object |  | Define o estilo da borda da esquerda da célula.|
| `setBorderRight()` | object |  | Define o estilo da borda da direita da célula.|
| `setBottomBorderColor()` | object |  | Define a cor da borda de baixo da célula.|
| `setTopBorderColor()` | object |  | Define a cor da borda de cima da célula.|
| `setLeftBorderColor()` | object |  | Define a cor da borda da esquerda da célula.|
| `setRightBorderColor()` | object |  | Define a cor da borda da direita da célula.|

#### Como usar

```javascript
// Criar novo excel
var excel = _xls.create();

// Criar novo estilo de célula
var styleCell = excel.workbook.createCellStyle()

// Criar nova fonte
var fontStyle = excel.workbook.createFont()
fontStyle.setBold(true)
fontStyle.setFontHeightInPoints(14)
fontStyle.setColor(_xls.color('yellow'))

// Define a fonte da célula
styleCell.setFont(fontStyle);

// Formatar o fundo da célula
styleCell.setFillPattern(_xls.fillPattern('solid-foreground'))
styleCell.setFillBackgroundColor(_xls.color('black'))

// Definir o alinhamento do conteúdo da célula
styleCell.setAlignment(_xls.horizontalAlignment('center'))

// Formatar o estilo das bordas da célula
styleCell.setBorderBottom(_xls.borderStyle('thin'))
styleCell.setBorderTop(_xls.borderStyle('thin'))
styleCell.setBorderLeft(_xls.borderStyle('thin'))
styleCell.setBorderRight(_xls.borderStyle('thin'))

// Definir a cor das bordas da célula
styleCell.setTopBorderColor(_xls.color('red'))
styleCell.setBottomBorderColor(_xls.color('blue'))
styleCell.setLeftBorderColor(_xls.color('pink'))
styleCell.setRightBorderColor(_xls.color('orange'))
```

## insertPicture

_xls.**insertPicture**(localizacaoFicheiro : _storage.filesystem(localizacaoPastaServer : string, localizacaoFicheiroServer : string, nomeFicheiro : string)_, celulaLinha : _int_ , celulaColuna : _int_): _void_

#### Descrição

Adiciona uma imagem ao excel.

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `resize()` | float | 1 | Multiplica a escala da imagem original.|


#### Como usar

```javascript
// Criar novo excel
var excel = _xls.create();
// Adiciona a imagem 'logo.png'
excel.insertPicture(
    _storage.filesystem('server', 'samples/export-excel', 'logo.png'),
    1, 1
)
// Aumentar a escala da imagem 2.3 vezes
.resize(2.3)
```

## addDataTable

_xls.**addDataTable**(celulaLinha : _int_ , celulaColuna : _int_, dados : _array(object)_, colunasNaVertical = _false_ : _boolean_): _void_

#### Descrição

Adiciona dados ao excel (estes dados consistem nas células e no conteúdo de cada uma).

#### Como usar

```javascript
// Criar novo excel
var excel = _xls.create();

// Criar colunas com dados (cada objeto do array será uma célula)
var dataRow = [
    {
        value: 'Name', // Valor da célula
        style: styleCell // Estilo da célula
    },
    { value: 'Age', style: styleCell }
]

var data = [
    [
        { value: 'Briana', style: otherStyleCell },
        { value: 24, style: otherStyleCell}
    ], [
        { value: 'Kelly', style: otherStyleCell },
        { value: 27, style: otherStyleCell }
    ]
]

var dataResult = [
    {
        value: 'Result', style: styleTotal
    },
    {
        formula: 'ROUND(SUM(C8:C11)/COUNT(C8:C11), 2)', // Utilização de fórmulas excel
        style: styleTotal
    }
]

// Adicionar as células (dataRow) ao excel
// Iguala-se a adição das células para se obter a última linha/coluna
var lastRow = excel.addDataTable(6, 1, dataRow)

// Adicionar dados (data)
lastRow = excel.addDataTable(lastRow.row, 1, dataRow) // Para se obter a última coluna substituir '.row' por '.col'

// Adicionar resultado da fórmula
excel.addDataTable(lastRow.row, 1, dataResult)
```

## output

_xls.**output**(nomeFicheiro : _string_): _void_

#### Descrição

Exporta o ficheiro excel com o nome indicado no argumento.

#### Como usar

```javascript
// Criar novo excel
var excel = _xls.create();
// Exporta o ficheiro criado para o "test.xls"
excel.output('test.xls')
```
