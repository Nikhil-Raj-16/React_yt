import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <h3>Shreyians</h3>
        <div>

            {/* by using links prevent the page form reloading, which makes it a single page appn */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>


          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
