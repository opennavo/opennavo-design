[English](../../../CONTRIBUTING.md) · [简体中文](../zh-CN/CONTRIBUTING.md) · [繁體中文](../zh-Hant/CONTRIBUTING.md) · [日本語](../ja-JP/CONTRIBUTING.md) · [Español](../es-ES/CONTRIBUTING.md) · **Português (Brasil)** · [Русский](../ru-RU/CONTRIBUTING.md) · [Deutsch](../de-DE/CONTRIBUTING.md) · [Français](../fr-FR/CONTRIBUTING.md) · [Italiano](../it-IT/CONTRIBUTING.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="contributing"></a>

# Contribuir

Obrigado por ajudares. OpenNavo O design é extraído do OpenNavo aplicativos e é mantido ao lado deles; alterações
deve manter todos os aplicativos da família trabalhando.

<a id="ground-rules"></a>

## Regras de base

- **Primeiro os tokens.** Alterar `tokens/tokens.json`, correr `pnpm gen`, commit os arquivos gerados com a alteração. Nunca
  editar um arquivo marcado gerado .
- **Ambos os temas.** Cada novo token de cor tem um escuro `value` e, quando difere, `light` valor. Adicionar ou atualizar uma
  teste de contraste para qualquer novo par texto/fundo (`packages/tokens/tests`).
- **Papel, não aparência.** Se um token existente tiver a cor certa, mas o trabalho errado, adicione um token para o trabalho
  ([docs/principles.md](docs/principles.md#rules-that-settle-arguments)).
- **Os componentes permanecem genéricos.** Sem nomes de produtos, formas de dados de produtos ou chamadas de rede `packages/vue`; passe de apps
  conteúdo através de adereços e slots.
- **Os médicos avançam com código.** Um novo token, componente prop ou comportamento atualiza a página correspondente `docs/`.
- **Inglês primeiro.** Documentação, comentários de fonte, erros e ferramentas de desenvolvimento padrão para Inglês. Inglês (`en-US`) é a língua de origem para strings de componentes; preservar conteúdo explicitamente localizado.
- **Dez línguas.** Novas cadeias de componentes entram em todos os dez ficheiros de mensagens `packages/vue/src/messages`, com as chaves e placeholders correspondentes. O inglês continua a ser o padrão; não infer um idioma das configurações do navegador.

<a id="checks"></a>

## Controlos

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

O CI executa os mesmos comandos.

<a id="commits-and-pull-requests"></a>

## Commits e pedidos de retirada

Pedidos de puxar pequenos e focados com uma breve descrição das alterações visíveis pelo utilizador e das capturas de ecrã em ambos os temas para
qualquer coisa visual. Ao contribuir você concorda que sua contribuição está licenciada sob o MIT Licença disto
repositório.

<a id="security-review-before-commits"></a>

## Revisão de segurança antes dos commits

Executar `pnpm secrets:worktree` durante a preparação de alterações, em seguida, stage os arquivos pretendidos e executar `pnpm secrets:staged`.
Executar `pnpm secrets:history` Antes de publicar o histórico acessível. Estes comandos requerem Go 1.23+ e acesso à rede
para o primeiro download do pintado Gitleaks scanner. Uma falha do scanner bloqueia a verificação; não a contorne.

Revise cada arquivo em estágio e o diff completo, incluindo alterações existentes, arquivos gerados e ativos.
Não cometa credenciais, chaves privadas, configuração de ambiente real, endereços de serviço privado ou dados pessoais.
Usar espaços e acessórios fictícios. Ignorar um ficheiro não o protege uma vez que seja seguido ou encenado.
Confirmar que os anexos binários podem ser tornados públicos. Os resultados da pesquisa só mostram os caminhos, números de linhas e IDs de regras;
uma verificação limpa não substitui a revisão manual. Verifique novamente após qualquer alteração de conteúdo encenada.

Relatar vulnerabilidades em privado usando [SEGURANÇA.](SECURITY.md)Nunca inclua segredos em questões públicas ou logs.

Use mensagens do Commit Convencional Inglês e Inglês GitHub lançar títulos e notas. Descreva o que mudou,
Não descreva os testes locais como passando por um CI remoto. API estabilidade não é
prometido antes de 1.0; quebra de documento alterações no changelog.

<a id="translations-and-previews"></a>

## Traduções e pré-visualizações

O inglês é a fonte para todos os dez idiomas: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` e `it-IT`. Mensagens de componentes ao vivo `packages/vue/src/messages`; mensagens da galeria ao vivo
`packages/vue/gallery/src/messages`. Traduzir cópia de história visível, bem como navegação e etiquetas acessíveis.
Mantenha os nomes dos componentes, valores de enum, URLs, amostras de código e originais de licença inalterados.

Os espelhos de documentação completa vivem em `docs/i18n/<locale>/`, seguindo os caminhos do repositório em inglês.
Novas traduções começam como rascunhos off-line assistidos por máquina e precisam de revisão de linguagem, especialmente técnico e legal
prosa. O inglês continua a ser autoritário. Reveja o vocabulário português brasileiro separadamente do português genérico.
Quando o inglês mudar, atualize os arquivos correspondentes em cada idioma e, em seguida, grave o seu SHA-256 em
`docs/i18n/manifest.json`Corre. `pnpm check:i18n` verificar a cobertura, a frescura da fonte, os links e os exemplos de código.
Não atualize o manifesto apenas para silenciar uma falha sem atualizar as traduções.

screenshots README em `docs/previews` mostrar dados de amostra fictícios da galeria real. Capturá- los com
uso do navegador no tema e idioma documentados, sem cromo do navegador ou informações pessoais.
