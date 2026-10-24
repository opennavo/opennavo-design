[English](../../../patterns.md) · [简体中文](../../zh-CN/docs/patterns.md) · [繁體中文](../../zh-Hant/docs/patterns.md) · [日本語](../../ja-JP/docs/patterns.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/patterns.md) · [Русский](../../ru-RU/docs/patterns.md) · [Deutsch](../../de-DE/docs/patterns.md) · [Français](../../fr-FR/docs/patterns.md) · [Italiano](../../it-IT/docs/patterns.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="patterns"></a>

# Patrones

Cómo se combinan los componentes en las pantallas. Cada patrón denomina los componentes que utiliza; sus detalles están en
[Componentes](components.md).

<a id="navigation"></a>

## Navegación

- **Sidebar** (`OnSidebar`, `OnNavItem`): la marca de marca, luego grupos con un `text-label` título (Browse, Lists, Tools,
  Mina ...), entonces los ajustes clavados en la parte inferior. `component.navActive` y `aria-current="page"`.
  Los condes se sientan bien alineados `text-ink-tertiary`; un recuento que necesita atención se convierte en una placa de coral; un punto marca
  "Algo nuevo" sin un número.
- **Barra de herramientas** (`OnToolbar`): atrás/para adelante y recargar a la izquierda en aplicaciones de escritorio (el navegador las proporciona en el
  web), el gatillo de búsqueda con su `⌘K` insinuar a la derecha, luego los interruptores globales (tema, lenguaje en la web).
- **Paleta de mando** (`OnCommandPalette`, `⌘K` / `Ctrl K`): acciones y destinos primero, con
  "Ver todos los resultados para "q" como la primera fila (Enter abre la página de resultados completos); los elementos a continuación.
  abre, Escape cierra y vuelve a centrarse.
- **Pestañas** (`OnTabs`) cambiar las vistas de un objeto (sorpresa de una aplicación, versiones, dependencias, detalles) y son enlaces
  cuando cada vista tiene su propia URL. **Controles segmentados** (`OnSegmented`) los modos de filtro o conmutación dentro de una vista (período,
  "Todo / Éxito / Failed").
- **Breadcrumbs** (`OnBreadcrumb`) aparecen en las páginas de detalle alcanzadas de una lista.
- Cada vista tiene una URL (incluidos las rutas de escritorio) tan profundos enlaces, hacia atrás/avanzado y restaurar el trabajo.

<a id="page-anatomy"></a>

## Anatomía de página

1. Cabecera de página (`OnPageHeader`): `text-title1` título, una línea de texto secundario con el hecho clave (cuentas, última
   check), las acciones de la página alineadas con derecho (primario último).
2. banner opcional para estado degradado (offline, fracaso parcial) directamente bajo el encabezado.
3. Secciones (`OnSectionHeader`): `text-headline` título, un subtítulo terciario corto, "Ver todo →" a la derecha.
4. El tren (el tren)`OnRailPanel`, `OnRailSection`) lleva resúmenes y acciones secundarias; nada en el carril es requerido
   para terminar una tarea en la columna principal.

<a id="lists-cards-and-tables"></a>

## Listas, tarjetas y tablas

- **Tarjetas** para la navegación (icon, nombre, sumario de una línea, dos o tres estadísticas, una acción). La tarjeta entera es el enlace;
  el botón de acción dentro detiene la propagación.
- **Filas** para listas densas que actúas en (actualizaciones, historia, aplicaciones instaladas): icono, nombre y meta en la izquierda, fichas estatales
  en el medio, acciones correctas; acciones destructivas viven en el menú de la fila ⋯.
- **Cuadros** (`OnTable`) cuando las columnas se comparan o ordenan; columnas numéricas alineadas con `tabular-nums`;
  casillas de selección en la primera columna; una cabecera pegajosa en tablas largas.
- Listas largas de Paginato (`OnPagination`) en lugar de desplazamiento infinito, por lo que la posición es un enlace y estable.
- **Refining mantiene contenido:** mientras que una consulta, tipo, filtro o cambio de página, siga mostrando los resultados anteriores (se han reducido)
  si es necesario) hasta que lleguen los nuevos; espacio de reserva para las líneas contables opcionales para que nada cambie.

<a id="search"></a>

## Búsqueda

- El gatillo de la barra de herramientas abre la paleta; una página de búsqueda muestra resultados completos con filtros como controles segmentados o
  chips.
- Los resultados se actualizan como los tipos de usuario sin aclarar entre sí; "No hay resultados para "q" viene con una pista de hormigón
  (Otra ortografía, el nombre inglés, una fuente diferente).

<a id="settings-and-forms"></a>

## Ajustes y formas

- Los ajustes se agrupan en tarjetas de filas (`SettingRow` patrón): etiqueta y una pista opcional de una línea a la izquierda, el
  control sobre la derecha, filas separadas por `border.subtle`.
- **Los cambios se aplican inmediatamente** — toggles, controles segmentados, menús. No hay botón Guardar en la configuración; un cambio
  Eso falla y dice por qué en un brindis.
- Elija el control por el número de opciones: un toggle para el encendido / apagado, un control segmentado para dos a cuatro exclusivas
  opciones, un menú para listas más largas (idioma) con la opción actual verificada.
- Entradas de texto validan sobre el borrón o el envío, nunca en cada pulsación; los errores aparecen bajo el campo en
  `text-status-danger` con la solución ("Use una dirección https:// completa"), y el campo mantiene su valor.
