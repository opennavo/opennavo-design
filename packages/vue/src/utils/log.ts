// Log line types determine viewer colors: "==>" headings, "###… 62.4%" progress bars, Error:/fatal:/curl errors and
// success markers (🍺, "was successfully installed"). Inspect prefixes and common markers only; never parse content.

export type LogLineKind = 'heading' | 'success' | 'progress' | 'error' | 'plain';

const PROGRESS = /^#{3,}[\s#]*\d{1,3}(?:\.\d+)?%\s*$/;
const SUCCESS = /^🍺|\bwas successfully (?:installed|upgraded|uninstalled)\b/;
const ERROR = /^(?:Error|fatal):|^curl: \(\d+\)/i;

export function classifyLogLine(line: string): LogLineKind {
  if (line.startsWith('==>')) return 'heading';
  if (PROGRESS.test(line)) return 'progress';
  if (ERROR.test(line)) return 'error';
  if (SUCCESS.test(line)) return 'success';
  return 'plain';
}
