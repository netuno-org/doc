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

#### `_xls.create()`.activeSheet(index: int) : [XLS](/docs/library/resources/xls)
##### Description

Sets the spreadsheet that is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | Spreadsheet number. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

A instância atual do recurso XLS.

---

#### `_xls.create()`.activeSheet(sheet: org.apache.poi.ss.usermodel.Sheet) : [XLS](/docs/library/resources/xls)
##### Description

Sets the spreadsheet that is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet reference object. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

The current instance of the XLS resource.

---

## addDataTable

---

#### `_xls.create()`.addDataTable(rowIndex: int, colIndex: int, data: java.util.List) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _java.util.List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(rowIndex: int, colIndex: int, data: java.util.List, vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _java.util.List_ | List of data to be inserted. |
| **vertical** | _boolean_ | Insert data vertically. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(rowIndex: int, colIndex: int, data: [Values](/docs/library/objects/Values)) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _[Values](/docs/library/objects/Values)_ | List of data to be inserted. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(rowIndex: int, colIndex: int, data: [Values](/docs/library/objects/Values), vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _[Values](/docs/library/objects/Values)_ | List of data to be inserted. |
| **vertical** | _boolean_ | Insert data vertically. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(config: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, data: java.util.List) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Configuration of the data table. |
| **data** | _java.util.List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: java.util.List) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _java.util.List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### _xls.addDataTable(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: java.util.List, vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _java.util.List_ |   |
| **vertical** | _boolean_ |   |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )


---

#### `_xls.create()`.addDataTable(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: [Values](/docs/library/objects/Values)) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _[Values](/docs/library/objects/Values)_ | List of data to be inserted. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### _xls.addDataTable(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int, data: [Values](/docs/library/objects/Values), vertical: boolean) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |
| **vertical** | _boolean_ |   |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )


---

## anchorType

---

#### _xls.anchorType(type: string) : org.apache.poi.ss.usermodel.ClientAnchor$AnchorType
##### Description

Generates the type of anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Anchor type name, supports:<br/><ul><li>move-and-resize</li><li>dont-move-do-resize</li><li>move-dont-resize</li><li>dont-move-and-resize</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_ )

The anchor type configured with the defined type.

---

## borderStyle

---

#### _xls.borderStyle(type: string) : org.apache.poi.ss.usermodel.BorderStyle
##### Description

Generates the outline style of the cell borders.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Name of the border style type, supports:<br/><ul><li>none</li><li>thin</li><li>medium</li><li>dashed</li><li>dotted</li><li>thick</li><li>double</li><li>hair</li><li>medium-dashed</li><li>dash-dot</li><li>medium-dash-dot</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.BorderStyle_ )

The border outline style configured with the defined type.

---

## cell

---

#### `_xls.create()`.cell(rowIndex: int, colIndex: int) : org.apache.poi.ss.usermodel.Cell
##### Description

Gets a spreadsheet cell and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Cell_ )

Cell representation object.

---

#### `_xls.create()`.cell(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int) : org.apache.poi.ss.usermodel.Cell
##### Description

Gets a spreadsheet cell and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **rowIndex** | _int_ | Line number of the sheet. |
| **colIndex** | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Cell_ )

Cell representation object.

---

## cellRangeAddress

---

#### _xls.cellRangeAddress(firstRow: int, lastRow: int, firstCol: int, lastCol: int) : org.apache.poi.ss.util.CellRangeAddress
##### Description

Generates the region address of the cell area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firstRow** | _int_ | First line number. |
| **lastRow** | _int_ | Last line number. |
| **firstCol** | _int_ | First column number. |
| **lastCol** | _int_ | Last column number. |

##### Return

( _org.apache.poi.ss.util.CellRangeAddress_ )

The cell area address reference.

---

## cellStyle

---

#### _xls.cellStyle() : org.apache.poi.ss.usermodel.CellStyle
##### Description

Creates a new cell style in the workbook.

##### Return

( _org.apache.poi.ss.usermodel.CellStyle_ )

The new cell style created.

---

## cellStyleFormat

---

#### _xls.cellStyleFormat(format: string) : org.apache.poi.ss.usermodel.CellStyle
##### Description

Creates a new cell style with an associated format in the workbook.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **format** | _string_ | Format standard definition. |

##### Return

