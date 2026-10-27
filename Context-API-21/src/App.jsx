import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Button from './components/Button'

const App = () => {

  
  return (
    <div>
      {/* <Navbar theme={theme}/>  */}
      <Navbar/> 
      <Button />
    </div>
  )
}

export default App

// so using useState we send props to each components to have the same data shared which is tiring process and is not usable in large applications
