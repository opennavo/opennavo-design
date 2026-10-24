[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · [繁體中文](../../zh-Hant/docs/adoption.md) · [日本語](../../ja-JP/docs/adoption.md) · [Español](../../es-ES/docs/adoption.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/adoption.md) · [Deutsch](../../de-DE/docs/adoption.md) · [Français](../../fr-FR/docs/adoption.md) · [Italiano](../../it-IT/docs/adoption.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="adopting-the-system-in-an-app"></a>

# Adotar o sistema em uma aplicação

Como um novo aplicativo começa em OpenNavo Design, e como um aplicativo que copiou OpenNavoOs pacotes mais cedo vão para ele.

<a id="a-new-tauri--vue-app"></a>

## Uma nova Tauri + Vue app

1. **Dependências** (até que os pacotes sejam publicados, use dependências de subdiretório git ou um link de espaço de trabalho):

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **Estilos e plug- in** em `main.ts`, nesta ordem:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** com o predefinido, escaneando o pacote de componentes também para que seus utilitários sejam gerados:

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

   In `vite.config.ts` adicionar `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`: as fontes dos navios de carga, e
   o pré-bulling faria uma segunda cópia de seus registros locais e de ícones, então `createOnUi` e `registerIcons` seria
   não atingir os componentes.

4. **Configuração da aparência**: adicionar `appearance: system | light | dark` para as configurações do aplicativo, aplique-o com
   `app.set_theme()` em Rust antes das janelas mostrarem, sincronize o fundo da janela principal e espelhe- o na janela principal
   com `applyThemePreference()` ([Temas › macOS área de trabalho](theming.md#macos-desktop-tauri)). Oferecer a escolha em
   Configurações › Geral como um controle segmentado: Sistema / Luz / Escuro.
5. **Camada de marca**: escrever o app's `brand.json` com o seu sotaque ([Marca](brand.md)), gerar com
   `--overrides brand.json --out <app>/design`, e importar o gerado `tokens.css` Em vez do pacote um.
6. **Estrutura do app**: `OnAppShell` com `OnSidebar` (a marca da aplicação na `brand` entalhe), `OnToolbar`, e a anatomia da página
   em [Padrões](patterns.md#page-anatomy).
7. **Línguas**: enviar todos os dez locais para as cordas próprias do aplicativo; os componentes trazem os deles.

Uma aplicação Web (Nuxt) adita `@unocss/nuxt`, o mesmo CSS ordem em `css: [...]`, e o script de arranque da cabeça
([Temas › Web](theming.md#web-nuxt-vite)). A React usos de aplicativos `tailwind.css` e `base.css` a partir do pacote de fichas
([Plataformas › React](platforms.md#react--tailwind-css)).

<a id="moving-an-app-that-copied-opennavos-packages"></a>

## Movendo uma aplicação que copiava OpenNavoPacotes

Para uma aplicação que copiou `packages/tokens` e `packages/ui`, este exemplo utiliza a ficção `example-app`,
com `@example-app/tokens`, `--ex-` variáveis e `Ex*` componentes. As classes de utilitário são as mesmas
(`bg-surface-card`, `text-ink-secondary` ...), portanto, a maior parte do movimento é importações e nomes:

| Antes (cópia)                                           | Após (sistema)                                                                                     |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (ou a cópia de marca gerada pelo aplicativo)                  |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                                          |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                                |
| `var(--ex-…)` em estilos de aplicativos                 | `var(--on-…)`                                                                                      |
| `ExLogo` dentro da barra lateral                        | o componente de logotipo próprio da aplicação em `OnSidebar`'s `brand` slot                        |
| Valores locais das fichas que diferem                   | a `brand.json` sobrescrever se eles são tokens de marca; caso contrário, adotar o valor do sistema |

Passos:

1. Listar as diferenças de símbolos da aplicação (`diff` a sua `tokens.json` contra `tokens/tokens.json`). As fichas de marca entram em
   `brand.json`; qualquer outra diferença é um erro para soltar ou uma proposta para o sistema.
2. Substituir as importações e prefixos (um codemod ou pesquisa- e- substituir: `Ex` → `On`, `--ex-` → `--on-`, nomes das embalagens).
3. Mova componentes específicos do aplicativo (aqueles que conhecem os dados do aplicativo) para o aplicativo; mantenha os genéricos do sistema.
4. Execute o aplicativo em ambos os temas e compare com a galeria; execute os testes de contraste contra os tokens mesclados.
5. Apagar a cópia `packages/tokens` e `packages/ui`.

Um aplicativo não pode bifurcar os neutros, espaçamento, tipo ou componentes. Se precisar de algo que o sistema não possua, adicioná- lo a
o primeiro sistema ([CONTRIBUIÇÃO. md](../CONTRIBUTING.md)).

<a id="checklist"></a>

## Lista de verificação

- [ ] Tokens from `@opennavo/design-tokens` (ou uma cópia de marca gerada a partir dele); sem cores codificadas.
- [ ] Definição de aparência com Sistema / Luz / Escuro; sem flash no início; cada janela segue.
- [ ] Componentes de `@opennavo/design-vue`; a marca da aplicação através de `brand` slots.
- [ ] Dez linguagens de interface.
- [ ] Ambos os temas verificados; testes de contraste verde para a marca substitui.
