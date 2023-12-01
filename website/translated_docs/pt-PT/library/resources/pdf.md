---
id: pdf
title: PDF
sidebar_label: PDF
---

Recurso de exportação de ficheiros PDF.
Este recurso permite criar e exportar um ficheiro PDF, utiliza a biblioteca iText para gerar os PDFs

---

## areaBreak

---

#### _pdf.areaBreak() : _AreaBreak_
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Retorno

( _AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### _pdf.areaBreak(nPaginas: _PageSize_) : _AreaBreak_
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nPaginas | _PageSize_ | Tamanho do novo conteúdo. |

##### Retorno

( _AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### _pdf.areaBreak(tipo: string) : _AreaBreak_
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Tipo da nova área. |

##### Retorno

( _AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

## border

---

#### _pdf.border(moldura: string) : _Border_
##### Descrição

Cria um tipo de moldura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |

##### Retorno

( _Border_ )

Retorna uma moldura do tipo inserido.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _double_, arg3: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| arg3 | _double_ |   |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _double_, arg3: _float_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| arg3 | _float_ |   |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _double_, arg3: _int_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| arg3 | _int_ |   |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _float_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _float_, arg3: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| arg3 | _double_ |   |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _float_, opacidade: _float_) : _Border_
##### Descrição

Cria uma border personalizada com tipo de moldura, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna a moldura personalizada criada.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _float_, opacidade: _int_) : _Border_
##### Descrição

Cria um tipo de moldura, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, cor, largura e opacidade inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _int_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _int_, arg3: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| arg3 | _double_ |   |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _int_, arg3: _float_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| arg3 | _float_ |   |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _Color_, largura: _int_, arg3: _int_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| arg3 | _int_ |   |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, largura: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border(moldura: string, largura: _double_, opacidade: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _double_, opacidade: _float_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _double_, opacidade: _int_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _float_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border(moldura: string, largura: _float_, opacidade: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _float_, opacidade: _float_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _float_, opacidade: _int_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |

##### Retorno

( _Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_, opacidade: _double_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_, opacidade: _float_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_, opacidade: _int_) : _Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

## border3D

---

#### _pdf.border3D(moldura: string) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _double_, arg3: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| arg3 | _double_ |   |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _double_, arg3: _float_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| arg3 | _float_ |   |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _double_, arg3: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| arg3 | _int_ |   |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _float_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _float_, arg3: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| arg3 | _double_ |   |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _float_, opacidade: _float_) : _Border3D_
##### Descrição

Cria uma border 3D personalizada com tipo de moldura,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna a moldura 3D personalizada criada.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _float_, opacidade: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, cor, largura e opacidade inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _int_, arg3: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| arg3 | _double_ |   |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _int_, arg3: _float_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| arg3 | _float_ |   |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _Color_, largura: _int_, opacidade: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D,cor, largura e opacidade inseridas.

---

#### _pdf.border3D(moldura: string, largura: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _Border3D_ )

Retorna uma moldura 3D do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _double_, opacidade: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _double_, opacidade: _float_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _double_, opacidade: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _Border3D_ )

Retorna uma moldura 3D do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_, opacidade: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_, opacidade: _float_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_, opacidade: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, arg1: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| arg1 | _int_ |   |

##### Retorno

( _Border3D_ )

Retorna uma moldura 3D do tipo inserido e de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _int_, opacidade: _double_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _int_, opacidade: _float_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _int_, opacidade: _int_) : _Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

## canvas

---

#### _pdf.canvas(arg0: _PdfDocument_, arg1: _int_) : _PdfCanvas_
##### Descrição

Cria uma área de texto retangular.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _PdfDocument_ |   |
| arg1 | _int_ |   |

##### Retorno

( _PdfCanvas_ )


---

#### _pdf.canvas(arg0: _PdfPage_) : _PdfCanvas_
##### Descrição

Cria uma área de texto retangular.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _PdfPage_ |   |

##### Retorno

( _PdfCanvas_ )


---

## cell

---

#### _pdf.cell() : _Cell_
##### Descrição

Cria uma célula de tabela.

##### Retorno

( _Cell_ )

Retorna a célula criada.

---

#### _pdf.cell(agregVertical: _int_, agregHorizontal: _int_) : _Cell_
##### Descrição

Cria uma célula de tabela, com agregação vertical ou horizontal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| agregVertical | _int_ | Número de linhas agregadas. |
| agregHorizontal | _int_ | Número de colunas agregadas. |

##### Retorno

( _Cell_ )

Retorna a célula criada.

---

## color

---

#### _pdf.color(arg0: string) : _Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Color_ )


---

## colorCMYK

---

#### _pdf.colorCMYK(arg0: _double_, arg1: _double_, arg2: _double_, arg3: _double_) : _DeviceCmyk_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _double_ |   |
| arg1 | _double_ |   |
| arg2 | _double_ |   |
| arg3 | _double_ |   |

##### Retorno

( _DeviceCmyk_ )


---

#### _pdf.colorCMYK(arg0: _float_, arg1: _float_, arg2: _float_, arg3: _float_) : _DeviceCmyk_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |
| arg2 | _float_ |   |
| arg3 | _float_ |   |

##### Retorno

( _DeviceCmyk_ )


---

#### _pdf.colorCMYK(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_) : _DeviceCmyk_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |

##### Retorno

( _DeviceCmyk_ )


---

## colorGray

---

#### _pdf.colorGray(arg0: _double_) : _DeviceGray_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _double_ |   |

##### Retorno

( _DeviceGray_ )


---

#### _pdf.colorGray(arg0: _float_) : _DeviceGray_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |

##### Retorno

( _DeviceGray_ )


---

#### _pdf.colorGray(arg0: _int_) : _DeviceGray_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _DeviceGray_ )


---

## colorRGB

---

#### _pdf.colorRGB(arg0: _double_, arg1: _double_, arg2: _double_) : _DeviceRgb_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _double_ |   |
| arg1 | _double_ |   |
| arg2 | _double_ |   |

##### Retorno

( _DeviceRgb_ )


---

#### _pdf.colorRGB(arg0: _float_, arg1: _float_, arg2: _float_) : _DeviceRgb_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |
| arg2 | _float_ |   |

##### Retorno

( _DeviceRgb_ )


---

#### _pdf.colorRGB(arg0: _int_, arg1: _int_, arg2: _int_) : _DeviceRgb_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _DeviceRgb_ )


---

## extract

---

#### _pdf.extract(armazenamento: _InputStream_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _InputStream_ | Caminho do armazenamento. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo extraido.

---

#### _pdf.extract(armazenamento: _[File](../../objects/File)_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo extraido.

---

#### _pdf.extract(conteúdo: _[InputStream](../../objects/InputStream)_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[InputStream](../../objects/InputStream)_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteudo extraído.

---

#### _pdf.extract(armazenamento: _Storage_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _Storage_ | Caminho do armazenamento. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo extraido.

---

## font

---

#### _pdf.font(armazenamento: string) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | string | Caminho do armazenamento. |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_, codificação: _boolean_) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |
| codificação | _boolean_ | Codificação. |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_, codificação: string) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |
| codificação | string | Codificação. |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_, codificação: string, arg2: _boolean_) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |
| codificação | string | Codificação. |
| arg2 | _boolean_ |   |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _Storage_) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _Storage_ | Caminho do armazenamento. |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _Storage_, codificação: _boolean_) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _Storage_ | Caminho do armazenamento. |
| codificação | _boolean_ | Codificação. |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _Storage_, codificação: string) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _Storage_ | Caminho do armazenamento. |
| codificação | string | Codificação. |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _Storage_, codificação: string, arg2: _boolean_) : _PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _Storage_ | Caminho do armazenamento. |
| codificação | string | Codificação. |
| arg2 | _boolean_ |   |

