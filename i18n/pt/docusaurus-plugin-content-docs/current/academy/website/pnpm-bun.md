---
sidebar_position: 1
id: pnpm-bun
title: Instalar o PNPM e o Bun
sidebar_label: Instalar PNPM & Bun
---

## Introdução

O NodeJS e o NPM são a base para definir o ecossistema do desenvolvimento de frontend.

Apesar da sua utilidade as respectivas performances deixam muito a desejar.

Por isso recomendamos utilizar o PNPM e o Bun para obter benefícios significativos e palpáveis com a facilidade da
adaptação e que mantém a compatibilidade.

No Netuno cada vez mais está sendo utilizado está combinação do PNPM e do Bun, saiba o por que:

## PNPM

As dependências de frontend costumam ocupar muito espaço, onde a pasta do `📂 node_modules` pode chegar facilmente a centenas de megabytes ou até gigas.

O PNPM resolve este problema criando um repositório central de dependências que é partilhado pelos projetos através de atalhos.

Assim reduz drasticamente o consumo de espaço ocupado pelas dependências.

Entre diversas outras vantagens, destaca-se ainda na usabilidade e no output que é muito aprimorado e mais evoluído.

Para instalar o PNPM siga os passos em:

- [**PNPM Instalação**](https://pnpm.io/installation)

## Bun

O Bun é equiparado ao NodeJS mas bem turbinado.

A performance do Bun é inquestionável, quem faz a transição da execução do NodeJS para o Bun nota de imediato o benefício.

Como os projetos de frontend costumam demorar algum tempo para se iniciar, com o Bun é imediato.

Dado que a vantagem da performance é de extrema importância para o desenvolvimento ágil, recomendamos a sua utilização.

Para instalar o Bun siga os passos em:

- [**Bun Instalação**](https://bun.sh/docs/installation)

## Configuração e Utilização em Projetos Existentes

Para configurar o Bun em projetos já existentes, altere no `package.json` os `scripts` para:

```json title="package.json"
 ...
 "scripts": {
   "dev": "bunx --bun vite",
   "build": "bunx --bun vite build ",
   "watch": "bunx --bun vite build --watch",
   "preview": "bunx --bun vite preview"
 },
 ...
```

> Coloque o `bunx --bun` como prefixo nos comandos dos scripts.

Para executar podemos utilizar o PNPM, caso não utilize o PNPM então apague a pasta `📂 node_modules` e execute o comando:

`pnpm install`

Agora sim pode executar e utilizar o PNPM com o Bun, execute qualquer comando de script utilizando o `pnpm`, por exemplo:

- `pnpm run dev`

E para compilar:

- `pnpm run build`

> Utilizar esta combinação do PNPM e Bun no CI/CD, ou seja no deploy em ambientes de teste e produção, permite obter
> alta performance com o deploy concluído rapidamente.

## Alterar a execução de Comandos integrados com o Netuno

Do lado do Netuno, caso esteja utilizando a execução dos comandos do NPM integrados, deve proceder a alteração para o PNPM.

Altere para o PNPM a configuração `commands` da aplicação Netuno em `📂 config/_development.json`, por exemplo:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "pnpm run dev",
            "install": "pnpm install",
            "enabled": true
        }
    ]
    ...
}
```

## Conclusão

Não sofra mais com falta de espaço com diversas pastas `📂 node_modules` desperdiçando tantos gigas.

E nem fique tanto tempo à espera até que finalmente o seu projeto inicie ou compile.

Nada impede a utilização do PNPM e do Bun, por que ambos garantem a respectiva compatibilidade com o NPM e o NodeJS.

No Netuno estamos já a utilizar e a migrar todos os projetos para o PNPM e o Bun, acompanhe está tendência.
