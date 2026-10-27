import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
const App = () => {
  
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App



// data always pass from higher to lower as from App to Navbar using props
// if we want to pass data from lower to higher as from Navbar to App


// in the Navbar when we created the button click we have changed the theme value form light to dark by passing values from lower components to higher components


