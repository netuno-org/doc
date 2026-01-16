---
id: image
title: Image
sidebar_label: Image
---

Recurso para a manipulação de imagens programaticamente.

---

## affineTransform

---

#### _image.affineTransform() : java.awt.geom.AffineTransform
##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: double[]) : java.awt.geom.AffineTransform
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tx** | _double[]_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(m00: double, m10: double, m01: double, m11: double, m02: double, m12: double) : java.awt.geom.AffineTransform
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **m00** | _double_ |   |
| **m10** | _double_ |   |
| **m01** | _double_ |   |
| **m11** | _double_ |   |
| **m02** | _double_ |   |
| **m12** | _double_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: java.awt.geom.AffineTransform) : java.awt.geom.AffineTransform
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tx** | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: java.util.List) : java.awt.geom.AffineTransform
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tx** | _java.util.List_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: [Values](/docs/library/objects/Values)) : java.awt.geom.AffineTransform
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tx** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

## affineTransformType

---

#### _image.affineTransformType(type: string) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _int_ )


---

## attributedString

---

#### _image.attributedString(text: string, attributes: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : java.text.AttributedString
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |
| **attributes** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _java.text.AttributedString_ )


---

#### _image.attributedString(text: string, attributes: [Values](/docs/library/objects/Values)) : java.text.AttributedString
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |
| **attributes** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _java.text.AttributedString_ )


---

## bufferedImage

---

#### _image.bufferedImage() : java.awt.image.BufferedImage
##### Retorno

( _java.awt.image.BufferedImage_ )


---

## close

---

#### _image.close() : void
##### Retorno

( _void_ )


---

## color

---

#### _image.color(r: float, g: float, b: float) : java.awt.Color
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **r** | _float_ |   |
| **g** | _float_ |   |
| **b** | _float_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(r: float, g: float, b: float, a: float) : java.awt.Color
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **r** | _float_ |   |
| **g** | _float_ |   |
| **b** | _float_ |   |
| **a** | _float_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(r: int, g: int, b: int) : java.awt.Color
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **r** | _int_ |   |
| **g** | _int_ |   |
| **b** | _int_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(r: int, g: int, b: int, a: int) : java.awt.Color
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **r** | _int_ |   |
| **g** | _int_ |   |
| **b** | _int_ |   |
| **a** | _int_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(color: string) : java.awt.Color
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _string_ |   |

##### Retorno

( _java.awt.Color_ )


---

## colorDecode

---

#### _image.colorDecode(value: string) : java.awt.Color
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _string_ |   |

##### Retorno

( _java.awt.Color_ )


---

## convertRGBAToIndexed

---

#### _image.convertRGBAToIndexed() : java.awt.image.BufferedImage
##### Retorno

( _java.awt.image.BufferedImage_ )


---

#### _image.convertRGBAToIndexed(src: java.awt.image.BufferedImage) : java.awt.image.BufferedImage
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **src** | _java.awt.image.BufferedImage_ |   |

##### Retorno

( _java.awt.image.BufferedImage_ )


---

## crop

---

#### _image.crop(x: int, y: int, width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawArc

---

#### _image.drawArc(color: java.awt.Color, x: int, y: int, width: int, height: int, startAngle: int, arcAngle: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **startAngle** | _int_ |   |
| **arcAngle** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawBackground

---

#### _image.drawBackground(color: java.awt.Color) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawImage

---

