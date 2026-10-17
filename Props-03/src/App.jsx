import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className="Parent">
      <Card user='Harsh Sharma' age={25} />
      <Card user='Nikhil Raj' age={23}/>
     
    </div>
  )
}

export default App
