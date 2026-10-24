[English](../../../motion.md) · [简体中文](../../zh-CN/docs/motion.md) · [繁體中文](../../zh-Hant/docs/motion.md) · [日本語](../../ja-JP/docs/motion.md) · [Español](../../es-ES/docs/motion.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/motion.md) · [Deutsch](../../de-DE/docs/motion.md) · [Français](../../fr-FR/docs/motion.md) · [Italiano](../../it-IT/docs/motion.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="motion"></a>

# Moção

Motion explica uma mudança; ela nunca decora. A maioria da interface não anima em tudo.

<a id="tokens"></a>

## Tokens de design

| Token de design   | Valor                            | Utilização                                                                        |
| ----------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| `duration-fast`   | 120 ms                           | Muda de cor ao passar, pressionar e focar; alterna; cada saída                    |
| `duration-base`   | 200 ms                           | Janelas, folhas, paleta de comandos e brindes                                     |
| `duration-slow`   | 320 ms                           | Preenchimento de progresso, medidores de varredura, entradas de herói e marketing |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Padrão para mudanças de estado e pequenos movimentos                              |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | Sobreposições que chegam                                                          |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | Qualquer coisa que saia, sempre com `duration-fast`                               |

<a id="what-moves"></a>

## O que se move

- **Alterações do Estado** desbotar cores com `duration-fast` (`transition-colors duration-fast ease-standard` em cada
  controlo interactivo).
- **Sobreposições** entre em 200 ms com a curva enfatizada e deixe em 120 ms com a curva de saída: diálogos centrados
  desvanecer e escalar a partir de 0,96, folhas deslizar da borda, a paleta de comando cai 8 px do topo, torradas subir
  8 px. O scrim desvanece-se com o seu painel. Menus e dicas aparecem sem animação.
- **Progresso** anima seu valor, nunca salta para trás, e mostra um estado indeterminado apenas até o primeiro real
  O número chega.
- **Páginas de marketing** pode usar o movimento ambiente lento (um brilho respiratório, anéis tracejados à deriva, ícones flutuantes) na
  apenas compositor (transformar, opacidade).

<a id="what-never-moves"></a>

## O que nunca se move

- Disposição. O conteúdo não desliza, colapsa ou refluxo enquanto o usuário lê ou digita; veja
  [Princípios › Estável sob o ponteiro](principles.md#4-stable-under-the-pointer).
- Interruptores de tema: as cores mudam em uma única moldura (`applyThemePreference` desativa transições para esse frame).
- Números que atualizam no local (monitores, contadores) mudam sem tweening.

<a id="reduced-motion"></a>

## Movimento reduzido

`base.css` braça cada animação e transição para 0,01 ms abaixo `prefers-reduced-motion: reduce`, e remove suave
rolling. Não confie em uma animação para transmitir informações; o estado final deve fazer sentido por si só.
