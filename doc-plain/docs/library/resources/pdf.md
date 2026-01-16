---
id: pdf
title: PDF
sidebar_label: PDF
---

Allows you to read, create and modify PDF files.

The [iText](https://itextpdf.com/) library is used to generate PDFs.

---

## areaBreak

---

#### _pdf.areaBreak() : com.itextpdf.layout.element.AreaBreak
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### _pdf.areaBreak(pageSize: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.element.AreaBreak
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Size of the new content. |

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### _pdf.areaBreak(type: string) : com.itextpdf.layout.element.AreaBreak
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Type of the new area. |

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

## border

---

#### _pdf.border(border: string) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a customized border with type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns the created customized border.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, color, width and opacity inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, width: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: double, opacity: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: double, opacity: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, color: double, width: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _double_ | Border color. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, width: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: float, opacity: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: float, opacity: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: float, opacity: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: int, opacity: double) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: int, opacity: float) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: int, opacity: int) : com.itextpdf.layout.borders.Border
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

## border3D

---

#### _pdf.border3D(border: string) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: double, opacity: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a customized 3D border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns the created customized 3D border.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: float, opacity: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, color, width and opacity inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: com.itextpdf.kernel.colors.Color, width: int, opacity: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width and opacity inserted.

---

#### _pdf.border3D(border: string, width: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border3D(border: string, width: double, opacity: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: double, opacity: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: double, opacity: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border3D(border: string, width: float, opacity: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: float, opacity: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: float, opacity: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a border type 3D.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black.

---

#### _pdf.border3D(border: string, width: int, opacity: double) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: int, opacity: float) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: int, opacity: int) : com.itextpdf.layout.borders.Border3D
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

## canvas

---

#### _pdf.canvas(doc: com.itextpdf.kernel.pdf.PdfDocument, pageNum: int) : com.itextpdf.kernel.pdf.canvas.PdfCanvas
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **doc** | _com.itextpdf.kernel.pdf.PdfDocument_ |   |
| **pageNum** | _int_ |   |

##### Return

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

#### _pdf.canvas(page: com.itextpdf.kernel.pdf.PdfPage) : com.itextpdf.kernel.pdf.canvas.PdfCanvas
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _com.itextpdf.kernel.pdf.PdfPage_ |   |

##### Return

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

## cell

---

#### _pdf.cell() : com.itextpdf.layout.element.Cell
##### Description

Creates a new table cell.

##### Return

( _com.itextpdf.layout.element.Cell_ )

Returns the created cell.

---

#### _pdf.cell(rowspan: int, colspan: int) : com.itextpdf.layout.element.Cell
##### Description

Creates a new table cell with rowspan or colspan.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowspan** | _int_ | Number of rowspan. |
| **colspan** | _int_ | Number of colspan. |

##### Return

( _com.itextpdf.layout.element.Cell_ )

Returns the created cell.

---

## color

---

#### _pdf.color(color: string) : com.itextpdf.kernel.colors.Color
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **color** | _string_ |   |

##### Return

( _com.itextpdf.kernel.colors.Color_ )


---

## colorCMYK

---

#### _pdf.colorCMYK(cyan: double, magenta: double, yellow: double, black: double) : com.itextpdf.kernel.colors.DeviceCmyk
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cyan** | _double_ |   |
| **magenta** | _double_ |   |
| **yellow** | _double_ |   |
| **black** | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### _pdf.colorCMYK(cyan: float, magenta: float, yellow: float, black: float) : com.itextpdf.kernel.colors.DeviceCmyk
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cyan** | _float_ |   |
| **magenta** | _float_ |   |
| **yellow** | _float_ |   |
| **black** | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### _pdf.colorCMYK(cyan: int, magenta: int, yellow: int, black: int) : com.itextpdf.kernel.colors.DeviceCmyk
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cyan** | _int_ |   |
| **magenta** | _int_ |   |
| **yellow** | _int_ |   |
| **black** | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

## colorGray

---

#### _pdf.colorGray(value: double) : com.itextpdf.kernel.colors.DeviceGray
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(value: float) : com.itextpdf.kernel.colors.DeviceGray
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(value: int) : com.itextpdf.kernel.colors.DeviceGray
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

## colorRGB

---

#### _pdf.colorRGB(red: double, green: double, blue: double) : com.itextpdf.kernel.colors.DeviceRgb
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **red** | _double_ |   |
| **green** | _double_ |   |
| **blue** | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(red: float, green: float, blue: float) : com.itextpdf.kernel.colors.DeviceRgb
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **red** | _float_ |   |
| **green** | _float_ |   |
| **blue** | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(red: int, green: int, blue: int) : com.itextpdf.kernel.colors.DeviceRgb
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **red** | _int_ |   |
| **green** | _int_ |   |
| **blue** | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

## extract

---

#### _pdf.extract(content: [InputStream](/docs/library/objects/InputStream)) : [Values](/docs/library/objects/Values)
##### Description

Extracts the content of PDF's.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](/docs/library/objects/InputStream)_ | Content to be extracted. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns the extracted content.

---

#### _pdf.extract(storage: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : [Values](/docs/library/objects/Values)
##### Description

Extracts the content of PDFs.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ | Caminho do armazenamento. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns the extracted content.

---

#### _pdf.extract(content: [InputStream](/docs/library/objects/InputStream)) : [Values](/docs/library/objects/Values)
##### Description

Extracts the content of PDF's.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](/docs/library/objects/InputStream)_ | Content to be extracted. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns the extracted content.

---

## font

---

#### _pdf.font(storage: string) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _string_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [File](/docs/library/objects/File)) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](/docs/library/objects/File)_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [File](/docs/library/objects/File), encoding: boolean) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](/docs/library/objects/File)_ | Storage path. |
| **encoding** | _boolean_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [File](/docs/library/objects/File), encoding: string) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](/docs/library/objects/File)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [File](/docs/library/objects/File), encoding: string, embedded: boolean) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](/docs/library/objects/File)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |
| **embedded** | _boolean_ |   |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [Storage](/docs/library/resources/storage)) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [Storage](/docs/library/resources/storage), encoding: boolean) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage path. |
| **encoding** | _boolean_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [Storage](/docs/library/resources/storage), encoding: string) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: [Storage](/docs/library/resources/storage), encoding: string, embedded: boolean) : com.itextpdf.kernel.font.PdfFont
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |
| **embedded** | _boolean_ |   |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