( _org.apache.poi.ss.usermodel.CellStyle_ )

The new cell style created with the configured format.

---

## color

---

#### _xls.color(color: string) : java.lang.Object
##### Description

Generates the color code based on predefined names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **color** | _string_ | Color name, supports:<br/><ul><li>black</li><li>brown</li><li>olive_green</li><li>dark_green</li><li>dark_teal</li><li>dark_blue</li><li>indigo</li><li>grey_80_percent</li><li>orange</li><li>dark_yellow</li><li>green</li><li>teal</li><li>blue</li><li>blue_grey</li><li>grey_50_percent</li><li>red</li><li>light_orange</li><li>lime</li><li>sea_green</li><li>aqua</li><li>light_blue</li><li>violet</li><li>grey_40_percent</li><li>pink</li><li>gold</li><li>yellow</li><li>bright_green</li><li>turquoise</li><li>dark_red</li><li>sky_blue</li><li>plum</li><li>grey_25_percent</li><li>rose</li><li>light_yellow</li><li>light_green</li><li>light_turquoise</li><li>pale_blue</li><li>lavender</li><li>white</li><li>cornflower_blue</li><li>lemon_chiffon</li><li>maroon</li><li>orchid</li><li>coral</li><li>royal_blue</li><li>light_cornflower_blue</li><li>tan</li><li>automatic</li></ul> |

##### Return

( _java.lang.Object_ )

The color reference.

---

## columnReference

---

#### _xls.columnReference(index: int) : string
##### Description

Gets the column reference (letters) based on its numeric position.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | Column number. |

##### Return

( _string_ )

Reference in column letters.

---

#### _xls.columnReference(index: string) : int
##### Description

Gets the numeric position of the column based on the letter reference.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _string_ | Reference in column letters. |

##### Return

( _int_ )

Numeric position of the column.

---

## create

---

#### _xls.create() : [XLS](/docs/library/resources/xls)
##### Description

Creates a new Excel document.

##### How To Use

```javascript
const excel = _xls.create();
```

##### Return

( _[XLS](/docs/library/resources/xls)_ )

New XLS resource instance.

---

## create2007

---

#### _xls.create2007() : [XLS](/docs/library/resources/xls)
##### Description

Creates a new Excel 97-2007 document, in the old format.

##### How To Use

```javascript
const excel = _xls.create2007();
```

##### Return

( _[XLS](/docs/library/resources/xls)_ )

New XLS resource instance.

---

## createSheet

---

#### `_xls.create()`.createSheet() : org.apache.poi.ss.usermodel.Sheet
##### Description

Creates a new spreadsheet.

##### Return

( _org.apache.poi.ss.usermodel.Sheet_ )

Spreadsheet created.

---

#### `_xls.create()`.createSheet(name: string) : org.apache.poi.ss.usermodel.Sheet
##### Description

Create a new spreadsheet and define its name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Spreadsheet name. |

##### Return

( _org.apache.poi.ss.usermodel.Sheet_ )

Spreadsheet created.

---

## fillPattern

---

#### _xls.fillPattern(type: string) : org.apache.poi.ss.usermodel.FillPatternType
##### Description

Generates the background fill pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Fill pattern type, supports:<br/><ul><li>no-fill</li><li>solid-foreground</li><li>fine-dots</li><li>alt-bars</li><li>sparse-dots</li><li>thick-horz-bands</li><li>thick-vert-bands</li><li>thick-backward-diag</li><li>thick-forward-diag</li><li>big-spots</li><li>bricks</li><li>thin-horz-bands</li><li>thin-vert-bands</li><li>thin-backward-diag</li><li>thin-forward-diag</li><li>squares</li><li>diamonds</li><li>less-dots</li><li>least-dots</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.FillPatternType_ )

The fill pattern configured with the defined type.

---

## font

---

#### _xls.font() : org.apache.poi.ss.usermodel.Font
##### Description

Creates a new font style in the workbook.

##### Return

( _org.apache.poi.ss.usermodel.Font_ )

The new font style created.

---

## format

---

#### _xls.format(format: string) : short
##### Description

Creates a new cell format in the workbook.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **format** | _string_ | Format standard definition. |

##### Return

( _short_ )

Identifier code for the new format.

---

## getAllSheets

---