#### _image.drawImage(image: java.awt.Image, x: int, y: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, x: int, y: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, x: int, y: int, width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, x: int, y: int, width: int, height: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **dx1** | _int_ |   |
| **dxy1** | _int_ |   |
| **dx2** | _int_ |   |
| **dxy2** | _int_ |   |
| **sx1** | _int_ |   |
| **sy1** | _int_ |   |
| **sx2** | _int_ |   |
| **sy2** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int, bgColor: java.awt.Color) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **dx1** | _int_ |   |
| **dxy1** | _int_ |   |
| **dx2** | _int_ |   |
| **dxy2** | _int_ |   |
| **sx1** | _int_ |   |
| **sy1** | _int_ |   |
| **sx2** | _int_ |   |
| **sy2** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, x: int, y: int, width: int, height: int, bgColor: java.awt.Color) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, x: int, y: int, width: int, height: int, bgColor: java.awt.Color, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, x: int, y: int, bgColor: java.awt.Color) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, x: int, y: int, bgColor: java.awt.Color, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.Image, at: java.awt.geom.AffineTransform) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |
| **at** | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.image.BufferedImage, x: int, y: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.image.BufferedImage_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: java.awt.image.BufferedImage, x: int, y: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.image.BufferedImage_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int, width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int, width: int, height: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **dx1** | _int_ |   |
| **dxy1** | _int_ |   |
| **dx2** | _int_ |   |
| **dxy2** | _int_ |   |
| **sx1** | _int_ |   |
| **sy1** | _int_ |   |
| **sx2** | _int_ |   |
| **sy2** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int, bgColor: java.awt.Color) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **dx1** | _int_ |   |
| **dxy1** | _int_ |   |
| **dx2** | _int_ |   |
| **dxy2** | _int_ |   |
| **sx1** | _int_ |   |
| **sy1** | _int_ |   |
| **sx2** | _int_ |   |
| **sy2** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int, width: int, height: int, bgColor: java.awt.Color) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int, width: int, height: int, bgColor: java.awt.Color, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int, bgColor: java.awt.Color) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), x: int, y: int, bgColor: java.awt.Color, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **bgColor** | _java.awt.Color_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawImage(image: [Image](/docs/library/resources/image), at: java.awt.geom.AffineTransform) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _[Image](/docs/library/resources/image)_ |   |
| **at** | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawLine

---

#### _image.drawLine(color: java.awt.Color, x1: int, y1: int, x2: int, y2: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x1** | _int_ |   |
| **y1** | _int_ |   |
| **x2** | _int_ |   |
| **y2** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawOval

---

#### _image.drawOval(color: java.awt.Color, x: int, y: int, width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawPolygon

---

