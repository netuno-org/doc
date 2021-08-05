---
id: first-app
title: Primeira Aplicação
sidebar_label: Primeira Aplicação
---

## Comandos para criar uma aplicação

Após [configurar a plataforma](installation.md), apresentamos a seguir os comandos básicos para criar uma aplicação e iniciar o servidor.

A aplicação deste tutorial consiste num formulário Modal e exportação PDF.

#### Comando para criar uma aplicação.

```shell
./netuno app name=minhaapp
```

#### Comando para iniciar o servidor.

```shell
./netuno server app=minhaapp
```

A partir de agora pode começar a desenvolver a sua aplicação.

Todos os ficheiros para desenvolvimento encontram-se em `web/apps/minhaapp`.

Por omissão, para aceder ao backoffice no ecrã de login insira as credenciais.

**Utilizador:** `dev` <br>
**Senha:** `dev`

## Criar uma Aplicação Simples

Agora que já temos uma base de conhecimentos do Netuno, vamos criar uma aplicação do início ao fim.
Vamos adicionar ao ecrã inicial um botão para carregar o formulário numa modal e outro para gerar um PDF.

Seguiremos estes passos:

* Modificar o HTML principal do dashboard
* Adicionar dois botões com React
* Construir o botão do `Abrir Formulário Modal`
* Construir o botão `Exportar PDF`
* Desenvolver o serviço que cria o PDF

No final verá a aplicação demonstrada na seguinte imagem.

![Primeira App - 1](/docs/assets/comece/primeiraapp1.png)

![Primeira App - 2](/docs/assets/comece/primeiraapp2.png)

Vamos começar!

### Modificar o HTML principal da dashboard

