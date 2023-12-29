---
id: xls
title: XLS
sidebar_label: XLS
---

Create and read _Excel_ files, support for _XLS_ files as _XLSX_ files.
This feature uses the [Apache POI](https://poi.apache.org/ "Apache POI") library.

```javascript
const excel = _xls.create();
const titles = _val.init()
    .add(
        _val.init()
            .set('value', 'Name')
    ).add(
        _val.init()
            .set('value', 'Age')
    );
const endPosition = excel.addDataTable(1, 1, titles)
const data = _val.init()
    .add(
        _val.init()
            .add(
                 _val.init()
                     .set('value', 'John')
            ).add(
                 _val.init()
                     .set('value', 24)
            )
    ).add(
        _val.init()
            .add(
                 _val.init()
                     .set('value', 'Annye')
            ).add(
                 _val.init()
                     .set('value', 22)
            )
    );
endPosition = excel.addDataTable(endPosition.row, 1, data)
excel.output("ages.xls");
```

---

## activeSheet

---

#### `_xls.create()`.activeSheet(index: _int_) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Description

Sets the spreadsheet that is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | Spreadsheet number. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Active spreadsheet.

---

## add

---

#### _xls.add(row: _int_, col: _int_, data: _java.util.Map_) : _[XLS](../../resources/XLS)_
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| row | _int_ | Line number. |
| col | _int_ | Column number. |
| data | _java.util.Map_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/XLS)_ )

The current instance of the XLS resource.

---

#### _xls.add(cell: _org.apache.poi.hssf.usermodel.HSSFCell_, data: _java.util.Map_) : _[XLS](../../resources/XLS)_
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cell | _org.apache.poi.hssf.usermodel.HSSFCell_ | Cell object. |
| data | _java.util.Map_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/XLS)_ )

The current instance of the XLS resource.

---

#### _xls.add(cell: _org.apache.poi.hssf.usermodel.HSSFCell_, data: _[Values](../../objects/Values)_) : _[XLS](../../resources/XLS)_
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cell | _org.apache.poi.hssf.usermodel.HSSFCell_ | Cell object. |
| data | _[Values](../../objects/Values)_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/XLS)_ )

The current instance of the XLS resource.

---

## addDataTable

---

#### `_xls.create()`.addDataTable(rowIndex: _int_, colIndex: _int_, data: _java.util.List_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _java.util.List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(rowIndex: _int_, colIndex: _int_, data: _java.util.List_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _java.util.List_ | List of data to be inserted. |
| vertical | _boolean_ | Insert data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(rowIndex: _int_, colIndex: _int_, data: _[Values](../../objects/Values)_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _[Values](../../objects/Values)_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(rowIndex: _int_, colIndex: _int_, data: _[Values](../../objects/Values)_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _[Values](../../objects/Values)_ | List of data to be inserted. |
| vertical | _boolean_ | Insert data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(config: _java.util.Map_, data: _java.util.List_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _java.util.Map_ | Configuration of the data table. |
| data | _java.util.List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(sheet: _org.apache.poi.hssf.usermodel.HSSFSheet_, rowIndex: _int_, colIndex: _int_, data: _java.util.List_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _java.util.List_ | List of data to be inserted. |
| vertical | _boolean_ | Insert the data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(sheet: _org.apache.poi.hssf.usermodel.HSSFSheet_, rowIndex: _int_, colIndex: _int_, data: _[Values](../../objects/Values)_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _[Values](../../objects/Values)_ | List of data to be inserted. |
| vertical | _boolean_ | Insert the data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

## anchorType

---

#### _xls.anchorType(type: string) : _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_
##### Description

Generates the type of anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Anchor type name, supports:<br><ul><li>move-and-resize</li><li>dont-move-do-resize</li><li>move-dont-resize</li><li>dont-move-and-resize</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_ )

The anchor type configured with the defined type.

---

## borderStyle

---

#### _xls.borderStyle(type: string) : _org.apache.poi.ss.usermodel.BorderStyle_
##### Description

Generates the outline style of the cell borders.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Name of the border style type, supports:<br><ul><li>none</li><li>thin</li><li>medium</li><li>dashed</li><li>dotted</li><li>thick</li><li>double</li><li>hair</li><li>medium-dashed</li><li>dash-dot</li><li>medium-dash-dot</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.BorderStyle_ )

The border outline style configured with the defined type.

---

## cell

---

#### `_xls.create()`.cell(rowIndex: _int_, colIndex: _int_) : _org.apache.poi.hssf.usermodel.HSSFCell_
##### Description

Gets a spreadsheet cell and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFCell_ )

Cell representation object.

---

#### `_xls.create()`.cell(sheet: _org.apache.poi.hssf.usermodel.HSSFSheet_, rowIndex: _int_, colIndex: _int_) : _org.apache.poi.hssf.usermodel.HSSFCell_
##### Description

Gets a spreadsheet cell and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number of the sheet. |
| colIndex | _int_ | Column number. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFCell_ )

Cell representation object.

---

## cellRangeAddress

---

#### _xls.cellRangeAddress(firstRow: _int_, lastRow: _int_, firstCol: _int_, lastCol: _int_) : _org.apache.poi.ss.util.CellRangeAddress_
##### Description

Generates the region address of the cell area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| firstRow | _int_ | First line number. |
| lastRow | _int_ | Last line number. |
| firstCol | _int_ | First column number. |
| lastCol | _int_ | Last column number. |

##### Return

( _org.apache.poi.ss.util.CellRangeAddress_ )

The cell area address reference.

---

## cellStyle

---

#### _xls.cellStyle() : _org.apache.poi.hssf.usermodel.HSSFCellStyle_
##### Description

Creates a new cell style in the workbook.

##### Return

( _org.apache.poi.hssf.usermodel.HSSFCellStyle_ )

The new cell style created.

---

## cellStyleFormat

---

#### _xls.cellStyleFormat(format: string) : _org.apache.poi.hssf.usermodel.HSSFCellStyle_
##### Description

Creates a new cell style with an associated format in the workbook.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| format | string | Format standard definition. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFCellStyle_ )

