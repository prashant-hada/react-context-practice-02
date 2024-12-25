import React, { useEffect, useState } from 'react'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

function App() {
  const htmlElem = document.querySelector("html");
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    htmlElem.classList.remove("light","dark");
    htmlElem.classList.add(themeMode);
  },[themeMode])
  return (
    <ThemeContextProvider value = {{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
    </ThemeContextProvider>
  )
}

export default App