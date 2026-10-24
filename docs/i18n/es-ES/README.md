[English](../../../README.md) · [简体中文](../zh-CN/README.md) · [繁體中文](../zh-Hant/README.md) · [日本語](../ja-JP/README.md) · **Español** · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru-RU/README.md) · [Deutsch](../de-DE/README.md) · [Français](../fr-FR/README.md) · [Italiano](../it-IT/README.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="opennavo-design"></a>

# OpenNavo Design

El sistema de diseño de [OpenNavo](https://opennavo.com), la tienda de aplicaciones Homebrew gratuita y de código abierto para Mac, y de sus aplicaciones relacionadas. Reúne tokens de diseño, especificaciones y componentes reutilizables para mantener una apariencia, unos textos y un comportamiento coherentes en los temas claro y oscuro.

<a id="language-and-release-status"></a>

## Vista previa

### Tema oscuro

![Tema oscuro](../../previews/shell-dark.png)

### Tema claro

![Tema claro](../../previews/shell-light.png)

### Componentes

![Componentes](../../previews/components-dark.png)

## Idioma y estado de la versión

Inglés`en-US`) es el idioma de componente predeterminado y la fuente de traducciones. La galería comienza en inglés a menos que un idioma fue seleccionado explícitamente a través de su URL o configuración guardada; el lenguaje del navegador no lo anula. Los componentes también admiten chino simplificado, chino tradicional, japonés, español, portugués brasileño, ruso, alemán, francés e italiano.

La documentación, los comentarios del código, las herramientas de desarrollo y las notas de versión de GitHub usan el inglés por defecto. Las traducciones siguen el original en inglés.

La versión 0.1.0 es una vista previa temprana: las API pueden cambiar antes de 1.0, y los paquetes no se publican a los registros todavía. [SEGURIDAD](SECURITY.md).

<a id="whats-inside"></a>

## Contenido del repositorio

| Camino                                                                                  | Paquete                   | Para                                                                                                                                          |
| --------------------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [`tokens/tokens.json`](../../../tokens/tokens.json)                                     | —                         | La única fuente: colores (ork + luz), tipo, espaciamiento, radios, sombras, movimiento, diseño                                                |
| [`packages/tokens`](../../../packages/tokens)                                           | `@opennavo/design-tokens` | CSS variables para ambos temas, UnoCSS preset, Tailwind CSS v4 tema y v3 preset, valores tipo, DTCG archivos para herramientas de diseño      |
| [`packages/vue`](../../../packages/vue)                                                 | `@opennavo/design-vue`    | Vue 3 componentes (botones, menús, diálogos, tablas, conchas de aplicaciones ...), ayudantes de tema, estilos de base, galería de componentes |
| [`packages/swift`](../../../packages/swift) + [`Package.swift`](../../../Package.swift) | `OpenNavoDesign`          | SwiftUI tokens: colores dinámicos, espaciamiento, tipo, movimiento                                                                            |
| [`packages/flutter`](../../../packages/flutter)                                         | `opennavo_design`         | Flutter tokens as `ThemeExtension`s and a `ThemeData` constructor                                                                             |
| [`docs`](docs/README.md)                                                                | —                         | La especificación: principios, color, temática, componentes, patrones, contenido, accesibilidad                                               |

Todo bajo `packages/*/` que dice generated se hace desde `tokens/tokens.json` por `pnpm gen`; CI falla si
un archivo generado se edita a mano o fuera de la fecha.

<a id="quick-start"></a>

## Inicio rápido

Los paquetes no están en un registro todavía; dependen de este repositorio directamente (pnpm dependencias de subdirectorio de git,
SwiftPM, o un pub `git` dependencia o copia `packages/tokens/dist` en tu aplicación.

<a id="vue-3--unocss-vite-tauri"></a>

### Vue 3 + UnoCSS (Vite, Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, system fonts, then UnoCSS
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css';
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';

app.use(createOnUi({ locale })); // a ref with one of the ten locales
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({ presets: [presetWind3(), presetOpenNavo()] });
```

```vue
<OnButton variant="primary" icon="download">Install</OnButton>
<OnCard><p class="text-body text-ink-secondary">Only on this Mac; nothing is uploaded.</p></OnCard>
```

Véase [`packages/vue/README.md`](packages/vue/README.md) para Nuxt, escaneado de contenido y la lista de componentes.

<a id="react--tailwind-css-v4"></a>

### React + Tailwind CSS v4

```css
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css';
```

```tsx
<button className="h-[34px] rounded-default bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text">
  Install
</button>
```

Un ejemplo completo vive en [`examples/react-tailwind`](../../../examples/react-tailwind) (incluido el interruptor de tema).

<a id="swiftui"></a>

### SwiftUI

```swift
.package(url: "https://github.com/opennavo/opennavo-design.git", branch: "main")

Text("Installed").onTextStyle(OnTypography.bodySm).foregroundStyle(OnColor.statusSuccess)
```

<a id="flutter"></a>

### Flutter

```yaml
opennavo_design:
  git: { url: https://github.com/opennavo/opennavo-design.git, path: packages/flutter }
```

```dart
MaterialApp(theme: onThemeData(Brightness.light), darkTheme: onThemeData(Brightness.dark));
```

<a id="dark-light-and-system"></a>

## Modo oscuro, claro y del sistema

La oscuridad es el predeterminado; la luz sigue el sistema operativo a menos que la aplicación forme un tema. En la web la elección es un
`data-theme` atributo `<html>` (`applyThemePreference()`, además de un pequeño guión de la cabeza para que una opción salva nunca flashes);
en Tauri aplicaciones la apariencia nativa se establece una vez y cada ventana y la vista web sigue; SwiftUI y Flutter resolver
colores por aspecto. Detalles: [docs/theming.md](docs/theming.md).

<a id="the-specification"></a>

## Especificación de diseño

Empieza con [docs/README.md](docs/README.md). La versión corta de los principios: el contenido primero, decir lo que
sucede, local primero, estable bajo el puntero, respetar la plataforma, silencio por defecto, un sistema para cada aplicación,
accesible por construcción, cada idioma encaja.

<a id="development"></a>

## Desarrollo

Requisitos: Node 24, pnpm 10; Swift 5.9+ (Xcode) y Flutter 3.24+ para los paquetes nativos.

```sh
pnpm install
pnpm gen          # render every generated file from tokens/tokens.json (and the icon subset)
pnpm check        # fail if any generated file is stale
pnpm test         # token contrast and output tests, Vue component tests
pnpm typecheck
pnpm gallery      # component gallery at http://127.0.0.1:6106 with a theme and language switch
swift test        # SwiftUI package
(cd packages/flutter && flutter test)
```

Cambio de fichas en `tokens/tokens.json` sólo, luego corre `pnpm gen` y comprometer los archivos generados con él. Ver
[CONTRIBUCIÓN.md](CONTRIBUTING.md).

<a id="license"></a>

## Licencia

El código y la documentación están bajo la licencia [MIT Licencia](../../../LICENSE). El OpenNavo el nombre y el logotipo no están autorizados;
ver [TRADEMARKS.md](TRADEMARKS.md). El material de terceros acoplado mantiene su propia licencia: el Lucide subconjunto de icono ISC
([paquetes/vue/THIRD PARTY NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

Fuente y separado MIT autorización: [PROVENANCE.md](PROVENANCE.md).
