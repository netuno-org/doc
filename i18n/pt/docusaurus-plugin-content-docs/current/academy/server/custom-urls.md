---
id: custom-urls
title: Custom URLs e Hosts
sidebar_label: Custom URLs e Hosts
---

## Introdução

O Netuno permite alterar os endereços padrão, por exemplo:

- O endereço da interface de administração, `admin`.
- O endereço de arquivos públicos, como imagens, CSS e JS, `public`.
- O endereço dos serviços da API REST, `services`.
- O endereço do endpoint do protocolo MCP, `mcp`.

## URLs

Navegue dentro da aplicação que está a desenvolver até ao arquivo de configuração de ambiente. Neste exemplo, iremos utilizar o arquivo de ambiente de desenvolvimento localizado em:

- 📂 `config/_development.json`

Verifique se já não existe a configuração de URL, se não existir adicione no fim do arquivo de configuração (em formato JSON) os parâmetros de configuração de URL, por exemplo:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/",
        "mcp": "/mcp/"
    },
    ...
}
```

#### admin

Define o prefixo do endereço da URL da interface de administração, o padrão é apenas `/`.

#### public

Define o prefixo do endereço da URL dos arquivos estáticos que são públicos como imagens, estilo CSS e de código JavaScript, o padrão é `/public`.

#### services

Define o endereço da URL inicial dos serviços web da API REST, o padrão é `/services`.

#### mcp

Define o endereço da URL inicial do endpoint web do protocolo MCP, o padrão é `/mcp`.

## Hosts

Navegue dentro da aplicação que está a desenvolver até ao arquivo de configuração de ambiente. Neste exemplo, iremos utilizar o arquivo de ambiente de desenvolvimento localizado em:

- 📂 `config/_development.json`

Verifique se já não existe a configuração de Host (Domínios), se não existir adicione no fim do arquivo de configuração (em formato JSON) os parâmetros de configuração de Host, por exemplo:

- Caso seja apenas um host utilize uma string como valor:

```json
{
    ...
    "host": "meu-projeto.com",
    ...
}
```

- Caso tenha múltiplos hosts utilize um array de strings como valor:

```json
{
    ...
    "host": [
        "meu-projeto.com",
        "www.meu-projeto.com"
    ],
    ...
}
```

Desta forma define os hosts/domínios globais da aplicação, qualquer pedido com um destes hosts que chegue ao Netuno será processado pela aplicação.

Também pode definir hosts/domínios específicos para cada tipo de servidor de serviços globais que o Netuno fornece, por exemplo:

```json
{
    ...
    "host": {
        "admin": "admin.meu-projeto.com",
        "services": ["api.meu-projeto.com", "services.meu-projeto.com"],
        "mcp": "mcp.meu-projeto.com"
    },
    ...
}
```

Caso seja apenas um host/domínio utilize o valor do tipo string, caso seja múltiplos hosts/domínios utilize um array com strings, ambos são suportados.

#### admin

Define o endereço de domínio ou host do endereço da interface de administração.

#### services

Define o endereço de domínio ou host do endereço dos serviços web da API REST.

#### mcp

Define o endereço de domínio ou host do endereço do endpoint do protocolo MCP.

## Conclusão

A customização das URLs é importante, tanto para torná-la mais intuitiva como poder torná-la mais complexa e aumentar a segurança.

E a associação da aplicação com Hosts ou Domínios específicos, permite melhorar a gestão dos acessos e a disponibilização  

Por exemplo, no endereço de administração pode ser colocado um prefixo com uma sequência de caracteres aleatórios, assim só quem souber decor acederá o endereço de acesso, isso dificulta o acesso e evita ataques.
