---
id: out
title: Out
sidebar_label: Out
---

Recurso de resposta aos pedidos HTTP.

---

## close

---

#### _out.close() : [Out](/docs/library/resources/out)
##### Descrição

Encerra o envio de dados da resposta HTTP.

##### Retorno

( _[Out](/docs/library/resources/out)_ )


---

## closed

---

#### _out.closed() : boolean
##### Descrição

Verifica se já foi encerrada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se fechou a resposta do pedido HTTP.

---

## copy

---

#### _out.copy(in: [InputStream](/docs/library/objects/InputStream)) : [Out](/docs/library/resources/out)
##### Descrição

Copia todos os dados de um InputStream para a saída padrão do Proteu (OutputStream), começando pelo início do fluxo de entrada.

É um método utilitário simples, ideal para transferências completas de conteúdo binário (como ficheiros, imagens, etc.), sem a necessidade de manipular posições ou limites.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ | Fluxo de entrada a partir do qual os dados serão lidos e transferidos para a saída. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(in: [InputStream](/docs/library/objects/InputStream), skip: long) : [Out](/docs/library/resources/out)
##### Descrição

Copia dados de um InputStream para a saída atual (OutputStream do Proteu), opcionalmente ignorando os primeiros bytes especificados por skip.

Este método é uma versão simplificada do método copy com tamanho limitado, útil para transferir fluxos de dados inteiros, começando a partir de uma posição específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |  O fluxo de entrada a partir do qual os dados serão lidos. |
| **skip** | _long_ | Número de bytes a ignorar antes de iniciar a cópia. Use 0 para começar do início. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(in: [InputStream](/docs/library/objects/InputStream), skip: long, size: long) : [Out](/docs/library/resources/out)
##### Descrição

Copia dados de um InputStream para a saída atual (OutputStream associado a Out), com suporte opcional para ignorar bytes e limitar o tamanho total copiado.

Este método é útil para transferências eficientes de fluxos binários, com controlo preciso sobre o ponto inicial e o volume de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ | O fluxo de entrada a partir do qual os dados serão lidos. |
| **skip** | _long_ | Número de bytes a ignorar antes de iniciar a cópia (use 0 para não ignorar nenhum). |
| **size** | _long_ | Número máximo de bytes a copiar (use -1 para copiar até ao final do fluxo). |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(file: [File](/docs/library/objects/File)) : [Out](/docs/library/resources/out)
##### Descrição

Copia todo o conteúdo de um ficheiro para a saída de resposta (OutputStream).

Este método é uma conveniência que encapsula a criação de um InputStream a partir de um ficheiro e delega a operação de cópia ao método copy(InputStream in).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | O ficheiro do qual os dados serão copiados. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(file: [File](/docs/library/objects/File), skip: long) : [Out](/docs/library/resources/out)
##### Descrição

Copia os dados de um arquivo para a saída (OutputStream) da resposta, ignorando uma quantidade inicial de bytes.

Este método é uma conveniência que abstrai a criação de um InputStream a partir de um File e delega a lógica para o método copy(InputStream in, long skip).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | O ficheiro do qual os dados serão copiados. |
| **skip** | _long_ | Número de bytes a serem ignorados no início do ficheiro. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(file: [File](/docs/library/objects/File), skip: long, size: long) : [Out](/docs/library/resources/out)
##### Descrição

Copia um intervalo de dados de um ficheiro para a saída (OutputStream) da instância Proteu.

Este método é uma conveniência que encapsula a abertura do InputStream do ficheiro e delega a operação ao método copy(InputStream, long, long).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ | O ficheiro do qual os dados serão copiados. |
| **skip** | _long_ | Número de bytes a serem ignorados no início do ficheiro. |
| **size** | _long_ | Número de bytes a serem copiados após a ignorar. Se o tamanho for negativo (< 0), todo o conteúdo restante será copiado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(storage: [Storage](/docs/library/resources/storage)) : [Out](/docs/library/resources/out)
##### Descrição

