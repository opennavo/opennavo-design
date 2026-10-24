import { useState } from 'react';
import { THEME_PREFERENCES, applyThemePreference, isThemePreference } from '@opennavo/design-tokens/theme';
import type { ThemePreference } from '@opennavo/design-tokens/theme';

const KEY = 'example:theme';
const LABELS: Record<ThemePreference, string> = { system: 'System', light: 'Light', dark: 'Dark' };

function savedPreference(): ThemePreference {
  const value = localStorage.getItem(KEY);
  return isThemePreference(value) ? value : 'system';
}

/** The same classes the Vue components use, written as Tailwind CSS v4 utilities. */
export function App() {
  const [theme, setTheme] = useState<ThemePreference>(savedPreference);
  const [notify, setNotify] = useState(true);

  function choose(next: ThemePreference) {
    setTheme(next);
    if (next === 'system') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, next);
    applyThemePreference(next);
  }

  return (
    <main className="min-h-screen bg-surface-base px-7 py-8 text-ink-primary">
      <div className="mx-auto max-w-[720px]">
        <h1 className="m-0 text-title1">Settings</h1>
        <p className="m-0 mt-1 text-body-sm text-ink-secondary">Saved on this device only.</p>

        <section className="mt-6 overflow-hidden rounded-big border border-line-subtle bg-surface-card">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <span id="appearance" className="text-body-sm">
              Appearance
            </span>
            <div
              role="radiogroup"
              aria-labelledby="appearance"
              className="inline-flex gap-0.5 rounded-default border border-line-subtle bg-surface-inset p-[3px]"
            >
              {THEME_PREFERENCES.map(option => (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={theme === option}
                  onClick={() => choose(option)}
                  className={`h-6 rounded-small border-none px-2.5 text-xs font-medium transition-colors duration-fast ease-standard focus-visible:shadow-focus-ring focus-visible:outline-none ${
                    theme === option
                      ? 'bg-component-segment-active text-ink-primary shadow-segment'
                      : 'bg-transparent text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  {LABELS[option]}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-line-subtle px-4 py-3">
            <div>
              <div id="notify" className="text-body-sm">
                Notify when updates are available
              </div>
              <div className="text-caption text-ink-tertiary">Once a day, after the scheduled check</div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={notify}
              aria-labelledby="notify"
              onClick={() => setNotify(!notify)}
              className={`relative inline-flex h-[18px] w-[30px] shrink-0 items-center rounded-full border-none p-0 transition-colors duration-fast ease-standard focus-visible:shadow-focus-ring focus-visible:outline-none ${
                notify ? 'bg-brand-coral' : 'bg-component-toggle-track'
              }`}
            >
              <span
                className={`absolute left-0.5 top-0.5 size-3.5 rounded-full shadow-knob transition-transform duration-fast ease-standard ${
                  notify ? 'translate-x-3 bg-component-toggle-knob-on' : 'bg-component-toggle-knob'
                }`}
              />
            </button>
          </div>
        </section>

        <section className="mt-6 rounded-big border border-line-subtle bg-surface-card p-4">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-app-icon bg-chart-series1 text-sm font-semibold text-white">
              Ex
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-headline">Example App</div>
              <div className="text-caption text-ink-tertiary">4.49.9 → 4.50.0 · 265 MB</div>
            </div>
            <span className="inline-flex h-5 items-center rounded-small bg-status-success-subtle px-[7px] text-[11px] font-medium text-status-success">
              Installed
            </span>
          </div>
          <div className="mt-4 flex gap-2.5">
            <button
              type="button"
              className="h-[34px] rounded-default border-none bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text transition-colors duration-fast ease-standard hover:bg-button-primary-hover focus-visible:shadow-focus-ring focus-visible:outline-none"
            >
              Update
            </button>
            <button
              type="button"
              className="h-[34px] rounded-default border-none bg-button-secondary-bg px-4 text-[13px] font-semibold text-button-secondary-text transition-colors duration-fast ease-standard hover:bg-button-secondary-hover focus-visible:shadow-focus-ring focus-visible:outline-none"
            >
              Release notes
            </button>
          </div>
          <p className="m-0 mt-4 text-caption text-ink-tertiary">Only on this device; nothing is uploaded.</p>
        </section>
      </div>
    </main>
  );
}
