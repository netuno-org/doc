---
sidebar_position: 7
id: ui
title: Interfaz y diseño
---

## Introducción

El desarrollo del frontend, es decir, lo que el navegador procesa visualmente, se realiza dentro de la carpeta **ui**.

Por defecto, en esta carpeta se encuentra el entorno de desarrollo desarrollado en <a href="https://reactjs.org/" target="_blank">ReactJS</a> con <a href="https://ant.design/" target="_blank">Ant.Design</a> y <a href="http://lesscss.org/" target="_blank">Less</a>, compilado utilizando <a href="https://vite.dev/" target="_blank">Vite</a>.

Aunque el entorno estándar está configurado para estas tecnologías, dado que son bastante utilizadas hoy en día, no está limitado a ellas.

Si desea utilizar otra tecnología como **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript**, etc... basta con cambiar dentro de la carpeta `📂 ui` las configuraciones de `📂 package.json` y `📂 vite.config.js` por las tecnologías que prefiera.

> Más sobre el [terminal integrado y centralizado](/docs/academy/explore/centralized-terminal).

## Requisitos previos

Antes de empezar es importante asegurarse de que tiene [Bun](https://bun.sh/) instalado.

> Vea cómo [instalar Bun](/docs/academy/website/bun).

Para entender mejor cómo funciona la interfaz de utilización recomendamos:

- [Más sobre la capa UI de front-end.](/docs/academy/ui/ui-layer)

## Expandir el servicio

Una vez creado el servicio **trabajadores** en `📂 server/services/trabajadores.js` a través de Visual Studio Code que proporciona la información en <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> en la dirección:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabajadores</a>

El siguiente paso es expandirlo para presentar los datos en la interfaz del navegador.

Con estos datos vamos a presentarlos en una tabla y un gráfico.

Asumiendo que tiene Visual Studio Code u otro editor de texto abierto con la aplicación **Demo**.

Abra el siguiente archivo en el editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

Vamos a modificar este código ya existente.

### Preparar el `state`

Justo al inicio del componente `DashboardContainer` dentro de la `function` está la definición de su _state_.

Añada una nueva entrada para guardar los datos de los trabajadores de la siguiente forma:

```jsx
            // 👇 Añada las nuevas líneas de código a continuación:
            const [trabajadores, setTrabajadores] = useState([]);
            const [cargar, setCargar] = useState(false);
```

Es decir, añada la nueva línea `const [trabajadores, setTrabajadores] = useState([]);` de estado.

### Crear la función `cargarTrabajadores`

Más abajo observe que existe una función llamada `cargarTrabajadores`, esta función realiza la obtención de los datos de los trabajadores que aparecen actualmente en el panel.

> Esta función se utiliza para cargar los datos de los trabajadores.

Introduzca el código siguiente:

```jsx
    /**
    *** 🚀 Carga los datos de los Trabajadores.
    ***    A través de la ejecución del servicio:
    **     http://localhost:9000/services/trabajadores
    */
    const cargarTrabajadores = () => {
        setTrabajadores([]);
        setCargar(true);
        _service({
            url: intl.locale.indexOf('es') == 0 ? '/services/trabajadores' : '/services/workers',
            success: (response) => {
                setTrabajadores(response.json);
                setCargar(false);
            },
            fail: (e) => {
                setCargar(false);
                console.error('Fallo en el servicio de Trabajadores.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

Lo que este código anterior hace es pasar los datos de los **trabajadores** al _state_ del componente en <a href="https://reactjs.org/" target="_blank">ReactJS</a>, esto a través de la ejecución del servicio **trabajadores** que, al recibir los datos en <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a>, almacena los mismos en el _state_ mediante la ejecución de `setTrabajadores`.

El código final debería quedar estructurado de esta forma:

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

Ahora falta ejecutar nuestro hook `useEffect` cuando el componente se "monta", este hook se ejecuta cuando el componente se construye en la presentación visual del navegador.

Para esto basta con, un poco más arriba, añadir la línea de código `cargarTrabajadores();` dentro del hook `useEffect` de esta forma:

```jsx
    useEffect(() => {
        cargarTrabajadores();
    }, []);
```

Esta nueva línea de código va a llamar a la función que ejecuta el servicio <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabajadores</a>, que se creó anteriormente, para obtener los datos en JSON y guardarlos en el `state` (_estado_) del componente para que se presenten en el return (_visualización_).

### Compilación

**Guarde** el archivo y a continuación observe que en el **terminal** donde tiene Netuno en ejecución aparecerá el resultado de la nueva compilación del **ui**, con nuevas líneas del resultado de compilación de <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

La salida esperada en el **terminal** debería ser algo similar a lo siguiente:

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

Caso haya algún error en la compilación, entonces aparecerá en el **terminal** la indicación del problema.

Hasta aquí hemos realizado el consumo de nuestro servicio **trabajadores** en el que los datos obtenidos quedan guardados en el `state` del componente `DashboardContainer`, que así queda disponible para ser utilizado en el `return`.

## Presentar los datos

Falta presentar los datos visualmente en la interfaz que el usuario ve en el navegador.

Para presentar los datos en el navegador tenemos que modificar el `return`, que procesa el aspecto visual de los componentes en <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

Al final del código de `DashboardContainer` encontrará el: `return ( ... );`

Vamos a modificarlo añadiendo solo una línea más de código para contener un componente más `DataVisualization` que presentará los datos referentes a los **trabajadores**, el código debería quedar de la siguiente forma:

```jsx
    // 🔍 Busque en el código existente por:
    return (
    <div ref={ref}>
      { cargar == false ?
        <DataVisualization data={trabajadores} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Observe que solo debe añadirse la línea siguiente:

```jsx
<DataVisualization data={trabajadores} />
```

Así el `DataVisualization` recibirá los datos obtenidos a través del servicio **trabajadores** vía JSON que quedaron guardados en el `state`.

### Compilación final

**Guarde** el archivo con todos los cambios realizados hasta aquí.

Asegúrese de que en la salida del **terminal** no existen errores.

Ahora actualice la página en el navegador y debería ver el resultado final, o alternativamente, haga clic en el enlace siguiente:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Si el panel aparece en blanco significa que hay errores en el código.
>
> Verifique en la consola del **navegador** en las **herramientas del desarrollador** si hay errores.

## Saber más 👇

Introducción rápida a <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Una guía para principiantes en ReactJS.</a>