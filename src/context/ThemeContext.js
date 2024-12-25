import {useContext, createContext} from "react"

export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider;

const useThemeContext = ()=> useContext(ThemeContext);

export default useThemeContext;