##### Retorno

( _PdfFont_ )

Retorna o tipo de letra.

---

## getDocument

---

#### _pdf.getDocument() : _Document_
##### Descrição

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Retorno

( _Document_ )


---

## getPdfDocument

---

#### _pdf.getPdfDocument() : _PdfDocument_
##### Descrição

Obtém o objecto PdfDocument do iText para a construção do documento PDF.

##### Retorno

( _PdfDocument_ )


---

## getPdfReader

---

#### _pdf.getPdfReader() : _PdfReader_
##### Descrição

Obtém o objecto PdfReader do iText para a leitura do documento PDF.

##### Retorno

( _PdfReader_ )


---

## getPdfWriter

---

#### _pdf.getPdfWriter() : _PdfWriter_
##### Descrição

Obtém o objecto PdfWriter do iText para a escrita dos bytes do arquivo PDF.

##### Retorno

( _PdfWriter_ )


---

## image

---

#### _pdf.image(arg0: _[File](../../objects/File)_) : _Image_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |

##### Retorno

( _Image_ )


---

#### _pdf.image(arg0: _Storage_) : _Image_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |

##### Retorno

( _Image_ )


---

## init

---

#### _pdf.init() : _PDF_
##### Descrição

Cria um novo objeto de recurso para a construção de PDFs.

