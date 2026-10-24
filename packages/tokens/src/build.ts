// Render every platform artifact from tokens.json. Paths are relative to the repository root; generate.ts writes them
// and tests check that committed outputs were not edited by hand.
import { renderDart } from './dart.ts';
import { renderTokenReference } from './docs.ts';
import { renderDtcg } from './dtcg.ts';
import { collectCssVariables } from './model.ts';
import type { JsonObject } from './model.ts';
import { renderSwift } from './swift.ts';
import { renderCss, renderTailwindCss, renderTailwindPreset, renderTokensTs, renderUnoPreset } from './web.ts';

export * from './model.ts';
export {
  renderCss,
  renderDart,
  renderDtcg,
  renderSwift,
  renderTailwindCss,
  renderTailwindPreset,
  renderTokenReference,
  renderTokensTs,
  renderUnoPreset
};

export const WEB_DIST = 'packages/tokens/dist';

export function buildArtifacts(source: JsonObject): Record<string, string> {
  const variables = collectCssVariables(source);
  return {
    [`${WEB_DIST}/tokens.css`]: renderCss(variables),
    [`${WEB_DIST}/tokens.ts`]: renderTokensTs(source, variables),
    [`${WEB_DIST}/uno-preset.ts`]: renderUnoPreset(source, variables),
    [`${WEB_DIST}/tailwind.css`]: renderTailwindCss(source, variables),
    [`${WEB_DIST}/tailwind-preset.ts`]: renderTailwindPreset(source, variables),
    [`${WEB_DIST}/tokens.json`]: `${JSON.stringify(source, null, 2)}\n`,
    [`${WEB_DIST}/dtcg/dark.tokens.json`]: renderDtcg(source, 'dark'),
    [`${WEB_DIST}/dtcg/light.tokens.json`]: renderDtcg(source, 'light'),
    'packages/flutter/lib/src/tokens.g.dart': renderDart(source),
    'packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift': renderSwift(source),
    'docs/reference/tokens.md': renderTokenReference(source)
  };
}
