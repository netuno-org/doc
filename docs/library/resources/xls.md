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

#### `_xls.create()`.<span style="color: #008000">activeSheet</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Sets the spreadsheet that is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | Spreadsheet number. |

##### Return

( _[XLS](../../resources/xls)_ )

A instância atual do recurso XLS.

---

#### `_xls.create()`.<span style="color: #008000">activeSheet</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.hssf.usermodel.HSSFSheet</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Sets the spreadsheet that is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _org.apache.poi.hssf.usermodel.HSSFSheet_ | Spreadsheet reference object. |

##### Return

( _[XLS](../../resources/xls)_ )

The current instance of the XLS resource.

---

## addDataTable

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _java.util.List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
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

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _[Values](../../objects/Values)_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _[Values](../../objects/Values)_ | List of data to be inserted. |
| **vertical** | _boolean_ | Insert data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Configuration of the data table. |
| **data** | _java.util.List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
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

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _java.util.List_ |   |
| **vertical** | _boolean_ |   |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )


---

#### `_xls.create()`.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |
| **data** | _[Values](../../objects/Values)_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">addDataTable</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">vertical</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ |   |
| **rowIndex** | _int_ |   |
| **colIndex** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |
| **vertical** | _boolean_ |   |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )


---

## anchorType

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">anchorType</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor$AnchorType</span>
##### Description

Generates the type of anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Anchor type name, supports:<br><ul><li>move-and-resize</li><li>dont-move-do-resize</li><li>move-dont-resize</li><li>dont-move-and-resize</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.ClientAnchor$AnchorType_ )

The anchor type configured with the defined type.

---

## borderStyle

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">borderStyle</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.BorderStyle</span>
##### Description

Generates the outline style of the cell borders.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Name of the border style type, supports:<br><ul><li>none</li><li>thin</li><li>medium</li><li>dashed</li><li>dotted</li><li>thick</li><li>double</li><li>hair</li><li>medium-dashed</li><li>dash-dot</li><li>medium-dash-dot</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.BorderStyle_ )

The border outline style configured with the defined type.

---

## cell

---

#### `_xls.create()`.<span style="color: #008000">cell</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>
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

#### `_xls.create()`.<span style="color: #008000">cell</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">cellRangeAddress</span>(<span style="color: #FF8000">firstRow</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">lastRow</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">firstCol</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">lastCol</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.util.CellRangeAddress</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">cellStyle</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.CellStyle</span>
##### Description

Creates a new cell style in the workbook.

##### Return

( _org.apache.poi.ss.usermodel.CellStyle_ )

The new cell style created.

---

## cellStyleFormat

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">cellStyleFormat</span>(<span style="color: #FF8000">format</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.CellStyle</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">color</span>(<span style="color: #FF8000">color</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Description

Generates the color code based on predefined names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **color** | _string_ | Color name, supports:<br><ul><li>black</li><li>brown</li><li>olive_green</li><li>dark_green</li><li>dark_teal</li><li>dark_blue</li><li>indigo</li><li>grey_80_percent</li><li>orange</li><li>dark_yellow</li><li>green</li><li>teal</li><li>blue</li><li>blue_grey</li><li>grey_50_percent</li><li>red</li><li>light_orange</li><li>lime</li><li>sea_green</li><li>aqua</li><li>light_blue</li><li>violet</li><li>grey_40_percent</li><li>pink</li><li>gold</li><li>yellow</li><li>bright_green</li><li>turquoise</li><li>dark_red</li><li>sky_blue</li><li>plum</li><li>grey_25_percent</li><li>rose</li><li>light_yellow</li><li>light_green</li><li>light_turquoise</li><li>pale_blue</li><li>lavender</li><li>white</li><li>cornflower_blue</li><li>lemon_chiffon</li><li>maroon</li><li>orchid</li><li>coral</li><li>royal_blue</li><li>light_cornflower_blue</li><li>tan</li><li>automatic</li></ul> |

##### Return

( _short_ )

The color reference.

---

## columnReference

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">columnReference</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">columnReference</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">create</span>() : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Creates a new Excel document.

##### How To Use

```javascript
const excel = _xls.create();
```

##### Return

( _[XLS](../../resources/xls)_ )

New XLS resource instance.

---

## createSheet

---

#### `_xls.create()`.<span style="color: #008000">createSheet</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
##### Description

Creates a new spreadsheet.

##### Return

( _org.apache.poi.ss.usermodel.Sheet_ )

