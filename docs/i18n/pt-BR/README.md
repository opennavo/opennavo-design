[English](../../../README.md) · [简体中文](../zh-CN/README.md) · [繁體中文](../zh-Hant/README.md) · [日本語](../ja-JP/README.md) · [Español](../es-ES/README.md) · **Português (Brasil)** · [Русский](../ru-RU/README.md) · [Deutsch](../de-DE/README.md) · [Français](../fr-FR/README.md) · [Italiano](../it-IT/README.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="opennavo-design"></a>

# OpenNavo Design

O sistema de design do [OpenNavo](https://opennavo.com), a loja de aplicativos Homebrew gratuita e de código aberto para Mac, e dos aplicativos da mesma família. Reúne tokens de design, especificações e componentes reutilizáveis para manter a aparência, os textos e as interações consistentes nos temas claro e escuro.

<a id="language-and-release-status"></a>

## Prévia

### Tema escuro

![Tema escuro](../../previews/shell-dark.png)

### Tema claro

![Tema claro](../../previews/shell-light.png)

### Componentes

![Componentes](../../previews/components-dark.png)

## Idioma e estado da versão

Inglês (`en-US`) é o idioma de componente padrão e a fonte para traduções. A galeria começa em Inglês, a menos que um idioma foi explicitamente selecionado através de sua URL ou configurações salvas; o idioma do navegador não o sobrepõe. Componentes também suportam chinês simplificado, chinês tradicional, japonês, espanhol, português brasileiro, russo, alemão, francês e italiano.

A documentação, os comentários do código, as ferramentas de desenvolvimento e as notas de versão do GitHub usam inglês por padrão. As traduções seguem o original em inglês.

Versão 0.1.0 é uma pré-visualização inicial: APIs podem mudar antes de 1.0, e pacotes ainda não são publicados para registros. [SEGURANÇA.](SECURITY.md).

<a id="whats-inside"></a>

## Conteúdo do repositório

| Localização                                                                             | Pacote                    | Pela                                                                                                                                                       |
| --------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`tokens/tokens.json`](../../../tokens/tokens.json)                                     | —                         | A fonte única: cores (escuro + luz), tipo, espaçamento, raios, sombras, movimento, layout                                                                  |
| [`packages/tokens`](../../../packages/tokens)                                           | `@opennavo/design-tokens` | CSS variáveis para ambos os temas, UnoCSS predefinido, Tailwind CSS v4 tema e v3 predefinidos, valores digitados, DTCG arquivos para ferramentas de design |
| [`packages/vue`](../../../packages/vue)                                                 | `@opennavo/design-vue`    | Vue 3 componentes (botões, menus, diálogos, tabelas, shell app ...), assistentes de tema, estilos de base, galeria de componentes                          |
| [`packages/swift`](../../../packages/swift) + [`Package.swift`](../../../Package.swift) | `OpenNavoDesign`          | SwiftUI tokens: cores dinâmicas, espaçamento, tipo, movimento                                                                                              |
| [`packages/flutter`](../../../packages/flutter)                                         | `opennavo_design`         | Flutter tokens como `ThemeExtension`s e a `ThemeData` construtor                                                                                           |
| [`docs`](docs/README.md)                                                                | —                         | A especificação: princípios, cor, tema, componentes, padrões, conteúdo, acessibilidade                                                                     |

Tudo o que está debaixo `packages/*/` que diz gerado é renderizado de `tokens/tokens.json` por `pnpm gen`; IC falha se
um arquivo gerado é editado manualmente ou fora de data.

<a id="quick-start"></a>

## Início rápido

Os pacotes ainda não estão em um registro; dependem diretamente deste repositório (pnpm dependências subdiretórias do git,
SwiftPM, ou um pub `git` dependência), ou copiar `packages/tokens/dist` em sua aplicação.

<a id="vue-3--unocss-vite-tauri"></a>

### Vue 3 + UnoCSS (Vite, Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, system fonts, then UnoCSS
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css';
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';

app.use(createOnUi({ locale })); // a ref with one of the ten locales
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({ presets: [presetWind3(), presetOpenNavo()] });
```

```vue
<OnButton variant="primary" icon="download">Install</OnButton>
<OnCard><p class="text-body text-ink-secondary">Only on this Mac; nothing is uploaded.</p></OnCard>
```

Ver [`packages/vue/README.md`](packages/vue/README.md) em vez Nuxt, digitalização de conteúdo e a lista de componentes.

<a id="react--tailwind-css-v4"></a>

### React + Tailwind CSS v4

```css
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css';
```

```tsx
<button className="h-[34px] rounded-default bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text">
  Install
</button>
```

Um exemplo completo vive em [`examples/react-tailwind`](../../../examples/react-tailwind) (interruptor temático incluído).

<a id="swiftui"></a>

### SwiftUI

```swift
.package(url: "https://github.com/opennavo/opennavo-design.git", branch: "main")

Text("Installed").onTextStyle(OnTypography.bodySm).foregroundStyle(OnColor.statusSuccess)
```

<a id="flutter"></a>

### Flutter

```yaml
opennavo_design:
  git: { url: https://github.com/opennavo/opennavo-design.git, path: packages/flutter }
```

```dart
MaterialApp(theme: onThemeData(Brightness.light), darkTheme: onThemeData(Brightness.dark));
```

<a id="dark-light-and-system"></a>

## Tema escuro, claro e do sistema

Escuro é o padrão; a luz segue o sistema operacional a menos que o aplicativo force um tema. Na web a escolha é uma
`data-theme` atributo ligado `<html>` (`applyThemePreference()`, além de um pequeno script de cabeça para que uma escolha salva nunca flashes);
em Tauri aplicativos que a aparência nativa é definida uma vez e cada janela e visão web segue; SwiftUI e Flutter resolver
cores por aparência. Detalhes: [docs/theming.md](docs/theming.md).

<a id="the-specification"></a>

## Especificação de design

Iniciar com [docs/README.md](docs/README.md). A versão curta dos princípios: conteúdo em primeiro lugar, diga o que vai
acontecer, local primeiro, estável sob o ponteiro, respeitar a plataforma, silencioso por padrão, um sistema para cada aplicativo,
acessível pela construção, cada idioma se encaixa.

<a id="development"></a>

## Desenvolvimento

Requisitos: Node 24, pnpm 10; Swift 5.9+ (Xcode) e Flutter 3.24+ para os pacotes nativos.

```sh
pnpm install
pnpm gen          # render every generated file from tokens/tokens.json (and the icon subset)
pnpm check        # fail if any generated file is stale
pnpm test         # token contrast and output tests, Vue component tests
pnpm typecheck
pnpm gallery      # component gallery at http://127.0.0.1:6106 with a theme and language switch
swift test        # SwiftUI package
(cd packages/flutter && flutter test)
```

Mudar os tokens para `tokens/tokens.json` Só, então corra `pnpm gen` e commit os arquivos gerados com ele. Veja
[CONTRIBUIÇÃO. md](CONTRIBUTING.md).

<a id="license"></a>

## Licença

O código e a documentação são licenciados sob a licença [MIT Licença](../../../LICENSE). A OpenNavo O nome e o logótipo não são licenciados;
ver [MARCAS COMERCIAIS.md](TRADEMARKS.md). Material de terceiros agrupado mantém sua própria licença: o Lucide subconjunto do ícone é ISC
([pacotes/vue/THIRD PARTY NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

Fonte e separado MIT Autorização: [PROVENANÇA. md](PROVENANCE.md).
