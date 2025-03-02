import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider; //for wrapping app.jsx

//custom hook which is just a function which will return usecontext

export default function useTheme() {
  return useContext(ThemeContext);
}
