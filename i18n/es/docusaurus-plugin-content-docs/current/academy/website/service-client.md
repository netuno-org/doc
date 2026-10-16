---
sidebar_position: 4
id: service-client
title: Cliente para Servicios HTTP y API REST
sidebar_label: Cliente para Servicios
---

## Introducción

En el ecosistema de tecnologías de Netuno se proporcionan algunos módulos en NPM, como:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Vea también el repositorio [Git de Service Client](https://github.com/netuno-org/service-client).

Este módulo sirve para realizar las integraciones con los servicios desarrollados en Netuno, es decir, los endpoints 
de la API REST desarrollados en el backend de Netuno, dentro de la carpeta `server/services` en las aplicaciones Netuno.

Es común en el desarrollo de los servicios utilizar programas como:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

Para hacer las pruebas de peticiones HTTP a los servicios.

En el código de frontend para integrar estos servicios podríamos utilizar fetch, requests, AXIOS y tantos otros.

Sin embargo, Netuno proporciona su propio cliente, que funciona en el desarrollo del frontend JavaScript así como 
también en backend NodeJS.

El motivo por el que Netuno tiene su propia implementación de cliente HTTP para los servicios es proporcionar mayor 
practicidad, simplificando la implementación del código y garantizando mayor agilidad en el desarrollo.

## Instalación

La instalación del cliente de servicios es como instalar cualquier otro módulo.

Donde tenemos el archivo `package.json` ejecutamos el comando de instalación:

```bash
bun add @netuno/service-client
```

## Importación

Para importar el cliente de servicios en el desarrollo JavaScript moderno:

```js
import _service from '@netuno/service-client';
```

Para importar el cliente de servicios en el desarrollo JavaScript clásico:

```js
const _service = require('@netuno/service-client');
```

Observe que el nombre interno en el código es `_service`.

> Por defecto, Netuno utiliza `_` como prefijo para indicar que es algo interno o específico como un recurso 
> o una herramienta, de su ecosistema.

Por lo tanto, para mantener el estándar debemos utilizar siempre el nombre `_service`.

## Configuración

La configuración se realiza globalmente, se define la configuración una
única vez, conviene ejecutarla en un punto inicial del código general.

Esta será la configuración mínima:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

Es decir, define el prefijo de las direcciones de los servicios, esto evita
la necesidad de colocar siempre la URL completa, así podemos en las
llamadas a los servicios indicar solo el resto de la URL.

### Configuración Completa

Podemos configurar valores por defecto para todas las llamadas de
servicios, siendo que en la llamada a cada servicio podemos sobrescribir
estos valores.

Vea todos los parámetros que podemos configurar:

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

Es el prefijo global de las URL.

#### url

Es la parte de la URL que se agrega al prefijo, la dirección específica
del servicio.

#### method

Método HTTP que se utilizará en la petición de la solicitud HTTP, por
defecto es `GET`.

#### credentials

Define el comportamiento de las credenciales en las llamadas HTTP:

- `omit` - Nunca envía ni recibe credenciales.
- `same-origin` - Solo envía e incluye credenciales cuando las 
peticiones son en el mismo dominio.
- `include` - Siempre debe incluir las credenciales, incluso si el dominio es diferente.

Por defecto el valor es `include`, pues es lo que tiene más sentido en el
desarrollo estándar, el backend puede estar o no en el mismo dominio
depende de la arquitectura, y en el desarrollo local a veces difiere
de producción, por lo tanto para evitar sorpresas recomendamos utilizar
`include`.

#### headers

En los `headers` podemos definir claves y valores en la cabecera HTTP.

Por defecto se define que se enviarán y recibirán datos en formato
JSON.

#### start

Función de `callback` ejecutada cuando va a iniciar la petición HTTP.

#### success

Función de `callback` ejecutada cuando la petición HTTP se ejecutó
con éxito en el servidor de backend.

El contenido de la respuesta se obtiene en el primer argumento de la función.

#### fail

Función de `callback` ejecutada cuando la petición HTTP generó algún
error.

Los detalles del error se obtienen en el primer argumento de la función.

#### end

Función de `callback` ejecutada cuando la petición HTTP se completó.

Se ejecuta siempre, independientemente de si hubo éxito o error.

## Utilización

Para ejecutar un servicio con una petición HTTP definimos los valores
de los parámetros que configuran los requisitos del servicio.

En la clave `data` enviamos los datos en sí, es decir, todos los parámetros
de datos que vamos a enviar al servicio de backend.

Vea el ejemplo básico de una petición:

```js
import _service from '@netuno/service-client';

_service({
  url: "mi-servicio",
  data: { id: 1, ejemplo: "Hola backend." },
  start: () => {
    console.log("La petición va a iniciar.");
  },
  success: (respuesta) => {
    if (respuesta.text) {
      console.info("Respondió en texto:", respuesta.text);
    }
    if (respuesta.json) {
      console.info("Respondió en JSON:", respuesta.json);
    }
  },
  fail: (error) => {
    console.error("Falló con el error:", error);
  },
  end: () => {
    console.log("La petición se completó.");
  }
});
```

La URL final tendrá en cuenta el prefijo definido globalmente en la
configuración general.

Como no se definió el método HTTP, entonces se enviará con el
método por defecto que se definió en la configuración general, que por
defecto es `GET`.

### Simple

Ejemplo simple de cómo realizar la ejecución de una petición de tipo `POST`:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "producto",
  data: { nombre: "Sombrero de Paja", cantidad: 20 },
  success: ({json}) => {
    console.info("Producto creado con éxito:", json);
  },
  fail: (error) => {
    console.error("Fallo al crear producto:", error);
  }
});
```

### Formulario

Cuando utilizamos formularios podemos cargar la clase FormData con el contenido del formulario, vea el ejemplo:

```js
import _service from '@netuno/service-client';