The new cell style created with the configured format.

---

## color

---

#### _xls.color(color: string) : _short_
##### Description

Generates the color code based on predefined names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | string | Color name, supports:<br><ul><li>black</li><li>brown</li><li>olive_green</li><li>dark_green</li><li>dark_teal</li><li>dark_blue</li><li>indigo</li><li>grey_80_percent</li><li>orange</li><li>dark_yellow</li><li>green</li><li>teal</li><li>blue</li><li>blue_grey</li><li>grey_50_percent</li><li>red</li><li>light_orange</li><li>lime</li><li>sea_green</li><li>aqua</li><li>light_blue</li><li>violet</li><li>grey_40_percent</li><li>pink</li><li>gold</li><li>yellow</li><li>bright_green</li><li>turquoise</li><li>dark_red</li><li>sky_blue</li><li>plum</li><li>grey_25_percent</li><li>rose</li><li>light_yellow</li><li>light_green</li><li>light_turquoise</li><li>pale_blue</li><li>lavender</li><li>white</li><li>cornflower_blue</li><li>lemon_chiffon</li><li>maroon</li><li>orchid</li><li>coral</li><li>royal_blue</li><li>light_cornflower_blue</li><li>tan</li><li>automatic</li></ul> |

##### Return

( _short_ )

The color reference.

---

## columnReference

---

#### _xls.columnReference(index: _int_) : string
##### Description

Gets the column reference (letters) based on its numeric position.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | Column number. |

##### Return

( string )

Reference in column letters.

---

#### _xls.columnReference(index: string) : _int_
##### Description

Gets the numeric position of the column based on the letter reference.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | string | Reference in column letters. |

##### Return

( _int_ )

Numeric position of the column.

---

## create

---

#### _xls.create() : _[XLS](../../resources/XLS)_
##### Description

Creates a new Excel document.

##### How To Use

```javascript
const excel = _xls.create();
```

##### Return

( _[XLS](../../resources/XLS)_ )

New XLS resource instance.

---

## createSheet

---

#### `_xls.create()`.createSheet() : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Description

Creates a new spreadsheet.

##### Return

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Spreadsheet created.

---

#### `_xls.create()`.createSheet(name: string) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Description

Create a new spreadsheet and define its name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | Spreadsheet name. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Spreadsheet created.

---

## fillPattern

---

#### _xls.fillPattern(type: string) : _org.apache.poi.ss.usermodel.FillPatternType_
##### Description

