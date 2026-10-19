---
sidebar_position: 3
id: fields
title: Campos
---



Los Campos son los componentes fundamentales y los "bloques de construcción" de un formulario en Netuno. Representan la interfaz de interacción con el usuario y definen cómo se estructurarán y almacenarán los datos.

En la práctica, cada campo creado corresponde a una columna en la tabla de la base de datos, determinando el tipo de información que el sistema puede procesar —como textos, números, fechas, selecciones y archivos—.

### Crear y editar campos

Estos botones permiten gestionar el estado general de la edición:

- **Editar campo existente:** Menú desplegable para seleccionar un campo ya creado y modificar su configuración.

- **Crear nuevo campo:** Limpia todos los campos del formulario para iniciar la configuración de un nuevo elemento desde cero.

- **Clonar campo:** Duplica la configuración del campo seleccionado para agilizar la creación de elementos similares.

![campo-editar-existente-es.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Título del campo

El Título del campo (técnicamente conocido como etiqueta) es la instrucción visual que orienta al usuario sobre qué información debe introducir en un formulario. Funciona como una etiqueta identificativa, garantizando que la cumplimentación de los datos sea intuitiva y correcta.

En esta etapa, el título tiene una doble finalidad en la plataforma:

- **En la Gestión de campos (Construir):** Sirve para identificar el campo dentro de su lista de elementos durante el desarrollo de la aplicación.

![campo-titulo-nombre-es.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **En la interfaz de usuario (Visualizar):** Es el texto que aparece situado justo encima o al lado del campo de entrada (input), indicando al usuario final qué debe escribir en el formulario.

![campo-titulo-nombre-contenido-es.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Nombre de la columna

A diferencia del título, el **Nombre de la columna** es el identificador interno y exclusivo del campo, utilizado directamente en la base de datos y en lógicas de programación. Es a través de este nombre como el sistema localiza la información en la base de datos.

**Formateo automático (interruptor Auto):**

Netuno facilita este proceso rellenando el nombre automáticamente a partir del "Título del campo". El patrón utilizado es snake_case.

**Reglas de escritura:** Si opta por rellenarlo manualmente (desactivando el "Auto"), mantenga el nombre en singular, use solo letras minúsculas y evite espacios o caracteres especiales.

![campo-nombre-columna-es.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Tipos de datos

La definición del **Tipo de dato** determina la naturaleza de la información recopilada, lo que influye directamente en la apariencia del campo para el usuario y en la forma en que el dato se almacena en el sistema.

![campo-tipo-dato-es.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Campos de texto

Estos campos están destinados a la introducción de texto en diferentes formatos. Varían según la necesidad de volumen de datos.

| Tipo | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| text | Crea un campo de entrada simple para una sola línea. | Nombres, títulos de artículos, barrios, etc. |
| textarea | Crea un campo de entrada de área de texto más grande, para varias líneas. | Descripciones de productos, comentarios, observaciones. |
| email | Crea un campo de entrada de texto formateado para recibir un correo electrónico. | Registro de correo electrónico de contacto, inicio de sesión de usuario. |
| texthtml | Crea un editor de texto enriquecido, que permite formatear con HTML. | Creación de contenido para un blog, correos de marketing, páginas de sitio web. |
| textmd | Crea un editor de texto que soporta el lenguaje de marcado Markdown. | Ideal para documentación técnica, publicaciones de blog para desarrolladores. |

### 3.2 Campos numéricos

Utilizados para recopilar información estrictamente numérica.

| Tipo | ¿Qué hace? | Ejemplo de uso |
| :--- | :--- | :--- |
| textnum | Crea un campo de entrada para introducir números enteros. | Cantidad en stock, edad de una persona, número de plazas. |
| textfloat | Crea un campo de entrada para introducir números con decimales. | Precios de productos (p. ej.: 99.90), peso (p. ej.: 75.5), altura (p. ej.: 1.82). |

### 3.3 Campos de selección

Utilizados cuando el usuario debe elegir entre opciones predefinidas.

| Tipo | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| select | Crea una lista de opciones en la que el usuario puede elegir solo una. | Seleccionar una provincia, estado civil, categoría de un producto. |
| multiselect | Crea una lista de opciones en la que el usuario puede elegir varias. | Seleccionar intereses (deportes, tecnología), ingredientes de una pizza. |
| checkbox | Muestra una única casilla de verificación (activar/desactivar). | "Acepto los términos de uso", "Recordar mi contraseña". |
| color | Muestra un selector de color visual. | Elegir el color de un producto, personalizar el color de un evento. |

### 3.4 Campos de fecha y hora

Especializados en la introducción de información temporal.

| Tipo | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| date | Muestra un calendario para que el usuario seleccione una fecha (día, mes, año). | Fecha de nacimiento, fecha de cita. |
| datetime | Permite seleccionar una fecha y una hora. | Inicio de un evento, fecha y hora de una publicación. |
| time | Permite seleccionar una hora (horas y minutos). | Horario de apertura, hora de una alarma. |

### 3.5 Campos de archivos y multimedia

Utilizado para subir archivos e imágenes a su aplicación.

| Tipo | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| file | Crea un campo para subir un archivo cualquiera (PDF, DOCX, ZIP). | Adjuntar un currículum, enviar un justificante de pago. |
| image | Un campo optimizado para subir imágenes (JPG, PNG, GIF). | Foto de perfil del usuario, imagen de un producto. |

### 3.6 Campos técnicos y especiales

Estos campos tienen comportamientos automáticos o sirven a propósitos específicos del sistema.

| Tipo | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| hidden | El campo es invisible para el usuario, pero guarda un valor. | Almacenar un ID procedente de otra página, un código de seguimiento. |
| uid | Genera automáticamente un Identificador Único Universal. | Clave primaria de un registro, código único de un pedido. |
| user | Asocia el registro al usuario que lo creó o modificó. | Identificar el autor de una publicación de blog, el vendedor que registró un cliente. |
| lastchange | Almacena automáticamente la fecha y la hora de la última modificación del registro. | Auditoría, para saber cuándo se modificó un dato por última vez. |
| group | Se utiliza para agrupar visualmente otros campos en el formulario. | Crear secciones como "Datos personales" y "Dirección" para organizar formularios largos. |

## 4 - Configuraciones de comportamiento y diseño

Esta área es el "panel de control" de su campo, y define las reglas de negocio y los permisos de acceso.

![campo-configuraciones-comportamiento-y-diseno-es.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Reglas de integridad de los datos

Estas opciones garantizan la calidad y la consistencia de la información.

| Configuración | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| Valores únicos (clave primaria) | Transforma el campo en el identificador principal y único, impidiendo valores duplicados. | Usar para "DNI", garantizando que no existan dos clientes con el mismo número. |
| Obligatorio (no nulo) | Hace obligatorio rellenar el campo. | Aplicar en campos esenciales como "Nombre" y "Correo electrónico". |

### 4.2 Control de permisos y visibilidad

Define dónde y cómo interactúan los usuarios con los datos de este campo.

| Configuración | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| Mostrar en el resultado | Define si la columna aparecerá en el listado principal de datos. | Desmarcar para "Observaciones internas" para mantener el listado limpio. |
| Permitir filtrar | Añade una caja de búsqueda para esta columna en el listado. | Habilitar en "Estado del pedido" para facilitar la localización. |
| Permitir visualizar | Controla si el contenido se mostrará en el modo de visualización. | Dejarlo marcado en la mayoría de los casos. |
| Permitir editar | Permite que el contenido se modifique cuando se está editando un registro. | Desmarcar para campos que no deben modificarse, como "Fecha de alta". |
| Permitir al crear nuevo | Define si el campo debe aparecer en el formulario de creación. | Desmarcar para campos de "feedback", que solo deben rellenarse *después* de la creación. |
| Permitir exportar | Incluye los datos de este campo al exportar el listado (Excel, CSV). | Desmarcar datos internos que no son relevantes para informes externos. |

## 5 - Organización visual del formulario

Define la posición de los campos en el diseño.

![campo-organizacion-visual-formulario-es.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configuración | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| Fila | Define la posición vertical del campo en el formulario. | Colocar "Nombre completo" en la Fila: 1 y "Dirección" en la Fila: 2. |
| Columna | Define la posición horizontal, permitiendo varios campos uno al lado del otro. | Para tener "Ciudad" y "Provincia" juntos, usar Fila: 3, Columna: 1 (Ciudad) y Columna: 2 (Provincia). |

## 6 - Ver más opciones

Para un control más personalizado, haga clic en el botón "+ Ver más opciones".

### 6.1 Campo de descripción

![campo-opciones-descripcion-es.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configuración | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| Descripción | Añade un texto de ayuda o instrucción que aparece debajo del campo. | En "Contraseña", usar la descripción para informar de las reglas: "La contraseña debe tener como mínimo 8 caracteres...". |

### 6.2 Dimensionamiento del campo

![campo-dimensionamiento-diseno-es.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Control preciso sobre el tamaño del campo.

| Configuración | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| Anchura | Define la anchura del componente (basado en una rejilla de 12 columnas). | "DNI" (Anchura: 6) y "Fecha de nacimiento" (Anchura: 6) en la misma fila. |
| Altura | Define la altura del componente en píxeles (px). | En `textarea` "Observaciones", definir Altura "120" para un área mayor. |
| Anchura de la celda (px) | Define una anchura fija en píxeles para la celda. | Usar para alinear campos con anchuras específicas, como "Provincia" (Anchura: 80). |
| Altura de la celda (px) | Define una altura fija en píxeles para la celda. | Aumentar la altura de un campo `image` para crear un área de "arrastrar y soltar". |
| Rowspan | Permite que la celda se expanda verticalmente por varias filas. | Un `textarea` de "Descripción" que ocupe 3 filas de altura junto a campos más pequeños. |
| Colspan | Permite que la celda se expanda horizontalmente por varias columnas. | Un campo "Dirección completa" (Colspan: 2) encima de "Ciudad" y "Provincia". |

### 6.3 Validación y reglas de datos

Establezca límites para los valores introducidos.

| Configuración | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| Max | Valor máximo (numérico) o número máximo de caracteres (texto). | En "Nota (0 a 10)", definir Max como "10". En "Alias", Max "20". |
| Min | Valor mínimo (numérico) o número mínimo de caracteres (texto). | En "Cantidad", definir Min como "1". En "Justificación", Min "30". |

### 6.4 Control de acceso 

![campo-control-acceso-es.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Defina grupos y usuarios que pueden visualizar y editar el campo.

| Configuración | ¿Qué hace? | Ejemplo de uso práctico |
| :--- | :--- | :--- |
| Vista de usuario y vista de grupo | Restringe la *visualización* del campo únicamente a los usuarios o grupos especificados. | "Comisión del vendedor" tener Vista de grupo "Gerentes". |
| Edición de usuario y edición de grupo | Permite que solo los usuarios o grupos especificados *editen* el campo (los demás lo ven como "solo lectura"). | "Estado del pedido" tener Edición de grupo "Logística". |