[English](../../../color.md) · [简体中文](../../zh-CN/docs/color.md) · [繁體中文](../../zh-Hant/docs/color.md) · [日本語](../../ja-JP/docs/color.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/color.md) · [Русский](../../ru-RU/docs/color.md) · [Deutsch](../../de-DE/docs/color.md) · [Français](../../fr-FR/docs/color.md) · [Italiano](../../it-IT/docs/color.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="color"></a>

# Color

Todo color viene de tokens. Cada token de color tiene un valor oscuro (el predeterminado) y, donde difiere, un valor de luz;
el [referencia a la lista](reference/tokens.md) lista cada uno. Esta página explica los roles, que es lo que necesitas
Elija el token derecho. [Theming](theming.md).

<a id="how-the-two-themes-differ"></a>

## Cómo difieren los dos temas

- **Oscuro** los pasos de la superficie en la ligereza: página `#0B0B0B` → base `#131313` → tarjeta `#1A1A1A` → criados `#262626`.
  La Elevación se lee como "más ligera".
- **Claro** mantiene el mismo orden pero no puede ser más blanco que blanco: página `#F2F2F2` → base `#F8F8F8` → tarjeta `#FFFFFF`.
  Los paneles elevados son blancos con una frontera y una sombra suave; se llenan dentro de las tarjetas blancas (`cardAlt`, `raised`, `chip`)
  son grises, así que leen como recesos.
- Las fronteras son blancas translúcidas en modo oscuro y negro translúcido en modo de luz, con una fuerza similar.
- Los colores de marca y estado son más profundos en modo de luz, por lo que el texto mantiene 4.5:1 en blanco.

Nunca elija un color a ojo de una captura de un tema. Elija el papel; el token lleva ambos valores.

<a id="surfaces"></a>

## Superficies

| Token de diseño   | Función                             | Uso para                                                                                                               | No se usa para                                            |
| ----------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `surface.page`    | Contexto más amplio                 | Cuerpo del sitio web, barra de navegación superior, área detrás de ventanas flotantes                                  | Áreas de contenido dentro del concha de aplicación        |
| `surface.base`    | Antecedentes de contenido principal | La columna de contenido de la aplicación, fondo de la ventana                                                          | Tarjetas                                                  |
| `surface.sidebar` | Sidebar                             | La columna de navegación izquierda                                                                                     | Cualquier otra cosa.                                      |
| `surface.rail`    | Carril derecho                      | El carril de estadísticas opcionales en ventanas amplias                                                               | —                                                         |
| `surface.card`    | Tarjetas y paneles                  | Tarjetas, lista de contenedores, grupos de configuración, menú bar popovers                                            | Paneles flotantes sobre contenido (utilización `popover`) |
| `surface.cardAlt` | Dentro de una tarjeta               | Entradas, bloques secundarios, renglón de mesa, cajas de aviso dentro de una tarjeta                                   | Antecedentes a nivel de página                            |
| `surface.raised`  | Hover y pequeños rellenos           | Hover fondos, página actual en paginación, fichas de iconos, `⌘K` indicios                                             | Paneles flotantes; segmentos seleccionados                |
| `surface.chip`    | Insignias neutrales                 | chips neutros, pistas de teclado, pequeñas etiquetas                                                                   | Botones (utilización `button.secondary*`)                 |
| `surface.control` | Controles                           | Entradas de texto y selecciones en la configuración, puntas de herramientas                                            | Grandes áreas                                             |
| `surface.inset`   | Wells                               | bloques de código, registros, pistas de control segmentadas, pistas de progreso                                        | Botones                                                   |
| `surface.overlay` | Superposición traslúcida            | Menús y la paleta de comandos, con un desenfoque de 20 px                                                              | Paneles opacos                                            |
| `surface.popover` | Panel flotante                      | Tarjetas de consentimiento y sugerencias, popovers demo - cualquier cosa flotando sobre contenido con `shadow.popover` | Contenido en línea                                        |

Superficies específicas para componentes viven en `component.*`: `modalBg` (diálogos y hojas), `searchBg` (campos de investigación y forma
entradas en las páginas), `navActive` (título de la barra lateral seleccionada) `segmentActive` (sección seleccionada) `heroBg` (héroe de la naturaleza)
`detailHeaderBg`, `toastBg`, `scrim` (detrás de los diálogos), `lightboxScrim` (imagen espectador, oscuro en ambos temas, por lo que el
El espectador hace en el tema oscuro: [Theming › Subtrees](theming.md#subtrees)), `menuBarBg` / `menuBarText` (en-app)
vista previa de la macOS barra de menú).

<a id="text"></a>

## Texto

| Token de diseño  | Uso                                                           | Oscuro               | Claro                |
| ---------------- | ------------------------------------------------------------- | -------------------- | -------------------- |
| `text.primary`   | Encabezamientos, cuerpo enfatizado, números                   | 14.9:1 en la tarjeta | 17.4:1 en la tarjeta |
| `text.secondary` | Texto corporal, descripciones                                 | 7.3:1                | 7.2:1                |
| `text.tertiary`  | Etiquetas, metadatos, timestamps, hints                       | 5.4:1                | 5.3:1                |
| `text.disabled`  | Discapacitados y puramente decorativos                        | —                    | —                    |
| `text.accent`    | Texto del coral: enlaces, fichas de coral, acciones en línea  | 6.5:1                | 5.7:1                |
| `text.inverse`   | Texto e iconos sobre rellenos fuertes (Estado, coral, salmón) | oscuro.              | blanco               |
| `text.onAccent`  | Texto sobre botones de coral y placas de coral                | 7.2:1 sobre coral    | 5.5:1 sobre coral    |

Reglas:

- Use en la mayoría de tres niveles de texto en un componente. Tertiary es el suelo para cualquier cosa que un usuario debe leer.
- `text.disabled` nunca lleva información: un control de discapacitados debe todavía decir por qué está deshabilitado cerca.
- **`brand.coral` es un relleno, no un color de texto.** En blanco es 3.5:1. `text.accent`.
- Nunca me he puesto `text.tertiary` on `surface.chip` o `surface.raised` para texto largo; uso `text.secondary` Ahí.

<a id="borders"></a>

## Fronteras

`border.subtle` para los bordes de tarjetas y divisores, `border.default` para entradas, botones fantasma y ventanas,
`border.strong` para el buceador. `border.sidebar` separa la barra lateral. Los paneles de estado usan el emparejado
`status.*Border` con sus `status.*Subtle` Llena.

<a id="brand"></a>

## Marca

| Token de diseño                                | Uso                                                                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                  | El acento de marca como relleno o gráfico: el botón de acento, progreso, toggles que están en, anillo de enfoque, puntos pequeños. |
| `brand.salmon`                                 | Texto de énfasis caluroso: cejas de sección, la segunda línea de un héroe, placas "actualizadas disponibles".                      |
| `brand.violet`                                 | El resplandor del héroe. También mezclado en los fondos de iconos de lata en las páginas de marketing.                             |
| `brand.logoGradient`, `brand.logoCoreGradient` | La marca de logotipo sólo. El gradiente núcleo cambia a ámbar en fondos de luz.                                                    |

Tintes de accesión: `accent.coralSubtle` (reglas de progreso, fichas de coral) y `accent.salmonSubtle` Texto sobre
que usan `text.accent` y `brand.salmon`.

Usar corales espaciosamente: un botón de acento por vista, y nunca coral por errores (eso es `status.danger`).

<a id="status"></a>

## Situación

| Familia   | Significado                                                              | Uso típico                                                                             |
| --------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| `success` | Hecho, instalado, saludable, actual                                      | Etiquetas instaladas, "Todo es normal" banners, líneas de registro de éxito            |
| `warning` | Necesita atención, necesita permiso de administrador, resultado parcial  | Los elementos pasados, los avisos de administración, los chips "necesita confirmación" |
| `danger`  | Failed, deprecated, destructivo                                          | Estados fallidos, botones de peligro, amenazas encontradas                             |
| `info`    | Información neutral, aplicaciones de auto-actualización, enlaces en docs | Avisos de información, chips "auto-actualizaciones"                                    |

Cada familia tiene el color sólido (texto, iconos, puntos), `*Subtle` (10% de fondos de nivel) y `*Border` (grupo de mesa redonda
bordes). Color de par con un icono o una palabra — el estado nunca se comunica solo por color.

<a id="buttons"></a>

## Botones

| Variante       | Tokens de diseño                                                              | Uso                                                                                                          |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Primaria       | `button.primary*` - cerca de blanco en la oscuridad, cerca de negro en la luz | La acción principal de una opinión, una por región.                                                          |
| Secundaria     | `button.secondary*`                                                           | Otras acciones. La variante predeterminada.                                                                  |
| Accent         | `button.accent*` (coral, texto oscuro)                                        | Un momento de marca: la llamada del héroe a la acción, "Actualizar todo". Raramente más de uno por pantalla. |
| Fantasma       | transparente, `border.default`                                                | Acciones terciarias en barras de herramientas y filas densas.                                                |
| Peligro        | `status.dangerSubtle` + `status.danger`                                       | Acciones destructivas. Nunca el botón predeterminado de un diálogo.                                          |
| Discapacitados | `button.disabled*`                                                            | Controles activos de cualquier variante.                                                                     |

<a id="charts"></a>

## Gráficos

`chart.series1` (violeta) `chart.series2` (coral), `chart.series3` (verde) son los colores categóricos, elegidos para permanecer
distinguible para las deficiencias comunes de la visión de color; utilizarlas en esa serie de orden y etiqueta directamente cuando allí
son más de dos. Los gráficos de una serie usan `chart.emphasis` para el valor actual y `chart.deemphasis` para la historia.
`chart.grid` y `chart.axis` son líneas de pelo. Las vistas de monitoreo también pueden utilizar el estado y los colores de información para significado
(Advertencia de la temperatura, red baja/up).

<a id="contrast"></a>

## Contraste

Medido con el WCAG 2.2 fórmula; `packages/tokens/tests` falla la construcción si cualquier par cae por debajo de su objetivo.

| Pareja                        | Meta | Oscuro (base / tarjeta / levantado) | Luz (base / tarjeta / elevado) |
| ----------------------------- | ---- | ----------------------------------- | ------------------------------ |
| `text.primary`                | 4.5  | 15.9 / 14.9 / 12.9                  | 16.4 / 17.4 / 14.9             |
| `text.secondary`              | 4.5  | 7.8 / 7.3 / 6.4                     | 6.8 / 7.2 / 6.2                |
| `text.tertiary`               | 4.5  | 5.7 / 5.4 / 4.7                     | 5.0 / 5.3 / 4.6                |
| `text.accent`                 | 4.5  | 6.9 / 6.5 / 5.6                     | 5.4 / 5.7 / 4.9                |
| `brand.salmon`                | 4.5  | 9.0 / 8.4 / 7.3                     | 5.4 / 5.7 / 4.9                |
| `status.success`              | 4.5  | 9.2 / 8.6 / 7.5                     | 5.3 / 5.6 / 4.8                |
| `status.warning`              | 4.5  | 10.1 / 9.5 / 8.2                    | 5.3 / 5.6 / 4.8                |
| `status.danger`               | 4.5  | 6.1 / 5.7 / 5.0                     | 5.4 / 5.7 / 4.9                |
| `status.info`                 | 4.5  | 7.3 / 6.8 / 5.9                     | 5.3 / 5.6 / 4.8                |
| `brand.coral` como un gráfico | 3.0  | 6.9 / 6.5 / 5.6                     | 3.3 / 3.5 / 3.0                |

Las pruebas también cubren el estado y el texto de acento en sus fondos de inclinación (sobre base, tarjeta y tarjetaAlt), cada botón
estado, texto sobre coral, la baldosa terminal y el texto monoespacial en pozos.

<a id="do-and-dont"></a>

## Hacer y no

- Do use `bg-surface-popover shadow-popover border border-line-default` para una tarjeta flotante; no reutilizar
  `surface.raised` - en modo ligero es gris.
- Mezcla las tintes translúcidos de tokens (`color-mix(in srgb, var(--on-status-success) 14%, transparent)`♪ cuando un
  El resplandor de marketing necesita un tono; no escriba los valores hex o rgba en los componentes.
- Revise ambos temas antes de fusionar la interfaz de usuario; la galería y la aplicación ambos cambian con un ajuste.
