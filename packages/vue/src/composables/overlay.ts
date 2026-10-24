// Shared overlay behavior (dialogs, sheets, palette, lightbox, menus): scroll lock, focus trapping, and script focus.

const FOCUSABLE = [
  'a[href]',
  'summary',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(', ');

// WebKit rings script focus unless the user clicked in this document first, so overlays the app opens itself (menu bar
// popover, deep links, startup prompts, routes) would ring their first control. Ring script focus only during keyboard
// navigation; shortcuts such as Command-K and bare modifier presses do not count.
const MODIFIERS = new Set(['Alt', 'CapsLock', 'Control', 'Meta', 'Shift']);
let keyboard = false;

if (typeof document !== 'undefined') {
  document.addEventListener(
    'keydown',
    event => {
      if (!event.metaKey && !event.ctrlKey && !event.altKey && !MODIFIERS.has(event.key)) keyboard = true;
    },
    true
  );
  document.addEventListener(
    'pointerdown',
    () => {
      keyboard = false;
    },
    true
  );
  // Returning from another window (the menu bar popover, another app) starts without keyboard navigation.
  window.addEventListener('blur', () => {
    keyboard = false;
  });
}

/** Whether the latest interaction in this window was keyboard navigation rather than a pointer. */
export function usingKeyboard(): boolean {
  return keyboard;
}

// Text fields show focus however it arrives, as native fields do.
const TEXT_ENTRY =
  'textarea, input:not([type="button"]):not([type="checkbox"]):not([type="radio"]):not([type="reset"]):not([type="submit"])';

/** Focus from script; only keyboard navigation (or a text field) shows the focus ring. */
export function moveFocus(element: HTMLElement | null | undefined): void {
  if (!element) return;
  if (keyboard || element.matches(TEXT_ENTRY)) element.focus();
  else element.focus({ focusVisible: false });
}

// Reference-count nested overlays; restore scrolling only after the final one closes.
let locks = 0;
let savedOverflow = '';

export function lockScroll(): void {
  if (locks === 0) {
    savedOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
  }
  locks += 1;
}

export function unlockScroll(): void {
  if (locks === 0) return;
  locks -= 1;
  if (locks === 0) document.documentElement.style.overflow = savedOverflow;
}

/** Tab-focusable descendants in document order. */
export function focusableIn(container: HTMLElement): HTMLElement[] {
  const candidates = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(element => {
    if (element.tabIndex < 0 || element.matches(':disabled, input[type="hidden"]')) return false;
    if (element.closest('[hidden], [inert], [aria-hidden="true"]')) return false;
    const style = getComputedStyle(element);
    if (style.visibility === 'hidden' || style.visibility === 'collapse') return false;
    // Ancestors can suppress layout even when the control itself has display:block.
    for (let ancestor: HTMLElement | null = element; ancestor; ancestor = ancestor.parentElement) {
      const ancestorStyle = getComputedStyle(ancestor);
      if (ancestorStyle.display === 'none' || ancestorStyle.contentVisibility === 'hidden') return false;
      if (ancestor.matches('details:not([open])')) {
        const summary = ancestor.querySelector(':scope > summary');
        if (!summary?.contains(element)) return false;
      }
    }
    return true;
  });
  // Named radios share one Tab stop within the same form and tree root.
  return candidates.filter(element => {
    if (!(element instanceof HTMLInputElement) || element.type !== 'radio' || !element.name) return true;
    const group = candidates.filter(
      (candidate): candidate is HTMLInputElement =>
        candidate instanceof HTMLInputElement &&
        candidate.type === 'radio' &&
        candidate.name === element.name &&
        candidate.form === element.form &&
        candidate.getRootNode() === element.getRootNode()
    );
    const tabStop =
      group.find(radio => radio.checked) ?? group.find(radio => radio === document.activeElement) ?? group[0];
    return element === tabStop;
  });
}

/** Cycle Tab inside the container; stay put if none are focusable. */
export function trapTab(event: KeyboardEvent, container: HTMLElement): void {
  const items = focusableIn(container);
  const first = items[0];
  const last = items.at(-1);
  if (!first || !last) {
    event.preventDefault();
    return;
  }
  const active = document.activeElement;
  const outside = !items.includes(active as HTMLElement);
  if (event.shiftKey && (active === first || outside)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (active === last || outside)) {
    event.preventDefault();
    first.focus();
  }
}
