---
id: pdf
title: PDF
sidebar_label: PDF
---

## Introdução

O Netuno gera arquivos PDF com suporte a imagens, tabelas, fontes, e muito mais.

Através do recurso [PDF](../../../library/resources/pdf) que permite uma abstração low-code do [iTextPDF](https://itextpdf.com/) para as diversas linguagens de programação suportas pelo Netuno.

A aplicação que vem com o Netuno denominada **demo** (aplicação de demonstração) contém bastantes exemplos das possíveis implementações de código em várias linguagens, incluindo a demonstração da exportação para PDF através do serviço `export-pdf` que se localiza em:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/export-pdf.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/export-pdf.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/export-pdf.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/export-pdf.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/export-pdf.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Inicialização

Em primeiro lugar é preciso criar o objeto que vai conter o contexto do novo documento que está sendo criado, por padrão o tamanho das páginas é o A4.

Ao criar o documento é definido onde ele será gerado.

Se nada for definido, ele será gerado na saída de dados do serviço, por exemplo:

```javascript
const pdfDocument = _pdf.newDocument()
```

Se for gerar o documento em um novo arquivo, por exemplo:

```javascript
const pdfDocument = _pdf.newDocument(_os.file('/tmp/file.pdf'))
```

Ou ainda no `storage` da aplicação:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf'))
```

> Por padrão o documento é criado com o formato de página **A4**.

### Formato de Página

Para customizar o formato da página basta idicar na criação do documento.

Cria um novo documento para a saída de dados do serviço com páginas no formato **carta**:

```javascript
const pdfDocument = _pdf.newDocument(_pdf.pageSize("letter"))
```

Cria um novo documento para um arquivo na raíz da aplicação com o formato de página **B3**:

```javascript
const pdfDocument = _pdf.newDocument(_app.file('file.pdf'), _pdf.pageSize("B3"))
```

Cria um novo documento no `storage` da aplicação com o formato de página **legal**:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf'), _pdf.pageSize("legal"))
```

> Veja a documentação sobre a [definição do tamanho das páginas](../../../library/resources/pdf/#pagesize).

Os documentos PDF podem ser criados com a definição do tamanho da página personalizado, para isso utilize o `pageSize` passando o valor da largura e altura da página, por exemplo:

```javascript
_pdf.pageSize(50, 30)
```

### Editar

É possível editar um documento PDF já existente.



## Quebra de Página

Para criar uma nova página é utilizado o `areaBreak`:

```javascript
pdfDocument.add(
    _pdf.areaBreak()
)
```

## Parágrafo

```
pdfDocument.add(
    _pdf.paragraph("\n\nTable with flexible columns:\n")
        .setFontSize(15)
)
```

Para adicionar um parágrafo em uma posição fixa:

```
pdfDocument.add(
    _pdf.paragraph("Helvetica Oblique!")
        .setFixedPosition(100, 500, 200)
        .setFontSize(15)
)
```

Sendo que acima, no método `setFixedPosition`, o primeiro parâmetro é a posição X (`100`), já o segundo parâmetro é a posição Y (`500`), e o terceiro parâmetro é a largura (`200`).

**Atenção:** se o Y for definido com o valor `0` quer dizer que fica no fundo da página, então para subir é preciso aumentar o valor do Y, quanto maior for o valor do Y mais no topo aparecerá, mas se for demasiado alto para além do comprimento da página então não será visível.

> Documentação com todos os métodos do objeto de [Parágrafo do iText](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/layout/element/Paragraph.html).

## Fonte

Para definir uma fonte nativa podemos fazer da seguinte forma:

```
const helvetica = _pdf.font("helvetica")
const helveticaBold = _pdf.font("helvetica-bold")
const helveticaBoldOblique = _pdf.font("helvetica-boldoblique")
const helveticaOblique = _pdf.font("helvetica-oblique")
```

Já para definir uma fonte customizada à medida, podemos utilizar `storage`:

```
const viksiScript = _pdf.font(_storage.filesystem("server", "samples/export-pdf", "viksi-script.ttf"), true)
```

Também podemos utilizar um arquivo dentro da aplicação, como neste exemplo demonstra que a fonte está dentro da pasta `fonts` na raíz da aplicação:

```
const roboto = _pdf.font(_app.file("fonts/roboto.ttf"), true)
```

Ou ainda utilizar um arquivo em qualquer caminho do sistema, então neste exemplo a fonte está dentro da pasta `fonts` que está dentro da pasta de arquivos temporários do sistema:

```
const roboto = _pdf.font(_os.file("/tmp/fonts/roboto.ttf"), true)
```

> Documentação com todos os métodos do objeto de [Fonte do iText](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/kernel/font/PdfFont.html).

Para utilizar a fonte nos textos deve ser passado a constante da fonte para o parágrafo, desta forma:

```
pdfDocument.add(
    _pdf.paragraph("\n\nUtilizando a fonte em negrito.\n")
        .setFont(helveticaBold)
        .setFontSize(15)
)
```

## Imagem

A inserção de imagens no documento PDF gerado programaticamente é feita desta forma:

```
pdfDocument.add(
    _pdf.image(_storage.filesystem("server", "samples/export-pdf", "logo.png"))
        .scaleAbsolute(120, 36)
)
```

Repare que o método `scaleAbsolute` é muito útil para redimencionar e ajustar o tamanho da imagem.

Em alternativa podemos utilizar um arquivo dentro da aplicação, como neste exemplo:

```
const imageLogo = _pdf.image(_app.file("public/images/logo.png")
```

Ou ainda utilizar um arquivo em qualquer caminho do sistema, como neste exemplo:

```
const imageLogo = _pdf.image(_os.file("/tmp/images/pdf-logo.png")
```

Para adicionar uma imagem em uma posição fixa:

```
pdfDocument.add(
    imageLogo
        .scaleAbsolute(120, 36)
        .setFixedPosition(100, 500)
)
```

Sendo que acima, no método `setFixedPosition`, o primeiro parâmetro é a posição X (`100`), já o segundo parâmetro é a posição Y (`500`).

**Atenção:** se o Y for definido com o valor `0` quer dizer que fica no fundo da página, então para subir é preciso aumentar o valor do Y, quanto maior for o valor do Y mais no topo aparecerá, mas se for demasiado alto para além do comprimento da página então não será visível.

> Documentação com todos os métodos do objeto de [Imagem do iText](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/layout/element/Image.html).

## Fechar e Salvar o Documento

O documento só é totalmente guardado ou gerado, apenas quando o método `close` for chamado, da seginte forma:

```javascript
pdfDocument.close()
```

Onde o documento é gerado é definido na inicialização, portanto é na inicialização do documento que definimos onde será gerado o documento final, se será na saída de dados do serviço (`output`) ou em arquivo.

## Extrair Dados

Para ler um documento PDF podemos utilizar o 


## Converter

É possível converter programaticamente o PDF para texto ou até mesmo para HTML.

### Texto


### HTML

