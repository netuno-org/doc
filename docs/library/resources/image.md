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
##### Return

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _double[]_) : _java.awt.geom.AffineTransform_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| tx | _double[]_ |   |

##### Return

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(m00: _double_, m10: _double_, m01: _double_, m11: _double_, m02: _double_, m12: _double_) : _java.awt.geom.AffineTransform_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| m00 | _double_ |   |
| m10 | _double_ |   |
| m01 | _double_ |   |
| m11 | _double_ |   |
| m02 | _double_ |   |
| m12 | _double_ |   |

##### Return

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _java.awt.geom.AffineTransform_) : _java.awt.geom.AffineTransform_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| tx | _java.awt.geom.AffineTransform_ |   |

##### Return

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _java.util.List_) : _java.awt.geom.AffineTransform_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| tx | _java.util.List_ |   |

##### Return

( _java.awt.geom.AffineTransform_ )


---

#### _image.affineTransform(tx: _[Values](../../objects/Values)_) : _java.awt.geom.AffineTransform_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| tx | _[Values](../../objects/Values)_ |   |

##### Return

( _java.awt.geom.AffineTransform_ )


---

## affineTransformType

---

#### _image.affineTransformType(type: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string |   |

##### Return

( _int_ )


---

## attributedString

---

#### _image.attributedString(text: string, attributes: _java.util.Map_) : _java.text.AttributedString_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string |   |
| attributes | _java.util.Map_ |   |

##### Return

( _java.text.AttributedString_ )


---

#### _image.attributedString(text: string, attributes: _[Values](../../objects/Values)_) : _java.text.AttributedString_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string |   |
| attributes | _[Values](../../objects/Values)_ |   |

##### Return

( _java.text.AttributedString_ )


---

## bufferedImage

---

#### _image.bufferedImage() : _java.awt.image.BufferedImage_
##### Return

( _java.awt.image.BufferedImage_ )


---

## close

---

#### _image.close() : _void_
##### Return

( _void_ )


---

## color

---

#### _image.color(r: _float_, g: _float_, b: _float_) : _java.awt.Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| r | _float_ |   |
| g | _float_ |   |
| b | _float_ |   |

##### Return

( _java.awt.Color_ )


---

#### _image.color(r: _float_, g: _float_, b: _float_, a: _float_) : _java.awt.Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| r | _float_ |   |
| g | _float_ |   |
| b | _float_ |   |
| a | _float_ |   |

##### Return

( _java.awt.Color_ )


---

#### _image.color(r: _int_, g: _int_, b: _int_) : _java.awt.Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| r | _int_ |   |
| g | _int_ |   |
| b | _int_ |   |

##### Return

( _java.awt.Color_ )


---

#### _image.color(r: _int_, g: _int_, b: _int_, a: _int_) : _java.awt.Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| r | _int_ |   |
| g | _int_ |   |
| b | _int_ |   |
| a | _int_ |   |

##### Return

( _java.awt.Color_ )


---

#### _image.color(color: string) : _java.awt.Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | string |   |

##### Return

( _java.awt.Color_ )


---

## colorDecode

---

#### _image.colorDecode(value: string) : _java.awt.Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | string |   |

##### Return

( _java.awt.Color_ )


---

## convertRGBAToIndexed

---

#### _image.convertRGBAToIndexed() : _java.awt.image.BufferedImage_
##### Return

( _java.awt.image.BufferedImage_ )


---

#### _image.convertRGBAToIndexed(src: _java.awt.image.BufferedImage_) : _java.awt.image.BufferedImage_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| src | _java.awt.image.BufferedImage_ |   |

##### Return

( _java.awt.image.BufferedImage_ )


---

## crop

---

#### _image.crop(x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawArc

---

#### _image.drawArc(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, startAngle: _int_, arcAngle: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| startAngle | _int_ |   |
| arcAngle | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawBackground

---

#### _image.drawBackground(color: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawImage

