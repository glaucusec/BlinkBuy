import { useState } from "react";

function useLocalStorage(key: string, initialValue: unknown) {
  const isWindowDefined = typeof window !== "undefined";

  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (isWindowDefined) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } else {
        return initialValue;
      }
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      if (isWindowDefined) {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      if (isWindowDefined) {
        window.localStorage.removeItem(key);
        setStoredValue(undefined);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
