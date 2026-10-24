import React, {useState} from 'react'
import axios from 'axios'

const App = () => {

  // async function getData(){
  //   // console.log('Data aa gaya');

  //   // API calling through fetch
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     // JS here is Asynchronous and it takes time for data to get fetched that is why it shows in the form of promise , so to solve this we can use async await to make it synchronous process
  //   console.log(response);
    
    
  // }


  // using that data which is received as response from axios

  const [data, setData] = useState([])


  const getData = async ()=>{
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/')

    // const data = await response.json()
    // console.log(data);


    //data calling through axios

    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    // object mila isliye object ke andar data likha as {data}
    // console.log(response);
    // console.log(data);

    const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response.data);   // in the form of array of objects

    setData(response.data)

    // how to manaage that data


    


    
  }



  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map(function(elem,idx){

          return <h1>{idx} Hello, {elem.author}</h1>
        })}
      </div>
    </div>
  )
}

export default App

// frontend and backend are connected by API, it is like a waiter in restaurant which makes connection between customer and chef that what they want to eat.

// the frontend requests data from the backend, and the backend sends the response back to the frontend.

// The Frontend initiates: The user interacts with the user interface (a browser, mobile app, etc.), which triggers an HTTP request (such as a GET, POST, or PUT) sent to the backend API.

// The Backend processes: The backend server receives the request, queries a database or executes business logic, and prepares the resulting payload.

// The Backend responds: The server returns an HTTP response containing a status code (like 200 OK) and the requested data (typically as JSON) back to the frontend.