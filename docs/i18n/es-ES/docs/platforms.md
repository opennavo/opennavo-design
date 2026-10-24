[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · [繁體中文](../../zh-Hant/docs/platforms.md) · [日本語](../../ja-JP/docs/platforms.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/platforms.md) · [Русский](../../ru-RU/docs/platforms.md) · [Deutsch](../../de-DE/docs/platforms.md) · [Français](../../fr-FR/docs/platforms.md) · [Italiano](../../it-IT/docs/platforms.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="platforms"></a>

# Plataformas

Las mismas fichas y reglas en cada plataforma; esta página enumera lo que difiere.

<a id="macos-desktop-tauri--vue"></a>

## macOS escritorio (Tauri + Vue)

- **Ventana:** barra de título con título oculto, semáforos inset 18 × 22, default 1280 × 820, minimum
  1100 × 700. Marcar la barra de herramientas y las zonas de cabecera vacías como regiones de arrastre (`data-tauri-drag-region`).
- **Apariencia:** tienda `system | light | dark` en la configuración; aplicar con `app.set_theme()` antes de que las ventanas se muestren; sincronización
  el fondo principal de la ventana `surface.base` y en `ThemeChanged` ([Theming](theming.md#macos-desktop-tauri)).
- **Cambios y superposiciones** son ventanas transparentes separadas, sin fronteras (páginas de barras de menu, guías de permiso,
  alertas: sus `html` estancias transparentes con `color-scheme: normal`, el panel dibuja `surface.card` con
  `rounded-panel` y su propia sombra; las sombras nativas están apagadas así que los límites transparentes nunca muestran.
- **Menú bar:** los elementos son imágenes de plantilla por lo tanto macOS los colores; haciendo clic en cambiar la popover; nada activa la
  ventana principal a menos que el usuario elija "Abrir".
- **Integración del sistema:** permisos a través de Configuración del Sistema enlaces profundos con una guía superpuesta que no toma
  enfoque; el menú nativo de la aplicación tiene elementos estándar (Acerca, Ajustes soluble, Ocultar, Quit); diálogos que necesitan una contraseña
  utilizar el sistema rápido y decir para qué es.
- **Fuentes:** la fuente del sistema `system-fonts.css`. **Scroll:** la columna principal pergaminos dentro de la ventana
  (`OnAppShell scroll="container"`).
- **WebKit especifica:** enfoque de prueba y transparencia en WKWebView, no sólo en cromo — `:focus-visible` y
  oclusión se comportan de forma diferente.

<a id="web-nuxt"></a>

## Web (Nuxt)

- Servidor reenviado y fácil de usar: el HTML es lo mismo para cada visitante; tema, consentimiento y sugerencias son
  aplicado en el navegador. El script de bota tema es el único script en línea que el sistema de diseño necesita.
- `OnAppShell scroll="document"` con barra lateral pegajosa y barra de herramientas desde `md`, una barra compacta debajo.
- Los enlaces son enlaces reales (`linkAs` = `NuxtLink`), con prefetch sobre interacción en lugar de visibilidad.
- Meta: `color-scheme: dark light`; set `lang` y hreflang por página.

<a id="react--tailwind-css"></a>

## React + Tailwind CSS

No hay React componentes; utilizar las fichas y seguir las especificaciones del componente.

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

Ayudantes sin tema Vue: `applyThemePreference`, `themeBootScript` y `THEME_PREFERENCES` desde
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../../../../examples/react-tailwind) muestra una tarjeta de configuración con una
interruptor de tema, un toggle y botones construidos de estas clases.

Las clases coinciden con las Vue componentes (compuestos)`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 utiliza el preset:
`presets: [openNavoPreset]` desde `@opennavo/design-tokens/tailwind-preset`, más
`import '@opennavo/design-tokens/tokens.css'`El cambio de tema es el mismo `data-theme` atributo.

<a id="swiftui-opennavodesign-swift-package"></a>

## SwiftUI (`OpenNavoDesign` Paquete giratorio)

- `OnColor.*` colores dinámicos, `OnSpace.*`, `OnRadius.*`, `OnTypography.*` con `.onTextStyle(_:)`, `OnShadow.*` con
  `.onShadow(_:)`, `OnMotion.*` (duraciones y `Animation` curvas), `OnLayout.*`.
- Los controles del sistema mantienen los controles del sistema; aplican fichas a los antecedentes, texto y espaciamiento alrededor de ellos.
- Tipo utiliza SF Pro en los tamaños de ficha; el seguimiento se convierte de em a puntos.

<a id="flutter-opennavo_design-package"></a>

## Flutter (`opennavo_design` paquete)

- `onThemeData(Brightness)` para `theme` / `darkTheme`; `OnColors.of(context)` y `OnShadows.of(context)` por ficha
  colores y sombras (`ThemeExtension`s que anima entre temas).
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; mayúscula `label` - Sí, sí. `OnMotion`
  (`Duration`s y `Cubic` curvas), `OnLayout`.
- Las capas de sombra inset no están disponibles en Flutter y están omitidos.