Generates the background fill pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Fill pattern type, supports:<br><ul><li>no-fill</li><li>solid-foreground</li><li>fine-dots</li><li>alt-bars</li><li>sparse-dots</li><li>thick-horz-bands</li><li>thick-vert-bands</li><li>thick-backward-diag</li><li>thick-forward-diag</li><li>big-spots</li><li>bricks</li><li>thin-horz-bands</li><li>thin-vert-bands</li><li>thin-backward-diag</li><li>thin-forward-diag</li><li>squares</li><li>diamonds</li><li>less-dots</li><li>least-dots</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.FillPatternType_ )

The fill pattern configured with the defined type.

---

## font

---

#### _xls.font() : _org.apache.poi.hssf.usermodel.HSSFFont_
##### Description

Creates a new font style in the workbook.

##### Return

( _org.apache.poi.hssf.usermodel.HSSFFont_ )

The new font style created.

---

## format

---

#### _xls.format(format: string) : _short_
##### Description

Creates a new cell format in the workbook.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| format | string | Format standard definition. |

##### Return

( _short_ )

Identifier code for the new format.

---

## getSheet

---

#### `_xls.create()`.getSheet(index: _int_) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Description

Get the spreadsheet by number (index).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | Spreadsheet number. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Spreadsheet referring to the number (index).

---

#### `_xls.create()`.getSheet(name: string) : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Description

Gets the spreadsheet by name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | Spreadsheet name. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Spreadsheet for the name.

---

## horizontalAlignment

---

#### _xls.horizontalAlignment(type: string) : _org.apache.poi.ss.usermodel.HorizontalAlignment_
##### Description

Generates horizontal alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Horizontal alignment type name, supports:<br><ul><li>general</li><li>left</li><li>center</li><li>right</li><li>fill</li><li>justify</li><li>center-selection</li><li>distributed</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.HorizontalAlignment_ )

The horizontal alignment configured with the defined type.

---

## insertPicture

---

#### _xls.insertPicture(sheet: _org.apache.poi.hssf.usermodel.HSSFSheet_, file: _[File](../../objects/File)_, anchor: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Description

Inserts an image associated with the anchor in a specific spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet that will be used to insert the image. |
| file | _[File](../../objects/File)_ | Image file. |
| anchor | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### _xls.insertPicture(sheet: _org.apache.poi.hssf.usermodel.HSSFSheet_, storage: _[Storage](../../resources/Storage)_, anchor: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Description

Inserts an image associated with the anchor in a specific spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet that will be used to insert the image. |
| storage | _[Storage](../../resources/Storage)_ | Storage reference associated with an image file. |
| anchor | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(file: _[File](../../objects/File)_, linha: _int_, coluna: _int_) : _org.apache.poi.ss.usermodel.Picture_
##### Description

Insert the image into the specified cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ | Image file. |
| linha | _int_ | Line number. |
| coluna | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(file: _[File](../../objects/File)_, anchor: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Description

Inserts an image associated with the anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ | Image file. |
| anchor | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(storage: _[Storage](../../resources/Storage)_, linha: _int_, coluna: _int_) : _org.apache.poi.ss.usermodel.Picture_
##### Description

Insert the image into the specified cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Storage reference associated with an image file. |
| linha | _int_ | Line number. |
| coluna | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(storage: _[Storage](../../resources/Storage)_, anchor: _org.apache.poi.ss.usermodel.ClientAnchor_) : _org.apache.poi.ss.usermodel.Picture_
##### Description

Inserts an image associated with the anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Storage reference associated with an image file. |
| anchor | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

## mergedRegion

---

#### _xls.mergedRegion(firstRow: _int_, lastRow: _int_, firstCol: _int_, lastCol: _int_) : _int_
##### Description

Performs the merging of cells in the region.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| firstRow | _int_ | First line number. |
| lastRow | _int_ | Last line number. |
| firstCol | _int_ | First column number. |
| lastCol | _int_ | Last column number. |

##### Return

( _int_ )

The reference of the merged cell region.

---

#### _xls.mergedRegion(sheet: _org.apache.poi.hssf.usermodel.HSSFSheet_, firstRow: _int_, lastRow: _int_, firstCol: _int_, lastCol: _int_) : _int_
##### Description

Performs the merging of cells in the passed region in a specific worksheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet that will be merged the cells. |
| firstRow | _int_ | First line number. |
| lastRow | _int_ | Last line number. |
| firstCol | _int_ | First column number. |
| lastCol | _int_ | Last column number. |

##### Return

( _int_ )

The reference of the merged cell region.

---

## output

---

#### `_xls.create()`.output(fileName: string) : _void_
##### Description

Performs the sending of data from the final file to the client to download it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| fileName | string | Name of the file. |

##### Return

( _void_ )


---

## position

---

#### _xls.position(rowIndex: _int_, colIndex: _int_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Gets the positioning object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Position reference based on passed coordinates.

---

## read

---

#### _xls.read(input: _java.io.InputStream_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _java.io.InputStream_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _java.io.InputStream_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _java.io.InputStream_ | Excel file reference. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _java.io.InputStream_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _java.io.InputStream_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _java.io.InputStream_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _java.io.InputStream_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Excel file reference. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[Storage](../../resources/Storage)_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[Storage](../../resources/Storage)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

## row

---

#### `_xls.create()`.row(rowIndex: _int_) : _org.apache.poi.hssf.usermodel.HSSFRow_
##### Description

Gets a row from the spreadsheet and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFRow_ )

