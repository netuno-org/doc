---
id: image
title: Image
sidebar_label: Image
---

Recurso manipulação de imagens.

---

## affineTransform

---

#### _image.affineTransform() : _java.awt.geom.AffineTransform_
##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _double[]_) : _java.awt.geom.AffineTransform_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tx | _double[]_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(m00: _double_, m10: _double_, m01: _double_, m11: _double_, m02: _double_, m12: _double_) : _java.awt.geom.AffineTransform_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| m00 | _double_ |   |
| m10 | _double_ |   |
| m01 | _double_ |   |
| m11 | _double_ |   |
| m02 | _double_ |   |
| m12 | _double_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _java.awt.geom.AffineTransform_) : _java.awt.geom.AffineTransform_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tx | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _java.util.List_) : _java.awt.geom.AffineTransform_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tx | _java.util.List_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _[Values](../../objects/Values)_) : _java.awt.geom.AffineTransform_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tx | _[Values](../../objects/Values)_ |   |

##### Retorno

( _java.awt.geom.AffineTransform_ )


---

## affineTransformType

---

#### _image.affineTransformType(type: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _int_ )


---

## attributedString

---

#### _image.attributedString(text: string, attributes: _java.util.Map_) : _java.text.AttributedString_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | string |   |
| attributes | _java.util.Map_ |   |

##### Retorno

( _java.text.AttributedString_ )


---

#### _image.attributedString(text: string, attributes: _[Values](../../objects/Values)_) : _java.text.AttributedString_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | string |   |
| attributes | _[Values](../../objects/Values)_ |   |

##### Retorno

( _java.text.AttributedString_ )


---

## bufferedImage

---

#### _image.bufferedImage() : _java.awt.image.BufferedImage_
##### Retorno

( _java.awt.image.BufferedImage_ )


---

## close

---

#### _image.close() : _void_
##### Retorno

( _void_ )


---

## color

---

#### _image.color(r: _float_, g: _float_, b: _float_) : _java.awt.Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| r | _float_ |   |
| g | _float_ |   |
| b | _float_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(r: _float_, g: _float_, b: _float_, a: _float_) : _java.awt.Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| r | _float_ |   |
| g | _float_ |   |
| b | _float_ |   |
| a | _float_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(r: _int_, g: _int_, b: _int_) : _java.awt.Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| r | _int_ |   |
| g | _int_ |   |
| b | _int_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(r: _int_, g: _int_, b: _int_, a: _int_) : _java.awt.Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| r | _int_ |   |
| g | _int_ |   |
| b | _int_ |   |
| a | _int_ |   |

##### Retorno

( _java.awt.Color_ )


---

#### _image.color(color: string) : _java.awt.Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | string |   |

##### Retorno

( _java.awt.Color_ )


---

## colorDecode

---

#### _image.colorDecode(value: string) : _java.awt.Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | string |   |

##### Retorno

( _java.awt.Color_ )


---

## convertRGBAToIndexed

---

#### _image.convertRGBAToIndexed() : _java.awt.image.BufferedImage_
##### Retorno

( _java.awt.image.BufferedImage_ )


---

#### _image.convertRGBAToIndexed(src: _java.awt.image.BufferedImage_) : _java.awt.image.BufferedImage_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| src | _java.awt.image.BufferedImage_ |   |

##### Retorno

( _java.awt.image.BufferedImage_ )


---

## crop

---

#### _image.crop(x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawArc

---

#### _image.drawArc(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, startAngle: _int_, arcAngle: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| startAngle | _int_ |   |
| arcAngle | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawBackground

---

#### _image.drawBackground(color: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawImage

