---
sidebar_position: 5
id: relationships-between-forms
title: Relaciones entre formularios
sidebar_label: Relaciones
---

## Cómo crear relaciones entre formularios

La creación de relaciones entre formularios es un recurso esencial para organizar la información de forma inteligente. Al conectar formularios, eliminas la necesidad de duplicar datos y garantizas que tu aplicación sea cohesiva, escalable y fácil de mantener.

Una de las grandes ventajas de Netuno es la capacidad de generar automáticamente el diagrama del modelo de datos.

Las relaciones definen cómo interactúan entre sí los datos de diferentes tablas. Esta conexión se refleja directamente en la interfaz de usuario (UI), permitiendo que los campos de un formulario busquen información en otro automáticamente.

**Diagrama Simple:** Ideal para validar la lógica inicial de pequeños módulos.

![diagrama-simple-plantilla-es.png](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Diagrama Complejo:** Demuestra la robustez de la herramienta en aplicaciones de gran escala, mapeando múltiples dependencias y flujos de datos.
 
![diagrama-complejo-plantilla-es.png](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Creación de campo relacional de tipo Select

El campo Select crea una relación entre dos formularios. Te permite elegir un valor de una lista desplegable (dropdown), en lugar de escribirlo manualmente. Esta lista se rellena con datos que ya existen en otro formulario.

Usaremos los formularios de **Vehículos** y **Color** como ejemplo. 

**¿Cuándo usarlo?** Usa el select cuando tienes una relación de tipo "Muchos a Uno" (N-1).

**Ejemplo:** Muchos Vehículos pueden tener un Color. En lugar de escribir "Azul" cada vez, seleccionas "Azul" de una lista de colores ya registrados.

- **Formulario de Destino:** Vehículo (donde vamos a crear el campo select).
- **Formulario de Origen:** Color (de donde vienen los datos de la lista de colores).


### Requisitos
Antes de empezar, asegúrate de que:

- Ambos formularios (**Vehículo** y **Color**) ya están creados en Netuno. Para más detalles, consulta nuestra guía sobre [Creación de Formularios](/docs/academy/ui/forms).

- El formulario de origen (**Color**) ya tiene algunos registros creados. (Ej: "Azul", "Rojo", "Plata"). Para más detalles, consulta nuestra guía sobre [Creación de Campos](/docs/academy/ui/fields).

### Crear y Configurar el Select

Añade el tipo de campo **select** en el formulario **Vehículo** para que pueda "extraer" los datos del formulario **Color**.

![crear-y-configurar-el-campo-select-es.png](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Accede al Formulario de Destino

- En el Backoffice, ve a la gestión de campos y abre la edición del formulario **Vehículo**.
 
#### 2 - Crea el Nuevo Campo

- Haz clic en "Crear nuevo campo".

#### 3 - Define el Título y el Nombre de la Columna

- **Título del Campo:** Dale un nombre amigable que aparecerá para el usuario. **Ejemplo:** Color del Automóvil.
- **Nombre de la Columna:** Este es el nombre técnico del campo en la base de datos.

**Buena Práctica:** Al crear un campo relacional, usa siempre el sufijo `_id` en el **Nombre de la Columna**. Esto deja claro que esta columna no almacena el texto "Azul", sino el ID de referencia para el registro "Azul" en el formulario **Color**. **Ejemplo:** `color_automovil_id`.

#### 4 - Elige el Tipo de Datos

- En el campo **Tipo**, selecciona la opción _`select - select`_ en la lista.

#### 5 - Configura el Enlace (La Relación)

![configurar-el-enlace-es.png](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- Al elegir _`select`_, se mostrará un nuevo campo llamado **Enlace**.
- Haz clic en el botón **Configurar**.
- Se abrirá un modal, listando todos tus formularios. Este es el momento de elegir el formulario de Origen.
- Selecciona el formulario que contiene los datos que quieres listar. En nuestro ejemplo, haz clic en **color - Color**.
- Después de seleccionar, haz clic en el botón **Cerrar** en el modal.

#### 6 - Guarda los Cambios

- Haz clic en el botón **Guardar** en la gestión de campos para aplicar todas tus configuraciones.

### Resultado

¡Listo! Ahora en el modo "visualizar", cuando vayas a añadir o editar un registro en el formulario **Vehículo**, el campo "Color del Automóvil" será una lista desplegable (dropdown) que mostrará todos los colores registrados en tu formulario Color.

## Creación de campo relacional de tipo Multiselect

El campo **Multiselect** crea una relación "Muchos a Muchos" (N-M). Te permite seleccionar varios elementos de una lista en un único campo.

Usaremos los formularios de **Persona**, **Función** y **Persona-Función** como ejemplo.

**¿Cuándo usarlo?** Usa el multiselect cuando un registro pueda estar vinculado a varios otros, y viceversa.
**Ejemplo:** Muchas Personas pueden tener muchas Funciones.

- Una persona (ej: "Ana") puede tener las funciones "Admin" y "Gestor".
- La función "Gestor" puede estar asociada a varias personas (ej: "Ana", "Bruno" y "Santiago").

Para que esto funcione, necesitamos tres formularios:

- **Formulario "Padre" (Persona):** Donde el campo _`multiselect`_ será visible para el usuario.
- **Formulario "Origen" (Función):** De donde vienen las opciones de la lista (ej: "Admin", "Gestor").
- **Formulario "Unión" (Persona-Función):** Un formulario "puente" que almacena las conexiones entre **Persona** y **Función**.

### Requisitos
Antes de empezar, asegúrate de que:

- El formulario "Padre" (**Persona**) ya está creado y con algunos registros (ej: "Ana", "Bruno", "Lucas").
- El formulario "Origen" (**Función**) ya está creado y con algunos registros (ej: "Admin", "Gestor", "Consultor").

### Crear y Configurar el Multiselect 
La configuración se hace en 4 etapas:

### Etapa 1: crear el formulario de unión (Persona-Función)
Primero, vamos a crear el formulario "puente".

1 - **Ve a Gestión > Formularios** y haz clic en "Crear nuevo formulario".

2 - **Título del formulario:** Persona-Función.

3 - **Nombre de la tabla:** persona_funcion  (o similar).

4 - **Importante:** En el campo **Padre**, selecciona el formulario "Padre" principal, que en este caso es **Persona**. Esto transforma **Persona-Función** en un subformulario.

5 - Haz clic en **Guardar**.

![crear-el-formulario-padre-para-la-union-es.png](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Etapa 2: configurar los campos del formulario de unión

Añade los campos "puente" al formulario Persona-Función.

1 - Accede a la gestión de Campos del formulario Persona-Función que acabas de crear.

2 - Añade dos campos de tipo select: uno que apuntará a Persona y otro a Función.

**Campo 1 (Enlace a Persona):**

![campo-enlace-para-persona-es.png](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Título del campo:** Nombre de la Persona
- **Nombre de la columna:** `nombre_persona_id` (siguiendo la convención **_id**)
- **Tipo:** `select - select`
- **Enlace:** Haz clic en **Configurar** y selecciona el campo principal del formulario **Persona**, ejemplo: `persona:nombre`.
- Haz clic en **Guardar**.

**Campo 2 (Enlace a Función):**

- **Título del campo:** Función de la Persona. 
- **Nombre de la columna:** `funcion_persona_id`.
- **Tipo:** `select - select`.
- **Enlace:** Haz clic en **Configurar** y selecciona el campo principal del formulario **Función**, ejemplo: `funcion:funcion_id`.
- Haz clic en **Guardar**.

![campo-enlace-a-persona-funcion-es.png](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Etapa 3: crear el campo multiselect en el formulario "padre"

Con el "puente" (**Persona-Función**) listo, podemos volver al formulario **Persona** para crear el campo final.

1 - Ve a la gestión de Campos del formulario **Persona**.

2 - Haz clic en "Crear nuevo campo".

3 - **Título del campo:** Persona Función.

4 - **Nombre de la columna:** _`persona_funcion_id`_.

5 - **Tipo:** _`multiselect - multiselect`_.


### Etapa 4: configurar el campo multiselect

Al seleccionar el tipo _`multiselect`_, aparecerán dos nuevos campos de configuración: **Referencia** y **Enlace**.

#### 1 - Referencia (¿Dónde guardar la relación?)

 - **Este campo le dice a Netuno:** "¿Qué campo del formulario 'puente' se refiere de vuelta a mí (**Persona**)?"
 - Haz clic en **Configurar**.
 - Selecciona el formulario de unión (**Persona-Función**) y el campo que creaste en la Etapa 2 (Campo 1). **Ejemplo:** _`persona_funcion:nombre_persona_id`_.

#### 2 - Enlace (¿De dónde vienen las opciones?)

 - **Este campo dice:** "¿Qué campo del formulario 'puente' se refiere a las opciones (**Función**)?"
 - Haz clic en **Configurar**.
 - Selecciona el formulario de unión (**Persona-Función**) y el campo que creaste en la Etapa 2 (Campo 2). **Ejemplo:** _`persona_funcion:funcion_persona_id`_.
  
#### 3 - Guarda los Cambios

- Haz clic en el botón **Guardar** en la gestión de campos para aplicar todas tus configuraciones.

![configurar-el-campo-multiselect-es.png](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Resultado

¡Listo! Ahora en el modo "visualizar", al añadir o editar un registro en el formulario **Persona**, el campo "Persona Función" aparecerá como una casilla de selección múltiple. Podrás elegir varias funciones de la lista (que vienen del formulario **Función**), y Netuno guardará automáticamente esas asociaciones dentro del formulario **Persona-Función**.

Si tienes alguna duda, contacta con nosotros a través de la comunidad y otros canales disponibles al final de esta página.

¡Buen desarrollo!