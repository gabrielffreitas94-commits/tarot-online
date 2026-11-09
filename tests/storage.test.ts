import { describe, it, expect, vi, beforeEach } from 'vitest';
import { safeGetStorage, safeSetStorage } from '../src/utils/storage.ts';

describe('Safe Storage Utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('reads and writes to localStorage normally when available', () => {
    safeSetStorage('test_key', 'hello');
    expect(safeGetStorage('test_key')).toBe('hello');
  });

  it('safely catches SecurityError or exceptions when localStorage is restricted', () => {
    const originalGetItem = Storage.prototype.getItem;
    const originalSetItem = Storage.prototype.setItem;

    // Simulate Safari private browsing or restricted iframe
    Storage.prototype.getItem = vi.fn().mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError');
    });
    Storage.prototype.setItem = vi.fn().mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError');
    });

    expect(() => safeSetStorage('restricted_key', 'value')).not.toThrow();
    expect(safeGetStorage('restricted_key')).toBeNull();

    // Restore
    Storage.prototype.getItem = originalGetItem;
    Storage.prototype.setItem = originalSetItem;
  });
});
