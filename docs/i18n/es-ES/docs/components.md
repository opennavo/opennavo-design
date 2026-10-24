[English](../../../components.md) · [简体中文](../../zh-CN/docs/components.md) · [繁體中文](../../zh-Hant/docs/components.md) · [日本語](../../ja-JP/docs/components.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/components.md) · [Русский](../../ru-RU/docs/components.md) · [Deutsch](../../de-DE/docs/components.md) · [Français](../../fr-FR/docs/components.md) · [Italiano](../../it-IT/docs/components.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="components"></a>

# Componentes

Referencia para cada componente en [`@opennavo/design-vue`](../../../../packages/vue): lo que es para, sus props, eventos y
ranuras (como se declara en la fuente), variantes, cuándo utilizarla, y cómo se comporta para el teclado y la tecnología de asistencia.
Cómo se combinan los componentes en las pantallas [Patrones](patterns.md); la galería (`pnpm gallery`) muestra cada uno
variante en ambos temas y en los diez idiomas. Vue seguir la misma anatomía, tamaños y estados
con las fichas directamente ([Plataformas](platforms.md)).

Convenios:

- **Default** `—` significa que el prop es opcional y sin par; las propinas booleanas sin un predeterminado listado son `false`.
- Las cadenas incorporadas ("Close", "Pagination", "Search" ...) provienen del catálogo de mensajes del paquete en el locale
  dados a `createOnUi({ locale })` (Inglés de otro modo). `label`, `placeholder`, `title`,
  `description`, `…Label` anímalos.
- **Iconos** son Lucide (Nombres)`search`, `lucide:search`) o `prefix:name` de un conjunto añadido con `registerIcons`.
- **Enlaces:** componentes que hacen que los enlaces `linkAs` (`'a'` por defecto, o `RouterLink` / `NuxtLink`). Con un
  componente router la URL se pasa como `to`; los componentes nunca leen la ruta actual - pase `active`,
  `modelValue` o `page` tú mismo.
- **Anillo de enfoque:** cada parte interactiva muestra `shadow-focus-ring` on `:focus-visible`. Los superpuestos mueven el enfoque con
  `moveFocus`, que anillos script se centran sólo después de la navegación del teclado (WebKit de otra manera lo llamaría en cualquier
  enfoque programático).
- Colores, radios y tipo vienen de `@opennavo/design-tokens`; nada aquí códigos duros un color, así que ambos temas y un
  El acento remarcado se aplica automáticamente.

