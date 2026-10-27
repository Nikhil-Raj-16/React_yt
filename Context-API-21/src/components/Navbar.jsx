import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    // ThemeDataContext is providing context so we can use them by useContext
    const [theme] = useContext(ThemeDataContext)
    // console.log(data);
    
  return (
    <div className={theme}>
        <h2>Shreyians</h2>
        <Nav2/>
    </div>
  )
}

export default Navbar

