[English](../../../README.md) · [简体中文](../../zh-CN/docs/README.md) · [繁體中文](../../zh-Hant/docs/README.md) · [日本語](../../ja-JP/docs/README.md) · [Español](../../es-ES/docs/README.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/README.md) · [Deutsch](../../de-DE/docs/README.md) · [Français](../../fr-FR/docs/README.md) · [Italiano](../../it-IT/docs/README.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="opennavo-design--specification"></a>

# OpenNavo Concepção — Especificações

OpenNavo Design é o sistema de design do OpenNavo aplicações: o macOS cliente (Tauri + Vue), o sítio web (Nuxt) e a
apps que os seguem. Esta pasta é o padrão escrito. Os pacotes de código implementam- no, e a referência do token é
geradas a partir da mesma fonte, então os números aqui sempre coincidem com quais naves.

Leia nesta ordem pela primeira vez:

1. [Princípios](principles.md) — o que o sistema optimiza, e as regras que resolvem os argumentos.
2. [Cor](color.md) — superfícies, texto, fronteiras, marca, estatuto; os temas escuros e claros e as suas regras de contraste.
3. [Temas](theming.md) — como funcionam na web, na forma de escuro, claro e "seguir o sistema", Tauri, Flutter e SwiftUI,
   e como outro aplicativo re-marca o sistema.
4. [Tipografia](typography.md), [Disposição](layout.md) (espaçamento, raio, elevação, shell da aplicação), [Moção](motion.md),
   [Iconografia](iconography.md).
5. [Componentes](components.md) — o Vue conjunto de componentes e quando usar cada peça.
6. [Padrões](patterns.md) — navegação, listas, formulários, feedback, acções destrutivas, carregamento e estados vazios,
   permissões, menus de barras.
7. [Conteúdo](content.md) — as regras de redacção, os números e as datas, as dez línguas de interface.
8. [Acessibilidade](accessibility.md) e [Plataformas](platforms.md) (macOS ambiente de trabalho, web, Flutter, SwiftUI).
9. [Marca](brand.md) — a camada da marca, os nomes e os logótipos.
10. [Adopção](adoption.md) — iniciar uma nova aplicação no sistema, e mover uma aplicação que copiou OpenNavoSão pacotes.

Referência: [todos os tokens](reference/tokens.md) (gerado de `tokens/tokens.json`; não edite à mão).

<a id="conventions-in-this-spec"></a>

## Convenções neste domínio

- **Deve** e **nunca** são regras; uma revisão deve bloqueá-las. **Deve** é o padrão que precisa de uma razão para
  Tudo o resto é orientação.
- Os nomes dos token são escritos como seus JSON via (`surface.card`), com a CSS variável (`--on-surface-card`) ou a
  classe de utilitário (`bg-surface-card`) onde o contexto é código.
- As medições são CSS pixels (pontos nas plataformas Apple, pixels lógicos Flutter).
- Exemplos de OpenNavo. Um aplicativo de irmãos mantém a estrutura e troca a camada da marca ([Marca](brand.md)).