#### _image.drawPolygon(color: java.awt.Color, xPoints: int[], yPoints: int[], nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _int[]_ |   |
| **yPoints** | _int[]_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolygon(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _java.util.List_ |   |
| **yPoints** | _java.util.List_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolygon(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List, nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _java.util.List_ |   |
| **yPoints** | _java.util.List_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolygon(color: java.awt.Color, xPoints: [Values](/docs/library/objects/Values), yPoints: [Values](/docs/library/objects/Values)) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **yPoints** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolygon(color: java.awt.Color, xPoints: [Values](/docs/library/objects/Values), yPoints: [Values](/docs/library/objects/Values), nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **yPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawPolyline

---

#### _image.drawPolyline(color: java.awt.Color, xPoints: int[], yPoints: int[], nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _int[]_ |   |
| **yPoints** | _int[]_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolyline(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _java.util.List_ |   |
| **yPoints** | _java.util.List_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolyline(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List, nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _java.util.List_ |   |
| **yPoints** | _java.util.List_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolyline(color: java.awt.Color, xPoints: [Values](/docs/library/objects/Values), yPoints: [Values](/docs/library/objects/Values)) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **yPoints** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawPolyline(color: java.awt.Color, xPoints: [Values](/docs/library/objects/Values), yPoints: [Values](/docs/library/objects/Values), nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **yPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawRect

---

#### _image.drawRect(color: java.awt.Color, x: int, y: int, width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawRect(color: java.awt.Color, x: int, y: int, width: int, height: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawRoundRect

---

#### _image.drawRoundRect(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **arcWidth** | _int_ |   |
| **arcHeight** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawRoundRect(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **arcWidth** | _int_ |   |
| **arcHeight** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## drawText

---

#### _image.drawText(text: string, font: java.awt.Font, color: java.awt.Color, x: int, y: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |
| **font** | _java.awt.Font_ |   |
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawText(text: string, font: java.awt.Font, color: java.awt.Color, x: int, y: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |
| **font** | _java.awt.Font_ |   |
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawText(text: string, font: java.awt.Font, color: java.awt.Color, x: int, y: int, at: java.awt.geom.AffineTransform) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |
| **font** | _java.awt.Font_ |   |
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **at** | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawText(text: java.text.AttributedString, x: int, y: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.text.AttributedString_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawText(text: java.text.AttributedString, x: int, y: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.text.AttributedString_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.drawText(text: java.text.AttributedString, x: int, y: int, at: java.awt.geom.AffineTransform) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _java.text.AttributedString_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **at** | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## file

---

#### _image.file(fileName: string, type: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fileName** | _string_ |   |
| **type** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## fillArc

---

#### _image.fillArc(color: java.awt.Color, x: int, y: int, width: int, height: int, startAngle: int, arcAngle: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **startAngle** | _int_ |   |
| **arcAngle** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## fillOval

---

#### _image.fillOval(color: java.awt.Color, x: int, y: int, width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## fillPolygon

---

#### _image.fillPolygon(color: java.awt.Color, xPoints: int[], yPoints: int[], nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _int[]_ |   |
| **yPoints** | _int[]_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.fillPolygon(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _java.util.List_ |   |
| **yPoints** | _java.util.List_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.fillPolygon(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List, nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _java.util.List_ |   |
| **yPoints** | _java.util.List_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.fillPolygon(color: java.awt.Color, xPoints: [Values](/docs/library/objects/Values), yPoints: [Values](/docs/library/objects/Values)) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **yPoints** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.fillPolygon(color: java.awt.Color, xPoints: [Values](/docs/library/objects/Values), yPoints: [Values](/docs/library/objects/Values), nPoints: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **xPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **yPoints** | _[Values](/docs/library/objects/Values)_ |   |
| **nPoints** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## fillRect

---

#### _image.fillRect(color: java.awt.Color, x: int, y: int, width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.fillRect(color: java.awt.Color, x: int, y: int, width: int, height: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## fillRoundRect

---

#### _image.fillRoundRect(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **arcWidth** | _int_ |   |
| **arcHeight** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.fillRoundRect(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int, rotation: double) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _java.awt.Color_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |
| **width** | _int_ |   |
| **height** | _int_ |   |
| **arcWidth** | _int_ |   |
| **arcHeight** | _int_ |   |
| **rotation** | _double_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## font

---

#### _image.font(type: int, file: [File](/docs/library/objects/File)) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _int_ |   |
| **file** | _[File](/docs/library/objects/File)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(type: int, file: [File](/docs/library/objects/File), style: int, size: float) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _int_ |   |
| **file** | _[File](/docs/library/objects/File)_ |   |
| **style** | _int_ |   |
| **size** | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(type: int, storage: [Storage](/docs/library/resources/storage)) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _int_ |   |
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(type: int, storage: [Storage](/docs/library/resources/storage), style: int, size: float) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _int_ |   |
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **style** | _int_ |   |
| **size** | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(name: string, style: int, fontSize: int) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **style** | _int_ |   |
| **fontSize** | _int_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(file: [File](/docs/library/objects/File)) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(file: [File](/docs/library/objects/File), size: float) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |
| **size** | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(file: [File](/docs/library/objects/File), style: int, size: float) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |
| **style** | _int_ |   |
| **size** | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(storage: [Storage](/docs/library/resources/storage)) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(storage: [Storage](/docs/library/resources/storage), size: float) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **size** | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(storage: [Storage](/docs/library/resources/storage), style: int, size: float) : java.awt.Font
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **style** | _int_ |   |
| **size** | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

## fontField

---

#### _image.fontField(field: string) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **field** | _string_ |   |

##### Retorno

( _int_ )


---

## fontMetrics

---

#### _image.fontMetrics(font: java.awt.Font) : java.awt.FontMetrics
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **font** | _java.awt.Font_ |   |

##### Retorno

( _java.awt.FontMetrics_ )


---

## fontStringBounds

---

#### _image.fontStringBounds(text: string, font: java.awt.Font) : java.awt.geom.Rectangle2D
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |
| **font** | _java.awt.Font_ |   |

##### Retorno

( _java.awt.geom.Rectangle2D_ )


---

## getBufferedImage

---

#### _image.getBufferedImage() : java.awt.image.BufferedImage
##### Retorno

( _java.awt.image.BufferedImage_ )


---

## getFile

---

#### _image.getFile(fileName: string, type: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fileName** | _string_ |   |
| **type** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## getGraphics

---

#### _image.getGraphics() : java.awt.Graphics2D
##### Retorno

( _java.awt.Graphics2D_ )


---

## getHeight

---

#### _image.getHeight() : int
##### Retorno

( _int_ )


---

## getImage

---

#### _image.getImage() : java.awt.Image
##### Retorno

( _java.awt.Image_ )


---

## getJPEGCompression

---

#### _image.getJPEGCompression() : float
##### Retorno

( _float_ )


---

## getWidth

---

#### _image.getWidth() : int
##### Retorno

( _int_ )


---

## graphics

---

#### _image.graphics() : java.awt.Graphics2D
##### Retorno

( _java.awt.Graphics2D_ )


---

## height

---

#### _image.height() : int
##### Retorno

( _int_ )


---

## image

---

#### _image.image() : java.awt.Image
##### Retorno

( _java.awt.Image_ )


---

## init

---

#### _image.init(width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.init(image: java.awt.Image) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.Image_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.init(file: java.io.File) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.init(in: [InputStream](/docs/library/objects/InputStream)) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.init(in: javax.imageio.stream.ImageInputStream) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _javax.imageio.stream.ImageInputStream_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.init(file: [File](/docs/library/objects/File)) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.init(in: [InputStream](/docs/library/objects/InputStream)) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.init(storage: [Storage](/docs/library/resources/storage)) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## jpegCompression

---

#### _image.jpegCompression() : float
##### Retorno

( _float_ )


---

#### _image.jpegCompression(jpegCompression: float) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jpegCompression** | _float_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## makeTransparent

---

#### _image.makeTransparent(x: int, y: int) : java.awt.image.BufferedImage
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **x** | _int_ |   |
| **y** | _int_ |   |

##### Retorno

( _java.awt.image.BufferedImage_ )


---

#### _image.makeTransparent(image: java.awt.image.BufferedImage, x: int, y: int) : java.awt.image.BufferedImage
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **image** | _java.awt.image.BufferedImage_ |   |
| **x** | _int_ |   |
| **y** | _int_ |   |

##### Retorno

( _java.awt.image.BufferedImage_ )


---

## output

---

#### _image.output(type: string) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _string_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## renderingHints

---

#### _image.renderingHints(key: java.awt.RenderingHints$Key, value: java.lang.Object) : java.awt.RenderingHints
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.awt.RenderingHints$Key_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.awt.RenderingHints_ )


---

## renderingHintsKey

---

#### _image.renderingHintsKey(key: string) : java.awt.RenderingHints$Key
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.awt.RenderingHints$Key_ )


---

## resetGraphics

---

#### _image.resetGraphics() : [Image](/docs/library/resources/image)
##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## resize

---

#### _image.resize(width: int, height: int) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **width** | _int_ |   |
| **height** | _int_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## save

---

#### _image.save(file: java.io.File, type: string) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.io.File_ |   |
| **type** | _string_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.save(out: [OutputStream](/docs/library/objects/OutputStream), type: string) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |
| **type** | _string_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.save(out: javax.imageio.stream.ImageOutputStream, type: string) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _javax.imageio.stream.ImageOutputStream_ |   |
| **type** | _string_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.save(file: [File](/docs/library/objects/File), type: string) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |
| **type** | _string_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.save(out: [OutputStream](/docs/library/objects/OutputStream), type: string) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |
| **type** | _string_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

#### _image.save(storage: [Storage](/docs/library/resources/storage), type: string) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |
| **type** | _string_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## setJPEGCompression

---

#### _image.setJPEGCompression(jpegCompression: float) : [Image](/docs/library/resources/image)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jpegCompression** | _float_ |   |

##### Retorno

( _[Image](/docs/library/resources/image)_ )


---

## width

---

#### _image.width() : int
##### Retorno

( _int_ )


---

