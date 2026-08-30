---
sidebar_position: 2
id: install
title: Instalação
sidebar_label: Instalação
---

## Requisitos

Antes de instalar o CLUAR, é preciso ter:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) instalado.
2. [Bun](https://bun.sh/docs/installation) instalado.

## Clonar o projeto

O CLUAR é uma app Netuno, por isso deve ser clonado dentro da pasta `apps` da instalação do Netuno:

```
[diretório raiz do Netuno]/apps
```

Usando o comando:

```
git clone https://github.com/netuno-org/cluar.git
```

## Instalar o website (com Bun)

Dentro da pasta `website`:

```
cd website
```

Executar o comando de instalação do Bun:

```
bun install
```

É necessário permitir a execução de scripts não confiáveis do ESBUILD:

```
bun pm trust --all
```

Se precisares de reiniciar a instalação do website, remove a pasta `node_modules` e os ficheiros de lock, e instala novamente:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Próximo passo

Com o código e as dependências instaladas, segue para a [Configuração](/docs/academy/cluar/configuration).