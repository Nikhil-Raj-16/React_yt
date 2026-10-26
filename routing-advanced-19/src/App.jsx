import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFoundpage from './pages/NotFoundpage'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Basket from './pages/Basket'
import BasketDetails from './pages/BasketDetails'
import Navbar2 from './components/Navbar2'





const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      {/* <Home /> */}
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* Nested routing */}
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>

        <Route path='/basket' element={<Basket/>}/>
        {/* Dynamic Routing that after basket we write anything we go the basket details */}
        <Route path='/basket/:id' element={<BasketDetails/>}/>   
        {/* Normal route */}
        {/* <Route path='/product' element={<Product/>}/>
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/> */}
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFoundpage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