Spreadsheet created.

---

#### `_xls.create()`.<span style="color: #008000">createSheet</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">fillPattern</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.FillPatternType</span>
##### Description

Generates the background fill pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Fill pattern type, supports:<br><ul><li>no-fill</li><li>solid-foreground</li><li>fine-dots</li><li>alt-bars</li><li>sparse-dots</li><li>thick-horz-bands</li><li>thick-vert-bands</li><li>thick-backward-diag</li><li>thick-forward-diag</li><li>big-spots</li><li>bricks</li><li>thin-horz-bands</li><li>thin-vert-bands</li><li>thin-backward-diag</li><li>thin-forward-diag</li><li>squares</li><li>diamonds</li><li>less-dots</li><li>least-dots</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.FillPatternType_ )

The fill pattern configured with the defined type.

---

## font

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">font</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Font</span>
##### Description

Creates a new font style in the workbook.

##### Return

( _org.apache.poi.ss.usermodel.Font_ )

The new font style created.

---

## format

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">format</span>(<span style="color: #FF8000">format</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
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

#### `_xls.create()`.<span style="color: #008000">getAllSheets</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

List of all spreadsheets.

##### Return

( _java.util.List_ )

All existing spreadsheets in the document.

---

## getCellData

---

#### `_xls.create()`.<span style="color: #008000">getCellData</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets an object with data from a spreadsheet cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |

##### Return

( _[Values](../../objects/Values)_ )

Cell data information.

---

#### `_xls.create()`.<span style="color: #008000">getCellData</span>(<span style="color: #FF8000">cell</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets an object with data from a spreadsheet cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cell** | _org.apache.poi.ss.usermodel.Cell_ | Object that represents the cell. |

##### Return

( _[Values](../../objects/Values)_ )

Cell data information.

---

#### `_xls.create()`.<span style="color: #008000">getCellData</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets an object with data from a spreadsheet cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **rowIndex** | _int_ | Line number of the sheet. |
| **colIndex** | _int_ | Column number. |

##### Return

( _[Values](../../objects/Values)_ )

Cell data information.

---

## getNumberOfSheets

---

#### `_xls.create()`.<span style="color: #008000">getNumberOfSheets</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Gets the total number of spreadsheets.

##### Return

( _int_ )

The total number of spreadsheets in the document.

---

## getSheet

---

#### `_xls.create()`.<span style="color: #008000">getSheet</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### `_xls.create()`.<span style="color: #008000">getSheet</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">horizontalAlignment</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.HorizontalAlignment</span>
##### Description

Generates horizontal alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Horizontal alignment type name, supports:<br><ul><li>general</li><li>left</li><li>center</li><li>right</li><li>fill</li><li>justify</li><li>center-selection</li><li>distributed</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.HorizontalAlignment_ )

The horizontal alignment configured with the defined type.

---

## insertPicture

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">anchor</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Description

Inserts an image associated with the anchor in a specific spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet that will be used to insert the image. |
| **file** | _[File](../../objects/File)_ | Image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">anchor</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Description

Inserts an image associated with the anchor in a specific spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet that will be used to insert the image. |
| **storage** | _[Storage](../../resources/storage)_ | Storage reference associated with an image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Description

Insert the image into the specified cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ | Image file. |
| **linha** | _int_ | Line number. |
| **coluna** | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">anchor</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Description

Inserts an image associated with the anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ | Image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Description

Insert the image into the specified cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Storage reference associated with an image file. |
| **linha** | _int_ | Line number. |
| **coluna** | _int_ | Column number. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.<span style="color: #008000">insertPicture</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">anchor</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.ClientAnchor</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Picture</span>
##### Description

Inserts an image associated with the anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Storage reference associated with an image file. |
| **anchor** | _org.apache.poi.ss.usermodel.ClientAnchor_ | Anchor to associate the image. |

##### Return

( _org.apache.poi.ss.usermodel.Picture_ )

The reference object of the inserted image.

---

## mergedRegion

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">mergedRegion</span>(<span style="color: #FF8000">firstRow</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">lastRow</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">firstCol</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">lastCol</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">mergedRegion</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">firstRow</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">lastRow</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">firstCol</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">lastCol</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | File data input stream object. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | File data input stream object. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ | Excel document type file. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ | Excel document type file. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | File data input stream object. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | File data input stream object. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Storage reference where the file will be opened. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">open</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Opens an Excel file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Storage reference where the file will be opened. |
| **password** | _string_ | File password. |

