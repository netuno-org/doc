---
id: xls
title: XLS - Excel
sidebar_label: XLS - Excel
---

## Introdução

O Netuno gera arquivos EXCEL compatível com o LibreOffice, OpenOffice, Microsoft Office, Google Drive, etc.

Através do recurso [XLS](../../../library/resources/xls) que permite uma abstração low-code do [Apache POI](https://poi.apache.org/) para as diversas linguagens de programação suportas pelo Netuno.

Podemos tanto gerar arquivos XLSX, XLS ou ODS.

A aplicação que vem com o Netuno denominada **demo** (aplicação de demonstração) contém bastantes exemplos das possíveis implementações de código em várias linguagens, incluindo a demonstração da exportação de planilhas através do serviço `export-excel` que se localiza em:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/export-excel.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/export-excel.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/export-excel.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/export-excel.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/export-excel.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Inicialização

Para iniciar o recurso XLS:

```javascript
const excel = _xls.create()
```

Cria o objeto que contém o contexto do novo arquivo que será construído, com uma folha de cálculos vazia.

## Formatação

A definição de estilos de formatação deve vir antes do definir o valor das células.

Para formatar datas:

```javascript
const styleDate = excel.cellStyleFormat("dd/mm/yy")
```

Para formatar horários:

```javascript
const styleTime = excel.cellStyleFormat("hh:mm:ss")
```

Para formatar datas com horários:

```javascript
const styleDateTime = excel.cellStyleFormat("dd/mm/yyyy hh:mm:ss")
```

Para formatar valores de dinheiro em **euro**:

```javascript
const styleMoneyEuro = excel.cellStyleFormat("€#,##0.00;\\-€#,##0.00")
```

Para formatar valores de dinheiro em **reais**:

```javascript
const styleMoneyReal = excel.cellStyleFormat("R$#,##0.00;\\-R$#,##0.00")
```

Para formatar valores em **porcentagem**:

```javascript
const stylePercentage = excel.cellStyleFormat("0.00%")
```

## Aparência

A definição de estilos aparência deve vir antes do definir o valor das células:

```javascript
const styleHeader = excel.cellStyle()
styleHeader.setFillPattern(_xls.fillPattern("solid-foreground"))
styleHeader.setFillBackgroundColor(_xls.color("black"))
styleHeader.setAlignment(_xls.horizontalAlignment("center"))
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCellStyle.html" target="_blank">Estilos no Apache POI</a>.

Definição do estilo de bordas:

```javascript
const styleData = excel.cellStyle()
styleData.setBorderBottom(_xls.borderStyle('thin'))
styleData.setBorderTop(_xls.borderStyle('thin'))
styleData.setBorderLeft(_xls.borderStyle('thin'))
styleData.setBorderRight(_xls.borderStyle('thin'))
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCellStyle.html" target="_blank">Estilos no Apache POI</a>.

Novo estilo de fonte do texto e associa ao estilo da célula:

```javascript
const fontTitle = excel.font()
fontTitle.setBold(true)
fontTitle.setFontHeightInPoints(14)
fontTitle.setColor(_xls.color('yellow'))
styleHeader.setFont(fontTitle)
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFFont.html" target="_blank">Fonte no Apache POI</a>.

## Imagem

Para inserir uma imagem na planilha que está no `storage/samples/export-excel/logo.png` da aplicação:

```javascript
excel.insertPicture(
    _storage.filesystem("server", "samples/export-excel", "logo.png"),
    1, // Número da Coluna
    1  // Número da Linha
).resize(2.3)
```

Para inserir uma imagem que está na aplicação em `public/images/logo.png`:

```javascript
excel.insertPicture(
    _app.file("public/images/logo.png"),
    10, // Número da Coluna
    1  // Número da Linha
).resize(1.5)
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/ss/usermodel/Picture.html" target="_blank">Imagem no Apache POI</a>.

## Mesclar Células

Para juntar células em uma região utilizamos o método `mergedRegion`.

Sendo que a ordem dos parâmetros são:

- Linha Inicial
- Coluna Inicial
- Linha Final
- Coluna Final

> As referências numéricas de posicionamento começam sempre em **zero**.

Então neste exemplo vai ser mesclada todas as células a partir da coluna 10 até a coluna 15 que estão na linha 3:

```
excel.mergedRegion(3, 10, 3, 15)
```

## Células

Para obter o objeto que representa uma célula:

```
// Obtém a célula que está na coluna B e na linha 2:
const celula = excel.cell(1, 1)
```

> As referências numéricas de posicionamento começam sempre em **zero**.

Exemplo de como apresentar em log a fórmula da célula:

```
// Loga a fórmula da linha 2 e coluna B.
_log.info(
    'Fórmula Célula B2: '+ excel.cell(1, 1).getCellFormula()
)
```

Exemplo de como obter o valor de texto de uma célula:

```
// Loga o valor de texto da célula da linha 2 e coluna B.
_log.info(
    'Valor Célula B2: '+ excel.cell(1, 1).getStringCellValue()
)
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCell.html" target="_blank">Célula no Apache POI</a>.

## Linhas

Para obter o objeto que representa uma linha:

```
// Obtem o objeto que representa a linha 2.
const linha = excel.row(1)
```

> As referências numéricas de posicionamento começam sempre em **zero**.

No exemplo acima caso a linha não exista será criada uma nova linha automaticamente.

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFRow.html" target="_blank">Linha no Apache POI</a>.

## Inserir Dados Tabelados

Podemos inserir uma tabela de dados utilizando o método `addDataTable`.

Sendo que os dois primeiros parâmetros servem para definir a posição onde os dados devem começar a ser inseridos, então são os números respectivos da linha e da coluna.

> Atenção que o posicionamento no código de linhas e colunas começam sempre a partir do **zero**.
>
> Ou seja, a Linha 1 é a posição 0 e a Coluna A também é a posição 0.

A seguir passamos uma lista de linhas, onde cada item vai conter outra lista para as colunas, aí adicionamos um mapa com o valor da célula.

Exemplo completo:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(
                    _val.map()
                        .set("value", "Nome")
                )
                .add(
                    _val.map()
                        .set("value", "Idade")
                )
        )
        .add(
            _val.list()
                .add(
                    _val.map()
                        .set("value", "Maria")
                )
                .add(
                    _val.map()
                        .set("value", 26)
                )
        )
)
```

### Aparência

No mapa das células podemos definir o estilo, utilizando por exemplo os estilos definidos na secção da aparência:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(
                    _val.map()
                        .set("value", "Nome")
                        .set("style", styleHeader)
                )
                .add(
                    _val.map()
                        .set("value", "Idade")
                        .set("style", styleHeader)
                )
        )
)
```

### Fórmulas

Para inserir fórmulas utilizamos a chave `formula` no mapa de definição da célula.

Neste exemplo será somado na última célula todos os valores das outras células:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set("formula", "SUM(B7:C8)")
                )
        )
)
```

