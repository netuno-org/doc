---
id: ui
title: UI
sidebar_label: UI
---

Customized backoffice frontend and dashboards.

## User Interface

As the name suggests, the `📂 ui` folder contains the application's user interface logic.

It allows you to carry out development to change the behavior of the application's backoffice.

It is possible to generate custom dashboards, add or change features, among others.

To develop the application's general code, whether backend or frontend, we recommend code editors
that are free, such as:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Folder Structure

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MyButton</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>DashboardContainer</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Source

The `📂 src` folder gathers the frontend application code. In this folder you will find the organization of
React components, respectively `components` and `containers`.

### Containers

The `📂 containers` folder is intended for containers, which are React components for areas with more
interactions, that is, they are components that have more features, usually covering a considerable area
of the screen and that can aggregate other components according to the scope.

For example, it presents an orders table with a form to filter, and also a chart aggregating
the monthly total, all of this inside a container, where each thing could be a separate component but
is aggregated in the orders container in the dashboard.

### Components

The `📂 components` folder is intended for reusable React _components_, they usually implement
very specific features that are useful to be integrated into other components or containers.

Typically it contains simpler behavior, being very focused on its objective for a given scope,
which serves to be reused in multiple containers or even in other components.

As examples of components there could be a given table, a form, a type of chart, among others.

### Styles

The `📂 styles` folder is typically used for global styles of the application's various containers. Although there
is no strong standard in this field, we suggest organizing the styles specific to the `component` or
`container` alongside it, that is, internally in the respective component folder.
 
## Vite
 
In order for the final code version in JavaScript containing the application's UI to be generated, compiled and
optimized, and which is processed and used by the browser. It is necessary to run the respective compilation
of the frontend code that is coded in React/JSX.

This compilation is performed by [Vite](https://vite.dev/) and its configuration and other instructions are in the
file:

- `vite.config.js`

Which is at the root of the `📂 ui` folder.

## Package Manager

The `package.json` file is used by the dependency module manager, we recommend using
[Bun](https://bun.sh) to install all the necessary frontend dependencies.

And the execution commands use [Bun](https://bun.sh), which is another important recommendation.

So, we recommend installing [Bun](https://bun.sh).

## Instructions

The `README.md` file contains the installation and execution instructions.

To install the dependencies, run:

- `bun install`

And to run the frontend code compilation in development:

- `bun run watch`

Or if it is the final and definitive compilation optimized for production:

- `bun run build`

By default the compilation creates the following files:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

These files are integrated into Netuno's processing to perform the necessary customizations on the
application's backoffice pages, such as dashboards and specific features.