Seguindo o tutorial em que ensinamos os [comandos para criar uma aplicação](#comandos-para-criar-uma-aplicação), aceda ao diretório da aplicação, neste exemplo denominada de `minhaapp`.

Abra o ficheiro que tem o HTML principal do dashboard, que se encontra no seguinte diretório.

Localização do ficheiro

```plaintext
/web/apps/minhaapp/server/templates/dashboard.html
```

Copie este HTML e cole dentro do `dashboard.html`

```html
<div class="row">
    <div class="col-lg-12">
        <div class="with-form">
            <h1 class="page-header">Minha área de trabalho</h1>
            <p>Abrir um Formulário Modal e Exportar um PDF</p>
        </div>
    </div>
</div>

<div id="app-dashboard"></div>
```

### Adicionar os dois botões com React

Agora aceda ao ficheiro que tem o javascript principal do dashboard. Este ficheiro foi construído em React, e é nele que vamos adicionar os dois botões.

Localização do ficheiro

```plaintext
/web/apps/minhaapp/ui/src/containers/DashboardContainer.jsx
```

Copie e cole este código dentro do ficheiro `DashboardContainer.jsx`

```javascript
import React, { Component } from "react";
import BotaoModal from '../components/BotaoModal/index.jsx';
import BotaoPDF from '../components/BotaoPDF/index.jsx';

export default class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="my-dashboard">
                <BotaoModal />
                <BotaoPDF />
            </div>
        );
    }
}
```

### Construir o botão do Abrir Formulário Modal

Nesta etapa, vamos ter que criar um formulário chamado `Teste` e um campo chamado `Nome`

Aprenda como criar formulários  [aqui](academy/explore/graphical-interface/forms.md).
Aprenda como criar campos [aqui](academy/explore/graphical-interface/fields.md).

De seguida, vá ao formulário que criou, abra o inspector de elemento no browser e procure o uid no atributo `netuno-form-uid`, será importante para o próximo passo.

![Primeira App - 3](/docs/assets/comece/primeiraapp3.png)

![Primeira App - 4](/docs/assets/comece/primeiraapp4.png)

Agora, abra de novo o ficheiro que editou anteriormente `dashboard.html` e adicione o código antes de:

 ```html
 <div id="app-dashboard"></div>
 ```

e edite o atributo `netuno-form-uid` com o uid do passo anterior.

```html
<div id="dashboard-modal-teste" class="modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
            </div>
            <div class="modal-body">
                <div id="dashboard-modal-teste-netuno-form" netuno-form netuno-form-uid="UID" netuno-form-name="teste" netuno-form-edit-only="" netuno-zone="dashboard-teste">
                    <div class="netuno-form-edit"  netuno-form-edit="teste"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```
Vamos criar um diretório `BotaoModal` e dentro dele o ficheiro `index.jsx`, no seguinte diretório.

 Localização do ficheiro

```plaintext
/web/apps/minhaapp/ui/src/components/
```

Agora, abra novamente o ficheiro que criou antes `index.jsx` e adicione o código abaixo:

Observe no seguinte código, que o método `netuno.modal.create()` abre o formulário denominado `Teste`.<br>
No callback é possível testar os eventos de ações no formulário.

Localização do ficheiro

```plaintext
/web/apps/minhaapp/ui/src/components/BotaoModal/index.jsx
```

Código

```javascript
import React, { Component } from "react";

export default class BotaoModal extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        netuno.modal.create({
            name: 'teste',
            callback: function (modal) {
                let form = modal.find('[netuno-form]');

                form.on('netuno:new', () => {
                    console.log('Clicou em novo');
                });

                form.on('netuno:save', () => {
                    netuno.modal.hide(modal)
                    console.log('Clicou em salvar');
                });

                form.on('netuno:back', () => {
                    console.log('Clicou em voltar');
                });

                netuno.loadForm(form);
                netuno.modal.show(modal);
            }
        });
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                className="btn btn-default">
                Abrir Formulário Modal
            </button>
        );
    }
}
```

### Construir o botão Exportar PDF

O botão para gerar PDF vai depender de um serviço responsável para criar o PDF que será chamado quando houver um clique no botão `Gerar PDF`. Vamos ver como fazer o serviço mais abaixo.

Antes de ver o código do botão vamos criar um novo diretório `BotaoPDF` e dentro dele o ficheiro `index.jsx`, no seguinte diretório:

 Localização do ficheiro

```plaintext
/web/apps/minhaapp/ui/src/components/
```

Agora, abra de novo o ficheiro que criou anteriormente `index.jsx` e adicione o código seguinte:


Localização do ficheiro

```plaintext
/web/apps/minhaapp/ui/src/components/BotaoPDF/index.jsx
```

Código

```javascript
import React, { Component } from "react";

export default class BotaoPDF extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <a
                target='_blank'
                href='/services/export-pdf.netuno'
                className="btn btn-default">
                Exportar PDF
            </a>
        );
    }
}
```

### Desenvolver o serviço que cria o PDF

Para finalizar, apresenta-se o código do serviço que será responsável por gerar o PDF.

Observe o excerto de código anterior em que só precisámos de adicionar a `url` do serviço no atributo _`href`_ do botão.

Vamos criar o seguinte ficheiro _`export-pdf.js`_, no seguinte diretório:

Localização do ficheiro

```plaintext
/web/apps/minhaapp/server/services/
```
Copie e cole o seguinte código no ficheiro _`export-pdf.js`_

```javascript
_header.contentType('pdf')

var pdfDocument = _pdf.newDocument(_pdf.pageSize('A5'));

var viksiScript = _pdf.font(_storage.filesystem('server', 'samples/export-pdf', 'viksi-script.ttf'), true);
var helvetica = _pdf.font('helvetica');

pdfDocument.add(
    _pdf.image(_storage.filesystem('server', 'samples/export-pdf', 'logo.png'))
        .scaleAbsolute(120, 36)
)

pdfDocument.add(
    _pdf.paragraph('My Custom Font!')
        .setFont(viksiScript)
        .setFontSize(30)
        .setFontColor(_pdf.color("#1abc9c"))
)

pdfDocument.add(
    _pdf.paragraph('Helvetica!')
        .setFont(helvetica)
        .setFontSize(15)
)

pdfDocument.close()
```

Importante analisar o método `_storage.filesystem()`.

É desta forma que importamos os ficheiros para dentro do PDF ou de qualquer outro recurso.

Para concluir a importação, vamos copiar a pasta `export-pdf` do seguinte diretório:

Localização do ficheiro

```plaintext
/web/apps/demo/storage/filesystem/server/samples/
```
Em seguida vamos colar a pasta no seguinte diretório:

```plaintext
/web/apps/minhaapp/storage/filesystem/server/samples/
```
Prontinho!! Agora já pode fazer os seus testes.