Para obter a letra da coluna a partir de número da coluna pode ser utilizado o método `columnReference`, o que pode ajudar na definição das fórmulas. O mesmo método também pode ser utilizado para obter o número da coluna a partir da letra de referência, por exemplo:

```javascript
excel.addDataTable(
    6, _xls.columnReference('B'),
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set(
                        "formula",
                        `SUM(${_xls.columnReference(1)}7:${_xls.columnReference(2)}8)`
                )
            )
        )
)
```

## Planilhas

Para criar uma nova folha de cálculos (_sheet_) dentro do próprio documento.

```
const novaPlanilha = excel.createSheet('Nova Planilha')
```

> Nos métodos de manipulação de células, imagens e dados, basta adicionar no primeiro parâmetro a referência do objeto da planilha.

Exemplo de como inserir uma imagem na nova planilha:

```
excel.insertPicture(
    novaPlanilha,
    _app.file("public/images/logo.png"),
    10, // Número da Coluna
    1  // Número da Linha
).resize(1.5)
```

Exemplo de como inserir uma tabela de dados na nova planilha:

```
excel.addDataTable(
    novaPlanilha,
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set("formula", "SUM(B7:C8)")
                )
        )
)
```

### Ativar

Assim para evitar ter que indicar constantemente nos métodos qual é a planilha que deve ser processada, como nos exemplos acima, em alternativa é possível indicar qual é a planilha ativa.

