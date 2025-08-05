---
id: out
title: Out
sidebar_label: Out
---

Recurso de resposta aos pedidos HTTP.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
##### Descrição

Encerra o envio de dados da resposta HTTP.

##### Retorno

( _[Out](/docs/library/resources/out)_ )


---

## closed

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>closed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se já foi encerrada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se fechou a resposta do pedido HTTP.

---

## copy

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>flush</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Realiza o envio do que estiver pendente acumulado em buffer.

##### Retorno

( _void_ )


---

## getJSONHTMLEscape

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getJSONHTMLEscape</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna o estado atual da configuração de escape de HTML na resposta JSON.

Este método é equivalente a jsonHTMLEscape() e está presente para manter consistência com convenções de nomenclatura baseadas em JavaBeans (uso de get como prefixo).

##### Retorno

( _boolean_ )

Retorna verdadeiro se o escape HTML estiver ativado, caso contrário, retorna falso.

---

## getJSONIdentFactor

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getJSONIdentFactor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

Método auxiliar que retorna o mesmo valor que jsonIdentFactor(), mantendo a compatibilidade com as convenções de nomenclatura do estilo JavaBeans.

##### Retorno

( _int_ )

Retorna o valor do fator de indentação JSON.

---

## getMirrors

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getMirrors</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
##### Descrição

Inicia uma nova instância de saída de dados.

##### Retorno

( _[Out](/docs/library/resources/out)_ )

A nova instância do recurso de Output.

---

## isClosed

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>isClosed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isStarted

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>isStarted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## json

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>String</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonHTMLEscape</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica o estado atual da configuração de escape de caracteres HTML na resposta JSON.

Essa configuração determina se os caracteres especiais de HTML (como &lt;, &gt;, &amp;, &bsol;') serão convertidos em entidades HTML ao gerar a saída JSON.

##### Retorno

( _boolean_ )

Retorna verdadeiro se o escape HTML estiver ativado, caso contrário, retorna falso.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonHTMLEscape</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonIdentFactor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Descrição

O valor atual do fator de indentação utilizado ao gerar a resposta JSON.
Este valor controla o número de espaços usados por nível de indentação no JSON.

##### Retorno

( _int_ )

Retorna o valor do fator de indentação JSON.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonIdentFactor</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>mirrors</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>output</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>
##### Descrição

Fornece o fluxo de saída de dados original.

##### Retorno

( _[OutputStream](/docs/library/objects/OutputStream)_ )

O fluxo de saída de dados original.

---

## print

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>numero</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>carater</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>printf</span>(<span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>objects</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
##### Descrição

Envia uma quebra de linha.

##### Retorno

( _[Out](/docs/library/resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>numero</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>carater</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>setJSONHTMLEscape</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>setJSONIdentFactor</span>(<span style={{color: '#FF8000'}}>jsonIdentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>start</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Inicia a saída de dados, o cabeçalho do HTTP (_header_) é enviado.

##### Retorno

( _void_ )


---

## started

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>started</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se já foi iniciada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se iniciou a resposta do pedido HTTP e o cabeçalho (_header_) já foi enviado.

---

## write

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>off</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>len</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeBoolean</span>(<span style={{color: '#FF8000'}}>boolean</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeByte</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeChar</span>(<span style={{color: '#FF8000'}}>char</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeDouble</span>(<span style={{color: '#FF8000'}}>double</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeFloat</span>(<span style={{color: '#FF8000'}}>float</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeInt</span>(<span style={{color: '#FF8000'}}>int</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeLong</span>(<span style={{color: '#FF8000'}}>long</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeShort</span>(<span style={{color: '#FF8000'}}>boolean</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](/docs/library/resources/out)</span>
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

