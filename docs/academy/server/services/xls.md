---
id: xls
title: XLS - Excel
sidebar_label: XLS - Excel
---

## Introduction

Neptune generates EXCEL files compatible with LibreOffice, OpenOffice, Microsoft Office, Google Drive, etc.

Through the [XLS](../../../library/resources/xls) resource that allows a low-code abstraction of [Apache POI](https://poi.apache.org/) for the various programming languages supported by Netuno.

We can either generate XLSX, XLS or ODS files.

The application that comes with Netuno called **demo** (demonstration application) contains many examples of possible code implementations in various languages, including a demonstration of exporting spreadsheets through the `export-excel` service located at:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/export-excel.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/export-excel.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/export-excel.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/export-excel.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/export-excel.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Initialization

To start using the resource XLS:

```javascript
const excel = _xls.create()
```

Creates the object with the context of the new file that will be built, with an empty spreadsheet.

## Formatting

The definition of visual formatting styles, i.e. format of dates, times, money, among others, must be done before defining cell values, because when defining cell values it is possible to associate their formatting style together.

So, as shown in the example that comes with the `demo` application, the formatting is defined in the beginning of the code.

To format dates:

```javascript
const styleDate = excel.cellStyleFormat("dd/mm/yy")
```

To format times:

```javascript
const styleTime = excel.cellStyleFormat("hh:mm:ss")
```

To format dates with times:

```javascript
const styleDateTime = excel.cellStyleFormat("dd/mm/yyyy hh:mm:ss")
```

To format **euro** money amounts:

```javascript
const styleMoneyEuro = excel.cellStyleFormat("€#,##0.00;\\-€#,##0.00")
```

To format money values in **reais**:

```javascript
const styleMoneyReal = excel.cellStyleFormat("R$#,##0.00;\\-R$#,##0.00")
```

To format values as **percentage**:

```javascript
const stylePercentage = excel.cellStyleFormat("0.00%")
```

## Appearance

The definition of visual appearance styles, that is, the appearance of cells such as colors, font, borders, alignment, among others, must be done before defining cell values, because when defining cell values it is possible to associate your appearance style.

So, as shown in the example in the `demo` application, appearances are defined at the beginning of the code.

Example of defining colors and alignment:

```javascript
const styleHeader = excel.cellStyle()
styleHeader.setFillPattern(_xls.fillPattern("solid-foreground"))
styleHeader.setFillBackgroundColor(_xls.color("black"))
styleHeader.setAlignment(_xls.horizontalAlignment("center"))
```

> Documentation with all methods of the <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCellStyle.html" target="_blank">Style object in Apache POI</a>.

Border style definition:

```javascript
const styleData = excel.cellStyle()
styleData.setBorderBottom(_xls.borderStyle('thin'))
styleData.setBorderTop(_xls.borderStyle('thin'))
styleData.setBorderLeft(_xls.borderStyle('thin'))
styleData.setBorderRight(_xls.borderStyle('thin'))
```

> Documentation with all methods of the <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCellStyle.html" target="_blank">Style object in Apache POI</a>.

Creates a new font style for the text, and associates the font definitions with a specific cell style that already exists:

```javascript
const fontTitle = excel.font()
fontTitle.setBold(true)
fontTitle.setFontHeightInPoints(14)
fontTitle.setColor(_xls.color('yellow'))
// Define a fonte do styleHeader
styleHeader.setFont(fontTitle)
```

> Documentation with all methods of the <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFFont.html" target="_blank">Font object in Apache POI</a>.

## Image

To insert an image into the spreadsheet located at `storage/samples/export-excel/logo.png` internally in the application:

```javascript
excel.insertPicture(
    _storage.filesystem("server", "samples/export-excel", "logo.png"),
    1, // Column Number
    1  // Line Number
).resize(2.3)
```

To insert an image that is in the application at `public/images/logo.png`:

```javascript
excel.insertPicture(
    _app.file("public/images/logo.png"),
    10, // Column Number
    1  // Line Number
).resize(1.5)
```

Documentation with all methods of the <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/ss/usermodel/Picture.html" target="_blank">Image object in Apache POI</a>.

## Merge Cells

To join cells into a region we use the `mergedRegion` method.

The order of the parameters are:

1. Start Line
2. Start Column
3. End Line
4. End Column

> Numeric positioning references always start at **zero**.

In this example below, all cells from column 10 to column 15 that are in line 3 will be merged:

```
excel.mergedRegion(2, 9, 2, 14)
```

## Cells

To get the object that represents a cell:

```
// Gets the cell in column B and row 2:
const celula = excel.cell(1, 1)
```
> Numeric positioning references always start at **zero**.

Example of how to show the cell formula into the output log:

```
// Log the formula in line 2 and column B.
_log.info(
    'Cell Formula B2: '+ excel.cell(1, 1).getCellFormula()
)
```

Example of how to get the text value of a cell:

```
// Logs the text value of the cell in row 2 and column B.
_log.info(
    'B2 Cell Text Value: '+ excel.cell(1, 1).getStringCellValue()
)
```

> Documentation with all methods of the <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCell.html" target="_blank">Cell object in Apache POI</a>.


## Lines

To get the object that represents a line:

```
// Gets the object that represents line 2.
const linha = excel.row(1)
```

> Numeric positioning references always start at **zero**

In the example above, if the line does not exist, a new line will be created automatically.

> Documentation with all methods of the <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFRow.html" target="_blank">Line object in Apache POI</a>.

## Insert Data Table

We can insert a data table using the `addDataTable` method.

Since the first two parameters define the position where the data table should be inserted, they are the row and the column numbers.

> Please note that the positioning of lines and columns in the code always starts from **zero**.
>
> That is, Row 1 is `0` and Column A is also `0`.

Next we add a list of lines, where each line contains another list for the columns, only then is the map with the cell value.

Complete example:

```javascript
excel.addDataTable(
    6, 1,
    _val.list() // Lines
        .add(
            _val.list() // Columns
                .add(
                    _val.map() // Cell
                        .set("value", "Name")
                )
                .add(
                    _val.map()
                        .set("value", "Age")
                )
        )
        .add( // Another Line
            _val.list()
                .add( // First Column
                    _val.map()
                        .set("value", "Mary")
                )
                .add( // Second Column
                    _val.map()
                        .set("value", 26)
                )
        )
)
```

### Aparência

No mapa das células podemos associar os estilo já criados, utilizando por exemplo os estilos definidos na secção da aparência e formatação que vimos anteriormente.

Segue o exemplo de como associar os estilos nas células:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(
                    _val.map()
                        .set("value", "Nome")
                        .set("style", styleHeader)
                )
                .add(
                    _val.map()
                        .set("value", "Idade")
                        .set("style", styleHeader)
                )
        )
)
```

### Fórmulas

Para inserir fórmulas utilizamos a chave `formula` no mapa de definições da célula.

Neste exemplo será realizado a soma na última célula todos os valores das outras células:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set("formula", "SUM(B7:C8)")
                )
        )
)
```

