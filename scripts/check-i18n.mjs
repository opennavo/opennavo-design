import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const manifest = JSON.parse(read('docs/i18n/manifest.json'));
const expected = ['en-US', 'zh-CN', 'zh-Hant', 'ja-JP', 'es-ES', 'pt-BR', 'ru-RU', 'de-DE', 'fr-FR', 'it-IT'];
assert.deepEqual([...manifest.locales].sort(), [...expected].sort());
const code = text => [...text.matchAll(/^[ \t]*```[^\n]*\n[\s\S]*?^[ \t]*```/gm)].map(match => match[0]);
const catalogRoot = 'packages/vue/gallery/src/messages/';
const source = JSON.parse(read(catalogRoot + 'en-US.json'));
const placeholders = text => [...text.matchAll(/\{\w+\}/g)].map(match => match[0]).sort();
for (const locale of expected) {
  const catalog = JSON.parse(read(catalogRoot + locale + '.json'));
  assert.deepEqual(Object.keys(catalog).sort(), Object.keys(source).sort(), `${locale}: gallery keys`);
  for (const [key, value] of Object.entries(catalog)) {
    assert.ok(typeof value === 'string' && value.trim(), `${locale}: empty translation for ${key}`);
    assert.deepEqual(placeholders(value), placeholders(key), `${locale}: placeholders in ${key}`);
  }
}
for (const { path, sha256: hash } of manifest.sources) {
  const original = read(path);
  assert.equal(
    createHash('sha256').update(original).digest('hex'),
    hash,
    `${path}: source changed; update all translations`
  );
  for (const locale of expected.filter(locale => locale !== 'en-US')) {
    const translatedPath = `docs/i18n/${locale}/${path}`;
    const translated = read(translatedPath);
    for (const email of original.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi) ?? []) {
      assert.ok(translated.includes(email), `${translatedPath}: contact address changed`);
    }
    assert.deepEqual(code(translated), code(original), `${translatedPath}: code examples or license text changed`);
    for (const match of translated.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (!target || /^(?:[a-z]+:|\/)/i.test(target)) continue;
      assert.ok(existsSync(resolve(root, dirname(translatedPath), target)), `${translatedPath}: broken link ${target}`);
    }
  }
}
console.log(
  `Verified ${expected.length} gallery languages and ${manifest.sources.length} documents in all ten languages.`
);
