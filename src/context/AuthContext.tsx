"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type AuthContextType = {
  authenticated: boolean;
  setValueHandler: (newValue: unknown) => void;
  removeValueHandler: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  setValueHandler: () => {},
  removeValueHandler: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [storedValue, setValue, removeValue] = useLocalStorage("user", "");

  useEffect(() => {
    !storedValue ? setAuthenticated(false) : setAuthenticated(true);
  }, [storedValue]);

  const authValue: AuthContextType = {
    authenticated: authenticated,
    setValueHandler: (newValue: unknown) => setValue(newValue),
    removeValueHandler: () => removeValue(),
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
