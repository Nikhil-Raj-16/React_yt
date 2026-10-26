import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      {/* we have to create routes */}
      {/* <h1>Routing</h1> */}
      {/* in the navbar when we used anchor tags the page is getting reloaded after every routing so,to fix this we can use link tag by react-router-dom */}
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </div>
  )
}

export default App

// Routing is 
// 1. basic setup 
// 2. Nested routes
// 3. dynamic routes
// 4. usenavigate
// 5. 404 page


// It helps in making SPA(single page application)

// WE USE REACT ROUTER DOM TO use routing in our website, what is routing it means going inside a website like main website -> courses -> buy it 
// to use it we have to install it simillarly like axios for fetching API

// npm i react-router-dom   used to install react-router-dom

// react-router-dom gives multiple types of router
 
// 1. BrowserRouter - simplest , mostly used (90% times)  . used in frontend and for the client side
// A declarative <Router> using the browser History API for client-side routing.
// stores history in the browser


// eg. shreyians.com = /   , shreyians.com/courses = /courses
// sheryians.com/about = /about

// 2. HashRouter - 
// A declarative <Router> that stores the location in the hash portion of the URL so it is not sent to the server, aap kis route par hai server ko pata nahi chalta , so helps in keeping it hidden.


// eg. shreyians.com = /#/   , shreyians.com/courses = /#/courses
// sheryians.com/about = /#/about

// 3. MemoryRouter - stores history in the memory ,   used in react native
// A declarative <Router> that stores all entries in memory.

// 4. StaticRouter - used in next.js and remix.js   , used in making static website
// A <Router> that may not navigate to any other Location. This is useful on the server where there is no stateful UI.


// see in then main how to import BrowserRouter