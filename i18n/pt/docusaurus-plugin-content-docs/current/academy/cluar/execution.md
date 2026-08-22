---
sidebar_position: 4
id: execution
title: Execução
sidebar_label: Execução
---

Com o projeto instalado e configurado, é hora de o correr.

## Iniciar o servidor

No diretório raiz do Netuno, executa:

```
./netuno server app=cluar
```

Isto arranca o back-end e o front-end em simultâneo.

> A primeira execução pode demorar mais tempo, devido à instalação das dependências do front-end.

Por padrão:

- O backoffice do Netuno fica disponível em [http://localhost:9000/](http://localhost:9000/)
- O OpenAPI dos serviços fica em [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Iniciar o website

Para iniciar o website manualmente:

```
cd website
bun run dev
```

Por padrão, o website fica disponível em [http://localhost:3000/](http://localhost:3000/)

> É possível fazer o website arrancar automaticamente junto com o servidor Netuno, ativando o respetivo comando em `config/_development.json` — ver [Configuração](/docs/academy/cluar/configuration#7-arranque-automático-do-website-opcional).

## Resolução de problemas

### Erro de versão do GLIBC ao correr `bun run dev`

Se aparecer um erro como este ao iniciar o website:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Não se trata do bug de dependências opcionais do npm mencionado na mensagem, mas sim de uma **incompatibilidade de versão do GLIBC**: o binário nativo do Rollup foi compilado exigindo o `GLIBC_2.32` ou mais recente, e distribuições Linux mais antigas (por exemplo, Ubuntu 20.04, que traz o glibc 2.31) não o têm disponível.

Para resolver, força o Rollup a usar a versão WASM em vez da nativa, adicionando um campo `overrides` na raiz do `package.json` do website:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

De seguida, reinstala as dependências:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Próximo passo

Com o projeto a correr, explora os [Idiomas](/docs/academy/cluar/languages) ou o [modelo de Páginas](/docs/academy/cluar/pages/overview).