#### `_xls.create()`.getAllSheets() : java.util.List
##### Description

List of all spreadsheets.

##### Return

( _java.util.List_ )

All existing spreadsheets in the document.

---

## getCellData

---

#### `_xls.create()`.getCellData(rowIndex: int, colIndex: int) : [Values](/docs/library/objects/Values)
##### Description

Gets an object with data from a spreadsheet cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Cell data information.

---

#### `_xls.create()`.getCellData(cell: org.apache.poi.ss.usermodel.Cell) : [Values](/docs/library/objects/Values)
##### Description

Gets an object with data from a spreadsheet cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cell** | _org.apache.poi.ss.usermodel.Cell_ | Object that represents the cell. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Cell data information.

---

#### `_xls.create()`.getCellData(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int, colIndex: int) : [Values](/docs/library/objects/Values)
##### Description

Gets an object with data from a spreadsheet cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **rowIndex** | _int_ | Line number of the sheet. |
| **colIndex** | _int_ | Column number. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Cell data information.

---

## getNumberOfSheets

---

#### `_xls.create()`.getNumberOfSheets() : int
##### Description

Gets the total number of spreadsheets.

##### Return

( _int_ )

The total number of spreadsheets in the document.

---

## getSheet

---

#### `_xls.create()`.getSheet(index: int) : org.apache.poi.ss.usermodel.Sheet
##### Description

Get the spreadsheet by number (index).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | Spreadsheet number. |

##### Return

( _org.apache.poi.ss.usermodel.Sheet_ )

Spreadsheet referring to the number (index).

---

#### `_xls.create()`.getSheet(name: string) : org.apache.poi.ss.usermodel.Sheet
##### Description

Gets the spreadsheet by name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Spreadsheet name. |

##### Return

( _org.apache.poi.ss.usermodel.Sheet_ )

Spreadsheet for the name.

---

## horizontalAlignment

---

#### _xls.horizontalAlignment(type: string) : org.apache.poi.ss.usermodel.HorizontalAlignment
##### Description

Generates horizontal alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Horizontal alignment type name, supports:<br/><ul><li>general</li><li>left</li><li>center</li><li>right</li><li>fill</li><li>justify</li><li>center-selection</li><li>distributed</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.HorizontalAlignment_ )

The horizontal alignment configured with the defined type.

---

## insertPicture

---

#### _xls.insertPicture(sheet: org.apache.poi.ss.usermodel.Sheet, file: [File](/docs/library/objects/File), anchor: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Description

Inserts an image associated with the anchor in a specific spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet that will be used to insert the image. |
| **file** | _[File](/docs/library/objects/File)_ | Image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### _xls.insertPicture(sheet: org.apache.poi.ss.usermodel.Sheet, storage: [Storage](/docs/library/resources/storage), anchor: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Description

Inserts an image associated with the anchor in a specific spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet that will be used to insert the image. |
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage reference associated with an image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(file: [File](/docs/library/objects/File), linha: int, coluna: int) : org.apache.poi.ss.usermodel.Picture
##### Description

