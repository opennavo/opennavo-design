[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · [繁體中文](../../zh-Hant/docs/adoption.md) · [日本語](../../ja-JP/docs/adoption.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/adoption.md) · [Русский](../../ru-RU/docs/adoption.md) · [Deutsch](../../de-DE/docs/adoption.md) · [Français](../../fr-FR/docs/adoption.md) · [Italiano](../../it-IT/docs/adoption.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="adopting-the-system-in-an-app"></a>

# Adoptando el sistema en una aplicación

Cómo comienza una nueva aplicación OpenNavo Diseño, y cómo una aplicación que copió OpenNavoLos paquetes anteriores se mueven hacia él.

<a id="a-new-tauri--vue-app"></a>

## Una nueva Tauri + Vue app

1. **Dependencias** (hasta que se publiquen los paquetes, utilice dependencias de subdirectorios de git o un enlace de espacio de trabajo):

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **Estilos y plugin** en `main.ts`, en este orden:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** con el preset, escaneando el paquete del componente también para que sus utilidades se generen:

   ```ts
   import { defineConfig, presetWind3 } from 'unocss';
   import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

   export default defineConfig({
     presets: [presetWind3(), presetOpenNavo()],
     content: {
       pipeline: { include: [/\.(vue|ts)($|\?)/, /@opennavo\/design-vue\/src\/.*\.(vue|ts)$/] },
       filesystem: ['node_modules/@opennavo/design-vue/src/**/*.{vue,ts}']
     }
   });
   ```

   In `vite.config.ts` añadir `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`: las fuentes de paquetes, y
   pre-abundamiento haría una segunda copia de sus registros locales e iconos, por lo que `createOnUi` y `registerIcons` lo haría.
   no alcanzar los componentes.

4. **Ajuste de la apariencia**: añadir `appearance: system | light | dark` a la configuración de la aplicación, aplicarla con
   `app.set_theme()` en Rust antes de que las ventanas se muestren, sincronizar el fondo principal de la ventana, y espejo en la ventana principal
   con `applyThemePreference()` ([Theming › macOS escritorio](theming.md#macos-desktop-tauri)). Ofrezca la opción en
   Configuración › General como un control segmentado: Sistema / Luz / Oscuro.
5. **La capa de marca**: escribir la aplicación `brand.json` con su acento ([Marca](brand.md)), generar con
   `--overrides brand.json --out <app>/design`, e importar el generado `tokens.css` en lugar del paquete uno.
6. **Estructura de la app**: `OnAppShell` con `OnSidebar` (la marca de la aplicación en la `brand` ranura), `OnToolbar`, y la anatomía de la página
   en [Patrones](patterns.md#page-anatomy).
7. **Idiomas**: enviar todos los diez locales para las propias cuerdas de la aplicación; los componentes traen las suyas.

Una aplicación web (Nuxt) adds `@unocss/nuxt`, lo mismo CSS orden `css: [...]`, y el guión de arranque de la cabeza
([Theming › Web](theming.md#web-nuxt-vite)). A React usos de la aplicación `tailwind.css` y `base.css` del paquete de fichas
([Plataformas › React](platforms.md#react--tailwind-css)).

<a id="moving-an-app-that-copied-opennavos-packages"></a>

## Moviendo una aplicación que copió OpenNavo's paquetes

Para una aplicación que copió `packages/tokens` y `packages/ui`, este ejemplo utiliza la ficción `example-app`,
con `@example-app/tokens`, `--ex-` variables y `Ex*` componentes. Las clases de utilidad son las mismas
(`bg-surface-card`, `text-ink-secondary` ...), por lo que la mayoría de los movimientos son importaciones y nombres:

| Antes (copiar)                                          | Después (sistema)                                                                          |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (o la copia de la aplicación generada de marca)       |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                                  |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                        |
| `var(--ex-…)` en estilos de aplicación                  | `var(--on-…)`                                                                              |
| `ExLogo` dentro de la barra lateral                     | el propio componente de logotipo de la aplicación `OnSidebar`'s `brand` ranura             |
| Valores de token locales que difieren                   | a `brand.json` anular si son fichas de marca; de lo contrario adoptar el valor del sistema |

Pasos:

1. Listar las diferencias de ficha de la aplicación (`diff` de su `tokens.json` contra la `tokens/tokens.json`). Las fichas de marca entran
   `brand.json`; cualquier otra diferencia es un fallo a caer o una propuesta para el sistema.
2. Sustitúyase las importaciones y los prefijos (un códigomod o un lugar de búsqueda y sustitución: `Ex` → `On`, `--ex-` → `--on-`, nombres de paquetes).
3. Mueva los componentes específicos de la aplicación (los que conocen los datos de la aplicación) en la aplicación; mantenga los componentes genéricos del sistema.
4. Ejecute la aplicación en ambos temas y compare con la galería; ejecute las pruebas de contraste contra los tokens fusionados.
5. Eliminar la copiada `packages/tokens` y `packages/ui`.

Una aplicación no puede falsificar los neutrales, espaciamiento, tipo o componentes. Si necesita algo que el sistema carece, agréguelo a
el sistema primero ([CONTRIBUCIÓN.md](../CONTRIBUTING.md)).

<a id="checklist"></a>

## Lista de verificación

- [ Tokens from `@opennavo/design-tokens` (o una copia de la marca generada de ella); no hay colores codificados duros.
- [ ] Ajuste de apariencia con Sistema / Luz / Oscuro; ningún flash en el inicio; cada ventana sigue.
- [ Componentes de `@opennavo/design-vue`; la marca de la aplicación `brand` ranuras.
- [ Diez idiomas de interfaz.
- [ ] Ambos temas comprobados; pruebas de contraste verde para la marca se anula.
