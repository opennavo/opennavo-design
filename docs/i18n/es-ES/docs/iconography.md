[English](../../../iconography.md) · [简体中文](../../zh-CN/docs/iconography.md) · [繁體中文](../../zh-Hant/docs/iconography.md) · [日本語](../../ja-JP/docs/iconography.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/iconography.md) · [Русский](../../ru-RU/docs/iconography.md) · [Deutsch](../../de-DE/docs/iconography.md) · [Français](../../fr-FR/docs/iconography.md) · [Italiano](../../it-IT/docs/iconography.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="iconography"></a>

# Iconografía

<a id="interface-icons"></a>

## Iconos de interfaz

- **Set:** [Lucide](https://lucide.dev) (ISC licencia), agrupado como un subconjunto sin conexión — sólo iconos enumerados en
  `packages/vue/src/icons/names.ts` navío, se convirtió en SVG inline para que trabajen en SSR y sin una red.
- **Medidas:** 16 px en menús y navegación, 15 px en `md`/`lg` botones, 14 px en `xs`/`sm` botones y fichas, 12–13 px
  inline con metadatos. Iconos dentro de un renderizado de 26–32 px a 14–16 px.
- **Stroke y color:** Lucide's 2 px a 24 px, escalada; iconos tomar `currentColor`, por lo que siguen el texto
  token of their context. No color iconos independientemente a menos que lleven estado.
- **Significa:** un icono por concepto a través de la aplicación (por ejemplo `circle-arrow-down` para actualizaciones, `shield-check` para
  seguridad, `eraser` para la limpieza). Los botones Icon-sólo siempre tienen un `aria-label` y una herramienta.
- **Añadiendo iconos:** los paquetes sólo los iconos de sus componentes dibujan. Una aplicación añade su propio con
  `registerIcons(getIcons(lucide, ['compass', 'settings']))` (`@iconify/utils` + `@iconify-json/lucide`, o cualquier conjunto en
  Iconify JSON la forma, abordada como `prefix:name`) una vez al inicio, por lo que su paquete lleva justo lo que utiliza.
  componentes que necesitan `packages/vue/src/icons/names.ts`Entonces, `pnpm gen`. Nombres desconocidos render
  nada y advertir en el desarrollo.

<a id="icon-tiles"></a>

## Icon azulejos

Los azulejos cuadrados pequeños sostienen un icono en las listas de características, ajustes y avisos: 26–40 px, `rounded-[7–9px]` (o
`rounded-app-icon` a 40 px y arriba), `bg-surface-raised` con `text-ink-secondary`, o un estado sutil llenado con el
color de estado para los elementos de estado.

<a id="app-icons"></a>

## Iconos de aplicación

- App artwork se muestra como entregado, `object-contain`, no hay mascarilla agregada: macOS los iconos ya incluyen su forma.
- La falta de obras de arte se remonta a un **letra**: un gradiente de 160° del acento de la aplicación (o un color derivado de su
  identificador) oscurecido 18%, iniciales blancas en el 42% del lado, `rounded-app-icon`, `shadow-app-icon`.
- Las herramientas de línea de comando utilizan **terminal tile**: una azulejo oscuro gradiente en ambos temas con una abreviatura monoespacial
  30% del lado y una barra de colores.
- Tamaños en uso: 20, 24, 26, 28, 30, 32, 40, 44, 46, 54, 64, 96, 118 px.

<a id="brand-mark"></a>

## Marca de marca

Cada aplicación envía su propia marca; los componentes del sistema lo llevan a través de una `brand` Las marcas no son parte de este
licencia del repositorio ([Marca](brand.md)).
