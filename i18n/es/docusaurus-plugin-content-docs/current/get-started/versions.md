---
sidebar_position: 4
id: versions
title: Versiones
sidebar_label: Versiones
---


# Versiones

Si está empezando a utilizar Netuno, recomendamos realizar la **instalación estándar** para garantizar el uso de la versión más reciente y estable de la plataforma.

Netuno también permite instalar versiones anteriores específicas o versiones experimentales aún en desarrollo, útil para entornos de prueba o reproducción de errores.

Antes de instalar o actualizar a una versión específica, consulte la lista oficial de versiones:

- **Lista de versiones:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Consejo
Revise las notas de la versión antes de instalar una versión específica, especialmente en entornos de producción.
:::

## Instalación de una versión específica

Para instalar o actualizar Netuno a una versión específica, añada el parámetro `version` al comando de instalación con el identificador de la versión deseada.

Elija el método que mejor se adapte a su entorno:

### Método 1: Instalador Java

Utilice este método para nuevas instalaciones:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Método 2: Ejecutor principal

Utilice este método si Netuno ya está instalado y desea actualizar a una versión específica:

```bash
./netuno install version=20230417.0119
```

### Método 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Sustituya `20230417.0119` por el identificador de la versión deseada, disponible en la **[lista de versiones](https://github.com/netuno-org/platform/releases)**.

Después de ejecutar el comando, Netuno iniciará automáticamente el proceso de instalación de la versión indicada.
:::