**Grupos:** [Acciones e insumos](#actions-and-inputs) · [Containers and data](#containers-and-data) ·
[Estados](#states) · [Capas superpuestas](#overlays) · [Diseño y navegación](#layout-and-navigation) ·
[Showcase](#showcase)

---

<a id="actions-and-inputs"></a>

## Acciones e insumos

<a id="onbutton"></a>

### OnButton

El botón estándar, o un enlace que se parece a uno.

| Prop            | Tipo                                                          | Default       | Descripción                                                                                               |
| --------------- | ------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `variant`       | `'primary' \| 'secondary' \| 'accent' \| 'ghost' \| 'danger'` | `'secondary'` | Peso visual; ver Variantes.                                                                               |
| `size`          | `'xs' \| 'sm' \| 'md' \| 'lg'`                                | `'md'`        | Altura 26 / 28 / 34 / 40.                                                                                 |
| `shape`         | `'default' \| 'round'`                                        | `'default'`   | `round` da una forma de píldora.                                                                          |
| `icon`          | `string`                                                      | —             | Icono antes del texto (14 px en xs/sm, 15 px en md/lg).                                                   |
| `iconOnly`      | `boolean`                                                     | —             | Botón cuadrado que muestra sólo el icono; la ranura predeterminada no se renderiza. Requiere `ariaLabel`. |
| `ariaLabel`     | `string`                                                      | —             | Nombre accesible; requerido para los botones sólo icono.                                                  |
| `loading`       | `boolean`                                                     | —             | Muestra un spinner en lugar del icono, sets `aria-busy`, y deshabilita el botón.                          |
| `disabled`      | `boolean`                                                     | —             | Mira deshabilitado; clics son ignorados.                                                                  |
| `block`         | `boolean`                                                     | —             | Llena el ancho disponible.                                                                                |
| `type`          | `'button' \| 'submit' \| 'reset'`                             | `'button'`    | Tipo de botón nativo (sólo botones).                                                                      |
| `href`          | `string`                                                      | —             | Render un enlace en lugar de un botón.                                                                    |
| `target`, `rel` | `string`                                                      | —             | Pasó al enlace.                                                                                           |
| `linkAs`        | `string \| Component`                                         | `'a'`         | Componente de enlace; `href` se pasa como `to` para los componentes del router.                           |

| Evento  | Carga de pago         | Descripción                                      |
| ------- | --------------------- | ------------------------------------------------ |
| `click` | `[event: MouseEvent]` | No se emite mientras está desactivado o cargado. |

| Ranura    | Descripción  |
| --------- | ------------ |
| `default` | La etiqueta. |

**Variedades.** `primary` (invertido, uno por área) `secondary` (default), `accent` (color de la marca, para una acción
que debe destacar), `ghost` (extraído, para acciones de baja emisión y barras de herramientas), `danger` (Tornillo rojo, destructivo).
Los botones de carga y desactivados de cada variante comparten un estilo mudo.

**Uso** para las acciones. Para la navegación con estilo como botón pasar `href`. No utilice un botón para la configuración de encendido/apagado
(`OnToggle`) o para elegir una de algunas opciones (`OnSegmented`).

**Accesibilidad.** Un nativo `<button>` (keyboard y comportamiento de forma incluido) o un enlace. Los botones discapacitados son nativos
discapacitados; un enlace con discapacidad pierde su `href` (o, con un componente de router, se mantiene `to`, se pone `aria-disabled="true"` y
su clic se evita). Los botones Icon-only deben tener `ariaLabel`; añadir un `OnTooltip` para usuarios avistados.

<a id="onicon"></a>

### OnIcon

Un icono SVG inline de los conjuntos empaquetados o registrados.

| Prop    | Tipo     | Default    | Descripción                                                                                    |
| ------- | -------- | ---------- | ---------------------------------------------------------------------------------------------- |
| `name`  | `string` | necesarios | Lucide (Nombre)`search`, `lucide:search`) o `prefix:name` de un set registrado.                |
| `size`  | `number` | `16`       | Tamaño del píxel: 12 en placas, 14 en botones, 16 predeterminado, 17 barra lateral, 18 paleta. |
| `label` | `string` | —          | Hace del icono una imagen (`role="img"`, `aria-label`); de lo contrario es decorativo.         |

Ancho de estrobo es 2 debajo de 16 px y 1.6 de lo contrario. `currentColor`. Los nombres desconocidos hacen un SVG vacío
Advertir en el desarrollo. Rendering es sincrónico, por lo que los iconos aparecen en servidor-rendered HTML.

**Accesibilidad.** Decorativa por defecto (por defecto)`aria-hidden="true"`). Dar `label` sólo a los iconos que llevan significado en su
propio; al lado del texto, déjalo fuera.

<a id="onchip"></a>

### OnChip

Una etiqueta corta para un tipo o estado ("App", "Update available", "Deprecated").

| Prop      | Tipo                                                                                            | Default     | Descripción                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `tone`    | `'neutral' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'accent' \| 'coral' \| 'outline'` | `'neutral'` | `accent` (salmón) para actualizaciones, `coral` para el progreso, `outline` para notas neutrales como la traducción automática. |
| `outline` | `boolean`                                                                                       | —           | Esbozo en lugar de relleno; combina con cualquier tono (por ejemplo, discapacitados = `danger` + contorno).                     |
| `dot`     | `boolean`                                                                                       | —           | Dirigiendo 6 px punto en el color de texto.                                                                                     |
| `icon`    | `string`                                                                                        | —           | Icono de 12 px.                                                                                                                 |
| `size`    | `'sm' \| 'md'`                                                                                  | `'sm'`      | Altura 20 / 24.                                                                                                                 |

| Ranura    | Descripción |
| --------- | ----------- |
| `default` | El texto.   |

**Uso** para el estado y metadatos. Siempre decir el estado en palabras; el color sólo lo soporta. No interactivo - para un
uso de la opción `OnSegmented`; para contar con el uso de la navegación `OnBadge`.

**Accesibilidad.** Texto en línea simple; el punto y el icono son decorativos.

<a id="onbadge"></a>

### OnBadge

Un recuento de coral ("6", "99+") o una pequeña etiqueta de texto resaltada ("conocida esta semana").

| Prop    | Tipo     | Default | Descripción                                                                           |
| ------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `count` | `number` | —       | Hace una insignia de cuenta; sin ella la insignia muestra su tragaperras como texto.  |
| `max`   | `number` | `99`    | Cuentas por encima del espectáculo `max+`.                                            |
| `label` | `string` | —       | Nombre accesible de una placa de cuenta, por ejemplo "6 actualizaciones disponibles". |

| Ranura       | Descripción                                                                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`    | Texto de una placa de texto.                                                                                                                          |
| `decoration` | Una marca pequeña después del texto (unos 13 px, `currentColor`), por ejemplo una estrella o una marca de aplicación. Oculto de lectores de pantalla. |

**Uso** contar las insignias para las cosas que necesitan atención (actualizaciones); `OnNavItem` y `OnSidebar` utilizarlos a través
de ellos `badge` prop. Usar las insignias de texto para los aspectos editoriales. `OnChip`.

**Accesibilidad.** Un número desnudo significa poco para un lector de pantalla; pasar `label` para contar las placas.

<a id="ontoggle"></a>

### OnToggle

Un interruptor de encendido / apagado para configuraciones que se aplican inmediatamente.

| Prop             | Tipo      | Default    | Descripción                                                                   |
| ---------------- | --------- | ---------- | ----------------------------------------------------------------------------- |
| `modelValue`     | `boolean` | necesarios | Encendida o apagada`v-model`).                                                |
| `disabled`       | `boolean` | —          | No cambiable; desmontado.                                                     |
| `ariaLabel`      | `string`  | —          | Nombre accesible cuando no hay etiqueta visible.                              |
| `ariaLabelledby` | `string`  | —          | ID de la etiqueta visible, por ejemplo, el texto de la fila de configuración. |

| Evento              | Carga de pago      | Descripción      |
| ------------------- | ------------------ | ---------------- |
| `update:modelValue` | `[value: boolean]` | El nuevo estado. |

**Uso** en las filas de configuración con la etiqueta a la izquierda y el interruptor a la derecha. Para opciones que sólo se aplican después
"Guardar", o en una lista de artículos para actuar, utilizar `OnCheckbox`.

**Accesibilidad.** A `<button role="switch">` con `aria-checked`; Espacio y Entrar toggle it. Name it with
`ariaLabelledby` (preferido, puntos en la etiqueta visible) o `ariaLabel`.

<a id="oncheckbox"></a>

### OnCheckbox

Una casilla de verificación con etiqueta opcional, estados mixtos y cerrados.

| Prop            | Tipo      | Default    | Descripción                                                                                                                    |
| --------------- | --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `modelValue`    | `boolean` | necesarios | Comprobado (`v-model`).                                                                                                        |
| `indeterminate` | `boolean` | —          | Algunos niños seleccionados (tabla o cabecera de grupo); hacer clic selecciona todo. Ignorado mientras se comprueba o bloquea. |
| `disabled`      | `boolean` | —          | No cambiable; desmontado.                                                                                                      |
| `locked`        | `boolean` | —          | Siempre incluido e inmutable, por ejemplo, un elemento requerido de un plan de eliminación: se muestra comprobado y gris.      |
| `ariaLabel`     | `string`  | —          | Nombre accesible cuando la ranura predeterminada no tiene etiqueta visible.                                                    |
| `title`         | `string`  | —          | Insinuación de la palanca, por ejemplo, por qué la caja está desactivada.                                                      |

| Evento              | Carga de pago      | Descripción                 |
| ------------------- | ------------------ | --------------------------- |
| `update:modelValue` | `[value: boolean]` | El nuevo estado comprobado. |

| Ranura    | Descripción                                  |
| --------- | -------------------------------------------- |
| `default` | La etiqueta visible, dentro de la `<label>`. |

**Uso** seleccionar elementos para una acción posterior (listas, tablas, planes de eliminación) y para opciones confirmadas por un botón.
Para la configuración instantánea use `OnToggle`.

**Accesibilidad.** Una casilla de verificación nativa dentro de un `<label>`, por lo que el texto de la etiqueta es su nombre y haciendo clic en él se mueve.
El estado mixto se establece como el DOM `indeterminate` propiedad y `aria-checked="mixed"`Las cajas bloqueadas están deshabilitadas
y comprobado. Los clics paran en la etiqueta para que una fila de mesa circundante o encabezado de grupo no reaccione también.

<a id="onsegmented"></a>

### OnSegmented

Un control segmentado: elegir una de dos a cinco opciones, como un filtro de vista o un intervalo de tiempo.

| Prop         | Tipo                              | Default    | Descripción                                                                                                                                                         |
| ------------ | --------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue` | `T extends string`                | necesarios | Valor de opción seleccionado (`v-model`).                                                                                                                           |
| `options`    | `readonly OnSegmentedOption<T>[]` | necesarios | `{ value, label, count?, dots? }`; `dots` son nombres de variables token (por ejemplo. `chart-series1`) dibujado como puntos de color pequeño antes de la etiqueta. |
| `size`       | `'sm' \| 'md'`                    | `'md'`     | Alturas de opción 24 / 28.                                                                                                                                          |
| `ariaLabel`  | `string`                          | —          | Nombre accesible del grupo.                                                                                                                                         |

| Evento              | Carga de pago | Descripción                          |
| ------------------- | ------------- | ------------------------------------ |
| `update:modelValue` | `[value: T]`  | Emitido sólo cuando el valor cambia. |

**Uso** para opiniones mutuamente excluyentes del mismo contenido. Para la navegación entre páginas utiliza `OnTabs`; para muchos
las opciones usan un menú.

**Accesibilidad.** `role="radiogroup"` con `role="radio"` botones y `aria-checked`. Sólo la opción seleccionada es
en el orden de la pestaña; las teclas de flecha se mueven y seleccionan (envolver), Home y End salto a los extremos.

<a id="ontabs"></a>

### OnTabs

Tabs, ya sea conmutando paneles en la misma página o enlazando a páginas separadas.

| Prop         | Tipo                      | Default    | Descripción                                              |
| ------------ | ------------------------- | ---------- | -------------------------------------------------------- |
| `modelValue` | `T extends string`        | necesarios | Valor actual de la ficha.                                |
| `items`      | `readonly OnTabItem<T>[]` | necesarios | `{ value, label, count?, disabled?, href?, controls? }`. |
| `ariaLabel`  | `string`                  | —          | Nombre accesible de la lista de pestañas o navegación.   |
| `linkAs`     | `string \| Component`     | `'a'`      | Componente de enlace en modo de enlace.                  |

| Evento              | Carga de pago | Descripción                                                              |
| ------------------- | ------------- | ------------------------------------------------------------------------ |
| `update:modelValue` | `[value: T]`  | Haga clic (o tecla de flecha en modo tablista) en otra pestaña activada. |

**Variedades.** Modo de la lista (ningún artículo tiene `href`): paneles de la misma página. Modo de enlace (cualquier artículo tiene `href`): cada ficha es una
enlace a su propia URL, por ejemplo, así que los motores de búsqueda indexan cada pestaña. La pestaña activa tiene un indicador de línea; `count`
muestra un pequeño número después de la etiqueta.

**Uso** para las vistas de hermano de un tema. Para los filtros de una lista uso `OnSegmented`.

**Accesibilidad.** Modo de tablist: `role="tablist"` / `role="tab"` con `aria-selected`, el foco de la pestaña rugiendo, teclas de flecha
(pantallas desactivadas), Inicio y Fin; set `controls` a la identificación del panel para `aria-controls` y dar el panel
`role="tabpanel"`. Modo de enlace: a `<nav>` de enlaces con `aria-current="page"` sobre el activo; los artículos discapacitados
no relacionados `<span aria-disabled="true">`.

<a id="onsearchfield"></a>

### OnSearchField

Un campo de texto para buscar y filtrar, con botón claro y atajo.

| Prop          | Tipo      | Default    | Descripción                                                                         |
| ------------- | --------- | ---------- | ----------------------------------------------------------------------------------- |
| `modelValue`  | `string`  | necesarios | La consulta (`v-model`).                                                            |
| `placeholder` | `string`  | —          | Texto del titular.                                                                  |
| `ariaLabel`   | `string`  | —          | Nombre accesible; predeterminación al titular del lugar.                            |
| `shortcut`    | `string`  | —          | A la derecha, por ejemplo. `⌘K`; reemplazado por el botón claro mientras hay texto. |
| `clearable`   | `boolean` | `true`     | Mostrar un botón claro cuando hay texto.                                            |
| `disabled`    | `boolean` | —          | No editable; desmontado.                                                            |

| Evento              | Carga de pago     | Descripción                                                 |
| ------------------- | ----------------- | ----------------------------------------------------------- |
| `update:modelValue` | `[value: string]` | Cada entrada.                                               |
| `submit`            | `[value: string]` | Introdúzcase (no mientras se compone un método de entrada). |
| `clear`             | `[]`              | Borrar botón o Escapar con texto.                           |

Expuesto: `focus()`, `blur()`.

**Uso** Para abrir una paleta de comandos desde una barra de herramientas, utilice el botón de búsqueda
of of `OnToolbar` / `OnTopNav` en lugar de eso.

**Accesibilidad.** Un nativo `type="search"` entrada nombrado por `ariaLabel` escapar despeja a un no-vacio
campo y se detiene allí; en un campo vacío burbujas (para que pueda cerrar un diálogo circundante). El botón claro es
etiquetado "Clear" en el idioma actual y vuelve a centrarse en la entrada.

<a id="ontooltip"></a>

### OnTooltip

Una breve descripción que aparece en el enfoque de buceador y teclado.

| Prop        | Tipo                                     | Default    | Descripción                                                                                                                                                                                                                                                                           |
| ----------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content`   | `string`                                 | necesarios | El texto; el contenido vacío desactiva la punta de la herramienta.                                                                                                                                                                                                                    |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`    | El lado preferido; voltea cuando no hay espacio y se queda dentro del mirador.                                                                                                                                                                                                        |
| `delay`     | `number`                                 | `400`      | Mostrar retraso en milisegundos.                                                                                                                                                                                                                                                      |
| `disabled`  | `boolean`                                | —          | Nunca se muestran.                                                                                                                                                                                                                                                                    |
| `lazy`      | `boolean`                                | —          | Render la punta de la herramienta sólo una vez que el gatillo se utiliza primero, y sin `aria-describedby`. Para los desencadenantes decorativos cuya información está en la página de todos modos (barritas de caracteres con una tabla oculta); lo mantiene fuera de servidor HTML. |

| Ranura    | Descripción                                                |
| --------- | ---------------------------------------------------------- |
| `default` | El gatillo; su primer elemento obtiene `aria-describedby`. |

Atributos (Atributos)`class`, `style`. . . `<span>`. La punta de la herramienta se teletransporta `<body>` y posicionados
`fixed`, así que los contenedores de desplazamiento nunca lo cortan; se esconde en el pergamino y el tamaño.

**Uso** para botones de iconos y texto truncado. Nunca ponga información esencial o contenido interactivo en un campo de herramientas.

**Accesibilidad.** `role="tooltip"`, ligado desde el gatillo con `aria-describedby` (Independientemente) `lazy`, discapacitado o vacío).
Se abre en el foco, así como el buceador, y Escape lo cierra (WCAG 1.4.13).