---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| dx1 | _int_ |   |
| dxy1 | _int_ |   |
| dx2 | _int_ |   |
| dxy2 | _int_ |   |
| sx1 | _int_ |   |
| sy1 | _int_ |   |
| sx2 | _int_ |   |
| sy2 | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| dx1 | _int_ |   |
| dxy1 | _int_ |   |
| dx2 | _int_ |   |
| dxy2 | _int_ |   |
| sx1 | _int_ |   |
| sy1 | _int_ |   |
| sx2 | _int_ |   |
| sy2 | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.image.BufferedImage_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.image.BufferedImage_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.image.BufferedImage_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.image.BufferedImage_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| dx1 | _int_ |   |
| dxy1 | _int_ |   |
| dx2 | _int_ |   |
| dxy2 | _int_ |   |
| sx1 | _int_ |   |
| sy1 | _int_ |   |
| sx2 | _int_ |   |
| sy2 | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| dx1 | _int_ |   |
| dxy1 | _int_ |   |
| dx2 | _int_ |   |
| dxy2 | _int_ |   |
| sx1 | _int_ |   |
| sy1 | _int_ |   |
| sx2 | _int_ |   |
| sy2 | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawLine

---

#### _image.drawLine(color: _java.awt.Color_, x1: _int_, y1: _int_, x2: _int_, y2: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x1 | _int_ |   |
| y1 | _int_ |   |
| x2 | _int_ |   |
| y2 | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawOval

---

#### _image.drawOval(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawPolygon

