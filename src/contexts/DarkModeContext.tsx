import { createContext, useContext } from "react";

interface DarkModeContextType {
  isDark: boolean;
  toggle: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  isDark: false,
  toggle: () => {},
});

export const useDarkModeContext = () => useContext(DarkModeContext);
