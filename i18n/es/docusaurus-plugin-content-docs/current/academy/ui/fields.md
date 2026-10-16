---
sidebar_position: 3
id: fields
title: Campos
---



Los Campos son los componentes fundamentales y los "bloques de construcción" de un formulario en Netuno. Representan la interfaz de interacción con el usuario y definen cómo se estructurarán y almacenarán los datos.

En la práctica, cada campo creado corresponde a una columna en la tabla de la base de datos, determinando el tipo de información que el sistema puede procesar — como textos, números, fechas, selecciones y archivos.

### Crear y Editar Campos

Estos botones permiten gestionar el estado general de la edición:

- **Editar campo existente:** Menú desplegable para seleccionar un campo ya creado y modificar sus configuraciones.

- **Crear nuevo campo:** Limpia todos los campos del formulario para iniciar la configuración de un nuevo elemento desde cero.

- **Clonar campo:** Duplica las configuraciones del campo seleccionado para agilizar la creación de elementos similares.

![field-edit-existing-pt.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Título del Campo

El Título del Campo (técnicamente conocido como Label) es la instrucción visual que orienta al usuario sobre qué información debe introducirse en un formulario. Funciona como una etiqueta identificadora, garantizando que el llenado de los datos sea intuitivo y correcto.

En esta etapa, el título tiene doble finalidad en la plataforma:

- **En la Gestión de Campos (Construir):** Sirve para identificar el campo dentro de su lista de elementos durante el desarrollo de la aplicación.

![field-title-name-pt.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **En la Interfaz de Usuario (Visualizar):** Es el texto que aparece posicionado justo encima o al lado del campo de entrada (input), indicando al usuario final qué debe escribir en el formulario.

![field-title-name-content-pt.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Nombre de la columna

A diferencia del título, el **Nombre de la Columna** es el identificador interno y exclusivo del campo, utilizado directamente en la base de datos y en lógicas de programación. Es a través de este nombre que el sistema localiza la información en la base de datos.

**Formateo Automático (Switch Auto):**

Netuno facilita este proceso rellenando el nombre automáticamente con base en el "Título del campo". El patrón utilizado es snake_case.

**Reglas de Escritura:** Si opta por rellenar manualmente (desactivando el "Auto"), mantenga el nombre en singular, use solo letras minúsculas y evite espacios o caracteres especiales.

![field-column-name-pt.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Tipos de datos

La definición del **Tipo de Dato** determina la naturaleza de la información recogida, impactando directamente en la apariencia del campo para el usuario y en la forma en que el dato se almacena en el sistema.

![field-type-data-pt.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Campos Textuales

Estos campos están destinados a la inserción de texto en diferentes formatos. Varían según la necesidad de volumen de datos.

| Tipo | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| text | Crea un input simple para una única línea. | Nombres, títulos de artículos, barrios, etc. |
| textarea | Crea un input de área de texto mayor, para múltiples líneas. | Descripciones de productos, comentarios, observaciones. |
| email | Crea un input de texto formateado para recibir un correo electrónico. | Registro de correo electrónico de contacto, inicio de sesión de usuario. |
| texthtml | Crea un editor de texto enriquecido, que permite formateo con HTML. | Creación de contenido para un blog, correos de marketing, páginas de sitio web. |
| textmd | Crea un editor de texto que soporta el lenguaje de marcado Markdown. | Ideal para documentación técnica, publicaciones de blog para desarrolladores. |

### 3.2 Campos Numéricos

Utilizados para recoger información que es estrictamente numérica.

| Tipo | ¿Qué hace? | Ejemplo de Uso |
| :--- | :--- | :--- |
| textnum | Crea un input para la inserción de números enteros. | Cantidad en stock, edad de una persona, número de plazas. |
| textfloat | Crea un input para la inserción de números con decimales. | Precios de productos (ej: 99.90), peso (ej: 75.5), altura (ej: 1.82). |

### 3.3 Campos de Selección

Utilizados cuando el usuario debe elegir entre opciones predefinidas.

| Tipo | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| select | Crea una lista de opciones donde el usuario puede elegir solo una. | Seleccionar una provincia, estado civil, categoría de un producto. |
| multiselect | Crea una lista de opciones donde el usuario puede elegir varias. | Seleccionar intereses (deportes, tecnología), ingredientes de una pizza. |
| checkbox | Muestra una única casilla de verificación (activar/desactivar). | "Acepto los términos de uso", "Recordar mi contraseña". |
| color | Muestra un selector de colores visual. | Elegir el color de un producto, personalizar el color de un evento. |

### 3.4 Campos de Fecha y Hora

Especializados para la inserción de información temporal.

| Tipo | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| date | Muestra un calendario para que el usuario seleccione una fecha (día, mes, año). | Fecha de nacimiento, fecha de cita. |
| datetime | Permite la selección de una fecha y una hora. | Inicio de un evento, fecha y hora de una publicación. |
| time | Permite la selección de una hora (horas y minutos). | Horario de funcionamiento, hora de una alarma. |

### 3.5 Campos de Archivos y Multimedia

Utilizado para enviar archivos e imágenes a su aplicación.

| Tipo | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| file | Crea un campo para la carga de un archivo cualquiera (PDF, DOCX, ZIP). | Adjuntar un currículum, enviar un comprobante de pago. |
| image | Un campo optimizado para la carga de imágenes (JPG, PNG, GIF). | Foto de perfil del usuario, imagen de un producto. |

### 3.6 Campos Técnicos y Especiales

Estos campos poseen comportamientos automáticos o sirven a propósitos específicos del sistema.

| Tipo | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| hidden | El campo es invisible para el usuario, pero guarda un valor. | Almacenar un ID proveniente de otra página, un código de seguimiento. |
| uid | Genera automáticamente un Identificador Único Universal. | Clave primaria de un registro, código único de un pedido. |
| user | Asocia el registro al usuario que lo creó o modificó. | Identificar el autor de una publicación de blog, el vendedor que registró un cliente. |
| lastchange | Almacena automáticamente la fecha y hora de la última modificación del registro. | Auditoría, para saber cuándo se modificó un dato por última vez. |
| group | Utilizado para agrupar visualmente otros campos en el formulario. | Crear secciones como "Datos Personales" y "Dirección" para organizar formularios largos. |

## 4 - Configuraciones de Comportamiento y Diseño

Esta área es el "panel de control" de su campo, definiendo las reglas de negocio y los permisos de acceso.

![field-behavior-and-layout-settings-pt.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Reglas de Integridad de los Datos

Estas opciones garantizan la calidad y la consistencia de la información.

| Configuración | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| Valores Únicos (Clave Primaria) | Transforma el campo en el identificador principal y único, impidiendo valores duplicados. | Usar para "DNI", garantizando que no existan dos clientes con el mismo número. |
| Obligatorio (No Nulo) | Hace que el campo sea obligatorio. | Aplicar en campos esenciales como "Nombre" y "Correo electrónico". |

### 4.2 Control de Permisos y Visibilidad

Define dónde y cómo los usuarios interactúan con los datos de este campo.

| Configuración | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| Mostrar en el Resultado | Define si la columna aparecerá en el listado principal de datos. | Desmarcar para "Observaciones Internas" para mantener el listado limpio. |
| Permitir Filtrar | Añade una caja de búsqueda para esta columna en el listado. | Habilitar en "Estado del Pedido" para facilitar la localización. |
| Permitir Visualizar | Controla si el contenido se mostrará en el modo de visualización. | Dejar marcado en la mayoría de los casos. |
| Permitir Editar | Permite que el contenido se modifique cuando un registro se está editando. | Desmarcar para campos que no deben modificarse, como "Fecha de Registro". |
| Permitir al Crear Nuevo | Define si el campo debe aparecer en el formulario de creación. | Desmarcar para campos de "comentarios", que solo deben rellenarse *después* de la creación. |
| Permitir Exportar | Incluye los datos de este campo al exportar el listado (Excel, CSV). | Desmarcar datos internos que no son relevantes para informes externos. |

## 5 - Organización Visual del Formulario

Define el posicionamiento de los campos en el diseño.

![field-visual-organization-form-pt.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configuración | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| Fila | Define la posición vertical del campo en el formulario. | Colocar "Nombre Completo" en la Fila: 1 y "Dirección" en la Fila: 2. |
| Columna | Define la posición horizontal, permitiendo múltiples campos uno al lado del otro. | Para tener "Ciudad" y "Provincia" juntos, usar Fila: 3, Columna: 1 (Ciudad) y Columna: 2 (Provincia). |

## 6 - Ver Más Opciones

Para un control más personalizado, haga clic en el botón "+ Ver Más Opciones".

### 6.1 Campo de Descripción

![field-view-options-description-pt.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configuración | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| Descripción | Añade un texto de ayuda o instrucción que aparece debajo del campo. | En "Contraseña", usar la descripción para informar las reglas: "La contraseña debe tener como mínimo 8 caracteres...". |

### 6.2 Dimensionamiento del Campo

![field-dimensioning-layout-pt.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Control fino sobre el tamaño del campo.

| Configuración | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| Ancho | Define el ancho del componente (basado en una cuadrícula de 12 columnas). | "DNI" (Ancho: 6) y "Fecha de Nacimiento" (Ancho: 6) en la misma línea. |
| Alto | Define el alto del componente en píxeles (px). | En `textarea` "Observaciones", definir Alto "120" para un área mayor. |
| Ancho de la Celda (px) | Define un ancho fijo en píxeles para la celda. | Usar para alinear campos con anchos específicos, como "Provincia" (Ancho: 80). |
| Alto de la Celda (px) | Define un alto fijo en píxeles para la celda. | Aumentar la altura de un campo `image` para crear un área de "arrastrar y soltar". |
| Rowspan | Permite que la celda se expanda verticalmente por múltiples filas. | Un `textarea` de "Descripción" que ocupe 3 filas de alto junto a campos más pequeños. |
| Colspan | Permite que la celda se expanda horizontalmente por múltiples columnas. | Un campo "Dirección Completa" (Colspan: 2) encima de "Ciudad" y "Provincia". |

### 6.3 Validación y Reglas de Datos

Establezca límites para los valores introducidos.

| Configuración | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| Max | Valor máximo (numérico) o número máximo de caracteres (texto). | En "Nota (0 a 10)", definir Max como "10". En "Apodo", Max "20". |
| Min | Valor mínimo (numérico) o número mínimo de caracteres (texto). | En "Cantidad", definir Min como "1". En "Justificación", Min "30". |

### 6.4 Control de Acceso 

![field-access-control-pt.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Defina grupos y usuarios que pueden visualizar y editar el campo.

| Configuración | ¿Qué hace? | Ejemplo de Uso Práctico |
| :--- | :--- | :--- |
| Vista de Usuario y Vista de Grupo | Restringe la *visualización* del campo solo a los usuarios o grupos especificados. | "Comisión del Vendedor" tener Vista de Grupo "Gerentes". |
| Edición de Usuario y Edición de Grupo | Permite que solo los usuarios o grupos especificados *editen* el campo (los demás lo ven como "solo lectura"). | "Estado del Pedido" tener Edición de Grupo "Logística". |