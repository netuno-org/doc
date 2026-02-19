---
sidebar_position: 1
id: bun
title: Instalar o Bun
sidebar_label: Instalar Bun
---

## Introdução

O NodeJS e o NPM são a base para definir o ecossistema do desenvolvimento de frontend.

Apesar da sua utilidade, as respectivas performances deixam muito a desejar.

Por isso recomendamos utilizar o Bun para obter benefícios significativos e palpáveis com a facilidade da rápida
adaptação e mantém a compatibilidade.

No Netuno cada vez mais está sendo utilizado o Bun, veja os motivos...

## Bun

O Bun é equiparado ao NodeJS mas bem turbinado, moderno, intuitivo e super rápido.

O desempenho do Bun é inquestionável, quem faz a transição da execução do NodeJS para o Bun nota de imediato o 
benefício.

Como os projetos de frontend costumam demorar algum tempo para iniciar, com Bun a inicialização é imediata.

E as dependências de frontend costumam ocupar muito espaço, onde a pasta do `📂 node_modules` pode chegar 
facilmente a centenas de megabytes ou até gigas.

O Bun ainda resolve o problema de espaço desperdiçado com a replicação da cópia de dependências por múltiplos 
projetos.

Criando um repositório central de dependências partilhada por todos os projetos que ao instalar configura pastas 
linkadas.

Assim reduz drasticamente o consumo de espaço ocupado pelas dependências.

> Entre diversas outras vantagens, destaca-se ainda na usabilidade e no output que é aprimorado, intuitivo e mais 
evoluído no geral.

Dado que as vantagens de desempenho é de extrema importância para o desenvolvimento ágil, recomendamos a sua 
utilização.

Para instalar o Bun siga os passos em:

- [**Bun Instalação**](https://bun.sh/docs/installation)

### Utilização em Projetos

Para utilizar o Bun nos projetos certifique que caso já utilize o NPM, Yarn, ou outro, deve remover a pasta `📂 node_modules`.

Onde tem o arquivo `package.json` deve executar o comando de instalação das dependências:

- `bun install`

Agora basta executar as ações de `scripts` configuradas no `package.json`, por exemplo:

- `bun run dev`

E para compilar:

- `bun run build`

Utilizar o Bun é muito semelhante ao NPM, Yarn, PNPM, etc, só que é bem mais rápido e melhor no geral, e ainda no 
deploy para os ambientes de teste e produção, permite obter alto desempenho com o deploy concluído rapidamente e
mais eficiente no geral.

### Comandos Integrados no Netuno

Do lado do Netuno com a centralização do terminal, onde todos os comandos do projeto executam juntos no mesmo 
processo e terminal do Netuno.

- [Mais sobre Terminal Centralizado.](/docs/academy/explore/centralized-terminal)

Caso esteja integrado e utilizando a execução de comandos do NPM, deve realizar alteração para o Bun.

Altere para o Bun na configuração dos `commands` da aplicação Netuno em `📂 config/_development.json`, por exemplo:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Conclusão

Não sofra mais com falta de espaço com diversas réplicas de dependências dentro das pastas `📂 node_modules` desperdiçando gigas.

E nem fique tanto tempo à espera até que finalmente o seu projeto instale dependências, inicie ou compile.

Nada impede a utilização do Bun, porque garante a compatibilidade com o NodeJS e o NPM, é literalmente dois em um.

Nos projetos com Netuno estamos utilizando e migrando tudo para o **Bun**, acompanhe esta tendência.
