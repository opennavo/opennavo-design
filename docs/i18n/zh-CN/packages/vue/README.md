[English](../../../../../packages/vue/README.md) · **简体中文** · [繁體中文](../../../zh-Hant/packages/vue/README.md) · [日本語](../../../ja-JP/packages/vue/README.md) · [Español](../../../es-ES/packages/vue/README.md) · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · [Русский](../../../ru-RU/packages/vue/README.md) · [Deutsch](../../../de-DE/packages/vue/README.md) · [Français](../../../fr-FR/packages/vue/README.md) · [Italiano](../../../it-IT/packages/vue/README.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

<a id="opennavodesign-vue"></a>

# @ opennavo/ 设计- vue

Vue 3个组成部分 OpenNavo 设计:按钮和输入、数据显示、空和错误状态、对话框、菜单、a
命令调色板、土司和应用程序 shell(侧边栏、工具栏、顶端导航、侧边栏)。
UnoCSS 预设 [`@opennavo/design-tokens`](../../../../../packages/tokens),自动跟踪暗淡主题并传送它们
拥有十种语言(美国语,zh-CN语,ja-JP语,es-ES语,pt-BR语,ru-RU语,de-DE语,f-FR语,it-IT语,zh-Hant语)的字符串.

- **仅限呈文.** 组件从不获取数据、读取路由或调用平台 API。 Apps 将内容通过
  道具和插槽,以及连接通过 `linkAs` (`RouterLink`, `NuxtLink`)或普通锚.
- **船舶 TypeScript 财务报告和已审计财务报表 `.vue` 来源**,没有建构步骤: Vite (或 减 减 ) Nuxt建立汇编,所以 SSR树
  抖动和自己的 TypeScript 设置应用。
- **里面没有牌子** 显示应用程序标记的组件通过一个 `brand` 插槽,带有纯文本
  `brandName` 倒车,倒车 OpenNavo 名称和标志不属于此套件( Q)[贸 业 . md](../../TRADEMARKS.md)).

每个组件道具、插槽、事件和无障碍说明: [文档/组件](../../docs/components.md)。组件席
(`pnpm gallery`) 显示两个主题和所有十种语言的每一个组成部分.

<a id="install"></a>

## 安装

软件包尚未在注册簿上 。

**在这个寄存器或一个 pnpm 包含它的工作空间**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**从 Git (pnpm)** ——从同一承诺中安装两个包,并指向符号的依赖 Vue 软件包
(宣布为 `workspace:*`)在Git副本中带有一个覆盖:

```json
{
  "dependencies": {
    "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
    "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue",
    "vue": "^3.5.0"
  },
  "pnpm": {
    "overrides": { "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens" }
  }
}
```

绑定标签或承诺( E)`#v0.1.0&path:packages/vue`用于可复制的安装。 `vue` 3.5.

<a id="default-language"></a>

## 默认语言

`app.use(createOnUi())` 使用英语( E)`en-US`。通过 `createOnUi({ locale })` 来遵循一个明确的被动语言选择。没有插件,组件也会回归英语。 `?locale=` 参数首先,然后是保存的选项,否则会使用英语。

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (亦请参看A/C.5/49/L.48和A/C.5/49/L.2号文件)。 Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, (optional) system fonts, then UnoCSS
import { createApp, ref } from 'vue';
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css'; // platform fonts instead of Inter; leave out to use Inter
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';
import type { Locale } from '@opennavo/design-vue';
import App from './App.vue';

const locale = ref<Locale>('en-US'); // drive it from your i18n state or settings
createApp(App).use(createOnUi({ locale })).mount('#app');
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({
  presets: [presetWind3(), presetOpenNavo()],
  content: {
    pipeline: {
      include: [
        // UnoCSS's default file types…
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // …plus the component sources when the package lives in node_modules (Git or registry installs)
        /@opennavo[\\/]design-vue[\\/]src[\\/].+\.(vue|ts)($|\?)/
      ]
    }
  }
});
```

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  // Required when the package is installed in node_modules: pre-bundling would split it into two copies (the
  // pre-bundled index and the .vue files), so createOnUi's locale and registerIcons would not reach the components.
  optimizeDeps: { exclude: ['@opennavo/design-vue'] }
  // With Vite SSR also add: ssr: { noExternal: ['@opennavo/design-vue', '@opennavo/design-tokens'] }
});
```

```vue
<script setup lang="ts">
import { OnButton, OnCard } from '@opennavo/design-vue';
</script>

<template>
  <OnCard>
    <p class="m-0 text-body text-ink-secondary">Only on this device; nothing is uploaded.</p>
    <OnButton variant="primary" icon="download">Install</OnButton>
  </OnCard>
</template>
```

TypeScript: 所使用的来源 Vite客户端类型( O)`import.meta.env`, CSS 进口) Vite 财务报告和已审计财务报表 Nuxt 项目
已经包括(`"types": ["vite/client"]`).

<a id="nuxt"></a>

## Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'], // reads uno.config.ts above
  css: [
    '@unocss/reset/tailwind.css',
    '@opennavo/design-tokens/tokens.css',
    '@opennavo/design-vue/base.css',
    '@opennavo/design-vue/system-fonts.css' // optional
  ],
  // Compile the TypeScript/.vue sources for the server bundle as well.
  build: { transpile: ['@opennavo/design-vue', '@opennavo/design-tokens'] },
  vite: { optimizeDeps: { exclude: ['@opennavo/design-vue'] } },
  app: {
    head: {
      // Apply a saved light/dark choice before first paint (see Theme below).
      script: [
        {
          innerHTML: `try{var t=localStorage.getItem("app:theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`
        }
      ],
      meta: [{ name: 'color-scheme', content: 'dark light' }]
    }
  }
});
```

上面的剧本是 `themeBootScript('app:theme')` 返回;如果您愿意,请在代码中生成。

```ts
// plugins/opennavo-ui.ts
import { createOnUi, isLocale } from '@opennavo/design-vue';
import type { Locale } from '@opennavo/design-vue';

export default defineNuxtPlugin(nuxtApp => {
  // Map your i18n locale to one of the ten codes; anything else falls back to English.
  const locale = computed<Locale>(() => {
    const code = nuxtApp.$i18n.locale.value;
    return isLocale(code) ? code : 'en-US';
  });
  nuxtApp.vueApp.use(createOnUi({ locale }));
});
```

传球 `NuxtLink` 用于提供链接的组件(`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`与 `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`。组件从未读取路径;通过 `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri 桌面应用程序

Tauri 应用程序使用 Vite 此外,还有:

- 使用( U) `OnAppShell scroll="container"`:窗口保持固定高度,主柱卷轴自行进行.
- `OnSidebar` 财务报告和已审计财务报表 `OnToolbar` 带 `drag-region` 要添加的语句 `data-tauri-drag-region` 标题栏区域(52 px
  macOS 车灯 里面的按钮和连接 从来不是可拖动的
- 导入 `system-fonts.css` 以平台本身的字体渲染。
- 主题: 存储 `system | light | dark` 在您的设置中设置本地窗口主题( E)Tauri- 说吧
  `set_theme` / `setTheme`),所以网页视图是: `prefers-color-scheme` 其后; `applyThemePreference` 也工作过
  每个窗口。透明弹出窗口应重置 `html { background: transparent }` 他们自己的入口,
  自此以来 `base.css` 绘制页面背景。
- WebKit 环聚焦一个脚本移动, 除非用户刚刚使用键盘; 覆盖已说明
  此项( 4 )`moveFocus`),所以应用程序本身打开的对话框不会显示焦点环.

<a id="locale"></a>

## 语言

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

没有插件,组件使用英语。内部组件, `useUiLocale()` 返回 locale 参考和
`useUiMessages()` 它的弦乐; `LOCALES`, `isLocale(value)`, `uiMessages` 财务报告和已审计财务报表 `interpolate(template, params)`
用于想要相同字符串的应用程序。 `placeholder`, `label`, `title` 或 减 减 `description`
覆盖内置默认值 。

<a id="theme"></a>

## 主题

黑暗是默认;光线在系统喜欢它时适用,除非页面强制使用一个主题 `data-theme` 打开
`<html>` (`"dark"` 或 减 减 `"light"`). `data-theme="light"` 或 减 减 `"dark"` 也可以在任何子树上工作,例如预览面板.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` 关闭一个框架的转换( E)`base.css` `[data-theme-switching]`),所以每个颜色
即时变化. `THEME_PREFERENCES` 财务报告和已审计财务报表 `isThemePreference` 帮助验证存储的值。

<a id="icons"></a>

## 图标

`OnIcon` 时间和时间 `icon` 从捆绑中制成内置 SVG Lucide 子集: 组件使用的图标加
`sun`, `moon` 财务报告和已审计财务报表 `sun-moon` (`BUNDLED_ICONS`。在挂起前要登记更多 :

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

名称是 Lucide 名称( E)`settings`, `lucide:settings`)或(或) `prefix:name` 用于另一个已注册集。未知名称
在开发过程中将空图标变成警告。 `vite.config.ts` 显示一个切换
子集在构建时间,所以完整的图标集从未达到捆绑.

<a id="components"></a>

## 构成部分

| 组           | 构成部分                                                                                                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 行动与投入   | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| 集装箱和数据 | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| 状态         | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| 浮层         | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| 布局和导航   | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| 显示大小写   | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

帮助者 : `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`,主题助手
(亦见 `@opennavo/design-vue/theme`),叠加焦点帮助者(`moveFocus`, `trapTab`, `lockScroll`(... ) 巡回演唱会
B. 重点(`nextRovingIndex`),以及这些部件使用的小型公用事业(包括:`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` 样式 HTML 仅: 在您的应用程序中制作 Markdown 并消毒它( 例如 使用原始的 Markdown- it) HTML
关闭,然后DOMPurify),或者通过它的槽传递元素.

<a id="development"></a>

## 开发

从寄存器根( R)`pnpm install` 首个:

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

新建组件字符串进入全部 10 个文件 `src/messages`; `tests/locale.test.ts` 检查每个地方是否有
相同的键和占位符。

<a id="license"></a>

## 许可

MIT组合起来 Lucide 图标数据是 ISC (与 MIT 从 Feather: 看见了
[第三层 边际 NOTIECES. md](THIRD_PARTY_NOTICES.md)。该词 OpenNavo 名称和标志没有许可证 :
[贸 业 . md](../../TRADEMARKS.md).