---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _[I_, yPoints: _[I_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[I_ |   |
| yPoints | _[I_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawPolyline

---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _[I_, yPoints: _[I_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[I_ |   |
| yPoints | _[I_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawRect

---

#### _image.drawRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawRoundRect

---

#### _image.drawRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## drawText

---

#### _image.drawText(text: string, font: _java.awt.Font_, color: _java.awt.Color_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: string, font: _java.awt.Font_, color: _java.awt.Color_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: string, font: _java.awt.Font_, color: _java.awt.Color_, x: _int_, y: _int_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: _java.text.AttributedString_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.text.AttributedString_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: _java.text.AttributedString_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.text.AttributedString_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: _java.text.AttributedString_, x: _int_, y: _int_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | _java.text.AttributedString_ |   |
| x | _int_ |   |
| y | _int_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## file

---

#### _image.file(fileName: string, type: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| fileName | string |   |
| type | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## fillArc

---

#### _image.fillArc(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, startAngle: _int_, arcAngle: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| startAngle | _int_ |   |
| arcAngle | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## fillOval

---

#### _image.fillOval(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## fillPolygon

---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _[I_, yPoints: _[I_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[I_ |   |
| yPoints | _[I_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |
| nPoints | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## fillRect

---

#### _image.fillRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.fillRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## fillRoundRect

---

#### _image.fillRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.fillRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |
| rotation | _double_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## font

---

#### _image.font(type: _int_, file: _[File](../../objects/File)_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | _int_ |   |
| file | _[File](../../objects/File)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(type: _int_, file: _[File](../../objects/File)_, style: _int_, size: _float_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | _int_ |   |
| file | _[File](../../objects/File)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(type: _int_, storage: _[Storage](../../resources/Storage)_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | _int_ |   |
| storage | _[Storage](../../resources/Storage)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(type: _int_, storage: _[Storage](../../resources/Storage)_, style: _int_, size: _float_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | _int_ |   |
| storage | _[Storage](../../resources/Storage)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(name: string, style: _int_, fontSize: _int_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |
| style | _int_ |   |
| fontSize | _int_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(file: _[File](../../objects/File)_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(file: _[File](../../objects/File)_, size: _float_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| size | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(file: _[File](../../objects/File)_, style: _int_, size: _float_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(storage: _[Storage](../../resources/Storage)_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(storage: _[Storage](../../resources/Storage)_, size: _float_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| size | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

#### _image.font(storage: _[Storage](../../resources/Storage)_, style: _int_, size: _float_) : _java.awt.Font_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Retorno

( _java.awt.Font_ )


---

## fontField

---

#### _image.fontField(field: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| field | string |   |

##### Retorno

( _int_ )


---

## fontMetrics

---

#### _image.fontMetrics(font: _java.awt.Font_) : _java.awt.FontMetrics_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| font | _java.awt.Font_ |   |

##### Retorno

( _java.awt.FontMetrics_ )


---

## fontStringBounds

---

#### _image.fontStringBounds(text: string, font: _java.awt.Font_) : _java.awt.geom.Rectangle2D_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |

##### Retorno

( _java.awt.geom.Rectangle2D_ )


---

## getBufferedImage

---

#### _image.getBufferedImage() : _java.awt.image.BufferedImage_
##### Retorno

( _java.awt.image.BufferedImage_ )


---

## getFile

---

#### _image.getFile(fileName: string, type: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| fileName | string |   |
| type | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getGraphics

---

#### _image.getGraphics() : _java.awt.Graphics2D_
##### Retorno

( _java.awt.Graphics2D_ )


---

## getHeight

---

#### _image.getHeight() : _int_
##### Retorno

( _int_ )


---

## getImage

---

#### _image.getImage() : _java.awt.Image_
##### Retorno

( _java.awt.Image_ )


---

## getJPEGCompression

---

#### _image.getJPEGCompression() : _float_
##### Retorno

( _float_ )


---

## getWidth

---

#### _image.getWidth() : _int_
##### Retorno

( _int_ )


---

## graphics

---

#### _image.graphics() : _java.awt.Graphics2D_
##### Retorno

( _java.awt.Graphics2D_ )


---

## height

---

#### _image.height() : _int_
##### Retorno

( _int_ )


---

## image

---

#### _image.image() : _java.awt.Image_
##### Retorno

( _java.awt.Image_ )


---

## init

---

#### _image.init(width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.init(image: _java.awt.Image_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.Image_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.init(in: _java.io.InputStream_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.init(in: _javax.imageio.stream.ImageInputStream_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _javax.imageio.stream.ImageInputStream_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.init(file: _[File](../../objects/File)_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.init(in: _[InputStream](../../objects/InputStream)_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _[InputStream](../../objects/InputStream)_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.init(storage: _[Storage](../../resources/Storage)_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## jpegCompression

---

#### _image.jpegCompression() : _float_
##### Retorno

( _float_ )


---

#### _image.jpegCompression(jpegCompression: _float_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| jpegCompression | _float_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## makeTransparent

---

#### _image.makeTransparent(x: _int_, y: _int_) : _java.awt.image.BufferedImage_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| x | _int_ |   |
| y | _int_ |   |

##### Retorno

( _java.awt.image.BufferedImage_ )


---

#### _image.makeTransparent(image: _java.awt.image.BufferedImage_, x: _int_, y: _int_) : _java.awt.image.BufferedImage_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| image | _java.awt.image.BufferedImage_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Retorno

( _java.awt.image.BufferedImage_ )


---

## output

---

#### _image.output(type: string) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | string |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## renderingHints

---

#### _image.renderingHints(key: _java.awt.RenderingHints$Key_, value: _java.lang.Object_) : _java.awt.RenderingHints_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.awt.RenderingHints$Key_ |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _java.awt.RenderingHints_ )


---

## renderingHintsKey

---

#### _image.renderingHintsKey(key: string) : _java.awt.RenderingHints$Key_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.awt.RenderingHints$Key_ )


---

## resetGraphics

---

#### _image.resetGraphics() : _[Image](../../resources/Image)_
##### Retorno

( _[Image](../../resources/Image)_ )


---

## resize

---

#### _image.resize(width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| width | _int_ |   |
| height | _int_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## save

---

#### _image.save(out: _java.io.OutputStream_, type: string) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |
| type | string |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.save(out: _javax.imageio.stream.ImageOutputStream_, type: string) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _javax.imageio.stream.ImageOutputStream_ |   |
| type | string |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.save(file: _[File](../../objects/File)_, type: string) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| type | string |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.save(out: _[OutputStream](../../objects/OutputStream)_, type: string) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _[OutputStream](../../objects/OutputStream)_ |   |
| type | string |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

#### _image.save(storage: _[Storage](../../resources/Storage)_, type: string) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| type | string |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## setJPEGCompression

---

#### _image.setJPEGCompression(jpegCompression: _float_) : _[Image](../../resources/Image)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| jpegCompression | _float_ |   |

##### Retorno

( _[Image](../../resources/Image)_ )


---

## width

---

#### _image.width() : _int_
##### Retorno

( _int_ )


---

