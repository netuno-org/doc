---
id: xls
title: XLS - Excel
sidebar_label: XLS - Excel
---

## Introduction

Netuno generates EXCEL files compatible with LibreOffice, OpenOffice, Microsoft Office, Google Drive, etc.

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

### Appearance

In the cell map we can associate the styles already created, using for example the styles defined in the appearance and formatting section that we saw previously.

Here is an example of how to associate styles in cells:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(
                    _val.map()
                        .set("value", "Name")
                        .set("style", styleHeader)
                )
                .add(
                    _val.map()
                        .set("value", "Age")
                        .set("style", styleHeader)
                )
        )
)
```

### Formulas

To insert formulas we use the `formula` key in the cell definitions map.

In this example, all the values in the other cells will be added together in the last cell:

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

To obtain the column letter from the column number, the columnReference method can be used, which can help in defining the formulas. The same method can also be used to obtain the column number from the reference letter, for example:

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

## Spreadsheets

To create a new __spreadsheet__ within the document itself, observe the following example:

```javascript
const newSheet = excel.createSheet('New Sheet')
```

> In cell, image and data manipulation methods, the reference to the spreadsheet object can be assigned to the first parameter.
>
> It depends on which sheet is active, it is possible to change the active sheet with the [activeSheet](../../../library/resources/xls#activesheet) method.

Example of how to insert an image into the new spreadsheet:

```javascript
excel.insertPicture(
    newSheet,
    _app.file("public/images/logo.png"),
    10, // Column Number
    1  // Line Number
).resize(1.5)
```

Example of how to insert a data table into the new spreadsheet:

```javascript
excel.addDataTable(
    newSheet,
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

### Activate

So, to avoid having to constantly indicate in the methods which spreadsheet should be used, as in the examples above, alternatively it is possible to indicate which spreadsheet is active.

> All cell, image and data manipulation methods use the spreadsheet that is activated when a specific spreadsheet is not indicated.

See two ways to activate a specific spreadsheet, first with object reference and then second with the index of the spreadsheet:

```javascript
excel.activeSheet(mySheet) // Spreadsheet reference object.
excel.activeSheet(1) // Index of the spreadsheet that will be activated.
```

### Useful Resources

Examples of other useful methods for manipulating spreadsheets.

Get a sheet by name:

```javascript
// Gets the sheet from its name.
const mySheet = excel.getSheet('Sheet Name')
```

Get a spreadsheet by its index:

```javascript
// Gets the spreadsheet from the respective number.
const minhaPlanilha = excel.getSheet(1)
```

To get the total number of sheets:

```javascript
// Total number of sheets.
const totalDePlanilhas = excel.getNumberOfSheets()
```

To list all existing sheets in the document.

```javascript
// List all sheets.
const todasAsPlanilhas = excel.getAllSheets()
for (const sheet of todasAsPlanilhas) {
    ...
}
```

> Documentation with all methods of the <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFSheet.html" target="_blank">Spreadsheet object in Apache POI</a>.

## Generate File

In the `save` and `output` methods, the final file binary is generated.

Sends the generated file as the service's `output`:

```javascript
excel.output('file.xls')
```

To save the generated file in the application's `storage/filesystem` folder:

```javascript
excel.save(_storage.filesystem('server', 'file.xls'))
```

To save the generated file in the `/tmp` folder from the HD file system:

```javascript
excel.save(_os.file('/tmp/file.xls'))
```

## Edit File

We can edit files by opening them, making the necessary changes and then saving the new edited file.

Below are some examples of how you can open files.

Open a file in the application root:

```javascript
const excel = _xls.open(_app.file('file.xls'))
```

To open the file generated in the application's `storage/filesystem` folder:

```javascript
const excel = _xls.open(_storage.filesystem('server', 'file.xls'))
```

And also to open the file in the `/tmp` folder from the HD file system:

```javascript
const excel = _xls.open(_os.file('/tmp/file.xls'))
```

In the examples above, the Excel constant will contain the editing object with the context of the respective file, so it is possible to carry out any type of manipulation.

When you complete the changes, generate the new file.

> It is not possible to directly change the same open file, making it necessary to generate a new file with a different path.

To directly change the same file, it can be done using `inputStream`.

Here is an example of how to change the value of a cell:

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

fileInput.close() // Closes the open file.
excel.save(_app.file('file.xls')) // Save the new version.
```

## Read File

Extracting data from Excel files is done using the `read` method.

```
const data = _xls.read(_app.file('file.xlsx'))
```

The data is obtained in an object structure of the Values type with Lists, for the spreadsheets, rows and columns, and Maps (key and value) for the cells.

To visualize all the data, we can put as data output from the service:

```
_out.json(data)
```

To carry out the interaction we have to keep in mind that the data structure is organized in the following order:

1. `sheets` - Spreadsheets
2. `rows` - Rows
3. `columns` - Columns

Example of a complete interaction:

```
for (const sheet of data.getValues('sheets')) {
    _out.println(`<h4>Spreadsheet: ${sheet.getInt('index')} - ${sheet.getString('name')}</h4>`)
    for (const row of planilha.getValues('rows')) {
        _out.println(`<h4>Row: ${row.getInt('row')}</h4>`)
        _out.println('<p>')
        for (const column of row.getValues('columns')) {
            _out.print(`${column.getInt('row')}:${column.getInt('column')}`)
            _out.print(` # ${column.getString('address')}`)
            _out.print(` # ${column.getString('type')}`)
            _out.print(` # ${column.getString('value')}`)
            _out.println('<br>')
        }
        _out.println('</p>')
    }
}
```

The cell type is obtained through the code:

- `column.getString('type')`

And the supported types are:

- `string` - Text content.
- `numeric` - Numeric or date and/or time content.
- `boolean` - True or false.
- `blank` - Blank cell.
- `formula` - Cell that contains a formula.
- `error` - Error processing the cell.

### Additional Parameters

For each cell type we have some additional parameters.

**string** - Type of cell with textual content.

- `value` - Cell text.
- `richValue` - Cell formatting.

**numeric** - Type of cell with numeric content, or dates and even times.

- `value` - Value of the cell's numeric content.

In the case of dates and times we have these additional parameters

- `localDateTime` - Java Time LocalDateTime object that represents the date and time value of the cell.
- `localDate` - Java Time LocalDate object that represents the date value of the cell.
- `localTime` - Java Time LocalTime object that represents the cell's time value.
- `instant` - Java Time Instant object that represents the date and/or time value of the cell.
- `date` - Java Date object that represents the date and/or time value of the cell.

**boolean** - Type of cell with boolean content, i.e. true or false.

- `value` - Value of type _boolean_, `true` or `false`.

**blank** - Type of cell without content, therefore it does not contain additional parameters.

**formula** - Type of cell that contains calculation formulas.

- `value` - Final value resulting from the calculation.
- `formula` - Contains the expression of the formula used for the calculation.

**error** - Type of cell that contains error.

- `value` - Value in bytes of the generated error.
- `code` - If there are errors in the calculation of the formula, provide here the code of the error that occurred.