<a id="onmenu"></a>

### OnMenu

Un menú de acción detrás de un botón, como "Más acciones" o un menú de selección.

| Prop      | Tipo                    | Default       | Descripción                                                                   |
| --------- | ----------------------- | ------------- | ----------------------------------------------------------------------------- |
| `items`   | `readonly OnMenuItem[]` | necesarios    | `{ key, label, icon?, shortcut?, danger?, disabled?, separator?, checked? }`. |
| `label`   | `string`                | —             | Nombre accesible de gatillo y menú; predeterminado a "Más acciones".          |
| `icon`    | `string`                | `'ellipsis'`  | Icono del gatillo predeterminado.                                             |
| `variant` | `OnButtonVariant`       | `'secondary'` | Variante del gatillo predeterminado.                                          |
| `size`    | `OnButtonSize`          | `'md'`        | Tamaño del gatillo predeterminado.                                            |
| `align`   | `'start' \| 'end'`      | `'end'`       | A qué lado del gatillo se alinea el menú.                                     |

| Evento   | Carga de pago   | Descripción                                                                      |
| -------- | --------------- | -------------------------------------------------------------------------------- |
| `select` | `[key: string]` | Se eligió un elemento habilitado; el menú se cierra y el foco vuelve al gatillo. |

| Ranura    | Firma                                                                   | Descripción                                                                                |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `trigger` | `(props: { open: boolean; attrs: Record<string, unknown> }) => unknown` | Un gatillo personalizado; atar `attrs` (ARIA, clic y controladores de teclas) en su botón. |

Temas: `danger` dibuja texto rojo, `separator` añade un divider antes del punto, `shortcut` muestra una pista a la derecha,
`checked` (cualquier valor definido) convierte el artículo en una opción: `true` muestra una marca de cheques.

**Uso** para acciones secundarias de una fila o página y para elegir una opción (orden de surtido, idioma). Poner el principal
acción en un botón visible.

**Accesibilidad.** Trigger: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`; ArrowDown o ArrowUp se abre
el primer o último elemento. Un puntero abre el menú sin preseleccionar un elemento; un teclado abierto centra el primero.
Menú: `role="menu"` con `menuitem` o `menuitemradio` (`aria-checked`) elementos fuera de la orden de la pestaña; teclas de flecha
ciclo (desactivado), salto de casa y final, Escape y Tab cerrarlo y volver a centrarse en el gatillo.
el tamaño o el desplazamiento cierra. El menú es teletransportado a `<body>`, se abre hacia arriba cuando no hay espacio abajo.

---

<a id="containers-and-data"></a>

## Containers and data

<a id="oncard"></a>

### OnCard

Una superficie fronteriza que agrupa contenido relacionado; opcionalmente un enlace o botón.

| Prop          | Tipo                                                         | Default | Descripción                                                                         |
| ------------- | ------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `as`          | `'div' \| 'section' \| 'article' \| 'li' \| 'a' \| 'button'` | `'div'` | Elemento rendido (ignorado cuando `href` se establece). `button` # `type="button"`. |
| `href`        | `string`                                                     | —       | Render la tarjeta como un enlace (a través de `linkAs`).                            |
| `interactive` | `boolean`                                                    | —       | Hover border/background, puntero cursor y anillo de enfoque.                        |
| `padding`     | `'none' \| 'sm' \| 'md' \| 'lg'`                             | `'md'`  | 0 / 14 / 16 / 18 px.                                                                |
| `linkAs`      | `string \| Component`                                        | `'a'`   | Componente de enlace.                                                               |

| Ranura    | Descripción              |
| --------- | ------------------------ |
| `default` | Contenido de la tarjeta. |

**Uso** para agrupar y para enlaces de tarjetas enteras. Las tarjetas usan una frontera y un relleno, sin sombra. No anidan interactivo
tarjetas o poner varios enlaces dentro de una tarjeta que es en sí mismo un enlace.

**Accesibilidad.** Una tarjeta clicable debe ser un enlace real (`href`) o botón (`as="button"`); su texto se convierte en el
nombre accesible, así que manténgalo corto.

<a id="onstattile"></a>

### OnStatTile

Un número etiquetado con unidad, pista y cambio.

| Prop    | Tipo           | Default    | Descripción                                                                                                                                           |
| ------- | -------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label` | `string`       | necesarios | Caso de condena sin colon, por ejemplo "uso de disco".                                                                                                |
| `value` | `string`       | necesarios | El valor formateado.                                                                                                                                  |
| `unit`  | `string`       | —          | Por ejemplo, "GB", "hace un minuto".                                                                                                                  |
| `hint`  | `string`       | —          | Tercera línea.                                                                                                                                        |
| `delta` | `OnStatDelta`  | —          | `{ value, direction: 'up' \| 'down', good }`: la flecha muestra la dirección, `good` elige verde o rojo.                                              |
| `size`  | `'sm' \| 'md'` | `'sm'`     | `sm`: una baldosa independiente (por ejemplo, una cuadrícula de 2×2); `md`: una célula de una tira de estante cuyo contenedor dibuja los separadores. |

**Uso** para tableros de control y carriles sumarios. Para las listas de etiquetas/valor utilizan `OnKeyValueList`.

**Accesibilidad.** Texto de la palabra en el orden de lectura (marca, valor, unidad, cambio, indicio).
carácter de flecha y un color; asegúrese `delta.value` tiene sentido leer en voz alta.

<a id="onkeyvaluelist"></a>

### OnKeyValueList

Una lista de dos columnas de valores etiquetados, por ejemplo, detalles de un artículo.

| Prop    | Tipo                        | Default    | Descripción                                                                                                                             |
| ------- | --------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `items` | `readonly OnKeyValueItem[]` | necesarios | `{ key, label, value, mono?, href? }`; `mono` para identificadores, comandos y caminos; `href` hace que el valor sea un enlace externo. |

Valores trunquen con una elipsis en una línea.

**Accesibilidad.** A `<dl>` of of `<dt>`/`<dd>` pares. Enlaces externos se abren en una nueva pestaña con
`rel="noopener noreferrer"` y un icono de flecha.

<a id="ontable"></a>

### OnTable

Una tabla de datos con pantalla de clasificación, selección, celdas personalizadas y desplazamiento virtual.

| Prop             | Tipo                                 | Default    | Descripción                                                                                                              |
| ---------------- | ------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| `columns`        | `readonly OnTableColumn[]`           | necesarios | `{ key, label, numeric?, mono?, sortable?, width?, hideLabel? }`.                                                        |
| `rows`           | `readonly Row[]`                     | necesarios | Rows, ya ordenados por el anfitrión.                                                                                     |
| `rowKey`         | `(row: Row) => string`               | necesarios | Llave estable por fila.                                                                                                  |
| `cellValue`      | `(row: Row, key: string) => unknown` | —          | Contenido celular predeterminado; de lo contrario `row[column.key]`.                                                     |
| `sort`           | `OnTableSort \| null`                | —          | `{ key, order: 'asc' \| 'desc' }` para mostrar; el componente no ordena.                                                 |
| `selectedKey`    | `string \| null`                     | —          | Remo (correo) destacado.                                                                                                 |
| `dimmed`         | `(row: Row) => boolean`              | —          | Renglones desempescados (por ejemplo, dependencias) al 55% de la opacidad.                                               |
| `caption`        | `string`                             | —          | Captura de mesa visiblemente oculta.                                                                                     |
| `height`         | `number`                             | —          | Altura fija en px con una cabecera pegajosa; por encima de 200 filas sólo se renderizan filas visibles (44 px cada uno). |
| `layout`         | `'auto' \| 'fixed'`                  | —          | `fixed` honores columna anchos y trunca la columna flexible, así que tablas anchas nunca se desplazan lateralmente.      |
| `selectable`     | `boolean`                            | —          | Columna de la casilla de verificación principal; uso `v-model:selected`.                                                 |
| `selected`       | `readonly string[]`                  | —          | Claves de fila seleccionadas; llaves de filas filtradas `rows` se mantienen.                                             |
| `canSelect`      | `(row: Row) => boolean`              | —          | Filas que no pueden ser seleccionadas (por ejemplo, artículos protegidos); todas por defecto.                            |
| `selectAllLabel` | `string`                             | —          | Nombre accesible de la caja de control de cabecera.                                                                      |
| `selectRowLabel` | `(row: Row) => string`               | —          | Nombre accesible de cada casilla de verificación de filas.                                                               |

| Evento            | Carga de pago             | Descripción                                                                                                                                                 |
| ----------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `update:sort`     | `[sort: OnTableSort]`     | Se hizo clic en un encabezado clasificable: la misma columna revierte, una nueva columna comienza a descender cuando numérico y ascendiendo de otra manera. |
| `update:selected` | `[keys: string[]]`        | Cambios de casilla; la caja del encabezado selecciona o aclara cada fila seleccionable.                                                                     |
| `rowClick`        | `[key: string, row: Row]` | Se hizo clic en una fila (excluidos los clics de la casilla).                                                                                               |

