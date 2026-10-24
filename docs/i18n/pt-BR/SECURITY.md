[English](../../../SECURITY.md) · [简体中文](../zh-CN/SECURITY.md) · [繁體中文](../zh-Hant/SECURITY.md) · [日本語](../ja-JP/SECURITY.md) · [Español](../es-ES/SECURITY.md) · **Português (Brasil)** · [Русский](../ru-RU/SECURITY.md) · [Deutsch](../de-DE/SECURITY.md) · [Français](../fr-FR/SECURITY.md) · [Italiano](../it-IT/SECURITY.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

# Política de segurança

## Relatar uma vulnerabilidade

Não divulgue vulnerabilidades em issues ou pull requests públicos. Envie para **admin@opennavo.com** o pacote e a versão ou commit afetados, as etapas de reprodução e o impacto esperado. Remova credenciais e dados pessoais dos anexos.

Aceitamos relatos sobre tratamento inseguro de HTML e URLs, dependências vulneráveis e exposição acidental de dados. Use dados fictícios e teste apenas aplicativos e dispositivos sob seu controle. Investigaremos e coordenaremos a divulgação com quem relatou o problema, sem garantir um prazo de resposta.

## Versões suportadas

Durante a prévia inicial, as correções se destinam à `main` e à versão publicada mais recente, quando houver. Prévias antigas e forks não recebem manutenção separada.

## Responsabilidades de integração

`OnMarkdownView` renderiza o HTML fornecido pelo aplicativo que o utiliza. Higienize HTML não confiável antes de passá-lo ao componente e registre apenas dados SVG confiáveis. O aplicativo é responsável pelo acesso aos dados, pela autenticação e pelas políticas de conteúdo. As preferências de idioma e tema da galeria são armazenadas localmente.