> Todos os métodos de manipualação de células, imagens e dados, utilizam a planilha que está ativada quando não é indicado uma planilha específica.


```
excel.activeSheet(minhaPlanilha) // Objeto de referência da planilha.
excel.activeSheet(1) // Índice da planilha que será ativada.
```

### Recursos Úteis

Exemplos de outros métodos úteis na manipulação de planilhas.

Obter uma planilha pelo nome:

```javascript
// Obtém a planilha a partir do seu nome.
const minhaPlanilha = excel.getSheet('Nome da Planilha')
```

Obter uma planilha pelo seu índice:

```javascript
// Obtém a planilha a partir do respectivo número.
const minhaPlanilha = excel.getSheet(1)
```

Para obter o número total de planilhas:

```javascript
// Número total de planilhas.
const totalDePlanilhas = excel.getNumberOfSheets()
```

Para listar todas as planilhas existentes no documento.

```javascript
// Lista todas as planilhas.
const todasAsPlanilhas = excel.getAllSheets()
for (const sheet of todasAsPlanilhas) {
    ...
}
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFSheet.html" target="_blank">Planilha no Apache POI</a>.

## Gerar Arquivo

Envia o arquivo gerado como saída de dados (`output`) do serviço:

```javascript
excel.output('file.xls')
```

Para guardar o arquivo gerado na pasta `storage/filesystem` da aplicação:

```javascript
excel.save(_storage.filesystem('server', 'file.xls'))
```

E ainda para guardar o arquivo gerado na pasta `/tmp` a partir do sistema de arquivos do HD:

```javascript
excel.save(_os.file('/tmp/file.xls'))
```

## Editar Arquivo

Podemos editar arquivos abrindo eles, realizando as alterações necessárias e depois gerar o novo arquivo editado.

Segue abaixo alguns exemplos de como é possível abrir arquivos.

Abrir um arquivo na raíz da aplicação:

```javascript
const excel = _xls.open(_app.file('file.xls'))
```

Para abrir o arquivo gerado na pasta `storage/filesystem` da aplicação:

```javascript
const excel = _xls.open(_storage.filesystem('server', 'file.xls'))
```

E ainda para abrir o arquivo na pasta `/tmp` a partir do sistema de arquivos do HD:

```javascript
const excel = _xls.open(_os.file('/tmp/file.xls'))
```

Nos exemplos acima a constante `excel` vai conter o objeto de edição com o contexto do respectivo arquivo, assim é possível fazer qualquer tipo de manipulação.

Quando concluir as alterações realize a geração do novo arquivo.

> Não é possível alterar diretamente o mesmo arquivo aberto, sendo necessário gerar um novo arquivo com um caminho diferente.

Para alterar diretamente o mesmo arquivo, então pode ser feito utilizando o `inputStream`.

Segue um exemplo de como alterar o valor de uma célula:

```javascript
const fileInput = _app.file('file.xls').inputStream()
const excel = _xls.open(fileInput)

excel.setCellData(
    10, 1,
    _val.map()
        .set(
            "value",
            excel.getCellData(10, 1).getInt("value") + 10
        )
)

fileInput.close()
excel.save(_app.file('file.xls'))
```

## Ler Arquivo

A extração de dados de arquivos em Excel é feita com o método `read`.

```
const dados = _xls.read(_app.file())
```
