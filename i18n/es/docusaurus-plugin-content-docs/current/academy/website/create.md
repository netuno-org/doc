---
sidebar_position: 2
id: create
title: Crear con React
sidebar_label: Crear con React
---

Este proceso de creación puede aplicarse en otros contextos; por ejemplo, para crear cualquier tipo de proyecto
React, en cuyo caso hay que hacer las adaptaciones oportunas de nombre y de la carpeta donde se ejecutan los comandos.

La base de entendimiento es que se creará la capa web, es decir, el frontend de nuestra aplicación Netuno.

Por ello, se asume que se creará dentro de la aplicación Netuno `sitio_web`, el nombre predeterminado para la capa de frontend,
aunque puede ser cualquier otro nombre que se desee.

## Requisitos previos

Debe tener Netuno instalado:

- [Instalación de Netuno.](/docs/get-started/installation)

Debido a su mejor rendimiento, entre otras ventajas, debe tener Bun instalado:

- [Instalar Bun.](/docs/academy/website/bun)

## Creación

Para crear una aplicación React dentro de una aplicación Netuno, normalmente la llamamos `sitio_web`.

Así pues, con el **terminal** dentro de la **raíz de su aplicación** Netuno, que normalmente se encuentra dentro de la carpeta:

- `netuno/apps/MI_APP`

> Donde `MI_APP` es el nombre de la aplicación Netuno.

Ejecute el comando:

```shell
bun create vite
```

A continuación, aparecerá la pregunta: `Project name:`

Escriba `sitio_web` y pulse la tecla `ENTER`.

A continuación aparece la pregunta: `Select a framework:`

Utilice las flechas del teclado y pulse la flecha hacia abajo hasta seleccionar la opción `React`, y después pulse la tecla
`ENTER`.

Para finalizar, la siguiente pregunta: `Select a variant:`

Utilice las flechas del teclado y pulse la flecha hacia abajo hasta seleccionar la opción `JavaScript`, y después pulse la
tecla `ENTER`.

Este comando creará un nuevo directorio denominado `📂 sitio_web`, que contendrá el frontend con React.

Después de haber creado el frontend con React, ejecute lo siguiente para instalar las dependencias:

```shell
cd sitio_web
bun install
```

Abra la carpeta de su aplicación Netuno en su editor preferido (como VSCode, WebStorm, entre otros) y
entre en la carpeta `sitio_web` que se ha creado.

## Ejecutar

Ahora es posible iniciar el servidor de frontend con React utilizando el comando:

```shell
bun run dev
```

Esto hará que el frontend esté disponible en la dirección [http://localhost:5173/](http://localhost:5173/); normalmente, o en otra
dirección con otro número de puerto que podrá aparecer en el terminal. En cualquier caso, basta con abrir en el navegador la dirección
que se muestra en el terminal.

> Para terminar la ejecución en el terminal, pulse las teclas `CTRL` y `C` simultáneamente.

## Instalación de dependencias

Si está ejecutando el servidor de frontend en el terminal, es decir, `bun run dev`, se recomienda detenerlo; pulse
las teclas `CTRL` y `C` simultáneamente.

Le recomendamos encarecidamente que instale los siguientes paquetes NPM, ya que resultan muy útiles para el desarrollo de
aplicaciones React con Netuno (haga clic en cada enlace para obtener más información sobre cada uno):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Para instalar los paquetes enumerados anteriormente, basta con ejecutar el siguiente conjunto de comandos en el terminal:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Como alternativa, también puede instalar todos los paquetes de una sola vez:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Configuración

Después de ejecutar los comandos anteriores, puede forzar una dirección de puerto predeterminada; diríjase a `📂 sitio_web/vite.config.js`
y añada la configuración de `server` de la siguiente forma:

```javascript title="sitio_web/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

Ahora, al iniciar con el comando `bun run dev`, siempre utilizará el puerto `3000`.

### Less

Cambie todos los ficheros `.css` que están en `sitio_web/src` a la extensión `.less`.

> No olvide realizar este cambio en el código JSX en las líneas que hacen el `import` de los ficheros `.css`, cambiando
> la extensión a `.less`.

LESS permite un desarrollo más estructurado y moderno del CSS.

### Personalización del tema de Ant.Design

Para personalizar los colores de Ant.Design, utilice el componente `ConfigProvider` en `App.jsx`.

Por ejemplo:

```jsx title="sitio_web/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Mi botón con color personalizado</Button>
            ...
        </ConfigProvider>
    );
}
...
```

Así es posible ajustar cualquier configuración de estilización de Ant.Design.

### Tema oscuro

También es posible utilizar el tema oscuro de Ant.Design; para ello, basta con importar `theme`, que contiene el modo oscuro,
y aplicarlo en `ConfigProvider`:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">Mi botón con color personalizado</Button>
        ...
    </ConfigProvider>
...
```

### Cambio de estilo

Observe que, en las parametrizaciones de `ConfigProvider` anteriores, es posible cambiar fácilmente el estilo de Ant.Design;
para obtener más información sobre la personalización de Ant.Design:

- [Personalizar tema](https://ant.design/docs/react/customize-theme)

Cada componente de Ant.Design tiene las posibles configuraciones de Design Token; por ejemplo, en los botones:

- [Botón - Token de diseño](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">Mi botón con color personalizado</Button>
    ...
</ConfigProvider>
```

## Inicio automático del frontend con Netuno

Netuno le permite iniciar la aplicación en React junto con el proceso de servidor de la aplicación Netuno.

> Todos los mensajes de compilación de la aplicación en React estarán integrados en el mismo terminal que la aplicación Netuno.

Para ello, basta con añadir a la configuración `commands` de la aplicación Netuno, en `📂 config/_development.json`, lo siguiente:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "sitio_web",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Siempre que edite ficheros de configuración de la aplicación Netuno, es necesario reiniciar el servidor para que pueda
> asumir los nuevos cambios.

Por último, inicie o reinicie el servidor con su aplicación Netuno para comprobar su funcionamiento.

Y ahora todo quedará integrado en un único terminal centralizado, evitando así tener varios terminales
dispersos; para obtener más información:

- [Terminal centralizado](/docs/academy/explore/centralized-terminal)

## Configuración de CORS (Cross-Origin Resource Sharing)

Para configurar CORS y evitar posibles errores en la comunicación entre el frontend y los servicios de la aplicación Netuno,
edite la configuración de la aplicación en:

- `📂 config/_development.json`

Compruebe si ya existe la configuración de `cors` y si en `origins` está `*`; entonces sirve bien para desarrollo
y puede dejarse así.

Si no existe la configuración de `cors`, añádala basándose en este ejemplo, teniendo en cuenta que la dirección debe ser la
misma que la del frontend:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> Si `origins` contiene un `*`, significa que se admitirá cualquier dirección de frontend; por ejemplo:
> - `"origins": [ "*" ]`
> Normalmente utilizamos `*` en desarrollo.

Una vez implementada la configuración, puede integrar los servicios de API que desee con el
frontend, sin problemas con la seguridad de CORS.

> Más información sobre [CORS](/docs/academy/server/services/cors)

## Variables de entorno

La configuración de las variables de entorno puede definirse mediante la creación del fichero `sitio_web/.env`, con las
definiciones de las variables; por ejemplo:

```
NODE_ENV=development
```

O mediante la configuración de la aplicación de Netuno, por ejemplo en:

- `📂 config/_development.json`

Y definiendo las variables de entorno en la configuración del comando en el parámetro `env`; por ejemplo:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "sitio_web",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```