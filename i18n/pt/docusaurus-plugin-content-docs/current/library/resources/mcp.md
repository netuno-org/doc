---
id: mcp
title: MCP - Model Context Protocol
sidebar_label: MCP - Model Context Protocol
---

Recurso para implementar o Model Context Protocol (MCP) que permite expor ferramentas (tools) através de scripts carregados dinamicamente da pasta `app/mcp/`. Cada script pode registar uma ou mais ferramentas que podem ser executadas remotamente, seguindo o padrão do MCP para integração com assistentes de IA.

O MCP carrega automaticamente todos os scripts JavaScript da pasta `app/mcp/` e disponibiliza as ferramentas registadas para execução. Suporta middlewares para interceptar chamadas antes da execução, permitindo validações, logs, autorização, etc.

A configuração do servidor MCP é feita no ficheiro `_app/config.json` na secção `mcp.server`.

```javascript
// Exemplo de script em app/mcp/calculadora.js
// Registar uma ferramenta de soma
_mcp.registerTool(
    'somar',
    'Soma dois números inteiros',
    _val.map()
        .set('type', 'object')
        .set('properties', _val.map()
            .set('a', _val.map().set('type', 'number').set('description', 'Primeiro número'))
            .set('b', _val.map().set('type', 'number').set('description', 'Segundo número'))
        )
        .set('required', _val.list().add('a').add('b')),
    (input) => {
        const resultado = input.get('a') + input.get('b');
        return _val.map().set('success', true).set('resultado', resultado);
    }
);

// Registar uma ferramenta de multiplicação
_mcp.registerTool(
    'multiplicar',
    'Multiplica dois números inteiros',
    _val.map()
        .set('type', 'object')
        .set('properties', _val.map()
            .set('a', _val.map().set('type', 'number').set('description', 'Primeiro número'))
            .set('b', _val.map().set('type', 'number').set('description', 'Segundo número'))
        )
        .set('required', _val.list().add('a').add('b')),
    (input) => {
        const resultado = input.get('a') * input.get('b');
        return _val.map().set('success', true).set('resultado', resultado);
    }
);
```
```javascript
// Exemplo de listagem e execução de ferramentas
// Listar todas as ferramentas disponíveis
const tools = _mcp.listAvailableTools();
for (const tool of tools) {
    _log.info('Ferramenta: ' + tool.get('name') + ' - ' + tool.get('description'));
}

// Executar uma ferramenta
const resultado = _mcp.executeTool('somar', _val.map().set('a', 5).set('b', 3));
if (resultado.get('success')) {
    _log.info('Resultado: ' + resultado.get('resultado'));
}
```

---

## addMiddlewares

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>addMiddlewares</span>(<span style={{color: '#FF8000'}}>middlewares</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.resource.MCP$MCPMiddleware[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Adiciona middlewares que serão executados antes de cada ferramenta. Se um middleware retornar um resultado não nulo, a execução da ferramenta é interrompida e esse resultado é retornado.

##### Como Usar

```javascript
// Exemplo de middleware para logging
_mcp.addMiddlewares((tool) => {
    _log.info('Executando ferramenta: ' + tool.name);
    return null; // Continua execução
});
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **middlewares** | _org.netuno.tritao.resource.MCP$MCPMiddleware[]_ | Um ou mais middlewares a adicionar. |

##### Retorno

( _void_ )


---

## containsTool

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>containsTool</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se existe uma ferramenta registada com o nome especificado.

##### Como Usar

```javascript
if (_mcp.containsTool('somar')) {
    _log.info('Ferramenta de soma está disponível');
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da ferramenta a verificar. |

##### Retorno

( _boolean_ )

Verdadeiro se a ferramenta existir, falso caso contrário.

---

## executeTool

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>executeTool</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Executa uma ferramenta registada com os parâmetros fornecidos. Se a ferramenta não existir, retorna um objeto com `success: false` e uma mensagem de erro. Se algum middleware interromper a execução, retorna o resultado do middleware. Se ocorrer um erro durante a execução, retorna um objeto com `success: false` e a mensagem de erro.

##### Como Usar

```javascript
const resultado = _mcp.executeTool('somar', _val.map().set('a', 10).set('b', 20));
if (resultado.get('success')) {
    _log.info('Resultado: ' + resultado.get('resultado'));
} else {
    _log.error('Erro: ' + resultado.get('error'));
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da ferramenta a executar. |
| **input** | _[Values](/docs/library/objects/Values)_ | Objeto com os parâmetros de entrada conforme o esquema definido no registo da ferramenta. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Resultado da execução. Em caso de sucesso, contém `success: true` e os dados retornados pela ferramenta. Em caso de erro, contém `success: false` e `error` com a mensagem de erro.

---

## getServerInfo

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>getServerInfo</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Obtém as informações do servidor MCP, incluindo nome e versão configurados.

##### Como Usar

```javascript
const info = _mcp.getServerInfo();
_log.info('Server: ' + info.get('name') + ' v' + info.get('version'));
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto com os campos `name` (nome do servidor) e `version` (versão do servidor).

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se o servidor MCP está ativo e disponível para processar requisições.

##### Como Usar

```javascript
if (_mcp.isEnabled()) {
    _log.info('MCP server is active');
}
```

##### Retorno

( _boolean_ )

Verdadeiro se o servidor MCP estiver ativo, falso caso contrário.

---

## listAvailableTools

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>listAvailableTools</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Lista todas as ferramentas registadas no servidor MCP, incluindo nome, descrição e esquema de entrada.

##### Como Usar

```javascript
const tools = _mcp.listAvailableTools();
for (const tool of tools) {
    _log.info('Nome: ' + tool.get('name'));
    _log.info('Descrição: ' + tool.get('description'));
    _log.info('Esquema: ' + JSON.stringify(tool.get('inputSchema')));
}
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Lista de objetos, cada um contendo os campos: `name` (nome da ferramenta), `description` (descrição) e `inputSchema` (esquema JSON dos parâmetros).

---

## registerTool

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>registerTool</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>descricao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>schema</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>execute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function&lt;[Values](/docs/library/objects/Values), [Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Regista uma nova ferramenta no servidor MCP, tornando-a disponível para execução remota. O esquema deve seguir o formato JSON Schema para validação dos parâmetros de entrada.

##### Como Usar

```javascript
_mcp.registerTool(
    'saudacao',
    'Retorna uma saudação personalizada',
    _val.map()
        .set('type', 'object')
        .set('properties', _val.map()
            .set('nome', _val.map().set('type', 'string').set('description', 'Nome da pessoa'))
        )
        .set('required', _val.list().add('nome')),
    (input) => {
        return _val.map()
            .set('success', true)
            .set('mensagem', 'Olá, ' + input.get('nome') + '!');
    }
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome único da ferramenta. Deve ser usado para executar a ferramenta posteriormente. |
| **descricao** | _string_ | Descrição textual da funcionalidade da ferramenta. |
| **schema** | _[Values](/docs/library/objects/Values)_ | Esquema JSON que define os parâmetros de entrada da ferramenta. |
| **execute** | _java.util.function.Function_ | Função que implementa a lógica da ferramenta. Recebe os parâmetros de entrada e retorna o resultado. |

##### Retorno

( _void_ )


---

