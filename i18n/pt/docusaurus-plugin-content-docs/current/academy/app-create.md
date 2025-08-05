---
sidebar_position: 3
id: app-create
title: Criar Aplicação
---

Criando uma nova aplicação full stack na plataforma.

Uma visão geral do frontend, base de dados, e serviço de API.

## Introdução

Após [instalar a plataforma](../get-started/installation), apresentamos a seguir os comandos básicos para criar 
uma aplicação e iniciar o servidor.

Apesar do Netuno ser poliglota e suportar diveresas linguagens, neste tutorial vamos utilizar apenas a linguagem 
JavaScript.

A aplicação deste tutorial consiste num formulário em uma Modal e a exportação em PDF.

## Comando para Criar uma Nova Aplicação

Abra o terminal onde a plataforma Netuno está instalada.

Para criar uma nova aplicação na plataforma Netuno utilize o comando:

```shell
./netuno app
```

Será perguntado o nome da nova aplicação, o tipo de base de dados e o idioma.

> Escolha o tipo de base de dados do tipo **H2 Database**, para os desenvolvimentos iniciais é mais prático.
> 
> O **H2 Database** é uma base de dados embutida com o servidor do Netuno, então não precisa instalar nada e nem 
> configurar um servidor de base de dados.

Em alternativa pode passar o nome da nova aplicação diretamente no comando:

```shell
./netuno app name=minhaapp
```

### Comando para Iniciar o Servidor

Com a nova aplicação criada deve ser iniciado o servidor da plataforma Netuno com o nome da nova aplicação:

```shell
./netuno server app=minhaapp
```

Desta forma o servidor utiliza a aplicação indicada como sendo a aplicação padrão.

A partir de agora pode começar a desenvolver a sua aplicação.

Todos os arquivos para o desenvolvimento estão em `📂 apps/minhaapp`.

Caso no login do backoffice seja pedido as credenciais utilize o padrão:

**Utilizador:** `dev`

**Senha:** `dev`

## Editor de Código

Utilize o seu editor de código à escolha.

Para realizar o desenvolvimento do código geral da aplicação, seja backend ou frontend, recomendamos editores de
código que são gratuitos, como:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

Abra a pasta da aplicação no seu editor:

- `📂 apps/minhaapp`

Dentro desta pasta contém todos os arquivos da nova aplicação e é onde todo o desenvolvimento é realizado.

A documentação que detalha a estrutura de arquivos e pastas da aplicação:

- [Pastas da Aplicação](../category/app-structure)

## Resumo das Etapas

Agora que já temos uma base de conhecimentos do Netuno, vamos criar uma aplicação do início ao fim.

Vamos adicionar na tela inicial um botão para carregar o formulário de clientes em uma modal e outro botão para 
exportar a lista de clientes em arquivo PDF.

Seguiremos estes passos:

* Analisar onde está o HTML principal do dashboard.
* Adicionar dois botões com React.
* Construir o botão para abrir o formulário de clientes.
* Construir o botão para exportar a lista de clientes em PDF.
* Desenvolver o serviço que gera o arquivo PDF com a lista de clientes.

Vamos começar!

## Template de Dashboard

Dentro dos arquivos da nova aplicação, abra o arquivo que tem o HTML principal do dashboard, que se encontra no 
seguinte caminho:

```plaintext
server/templates/dashboard.html
```

No fim do `dashboard.html` contém o `div` onde o React é injetado:

```html title="server/templates/dashboard.html"
...
<div id="app-dashboard"></div>
```

Neste `div` com o id `app-dashboard` é onde o dashboard é iniciado, por padrão o dashboard é feito em React.

A parte do dashboard em React está na pasta `📂 ui`, é onde dashboards e outras funcionalidades são desenvolvidas.

## Criar o Formulário de Clientes

Nesta etapa, vamos ter que criar um novo formulário chamado `Cliente` e com um novo campo chamado `Nome`.

Na página do backoffice temos no canto superior direito o botão `Construir`.

Ao clicar no botão `Construir` vai abrir a área de desenvolvimento dos formulários.

No menu, em `Gestão` e depois em `Formulários` é onde podemos criar um novo formulário.

Preencha no `Nome de exibição`:

- `Cliente`

Automáticamente o campo `Nome da tabela` é preenchido com `cliente` em minúsculas, pois em base de dados
é recomendado que o nome seja em letras minúsculas.

Agora pode salvar o seu primeiro formulário clicando no botão abaixo:

- `Salvar`

> Veja mais sobre como criar formulários [aqui](ui/forms).

Quando o formulário é criado aparece do lado esquerdo, no menu em `Campos`, a opção `Cliente`, clique no
`Cliente` para criar o novo campo de `Nome`.

Preencha no `Nome de exibição` do campo:

- `Nome`

Automáticamente o campo `Nome da coluna` é preenchido com `nome` em minúsculas, pois em base de dados
é recomendado que o nome seja em letras minúsculas.

Ative do lado direito as opções de:

