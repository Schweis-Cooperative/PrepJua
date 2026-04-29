import { getStorageItem, setStorageItem } from './storage';
import type { ActivityEntry } from '../types/common';

export function logActivity(action: string, details: string): void {
  const entries = getStorageItem<ActivityEntry[]>('activityLog', []);
  
  const entry: ActivityEntry = {
    id: crypto.randomUUID(),
    action,
    details,
    timestamp: new Date().toISOString(),
  };
  
  entries.unshift(entry);
  
  // Keep only last 200 activities
  if (entries.length > 200) {
    entries.length = 200;
  }
  
  setStorageItem('activityLog', entries);
}

export function getActivities(): ActivityEntry[] {
  return getStorageItem<ActivityEntry[]>('activityLog', []);
}

export function clearActivities(): void {
  setStorageItem('activityLog', []);
}
