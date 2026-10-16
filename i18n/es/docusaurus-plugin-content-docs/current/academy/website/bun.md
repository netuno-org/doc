---
sidebar_position: 1
id: bun
title: Instalar Bun
sidebar_label: Instalar Bun
---

## Introducción

NodeJS y NPM son la base para definir el ecosistema del desarrollo de frontend.

A pesar de su utilidad, sus respectivos rendimientos dejan mucho que desear.

Por eso recomendamos utilizar Bun para obtener beneficios significativos y palpables con la facilidad de una rápida
adaptación y mantiene la compatibilidad.

En Netuno cada vez se utiliza más Bun, vea los motivos...

## Bun

Bun es equiparable a NodeJS pero muy potenciado, moderno, intuitivo y súper rápido.

El rendimiento de Bun es incuestionable; quien hace la transición de la ejecución de NodeJS a Bun nota de inmediato el
beneficio.

Como los proyectos de frontend suelen tardar algún tiempo en iniciar, con Bun la inicialización es inmediata.

Y las dependencias de frontend suelen ocupar mucho espacio, donde la carpeta `📂 node_modules` puede llegar
fácilmente a cientos de megabytes o incluso gigas.

Bun además resuelve el problema del espacio desperdiciado con la replicación de la copia de dependencias por múltiples
proyectos.

Creando un repositorio central de dependencias compartido por todos los proyectos que al instalar configura carpetas
enlazadas.

Así reduce drásticamente el consumo de espacio ocupado por las dependencias.

> Entre diversas otras ventajas, destaca además en la usabilidad y en la salida, que está mejorada, es intuitiva y más
evolucionada en general.

Dado que las ventajas de rendimiento son de extrema importancia para el desarrollo ágil, recomendamos su
utilización.

Para instalar Bun siga los pasos en:

- [**Instalación de Bun**](https://bun.sh/docs/installation)

### Uso en Proyectos

Para utilizar Bun en los proyectos, asegúrese de que si ya utiliza NPM, Yarn u otro, debe eliminar la carpeta `📂 node_modules`.

Donde tiene el archivo `package.json` debe ejecutar el comando de instalación de las dependencias:

- `bun install`

Ahora basta con ejecutar las acciones de `scripts` configuradas en `package.json`, por ejemplo:

- `bun run dev`

Y para compilar:

- `bun run build`

Utilizar Bun es muy similar a NPM, Yarn, PNPM, etc., solo que es mucho más rápido y mejor en general, y además en el
despliegue para los entornos de prueba y producción, permite obtener alto rendimiento con el despliegue concluido rápidamente y
más eficiente en general.

### Comandos Integrados en Netuno

Del lado de Netuno, con la centralización del terminal, donde todos los comandos del proyecto se ejecutan juntos en el mismo
proceso y terminal de Netuno.

- [Más sobre Terminal Centralizado.](/docs/academy/explore/centralized-terminal)

Si está integrado y utilizando la ejecución de comandos de NPM, debe realizar el cambio a Bun.

Cambie a Bun en la configuración de los `commands` de la aplicación Netuno en `📂 config/_development.json`, por ejemplo:

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
    ]
    ...
}
```

## Conclusión

No sufra más por falta de espacio con diversas réplicas de dependencias dentro de las carpetas `📂 node_modules` desperdiciando gigas.

Y ni se quede tanto tiempo esperando hasta que finalmente su proyecto instale dependencias, inicie o compile.

Nada impide la utilización de Bun, porque garantiza la compatibilidad con NodeJS y NPM, es literalmente dos en uno.

En los proyectos con Netuno estamos utilizando y migrando todo a **Bun**, siga esta tendencia.