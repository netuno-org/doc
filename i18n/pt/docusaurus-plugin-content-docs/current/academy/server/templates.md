---
id: templates
title: Templates
sidebar_label: Templates
---

## Antes de começar
Antes de criar serviços que chamam templates certifique-se que sabe criar **Serviços Web REST**, caso não o saiba visite a seguintes ligação:

* [Serviços Web Rest](/docs/academy/server/services/rest)

É também aconselhável que, antes de começar este tutorial, se certifique que tem noções básicas em _**JavaScript**_.

## Utilização de templates em serviços

Neste tutorial iremos abordar a criação de templates e as ações necessárias para os poder chamar no seu serviço.

Ao criar um serviço no Netuno tem a opção de aceder a templates criados por si, ou seja, consoante o resultado poderá redirecionar o seu serviço para um template em html com dados.

Neste exemplo iremos ter um template básico em HTML e passar dados do serviço para o mesmo template.

## Criação de um template

![templates1.png](/docs/assets/templates1.png)

Após estar no diretório acima, vamos criar um ficheiro em `.html`, neste exemplo será de nomeado de `template.html`.

Segue de seguida o conteúdo desta página:

```html
<!-- Chamada ao header do Netuno -->
_{include=_|includes/head}

<!-- Definição de estilos -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Início do body do html -->
<h1>T&iacute;tulo do template</h1>

<!-- Quando precisar de passar dados de um serviço para um template utilize _{&variavel} -->
<p>Ol&aacute;, sou um <b>_{&data=nome}</b> e estou a receber <b>_{&data=dados}</b> de um servi&ccedil;o!</p>

<!-- Fim do body do html -->

<!-- Chamada ao footer do Netuno -->
_{include=_|includes/foot}
```

Por fim, cria-se o serviço com a chamada ao template com a seguinte função:

`_template.output(‘nome_do_template’, variáveis(opcional));`

Segue-se o exemplo do serviço ‘service.js’:

```javascript
// Iniciar a o objeto 'data' para que esta possa receber dados
var data = _val.init()
    
// Associar valores ao objeto 'data'
    .set("nome", "template")
    .set("dados", "dados")

// Esta função é que permite efetuar a chamada ao template
_template.output("template", data);
```

> Caso tenha o seu template num sub-diretório indique na função: `_template.output('diretorio/nome_do_template')`

Por fim, basta efetuar a chamada ao serviço no navegador e aparecerá algo semelhante ao seguinte:

![templates2.png](/docs/assets/templates2.png)

> Note que consoante o seu navegador os resultados anteriormente apresentados poderão diferir.

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página.

Bom desenvolvimento!
