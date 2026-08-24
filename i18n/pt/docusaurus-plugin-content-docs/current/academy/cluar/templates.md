---
sidebar_position: 11
id: templates
title: Templates
sidebar_label: Templates
---

Como o layout geral de uma página é definido, e como criar novos templates.

## Introdução

O **Template** define o layout geral de uma [Página](/docs/academy/cluar/pages/overview) — é o valor do campo `template` da página, e corresponde a uma pasta em `website/src/pages/Template/`.

:::info Origem do mecanismo de Tipos de Componente
O mecanismo de [Tipos de Componente](/docs/academy/cluar/components/types) (pastas dinâmicas + `info.json`) foi inspirado neste mecanismo de Templates, que já funcionava assim primeiro. A estrutura é praticamente a mesma, só que aplicada a páginas inteiras em vez de blocos de conteúdo.
:::

## Como funciona

```
website/src/pages/Template/
├── index.jsx        # roteador: escolhe o template a renderizar
└── Default/
    ├── index.jsx      # o template em si
    ├── index.less
    └── info.json       # nome/descrição do template, por idioma
```

Cada pasta dentro de `Template/` é um template selecionável no campo **Template** do formulário de edição da página. O nome da pasta (`Default`) é o valor gravado no campo `template` da página.

O `info.json` do template Padrão, por exemplo:

```json
{
  "en": { "label": "Default", "description": "For pages that use generic styling." },
  "pt": { "label": "Padrão", "description": "Para páginas que utilizam o estilo genérico." }
}
```

:::info O select mostra o nome da pasta, não a etiqueta do `info.json`
Ao contrário dos Tipos de Componente, o select de Template no formulário da página usa o **nome da pasta** como texto mostrado (não o `label` traduzido do `info.json`) — o serviço até devolve o `info.json`, mas o formulário não o usa para a etiqueta. Ou seja, o `info.json` do Template hoje não tem efeito visível nenhum; é preparação para uma tradução que ainda não foi ligada à interface.
:::

Também há um serviço no servidor (`server/services/page/template/list/`) que varre as pastas em tempo real e devolve a lista de templates disponíveis — pelo mesmo motivo: **não é preciso reiniciar o servidor para adicionar um template novo**, só criar a pasta.

Uma diferença em relação aos Tipos de Componente: os Templates não têm `config.json` — não há capacidades configuráveis por template hoje, só o `index.jsx` e o `info.json`.

## O template Padrão

O template **Padrão** (`Default`) é o que a maioria das páginas usa: envolve o conteúdo da página com o cabeçalho e rodapé do site (`BaseHeader` / `BaseFooter`) à volta do `Builder` — o componente que efetivamente percorre e renderiza os componentes da página (Banner, Conteúdo, Listagem, Slider, Funcionalidade), na ordem definida pelo campo Ordem de cada um.

:::info Página com template não reconhecido
Se o campo `template` de uma página não corresponder a nenhuma pasta existente (ex.: nome escrito incorretamente, ou pasta apagada), o CLUAR **não falha nem usa o Padrão como substituto** — em vez disso, renderiza só o `Builder` "nu", sem o cabeçalho nem o rodapé do site. É um comportamento diferente do que acontece nos Tipos de Componente, onde um tipo não reconhecido cai para o tipo Padrão.
:::

É o roteador (`Template/index.jsx`) que decide isso:

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

Repara que só existe uma verificação explícita (`"Default"`) — qualquer outro valor de `template`, reconhecido ou não, cai direto no `else` e renderiza só o `Builder`.

## Como criar um novo template

1. Cria uma nova pasta dentro de `website/src/pages/Template/` (ex.: `Template/Landing/`).
2. Dentro dela, cria o `index.jsx` (o layout React do template), o `index.less` (estilos) e o `info.json` (label/descrição por idioma — ainda sem efeito visível na interface, ver nota acima, mas mantém-se pelo padrão).
3. No `index.jsx` do roteador (`Template/index.jsx`), importa o novo template e adiciona-o à condição que escolhe o template pelo campo `page.template`.
4. O novo template passa a aparecer automaticamente no select de Template do formulário de edição da página, com o nome da pasta como valor gravado.

## Próximo passo

Explora as [Permissões](/docs/academy/cluar/permissions).