| Ranura       | Firma                                              | Descripción                                                                      |
| ------------ | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cell-{key}` | `(props: { row: Row; value: unknown }) => unknown` | Contenido personalizado para columna `key`, por ejemplo. `#cell-name="{ row }"`. |

**Uso** para registros comparables con varios atributos. Para un puñado de pares de etiquetas/valor utilizan `OnKeyValueList`;
para contenido rico y desigual utiliza una lista de tarjetas.

**Accesibilidad.** Un verdadero `<table>` con `scope="col"` cabeceras clasificables son botones llamados "Sort by
{label}"y la célula de cabecera lleva `aria-sort`. `hideLabel` mantiene un encabezado visualmente oculto (por ejemplo, "Actions").
Exhibición de filas seleccionables `aria-selected`; la caja de control de cabecera muestra el estado mixto. `height`, el rollo
contenedor es concentrado para que los usuarios del teclado puedan desplazarlo.

<a id="onpagination"></a>

### OnPagination

Números anteriores/next y página con elipses; botones o enlaces cuando cada página tiene una URL.

| Prop        | Tipo                       | Default    | Descripción                                                                                                                             |
| ----------- | -------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `page`      | `number`                   | necesarios | Página actual, basada en uno.                                                                                                           |
| `pageCount` | `number`                   | necesarios | Páginas totales; nada representa para una página.                                                                                       |
| `max`       | `number`                   | `7`        | Ranuras incluyendo elipses (mínimo 5); primera, última y actual página siempre muestran.                                                |
| `hrefFor`   | `(page: number) => string` | —          | Enlaces Render: cada página tiene su propia URL (por ejemplo. `?page=3`).                                                               |
| `linkAs`    | `string \| Component`      | `'a'`      | Componente de enlace `hrefFor`.                                                                                                         |
| `jumps`     | `readonly number[]`        | —          | Páginas adicionales estos muchos pasos antes y después de la actual; predeterminado a `[10, 100]` con `hrefFor` y ninguno para botones. |

| Evento        | Carga de pago    | Descripción                                                                       |
| ------------- | ---------------- | --------------------------------------------------------------------------------- |
| `update:page` | `[page: number]` | Otra página fue elegida (también se despidió por enlaces antes de la navegación). |

**Uso** para listas largas y con direcciones ( resultados de búsqueda, catálogos). Para los feeds prefieren "cargar más" o pergamino infinito.

**Accesibilidad.** `<nav aria-label="Pagination">`; los botones de página se llaman "Page N", el actual tiene
`aria-current="page"`; anterior/next en los extremos se vuelven no interactivos con `aria-disabled="true"`; elipses son
escondido de lectores de pantalla.

<a id="onprogressmeter"></a>

### OnProgressMeter

Una barra de progreso, determinante o indeterminado.

| Prop    | Tipo             | Default | Descripción                                                            |
| ------- | ---------------- | ------- | ---------------------------------------------------------------------- |
| `value` | `number \| null` | —       | 0–100 (consignado); sin par o sin par `null` significa indeterminado.  |
| `size`  | `'md' \| 'sm'`   | `'md'`  | Altura de la barra 6 / 4 px (`sm` para barras de menú y filas densas). |
| `label` | `string`         | —       | Nombre accesible, por ejemplo "Descargar actualización".               |

**Uso** para tareas con progreso mensurable, o trabajo continuo sin él (indeterminado). Mostrar un porcentaje o
quedando el tiempo al lado de ella cuando tienes uno.

**Accesibilidad.** `role="progressbar"` con `aria-valuemin`, `aria-valuemax`, `aria-valuenow` (redondeado) o
`aria-valuetext="In progress"` cuando indeterminado. Con movimiento reducido la barra indeterminada deja de moverse y muestra
"En progreso" como texto.

<a id="onstackbar"></a>

### OnStackBar

Una única barra apilada con leyenda: cómo un total se divide en partes (por ejemplo, almacenamiento por tipo).

| Prop      | Tipo                        | Default    | Descripción                                                                     |
| --------- | --------------------------- | ---------- | ------------------------------------------------------------------------------- |
| `items`   | `readonly OnStackItem[]`    | necesarios | `{ key, label, value, display? }`; cero y los valores negativos se dejan fuera. |
| `caption` | `string`                    | necesarios | Nombre de la tabla; capción de la tabla oculta.                                 |
| `format`  | `(value: number) => string` | —          | Formatos de valores sin `display`, incluyendo el "Otro".                        |

Hasta tres colores de serie (`chart.series1–3`) se utilizan en orden; con más de tres elementos el tercero y más tarde
Incorpórese en "Otros". Los porcentajes siguen el local actual. En un segmento se muestra una herramienta perezosa.

**Accesibilidad.** El bar y la leyenda están ocultos de los lectores de pantalla; una tabla visualmente oculta (Item, Value, Share)
con la capción lleva los datos.

<a id="onhbarchart"></a>

### OnHBarChart

Barras horizontales que comparan unos pocos valores, por ejemplo descargas por período.

| Prop      | Tipo                    | Default    | Descripción                                                                                                                                                                                                             |
| --------- | ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `readonly OnHBarItem[]` | necesarios | `{ key, label, value, display?, full?, emphasis? }`: `display` en el extremo de la barra (por ejemplo, "17K"), `full` en el campo de herramientas y mesa (por ejemplo, "17.394"), `emphasis` colores el período actual. |
| `caption` | `string`                | necesarios | Nombre de la tabla; capción de la tabla oculta.                                                                                                                                                                         |
| `max`     | `number`                | —          | Máximo escala; predeterminado al valor más grande.                                                                                                                                                                      |

**Accesibilidad.** Las barras están ocultas de los lectores de pantalla; una tabla visualmente oculta (Item, Value) lleva los valores completos.
Las herramientas son perezosas, por lo que nunca se convierten en texto de página de estrago.

<a id="onskeleton"></a>

### OnSkeleton

Un marcador de posición brillante mientras carga el contenido.

| Prop     | Tipo                                                                        | Default   | Descripción                               |
| -------- | --------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| `width`  | `string`                                                                    | `'100%'`  | CSS Longitud.                             |
| `height` | `string`                                                                    | `'14px'`  | CSS longitud de cada línea.               |
| `radius` | `'tiny' \| 'small' \| 'default' \| 'big' \| 'huge' \| 'full' \| 'app-icon'` | `'small'` | Coincide con el radio de lo que carga.    |
| `lines`  | `number`                                                                    | —         | Varias líneas; la última es 60% de ancho. |

**Uso** sólo para la primera carga, formada como el contenido. Mientras reenfriamiento, mantenga el viejo contenido (secado) en su lugar
de esqueletos de flash.

**Accesibilidad.** `aria-hidden="true"`. Anuncio cargando en otro lugar si importa (por ejemplo, `aria-busy` sobre la región).
El brillo se detiene con movimiento reducido.

<a id="oncodetext"></a>

### OnCodeText

Texto de código en línea que envuelve entre palabras, nunca dentro de una.

| Prop   | Tipo     | Default    | Descripción                |
| ------ | -------- | ---------- | -------------------------- |
| `text` | `string` | necesarios | El comando, ruta o código. |

Cada carrera de caracteres no espaciales es un bloque en línea, por lo que un nombre hipnotizado o `--flag` nunca se divide; una palabra más amplia
que la línea rompe preferiblemente después `/`, `.` o `=`. El espacio blanco se mantiene como texto, por lo que la copia devuelve el original
y `white-space: pre-wrap` Los contenedores mantienen la indentación. Ponlo dentro de su propio `<code>` o `<pre>`.

`codeParts`, `wordPieces` y `codeWordsHtml` exponer la misma división para los renderizadores de Markdown (wrap código inline
palabras en `.on-code-word`; `OnMarkdownView` los estilos).

<a id="onlogviewer"></a>

### OnLogViewer

Un registro monoespacial con tipos de línea coloreados, límite de cola y desplazamiento virtual.

| Prop     | Tipo                | Default    | Descripción                                                                                        |
| -------- | ------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| `lines`  | `readonly string[]` | necesarios | Las líneas de registro, la primera.                                                                |
| `tail`   | `number`            | `2000`     | Mostrar sólo las últimas líneas (capped at 2,000), por ejemplo 5 en una tarjeta de tarea compacta. |
| `height` | `number`            | —          | Desplazarse dentro de esta altura; por encima de 200 líneas sólo se renderizan líneas visibles.    |
| `label`  | `string`            | —          | Nombre accesible; predeterminado a "Log".                                                          |

Colores de línea (`classifyLogLine`): `==>` encabezamientos, `###… 62.4%` barras de progreso, `Error:` / `fatal:` / errores de rizo, y
marcadores de éxito. Las líneas vacías mantienen su altura.

**Accesibilidad.** A `<pre role="log">` con un nombre accesible y `tabindex="0"`, para que los usuarios del teclado puedan desplazarlo.
Las actualizaciones no se anuncian automáticamente más allá de lo que `role="log"` implica; resumir resultados importantes en otros lugares.

<a id="onhighlighttext"></a>

### OnHighlightText

Texto donde `**…**` frases se enfatizan; nada más se analiza.

| Prop   | Tipo                     | Default    | Descripción                                                                                       |
| ------ | ------------------------ | ---------- | ------------------------------------------------------------------------------------------------- |
| `text` | `string`                 | necesarios | Texto con opcional `**…**` énfasis; otros personajes permanecen literales (no Markdown, no HTML). |
| `as`   | `'span' \| 'p' \| 'div'` | `'span'`   | Elemento rendido.                                                                                 |

