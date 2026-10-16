---
sidebar_position: 2
id: server-commands-tips
title: Servidor, Comandos y Consejos
sidebar_label: Servidor, Comandos y Consejos
---

# Comandos del Servidor

Referencia de los principales comandos de Netuno. Ejecútalos en el **terminal**, desde la carpeta donde está instalado Netuno.

:::tip
¿No sabes cómo llegar a la carpeta de Netuno? Consulta la guía de [Instalación](/docs/get-started/installation).
:::

---

## Iniciar el servidor

Inicia el servidor con la aplicación de `demostración`.

```bash
./netuno server
```

---

## Iniciar el servidor en la APP

Inicia el servidor con la aplicación específica definida por el parámetro `app`. Si no se define ninguna, se iniciará la aplicación de demostración.

```bash
./netuno server app=NOMBRE_APP
```

---

## Nueva Aplicación

Crea una nueva aplicación desde cero, solicitando información y configuraciones iniciales.

```bash
./netuno app
```

---

## Listar Comandos

Lista todos los comandos y parametrizaciones disponibles con sus respectivas descripciones.

```bash
./netuno help
```

---

## Estadísticas de Rendimiento

Presenta la información de rendimiento más reciente, almacenada en `logs/stats-*`.

```bash
./netuno stats
```

---

## Actualización a la Versión Estable

Actualiza Netuno a la versión estable más reciente.

```bash
./install-stable
```

---

## Actualización a la Versión en Pruebas

Actualiza Netuno a la versión más reciente en desarrollo.

```bash
./install-testing
```