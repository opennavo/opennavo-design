[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · [繁體中文](../../zh-Hant/docs/theming.md) · [日本語](../../ja-JP/docs/theming.md) · [Español](../../es-ES/docs/theming.md) · [Português (Brasil)](../../pt-BR/docs/theming.md) · **Русский** · [Deutsch](../../de-DE/docs/theming.md) · [Français](../../fr-FR/docs/theming.md) · [Italiano](../../it-IT/docs/theming.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="theming"></a>

# Имя

Каждый OpenNavo Приложение предлагает три варианта внешнего вида: **Система** (по умолчанию), **Светлая** и **Тёмная**Эта страница является
Контракт реализует каждая платформа.

<a id="the-rule"></a>

## Правило

- Темнота - это значение по умолчанию каждого токена.
- Световая тема применяется, когда операционная система предпочитает свет. **и** Страница не была вынужденной темнотой, или когда
  Страница заставляет свет.
- Выбор также может применяться к поддереву, например, всегда темный предварительный просмотр терминала внутри легкой страницы.

`@opennavo/design-tokens/tokens.css` Кодирует именно это:

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

Повторяются только токены, которые различаются между темами; разделяются расстояние, тип, радиусы и движение. `color-scheme` приходить
с темой, поэтому нативные элементы управления формой и полосы прокрутки следуют за ней - никогда не устанавливайте `color-scheme` в любом другом месте.

| Предпочтение | `<html>` атрибут          |
| ------------ | ------------------------- |
| Система      | Нет (вопрос СМИ решается) |
| Светлая      | `data-theme="light"`      |
| Тёмная       | `data-theme="dark"`       |

`applyThemePreference(preference)` из `@opennavo/design-tokens/theme` (реэкспортируется `@opennavo/design-vue`) наборы
или удаляет атрибут. Он также устанавливает `data-theme-switching` для одного каркаса; `base.css` Отключает переходы под
Это означает, что все цвета меняются в одной и той же раме, а не каждый контроль затухает отдельно.

<a id="subtrees"></a>

### Подлески

`data-theme` Работает на любом элементе. `base.css` повторное применение `color: var(--on-text-primary)` на `[data-theme]`Потому что
унаследованный цвет текста вычисляется в родительской теме. Используйте поддеревья экономно, для поверхностей, которые сохраняют одну тему на
Цель: скриншот лайтбокса и чипы подписи (`component.lightboxScrim` и `component.captionBg` Темнота внутри
обе темы, поэтому текст на них должен оставаться светлым, скриншоты продукта в другой теме, терминальные предварительные просмотры.
Никогда не используйте его для «исправления» компонента, который не работает в одной теме.

<a id="web-nuxt-vite"></a>

## Веб.Nuxt, Vite)

Страницы отображаются на сервере и кэшируются для всех, поэтому HTML Никогда не может содержать выбор посетителя. Вместо этого:

1. The `<head>` Объявляет обе схемы и запускает крошечный сценарий блокировки перед любым таблицей стилей:

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   Сценарий читает `localStorage`применяется `data-theme` Для спасенных `light` или `dark`и не делает ничего иного.
   с JavaScript Вне страницы все еще следует за системой через медиа-запрос.

2. Переключатель темы сохраняет выбор (`localStorage`Ключ в приложении — OpenNavo использование `onv:theme`Удалить ключ для
   Система) и звонки `applyThemePreference`.
3. Отображение переключателя в состоянии «Система» на сервере и считывание сохраненного выбора после гидратации или разметки
   Не будет совпадать.
4. Слушайте, `storage` Так что другие открытые вкладки следуют.

Никогда не ставить `data-theme` в `app.head.htmlAttrs`. Nuxt рендер `app.head` и на клиенте, а также при гидратации
заканчивает его главный менеджер устанавливает атрибут обратно, по выбору сценария применен. приложение, по умолчанию которого принудительно
Тема вместо System пишет, что по умолчанию в сервере отображается только (Nitro) `render:html` Крючок и его сапог
Затем скрипт должен удалить атрибут для сохраненного выбора системы.

CSP должен разрешить встроенный сценарий (`script-src 'self' 'unsafe-inline'`, или хэш для него.

<a id="macos-desktop-tauri"></a>

## macOS рабочий столTauri)

Храните предпочтения с настройками приложения (`appearance: "system" | "light" | "dark"`) и применять его нативно:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` набор `NSApp.appearance`Об этом сообщает WKWebView `prefers-color-scheme` от эффективного внешнего вида и
Обновление в прямом эфире, так что **Каждое окно проходит без каких-либо JavaScript**: главное окно, бар меню, накладки и
Главное окно дополнительно отражает настройку с помощью `applyThemePreference` Он переключается в одну и ту же рамку.
Таким образом, макет браузера приложения (без родного внешнего вида) может быть тематическим.

Также:

- Примените сохраненный внешний вид во время настройки, прежде чем какое-либо окно может показать, или принудительная тема мигает на другую.
- Фон окна виден перед красками страницы и во время живого изменения размера: установите его на `surface.base` из
  Эффективная тема`#131313` / `#F8F8F8`) и обновить его `WindowEvent::ThemeChanged`.
- Прозрачные окна для пополнения сохраняют `html { background: transparent; color-scheme: normal }` на свой собственный документ;
  Их панель рисует `surface.card`.
- Нативные меню, предупреждения и открытые панели следуют `NSApp.appearance` автоматически. иконки меню - это шаблонные изображения;
  macOS Раскрашивайте их для панели меню, независимо от темы приложения.

<a id="swiftui"></a>

## SwiftUI

`OnColor.*` значениями являются динамические цвета, которые разрешаются с появлением рисующего их вида:

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

Включаю macOS набор `NSApp.appearance` для общего контроля, точно так же, как и в Tauri.

<a id="flutter"></a>

## Flutter

`OnColors` и `OnShadows` есть `ThemeExtension`с `dark` и `light` константы; `onThemeData(brightness)` строить а
Материальная тема, которая их несет:

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

## Ребрендинг другого приложения

Слой бренда - это набор токенов, которые может изменить приложение-брат; все остальное остается идентичным, поэтому приложения чувствуют себя так же, как и другие.
Одна семья ()[Бренд](brand.md)Напишите файл override только с этими токенами и сгенерируйте:

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

`--out` записывает те же файлы (CSS, предустановки, Дарт, Свифт, DTCG) под папкой приложения вместо этого репозитория.

или звонить `mergeTokens(base, overrides)` и `buildArtifacts()` из `@opennavo/design-tokens/build` в собственном приложении
Объекты сливаются, так что `{ "light": "…" }` Перезапуск контрастных тестов против слитого
Токены перед отправкой.

<a id="checklist-for-a-new-screen"></a>

## Контрольный список для нового экрана

- [ ] Использует только токены; `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` В компоненте ничего не найдено.
- [ Выглядит прямо в темноте, свете и свете с темным деревом, если он встраивает предварительные просмотры.
- [ ] Использование плавучих панелей `surface.popover`, выбранные сегменты `component.segmentActive`.
- [ ] Связанные с акцентом блески умножаются на `effect.accentGlowOpacity`.
- [ ] Никаких изменений в макете или цветах при изменении темы.