##### Como Usar

```javascript
const pdf = _pdf.init();
```

##### Retorno

( _PDF_ )


---

## line

---

#### _pdf.line(tipo: string, cor: _Color_, largura: _double_) : _ILineDrawer_
##### Descrição

Cria uma linha com tipo,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Tipo da linha. |
| cor | _Color_ | Cor da linha. |
| largura | _double_ | Largura da linha. |

##### Retorno

( _ILineDrawer_ )

Retorna a linha personalizada criada.

---

#### _pdf.line(tipo: string, cor: _Color_, largura: _float_) : _ILineDrawer_
##### Descrição

Cria uma linha personalizada com tipo de moldura,cor, largura e definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Tipo da linha. |
| cor | _Color_ | Cor da linha. |
| largura | _float_ | Largura da linha. |

##### Retorno

( _ILineDrawer_ )

Retorna a linha personalidade criada.

---

#### _pdf.line(linha: string, cor: _Color_, largura: _int_) : _ILineDrawer_
##### Descrição

Cria um tipo de linha com cor e largura definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | string | Tipo de linha. |
| cor | _Color_ | Cor da linha. |
| largura | _int_ | Largura da linha. |

##### Retorno

( _ILineDrawer_ )

Retorna tipo de linha, cor e largura inseridas.

---

## newDocument

---

#### _pdf.newDocument() : _Document_
##### Descrição

Cria um novo documento.

##### Retorno

( _Document_ )


---