- Los formularios en la web son una columna con etiquetas por encima de los campos; el botón de envío está deshabilitado hasta que los campos requeridos sean
  válido, con una pista que dice lo que falta.

<a id="feedback"></a>

## Reacción

| Situación                                           | Uso                                                                                                   |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Una acción terminada (copiada, agregada, instalada) | Toast, success or neutral, dismisses after 4 s, pauses on hover                                       |
| Una acción falló                                    | Tostar con la razón y, cuando sea posible, una acción (Retry, View log)                               |
| Se degrada una opinión (offline, datos parciales)   | Banner bajo el encabezado que dice lo que aún funciona                                                |
| Se requiere una decisión                            | Dialog (Diálogo)`OnConfirm`, `OnModal`)                                                               |
| Una larga tarea está en marcha                      | Avance en su lugar (arriba, tarjeta o panel de tareas) y en la barra de menús si continúa en el fondo |
| Algo pasó mientras la ventana estaba cerrada.       | Una notificación del sistema, sólo si el usuario los habilita                                         |

En la mayoría de tres brindis son visibles; los fallos se anuncian inmediatamente a los lectores de pantalla (`role="alert"`), otros
educadamente.

<a id="destructive-and-system-changing-actions"></a>

## Medidas destructivas y de cambio de sistema

1. Diga lo que sucederá, con la lista de lo que será eliminado o cambiado y su tamaño.
2. Default to the reversible option: move to Trash, disable a login item rather than delete it, keep a rollback.
3. El botón confirma la acción ("Desinstalar", "Move 14 items to Trash") y utiliza la variante de peligro; Cancelar es
   el foco predeterminado.
4. Después de la acción: el resultado en su lugar a la vez, un brindis con Undo cuando el deshacer es posible, y una entrada en el
   historia.
5. Las acciones que necesitan derechos de administrador lo dicen antes de comenzar; la contraseña indica lo que es para.

<a id="loading-progress-and-results"></a>

## Carga, progreso y resultados

- Primera carga de una vista: esqueletos (`OnSkeleton`) formada como el contenido, sin espinas en páginas enteras.
- Refrescos, refinación, recargas de fondo: mantener el contenido actual; un pequeño indicio de progreso a la mayoría.
- Las tareas largas muestran un progreso determinado tan pronto como existe un número (bytes, ítems), con el paso actual en palabras,
  y se puede cancelar cuando la cancelación es segura. Los registros están disponibles pero se desplomaron.
- **Los resultados se resuelven a la vez:** cuando una tarea termina, cada lugar que muestra el objeto (hace, página de detalle, barra lateral
  contar, menú bar) actualizaciones inmediatamente desde el propio resultado de la tarea, no después de la próxima actualización periódica.

<a id="empty-error-and-offline-states"></a>

## Empty, error y estados fuera de línea

- **Vacío** (`OnEmpty`): un icono, un título corto ("Su lista está vacía"), una frase que dice cómo llenarlo, y
  la acción cuando hay una.
- **Error** (`OnErrorState`): lo que falló en palabras simples, Retry, y sin huellas de pila; un refresco fallido de una vista que
  tenía contenido muestra un banner en su lugar y mantiene el contenido.
- **Sin conexión** (`OnOffline`): el contenido de caché se mantiene usable; características que necesitan la red decir así donde lo harían
  Aparece.

<a id="permissions"></a>

## Permisos

- Preguntar en el momento de la necesidad, con una frase de por qué y lo que permanece privado.
- "Permite" abre el panel de Ajustes del Sistema exacto; una guía flotante pequeña muestra qué arrastrar o cambiar, sin tomar
  enfoque desde Configuración del Sistema.
- Cuando el usuario regresa, la vista vuelve a comprobar y continúa por sí mismo; si macOS requiere un relanzamiento, la vista lo dice
  y lo ofrece.
- Nunca nag: un permiso rechazado deja una fila tranquila con diálogos Activados, no repetidos.

<a id="menu-bar-items-and-popovers-macos"></a>

## Menú bar artículos y popovers (macOS)

- Los elementos de barra de menú son imágenes de plantilla dibujadas como elementos del sistema; texto y gráficos siguen el estilo de barra de menú del sistema.
- Hacer clic en un artículo abre su popover debajo de él; hacer clic de nuevo o en cualquier otro lugar lo cierra.
  ventana principal o robar el foco de la aplicación en la que está el usuario.
- Las bolsas son tarjetas compactas (`surface.card`, `rounded-panel`) con las más útiles de tres a cinco filas, una primaria
  acción y un enlace que abre la vista completa en la ventana principal.

<a id="onboarding"></a>

## A bordo

Una sola pantalla de lista de verificación: cada requisito es una fila con un icono de estado, lo que es y una acción de fijación; la primaria
"Empieza" botón permite cuando las filas requeridas pasan, con una frase que dice lo que todavía falta. Opcional
los pasos son saltables y alcanzables más adelante en Ajustes.

<a id="website-specifics"></a>

## Datos específicos del sitio web

- El sitio nunca pide una cuenta. Las opciones de per-visitor (tema, consentimiento, sugerencia de idioma, listas guardadas) viven en
  el navegador.
- "Abrir en la aplicación" enlaces piden a la aplicación de escritorio que muestre lo que haría; la aplicación siempre pide confirmación antes
  ejecutar cualquier página web solicitada.
- Una sugerencia de lenguaje aparece una vez, desmisible, y nunca se redirige por su cuenta.
