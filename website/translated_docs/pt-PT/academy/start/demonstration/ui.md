---
id: ui
title: Interface & Design
sidebar_label: Interface & Design
---

## Introdução

O desenvolvimento do frontend, ou seja, o que é processado visualmente pelo browser, é realizado dentro da pasta **ui**.

Como padrão, nesta pasta encontra-se o ambiente de desenvolvimento desenvolvido em <a href="https://reactjs.org/" target="_blank">ReactJS</a> com <a href="https://ant.design/" target="_blank">Ant.Design</a> e <a href="http://lesscss.org/" target="_blank">Less</a>, compilado utilizando o <a href="https://webpack.js.org/" target="_blank">Webpack</a>.

Apesar de o ambiente padrão se encontrar configurado para estas tecnologias, visto serem bastante utilizadas hoje em dia, não se encontra limitado às mesmas.

Caso pretenda utilizar outra tecnologia como VueJS, MaterialUI, Sass, Bootstrap, TypeScript, etc... basta alterar dentro da pasta `📂 ui` as configurações do `📂 package.json` e do `📂 webpack.config.js` para as tecnologias que preferir mais.

> ### Terminal Integrado
>
> Sempre que o servidor do Netuno inicia, também executa o <a href="https://www.npmjs.com/" target="_blank">NPM</a> com o comando `➡️ npm run watch` dentro da pasta `📂 ui` da aplicação em execução. Que neste caso deverá ser a aplicação **demo**_nstração_.
>
> O output do <a href="https://www.npmjs.com/" target="_blank">NPM</a> é integrado no mesmo output do servidor do Netuno, assim apenas há um único terminal com o output integrado do servidor e da compilação da **U**_ser_ **I**_nterface_.

## Consumir o Serviço

Após ter sido criado o serviço **trabalhadores** em `📂 server/services/trabalhadores.js` através do Visual Studio Code que diponibiliza a informação em <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> no endereço:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabalhadores</a>

O próximo passo é consumi-lo para apresentar os dados na inteface do browser.

Com estes dados vamos e apresentá-los numa tabela e um gráfico.

Assumindo que tem o Visual Studio Code ou outro editor de texto aberto com a aplicação de **demo**_nstração_ abra o seguinte ficheiro no editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

Vamos alterar este código já existente.

### Preparar o `state`

Logo no início da class do componente `DashboardContainer` dentro do `constructor` está a definição do seu _state_.

Adicione uma nova entrada para guardar os dados das tarefas da seguinte forma:

```jsx
            // 👇 Adicione a nova linha de código abaixo:
            const [trabalhadores, setTrabalhadores] = useState([]);
```

Ou seja, acrescente a nova linha `const [workers, setWorkers] = useState([]);` de estado.

### Criar Método `loadWorkers`

Mais abaixo repare que existe um método chamado `loadWorkers`, este método realiza a obtenção dos dados dos trabalhadores que aparecem no dashboard atualmente.

Este método também serve para carregar os dados dos trabalhadores.

Insira o código abaixo:

```jsx
    /**
    *** 🚀 Carrega os dados das Trabalhores.
    ***    Através da execução do serviço:
    **     http://localhost:9000/services/trabalhadores
    */
    const loadWorkers = () => {
        setWorkers([]);
        setLoading(true);
        _service({
        url: intl.locale.indexOf('pt') == 0 ? '/services/trabalhadores' : '/services/workers',
        success: (response) => {
            setWorkers(response.json);
            setLoading(false);
        },
        fail: (e) => {
            setLoading(false);
            console.error('Workers service failed.', e);
            message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
        }
        });
    };

    useImperativeHandle(ref, () => ({
        loadWorkers
    }));
```

O que este código acima faz é passar os dados das trabalhadores para o _state_ do componente em <a href="https://reactjs.org/" target="_blank">ReactJS</a>, isto através da execução do serviço **trabalhadores** que, ao receber os dados em <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> , armazena os mesmos no _state_ através da execução do `setWorkers`.

No código final os métodos deverão ficar estruturados desta forma:

```jsx
    useEffect(() => {
        ...
    }, []);

    const loadWorkers = () => {
        ...
    }

    useImperativeHandle() {
        ...
    }

    return ( 
        ...
    );
```

> Onde os `...` são as diversas linhas de código omitidas dentro dos respectivos métodos

### Executar o novo método `useEffect`

Agora falta executar o nosso novo método `useEffect` quando o componente é "montado", este método é executado quando o componente é construído na apresentação visual do browser.

Para isto basta, um pouco mais acima, acrescentar a linha de código `loadWorkers();` dentro do método `useEffect` desta forma:

```jsx
    useEffect(() => {
        loadWorkers();
    }, []);
```

Esta nova linha de código vai chamar o método que executa o serviço <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabalhadores</a>, que foi criado anteriormente, para obter os dados em JSON e guardá-los no `state` (_estado_) do componente para ser apresentado no return (_visualização_).

### Compilação

**Grave** o ficheiro e logo a seguir repare que no **terminal** onde tem o Netuno em execução vai aparecer o resultado da nova compilação do **ui**, com novas linhas do resultado de compilação do <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://webpack.js.org/" target="_blank">WebPack</a>.

O output esperado no **terminal** deverá ser algo semelhante ao seguinte:

```
Hash: abe630735cdaa909166b
Version: webpack 4.41.2
Time: 969ms
Built at: 01/12/2019 21:42:28
     Asset      Size  Chunks                   Chunk Names
   main.js  3.11 MiB    main  [emitted]        main
main.js.map  3.47 MiB    main  [emitted] [dev]  main
Entrypoint main = main.js main.js.map
[./src/containers/DashboardContainer/index.jsx] 4.22 KiB {main} [built]
   + 425 hidden modules
```

Caso haja algum erro na compilação então aparecerá no **terminal** a indicação do problema.

Até aqui realizámos o consumo do nosso serviço **tarefas** em que os dados obtidos ficam guardados no `state` do componente `DashboardContainer` que assim fica disponível para ser utilizado no `return`.

## Apresentar os Dados

Falta apresentar os dados visualmente na interface que o utilizador vê no browser.

Para apresentar os dados no browser temos que alterar o método `return`, que processa o aspecto visual dos componentes em <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

No fim do código do `DashboardContainer` encontrará o método: `return ( ... );`

Vamos alterá-lo adicionando apenas mais uma linha de código para conter mais um componente `DataVisualization` que vai apresentar os dados referentes às **trabalhadores**, o código deverá ficar da seguinte forma:

```jsx
    // 🔍 Procure no código existente por:
    return (
    <div ref={ref}>
      { loading == false ?
        <DataVisualization data={workers} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Repare que apenas a linha abaixo é que deve ser acrescentada:

```jsx
<DataVisualization data={workers} />
```

Assim o `DataVisualization` vai receber os dados obtidos através do serviço **tarefas** via JSON que ficaram guardados no `state`.

### Compilação Final

**Guarde** o ficheiro com todas as alterações realizadas até aqui.

Certifique-se que no output do **terminal** não existem erros.

Agora atualize a página no browser e deverá ver o resultado final, ou alternativamente, clique no link abaixo:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Se o dashboard aparecer em branco quer dizer há erros no código.
>
> Verifique na consola do **browser** nas **ferramentas do programador** se há erros.

## Saber mais

Introdução rápida ao <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Um Guia Para Iniciantes no ReactJS.
