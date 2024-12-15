---
id: configuration
title: Configuração
sidebar_label: Configuração
---

## Configurações Básicas de uma Aplicação

A configuração das aplicações ficam na pasta:

- `minha-app/config`

Ou seja, dentro da pasta raíz da aplicação encontra-se a pasta `config`.

Normalmente na pasta `config` contém ficheiros `.json` e `.js`, como por exemplo:

- `_development.js`
- `_development.json`
- `_production.js`
- `_production.json`

Os ficheiros de `_development.*` são processados apenas quando o ambiente (`environment`) do Netuno está definido como desenvolvimento (`development`).

Já os ficheiros de `_production.*` são processados apenas quando o ambiente (`environment`) do Netuno esta definido como produção (`production`).

### JSON

No ficheiro `_*.json` ficam as definições de todas as parametrizações de configuração.

### JS

O ficheiro `_*.js` é executado quando a configuração é carregada, permite alterar configurações programaticamente e realizar qualquer tipo de processamento.

## Definição do Ambiente Geral

A configuração do tipo de ambiente no Netuno é definida no ficheiro `./config.js` que está na raíz do Netuno.

Ao editar o ficheiro `/config.js` encontrará a configuração do ambiente (`environment`), como:

```
config.env = 'development'
```
> Neste caso está configurado para o ambiente de desenvolvimento o que faz com que nas aplicações seja utilizada a configuração `config/_development.json`.

### Produção

Para alterar o tipo de ambiente para produção deve ser alterado esta configuração acima para `production`, por exemplo:

```
config.env = 'production'
```

> O tipo de ambiente é alterado para produção e nas aplicações passa a ser utilizado a configuração `config/_production.json`.

### Outros Ambientes

Pode ser configurado outros tipos de ambientes no Netuno com o nome que for pretendido.

A configuração da aplicação carregada de acordo com o valor que é definido no `config.env` que está na configuração do `config.js` que está na raiz do Netuno.

Outros ambientes podem ser definidos alterando o valor do tipo de ambiente, por exemplo:

```
config.env = 'meu-embiente'
```

E adicionar dentro da pasta `config` da **aplicacão** o ficheiro `_meu-embiente.json`.

A configuração da aplicação deve iniciar com `_` e ter a extensão `.json` e outro ficheiro com `.js`.

## Repositório GIT

Normalmente deve ser evitado incluir no repositório de código **GIT** os ficheiros de configuração.

Para não sincronizar os ficheiros de configuração no **GIT** adicione no ficheiro `.gitignore` que encontra-se na raiz da aplicação:

```
config/_development.json
config/_production.json
```

E um ficheiro de configuração de exemplo deve ser adicionado para servir de referência para futuras configurações da aplicação, este ficheiro de configuração de exemplo pode ficar em:

- `config/sample.json`

> O `sample.json` pode ser uma cópia ou adaptação da configuração `_development.json`.

## Programaticamente

No código executado pelo servidor, como serviços, as configurações podem ser acessadas com o recurso `_app`.

Por exemplo aceder às configurações gerais:

```
_log.info(_app.config().getString("name"))
```

### Definições à Medida

Pode ser definido configurações à medida nos ficheiros `_*.json` na chave de configuração `settings`, por exemplo:

```
{
    ...
    "settings": {
        "public": {
            "itemsPorPagina": 10
        }
        "intervaloEmails": 10
    }
    ...
}
```

> A parametrização `public` é acessível no `ui` (_user interface_) da área administrativa, como no desenvolvimento de dashboards.

Para aceder às definições gerais à medida que ficam na chave de configuração `settings` no ficheiro `_*.json`:

```
const intervaloEmails = _app.settings().getInt("intervaloEmails")
```

Para aceder às definições à medida que ficam na parametrização do `public` (público) a partir do `ui` (_user interface_), pode ser utilizado o seguinte código:

```
const itemsPorPagina = netuno.config.app.settings.itemsPorPagina;
```

> O `netuno.config.app.settings` pode ser acedido no desenvolvimento do frontend programado na pasta `ui` dentro da aplicação.

## Conclusão

Com as configurações do Netuno é possível suportar diversos tipos de ambiente e customizar cada uma das respectivas configurações por cada um dos ambientes.

Pode adicionar configurações à medida através dos `settings`, permite separar as configurações de frontend e backend.
