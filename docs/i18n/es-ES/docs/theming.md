[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · [繁體中文](../../zh-Hant/docs/theming.md) · [日本語](../../ja-JP/docs/theming.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/theming.md) · [Русский](../../ru-RU/docs/theming.md) · [Deutsch](../../de-DE/docs/theming.md) · [Français](../../fr-FR/docs/theming.md) · [Italiano](../../it-IT/docs/theming.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="theming"></a>

# Theming

Cada uno OpenNavo app ofrece tres opciones de apariencia: **Sistema** (el predeterminado), **Claro** y **Oscuro**. Esta página es
el contrato cada plataforma implementa.

<a id="the-rule"></a>

## La regla

- La oscuridad es el valor predeterminado de cada ficha.
- El tema de la luz se aplica cuando el sistema operativo prefiere la luz **y** la página no se ha forzado a oscuras, o cuando la
  página fuerza la luz.
- La elección también puede aplicarse a un subárbol, por ejemplo una vista previa de terminal siempre oscura dentro de una página de luz.

`@opennavo/design-tokens/tokens.css` codifica exactamente eso:

```css
:root {
  color-scheme: dark;
  --on-surface-card: #1a1a1a; /* every token, dark values */
}

@media (prefers-color-scheme: light) {
  :root:not([data-theme='dark']) {
    color-scheme: light;
    --on-surface-card: #ffffff; /* themed tokens only */
  }
}
[data-theme='light'] {
  color-scheme: light;
  --on-surface-card: #ffffff;
}
[data-theme='dark'] {
  color-scheme: dark;
  --on-surface-card: #1a1a1a;
}
```

Sólo se repiten fichas que difieren entre temas; se comparten espaciamiento, tipo, radio y movimiento. `color-scheme` viene
con el tema, así que los controles de forma nativa y barras de desplazamiento lo siguen — nunca se establece `color-scheme` En cualquier otro lugar.

| Preferencia | `<html>` atributo                                          |
| ----------- | ---------------------------------------------------------- |
| Sistema     | ninguna (la consulta de los medios de comunicación decide) |
| Claro       | `data-theme="light"`                                       |
| Oscuro      | `data-theme="dark"`                                        |

`applyThemePreference(preference)` desde `@opennavo/design-tokens/theme` (reexportado por `@opennavo/design-vue`) sets
o elimina el atributo. También establece `data-theme-switching` para un marco; `base.css` desactiva las transiciones bajo
así que todos los colores cambian en el mismo marco en lugar de cada control que se desvanece por separado.

<a id="subtrees"></a>

### Subtrees

`data-theme` trabaja en cualquier elemento. `base.css` re-applies `color: var(--on-text-primary)` on `[data-theme]`Porque...
un color de texto heredado se calcula en el tema del padre. Usar subárboles espaciosamente, para superficies que mantienen un tema en
propósito: la caja de luz de captura y los chips de captura (`component.lightboxScrim` y `component.captionBg` están oscuros
ambos temas, por lo que el texto en ellos debe permanecer la luz), capturas de pantalla del producto en el otro tema, previsualizaciones terminales.
Nunca use uno para "fix" un componente que falla en un tema.

<a id="web-nuxt-vite"></a>

## Web (Nuxt, Vite)

Las páginas se entregan en el servidor y se enganchan para todos, así que el HTML nunca puede contener la elección de un visitante. En lugar:

1. El `<head>` declara ambos esquemas y ejecuta un pequeño script de bloqueo antes de cualquier hoja de estilo:

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   El guión lee `localStorage`, aplica `data-theme` para un salvado `light` o `dark`, y no hace nada de otra manera.
   Con JavaScript fuera de la página sigue el sistema a través de la consulta de medios.

2. El interruptor de tema almacena la opción (`localStorage`, clave por aplicación - OpenNavo usos `onv:theme`; eliminar la clave para
   Sistema) y llamadas `applyThemePreference`.
3. Render el interruptor en su estado "Sistem" en el servidor y leer la opción guardada después de la hidratación, o el marcador
   no va a coincidir.
4. Escuchad el `storage` evento para que otras pestañas abiertas sigan.

Nunca me he puesto `data-theme` en `app.head.htmlAttrs`. Nuxt renders `app.head` en el cliente también, y cuando hidratación
termina su jefe de gestión de la cabeza establece el atributo de nuevo, sobre la elección del script aplicado.
tema en lugar de System escribe que por defecto en el servidor render sólo (un Nitro `render:html` gancho), y su bota
script debe entonces eliminar el atributo para una elección del Sistema guardado.

El CSP debe permitir el script inline (`script-src 'self' 'unsafe-inline'`, o un nonce/hash para él).

<a id="macos-desktop-tauri"></a>

## macOS escritorio (Tauri)

Guarde la preferencia con la configuración de la aplicación (`appearance: "system" | "light" | "dark"`) y aplicarlo nativamente:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` sets `NSApp.appearance`. Informes de WKWebView `prefers-color-scheme` de la apariencia efectiva y
lo actualiza en vivo, así que **cada ventana sigue sin ninguna JavaScript**: la ventana principal, barra de menú popovers, overlays y
alertas. La ventana principal refleja además el ajuste con `applyThemePreference` así que cambia en el mismo marco,
y por lo que el navegador burla de la aplicación (no apariencia nativa) puede ser temática.

También:

- Aplicar la apariencia guardada durante la configuración, antes de que cualquier ventana pueda mostrar, o un tema forzado flashea el otro.
- El fondo de la ventana es visible antes de las pinturas de la página y durante el tamaño en vivo: configurarlo para `surface.base` de la
  tema eficaz (tema`#131313` / `#F8F8F8`) y actualizarlo en `WindowEvent::ThemeChanged`.
- Las ventanas popover transparentes mantienen `html { background: transparent; color-scheme: normal }` en su propio documento;
  su panel dibuja `surface.card`.
- Menús nativos, alertas y paneles abiertos siguen `NSApp.appearance` automáticamente. Los iconos de barras de menú son imágenes de plantilla;
  macOS los colores para la barra de menús, sea cual sea el tema de la aplicación.

<a id="swiftui"></a>

## SwiftUI

`OnColor.*` los valores son colores dinámicos que se resuelven con la apariencia de la vista dibujando:

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

Encendida macOS set `NSApp.appearance` para el control de aplicaciones, exactamente como en Tauri.

<a id="flutter"></a>

## Flutter

`OnColors` y `OnShadows` son `ThemeExtension`s con `dark` y `light` constantes; `onThemeData(brightness)` construye un
Tema material que los lleva:

```dart
MaterialApp(
  theme: onThemeData(Brightness.light),
  darkTheme: onThemeData(Brightness.dark),
  themeMode: switch (preference) { 'light' => ThemeMode.light, 'dark' => ThemeMode.dark, _ => ThemeMode.system },
);

final colors = OnColors.of(context);
Container(color: colors.surfaceCard);
```

<a id="re-branding-another-app"></a>

## Re-marcando otra aplicación

La capa de la marca es el conjunto de fichas que una aplicación de hermano puede cambiar; todo lo demás permanece igual para que las aplicaciones se sientan como
una familia ([Marca](brand.md)). Escribe un archivo de anulación con sólo esas fichas y genera:

```json
{
  "color": {
    "brand": { "coral": { "value": "#3C7BFF", "light": "#2457D6" } },
    "text": { "accent": { "value": "#7AA2FF", "light": "#1F4FC2" } }
  }
}
```

```sh
node packages/tokens/scripts/generate.ts --overrides ../my-app/design/brand.json --out ../my-app/design/generated
```

`--out` escribe los mismos archivos (CSS, presets, Dart, Swift, DTCG) debajo de la carpeta de la aplicación en lugar de este repositorio.

o llamada `mergeTokens(base, overrides)` y `buildArtifacts()` desde `@opennavo/design-tokens/build` en la propia aplicación
Los objetos se fusionan, así que `{ "light": "…" }` cambiar sólo el valor de la luz. Re-correr las pruebas de contraste contra la fusión
fichas antes del envío.

<a id="checklist-for-a-new-screen"></a>

## Lista de verificación para una nueva pantalla

- [ ] Usa sólo fichas; `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` no encuentra nada en el componente.
- [ ] Se ve justo en la oscuridad, la luz, y la luz con un subárbol oscuro si se incrusta previsualmente.
- [ Los paneles flotantes usan `surface.popover`, segmentos seleccionados `component.segmentActive`.
- [ ] Flujos construidos a partir de un color de acento se multiplican por `effect.accentGlowOpacity`.
- [ No hay cambio de diseño o color cuando el tema cambia.