Copia todo o conteúdo de um recurso de armazenamento para a saída atual, sem ignorar bytes no início e sem limite de tamanho.

Este método é uma forma simplificada de chamar copy(Storage storage, long skip, long size) com os parâmetros skip e size definidos como -1, indicando que não há salto inicial e que todo o conteúdo deve ser copiado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | O recurso de armazenamento que representa o ficheiro a ser copiado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(storage: [Storage](/docs/library/resources/storage), skip: long) : [Out](/docs/library/resources/out)
##### Descrição

Copia dados de um recurso de armazenamento para a saída atual, começando a leitura após ignorar um número especificado de bytes (skip).

Este método é uma maneira conveniente de chamar copy(Storage storage, long skip, long size) com size definido como -1, ou seja, sem limite de tamanho — copiando todo o conteúdo restante após skip.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | O recurso de armazenamento que representa o ficheiro a ser copiado. |
| **skip** | _long_ | Número de bytes a serem ignorados no início do ficheiro. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.copy(storage: [Storage](/docs/library/resources/storage), skip: long, size: long) : [Out](/docs/library/resources/out)
##### Descrição

Copia todo o conteúdo de um ficheiro para a saída de resposta (OutputStream).

Este método é uma conveniência que encapsula a criação de um InputStream a partir de um ficheiro e delega a operação de cópia ao método copy(InputStream in).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ | O recurso de armazenamento que representa o ficheiro a ser copiado. |
| **skip** | _long_ | Número de bytes a serem ignorados no início do ficheiro. |
| **size** | _long_ | Número máximo de bytes a copiar após a ignorar. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## flush

---

#### _out.flush() : void
##### Descrição

Realiza o envio do que estiver pendente acumulado em buffer.

##### Retorno

( _void_ )


---

## getJSONHTMLEscape

---

#### _out.getJSONHTMLEscape() : boolean
##### Descrição

Retorna o estado atual da configuração de escape de HTML na resposta JSON.

Este método é equivalente a jsonHTMLEscape() e está presente para manter consistência com convenções de nomenclatura baseadas em JavaBeans (uso de get como prefixo).

##### Retorno

( _boolean_ )

Retorna verdadeiro se o escape HTML estiver ativado, caso contrário, retorna falso.

---

## getJSONIdentFactor

---

#### _out.getJSONIdentFactor() : int
##### Descrição

Método auxiliar que retorna o mesmo valor que jsonIdentFactor(), mantendo a compatibilidade com as convenções de nomenclatura do estilo JavaBeans.

##### Retorno

( _int_ )

Retorna o valor do fator de indentação JSON.

---

## getMirrors

---

#### _out.getMirrors() : java.util.List
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## init

---

#### _out.init() : [Out](/docs/library/resources/out)
##### Descrição

Inicia uma nova instância de saída de dados.

##### Retorno

( _[Out](/docs/library/resources/out)_ )

A nova instância do recurso de Output.

---

## isClosed

---

#### _out.isClosed() : boolean
##### Retorno

( _boolean_ )


---

## isStarted

---

#### _out.isStarted() : boolean
##### Retorno

( _boolean_ )


---

## json

---

#### _out.json(Values: java.lang.Object) : [Out](/docs/library/resources/out)
##### Descrição

Envia uma resposta em formato JSON para o cliente. Este método define os cabeçalhos apropriados para garantir que a resposta não seja armazenada em cache e que o conteúdo seja tratado como JSON válido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **Values** | _java.lang.Object_ | Objeto do tipo Values que será convertido em texto e enviado como JSON. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.json(String: string) : [Out](/docs/library/resources/out)
##### Descrição

Envia uma resposta no formato JSON para o cliente. Este método define os cabeçalhos apropriados para garantir que a resposta não seja armazenada em cache e que o conteúdo seja tratado como JSON válido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **String** | _string_ | Texto em formato JSON a ser enviado como resposta. Deve ser uma string JSON válida.  |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.json(Values: java.util.List) : [Out](/docs/library/resources/out)
##### Descrição

