[English](../../../theming.md) · **简体中文** · [繁體中文](../../zh-Hant/docs/theming.md) · [日本語](../../ja-JP/docs/theming.md) · [Español](../../es-ES/docs/theming.md) · [Português (Brasil)](../../pt-BR/docs/theming.md) · [Русский](../../ru-RU/docs/theming.md) · [Deutsch](../../de-DE/docs/theming.md) · [Français](../../fr-FR/docs/theming.md) · [Italiano](../../it-IT/docs/theming.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

# 主题

每个 OpenNavo 应用都提供三种外观选择：**跟随系统**（默认）、**浅色**和**深色**。本页是各平台实现时共同遵守的约定。

## 基本规则

- 深色是每个令牌的默认值。
- 以下两种情况使用浅色主题：操作系统偏好浅色，**并且**页面没有强制使用深色；或者页面强制使用浅色。
- 主题也可以只作用于某个子树，例如浅色页面中一块始终保持深色的终端预览。

`@opennavo/design-tokens/tokens.css` 正是按这套规则实现的：

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

只有两套主题取值不同的令牌才会重复声明；间距、字体、圆角和动效由两套主题共用。`color-scheme` 随主题一起设置，所以原生表单控件和滚动条也会跟着变——不得在其他任何地方设置 `color-scheme`。

| 偏好     | `<html>` 属性        |
| -------- | -------------------- |
| 跟随系统 | 无（由媒体查询决定） |
| 浅色     | `data-theme="light"` |
| 深色     | `data-theme="dark"`  |

`@opennavo/design-tokens/theme` 中的 `applyThemePreference(preference)`（`@opennavo/design-vue` 也重新导出了它）负责设置或移除这个属性。它还会设置 `data-theme-switching` 并保留一帧；在这个属性存在期间，`base.css` 会关闭过渡，所以所有颜色在同一帧内完成切换，而不是每个控件各自渐变。

### 局部主题

`data-theme` 可以用在任何元素上。`base.css` 会在 `[data-theme]` 上重新应用 `color: var(--on-text-primary)`，因为继承来的文字颜色是按父元素的主题计算的。局部主题要少用，只用于有意固定某一套主题的区域：截图大图预览和截图说明标签（`component.lightboxScrim` 和 `component.captionBg` 在两套主题下都是深色，上面的文字必须保持浅色）、另一套主题下的产品截图、终端预览。绝不能拿来“修补”在某一套主题下显示有问题的组件。

## 网页（Nuxt、Vite）

页面在服务器上渲染，并且所有人共用同一份缓存，所以 HTML 里绝不能包含某位访客的选择。做法如下：

1. `<head>` 声明支持两种配色方案，并在加载任何样式表之前运行一小段阻塞脚本：

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   这段脚本读取 `localStorage`：如果保存过 `light` 或 `dark`，就设置对应的 `data-theme`，否则什么都不做。关闭 JavaScript 时，页面仍会通过媒体查询跟随系统。

2. 主题切换控件保存用户的选择（存在 `localStorage` 中，每个应用用自己的键——OpenNavo 用 `onv:theme`；选择“跟随系统”时删除这个键），然后调用 `applyThemePreference`。
3. 在服务器上渲染时，切换控件一律显示为“跟随系统”状态，水合完成后再读取保存的选择，否则前后端渲染的标记会对不上。
4. 监听 `storage` 事件，让其他打开着的标签页也跟着切换。

不要把 `data-theme` 写进 `app.head.htmlAttrs`。Nuxt 在客户端也会渲染 `app.head`，水合结束时它的 head 管理器会把这个属性改回去，覆盖启动脚本已经应用的选择。默认使用固定主题而不是“跟随系统”的应用，只在服务端渲染时写入这个默认值（用 Nitro 的 `render:html` 钩子），它的启动脚本还要在保存的选择是“跟随系统”时移除这个属性。

CSP 必须允许这段内联脚本（`script-src 'self' 'unsafe-inline'`，或者为它配置 nonce/hash）。

## macOS 桌面端（Tauri）

把这项偏好和应用的其他设置存在一起（`appearance: "system" | "light" | "dark"`），并以原生方式应用：

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` 会设置 `NSApp.appearance`。WKWebView 根据实际生效的外观报告 `prefers-color-scheme`，并且实时更新，所以**每个窗口都会跟着切换，不需要任何 JavaScript**：主窗口、菜单栏浮窗、浮层窗口和提醒窗口都是如此。主窗口还会额外用 `applyThemePreference` 同步这项设置，这样它能在同一帧内完成切换，在浏览器中运行的应用模拟版本（没有原生外观）也能切换主题。

另外：

- 在初始化阶段、任何窗口显示之前就应用保存的外观，否则强制指定的主题会先闪现另一套主题。
- 页面绘制完成之前，以及实时调整窗口大小时，窗口背景都会露出来：把它设为当前生效主题的 `surface.base`（`#131313` / `#F8F8F8`），并在 `WindowEvent::ThemeChanged` 时更新。
- 透明的浮窗窗口在自己的文档中保持 `html { background: transparent; color-scheme: normal }`，由其中的面板绘制 `surface.card`。
- 原生菜单、提醒和文件打开面板会自动跟随 `NSApp.appearance`。菜单栏图标是模板图像；无论应用使用哪套主题，macOS 都会按菜单栏的样式为它们着色。

## SwiftUI

`OnColor.*` 的值是动态颜色，会按绘制它的视图的外观来解析：

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

在 macOS 上，如果要控制整个应用的外观，就设置 `NSApp.appearance`，做法和 Tauri 完全一样。

## Flutter

`OnColors` 和 `OnShadows` 是带有 `dark` 和 `light` 两个常量的 `ThemeExtension`；`onThemeData(brightness)` 会构建一个携带它们的 Material 主题：

```dart
MaterialApp(
  theme: onThemeData(Brightness.light),
  darkTheme: onThemeData(Brightness.dark),
  themeMode: switch (preference) { 'light' => ThemeMode.light, 'dark' => ThemeMode.dark, _ => ThemeMode.system },
);

final colors = OnColors.of(context);
Container(color: colors.surfaceCard);
```

## 为其他应用换品牌

品牌层是同系列应用可以修改的那一组令牌；其余部分保持完全一致，让这些应用看起来属于同一个家族（[品牌](brand.md)）。写一个只包含这些令牌的覆盖文件，然后生成：

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

`--out` 会把同样的文件（CSS、预设、Dart、Swift、DTCG）写到应用自己的目录下，而不是写进本仓库。

也可以在应用自己的构建流程中调用 `@opennavo/design-tokens/build` 里的 `mergeTokens(base, overrides)` 和 `buildArtifacts()`。对象会逐层合并，所以 `{ "light": "…" }` 只改动浅色值。发布之前，要针对合并后的令牌重新运行对比度测试。

## 新页面检查清单

- [ ] 只使用令牌；用 `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` 搜索组件，结果为空。
- [ ] 在深色、浅色下都显示正确；如果嵌入了预览，在浅色页面中嵌有深色子树时也显示正确。
- [ ] 浮动面板用 `surface.popover`，选中的分段用 `component.segmentActive`。
- [ ] 用强调色做的光晕都乘以 `effect.accentGlowOpacity`。
- [ ] 切换主题时没有布局偏移，也没有颜色渐变。