Las partes enfatizadas utilizan el color principal del texto en el peso 500 (`parseHighlight` expone el persing).

**Uso** para una copia editorial corta de los datos (descripciones de los héroes, resúmenes). `OnMarkdownView`.

<a id="onsectionheader"></a>

### OnSectionHeader

Un título de sección con una pista opcional muda y un enlace de estilo "Ver todo".

| Prop        | Tipo                  | Default    | Descripción                                             |
| ----------- | --------------------- | ---------- | ------------------------------------------------------- |
| `title`     | `string`              | necesarios | El `<h2>` texto.                                        |
| `hint`      | `string`              | —          | Texto mudo al lado del título.                          |
| `moreLabel` | `string`              | —          | Enlace de texto; el enlace sólo se hace con `moreHref`. |
| `moreHref`  | `string`              | —          | Objetivo de enlace.                                     |
| `linkAs`    | `string \| Component` | `'a'`      | Componente de enlace.                                   |

**Accesibilidad.** El `<h2>` sólo tiene el título; el indicio es un párrafo separado, por lo que nunca se convierte en la partida
texto. El enlace tiene un icono de flecha (decorativo).

<a id="onpageheader"></a>

### OnPageHeader

La parte superior de una página: un gran `<h1>`, un subtítulo y acciones a la derecha.

| Prop       | Tipo     | Default    | Descripción                        |
| ---------- | -------- | ---------- | ---------------------------------- |
| `title`    | `string` | necesarios | El `<h1>` texto (30 px, peso 600). |
| `subtitle` | `string` | —          | Línea bajo el título.              |

| Ranura    | Descripción                                                               |
| --------- | ------------------------------------------------------------------------- |
| `default` | Contenido extra bajo el título (chips, filtros).                          |
| `actions` | Botones a la derecha; en pantallas estrechas envuelven debajo del título. |

**Uso** una vez por página. Títulos de sección dentro de la página `OnSectionHeader`.

<a id="onbreadcrumb"></a>

### OnBreadcrumb

El camino de una página de nivel superior a la actual.

| Prop     | Tipo                          | Default    | Descripción                                                                      |
| -------- | ----------------------------- | ---------- | -------------------------------------------------------------------------------- |
| `items`  | `readonly OnBreadcrumbItem[]` | necesarios | `{ label, href? }`; el último artículo es la página actual y no necesita `href`. |
| `linkAs` | `string \| Component`         | `'a'`      | Componente de enlace.                                                            |

**Accesibilidad.** `<nav aria-label="Breadcrumb">` con una lista ordenada; el último artículo tiene `aria-current="page"`.
Los separadores son iconos decorativos. `href` (antes del último) hacer como texto simple.

<a id="onmarkdownview"></a>

### OnMarkdownView

Tipografía para el marcador rendido (notaciones de liberación, descripciones, artículos).

| Prop   | Tipo                        | Default | Descripción                                                                                                                                                 |
| ------ | --------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html` | `string`                    | —       | **Saneamiento** HTML, insertado como es. Ignorado cuando se utiliza la ranura predeterminada.                                                               |
| `size` | `'sm' \| 'md' \| 'article'` | `'sm'`  | `sm` 13/20 para notas de liberación, `md` 14/1.75 para descripciones (ambos max 72ch), `article` 15/1.8 a través de la columna con encabezados más grandes. |

| Ranura    | Descripción                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `default` | Elementos rendidos en lugar de un HTML cadena (p. ej. de un renderizador que produce VNodes). |

Este paquete se envía **sin marcadores y sin sanitizer**. Render y sanitize en su aplicación - por ejemplo
marcador con crudo HTML deshabilitado, entonces un sanitizante de la lista de permisos como DOMPurify - y nunca pasar controlado por el usuario
HTML Clases que su renderizador puede añadir: `on-md-heading-1…3` (tamaño de partida por orden, independiente de
el nivel semántico), `on-md-center` / `on-md-right` (alineación de mesa) `on-code-word` ( palabras clave en línea).

**Accesibilidad.** Los semánticos vienen de tu HTML: utilizar los niveles de encabezado que se ajustan al esquema de la página (por ejemplo, empezar a `h3`
en relación con una sección `h2`) y añadir `alt` Los enlaces reciben un anillo de enfoque.

---

<a id="states"></a>

## Estados

<a id="onempty"></a>

### OnEmpty

Un estado vacío: icono, título, descripción y acciones.

| Prop          | Tipo     | Default          | Descripción                                                 |
| ------------- | -------- | ---------------- | ----------------------------------------------------------- |
| `title`       | `string` | necesarios       | El `<h3>` texto, por ejemplo: "No hay resultados para "x"". |
| `description` | `string` | —                | Una o dos frases sobre qué hacer después.                   |
| `icon`        | `string` | `'lucide:inbox'` | Icon dibujado a 48 px en el color de texto discapacitado.   |

| Ranura    | Descripción            |
| --------- | ---------------------- |
| `actions` | Botones bajo el texto. |

**Uso** cuando una lista o búsqueda no tiene nada que mostrar. Di por qué y ofrecer el siguiente paso. Para los fracasos utilizar
`OnErrorState`; para ninguna conexión `OnOffline`.

**Accesibilidad.** El título es un `<h3>`; el icono es decorativo. Si el estado vacío aparece después de una acción del usuario
(una búsqueda), anunciarlo a través de su propia región en vivo cuando sea necesario.

<a id="onerrorstate"></a>

### OnErrorState

Un fallo de carga con reingreso y un ID de solicitud opcional para los informes.

| Prop          | Tipo             | Default | Descripción                                                                                  |
| ------------- | ---------------- | ------- | -------------------------------------------------------------------------------------------- |
| `title`       | `string`         | —       | Defaults to "Couldn't load".                                                                 |
| `description` | `string`         | —       | Defaults to "La red o servicio es temporalmente indisponible. Inténtelo de nuevo más tarde". |
| `requestId`   | `string \| null` | —       | Se muestra en monoespacio para los informes de emisión.                                      |
| `retryable`   | `boolean`        | `true`  | Mostrar el botón Retry.                                                                      |

| Evento  | Carga de pago | Descripción                 |
| ------- | ------------- | --------------------------- |
| `retry` | `[]`          | El botón Retry fue pulsado. |

**Accesibilidad.** El envoltorio tiene `role="alert"`, por lo que el mensaje se anuncia cuando aparece.

<a id="onoffline"></a>

### OnOffline

Un estado sin conexión.

| Prop          | Tipo     | Default | Descripción                                                                                                                                       |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `string` | —       | Defaults to "Offline".                                                                                                                            |
| `description` | `string` | —       | Defaults to "Showing save content. Actualiza automáticamente cuando estás de vuelta en línea." — override it when your app can say what it shows. |

| Ranura    | Descripción                 |
| --------- | --------------------------- |
| `actions` | Botones, por ejemplo Retry. |

**Accesibilidad.** El envoltorio tiene `role="status"` (anunciado cortésmente).

---

<a id="overlays"></a>

## Capas superpuestas

Todos los sobrecargas se convierten en `<body>` (teleport), mueva el foco dentro cuando se abren, mantenga la pestaña dentro, bloquear página
desplazarse (los sobreimpuestos son contados con referencia) y volver a centrarse en el elemento que los abrió.
en 200 ms y 120 ms, sin moción cuando la moción reducida está encendida.

<a id="ondialogshell"></a>

### OnDialogShell

La capa modal de bajo nivel bajo `OnModal`, `OnSheet` y `OnCommandPalette`: fondo, transiciones, Escape, enfoque
y bloqueo de desplazamiento. Úsalo directamente sólo para paneles personalizados.

| Prop           | Tipo                           | Default    | Descripción                                                                                                   |
| -------------- | ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                      | necesarios | Se muestra cuando es verdad; nada se hace mientras se cierra (también en el servidor).                        |
| `placement`    | `'center' \| 'right' \| 'top'` | `'center'` | Pauta de diálogo centralizada, hoja derecha o parte superior (15vh).                                          |
| `dismissible`  | `boolean`                      | `true`     | `false` ignora los clics de Escape y backdrop (confirmaciones destructivas).                                  |
| `role`         | `'dialog' \| 'alertdialog'`    | `'dialog'` | Función del panel.                                                                                            |
| `labelledby`   | `string`                       | —          | ID del título (`aria-labelledby`).                                                                            |
| `describedby`  | `string`                       | —          | ID de la descripción (`aria-describedby`).                                                                    |
| `ariaLabel`    | `string`                       | —          | Nombre accesible cuando no hay título visible.                                                                |
| `initialFocus` | `string`                       | —          | Selector dentro del panel para enfocar primero; predeterminados al primer elemento focalable, luego el panel. |
| `backdrop`     | `'dim' \| 'clear'`             | `'dim'`    | Scrim desmontado, o un clic-catcher transparente (paleta).                                                    |
| `panelClass`   | `string`                       | —          | Clases para el elemento panel (tamaño, superficie, radio).                                                    |

| Evento  | Carga de pago | Descripción                                                                                           |
| ------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `close` | `[]`          | Escapar o una prensa y soltar en el fondo (la selección de texto y la liberación exterior no cierra). |

| Ranura    | Descripción          |
| --------- | -------------------- |
| `default` | Contenido del panel. |

**Accesibilidad.** El panel tiene el dado `role`, `aria-modal="true"` y su nombre; el ciclo de Tab y Shift-Tab
sus elementos enfocables. Siempre proporcionar `labelledby` o `ariaLabel`.

<a id="onmodal"></a>

### OnModal

Un diálogo centrado con el título, descripción opcional, las acciones del cuerpo y del pie.

| Prop           | Tipo                        | Default    | Descripción                                                                                             |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                   | necesarios | Uso `v-model:open`.                                                                                     |
| `title`        | `string`                    | necesarios | El `<h2>` y el nombre accesible del diálogo.                                                            |
| `description`  | `string`                    | —          | Bajo el título; se convierte `aria-describedby`.                                                        |
| `size`         | `'sm' \| 'md' \| 'lg'`      | `'md'`     | Ancho máximo 480 / 560 / 720.                                                                           |
| `dismissible`  | `boolean`                   | `true`     | `false` ignora los clics de Escape y fondo.                                                             |
| `closable`     | `boolean`                   | `true`     | Cierre el botón en la esquina superior derecha.                                                         |
| `role`         | `'dialog' \| 'alertdialog'` | `'dialog'` | Uso `alertdialog` para las confirmaciones que necesitan una respuesta.                                  |
| `initialFocus` | `string`                    | —          | Selector para enfocar primero; predeterminados al primer elemento focalable (a menudo el botón Cerrar). |

| Evento        | Carga de pago     | Descripción                                |
| ------------- | ----------------- | ------------------------------------------ |
| `update:open` | `[open: boolean]` | `false` sobre cualquier despido.           |
| `close`       | `[]`              | Escapar, telón de fondo o el botón Cerrar. |

| Ranura     | Descripción                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| `default`  | Cuerpo; pergaminos cuando alto.                                                             |
| `footer`   | Acciones alineadas con la derecha (primera secundaria, primaria).                           |
| `leading`  | Antes del título, por ejemplo, un icono de aplicación.                                      |
| `subtitle` | Una línea rica bajo el título (chips, código); `description` todavía se rinde debajo de él. |

Expuesto: `close()`.

**Uso** para tareas enfocadas que bloquean la página (una forma corta, una decisión). Para uso de contenido largo o de referencia
`OnSheet`; para un uso de sí/no pregunta `OnConfirm`.

<a id="onsheet"></a>

### OnSheet

Un panel que se desliza desde la derecha (420 px), por ejemplo para registros o detalles.

| Prop           | Tipo      | Default    | Descripción                                                                  |
| -------------- | --------- | ---------- | ---------------------------------------------------------------------------- |
| `open`         | `boolean` | necesarios | Uso `v-model:open`.                                                          |
| `title`        | `string`  | necesarios | El `<h2>` y el nombre accesible.                                             |
| `initialFocus` | `string`  | —          | Selector para enfocar primero; predeterminados al primer elemento focalable. |

| Evento        | Carga de pago     | Descripción                      |
| ------------- | ----------------- | -------------------------------- |
| `update:open` | `[open: boolean]` | `false` cuando se despide.       |
| `close`       | `[]`              | Escapar, telón de fondo o cerca. |

| Ranura    | Descripción                                                              |
| --------- | ------------------------------------------------------------------------ |
| `default` | Cuerpo de arrastre.                                                      |
| `actions` | Botones de cabecera entre el título y Cerrar, por ejemplo "Copiar todo". |
| `footer`  | Barra de base con acciones alineadas con derecho.                        |

Expuesto: `close()`.

<a id="onconfirm"></a>

### OnConfirm

Un diálogo de confirmación con Cancel y Confirmación.

| Prop              | Tipo                    | Default     | Descripción                                                                                  |
| ----------------- | ----------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| `open`            | `boolean`               | necesarios  | Uso `v-model:open`.                                                                          |
| `title`           | `string`                | necesarios  | La pregunta, por ejemplo: "Delete Orbitfold?".                                               |
| `description`     | `string`                | —           | ¿Qué pasará?                                                                                 |
| `confirmLabel`    | `string`                | —           | Defaults to "Confirm"; preferir el verbo ("Delete").                                         |
| `cancelLabel`     | `string`                | —           | Defaults to "Cancel".                                                                        |
| `tone`            | `'primary' \| 'danger'` | `'primary'` | `danger`: botón de confirmación rojo, no Escape/backdrop despido, Cancelar enfocado primero. |
| `loading`         | `boolean`               | —           | Spinner on Confirm mientras la acción se ejecuta; Cancel es deshabilitado mientras tanto.    |
| `confirmDisabled` | `boolean`               | —           | Inhabilitación Confirme hasta que se cumplan los requisitos (por ejemplo, un permiso).       |

| Evento        | Carga de pago     | Descripción                                                      |
| ------------- | ----------------- | ---------------------------------------------------------------- |
| `confirm`     | `[]`              | Confirme pulsado; el host ejecuta la acción y cierra el diálogo. |
| `cancel`      | `[]`              | Cancelar, Escape o fondo (no para `danger`).                     |
| `update:open` | `[open: boolean]` | `false` al cancelar.                                             |

| Ranura    | Descripción                                                              |
| --------- | ------------------------------------------------------------------------ |
| `default` | Contenido corporal extra, por ejemplo, una lista de lo que se eliminará. |

**Accesibilidad.** `role="alertdialog"`, nombrado por el título y descrito por la descripción.
confirmaciónes foco Confirmación; destructivos enfoque Cancelar así que Entra nunca destruye por accidente.

<a id="ontoast"></a>

### OnToast

Una sola tarjeta de notificación. `OnToastRegion`; utilizarlo directamente para previsualizaciones estáticas.

| Prop          | Tipo                                           | Default    | Descripción                                                           |
| ------------- | ---------------------------------------------- | ---------- | --------------------------------------------------------------------- |
| `tone`        | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'`   | Icono y color: info, cheque, triángulo, cruz.                         |
| `title`       | `string`                                       | necesarios | Una línea, por ejemplo: "Actualizado Prismark".                       |
| `description` | `string`                                       | —          | Línea de detalle.                                                     |
| `actionLabel` | `string`                                       | —          | Un pequeño botón de acción fantasma, por ejemplo "Ver".               |
| `time`        | `string`                                       | —          | Texto del tiempo en la esquina superior derecha, por ejemplo "Ahora". |