## getDocument

---

#### _pdf.getDocument() : com.itextpdf.layout.Document
##### Description

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Return

( _com.itextpdf.layout.Document_ )

Gere a estrutura do documento.

---

## getPdfDocument

---

#### _pdf.getPdfDocument() : com.itextpdf.kernel.pdf.PdfDocument
##### Description

Gets the PdfDocument object of the iText to build the PDf document.

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Manage the PDF document build.

---

## getPdfReader

---

#### _pdf.getPdfReader() : com.itextpdf.kernel.pdf.PdfReader
##### Description

Gets the PdfReader object of the iText to read the PDF document.

##### Return

( _com.itextpdf.kernel.pdf.PdfReader_ )

Manage the PDF document read.

---

## getPdfWriter

---

#### _pdf.getPdfWriter() : com.itextpdf.kernel.pdf.PdfWriter
##### Description

Gets the PdfWriter object of the iText to bytes write in the PDF file.

##### Return

( _com.itextpdf.kernel.pdf.PdfWriter_ )

Manage the bytes write in the PDF file.

---

## horizontalAlignment

---

#### _pdf.horizontalAlignment(type: string) : com.itextpdf.layout.properties.HorizontalAlignment
##### Description

Creates the horizontal alignment type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Alignment type name, supports:<ul><li>left</li><li>center</li><li>right</li></ul> |

##### Return

( _com.itextpdf.layout.properties.HorizontalAlignment_ )

Returns the horizontal alignment type.

---

## image

---

#### _pdf.image(file: [File](/docs/library/objects/File)) : com.itextpdf.layout.element.Image
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |

##### Return

( _com.itextpdf.layout.element.Image_ )


---

#### _pdf.image(storage: [Storage](/docs/library/resources/storage)) : com.itextpdf.layout.element.Image
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |

##### Return

( _com.itextpdf.layout.element.Image_ )


---

## init

---

#### _pdf.init() : [PDF](/docs/library/resources/pdf)
##### Description

Creates a new resource object to build PDFs.

##### How To Use

```javascript
const pdf = _pdf.init();
```

##### Return

( _[PDF](/docs/library/resources/pdf)_ )

New instance of the PDF resource.

---

## line

---

#### _pdf.line(type: string, color: com.itextpdf.kernel.colors.Color, width: double) : com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer
##### Description

Creates a customized border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Line type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Line color. |
| **width** | _double_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the created customized border.

---

#### _pdf.line(type: string, color: com.itextpdf.kernel.colors.Color, width: float) : com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer
##### Description

Creates a customized line with type,color, width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Line type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Line color. |
| **width** | _float_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the created customized line.

---

#### _pdf.line(line: string, color: com.itextpdf.kernel.colors.Color, width: int) : com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer
##### Description

Creates a line type with color and width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **line** | _string_ | Line type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Line color. |
| **width** | _int_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the line type, color and width inserted.

---

## newDocument

---

#### _pdf.newDocument() : com.itextpdf.layout.Document
##### Description