Gera uma resposta JSON formatada a partir de um array de objetos. O conteúdo é estruturado automaticamente com base em uma lista de objetos do tipo Values.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **Values** | _java.util.List_ | Objeto do tipo Values que será convertido em texto e enviado como JSON. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.json(Values: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Out](/docs/library/resources/out)
##### Descrição

Gera uma resposta JSON a partir de um Map, utilizando uma instância de Values para estruturar o conteúdo

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **Values** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Os dados contidos no Mapa serão convertidos automaticamente para JSON.  |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.json(Values: [Values](/docs/library/objects/Values)) : [Out](/docs/library/resources/out)
##### Descrição

Gera uma resposta JSON formatada a partir de uma instância da classe Values.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **Values** | _[Values](/docs/library/objects/Values)_ | Objeto contendo os dados que serão convertidos automaticamente para JSON. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## jsonHTMLEscape

---

#### _out.jsonHTMLEscape() : boolean
##### Descrição

Verifica o estado atual da configuração de escape de caracteres HTML na resposta JSON.

Essa configuração determina se os caracteres especiais de HTML (como &lt;, &gt;, &amp;, &bsol;') serão convertidos em entidades HTML ao gerar a saída JSON.

##### Retorno

( _boolean_ )

Retorna verdadeiro se o escape HTML estiver ativado, caso contrário, retorna falso.

---

#### _out.jsonHTMLEscape(htmlEscape: boolean) : [Out](/docs/library/resources/out)
##### Descrição

Define se os caracteres especiais de HTML devem ser escapados na resposta JSON gerada.

Quando ativado (true), caracteres como &lt;, &gt;, &amp; e &bsol; serão convertidos para suas entidades HTML correspondentes ('&lt', '&gt', '&bsol', etc.), garantindo maior segurança ao exibir o JSON em contextos HTML.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ | true para escapar caracteres HTML no conteúdo JSON. false para desativar o escape. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## jsonIdentFactor

---

#### _out.jsonIdentFactor() : int
##### Descrição

O valor atual do fator de indentação utilizado ao gerar a resposta JSON.
Este valor controla o número de espaços usados por nível de indentação no JSON.

##### Retorno

( _int_ )

Retorna o valor do fator de indentação JSON.

---

#### _out.jsonIdentFactor(int: int) : [Out](/docs/library/resources/out)
##### Descrição

Define o fator de indentação usado ao gerar a resposta JSON.
Este valor determina quantos espaços serão usados para indentar cada nível do JSON, tornando a saída mais legível para os humanos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **int** | _int_ | Número de espaços utilizados por nível de indentação. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## mirrors

---

#### _out.mirrors() : java.util.List
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## output

---

#### _out.output() : [OutputStream](/docs/library/objects/OutputStream)
##### Descrição

Fornece o fluxo de saída de dados original.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

O fluxo de saída de dados original.

---

## print

---

#### _out.print(bool: boolean) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _boolean_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(numero: byte) : [Out](/docs/library/resources/out)
##### Descrição

Envia o número.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **numero** | _byte_ | Número que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(carater: char) : [Out](/docs/library/resources/out)
##### Descrição

Envia o caráter.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **carater** | _char_ | Caráter que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(bool: double) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _double_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(bool: float) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _float_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(bool: int) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _int_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(obj: java.lang.Object) : [Out](/docs/library/resources/out)
##### Descrição

Converte o objeto para texto e envia.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _java.lang.Object_ | Objeto que será convertido em texto e enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(texto: string) : [Out](/docs/library/resources/out)
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Conteúdo que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(bool: long) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _long_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.print(bool: short) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _short_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

## printf

---

#### _out.printf(format: string, objects: java.lang.Object[]) : [Out](/docs/library/resources/out)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **format** | _string_ |   |
| **objects** | _java.lang.Object[]_ |   |

##### Retorno

( _[Out](/docs/library/resources/out)_ )


---

## println

---

#### _out.println() : [Out](/docs/library/resources/out)
##### Descrição

Envia uma quebra de linha.

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(bool: boolean) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _boolean_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(numero: byte) : [Out](/docs/library/resources/out)
##### Descrição

Envia o número com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **numero** | _byte_ | Número que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(carater: char) : [Out](/docs/library/resources/out)
##### Descrição

Envia o caráter com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **carater** | _char_ | Caráter que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(bool: double) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _double_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(bool: float) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _float_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(bool: int) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _int_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(obj: java.lang.Object) : [Out](/docs/library/resources/out)
##### Descrição

Converte o objeto para texto e envia com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _java.lang.Object_ | Objeto que será convertido em texto e enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(texto: string) : [Out](/docs/library/resources/out)
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(bool: long) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _long_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### _out.println(bool: short) : [Out](/docs/library/resources/out)
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _short_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

## setJSONHTMLEscape

---

#### _out.setJSONHTMLEscape(htmlEscape: boolean) : [Out](/docs/library/resources/out)
##### Descrição

Define se o conteúdo JSON gerado deve escapar caracteres especiais de HTML (como &lt;, &gt;, &amp;, etc.).

Este método é um alias ou método auxiliar que delega diretamente para jsonHTMLEscape(boolean htmlEscape), mantendo consistência com a convenção de nomenclatura JavaBeans (uso de set como prefixo).


##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ | true para ativar o escape de HTML em strings JSON; false para manter os caracteres originais. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## setJSONIdentFactor

---

#### _out.setJSONIdentFactor(jsonIdentFactor: int) : [Out](/docs/library/resources/out)
##### Descrição

Define o fator de recuo (espaçamento) usado ao gerar uma saída JSON com formatação bonita.

Este método é um atalho que delega internamente para jsonIdentFactor(int jsonIdentFactor), mantendo a consistência com as convenções JavaBeans (uso de set como prefixo).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jsonIdentFactor** | _int_ | Um número inteiro que representa o número de espaços para cada nível de indentação em JSON formatado. |
|   |   | Exemplo: |
|   |   |  |
|   |   | 0 ou valores negativos → sem indentação (JSON compacto) |
|   |   | 2 → cada nível de indentação terá 2 espaços |
|   |   | 4 → indentação mais legível, com 4 espaços por nível |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## start

---

#### _out.start() : void
##### Descrição

Inicia a saída de dados, o cabeçalho do HTTP (_header_) é enviado.

##### Retorno

( _void_ )


---

## started

---

#### _out.started() : boolean
##### Descrição

Verifica se já foi iniciada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se iniciou a resposta do pedido HTTP e o cabeçalho (_header_) já foi enviado.

---

## write

---

#### _out.write(bytes: byte[]) : [Out](/docs/library/resources/out)
##### Descrição

Escreve todos os bytes de um array diretamente na saída binária.

O método delega a escrita ao fluxo de saída associado ao Proteu, garantindo que todos os bytes sejam transferidos conforme a ordem do array. Também propaga a escrita para fluxos espelhados (mirrors), se presentes.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ | Array de bytes a ser gravado. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.write(bytes: byte[], off: int, len: int) : [Out](/docs/library/resources/out)
##### Descrição

Escreve uma sequência específica de bytes de uma matriz para uma saída binária.

Este método permite escrever apenas uma parte da matriz, começando a partir de um determinado índice (off) e escrevendo até um comprimento definido (len). A operação também se propaga para fluxos espelhados, se existirem.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ | Array de bytes de onde os dados serão extraídos. |
| **off** | _int_ | Posição inicial no array |
| **len** | _int_ | Posição inicial no array |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

#### _out.write(int: int) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um único byte no corpo da resposta HTTP.

Internamente, este método delega a operação ao fluxo de saída gerido pelo Proteu, que pode realizar verificações de estado, iniciar o fluxo se necessário e replicar a saída em fluxos adicionais (espelhos), além de manter o registo do número total de bytes escritos.

É útil para a construção manual de respostas byte a byte ou para fluxos de escrita personalizados.


##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **int** | _int_ | O byte a ser gravado, representado como um valor inteiro (apenas os 8 bits menos significativos são utilizados). |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeBoolean

---

#### _out.writeBoolean(boolean: boolean) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um valor booleano na saída binária.
O valor true é representado como 1 (byte) e false como 0, sendo escrito diretamente no fluxo de saída.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **boolean** | _boolean_ | O valor a escrever na saída binária (verdadeiro ou falso). |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeByte

---

#### _out.writeByte(int: int) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um único byte no fluxo de resposta HTTP.

Este método é ideal para saída binária direta, como dados brutos ou conteúdo de ficheiros. Internamente, ele delega a chamada para writeByte(int b) do OutputStream da instância Proteu, que gere o fluxo de saída principal e os seus espelhos (se configurados).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **int** | _int_ | O valor a ser gravado como um byte. Apenas os 8 bits menos significativos são considerados (equivalente a b & 0xFF). |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeChar

---

#### _out.writeChar(char: char) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um carácter Unicode (UTF-16) como dois bytes em saída binária.

O caractere é dividido em duas partes de 8 bits: o byte mais significativo e o byte menos significativo. Ambos são escritos na saída em ordem big-endian (bits mais significativos primeiro).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **char** | _char_ | Caractere a ser escrito na saída binária. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeDouble

---

#### _out.writeDouble(double: double) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um valor duplo (64 bits, ponto flutuante) na saída binária.
O número é convertido para a sua representação binária de 8 bytes de acordo com a norma IEEE 754 e escrito no fluxo de saída na ordem big-endian.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **double** | _double_ | O valor de ponto flutuante que será gravado na saída binária. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeFloat

---

#### _out.writeFloat(float: float) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um valor flutuante (32 bits, ponto flutuante) na saída binária.
O valor é convertido para a sua representação binária de 4 bytes de acordo com a norma IEEE 754 e, em seguida, escrito no fluxo na ordem big-endian.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **float** | _float_ | O número de ponto flutuante que será gravado na saída binária. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeInt

---

#### _out.writeInt(int: int) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um valor inteiro (32 bits) no fluxo de resposta HTTP como quatro bytes na ordem big-endian (do byte mais significativo para o byte menos significativo).

Este método é útil para gerar saídas binárias estruturadas, como cabeçalhos de ficheiros, comunicação binária com clientes ou protocolos personalizados.

Internamente, cada byte do inteiro é extraído com deslocamentos de bits e enviado individualmente para o OutputStream principal e seus espelhos, se houver.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **int** | _int_ | O valor total a ser gravado. Ele será dividido em quatro bytes e gravado sequencialmente no fluxo.. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeLong

---

#### _out.writeLong(long: long) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um valor longo (64 bits) na saída binária.
O valor é convertido para uma sequência de 8 bytes no formato big-endian (byte mais significativo primeiro), o que garante compatibilidade com a maioria dos protocolos binários e formatos de ficheiro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **long** | _long_ | O valor numérico que será gravado na saída binária. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

## writeShort

---

#### _out.writeShort(boolean: short) : [Out](/docs/library/resources/out)
##### Descrição

Escreve um valor booleano (verdadeiro ou falso) na saída binária.
O valor é convertido em um byte: 1 para verdadeiro e 0 para falso, seguindo o padrão binário comum.

Este método é útil quando é necessário transmitir dados no nível de byte, como em ficheiros binários, fluxos de rede ou buffers de protocolo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **boolean** | _short_ | O valor booleano que será escrito. |

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Retorna o próprio objeto Out

---

