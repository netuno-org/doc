---
sidebar_position: 2
id: install
title: Instalación
sidebar_label: Instalación
---

## Requisitos

Antes de instalar CLUAR, es necesario tener:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) instalado.
2. [Bun](https://bun.sh/docs/installation) instalado.

## Clonar el proyecto

CLUAR es una aplicación de Netuno, por lo que debe clonarse dentro de la carpeta `apps` de la instalación de Netuno:

```
[directorio raíz de Netuno]/apps
```

Usando el comando:

```
git clone https://github.com/netuno-org/cluar.git
```

## Instalar el sitio web (con Bun)

Dentro de la carpeta `website`:

```
cd website
```

Ejecutar el comando de instalación de Bun:

```
bun install
```

Es necesario permitir la ejecución de scripts no confiables de ESBUILD:

```
bun pm trust --all
```

Si necesitas reiniciar la instalación del sitio web, elimina la carpeta `node_modules` y los archivos de bloqueo, e instala de nuevo:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Siguiente paso

Con el código y las dependencias instaladas, continúa con la [Configuración](/docs/academy/cluar/configuration).