| Evento   | Carga de pago | Descripción                         |
| -------- | ------------- | ----------------------------------- |
| `action` | `[]`          | El botón de acción se hizo clic.    |
| `close`  | `[]`          | Se hizo clic en el botón de cierre. |

**Accesibilidad.** `danger` tostadas tienen `role="alert"` (anunciado inmediatamente); otros confían en la cortesía de la región
región en vivo. El botón de cierre se llama "Notificación de cancelación".

<a id="ontoastregion-and-createtoastqueue"></a>

### OnToastRegion y crearToastQueue

La pila fija de notificaciones de abajo derecha, con el tiempo manejado para usted.

| Prop    | Tipo                     | Default    | Descripción                                                           |
| ------- | ------------------------ | ---------- | --------------------------------------------------------------------- |
| `items` | `readonly OnToastItem[]` | necesarios | `{ id, tone?, title, description?, actionLabel?, time?, duration? }`. |
| `max`   | `number`                 | `3`        | Tostadas visibles; las mayores se esconden primero.                   |

| Evento    | Carga de pago  | Descripción                                                                                                                     |
| --------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `dismiss` | `[id: string]` | Quitar el artículo: emitido después de su `duration` (por defecto 4000 ms; `0` lo mantiene), en Close, y después de una acción. |
| `action`  | `[id: string]` | El botón de acción del elemento fue pulsado (siguido por `dismiss`).                                                            |

Las horas pausan mientras el puntero o el foco está dentro de la región y reanudar con el tiempo restante.

```ts
const toasts = createToastQueue(); // one per app (or per request in SSR), never a shared module singleton
toasts.push({ tone: 'success', title: 'Copied' }); // returns the id
toasts.push({ id: 'sync', title: 'Syncing…', duration: 0 }); // same id replaces, e.g. progress updates
```

```vue
<OnToastRegion :items="toasts.items.value" @dismiss="toasts.dismiss" @action="openDetails" />
```

`createToastQueue()` retornos `{ items, push, dismiss, clear }` (`items` es un refresco de sólo lectura).

**Uso** para comentarios breves y no bloqueantes sobre algo que sucedió. Nunca para información el usuario debe actuar en
(utiliza un diálogo o un mensaje en línea).

**Accesibilidad.** A `<section aria-label="Notifications">` con una `aria-live="polite"` lista; fracasos anuncian
inmediatamente a través de sus propios `role="alert"`.

<a id="oncommandpalette"></a>

### OnCommandPalette

Una paleta de comandos impulsada por la búsqueda (justK): resultados agrupados con selección de teclado.

| Prop          | Tipo                        | Default    | Descripción                                                                                                  |
| ------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| `open`        | `boolean`                   | necesarios | Uso `v-model:open`.                                                                                          |
| `query`       | `string`                    | necesarios | Uso `v-model:query`; el host filtra.                                                                         |
| `groups`      | `readonly OnCommandGroup[]` | necesarios | `{ key, label, items: OnCommandItem[] }`; grupos vacíos están ocultos.                                       |
| `placeholder` | `string`                    | —          | Input placeholder and name; defaults to "Search or run a command".                                           |
| `loading`     | `boolean`                   | —          | Sin resultados, muestra "Buscar..." en lugar del texto vacío.                                                |
| `emptyText`   | `string`                    | —          | Defaults to "No matching results".                                                                           |
| `hints`       | `readonly string[]`         | —          | Insinuaciones de pie; predeterminados a "↑↓ Select" y "↵ Open". Añada su propio para el meta y copie atajos. |