Insert the image into the specified cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | Image file. |
| **linha** | _int_ | Line number. |
| **coluna** | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(file: [File](/docs/library/objects/File), anchor: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Description

Inserts an image associated with the anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | Image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(storage: [Storage](/docs/library/resources/storage), linha: int, coluna: int) : org.apache.poi.ss.usermodel.Picture
##### Description

Insert the image into the specified cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage reference associated with an image file. |
| **linha** | _int_ | Line number. |
| **coluna** | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(storage: [Storage](/docs/library/resources/storage), anchor: org.apache.poi.ss.usermodel.ClientAnchor) : org.apache.poi.ss.usermodel.Picture
##### Description

Inserts an image associated with the anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage reference associated with an image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

## mergedRegion

---

#### _xls.mergedRegion(firstRow: int, lastRow: int, firstCol: int, lastCol: int) : int
##### Description

Performs the merging of cells in the region.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firstRow** | _int_ | First line number. |
| **lastRow** | _int_ | Last line number. |
| **firstCol** | _int_ | First column number. |
| **lastCol** | _int_ | Last column number. |

##### Return

( _int_ )

The reference of the merged cell region.

---

#### _xls.mergedRegion(sheet: org.apache.poi.ss.usermodel.Sheet, firstRow: int, lastRow: int, firstCol: int, lastCol: int) : int
##### Description

Performs the merging of cells in the passed region in a specific worksheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet that will be merged the cells. |
| **firstRow** | _int_ | First line number. |
| **lastRow** | _int_ | Last line number. |
| **firstCol** | _int_ | First column number. |
| **lastCol** | _int_ | Last column number. |

##### Return

( _int_ )

The reference of the merged cell region.

---

## open

---

#### _xls.open(input: [InputStream](/docs/library/objects/InputStream)) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | File data input stream object. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### _xls.open(input: [InputStream](/docs/library/objects/InputStream), password: string) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | File data input stream object. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### _xls.open(file: [File](/docs/library/objects/File)) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | Excel document type file. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### _xls.open(file: [File](/docs/library/objects/File), password: string) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | Excel document type file. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### _xls.open(input: [InputStream](/docs/library/objects/InputStream)) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | File data input stream object. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### _xls.open(input: [InputStream](/docs/library/objects/InputStream), password: string) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | File data input stream object. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### _xls.open(storage: [Storage](/docs/library/resources/storage)) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage reference where the file will be opened. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### _xls.open(storage: [Storage](/docs/library/resources/storage), password: string) : [XLS](/docs/library/resources/xls)
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage reference where the file will be opened. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

File opened in a new instance of the XLS resource.

---

## output

---

#### `_xls.create()`.output(fileName: string) : void
##### Description

Performs the sending of data from the final file to the client to download it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fileName** | _string_ | Name of the file. |

##### Return

( _void_ )


---

## position

---

#### _xls.position(rowIndex: int, colIndex: int) : [XLSPosition](/docs/library/objects/XLSPosition)
##### Description

Gets the positioning object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |

##### Return

( _[XLSPosition](/docs/library/objects/XLSPosition)_ )

Position reference based on passed coordinates.

---

## read

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream)) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Excel file reference. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Excel file reference. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), sheetNumber: int) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), hiddenSheets: string) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Excel file reference. |
| **hiddenSheets** | _string_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), sheetNumber: string, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [InputStream](/docs/library/objects/InputStream), sheetNumber: string, hiddenSheets: int) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](/docs/library/objects/InputStream)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _int_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(in: [InputStream](/docs/library/objects/InputStream), password: string, sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _xls.read(input: [File](/docs/library/objects/File)) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Excel file reference. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [File](/docs/library/objects/File), hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Excel file reference. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [File](/docs/library/objects/File), sheetNumber: int) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [File](/docs/library/objects/File), sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [File](/docs/library/objects/File), hiddenSheets: string) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Excel file reference. |
| **hiddenSheets** | _string_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [File](/docs/library/objects/File), sheetNumber: string, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [File](/docs/library/objects/File), sheetNumber: string, hiddenSheets: int) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](/docs/library/objects/File)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _int_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(file: [File](/docs/library/objects/File), password: string, sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _xls.read(input: [Storage](/docs/library/resources/storage)) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Excel file reference. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Excel file reference. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), sheetNumber: int) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), hiddenSheets: string) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Excel file reference. |
| **hiddenSheets** | _string_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), sheetNumber: string, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: [Storage](/docs/library/resources/storage), sheetNumber: string, hiddenSheets: int) : [Values](/docs/library/objects/Values)
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](/docs/library/resources/storage)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _int_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(storage: [Storage](/docs/library/resources/storage), password: string, sheetNumber: int, hiddenSheets: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## row

---

#### `_xls.create()`.row(rowIndex: int) : org.apache.poi.ss.usermodel.Row
##### Description

Gets a row from the spreadsheet and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |

##### Return

( _org.apache.poi.ss.usermodel.Row_ )

Line representation object.

---

#### `_xls.create()`.row(sheet: org.apache.poi.ss.usermodel.Sheet, rowIndex: int) : org.apache.poi.ss.usermodel.Row
##### Description

Gets a row from the spreadsheet and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **rowIndex** | _int_ | Line number. |

##### Return

( _org.apache.poi.ss.usermodel.Row_ )

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
| **nameProposal** | _string_ | Name that should be transformed. |

##### Return

( _string_ )

Valid name to be used as the name of the spreadsheet.

---

#### _xls.safeSheetName(nameProposal: string, replaceChar: char) : string
##### Description

Transforms the passed text to be a valid spreadsheet name while complying with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nameProposal** | _string_ | Name that should be transformed. |
| **replaceChar** | _char_ | Replacement character. |

##### Return

( _string_ )

Valid name to be used as the name of the spreadsheet.

---

## save

---

#### `_xls.create()`.save(output: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Description

Writes the data from the final file to the output.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **output** | _[OutputStream](/docs/library/objects/OutputStream)_ | Output where the file will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.save(file: [File](/docs/library/objects/File)) : void
##### Description

Writes the data to the final file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | File that will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.save(output: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Description

Writes the data from the final file to the output.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **output** | _[OutputStream](/docs/library/objects/OutputStream)_ | Output where the file will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.save(storage: [Storage](/docs/library/resources/storage)) : void
##### Description

Writes the data from the final file to the internal storage of the application.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage reference where the file will be saved. |

##### Return

( _void_ )


---

## setCellData

---

#### _xls.setCellData(row: int, col: int, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [XLS](/docs/library/resources/xls)
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data to be inserted. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

The current instance of the XLS resource.

---

#### _xls.setCellData(row: int, col: int, data: [Values](/docs/library/objects/Values)) : [XLS](/docs/library/resources/xls)
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data to be inserted. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

The current instance of the XLS resource.

---

#### _xls.setCellData(cell: org.apache.poi.ss.usermodel.Cell, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [XLS](/docs/library/resources/xls)
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cell** | _org.apache.poi.ss.usermodel.Cell_ | Cell object. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data to be inserted. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

The current instance of the XLS resource.

---

#### _xls.setCellData(cell: org.apache.poi.ss.usermodel.Cell, data: [Values](/docs/library/objects/Values)) : [XLS](/docs/library/resources/xls)
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cell** | _org.apache.poi.ss.usermodel.Cell_ | Cell object. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data to be inserted. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

The current instance of the XLS resource.

---

#### _xls.setCellData(sheet: org.apache.poi.ss.usermodel.Sheet, row: int, col: int, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [XLS](/docs/library/resources/xls)
##### Description

Inserts data into a specific cell in a spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data to be inserted. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

The current instance of the XLS resource.

---

#### _xls.setCellData(sheet: org.apache.poi.ss.usermodel.Sheet, row: int, col: int, data: [Values](/docs/library/objects/Values)) : [XLS](/docs/library/resources/xls)
##### Description

Inserts data into a specific cell in a spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data to be inserted. |

##### Return

( _[XLS](/docs/library/resources/xls)_ )

The current instance of the XLS resource.

---

## sheet

---

#### `_xls.create()`.sheet() : org.apache.poi.ss.usermodel.Sheet
##### Description

To obtain the current spreadsheet that is being used to manipulate the data.

##### How To Use

```javascript
const spreadsheet = _xls.create().sheet();
```

##### Return

( _org.apache.poi.ss.usermodel.Sheet_ )

Gets the current spreadsheet.

---

## units

---

#### _xls.units() : java.lang.Class
##### Description

It obtains the types of units predefined in Excel, useful to perform the conversion between pixels and points.

##### Return

( _java.lang.Class_ )

The Apache POI class that helps you manipulate Excel units.

---

## validSheetName

---

#### _xls.validSheetName(nameProposal: string) : boolean
##### Description

Checks whether the passed text is a valid spreadsheet name that complies with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nameProposal** | _string_ | Name that must be validated. |

##### Return

( _boolean_ )

Whether it is valid to be used as a spreadsheet name.

---

## verticalAlignment

---

#### _xls.verticalAlignment(type: string) : org.apache.poi.ss.usermodel.VerticalAlignment
##### Description

Generates vertical alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Vertical alignment type name, supports:<br/><ul><li>top</li><li>center</li><li>bottom</li><li>justify</li><li>distributed</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.VerticalAlignment_ )

The vertical alignment configured with the defined type.

---

## workbook

---

#### `_xls.create()`.workbook() : org.apache.poi.ss.usermodel.Workbook
##### Description

Creates a new Excel document.

##### How To Use

```javascript
const workbook = _xls.create().workbook();
```

##### Return

( _org.apache.poi.ss.usermodel.Workbook_ )

Gets the workbook.

---

