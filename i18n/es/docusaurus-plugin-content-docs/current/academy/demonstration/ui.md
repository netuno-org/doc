---
sidebar_position: 7
id: ui
title: Interfaz y Diseño
---

## Introducción

El desarrollo del frontend, es decir, lo que es procesado visualmente por el navegador, se realiza dentro de la carpeta **ui**.

Por defecto, en esta carpeta se encuentra el entorno de desarrollo desarrollado en <a href="https://reactjs.org/" target="_blank">ReactJS</a> con <a href="https://ant.design/" target="_blank">Ant.Design</a> y <a href="http://lesscss.org/" target="_blank">Less</a>, compilado utilizando <a href="https://vite.dev/" target="_blank">Vite</a>.

Aunque el entorno por defecto se encuentre configurado para estas tecnologías, dado que son bastante utilizadas hoy en día, no se encuentra limitado a las mismas.

Si desea utilizar otra tecnología como **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript**, etc... basta con alterar dentro de la carpeta `📂 ui` las configuraciones de `📂 package.json` y de `📂 vite.config.js` para las tecnologías que prefiera.

> Más sobre el [terminal integrado y centralizado](/docs/academy/explore/centralized-terminal).

## Requisitos previos

Antes de comenzar es importante asegurarse de que tiene [Bun](https://bun.sh/) instalado.

> Vea cómo [instalar Bun](/docs/academy/website/bun).

Para entender mejor cómo funciona la interfaz de utilización, recomendamos:

- [Más sobre la Capa UI de front-end.](/docs/academy/ui/ui-layer)

## Expandir el Servicio

Después de haber sido creado el servicio **trabajadores** en `📂 server/services/trabajadores.js` a través de Visual Studio Code que pone a disposición la información en <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> en la dirección:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabajadores</a>

El siguiente paso es expandirlo para presentar los datos en la interfaz del navegador.

Con estos datos vamos a presentarlos en una tabla y un gráfico.

Asumiendo que tiene Visual Studio Code u otro editor de texto abierto con la aplicación **Demo**.

Abra el siguiente archivo en el editor:

`📂 ui/src/containers/ContenedorPanel/index.jsx`

Vamos a modificar este código ya existente.

### Preparar el `estado`

Justo al principio del componente `ContenedorPanel` dentro de la `function` está la definición de su _estado_.

Añada una nueva entrada para guardar los datos de los trabajadores de la siguiente forma:

```jsx
            // 👇 Añada las nuevas líneas de código a continuación:
            const [trabajadores, setTrabajadores] = useState([]);
            const [cargando, setCargando] = useState(false);
```

Es decir, añada la nueva línea `const [trabajadores, setTrabajadores] = useState([]);` de estado.

### Crear función `cargarTrabajadores`

Más abajo observe que existe una función llamada `cargarTrabajadores`, esta función realiza la obtención de los datos de los trabajadores que aparecen en el panel actualmente.

> Esta función se usa para cargar los datos de los trabajadores.

Inserte el código a continuación:

```jsx
    /**
    *** 🚀 Carga los datos de los Trabajadores.
    ***    A través de la ejecución del servicio:
    **     http://localhost:9000/services/trabajadores
    */
    const cargarTrabajadores = () => {
        setTrabajadores([]);
        setCargando(true);
        _service({
            url: intl.locale.indexOf('es') == 0 ? '/services/trabajadores' : '/services/workers',
            success: (response) => {
                setTrabajadores(response.json);
                setCargando(false);
            },
            fail: (e) => {
                setCargando(false);
                console.error('Fallo en el servicio de los Trabajadores.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

Lo que este código anterior hace es pasar los datos de los **trabajadores** al _estado_ del componente en <a href="https://reactjs.org/" target="_blank">ReactJS</a>, esto a través de la ejecución del servicio **trabajadores** que, al recibir los datos en <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> , los almacena en el _estado_ a través de la ejecución de `setTrabajadores`.

El código final deberá quedar estructurado de esta forma:

```jsx
    useEffect(() => {
        ...
    }, []);

    const cargarTrabajadores = () => {
        ...
    }

    return ( 
        ...
    );
```

> Donde los `...` son las diversas líneas de código omitidas dentro de los respectivos bloques.

### Ejecutar el hook `useEffect`

Ahora falta ejecutar nuestro hook `useEffect` cuando el componente es "montado", este hook se ejecuta cuando el componente es construido en la presentación visual del navegador.

Para esto basta, un poco más arriba, añadir la línea de código `cargarTrabajadores();` dentro del hook `useEffect` de esta forma:

```jsx
    useEffect(() => {
        cargarTrabajadores();
    }, []);
```

Esta nueva línea de código va a llamar a la función que ejecuta el servicio <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabajadores</a>, que fue creado anteriormente, para obtener los datos en JSON y guardarlos en el `estado` (_estado_) del componente para ser presentados en el return (_visualización_).

### Compilación

**Guarde** el archivo y justo después observe que en el **terminal** donde tiene Netuno en ejecución aparecerá el resultado de la nueva compilación de **ui**, con nuevas líneas del resultado de compilación de <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

La salida esperada en el **terminal** deberá ser algo similar a lo siguiente:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

Si hay algún error en la compilación, aparecerá en el **terminal** la indicación del problema.

Hasta aquí hemos realizado el consumo de nuestro servicio **trabajadores** en el que los datos obtenidos quedan guardados en el `estado` del componente `ContenedorPanel` que así queda disponible para ser utilizado en el `return`.

## Presentar los Datos

Falta presentar los datos visualmente en la interfaz que el usuario ve en el navegador.

Para presentar los datos en el navegador tenemos que modificar el `return`, que procesa el aspecto visual de los componentes en <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

Al final del código de `ContenedorPanel` encontrará el: `return ( ... );`

Vamos a modificarlo añadiendo solo una línea de código más para contener un componente `VisualizacionDatos` que va a presentar los datos referentes a los **trabajadores**, el código deberá quedar de la siguiente forma:

```jsx
    // 🔍 Busque en el código existente por:
    return (
    <div ref={ref}>
      { cargando == false ?
        <VisualizacionDatos data={trabajadores} />
        : <Spin/>
      }
      <ListaServicios />
    </div>
  );
```

Observe que solo la línea de abajo es la que debe ser añadida:

```jsx
<VisualizacionDatos data={trabajadores} />
```

Así el `VisualizacionDatos` va a recibir los datos obtenidos a través del servicio **trabajadores** vía JSON que quedaron guardados en el `estado`.

### Compilación Final

**Guarde** el archivo con todas las modificaciones realizadas hasta aquí.

Asegúrese de que en la salida del **terminal** no existen errores.

Ahora actualice la página en el navegador y deberá ver el resultado final, o alternativamente, haga clic en el enlace de abajo:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Si el panel aparece en blanco quiere decir que hay errores en el código.
>
> Verifique en la consola del **navegador** en las **herramientas del programador** si hay errores.

## Saber más 👇

Introducción rápida a <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Una Guía Para Principiantes en ReactJS.</a>