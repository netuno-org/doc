---
sidebar_position: 1
id: bun
title: Instalar Bun
sidebar_label: Instalar Bun
---

## Introducción

NodeJS y NPM son la base para definir el ecosistema del desarrollo de frontend.

A pesar de su utilidad, su rendimiento deja mucho que desear.

Por eso recomendamos utilizar Bun para obtener beneficios significativos y palpables con la facilidad de una rápida
adaptación y mantiene la compatibilidad.

En Netuno cada vez más se está utilizando Bun; vea los motivos...

## Bun

Bun es equiparable a NodeJS pero mucho más potente, moderno, intuitivo y súper rápido.

El rendimiento de Bun es incuestionable; quien pasa de ejecutar NodeJS a Bun nota de inmediato el
beneficio.

Como los proyectos de frontend suelen tardar algún tiempo en iniciarse, con Bun el arranque es inmediato.

Y las dependencias de frontend suelen ocupar mucho espacio, ya que la carpeta `📂 node_modules` puede llegar
fácilmente a cientos de megabytes o incluso gigas.

Bun además resuelve el problema del espacio desperdiciado por la replicación de copias de dependencias en múltiples
proyectos.

Creando un repositorio central de dependencias compartido por todos los proyectos que, al instalar, configura carpetas
enlazadas.

Así reduce drásticamente el consumo de espacio ocupado por las dependencias.

> Entre otras muchas ventajas, también destaca en la usabilidad y en la salida (output), que está mejorada, es intuitiva y está más
evolucionada en general.

Dado que las ventajas de rendimiento son de extrema importancia para el desarrollo ágil, recomendamos su
utilización.

Para instalar Bun, siga los pasos en:

- [**Instalación de Bun**](https://bun.sh/docs/installation)

### Uso en proyectos

Para utilizar Bun en los proyectos, asegúrese de que, si ya utiliza NPM, Yarn u otro, debe eliminar la carpeta `📂 node_modules`.

Donde tenga el archivo `package.json`, debe ejecutar el comando de instalación de las dependencias:

- `bun install`

Ahora basta con ejecutar las acciones de `scripts` configuradas en `package.json`, por ejemplo:

- `bun run dev`

Y para compilar:

- `bun run build`

Utilizar Bun es muy similar a NPM, Yarn, PNPM, etc., solo que es mucho más rápido y mejor en general, y además, en el
despliegue a los entornos de prueba y producción, permite obtener alto rendimiento con un despliegue concluido rápidamente y
más eficiente en general.

### Comandos integrados en Netuno

Del lado de Netuno, con la centralización de la terminal, donde todos los comandos del proyecto se ejecutan juntos en el mismo
proceso y terminal de Netuno.

- [Más sobre la Terminal Centralizada.](/docs/academy/explore/centralized-terminal)

Si está integrado y utilizando la ejecución de comandos de NPM, debe realizar el cambio a Bun.

Cambie a Bun en la configuración de los `commands` de la aplicación Netuno en `📂 config/_development.json`, por ejemplo:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "sitio-web",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Conclusión

No sufra más por falta de espacio con diversas réplicas de dependencias dentro de las carpetas `📂 node_modules` que desperdician gigas.

Y tampoco pase tanto tiempo esperando hasta que finalmente su proyecto instale dependencias, inicie o compile.

Nada impide utilizar Bun, porque garantiza la compatibilidad con NodeJS y NPM; es literalmente dos en uno.

En los proyectos con Netuno estamos utilizando y migrando todo a **Bun**; siga esta tendencia.