Cria um novo documento.

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(pageSize: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.Document
##### Description

Creates a PDF document with specific page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size defined.

---

#### _pdf.newDocument(out: [OutputStream](/docs/library/objects/OutputStream)) : com.itextpdf.layout.Document
##### Description

Creates a new PDF document with A4 page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size A4.

---

#### _pdf.newDocument(out: [OutputStream](/docs/library/objects/OutputStream), pageSize: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.Document
##### Description

Creates a PDF document with specific page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ | File path. |
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size defined.

---

#### _pdf.newDocument(out: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO, pageSize: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.Document
##### Description

Creates a PDF document with specific page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ | File path. |
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size defined.

---

## openDocument

---

#### _pdf.openDocument(path: [InputStream](/docs/library/objects/InputStream)) : com.itextpdf.layout.Document
##### Description

Opens a PDF documment corresponding to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _[InputStream](/docs/library/objects/InputStream)_ | File path. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document openned.

---

#### _pdf.openDocument(in: [InputStream](/docs/library/objects/InputStream), out: [OutputStream](/docs/library/objects/OutputStream)) : com.itextpdf.layout.Document
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.openDocument(in: [InputStream](/docs/library/objects/InputStream), out: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : com.itextpdf.layout.Document
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **out** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.openDocument(path: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : com.itextpdf.layout.Document
##### Description

Opens a PDF documment corresponding to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ | File path. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document openned.

---

#### _pdf.openDocument(in: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO, out: [OutputStream](/docs/library/objects/OutputStream)) : com.itextpdf.layout.Document
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.openDocument(in: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO, out: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : com.itextpdf.layout.Document
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |
| **out** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

## pageSize

---

#### _pdf.pageSize(width: float, height: float) : com.itextpdf.kernel.geom.PageSize
##### Description

Gets the page size definition from the width and height.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **width** | _float_ | Width of the page. |
| **height** | _float_ | Height of the page. |

##### Return

( _com.itextpdf.kernel.geom.PageSize_ )

Page Definition.

---

#### _pdf.pageSize(page: string) : com.itextpdf.kernel.geom.PageSize
##### Description

Gets page size definition, pages codes supported:<br/><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _string_ | Page type code. |

##### Return

( _com.itextpdf.kernel.geom.PageSize_ )

Page definition.

---

## paragraph

---

#### _pdf.paragraph() : com.itextpdf.layout.element.Paragraph
##### Description

Creates a paragraph.

##### Return

( _com.itextpdf.layout.element.Paragraph_ )

The new paragraph object with the text object added as content.

---

#### _pdf.paragraph(text: com.itextpdf.layout.element.Text) : com.itextpdf.layout.element.Paragraph
##### Description

Creates a paragraph.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _com.itextpdf.layout.element.Text_ | Text object that will be used as content in the paragraph. |

##### Return

( _com.itextpdf.layout.element.Paragraph_ )

The new paragraph object with the text object added as content.

---

#### _pdf.paragraph(text: string) : com.itextpdf.layout.element.Paragraph
##### Description

Creates a paragraph.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text that will be presented in the paragraph. |

##### Return

( _com.itextpdf.layout.element.Paragraph_ )

The new paragraph object with the text.

---

## paragraphArea

---

#### _pdf.paragraphArea(paragraph: com.itextpdf.layout.element.Paragraph) : com.itextpdf.kernel.geom.Rectangle
##### Description

Calculates the area of a paragraph, allows you to obtain the height and width that the paragraph text will occupy in the PDF.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **paragraph** | _com.itextpdf.layout.element.Paragraph_ | The paragraph object whose area will be calculated. |

##### Return

( _com.itextpdf.kernel.geom.Rectangle_ )

The new paragraph object with the text.

---

## setDocument

---

#### _pdf.setDocument(document: com.itextpdf.layout.Document) : [PDF](/docs/library/resources/pdf)
##### Description

Sets the PDF document object of the iText.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _com.itextpdf.layout.Document_ | Document object of the iText. |

##### Return

( _[PDF](/docs/library/resources/pdf)_ )

The current instance of the PDF resource.

---

## string

---

#### _pdf.string(text: byte[]) : com.itextpdf.kernel.pdf.PdfString
##### Description

String is a sequence of characters, that is, it is a text, this method obtains a native string object for PDF from an array of bytes.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _byte[]_ | The text bytes that will be used in the new native PDF string. |

##### Return

( _com.itextpdf.kernel.pdf.PdfString_ )

The new native string for PDF.

---

#### _pdf.string(text: string) : com.itextpdf.kernel.pdf.PdfString
##### Description

String is a sequence of characters, that is, it is a text, this method obtains a native string object for PDF.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | The string that will be used in the new PDF native string. |

##### Return

( _com.itextpdf.kernel.pdf.PdfString_ )

The new native string for PDF.

---

#### _pdf.string(text: string, encoding: string) : com.itextpdf.kernel.pdf.PdfString
##### Description

String is a sequence of characters, that is, it is a text, this method obtains a native string object for PDF.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | The string that will be used in the new PDF native string. |
| **encoding** | _string_ | Name of the encoding type for the text. |

##### Return

( _com.itextpdf.kernel.pdf.PdfString_ )

The new native string for PDF.

---

## style

---

#### _pdf.style() : com.itextpdf.layout.Style
##### Description

Creates a new style that is useful for reusing styling.

##### Return

( _com.itextpdf.layout.Style_ )

Returns a new style to PDF.

---

## table

---

#### _pdf.table(columns: double[]) : com.itextpdf.layout.element.Table
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _double[]_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: double[], largeTable: boolean) : com.itextpdf.layout.element.Table
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _double[]_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### _pdf.table(columns: float[]) : com.itextpdf.layout.element.Table
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _float[]_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: float[], largeTable: boolean) : com.itextpdf.layout.element.Table
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _float[]_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### _pdf.table(columns: int[]) : com.itextpdf.layout.element.Table
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _int[]_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: int[], largeTable: boolean) : com.itextpdf.layout.element.Table
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _int[]_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### _pdf.table(columns: int) : com.itextpdf.layout.element.Table
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _int_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: java.util.List) : com.itextpdf.layout.element.Table
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _java.util.List_ | List of widths of each table column. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### _pdf.table(columnWidth: java.util.List, largeTable: boolean) : com.itextpdf.layout.element.Table
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _java.util.List_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### _pdf.table(columnWidth: [Values](/docs/library/objects/Values)) : com.itextpdf.layout.element.Table
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _[Values](/docs/library/objects/Values)_ | List of widths of each table column. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### _pdf.table(columnWidth: [Values](/docs/library/objects/Values), largeTable: boolean) : com.itextpdf.layout.element.Table
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _[Values](/docs/library/objects/Values)_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

