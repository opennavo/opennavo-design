[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · [繁體中文](../../zh-Hant/docs/platforms.md) · [日本語](../../ja-JP/docs/platforms.md) · [Español](../../es-ES/docs/platforms.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/platforms.md) · [Deutsch](../../de-DE/docs/platforms.md) · [Français](../../fr-FR/docs/platforms.md) · [Italiano](../../it-IT/docs/platforms.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="platforms"></a>

# Plataformas

Os mesmos símbolos e regras em cada plataforma; esta página lista o que difere.

<a id="macos-desktop-tauri--vue"></a>

## macOS área de trabalho (Tauri + Vue)

- **Janela:** barra de título de sobreposição com título oculto, semáforos inset 18 × 22, padrão 1280 × 820, mínimo
  1100 × 700. Marque a barra de ferramentas e as áreas de cabeçalho vazias como regiões de arrasto (`data-tauri-drag-region`).
- **Aparência:** guardar `system | light | dark` em configurações; aplicar com `app.set_theme()` antes das janelas mostrarem; sincronizar
  o fundo da janela principal para `surface.base` e sobre `ThemeChanged` ([Temas](theming.md#macos-desktop-tauri)).
- **Popovers e sobreposições** são janelas transparentes, sem bordas (menu bar popovers, guias de permissão,
  alertas): os seus `html` mantém- se transparente com `color-scheme: normal`, o painel desenha `surface.card` com
  `rounded-panel` e sua própria sombra; sombras nativas estão fora para que os limites transparentes nunca aparecem.
- **Barra de menus:** itens são imagens de modelo assim macOS coloriza- os; clicando para alternar o popover; nada ativa o
  janela principal, a menos que o usuário escolha "Abrir".
- **Integração do sistema:** permissões através de configurações do sistema links profundos com uma sobreposição de guia que não toma
  focagem; o menu nativo da aplicação tem itens padrão (Sobre, Configurações,, Esconder, Sair); diálogos que precisam de uma senha
  use o prompt do sistema e diga para que serve.
- **Fontes:** o tipo de letra do sistema via `system-fonts.css`. **Rolar:** a coluna principal rola dentro da janela
  (`OnAppShell scroll="container"`).
- **Específicos do WebKit:** foco de teste e transparência em WKWebView, não só em Chromium — `:focus-visible` e
  a oclusão comporta-se de forma diferente.

<a id="web-nuxt"></a>

## Web (Nuxt)

- Renderizado ao servidor e amigo do cache: o HTML é o mesmo para cada visitante; tema, consentimento e sugestões são
  aplicado no navegador. O script de inicialização do tema é o único script em linha que o sistema de design precisa.
- `OnAppShell scroll="document"` com barra lateral pegajosa e barra de ferramentas de `md`, uma barra compacta abaixo.
- As ligações são ligações reais (`linkAs` = `NuxtLink`), com prefetch na interação em vez de visibilidade.
- Meta: `color-scheme: dark light`; definido `lang` e hreflang por página.

<a id="react--tailwind-css"></a>

## React + Tailwind CSS

Não há React componentes; use os tokens e siga as especificações dos componentes.

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

Ajudadores de temas sem Vue: `applyThemePreference`, `themeBootScript` e `THEME_PREFERENCES` de
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../../../../examples/react-tailwind) mostra uma placa de configuração com uma
mudança de tema, uma opção e botões construídos a partir destas classes.

As classes correspondem à Vue componentes (`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 usa a predefinição:
`presets: [openNavoPreset]` de `@opennavo/design-tokens/tailwind-preset`, mais
`import '@opennavo/design-tokens/tokens.css'`. A mudança de tema é a mesma `data-theme` atributo.

<a id="swiftui-opennavodesign-swift-package"></a>

## SwiftUI (`OpenNavoDesign` Pacote rápido)

- `OnColor.*` cores dinâmicas, `OnSpace.*`, `OnRadius.*`, `OnTypography.*` com `.onTextStyle(_:)`, `OnShadow.*` com
  `.onShadow(_:)`, `OnMotion.*` (durações e `Animation` curvas), `OnLayout.*`.
- Os controles do sistema permanecem os controles do sistema; aplique tokens em fundos, texto e espaçamento em torno deles.
- Tipo usa SF Pro nos tamanhos de fichas; o rastreamento é convertido de em para pontos.

<a id="flutter-opennavo_design-package"></a>

## Flutter (`opennavo_design` pacote)

- `onThemeData(Brightness)` em vez `theme` / `darkTheme`; `OnColors.of(context)` e `OnShadows.of(context)` para token
  cores e sombras (`ThemeExtension`s que animam entre temas).
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; maiúsculas o `label` encadear-se), `OnMotion`
  (`Duration`s e `Cubic` curvas), `OnLayout`.
- Camadas de sombra de inserção não estão disponíveis em Flutter e são omitidos.
