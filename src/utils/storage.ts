import localforage from 'localforage';

const PREFIX = 'prepjua_';

// Configure localforage to use IndexedDB with a fallback chain
localforage.config({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'PrepJua',
  storeName: 'progress',
  description: 'PrepJua user progress and collections',
});

// ─── Synchronous localStorage helpers (for initial hydration only) ─────

/**
 * Synchronous read from localStorage.
 * Used ONLY for initial React state hydration (useState initializer).
 * All subsequent writes go through async IndexedDB via `setStorageItemAsync`.
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(PREFIX + key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

/**
 * @deprecated Use setStorageItemAsync for all new code.
 * Kept for backward compatibility during migration.
 */
export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

export function removeStorageItem(key: string): void {
  localStorage.removeItem(PREFIX + key);
}

// ─── Async IndexedDB helpers (primary storage layer) ───────────────────

/**
 * Async write to IndexedDB via localforage.
 * Also mirrors to localStorage for fast synchronous hydration on next load.
 */
export async function setStorageItemAsync<T>(key: string, value: T): Promise<void> {
  try {
    // Write to IndexedDB (async, non-blocking)
    await localforage.setItem(PREFIX + key, value);
    // Mirror to localStorage for fast sync hydration
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {
      // localStorage quota exceeded — IndexedDB has it, so this is fine
    }
  } catch (e) {
    console.error(`[storage] Failed to save "${key}" to IndexedDB:`, e);
    // Fallback: try localStorage directly
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {
      // Both failed — data loss risk, but do not crash
    }
  }
}

/**
 * Async read from IndexedDB via localforage.
 * Falls back to localStorage if IndexedDB has no value (migration path).
 */
export async function getStorageItemAsync<T>(key: string, defaultValue: T): Promise<T> {
  try {
    const value = await localforage.getItem<T>(PREFIX + key);
    if (value !== null && value !== undefined) {
      return value;
    }
    // Fallback: check localStorage (handles migration from old data)
    const lsItem = localStorage.getItem(PREFIX + key);
    if (lsItem) {
      const parsed = JSON.parse(lsItem) as T;
      // Migrate to IndexedDB for future reads
      await localforage.setItem(PREFIX + key, parsed);
      return parsed;
    }
    return defaultValue;
  } catch {
    return defaultValue;
  }
}

// ─── Export / Import / Backup ──────────────────────────────────────────

export function exportAllData(): string {
  const data: Record<string, unknown> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(PREFIX)) {
      try {
        data[key] = JSON.parse(localStorage.getItem(key) || '');
      } catch {
        data[key] = localStorage.getItem(key);
      }
    }
  }
  return JSON.stringify(data, null, 2);
}

export function importAllData(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    if (typeof data !== 'object' || data === null) return false;

    // Clear existing prepjua data
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    // Import new data to both localStorage and IndexedDB
    Object.entries(data).forEach(([key, value]) => {
      const strValue = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, strValue);
      localforage.setItem(key, value).catch(() => {});
    });

    return true;
  } catch {
    return false;
  }
}

export function downloadBackup(): void {
  const data = exportAllData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'prepjua-backup.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function uploadBackup(): Promise<boolean> {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) { resolve(false); return; }
      try {
        const text = await file.text();
        const success = importAllData(text);
        resolve(success);
      } catch {
        resolve(false);
      }
    };
    input.click();
  });
}
