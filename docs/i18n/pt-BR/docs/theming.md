[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · [繁體中文](../../zh-Hant/docs/theming.md) · [日本語](../../ja-JP/docs/theming.md) · [Español](../../es-ES/docs/theming.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/theming.md) · [Deutsch](../../de-DE/docs/theming.md) · [Français](../../fr-FR/docs/theming.md) · [Italiano](../../it-IT/docs/theming.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="theming"></a>

# Temas

Cada OpenNavo app oferece três opções de aparência: **Sistema** (o padrão), **Claro** e **Escuro**. Esta página é
O contrato que cada plataforma implementa.

<a id="the-rule"></a>

## A regra

- Escuro é o valor padrão de cada token.
- O tema leve aplica-se quando o sistema operacional prefere luz **e** a página não forçou a escuridão, ou quando o
  A página força a luz.
- A escolha também pode se aplicar a uma subárvore, por exemplo, uma visualização de terminal sempre escuro dentro de uma página de luz.

`@opennavo/design-tokens/tokens.css` codifica exatamente isso:

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

Apenas tokens que diferem entre temas são repetidos; espaçamento, tipo, raios e movimento são compartilhados. `color-scheme` vem
com o tema, assim controles de formulário nativo e barras de rolagem segui-lo — nunca definir `color-scheme` Em qualquer outro lugar.

| Preferência | `<html>` atributo                   |
| ----------- | ----------------------------------- |
| Sistema     | nenhum (a consulta de mídia decide) |
| Claro       | `data-theme="light"`                |
| Escuro      | `data-theme="dark"`                 |

`applyThemePreference(preference)` de `@opennavo/design-tokens/theme` (reexportado por `@opennavo/design-vue`) conjuntos
ou remove o atributo. Ele também define `data-theme-switching` para um quadro; `base.css` desliga as transições por baixo
então todas as cores mudam no mesmo quadro em vez de cada controle desaparecer separadamente.

<a id="subtrees"></a>

### Subárvores

`data-theme` funciona em qualquer elemento. `base.css` re-aplicações `color: var(--on-text-primary)` ligado `[data-theme]`, porque
uma cor de texto herdada é calculada no tema do pai. Use as sub- árvores com moderação, para superfícies que mantenham um tema em
finalidade: a caixa de imagens e os chips de legenda (`component.lightboxScrim` e `component.captionBg` estão escuros dentro
ambos os temas, então o texto sobre eles deve permanecer claro), screenshots do produto no outro tema, pré-visualizações de terminal.
Nunca use um para "fixar" um componente que falha em um tema.

<a id="web-nuxt-vite"></a>

## Web (Nuxt, Vite)

As páginas são renderizadas no servidor e armazenadas em cache para todos, então o HTML nunca pode conter uma escolha de visitante. Em vez disso:

1. A `<head>` declara ambos os esquemas e executa um pequeno script de bloqueio antes de qualquer folha de estilo:

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   O script lê `localStorage`, aplica-se `data-theme` para um salvo `light` ou `dark`, e não faz outra coisa.
   Com JavaScript fora da página ainda segue o sistema através da consulta de mídia.

2. O interruptor de tema armazena a escolha (`localStorage`, chave por aplicação — OpenNavo usos `onv:theme`; remover a chave para
   Sistema) e chamadas `applyThemePreference`.
3. Renderize o interruptor no seu estado de "Sistema" no servidor e leia a escolha salva após a hidratação, ou a marcação
   não corresponde.
4. Ouça o `storage` event assim que outras abas abertas seguir.

Nunca colocar `data-theme` em `app.head.htmlAttrs`. Nuxt renderiza `app.head` no cliente também, e quando a hidratação
termina o seu gerenciador de cabeça define o atributo de volta, sobre a escolha do script aplicado. Um aplicativo cujo padrão é forçado
tema em vez de System escreve que padrão no servidor render apenas (um Nitro `render:html` gancho), e sua bota
script deve então remover o atributo para uma escolha do sistema salvo.

O CSP deve permitir o script em linha (`script-src 'self' 'unsafe-inline'`, ou um nonce/hash para ele).

<a id="macos-desktop-tauri"></a>

## macOS área de trabalho (Tauri)

Armazene a preferência com as configurações do aplicativo (`appearance: "system" | "light" | "dark"`) e aplicá-lo nativa:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` conjuntos `NSApp.appearance`Relatórios WKWebView `prefers-color-scheme` da aparência eficaz e
actualiza-o ao vivo, por isso **cada janela segue sem nenhuma JavaScript**: a janela principal, menu bar popovers, sobreposições e
alertas. A janela principal espelha adicionalmente a configuração com `applyThemePreference` por isso ele muda no mesmo quadro,
e assim o navegador zombar do aplicativo (sem aparência nativa) pode ser tema.

Além disso:

- Aplique a aparência salva durante a configuração, antes que qualquer janela possa mostrar, ou um tema forçado pisca o outro.
- O fundo da janela é visível antes das pinturas da página e durante o redimensionamento ao vivo: defina- a como `surface.base` da
  tema eficaz (`#131313` / `#F8F8F8`) e actualizá-lo em `WindowEvent::ThemeChanged`.
- Janelas popover transparentes manter `html { background: transparent; color-scheme: normal }` No seu próprio documento;
  o seu painel desenha `surface.card`.
- Menus nativos, alertas e painéis abertos seguem `NSApp.appearance` automaticamente. Ícones de barras de menu são imagens de modelo;
  macOS colore-os para a barra de menu, qualquer que seja o tema do aplicativo.

<a id="swiftui"></a>

## SwiftUI

`OnColor.*` valores são cores dinâmicas que resolvem com a aparência da visão desenhando-os:

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

Ligado macOS definido `NSApp.appearance` para o controle de toda a aplicação, exatamente como em Tauri.

<a id="flutter"></a>

## Flutter

`OnColors` e `OnShadows` are `ThemeExtension`s com `dark` e `light` constantes; `onThemeData(brightness)` constrói uma
Tema material que os carrega:

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

## Remarcar outra aplicação

A camada da marca é o conjunto de tokens que um aplicativo de irmãos pode mudar; tudo o resto permanece idêntico para que os apps se sintam como
uma família ([Marca](brand.md)). Escreva um arquivo de sobreposição com apenas esses tokens e gerar:

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

`--out` escreve os mesmos ficheiros (CSS, predefinições, Dardo, Swift, DTCG) sob a pasta do aplicativo em vez deste repositório.

ou chamar `mergeTokens(base, overrides)` e `buildArtifacts()` de `@opennavo/design-tokens/build` no próprio aplicativo
build. Os objetos se fundem, então `{ "light": "…" }` muda apenas o valor da luz. Execute novamente os testes de contraste contra a mesclada
fichas antes da expedição.

<a id="checklist-for-a-new-screen"></a>

## Lista de verificação para uma nova tela

- [ ] Usa apenas fichas; `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` Não encontra nada no componente.
- [ ] Parece bem na escuridão, luz, e luz com uma subárvore escura se incorpora pré-visualizações.
- [ ] Uso de painéis flutuantes `surface.popover`, segmentos selecionados `component.segmentActive`.
- [ ] Os brilhos construídos a partir de uma cor de sotaque são multiplicados por `effect.accentGlowOpacity`.
- [ ] Nenhum deslocamento de layout ou cor desvanecer quando o tema muda.
