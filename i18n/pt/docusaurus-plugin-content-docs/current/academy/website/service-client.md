---
sidebar_position: 4
id: service-client
title: Cliente para Serviços HTTP e API REST
sidebar_label: Cliente para Serviços
---

## Introdução

No ecossistema de tecnologias do Netuno é fornecido alguns módulos no NPM, como o:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Veja também o repositório [GIT do Service Client](https://github.com/netuno-org/service-client).

Este módulo serve para realizar as integrações com os serviços desenvolvidos no Netuno, ou seja, os endpoints 
da API REST desenvolvidos no backend do Netuno, dentro da pasta `server/services` nas aplicações Netuno.

É comum no desenvolvimento dos serviços utilizar programas como:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

Para fazer os testes de pedidos HTTP aos serviços.

No código de frontend para integrar estes serviços poderiamos utilizar o fetch, requests, AXIOS, e tantos outros.

Entretanto, o Netuno fornece o seu próprio cliente, que funciona no desenvolvimento do frontend JavaScript como 
também em backend NodeJS.

O motivo pelo qual o Netuno tem a sua própria implementação de cliente HTTP para os serviços é fornecer maior 
praticidade, simplificando a implementação do código e garantindo maior agilidade no desenvolvimento.

## Instalação

A instalação do cliente de serviços é como instalar qualquer outro módulo.

Onde temos o arquivo `package.json` executamos o comando de instalação:

```bash
bun add @netuno/service-client
```

## Importação

Para importar o cliente de serviços no desenvolvimento JavaScript moderno:

```js
import _service from '@netuno/service-client';
```

Para importar o cliente de serviços no desenvolvimento JavaScript clássico:

```js
const _service = require('@netuno/service-client');
```

Repare que o nome interno no código é `_service`.

> Por padrão o Netuno utiliza o `_` como prefixo para indicar que é algo interno ou específico como um recurso 
> ou uma ferramenta, do seu ecossistema.

Portanto, para manter o padrão devemos utilizar sempre o nome `_service`.

## Configuração

A configuração é feita globalmente, define-se a configuração uma
única vez, convém executar num ponto inicial do código geral.

Está será a configuração mínima:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

Ou seja, define o prefixo dos endereços dos serviços, isso evita
a necessidade de colocar sempre a URL completa, assim podemos nas
chamadas aos serviços indicar apenas o restante da URL.

### Configuração Completa

Podemos configurar valores padrão para todas as chamadas de
serviços, sendo que na chamada a cada serviços podemos sobrepor
estes valores.

Veja todos os parâmetros que podemos configurar:

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

É o prefixo global das URL.

#### url

É a parte da URL que é agregada ao prefixo, o endereço específico
do serviço.

#### method

Método HTTP que será utilizado na requisição do pedido HTTP, por
padrão é `GET`.

#### credentials

Define qual o comportamento das credenciais nas chamadas HTTP:

- `omit` - Nunca envia e nem recebe credenciais.
- `same-origin` - Apenas envia e incluí credenciais quando for 
requestes no mesmo domínio.
- `include` - Sempre deve incluir as credenciais, mesmo se o domínio for diferente.

Por padrão o valor é `include`, pois é o que faz mais sentido no
desenvolvimento padrão, o backend pode estar ou não no mesmo domínio
depende da arquitetura, e no desenvolvimento local por vezes difere
de produção, portanto para evitar surpresas recomendamos utilizar
`include`.

#### headers

Nos `headers` podemos definir chaves e valores no cabeçalho HTTP.

Por padrão é definido que será enviado e recebido dados no formato
JSON.

#### start

Função de `callback` executada quando vai iniciar o pedido HTTP.

#### success

Função de `callback` executada quando o pedido HTTP foi executado
com sucesso no servidor de backend.

O conteúdo de resposta é obtido no primeiro argumento da função.

#### fail

Função de `callback` executada quando o pedido HTTP gerou algum
error.

Os detalhes do erro é obtido no primeiro argumento da função.

#### end

Função de `callback` executada quando o pedido HTTP foi concluído.

É executado sempre, independente se houve sucesso ou erro.

## Utilização

Para executar um serviço com um pedido HTTP definimos os valores
dos parâmetros que configuram os requisitos do serviço.

Na chave `data` enviamos os dados em si, ou seja, todos os parâmetros
de dados que vamos enviar para o serviço de backend.

Veja o exemplo básico de um pedido:

```js
import _service from '@netuno/service-client';

_service({
  url: "meu-servico",
  data: { id: 1, exemplo: "Olá backend." },
  start: () => {
    console.log("O pedido vai iniciar.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Respondeu em texto:", response.text);
    }
    if (response.json) {
      console.info("Respondeu em JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("Falhou com o erro:", error);
  },
  end: () => {
    console.log("O pedido foi concluído.");
  }
});
```

A URL final levará em conta o prefixo definido globalmente na
configuração geral.

Como não foi definido o método HTTP, então será enviado com o
método padrão que foi definido na configuração geral, que por
padrão é `GET`.

### Simples

Exemplo simples de como realizar a execução de um pedido do tipo `POST`:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "produto",
  data: { nome: "Chapéu de Palha", quantidade: 20 },
  success: ({json}) => {
    console.info("Produto criado com sucesso:", json);
  },
  fail: (error) => {
    console.error("Falha ao criar produto:", error);
  }
});
```

### Formulário

Quando utilizamos formulários podemos carregar a classe FormData com o conteúdo do formulário, veja o exemplo:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("formulario"));
_service({
  method: "PUT",
  url: "cliente",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Cliente atualizado com sucesso.");
    } else {
      alert("Resposta inválida.");
    }
  },
  fail: (e) => {
    console.log("Erro", e);
  }
});
```