Line representation object.

---

#### `_xls.create()`.row(sheet: _org.apache.poi.hssf.usermodel.HSSFSheet_, rowIndex: _int_) : _org.apache.poi.hssf.usermodel.HSSFRow_
##### Description

Gets a row from the spreadsheet and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |

##### Return

( _org.apache.poi.hssf.usermodel.HSSFRow_ )

Line representation object.

---

## safeSheetName

---

#### _xls.safeSheetName(nameProposal: string) : string
##### Description

Transforms the passed text to be a valid spreadsheet name while complying with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameProposal | string | Name that should be transformed. |

##### Return

( string )

Valid name to be used as the name of the spreadsheet.

---

#### _xls.safeSheetName(nameProposal: string, replaceChar: _char_) : string
##### Description

Transforms the passed text to be a valid spreadsheet name while complying with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameProposal | string | Name that should be transformed. |
| replaceChar | _char_ | Replacement character. |

##### Return

( string )

Valid name to be used as the name of the spreadsheet.

---

## save

---

#### `_xls.create()`.save(output: _java.io.OutputStream_) : _void_
##### Description

Writes the data from the final file to the output.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| output | _java.io.OutputStream_ | Output where the file will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.save(file: _[File](../../objects/File)_) : _void_
##### Description

Writes the data to the final file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ | File that will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.save(output: _[OutputStream](../../objects/OutputStream)_) : _void_
##### Description

Writes the data from the final file to the output.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| output | _[OutputStream](../../objects/OutputStream)_ | Output where the file will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.save(storage: _[Storage](../../resources/Storage)_) : _void_
##### Description

Writes the data from the final file to the internal storage of the application.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Storage reference where the file will be saved. |

##### Return

( _void_ )


---

## sheet

---

#### `_xls.create()`.sheet() : _org.apache.poi.hssf.usermodel.HSSFSheet_
##### Description

To obtain the current spreadsheet that is being used to manipulate the data.

##### How To Use

```javascript
const spreadsheet = _xls.create().sheet();
```

##### Return

( _org.apache.poi.hssf.usermodel.HSSFSheet_ )

Gets the current spreadsheet.

---

## units

---

#### _xls.units() : _java.lang.Class_
##### Description

It obtains the types of units predefined in Excel, useful to perform the conversion between pixels and points.

##### Return

( _java.lang.Class_ )

The Apache POI class that helps you manipulate Excel units.

---

## validSheetName

---

#### _xls.validSheetName(nameProposal: string) : _boolean_
##### Description

Checks whether the passed text is a valid spreadsheet name that complies with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameProposal | string | Name that must be validated. |

##### Return

( _boolean_ )

Whether it is valid to be used as a spreadsheet name.

---

## verticalAlignment

---

#### _xls.verticalAlignment(type: string) : _org.apache.poi.ss.usermodel.VerticalAlignment_
##### Description

Generates vertical alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Vertical alignment type name, supports:<br><ul><li>top</li><li>center</li><li>bottom</li><li>justify</li><li>distributed</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.VerticalAlignment_ )

The vertical alignment configured with the defined type.

---

## workbook

---

#### `_xls.create()`.workbook() : _org.apache.poi.hssf.usermodel.HSSFWorkbook_
##### Description

Creates a new Excel document.

##### How To Use

```javascript
const workbook = _xls.create().workbook();
```

##### Return

( _org.apache.poi.hssf.usermodel.HSSFWorkbook_ )

Gets the workbook.

---