- `Permitir Filtrar` - que permite pesquisar pelo campo `Nome`.
- `Exibir no Resultado` - que vai fazer apresentação do campo `Nome` na tabela de resultados.

Em `Tipo` escolha a opção: `text - Campo de texto`

> Veja mais sobre campos [aqui](ui/fields).

Agora pode salvar o seu primeiro campo clicando no botão abaixo:

- `Salvar`

No canto superior direito da página temos o botão `Visualizar`.

Neste botão de `Visualizar` voltamos para o backoffice e podemos ver no menu o nosso formulário de `Cliente`.

Abra o formulário de `Cliente` e do lado direito temos o botão para `Adicionar` um novo cliente.

Insira alguns clientes no sistema.

## Consulta em Base de Dados

Ao voltar na área de construção do desenvolvedor, no botão de `Construir`.

No menu de `Gestão`, abra a opção de `Query`.

Em `Query` podemos executar comandos SQL diretamente na base de dados.

Execute o comando:

```sql
SELECT * FROM cliente
```

Assim pode consultar ou manipular as informações do sistema diretamente em base de dados.

Pode voltar ao backoffice clicando no botão de `Visualizar`.

## Adicionar os Dois Botões com React.

Dentro da pasta `📂 ui` abra o arquivo que tem o JavaScript principal do dashboard, dentro de:

- `📂 src/containers`

Os contentores (`containers`) são áreas com funcionalidades mais abrangentes, neste caso é um dashboard que pode
conter várias coisas.

Copie e cole este código dentro do arquivo `DashboardContainer/index.jsx`:

```javascript title="ui/src/containers/DashboardContainer/index.jsx"
import { Space } from 'antd';

import BotaoClienteModal from '../../components/BotaoClienteModal';
import BotaoPDF from '../../components/BotaoPDF';

import "./index.less";

function DashboardContainer() {
    return (
        <div className="my-dashboard">
            <Space>
                <BotaoClienteModal />
                <BotaoPDF />
            </Space>
        </div>
    );
}

export default DashboardContainer;
```

Este arquivo é construído em React, agora temos a importação dos dois botões no dashboard.

Repare que os botões estão sendo importados no início do código, mas estes arquivos de botões ainda não existem.

Então vamos criar o código dos botões, que serão componentes.

## Botão para Formulário em Modal

Vamos criar uma pasta `BotaoClienteModal` e dentro dele o arquivo `index.jsx`, no seguinte caminho:

- `📂 ui/src/components/`

Os componentes (`components`) são funcionalidades bem específicas, com um propósito bem definido, que podem ser
importados e utilizados em outros componentes, mas tipicamente são utilizados nos contentores.

Crie a pasta `BotaoClienteModal`, deve ficar desta forma:

- `📂 ui/src/components/BotaoClienteModal`

E dentro das pasta `BotaoClienteModal` crie o arquivo de código `index.jsx`:

- `📂 ui/src/components/BotaoClienteModal/index.jsx`

No arquivo que criou, o `index.jsx`, adicione o código abaixo:

```javascript title="ui/src/components/BotaoClienteModal/index.jsx"
import { Button } from 'antd';

function BotaoClienteModal() {
    const onClick = () => {
        netuno.modal.create({
            name: 'cliente',
            callback: function (modal) {
                let form = modal.find('[netuno-form]');

                form.on('netuno:new', () => {
                    console.log('Criando um novo Cliente.');
                });

                form.on('netuno:save', () => {
                    netuno.modal.hide(modal)
                    console.log('Salvou um Cliente.');
                });

                form.on('netuno:delete', () => {
                    netuno.modal.hide(modal)
                    console.log('Removeu um Cliente');
                });

                form.on('netuno:back', () => {
                    console.log('Clicou em voltar');
                });

                netuno.loadForm(form);
                netuno.modal.show(modal);
            }
        });
    };
    return (
        <div>
            <Button type="primary" onClick={ onClick }>
                Abrir Formulário do Cliente
            </Button>
        </div>
    );
}

export default BotaoClienteModal;
```

Observe no código acima, que o método `netuno.modal.create()` abre o formulário denominado `Cliente`.

No callback é possível observar os eventos das ações realziadas na utilização do formulário.

Agora um dos botões está finaliado e a importação que foi feita deste botão no `DashboardContainer` vai 
funcionar.

## Botão para Exportar PDF

O botão para gerar o PDF vai depender de um serviço responsável por criar o arquivo PDF que será chamado 
quando acontecer um clique no botão `Gerar PDF`.

> Vamos ver como fazer este serviço mais abaixo, mas antes vamos criar o botão em React.

Vamos criar uma nova pasta `BotaoPDF` e dentro dele o arquivo `index.jsx`, no seguinte caminho:

- `ui/src/components/BotaoPDF/index.jsx`

Agora, abra o novo arquivo `index.jsx` e adicione o código abaixo:

```javascript title="ui/src/components/BotaoPDF/index.jsx"
import { Button } from 'antd';

function BotaoPDF() {
    return (
        <div>
            <Button
                type="primary"
                href="/services/cliente/exporta-pdf"
                target="blank">
                Exportar PDF
            </Button>
        </div>
    );
}

export default BotaoPDF;
```

