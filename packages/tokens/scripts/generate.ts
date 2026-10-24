// Generate every artifact from tokens/tokens.json. `--check` fails instead of writing when an output is stale.
// `--overrides <file>` deep-merges a brand or app override (docs/theming.md) before rendering, and `--out <dir>`
// writes the outputs under another directory (an app's own copy) instead of this repository.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildArtifacts, mergeTokens } from '../src/build.ts';
import type { JsonObject } from '../src/build.ts';

const root = resolve(fileURLToPath(new URL('../../..', import.meta.url)));
const args = process.argv.slice(2);
const check = args.includes('--check');
const option = (name: string) => {
  const index = args.indexOf(name);
  if (index < 0) return undefined;
  const value = args[index + 1];
  if (!value) throw new Error(`${name} needs a value`);
  return value;
};
const overrides = option('--overrides');
const out = option('--out');
const target = (path: string) => (out ? join(resolve(out), path) : join(root, path));
let source = JSON.parse(readFileSync(join(root, 'tokens/tokens.json'), 'utf8')) as JsonObject;
if (overrides) source = mergeTokens(source, JSON.parse(readFileSync(resolve(overrides), 'utf8')) as JsonObject);

const stale: string[] = [];
for (const [path, content] of Object.entries(buildArtifacts(source))) {
  const file = target(path);
  if (check) {
    if (!existsSync(file) || readFileSync(file, 'utf8') !== content) stale.push(path);
    continue;
  }
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
  console.log(file.startsWith(root) ? file.slice(root.length + 1) : file);
}
if (stale.length) {
  console.error(`Generated files are out of date; run pnpm gen:\n${stale.map(path => `  ${path}`).join('\n')}`);
  process.exit(1);
}