const datosFormulario = new FormData(document.getElementById("formulario"));
_service({
  method: "PUT",
  url: "cliente",
  data: datosFormulario,
  success: ({json}) => {
    if (json.result === true) {
      alert("Cliente actualizado con éxito.");
    } else {
      alert("Respuesta inválida.");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

### Subida

Ejemplo simple de cómo realizar la subida de archivos utilizando la clase `FormData`:

```js
import _service from '@netuno/service-client';

const datosFormulario = new FormData();
datosFormulario.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
datosFormulario.append('archivo', document.getElementById("campoArchivo").files[0]);
datosFormulario.append('otroCampo', 'valor...');
_service({
  method: "PUT",
  url: "/subida",
  data: datosFormulario,
  success: ({json}) => {
    alert('Archivo enviado con éxito.');
  },
  fail: (e) => {
    console.log("Error en la Respuesta", e);
  }
});
```

### Descarga

Podemos realizar la descarga de archivos generados dinámicamente por servicios de forma integrada en el contexto de la
página.

#### BLOB - Objeto Binario Grande

Para realizar la descarga de respuestas binarias debemos definir el `blob` con el valor `true` en la parametrización base, 
y obtenemos los bytes generados en el `blob` de la respuesta.

```js
import _service from '@netuno/service-client';

_service({
  url: "/descarga",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", tipo: "pdf" },
  blob: true, // Define que la respuesta es binaria.
  success: ({blob}) => {
    if (blob) {
      const archivo = window.URL.createObjectURL(blob);
      window.location.assign(archivo);
    } else {
        alert("Respuesta inválida.");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

#### Archivo Personalizado

El nombre y el tipo del archivo se pueden personalizar en el frontend, la dependencia [DownloadJS](https://www.npmjs.com/package/downloadjs) es muy útil en este proceso. 

Instale la dependencia [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

En el código se puede utilizar de la siguiente forma:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/informe/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "informe.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});

_service({
  url: "/services/informe/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "informe.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

### URL para Servicios

Hay situaciones en las que necesitamos generar la URL de servicios, por ejemplo, cuando hay servicios que proporcionan recursos que 
deben integrarse en el HTML o en el CSS. 

Un ejemplo claro es el Avatar, el usuario define su imagen de avatar, y para presentarla podemos generar la URL final
de la siguiente forma:

```js
const enlaceAvatar = _service.url(`/perfil/avatar?uid=${usuario.uid}`)
```

La URL generada puede inyectarse en el HTML o en una propiedad del CSS, como el background.

### React & Ant.Design

Como utilizamos mucho React y Ant.Design, a continuación algunos consejos útiles.

Los imports clásicos:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Definir el estado de procesamiento:

```js
const [cargando, setCargando] = useState(false);
```

Implementación del evento para guardar un formulario, que enviará el objeto con los valores rellenados en formato JSON:

```js
const alFinalizar = (valores) => {
  const alFallar = () => {
    notification.error({
      title: 'Error',
      description: 'No se pudieron guardar los datos.'
    });
  };
  _service({
    url: '/services/cliente',
    method: 'POST',
    data: valores,
    start: () => {
      setCargando(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Éxito',
          description: 'Los datos se guardaron con éxito.'
        });
        return;
      }
      alFallar();
    },
    fail: (e) => {
      console.error("Fallo del servicio.", e);
      alFallar();
    },
    end: () => {
        setCargando(false);
    },
  });
};
```

En el componente de formulario de Ant.Design se define la propiedad de la acción que envía los datos con el evento 
previamente implementado, por ejemplo:

```jsx
  <Form onFinish={alFinalizar}>
    ...
  </Form>
```

#### Subida

Aquí hay un ejemplo completo de cómo hacer la subida de archivos utilizando un formulario en Ant.Design y con
FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function FormularioSubida() {
  const [cargando, setCargando] = useState(false);
  const alFinalizar = (valores) => {
    const datosFormulario = new FormData();
    datosFormulario.append("titulo", valores.titulo);
    datosFormulario.append("archivo", valores.archivo.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "archivo/guardar",
      data: datosFormulario,
      start: () => {
        setCargando(true);
      },
      success: () => {
        notification.success({
          title: 'Formulario',
          description: 'Sus datos se guardaron con éxito.'
        });
      },
      fail: (e) => {
        console.error("Fallo del formulario de subida", e);
        notification.error({
          title: 'Formulario',
          description: 'No se pudieron guardar sus datos.'
        });
      },
      end: () => {
        setCargando(false);
      }
    });
  };
  return (
    <Form onFinish={alFinalizar} layout="vertical">
      <Form.Item label="Título" name="titulo"
        rules={[{ required: true, message: 'Por favor, introduzca el título.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Archivo" name="archivo"
        rules={[{ required: true, message: 'Por favor, introduzca el archivo.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Subir</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={cargando}>
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormularioSubida;
```

## Conclusión

Service Client agiliza la integración con el backend para obtener y enviar datos y archivos.

Es posible utilizar cualquier otro método nativo u otra dependencia para realizar estas operaciones, sin embargo
Service Client está desarrollado para facilitar y agilizar las integraciones, siendo flexible y muy intuitivo.

El propósito principal de que Netuno proporcione Service Client en su ecosistema es garantizar que el desarrollo sea
claro y rápido.

Al utilizar Service Client, si encuentra algún problema repórtelo en las [Incidencias](https://github.com/netuno-org/service-client/issues) del proyecto.

⭐ Recuerde dar su estrella en el GitHub del proyecto:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).