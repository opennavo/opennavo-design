# 在应用中接入设计系统

> 英文原文：[adoption.md](../adoption.md)。两者不一致时以英文版为准。

新应用如何基于 OpenNavo Design 起步，以及早先复制过 OpenNavo 代码包的应用如何迁移过来。

## 新建 Tauri + Vue 应用

1. **依赖**（在这些包正式发布之前，使用 git 子目录依赖或工作区链接）：

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **样式和插件**：在 `main.ts` 中按以下顺序引入：

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // 存放十种界面语言之一的 ref
   ```

3. **UnoCSS**：使用预设，并且同时扫描组件包，这样组件包用到的工具类才会生成：

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

   在 `vite.config.ts` 里加上 `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`：组件包以源码形式发布，预构建会复制出第二份语言和图标注册表，`createOnUi` 和 `registerIcons` 就传不到组件里。

4. **外观设置**：在应用设置中加入 `appearance: system | light | dark`；在窗口显示之前，在 Rust 中用 `app.set_theme()` 应用它；同步主窗口背景；并在主窗口中用 `applyThemePreference()` 同样应用一次（[主题 › macOS 桌面端](theming.md#macos-桌面端tauri)）。在“设置 › 通用”中以分段控件提供这个选项：跟随系统/浅色/深色。
5. **品牌层**：为应用编写 `brand.json`，写入它的强调色（[品牌](brand.md)），用 `--overrides brand.json --out <app>/design` 生成，然后引入生成的 `tokens.css`，而不是包里自带的那份。
6. **外壳**：`OnAppShell` 配合 `OnSidebar`（应用的标志放在 `brand` 插槽里）和 `OnToolbar`，页面结构按[交互模式](patterns.md#页面结构)中的说明搭建。
7. **语言**：应用自己的文案要提供全部十种语言；组件自带它们的翻译。

网页应用（Nuxt）还要加上 `@unocss/nuxt`，在 `css: [...]` 中按同样的顺序引入样式，并加入 `<head>` 中的启动脚本（[主题 › 网页](theming.md#网页nuxtvite)）。React 应用使用令牌包中的 `tailwind.css` 和 `base.css`（[平台 › React](platforms.md#react--tailwind-css)）。

## 迁移复制过 OpenNavo 代码包的应用

对于复制过 `packages/tokens` 和 `packages/ui` 的应用，这里以虚构的 `example-app` 为例：包名为 `@example-app/tokens`，使用 `--ex-` 变量和 `Ex*` 组件。工具类保持一致（`bg-surface-card`、`text-ink-secondary`……），所以迁移的大部分工作只是改导入和名称：

| 迁移前（复制版）                                        | 迁移后（设计系统）                                           |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css`（或应用生成的品牌版本） |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`    |
| `@example-app/ui` → `ExButton`、`createExUi()`          | `@opennavo/design-vue` → `OnButton`、`createOnUi()`          |
| 应用样式中的 `var(--ex-…)`                              | `var(--on-…)`                                                |
| 侧边栏里的 `ExLogo`                                     | 应用自己的 Logo 组件，放在 `OnSidebar` 的 `brand` 插槽里     |
| 取值不同的本地令牌                                      | 如果是品牌令牌，用 `brand.json` 覆盖；否则改用系统的值       |

步骤：

1. 列出应用与系统在令牌上的差异（用 `diff` 比较应用的 `tokens.json` 和 `tokens/tokens.json`）。品牌令牌写进 `brand.json`；其余差异要么是该删掉的错误，要么是对系统的提案。
2. 替换导入和前缀（用 codemod 或搜索替换：`Ex` → `On`、`--ex-` → `--on-`，以及包名）。
3. 把应用专属的组件（需要了解应用数据的那些）移进应用；通用组件改用系统提供的版本。
4. 在两套主题下运行应用，并与组件预览页对照；针对合并后的令牌运行对比度测试。
5. 删除复制来的 `packages/tokens` 和 `packages/ui`。

应用不得自行分叉中性色、间距、字体或组件。如果需要系统里没有的东西，先把它加进系统（[CONTRIBUTING.md](../../CONTRIBUTING.md)）。

## 检查清单

- [ ] 令牌来自 `@opennavo/design-tokens`（或由它生成的品牌版本）；没有写死的颜色。
- [ ] 外观设置提供跟随系统/浅色/深色；启动时不闪烁；所有窗口都跟着切换。
- [ ] 组件来自 `@opennavo/design-vue`；应用的标志通过 `brand` 插槽传入。
- [ ] 十种界面语言。
- [ ] 两套主题都检查过；带品牌覆盖的对比度测试全部通过。
