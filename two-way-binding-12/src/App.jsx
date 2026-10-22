import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const submithandler = (e) => {
    e.preventDefault()
    console.log("Form submitted by :" , title);

    setTitle('')
    
  }
  return (

    <div>
      <form onSubmit={(e) => {
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter your name' value={title} onChange={(e) => {
          // console.log(e.target.value);
          setTitle(e.target.value)
          
          // this is how we involve react in this, called TWO-WAY-BINDING, in which we do not do the thing directly we tell react to do the thing, form ke andar ke data ko change karna ya form ke data ko use karna then we use two way binding. application is notes app project  
          
        }}/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App



// jo bhi input mei likhna chahte hai woh hum directly nahi likhe we do it by help of react