Para obter a letra da coluna a partir de número da coluna pode ser utilizado o método `columnReference`, o que pode ajudar na definição das fórmulas. O mesmo método também pode ser utilizado para obter o número da coluna a partir da letra de referência, por exemplo:

```javascript
excel.addDataTable(
    6, _xls.columnReference('B'),
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set(
                        "formula",
                        `SUM(${_xls.columnReference(1)}7:${_xls.columnReference(2)}8)`
                )
            )
        )
)
```

## Planilhas

Para criar uma nova folha de cálculos (_sheet_) dentro do próprio documento, observe o seguinte exemplo:

```
const novaPlanilha = excel.createSheet('Nova Planilha')
```

> Nos métodos de manipulação de células, imagens e dados, pode ser adicionado no primeiro parâmetro a referência do objeto da planilha.
>
> Depende de qual planilha esteja ativa, é possivel alterar a planilha ativa com o método [activeSheet](../../../library/resources/xls#activesheet).

Exemplo de como inserir uma imagem na nova planilha:

```
excel.insertPicture(
    novaPlanilha,
    _app.file("public/images/logo.png"),
    10, // Número da Coluna
    1  // Número da Linha
).resize(1.5)
```

Exemplo de como inserir uma tabela de dados na nova planilha:

```
excel.addDataTable(
    novaPlanilha,
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set("formula", "SUM(B7:C8)")
                )
        )
)
```

### Ativar

Assim para evitar ter que indicar constantemente nos métodos qual é a planilha que deve ser processada, como nos exemplos acima, em alternativa é possível indicar qual é a planilha ativa.

> Todos os métodos de manipulação de células, imagens e dados, utilizam a planilha que está ativada quando **não** é indicado uma planilha específica.


```
excel.activeSheet(minhaPlanilha) // Objeto de referência da planilha.
excel.activeSheet(1) // Índice da planilha que será ativada.
```

### Recursos Úteis

Exemplos de outros métodos úteis na manipulação de planilhas.

Obter uma planilha pelo nome:

```javascript
// Obtém a planilha a partir do seu nome.
const minhaPlanilha = excel.getSheet('Nome da Planilha')
```

Obter uma planilha pelo seu índice:

```javascript
// Obtém a planilha a partir do respectivo número.
const minhaPlanilha = excel.getSheet(1)
```

Para obter o número total de planilhas:

```javascript
// Número total de planilhas.
const totalDePlanilhas = excel.getNumberOfSheets()
```

Para listar todas as planilhas existentes no documento.

```javascript
// Lista todas as planilhas.
const todasAsPlanilhas = excel.getAllSheets()
for (const sheet of todasAsPlanilhas) {
    ...
}
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFSheet.html" target="_blank">Planilha no Apache POI</a>.

## Gerar Arquivo

Nos métodos de `save` e `output` é gerado o binário do arquivo final.

Envia o arquivo gerado como saída de dados (`output`) do serviço:

```javascript
excel.output('file.xls')
```

Para guardar o arquivo gerado na pasta `storage/filesystem` da aplicação:

```javascript
excel.save(_storage.filesystem('server', 'file.xls'))
```

Para salvar o arquivo gerado na pasta `/tmp` a partir do sistema de arquivos do HD:

```javascript
excel.save(_os.file('/tmp/file.xls'))
```

## Editar Arquivo

Podemos editar arquivos abrindo eles, realizando as alterações necessárias e depois salvar o novo arquivo editado.

Segue abaixo alguns exemplos de como é possível abrir arquivos.

Abrir um arquivo na raíz da aplicação:

```javascript
const excel = _xls.open(_app.file('file.xls'))
```

Para abrir o arquivo gerado na pasta `storage/filesystem` da aplicação:

```javascript
const excel = _xls.open(_storage.filesystem('server', 'file.xls'))
```

E ainda para abrir o arquivo na pasta `/tmp` a partir do sistema de arquivos do HD:

```javascript
const excel = _xls.open(_os.file('/tmp/file.xls'))
```

Nos exemplos acima a constante `excel` vai conter o objeto de edição com o contexto do respectivo arquivo, assim é possível fazer qualquer tipo de manipulação.

Quando concluir as alterações realize a geração do novo arquivo.

> Não é possível alterar diretamente o mesmo arquivo aberto, sendo necessário gerar um novo arquivo com um caminho diferente.

Para alterar diretamente o mesmo arquivo, então pode ser feito utilizando o `inputStream`.

Segue um exemplo de como alterar o valor de uma célula:

```javascript
const fileInput = _app.file('file.xls').inputStream()
const excel = _xls.open(fileInput)

excel.setCellData(
    10, 1,
    _val.map()
        .set(
            "value",
            excel.getCellData(10, 1).getInt("value") + 10
        )
)

fileInput.close() // Fecha o arquivo aberto.
excel.save(_app.file('file.xls')) // Salva a nova versão.
```

## Ler Arquivo

A extração de dados de arquivos em Excel é feita com o método `read`.

```
const dados = _xls.read(_app.file('file.xlsx'))
```

Os dados são obtidos em uma estrutura de objetos do tipo Values com contém Listas, para as planilhas, linhas e colunas, e Mapas (chave e valor) para as células.

Para visualizar todos os dados podemos colocar como saída de dados do serviço:

```
_out.json(dados)
```

Para realizar a interação temos que ter em mente que a estrutura dos dados é organizada na seginte ordem:

1. `sheets` - Planilhas
2. `rows` - Linhas
3. `columns` - Colunas

Exemplo de uma interação completa:

```
for (const planilha of dados.getValues('sheets')) {
    _out.println(`<h4>Planilha: ${planilha.getInt('index')} - ${planilha.getString('name')}</h4>`)
    for (const linha of planilha.getValues('rows')) {
        _out.println(`<h4>Linha: ${linha.getInt('row')}</h4>`)
        _out.println('<p>')
        for (const coluna of linha.getValues('columns')) {
            _out.print(`${coluna.getInt('row')}:${coluna.getInt('column')}`)
            _out.print(` # ${coluna.getString('address')}`)
            _out.print(` # ${coluna.getString('type')}`)
            _out.print(` # ${coluna.getString('value')}`)
            _out.println('<br>')
        }
        _out.println('</p>')
    }
}
```

O tipo da célula é obtido através do código:

- `coluna.getString('type')`

E os tipos suportados são:

- `string` - Conteúdo de texto.
- `numeric` - Conteúdo numérico ou de data e/ou hora.
- `boolean` - Verdadeiro ou falso.
- `blank` - Célula em branco.
- `formula` - Célula que contém um fórmula.
- `error` - Erro no processameneto da célula.

### Parâmetros Adicionais

Para cada tipo de célula temos alguns parâmetros adicionais.

`string` - Tipo de célula com conteúdo textual.

- `value` - Texto da célula.
- `richValue` - Formatações da célula.

`numeric` - Tipo de célula com conteúdo numérico, ou datas e ainda horas.

- `value` - Valor do conteúdo numérico da célula.
  
No caso de datas e horas temos mais estes parâmetros adicionais:

- `localDateTime` - Objeto do Java Time LocalDateTime que representa o valor de data e hora da célula.
- `localDate` - Objeto do Java Time LocalDate que representa o valor de data da célula.
- `localTime` - Objeto do Java Time LocalTime que representa o valor de hora da célula.
- `instant` - Objeto do Java Time Instant que representa o valor de data e/ou hora da célula.
- `date` - Objeto Date do Java que representa o valor de data e/ou hora da célula.

`boolean` - Tipo de célula com conteúdo booleano, ou seja verdadeiro ou falso.

- `value` - Valor do tipo _boolean_, `true` ou `false`.

`blank` - Tipo de célula sem conteúdo, portanto não contém parâmetros adicionais.

`formula` - Tipo de célula que contém fórmulas de cálculo.

- `value` - Valor final resultante do cálculo.
- `formula` - Contém a expressão da fórmula utilizada para o cálculo.

`error` - Tipo de célula que contém erro.

- `value` - Valor em byte do erro gerado.
- `code` - No caso de haver erros no cálculo da fórmula fornece aqui o código do erro ocorrido.
