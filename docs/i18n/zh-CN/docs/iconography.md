[English](../../../iconography.md) · **简体中文** · [繁體中文](../../zh-Hant/docs/iconography.md) · [日本語](../../ja-JP/docs/iconography.md) · [Español](../../es-ES/docs/iconography.md) · [Português (Brasil)](../../pt-BR/docs/iconography.md) · [Русский](../../ru-RU/docs/iconography.md) · [Deutsch](../../de-DE/docs/iconography.md) · [Français](../../fr-FR/docs/iconography.md) · [Italiano](../../it-IT/docs/iconography.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

# 图标

## 界面图标

- **图标集**：[Lucide](https://lucide.dev)（ISC 许可），以离线子集的形式打包——只有 `packages/vue/src/icons/names.ts` 中列出的图标会随包发布；图标渲染为内联 SVG，因此在 SSR 和没有网络时都能使用。
- **尺寸**：菜单和导航中 16 px；`md`/`lg` 按钮中 15 px；`xs`/`sm` 按钮和标签（chip）中 14 px；与元信息同行时 12–13 px。26–32 px 底块中的图标按 14–16 px 渲染。
- **描边和颜色**：采用 Lucide 在 24 px 下的 2 px 描边，随尺寸等比缩放；图标使用 `currentColor`，因此跟随所在位置的文字令牌。除非图标表示状态，否则不要单独给它上色。
- **含义**：整个应用中，一个概念只对应一个图标（例如 `circle-arrow-down` 表示更新，`shield-check` 表示安全，`eraser` 表示清理）。纯图标按钮始终要有 `aria-label` 和悬停提示。
- **添加图标**：组件包只打包组件自己用到的图标。应用需要更多图标时，在启动时调用一次 `registerIcons(getIcons(lucide, ['compass', 'settings']))`（用 `@iconify/utils` 和 `@iconify-json/lucide`，也可以是任何 Iconify JSON 格式的图标集，以 `prefix:name` 引用），这样应用的包里只带它实际用到的图标。组件本身需要的新图标则加到 `packages/vue/src/icons/names.ts`，再运行 `pnpm gen`。未知的名称不会渲染任何内容，并在开发环境中给出警告。

## 图标底块

功能列表、设置和提示框中，用小方块底块承载图标：26–40 px，`rounded-[7–9px]`（40 px 及以上用 `rounded-app-icon`），`bg-surface-raised` 配 `text-ink-secondary`；有状态的项目改用状态色的淡色填充配状态色。

## 应用图标

- 应用图标按交付时的样子显示，使用 `object-contain`，不额外加遮罩：macOS 图标本身已经带有外形。
- 缺少图标时回退为**首字母图标**：160° 渐变，从应用的强调色（或由应用标识符推导出的颜色）过渡到加深 18% 的同一颜色；白色首字母，大小为边长的 42%；使用 `rounded-app-icon` 和 `shadow-app-icon`。
- 命令行工具使用**终端图标**：两套主题下都是深色渐变底块，上面是大小为边长 30% 的等宽缩写，外加一条彩色色条。
- 目前用到的尺寸：20、24、26、28、30、32、40、44、46、54、64、96、118 px。

## 品牌标志

每个应用自带标志，系统组件通过 `brand` 插槽接收它。品牌标志不在本仓库的许可范围内（[品牌](brand.md)）。
