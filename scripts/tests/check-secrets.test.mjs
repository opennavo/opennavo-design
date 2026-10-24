import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { snapshot } from '../check-secrets.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'design-scan-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', args, { cwd: root, stdio: 'pipe' });
  git('init');
  return { root, git };
}

test('staged scan reads the index, not a cleaned working copy', t => {
  const { root, git } = fixture(t);
  writeFileSync(join(root, 'config.txt'), 'staged content');
  git('add', 'config.txt');
  writeFileSync(join(root, 'config.txt'), 'different working content');
  snapshot(root, join(root, 'snapshot'), 'staged');
  assert.equal(readFileSync(join(root, 'snapshot/config.txt'), 'utf8'), 'staged content');
});

test('worktree scan includes untracked files and tracked files that match ignore rules', t => {
  const { root, git } = fixture(t);
  writeFileSync(join(root, 'tracked.txt'), 'tracked');
  git('add', 'tracked.txt');
  writeFileSync(join(root, '.gitignore'), 'tracked.txt\nignored.txt\nsnapshot/\n');
  writeFileSync(join(root, 'ignored.txt'), 'local only');
  writeFileSync(join(root, 'new.txt'), 'new');
  snapshot(root, join(root, 'snapshot'), 'worktree');
  assert.ok(existsSync(join(root, 'snapshot/tracked.txt')));
  assert.ok(existsSync(join(root, 'snapshot/new.txt')));
  assert.ok(!existsSync(join(root, 'snapshot/ignored.txt')));
});

test('staged environment files block scanning even if later ignored', t => {
  const { root, git } = fixture(t);
  writeFileSync(join(root, '.env.local'), 'EXAMPLE=value');
  git('add', '.env.local');
  writeFileSync(join(root, '.gitignore'), '.env*\n');
  assert.throws(() => snapshot(root, join(root, 'snapshot'), 'staged'), /Environment file/);
});

test('symlinks cannot pull files from outside the repository into the scanner', t => {
  const { root, git } = fixture(t);
  symlinkSync('/outside-repository', join(root, 'link'));
  git('add', 'link');
  assert.throws(() => snapshot(root, join(root, 'snapshot'), 'staged'), /non-regular file/);
});
