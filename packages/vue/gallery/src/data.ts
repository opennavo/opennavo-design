// Made-up sample data: invented app names, original abstract artwork in ../public, no real products.

export interface SampleApp {
  id: string;
  name: string;
  summary: string;
  /** app: letter-tile fallback; terminal: command-line tile. */
  variant: 'app' | 'terminal';
  icon?: string;
  accent?: string;
  version: string;
  /** Megabytes. */
  size: number;
  addedAt: string;
  status: 'updating' | 'outdated' | 'latest' | 'pinned';
  dependency?: boolean;
}

export const sampleApps: SampleApp[] = [
  {
    id: 'orbitfold',
    name: 'Orbitfold',
    summary: 'Plan projects on a calm, endless canvas',
    variant: 'app',
    icon: '/sample-orbit.svg',
    version: '4.92.1',
    size: 2100,
    addedAt: '2025-12-03',
    status: 'updating'
  },
  {
    id: 'prismark',
    name: 'Prismark',
    summary: 'Vector sketching with live color harmonies',
    variant: 'app',
    icon: '/sample-prism.svg',
    version: '153.0.7',
    size: 1400,
    addedAt: '2025-11-18',
    status: 'outdated'
  },
  {
    id: 'tidelane',
    name: 'Tidelane',
    summary: 'Sync folders between your devices',
    variant: 'app',
    icon: '/sample-wave.svg',
    version: '1.139.1',
    size: 652,
    addedAt: '2026-03-02',
    status: 'outdated'
  },
  {
    id: 'quillwisp',
    name: 'Quillwisp',
    summary: 'Fast notes with tags and backlinks',
    variant: 'app',
    accent: '#7B72EE',
    version: '2.6.1',
    size: 318,
    addedAt: '2025-08-21',
    status: 'pinned'
  },
  {
    id: 'hexwalk',
    name: 'hexwalk',
    summary: 'Browse binary files from the terminal',
    variant: 'terminal',
    version: '26.9.0',
    size: 98,
    addedAt: '2026-09-12',
    status: 'outdated'
  },
  {
    id: 'loomctl',
    name: 'loomctl',
    summary: 'Run and watch background jobs',
    variant: 'terminal',
    version: '15.2.0',
    size: 6.1,
    addedAt: '2026-07-30',
    status: 'latest'
  },
  {
    id: 'libtide',
    name: 'libtide',
    summary: 'Dependency · used by Tidelane and loomctl',
    variant: 'terminal',
    version: '10.49',
    size: 4.2,
    addedAt: '2026-07-30',
    status: 'latest',
    dependency: true
  }
];

export const letterTiles = [
  { name: 'Vector Sketch', accent: '#2F8FEF' },
  { name: 'Quillwisp', accent: null },
  { name: '拾光笔记', accent: '#1E9E72' },
  { name: 'Lantern Reader', accent: null },
  { name: 'Pebblestack', accent: null },
  { name: 'Fernlight Studio', accent: '#E0663F' }
];

export const terminalTools = ['hexwalk', 'loomctl', 'python@3.12', 'zestq', 'tarpit', 'jsonpeek', 'pagebake', 'ui'];

export const sampleLog = [
  'orbitfold 4.92.1 -> 4.93.0',
  '==> Upgrading orbitfold',
  '==> Downloading https://downloads.example.com/orbitfold/4.93.0/Orbitfold.dmg',
  '############################################               62.4%'
];

export const longLog = Array.from({ length: 600 }, (_, index) =>
  index % 50 === 0
    ? `==> Step ${index / 50 + 1}`
    : index === 599
      ? '🍺  orbitfold was successfully upgraded!'
      : index === 333
        ? 'Error: checksum mismatch, retrying download'
        : `line ${index}`
);

export const articleHtml = `<h2 class="on-md-heading-1">What’s new in 4.93</h2>
<p>Boards now <strong>sync across devices</strong> in a few seconds, and the canvas keeps its place when you switch spaces.</p>
<ul><li>Press <code><span class="on-code-word">⌘</span> <span class="on-code-word">K</span></code> to jump to any board</li><li>Export to PDF with page breaks you choose</li></ul>
<h3 class="on-md-heading-2">Fixes</h3>
<ol><li>Large boards no longer stutter while zooming</li><li>Comments keep their order after an undo</li></ol>
<pre><code>orbitfold export --format pdf --pages 1-4</code></pre>
<blockquote>Patch release: no separate notes.</blockquote>
<table><thead><tr><th>Platform</th><th class="on-md-right">Size</th></tr></thead><tbody><tr><td>arm64</td><td class="on-md-right">142 MB</td></tr><tr><td>x86-64</td><td class="on-md-right">151 MB</td></tr></tbody></table>
<p><a href="#markdown">Read the full changelog</a></p>`;
