import { useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

export function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getStorageItem(key, defaultValue);
  });

  useEffect(() => {
    setStorageItem(key, storedValue);
  }, [key, storedValue]);

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue(prev => {
      const newValue = value instanceof Function ? value(prev) : value;
      return newValue;
    });
  }, []);

  return [storedValue, setValue];
}
