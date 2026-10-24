import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const scanner = 'github.com/zricethezav/gitleaks/v8@v8.24.3';
const git = (root, args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

export function snapshot(root, destination, mode) {
  mkdirSync(destination, { recursive: true });
  if (mode === 'staged') {
    git(root, ['checkout-index', '--all', `--prefix=${destination}/`]);
  }
  const paths = [
    ...new Set(
      git(root, ['ls-files', '-z', '--cached', ...(mode === 'worktree' ? ['--others', '--exclude-standard'] : [])])
        .split('\0')
        .filter(Boolean)
    )
  ];
  for (const path of paths) {
    const source = join(mode === 'staged' ? destination : root, path);
    let stat;
    try {
      stat = lstatSync(source);
    } catch (error) {
      if (error.code === 'ENOENT' && mode === 'worktree') continue;
      throw new Error(`Cannot inspect file: ${path}`);
    }
    if (!stat.isFile()) throw new Error(`Manual review required for non-regular file: ${path}`);
    if (/(^|\/)\.env(?:\.|$)/.test(path) && !/\.(example|sample|template)$/.test(path)) {
      throw new Error(`Environment file must not be published: ${path}`);
    }
    if (mode === 'worktree') {
      const target = join(destination, path);
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(source, target);
    }
  }
  return paths.length;
}

export function main(mode) {
  if (!['worktree', 'staged', 'history'].includes(mode))
    throw new Error('Usage: node scripts/check-secrets.mjs worktree|staged|history');
  const root = git(process.cwd(), ['rev-parse', '--show-toplevel']).trim();
  const temporary = mkdtempSync(join(tmpdir(), 'design-secrets-'));
  try {
    const target = mode === 'history' ? root : join(temporary, 'snapshot');
    if (mode !== 'history') snapshot(root, target, mode);
    // Use built-in rules only; repository allowlists cannot silently suppress findings.
    const report = join(temporary, 'report.json');
    const result = spawnSync(
      'go',
      [
        'run',
        scanner,
        mode === 'history' ? 'git' : 'dir',
        target,
        ...(mode === 'history' ? ['--log-opts=--all'] : []),
        '--ignore-gitleaks-allow',
        '--redact',
        '--no-banner',
        '--log-level=error',
        '--report-format=json',
        `--report-path=${report}`
      ],
      { cwd: temporary, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }
    );
    if (result.error || ![0, 1].includes(result.status))
      throw new Error('Secret scanner could not run. Check Go and module-download access.');
    const findings = JSON.parse(readFileSync(report, 'utf8'));
    if (!Array.isArray(findings)) throw new Error('Invalid scanner report.');
    for (const finding of findings) console.error(`${finding.File}:${finding.StartLine}: ${finding.RuleID}`);
    if (result.status !== 0 || findings.length)
      throw new Error('Secret scan failed; inspect the reported locations privately.');
    console.log(`Secret scan passed (${mode}).`);
  } finally {
    rmSync(temporary, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    if (process.argv.length !== 3) throw new Error('Specify exactly one scan mode.');
    main(process.argv[2]);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
