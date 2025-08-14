---
sidebar_position: 6
id: ui
title: Interface & Design
---

## Introdução

O desenvolvimento do frontend, ou seja, o que é processado visualmente pelo browser, é realizado dentro da pasta **ui**.

Como padrão, nesta pasta encontra-se o ambiente de desenvolvimento desenvolvido em <a href="https://reactjs.org/" target="_blank">ReactJS</a> com <a href="https://ant.design/" target="_blank">Ant.Design</a> e <a href="http://lesscss.org/" target="_blank">Less</a>, compilado utilizando o <a href="https://vite.dev/" target="_blank">Vite</a>.

Apesar de o ambiente padrão se encontrar configurado para estas tecnologias, visto serem bastante utilizadas hoje em dia, não se encontra limitado às mesmas.

Caso pretenda utilizar outra tecnologia como VueJS, MaterialUI, Sass, Bootstrap, TypeScript, etc... basta alterar dentro da pasta `📂 ui` as configurações do `📂 package.json` e do `📂 vite.config.js` para as tecnologias que preferir mais.

> Mais sobre o [terminal integrado e centralizado](/docs/academy/explore/centralized-terminal).

## Pré-Requisitos

Antes de começar é importante certificar que tem o [PNPM](https://pnpm.io/) e o [Bun](https://bun.sh/) instalados.

> Veja como [instalar o PNPM e o Bun](/docs/academy/website/pnpm-bun).

Para entender melhor como a interface de utilização funciona recomendamos:

- [Mais sobre a Camada UI de front-end.](/docs/academy/ui/ui-layer)

## Consumir o Serviço

Após ter sido criado o serviço **trabalhadores** em `📂 server/services/trabalhadores.js` através do Visual Studio Code que diponibiliza a informação em <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> no endereço:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabalhadores</a>

O próximo passo é consumi-lo para apresentar os dados na inteface do browser.

Com estes dados vamos e apresentá-los numa tabela e um gráfico.

Assumindo que tem o Visual Studio Code ou outro editor de texto aberto com a aplicação de **demo**_nstração_ abra o seguinte ficheiro no editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

Vamos alterar este código já existente.

### Preparar o `state`

Logo no início da componente `DashboardContainer` dentro da `function` está a definição do seu _state_.

Adicione uma nova entrada para guardar os dados dos trabalhadores da seguinte forma:

```jsx
            // 👇 Adicione as novas linhas de código abaixo:
            const [trabalhadores, setTrabalhadores] = useState([]);
            const [carregar, setCarregar] = useState(false);
```

Ou seja, acrescente a nova linha `const [trabalhadores, setTrabalhadores] = useState([]);` de estado.

### Criar Método `carregarTrabalhadores`

Mais abaixo repare que existe um método chamado `carregarTrabalhadores`, este método realiza a obtenção dos dados dos trabalhadores que aparecem no dashboard atualmente.

Este método também serve para carregar os dados dos trabalhadores.

Insira o código abaixo:

```jsx
    /**
    *** 🚀 Carrega os dados dos Trabalhores.
    ***    Através da execução do serviço:
    **     http://localhost:9000/services/trabalhadores
    */
    const carregarTrabalhadores = () => {
        setTrabalhadores([]);
        setCarregar(true);
        _service({
            url: intl.locale.indexOf('pt') == 0 ? '/services/trabalhadores' : '/services/workers',
            success: (response) => {
                setTrabalhadores(response.json);
                setCarregar(false);
            },
            fail: (e) => {
                setCarregar(false);
                console.error('Falha no serviço dos Trabalhadores.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

O que este código acima faz é passar os dados das trabalhadores para o _state_ do componente em <a href="https://reactjs.org/" target="_blank">ReactJS</a>, isto através da execução do serviço **trabalhadores** que, ao receber os dados em <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> , armazena os mesmos no _state_ através da execução do `setTrabalhadores`.

No código final os métodos deverão ficar estruturados desta forma:

```jsx
    useEffect(() => {
        ...
    }, []);

    const carregarTrabalhadores = () => {
        ...
    }

    return ( 
        ...
    );
```

> Onde os `...` são as diversas linhas de código omitidas dentro dos respectivos métodos

### Executar o novo método `useEffect`

Agora falta executar o nosso novo método `useEffect` quando o componente é "montado", este método é executado quando o componente é construído na apresentação visual do browser.

Para isto basta, um pouco mais acima, acrescentar a linha de código `carregarTrabalhadores();` dentro do método `useEffect` desta forma:

```jsx
    useEffect(() => {
        carregarTrabalhadores();
    }, []);
```

Esta nova linha de código vai chamar o método que executa o serviço <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabalhadores</a>, que foi criado anteriormente, para obter os dados em JSON e guardá-los no `state` (_estado_) do componente para ser apresentado no return (_visualização_).

### Compilação

**Grave** o ficheiro e logo a seguir repare que no **terminal** onde tem o Netuno em execução vai aparecer o resultado da nova compilação do **ui**, com novas linhas do resultado de compilação do <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

O output esperado no **terminal** deverá ser algo semelhante ao seguinte:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

Caso haja algum erro na compilação então aparecerá no **terminal** a indicação do problema.

Até aqui realizámos o consumo do nosso serviço **trabalhadores** em que os dados obtidos ficam guardados no `state` do componente `DashboardContainer` que assim fica disponível para ser utilizado no `return`.

## Apresentar os Dados

Falta apresentar os dados visualmente na interface que o utilizador vê no browser.

Para apresentar os dados no browser temos que alterar o método `return`, que processa o aspecto visual dos componentes em <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

No fim do código do `DashboardContainer` encontrará o método: `return ( ... );`

Vamos alterá-lo adicionando apenas mais uma linha de código para conter mais um componente `DataVisualization` que vai apresentar os dados referentes às **trabalhadores**, o código deverá ficar da seguinte forma:

```jsx
    // 🔍 Procure no código existente por:
    return (
    <div ref={ref}>
      { carregar == false ?
        <DataVisualization data={trabalhadores} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Repare que apenas a linha abaixo é que deve ser acrescentada:

```jsx
<DataVisualization data={trabalhadores} />
```

Assim o `DataVisualization` vai receber os dados obtidos através do serviço **trabalhadores** via JSON que ficaram guardados no `state`.

### Compilação Final

**Guarde** o ficheiro com todas as alterações realizadas até aqui.

Certifique-se que no output do **terminal** não existem erros.

Agora atualize a página no browser e deverá ver o resultado final, ou alternativamente, clique no link abaixo:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Se o dashboard aparecer em branco quer dizer há erros no código.
>
> Verifique na consola do **browser** nas **ferramentas do programador** se há erros.

## Saber mais 👇

Introdução rápida ao <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Um Guia Para Iniciantes no ReactJS.</a>
