---
sidebar_position: 2
id: types
title: Tipos de Componente
sidebar_label: Tipos de Componente
---

## O que são

Cada [Componente](/docs/academy/cluar/components/overview) tem um campo **Tipo**, que define qual variante visual é usada para o renderizar. Esse campo não é uma lista fixa gravada na base de dados — é **dinâmico**, construído a partir das pastas que existem dentro de `website/src/components/<Componente>/`. Por exemplo, para o Banner:

```
website/src/components/Banner/
├── index.jsx           # componente "roteador": escolhe o tipo a renderizar
├── Default/
│   ├── index.jsx        # a variante em si
│   ├── index.less
│   ├── info.json        # nome/descrição do tipo, por idioma
│   └── config.json       # capacidades do tipo (ex.: se suporta ações)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Cada pasta dentro de `Banner/` é um **tipo** selecionável no campo **Tipo**, no formulário de edição desse componente (ex.: ao adicionar ou editar um Banner numa página, é nesse formulário que aparece o select com os tipos disponíveis).

No select, o que a pessoa **vê** é a etiqueta traduzida definida no `info.json` (ex.: "Padrão"), mas o que é **gravado** no campo `type` do componente é o **nome da pasta** (ex.: `Default`) — é esse nome de pasta que o componente "roteador" usa depois para escolher qual variante renderizar (ver [`info.json` e `config.json`](#infojson-e-configjson) abaixo).

> O nome "Sub" em pastas como `DefaultSubBanner` não indica uma subpasta aninhada dentro de outro tipo — é apenas mais um tipo, ao mesmo nível dos outros, só que com uma convenção de nome que indica que é uma variante mais discreta/secundária do tipo base.

### `info.json` e `config.json`

- **`info.json`** — define a etiqueta e descrição do tipo, por idioma. É a etiqueta (`label`) que aparece escrita no select do formulário de edição:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "pt": { "label": "Padrão", "description": "Adiciona um banner." }
  }
  ```
- **`config.json`** — define capacidades do tipo. Hoje, o único parâmetro é `action`, que controla se a secção de Ações aparece no formulário e é renderizada nesse tipo:
  ```json
  { "action": true }
  ```

Estes dois ficheiros são lidos em tempo real por um serviço no servidor (`server/services/components/<componente>/list/`), que percorre as pastas dentro de `website/src/components/<Componente>/` e devolve a lista de tipos disponíveis — é isso que alimenta o select de Tipo no formulário de edição desse componente. Por isso, **não é preciso reiniciar o servidor nem alterar a base de dados para adicionar um novo tipo** — basta criar a pasta.

No componente "roteador" (`Banner/index.jsx`), o `type` gravado é usado para decidir qual variante importar e renderizar:

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## Como criar um novo tipo

1. Cria uma nova pasta dentro de `website/src/components/<Componente>/` (ex.: `Banner/Highlight/`).
2. Dentro dela, cria o `index.jsx` (o componente React da variante), o `index.less` (estilos), o `info.json` (label/descrição por idioma) e o `config.json` (com `action: true` ou `false`).
3. No `index.jsx` do componente pai (ex.: `Banner/index.jsx`), importa o novo componente e adiciona-o à condição que escolhe a variante pelo `type`.
4. O novo tipo passa a aparecer automaticamente no select de Tipo do formulário de edição desse componente, com o nome da pasta como valor gravado.

## Próximo passo

Explora cada componente em detalhe: [Banner](/docs/academy/cluar/components/banner), [Conteúdo](/docs/academy/cluar/components/content), [Listagem](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funcionalidade](/docs/academy/cluar/components/functionality).