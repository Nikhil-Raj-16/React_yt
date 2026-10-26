import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Women from './Women'
import Men from './Men'
import Kids from './Kids'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link to='/product/men' element={<Men/>}>Men</Link>
            <Link to='/product/women' element={<Women/>}>Women</Link>
            <Link to='/product/kids' element={<Kids/>}>Kids</Link>
        </div>
      {/* <h1>Product</h1> */}
      <Outlet/>
    </div>
  )
}

export default Product
