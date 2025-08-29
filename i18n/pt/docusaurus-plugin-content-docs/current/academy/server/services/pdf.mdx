---
id: pdf
title: PDF
sidebar_label: PDF
---

## Introdução

O Netuno gera arquivos PDF com suporte a imagens, tabelas, fontes, e muito mais.

Através do recurso [PDF](/docs/library/resources/pdf) que permite uma abstração low-code do [iTextPDF](https://itextpdf.com/) para as diversas linguagens de programação suportadas pelo Netuno.

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

Para gerar um arquivo PDF dentro da pasta `docs` da aplicação, pode ser feito assim:

```javascript
const pdfDocument = _pdf.newDocument(_app.file('docs/file.pdf').output())
```

Se for gerar o documento em um novo arquivo fora da Aplicação, por exemplo:

```javascript
const pdfDocument = _pdf.newDocument(_os.file('/tmp/file.pdf').output())
```

Ou ainda no `storage` da aplicação:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf').output())
```

> Por padrão o documento é criado com o formato de página **A4**.

### Formato de Página

Para customizar o formato da página basta indicar na criação do documento.

Cria um novo documento para a saída de dados do serviço com páginas no formato **carta**:

```javascript
const pdfDocument = _pdf.newDocument(_pdf.pageSize("letter"))
```

Cria um novo documento para um arquivo na raíz da aplicação com o formato de página **B3**:

```javascript
const pdfDocument = _pdf.newDocument(_app.file('file.pdf').output(), _pdf.pageSize("B3"))
```

Cria um novo documento no `storage` da aplicação com o formato de página **legal**:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf').output(), _pdf.pageSize("legal"))
```

> Veja a documentação sobre a [definição do tamanho das páginas](/docs/library/resources/pdf/#pagesize).

Os documentos PDF podem ser criados com a definição do tamanho da página personalizado, para isso utilize o `pageSize` passando o valor da largura e altura da página, por exemplo:

```javascript
_pdf.pageSize(50, 30)
```

## Cabeçalho HTTP

Para criar um serviço na API REST que devolve um arquivo PDF como saída de dados, é preciso adicionar no header o parâmetro de `Content-Type` do protocolo HTTP.

Exemplo de como definir o conteúdo como PDF:

```javascript
_header.contentType("pdf")
```

O código `pdf` é uma abreviação para:

```javascript
_header.contentType("application/pdf")
```

## Quebra de Página

Para criar uma nova página é utilizado o `areaBreak`:

```javascript
pdfDocument.add(
    _pdf.areaBreak()
)
```

## Parágrafo

Adiciona um novo parágrafo no documento:

```javascript
pdfDocument.add(
    _pdf.paragraph("Meu texto aqui:")
        .setFontSize(15)
)
```

Para adicionar um parágrafo em uma posição fixa:

```javascript
pdfDocument.add(
    _pdf.paragraph("Helvetica Oblique!")
        .setFixedPosition(100, 500, 200)
        .setFontSize(15)
)
```

No código acima, no método `setFixedPosition`, o primeiro parâmetro é a posição X (`100`), já o segundo parâmetro é a posição Y (`500`), e o terceiro parâmetro é a largura (`200`).

**Atenção:** se o Y for definido com o valor `0` quer dizer que fica no fundo da página, então para subir é preciso aumentar o valor do Y, quanto maior for o valor do Y mais no topo aparecerá, mas se for demasiado alto para além do comprimento da página então não será visível.

> Documentação com todos os métodos do objeto de [Parágrafo do iText](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/layout/element/Paragraph.html).

## Fonte

Para definir uma fonte nativa podemos fazer da seguinte forma:

```javascript
const helvetica = _pdf.font("helvetica")
const helveticaBold = _pdf.font("helvetica-bold")
const helveticaBoldOblique = _pdf.font("helvetica-boldoblique")
const helveticaOblique = _pdf.font("helvetica-oblique")
```

Já para definir uma fonte customizada à medida, podemos utilizar `storage`:

```javascript
const viksiScript = _pdf.font(_storage.filesystem("server", "samples/export-pdf", "viksi-script.ttf"), true)
```

Também podemos utilizar um arquivo dentro da aplicação, como neste exemplo demonstra que a fonte está dentro da pasta `fonts` na raíz da aplicação:

```javascript
const roboto = _pdf.font(_app.file("fonts/roboto.ttf"), true)
```

Ou ainda utilizar um arquivo em qualquer caminho do sistema, então neste exemplo a fonte está dentro da pasta `fonts` que está dentro da pasta de arquivos temporários do sistema:

```javascript
const roboto = _pdf.font(_os.file("/tmp/fonts/roboto.ttf"), true)
```

> Documentação com todos os métodos do objeto de [Fonte do iText](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/kernel/font/PdfFont.html).

Para utilizar a fonte nos textos deve ser passado a constante da fonte para o parágrafo, desta forma:

```javascript
pdfDocument.add(
    _pdf.paragraph("Utilizando a fonte em negrito.")
        .setFont(helveticaBold)
        .setFontSize(15)
)
```

## Imagem

A inserção de imagens no documento PDF gerado programaticamente é feita desta forma:

```javascript
pdfDocument.add(
    _pdf.image(_storage.filesystem("server", "samples/export-pdf", "logo.png"))
        .scaleAbsolute(120, 36)
)
```

Repare que o método `scaleAbsolute` é muito útil para redimensionar e ajustar o tamanho da imagem.

Em alternativa podemos utilizar um arquivo dentro da aplicação, como neste exemplo:

```javascript
const imageLogo = _pdf.image(_app.file("public/images/logo.png")
```

Ou ainda utilizar um arquivo em qualquer caminho do sistema, como neste exemplo:

```javascript
const imageLogo = _pdf.image(_os.file("/tmp/images/pdf-logo.png")
```

Para adicionar uma imagem em uma posição fixa:

```javascript
pdfDocument.add(
    imageLogo
        .scaleAbsolute(120, 36)
        .setFixedPosition(100, 500)
)
```

Sendo que acima, no método `setFixedPosition`, o primeiro parâmetro é a posição X (`100`), já o segundo parâmetro é a posição Y (`500`).

**Atenção:** se o Y for definido com o valor `0` quer dizer que fica no fundo da página, então para subir é preciso aumentar o valor do Y, quanto maior for o valor do Y mais no topo aparecerá, mas se for demasiado alto para além do comprimento da página então não será visível.

> Documentação com todos os métodos do objeto de [Imagem do iText](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/layout/element/Image.html).

## Tabela

É possível criar tabelas o que permite apresentar um conjunto de dados de forma mais legível.

O número de colunas da tabela é definido com o parâmetro: `_pdf.table(numeroColunas)`

No exemplo abaixo o `numeroColunas` é o número `1`, ou seja uma coluna.

Como adicionamos duas células na tabela, então a segunda célula vai para a linha seguinte.

Repare:

```javascript
pdfDocument.add(
  _pdf.table(1) // Número de colunas, neste caso apenas 1.
    .addCell(
      _pdf.cell()
        .add(
          _pdf.paragraph("Pessoa")
            .setFont(helvetica)
            .setFontSize(10)
        )
        .setBorder(_pdf.border("solid", 2))
        .setBackgroundColor(_pdf.colorRGB(1, 0, 0))
    )
    .addCell(
      _pdf.cell()
        .add(
          _pdf.paragraph("Nicole")
            .setFont(helvetica)
            .setFontSize(10)
        )
        .setBackgroundColor(_pdf.colorGray(0.5))
    )
)
```

Com o método `addCell` permite inserir a definição das células com o seu respectivo conteúdo.

> Documentação com todos os métodos do objeto de [Célula do iText](https://api.itextpdf.com/iText/java//8.0.3/com/itextpdf/layout/element/Cell.html).

## Fechar e Salvar o Documento

O documento só é totalmente guardado ou gerado, apenas quando o método `close` for chamado, da seguinte forma:

```javascript
pdfDocument.close()
```

Onde o documento é gerado é definido na inicialização, portanto é na inicialização do documento que definimos onde será gerado o documento final, se será na saída de dados do serviço (`output`) ou em arquivo.

## Editar Arquivo

É possível editar um documento PDF já existente, por exemplo:

```javascript
const pdfDocument = _pdf.openDocument(_app.file('file.pdf'))
```

O documento final gerado será enviado na saída de dados do serviço.

> É muito útil para utilizar um PDF como base, como se fosse um template.

Exemplo para editar um documento no `storage` da aplicação:


```javascript
const pdfDocument = _pdf.openDocument(_storage.filesystem('server', 'file.pdf'))
```

Utiliza um documento como base mas salva as alterações em um novo arquivo PDF:

```javascript
const pdfDocument = _pdf.openDocument(
    _app.file('documento-base.pdf'),
    _app.file('documento-final.pdf')
)
```

Exemplo usando como base um documento no `storage` mas salva em outro:

```javascript
const pdfDocument = _pdf.openDocument(
    _storage.filesystem('server', 'contrato-base.pdf'),
    _storage.filesystem('server', 'contrato-final.pdf')
)
```

Com o documento carregado podemos acrescentar conteúdos, e ao fechar com o método `close` no fim é então gerado o documento final com o novo conteúdo adicionado programaticamente.

Exemplo de serviço que utiliza um PDF existente como template para gerar uma saída de arquivo PDF com conteúdo dinâmico adicionado:

```javascript
_header.contentType("pdf")

const pdfDocument = _pdf.openDocument(_app.file('template-1.pdf'))

pdfDocument.add(
    _pdf.paragraph("Meu conteúdo dinâmico.")
        .setFixedPosition(37, 730, 100)
        .setFontSize(15)
)

pdfDocument.close()
```

## Ler Arquivo

Para ler um documento PDF, extraindo as informações de texto.

Utilizamos o método `extract`, que obtém todos os dados do arquivo PDF em um objeto JSON.

```javascript
const pdfData = _pdf.extract(_app.file('file-1.pdf'))

_out.json(pdfData)
```

O JSON retornado tem a chave `content` com todo o conteúdo de texto do arquivo PDF, e tem a chave `metadata` com as diversas propriedades do arquivo PDF.

Aqui tem um exemplo do JSON retornado pelo `extract`:

```json
{
  "content": "Todo conteúdo em texto do arquivo PDF vem aqui...",
  "metadata":{
    "Content-Type":"application/pdf",
    "dc:format":"application/pdf; version=1.4",
    "dc:title":"Linux 1",
    "pdf:PDFVersion":"1.4",
    "pdf:charsPerPage":"580",
    "pdf:containsDamagedFont":"false",
    "pdf:containsNonEmbeddedFont":"false",
    "pdf:docinfo:producer":"Skia/PDF m125 Google Docs Renderer",
    "pdf:docinfo:title":"File 1",
    "pdf:encrypted":"false",
    "xmpTPg:NPages":"3",
    ...
  }
}
```

Existem muitos outros dados que são obtidos no `metadata` mas que foram omitidos nos `...` para o exemplo não ficar demasiado longo.

## Converter

É possível converter programaticamente o PDF para texto ou até mesmo para HTML.

### Texto

Podemos extrair todo o conteúdo do arquivo PDF em texto corrido utilizando o método:

```javascript
_pdf.toText(...)
```

Exemplo de como utilizá-lo para ler um arquivo na raíz da aplicação:

```javascript
_out.print(_pdf.toText(_app.file('meu-documento.pdf')))
```

Ou ainda utilizando um arquivo no `storage` da aplicação:

```javascript
_out.print(_pdf.toText(_storage.filesystem('server', 'meu-documento.pdf')))
```


### HTML


Podemos extrair todo o conteúdo do arquivo PDF em HTML utilizando o método:

```javascript
_pdf.toHTML(...)
```

Exemplo de como utilizá-lo para ler um arquivo na raíz da aplicação:

```javascript
_out.print(_pdf.toHTML(_app.file('meu-documento.pdf')))
```

Ou ainda utilizando um arquivo no `storage` da aplicação:

```javascript
_out.print(_pdf.toHTML(_storage.filesystem('server', 'meu-documento.pdf')))
```

## Videos

Segue alguns videos exemplificativos de como realizar a geração de arquivos PDF programaticamente:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/OyUzHr9hi0c?si=eTecDP0i0P_9rhG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

