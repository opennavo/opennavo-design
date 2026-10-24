[English](../../../layout.md) · [简体中文](../../zh-CN/docs/layout.md) · [繁體中文](../../zh-Hant/docs/layout.md) · [日本語](../../ja-JP/docs/layout.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/layout.md) · [Русский](../../ru-RU/docs/layout.md) · [Deutsch](../../de-DE/docs/layout.md) · [Français](../../fr-FR/docs/layout.md) · [Italiano](../../it-IT/docs/layout.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="layout"></a>

# - ¿Qué?

<a id="spacing"></a>

## Esparcimiento

Una escala basada en 4 px (`space.*`, también el UnoCSS/Tailwind espaciamiento utilizado en componentes:

| Paso | 0   | 0.5 | 1   | 1.5 | 2   | 2.5 | 3   | 3.5 | 4   | 5   | 6   | 7   | 8   | 10  | 12  | 16  | 20  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px   | 0   | 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 20  | 24  | 28  | 32  | 40  | 48  | 64  | 80  |

ritmo típico:

- 4–8 entre un icono y su etiqueta, fichas seguidas, título y subtítulo.
- 10–14 filas densas y entre los controles en una barra de herramientas (los elementos de barra de herramientas se sientan 14 aparte).
- 16–20 fichas de padding (20 en el ferrocarril), 22 entre secciones de ferrocarril.
- 24–28 entre secciones de la página; 28 es la fuente de contenido de escritorio.
- 40–80 entre secciones del sitio web.

<a id="radius"></a>

## Radius

| Clase              | px  | Uso                                                                         |
| ------------------ | --- | --------------------------------------------------------------------------- |
| `rounded-tiny`     | 4   | Llaveros, pequeñas etiquetas, código en línea                               |
| `rounded-small`    | 7   | Chips, entradas en filas densas, segmentos, elementos de menú               |
| `rounded-default`  | 10  | Botones, entradas, avisos, tarjetas pequeñas                                |
| `rounded-panel`    | 12  | Menús, popovers, capturas de pantalla, lista de contenedores                |
| `rounded-big`      | 14  | Tarjetas                                                                    |
| `rounded-huge`     | 20  | Dialogs, sábanas, héroes de características, cabeceras de detalles          |
| `rounded-xl`       | 28  | Grandes paneles de marketing                                                |
| `rounded-full`     | —   | Píldoras, avatares, toggles, puntos                                         |
| `rounded-app-icon` | 23% | Los azulejos de icono de la aplicación (aproximadamente los macOS squircle) |

Las esquinas anidadas se encogen: un elemento dentro de un contenedor acolchado utiliza el siguiente radio más pequeño.

<a id="elevation"></a>

## Elevation

La Elevación es color más sombra, nunca sombra sola:

| Nivel | Superficie                                               | Sombra.          | Ejemplos                                                            |
| ----- | -------------------------------------------------------- | ---------------- | ------------------------------------------------------------------- |
| 0     | `surface.base`                                           | —                | Contenido de ventana                                                |
| 1     | `surface.card` + `border.subtle`                         | —                | Tarjetas, listas, grupos de configuración                           |
| 2     | `surface.popover` / `surface.overlay` + `border.default` | `shadow.popover` | Menús, puntas de herramientas, avisos flotantes, paleta de comandos |
| 3     | `component.modalBg` + `border.default`                   | `shadow.modal`   | Dialogs, hojas                                                      |
| —     | `component.toastBg`                                      | `shadow.toast`   | Toasts                                                              |
| —     | —                                                        | `shadow.window`  | Marcos de ventana en capturas de pantalla y mockups de marketing    |

Las sombras son pesadas y negras en modo oscuro, suaves en modo de luz; las fichas llevan ambas. Sobresale el contenido borroso lo que
está detrás de ellos (`effect.backdropBlur`, 20 px).

<a id="layers"></a>

## Capas

| `z-*`      | Valor | Uso                                                                   |
| ---------- | ----- | --------------------------------------------------------------------- |
| `base`     | 0     | Índice                                                                |
| `sticky`   | 10    | Barras de herramientas pegajosas, barras laterales, cabeceras de mesa |
| `dropdown` | 100   | Menús, recubrimiento de ferrocarril                                   |
| `overlay`  | 200   | Scrims                                                                |
| `modal`    | 300   | Dialogs, sábanas, caja ligera                                         |
| `popover`  | 400   | Cambios de imagen por encima de diálogos                              |
| `toast`    | 500   | Toasts                                                                |
| `tooltip`  | 600   | Herramientas                                                          |

<a id="the-app-shell"></a>

## El cáscara de aplicación

Ventana de escritorio (Tauri) — `OnAppShell` en modo contenedor:

```
┌──────────┬──────────────────────────────────────────────┬──────────┐
│ ● ● ●    │ toolbar · 52 px · back/forward · ⌘K search    │          │
│          ├──────────────────────────────────────────────┤  rail    │
│ sidebar  │ main · scrolls · 28 px gutters                │  288 px  │
│ 224 px   │                                              │ optional │
│          │                                              │          │
└──────────┴──────────────────────────────────────────────┴──────────┘
```

- Ventana predeterminada 1280 × 820, mínimo 1100 × 700. Luces de tráfico inset 18 × 22 sobre la barra lateral (bar de título superpuesto);
  la barra de herramientas y la barra lateral vacía son las regiones de arrastre de ventanas.
- Sidebar: marca de marca, navegación agrupada (`text-label` títulos de grupo, 13.5 ítems de px), configuración fijada en la parte inferior.
  Las etiquetas tienen aproximadamente 152 px; las traducciones deben caber ([Índice](content.md)).
- Rail: sólo en páginas que tienen una, acoplada a 1240 px y más ancho, de otra manera abierto de la barra de herramientas como una superposición.
- Contenido principal: `px-28px pb-28px`, secciones 24 a 28 aparte, cabecera de página (`text-title1` + una línea de `text-body-sm`
  texto secundario) en la parte superior.

Sitio web `OnAppShell` en modo de documento para las páginas de la tienda, un diseño de aterrizaje de ancho completo para las páginas de marketing:

- Ancho de página 1240 máx con 24 destripadores de px; navegación superior 64 px; puntos de rotura `sm` 640, `md` 768, `lg` 1024, `xl` 1280,
  `2xl` 1440.
- Las páginas de la tienda reutilizan la cáscara de escritorio: barra lateral y barra de herramientas son pegajosos desde `md`; abajo `md` una barra compacta con un menú
  sustituye a ambos; el carril se sienta al lado del contenido de `xl` y debajo de ella de otra manera.
- Páginas de comercialización: sangrado completo `surface.page`, secciones centradas, ventanas de aplicaciones de mock usando las mismas fichas que la aplicación.

<a id="grids"></a>

## Grids

- Las cuadrículas llenan columnas de al menos 260 px con 12 vacíos px (`grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`): tres
  a través de una ventana de escritorio completa, menos a medida que se estrecha. Rejillas de aplicación Denser dentro de una página con un uso de raíl 220 px.
- Azulejos estadísticos: 2 columnas en el ferrocarril, hasta 5 en una página de detalles.
- Ajustes: una columna de 720 px de `OnCard` grupos con filas (label + pista izquierda, control derecho); navegación de sección en la
  izquierda a 180 px.
- Formularios en la web: una sola columna de 720 px; etiquetas sobre campos.

<a id="density"></a>

## Densidad

La interfaz de usuario de escritorio es densa, pero no anulada: 32–40 filas de px en listas, 28–34 controles de px, texto de 13–13.5 px.
web son por lo menos 32 px (44 px para acciones móviles primarias).
