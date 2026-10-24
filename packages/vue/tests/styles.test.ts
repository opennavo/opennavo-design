import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// base.css and system-fonts.css ship in both packages (plain-CSS users import them without a bundler); keep the
// rules identical so the two never drift. Only the leading comment may differ.
const body = (url: URL) =>
  readFileSync(url, 'utf8')
    .replace(/^(\s*\/\*[\s\S]*?\*\/\s*)+/, '')
    .trim();

describe('Shared stylesheets', () => {
  it.each(['base.css', 'system-fonts.css'])('%s matches @opennavo/design-tokens', name => {
    expect(body(new URL(`../src/styles/${name}`, import.meta.url))).toBe(
      body(new URL(`../../tokens/css/${name}`, import.meta.url))
    );
  });
});
