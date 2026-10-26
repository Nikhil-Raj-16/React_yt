import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#D1AC88] px-10 py-5'>
      <h2 className='text-xl text-white font-bold'>MAX Fashion</h2>
      <div className='flex gap-8 text-white'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
        <Link className='text-lg font-medium' to='/basket'>Basket</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
        {/* <a className='text-lg font-medium' href="/">Home</a> */}
        {/* <a className='text-lg font-medium' href="/about">About</a> */}
        {/* <a className='text-lg font-medium' href="/product">Product</a> */}
        {/* <a className='text-lg font-medium' href="/contact">Contact</a> */}
      </div>
    </div>
  )
}

export default Navbar