---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
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

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
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

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, x: _int_, y: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.Image_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.image.BufferedImage_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.image.BufferedImage_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _java.awt.image.BufferedImage_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.image.BufferedImage_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
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

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, dx1: _int_, dxy1: _int_, dx2: _int_, dxy2: _int_, sx1: _int_, sy1: _int_, sx2: _int_, sy2: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
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

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, width: _int_, height: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, bgColor: _java.awt.Color_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, x: _int_, y: _int_, bgColor: _java.awt.Color_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| x | _int_ |   |
| y | _int_ |   |
| bgColor | _java.awt.Color_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawImage(image: _[Image](../../resources/Image)_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _[Image](../../resources/Image)_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawLine

---

#### _image.drawLine(color: _java.awt.Color_, x1: _int_, y1: _int_, x2: _int_, y2: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x1 | _int_ |   |
| y1 | _int_ |   |
| x2 | _int_ |   |
| y2 | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawOval

---

#### _image.drawOval(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawPolygon

---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _[I_, yPoints: _[I_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[I_ |   |
| yPoints | _[I_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawPolyline

---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _[I_, yPoints: _[I_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[I_ |   |
| yPoints | _[I_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawPolyline(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawRect

---

#### _image.drawRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawRoundRect

---

#### _image.drawRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## drawText

---

#### _image.drawText(text: string, font: _java.awt.Font_, color: _java.awt.Color_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: string, font: _java.awt.Font_, color: _java.awt.Color_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: string, font: _java.awt.Font_, color: _java.awt.Color_, x: _int_, y: _int_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: _java.text.AttributedString_, x: _int_, y: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _java.text.AttributedString_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: _java.text.AttributedString_, x: _int_, y: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _java.text.AttributedString_ |   |
| x | _int_ |   |
| y | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.drawText(text: _java.text.AttributedString_, x: _int_, y: _int_, at: _java.awt.geom.AffineTransform_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _java.text.AttributedString_ |   |
| x | _int_ |   |
| y | _int_ |   |
| at | _java.awt.geom.AffineTransform_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## file

---

#### _image.file(fileName: string, type: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| fileName | string |   |
| type | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## fillArc

---

#### _image.fillArc(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, startAngle: _int_, arcAngle: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| startAngle | _int_ |   |
| arcAngle | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## fillOval

---

#### _image.fillOval(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## fillPolygon

---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _[I_, yPoints: _[I_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[I_ |   |
| yPoints | _[I_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _java.util.List_, yPoints: _java.util.List_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _java.util.List_ |   |
| yPoints | _java.util.List_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.fillPolygon(color: _java.awt.Color_, xPoints: _[Values](../../objects/Values)_, yPoints: _[Values](../../objects/Values)_, nPoints: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| xPoints | _[Values](../../objects/Values)_ |   |
| yPoints | _[Values](../../objects/Values)_ |   |
| nPoints | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## fillRect

---

#### _image.fillRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.fillRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## fillRoundRect

---

#### _image.fillRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.fillRoundRect(color: _java.awt.Color_, x: _int_, y: _int_, width: _int_, height: _int_, arcWidth: _int_, arcHeight: _int_, rotation: _double_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | _java.awt.Color_ |   |
| x | _int_ |   |
| y | _int_ |   |
| width | _int_ |   |
| height | _int_ |   |
| arcWidth | _int_ |   |
| arcHeight | _int_ |   |
| rotation | _double_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## font

---

#### _image.font(type: _int_, file: _[File](../../objects/File)_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | _int_ |   |
| file | _[File](../../objects/File)_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(type: _int_, file: _[File](../../objects/File)_, style: _int_, size: _float_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | _int_ |   |
| file | _[File](../../objects/File)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(type: _int_, storage: _[Storage](../../resources/Storage)_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | _int_ |   |
| storage | _[Storage](../../resources/Storage)_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(type: _int_, storage: _[Storage](../../resources/Storage)_, style: _int_, size: _float_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | _int_ |   |
| storage | _[Storage](../../resources/Storage)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(name: string, style: _int_, fontSize: _int_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |
| style | _int_ |   |
| fontSize | _int_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(file: _[File](../../objects/File)_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(file: _[File](../../objects/File)_, size: _float_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| size | _float_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(file: _[File](../../objects/File)_, style: _int_, size: _float_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(storage: _[Storage](../../resources/Storage)_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(storage: _[Storage](../../resources/Storage)_, size: _float_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| size | _float_ |   |

##### Return

( _java.awt.Font_ )


---

#### _image.font(storage: _[Storage](../../resources/Storage)_, style: _int_, size: _float_) : _java.awt.Font_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| style | _int_ |   |
| size | _float_ |   |

##### Return

( _java.awt.Font_ )


---

## fontField

---

#### _image.fontField(field: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| field | string |   |

##### Return

( _int_ )


---

## fontMetrics

---

#### _image.fontMetrics(font: _java.awt.Font_) : _java.awt.FontMetrics_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| font | _java.awt.Font_ |   |

##### Return

( _java.awt.FontMetrics_ )


---

## fontStringBounds

---

#### _image.fontStringBounds(text: string, font: _java.awt.Font_) : _java.awt.geom.Rectangle2D_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string |   |
| font | _java.awt.Font_ |   |

##### Return

( _java.awt.geom.Rectangle2D_ )


---

## getBufferedImage

---

#### _image.getBufferedImage() : _java.awt.image.BufferedImage_
##### Return

( _java.awt.image.BufferedImage_ )


---

## getFile

---

#### _image.getFile(fileName: string, type: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| fileName | string |   |
| type | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getGraphics

---

#### _image.getGraphics() : _java.awt.Graphics2D_
##### Return

( _java.awt.Graphics2D_ )


---

## getHeight

---

#### _image.getHeight() : _int_
##### Return

( _int_ )


---

## getImage

---

#### _image.getImage() : _java.awt.Image_
##### Return

( _java.awt.Image_ )


---

## getJPEGCompression

---

#### _image.getJPEGCompression() : _float_
##### Return

( _float_ )


---

## getWidth

---

#### _image.getWidth() : _int_
##### Return

( _int_ )


---

## graphics

---

#### _image.graphics() : _java.awt.Graphics2D_
##### Return

( _java.awt.Graphics2D_ )


---

## height

---

#### _image.height() : _int_
##### Return

( _int_ )


---

## image

---

#### _image.image() : _java.awt.Image_
##### Return

( _java.awt.Image_ )


---

## init

---

#### _image.init(width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.init(image: _java.awt.Image_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.Image_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.init(in: _java.io.InputStream_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.init(in: _javax.imageio.stream.ImageInputStream_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _javax.imageio.stream.ImageInputStream_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.init(file: _[File](../../objects/File)_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.init(in: _[InputStream](../../objects/InputStream)_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _[InputStream](../../objects/InputStream)_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.init(storage: _[Storage](../../resources/Storage)_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## jpegCompression

---

#### _image.jpegCompression() : _float_
##### Return

( _float_ )


---

#### _image.jpegCompression(jpegCompression: _float_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| jpegCompression | _float_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## makeTransparent

---

#### _image.makeTransparent(x: _int_, y: _int_) : _java.awt.image.BufferedImage_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| x | _int_ |   |
| y | _int_ |   |

##### Return

( _java.awt.image.BufferedImage_ )


---

#### _image.makeTransparent(image: _java.awt.image.BufferedImage_, x: _int_, y: _int_) : _java.awt.image.BufferedImage_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| image | _java.awt.image.BufferedImage_ |   |
| x | _int_ |   |
| y | _int_ |   |

##### Return

( _java.awt.image.BufferedImage_ )


---

## output

---

#### _image.output(type: string) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## renderingHints

---

#### _image.renderingHints(key: _java.awt.RenderingHints$Key_, value: _java.lang.Object_) : _java.awt.RenderingHints_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.awt.RenderingHints$Key_ |   |
| value | _java.lang.Object_ |   |

##### Return

( _java.awt.RenderingHints_ )


---

## renderingHintsKey

---

#### _image.renderingHintsKey(key: string) : _java.awt.RenderingHints$Key_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.awt.RenderingHints$Key_ )


---

## resetGraphics

---

#### _image.resetGraphics() : _[Image](../../resources/Image)_
##### Return

( _[Image](../../resources/Image)_ )


---

## resize

---

#### _image.resize(width: _int_, height: _int_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| width | _int_ |   |
| height | _int_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## save

---

#### _image.save(out: _java.io.OutputStream_, type: string) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |
| type | string |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.save(out: _javax.imageio.stream.ImageOutputStream_, type: string) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _javax.imageio.stream.ImageOutputStream_ |   |
| type | string |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.save(file: _[File](../../objects/File)_, type: string) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| type | string |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.save(out: _[OutputStream](../../objects/OutputStream)_, type: string) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _[OutputStream](../../objects/OutputStream)_ |   |
| type | string |   |

##### Return

( _[Image](../../resources/Image)_ )


---

#### _image.save(storage: _[Storage](../../resources/Storage)_, type: string) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| type | string |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## setJPEGCompression

---

#### _image.setJPEGCompression(jpegCompression: _float_) : _[Image](../../resources/Image)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| jpegCompression | _float_ |   |

##### Return

( _[Image](../../resources/Image)_ )


---

## width

---

#### _image.width() : _int_
##### Return

( _int_ )


---

