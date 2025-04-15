---
id: custom-urls
title: Custom URLs
sidebar_label: Custom URLs
---

## Introdução

O Netuno permite alterar os endereços padrão, por exemplo:

- O endereço da interface de administração, `admin`.
- O endereço de ficheiros públicos, como imagens, CSS e JS, `public`.
- O endereço dos serviços da API REST, `services`.

## Configuração

Navegue dentro da aplicação que está a desenvolver até ao ficheiro de configuração de ambiente. Neste exemplo, iremos utilizar o ficheiro de ambiente de desenvolvimento localizado em:

- 📂 `config/_development.json`

Verifique se já não existe a configuração de URL, se não existir adicione no fim do ficheiro de configuração (em formato JSON) os parâmetros de configuração de URL, como por exemplo:

```
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Define o prefixo do endereço da URL da interface de administração, o padrão é apenas `/`.

### public

Define o prefixo do endereço da URL dos ficheiros estáticos que são públicos como imagens, estilo CSS e de código JavaScript, o padrão é `/public`.

### services

Define o endereço da URL inicial dos serviços web da API REST, o padrão é `/services`.

## Conclusão

A customização das URLs é importante, tanto para torná-la mais intuitiva como poder torná-la mais complexa e aumentar a segurança.

Por exemplo, no endereço de administração pode ser colocado um prefixo com uma sequência de caracteres aleatórios, assim só quem souber decor acederá o endereço de acesso, isso dificulta o acesso e evita ataques.