#### _pdf.newDocument(nPaginas: _PageSize_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inserida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nPaginas | _PageSize_ | Número de páginas. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(armazenamento: _OutputStream_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _OutputStream_ | Caminho do ficheiro. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(armazenamento: _OutputStream_, nPaginas: _PageSize_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _OutputStream_ | Caminho do ficheiro. |
| nPaginas | _PageSize_ | Número de páginas. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(armazenamento: _[File](../../objects/File)_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do ficheiro. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(armazenamento: _[File](../../objects/File)_, nPaginas: _PageSize_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do ficheiro. |
| nPaginas | _PageSize_ | Número de páginas. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(armazenamento: _[OutputStream](../../objects/OutputStream)_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[OutputStream](../../objects/OutputStream)_ | Caminho do ficheiro. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(armazenamento: _[OutputStream](../../objects/OutputStream)_, nPaginas: _PageSize_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[OutputStream](../../objects/OutputStream)_ | Caminho do ficheiro. |
| nPaginas | _PageSize_ | Número de páginas. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(arg0: _Storage_) : _Document_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |

##### Retorno

( _Document_ )


---

#### _pdf.newDocument(armazenamento: _Storage_, nPaginas: _PageSize_) : _Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _Storage_ | Caminho do ficheiro. |
| nPaginas | _PageSize_ | Número de páginas. |

##### Retorno

( _Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

## newPdfDocument

---

#### _pdf.newPdfDocument() : _PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Retorno

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _OutputStream_) : _PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _OutputStream_ | Caminho do ficheiro. |

##### Retorno

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _[File](../../objects/File)_) : _PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do ficheiro. |

##### Retorno

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _[OutputStream](../../objects/OutputStream)_) : _PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[OutputStream](../../objects/OutputStream)_ | Caminho do ficheiro. |

##### Retorno

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _Storage_) : _PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _Storage_ | Caminho do ficheiro. |

##### Retorno

( _PdfDocument_ )


---

## openPdfDocument

---

#### _pdf.openPdfDocument(caminho: string) : _PdfDocument_
##### Descrição

Abre o documento PDF referente ao caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do ficheiro. |

##### Retorno

( _PdfDocument_ )

Retorna o documento PDF aberto.

---

## pageSize

---

#### _pdf.pageSize(arg0: _float_, arg1: _float_) : _PageSize_
##### Descrição

Obtém a definição do tamanho da página atráves da largura e altura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |

##### Retorno

( _PageSize_ )


---

#### _pdf.pageSize(arg0: string) : _PageSize_
##### Descrição

Obtém a definição do tamanho de página, suporta:<br><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _PageSize_ )


---

## paragraph

---

#### _pdf.paragraph(arg0: string) : _Paragraph_
##### Descrição

Cria um parágrafo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Paragraph_ )


---

## setDocument

---

#### _pdf.setDocument(arg0: _Document_) : _PDF_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Document_ |   |

##### Retorno

( _PDF_ )


---

## table

---

#### _pdf.table(largura: _double[]_) : _Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _double[]_ | Largura das colunas da tabela. |

##### Retorno

( _Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _double[]_, colunaLarga: _boolean_) : _Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _double[]_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _float[]_) : _Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _float[]_ | Largura das colunas da tabela. |

##### Retorno

( _Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _float[]_, colunaLarga: _boolean_) : _Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _float[]_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _int[]_) : _Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _int[]_ | Largura das colunas da tabela. |

##### Retorno

( _Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _int[]_, colunaLarga: _boolean_) : _Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _int[]_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _Table_ )

Retorna a tabela criada.

---

#### _pdf.table(colunas: _int_) : _Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| colunas | _int_ | Número de colunas. |

##### Retorno

( _Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _List_) : _Table_
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _List_ | Largura das colunas da tabela. |

##### Retorno

( _Table_ )

Retorna uma tabela com colunas da largura inseridas.

---

#### _pdf.table(largura: _List_, colunaLarga: _boolean_) : _Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _List_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _[Values](../../objects/Values)_) : _Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _[Values](../../objects/Values)_ | Largura das colunas da tabela. |

##### Retorno

( _Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _[Values](../../objects/Values)_, colunaLarga: _boolean_) : _Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _[Values](../../objects/Values)_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _Table_ )

Retorna a tabela criada.

---

## text

---

#### _pdf.text(conteúdo: string) : _Text_
##### Descrição

Cria um novo texto com o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser criado. |

##### Retorno

( _Text_ )

Retorna o conteudo do texto.

---

## toHTML

---

#### _pdf.toHTML(conteúdo: _InputStream_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _InputStream_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: _[File](../../objects/File)_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[File](../../objects/File)_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: _[InputStream](../../objects/InputStream)_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[InputStream](../../objects/InputStream)_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: _Storage_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _Storage_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

## toText

---

#### _pdf.toText(conteúdo: _InputStream_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _InputStream_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: _[File](../../objects/File)_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[File](../../objects/File)_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: _[InputStream](../../objects/InputStream)_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[InputStream](../../objects/InputStream)_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: _Storage_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _Storage_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

