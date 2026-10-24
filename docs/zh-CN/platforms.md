# 平台

> 英文原文：[platforms.md](../platforms.md)。两者不一致时以英文版为准。

所有平台使用同样的令牌和规则；本页列出各平台的不同之处。

## macOS 桌面端（Tauri + Vue）

- **窗口**：覆盖式标题栏，隐藏标题；红绿灯按钮内缩 18 × 22；默认 1280 × 820，最小 1100 × 700。把工具栏和页头的空白区域标记为拖动区域（`data-tauri-drag-region`）。
- **外观**：在设置中保存 `system | light | dark`；在窗口显示之前用 `app.set_theme()` 应用；把主窗口背景同步为 `surface.base`，并在 `ThemeChanged` 时再次同步（[主题](theming.md#macos-桌面端tauri)）。
- **浮窗和浮层**是独立的透明无边框窗口（菜单栏浮窗、权限引导、提醒）：它们的 `html` 保持透明，并设置 `color-scheme: normal`；由面板绘制 `surface.card`，配合 `rounded-panel` 和自己的阴影；原生阴影关闭，所以透明窗口的边界永远不会露出来。
- **菜单栏**：项目使用模板图像，由 macOS 为其着色；点击切换浮窗的显示与隐藏；除非用户选择“打开”，否则任何操作都不会激活主窗口。
- **系统集成**：权限通过系统设置的深层链接申请，配合一个不抢焦点的引导浮层；应用的原生菜单包含标准项：关于、设置（⌘,）、隐藏、退出；需要密码的对话框使用系统的密码提示，并说明用途。
- **字体**：通过 `system-fonts.css` 使用系统字体。**滚动**：主内容栏在窗口内部滚动（`OnAppShell scroll="container"`）。
- **WebKit 特性**：要在 WKWebView 中测试焦点和透明效果，不能只在 Chromium 里测——两者对 `:focus-visible` 和窗口遮挡的处理不同。

## 网页（Nuxt）

- 服务器渲染，便于缓存：每位访客拿到的 HTML 都一样；主题、隐私授权和各类建议都在浏览器中应用。主题启动脚本是设计系统唯一需要的内联脚本。
- 使用 `OnAppShell scroll="document"`：从 `md` 起，侧边栏和工具栏固定显示，`md` 以下改用紧凑栏。
- 链接是真正的链接（`linkAs` = `NuxtLink`），在用户交互时预取，而不是在进入可视区域时预取。
- 元信息：`color-scheme: dark light`；每个页面都设置 `lang` 和 hreflang。

## React + Tailwind CSS

这里没有 React 组件；直接使用令牌，并遵循组件规范。

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* 主题映射 + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html 颜色、主题切换时关闭过渡、减弱动态效果 */
@import '@opennavo/design-tokens/system-fonts.css';
```

不依赖 Vue 的主题工具：`@opennavo/design-tokens/theme` 中的 `applyThemePreference`、`themeBootScript` 和 `THEME_PREFERENCES`。[`examples/react-tailwind`](../../examples/react-tailwind) 用这些类实现了一张设置卡片，包含主题切换、一个开关和几个按钮。

类名与 Vue 组件一致（`bg-surface-card`、`text-ink-secondary`、`border-line-subtle`、`rounded-big`、`shadow-popover`、`text-title1`、`duration-fast`、`z-modal`）。Tailwind CSS v3 使用预设：`@opennavo/design-tokens/tailwind-preset` 中的 `presets: [openNavoPreset]`，再加上 `import '@opennavo/design-tokens/tokens.css'`。主题切换同样使用 `data-theme` 属性。

## SwiftUI（`OpenNavoDesign` Swift 包）

- `OnColor.*` 动态颜色、`OnSpace.*`、`OnRadius.*`、`OnTypography.*`（配合 `.onTextStyle(_:)`）、`OnShadow.*`（配合 `.onShadow(_:)`）、`OnMotion.*`（时长和 `Animation` 曲线）、`OnLayout.*`。
- 系统控件仍然用系统控件；令牌用于它们周围的背景、文字和间距。
- 字体使用 SF Pro，字号取令牌值；字距从 em 换算为点。

## Flutter（`opennavo_design` 包）

- `theme` / `darkTheme` 用 `onThemeData(Brightness)` 生成；令牌颜色和阴影通过 `OnColors.of(context)` 和 `OnShadows.of(context)` 获取（它们是 `ThemeExtension`，切换主题时会以动画过渡）。
- `OnSpace`、`OnRadius`、`OnTypography`（`TextStyle`；`label` 的文字需要自己转成大写）、`OnMotion`（`Duration` 和 `Cubic` 曲线）、`OnLayout`。
- Flutter 不支持内阴影层，因此省略了这些层。