### Upload

Exemplo simples de como realizar o upload de arquivos utilizando a classe `FormData`:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('arquivo', document.getElementById("campoArquivo").files[0]);
formData.append('outroCampo', 'valor...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('Arquivo enviado com sucesso.');
  },
  fail: (e) => {
    console.log("Erro na Resposta", e);
  }
});
```

### Download

Podemos realizar o download de arquivos gerados dinamicamente por serviços de forma integrada no contexto da
página.

#### BLOB - Objeto Binário Grande

Para realizar o download de respostas binárias devemos definir o `blob` com o valor `true` na parametrização base, 
e obtemos os bytes gerados no `blob` da resposta.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Define que a resposta é binária.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Resposta inválida.");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

#### Arquivo Customizado

O nome e o tipo do arquivo pode ser customizado no frontend, a dependência [DownloadJS](https://www.npmjs.com/package/downloadjs) é muito útil neste processo. 

Instale a dependência [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

No código pode ser utilizado da seguinte forma:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/relatorio/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "relatorio.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Erro", e);
  }
});

_service({
  url: "/services/relatorio/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "relatorio.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Erro", e);
  }
});
```

### URL para Serviços

Há situações em que precisamos gerar a URL de serviços, por exemplo, quando há serviços que fornecem recursos que 
devem ser integrados no HTML ou no CSS. 

Um exemplo claro é o Avatar, o usuário define a sua imagem de avatar, e para apresentar podemos gerar a URL final
da seguinte forma:

```js
const avatarLink = _service.url(`/profile/avatar?uid=${user.uid}`)
```

A URL gerada pode ser injetada no HTML ou em uma propriedade do CSS, como o background.

### React & Ant.Design

Como utilizamos muito o React e o Ant.Design, segue algumas dicas úteis.

Os imports clássicos:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Definir o estado de processamento:

```js
const [loading, setLoading] = useState(false);
```

Implementação do evento para salvar um formulário, que enviará o objeto com os valores preenchidos em formato JSON:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: 'Erro',
      description: 'Não foi possível salvar os dados.'
    });
  };
  _service({
    url: '/services/cliente',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Successo',
          description: 'Os dados foram salvos com sucesso.'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("Service Failed.", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

No componente de formulário do Ant.Design define-se a propriedade da ação que envia os dados com o evento 
previamente implementado, por exemplo:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Upload

Aqui está um exemplo completo de como fazer o upload de arquivos utilizando um formulário em Ant.Design e com
o FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function UploadForm() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("titulo", values.titulo);
    formData.append("arquivo", values.arquivo.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "arquivo/salvar",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: 'Formulário',
          description: 'Seus dados foram salvos com sucesso.'
        });
      },
      fail: (e) => {
        console.error("Upload Form Failed", e);
        notification.error({
          title: 'Formulário',
          description: 'Não foi possível salvar seus dados.'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Título" name="titulo"
        rules={[{ required: true, message: 'Por favor, insira o título.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Arquivo" name="arquivo"
        rules={[{ required: true, message: 'Por favor, insira o arquivo.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadForm;
```

## Conclusão

O Service Client agiliza a integração com backend para obter e enviar dados e arquivos.

É possível utilizar qualquer outro método nativo ou outra dependência para realizar estas operações, entretanto o
Service Client é desenvolvido para facilitar e agilizar as integrações, sendo flexível e muito intuitivo.

O intuito principal do Netuno fornecer no seu ecossistema o Service Client é garantir que o desenvolvimento seja
claro e rápido.

Ao utilizar o service Client caso encontre algum problema reporte nas [Issues](https://github.com/netuno-org/service-client/issues) do projeto.

⭐ Lembre-se de dar a sua estrela no GitHub do projeto:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).