Este botão vai abrir em uma nova aba o endereço do serviço que gera um arquivo PDF com a lista de clientes que
estão cadastrados no sistema.

O último botão está finaliado e a importação que foi feita deste botão no `DashboardContainer` vai
funcionar.

Prontinho! Agora podemos compilar o frontend em React para testar tudo.

## Copilar o Frontend

O React precisa ser compilado para gerar o JavaScript final que pode ser processado pelo browser.

Abra o terminal dentro da pasta da aplicação e entre dentro da pasta `ui`, a partir da raíz do Netuno:

- `📂 apps/minhaapp/ui`

Execute o comando:

- `pnpm run build`

Desta forma é realizada a compilação otimizada para produção do frontend.

> Atualize a página de backoffice no browser para ver as alterações.

Caso queira evitar a execução manual constante do comando de compilação a cada alteração do código de frontend,
execute a compilação rápida de desenvolvimento que observa caso algum arquivo seja alterado, então a compilação
rápida é executada automaticamente:

- `pnpm run watch`

> Para ver cada alteração atualize a página de backoffice no browser.

Os erros de compilação são apresentados no terminal.

Já os erros de execução são apresentados na consola do browser, lembre de inspecionar se há algum erro.

### Compilação Integrada

Outra alternativa é integrar os comandos de compilação junto com o servidor do Netuno, consolidando tudo em
apenas um terminal, o que evita ter vários terminais abertos com a otimização de ter tudo em apenas um terminal
central.

Abra no seu editor o arquivo de configuração da aplicação:

- `config/_development.json`

Altere o `enabled` para `true`.

```json title="config/_development.json"
  ...
  "commands": [{
    "command": "pnpm run watch",
    "enabled": true,
    "install": "pnpm install",
    "path": "ui"
  }],
  ...
```

Reinicie o servidor do Netuno para está nova configuração ser considerada e ter efeito.

> Para parar a execução do servidor do Netuno no terminal, encerre prescionando `CTRL` + `C` no terminal.

Volte a iniciar o servidor do Netuno idicando a aplicação:

```shell
./netuno server app=minhaapp
```

Repare que agora o servidor do Netuno está executando automaticamente os comandos de compilação do frontend.

Tudo integrado no mesmo terminal.

## Serviço que gera o PDF

Como o botão para `Exportar PDF` não funciona ainda, pois falta programar o serviço de API que 
gera o PDf em si. 

Então para finalizar, apresenta-se o código do serviço que será responsável por gerar o PDF.

Observe o excerto de código anterior do botão para `Exporar PDF`, que só precisamos de adicionar a `url` do 
serviço no atributo _`href`_ do botão.

Vamos criar a pasta `📂 cliente` e o seguinte arquivo `exporta-pdf.js`, em:

- `server/services/cliente/exporta-pdf.js`

> Dentro da pasta `📂 server` é onde desenvolvemos a API do backend.

Copie e cole o seguinte código:

```javascript title="server/services/cliente/exporta-pdf.js"
_header.contentType('pdf')

const pdfDocument = _pdf.newDocument(_pdf.pageSize('A5'));

pdfDocument.add(
    _pdf.paragraph('Lista de Clientes:')
        .setFontSize(16)
        .setFontColor(_pdf.color("#1abc9c"))
)

const dbClientes = _db.form('cliente').all()

for (const dbCliente of dbClientes) {
    pdfDocument.add(
        _pdf.paragraph(dbCliente.getString('nome'))
            .setFontSize(12)
            .setFontColor(_pdf.color("#748dae"))
    )
}

pdfDocument.close()
```

Pode verificar a execução do serviço abrindo no browser diretamente o seguinte endereço:

- http://localhost:9000/services/cliente/exporta-pdf

Qualquer erro de execução aparece no terminal do servidor do Netuno.

Agora sim, o botão para `Exportar PDF` no dashboard funciona bem.

## Conclusão

Neste tutorial foi feita uma visão geral de como é o desenvolvimento customizado do frontend alterando o 
dashboard, como é a criação de formulários e campos, consulta SQL em base de dados, e criação de um serviço 
de API no backend.

Ainda demonstramos como integrar os comandos de frontend com o servidor de backend do Netuno em apenas um 
terminal centralizado, o que permite a aceleração no desenvolvimento evitando a consulta dispersa em vários 
terminais.

Repare como rapidamente foi criado um formulário para registrar e manipular informações em base de dados.

Veja como é muito ágil o desenvolvimento dos serviços de API no backend, sem precisar reiniciar o servidor em cada
alteração de código, o que normalmente não acontece com outras tecnologias. 

A plataforma Netuno é feita para acelerar e otimizar o desenvolvimento fullstack.

Continue a explorar mais o Netuno e acelere definitivamente o trabalho de desenvolvimento.

Participe do servidor no Discord, siga-nos nas redes sociais, e veja os videos de tutoriais no canal do Youtube,
os links estão no fim desta página.