`OnCommandItem`: `{ key, label, description?, icon?, image?, iconTone?, badge?, badgeTone?, hint? }` — `icon` es un
icono de 18 px (para acciones y navegación), `image` a 26 px URL de imagen (un icono de aplicación, un avatar) que se remonta al
icono si no se carga; `iconTone: 'accent'` colores el icono; `badge` es un `OnChip` (acentúo por defecto); `hint`
muestra una pista clave a la derecha.

| Evento         | Carga de pago                                       | Descripción                                                                                                                                  |
| -------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `update:open`  | `[open: boolean]`                                   | `false` en Escape o un clic fuera.                                                                                                           |
| `update:query` | `[query: string]`                                   | Cada entrada.                                                                                                                                |
| `select`       | `[item: OnCommandItem, options: { meta: boolean }]` | Introduzca o haga clic en el elemento activo; `meta` con el Comando/Ctrl (una acción secundaria, por ejemplo, abierta en una nueva ventana). |
| `copy`         | `[item: OnCommandItem]`                             | Comando/Ctrl-C mientras no se selecciona texto de entrada; el anfitrión decide qué copiar (un enlace, un ID).                                |

El artículo activo se reinicia al primer resultado cuando los resultados cambian o la paleta se abre.

**Accesibilidad.** Un cuadro de diálogo colocado en la parte superior llamado "Paleta de comandos". `combobox` (`aria-autocomplete="list"`,
`aria-controls`, `aria-activedescendant`sobre una `listbox` of of `role="group"` secciones con `option`s y
`aria-selected`. ArrowUp/ArrowDown move through all groups (wrapping, desplazando el artículo a la vista), Enter selects,
Escapar cierra; las teclas son ignoradas mientras que un método de entrada está componiendo. Insinuaciones del pie se ocultan de los lectores de pantalla.

---

<a id="layout-and-navigation"></a>

## Diseño y navegación

<a id="onappshell"></a>

### OnAppShell

El marco de la página: barra lateral, barra de herramientas, columna principal y barandilla derecha opcional.

| Prop         | Tipo                        | Default       | Descripción                                                                                                                                                                                                                                                                                                               |
| ------------ | --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasRail`    | `boolean`                   | `false`       | La página tiene un carril derecho.                                                                                                                                                                                                                                                                                        |
| `railDocked` | `boolean`                   | `true`        | Modo de contenedores: el carril se queda junto a la columna principal (dedicado desde el ancho de la ventana, por ejemplo ≥ 1240 px).                                                                                                                                                                                     |
| `railOpen`   | `boolean`                   | `false`       | Modo de contenedores, deshacerse: mostrar el carril como una superposición.                                                                                                                                                                                                                                               |
| `scroll`     | `'container' \| 'document'` | `'container'` | `container` (opción de escritorio): altura de la ventana fija, los desplazamientos de la columna principal por su cuenta. `document` (web): los pergaminos de la página; barra lateral y barra de herramientas son pegajosos de `md`, las barras de ferrocarril en `xl` y se mueve por debajo del contenido antes de eso. |

| Ranura       | Descripción                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sidebar`    | Normalmente. `OnSidebar` (224 px column).                                                                                                            |
| `toolbar`    | Normalmente. `OnToolbar`.                                                                                                                            |
| `compactBar` | Modo de documento a continuación `md`: reemplaza la barra lateral y la barra de herramientas (por ejemplo, una barra superior compacta con un menú). |
| `default`    | El contenido principal.                                                                                                                              |
| `rail`       | Normalmente. `OnRailPanel` (288 px).                                                                                                                 |
| `footer`     | Modo de documento: después del contenido y el ferrocarril.                                                                                           |
| `overlay`    | Superpuestos que pertenecen a la cáscara (región más cercana, paleta).                                                                               |

Expuesto: `scrollToTop()` — desplaza la columna principal (modo de contenedores) o la ventana (modo de documentos), por ejemplo después
navegación.

**Accesibilidad.** El contenido es un `<main>` señalización; dar la navegación lateral a `label` (ver) `OnSidebar`).
Mantén una concha por página.

<a id="onsidebar"></a>

### OnSidebar

Marca, una tarjeta opcional superior, navegación agrupada y enlaces de pie.

| Prop          | Tipo                        | Default    | Descripción                                                                                              |
| ------------- | --------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| `groups`      | `readonly OnSidebarGroup[]` | necesarios | `{ key, label, items: OnSidebarItem[] }`.                                                                |
| `footerItems` | `readonly OnSidebarItem[]`  | `[]`       | Los elementos clavados en el fondo (Configuración, Sobre).                                               |
| `label`       | `string`                    | necesarios | Nombre accesible de la navegación.                                                                       |
| `topLabel`    | `string`                    | —          | La ceja por encima de `top` ranura.                                                                      |
| `brandName`   | `string`                    | —          | Marca de texto simple cuando `brand` La tragaperras está vacía.                                          |
| `dragRegion`  | `boolean`                   | `false`    | Ventanas de escritorio: un área arrastrable de 52 px para el macOS semáforos (`data-tauri-drag-region`). |
| `linkAs`      | `string \| Component`       | `'a'`      | Componente de enlace para los elementos.                                                                 |

`OnSidebarItem`: `{ key, label, href, icon?, active?, count?, meta?, badge?, dot?, badgeLabel? }` - ...pasado
`OnNavItem`.

| Ranura   | Descripción                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand`  | La marca y el nombre de la aplicación (logo plus wordmark); el sistema de diseño no envía ningún logotipo. `brandName` la fila de la marca se deja fuera. |
| `top`    | Una tarjeta bajo la marca, por ejemplo "Obtenga la aplicación de escritorio".                                                                             |
| `footer` | Contenido extra después de los artículos de pie.                                                                                                          |

**Accesibilidad.** An `<aside>` con una `<nav aria-label>`; las etiquetas de grupo son los encabezados visuales por encima de sus artículos;
ítem actual `aria-current="page"`. Si la ranura de la marca es sólo una imagen, darle una `alt` texto o nombre visible.

<a id="onnavitem"></a>

### OnNavItem

Una fila de navegación: icono, etiqueta y un conteo, placa, punto o meta texto a la derecha.

| Prop         | Tipo                  | Default | Descripción                                                                                      |
| ------------ | --------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `icon`       | `string`              | —       | Icono a 17 px.                                                                                   |
| `active`     | `boolean`             | —       | La página actual: resaltado, `aria-current="page"`.                                              |
| `count`      | `number`              | —       | Mutado cuenta con la derecha.                                                                    |
| `meta`       | `string`              | —       | Texto mudo a la derecha cuando no hay cuenta, por ejemplo "34 GB".                               |
| `badge`      | `number`              | —       | Insignia de la cuenta de coral (sólo cuando > 0); toma prioridad sobre `dot`, `count` y `meta`.  |
| `dot`        | `boolean`             | —       | Un punto de atención sin número; toma prioridad `count` y `meta`.                                |
| `badgeLabel` | `string`              | —       | Texto accesible de la placa o punto, por ejemplo "4 actualizaciones".                            |
| `as`         | `string \| Component` | `'a'`   | Elemento o componente de enlace; un componente simple `a` sin `href` se convierte en `<button>`. |
| `href`       | `string`              | —       | Enlace URL (native `a`).                                                                         |
| `to`         | `string`              | —       | Destino del router cuando `as` es un enlace de router.                                           |

| Ranura    | Descripción              |
| --------- | ------------------------ |
| `default` | La etiqueta (truncados). |

**Accesibilidad.** La placa es nombrada por `badgeLabel`; un punto con `badgeLabel` es `role="img"`, sin ella es
Preferir dar cada placa y hacer una etiqueta.

<a id="ontoolbar"></a>

### OnToolbar

La barra por encima de la columna principal: iniciar la ranura, un espacior arrastrable, un botón de búsqueda y una ranura final.

| Prop             | Tipo      | Default    | Descripción                                                                                                       |
| ---------------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `searchLabel`    | `string`  | necesarios | Texto y nombre accesible del botón de búsqueda, por ejemplo "Buscar aplicaciones" o "Buscar archivos".            |
| `searchShortcut` | `string`  | —          | Una pista clave en el botón, por ejemplo. `⌘K`; también juegos `aria-keyshortcuts="Meta+K"`.                      |
| `dragRegion`     | `boolean` | `false`    | Ventanas de escritorio: la barra y el espaciador son las regiones de arrastre; sus botones se mantienen pulsados. |

| Evento   | Carga de pago | Descripción                                                    |
| -------- | ------------- | -------------------------------------------------------------- |
| `search` | `[]`          | El botón de búsqueda se hizo clic; abra su paleta de comandos. |

| Ranura  | Descripción                                                        |
| ------- | ------------------------------------------------------------------ |
| `start` | Controles de dirección, por ejemplo botones de retroceso/avanzado. |
| `end`   | Controles de rastreo, por ejemplo notificaciones, lenguaje.        |

<a id="ontopnav"></a>

### OnTopNav

El encabezado del sitio web: enlace con la marca de la aplicación, enlaces centrados, búsqueda, una llamada opcional a la acción y un móvil
menú.

| Prop             | Tipo                      | Default    | Descripción                                                                                                                                   |
| ---------------- | ------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`          | `readonly OnTopNavItem[]` | necesarios | `{ label, href, active? }`.                                                                                                                   |
| `homeHref`       | `string`                  | `'/'`      | Objetivo del enlace de casa.                                                                                                                  |
| `brandName`      | `string`                  | —          | Marca de texto simple en el enlace de casa cuando el `brand` la ranura está vacía; también nombres el enlace ("{brandName} casa", traducido). |
| `homeLabel`      | `string`                  | —          | Nombre accesible del enlace de casa, que anula el de `brandName`.                                                                             |
| `downloadHref`   | `string`                  | —          | Botón de llamada a acción a la derecha (por ejemplo, una página de descarga); oculto sin ella.                                                |
| `downloadLabel`  | `string`                  | —          | Su texto; predeterminado a "Descargar".                                                                                                       |
| `searchable`     | `boolean`                 | `true`     | Mostrar el campo de búsqueda y el botón.                                                                                                      |
| `searchLabel`    | `string`                  | —          | Buscar texto y nombre; predeterminados a "Buscar".                                                                                            |
| `searchShortcut` | `string`                  | —          | Insinuación clave en el campo de búsqueda, por ejemplo. `⌘K`.                                                                                 |
| `label`          | `string`                  | —          | Nombre accesible de la navegación; predeterminado a "Main".                                                                                   |
| `linkAs`         | `string \| Component`     | `'a'`      | Componente de enlace.                                                                                                                         |

