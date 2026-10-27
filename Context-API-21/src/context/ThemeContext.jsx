import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const ThemeDataContext = createContext()    // 1.context is created

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')
  return (
    <div>
        {/* 2. Provide data */}
      <ThemeDataContext.Provider value={[theme, setTheme]}>  
      {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext

// now we have to wrap ThemeContext around App.jsx like we have done in BrowserRouter we have to use ThemeContext wrap so, we can use Context in whole code similarly like we want to use routing in our whole code

// if we don't wwrite a component is self closing tag and write in like h2,p then the inside tag are treated as the children of that and are stored in array format   {theme:'light' , children:Array(2)}

