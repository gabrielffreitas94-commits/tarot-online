/**
 * Safe localStorage wrapper that handles SecurityError / DOMException
 * in strict environments such as Safari Private Mode or sandboxed iframes.
 */
export function safeGetStorage(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch {
    // Ignore security/storage exceptions
  }
  return null;
}

export function safeSetStorage(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // Ignore quota/security exceptions
  }
}