| Evento   | Carga de pago | Descripción                                                            |
| -------- | ------------- | ---------------------------------------------------------------------- |
| `search` | `[]`          | El campo de búsqueda o icono se hizo clic; abra su paleta de comandos. |

| Ranura  | Descripción                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `brand` | La marca de la aplicación dentro del enlace de inicio (logo más wordmark). El sistema de diseño no envía ningún logotipo. |
| `extra` | Entre la búsqueda y la llamada a la acción, por ejemplo, un menú de idiomas.                                              |

Comportamiento: los enlaces muestran desde 1024 px; abajo, un botón de menú abre un panel con los enlaces (y la llamada a la acción bajo
640 px). La búsqueda es un campo completo a 768-1023 px y a partir de 1280 px, un botón de icono de otra manera.
fondo se convierte en translúcido con un borrón.

**Accesibilidad.** Una pegajosa `<header>` con `<nav>` hitos nombrados por `label`. Enlaces activos
`aria-current="page"`. Nombre del enlace de casa: pase `brandName` (también satisfice "label en nombre" cuando la palabra marca
muestra el mismo nombre) o `homeLabel`; con ninguno, `brand` la ranura debe llevar el nombre mismo (por ejemplo, una `img alt`).
El botón del menú tiene `aria-expanded`/`aria-controls` y un nombre de "Abre menú"/"Cerrar menú"; Escapar cierra el panel
y vuelve a centrarse en el botón. `aria-haspopup="dialog"`.

<a id="onrailpanel"></a>

### OnRailPanel

El bastidor de la mano derecha (288 px) para resúmenes y contenido secundario.

| Prop         | Tipo      | Default | Descripción                                                                                                                                                                                            |
| ------------ | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `responsive` | `boolean` | `false` | Web: abajo `xl` el carril se sienta bajo el contenido principal con una frontera superior y pergaminos con la página; desde `xl` es una columna con una frontera izquierda y su propio desplazamiento. |

| Ranura    | Descripción                             |
| --------- | --------------------------------------- |
| `default` | Por lo general varios `OnRailSection`s. |

**Accesibilidad.** An `<aside>` hito; es contenido complementario, por lo que la página debe tener sentido sin ella.

<a id="onrailsection"></a>

### OnRailSection

Una sección titulada dentro del carril.

| Prop       | Tipo     | Default    | Descripción                       |
| ---------- | -------- | ---------- | --------------------------------- |
| `title`    | `string` | necesarios | El `<h2>`.                        |
| `subtitle` | `string` | —          | Línea de mutación bajo el título. |

| Ranura    | Descripción                                               |
| --------- | --------------------------------------------------------- |
| `default` | Contenido de la sección (tajas de estado, listas cortas). |

---

<a id="showcase"></a>

## Showcase

<a id="onfeaturehero"></a>

### OnFeatureHero

Una tarjeta de características grande con un escenario brillante, anillado y elementos decorativos flotantes.

| Prop           | Tipo                  | Default    | Descripción                                                                                                                              |
| -------------- | --------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `title`        | `string`              | necesarios | La partida.                                                                                                                              |
| `subtitle`     | `string`              | —          | Una segunda línea en salmón, dentro de la partida.                                                                                       |
| `badge`        | `string`              | —          | Pequeño texto resaltado sobre el título, por ejemplo, "Funcionado esta semana".                                                          |
| `description`  | `string`              | —          | Cuerpo con `**…**` (en inglés)`OnHighlightText`).                                                                                        |
| `floats`       | `readonly T[]`        | `[]`       | Hasta tres elementos decorativos colocados en el escenario, cada uno dibujado por el `float` ranura.                                     |
| `glowColor`    | `string \| null`      | —          | Tinte hex de seis dígitos del resplandor (suavizado en modo de luz); el resplandor de token de otra manera.                              |
| `actionLabel`  | `string`              | —          | Texto del botón primario; predeterminados a "Empiezar".                                                                                  |
| `actionIcon`   | `string`              | —          | icono de lucido opcional antes del texto de botón primario, por ejemplo. `download`.                                                     |
| `detailHref`   | `string`              | —          | Añade un botón de enlace "Ver detalles".                                                                                                 |
| `detailLabel`  | `string`              | —          | Su texto.                                                                                                                                |
| `linkAs`       | `string \| Component` | `'a'`      | Componente de enlace para el enlace de detalle.                                                                                          |
| `responsive`   | `boolean`             | —          | Web: 360 px de 1024 px (276 px de lo contrario), escalonado.                                                                             |
| `compact`      | `boolean`             | —          | Tarjeta más pequeña para las rejillas; el escenario muestra sólo cuando la tarjeta es al menos 460 px de ancho (quería de contenedores). |
| `headingLevel` | `2 \| 3`              | `2`        | Elemento de encabezado.                                                                                                                  |

| Evento   | Carga de pago | Descripción                      |
| -------- | ------------- | -------------------------------- |
| `action` | `[]`          | El botón principal se hizo clic. |

| Ranura             | Firma                                                                 | Descripción                                                                                                                                    |
| ------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `float`            | `(props: { item: T; index: number; size: OnAppIconSize }) => unknown` | Un elemento flotante, típicamente `<OnAppIcon :size="size" :priority="index === 0" …>`. Las medidas son 118 / 54 / 46 (compacto 64 / 40 / 32). |
| `badge-decoration` | `() => unknown`                                                       | Una marca pequeña después del texto de la placa (unos 13 px, `currentColor`).                                                                  |
| `actions`          | `() => unknown`                                                       | Reemplaza el botón primario y el enlace de detalle.                                                                                            |

```vue
<OnFeatureHero title="Orbitfold 4" subtitle="Plans that keep up with you." :floats="apps" detail-href="/apps/orbitfold">
  <template #float="{ item, size, index }">
    <OnAppIcon :name="item.name" :src="item.icon" :size="size" :priority="index === 0" />
  </template>
</OnFeatureHero>
```

**Uso** una vez por página para el punto culminante principal. Los elementos flotantes se ocultan debajo de 768 px, donde cubrirían el texto.

**Accesibilidad.** Todo el escenario (glow, anillos, flotadores) es `aria-hidden`; poner cualquier información que lleven en el
El subtítulo es parte de la partida. El resplandor respira lentamente y se detiene con movimiento reducido.

<a id="onappicon"></a>

### OnAppIcon

Una ficha de aplicación: la imagen de la aplicación, o una ficha de letra generada; `variant="terminal"` dibuja una baldosa de línea de comando.

| Prop         | Tipo                                                                          | Default    | Descripción                                                                                                                                        |
| ------------ | ----------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | `string`                                                                      | necesarios | Nombre de la muestra; la ficha de la letra muestra sus iniciales (primer personaje de CJK, o las primeras letras de hasta dos palabras).           |
| `variant`    | `'app' \| 'terminal'`                                                         | `'app'`    | Fallback cuando no hay imagen: azulejos de letras o azulejos terminales (marcos en ambos temas, abreviatura monoespacial, barra de colores).       |
| `seed`       | `string`                                                                      | —          | Identificador estable hashed (FNV-1a) para elegir el color de la baldosa y, para los azulejos terminales, la abreviatura; predeterminado a `name`. |
| `initials`   | `string`                                                                      | —          | Texto del azulejo en lugar del derivado, por ejemplo, una forma corta convencional de un comando.                                                  |
| `src`        | `string \| null`                                                              | —          | URL de la imagen; en el fallo de carga (también uno que falló antes de la hidratación) el azulejo muestra en su lugar.                             |
| `renditions` | `readonly OnImageRendition[] \| null`                                         | —          | `{ width, url }` entregas de `src` para `srcset`; el navegador elige uno para el tamaño renderizado.                                               |
| `size`       | `20 \| 24 \| 26 \| 28 \| 30 \| 32 \| 40 \| 44 \| 46 \| 54 \| 64 \| 96 \| 118` | `44`       | A la izquierda.                                                                                                                                    |
| `accent`     | `string \| null`                                                              | —          | acento hex de seis dígitos para el tilo de letra; de lo contrario un color de paleta de la semilla.                                                |
| `label`      | `string`                                                                      | —          | Hace del icono una imagen con este nombre; de lo contrario es decorativo.                                                                          |
| `priority`   | `boolean`                                                                     | —          | Carga de Eager y alta prioridad para el primer icono visible (héroe, cabecera de detalles).                                                        |

Las imágenes se muestran como entregadas (`object-contain`, sin máscara, carga perezosa); azulejos obtienen el radio de aplicación-icon y sombra.
Ayudantes: `iconColor(seed, accent)`, `darken(hex)`, `iconInitials(name)`, `cliAbbreviation(command)`, `ICON_PALETTE`.

**Accesibilidad.** Decorativa (decorativa)`aria-hidden`A menos que `label` se establece; al lado de una licencia de nombre visible `label` Fuera.
