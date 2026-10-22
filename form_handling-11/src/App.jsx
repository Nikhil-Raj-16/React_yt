import React from 'react'

const App = () => {


  const submithandler = (e) => {
    e.preventDefault()
    console.log("Form submitted..");
    
  }
  return (

    <div>
      <form onSubmit={(e) => {
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
