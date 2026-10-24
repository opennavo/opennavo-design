[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · **繁體中文** · [日本語](../../ja-JP/docs/theming.md) · [Español](../../es-ES/docs/theming.md) · [Português (Brasil)](../../pt-BR/docs/theming.md) · [Русский](../../ru-RU/docs/theming.md) · [Deutsch](../../de-DE/docs/theming.md) · [Français](../../fr-FR/docs/theming.md) · [Italiano](../../it-IT/docs/theming.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 主題

每個 OpenNavo 應用都提供三種外觀選擇：**跟隨系統**（預設）、**淺色**和**深色**。本頁是各平臺實現時共同遵守的約定。

## 基本規則

- 深色是每個令牌的預設值。
- 以下兩種情況使用淺色主題：作業系統偏好淺色，**並且**頁面沒有強制使用深色；或者頁面強制使用淺色。
- 主題也可以只作用於某個子樹，例如淺色頁面中一塊始終保持深色的終端預覽。

`@opennavo/design-tokens/tokens.css` 正是按這套規則實現的：

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

只有兩套主題取值不同的令牌才會重複宣告；間距、字型、圓角和動效由兩套主題共用。`color-scheme` 隨主題一起設定，所以原生表單控制元件和捲軸也會跟著變——不得在其他任何地方設定 `color-scheme`。

| 偏好     | `<html>` 屬性        |
| -------- | -------------------- |
| 跟隨系統 | 無（由媒體查詢決定） |
| 淺色     | `data-theme="light"` |
| 深色     | `data-theme="dark"`  |

`@opennavo/design-tokens/theme` 中的 `applyThemePreference(preference)`（`@opennavo/design-vue` 也重新匯出了它）負責設定或移除這個屬性。它還會設定 `data-theme-switching` 並保留一幀；在這個屬性存在期間，`base.css` 會關閉過渡，所以所有顏色在同一幀內完成切換，而不是每個控制元件各自漸變。

### 區域性主題

`data-theme` 可以用在任何元素上。`base.css` 會在 `[data-theme]` 上重新應用 `color: var(--on-text-primary)`，因為繼承來的文字顏色是按父元素的主題計算的。區域性主題要少用，只用於有意固定某一套主題的區域：截圖大圖預覽和截圖說明標籤（`component.lightboxScrim` 和 `component.captionBg` 在兩套主題下都是深色，上面的文字必須保持淺色）、另一套主題下的產品截圖、終端預覽。絕不能拿來“修補”在某一套主題下顯示有問題的元件。

## 網頁（Nuxt、Vite）

頁面在伺服器上渲染，並且所有人共用同一份快取，所以 HTML 裡絕不能包含某位訪客的選擇。做法如下：

1. `<head>` 宣告支援兩種配色方案，並在載入任何樣式表之前執行一小段阻塞指令碼：

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   這段指令碼讀取 `localStorage`：如果儲存過 `light` 或 `dark`，就設定對應的 `data-theme`，否則什麼都不做。關閉 JavaScript 時，頁面仍會透過媒體查詢跟隨系統。

2. 主題切換控制元件儲存使用者的選擇（存在 `localStorage` 中，每個應用用自己的鍵——OpenNavo 用 `onv:theme`；選擇“跟隨系統”時刪除這個鍵），然後呼叫 `applyThemePreference`。
3. 在伺服器上渲染時，切換控制元件一律顯示為“跟隨系統”狀態，水合完成後再讀取儲存的選擇，否則前後端渲染的標記會對不上。
4. 監聽 `storage` 事件，讓其他開啟著的標籤頁也跟著切換。

不要把 `data-theme` 寫進 `app.head.htmlAttrs`。Nuxt 在客戶端也會渲染 `app.head`，水合結束時它的 head 管理器會把這個屬性改回去，覆蓋啟動指令碼已經應用的選擇。預設使用固定主題而不是“跟隨系統”的應用，只在服務端渲染時寫入這個預設值（用 Nitro 的 `render:html` 鉤子），它的啟動指令碼還要在儲存的選擇是“跟隨系統”時移除這個屬性。

CSP 必須允許這段內聯指令碼（`script-src 'self' 'unsafe-inline'`，或者為它配置 nonce/hash）。

## macOS 桌面端（Tauri）

把這項偏好和應用的其他設定存在一起（`appearance: "system" | "light" | "dark"`），並以原生方式應用：

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` 會設定 `NSApp.appearance`。WKWebView 根據實際生效的外觀報告 `prefers-color-scheme`，並且實時更新，所以**每個視窗都會跟著切換，不需要任何 JavaScript**：主視窗、選單欄浮窗、浮層視窗和提醒視窗都是如此。主視窗還會額外用 `applyThemePreference` 同步這項設定，這樣它能在同一幀內完成切換，在瀏覽器中執行的應用模擬版本（沒有原生外觀）也能切換主題。

另外：

- 在初始化階段、任何視窗顯示之前就應用儲存的外觀，否則強制指定的主題會先閃現另一套主題。
- 頁面繪製完成之前，以及實時調整視窗大小時，視窗背景都會露出來：把它設為當前生效主題的 `surface.base`（`#131313` / `#F8F8F8`），並在 `WindowEvent::ThemeChanged` 時更新。
- 透明的浮窗視窗在自己的文件中保持 `html { background: transparent; color-scheme: normal }`，由其中的面板繪製 `surface.card`。
- 原生選單、提醒和檔案開啟面板會自動跟隨 `NSApp.appearance`。選單欄圖示是模板影象；無論應用使用哪套主題，macOS 都會按選單欄的樣式為它們著色。

## SwiftUI

`OnColor.*` 的值是動態顏色，會按繪製它的檢視的外觀來解析：

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

在 macOS 上，如果要控制整個應用的外觀，就設定 `NSApp.appearance`，做法和 Tauri 完全一樣。

## Flutter

`OnColors` 和 `OnShadows` 是帶有 `dark` 和 `light` 兩個常量的 `ThemeExtension`；`onThemeData(brightness)` 會構建一個攜帶它們的 Material 主題：

```dart
MaterialApp(
  theme: onThemeData(Brightness.light),
  darkTheme: onThemeData(Brightness.dark),
  themeMode: switch (preference) { 'light' => ThemeMode.light, 'dark' => ThemeMode.dark, _ => ThemeMode.system },
);

final colors = OnColors.of(context);
Container(color: colors.surfaceCard);
```

## 為其他應用換品牌

品牌層是同系列應用可以修改的那一組令牌；其餘部分保持完全一致，讓這些應用看起來屬於同一個家族（[品牌](brand.md)）。寫一個只包含這些令牌的覆蓋檔案，然後生成：

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

`--out` 會把同樣的檔案（CSS、預設、Dart、Swift、DTCG）寫到應用自己的目錄下，而不是寫進本倉庫。

也可以在應用自己的構建流程中呼叫 `@opennavo/design-tokens/build` 裡的 `mergeTokens(base, overrides)` 和 `buildArtifacts()`。物件會逐層合併，所以 `{ "light": "…" }` 只改動淺色值。釋出之前，要針對合併後的令牌重新執行對比度測試。

## 新頁面檢查清單

- [ ] 只使用令牌；用 `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` 搜尋元件，結果為空。
- [ ] 在深色、淺色下都顯示正確；如果嵌入了預覽，在淺色頁面中嵌有深色子樹時也顯示正確。
- [ ] 浮動面板用 `surface.popover`，選中的分段用 `component.segmentActive`。
- [ ] 用強調色做的光暈都乘以 `effect.accentGlowOpacity`。
- [ ] 切換主題時沒有佈局偏移，也沒有顏色漸變。