## text

---

#### _pdf.text(content: string) : com.itextpdf.layout.element.Text
##### Description

Creates new text with the inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be created. |

##### Return

( _com.itextpdf.layout.element.Text_ )

Returns the text content.

---

## textAlignment

---

#### _pdf.textAlignment(type: string) : com.itextpdf.layout.properties.TextAlignment
##### Description

Creates the text alignment type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Alignment type name, supports:<ul><li>left</li><li>center</li><li>right</li><li>justified</li><li>justified-all</li></ul> |

##### Return

( _com.itextpdf.layout.properties.TextAlignment_ )

Returns the alignment type for text.

---

## toHTML

---

#### _pdf.toHTML(content: [InputStream](/docs/library/objects/InputStream)) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](/docs/library/objects/InputStream)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

#### _pdf.toHTML(content: [File](/docs/library/objects/File)) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[File](/docs/library/objects/File)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

#### _pdf.toHTML(content: [InputStream](/docs/library/objects/InputStream)) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](/docs/library/objects/InputStream)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

#### _pdf.toHTML(content: [Storage](/docs/library/resources/storage)) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[Storage](/docs/library/resources/storage)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

## toImage

---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), startPage: int, endPage: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), startPage: int, endPage: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), startPage: int, endPage: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), startPage: int, endPage: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), startPage: int, endPage: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), startPage: int, endPage: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _void_ )


---

## toImageAsByteArray

---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), startPage: int, endPage: int, fileExtension: string, dpi: int) : [[B
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, fileExtension: string) : [[B
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, fileExtension: string, dpi: int) : [[B
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), fileExtension: string) : [[B
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **fileExtension** | _string_ |   |

##### Return

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), fileExtension: string, dpi: int) : [[B
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Return

( _[[B_ )


---

## toText

---

#### _pdf.toText(content: [InputStream](/docs/library/objects/InputStream)) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](/docs/library/objects/InputStream)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

#### _pdf.toText(content: [File](/docs/library/objects/File)) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[File](/docs/library/objects/File)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

#### _pdf.toText(content: [InputStream](/docs/library/objects/InputStream)) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](/docs/library/objects/InputStream)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

#### _pdf.toText(content: [Storage](/docs/library/resources/storage)) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[Storage](/docs/library/resources/storage)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

## verticalAlignment

---

#### _pdf.verticalAlignment(type: string) : com.itextpdf.layout.properties.VerticalAlignment
##### Description

Creates the vertical alignment type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Alignment type name, supports:<ul><li>top</li><li>middle</li><li>bottom</li></ul> |

##### Return

( _com.itextpdf.layout.properties.VerticalAlignment_ )

Returns the vertical alignment type.

---

