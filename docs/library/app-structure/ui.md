---
id: ui
title: UI
sidebar_label: UI
---

Custom backoffice frontend and dashboards.

## User Interface

As the name suggests, the `📂 ui` folder contains the application's user interface logic.

It allows development to change the application's backoffice behavior.

You can generate custom dashboards, add or change features, and more.

To develop the application's general code, whether backend or frontend, we recommend free code editors, such as:

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

The `📂 src` folder contains the frontend application code. This folder contains the organization of React components, respectively `components` and `containers`.

### Containers

The `📂 containers` folder is intended for containers, which are React components for areas with the most interactions.

That is, they are components with more functionality, typically covering a considerable area of the screen, and can aggregate other components depending on their scope.

For example, it presents an orders table with a filter form, and also a graph aggregating
the monthly total, all within a container. Each component could be a separate component but is aggregated into the orders container on the dashboard.

### Components

The `📂 components` folder is intended for reusable components in React. They typically implement
very specific functionalities that are useful for integration into other components or containers.

It typically contains simpler behavior, very focused on its purpose for a specific context,
which can be reused in multiple containers or even in other components.

Examples of components could be a specific table, a form, a type of chart, among others.

### Styles

The `📂 styles` folder typically serves as global styles for the application's various containers. Although there isn't
a strong standard in this area, we suggest organizing styles specific to the `component` or `container` within it, that is, internally in the respective component folder.

## Vite

This generates the final JavaScript code version containing the application's UI, compiled and
optimized, and processed and used by the browser. You need to run the respective compilation
of the frontend code, which is coded in React/JSX.

This compilation is performed by [Vite](https://vite.dev/), and its configuration and other instructions are located in the
file:

- `vite.config.js`

Which is located at the root of the `📂 ui` folder.

## Package Manager

The `package.json` file is used by the dependency module manager. We recommend using
[PNPM](https://pnpm.io/) to install all the necessary frontend dependencies.

And the execution commands use [Bun](https://bun.sh/), which is another important recommendation.

Therefore, we recommend [Bun](https://bun.sh/) installation.

## Instructions

The `README.md` file contains installation and execution instructions.

To install the dependencies, run:

- `bun install`

And to run the compilation of the frontend code in development:

- `bun run watch`

Or if this is the final and definitive compilation optimized for production:

- `bun run build`

By default, the compilation creates the following files:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

These files are integrated into Netuno's processing to perform the necessary customizations on the application's backoffice pages, such as dashboards and specific features.
