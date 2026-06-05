---
sidebar_position: 2
id: config
title: Configuração
---

# Configure a aplicação

Este guia apresenta os passos iniciais para configurar o idioma da aplicação Demo, do banco de dados e habilitar comandos automáticos executados com o servidor.

Todas as alterações são feitas no arquivo `_development.json` de configuração da aplicação **Demo**, localizado na pasta /apps/demo/**config**.

### Pré-Requisitos

Antes de editar a configuração, confirme estes pontos:

- A aplicação Demo já foi criada e inicializada.
- Você está na raiz do projeto Netuno.
- Um editor de código está aberto em `/apps/demo/config/development.json`.
- Você poderá reiniciar o servidor após salvar as alterações.

## Configuração de Idiomas

### 1. Aplicação

No arquivo de configuração, localize os campos `language` e `locale` para alterar o idioma da aplicação.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Defina os valores de acordo com o idioma desejado:

- **Português**: `pt_PT` ou `pt_BR`
- **Inglês**: `en_GB` ou `en_US`

### 2. Banco de Dados

Localize o objeto **"db"** e, em seguida, as configurações de **"default"**.

Altere o campo **"name"** para definir o banco de dados correspondente:

- `demo_pt`: banco de dados em português.
- `demo_en`: banco de dados em inglês.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Habilitar Múltiplos Comandos 

O Netuno permite executar múltiplos comandos simultaneamente na inicialização do servidor, exibindo as saídas no mesmo console.

Por padrão, a aplicação **Demo** traz o comando `bun run watch` configurado, mas desativado. Este comando compila automaticamente qualquer alteração feita nos arquivos de código do backoffice.

Para ativá-lo, localize no array **"commands"** e altere o valor do campo **enabled** de false para **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parâmetros do Objeto "commands"

- `enabled`: ativa (true) ou desativa (false) a execução automática do comando.
- `path`: define o caminho (pasta) da aplicação onde o comando será executado.
- `command`: define o comando que será executado no terminal.

:::tip
Você pode adicionar outros comandos dentro do array `"commands"`, desde que mantenha a mesma estrutura de objeto.
:::


Depois de salvar o arquivo de configuração, reinicie o servidor Netuno para aplicar as alterações.


## Resultado Esperado

Após reiniciar o servidor, confirme os seguintes pontos:

- A aplicação Demo está no idioma configurado.
- O console exibe a execução do comando `bun run watch`, se ele estiver habilitado.

## Próximos Passos

Avance para a próxima etapa de **Formulário** para explorar e modificar a aplicação de demonstração.