##### Return

( _[XLS](../../resources/xls)_ )

File opened in a new instance of the XLS resource.

---

## output

---

#### `_xls.create()`.<span style="color: #008000">output</span>(<span style="color: #FF8000">fileName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">position</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">colIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[XLSPosition](../../objects/XLSPosition)</span>
##### Description

Gets the positioning object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowIndex** | _int_ | Line number. |
| **colIndex** | _int_ | Column number. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Position reference based on passed coordinates.

---

## read

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| **hiddenSheets** | _string_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _int_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../../objects/InputStream)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Excel file reference. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Excel file reference. |
| **hiddenSheets** | _string_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[File](../../objects/File)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _int_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Excel file reference. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Excel file reference. |
| **sheetNumber** | _int_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Excel file reference. |
| **hiddenSheets** | _string_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">input</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _[Storage](../../resources/storage)_ | Excel file reference. |
| **sheetNumber** | _string_ | Spreadsheet number. |
| **hiddenSheets** | _int_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">read</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">sheetNumber</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">hiddenSheets</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ |   |
| **password** | _string_ |   |
| **sheetNumber** | _int_ |   |
| **hiddenSheets** | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## row

---

#### `_xls.create()`.<span style="color: #008000">row</span>(<span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Row</span>
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

#### `_xls.create()`.<span style="color: #008000">row</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">rowIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Row</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">safeSheetName</span>(<span style="color: #FF8000">nameProposal</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">safeSheetName</span>(<span style="color: #FF8000">nameProposal</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">replaceChar</span>: <span style="font-weight: normal; font-style: italic;">char</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">output</span>: <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Writes the data from the final file to the output.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **output** | _[OutputStream](../../objects/OutputStream)_ | Output where the file will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Writes the data to the final file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ | File that will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">output</span>: <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Writes the data from the final file to the output.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **output** | _[OutputStream](../../objects/OutputStream)_ | Output where the file will be saved. |

##### Return

( _void_ )


---

#### `_xls.create()`.<span style="color: #008000">save</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Writes the data from the final file to the internal storage of the application.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ | Storage reference where the file will be saved. |

##### Return

( _void_ )


---

## setCellData

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">row</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">col</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/xls)_ )

The current instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">row</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">col</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Values](../../objects/Values)_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/xls)_ )

The current instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">cell</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cell** | _org.apache.poi.ss.usermodel.Cell_ | Cell object. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/xls)_ )

The current instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">cell</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Cell</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cell** | _org.apache.poi.ss.usermodel.Cell_ | Cell object. |
| **data** | _[Values](../../objects/Values)_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/xls)_ )

The current instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">row</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">col</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Inserts data into a specific cell in a spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/xls)_ )

The current instance of the XLS resource.

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">setCellData</span>(<span style="color: #FF8000">sheet</span>: <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>, <span style="color: #FF8000">row</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">col</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[XLS](../../resources/xls)</span>
##### Description

Inserts data into a specific cell in a spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sheet** | _org.apache.poi.ss.usermodel.Sheet_ | Spreadsheet object. |
| **row** | _int_ | Line number. |
| **col** | _int_ | Column number. |
| **data** | _[Values](../../objects/Values)_ | Data to be inserted. |

##### Return

( _[XLS](../../resources/xls)_ )

The current instance of the XLS resource.

---

## sheet

---

#### `_xls.create()`.<span style="color: #008000">sheet</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Sheet</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">units</span>() : <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>
##### Description

It obtains the types of units predefined in Excel, useful to perform the conversion between pixels and points.

##### Return

( _java.lang.Class_ )

The Apache POI class that helps you manipulate Excel units.

---

## validSheetName

---

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">validSheetName</span>(<span style="color: #FF8000">nameProposal</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_xls</span>.<span style="color: #008000">verticalAlignment</span>(<span style="color: #FF8000">type</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.VerticalAlignment</span>
##### Description

Generates vertical alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Vertical alignment type name, supports:<br><ul><li>top</li><li>center</li><li>bottom</li><li>justify</li><li>distributed</li></ul> |

##### Return

( _org.apache.poi.ss.usermodel.VerticalAlignment_ )

The vertical alignment configured with the defined type.

---

## workbook

---

#### `_xls.create()`.<span style="color: #008000">workbook</span>() : <span style="font-weight: normal; font-style: italic;">org.apache.poi.ss.usermodel.Workbook</span>
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

